module.exports = (eleventyConfig) =>
{
  eleventyConfig.addNunjucksAsyncFilter( "greet", async (name) =>
  {
    // NOTE: This filter does not actually perform asynchronous work, but the
    // results are the same either way.

    return await Promise.resolve(`Hello, ${name}`);
  });
};
