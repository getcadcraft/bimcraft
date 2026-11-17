---
title: Comparar duas versões de um modelo
summary: Abrir duas versões do mesmo modelo IFC e ver que elementos foram acrescentados, removidos e alterados, com correspondência pelos seus GlobalId, e um CSV com cada alteração.
keywords: comparar, diferença, versões, revisão, alterações, alterado, acrescentado, removido, movido, globalid, guid, o que mudou
from: cfca6971
---

## O que vai fazer

Ver o que mudou entre o modelo que tinha e o que lhe foi enviado: que elementos são novos, quais desapareceram, quais foram movidos ou receberam novos valores de propriedades.

## Passos

1. Abra a versão mais recente, clique em {{ui:Adicionar um modelo…}} e escolha a mais antiga. Ver [Ver vários modelos IFC em conjunto](topic:several-models).
2. Em {{ui:Modelos}}, abra {{ui:Comparar versões}}.
3. Escolha a {{ui:Versão mais antiga}} e a {{ui:Versão mais recente}}.
4. Clique em {{ui:Comparar}}.
5. Clique num elemento de uma lista para o selecionar e ver as suas propriedades. Clique em {{ui:Transferir CSV}} para obter todas as alterações, propriedade a propriedade.
6. Clique em {{ui:Limpar}} para voltar à vista normal.

## O que deve ver

- Os elementos **acrescentados** a azul, da versão mais recente.
- Os elementos **removidos** a vermelho, da versão mais antiga.
- Os elementos **alterados** a ocre, da versão mais recente, indicando cada alteração: propriedades, uma deslocação com a distância, ou uma nova forma.
- Tudo o que é igual, transparente.

## Bom saber

- Os elementos são comparados pelo seu GlobalId. Um programa que dá novos GlobalIds a cada exportação faz com que todos os elementos pareçam removidos e acrescentados de novo.
- As posições são comparadas onde os modelos estão na cena. Se uma versão foi deslocada de propósito, alinhe-as primeiro com {{ui:Mover}} em {{ui:Modelos}}.
- Um GlobalId usado duas vezes no mesmo modelo fica de fora da comparação. [Verificar um modelo quanto a problemas comuns](topic:model-checks) encontra-os.

## Seguinte

- [Questões e ficheiros BCF](topic:issues-bcf)
- [Somar quantidades por propriedade](topic:quantity-totals)
