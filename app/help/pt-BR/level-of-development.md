---
title: Nível de desenvolvimento (LOD) e verificações de marcos
summary: Atribua um nível de desenvolvimento aos elementos, veja de onde ele vem, confira o modelo contra o LOD que um marco exige e corrija etiquetas ausentes e ambientes sem nome. Cada verificação apenas aconselha; nada é bloqueado.
keywords: lod, nível de desenvolvimento, lod 100, lod 200, lod 300, lod 350, lod 400, lod 500, marco, tabela de marcos, verificações do modelo, etiquetas ausentes, ambientes sem nome, genérico no início, classe ifc, classificação
from: 2091c79b
---

## O que você vai fazer

Defina até que ponto cada elemento está desenvolvido e depois verifique o modelo inteiro contra o que um marco do projeto exige.

## Passos

1. Escolha um elemento (ou vários) e abra {{ui:Propriedades}}. Encontre {{ui:Nível de desenvolvimento}}.
2. Escolha um nível na lista. Cada nível recebe o nome do que significa, e cada um inclui os níveis abaixo dele. Uma ação de desfazer cobre toda a seleção.
3. Veja de onde vem o nível: deste elemento, do seu tipo ou de uma marca verificada em campo.
4. Para verificar o modelo, abra {{ui:Verificações do modelo}} à esquerda, depois {{ui:Marcos do LOD}}. Escolha o marco e a tabela (a tabela inicial, ou seu próprio arquivo CSV ou JSON com {{ui:Carga}}).
5. Clique em {{ui:Verificar o modelo}}. Os totais e uma linha para cada linha da tabela mostram o que atingiu seu nível e o que não atingiu; os achados também aparecem na lista de problemas.
6. Em {{ui:Etiquetas ausentes e ambientes sem nome}}, clique em {{ui:Encontrar}}, edite as sugestões se quiser e clique em {{ui:Aplicar}}.

## O que você deve ver

- O nível que você escolheu no elemento, com a classe IFC e os códigos de classificação ao lado.
- Totais e linhas para o marco. Uma tabela nunca muda o significado de um nível: a escala é fixa, e a tabela apenas indica qual nível um marco exige.
- "Permanecer genérico no início": sugestão para manter os elementos genéricos em um marco inicial. É apenas uma sugestão.

## Bom saber

- Nada aqui bloqueia você. Um modelo abaixo do nível que um marco exige é listado, não recusado.
- As três partes de um nível (geometria, informação e documentação) podem ser definidas cada uma; uma marca indica atendido, abaixo ou não informado.
