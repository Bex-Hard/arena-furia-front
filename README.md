# 🐺 Arena FURIA - Chat App

## 📝 Descrição
Arena FURIA é uma plataforma de chat interativa desenvolvida para os fãs da FURIA Esports. O projeto oferece um ambiente onde os torcedores podem se conectar, compartilhar momentos e interagir com um chatbot oficial da FURIA.

## ✨ Funcionalidades Principais

### 💬 Chat em Tempo Real
- Interface moderna e responsiva
- Sistema de mensagens em tempo real

### 🤖 ChatBot Oficial da FURIA
- Comandos interativos para informações do time
- Agenda de jogos atualizada
- Estatísticas do time
- Curiosidades sobre a FURIA
- Informações sobre campeonatos
- Integração com Telegram

### 🔐 Sistema de Autenticação
- Login seguro com JWT
- Registro de novos usuários

## 🛠️ Tecnologias Utilizadas

### Frontend
- React.js
- CSS3 com Flexbox e Grid
- Axios para requisições HTTP
- React Router para navegação
- Context API para gerenciamento de estado
- Lucide React para ícones

### Backend
- Java
- SpringBoot
- JWT para autenticação
- WebSocket para chat em tempo real
- PostgreSQL para banco de dados

## 🚀 Como Executar o Projeto

### Pré-requisitos
- Node.js (versão 14 ou superior)
- npm ou yarn
- PostgreSQL instalado e rodando

### Instalação

1. Clone o repositório:
```bash
git clone https://github.com/Bex-Hard/arena-furia-front
cd arena-furia
```

2. Instale as dependências do frontend:
```bash
cd chat-app
npm install
```

3. Instale as dependências do backend:
```bash
cd ../server
npm install
```

4. Configure as variáveis de ambiente:
```bash
# No diretório server, crie um arquivo .env com:
PORT=8080
DB_URL=sua_URL
DB_USERNAME=seu_username
DB_PASSWORD=sua_senha
JWT_SECRET=seu_segredo
```

5. Inicie o servidor:
```bash
cd ../server
npm start
```

6. Em outro terminal, inicie o frontend:
```bash
cd ../chat-app
npm start
```

## 📱 Comandos do ChatBot

- `/ajuda` - Lista todos os comandos disponíveis
- `/jogos` - Mostra a agenda de próximos jogos
- `/estatisticas` - Exibe estatísticas do time
- `/curiosidades` - Compartilha fatos interessantes sobre a FURIA
- `/campeonatos` - Lista os campeonatos atuais
- `/telegram` - Link para o bot no Telegram

## 🎨 Interface

O projeto segue a identidade visual da FURIA Esports, utilizando:
- Cores principais: Preto e Branco (#FF4655)
- Design moderno e minimalista
- Animações suaves e interativas

## 🤝 Contribuindo

1. Faça um Fork do projeto
2. Crie uma Branch para sua Feature (`git checkout -b feature/AmazingFeature`)
3. Commit suas mudanças (`git commit -m 'Add some AmazingFeature'`)
4. Push para a Branch (`git push origin feature/AmazingFeature`)
5. Abra um Pull Request

## 📞 Suporte
- Para suporte, envie um email para rebeccahardman@gmail.com ou abra uma issue no GitHub.

---
Desenvolvido por Rebecca Hardman
