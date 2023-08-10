import \* as React from 'react'
import { Text, View, StyleSheet } from 'react-native'

import ContentContainer from './content_container'
import AppButton from './AppButton'
import { incrementIndex } from '../store/sublesson'
import { deselectOption, offBottomSheetVisibility } from '../store/question'
import { useAppDispatch, useAppSelector } from 'app/services/hooks/hook'
import { PromptType } from 'app/services/storage/model'

import useTheme from 'app/design/theming/useTheme'
import { ColorType } from 'app/design/theming/types'

interface BottomPopProps {
variant?: 'secondary' | 'warning'
question:
}

const BottomPop = ({ variant = 'warning', question }: BottomPopProps) => {
const { colors: color } = useTheme()

const SecenderyStyles = getSeconderyStyle(color)
const WarningStyles = getWarningStyles(color)

const { selectedOption, isSelected } = useAppSelector(
(state) => state.question
)

const dispatch = useAppDispatch()

let headingMessage = 'Oh!...'
let styles = WarningStyles
if (question.options[selectedOption].isCorrect) {
headingMessage = 'Well Done'

    styles = SecenderyStyles

}
function handlePress() {
if (isSelected && question.options[selectedOption].isCorrect) {
dispatch(incrementIndex())
}
closeBottomBar()
}

function closeBottomBar() {
dispatch(deselectOption())
dispatch(offBottomSheetVisibility())
}

return (
<View style={[styles.container, { width: '100%' }]}>
<View style={styles.nav}>
<MaterialCommunityIcons
          size={24}
          accessibilityHint="close"
          style={styles.close}
          name="close"
          onPress={closeBottomBar}
        />
<Text style={styles.header}>{headingMessage}</Text>
<MaterialCommunityIcons
          size={24}
          accessibilityHint="close"
          style={styles.close}
          name="close"
          onPress={closeBottomBar}
        />
</View>

      {
        <ContentContainer
          content={question.options[selectedOption].explanation!}
        />
      }
      <View style={{ marginTop: 5 }}>
        <AppButton
          content="Continue"
          type="primary"
          onPress={handlePress}
          key={1}
        />
      </View>
    </View>

)
}

const getWarningStyles = (color: ColorType) =>
StyleSheet.create({
container: {
alignItems: 'center',
backgroundColor: color.errorContainer,
padding: 10,
},

    header: {
      paddingBottom: 10,
      fontSize: 20,
      color: color.onErrorContainer,
    },
    close: {
      color: color.onErrorContainer,
    },
    nav: {
      width: '100%',
      flexDirection: 'row',
      justifyContent: 'space-between',
    },

})

function getSeconderyStyle(color: ColorType) {
return StyleSheet.create({
container: {
alignItems: 'center',
backgroundColor: color.secondaryContainer,
padding: 10,
},

    header: {
      paddingBottom: 10,
      fontSize: 20,
      color: color.onSecondaryContainer,
    },
    close: {
      color: color.onSecondaryContainer,
    },
    nav: {
      width: '100%',
      flexDirection: 'row',
      justifyContent: 'space-between',
    },
    bottomContainer: {},

})
}
export default BottomPop
