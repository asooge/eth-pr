interface Props {
  alt: string
  src: string
  style?: React.CSSProperties
}

const defaultStyle: React.CSSProperties = {
  height: '40vmin',
  marginBottom: '16px',
  pointerEvents: 'none',
}

export const Image: React.FC<Props> = ({
  style: styleProps = {},
  alt,
  src,
}) => {
  const style = {
    ...defaultStyle,
    ...styleProps,
  }
  return <img alt={alt} src={src} style={style} />
}
