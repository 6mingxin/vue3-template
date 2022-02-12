module.exports = {
  extends: [
    // add more generic rulesets here, such as:
    // 'eslint:recommended',
    'plugin:vue/vue3-recommended',
    'prettier', // 添加 prettier 插件
    'vue-global-api'
    // 'plugin:vue/recommended' // Use this if you are using Vue.js 2.x.
  ],
  plugins: ['vue'],

  rules: {
    'vue/script-setup-uses-vars': 'error',
    'no-console': import.meta.env.MODE === 'production' ? 'warn' : 'off',
    'no-debugger': import.meta.env.MODE === 'production' ? 'warn' : 'off'
  },

  parser: 'vue-eslint-parser',

  parserOptions: {
    parser: 'espree',
    ecmaVersion: 2020,
    sourceType: 'module'
  },

  root: true,

  env: {
    node: true,
    browser: true,
    'vue/setup-compiler-macros': true
  }
}
