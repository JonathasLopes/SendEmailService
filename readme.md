# SendEmailService

O **SendEmailService** é um serviço desenvolvido em **Node.js** com **TypeScript** para facilitar o envio de e-mails de forma eficiente e segura. O projeto utiliza **Handlebars** para a estilização do corpo dos e-mails, permitindo templates dinâmicos e personalizados.

## Funcionalidades

- **Envio de e-mails**: Permite o envio de mensagens de e-mail utilizando protocolos padrão.
- **Configuração personalizada**: Oferece opções para configurar parâmetros como servidor SMTP, porta, credenciais de autenticação, entre outros.
- **Suporte a templates dinâmicos**: Utiliza **Handlebars** para estilização e personalização do conteúdo dos e-mails.
- **Suporte a anexos**: Possibilita o envio de e-mails com arquivos anexados.

## Tecnologias Utilizadas

- **Node.js**
- **TypeScript**
- **Handlebars**
- **Nodemailer**
- **Dotenv** (para gerenciar variáveis de ambiente)

## Requisitos

Antes de executar o projeto, certifique-se de que possui:

- **Node.js** instalado (versão recomendada: 16+)
- **Gerenciador de pacotes npm ou yarn**

## Instalação

Siga os passos abaixo para configurar e executar o projeto em seu ambiente local:

1. **Clone o repositório**:

   ```bash
   git clone https://github.com/JonathasLopes/SendEmailService.git
   ```

2. **Navegue até o diretório do projeto**:

   ```bash
   cd SendEmailService
   ```

3. **Instale as dependências**:

   ```bash
   npm install
   ```

4. **Configure as variáveis de ambiente**:

   Crie um arquivo `.env` na raiz do projeto com as seguintes configurações:

   ```ini
   SMTP_SERVER=[endereço do servidor SMTP]
   SMTP_PORT=[porta do servidor SMTP]
   SSEMAIL=[seu e-mail]
   SSPASSWORD=[sua senha de app]
   ```

5. **Execute a aplicação**:

   ```bash
   npm run dev
   ```

## Uso

Após a configuração e execução da aplicação, você pode enviar e-mails chamando a função principal do serviço e fornecendo os parâmetros necessários, como destinatário, assunto, corpo da mensagem e anexos (se houver).

O corpo do e-mail pode ser personalizado usando arquivos **Handlebars (.hbs)**, permitindo uma apresentação mais atrativa e profissional.

## Contribuição

Contribuições são bem-vindas! Sinta-se à vontade para abrir issues ou enviar pull requests. Para maiores detalhes, consulte o arquivo [CONTRIBUTING.md](https://github.com/JonathasLopes/SendEmailService/blob/main/CONTRIBUTING.md).

## Licença

Este projeto está licenciado sob a [Licença MIT](https://github.com/JonathasLopes/SendEmailService/blob/main/LICENSE).

