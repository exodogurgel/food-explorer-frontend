import { Container, Form } from './styles';
import { Input } from '../../components/Input';
import { Button } from '../../components/Button';
import { Link } from 'react-router-dom';

export function SignUp() {
  return (
    <Container>
      <div>
        <svg width="44" height="48" viewBox="0 0 44 48" fill="none" xmlns="http://www.w3.org/2000/svg">
          <path d="M22.0318 0.216492L43.4349 12.0918V35.8425L22.0318 47.7179L0.628698 35.8425V12.0918L22.0318 0.216492Z" fill="#065E7C"/>
        </svg>
        <h1>food explorer</h1>
      </div>

      <Form>
        <legend>Crie sua conta</legend>   
        <Input 
          type="text" 
          label="name" 
          title="Seu nome" 
          placeholder="Exemplo: Maria da Silva"
          required  
        />

        <Input 
          type="email" 
          label="email" 
          title="Email" 
          placeholder="Exemplo: exemplo@exemplo.com"
          required
        />
        
        <Input 
          type="password" 
          label="password" 
          title="Senha" 
          placeholder="No mínimo 6 caracteres"
          minlength="6"
          required
        />

        <Button title="Criar conta"/>

        <Link to="/">Já tenho uma conta</Link>
      </Form>
    </Container>
  )
}