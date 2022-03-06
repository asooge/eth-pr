interface Props {
  children: React.ReactNode
  target: string
  href: string
}

export const Link: React.FC<Props> = ({ children, target, href }) => {
  const style = {
    color: '#61dafb',
    marginTop: '10px',
  }
  return (
    <a target={target} href={href} style={style} rel={'noopener noreferrer'}>
      {children}
    </a>
  )
}
