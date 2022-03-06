interface Props {
  children: React.ReactNode
}

const style: React.CSSProperties = {
  backgroundColor: `#282c34`,
  minHeight: `70px`,
  display: 'flex',
  flexDirection: 'row',
  alignItems: 'center',
  justifyContent: 'flex-end',
  color: 'white',
}

export const Header: React.FC<Props> = ({ children }) => {
  return <header style={style}>{children}</header>
}
