const autoprefixer = require('autoprefixer')
module.exports = {
  plugins: [
    autoprefixer({
      "browserslist": [
        "not ie < 10",
        "last 2 versions",
        "> 1%",
        "iOS 7",
        "last 3 iOS versions"
      ]
    })
  ]
}