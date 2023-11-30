<p align="center">	
  <a href="https://www.linkedin.com/in/jeffersonsilemen/">
    <img alt="Jefferson Silemen" src="https://img.shields.io/badge/-Jefferson Silemen-purple?style=flat&logo=Linkedin&logoColor=black" />
  </a>

  <a href="mailto:jeffersonvieiratec@gmail.com">
    <img alt="Jefferson Silemen" src="https://img.shields.io/badge/-jeffersonvieiratec@gmail.com-purple?style=flat-square&logo=Gmail&logoColor=black" />
  </a>

  <img alt="GitHub" src="https://img.shields.io/github/license/JeffersonSilemen/frontendMentor5?color=purple">
</p>

<div align="center">
 <h1>LoginJWT - Desafio Prático 2</h1>
</div>

<p align="center">
  <a href="#clipboard-sobre-o-projeto">Sobre o Projeto</a>&nbsp;&nbsp;&nbsp;|&nbsp;&nbsp;&nbsp;
  <a href="#computer-tecnologias-utilizadas">Tecnologias</a>&nbsp;&nbsp;&nbsp;|&nbsp;&nbsp;&nbsp;
  <a href="#closed_book-licença">Licença</a>
</p>

## :clipboard: Sobre o Projeto

Desenvolver uma API RESTful para autenticação de usuários, que permita operações de cadastro (sign up),
autenticação (sign in) e recuperação de informações do usuário.

Especificações:
- Persistência de dados;
- Comunicação via JSON;
- Resposta à erros;

## :computer: Tecnologias utilizadas

<p align="center">
  <img alt="GitHub language count" src="https://img.shields.io/github/languages/count/JeffersonSilemen/loginJWT">
  <img alt="GitHub top language" src="https://img.shields.io/github/languages/top/JeffersonSilemen/loginJWT">
  <img alt="GitHub Repo stars" src="https://img.shields.io/github/stars/JeffersonSilemen/loginJWT?style=social">
  <img alt="GitHub watchers" src="https://img.shields.io/github/watchers/JeffersonSilemen/loginJWT?style=social">
</p>

Skills:
- JavaScript;
- Node;
- MongoDB Compass;
- Mongo Cloud;
- Express;
- Dotenv;
- JWT;
- @Hapi/Joi;
- bcryptjs;
- Insomnia (para envio das requisições);

## 🚀 Resultados
<p>Registrando um usuário:</p>
<p align="center">
   <img src="./images/register.PNG" width="600px">
</p>
<p>Registrando com email já cadastrado:</p>
<p align="center">
   <img src="./images/emailjaexiste.PNG" width="600px">
</p>
<p>Registrando com dados fora do padrão:</p></br>
<p>Perceba que a validação da senha deve ser feita antes de enviar os dados pra criptografia pois, caso contrário ela ficaria com o número de caracteres que atenderia os requisitos (entre 6 e 200); Para isso foi utilizado o @hapi/Joi.</p>
<p align="center">
   <img src="./images/erroRegistroPassword.PNG" width="600px">
</p>
<p>Usuário registrado no banco de dados:</p>
<p align="center">
   <img src="./images/mongodb.PNG" width="600px">
</p>
<p>Na cloud:</p>
<p align="center">
   <img src="./images/cloud.PNG" width="600px">
</p>
<p>Login com senha ou email inválido:</p>
<p align="center">
   <img src="./images/loginDadosErrados.PNG" width="600px">
</p>
<p>Respostas login certo:</p>
<p align="center">
   <img src="./images/login1.PNG" width="600px">
</p>
<p align="center">
   <img src="./images//login2.PNG" width="600px">
</p>
<p>Buscar dados com token inválido:</p>
<p align="center">
   <img src="./images/buscarUserTokenInvalido.PNG" width="600px">
</p>
<p>Buscar dados com token válido:</p>
<p align="center">
   <img src="./images/buscarUser.PNG" width="600px">
</p>

## :closed_book: Licença

Esse projeto está sob a licença MIT. Veja o arquivo [LICENSE](https://github.com/JeffersonSilemen/frontendMentor5/blob/main/LICENSE) para mais detalhes.
