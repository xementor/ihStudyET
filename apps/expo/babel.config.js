module.exports = function (api) {
  api.cache(true)
  return {
    presets: [['babel-preset-expo', { jsxRuntime: 'automatic' }]],
    plugins: [
      'react-native-reanimated/plugin',
      require.resolve('nativewind/babel'),
      // required for expo router.
      // "expo-router/babel",
      require.resolve("expo-router/babel")
    ],
  }
}
