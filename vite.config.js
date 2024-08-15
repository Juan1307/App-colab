import { defineConfig } from 'vite';
import vue from '@vitejs/plugin-vue';

// node
import path from 'node:path';
import {fileURLToPath} from 'node:url';
const __dirname = fileURLToPath(new URL('.', import.meta.url));

// https://vitejs.dev/config/
export default defineConfig({
    plugins: [
        vue(),
    ],
    resolve: {
        alias: [
            { find: '@', replacement: path.resolve(__dirname, 'src/') },
            { find: '@assets', replacement: path.resolve(__dirname, 'src/assets') },
            { find: '@components', replacement: path.resolve(__dirname, 'src/components') },
            { find: '@composables', replacement: path.resolve(__dirname, 'src/composables') },
            { find: '@utils', replacement: path.resolve(__dirname, 'src/utils') },
            { find: '@pages', replacement: path.resolve(__dirname, 'src/pages') },
            { find: '@router', replacement: path.resolve(__dirname, 'src/router') },
            { find: '@services', replacement: path.resolve(__dirname, 'src/services') },
        ]
    },
    server: {
        port: 3000
    }
});
