---
title: Talla un model IFC amb un pla de secció
summary: Talleu el model 3D des de dalt, des de davant o des de costat, o mantingueu només el que hi ha dins d'una caixa de secció o d'un volum de diverses caixes amb cares inclinades, per veure'n l'interior; mogueu el tall arrossegant-lo o escrivint-hi, inverteixu-lo i trieu què mostra el tall.
keywords: secció, pla de secció, caixa de secció, nanses, arrossega, marge, caixa de selecció, caixa de retall, tall, retall, llesca, tall en planta, planta, alçat, interior, inverteix, desplaçament, volum de secció, secció escalonada, en forma d'L, inclina, tall inclinat, pla oblic, pla addicional
from: 6315e71a
---

## Què farà

Talleu un model IFC amb un sol pla per veure'n l'interior: des de dalt per a una planta, o des de davant o des de costat per a una secció a través de l'edifici.

## Passos

1. Obriu un model IFC. Vegeu [Obre un model IFC i mira'l en 3D](topic:open-ifc-model).
2. Feu clic a {{ui:Secció}} a la barra d'eines, o premeu {{key:X}}. El model es talla a mig camí, i apareix una barra sota la barra d'eines.
3. Trieu des d'on tallar: {{ui:Superior}}, {{ui:Davant}} o {{ui:Lateral}}. Davant i Lateral també giren la vista per mirar el tall.
4. Mogueu el tall: arrossegueu el control lliscant **Desplaçament**, o escriviu una distància en metres a la caixa i premeu {{key:Enter}}. També podeu escriure mil·límetres, per exemple `1200 mm`.
5. Feu clic a {{ui:Inverteix}} per mantenir l'altre costat del tall.
6. Feu clic a un element del tall per veure'n les propietats.
7. Feu clic a {{ui:Desactivat}}, torneu a fer clic a {{ui:Secció}} o premeu {{key:X}} per treure el tall.

## Una caixa de secció

Feu clic a {{ui:Caixa}} a la mateixa barra per mantenir només el que hi ha dins d'una caixa. Cadascun de {{ui:X}}, {{ui:Y}} i {{ui:Z}} té dos controls lliscants: on comença i on acaba la caixa, en metres des de la vora del model. Els valors es mostren al costat.

- {{ui:Caixa al voltant de la tria}} ajusta la caixa als elements que heu triat i fa zoom sobre ells. Deixa 300 mm de marge a cada costat; canvieu-ho a {{ui:Configuració}} › {{ui:BimCraft}} › {{ui:Espai al voltant de la tria}}.
- Amb elements triats, {{ui:Mostra}} › {{ui:Caixa de secció al voltant de la tria}} o {{key:Shift+X}} fa el mateix en un sol pas, fins i tot quan no hi ha cap tall activat.
- Les **nanses** de la caixa la mouen amb el punter: arrossegueu un quadrat al centre d'una cara per moure aquella cara, un al centre d'una aresta per moure les dues cares que s'hi troben, o un a un cantó per moure les tres. Els controls lliscants segueixen el moviment. A {{ui:Superior}}, un cantó mou la caixa en planta; a {{ui:Davant}} o {{ui:Lateral}}, en alçat.
- {{ui:Tot el model}} torna a obrir la caixa a tot el model.
- {{ui:Superior}}, {{ui:Davant}} o {{ui:Lateral}} tornen a un sol pla.

## Un volum de diverses caixes, cares inclinades i plans addicionals

Una caixa no sempre és la forma que necessiteu: una secció escalonada, una ala en forma d'L o un tall al llarg d'un mur que no és quadrat amb la quadrícula.

1. A {{ui:Caixa}}, feu clic a {{ui:Afegeix una caixa}}. El tall ara manté el que hi ha dins de **qualsevol** de les caixes, de manera que dues caixes formen un volum escalonat o en forma d'L. La llista al costat indica quina caixa canvien els controls lliscants ({{ui:Caixa 1}}, {{ui:Caixa 2}}…); {{ui:Treu aquesta caixa}} n'elimina la triada. Un volum admet fins a 8 caixes.
2. Obriu {{ui:Inclinació i plans}} per donar forma a la caixa triada:
   - Trieu una {{ui:Cara}} i escriviu quant s'inclina en cada sentit, en graus (fins a 80). La cara gira al voltant del seu centre; les altres cares es queden on les han posat els controls lliscants. {{ui:Quadra}} la torna a posar.
   - {{ui:Afegeix un pla}} talla la caixa amb un pla més. {{ui:Cares}} és el sentit cap on mira el costat tallat, en graus des de X cap a Y; {{ui:Pendent}} és quant s'inclina cap amunt (0 per a un pla vertical, 90 per a un pla horitzontal); {{ui:Desplaçament}} és la distància del pla al centre de la caixa, en metres. × el treu. Una caixa admet fins a 6 plans addicionals.
3. On el volum talla sòlids, les cares tallades s'omplen com abans, també on dues caixes es toquen en un escaló.

:::tip
Si el contorn desapareix i no queda res, les inclinacions o els plans no deixen res dins d'aquella caixa; la barra ho indica. Torneu a inclinar una cara o canvieu el desplaçament d'un pla.
:::

## Un edifici girat al seu emplaçament

Molts models posen l'edifici en un angle respecte als eixos del fitxer (nord vertader, coordenades compartides). Quan els murs van en angle, una secció nova comença quadrada amb l'edifici: {{ui:Davant}}, {{ui:Lateral}} i la caixa van al llarg dels seus propis murs, i {{ui:Quadrat amb l'edifici}} a la barra de secció està activat. Feu-hi clic per als eixos del model, i de nou per tornar enrere (la barra d'estat indica en quant està girat l'edifici). Amb **Configuració › BimCraft › Un edifici girat al seu emplaçament › Tal com està al seu emplaçament**, les seccions i les vistes comencen en canvi amb els eixos del model. Vegeu [Configuració](topic:settings).

## Què hauríeu de veure

- **Superior** manté el que hi ha sota el tall, de manera que mireu cap avall a les sales. El desplaçament es mesura cap amunt des de la part inferior del model.
- **Davant** manté el que hi ha darrere del tall, vist des de davant; **Lateral** manté el que hi ha més enllà, vist des de costat. El desplaçament es mesura des del davant o el costat del model.
- Una fina línia de color indica on és el pla.
- On el pla talla un mur, un forjat o un altre sòlid, la cara tallada s'omple d'un color fosc, com una secció dibuixada. {{ui:Farciment}} a la barra l'activa i la desactiva.
- El cub de vistes a la cantonada inferior dreta gira el model per mirar el tall des de qualsevol costat.
- Fer clic tria allò que es veu: res del que s'ha tallat no es pot triar.

## Errors habituals

- **No ha canviat res.** El tall pot ser per sobre de la coberta o fora del model. Arrossegueu el control lliscant, o escriviu un desplaçament més petit.
- **El desplaçament ha saltat.** Una distància més enllà del model es mou al seu final, i la barra d'estat ho indica.
- **Una incidència només mostra part del meu volum.** Una incidència (BCF) manté una caixa amb les seves cares inclinades i plans: la primera caixa del volum. La barra d'estat ho indica quan creeu la incidència.
- **El tall és buit.** {{ui:Farciment}} a la barra està desactivat: feu-hi clic per omplir les cares tallades de murs, forjats i altres sòlids.
- **Un tall omplert es veu clapejat o li falta un tros.** L'omplert necessita sòlids tancats; un element la forma del qual al fitxer no és tancada (una sola làmina, fullatge d'arbre) queda sense omplir en lloc de pintar-lo per sobre. Un element fet de parts de colors diferents (un marc i el seu vidre) s'omple quan les seves parts es toquen.
- **On és la barra de secció?** Es troba a la part superior de la vista 3D que talla: a la meitat 3D a {{ui:Divideix}}, i sota la barra de dibuix a {{ui:Planta}} sola. En una vista baixa es desplaça.

## Següent

- [Mostra i amaga plantes, espais i arestes](topic:storeys-and-spaces)
- [Veure un dibuix DWG o DXF en 3D](topic:dwg-in-3d) — els dibuixos en 3D tenen el mateix pla de secció.
