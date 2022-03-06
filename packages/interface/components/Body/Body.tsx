interface Props {
  children: React.ReactNode
}

const style: React.CSSProperties = {
  alignItems: 'center',
  backgroundColor: '#282c34',
  color: 'white',
  display: 'flex',
  flexDirection: 'column',
  fontSize: 'calc(10px + 2vh)',
  justifyContent: 'flex-start',
  minHeight: 'calc(100vh - 70px)',
}

export const Body: React.FC<Props> = ({ children }) => {
  return <div style={style}>{children}</div>
}
