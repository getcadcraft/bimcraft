---
title: Edita una família
summary: Canvia els paràmetres, les fórmules i els sòlids d'una família, mostra peces amb un paràmetre Sí / No, talla i uneix sòlids, dona-li connectors per a tubs i conductes, i veu el resultat dibuixat des de l'IFC que desarà.
keywords: editor de famílies, edita família, paràmetre, paràmetres, fórmula, fórmules, visibilitat, sí no, sòlid, sòlids, caixa, extrusió, extrudeix, revolució, escombrat, perfil, arc, booleana, booleanes, talla, uneix, diferència, unió, maneta, manetes, pla de treball, croquis, nova família, connector, connectors, port, ports, connector de tub, connector de conducte, desguàs, subministrament d'aigua
from: 1ab31c10
---

## Obre l'editor

Obre una família (el grup **Famílies** del navegador del projecte, o {{ui:Compilació}} › {{ui:Famílies…}}) i fes clic a {{ui:Edita la família}}. Per començar de zero, fes clic a {{ui:Nova família}}: dona-li un nom, indica què és (una porta, una finestra, mobiliari, un accessori o una altra cosa) i, per a una porta o una finestra, de quina inicial vénen el seu símbol de planta i la seva maneta. L'editor s'obre amb una família que té uns quants paràmetres i un sòlid.

Editar una família inicial manté els canvis només en aquest model. Els altres models conserven la inicial tal com és.

No canvia res al model fins que fas clic a {{ui:Desa la família}}. L'editor té el seu propi desfer i refer (els botons de fletxa al costat del nom, o {{key:Mod+Z}} i {{key:Mod+Y}}); desar és un sol pas al desfer del model.

## Paràmetres

La pestanya {{ui:Paràmetres}} llista els paràmetres de la família: un nom, un tipus i un valor per defecte. Els tipus són **Longitud** (mil·límetres), **Angle** (graus), **Número**, **Nombre enter**, **Sí / No**, **Plomí** (1–16), i tres que contenen paraules en lloc de números: **Text**, **Material** (un dels materials del projecte) i **Farciment** (un farciment de planta). Les paraules no s'usen en fórmules; acoloreixen un sòlid (el seu **Material**), omplen una part d'un símbol, o s'imprimeixen com a `{Nom}` al text d'un símbol. La casella **Per element** fa que cada element col·locat el defineixi per a si mateix, en lloc de fer-ho la mida.

- Una **fórmula** fa que un paràmetre segueixi els altres, per exemple `Width / 30` o `if(Width > 1200, 2, 1)`. Les longituds en fórmules són en mil·límetres, o escriu una unitat: `3'`, `6in`, `50cm`.
- Canviar el nom d'un paràmetre el canvia a totes les fórmules i camps que l'usen. Un paràmetre encara en ús no es pot eliminar.
- El **Material** d'un sòlid pren el color d'un material del projecte (o d'un paràmetre Material), **Es mostra a** l'amaga als nivells de detall més grollers, i **Repeteix** fa còpies: un recompte (un número o un paràmetre enter, d'1 a 200) i el pas entre elles en x, y i z. Un sòlid repetit és una fila de taulons, barres o forats; si s'usa en una talla, les còpies es tallen juntes.
- Una família de porta o finestra rep també dos noms del seu mur: `WallThickness` i `Face` (1 o −1, el costat cap on obre la porta).

## Sòlids

La pestanya {{ui:Sòlids}} llista els sòlids. Afegeix una caixa, una extrusió, una revolució o un escombrat:

| Sòlid | Què s'ha de definir |
|---|---|
| Caixa | les seves dues cantonades: x0 a x1, y0 a y1, z0 a z1 |
| Extrusió | un perfil sobre un pla de treball (planta, alçat o perfil), on és el pla, i una profunditat |
| Revolució | un perfil, un eix sobre el pla, i un angle fins a 360° |
| Escombrat | un camí de punts i un radi (una barra o un carril) |

Cada número pot ser un número escrit o una expressió dels paràmetres. Cada sòlid té un color i **Es mostra quan**: deixa'l buit per mostrar-lo sempre, o indica un paràmetre Sí / No (o escriu una comparació com `Shelves >= 3`) per mostrar-lo només llavors. Això és un paràmetre de visibilitat.

### Dibuixa un perfil

El perfil d'una extrusió o d'una revolució es dibuixa sobre el seu pla de treball, sota la previsualització:

- Fes clic a la superfície de dibuix per afegir un punt després del punt triat.
- Arrossega un punt per moure'l. Els punts s'ajusten a la quadrícula; manté premut {{key:Shift}} per col·locar-los lliurement.
- Fes clic a un petit quadrat d'un segment per afegir-hi un punt. {{key:Shift}} + clic sobre ell fa que el segment sigui un arc (torna a fer clic per l'altra direcció, i després recte).
- Fes doble clic a un punt per eliminar-lo.

Els punts buits els defineixen paràmetres: canvia'ls a la taula, no els arrosseguis.

## Booleanes

La pestanya {{ui:Booleanes}} talla el segon sòlid del primer, o els uneix. El resultat d'una booleana es pot tallar o unir de nou. Un sòlid usat en una booleana només es dibuixa com a part d'ella.

Quan el segon sòlid queda amagat pel seu paràmetre Sí / No, el primer es manté tal com és; quan queda amagat el primer, el resultat queda amagat.

## Símbol en planta

La pestanya {{ui:Símbol en planta}} dibuixa el que mostra el plànol per a aquesta família, en lloc del tall dels seus sòlids: línies, rectangles, cercles, arcs, polígons i text, sobre els eixos de la pròpia família. Cada part té un **plomí** (1–16, una expressió o un paràmetre Plomí), un **farciment** (cap, sòlid, diagonal, encreuat, formigó, aïllament, terra, o un paràmetre Farciment), una expressió **mostrat per**, un **rang de tall** en mil·límetres per sobre de la seva base (es dibuixa amb tot el pes quan el tall del plànol és dins seu, fina per sota i discontínua per sobre: un moble per sobre del tall es mostra discontinu), un nivell de detall i una repetició. El text pot esmentar paràmetres com a `{Nom}`. **El plànol mostra: El tall dels sòlids** manté el plànol tallant els sòlids mentre el símbol es queda a la família. Altres programes llegeixen el símbol com la petjada de la família (línies i formes; el text es queda a BimCraft).

## Famílies a dins

La pestanya {{ui:Famílies a dins}} posa una altra família dins d'aquesta: una cama en una taula, una maneta en una porta. Tria la família, i després on va (x, y, z), quant està girada (només quarts de volta: 0, 90, 180, 270), quan es mostra, i els valors que rep, un per línia com a `Height = Height - 40`. En desar la família interior, es torna a dibuixar aquesta; una família que és retinguda per una altra no es pot eliminar; una família no es pot contenir a si mateixa, ni tampoc a través d'una altra, i l'encaixament s'atura als quatre nivells.

## Punts actius

Un punt actiu és un punt o una aresta que arrossegues per canviar un paràmetre. A la pestanya {{ui:Punts actius}} n'afegeixes un, tries l'eix pel qual arrossega i el paràmetre numèric que canvia, i escrius la seva posició amb les mateixes expressions que els sòlids. A la previsualització, tria **Punts actius** sota les manetes per arrossegar-los. En un element col·locat al plànol (tria'l amb {{ui:Selecciona}}), els punts actius x i y es mostren com a nanses: arrossega'n un i l'element pren la mida que situa el punt allà, passant per les fórmules intermèdies; un Desfer el torna a deixar com estava. Un punt actiu no pot canviar un paràmetre controlat, ni un Sí / No, ni una paraula.

A la vista 3D, els mateixos punts actius es mostren com a nanses sobre l'element triat, i també hi apareixen els verticals (eix z), que el plànol no pot dibuixar. Tria l'element, arrossega una nansa al llarg del seu eix i deixa anar: l'element pren la mida que situa el punt allà, com un sol pas de desfer. Les nanses s'amaguen mentre el quadre de secció és activat, perquè fa servir les mateixes nanses.

## Connectors

Les famílies col·locades a terra (mobiliari, accessoris i altres) tenen una pestanya {{ui:Connectors}}: els punts on un tub o un conducte s'uneix a l'element, com la reixeta i el desguàs d'un lavabo. Fes clic a {{ui:Afegeix un connector}} i defineix:

- **Tipus**: tub o conducte, i el seu **Sistema** (aigua freda, desguàs sanitari, aire d'impulsió…).
- **x**, **y** i **z**: on és, en els eixos propis de la família. Com els números d'un sòlid, cadascun pot ser un número o una fórmula dels paràmetres, de manera que el connector es mou amb la mida.
- **Direcció de sortida**: la direcció per on surt un tub o un conducte, al llarg d'un dels eixos de la família (un desguàs sota un lavabo és **Avall**).
- **Mida (mm)**: la mida nominal del tub (DN) o el diàmetre del conducte rodó.
- **Flux**: **Entrada** per a un connector que rep (una reixeta), **Sortida** per a un que desguassa.

La previsualització dibuixa cada connector com un anell amb una fletxa que indica la direcció de sortida. Les portes i finestres no tenen connectors.

Per a un accessori de fontaneria, tria quin és sota **Accessori de fontaneria** (vàter, lavabo, pica de cuina, dutxa, safata de rentar). Els accessoris inicials ja ho indiquen.

Cada element col·locat a partir de la família rep els seus connectors com a ports al fitxer IFC, i es tornen a fer quan l'element canvia de mida o quan es desa la família. Els programes que llegeixen els sistemes IFC veuen on pertany cada tub o conducte.

## La previsualització i les seves manetes

La previsualització és la família escrita com a IFC, pel mateix codi que la desa al model, i dibuixada de nou. El que veus és el que reben els altres programes. Sota, **Mida mostrada** defineix els valors dels paràmetres que usa la previsualització.

**Les manetes** són punts sobre la previsualització: **La mida** mostra una maneta per a Amplada, Profunditat i Alçada; **El sòlid triat** en mostra una a cada cara del sòlid que has triat. Arrossega una maneta:

- en una cara definida per un paràmetre, la mida mostrada canvia (les fórmules de la família es mantenen);
- en una cara definida per un número escrit, el número canvia.

## Desar

{{ui:Desa la família}} comprova la família, després torna a dibuixar cada mida i torna a crear cada element, com un sol pas que pots desfer. Si una mida no es pot dibuixar amb el canvi (per exemple, un sòlid no tindria amplada en aquella mida), no es desa res i l'editor indica quina mida és.

Si algú més ha desat la mateixa família mentre el teu editor era obert (en una sessió de Live TeamWork, o en una altra finestra), {{ui:Desa la família}} es nega i ho indica, en lloc de substituir el seu canvi pel teu. Tanca l'editor, torna a obrir la família per veure el seu canvi i fes el teu de nou.

:::note
La geometria es desa com als propis sòlids d'IFC: extrusions, revolucions, discos escombrats i resultats booleans. Res no es converteix en una llista de triangles, de manera que els fitxers són petits i altres programes poden llegir les formes com a formes. Els perfils amb arcs es desen amb arcs a IFC4; IFC2X3 no té segments d'arc en un perfil, de manera que allà els arcs es desen com a trossos rectes curts.
:::

Veure també [Famílies i les seves mides](topic:families).
