module.exports = function (eleventyConfig) {
    eleventyConfig.addPassthroughCopy({ './src/assets/images/': '/images' });
    eleventyConfig.addPassthroughCopy({ './src/assets/favicons': '/' });
    return {
        dir: {
            input: 'src',
            output: 'public',
        },
    };
};
