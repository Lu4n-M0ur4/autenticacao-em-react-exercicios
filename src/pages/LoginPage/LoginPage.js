import React from "react";
import { useNavigate } from "react-router-dom";
import { goToFeed, goToSignUp } from "../../routes/coordinator.js";
import { FormContainer, InputContainer } from "./styled.js";
import useForm from "../../Hooks/useForm.js";
import axios from "axios";
import { baseURL } from "../../constants/baseURL.js";

function LoginPage() {
  const navigate = useNavigate();

  const { form, onChangeInput, clearFild } = useForm({email:'',password:''});

  const handleLoguin = (e) => {
    e.preventDefault();
    const body = {
      email:form.email,
      password:form.password
    }

    axios.post(`${baseURL}/user/login`,body)
    .then((res)=>{
      console.log(res)
      localStorage.setItem("token", res.data.token)
    }).catch((res) => {console.log(res)})

  }

  return (
    <main>
      <h1>Login</h1>
      <FormContainer onSubmit={handleLoguin}>
        <InputContainer>
          <label htmlFor="email">E-mail:</label>
          <input
            name="email"
            value={form.email}
            onChange={onChangeInput}
            id="email"
            required
          />
        </InputContainer>
        <InputContainer>
          <label htmlFor="password">Senha:</label>
          <input
            id="password"
            name="password"
            value={form.password}
            onChange={onChangeInput}
            required
          />
        </InputContainer>
        <button >Entrar</button>
        <button onClick={() => goToSignUp(navigate)}>Não tenho cadastro</button>
      </FormContainer>
    </main>
  );
}

export default LoginPage;
