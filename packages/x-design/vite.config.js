import { defineConfig } from 'vite';
import { fileURLToPath, URL } from 'node:url';
import vue from '@vitejs/plugin-vue';
import { resolve } from 'path';
import dts from 'vite-plugin-dts';

export default defineConfig({
    plugins: [
        vue(),
        
        dts({
            entryRoot: resolve(__dirname, '../'),
            
            outDir: resolve(__dirname, 'dist', 'typings'),
        }),
    ],
    resolve: {
        alias: {
            '@': fileURLToPath(new URL('../', import.meta.url)),
        },
    },
    build: {
        rollupOptions: {
            external: ['vue'],
            output: {
                globals: {
                    vue: 'Vue',
                },
                exports: 'named',
            },
        },
        lib: {
            entry: {
                'x-design': resolve(__dirname, 'index.ts'),
                ui: resolve(__dirname, 'ui.ts'),
                // directives: resolve(__dirname, 'directives.ts'),
                // hooks: resolve(__dirname, 'hooks.ts'),
                locales: resolve(__dirname, 'locales.ts'),
                // tokens: resolve(__dirname, 'tokens.ts'),
            },
            formats: ['es', 'cjs'],
        },
    },
});
