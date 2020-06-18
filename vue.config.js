// First import bulma, then main.scss file for overwriting

module.exports = {
  css: {
    loaderOptions: {
      sass: {
        prependData: `
          @import '~bulma/bulma.sass';
          @import "@/assets/styles/main.scss";
        `
      }
    }
  }
};
