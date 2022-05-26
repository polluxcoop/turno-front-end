const { defineConfig } = require('@vue/cli-service')
const path = require('path');

function resolveSrc(_path) {
  return path.join(__dirname, _path);
}

module.exports = defineConfig({
  transpileDependencies: true,
  configureWebpack: {
    resolve: {
      alias: {
        assets: resolveSrc('public/assets')
      }
    }
  },

})
