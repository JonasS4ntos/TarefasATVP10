import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { Grid, Typography, FormControl, Input, InputLabel, FormHelperText, Button, Box, Alert } from '@mui/material';

const Registrar = () => {
  const [usuario, setUsuario] = useState('');
  const [senha, setSenha] = useState('');
  const [error, setError] = useState('');
  const navigate = useNavigate();

  const handleRegister = () => {
    try {
      const usuariosCadastrados = JSON.parse(localStorage.getItem('usuarios')) || [];
      const usuarioExistente = usuariosCadastrados.find(user => user.username === usuario);

      if (usuarioExistente) {
        setError('Usuário já existe!');
        return; // Não prossegue se o usuário já existir
      }

      if (!usuario || !senha) {
        setError('Por favor, preencha todos os campos!');
        return;
      }

      // Registra novo usuário no localStorage
      const novoUsuario = { username: usuario, password: senha };
      localStorage.setItem('usuarios', JSON.stringify([...usuariosCadastrados, novoUsuario]));

      alert('Conta criada com sucesso!');
      setError(''); // Limpa mensagens de erro
      navigate('/login'); // Redireciona para a página de login
    } catch (err) {
      console.error('Erro ao tentar cadastrar usuário:', err);
      setError('Ocorreu um erro ao registrar o usuário.');
    }
  };

  return (
    <Grid container spacing={2} justifyContent="center" alignItems="center" style={{ minHeight: '100vh' }}>
      <Grid item xs={12} sm={8} md={4}>
        <Box textAlign="center" mb={2}>
          <Typography variant="h4" gutterBottom>
            Cadastro de Usuário
          </Typography>
          <Typography variant="body1">
            Crie sua conta para acessar o sistema.
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
          onClick={handleRegister}
        >
          Cadastrar
        </Button>
      </Grid>
    </Grid>
  );
};

export default Registrar;
