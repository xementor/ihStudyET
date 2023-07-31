module.exports = function (api) {
  api.cache(true);
  return {
    presets: ['babel-preset-expo'],
    plugins: [
      // Required for expo-router
      "nativewind/babel", { mode: 'transformOnly' },
      require.resolve("expo-router/babel")
    ],
  };
};
