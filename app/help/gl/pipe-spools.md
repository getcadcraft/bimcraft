---
title: Tramos de tubaxe de aceiro e follas de tramos
summary: Corte unha liña de tubaxe de aceiro con soldadura a tope en tramos dunha lonxitude máxima e nas soldaduras en obra que coloque, numere cada tramo e descargue unha folla por tramo (vista 3D, lonxitudes de corte, accesorios, soldaduras, lista de materiais) en PDF e CSV; os condutos reciben unha lista de cortes de pezas rectas.
keywords: tramo, tramos, folla de tramo, isométrico, fabricación, prefabricación, soldadura en obra, soldadura en taller, soldadura a tope, lonxitude de corte, lista de cortes, lista de materiais, bom, tubaxe de aceiro, cédula 40, número de liña, lista de cortes de conduto, pezas de conduto
from: 539f51de
---

## O que vai facer

Converter unha liña de tubaxe de aceiro nas pezas que un taller solda e un montador instala: tramos que non superan unha lonxitude escollida, divididos onde coloque soldaduras en obra, cada un cunha folla propia.

Só a **tubaxe de aceiro con soldadura a tope** se corta en tramos (tamaños segundo ASME B36.10M, cóbados segundo ASME B16.9 de radio longo). As unións de cobre, PVC e PEX non son soldaduras a tope, polo que as súas liñas non teñen tramos.

## Cortar unha liña en tramos

1. Escolla unha liña de tubaxe de aceiro. En Propiedades, marque **Cortar en tramos**.
2. **Tramo máis longo**: a maior lonxitude de eixe que pode ter un tramo (6 m, uns 20 ft, como valor inicial).
3. **Número de liña**: parte do número de cada tramo. Unha liña nova en tramos recibe o seguinte número libre do seu sistema.

Os tramos numéranse ao longo da liña desde o seu primeiro punto: `CHW-12-S01`, `CHW-12-S02` … (o sistema, o número de liña, o tramo). Un tramo crece peza a peza; a peza que o faría demasiado longo inicia o seguinte, e unha lonxitude recta maior que un tramo córtase onde o tramo estea cheo.

## Colocar soldaduras en obra

1. Abra {{ui:Compilación}} e escolla {{ui:Soldadura en obra}}.
2. Faga clic sobre a tubaxe con tramos onde vai a soldadura en obra. Dentro dunha lonxitude recta a tubaxe córtase alí; dentro dun accesorio ou dunha válvula, a soldadura move-se á unión máis próxima.

Propiedades enumera as soldaduras en obra da liña, cada unha con {{ui:Eliminar}}. Cada cambio é un paso de {{ui:Desfacer}}.

## Follas de tramos

En Propiedades dunha liña con tramos:

- {{ui:Follas de tramos (PDF)}}: unha páxina por tramo. À esquerda, o tramo nunha vista isométrica de 30°: as súas lonxitudes rectas numeradas, as soldaduras en taller como puntos, as soldaduras en obra marcadas FW e o norte da planta. À dereita, o número do tramo, o tamaño, a cédula e a lonxitude; despois os seus **cortes de lonxitude**, os **accesorios**, as **soldaduras** (unha soldadura a tope en taller en cada unión dentro do tramo, e unha soldadura en obra onde se une co seguinte tramo) e a súa **lista de materiais** co peso da tubaxe (peso de extremos lisos ASME B36.10M).
- {{ui:Lista de tramos (CSV)}}: o mesmo, un bloque por tramo.

:::note
Os cortes de lonxitude son de extremo a extremo tal como se debuxan: non se descontan a abertura de raíz nin a marxe de soldadura. Os cóbados son de radio longo B16.9; os tes, reductores e válvulas son xenéricos, dimensionados segundo a tubaxe e non segundo B16.9 ou un fabricante, e a folla así o indica. Non se dan pesos de accesorios. Unha axuda de debuxo e coordinación, dimensionada por un enxeñeiro.
:::

## No ficheiro IFC

Cada peza dunha liña con tramos leva **CadCraft_Spool** co seu SpoolId, a liña, o número do tramo na liña e o punto onde comeza e onde remata ao longo da liña. A liña conserva as súas regras (tramo máis longo, soldaduras en obra, número de liña) no seu propio conxunto, polo que os tramos volven igual ao abrir de novo o ficheiro.

## Conductos: unha lista de cortes

Abra {{ui:Compilación}} e prema {{ui:Lista de cortes de conduto}}: un CSV das pezas rectas de conduto por sistema, forma e tamaño, cada tramo recto cortado en pezas da **Lonxitude da peza** da barra de Conduto (1500 mm, uns 5 ft, como valor inicial) e o resto. Só lonxitudes: sen xuntas, calibres nin conectores.
