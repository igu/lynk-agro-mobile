# Projeto Expo React Native - LynkAgro BR

Este projeto utiliza [Expo](https://docs.expo.dev/get-started/introduction/) para facilitar o desenvolvimento de aplicativos Android e iOS, oferecendo roteamento baseado em arquivos, uma biblioteca padrão de módulos nativos e muito mais. Recomendado pela própria documentação do React Native: 

`You can also use React Native without a Framework, however we’ve found that most developers benefit from using a React Native Framework like Expo.` [Get Started with React Native](https://reactnative.dev/docs/environment-setup)

## 📋 Pré-requisitos

Certifique-se de ter os seguintes itens instalados no seu ambiente de desenvolvimento:

- [Node.js](https://nodejs.org/) (versão 18.19 ou superior recomendada)
- [npm](https://www.npmjs.com/) ou [Yarn](https://yarnpkg.com/) (gerenciador de pacotes)
- [ExpoGo](https://expo.dev/go)

> Nesse projeto optei por utilizar a versão mobile do app da Expo Go em um dispositivo Android conectado na mesma rede que a IDE no desenvolvimento do projeto.

## 🚀 Como rodar o projeto

Siga os passos abaixo para configurar e rodar o projeto localmente:

### 1. Clone o repositório

```bash
git clone https://github.com/igu/lynk-agro-mobile
cd lynk-agro-mobile
```

## 2. Instale as dependências
Com npm:

```bash
npm install
```

Com Yarn:
```bash
yarn install
```

## 3. Inicie o aplicativo
   
Com npx:
```bash
npx expo start
```


## 4. Leia o QRCode no seu celular pelo aplicativo ExpoGo que foi gerado após executar o comando 3

![Exemplo de QRCode](https://github.com/user-attachments/assets/6c9b25ec-1f7c-4f8c-b64b-95d473152f64)

## 🗂️ Estrutura do projeto
A estrutura básica do projeto é:

```bash

link-agro-mobile/
├── assets/         # Arquivos estáticos para servir na inicialização do app
├── src/
  ├── app/          # Telas principais (Login / SignUp / Home)
    ├── index.tsx   # Ponto de entrada do React Native
  ├── assets/       # Arquivos estáticos para importar na aplicação
  ├── components/   # Componentes reutilizáveis
  ├── contexts/     # Contextos para gerenciamento de estado global
  ├── hooks/        # Hooks para segregação de lógica
  ├── styles/       # Arquivos de estilos, incluindo tema, font family e paleta de cores
└── tsconfig.json   # Configuração do TypeScript
```

## 🧪 Tecnologias utilizadas
- React (Context API, Hooks)
- React Native
- React Hook Form
- Expo Go

## Pontos importantes

- O desafio era desenvolvedor uma interface sem backend de Login e outra de _SignUp_ (cadastro), usei como referencia o próprio login da empresa e refiz pensando em usabilidade para o usuário final.

### Ajustes de UX

![Login do site Web da LynkAgro](https://github.com/user-attachments/assets/333918bb-3c66-4db9-8a0b-fee4e677cd82)


- Antes a tela de login tinha dois botões: 'Cliente' e 'Fornecedor', diferenciando o acesso pelo uso de CPF ou CNPJ. Simplifiquei isso criando uma lógica que identifica automaticamente o tipo de documento. Se o usuário digitar algo com mais de onze caracteres, é reconhecido como CNPJ; caso contrário, é tratado como CPF. Assim, eliminamos a necessidade de botões extras, tornando o processo mais intuitivo e eficiente.


![Login do novo APP LynkAgro](https://github.com/user-attachments/assets/d666af70-71c5-4a27-a6f2-f490ba9f4ae7)

### Ajustes de perfomance

- Para garantir que a aplicacação não sofra com atualizações desnecessárias devido aos estados, utilizei a biblioteca React Hook Form para isso além de implementar validações no formulário de forma simples e eficaz. Essa ferramenta foi fundamental deixando o código mais enxuto e facilitando a manutenção.

### Controle de estado
- Para gerenciar o estado global do usuário, utilizei o Context API, permitindo que informações sobre o usuário que se cadastrou ou fez login sejam compartilhadas em toda a aplicação de maneira centralizada.

## Demo
https://github.com/user-attachments/assets/63aa2e37-a91e-4c99-82ca-7d09620db7dc

