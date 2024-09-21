'use server';
import bcrypt from "bcryptjs";
import crypto, { randomBytes } from "crypto";
import jwt from 'jsonwebtoken';


// Generate a 6-digit random code
export const generateSixDigitCode = (): number => {
    const randomNumber = Math.floor(Math.random() * 1000000);
    // Ensure it's always 6 digits by padding with zeros if necessary
    const sixDigitCode = randomNumber.toString().padStart(6, "0");
    return parseInt(sixDigitCode, 10);
};

export async function generatePassword() {
    const buffer = randomBytes(3); // 3 bytes will be enough for a six-digit number

    // Convert buffer to a number
    const randomValue = buffer.readUIntBE(0, 3);

    // Map the number to a six-digit range
    const sixDigitNumber = 100000 + (randomValue % 900000);

    return sixDigitNumber;
}

// Hash the password (or auto-generated password)
interface HashPasswordProps {
    code: string;  // should be a string (password)
    saltRounds?: number; // Optional, default to 10
}

export const hashPassword = async ({ code, saltRounds = 10 }: HashPasswordProps): Promise<string> => {
    try {
        // Hash the auto-generated password (should already be a string)
        const hash = await bcrypt.hash(code, saltRounds);
        return hash;
    } catch (err) {
        console.error("Error hashing password:", err);
        throw err; // Re-throw error to handle it outside
    }
};

// Compare plain password with the hashed password
export const comparePassword = async (plainPassword: string, hashedPassword: string): Promise<boolean> => {
    try {
        const isMatch = await bcrypt.compare(plainPassword, hashedPassword);
        return isMatch; // returns true if passwords match, false otherwise
    } catch (err) {
        console.error("Error comparing passwords:", err);
        throw err; // Re-throw error to handle it outside
    }
};


const SECRET_KEY = process.env.SECRET_KEY || 'your-secret-key';

// Function to generate a JWT with a 1-hour expiration time
export const generateToken = (email: string) => {
  const token = jwt.sign({ email }, SECRET_KEY, { expiresIn: '1h' });
  return token;
};

