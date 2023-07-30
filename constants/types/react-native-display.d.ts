import { DisplayProps as OriginalDisplayProps } from "react-native-display"
import { ReactNode } from "react"

declare module "react-native-display" {
	interface DisplayProps extends OriginalDisplayProps {
		children?: ReactNode
	}
}

// this file must be a module - at least one import/export will force that
export {}
