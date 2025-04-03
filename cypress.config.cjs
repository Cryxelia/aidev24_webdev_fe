const { defineConfig } = require("cypress");
//const customViteConfig = require("./customConfig");

module.exports = defineConfig({
  chromeWebSecurity: false,
  component: {
    devServer: {
      framework: "react",
      bundler: "vite",
      // optionally pass in vite config
      //viteConfig: customViteConfig,
      // or a function - the result is merged with
      // any vite.config file that is detected
      viteConfig: async () => {
        // ... do things ...
        const modifiedConfig = await injectCustomConfig(baseConfig);
        return modifiedConfig;
      },
    },
  },

  e2e: {
    baseUrl: 'http://127.0.0.1:5173',
    setupNodeEvents(on, config) {
      // implement node event listeners here
    },
  },
});



