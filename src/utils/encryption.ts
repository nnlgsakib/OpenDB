import crypto from 'crypto';

// Function to encrypt data using AES
export function encryptData(data: string, key: string): string {
    const cipher = crypto.createCipher('aes-256-cbc', key);
    let encrypted = cipher.update(data, 'utf8', 'hex');
    encrypted += cipher.final('hex');
    return encrypted;
}

// Function to decrypt data using AES
export function decryptData(encryptedData: string, key: string): string {
    const decipher = crypto.createDecipher('aes-256-cbc', key);
    let decrypted = decipher.update(encryptedData, 'hex', 'utf8');
    decrypted += decipher.final('utf8');
    return decrypted;
}

// Function to encrypt hash using Keccak (SHA-3)
export function keccak256(data: string): string {
    const hash = crypto.createHash('sha3-256');
    hash.update(data);
    return hash.digest('hex');
}
