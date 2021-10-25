module.exports = {
  plugins: {
    'postcss-prefix-selector': {
      prefix: '#app-root',
      transform(_prefix, selector, prefixedSelector, filepath) {
        return ( selector.match(/^(html|body|.p-tooltip|.body-main-page)/) ) ? selector : prefixedSelector;
      },
    }
  },
};

//https://github.com/vuejs-templates/webpack/issues/815

// #app-root - root id (App.vue)
// .p-tooltip - append to body (primevue)
// .body-main-selector - selector for body

