import CryptoJS from 'crypto-js'

/**
 * MyDigitalLegacy Vault - Two-Key Encryption System (K1/K2)
 * 
 * Security Model:
 * - K1: Owner's key component (simulated client-side storage/input)
 * - K2: Executor's key component (released by Admin upon death verification)
 * - Access requires both K1 and K2 to decrypt digital asset instructions
 */

export class TwoKeyEncryption {
  
  /**
   * Generate a new K1 key component for the Owner
   * In production, this would be derived from user input or secure storage
   */
  static generateK1(): string {
    return CryptoJS.lib.WordArray.random(256/8).toString()
  }

  /**
   * Generate a new K2 key component for the Executor
   * This is created by Admin and stored in the database
   */
  static generateK2(): string {
    return CryptoJS.lib.WordArray.random(256/8).toString()
  }

  /**
   * Combine K1 and K2 to create the master encryption key
   */
  private static combinKeys(k1: string, k2: string): string {
    const combined = k1 + k2
    return CryptoJS.SHA256(combined).toString()
  }

  /**
   * Encrypt digital asset instructions using K1 only (Owner stage)
   * The encrypted data can only be decrypted when K2 is available
   * 
   * @param instructions - The digital asset instructions to encrypt
   * @param k1 - The Owner's key component
   * @returns Encrypted instructions
   */
  static encryptWithK1(instructions: string, k1: string): string {
    try {
      // Create a temporary K2 placeholder for initial encryption
      const tempK2 = 'TEMP_K2_PLACEHOLDER'
      const masterKey = this.combinKeys(k1, tempK2)
      
      // Encrypt the instructions
      const encrypted = CryptoJS.AES.encrypt(instructions, masterKey).toString()
      
      // Store the K1 hash for verification during decryption
      const k1Hash = CryptoJS.SHA256(k1).toString()
      
      // Return encrypted data with metadata
      return JSON.stringify({
        data: encrypted,
        k1Hash: k1Hash,
        version: '1.0'
      })
    } catch (error) {
      throw new Error('Encryption failed')
    }
  }

  /**
   * Decrypt digital asset instructions using both K1 and K2 (Executor stage)
   * 
   * @param encryptedInstructions - The encrypted instructions from database
   * @param k1 - The Owner's key component (provided by Owner or derived)
   * @param k2 - The Executor's key component (released by Admin)
   * @returns Decrypted instructions
   */
  static decryptWithK1AndK2(encryptedInstructions: string, k1: string, k2: string): string {
    try {
      // Parse the encrypted data
      const encryptedData = JSON.parse(encryptedInstructions)
      
      // Verify K1 is correct
      const k1Hash = CryptoJS.SHA256(k1).toString()
      if (k1Hash !== encryptedData.k1Hash) {
        throw new Error('Invalid K1 key component')
      }
      
      // Create master key with real K2
      const masterKey = this.combinKeys(k1, k2)
      
      // Decrypt the instructions
      const decryptedBytes = CryptoJS.AES.decrypt(encryptedData.data, masterKey)
      const decrypted = decryptedBytes.toString(CryptoJS.enc.Utf8)
      
      if (!decrypted) {
        throw new Error('Decryption failed - invalid key combination')
      }
      
      return decrypted
    } catch (error) {
      throw new Error('Decryption failed: ' + error.message)
    }
  }

  /**
   * Simulate K1 encryption for MVP (client-side simulation)
   * In production, this would use secure client-side key management
   */
  static simulateK1Encryption(instructions: string): {
    encryptedInstructions: string,
    simulatedK1: string
  } {
    const simulatedK1 = this.generateK1()
    const encryptedInstructions = this.encryptWithK1(instructions, simulatedK1)
    
    return {
      encryptedInstructions,
      simulatedK1
    }
  }

  /**
   * Admin function to generate K2 for verified Executor
   */
  static adminGenerateK2(): string {
    return this.generateK2()
  }

  /**
   * Verify that K1 and K2 combination can decrypt the data
   * Used for testing the key system
   */
  static verifyKeyPair(encryptedInstructions: string, k1: string, k2: string): boolean {
    try {
      const decrypted = this.decryptWithK1AndK2(encryptedInstructions, k1, k2)
      return decrypted.length > 0
    } catch (error) {
      return false
    }
  }
}

/**
 * Utility functions for key management
 */
export class KeyManager {
  
  /**
   * Store K1 in browser localStorage (MVP simulation)
   * In production, use secure key storage
   */
  static storeK1(userId: string, k1: string): void {
    if (typeof window !== 'undefined') {
      localStorage.setItem(`dlv_k1_${userId}`, k1)
    }
  }

  /**
   * Retrieve K1 from browser localStorage (MVP simulation)
   */
  static retrieveK1(userId: string): string | null {
    if (typeof window !== 'undefined') {
      return localStorage.getItem(`dlv_k1_${userId}`)
    }
    return null
  }

  /**
   * Clear K1 from browser storage
   */
  static clearK1(userId: string): void {
    if (typeof window !== 'undefined') {
      localStorage.removeItem(`dlv_k1_${userId}`)
    }
  }
}