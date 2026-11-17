---
title: Especificacions de canonades, vàlvules, comportes i famílies de fabricants
summary: Definiu les vostres pròpies especificacions de canonades (taules de diàmetres amb material, unió i rugositat), desades al fitxer del model; poseu vàlvules, un filtre i comportes als recorreguts; i importeu un model de vàlvula o d'equip d'un fabricant com a família amb ports de connexió.
keywords: especificació de canonades, especificacions de canonades, especificació de tubs, classe de canonada, canonada personalitzada, taula de diàmetres, tub, tub higiènic, inoxidable, schedule, diàmetre exterior, gruix de paret, diàmetre interior, rugositat, classe de pressió, csv, json, importa, exporta, full de càlcul, norma, bpe, din, en 10357, en 10255, vàlvula, vàlvules, vàlvula de papallona, vàlvula d'equilibrat, vàlvula de control, filtre, comporta, comporta de regulació, comporta tallafocs, oem, fabricant, família, famílies, ports, connexió, step, obj, gltf, ifc, radiador, convector, escalfador de panell, unitat de tractament d'aire, difusor, reixa
from: bc2f7c4e
---

## Què farà

Dibuixeu canonades amb la vostra pròpia especificació en lloc de les taules integrades d'acer, coure i plàstic, poseu vàlvules i comportes als recorreguts, i col·loqueu un model de fabricant amb ports als quals es connecten les canonades.

:::note
Eina d'ajuda al dibuix i a la coordinació. Una especificació de canonades conté els valors que escriviu o importeu: comproveu cada taula amb la norma del vostre projecte. Les vàlvules, els filtres i les comportes integrades són formes esquemàtiques dimensionades a partir del recorregut, no la longitud d'un fabricant ni d'una norma de vàlvules.
:::

## Configura una especificació de canonades

1. Activeu {{ui:Dibuixa}}, obriu {{ui:Compilació}} i trieu {{ui:Especificacions de canonades}}. El mateix botó és a la barra de l'eina Tub.
2. Trieu {{ui:Nou}}, o comenceu des d'un fitxer, d'una enganxada o d'una especificació inicial (més avall).
3. Escriviu-ne el nom, la norma o la referència que segueix, el material i el tipus d'extrem o d'unió.
4. Escriviu una fila per mida: el nom de la mida, el diàmetre exterior i el gruix de paret, en mil·límetres. Escriviu el diàmetre interior en lloc del gruix si és el que teniu: l'altre s'omple sol. DN, la classe de pressió i el pes són opcionals.
5. Opcional: la rugositat en mil·límetres (el càlcul de la caiguda de pressió l'usa), un gruix d'aïllament amb què comencen els recorreguts nous, el radi del colze com a factor del diàmetre exterior, si l'especificació té te i reductors, i un color propi en 3D.
6. Marqueu els serveis els recorreguts nous dels quals han de començar en aquesta especificació, per exemple aigua refrigerada.
7. Feu clic a {{ui:Desa al model}}.

Les especificacions es desen al fitxer del model. Qui obri el fitxer les té, i {{ui:Desfés}} desfà un canvi.

Una especificació, o una de les seves mides, no es pot suprimir mentre hi hagi un recorregut dibuixat amb ella. Canviar els valors d'una mida redibuixa els recorreguts d'aquella mida.

## Reutilitza una especificació en un altre model

- {{ui:Exporta .json}} desa l'especificació seleccionada en un fitxer petit; {{ui:Exporta-ho tot}} desa totes les especificacions del model. {{ui:Importa un fitxer}} les torna a llegir.
- {{ui:Exporta .csv}} desa la taula de mides per a un full de càlcul. {{ui:Importa un fitxer}} també llegeix un `.csv`.
- {{ui:Enganxa files}} accepta una taula copiada d'un full de càlcul. La primera fila dona nom a les columnes: `Size`, `OD` i `Wall` (o `ID`), i opcionalment `DN`, `Pressure`, `Weight`. Una fila per mida. Els números són en mil·límetres, tret que trieu polzades o que una cel·la indiqui la seva unitat (`0.065 in`).

## Especificacions inicials

{{ui:Afegeix una especificació inicial}} afegeix al model una d'aquestes, com a còpia que podeu editar:

| Especificació inicial | Mides |
|---|---|
| ASME BPE tube | 1/4" a 6" |
| EN 10357 series A tube (DIN 11850 row 2) | DN10 a DN200 |
| EN 10255 tub d'acer, sèrie mitjana | DN15 a DN150 |
| EN 10255 tub d'acer, sèrie pesant | DN15 a DN125 |

Aquestes taules són els diàmetres exteriors i els gruixos que dues o més pàgines publicades de proveïdors imprimeixen per a la norma i coincideixen. No s'han pres de les normes mateixes. Les mides que només dona una pàgina s'han deixat fora. Cada especificació inicial mostra les seves pàgines d'origen i està marcada com a "comprova-ho amb la norma del projecte". No hi ha rugositat, classe de pressió ni pes.

## Dibuixa un recorregut en una especificació

1. Trieu {{ui:Tub}}. Un servei que heu marcat en una especificació comença en ella. Per a qualsevol altre recorregut, trieu l'especificació a la llista de materials: les especificacions apareixen després dels materials integrats com a "Especificació: nom".
2. La llista de mides ara només conté les mides d'aquella especificació. Trieu-ne una i dibuixeu el recorregut.

Per moure més endavant un recorregut a una especificació, seleccioneu-lo i canvieu **Material** a Propietats. La seva mida passa a ser la mida de l'especificació més propera pel diàmetre exterior.

A l'arxiu IFC la canonada porta el nom, la norma, el material, la unió i les dimensions de l'especificació (`CadCraft_PipeSpec` i `Pset_PipeSegmentTypeCommon`, a la canonada i al seu tipus).

Els càlculs de dimensionament i de caiguda de pressió llegeixen el diàmetre interior de l'especificació. Quan l'especificació té rugositat, la fricció d'un recorregut es calcula amb ella (Darcy-Weisbach); si no en té, s'usa el valor per defecte habitual del càlcul.

## Vàlvules, un filtre i comportes

1. Trieu {{ui:Vàlvula}} i escolliu el tipus a la barra: de comporta, de bola, de papallona, de globus, de retenció, d'equilibrat o de control, o un filtre, per a les canonades; una comporta de regulació o una comporta tallafocs, per als conductes.
2. Feu clic al recorregut on va. El recorregut es talla al seu voltant i els dos costats segueixen connectats. Pren la mida del recorregut i es mou amb ell.

Propietats del recorregut enumera cadascuna amb {{ui:Suprimeix}}; el recorregut es tanca de nou.

El càlcul de caiguda de pressió només compta una pèrdua per accessori per a les vàlvules de comporta, de bola, de globus i de retenció. Els altres tipus, les comportes i les famílies de fabricants no hi afegeixen cap pèrdua: tingueu-ho en compte en la vostra pròpia comprovació. Es compten a la taula **Accessoris i vàlvules** i a l'amidament, i s'escriuen a l'IFC com a vàlvules, un filtre i comportes amb dos ports connectats.

## El model d'un fabricant com a família

1. Obriu {{ui:Compilació}} i trieu {{ui:Families}}, després {{ui:Importa un model}}. Es llegeixen fitxers IFC, STEP, OBJ, STL, glTF i d'element de la biblioteca. Per a OBJ i STL, definiu primer les unitats del fitxer i l'eix vertical.
2. A la finestra de ports, escriviu el nom, el fabricant i el número de model.
3. Trieu si va **En un recorregut** (una vàlvula, un filtre o una comporta) o si és **Equipament**, i com s'escriu.
4. Doneu-li els seus ports. Cadascun té un nom, un tub o conducte, el servei, la mida en mil·límetres (el diàmetre exterior d'un tub), la mida nominal tal com la nomena la vostra especificació, el tipus d'extrem, la seva posició i la manera com mira. {{ui:En una cara}} posa un port al centre d'una cara de la caixa del model. La petita vista superior mostra els ports.
5. Escolliu {{ui:Desa la família al model}}.

Una família que va en un recorregut necessita exactament dos ports que miren en sentits contraris, sobre una mateixa línia. Trieu-la a la llista de l'eina Vàlvula i feu clic en un recorregut: es col·loca amb la seva pròpia longitud i les canonades es connecten als seus ports.

Una família mai no s'estira. Si els seus ports no tenen la mida del recorregut, se us avisa en col·locar-la, i {{ui:Revisa les connexions}} la fa constar.

Una família d'equipament es col·loca amb {{ui:Equipament}}, tipus **Família de fabricant**. Les canonades i els conductes s'ajusten als seus ports.

{{ui:Baixa com a element de la biblioteca}} desa una família amb els seus ports en un fitxer que podeu enviar a la biblioteca.

## Radiadors i convectors

{{ui:Equipament}} també té **Radiador** i **Convector / escalfador de panell**: cossos genèrics amb una connexió d'impulsió i una de retorn per a aigua de calefacció. Vegeu [Equips MEP amb ports](topic:mep-equipment).
