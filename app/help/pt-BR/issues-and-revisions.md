---
title: Emissões, revisões e histórico de alterações do desenho
summary: Registre cada conjunto de folhas que você entrega, veja o que mudou desde então em cada folha e elemento, e mantenha instruções de obra, desenhos de fabricação e modelos vinculados associados à emissão a que pertencem.
keywords: emissão, conjunto emitido, conjunto enviado, envio, revisão, revisões, o que mudou, desde a emissão, histórico de alterações, histórico do desenho, registro de desenhos, transmittal, instrução de obra, desenho de fabricação, modelo vinculado, licitação, obra, instantâneo, comparar
from: 4c732832
---

## O que você vai fazer

Registre uma emissão: quais folhas saíram, em que data, para qual finalidade, cada uma na sua revisão. Depois, pergunte o que mudou desde essa emissão. Associe à emissão as instruções de obra e os desenhos de fabricação devolvidos.

## Passos

1. No painel esquerdo, abra **Emissões e revisões**.
2. Escolha **Registrar uma emissão**. A revisão é sugerida (A, depois B; uma revisão numerada, como P1, avança em contagem). Escolha para que ela é emitida, para quem vai, a data e as folhas. Quando a etapa do projeto está definida, a finalidade segue essa etapa. Quando o pacote para aprovação tem uma lista de documentos de apoio, as folhas vinculadas a essa lista são marcadas para você.
3. Deixe **Também salvar uma cópia do modelo como emitido** marcado para manter o modelo exatamente como saiu. A cópia é baixada; seu nome, tamanho e SHA-256 ficam guardados com a emissão.
4. Escolha **Registrar esta emissão**. Uma folha que mudou desde a última emissão recebe a nova revisão. Uma folha que não mudou mantém a revisão que tem. A legenda de cada folha mostra a sua revisão.
5. Para ver o que mudou, escolha **Alterações desde** ao lado de uma emissão. Cada folha mostra Igual ou Alterado, com os elementos adicionados, alterados e removidos nela. Clique em uma contagem para selecionar esses elementos.
6. Escolha **Adicionar um registro** para uma instrução de obra, um desenho de fabricação, um conjunto de marcações, um modelo vinculado ou uma nota. Escolha a emissão a que ele se refere. Um arquivo que você escolher é registrado pelo nome, tamanho e SHA-256; o arquivo continua onde está.
7. **Histórico de alterações do desenho** mostra uma linha para cada folha e uma coluna para cada emissão. **Baixar o histórico de alterações (CSV)** salva o histórico com as emissões e os registros.
8. **Salvar o histórico de emissões** grava um arquivo `.issues.json`. MarkupCraft, TakeoffCraft e DetailCraft o leem com **Ler um histórico de emissões**.

## Bom saber

- O histórico fica guardado dentro do arquivo IFC (conjunto de propriedades `CadCraft_Issues` no projeto). Outros programas o ignoram.
- Uma folha conta como alterada quando a própria configuração mudou, ou quando um elemento que ela mostra mudou: uma planta mostra o seu nível, uma elevação ou um corte mostra o modelo inteiro, e um quadro de portas ou janelas mostra as suas portas ou janelas.
- Um elemento conta como alterado quando uma propriedade, sua posição, seu tamanho ou sua forma mudou.
- Para ver exatamente qual propriedade mudou, abra a cópia salva do modelo emitido com **Comparar versões**.
- Remover uma emissão mantém os seus registros, sem emissão. Cada passo pode ser desfeito com Desfazer.
- Um modelo com mais de 60.000 elementos não guarda um registro de cada elemento na emissão. As folhas continuam sendo comparadas.

## Ainda não implementado

- As folhas não são salvas como PDF junto com a emissão.
- Uma nuvem de revisão não é desenhada nas folhas próprias do BimCraft. Registre as nuvens no MarkupCraft, associadas à emissão.
