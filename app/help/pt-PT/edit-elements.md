---
title: Eliminar, cortar, copiar e colar elementos de construção
summary: Selecione paredes, portas, mobiliário ou qualquer outro elemento de um modelo IFC; elimine-os, corte-os ou copie-os e cole-os onde clicar, no mesmo sítio ou noutro piso.
keywords: eliminar, remover, apagar, cortar, copiar, colar, duplicar, mover, selecionar tudo, selecionar todos, elemento de construção, parede, porta, janela, escada, abertura, anular
from: d9eec37f
---

## O que vai fazer

Altere o conteúdo de um modelo IFC: retire os elementos que não quer, copie uma parede ou um conjunto de mobiliário para outro sítio, ou mova elementos cortando-os e colando-os. Cada alteração é um passo que pode anular, e guardar grava um novo ficheiro, pelo que o original se mantém como estava.

## Passos

1. Abra um modelo IFC e explore-o em 3D. Consulte [Abrir um modelo IFC e explorá-lo em 3D](topic:open-ifc-model).
2. Selecione o que quer alterar: clique num elemento, mantenha {{key:Mod}} ou {{key:Shift}} premido e clique para selecionar mais, ou prima {{key:Mod+A}} ({{ui:More}}, {{ui:Select all}}) para selecionar todos os elementos apresentados.
3. Depois:
   - **{{ui:Delete}}:** prima {{key:Delete}}, ou {{ui:More}}, {{ui:Delete}}.
   - **{{ui:Copy}}:** prima {{key:Mod+C}} ou clique em {{ui:Copy}}.
   - **{{ui:Cut}}:** prima {{key:Mod+X}}, ou {{ui:More}}, {{ui:Cut}}. Os elementos desaparecem, e pode colá-los.
4. Para colar, prima {{key:Mod+V}} ou clique em {{ui:Paste}}. Uma caixa transparente com o tamanho do que copiou segue o ponteiro no piso escolhido na barra de colocação. Prima {{key:R}} para a rodar 90°, e depois clique onde deve ficar. Cada clique coloca outra cópia; prima {{key:Esc}} para parar.
5. Ou prima {{key:Mod+Shift+V}} ({{ui:More}}, {{ui:Paste in place}}): depois de um corte, os elementos voltam exatamente ao sítio onde estavam; depois de uma cópia, a cópia fica mesmo ao lado dos originais.
6. Clique em {{ui:Save as IFC}} para transferir o modelo editado.

## O que acompanha um elemento

- **Peças:** uma escada leva os seus lanços, uma parede-cortina os seus painéis, e qualquer elemento feito de peças leva todas.
- **Aberturas:** uma parede leva as aberturas nela feitas. Eliminar uma porta ou janela também elimina a abertura que preenchia, para que a parede feche, como acontece num programa de autoria. Eliminar uma parede desenhada no BimCraft também elimina as suas portas e janelas e volta a unir as paredes que restam. Eliminar uma parede de um ficheiro feito noutro programa deixa as suas portas e janelas onde estavam.
- **Dados:** uma cópia tem o mesmo tipo, materiais, conjuntos de propriedades e quantidades que o original, e um novo GlobalId. Se alterar mais tarde um valor da cópia, o original fica como está.
- **Itens da biblioteca** mantêm os dados da biblioteca; uma cópia recebe o próximo número de item livre, e um item cortado e colado de novo mantém o seu.

## O que deve ver

- «Eliminado: …» ou «Colado: …» na lista {{ui:Changes}}. {{key:Mod+Z}} anula a última alteração; {{key:Mod+Y}} repõe-na.
- Depois de uma eliminação, a linha de estado diz quantas peças e aberturas também foram eliminadas.
- Os elementos colados ficam selecionados, por isso pode voltar a colar no mesmo sítio para fazer uma fila, ou eliminá-los.

## Bom saber

- As cópias usam a mesma geometria do original (o IFC permite que os elementos a partilhem), por isso o ficheiro cresce muito pouco.
- Os elementos de construção colados entram no modelo de onde foram copiados, no mesmo separador. Para usar itens da biblioteca colocados noutro modelo, copie um item de cada vez: consulte [Copiar, colar e duplicar itens da biblioteca](topic:copy-paste).
- Pisos, espaços, edifícios e o terreno não podem ser eliminados nem copiados. Selecione os elementos que estão neles. Um compartimento desenhado no BimCraft resulta das paredes que o rodeiam: elimine uma parede para unir dois compartimentos.
- Paredes, portas e janelas desenhadas com as ferramentas próprias de parede, porta e janela do BimCraft não podem ser copiadas, cortadas nem duplicadas por enquanto; a linha de estado indica-o. Desenhe-as de novo. Eliminar funciona.
- Copiar também coloca os nomes e as propriedades do que copiou na área de transferência, em texto, para colar numa folha de cálculo ou num e-mail.

## Erros comuns

- **{{ui:Delete}} está a cinzento.** Não há nada selecionado, ou só há pisos ou espaços. Pouse o cursor sobre ele para ler o motivo.
- **{{ui:Paste}} indica que os elementos vêm de outro modelo.** Abriu outro modelo depois de os copiar. Abra de novo o primeiro modelo e copie-os aí.
- **A cópia colada está noutro piso.** O {{ui:Storey}} da barra de colocação decide onde fica; escolha o piso antes de clicar.

## Relacionados

- [Ocultar, isolar e tornar elementos transparentes](topic:hide-and-isolate)
- [Teclas e rato](topic:keyboard#edit)
