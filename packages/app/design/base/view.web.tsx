import React from 'react'

type ViewProps = React.DetailedHTMLProps<
  React.HTMLAttributes<HTMLDivElement>,
  HTMLDivElement
>

const View: React.FC<ViewProps> = (props) => {
  return <div {...props} />
}

export default View
