---
title: Modelar a partir dun escaneo
summary: Un percorrido breve desde un escaneo láser ata os muros: abrir a nube de puntos xunto a un edificio novo, aliñala cun nivel e trazar os seus muros na planta.
keywords: escaneo, escaneo láser, nube de puntos, as-built, edificio existente, levantamento, trazar, escaneo a BIM, modelo a partir de escaneo, corte, aliñar, escuadra, LAS, LAZ, E57, PLY
from: ce3b9b37
---

## Que vai facer

Debuxar un edificio existente a partir do seu escaneo láser: muros onde os mostra o escaneo, no nivel correcto e en escuadra entre eles.

## Pasos

1. **Un edificio no que debuxar.** {{ui:Ficheiro}} › {{ui:Edificio novo}}, co número de niveis que teña o edificio (pode engadir niveis máis tarde; véxase [O terreo, o edificio que hai sobre el e os seus niveis](topic:site-building-and-levels)). {{ui:Debuxar}} actívase.
2. **O escaneo.** {{ui:Mostrar}} › {{ui:Nube de puntos}} e escolla o ficheiro (LAS, LAZ, E57, PLY, PCD, PTX ou XYZ: véxase [Mostrar unha nube de puntos xunto ao modelo](topic:point-clouds)). A nube aparece na vista 3D, e a planta mostra o seu **corte**: os puntos escaneados a 1200 mm (4 feet) por enriba do nivel, como puntos. Esa é a altura á que os muros, as portas e as xanelas se len mellor.
3. **Aliñala co nivel.** Abra o menú {{ui:Escaneo}} da barra do modelo e prema en {{ui:Aliñar o seu chan con este nivel}}: a nube sobe ou baixa ata que o chan que escaneou quede sobre o nivel amosado. Comprobe que o corte agora atravesa os muros.
4. **En escuadra co edificio.** {{ui:Escaneo}} › {{ui:Xirala para que quede a escuadra co edificio}} xira a nube para que os muros do seu corte queden ao longo dos eixos da planta, de xeito que os muros que debuxe con {{key:Shift}} mantido queden aliñados co escaneo. Xira arredor do centro dos muros que atopou, para que as árbores ou un muro veciño que caia no corte non desvíen o escaneo. Aliñe primeiro o chan: así o corte atravesa os muros.
5. **Trazar os muros.** Escolla {{ui:Muro}} e prema ao longo dos puntos: a ferramenta encaixa nos puntos escaneados (a marca de encaixe é un pequeno rombo) e tamén nos muros que xa debuxou. Un muro debúxase sobre a liña central, así que prema no medio das dúas filas de puntos que deixa un muro; para escribir o seu grosor, escolla antes o tipo de muro. Despois engada as portas e as xanelas onde o corte mostre os ocos.
6. **O seguinte nivel.** Escolla o nivel superior na lista de niveis da planta: o corte segue a altura de corte do nivel. Aliñe o chan con ese nivel de novo só se os chans do escaneo non están onde están os seus niveis.

## Que debe ver

- O corte cambia ao cambiar de nivel, e un corte máis grosso ({{ui:Escaneo}} › {{ui:Espesor da sección}}) mostra máis puntos onde o escaneo é fino.
- {{ui:Escaneo}} › {{ui:Desfacer o aliñamento}} devolve a nube ao lugar onde estaba cando se abriu. Aliñar move a nube só na vista: non se garda no ficheiro IFC, e os muros que debuxou quedan onde estaban. A aliñación vai coa nube cando cambia {{ui:Colocar}} ou {{ui:Unidades}}, ou cando abre outro modelo.
- {{ui:Escaneo}} › {{ui:Amosar a sección na planta}} oculta ou mostra os puntos.

:::tip
Escaneos grandes: a planta debuxa ata 60.000 puntos do corte e a vista 3D uns poucos millóns de toda a nube, escollidos de xeito uniforme ao longo do escaneo, así que un ficheiro grande segue sendo rápido. Para trazar no aplicativo de debuxo, use {{ui:Trazar en CadCraft}} na barra da nube.
:::
