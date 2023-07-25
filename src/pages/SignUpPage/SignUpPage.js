import { useNavigate } from "react-router-dom";
import { goToFeed, goToLogin } from "../../routes/coordinator";
import { FormContainer, InputContainer } from "./styled";
import { baseURL } from "../../constants/baseURL";
import useForm from "../../Hooks/useForm";
import axios from "axios";

function SignUpPage() {
  const navigate = useNavigate();

  const { form, onChangeInput, clearFild } = useForm({
    name: "",
    email: "",
    password: "",
  });

  const handleRegister = (e) => {
    e.preventDefault();
    const body = {
      name: form.name,
      email: form.email,
      password: form.password,
    };
    axios
      .post(`${baseURL}/user/signup`, body)
      .then((res) => {
        goToFeed(navigate);
        localStorage.setItem("token", res.data.token);
        console.log(`Deu certo${res}`);
      })
      .catch((err) => {
        console.log(err);
      });
  };

  return (
    <main>
      <h1>Cadastro</h1>
      <FormContainer onSubmit={handleRegister}>
        <InputContainer>
          <label htmlFor="name">Nome:</label>
          <input
            id="name"
            name="name"
            onChange={onChangeInput}
            value={form.name}
            required
          />
        </InputContainer>
        <InputContainer>
          <label htmlFor="email">E-mail:</label>
          <input
            name="email"
            onChange={onChangeInput}
            value={form.email}
            id="email"
            required
          />
        </InputContainer>
        <InputContainer>
          <label htmlFor="password">Senha:</label>
          <input
            id="password"
            name="password"
            onChange={onChangeInput}
            value={form.password}
            id="email"
            required
          />
        </InputContainer>

        <button>Cadastrar</button>
        <button>Já sou cadastrado</button>
      </FormContainer>
    </main>
  );
}

export default SignUpPage;
