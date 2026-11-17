---
title: Tubs i conductes
summary: Dibuixeu trams de tub i de conducte al plànol per la seva línia central; els colzes, les te, els reductors i les transicions es fan per vosaltres, els recorreguts pertanyen a sistemes amb ports connectats al fitxer IFC, i es mostren als plànols, als quadres i a l'amidament.
keywords: tub, tubs, canonada, fontaneria, conducte, conductes, instal·lacions mep, climatització, hvac, mecànic, colze, te, reductor, transició, accessori, accessoris, vàlvula, vàlvules, vàlvula de comporta, vàlvula de bola, vàlvula de globus, vàlvula de retenció, baixant, pendent, desguàs, sanitari, pluvial, ventilació, aigua freda, aigua calenta, aigua refrigerada, calefacció, gas, protecció contra incendis, aire d'impulsió, aire de retorn, extracció, sistema, sistemes, port, ports, connector, connectors, aparell, aparells sanitaris, vàter, lavabo, pica de cuina, dutxa, safareig, unitats de desguàs, UHC, DFU, dimensiona els desguassos, dimensionament de desguassos, ramal, col·lector, cabal, fricció, fricció igual, dimensionament, quadre, amidament, NBR 5648, NBR 5688, NBR 8160, PVC encolable, clavegueram, DN
from: 85140bc5
---

## Què farà

Dibuixeu els tubs i conductes d'un edifici com dibuixeu les parets: feu clic als cantons de la línia central d'un recorregut a l'alçada que heu definit. BimCraft fa els accessoris, posa cada peça al seu sistema i les connecta, de manera que altres programes llegeixen el recorregut com un sol sistema connectat.

## Dibuixa un tub

1. Activeu {{ui:Dibuixa}}, obriu {{ui:Compilació}} i trieu {{ui:Tub}}.
2. A la barra, trieu el **sistema** (aigua freda, aigua calenta, desguàs sanitari, gas...). Defineix un material habitual: coure per a l'aigua, PVC per als desguassos i les ventilacions, acer per a la calefacció, l'aigua refrigerada, el gas i la protecció contra incendis. Canvieu el **material**, la **classe** i la **mida** si cal. Les mides i els gruixos vénen de normes públiques: tub d'acer ASME B36.10M, tub de coure ASTM B88, PVC ASTM D1785 i PEX ASTM F876. En projectes brasilers es poden fer servir **tub d'aigua de PVC (NBR 5648)**, el PVC encolable per a aigua freda, i **tub de desguàs de PVC (NBR 5688)**, sèrie normal o reforçada, per als desguassos i les ventilacions: les seves mides es designen per DN (DN 25, DN 100). Un cop en trieu un, en triar un altre sistema es manté als tubs brasilers (tub de desguàs de PVC per a un desguàs sanitari, després del tub d'aigua de PVC).
3. Definiu **A**: l'alçada de la línia central del tub sobre el nivell.
4. Feu clic on comença el tub i a cada cantó. Feu doble clic, o premeu {{key:Enter}}, al darrer punt. {{key:Backspace}} desfà l'últim cantó; {{key:Esc}} descarta el recorregut.

El tub s'ajusta com ho fan les parets, i també als altres recorreguts: comenceu a l'extrem d'un tub per continuar-lo, o acabeu sobre la línia d'un tub per ramificar-lo. Un recorregut nou pren l'alçada del tub al qual s'ajusta.

Un recorregut que comença o acaba en un port d'un equip pren la seva mida i sistema, i queda fix a ell: vegeu [Equips MEP amb ports](topic:mep-equipment) i [Connecteu tubs i conductes a equips](topic:mep-connections).

## Estableix la norma de fontaneria del projecte

La primera llista de la barra de tub és la **norma de fontaneria** del model: **US (IPC, polzades)** o **Brasil (ABNT, DN)**. Es desa al model, de manera que tothom que obri el fitxer comença els recorreguts de la mateixa manera. Amb **US**, un recorregut nou comença en coure (aigua) o en PVC Schedule 40 (desguassos), en polzades, amb la pendent del International Plumbing Code. Amb **Brasil**, l'aigua freda comença com a PVC encolable DN 25, els desguassos sanitaris i pluvials i les ventilacions com a PVC per a clavegueram DN 100 amb la pendent de la NBR 8160, i l'aigua calenta en coure. També s'aplica a un recorregut que comença en un connector d'un aparell o en un port d'un equip. Els tubs ja dibuixats conserven el seu material i les seves pròpies taules; la llista de materials queda oberta, de manera que encara podeu dibuixar un recorregut brasiler en un model US a propòsit. Un fitxer sense cap elecció es comporta com abans: un recorregut nou segueix el material en ús.

## Dibuixa un conducte

1. Trieu {{ui:Conducte}}. Escolliu el sistema (impulsió, retorn, extracció o aire exterior) i la forma: circular, rectangular o oval pla.
2. Escriviu l'amplada i l'alçada (l'amplada d'un conducte circular és el seu diàmetre), i **A** per a l'alçada de la línia central.
3. Per dimensionar-lo a partir del cabal, escriviu el **Cabal** i la **Fricció** i feu clic a {{ui:Dimensiona-ho}}. El conducte es dimensiona per fricció igual, el mètode del capítol de disseny de conductes del ASHRAE Handbook, i s'arrodoneix a una mida de catàleg, de manera que la fricció surt igual o per sota del valor que heu escrit. Sense cap valor de fricció escrit, s'usa 0.08 in. d'aigua per cada 100 ft (0.8 Pa/m). Un conducte rectangular manté l'alçada que heu escrit i en rep una amplada; BimCraft ho indica quan els seus costats superen la proporció 4 a 1.
4. Feu clic als cantons com en un tub.

## Aparells sanitaris

{{ui:Compilació}} › {{ui:Col·loca família}} ofereix cinc aparells per començar, cadascun amb un desguàs i un connector d'aigua freda: un **Vàter**, un **Lavabo**, una **Pica de cuina**, un **Plat de dutxa** i un **Safareig**. Les seves cares frontals us miren en col·locar-los, i el seu darrere va contra la paret. Els seus desguassos són al desguàs d'aparell més petit de la NBR 8160 (DN 100 per al vàter, DN 50 per a la pica de cuina, DN 40 per als altres); l'aigua és DN 20. Canvieu-ne les mides, o editeu-los, com qualsevol família: vegeu [Famílies i les seves mides](topic:families).

Una família indica quin aparell és a {{ui:Aparell sanitari}} de la pestanya {{ui:Connectors}} de l'editor de famílies. El seu desguàs es compta aleshores en unitats de desguàs: 6 UHC per a un vàter, 1 per a un lavabo, 3 per a una pica de cuina o un safareig, 2 per a una dutxa (NBR 8160), o les unitats de desguàs de la Taula 709.1 de l'IPC.

## Des del connector d'un aparell

Els elements col·locats amb una família amb connectors (el desguàs i l'aixeta d'un lavabo, el coll d'un terminal d'aire: vegeu [Editeu una família](topic:family-editor)) mostren els seus connectors lliures com a punts mentre {{ui:Tub}} o {{ui:Conducte}} és activat, i el punter s'hi ajusta.

- **Començar en un connector**: el recorregut pren el seu sistema i mida (el tub del material de la barra a la mida del connector o just per sobre; un conducte circular del seu diàmetre). Quan el connector mira cap avall o cap amunt, com un desguàs sota un lavabo, el recorregut va primer recte cap avall o cap amunt fins a l'alçada de **A**, i després continua segons els vostres clics.
- **Acabar en un connector**: el recorregut baixa o puja fins a ell i hi acaba.

El recorregut queda connectat a l'element al fitxer IFC, de manera que altres programes veuen l'aparell com a part del seu sistema. Un element col·locat després amb un connector al final d'un recorregut també hi queda connectat. Un recorregut allunyat d'un connector deixa d'estar-hi connectat.

## Els accessoris, fets per vosaltres

| On | Què fa BimCraft |
|---|---|
| Un recorregut gira | Un colze. Tub d'acer amb el radi llarg de ASME B16.9 (1.5 × la mida), altres tubs a un diàmetre exterior, conducte circular a 1.5 diàmetres, conducte rectangular a una amplada (o una alçada en girar cap amunt o avall) |
| Un recorregut acaba sobre la línia d'un altre recorregut | Una te; l'altre recorregut es divideix allà |
| Dos recorreguts de mides diferents s'uneixen extrem a extrem | Un reductor (tubs) o una transició (conductes) |
| Dos recorreguts de la mateixa mida s'uneixen extrem a extrem en un angle | Un colze |

Quan canvieu, moveu o suprimiu un recorregut, es torna a fer cada accessori d'aquell nivell. Si un tram és massa curt per als accessoris dels seus extrems, BimCraft ho indica i no canvia res: allunyeu més el cantó.

:::note
Els accessoris i les vàlvules són genèrics: dibuixats a partir de la mida del tub o del conducte, no del catàleg d'un fabricant. Els accessoris d'encaix, de premsa i ranurats, els cossos de vàlvula i els equips tenen mides pròpies dels fabricants; comproveu-les amb el proveïdor abans de demanar-los.
:::

## Columnes (baixants)

Mentre dibuixeu, escriviu una alçada nova a **A** i premeu {{key:Enter}}: el recorregut va recte cap amunt o cap avall al darrer cantó, amb un colze a cada extrem. Una columna pot pujar cap al nivell de sobre. Cada nivell mostra les parts d'un recorregut que arriba al seu rang de visualització, amb **UP** o **DN** a la columna.

## Desguassos i la seva pendent

Els desguassos sanitaris i pluvials comencen amb la pendent mínima que permet l'International Plumbing Code per a la seva mida: 1/4 in. per ft fins a 2-1/2 in., 1/8 in. per ft de 3 a 6 in., 1/16 in. per ft a partir de 8 in. El tub de desguàs brasiler de PVC comença amb la pendent de la NBR 8160: 2 % fins a DN 75, 1 % a partir de DN 100. Escriviu una altra pendent a la barra o a Propietats: `1/4"/ft`, `2 %` o `1:50`. El recorregut baixa des del seu primer punt, de manera que dibuixeu els desguassos en la direcció en què flueixen. El plànol mostra la caiguda i una fletxa. Propietats avisa quan un desguàs és més pla que el mínim del codi.

## Dimensiona els desguassos per unitats d'aparell

Escolliu un desguàs sanitari: **Unitats d'aparell** a Propietats indica quantes en porta i la mida més petita que necessiten. Compta cada aparell sanitari el connector de desguàs del qual és sobre el recorregut, i també cada desguàs que hi desguassa: dibuixeu els desguassos en la direcció en què flueixen, acabant cadascun al desguàs on desguassa.

- Els desguassos de tub de desguàs brasiler de PVC compten **UHC** i segueixen la NBR 8160; els altres compten **DFU** i segueixen l'International Plumbing Code.
- **Desguàs**: un **Ramal** es dimensiona amb la taula del codi per als ramals d'aparells; un **Col·lector de l'edifici** amb la seva taula segons la pendent, per la qual cosa la seva **Pendent** és important.
- Un desguàs no és mai més petit que els desguassos dels aparells que serveix (un vàter necessita DN 100, o 3 in.), ni que un desguàs que hi desguassa. Amb la NBR 8160, un col·lector de l'edifici és DN 100 com a mínim.

{{ui:Dimensiona els desguassos}} fa que cada desguàs sanitari del model que sigui massa petit per a les seves unitats d'aparell tingui la mida que necessita, com un sol pas que podeu desfer. Un desguàs dibuixat més gran del que necessita es deixa tal com està. Quan un desguàs porta més del que pot la mida més gran del seu tub a la seva pendent, BimCraft ho indica: doneu-li una pendent més forta o un altre tub.

:::note
Les taules són les de desguassos horitzontals. Les columnes, les ventilacions i els desguassos pluvials no es dimensionen aquí: comproveu-los, i tot el disseny, amb la norma que s'aplica al projecte.
:::

## Vàlvules

1. Trieu {{ui:Vàlvula}} i el tipus: de comporta, de bola, de globus o de retenció.
2. Feu clic en un tub on va. El tub es talla al seu voltant i la vàlvula es connecta als dos costats.

Propietats del recorregut enumera les seves vàlvules, cadascuna amb {{ui:Suprimeix}}.

Més tipus de vàlvula, un filtre, comportes als conductes, les vostres pròpies especificacions de tub i les famílies de fabricants: vegeu [Especificacions de canonades, vàlvules, comportes i famílies de fabricants](topic:pipe-specs).

## Canvia un recorregut

Seleccioneu qualsevol part d'un recorregut, al plànol o a la vista 3D. A Propietats:

- **Sistema**, **Material**, **Classe** i **Mida** (tubs), o **Forma**, **Amplada** i **Alçada** (conductes).
- **Alçada sobre el nivell** mou tot el recorregut amunt o avall.
- **Aïllament**: el seu gruix, que es conserva per a la comprovació d'espai lliure i la llista d'obertures (no es dibuixa res per a ell): vegeu [Comproveu tubs i conductes amb l'estructura](topic:mep-against-structure).
- Tub d'acer: **Talla en trams**: vegeu [Trams d'acer per a canonades i fulls de trams](topic:pipe-spools).
- **Pendent** (tubs).
- **Cabal** amb {{ui:Dimensiona-ho}}: per a l'aigua, la mida més petita que manté l'aigua a 8 ft/s (2.4 m/s), o 5 ft/s (1.5 m/s) per a l'aigua calenta; a 3 m/s per al tub brasiler d'aigua de PVC (NBR 5626). Per als conductes, la velocitat i la taxa de fricció del conducte tal com està dibuixat. Els desguassos sanitaris es dimensionen per les seves unitats d'aparell: vegeu més avall **Dimensiona els desguassos per unitats d'aparell**.

Cada canvi és un pas de {{ui:Desfés}}. {{key:Delete}} suprimeix tot el recorregut.

## Plànols

- Els tubs més petits de 150 mm (uns 6 in.) es dibuixen com una sola línia sobre la seva línia central; els tubs més grans i tots els conductes, com dues línies a la seva amplada.
- Cada sistema té el seu propi color; el PDF del plànol els imprimeix en negre.
- Cada recorregut es rotula amb la seva mida i sistema (per exemple `2" CW` o `16×10 SA`).
- El rang de visualització d'un plànol decideix quins recorreguts mostra, i {{ui:Mostrat en aquesta planta}} pot deixar fora **Tubs** o **Conductes**: vegeu [Vistes, rangs de visualització i els vostres propis fulls](topic:views-and-sheets).

## Quadres i amidament

El panell {{ui:Quadres}} afegeix **Tubs** (per sistema, material i mida, amb les seves longituds), **Conductes** (per sistema, forma i mida, amb longituds i superfície exterior) i **Accessoris i vàlvules** (per tipus i mida, comptats). Feu clic en una fila per triar què enumera; {{ui:Baixa el CSV}} la baixa.

{{ui:Amidament}} porta els recorreguts a TakeoffCraft: tub i conducte per mida, com a recorreguts dibuixats al plànol (els desguassos amb pendent es mesuren al llarg de la seva pendent), i accessoris i vàlvules comptats allà on són: vegeu [Envieu les quantitats del model a TakeoffCraft](topic:takeoff). Les columnes no hi surten en aquest full, perquè un plànol no les pot mesurar; el quadre de Tubs en té la longitud.

## Al fitxer IFC

Cada recorregut és un conjunt que conté les seves parts: segments de tub i de conducte, accessoris i vàlvules, cadascun amb el seu tipus, material, un color per al seu sistema i els seus ports. Els ports que es toquen estan connectats, i cada part pertany al seu sistema de distribució (els fitxers IFC2X3 reben el mateix com a segments de flux, accessoris i controladors en un sistema). Altres programes que llegeixen sistemes IFC veuen un recorregut connectat per sistema. La definició pròpia del recorregut es guarda amb ell, de manera que BimCraft el torna a fer de la mateixa manera quan el canvieu.
