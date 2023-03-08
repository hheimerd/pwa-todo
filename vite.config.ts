import {defineConfig} from 'vite';
import react from '@vitejs/plugin-react-swc';
import {VitePWA} from 'vite-plugin-pwa';

export default defineConfig({
    plugins: [
        react(),
        VitePWA({
            registerType: 'autoUpdate',
            manifest: {
                "name": "Progressive Todo",
                "short_name": "Todo",
                "theme_color": "#2e2e2e",
                "background_color": "#3778c4",
                "display": "standalone",
                "scope": "/",
                "start_url": ".",
                "icons": [
                    {
                        "src": "assets/icons/icon-48x48.png",
                        "sizes": "48x48",
                        "type": "image/png",
                        "purpose": "any"
                    },
                    {
                        "src": "assets/icons/icon-72x72.png",
                        "sizes": "72x72",
                        "type": "image/png",
                        "purpose": "any"
                    },
                    {
                        "src": "assets/icons/icon-96x96.png",
                        "sizes": "96x96",
                        "type": "image/png",
                        "purpose": "any"
                    },
                    {
                        "src": "assets/icons/icon-128x128.png",
                        "sizes": "128x128",
                        "type": "image/png",
                        "purpose": "any"
                    },
                    {
                        "src": "assets/icons/icon-144x144.png",
                        "sizes": "144x144",
                        "type": "image/png",
                        "purpose": "any"
                    },
                    {
                        "src": "assets/icons/icon-152x152.png",
                        "sizes": "152x152",
                        "type": "image/png",
                        "purpose": "maskable"
                    },
                    {
                        "src": "assets/icons/icon-192x192.png",
                        "sizes": "192x192",
                        "type": "image/png",
                        "purpose": "maskable"
                    },
                    {
                        "src": "assets/icons/icon-512x512.png",
                        "sizes": "512x512",
                        "type": "image/png",
                        "purpose": "maskable"
                    }
                ]
            },
            workbox: {
                globPatterns: ['**/*.{js,css,html,ico,png,svg}'],
                cacheId: 'cache-v1',
            },

        })
    ],
});
