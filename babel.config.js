module.exports = {
  presets: [
    '@vue/app'
  ],
  "plugins": [
    "@babel/plugin-transform-runtime",
    ["import", { "libraryName": "antd", "style": true}, "ant"],
  ]
}
