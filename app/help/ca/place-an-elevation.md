---
title: Col·loca un alçat i obre'n la vista
summary: Col·loca un marcador d'alçat a la planta, indica'n la direcció de la mirada i després troba'n el dibuix al navegador del projecte, edita'l i posa'l en un full. Passos per als dissenys de cinta i per al disseny clàssic.
keywords: alçat, vista d'alçat, marcador d'alçat, etiqueta d'alçat, col·locar un alçat, alçat nou, crear un alçat, alçat exterior, vista lateral, vista frontal, vista des d'un punt, on és el meu alçat, obrir alçat, alçat en un full, girar alçat, canviar el nom de l'alçat, alçat nord, vistes en mosaic, dividir la vista, planta i 3D un al costat de l'altre
from: a7cfd2b9
---

## Què farà

Crearàs un alçat propi: un dibuix de l'edifici vist des d'un punt que triïs, mirant en la direcció que triïs. Només cal fer dos clics sobre una planta. El dibuix apareix després amb els altres alçats de l'edifici.

:::note
Els quatre costats ja hi són. Cada edifici té els alçats Nord, Est, Sud i Oest al {{ui:Navegador del projecte}}, sota {{ui:Alçats}}, sense haver de col·locar res. Col·loca'n un de propi quan vulguis una vista des d'un altre lloc: perpendicular a una ala inclinada, des d'un pati interior o d'una paret dins d'una sala.
:::

## On és l'eina

- Dissenys amb cinta: {{ui:Vista}} › **Crea** › {{ui:Elevació}}.
- Disseny clàssic: activa {{ui:Dibuixa}} i després {{ui:Compilació}} › {{ui:Elevació}}.
- Qualsevol estil de menú: l'ordre s'anomena Elevació; la paleta d'ordres la troba i la línia d'ordres accepta ELEVATION.

## Passos

1. Tria {{ui:Elevació}}. Un alçat es col·loca sobre una planta; per tant, si eres a la vista 3D, BimCraft mostra la planta del nivell on eres. El punter diu **Feu clic on s'ha de situar l'alçat**.
2. Fes clic des d'on es pren la vista. Per a un alçat exterior, fes clic fora de l'edifici, una mica allunyat de la paret que vols veure.
3. El punter diu ara **Feu clic en la direcció de la mirada**. Mou-te cap a l'edifici: una fletxa indica la direcció i la línia curta que travessa el primer clic és la vora des d'on es mira. Fes clic.
4. Apareix a la planta un cercle amb un número i un punter. És el marcador d'alçat. El primer és el 1, el següent el 2.
5. Prem Esc per acabar, o continua i col·loca'n un altre.

Col·locar un marcador és un sol pas: {{key:Mod+Z}} el desfà.

## Obre el dibuix

Després del segon clic la planta continua davant teu. El dibuix és al {{ui:Navegador del projecte}}:

1. Obre {{ui:Alçats}}. El teu apareix després dels quatre costats com a **Elevació 1**.
2. Fes clic al botó del llapis {{ui:Edita en aquesta vista}} de la seva fila per veure el dibuix i treballar-hi: moure murs, portes, finestres i nivells, afegir notes i cotes. Consulta [Edició en alçats i seccions](topic:edit-in-elevations).
3. Fes clic a la mateixa fila per obrir el conjunt de dibuixos, o afegeix la vista a un full propi. Consulta [Vistes i fulls](topic:views-and-sheets).

En el disseny clàssic el navegador del projecte és al panell de l'esquerra mentre {{ui:Dibuixa}} està activat. En els dissenys amb cinta és la pestanya {{ui:Navegador de projecte}} sota Propietats.

## Què mostra la vista

- Tot el que hi ha davant del marcador, fins on arriba l'edifici. Res del que hi ha darrere.
- Els nivells, amb els seus noms i alçades.
- Si el marcador és dins de l'edifici, allò on es troba queda tallat en aquell punt, com ho faria una secció. Per a un alçat exterior net, col·loca't a fora.

## Canvia'l

Selecciona el marcador a la planta (fes clic al seu cercle amb {{ui:Selecciona}}). Propietats té:

- {{ui:Etiqueta}}: el seu número o un nom propi, de fins a 8 caràcters.
- {{ui:Inverteix la vista}}: mira en la direcció contrària des del mateix punt.
- {{ui:Mira fins a}}: fins on arriba la vista davant del marcador. 0 mostra-ho tot.

Prem Suprimeix per eliminar el marcador i el seu dibuix. {{ui:Desfés}} ho torna a posar tot en el seu lloc.

:::tip
Per veure alhora la planta i la vista 3D mentre treballes, usa {{ui:Vista}} › **Finestres** › {{ui:Vistes en mosaic}} en els dissenys amb cinta, o {{ui:Divideix}} en el disseny clàssic. Un clic a una pestanya de vista torna a una sola vista.
:::

## Límits

- De moment no es pot arrossegar ni girar un marcador a la planta. Elimina'l i col·loca'l de nou, o usa {{ui:Inverteix la vista}}.
- A la llista de vistes que pots afegir a un full, un alçat propi apareix amb les seccions.
- Les etiquetes de portes i finestres es dibuixen als quatre alçats dels costats, no a un alçat que hagis col·locat tu.

## A l'IFC

El marcador es desa al fitxer com a IfcAnnotation anomenat "Elevation 1" amb el tipus d'objecte "Elevation marker", al nivell on s'ha col·locat. Un altre programa el mostra com una anotació; el dibuix en si el fa BimCraft a partir del model cada vegada.
