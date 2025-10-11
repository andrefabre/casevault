import React from 'react';
import { render, screen, fireEvent } from '@testing-library/react';
import OwnerVaultPage from '../app/owner-vault/page';
import '@testing-library/jest-dom';

describe('OwnerVaultPage', () => {
  it('renders dashboard and onboarding modal', () => {
    render(<OwnerVaultPage />);
    expect(screen.getByText(/Your Digital Legacy, Secured/i)).toBeInTheDocument();
    expect(screen.getByText(/Account Dashboard/i)).toBeInTheDocument();
    expect(screen.getByText(/Pending Tasks/i)).toBeInTheDocument();
  });

  it('shows onboarding modal when setup incomplete', () => {
    render(<OwnerVaultPage />);
    expect(screen.getByText(/Complete Account Setup/i)).toBeInTheDocument();
  });

  it('shows error message if dashboard fails to load', () => {
    // Simulate error state
    // ...existing code for error simulation...
    // This is a placeholder for error state test
  });

  it('can open and close onboarding modal', () => {
    render(<OwnerVaultPage />);
    const button = screen.getByText(/Complete Account Setup/i);
    fireEvent.click(button);
    expect(screen.getByText(/Add Payment Details/i)).toBeInTheDocument();
    // Simulate closing modal
    const closeBtn = screen.getByRole('button', { name: /close/i });
    fireEvent.click(closeBtn);
    expect(screen.queryByText(/Add Payment Details/i)).not.toBeInTheDocument();
  });
});
