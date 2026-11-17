---
title: Obre una carpeta de projecte sencera
summary: Indiqueu a BimCraft una carpeta de projecte per veure alhora tots els models, les seves còpies de seguretat i els enllaços, i deixeu que el quadre Comença aquí suggereixi quin fitxer cal treballar.
keywords: carpeta, directori, carpeta de projecte, unitat de xarxa, servidor, comença aquí, quin fitxer, còpies de seguretat, enllaços, xrefs, carpetes recents, arrossega la carpeta
from: 16fbdce2
---

## Què hi fareu

Obriu una carpeta de projecte sencera, com la que us han lliurat per a una feina, i deixeu que BimCraft ho ordeni: quins models hi ha, quines còpies són de seguretat, què enllaça amb què, quins fitxers estan malmesos i quin fitxer és probablement el que voleu obrir.

Només es llegeixen els pocs kilobytes que necessita la fitxa de cada model, de manera que una carpeta en una unitat de xarxa o una carpeta de núvol sincronitzada és correcta.

## Passos

:::chromium
1. Feu clic a {{ui:Obre una carpeta}} a l'esquerra (o al mig de la pantalla buida).
2. Trieu la carpeta de projecte a la finestra que s'obre i feu clic a **Selecciona** (o **Puja** o **Obre**, segons el vostre sistema).
3. Feu clic a **Visualitza els fitxers** quan el navegador pregunti "Permetre que el lloc vegi els fitxers?". Això només permet que la pestanya llegeixi la carpeta; no es puja res.
4. Espereu mentre la línia d'estat compta: "Llistant la carpeta: … fitxers", i després "Comprovant els fitxers Revit: … de …".
:::

:::firefox
1. Feu clic a {{ui:Obre una carpeta}} a l'esquerra (o al mig de la pantalla buida).
2. Trieu la carpeta de projecte a la finestra que s'obre i confirmeu-ho. Firefox pot demanar que confirmeu que la pàgina pot llegir els fitxers de la carpeta; continuen a l'ordinador.
3. Espereu mentre la línia d'estat diu "Llegint la carpeta: … fitxers", i després "Comprovant els fitxers Revit: … de …".
:::

:::safari
1. Feu clic a {{ui:Obre una carpeta}} a l'esquerra (o al mig de la pantalla buida).
2. Trieu la carpeta de projecte a la finestra que s'obre i feu clic a **Puja**. Malgrat la paraula, res no surt del vostre Mac: els fitxers només es passen a la pestanya.
3. Espereu mentre la línia d'estat diu "Llegint la carpeta: … fitxers", i després "Comprovant els fitxers Revit: … de …".
:::

També podeu **arrossegar la carpeta** des de {{pick:mac=Finder|windows=Explorador de fitxers|linux=el gestor de fitxers}} fins a la pàgina. Una carpeta arrossegada s'obre sense cap demanda de permís en cap navegador.

## Què hauríeu de veure

L'informe de la carpeta omple el centre:

- El nom de la carpeta, els recomptes de models, dibuixos CAD, models IFC i fitxers, i la mida total.
- Notes en vermell o en ambre si hi ha fitxers incomplets o si falten fitxers enllaçats a la carpeta.
- El quadre {{ui:Comença aquí}}: el fitxer que BimCraft suggereix obrir, amb els motius.
- **Models**: una fila per model, amb les còpies de seguretat agrupades a sota.
- **Fitxers enllaçats i referenciats**, **Models IFC**, **Dibuixos CAD** i **Apartats**, quan la carpeta en tingui.

A l'esquerra, el tauler {{ui:Carpeta}} en fa el resum; **Problemes** diu "Cap" quan totes les còpies són correctes.

## Useu el quadre Comença aquí

El quadre indica un fitxer i diu per què, per exemple:

- "Treball desat més recent d'aquesta carpeta (3 de març de 2025)."
- "*Consultant.rvt* està enllaçat a altres models, així que és de fons, no el fitxer per editar."
- "*Tower.rvt* sembla l'opció òbvia, però està malmès; la seva darrera còpia en bon estat és del …"
- "Aquest és un model central: a Revit, obriu-lo amb "Create New Local" i treballeu a la còpia local."

1. Llegiu els motius.
2. Feu clic a {{ui:Obre'n la fitxa}} per llegir la fitxa d'aquest fitxer, o a {{ui:Mostra'l a la llista}} per trobar-ne la fila a **Models**.
3. Abans de fiar-vos-en, consulteu qui va treballar darrer en el projecte. El quadre també ho diu: és una suposició feta a partir de noms, dates i enllaços.

## Obre fitxers de l'informe

1. Feu clic al nom d'un model per obrir-ne la fitxa. La fitxa comprova cada enllaç amb la carpeta.
2. Feu clic a {{ui:Torna a}} i al nom de la carpeta a la part superior de la fitxa (o a {{ui:Torna a la carpeta}} a l'esquerra) per tornar-hi.
3. Feu clic a qualsevol fitxer IFC de **Models IFC** per obrir-lo en 3D.
4. Feu clic a qualsevol DWG o DXF de **Dibuixos CAD** per obrir-lo en 2D. Els seus dibuixos i imatges enllaçats es troben automàticament a la carpeta.

## Torna a obrir una carpeta més tard

:::chromium
Les carpetes que heu obert amb {{ui:Obre una carpeta}} o arrossegant apareixen a {{ui:Carpetes recents}} a l'esquerra. Feu clic a {{ui:Torna a obrir}} i al nom de la carpeta per obrir-la de nou sense haver-la de triar. Després de reiniciar el navegador, Chrome o Edge pregunten una vegada més; trieu "Permet en cada visita" per deixar de preguntar. La llista només es guarda en aquest navegador, mai no s'envia enlloc. Feu clic a × per oblidar una carpeta.
:::

:::firefox safari
Aquest navegador no pot recordar les carpetes entre visites. Trieu la carpeta de nou amb {{ui:Obre una carpeta}}, o arrossegueu-la.
:::

## Errors habituals

- **Triar una carpeta massa gran.** Més de 20.000 fitxers: "Aquesta carpeta té més de 20.000 fitxers. Trieu una carpeta més petita, com la d'un sol projecte." Trieu la carpeta del projecte, no tota la unitat.
- **Triar la carpeta pare de diversos projectes.** El quadre {{ui:Comença aquí}} aleshores tria entre projectes. Trieu un sol projecte.
- **Les carpetes pròpies de Revit semblen ignorades.** Les carpetes `*_backup`, `*_log` i `Revit_temp` són de manteniment i apareixen a **Apartats**, no es llegeixen.
- **Esperar que un model s'obri en 3D des de la seva fitxa.** Un fitxer de projecte només és una fitxa. Obriu-ne l'exportació IFC.
- **Telèfons i tauletes.** Molts navegadors mòbils no poden triar carpetes. Useu un ordinador.

Vegeu [Comprova una carpeta per detectar còpies malmeses, enllaços que falten i restes](topic:check-folder-health) i [Informe de la carpeta: rols, estats i enllaços](topic:folder-roles).
