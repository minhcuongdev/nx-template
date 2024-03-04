module.exports = {
  '*.{js,jsx,json,css,scss,md,ts,tsx,html}': [
    'nx format:write --files',
    'nx affected:lint --fix --files',
    'nx affected:build --fix --files'
  ]
}
