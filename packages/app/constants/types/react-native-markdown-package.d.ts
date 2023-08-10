import { ReactNode } from "react"

declare module "react-native-markdown-package" {
	interface MarkdownProps {
		enableLightBox?: boolean
		navigator?: any // Replace `any` with the actual type of the `navigator` prop
		imageParam?: any // Replace `any` with the actual type of the `imageParam` prop
		onLink?: any // Replace `any` with the actual type of the `onLink` prop
		bgImage?: any // Replace `any` with the actual type of the `bgImage` prop
		onImageOpen?: any // Replace `any` with the actual type of the `onImageOpen` prop
		onImageClose?: any // Replace `any` with the actual type of the `onImageClose` prop
		rules?: any // Replace `any` with the actual type of the `rules` prop
		styles?: any // Replace `any` with the actual type of the `styles` prop
		onLoad?: () => void
		children?: ReactNode
	}

	const Markdown: React.FC<MarkdownProps>

	export default Markdown
}
