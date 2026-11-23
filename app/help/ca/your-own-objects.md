---
title: Porteu els vostres objectes i fitxers de família a la biblioteca
summary: Llegiu fitxers de família (.rfa) i fitxers IFC, DWG, DXF, glTF o OBJ a la pestanya Biblioteca, col·loqueu-los com qualsevol element de la biblioteca i guardeu-los a Els meus objectes, una llista privada que només vosaltres podeu veure.
keywords: rfa, família, famílies, biblioteca de famílies, objectes propis, els meus objectes, biblioteca privada, importa objectes, contingut del fabricant, objectes BIM, objecte ifc, gltf, obj, bloc dwg, guarda, canvia, migra
from: 886261f8
---

## Què faràs

Porteu a BimCraft els objectes que ja teniu: una biblioteca de famílies de Revit, una descàrrega IFC o DWG d'un fabricant, una malla d'un altre programa de modelatge. Llegiu el fitxer a la pestanya {{ui:Biblioteca}}, col·loqueu l'objecte al model com a element IFC en tota regla i, si el voleu tornar a fer servir més endavant, guardeu-lo a {{ui:Els meus objectes}}.

## Passos

1. Obriu un model IFC o començueu un edifici nou.
2. Feu clic a la pestanya {{ui:Biblioteca}} al costat de {{ui:Propietats}}.
3. Feu clic a {{ui:Fitxers…}} i després a {{ui:Trieu un fitxer…}}. Trieu un fitxer o diversos alhora: `.rfa`, `.ifc`, `.dwg`, `.dxf`, `.glb`, `.gltf`, `.obj` o `.csv`. O feu clic a {{ui:Trieu una carpeta…}} per llegir una carpeta sencera i les carpetes que hi ha dins (fins a 200 fitxers de cop).
4. Feu clic a una targeta per veure què s'ha llegit: la vista prèvia del plànol, el nom, el fabricant i el model, les mides i les notes.
5. Feu clic a {{ui:Col·loca al plànol}} o {{ui:Col·loca al model}} per col·locar-lo.
6. Per tornar-lo a usar en altres projectes, feu clic a {{ui:Desa als meus objectes}}. Si s'han llegit diversos fitxers, {{ui:Desa-ho tot als meus objectes}} els guarda tots de cop.
7. Més tard, feu clic a {{ui:Els meus objectes}} a la pestanya Biblioteca per trobar-los. Es col·loquen, es substitueixen i s'actualitzen com qualsevol element de la biblioteca.

Els fitxers es llegeixen en aquesta pestanya. No es puja res fins que trieu {{ui:Desa als meus objectes}}.

## Què es llegeix de cada tipus de fitxer

| Fitxer | Què obteniu |
|---|---|
| IFC | Cada tipus d'element com a objecte amb la seva forma 3D real, la classe IFC i els conjunts de propietats |
| glTF, GLB, OBJ | Un objecte amb la seva forma 3D real com a malla. Definiu abans les unitats i quin sentit és amunt. |
| DWG, DXF | Cada bloc com a objecte amb el seu dibuix de planta i els seus atributs |
| Fitxer de família (`.rfa`) | El nom, la categoria, el fabricant, el model, els paràmetres i els tipus de la família. **No la seva forma 3D:** en fa de substitut una caixa amb l'amplada, la profunditat i l'alçada de la família. |
| CSV | Un objecte per fila: nom, mides i dades, dibuixat com una caixa |

## Fitxers de família i la seva forma 3D

La forma 3D d'un fitxer `.rfa` s'emmagatzema en un format no documentat, així que BimCraft llegeix les dades de la família i no endevina la seva geometria. La targeta ho indica: "Geometria no llegida d'aquesta família; en fa de substitut una caixa".

Per portar una família amb la seva forma real, exporteu-la des del programa que l'ha fet (Revit):

1. Obriu la família, o un projecte amb la família col·locada.
2. Trieu **File > Export > IFC**. Vegeu [la configuració d'exportació que s'obre millor aquí](topic:rvt-to-ifc).
3. A BimCraft, llegiu el fitxer `.ifc` amb {{ui:Fitxers…}}. Cada tipus de família arriba com a objecte propi, amb la seva forma i els seus conjunts de propietats.

Molts fabricants ofereixen una descàrrega IFC o DWG al costat del fitxer de família. Aquests es llegeixen directament.

## Tipus de família

Una família amb diversos tipus arriba com un sol element amb una opció {{ui:Variant}}, una variant per tipus. Cada variant té els valors que difereixen entre els tipus, i la seva pròpia caixa quan el tipus té una amplada i una profunditat. Una família amb un sol tipus és un element simple amb els valors d'aquell tipus.

Algunes famílies guarden els tipus en un catàleg de tipus: un fitxer `.txt` amb el mateix nom al costat del fitxer de família. Trieu tots dos alhora, o trieu la carpeta, i les files del catàleg es converteixen en variants.

## Dades d'una família sobre una forma real

Si una carpeta té un fitxer de família i un fitxer IFC, glTF o OBJ amb el mateix nom (`Chair.rfa` i `Chair.ifc`), trieu-los tots dos alhora o trieu la carpeta. BimCraft en fa un sol element: el fitxer de família dona el nom, el fabricant, el model, els paràmetres i els tipus, i l'altre fitxer dona la forma 3D real. Les notes indiquen de quin fitxer ve la forma. S'usa una sola forma per a tots els tipus.

Quan un fitxer de família té una imatge desada, els detalls de l'element mostren aquesta imatge sota el dibuix de planta. La imatge només es mostra allà; no es guarda amb l'element.

## Els meus objectes

{{ui:Els meus objectes}} és la vostra llista privada de la Biblioteca. Només vosaltres podeu veure què hi ha: no és a la biblioteca pública, no surt a la cerca i no es mostra al vostre equip. Segueix el vostre compte, de manera que els mateixos objectes hi són en un altre ordinador quan inicieu la sessió a la biblioteca.

- Cal haver iniciat la sessió a la biblioteca per guardar un objecte. Vegeu [inicieu la sessió a la biblioteca](topic:library-credits).
- Guardar un objecte envia només aquest objecte al vostre compte. Fins aleshores es queda al vostre ordinador.
- {{ui:Suprimeix dels meus objectes}} treu un objecte de la llista. Les còpies ja col·locades als dibuixos es queden.
- Per compartir un objecte amb tothom, pugeu-lo a la biblioteca pública, amb una llicència que trieu.

:::note
La funció Els meus objectes s'està provant i potser encara no està oberta al vostre compte. Si no apareix la font, o diu "La funció Els meus objectes encara no està oberta per a aquest compte", podeu llegir i col·locar els vostres fitxers amb {{ui:Fitxers…}}; es desen dins del model.
:::

## Errors habituals

- **Esperar la forma real de la família des d'un `.rfa`.** Només se n'llegeixen les dades. Exporteu IFC per obtenir la forma.
- **Dos elements quan n'esperàveu un.** Una família i el seu fitxer de forma només s'uneixen quan els noms coincideixen exactament, excepte l'extensió, i estan a la mateixa carpeta.
- **Una malla arriba mil vegades massa gran o tombada.** Definiu {{ui:Unitats del fitxer}} i {{ui:Eix vertical d'una malla}} a {{ui:Fitxers…}} abans de triar el fitxer.
- **"No hi ha dades de família" en un fitxer.** És un projecte (`.rvt` desat amb una altra extensió) o una plantilla de família, no una família. Vegeu [Llegiu un fitxer de projecte o de família](topic:read-rvt-file).
- **Guardar contingut que no podeu emmagatzemar.** Algunes biblioteques de pagament no permeten còpies fora del seu propi servei. Reviseu les condicions del contingut que no heu fet vosaltres.
