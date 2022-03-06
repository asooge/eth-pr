interface Props {
  children: React.ReactNode
}

const style: React.CSSProperties = {
  margin: '0',
  fontFamily:
    "-apple-system, BlinkMacSystemFont, 'Segoe UI', 'Roboto', 'Oxygen',\n    'Ubuntu', 'Cantarell', 'Fira Sans', 'Droid Sans', 'Helvetica Neue',\n    sans-serif",
  WebkitFontSmoothing: 'antialiased',
  MozOsxFontSmoothing: 'grayscale',
}

export const Page: React.FC<Props> = ({ children }) => {
  return <div style={style}>{children}</div>
}
