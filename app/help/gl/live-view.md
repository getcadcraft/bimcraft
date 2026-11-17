---
title: A vista en directo
summary: Un panel ao lado do modelo que o mostra co aspecto en tempo real, con sol, sombras e luz reflectida, e que segue cada cambio que fai; percórrao e axuste a hora do día e o mes.
keywords: vista en directo, tempo real, render en tempo real, percorrido, camiñar, primeira persoa, presentación, cliente, segunda pantalla, segunda xanela, monitor, hora do día, sol, estación, mes, sombras, oclusión ambiental, reflexos, luz reflectida, iluminación global, webgpu, webgl
from: ea5c02bf
---

A vista en directo mostra o modelo co aspecto en tempo real: o ceo e o sol segundo o lugar e a data da súa obra, as sombras do sol, as pinturas e os materiais que lles deu aos elementos, as lámpadas e a luz que rebota nos muros e nos chans. Segue o que fai: se xira a vista 3D, tamén xira; se cambia o modelo, mostra o cambio un momento despois. Non se envía nada.

Debuxa a mesma escena, pinturas, lámpadas e sol que [Renderizar unha imaxe](topic:render); para unha imaxe acabada use esa.

## Abrila

1. Abra un modelo e escolla {{ui:Live view}} na barra de ferramentas. O panel abre sobre a aplicación, abaixo á dereita.
2. Arrastre a súa barra de título para movelo; estire a súa esquina para facelo máis grande.
3. {{ui:Live view in a new window}} (o botón ao lado) ou {{ui:New window}} no panel pásao a unha xanela propia, para unha segunda pantalla. Se o navegador bloquea as xanelas emerxentes, abre como panel.
4. {{ui:Close}} pecha a vista.

## Os controis

| Control | Que fai |
|---|---|
| {{ui:Follow the view}} | Activado: a vista en directo mira onde mira a vista 3D. Ao camiñar desactívase |
| {{ui:Walk}} | Percorre o modelo (abaixo) |
| {{ui:Gravity}} | Ao camiñar: pisar nos chans e subir escaleiras. Desactivado: voar |
| {{ui:Time}} | A hora do día. O sol móvese ao arrastrar |
| {{ui:Month}} | O mes, para ver o sol no inverno e no verán |
| {{ui:Quality}} | {{ui:For this computer}}, ou {{ui:Low}}, {{ui:Medium}} ou {{ui:High}} |

A liña inferior indica o que debuxa a vista (WebGPU ou WebGL 2), a calidade e a luz reflectida.

## Percorrer o modelo

1. Xire a vista 3D cara ao lugar onde quere estar e escolla {{ui:Walk}}. Queda de pé sobre o chan por debaixo do punto de vista da vista, 1,6 m de altura.
2. Prema na vista en directo e use logo {{key:W}} {{key:A}} {{key:S}} {{key:D}} ou as teclas de frecha. Manteña {{key:Shift}} para correr. Arrastre para mirar ao redor.
3. Os chanzos de ata 40 cm sóbense (escaleiras); calquera cousa máis alta é un muro. Os muros deteñen o paso e vostede esvara ao longo deles.
4. Con {{ui:Gravity}} desactivado voa: {{key:E}} sobe, {{key:Q}} baixa.
5. {{key:Esc}} detén o percorrido.

## Luz reflectida

A luz que rebota dun muro soleado sobre o chan, e o interior máis escuro dunha habitación, calcúlase en segundo plano en cada núcleo do procesador. Mentres traballa, a liña inferior di {{ui:Luz reflectida: 40 %}}; cando está lista, a vista a incorpora. Despois dun cambio, comeza de novo.

:::note
Isto é unha aproximación para unha vista en directo, non unha imaxe renderizada: os pequenos detalles entre os puntos reciben a luz reflectida dos puntos próximos.
:::

:::note
Os navegadores difiren. Onde o navegador ten WebGPU, a vista en directo usa esa tecnoloxía; noutro caso usa WebGL 2 e ten o mesmo aspecto. Sen ningunha das dúas, o panel díao.
:::
