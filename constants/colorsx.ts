import theme from "./theme.json"
import { Appearance } from "react-native"

const { schemes, styles } = theme

const lightScheme = schemes.light
const darkScheme = schemes.dark

const colorScheme = Appearance.getColorScheme()

const color = colorScheme === "dark" ? darkScheme : lightScheme

export const otherStyle = styles

export default color
