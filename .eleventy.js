module.exports = function(eleventyConfig) {
    eleventyConfig.addLayoutAlias('default', 'layouts/base.njk');

    eleventyConfig.addPassthroughCopy("./src/site/fonts");
    eleventyConfig.addPassthroughCopy("./src/site/images");
    eleventyConfig.addPassthroughCopy("./src/site/css");
    eleventyConfig.addPassthroughCopy("./src/site/js");

    eleventyConfig.addPassthroughCopy("./src/site/favicon*");
    eleventyConfig.addPassthroughCopy("./src/site/manifest.json");
    eleventyConfig.addPassthroughCopy("./src/site/browserconfig.xml");

    eleventyConfig.addFilter("section", require("./src/utils/section.js") );

    return {
        dir: {
            input: "src/site",
            output: "dist"
        },
        passthroughFileCopy: true,
        templateFormats : ["njk", "md", "html"],
        htmlTemplateEngine : "njk",
        markdownTemplateEngine : "njk",
    };
};
