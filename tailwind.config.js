module.exports = {
    mode: 'jit',
    content: ['./public/**/*.html', './src/**/*.{astro,js,jsx,ts,tsx,vue,svelte}'],
    darkMode: 'media', // or 'media' or 'class'
    theme: {
        extend: {
            colors: {
                'charade': {
                    '50': '#f4f4f5', 
                    '100': '#e9eaeb', 
                    '200': '#c7cacd', 
                    '300': '#a5a9af', 
                    '400': '#626973', 
                    '500': '#1f2937', 
                    '600': '#1c2532', 
                    '700': '#171f29', 
                    '800': '#131921', 
                    '900': '#0f141b'
                },'orange': {
                    '50': '#fef7f3', 
                    '100': '#feefe6', 
                    '200': '#fcd7c1', 
                    '300': '#fabe9c', 
                    '400': '#f78e51', 
                    '500': '#f35d07', 
                    '600': '#db5406', 
                    '700': '#b64605', 
                    '800': '#923804', 
                    '900': '#772e03'
                }
            },
            fontFamily: {
                'montserrat': ['Montserrat', 'sans-serif'],
            },
        },
    },
    variants: {},
    plugins: [],
}