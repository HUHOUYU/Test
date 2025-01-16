module.exports = {
    env: {
        browser: true,
        es2023: true,
        node: true,
    },
    parser: 'vue-eslint-parser',
    parseroptions: {
        ecmaVersion: 'lastest',
        sourceType: 'module',
    },
    extends: [
        'eslint:recommended',
        'plugin:vue/vue3-essential',
        'plugin:vue/vue3-strongly-recommended',
        'plugin:vue/vue3-strongly-recommended',
        'plugin:prettier/recommended',
    ],
}
