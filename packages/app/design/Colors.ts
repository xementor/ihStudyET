import theme from "./theme.json"
const { schemes } = theme

const DefaultTheme = { dark: false, colors: schemes.light }
const DarkTheme = { dark: true, colors: schemes.dark }

export { DarkTheme, DefaultTheme }
