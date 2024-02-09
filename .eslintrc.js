module.exports = {
    root: true,
    env: {
        node: true
    },
    'extends': [
        'plugin:vue/vue3-essential',
        'eslint:recommended',
    ],
    parserOptions: {
        ecmaVersion: 2020
    },
    rules: {
        'no-console': process.env.NODE_ENV === 'production' ? 'warn' : 'off',
        'no-debugger': process.env.NODE_ENV === 'production' ? 'warn' : 'off',
        'vue/multi-word-component-names': 'off',
        'vue/no-deprecated-v-bind-sync': 'off',
        'vue/no-deprecated-slot-attribute': 'off',
        'vue/no-v-for-template-key-on-child': 'off',
        'vue/require-v-for-key': 'off',
        'vue/require-slots-as-functions': 'off',
        'vue/v-slot-style': 'off',
        'vue/first-attribute-linebreak': 'off',
        'vue/attributes-order': 'off',
        'vue/max-attributes-per-line': 'off',
        'vue/html-indent': 'off',
        'vue/html-self-closing': 'off',
        'vue/require-explicit-emits': 'off',
        'vue/html-closing-bracket-spacing': 'off',
        'vue/html-closing-bracket-newline': 'off',
        'vue/singleline-html-element-content-newline': 'off',
        'vue/component-definition-name-casing': 'off',
        'vue/require-default-prop': 'off',
        'vue/order-in-components': 'off',
        'vue/require-prop-types': 'off',
        'vue/multiline-html-element-content-newline': 'off',
    },
    ignorePatterns: ["*/_pb.js","src/App.vue"],
}