# test-addNunjucksAsyncFilter

A test project that demonstrates unexpected behavior when using Eleventy's `addNunjucksAsyncFilter` method.

## Summary

Registering asynchronous filter with `addNunjucksAsyncFilter` causes builds to exit prematurely.

## Configuration

* **Eleventy** — `1.0.2` / `2.0.0-canary.15`

## Steps

1. Clone this project and install dependencies
```
$ git clone https://github.com/ashur/test-addNunjucksAsyncFilter.git
$ cd test-addNunjucksAsyncFilter
$ npm install
```
1. Run `npx eleventy` to build the site
1. Run `npx eleventy --serve` to start the built-in server

## Expected Results

Building the site will log something like this to the terminal:

```
$ npx eleventy
[11ty] Writing _site/index.html from ./index.njk
[11ty] Wrote 1 file in 0.02 seconds (v2.0.0-canary.15)
```

showing that the file has been built as expected. (See **Attachments** below for verbose logs.)

---

Starting the built-in server will log something like this to the terminal:

```
$ npx eleventy --serve
[11ty] Writing _site/index.html from ./index.njk
[11ty] Wrote 1 file in 0.03 seconds (v2.0.0-canary.15)
[11ty] Watching…
[11ty] Server at http://localhost:8080/
```

and continue running until the command is terminated.

## Actual Results

The file is not built, which is reflected by terminal logging:

```
$ npx eleventy
[no output]
```

---

The built-in server never starts:

```
$ npx eleventy --serve
[no output]
```

and the command exits automatically.

## Frequency

* Always

## Workaround

For projects using Eleventy 2.0, registering the filter using `addAsyncFilter` works as expected.

## Attachments

### Debug `build` logs

```
$ DEBUG=Eleventy* npx eleventy
Eleventy:cmd command: eleventy { _: [], quiet: null, version: false, watch: false, dryrun: false, help: false, serve: false, passthroughall: false, incremental: false } +0ms
Eleventy:EventBus Setting up global EventBus. +0ms
Eleventy:UserConfig Resetting EleventyConfig to initial values. +0ms
Eleventy:UserConfig Adding universal filter 'slug' +6ms
Eleventy:UserConfig Adding universal filter 'slugify' +0ms
Eleventy:UserConfig Adding universal filter 'url' +0ms
Eleventy:UserConfig Adding universal filter 'log' +0ms
Eleventy:UserConfig Adding universal filter 'serverlessUrl' +0ms
Eleventy:UserConfig Adding universal filter 'getCollectionItem' +0ms
Eleventy:UserConfig Adding universal filter 'getPreviousCollectionItem' +0ms
Eleventy:UserConfig Adding universal filter 'getNextCollectionItem' +0ms
Eleventy:TemplateConfig rootConfig { templateFormats: [ 'liquid',   'ejs', 'md',       'hbs', 'mustache', 'haml', 'pug',      'njk', 'html',     '11ty.js' ], pathPrefix: '/', markdownTemplateEngine: 'liquid', htmlTemplateEngine: 'liquid', dataTemplateEngine: false, htmlOutputSuffix: '-o', jsDataFileSuffix: '.11tydata', keys: { package: 'pkg', layout: 'layout', permalink: 'permalink', permalinkRoot: 'permalinkBypassOutputDir', engineOverride: 'templateEngineOverride', computed: 'eleventyComputed' }, dir: { input: '.', includes: '_includes', data: '_data', output: '_site' }, handlebarsHelpers: {}, nunjucksFilters: {} } +0ms
Eleventy:TemplateConfig Setting pathPrefix to '/' +1ms
Eleventy Setting process.env.ELEVENTY_ROOT: '/Users/USERNAME/Downloads/test-async-filter' +0ms
Eleventy:TemplateConfig Merging config with .eleventy.js +1ms
Eleventy:TemplateConfig overrides: { pathPrefix: '/' } +1ms
Eleventy:TemplateConfig Current configuration: { pathPrefix: '/', markdownTemplateEngine: 'liquid', htmlTemplateEngine: 'liquid', dataTemplateEngine: false, htmlOutputSuffix: '-o', jsDataFileSuffix: '.11tydata', keys: { package: 'pkg', layout: 'layout', permalink: 'permalink', permalinkRoot: 'permalinkBypassOutputDir', engineOverride: 'templateEngineOverride', computed: 'eleventyComputed' }, dir: { input: '.', includes: '_includes', data: '_data', output: '_site' }, handlebarsHelpers: { slug: [Function (anonymous)], slugify: [Function (anonymous)], url: [Function (anonymous)], log: [Function (anonymous)], serverlessUrl: [Function (anonymous)], getCollectionItem: [Function (anonymous)], getPreviousCollectionItem: [Function (anonymous)], getNextCollectionItem: [Function (anonymous)] }, nunjucksFilters: { slug: [Function (anonymous)], slugify: [Function (anonymous)], url: [Function (anonymous)], log: [Function (anonymous)], serverlessUrl: [Function (anonymous)], getCollectionItem: [Function (anonymous)], getPreviousCollectionItem: [Function (anonymous)], getNextCollectionItem: [Function (anonymous)] }, templateFormats: [ 'liquid',   'ejs', 'md',       'hbs', 'mustache', 'haml', 'pug',      'njk', 'html',     '11ty.js' ], transforms: {}, linters: {}, globalData: {}, layoutAliases: {}, passthroughCopies: {}, liquidOptions: {}, liquidTags: {}, liquidFilters: { slug: [Function (anonymous)], slugify: [Function (anonymous)], url: [Function (anonymous)], log: [Function (anonymous)], serverlessUrl: [Function (anonymous)], getCollectionItem: [Function (anonymous)], getPreviousCollectionItem: [Function (anonymous)], getNextCollectionItem: [Function (anonymous)] }, liquidShortcodes: {}, liquidPairedShortcodes: {}, nunjucksEnvironmentOptions: {}, nunjucksPrecompiledTemplates: {}, nunjucksAsyncFilters: { commitHash: [Function (anonymous)] }, nunjucksTags: {}, nunjucksGlobals: {}, nunjucksAsyncShortcodes: {}, nunjucksShortcodes: {}, nunjucksAsyncPairedShortcodes: {}, nunjucksPairedShortcodes: {}, handlebarsShortcodes: {}, handlebarsPairedShortcodes: {}, javascriptFunctions: { slug: [Function (anonymous)], slugify: [Function (anonymous)], url: [Function (anonymous)], log: [Function (anonymous)], serverlessUrl: [Function (anonymous)], getCollectionItem: [Function (anonymous)], getPreviousCollectionItem: [Function (anonymous)], getNextCollectionItem: [Function (anonymous)] }, pugOptions: {}, ejsOptions: {}, markdownHighlighter: null, libraryOverrides: {}, dynamicPermalinks: true, useGitIgnore: true, ignores: Set(2) { '**/node_modules/**', '.git/**' }, dataDeepMerge: true, watchJavaScriptDependencies: true, additionalWatchTargets: [], serverOptions: {}, chokidarConfig: {}, watchThrottleWaitTime: 0, frontMatterParsingOptions: undefined, dataExtensions: Map(0) {}, extensionMap: Set(0) {}, quietMode: false, events: AsyncEventEmitter { _events: [Object: null prototype] {}, _eventsCount: 0, _maxListeners: undefined, [Symbol(kCapture)]: false }, benchmarkManager: BenchmarkManager { benchmarkGroups: { Configuration: [BenchmarkGroup], Aggregate: [BenchmarkGroup] }, isVerbose: true, start: 186.6656665802002 }, plugins: [], useTemplateCache: true, precompiledCollections: {}, dataFilterSelectors: Set(0) {}, libraryAmendments: {}, serverPassthroughCopyBehavior: 'passthrough', urlTransforms: [] } +0ms
Eleventy Eleventy warm up time (in ms) 196.363374710083 +2ms
Eleventy:TemplatePassthroughManager Resetting counts to 0 +0ms
Eleventy:EleventyFiles .gitignore ignoring: ./node_modules/** +0ms
Eleventy:EleventyFiles .gitignore ignoring: ./node_modules/** +0ms
Eleventy Directories:
Eleventy Input (Dir): .
Eleventy Input (File): undefined
Eleventy Data: _data
Eleventy Includes: _includes
Eleventy Layouts: undefined
Eleventy Output: _site
Eleventy Template Formats: liquid,ejs,md,hbs,mustache,haml,pug,njk,html,11ty.js
Eleventy Verbose Output: false +2ms
Eleventy:EleventyFiles Searching for: [ './**/*.liquid', './**/*.ejs', './**/*.md', './**/*.hbs', './**/*.mustache', './**/*.haml', './**/*.pug', './**/*.njk', './**/*.html', './**/*.11ty.js', './**/*.11ty.cjs' ] +4ms
Eleventy:TemplateWriter Found: [ './index.njk' ] +0ms
Eleventy:TemplatePassthroughManager TemplatePassthrough copy started. +9ms
Eleventy:TemplatePassthroughManager `addPassthroughCopy` config API paths: {} +0ms
Eleventy:TemplatePassthroughManager `addPassthroughCopy` config API normalized paths: [] +0ms
Eleventy:TemplateData Using '.11tydata' to find data files. +0ms
Eleventy:TemplateData getLocalDataPaths('./index.njk'): [ './index.11tydata.js', './index.11tydata.cjs', './index.11tydata.json', './index.json' ] +0ms
Eleventy:TemplateWriter ./index.njk begun adding to map. +1ms
Eleventy:TemplatePassthroughManager TemplatePassthrough copy finished. Current count: 0 +1ms
Eleventy:Template Template date: using file’s 'birthtimeMs' for './index.njk' of 2022-09-26T19:22:01.923Z (from 1664220121923.4136) +0ms
Eleventy:TemplateMap Caching collections objects. +0ms
Eleventy:TemplateMap Collection: collections.all size: 1 +1ms
Eleventy:TemplateMap Collection: collections.all size: 1 +0ms
```

### Debug `serve` logs

```
$ DEBUG=Eleventy* npx eleventy --serve
Eleventy:cmd command: eleventy { _: [], quiet: null, version: false, watch: false, dryrun: false, help: false, serve: true, passthroughall: false, incremental: false } +0ms
Eleventy:EventBus Setting up global EventBus. +0ms
Eleventy:UserConfig Resetting EleventyConfig to initial values. +0ms
Eleventy:UserConfig Adding universal filter 'slug' +2ms
Eleventy:UserConfig Adding universal filter 'slugify' +1ms
Eleventy:UserConfig Adding universal filter 'url' +0ms
Eleventy:UserConfig Adding universal filter 'log' +0ms
Eleventy:UserConfig Adding universal filter 'serverlessUrl' +0ms
Eleventy:UserConfig Adding universal filter 'getCollectionItem' +0ms
Eleventy:UserConfig Adding universal filter 'getPreviousCollectionItem' +0ms
Eleventy:UserConfig Adding universal filter 'getNextCollectionItem' +0ms
Eleventy:TemplateConfig rootConfig { templateFormats: [ 'liquid',   'ejs', 'md',       'hbs', 'mustache', 'haml', 'pug',      'njk', 'html',     '11ty.js' ], pathPrefix: '/', markdownTemplateEngine: 'liquid', htmlTemplateEngine: 'liquid', dataTemplateEngine: false, htmlOutputSuffix: '-o', jsDataFileSuffix: '.11tydata', keys: { package: 'pkg', layout: 'layout', permalink: 'permalink', permalinkRoot: 'permalinkBypassOutputDir', engineOverride: 'templateEngineOverride', computed: 'eleventyComputed' }, dir: { input: '.', includes: '_includes', data: '_data', output: '_site' }, handlebarsHelpers: {}, nunjucksFilters: {} } +0ms
Eleventy:TemplateConfig Setting pathPrefix to '/' +1ms
Eleventy Setting process.env.ELEVENTY_ROOT: '/Users/USERNAME/Downloads/test-async-filter' +0ms
Eleventy:TemplateConfig Merging config with .eleventy.js +1ms
Eleventy:TemplateConfig overrides: { pathPrefix: '/' } +1ms
Eleventy:TemplateConfig Current configuration: { pathPrefix: '/', markdownTemplateEngine: 'liquid', htmlTemplateEngine: 'liquid', dataTemplateEngine: false, htmlOutputSuffix: '-o', jsDataFileSuffix: '.11tydata', keys: { package: 'pkg', layout: 'layout', permalink: 'permalink', permalinkRoot: 'permalinkBypassOutputDir', engineOverride: 'templateEngineOverride', computed: 'eleventyComputed' }, dir: { input: '.', includes: '_includes', data: '_data', output: '_site' }, handlebarsHelpers: { slug: [Function (anonymous)], slugify: [Function (anonymous)], url: [Function (anonymous)], log: [Function (anonymous)], serverlessUrl: [Function (anonymous)], getCollectionItem: [Function (anonymous)], getPreviousCollectionItem: [Function (anonymous)], getNextCollectionItem: [Function (anonymous)] }, nunjucksFilters: { slug: [Function (anonymous)], slugify: [Function (anonymous)], url: [Function (anonymous)], log: [Function (anonymous)], serverlessUrl: [Function (anonymous)], getCollectionItem: [Function (anonymous)], getPreviousCollectionItem: [Function (anonymous)], getNextCollectionItem: [Function (anonymous)] }, templateFormats: [ 'liquid',   'ejs', 'md',       'hbs', 'mustache', 'haml', 'pug',      'njk', 'html',     '11ty.js' ], transforms: {}, linters: {}, globalData: {}, layoutAliases: {}, passthroughCopies: {}, liquidOptions: {}, liquidTags: {}, liquidFilters: { slug: [Function (anonymous)], slugify: [Function (anonymous)], url: [Function (anonymous)], log: [Function (anonymous)], serverlessUrl: [Function (anonymous)], getCollectionItem: [Function (anonymous)], getPreviousCollectionItem: [Function (anonymous)], getNextCollectionItem: [Function (anonymous)] }, liquidShortcodes: {}, liquidPairedShortcodes: {}, nunjucksEnvironmentOptions: {}, nunjucksPrecompiledTemplates: {}, nunjucksAsyncFilters: { commitHash: [Function (anonymous)] }, nunjucksTags: {}, nunjucksGlobals: {}, nunjucksAsyncShortcodes: {}, nunjucksShortcodes: {}, nunjucksAsyncPairedShortcodes: {}, nunjucksPairedShortcodes: {}, handlebarsShortcodes: {}, handlebarsPairedShortcodes: {}, javascriptFunctions: { slug: [Function (anonymous)], slugify: [Function (anonymous)], url: [Function (anonymous)], log: [Function (anonymous)], serverlessUrl: [Function (anonymous)], getCollectionItem: [Function (anonymous)], getPreviousCollectionItem: [Function (anonymous)], getNextCollectionItem: [Function (anonymous)] }, pugOptions: {}, ejsOptions: {}, markdownHighlighter: null, libraryOverrides: {}, dynamicPermalinks: true, useGitIgnore: true, ignores: Set(2) { '**/node_modules/**', '.git/**' }, dataDeepMerge: true, watchJavaScriptDependencies: true, additionalWatchTargets: [], serverOptions: {}, chokidarConfig: {}, watchThrottleWaitTime: 0, frontMatterParsingOptions: undefined, dataExtensions: Map(0) {}, extensionMap: Set(0) {}, quietMode: false, events: AsyncEventEmitter { _events: [Object: null prototype] {}, _eventsCount: 0, _maxListeners: undefined, [Symbol(kCapture)]: false }, benchmarkManager: BenchmarkManager { benchmarkGroups: { Configuration: [BenchmarkGroup], Aggregate: [BenchmarkGroup] }, isVerbose: true, start: 106.16600036621094 }, plugins: [], useTemplateCache: true, precompiledCollections: {}, dataFilterSelectors: Set(0) {}, libraryAmendments: {}, serverPassthroughCopyBehavior: 'passthrough', urlTransforms: [] } +0ms
Eleventy Eleventy warm up time (in ms) 114.30345821380615 +4ms
Eleventy:TemplatePassthroughManager Resetting counts to 0 +0ms
Eleventy:EleventyFiles .gitignore ignoring: ./node_modules/** +0ms
Eleventy:EleventyFiles .gitignore ignoring: ./node_modules/** +0ms
Eleventy Directories:
Eleventy Input (Dir): .
Eleventy Input (File): undefined
Eleventy Data: _data
Eleventy Includes: _includes
Eleventy Layouts: undefined
Eleventy Output: _site
Eleventy Template Formats: liquid,ejs,md,hbs,mustache,haml,pug,njk,html,11ty.js
Eleventy Verbose Output: false +2ms
Eleventy:EleventyFiles Searching for: [ './**/*.liquid', './**/*.ejs', './**/*.md', './**/*.hbs', './**/*.mustache', './**/*.haml', './**/*.pug', './**/*.njk', './**/*.html', './**/*.11ty.js', './**/*.11ty.cjs' ] +9ms
Eleventy:TemplateWriter Found: [ './index.njk' ] +0ms
Eleventy:TemplatePassthroughManager TemplatePassthrough copy started. +13ms
Eleventy:TemplatePassthroughManager `addPassthroughCopy` config API paths: {} +0ms
Eleventy:TemplatePassthroughManager `addPassthroughCopy` config API normalized paths: [] +0ms
Eleventy:TemplateData Using '.11tydata' to find data files. +0ms
Eleventy:TemplateData getLocalDataPaths('./index.njk'): [ './index.11tydata.js', './index.11tydata.cjs', './index.11tydata.json', './index.json' ] +1ms
Eleventy:TemplateWriter ./index.njk begun adding to map. +1ms
Eleventy:TemplatePassthroughManager TemplatePassthrough copy finished. Current count: 0 +1ms
Eleventy:Template Template date: using file’s 'birthtimeMs' for './index.njk' of 2022-09-26T19:22:01.923Z (from 1664220121923.4136) +0ms
Eleventy:TemplateMap Caching collections objects. +0ms
Eleventy:TemplateMap Collection: collections.all size: 1 +1ms
Eleventy:TemplateMap Collection: collections.all size: 1 +0ms
```
