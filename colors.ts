import theme from "./theme.json";
import { Appearance, useColorScheme } from 'react-native';

const { schemes, styles } = theme


const lightScheme = schemes.light
const darkScheme = schemes.dark

const colorScheme = Appearance.getColorScheme();

const color = colorScheme === "dark" ? darkScheme : lightScheme;


// import { makeTheme } from 'dripsy'
// const theme = makeTheme({
//   // your theme
// })
// type MyTheme = typeof theme
// declare module 'dripsy' {
//   // eslint-disable-next-line @typescript-eslint/no-empty-interface
//   interface DripsyCustomTheme extends MyTheme { }
// }

export const otherStyle = styles


export default color;



