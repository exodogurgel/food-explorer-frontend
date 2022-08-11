import { Container, TextareaInput } from './styles'

export function Textarea({label, value, ...rest }) {
  return (
    <Container>
      <label htmlFor={label}>
        <Textarea {...rest}>
          {value}
        </Textarea>
      </label>
    </Container>
  )
}
