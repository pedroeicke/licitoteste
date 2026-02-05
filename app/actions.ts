'use server'

import fs from 'fs';
import path from 'path';

export async function getLogos() {
    try {
        const logosDir = path.join(process.cwd(), 'public', 'logos');
        if (!fs.existsSync(logosDir)) {
            return [];
        }
        const files = fs.readdirSync(logosDir);
        const imageExtensions = ['.png', '.jpg', '.jpeg', '.svg', '.webp'];

        const logos = files
            .filter(file => imageExtensions.includes(path.extname(file).toLowerCase()))
            .map(file => `/logos/${file}`);

        return logos;
    } catch (error) {
        console.error('Error reading logos directory:', error);
        return [];
    }
}
