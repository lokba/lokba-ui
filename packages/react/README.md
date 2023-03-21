# packages

## how to release?

- yarn run clean
- tsc
- cp deploy.package.json dist/package.json
- cp README.md dist
- cd dist
- npm version patch
- npm publish --access=public
