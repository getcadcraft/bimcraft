---
title: Nível de desenvolvimento (LOD) e verificações de marcos
summary: Atribua a cada elemento um nível de desenvolvimento, veja de onde vem, verifique o modelo face ao LOD que um marco exige e corrija as etiquetas em falta e os compartimentos sem nome. Cada verificação apenas aconselha; nada é bloqueado.
keywords: lod, nível de desenvolvimento, lod 100, lod 200, lod 300, lod 350, lod 400, lod 500, marco, tabela de marcos, verificações do modelo, etiquetas em falta, compartimentos sem nome, genérico no início, classe IFC, classificação
from: 2091c79b
---

## O que vai fazer

Indique o grau de desenvolvimento de cada elemento e, depois, verifique o modelo inteiro face ao que um marco do projeto exige.

## Passos

1. Escolha um elemento (ou vários) e abra {{ui:Propriedades}}. Encontre {{ui:Nível de desenvolvimento}}.
2. Escolha um nível na lista. Cada nível é designado pelo que significa, e cada um inclui os anteriores. Um passo de anulação cobre toda a escolha.
3. Veja de onde vem o nível: deste elemento, do seu tipo, ou de uma marca verificada no local.
4. Para verificar o modelo, abra {{ui:Verificações do modelo}} à esquerda e, depois, {{ui:Marcos do LOD}}. Escolha o marco e a tabela (a tabela inicial, ou o seu próprio ficheiro CSV ou JSON com {{ui:Carga}}).
5. Clique em {{ui:Verificar o modelo}}. Os totais e uma linha por cada linha da tabela mostram o que atingiu o seu nível e o que não atingiu; as conclusões aparecem também na lista de problemas.
6. Em {{ui:Etiquetas em falta e compartimentos sem nome}}, clique em {{ui:Encontrar}}, edite as propostas, se quiser, e clique em {{ui:Aplicar}}.

## O que deve ver

- O nível escolhido no elemento, com a respetiva classe IFC e os códigos de classificação ao lado.
- Totais e linhas para o marco. Uma tabela nunca altera o que um nível significa: a escala é fixa, e a tabela indica apenas que nível um marco exige.
- « A manter os elementos genéricos no início »: aconselhamento para manter os elementos genéricos num marco inicial. É apenas um conselho.

## Bom saber

- Nada aqui bloqueia. Um modelo abaixo do nível que um marco exige é listado, não recusado.
- As três partes de um nível (geometria, informação, documentação) podem ser definidas uma a uma; uma marca mostra se está cumprido, abaixo ou não indicado.
