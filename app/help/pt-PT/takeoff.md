---
title: Quantidades para o TakeoffCraft
summary: Um clique envia as quantidades do modelo para o TakeoffCraft — paredes por tipo, coberturas por área inclinada, cumeeiras, águas e rincões, fundações, portas e janelas, armários, dispositivos elétricos, área por piso e a lista de corte de madeira — marcadas numa planta de cada nível, com as composições dos pacotes das especialidades nos itens.
keywords: medição, medição de quantidades, orçamento, orçamentar, lista de materiais, lista de materiais, takeoffcraft, quantidades, área de parede, área de cobertura, quadrados, sapata, betão, metros cúbicos, lista de corte, madeira, pacote da especialidade, composição
from: c5a745af
---

## O que vai fazer

Transforme o modelo numa lista de materiais e num orçamento no TakeoffCraft. O BimCraft desenha uma planta de cada nível a uma escala padrão, marca cada quantidade nela e coloca a medição dentro do PDF. O TakeoffCraft mede as marcas por si, por isso cada número pode ser verificado na folha.

## Enviar

1. Clique em {{ui:Takeoff}} na barra do modelo (ao lado de {{ui:Sheets}}).
2. O TakeoffCraft abre num novo separador com as plantas. Quando perguntar, escolha abrir a medição que encontrou no PDF.
3. Acrescente os seus preços na tabela de quantidades do TakeoffCraft; as composições já listam os materiais.

:::note
Quando o TakeoffCraft não está disponível aqui, o botão transfere o PDF. Abra-o no TakeoffCraft mais tarde: ele encontra a medição lá dentro.
:::

## O que é medido

- **Paredes** por tipo e altura: os seus eixos como troços, com a altura da parede no item, para que o TakeoffCraft dê o comprimento e a área da parede. Cada troço leva as portas e janelas da parede, para que o TakeoffCraft as retire da área da parede uma única vez, pela mesma regra dos mapas do BimCraft: os dois coincidem no bruto, nas deduções e no líquido. Os dados de medição de um tipo de parede (unidade, argamassa, taxa; veja [Composições de parede](topic:wall-assemblies)) chegam como uma linha com preço nesse item do tipo. Com um método de medição diferente do predefinido (veja [Escolher um método de medição](topic:plan-schedules-and-pdf#choose-a-measurement-method)), a medição leva o método, cada troço leva o que as junções retiram da face da sua parede, e o TakeoffCraft mede pelo mesmo método e dá-lhe o nome. Um tipo cuja unidade tem comprimento e altura entrega dois componentes com quantidades: as unidades a encomendar e o volume de argamassa, com preço quando a taxa do tipo é por unidade, por 1000 unidades ou por m³ de argamassa. Uma contagem que cai exatamente num número inteiro pode ser uma unidade a mais no TakeoffCraft, porque a transferência arredonda as posições na folha.
- **Coberturas**: cada plano de cobertura como uma área, com a sua inclinação (o TakeoffCraft dá a área inclinada), cumeeiras, águas e rincões (águas e rincões ao longo da sua inclinação), beirais e oitões.
- **Fundações**: sapatas e muros de fundação como troços pelos seus eixos, lajes como áreas com a sua espessura, para que o betão saia por volume.
- **Portas e janelas** contadas por tipo, com guarnições de janela.
- **Armários de base** pelo comprimento das suas frentes.
- **Dispositivos elétricos** contados por tipo.
- **Área de cada piso**, a partir dos seus compartimentos.
- **A lista de corte de madeira** da estrutura, contada numa folha própria (um ponto por peça).

Sempre que um pacote de especialidade tem uma composição correspondente — paredes exteriores e interiores, lajes, sapatas, muros de fundação, telhas, cumeeira e remates de águas, rincões, beirais, portas interiores, guarnições de janela, armários de base, tomadas, interruptores, luminárias, caixas de derivação e o quadro —, o item vem com os seus materiais e fórmulas. Os pacotes vêm sem preços e ainda não foram revistos por nenhum orçamentista.

:::tip
As plantas são feitas a partir do modelo a cada clique, por isso, depois de uma alteração, clique em {{ui:Takeoff}} novamente.
:::
