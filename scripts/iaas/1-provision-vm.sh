#!/usr/bin/env bash
set -euo pipefail

# Provision Azure base infrastructure for ICT171 Cloud Project

require_cmd() {
    if ! command -v "$1" >/dev/null 2>&1; then
        echo "ERROR: required command '$1' not found."
        exit 1
    fi
}

require_cmd az
require_cmd curl

RESOURCE_GROUP="${RESOURCE_GROUP:-rg-dlv-mvp-prod}"
LOCATION="${LOCATION:-australiaeast}"
VM_NAME="${VM_NAME:-vm-dlv-mvp-prod}"
ADMIN_USER="${ADMIN_USER:-azureuser}"
VNET_NAME="${VNET_NAME:-vnet-dlv-mvp-prod}"
SUBNET_NAME="${SUBNET_NAME:-snet-dlv-mvp-prod}"
NSG_NAME="${NSG_NAME:-nsg-dlv-mvp-prod}"
PIP_NAME="${PIP_NAME:-pip-dlv-mvp-prod}"
NIC_NAME="${NIC_NAME:-nic-dlv-mvp-prod}"
VM_SIZE="${VM_SIZE:-Standard_B1ms}"
SUBSCRIPTION_ID="${SUBSCRIPTION_ID:-}"

MY_IP="${MY_IP:-$(curl -s https://api.ipify.org)}"
SSH_CIDR="${SSH_CIDR:-${MY_IP}/32}"

echo "Using resource group: ${RESOURCE_GROUP}"
echo "Using location: ${LOCATION}"
echo "SSH restricted to: ${SSH_CIDR}"

if ! az account show >/dev/null 2>&1; then
    echo "ERROR: Azure CLI is not logged in. Run 'az login' first."
    exit 1
fi

if [[ -n "${SUBSCRIPTION_ID}" ]]; then
    az account set --subscription "${SUBSCRIPTION_ID}"
fi

echo "Active Azure subscription:"
az account show --query '{name:name,id:id}' -o table

if [[ "$(az group exists --name "${RESOURCE_GROUP}" -o tsv)" != "true" ]]; then
    az group create --name "${RESOURCE_GROUP}" --location "${LOCATION}" -o table
else
    echo "Resource group already exists: ${RESOURCE_GROUP}"
fi

if ! az network nsg show --resource-group "${RESOURCE_GROUP}" --name "${NSG_NAME}" >/dev/null 2>&1; then
    az network nsg create \
        --resource-group "${RESOURCE_GROUP}" \
        --name "${NSG_NAME}" \
        --location "${LOCATION}" \
        -o table
else
    echo "NSG already exists: ${NSG_NAME}"
fi

ensure_nsg_rule() {
    local rule_name="$1"
    local priority="$2"
    local source="$3"
    local port="$4"

    if ! az network nsg rule show \
        --resource-group "${RESOURCE_GROUP}" \
        --nsg-name "${NSG_NAME}" \
        --name "${rule_name}" >/dev/null 2>&1; then
        az network nsg rule create \
            --resource-group "${RESOURCE_GROUP}" \
            --nsg-name "${NSG_NAME}" \
            --name "${rule_name}" \
            --priority "${priority}" \
            --access Allow \
            --direction Inbound \
            --protocol Tcp \
            --source-address-prefixes "${source}" \
            --source-port-ranges "*" \
            --destination-address-prefixes "*" \
            --destination-port-ranges "${port}" \
            -o table
    else
        echo "NSG rule already exists: ${rule_name}"
    fi
}

ensure_nsg_rule "Allow-SSH-From-My-IP" 1000 "${SSH_CIDR}" 22
ensure_nsg_rule "Allow-HTTP" 1010 "*" 80
ensure_nsg_rule "Allow-HTTPS" 1020 "*" 443

if ! az network vnet show --resource-group "${RESOURCE_GROUP}" --name "${VNET_NAME}" >/dev/null 2>&1; then
    az network vnet create \
        --resource-group "${RESOURCE_GROUP}" \
        --name "${VNET_NAME}" \
        --address-prefix "10.10.0.0/16" \
        --subnet-name "${SUBNET_NAME}" \
        --subnet-prefix "10.10.1.0/24" \
        --location "${LOCATION}" \
        -o table
else
    echo "VNet already exists: ${VNET_NAME}"
fi

if ! az network public-ip show --resource-group "${RESOURCE_GROUP}" --name "${PIP_NAME}" >/dev/null 2>&1; then
    az network public-ip create \
        --resource-group "${RESOURCE_GROUP}" \
        --name "${PIP_NAME}" \
        --sku Standard \
        --allocation-method Static \
        --version IPv4 \
        --location "${LOCATION}" \
        -o table
else
    echo "Public IP already exists: ${PIP_NAME}"
fi

if ! az network nic show --resource-group "${RESOURCE_GROUP}" --name "${NIC_NAME}" >/dev/null 2>&1; then
    az network nic create \
        --resource-group "${RESOURCE_GROUP}" \
        --name "${NIC_NAME}" \
        --vnet-name "${VNET_NAME}" \
        --subnet "${SUBNET_NAME}" \
        --network-security-group "${NSG_NAME}" \
        --public-ip-address "${PIP_NAME}" \
        --location "${LOCATION}" \
        -o table
else
    echo "NIC already exists: ${NIC_NAME}"
fi

if ! az vm show --resource-group "${RESOURCE_GROUP}" --name "${VM_NAME}" >/dev/null 2>&1; then
    az vm create \
        --resource-group "${RESOURCE_GROUP}" \
        --name "${VM_NAME}" \
        --nics "${NIC_NAME}" \
        --image Canonical:ubuntu-24_04-lts:server:latest \
        --size "${VM_SIZE}" \
        --admin-username "${ADMIN_USER}" \
        --authentication-type ssh \
        --generate-ssh-keys \
        -o table
else
    echo "VM already exists: ${VM_NAME}"
fi

VM_PUBLIC_IP="$(az network public-ip show --resource-group "${RESOURCE_GROUP}" --name "${PIP_NAME}" --query ipAddress -o tsv)"

echo ""
echo "Provisioning complete."
echo "VM public IP: ${VM_PUBLIC_IP}"
echo "SSH command: ssh ${ADMIN_USER}@${VM_PUBLIC_IP}"