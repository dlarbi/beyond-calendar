import packageJson from './package.json';

export default Object.freeze({
  apiBaseUrl: 'http://localhost:1024', // TODO: would make dynamic per environment
  packageJson // if we ever need to introspect
});
