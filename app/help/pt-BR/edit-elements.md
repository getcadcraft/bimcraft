---
title: Excluir, recortar, copiar e colar elementos construtivos
summary: Selecione paredes, portas, móveis ou qualquer outro elemento de um modelo IFC; exclua-os, recorte-os, ou copie e cole-os onde você clicar, no mesmo local ou em outro pavimento.
keywords: excluir, remover, apagar, recortar, copiar, colar, duplicar, mover, selecionar tudo, selecionar todos, elemento construtivo, parede, porta, janela, escada, abertura, desfazer
from: d9eec37f
---

## O que você vai fazer

Alterar o conteúdo de um modelo IFC: remover elementos que você não quer, copiar uma parede ou um conjunto de móveis para outro lugar, ou mover elementos recortando e colando. Cada alteração é uma única etapa que pode ser desfeita, e salvar grava um novo arquivo, então o original permanece como estava.

## Passos

1. Abra um modelo IFC. Veja [Abrir um modelo IFC e observar em 3D](topic:open-ifc-model).
2. Selecione o que deseja alterar: clique em um elemento, mantenha {{key:Mod}} ou {{key:Shift}} pressionado e clique para selecionar mais, ou pressione {{key:Mod+A}} ({{ui:Mais}}, {{ui:Selecionar tudo}}) para selecionar todos os elementos exibidos.
3. Em seguida:
   - **Excluir:** pressione {{key:Delete}}, ou {{ui:Mais}}, {{ui:Excluir}}.
   - **Copiar:** pressione {{key:Mod+C}} ou clique em {{ui:Copiar}}.
   - **Recortar:** pressione {{key:Mod+X}}, ou {{ui:Mais}}, {{ui:Recortar}}. Os elementos saem, e você pode colá-los.
4. Para colar, pressione {{key:Mod+V}} ou clique em {{ui:Colar}}. Uma caixa transparente do tamanho do que você copiou segue o ponteiro no pavimento escolhido na barra de posicionamento. Pressione {{key:R}} para girá-la em 90°, depois clique onde ela deve ir. Cada clique posiciona outra cópia; pressione {{key:Esc}} para parar.
5. Ou pressione {{key:Mod+Shift+V}} ({{ui:Mais}}, {{ui:Colar no mesmo local}}): depois de um recorte, os elementos voltam exatamente para onde estavam; depois de uma cópia, a cópia fica bem ao lado dos originais.
6. Clique em {{ui:Salvar como IFC}} para baixar o modelo editado.

## O que acompanha um elemento

- **Partes:** uma escada leva seus lances, uma parede-cortina leva seus painéis, qualquer coisa feita de partes leva todas elas.
- **Aberturas:** uma parede leva as aberturas feitas nela. Excluir uma porta ou janela também leva a abertura que ela preenchia, então a parede se fecha, como acontece em um programa de autoria. Excluir uma parede desenhada no BimCraft também exclui suas portas e janelas e une as paredes que restam. Excluir uma parede de um arquivo feito em outro lugar deixa suas portas e janelas onde estavam.
- **Dados:** uma cópia tem o mesmo tipo, materiais, conjuntos de propriedades e quantidades do original, e um novo GlobalId. Alterar um valor na cópia depois não afeta o original.
- **Itens da biblioteca** mantêm os dados da biblioteca; uma cópia recebe o próximo número de item livre, e um item recortado e colado de volta mantém o seu.

## O que você deve ver

- "Excluído: …" ou "Colado: …" na lista {{ui:Alterações}}. {{key:Mod+Z}} desfaz a última alteração; {{key:Mod+Y}} a refaz.
- Depois de uma exclusão, a linha de status informa quantas peças e aberturas também foram removidas.
- Os elementos colados ficam selecionados, então você pode colar no mesmo local de novo para criar uma fileira, ou excluí-los.

## Vale saber

- As cópias usam a mesma geometria do original (o IFC permite que elementos compartilhem geometria), então o arquivo cresce muito pouco.
- Elementos construtivos são colados no modelo de onde foram copiados, na mesma guia. Para usar itens da biblioteca posicionados em outro modelo, copie um item por vez: veja [Copiar, colar e duplicar itens da biblioteca](topic:copy-paste).
- Pavimentos, espaços, edifícios e o terreno não podem ser excluídos nem copiados. Selecione os elementos contidos neles. Um ambiente desenhado no BimCraft vem das paredes ao redor: exclua uma parede para unir dois ambientes.
- Paredes, portas e janelas desenhadas com as ferramentas próprias de parede, porta e janela do BimCraft ainda não podem ser copiadas, recortadas ou duplicadas; a linha de status informa isso. Desenhe-as novamente. Excluir funciona.
- Copiar também coloca os nomes e as propriedades do que você copiou na área de transferência como texto, para colar em uma planilha ou em um e-mail.

## Erros comuns

- **{{ui:Excluir}} está desativado.** Nada está selecionado, ou só há pavimentos ou espaços selecionados. Aponte para o botão para ler o motivo.
- **Colar informa que os elementos vieram de outro modelo.** Você abriu outro modelo depois de copiá-los. Abra o primeiro modelo novamente e copie-os ali.
- **A cópia colada está em outro pavimento.** O {{ui:Pavimento}} da barra de posicionamento decide para onde ela vai; escolha o pavimento antes de clicar.

## Relacionados

- [Ocultar, isolar e tornar elementos transparentes](topic:hide-and-isolate)
- [Teclas e mouse](topic:keyboard#edit)
