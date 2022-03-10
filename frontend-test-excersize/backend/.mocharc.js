module.exports = {
  extension: ['js'],
  timeout: 10000,
  spec: 'test/**/*.spec.ts',
  require: [
    'ts-node/register',
  ],
};
