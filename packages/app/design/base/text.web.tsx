import React from 'react'

type TextProps = React.DetailedHTMLProps<
  React.HTMLAttributes<HTMLParagraphElement>,
  HTMLParagraphElement
>

const Text: React.FC<TextProps> = (props) => {
  return <p {...props} />
}

export default Text
