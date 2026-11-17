---
title: Cantidades para TakeoffCraft
summary: Un clic envía as cantidades do modelo a TakeoffCraft — muros por tipo, cubertas por superficie inclinada, cumieiras, cadeiras e regueiros, cimentacións, portas e xanelas, armarios, dispositivos eléctricos, superficie dos pisos e a lista de corte de madeira — marcadas nunha planta de cada nivel, cos conxuntos dos paquetes de oficios nos elementos.
keywords: medición, cuantificación, orzamento, estimación, lista de materiais, takeoffcraft, cantidades, superficie de muro, superficie de cuberta, cadrados, zapata, formigón, metros cúbicos, lista de corte, madeira, paquete de oficio, conxunto
from: c5a745af
---

## Que vai facer

Converta o modelo nunha lista de materiais e nun orzamento en TakeoffCraft. BimCraft debuxa unha planta de cada nivel a unha escala estándar, marca nela cada cantidade e pon a medición dentro do PDF. TakeoffCraft mide as marcas por si mesmo, así que cada número pode comprobarse na folla.

## Enviala

1. Prema {{ui:Medición}} na barra do modelo (xunto a {{ui:Follas}}).
2. TakeoffCraft ábrese nunha nova lapela coas plantas. Cando pregunte, escolla abrir a medición que atopou no PDF.
3. Engada os seus prezos na táboa de cantidades de TakeoffCraft; os conxuntos xa listan os materiais.

:::note
Cando TakeoffCraft non está dispoñible aquí, o botón descarga o PDF no seu lugar. Ábrao en TakeoffCraft máis tarde: atopa a medición dentro.
:::

## Que se mide

- **Muros** por tipo e altura: as súas liñas centrais como tramos, coa altura do muro no elemento, de xeito que TakeoffCraft dá a lonxitude e a superficie do muro. Cada tramo leva as portas e xanelas do muro, así que TakeoffCraft as resta da superficie do muro unha vez, coa mesma regra que os cadros de BimCraft: os dous coinciden en bruto, deducións e neto. Os datos de medición dun tipo de muro (unidade, morteiro, tarifa; vexa [Conxuntos de muros](topic:wall-assemblies)) veñen como unha liña con prezo no elemento dese tipo. Cun método de medición distinto do predeterminado (vexa [Escoller un método de medición](topic:plan-schedules-and-pdf#choose-a-measurement-method)), a medición leva o método, cada tramo leva o que as xuntas quitan da súa cara do muro, e TakeoffCraft mide polo mesmo método e dálle o seu nome. Un tipo cuxa unidade ten lonxitude e altura entrega dous compoñentes con cantidades: as unidades que hai que pedir e o volume de morteiro, con prezo cando a tarifa é por unidade, por 1000 unidades ou por m³ de morteiro. Un conteo que cae exactamente nun número enteiro pode ser unha unidade máis en TakeoffCraft, porque a entrega redondea as posicións na folla.
- **Cubertas**: cada plano de cuberta como superficie coa súa pendente (TakeoffCraft dá a superficie inclinada), cumieiras, cadeiras e regueiros (cadeiras e regueiros ao longo da súa pendente), aleiros e beirís.
- **Cimentacións**: zapatas e muros de cimentación como tramos que pasan polo seu centro, lousas como superficies coa súa espesura, de xeito que o formigón sae por volume.
- **Portas e xanelas** contadas por tipo, con marcos de xanela.
- **Armarios baixos** pola lonxitude das súas fronte.
- **Dispositivos eléctricos** contados por clase.
- **Superficie de cada nivel**, a partir dos seus cuartos.
- **A lista de corte de madeira** a partir da estrutura, contada nunha folla propia (un punto por peza).

Cando un paquete de oficio ten un conxunto correspondente —muros exteriores e interiores, lousas, zapatas, muros de cimentación, tellas, cumieira e cadeiras, regueiros, aleiros, portas interiores, marcos de xanelas, armarios baixos, tomas, interruptores, luces, caixas de conexión e o cadro eléctrico—, o elemento vén cos seus materiais e fórmulas. Os paquetes veñen sen prezos e aínda non os revisou ningún orzamentista.

:::tip
As plantas fanse co modelo cada vez que fai clic, así que despois dun cambio basta con premer de novo {{ui:Medición}}.
:::
