interface Props {
  children: React.ReactNode
  onClick?: React.MouseEventHandler
  style?: React.CSSProperties
}
const defaultStyle: React.CSSProperties = {
  backgroundColor: 'white',
  border: 'none',
  borderRadius: '8px',
  color: '#282c34',
  cursor: 'pointer',
  fontSize: '16px',
  textAlign: 'center',
  textDecoration: 'none',
  margin: '0px 20px',
  padding: '12px 24px',
}

export const Button: React.FC<Props> = ({
  children,
  onClick,
  style: styleProps,
}) => {
  const style = {
    ...defaultStyle,
    ...styleProps,
  }
  return (
    <button style={style} onClick={onClick}>
      {children}
    </button>
  )
}
