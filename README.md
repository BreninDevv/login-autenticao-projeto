# 🔐 Projeto de Autenticação JWT Simples

Este projeto foi um exercício focado em autenticação usando JSON Web Tokens (JWT).

O objetivo era entender o fluxo de emissão e validação de tokens no servidor.

## 💻 Tecnologias

O Backend usa Node.js com Express para a lógica de autenticação. A segurança é feita com o jsonwebtoken (JWT). O Frontend é um React bem básico, apenas para testar as requisições.

## 🔑 Como Funciona

Login: Você envia suas credenciais para o backend.

Geração do Token: Se as credenciais forem válidas, o servidor cria um JWT assinado e o envia de volta.

Acesso Protegido: Para acessar qualquer rota restrita, você precisa enviar esse JWT dentro do cabeçalho Authorization.

Verificação: O servidor usa um middleware para checar se o token é válido e permitir ou negar o acesso.
