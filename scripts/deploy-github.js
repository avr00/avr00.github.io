const ghpages = require("gh-pages")

// replace with your repo url
ghpages.publish(
  "public",
  {
    branch: "master",
    repo: "https://avr00.github.io/portfolio",
  },
  () => {
    console.log("Deploy Complete!")
  }
)
