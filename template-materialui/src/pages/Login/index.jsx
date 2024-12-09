import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { Grid, Typography, FormControl, Input, InputLabel, FormHelperText, Button, Box, Alert } from '@mui/material';

const Login = () => {
  const [usuario, setUsuario] = useState('');
  const [senha, setSenha] = useState('');
  const [error, setError] = useState('');
  const navigate = useNavigate();

  const handleLogin = () => {
    const usuariosCadastrados = JSON.parse(localStorage.getItem('usuarios')) || [];
    const usuarioEncontrado = usuariosCadastrados.find(
      (user) => user.username === usuario && user.password === senha
    );

    if (usuarioEncontrado) {
      setError('');
      alert('Login bem-sucedido!');
      navigate('/tarefas');
    } else {
      setError('Usuário ou senha inválidos!');
    }
  };

  const handleRedirectToRegister = () => {
    navigate('/registrar');
  };

  return (
    <Grid container spacing={2} justifyContent="center" alignItems="center" style={{ minHeight: '100vh' }}>
      <Grid item xs={12} sm={8} md={4}>
        <Box textAlign="center" mb={2}>
          <Typography variant="h4" gutterBottom>
            Página de Login
          </Typography>
          <Typography variant="body1">
            Insira suas credenciais para acessar o sistema.
          </Typography>
        </Box>
        {error && <Alert severity="error" style={{ marginBottom: '10px' }}>{error}</Alert>}
        <FormControl fullWidth margin="normal">
          <InputLabel htmlFor="usuario">Usuário</InputLabel>
          <Input
            id="usuario"
            value={usuario}
            onChange={(e) => setUsuario(e.target.value)}
          />
          <FormHelperText>Digite seu nome de usuário.</FormHelperText>
        </FormControl>
        <FormControl fullWidth margin="normal">
          <InputLabel htmlFor="senha">Senha</InputLabel>
          <Input
            id="senha"
            type="password"
            value={senha}
            onChange={(e) => setSenha(e.target.value)}
          />
          <FormHelperText>Digite sua senha.</FormHelperText>
        </FormControl>
        <Button
          variant="contained"
          color="primary"
          fullWidth
          style={{ marginTop: '16px' }}
          onClick={handleLogin}
        >
          Entrar
        </Button>
        <Button
          variant="outlined"
          color="secondary"
          fullWidth
          style={{ marginTop: '8px' }}
          onClick={handleRedirectToRegister}
        >
          Cadastrar
        </Button>
      </Grid>
    </Grid>
  );
};

export default Login;
