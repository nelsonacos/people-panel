const config: Record<string, string[]> = {
  '**/*.{js,ts,tsx,jsx}': ['eslint --fix', 'prettier --write'],
  '**/*.{json,md,css,scss}': ['prettier --write'],
}

export default config
