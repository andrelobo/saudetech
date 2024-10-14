<br />
<br />

<div>
  <img src="https://img.shields.io/badge/-Next_JS-black?style=for-the-badge&logoColor=white&logo=nextdotjs&color=000000" alt="nextdotjs" />
  <img src="https://img.shields.io/badge/-TypeScript-black?style=for-the-badge&logoColor=white&logo=typescript&color=3178C6" alt="typescript" />
  <img src="https://img.shields.io/badge/-Tailwind_CSS-black?style=for-the-badge&logoColor=white&logo=tailwindcss&color=06B6D4" alt="tailwindcss" />
  <img src="https://img.shields.io/badge/-Appwrite-black?style=for-the-badge&logoColor=white&logo=appwrite&color=FD366E" alt="appwrite" />
</div>

<h3 align="center">Sistema de Gerenciamento de Saúde - SaudeTech</h3>

<div align="center">
  Construa este projeto passo a passo com nosso tutorial detalhado no <a href="https://www.youtube.com/@javascriptmastery/videos" target="_blank"><b>JavaScript Mastery</b></a> no YouTube. Junte-se à família JSM!
</div>

## 📋 <a name="table">Índice</a>

1. 🤖 [Introdução](#introducao)
2. ⚙️ [Stack Tecnológico](#stack-tecnologico)
3. 🔋 [Funcionalidades](#funcionalidades)
4. 🤸 [Início Rápido](#inicio-rapido)
5. 🕸️ [Snippets (Códigos para Copiar)](#snippets)
6. 🔗 [Recursos](#recursos)
7. 🚀 [Mais](#mais)

## 🚨 Tutorial

## <a name="introducao">🤖 Introdução</a>

Uma aplicação de gerenciamento de pacientes na área de saúde que permite que os pacientes se cadastrem, agendem e gerenciem seus compromissos com médicos, com ferramentas administrativas para agendamento, confirmação e cancelamento de consultas, além de notificações por SMS, tudo construído usando Next.js.

## <a name="stack-tecnologico">⚙️ Stack Tecnológico</a>

- Next.js
- Appwrite
- Typescript
- TailwindCSS
- ShadCN
- Twilio

## <a name="funcionalidades">🔋 Funcionalidades</a>

👉 **Registrar-se como Paciente**: Os usuários podem se cadastrar e criar um perfil pessoal como pacientes.

👉 **Agendar uma Nova Consulta com Médico**: Pacientes podem agendar consultas com médicos de acordo com sua conveniência e podem agendar múltiplas consultas.

👉 **Gerenciar Consultas no Lado Admin**: Administradores podem visualizar e gerenciar todas as consultas agendadas de maneira eficiente.

👉 **Confirmar/Agendar Consulta pelo Admin**: Admins podem confirmar e definir horários de consultas para garantir que estejam devidamente agendadas.

👉 **Cancelar Consulta pelo Admin**: Administradores têm a capacidade de cancelar qualquer consulta conforme necessário.

👉 **Enviar SMS na Confirmação da Consulta**: Pacientes recebem notificações por SMS confirmando os detalhes de suas consultas.

👉 **Responsividade Completa**: A aplicação funciona perfeitamente em todos os tipos de dispositivos e tamanhos de tela.

👉 **Upload de Arquivos Usando o Appwrite Storage**: Usuários podem fazer upload e armazenar arquivos de maneira segura dentro do aplicativo usando os serviços de armazenamento do Appwrite.

👉 **Gerenciar e Monitorar Desempenho da Aplicação Usando Sentry**: A aplicação utiliza Sentry para monitorar e rastrear seu desempenho e detectar quaisquer erros.

e muitas outras, incluindo arquitetura de código e reusabilidade.

## <a name="inicio-rapido">🤸 Início Rápido</a>

Siga estes passos para configurar o projeto localmente na sua máquina.

**Pré-requisitos**

Certifique-se de que você tem os seguintes itens instalados em sua máquina:

- [Git](https://git-scm.com/)
- [Node.js](https://nodejs.org/en)
- [npm](https://www.npmjs.com/) (Gerenciador de Pacotes do Node)

**Clonando o Repositório**

```bash
git clone https://github.com/adrianhajdin/healthcare.git
cd healthcare
```

Instalação

Instale as dependências do projeto usando npm:

bash

npm install

Configurar Variáveis de Ambiente

Crie um novo arquivo chamado .env.local na raiz do seu projeto e adicione o seguinte conteúdo:

env

# APPWRITE

NEXT_PUBLIC_ENDPOINT=https://cloud.appwrite.io/v1
PROJECT_ID=
API_KEY=
DATABASE_ID=
PATIENT_COLLECTION_ID=
APPOINTMENT_COLLECTION_ID=
NEXT_PUBLIC_BUCKET_ID=

NEXT_PUBLIC_ADMIN_PASSKEY=111111

Substitua os valores de placeholder pelas suas credenciais reais do Appwrite. Você pode obter essas credenciais se inscrevendo no site Appwrite.

Executando o Projeto

bash

npm run dev

Abra http://localhost:3000 no seu navegador para visualizar o projeto.

## Instalação

Instale as dependências do projeto usando npm:

```bash
npm install


## APPWRITE

NEXT_PUBLIC_ENDPOINT=https://cloud.appwrite.io/v1
PROJECT_ID=
API_KEY=
DATABASE_ID=
PATIENT_COLLECTION_ID=
APPOINTMENT_COLLECTION_ID=
NEXT_PUBLIC_BUCKET_ID=

NEXT_PUBLIC_ADMIN_PASSKEY=111111


## Executando o Projeto

npm run dev

Abra http://localhost:3000 no seu navegador para visualizar o projeto.


```
