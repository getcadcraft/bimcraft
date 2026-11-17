---
title: Questões, revisões e registo de alterações do desenho
summary: Registe cada conjunto de folhas que entrega, veja o que mudou desde então em cada folha e elemento, e guarde instruções de obra, desenhos de fabrico e modelos referenciados junto da questão a que pertencem.
keywords: questão, conjunto emitido, conjunto entregue, entrega, revisão, revisões, o que mudou, desde a questão, registo de alterações, registo de alterações do desenho, lista de desenhos, nota de envio, instrução de obra, desenho de fabrico, modelo referenciado, concurso, construção, instantâneo, comparar
from: 4c732832
---

## O que vai fazer

Registe uma questão: que folhas saíram, em que data, para que finalidade, cada uma na sua revisão. Mais tarde, pergunte o que mudou desde essa questão. Guarde as instruções de obra e os desenhos de fabrico devolvidos junto da questão.

## Passos

1. No painel da esquerda, abra **Questões e revisões**.
2. Escolha **Registar uma questão**. A revisão é sugerida (A, depois B; uma revisão numerada, como P1, avança em contagem). Escolha para que finalidade é emitida, para quem vai, a data e as folhas. Quando a fase do projeto está definida, a finalidade segue-a. Quando o pacote de licenciamento tem uma lista de documentos de suporte, as folhas ligadas a essa lista ficam assinaladas automaticamente.
3. Deixe **Guardar também uma cópia do modelo como emitido** assinalado para manter o modelo exatamente como saiu. A cópia é transferida; o nome, o tamanho e o SHA-256 ficam guardados com a questão.
4. Escolha **Registar esta questão**. Uma folha que mudou desde a última emissão passa a ter a nova revisão. Uma folha que não mudou mantém a revisão que tem. A legenda de cada folha mostra a sua revisão.
5. Para ver o que mudou, escolha **Alterações desde** ao lado de uma questão. Cada folha indica Igual ou Alterada, com os elementos acrescentados, alterados e removidos nela. Clique num número para selecionar esses elementos.
6. Escolha **Adicionar um registo** para uma instrução de obra, um desenho de fabrico, um conjunto de anotações, um modelo referenciado ou uma nota. Escolha a questão a que se refere. Um ficheiro que escolher fica registado pelo nome, tamanho e SHA-256; o ficheiro fica onde está.
7. **Registo de alterações do desenho** mostra uma linha por cada folha e uma coluna por cada questão. **Transferir o registo de alterações (CSV)** guarda-o com as questões e os registos.
8. **Guardar o histórico de questões** grava um ficheiro `.issues.json`. O MarkupCraft, o TakeoffCraft e o DetailCraft leem-no com **Ler um histórico de questões**.

## Bom saber

- O histórico fica guardado dentro do ficheiro IFC (conjunto de propriedades `CadCraft_Issues` no projeto). Os outros programas ignoram-no.
- Uma folha conta como alterada quando a sua própria configuração mudou, ou quando um elemento que mostra mudou: uma planta mostra o seu nível, um alçado ou um corte mostra o modelo inteiro, e um mapa de portas ou janelas mostra as suas portas ou janelas.
- Um elemento conta como alterado quando mudou uma propriedade, a sua posição, o seu tamanho ou a sua forma.
- Para ver exatamente que propriedade mudou, abra a cópia guardada do modelo emitido com **Comparar versões**.
- Remover uma questão mantém os seus registos, sem questão. Cada passo é uma operação de Anular.
- Um modelo com mais de 60 000 elementos não guarda o registo de cada elemento com a questão. As folhas continuam a ser comparadas.

## Ainda não implementado

- As folhas não são guardadas como PDF com a questão.
- Uma nuvem de revisão não é desenhada nas folhas do próprio BimCraft. Registe as nuvens no MarkupCraft, junto da questão.
