---
title: Copiar, colar e duplicar itens da biblioteca
summary: Copie um item da biblioteca já colocado e cole-o onde clicar, no mesmo sítio ao lado do original ou noutro modelo; copie as propriedades de qualquer outro elemento como texto; anular e refazer.
keywords: copiar, colar, duplicar, área de transferência, colar no mesmo sítio, cortar, eliminar, selecionar tudo, anular, refazer, menu editar, mais, item da biblioteca, colocação, repetir, matriz
from: 6ac15931
---

## O que vai fazer

Coloque mais cópias de um item que já colocou: uma segunda bancada, uma fila de lavatórios. Este tópico trata de **itens da biblioteca colocados**, os elementos que o BimCraft escreveu no modelo; um deles pode ser colado em qualquer modelo, mesmo noutro separador. Paredes, portas e todos os outros elementos são copiados, cortados, colados e eliminados da mesma forma dentro do seu próprio modelo: veja [Eliminar, cortar, copiar e colar elementos de construção](topic:edit-elements).

Os comandos estão na barra de ferramentas por cima do modelo: {{ui:Anular}}, {{ui:Refazer}}, {{ui:Copiar}}, {{ui:Colar}} e {{ui:Mais}}, um menu com {{ui:Cortar}}, {{ui:Copiar}}, {{ui:Colar}}, {{ui:Colar no mesmo sítio}}, {{ui:Duplicar}}, {{ui:Eliminar}}, {{ui:Selecionar tudo}} e {{ui:Limpar seleção}}. Um comando que não pode atuar neste momento fica a cinzento; aponte para ele para ler o motivo, ou clique nele e a linha de estado diz porquê.

## Passos

1. Abra um modelo IFC com um item da biblioteca, ou coloque primeiro um. Veja [Colocar equipamento e mobiliário a partir da biblioteca](topic:place-from-library).
2. Clique no item na vista 3D. As suas propriedades mostram uma caixa **Item da biblioteca**.
3. Clique em {{ui:Copiar}} ou prima {{key:Mod+C}}.
4. Clique em {{ui:Colar}} ou prima {{key:Mod+V}}. A barra de colocação abre-se e uma caixa semitransparente segue o ponteiro, rodada como o original.
5. Prima {{key:R}} para a rodar 90°, {{key:Tab}} para encaixar a sua face traseira numa parede, ou escreva X e Y na barra de colocação.
6. Clique onde a cópia deve ir. Cada clique coloca outra cópia; prima {{key:Esc}} para parar.
7. Clique em {{ui:Guardar como IFC}} para transferir a cópia editada do modelo.

## Colar no mesmo sítio

{{ui:Mais}}, {{ui:Colar no mesmo sítio}} ou {{key:Mod+Shift+V}} cola sem clicar, nas mesmas coordenadas X e Y e com a mesma rotação:

- **Para o mesmo modelo, no mesmo piso**: dois itens exatamente no mesmo lugar não serviriam de nada, por isso a cópia fica mesmo ao lado do original, a largura do item mais 100 mm ao longo da sua própria largura. Volte a colar no mesmo sítio a partir da nova cópia para fazer uma fila.
- **Para outro piso ou para outro modelo**: exatamente o mesmo X, Y e rotação. O BimCraft usa o piso com o mesmo nome; se não houver nenhum, o da altura mais próxima. A linha de estado indica qual.

## Duplicar

{{ui:Mais}}, {{ui:Duplicar}} ou {{key:Mod+D}} copia o item escolhido e começa logo a colocá-lo: um passo em vez de dois.

## Para outro modelo ou outro separador

O que copia fica guardado neste navegador, por isso pode abrir outro modelo IFC, ou o BimCraft noutro separador, e colar aí. O outro modelo precisa do próprio item da biblioteca: o BimCraft tem-no quando o item foi colocado, trocado ou atualizado neste separador. Um item colocado numa sessão anterior só pode ser colado de novo no seu próprio modelo; noutro modelo, coloque-o a partir do separador {{ui:Biblioteca}}.

## O que deve ver

- A cópia no modelo, selecionada, com o mesmo item da biblioteca, licença, dados de equipamento, quantidade e nota do original, e o **número de item livre seguinte**. Altere o número em Propriedades, em `CadCraft_Placement`.
- "Colocado: *item* (item *n*)" na lista de alterações. {{key:Mod+Z}} anula-o; {{key:Mod+Y}} volta a colocá-lo.

## Bom saber

- As cópias partilham o tipo do original, por isso todas usam um só conjunto de geometria, como acontece ao colocar o mesmo item duas vezes.
- {{ui:Anular}} e {{ui:Refazer}} abrangem todas as alterações: valores editados, colocações, colagens, trocas e atualizações. Refazer repõe uma colocação no mesmo lugar; uma nova alteração elimina o que podia ser refeito.
- Na vista 2D de um desenho não há nada para selecionar, por isso não há nada para copiar. Use {{ui:Editar no CadCraft}} para alterar o desenho, quando aparecer.

## Erros comuns

- **{{ui:Colar}} diz que os elementos vêm de outro modelo.** A última coisa que copiou foi um elemento de construção, ou vários: esses colam-se só no seu próprio modelo. Escolha um item da biblioteca colocado e copie-o.
- **{{ui:Colar}} diz que a cópia vem de outro modelo sem o seu item da biblioteca.** Coloque o item a partir do separador {{ui:Biblioteca}} uma vez neste separador, depois copie e cole.
- **{{key:Mod+C}} copia texto da página.** Tinha texto selecionado na página. Clique primeiro no modelo.

## Relacionados

- [Teclas e rato](topic:keyboard#edit)
- [Definições do BimCraft](topic:settings)
