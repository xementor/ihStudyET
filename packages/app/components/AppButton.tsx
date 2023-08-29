import { Pressable, Text } from 'app/design/styled'

import useTheme from 'app/design/theming/useTheme'
import { withExpoSnack } from 'nativewind'

export enum ButtonType {
  primary = 'primary',
  outline = 'outline',
  surfaceContainer = 'surface_container',
}

interface AppButtonProps {
  content: string
  type?: 'primary' | 'outline' | 'surface_container'
  onPress?: () => void
}

const AppButton = ({ content, type, onPress }: AppButtonProps) => {
  const { colors: color } = useTheme()

  return (
    <Pressable
      className="mb-5 flex w-full flex-row justify-center rounded-md py-2"
      style={{ backgroundColor: color.onBackground }}
      onPress={onPress}
    >
      <Text className="text-lg" style={{ color: color.background }}>
        {content}
      </Text>
    </Pressable>
  )
}

export default AppButton
