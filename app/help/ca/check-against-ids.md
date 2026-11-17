---
title: Comprova un model amb l'IDS d'un client
summary: Carregueu el fitxer .ids que us han donat i vegeu a Problemes tots els elements que no el compleixen, abans de lliurar l'IFC.
keywords: ids, information delivery specification, buildingsmart, requisits, lliurament, comprovació, validació, qa, eir, bep, propietat, classificació, material, contractació
from: 7b960222
---

## Què hi fareu

Un IDS (Information Delivery Specification, un estàndard de buildingSMART) és la llista del que ha de contenir un IFC: quines classes, quines propietats amb quins valors, classificacions, materials i on van les coses. Els clients i la contractació pública n'envien un amb l'obra. BimCraft comprova el model IFC obert contra aquest IDS i llista cada element que no arriba al mínim.

## Passos

1. Obriu un model IFC.
2. Obriu {{ui:Verifica amb un IDS}} al panell de l'esquerra, sota {{ui:Comprovacions del model}}, o trieu {{ui:Verifica contra IDS…}} del menú, segons l'estil de menú que useu.
3. Cliqueu {{ui:Carrega un fitxer .ids…}} i trieu el fitxer. No es puja res.
4. Llegiu el resultat: cada especificació amb {{ui:Superada}} o {{ui:No superada}} i a quants elements s'aplica.
5. Obriu Problemes ({{key:Ctrl+Shift+M}}) i cliqueu una fallada per triar l'element i fer-hi zoom.

## Què hauríeu de veure

- Un avís per cada element i requisit que no compleix, amb el nom de l'especificació, el que demana l'IDS i el que té l'element.
- Una especificació obligatòria que cap element del model compleix és un avís propi.
- L'informe de comprovació (a Problemes) comença amb l'IDS: el seu títol, la versió, l'autor i, per a cada especificació, els recomptes d'aplicables, superats i fallats.

## Bon de saber

- L'IFC només guarda una referència a l'IDS (el nom, el títol, la versió i un hash), no l'IDS en si: l'IDS d'un client pot ser confidencial, i l'IFC va a altres persones. L'IDS queda en aquest navegador al costat del model, així que quan torneu a obrir aquí l'IFC desat, es torna a comprovar. Carregar o oblidar l'IDS és un pas que podeu desfer.
- Si l'obriu en un altre ordinador o en un altre navegador, Problemes mostra una nota que diu que no s'ha trobat l'IDS: carregueu-lo de nou per tornar a comprovar.
- Per enviar l'IDS junt amb l'IFC, activeu {{ui:Mantén l'IDS dins de l'IFC}} a Configuració, a la pestanya BimCraft, abans de carregar-lo.
- Cada edició, desfer i refer es torna a comprovar un moment després.
- Els valors es comparen com ho fa l'IDS: el text exactament (les majúscules compten), i els nombres en unitats SI amb una petita tolerància (les longituds en metres, així que un model en mil·límetres es converteix primer).
- Una especificació escrita per a una altra versió d'IFC (per exemple, IFC2X3 quan el model és IFC4) es comprova igualment; el resultat ho indica.
- Si el fitxer IDS té errors que detectaria una auditoria d'IDS, el diàleg els llista; fallen les especificacions on són.
- Podeu acceptar una fallada amb un motiu, com qualsevol problema. Queda acceptada mentre els valors de l'element no canvien.

- Els patrons de l'IDS es llegeixen com a valor sencer. Un `^` al principi i un `$` al final també es prenen com a «tot el valor», com fan la majoria de fitxers IDS.

## Següent

- [Comprova un model per problemes habituals](topic:model-checks)
- [Canvia un mur o una porta](topic:change-a-wall-or-door)
