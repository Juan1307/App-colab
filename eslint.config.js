import js from '@eslint/js';
import eslintpluginvue from 'eslint-plugin-vue';
import stylisticJs from '@stylistic/eslint-plugin-js';

export default [
    js.configs.recommended,
    ...eslintpluginvue.configs['flat/recommended'],
    {
        plugins: {
            '@stylistic/js': stylisticJs,
        },
        rules: {
            '@stylistic/js/indent': ['warn', 4], // indentado
            '@stylistic/js/semi': ['warn', 'always'], // que siempre termine en ;
            '@stylistic/js/quotes': ['warn', 'single'], // '' solo comillas simples
            'vue/html-indent': ['warn', 4], // indentado en vue - 4 
            'vue/require-default-prop': 'off', // vlor por defecto
            'vue/multi-word-component-names': ['error', {
                'ignores': ['Main']
            }],
            'no-used-vars':['warn']
        }
    }
];