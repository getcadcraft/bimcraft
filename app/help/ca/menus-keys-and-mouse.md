---
title: Menús, tecles i ratolí
summary: Trieu un estil de menú que encaixi amb la manera de treballar que ja teniu, doneu a qualsevol ordre la vostra pròpia tecla, mogueu ordres entre menús, i definiu què fan la roda i cada botó del ratolí.
keywords: estil de menú, menús, barra de menús, cinta, línia d'ordres, dreceres de teclat, tecles de drecera, tecles, personalitza, reassigna, ratolí, roda, inverteix, sentit del zoom, botó del mig, desplaça, orbita, tecles de dues lletres, exporta, importa, canvi, familiar
from: a424e836
---

Les ordres de BimCraft són les mateixes per on hi arribeu. Un **estil de menú** només decideix on apareixen a la pantalla, com es diuen allà i quines tecles les executen, de manera que podeu mantenir els hàbits que ja teniu. Trieu-ne un a {{ui:Configuració}} ({{key:Mod+,}}) › {{ui:BimCraft}} › {{ui:Menús, tecles i ratolí}}; el canvi és immediat, i aquest navegador el recorda.

## Els cinc estils

| Estil | Què obteniu |
|---|---|
| {{ui:CadCraft}} | La barra d'eines i les tecles pròpies de BimCraft ({{key:W}} mur, {{key:D}} porta, {{key:N}} finestra, {{key:X}} secció, {{key:F}} ajusta). L'inici. |
| {{ui:Disseny de casa}} | Una barra de menús (Fitxer, Edita, Compilació, Biblioteca, 3D, CAD, Eines, Vista) sobre una fila d'eines de construcció, tal com les organitzen els programes de disseny d'habitatges. Les mateixes tecles d'una sola lletra, més {{key:Mod+L}} per a la biblioteca, {{key:F9}} per a la vista 3D, {{key:F10}} per a la planta i {{key:F11}} per a totes dues. |
| {{ui:Cinta BIM}} | Pestanyes de botons grans (Arquitectura, Insereix, Anota, Modifica, Vista, Sortida) amb un menú Fitxer i botons ràpids a la dreta. Tecles de dues lletres: {{key:W}} i després {{key:A}} per a un mur, {{key:D}} {{key:R}} porta, {{key:W}} {{key:N}} finestra, {{key:S}} {{key:C}} secció, {{key:Z}} {{key:F}} ajusta. El botó del mig desplaça; {{key:Shift}} i el botó del mig orbiten. |
| {{ui:Dibuix clàssic}} | Una cinta petita i una línia d'ordres, per a qui escriu ordres: WALL, DOOR, WINDOW, ROOF, U (desfés), ZOOM, SECTION, PLOT, INSERT, HELP. Comenceu a escriure en qualsevol lloc i les lletres van a la línia d'ordres; {{key:Enter}} l'executa, {{key:Enter}} sense res repeteix l'última ordre, {{key:Esc}} la neteja. |
| {{ui:Visor}} | Per obrir i revisar models en lloc de dibuixar-los: menús {{ui:Fitxer}}, {{ui:Vista}}, {{ui:Mostra}}, {{ui:Comprova}} i {{ui:Edita}} sobre una fila d'eines de visualització (ajusta, superior, frontal, lateral, secció, mesura, amaga, aïlla, transparent, mostra-ho tot, recorregut). Les eines de construcció esperen en un menú {{ui:Model}} al final. Les mateixes tecles que a l'estil propi de BimCraft. |

Els menús i les cintes apareixen quan obriu un model o comenceu un edifici nou; abans, el tauler de l'esquerra obre fitxers i inicia edificis.

:::tip
Una tecla que pertany al disseny propi de BimCraft però no a l'estil que heu triat no fa res, i la línia d'estat diu on ha anat la seva ordre («A la cinta BIM, Secció és SC»). {{key:Delete}}, {{key:Esc}}, {{key:Enter}}, {{key:Tab}}, {{key:Space}} i les fletxes mantenen sempre el seu significat, i una eina en curs manté les seves pròpies tecles: {{key:R}} i {{key:Tab}} mentre col·loqueu, {{key:W}} {{key:A}} {{key:S}} {{key:D}} mentre camineu, {{key:H}} amb les eines de porta i finestra, i els números mentre escriviu una longitud.
:::

## Feu-lo vostre

1. Escolliu l'estil més proper al que voleu i després cliqueu {{ui:Personalitza…}}.
2. A {{ui:Tecles i menús}}, cerqueu una ordre (el quadre de cerca ajuda). Cliqueu {{ui:Afegeix una tecla}} i premeu la tecla, o dues tecles seguides per a una tecla de dues lletres. Cliqueu una tecla per treure-la.
3. Amb una barra de menús o una cinta, {{ui:On es troba}} mou l'ordre a un altre menú o tauler, o a {{ui:Només tecles}}.
4. A {{ui:Ratolí}}, definiu la roda, els botons que desplacen la planta i què fa cada botó a les vistes 3D.
5. Doneu-li un nom i cliqueu {{ui:Desa}}.

Desar un estil integrat en crea una còpia pròpia («El meu Disseny de casa»); l'integrat no canvia mai. Una tecla assignada a dues ordres, o una que s'executaria abans que es pogués escriure una tecla de dues lletres, es mostra en vermell i s'ha de corregir abans de desar.

## Ratolí

- **Roda del ratolí**: {{ui:Desplaçar amunt apropa}} (la de l'inici) o {{ui:Desplaçar amunt allunya}}, i a quina velocitat. Un gest de pinça del trackpad sempre apropa o allunya segons es mouen els dits.
- **Desplaça la planta i els dibuixos amb**: qualsevol dels botons esquerre, del mig i dret. {{key:Space}} i arrossegar també desplacen; un arrossegament amb el botó esquerre només desplaça allà on un clic no seleccionaria ni dibuixaria.
- **Arrossegament a les vistes 3D**: {{ui:Propi de cada vista}} manté els botons de BimCraft (l'esquerre orbita, el dret desplaça). O assigneu a cada botó orbitar, desplaçar, fer zoom o cap acció; {{key:Shift}} amb el botó intercanvia orbitar i desplaçar. Un clic sense arrossegar encara selecciona.

## Porteu-lo amb vosaltres

{{ui:Exporta}} desa l'estil en ús com un petit fitxer `.ccinput.json`; {{ui:Importa…}} n'afegeix un, des d'un altre ordinador o d'un company. Un fitxer importat només pot apuntar a les ordres pròpies de BimCraft: tot el que hi hagi a més (una ordre que aquesta versió no té, una tecla que aquí no funciona) es deixa fora i es compta a la línia d'estat. {{ui:Suprimeix aquest estil}} n'elimina un de propi.

:::note
Aquests ajustaments es queden en aquest navegador. {{ui:Usa aquest estil a totes les aplicacions}} sota les targetes d'estil fa que cada aplicació s'obri amb el seu estil corresponent (la seva pròpia barra d'eines, una barra de menús, una cinta o {{ui:Dibuix clàssic}}; {{ui:Visor}} és exclusiu de BimCraft i no té equivalent a les altres), amb els canvis que hàgiu fet a cada aplicació; una aplicació sense estil corresponent manté el seu. Triar un altre estil en una aplicació només canvia aquella aplicació.
:::

Relacionats: [Teclat i ratolí](topic:keyboard) · [Configuració de BimCraft](topic:settings) · [Ve d'altres programes BIM i de dibuix](topic:coming-from)
