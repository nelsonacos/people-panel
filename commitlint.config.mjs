import { createRequire } from 'module';
const require = createRequire(import.meta.url);

export default {
  extends: ['@commitlint/config-conventional'],
};