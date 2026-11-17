---
title: Suplementos que o seu ficheiro usa
summary: O BimCraft regista num ficheiro IFC quais os suplementos que nele escreveram e, ao abri-lo, propõe adicionar os que faltam.
keywords: suplemento, addon, este ficheiro usa, suplemento em falta, trusscraft, biblioteca, registo, cadcraft_addons
from: 9d9500d8
---

## O que faz

Quando um suplemento escreve no modelo (uma treliça, um troço de tubagem), o BimCraft regista o suplemento e a sua versão no projeto IFC, num conjunto de propriedades chamado CadCraft_AddOns. O registo é escrito no mesmo passo de anulação que a alteração do próprio suplemento, por isso anular a alteração também retira o registo. Os outros programas ignoram o conjunto de propriedades; o que o suplemento desenhou fica no ficheiro de qualquer forma.

## Passos

1. Abra um ficheiro IFC que um suplemento ajudou a criar.
2. Se um suplemento que ele usa não estiver ativado, uma nota acima do modelo indica quais, com um botão para os adicionar a partir da sua conta da Biblioteca.
3. Adicione-os ou feche a nota. O modelo abre de qualquer forma.

## Erros comuns

- **Não aparece nenhuma nota.** Não está com sessão iniciada na sua conta neste separador, ou o ficheiro não tem registo (foi feito antes dos registos, ou por outro programa).
- **A lista de alterações diz "undefined".** Corrigido: as etiquetas mostram agora o nome do suplemento.

## A seguir

- [Colocar equipamento e mobiliário a partir da biblioteca](topic:place-from-library)
