import { useForm } from 'react-hook-form';
import { useAuthStore } from '../store/authStore';
import styled from 'styled-components';
import { useNavigate } from 'react-router-dom';
import { IoMdEyeOff } from "react-icons/io";
import FormField from '../components/molecules/FormField';
import Button from '../components/atoms/Button';
import API from '../api/axios';
import { useEffect } from 'react';

const Container = styled.div`
  max-width: 400px;
  margin: 5rem auto;
  background: ${({ theme }) => theme.colors.background};
  box-shadow: 0 0 10px ${({ theme }) => theme.colors.dark};
  padding: 2rem;
  border-radius: 12px;
`;

type FormData = {
  email: string;
  password: string;
  options: string;
};

const Login = () => {
  const { register, handleSubmit, formState: { errors } } = useForm<FormData>();
  const login = useAuthStore((state) => state.login);
  const isAuthenticated = useAuthStore((state) => state.isAuthenticated);
  const navigate = useNavigate();

  useEffect(() => {
    if (isAuthenticated) navigate('/users');
  }, [isAuthenticated, navigate]);

  const onSubmit = async (data: FormData) => {
    console.log(data);
    try {
      const res = await API.post('/auth/login', data);
      await login(res.data.token);
      navigate('/users');
    } catch (error) {
      console.log(error);
      alert('No es posible iniciar sesión');
    }
  };

  return (
    <Container>
      <h2>Iniciar sesión</h2>
      <form onSubmit={handleSubmit(onSubmit)}>
        <FormField
          label="Email"
          type="email"
          placeholder="Email"
          name="email"
          error={errors.email?.message}
          register={register('email', { required: "Email required" })}
        />

        <FormField
          label="Password"
          type="password"
          placeholder="Password"
          name="password"
          error={errors.password?.message}
          register={register('password', { required: "Password required" })}
          icon={<IoMdEyeOff />}
        />
        
        <FormField
          label="Options"
          type="select"
          placeholder="Seleccione por favor"
          name="options"
          selectOptions={[
            { value: '1', label: 'Opción 1' },
            { value: '2', label: 'Opción 2' },
            { value: '3', label: 'Opción 3' },
          ]}
          error={errors.options?.message}
          register={register('options', { required: "Se debe seleccionar una opción" })}
        />

        <Button type="submit">Login</Button>
      </form>
    </Container>
  );
};

export default Login;
