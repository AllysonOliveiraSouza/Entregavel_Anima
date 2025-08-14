# Integração Microsoft Graph API

![.Net](https://img.shields.io/badge/.NET-5C2D91?style=for-the-badge&logo=.net&logoColor=white) ![C#](https://img.shields.io/badge/c%23-%23239120.svg?style=for-the-badge&logo=csharp&logoColor=white) ![HTML5](https://img.shields.io/badge/html5-%23E34F26.svg?style=for-the-badge&logo=html5&logoColor=white) ![CSS3](https://img.shields.io/badge/css3-%231572B6.svg?style=for-the-badge&logo=css3&logoColor=white) ![JavaScript](https://img.shields.io/badge/javascript-%23323330.svg?style=for-the-badge&logo=javascript&logoColor=%23F7DF1E) ![Microsoft Graph API](https://img.shields.io/badge/Microsoft%20Graph%20API-0078D4?style=for-the-badge&logo=microsoft&logoColor=white) ![JSON](https://img.shields.io/badge/JSON-000000?style=for-the-badge&logo=json&logoColor=white)

---

## 📖 Sobre o Projeto

Neste repositório há **3 formas distintas** para consumir ou simular o consumo de dados do **Microsoft Graph API**.  
O objetivo é **demonstrar na prática** o consumo de informações diversas vindas da API.

---

## 📦 Conteúdo do repositório

Cada pasta à seguir contém um projeto diferente, mas de mesma natureza, que é, consumir dados do Ms Graph Api(real ou simulação).

- **app-console-json** - Aplicação simples de console, onde é exibido a lista de próximos eventos, à partir de um arquivo json, com estrutura semelhante ao graph api.

- **app-console-graph-api** - Aplicação simples de console, onde é exibido a lista de próximos eventos, à partir da api oficial da microsoft(Graph Api).

- **app-web-mock** - Um mock web, com estrutura em html, onde são consumidas as informações via json ou diretamente da Microsoft Graph API(necessário token válido nas requisições)

---

## 🚀 Tecnologias Utilizadas

- **C#**
- **.NET**
- **HTML**
- **CSS**
- **JavaScript**
- **Microsoft Graph API**
- **JSON**

---

## 🛠️ Pré-requisitos para Execução em Modo Debug(app-console-graph-api e app-console-json)

Para rodar esta aplicação console em modo debug, você precisa garantir que sua máquina possua os seguintes requisitos:

- **.NET SDK 8.0** instalado  
  O SDK é necessário para compilar e executar a aplicação em modo debug. Pode ser baixado em:  
  [https://dotnet.microsoft.com/en-us/download/dotnet/8.0](https://dotnet.microsoft.com/en-us/download/dotnet/8.0)

- **Sistema Operacional compatível**  
  Windows 10 ou superior, Linux (distribuições suportadas pelo .NET 8) ou macOS compatível.

- **Arquitetura da plataforma**  
  Certifique-se de possuir um sistema operacional em 64 bits para execução

- **Editor/IDE para desenvolvimento**  
  Recomenda-se usar o [Visual Studio 2022+](https://visualstudio.microsoft.com/), [Visual Studio Code](https://code.visualstudio.com/) com a extensão C#, ou outra IDE que suporte .NET 8.

---

## 🛠️ Pré-requisitos para Execução(app-web-mock)

Para rodar este projeto web, você precisa garantir o seguinte ambiente:

- **Navegador moderno**  
  Um navegador atualizado que suporte os padrões atuais de HTML5, CSS3 e JavaScript ES6+, como:

  - Google Chrome
  - Mozilla Firefox
  - Microsoft Edge
  - Safari

- **Servidor web (opcional)**  
  Embora seja possível abrir o arquivo `index.html` diretamente no navegador, alguns recursos podem exigir um servidor local, por exemplo:

  - Requisições AJAX (fetch)
  - Módulos ES6 import/export

  Você pode usar servidores simples como:

  - [Live Server (extensão do VS Code)](https://marketplace.visualstudio.com/items?itemName=ritwickdey.LiveServer)
  - [http-server (Node.js)](https://www.npmjs.com/package/http-server)
  - Servidores embutidos em IDEs ou ferramentas de build

## 🛠️ Instalação/Execução

> _**app-console-json**_
>
> - 1 - Baixar/Clonar o repositório do Projeto
>
> ```bash
> git clone https://github.com/AllysonOliveiraSouza/Entregavel_Anima.git
> ```
>
> - 2 - Após clonar o repositório, acessar a pasta **app-console-json** , depois abrir ela em um prompt de comando(exemplo: powershell ou prompt de comando)
>
> - 3 - Com a pasta aberta em um terminal, rodar a aplicação com o comando abaixo:
>
> ```bash
> dotnet run
> ```
>
> - 4 - Para acessar o código fonte, basta clicar duas vezes no arquivo 'desafio-anima.sln'

> _**app-console-graph-api**_
>
> - 1 - Baixar/Clonar o repositório do Projeto
>
> ```bash
> git clone https://github.com/AllysonOliveiraSouza/Entregavel_Anima.git
> ```
>
> - 2 - Após clonar o repositório, acessar a pasta **app-console-json** , depois abrir ela em um prompt de comando(exemplo: powershell ou prompt de comando)
>
> - 3 - Acesse [Microsoft Graph Explorer](https://developer.microsoft.com/en-us/graph/graph-explorer)
>
> - 4 - Clique em **sign-in**, em seguida, entre com suas credenciais microsoft <br><br><img width="1348" height="384" alt="image" src="https://github.com/user-attachments/assets/0fd1e5e0-2ff3-4760-bf80-6dd61f27b232" />
> - 5 - Após autenticar-se, acesse a aba **ACCESS TOKEN**, e copie o valor que está lá. <br><br><img width="721" height="250" alt="image" src="https://github.com/user-attachments/assets/73faee9a-c302-492a-9ee6-132c8530f0c0" />
> - 6 - Com o token em mãos, é necessário guardar o valor em uma variável de ambiente do sistema. Exemplo no windows 10 : Vá na barra de pesquisa do Windows, e busque por **"Editar as variáveis de ambiente do sistema"**
> <br><br><img width="649" height="245" alt="image" src="https://github.com/user-attachments/assets/d35bcd21-28c0-4f18-9f16-b1bbc822045b" />
> - 7 - Agora clique em **variáveis de ambiente**, depois clique em **novo(sessão variáveis do sistema)**. Preencha o "nome da variável" com **GRAPH_TOKEN** e o "valor da variável" com o token obtido. Para finalizar, clique em ok, depois ok, e ok novamente.  
>   **Observação(Caso já tenha a variável GRAPH_TOKEN, clique em editar, e atualize o valor do token).**
> - 8 - Antes de executar a aplicação, será necessário conceder algumas permissões no graph explorer. Acesse o graph explorer, e altere o endpoint de pesquisa para "https://graph.microsoft.com/v1.0/me/events?$top=10&$orderby=start/dateTime", depois acesse a aba **MODIFY PERMISSIONS** e conceda acesso aos recursos de forma que fique semelhante a imagem à seguir :
><br><br><img width="870" height="408" alt="image" src="https://github.com/user-attachments/assets/c4638d0a-7bb4-4376-8bb0-dec55ac18370" />
> - 9 - Caso o projeto esteja aberto na máquina, feche todos os processos dele para que o valor salvo do token seja atualizado, se necessário reinicie a máquina.
> - 10 - Com a pasta aberta em um terminal, rodar a aplicação com o comando abaixo:
>
> ```bash
> dotnet run
> ```
>
> - 11 - Para acessar o código fonte, basta clicar duas vezes no arquivo 'desafio-anima.sln'

> _**app-web-mock**_
>
> - 1 - Baixar/Clonar o repositório do Projeto
>
> ```bash
> git clone https://github.com/AllysonOliveiraSouza/Entregavel_Anima.git
> ```
>
> - 2 - Acesse [Microsoft Graph Explorer](https://developer.microsoft.com/en-us/graph/graph-explorer)
>
> - 3 - Clique em **sign-in**, em seguida, entre com suas credenciais microsoft<br><br><img width="1347" height="447" alt="image" src="https://github.com/user-attachments/assets/0a01d29f-11cd-40be-9eb8-5904e69d81dd" />
> - 4 - Após autenticar-se, será necessário conceder algumas permissões no graph explorer. Acesse o graph explorer, e altere o endpoint de pesquisa para "https://graph.microsoft.com/v1.0/me/events?$top=10&$orderby=start/dateTime", depois acesse a aba **MODIFY PERMISSIONS** e conceda acesso aos recursos de forma que fique semelhante a imagem à seguir :
><br><br><img width="870" height="408" alt="image" src="https://github.com/user-attachments/assets/c4638d0a-7bb4-4376-8bb0-dec55ac18370" />
> - 5 - Acesse a pasta "app-web-mock" pelo Visual Studio Code, e abra o index.html com um servidor local(é indicado o uso do live server(extensão do Vs Code)).
> - 6 - Após seguir os passos anteriores, é aberta a página inicial com os eventos carregados à partir de um arquivo .json, simulando os dados da Microsoft Graph API.
><br><br><img width="1363" height="637" alt="wm1" src="https://github.com/user-attachments/assets/9991f85d-6e95-4496-bdef-d5be68b9abb8" />
> - 7 - É possível também consultar dados reais da Microsoft Graph API, clique no botão **"Consultar eventos do Microsoft Graph API"**
> - 8 - Insira o token de acesso(obtido na aba ACCESS TOKEN do Microsoft Graph Explorer) no campo de texto, e clique em confirmar.
>   <br><br><img width="1350" height="617" alt="wm2" src="https://github.com/user-attachments/assets/3105b96b-e470-4124-9b32-d7c49576e966" />
> - 9 - Caso o token seja válido, irá aparecer os eventos reais do outlook autenticado.
