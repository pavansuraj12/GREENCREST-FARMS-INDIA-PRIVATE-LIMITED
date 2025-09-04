import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'
import path from 'path'

// https://vitejs.dev/config/
export default defineConfig({
    plugins: [react()],
    base: '/GREENCREST-FARMS-INDIA-PRIVATE-LIMITED/',
    resolve: {
        alias: {
            "@": path.resolve(__dirname, "./src"),
        },
    },
    assetsInclude: ['**/*.MOV', '**/*.mov', '**/*.JPG', '**/*.jpg', '**/*.PNG', '**/*.png'],
})