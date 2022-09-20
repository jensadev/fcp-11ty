module.exports = function (eleventyConfig) {
    eleventyConfig.addPassthroughCopy({ './src/assets/images/': '/images' });
    eleventyConfig.addPassthroughCopy({ './src/assets/favicons': '/' });

    eleventyConfig.addShortcode("year", () => `${new Date().getFullYear()}`);

    return {
        dir: {
            input: 'src',
            output: 'public',
        },
    };
};
