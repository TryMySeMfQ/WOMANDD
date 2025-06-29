
# 💜 API Segurança Feminina

**Segurança Feminina** é uma aplicação web criada para oferecer suporte à segurança da mulher. A plataforma fornece:

- Localização de delegacias no mapa(Atualmente focado inclusive na Bahia.)
- Contatos úteis de emergência
- Dicas práticas de segurança

Tudo isso acessível por uma interface web simples e funcional.

---

## 🧩 Funcionalidades

- 📍 Visualização de delegacias no mapa
- 📞 Lista de telefones de emergência
- 💡 Dicas práticas de segurança
- 🔌 API RESTful com rotas organizadas

---

## 🚀 Tecnologias Utilizadas

- **Node.js + Express**
- **JavaScript (ES Modules)**
- **HTML, CSS, JS Vanilla**

---

## ⚙️ Como Rodar Localmente

### 1. Clone o Repositório

```bash
git clone https://github.com/TryMySeMfQ/seguranca-feminina.git
cd seguranca-feminina
```

### 2. Instale as Dependências

```bash
npm install
```

### 3. Crie os Arquivos HTML

Certifique-se de que a pasta `public/` contenha os seguintes arquivos:

- `mapa.html`
- `ajuda.html`
- `dicas.html`

Estes arquivos representam a interface da aplicação e consomem os dados da API.

### 4. Inicie o Servidor

```bash
npm run dev
```

A aplicação estará disponível em:  
👉 `http://localhost:3000`

---

## 🌐 Endpoints da API

| Método | Rota            | Descrição                          |
|--------|------------------|--------------------------------------|
| GET    | `/api/delegacias` | Lista de delegacias com localização |
| GET    | `/api/ajuda`      | Telefones úteis                     |
| GET    | `/api/dicas`      | Dicas de segurança                 |

---

## 🧭 Navegação

| Caminho       | Conteúdo                                |
|---------------|------------------------------------------|
| `/delegacias` | Mapa com localização de delegacias       |
| `/ajuda`      | Telefones de emergência                  |
| `/dicas`      | Dicas práticas de segurança              |

---

## 🛡️ Licença

Este projeto está licenciado sob a licença MIT.

---

## 👩‍💻 Autor
Projeto API **Segurança Feminina** desenvolvido por **Julia Tito Assunção**.  
Linkedin:[www.linkedin.com/in/julia-tito-b4007a226](https://www.linkedin.com/in/julia-tito-b4007a226)  
Colaboração e feedbacks são bem-vindos!



