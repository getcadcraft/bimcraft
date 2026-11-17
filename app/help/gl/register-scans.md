---
title: Rexistrar varios escaneos nun só
summary: Coloque escaneos tomados desde posicións diferentes nun mesmo marco mediante pares de puntos escollidos ou destinos escritos, afíneos con ICP, garde o rexistro como proxecto e exporte a nube rexistrada como LAS ou E57.
keywords: rexistrar, rexistro, escaneos, nube de puntos, icp, punto máis próximo iterativo, destinos, pares de puntos, transformación ríxida, aliñar, combinar, e57, las, escaneo a BIM
from: e8e270db
---

## Que farás

Varios escaneos dun mesmo lugar (cada un desde a súa propia posición do escáner) comezan nas súas propias coordenadas. Rexístreos: dea a cada escaneo unha colocación para que estean todos nun mesmo marco, despois garde iso como proxecto e escriba a nube rexistrada nun único ficheiro LAS ou E57.

## Colocar os escaneos

1. Abra o diálogo ({{ui:Register scans…}} no panel de inicio, ou {{ui:Show}} › {{ui:Register scans…}} cando hai un modelo aberto). {{ui:Add scans…}} acepta ficheiros LAS, LAZ, E57, PLY, PCD, PTX, PTS ou XYZ, ou arrástreos ao diálogo. Os escaneos con unidades diferentes recházanse cunha nota: convérta primeiro un deles.
2. Escolla {{ui:Scan to move}} e {{ui:Place against}}. A imaxe mostra cada escaneo no marco tal como está agora, cada un dunha cor: {{ui:Plan}}, {{ui:Front}} ou {{ui:Side}}; arrastre para desprazarse, use a roda para facer zoom.
3. **Por pares de puntos.** Prema {{ui:Pick a pair}}, despois un punto do escaneo a mover, e logo o mesmo lugar noutro escaneo (unha esquina, un destino, o pé dun piar). Faga isto polo menos tres veces, con puntos que non estean nunha mesma liña e que estean separados. Prema {{ui:Place by pairs}}: o escaneo cólocase cun axuste de mínimos cadrados, e **Sobrante** mostra canto falla aínda cada par. Un par cun número grande é unha mala escolla: elimínao coa cruz e volva colocar.
4. **Por destinos.** Se se coñecen as coordenadas verdadeiras dun punto (destinos topografados), prema {{ui:Pick, then type target}}, prema o punto no seu escaneo e escriba as coordenadas X, Y e Z do destino na fila. Os pares e os destinos escritos pódense mesturar libremente.

## Afinar con ICP

Os pares dan unha colocación aproximada. {{ui:Refine}} move o escaneo ata que as súas superficies se sitúen sobre as do outro escaneo: primeiro **punto a punto**, despois **punto a plano**. A táboa lista cada paso co seu erro e cantos puntos coincidiron; a liña enriba dela debuxa como baixa o erro. {{ui:Stop}} remata a execución despois do paso en curso e conserva o que chegou a acadar. {{ui:Undo}} desfai toda a execución (ou a última colocación); {{ui:Reset}} devolve o escaneo ás súas coordenadas do ficheiro.

Para que sexa rápido nun portátil, ICP traballa cunha parte reducida dos puntos ({{ui:Points used}}, de 5.000 a 60.000) e ignora as coincidencias máis afastadas que {{ui:Largest match distance}} (por defecto o 5 % do tamaño do escaneo, reducíndose a medida que se estabiliza). Necesita primeiro unha colocación aproximada: os escaneos que apenas se solapan informan de que non se poden facer coincidir. As superficies que só son planas ou só rectas non poden fixar unha posición ao longo de si mesmas; engada pares nese caso.

## Gardar e exportar

- {{ui:Save project}} escribe un pequeno ficheiro `.ccscans.json`: o nome e o tamaño de cada escaneo e unha pegada dos seus primeiros 64 KB, coa súa transformación. Non contén puntos. {{ui:Open project…}} atopa os ficheiros de escaneo polas súas referencias (os ficheiros deben engadirse primeiro) e restaura todas as transformacións.
- {{ui:Export LAS}} e {{ui:Export E57}} escriben un ficheiro con todos os escaneos no seu lugar rexistrado. Os puntos nunca se reescriben nos orixinais; a transformación aplícase á saída. Con {{ui:Ler cada punto dos ficheiros}} activado, cada ficheiro vólvese ler para cada punto (ata 20 millóns por escaneo); desactivado, só se escriben os puntos que se ven no visor.
- {{ui:Show registered cloud}} (BimCraft) escribe o LAS e ábreo na vista 3D xunto ao modelo, como calquera nube.

:::note
Non se envía nada. O rexistro traballa nas unidades propias dos ficheiros e mantén os milímetros: un LAS escríbese cunha escala que se axusta (ata 0,1 mm), un E57 con números de dobre precisión. Un sistema de coordenadas pásase ao LAS só cando todos os escaneos nomean o mesmo código EPSG. O escritor de E57 é propio; compróbase lendo os seus ficheiros de volta con este lector e con libE57Format.
:::
