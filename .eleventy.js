const eleventyNavigationPlugin = require("@11ty/eleventy-navigation");

module.exports = function(eleventyConfig) {
    
    eleventyConfig.addPlugin(eleventyNavigationPlugin);
    eleventyConfig.addPassthroughCopy("src/images");
    return {
        dir: {
            input: 'src',
            output: '_site',
            data: '_data'
        },
        passthroughFileCopy: true,
        templateFormats: ["njk", "md", "css", "html", "yml"],
        htmlTemplateEngine: "njk",
    };
};
