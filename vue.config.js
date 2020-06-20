// First import bulma, then global.scss file for overwriting
// global.scss will only contain non-rendering scss (variables, mixins, functions, etc)
// @import "~buefy/node_modules/bulma/bulma.sass"; -- Already imported by buefy

module.exports = {
  css: {
    loaderOptions: {
      sass: {
        prependData: `
          @import "~buefy/node_modules/bulma/sass/utilities/initial-variables";
          @import "~buefy/node_modules/bulma/bulma";
          @import "~buefy/src/scss/buefy.scss";
          @import "@/assets/styles/global.scss";
        `
      }
    }
  }
};
