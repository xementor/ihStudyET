/**
 * Learn more about Light and Dark modes:
 * https://docs.expo.io/guides/color-schemes/
 */

import {
  Text as DefaultText,
  useColorScheme,
  View as DefaultView,
  Pressable as RNPressable,
  PressableProps,
} from 'react-native'
import { DarkTheme, DefaultTheme } from 'app/design/Colors'
import React, { useState } from 'react'
import { styled } from 'nativewind'
import { clsx } from 'clsx'

type ThemeProps = {
  lightColor?: string
  darkColor?: string
}

export type TextProps = ThemeProps & DefaultText['props']
export type ViewProps = ThemeProps & DefaultView['props']

export function useThemeColor(
  props: { light?: string; dark?: string },
  colorName: keyof typeof DarkTheme.colors & keyof typeof DefaultTheme.colors
) {
  const theme = useColorScheme() ?? 'light'
  const colorFromProps = props[theme]

  if (colorFromProps) {
    return colorFromProps
  } else {
    if (theme == 'light') {
      return DefaultTheme.colors[colorName]
    } else return DarkTheme.colors[colorName]
  }
}

export function Text(props: TextProps) {
  const { style, lightColor, darkColor, ...otherProps } = props
  const color = useThemeColor({ light: lightColor, dark: darkColor }, 'primary')

  return <DefaultText style={[{ color }, style]} {...otherProps} />
}

const Pressable = styled(RNPressable)
export const P = styled(DefaultText, 'text-base text-black my-4')

export function Hoverable({
  hoveredStyle,
  dc,
  ...props
}: PressableProps & { hoveredStyle?: string; dc?: string }) {
  const [isHovered, setHovered] = useState(false)

  return (
    <Pressable
      {...props}
      className={clsx(dc, isHovered && hoveredStyle)}
      onHoverIn={() => setHovered(true)}
      onHoverOut={() => setHovered(false)}
    />
  )
}

export function View(props: ViewProps) {
  const { style, lightColor, darkColor, ...otherProps } = props
  const backgroundColor = useThemeColor(
    { light: lightColor, dark: darkColor },
    'background'
  )

  return <DefaultView style={[{ backgroundColor }, style]} {...otherProps} />
}
