---
title: Copiar, colar e duplicar itens da biblioteca
summary: Copie um item da biblioteca já posicionado e cole onde você clicar, no mesmo lugar ao lado do original ou em outro modelo; copie as propriedades de qualquer outro elemento como texto; desfazer e refazer.
keywords: copiar, colar, duplicar, área de transferência, colar no mesmo local, recortar, excluir, selecionar tudo, desfazer, refazer, menu editar, mais, item da biblioteca, posicionamento, repetir, matriz
from: 6ac15931
---

## O que você vai fazer

Coloque mais cópias de um item que você já posicionou: uma segunda bancada de trabalho, uma fileira de pias. Este tópico trata de **itens da biblioteca posicionados**, os elementos que o BimCraft gravou no modelo: um deles pode ser colado em qualquer modelo, até em outra guia. Paredes, portas e os demais elementos são copiados, recortados, colados e excluídos da mesma forma dentro do próprio modelo: veja [Excluir, recortar, copiar e colar elementos da construção](topic:edit-elements).

Os comandos ficam na barra de ferramentas acima do modelo: {{ui:Desfazer}}, {{ui:Refazer}}, {{ui:Copiar}}, {{ui:Colar}} e {{ui:Mais}}, um menu com {{ui:Recortar}}, {{ui:Copiar}}, {{ui:Colar}}, {{ui:Colar no mesmo local}}, {{ui:Duplicar}}, {{ui:Excluir}}, {{ui:Selecionar tudo}} e {{ui:Limpar seleção}}. Um comando que não pode agir no momento fica desativado; aponte para ele para ler o motivo, ou clique nele e a linha de status diz por quê.

## Passos

1. Abra um modelo IFC com um item da biblioteca, ou posicione um antes. Veja [Posicionar equipamentos e móveis da biblioteca](topic:place-from-library).
2. Clique no item na vista 3D. Suas propriedades mostram uma caixa **Item da biblioteca**.
3. Clique em {{ui:Copiar}} ou pressione {{key:Mod+C}}.
4. Clique em {{ui:Colar}} ou pressione {{key:Mod+V}}. A barra de posicionamento abre e uma caixa transparente segue o ponteiro, girada como o original.
5. Pressione {{key:R}} para girar 90°, {{key:Tab}} para encaixar o lado de trás dele em uma parede, ou digite X e Y na barra de posicionamento.
6. Clique onde a cópia deve ir. Cada clique posiciona outra cópia; pressione {{key:Esc}} para parar.
7. Clique em {{ui:Salvar como IFC}} para baixar a cópia editada do modelo.

## Colar no mesmo local

{{ui:Mais}}, {{ui:Colar no mesmo local}} ou {{key:Mod+Shift+V}} cola sem clicar, no mesmo X e Y e girado do mesmo modo:

- **No mesmo modelo, no mesmo pavimento**: dois itens exatamente no mesmo ponto não serviriam de nada, então a cópia vai logo ao lado do original, a largura do item mais 100 mm ao longo da largura do próprio item. Cole no mesmo local novamente a partir da nova cópia para formar uma fileira.
- **Em outro pavimento ou em outro modelo**: exatamente o mesmo X, Y e giro. O BimCraft usa o pavimento com o mesmo nome; se não houver nenhum, usa o de altura mais próxima. A linha de status informa qual foi.

## Duplicar

{{ui:Mais}}, {{ui:Duplicar}} ou {{key:Mod+D}} copia o item escolhido e começa a colá-lo imediatamente: uma etapa em vez de duas.

## Para outro modelo ou outra guia

O que você copia fica guardado neste navegador, então você pode abrir outro modelo IFC, ou o BimCraft em outra guia, e colar ali. O outro modelo precisa do próprio item da biblioteca: o BimCraft o tem quando o item foi posicionado, trocado ou atualizado nesta guia. Um item posicionado em uma sessão anterior só pode ser colado de novo no próprio modelo; em outro modelo, posicione-o pela guia {{ui:Biblioteca}}.

## O que você deve ver

- A cópia no modelo, selecionada, com o mesmo item da biblioteca, licença, dados do equipamento, quantidade e nota do original, e o **próximo número de item livre**. Altere o número em Propriedades, em `CadCraft_Placement`.
- "Posicionado: *item* (item *n*)" na lista de alterações. {{key:Mod+Z}} desfaz; {{key:Mod+Y}} refaz.

## Bom saber

- As cópias compartilham o tipo do original, então todas usam um mesmo conjunto de geometria, como acontece ao posicionar duas vezes o mesmo item.
- {{ui:Desfazer}} e {{ui:Refazer}} cobrem todas as alterações: valores editados, posicionamentos, colagens, trocas e atualizações. Refazer recoloca um posicionamento no mesmo lugar; uma nova alteração limpa o que podia ser refeito.
- Na vista 2D de um desenho não há nada a selecionar, então não há nada a copiar. Use {{ui:Editar no CadCraft}} para alterar o desenho, quando aparecer.

## Erros comuns

- **{{ui:Colar}} diz que os elementos vieram de outro modelo.** O último item copiado foi um elemento da construção, ou vários elementos: esses só colam no próprio modelo. Escolha um único item da biblioteca posicionado e copie-o.
- **{{ui:Colar}} diz que a cópia veio de outro modelo sem o item da biblioteca.** Posicione o item pela guia {{ui:Biblioteca}} uma vez nesta guia; depois copie e cole.
- **{{key:Mod+C}} copia o texto da página.** Havia texto selecionado na página. Clique primeiro no modelo.

## Relacionado

- [Teclas e mouse](topic:keyboard#edit)
- [Configurações do BimCraft](topic:settings)
