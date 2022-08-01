import {
  Container,
  SectionEmail,
  InputEmail,
  IconUser,
  InputSenha,
  IconPassword,
  SectionPassword
} from './styles';

function Login() {
  return (
    <Container>
      <SectionEmail >
        <IconUser  />
        <InputEmail type="text" placeholder='E-mail'/>
      </SectionEmail>

      <SectionPassword>
        <IconPassword />
        <InputSenha type='password' placeholder='Senha'/>
      </SectionPassword>
    </Container>
  );
}

export { Login };
