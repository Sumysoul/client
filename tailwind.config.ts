import type { Config } from 'tailwindcss';

const config: Config = {
    content: [
        './src/**/*.{js,ts,jsx,tsx,mdx}',
    ],
    theme: {
        extend: {
            backgroundImage: {
                'linear-gradient-1': 'linear-gradient(270deg, rgba(197, 197, 198, 1) 25%, rgba(0, 0, 0, 0) 100%)',
            },
        },
    },
    plugins: [],
};
export default config;
