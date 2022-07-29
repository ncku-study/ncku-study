/* eslint-disable @typescript-eslint/no-var-requires */
const path = require('path');

/** @type {import('next').NextConfig} */
const nextConfig = {
    reactStrictMode: true,
    swcMinify: true,
    sassOptions: {
        includePaths: [path.join(__dirname, 'styles')],
    },
    webpack: (config) => {
        config.module.resolve.push({
            alias: {
                '~': path.resolve(__dirname, '.'),
                Client: path.resolve(__dirname, 'src'),
                Server: path.resolve(__dirname, 'database'),
            },
        });
        return config;
    },
};

module.exports = nextConfig;
