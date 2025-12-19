// ipCrypto.ts
import crypto from 'crypto'

const SECRET_KEY = crypto.createHash('sha256').update('666666').digest()

const IV = Buffer.alloc(16, 0) // 固定 IV（简单场景可接受）

export function encryptIP(ip: string): string {
  const cipher = crypto.createCipheriv('aes-256-cbc', SECRET_KEY, IV)
  let encrypted = cipher.update(ip, 'utf8', 'base64')
  encrypted += cipher.final('base64')
  return encrypted
}

export function decryptIP(encrypted: string): string {
  const decipher = crypto.createDecipheriv('aes-256-cbc', SECRET_KEY, IV)
  let decrypted = decipher.update(encrypted, 'base64', 'utf8')
  decrypted += decipher.final('utf8')
  return decrypted
}

export function base64Encode(str: string): string {
  return Buffer.from(str, 'utf-8').toString('base64')
}

export function base64Decode(encodedStr: string): string {
  return Buffer.from(encodedStr, 'base64').toString('utf-8')
}
