---
title: Quantitativos para o TakeoffCraft
summary: Um clique envia os quantitativos do modelo ao TakeoffCraft — paredes por tipo, telhados por área inclinada, cumeeiras, espigões e rincões, fundações, portas e janelas, armários, dispositivos elétricos, área de piso e a lista de corte de madeira — marcados em uma planta de cada pavimento, com as composições dos pacotes de serviço nos itens.
keywords: levantamento de quantitativos, quantitativo, orçamento, orçar, lista de materiais, lista de materiais, takeoffcraft, quantitativos, área de parede, área de telhado, quadrados, sapata, concreto, cubic yards, lista de corte, madeira, pacote de serviço, composição
from: c5a745af
---

## O que você vai fazer

Transforme o modelo em uma lista de materiais e um orçamento no TakeoffCraft. O BimCraft desenha uma planta de cada pavimento em escala padrão, marca cada quantidade nela e coloca o levantamento dentro do PDF. O TakeoffCraft mede as marcações por conta própria, então cada número pode ser conferido na folha.

## Enviar

1. Clique em {{ui:Levantamento de quantitativos}} na barra do modelo (ao lado de {{ui:Folhas}}).
2. O TakeoffCraft abre em uma nova aba com as plantas. Quando perguntar, escolha abrir o levantamento encontrado no PDF.
3. Adicione seus preços na tabela de quantitativos do TakeoffCraft; as composições já listam os materiais.

:::note
Quando o TakeoffCraft não está disponível aqui, o botão baixa o PDF. Abra-o no TakeoffCraft depois: ele encontra o levantamento dentro do arquivo.
:::

## O que é medido

- **Paredes** por tipo e altura: seus eixos como trechos, com a altura da parede no item, para que o TakeoffCraft calcule o comprimento e a área da parede. Cada trecho traz as portas e janelas da parede, então o TakeoffCraft as deduz da área da parede uma vez, pela mesma regra das tabelas do BimCraft: os dois concordam em bruto, deduções e líquido. Os dados de levantamento de um tipo de parede (unidade, argamassa, custo unitário; veja [Composições de paredes](topic:wall-assemblies)) chegam como uma linha com preço no item desse tipo. Com um método de medição diferente do padrão (veja [Escolher um método de medição](topic:plan-schedules-and-pdf#choose-a-measurement-method)), o levantamento traz o método, cada trecho traz o que as junções deduzem de sua face da parede, e o TakeoffCraft mede pelo mesmo método e o nomeia. Um tipo cuja unidade tem comprimento e altura transfere dois componentes com quantidades: as unidades a encomendar e o volume de argamassa, com preço quando o custo do tipo é por unidade, por 1000 unidades ou por m³ de argamassa. Uma contagem que cai exatamente em um número inteiro pode ficar uma unidade acima no TakeoffCraft, porque a transferência arredonda as posições na folha.
- **Telhados**: cada plano do telhado como uma área com sua inclinação (o TakeoffCraft calcula a área inclinada), cumeeiras, espigões e rincões (espigões e rincões ao longo da sua inclinação), beirais e empenas.
- **Fundações**: sapatas e baldrames como trechos ao longo de seus eixos, lajes como áreas com sua espessura, para que o concreto saia por volume.
- **Portas e janelas** contadas por tipo, com guarnições de janela.
- **Armários de base** pelo comprimento de suas frentes.
- **Dispositivos elétricos** contados por tipo.
- **Área de piso** de cada pavimento, a partir de seus ambientes.
- **A lista de corte de madeira** do madeiramento, contada em uma folha própria (um ponto por peça).

Onde um pacote de serviço tem uma composição correspondente — paredes externas e internas, lajes, sapatas, baldrames, telhas, cumeeira e capa de espigão, rincões, beirais, portas internas, guarnições de janela, armários de base, tomadas, interruptores, luminárias, caixas de passagem e o quadro — o item vem com seus materiais e fórmulas. Os pacotes vêm sem preços e ainda não foram revisados por um orçamentista.

:::tip
As plantas são feitas a partir do modelo a cada clique, então, após uma alteração, basta clicar em {{ui:Levantamento de quantitativos}} novamente.
:::
