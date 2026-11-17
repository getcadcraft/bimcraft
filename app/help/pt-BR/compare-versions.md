---
title: Comparar duas versões de um modelo
summary: Abra duas versões do mesmo modelo IFC e veja quais elementos foram adicionados, removidos e alterados, pareados pelos GlobalIds, com um CSV de cada mudança.
keywords: comparar, diff, diferença, versões, revisão, mudanças, alterado, adicionado, removido, movido, globalid, guid, o que mudou
from: cfca6971
---

## O que você vai fazer

Veja o que mudou entre o modelo que você tinha e o que foi enviado para você: quais elementos são novos, quais sumiram, quais foram movidos ou receberam novos valores de propriedade.

## Passos

1. Abra a versão mais nova, depois clique em {{ui:Adicionar um modelo…}} e escolha a mais antiga. Veja [Ver vários modelos IFC juntos](topic:several-models).
2. Em {{ui:Modelos}}, abra {{ui:Comparar versões}}.
3. Escolha a {{ui:Versão anterior}} e a {{ui:Versão mais recente}}.
4. Clique em {{ui:Comparar}}.
5. Clique em um elemento em uma lista para escolhê-lo e ver as propriedades dele. Clique em {{ui:Baixar CSV}} para ver cada mudança, propriedade por propriedade.
6. Clique em {{ui:Limpar}} para voltar à vista normal.

## O que você deve ver

- Elementos **adicionados** em azul, da versão mais nova.
- Elementos **removidos** em vermelho, da versão mais antiga.
- Elementos **alterados** em ocre, da versão mais nova, cada um dizendo o que mudou: propriedades, um deslocamento com a distância, ou uma nova forma.
- Tudo que é igual, transparente.

## Bom saber

- Os elementos são pareados pelo GlobalId. Um programa que dá novos GlobalIds a cada exportação faz todo elemento parecer removido e adicionado de novo.
- As posições são comparadas onde os modelos estão na cena. Se uma versão foi movida de propósito, alinhe-as antes com {{ui:Mover}} em {{ui:Modelos}}.
- Um GlobalId usado duas vezes no mesmo modelo fica de fora da comparação. [Verifique um modelo quanto a problemas comuns](topic:model-checks) encontra esses casos.

## Próximo

- [Problemas e arquivos BCF](topic:issues-bcf)
- [Somar quantidades por propriedade](topic:quantity-totals)
