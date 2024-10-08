module.exports = {
  presets: ['module:metro-react-native-babel-preset'],
  plugins: [
    [
    'module-resolver',
    {
      root: ['.'],
      alias: {
        '^@/(.+)': './src/\\1',
      },
    },
  ],
    'react-native-reanimated/plugin',
    [
      '@babel/plugin-proposal-decorators',
      { legacy: true },
    ],
    ['@babel/plugin-proposal-decorators', {legacy: true}],
  ],
};
