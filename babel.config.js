module.exports = {
  presets: ['module:metro-react-native-babel-preset'],
  env: {
    production: {
      plugins: ['react-native-paper/babel'],
    },
  },
  plugins: [
    [
      'module-resolver',
      {
        root: ['./src'],
        alias: {
          boot: './src/app/boot',
          common: './src/app/common',
          components: './src/app/components',
          constants: './src/app/constants',
          config: './src/app/config',
          navigation: './src/app/navigation',
          screens: './src/app/screens',
          services: './src/app/services',
          store: './src/app/store',
          types: './src/app/types',
          hooks: './src/app/hooks',
          assets: './src/app/assets',
        },
      },
    ],
  ],
}
