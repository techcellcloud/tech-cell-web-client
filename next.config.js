/** @type {import('next').NextConfig} */
const path = require('path');

const nextConfig = {
    sassOptions: {
        includePaths: [path.join(__dirname, 'styles')],
    },
    images: {
        domains: ['res.cloudinary.com'],
    },
    env: {
        API_ENDPOINT: process.env.API_BASE_URL,
    },

    modularizeImports: {
        '@mui/icons-material': {
            transform: '@mui/icons-material/{{member}}',
        },
        // '@mui/material': {
        //     transform:
        //         '{{#if (eq member "useTheme")}}@components/Theme/useTheme{{else}}@mui/material/{{member}}{{/if}}',
        // },
    },

    webpack(config) {
        config.module.rules.push({
            test: /\.svg$/,
            use: [{ loader: '@svgr/webpack', options: { icon: true } }],
        });
        return config;
    },
};

module.exports = nextConfig;
