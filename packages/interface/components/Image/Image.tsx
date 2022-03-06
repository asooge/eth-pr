interface Props {
  alt: string
  src: string
}

const style: React.CSSProperties = {
  height: '40vmin',
  marginBottom: '16px',
  pointerEvents: 'none',
}

export const Image: React.FC<Props> = ({ alt, src }) => {
  return <img alt={alt} src={src} style={style} />
}
