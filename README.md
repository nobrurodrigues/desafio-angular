# DesafioAngular

Este projeto ilustra um cenário onde o usuário irá inserir uma lista de números separados por virgula e em seguida a aplicação irá rotacionar uma tabela com o número de colunas e linhas idênticos, da esquerda para a direita. A aplicação deverá ser capaz de inferir o número de linhas e colunas automaticamente.


## Desenvolvimento

Para esse projeto foram utilizadas tecnologias como framework Angular na versão 13 e a IDE VsCode. Para que seja possível ter acesso ao código fonte da aplicação , faça o clone do projeto:
  - cd "diretório de sua preferência"
  - git clone https://github.com/nobrurodrigues/desafio-angular.git


## Execução

Comandos para a execução da aplicação:

  - npm install
  - ng serve

# Desafio

Para que os objetivos do desafio fossem cumpridos algumas soluções foram implementadas:

  - Um campo do tipo "text" foi criado para que o usuário insira a lista de números desejada, separados por vírgulas;
  - Um método específico para remover as virgulas do texto e extrair a sequência de números para a tabela que será rotacionada;
  - Um método específico para alterar as posições dos elementos dentro da tabela de acordo com o contexto e quantidade de números inseridos;
  - Validações no layout Html utilizando a função "*ngIf " para que a aplicação construa dinâmicamente as linhas e colunas da tabela, dependendo da quantidade de números inseridos pelo usuário;
  - Para a equiparação entre a quantidade de números e colunas, foram feitas validações ao incluir os valores na tabela de acordo com um cálculo prévio feito manualmente.
  - Ao inserir uma lista em que não é possível construir uma tabela com a mesma quantidade de linhas e colunas, a aplicação identifica a lista com inválida, faz o reset do campo de texto e informa mensagem na tela para o usuário.
  - Não foram escritos testes unitários para esse projeto até o momento. 
