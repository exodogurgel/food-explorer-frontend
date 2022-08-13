import { Container } from './styles';

export function Button({title, image, ...rest}) {
  return (
    <Container
      type="button"
      {...rest}
    >
      {
        image ?
        <img src={image} alt="ícone do botão"/>
        :
        ''
      }
      {title}
    </Container>
  )
}