---
title: Des d'altres programes BIM i de dibuix
summary: Com els hàbits dels programes BIM d'escriptori i de visualització de DWG es corresponen amb BimCraft, i les diferències que fan tropessar la gent.
keywords: canvi, migració, familiar, BIM d'escriptori, família, paràmetres, navegador de projecte, paleta de propietats, cub de vista, xref, gestor de capes, diferències, compara
from: 2de629af
---

Si coneixeu el Revit, la major part de BimCraft us semblarà familiar en les paraules i aliena en l'abast. La diferència més important: **aquesta versió llegeix i inspecciona models i edita les dades IFC. Encara no dibuixa com el Revit.** No podeu dibuixar murs, col·locar famílies, fer vistes ni fulls, ni desar un fitxer de projecte. El que sí podeu fer és obrir gairebé qualsevol fitxer d'edifici en qualsevol ordinador amb un navegador, veure'n el contingut, revisar una carpeta de projecte sencera i corregir les dades d'un model IFC.

## Hàbits traslladats

| Si esteu acostumat a | A BimCraft |
|---|---|
| Obrir un `.rvt` al Revit per veure el model | BimCraft obre el `.rvt` com una fitxa de fitxer: versió, informació del projecte, enllaços, previsualització. Per al model 3D, exporteu IFC i obriu-lo. [Llegeix un fitxer de projecte o de família](topic:read-rvt-file) |
| Comprovar en quina versió s'ha desat un fitxer abans d'obrir-lo | La fitxa diu "saved in Revit …" a dalt, sense actualitzar ni tocar el fitxer |
| El Project Browser | Cap navegador de vistes i fulls. Un model IFC té les llistes {{ui:Plantes}} i {{ui:Elements}}; un dibuix té pestanyes de full |
| La paleta de propietats (Properties palette) | El panell {{ui:Propietats}} a la dreta, per a l'element que heu clicat. Conjunts de propietats IFC en lloc de grups de paràmetres |
| Paràmetres d'instància i de tipus | Conjunts de propietats d'instància, i conjunts marcats com a "(tipus)". Un canvi de tipus s'aplica a cada element del tipus, com al Revit. [Canvia una propietat de tipus per a cada element d'un tipus](topic:type-vs-instance) |
| Edit Type | Cap diàleg: cliqueu un valor en un conjunt "(tipus)" i escriviu-hi |
| Selecció de molts elements, filtres, Select All Instances | Un element cada cop. Encara no implementat |
| El cub de vista i la roda de navegació | Un cub de vista a la cantonada inferior dreta, quatre botons ({{ui:Ajusta}}, {{ui:Superior}}, {{ui:Davant}}, {{ui:Lateral}}) i òrbita lliure. Sense roda de navegació |
| Shift i arrossegar amb el botó del mig per orbitar, arrossegar amb el botó del mig per desplaçar | Arrossegar amb el botó esquerre orbita, arrossegar amb el dret (o {{key:Shift}} i arrossegar) desplaça, la roda fa zoom. L'estil de menú {{ui:Cinta BIM}} canvia a desplaçar amb el botó del mig i a orbitar amb {{key:Shift}} i el botó del mig. [Menús, tecles i ratolí](topic:menus-keys-and-mouse) |
| Plantes, seccions, caixes de secció | Un sol pla de {{ui:Secció}} cada vegada ({{key:X}}); ni caixa de secció ni plans 2D. [Talla un model IFC amb un pla de secció](topic:section-plane) |
| Amagar a la vista, aïllar, visibilitat i gràfics | {{ui:Plantes}} activades i desactivades, {{ui:Espais}} i {{ui:Arestes}}. Encara no hi ha ocultació per element |
| Sales | Espais IFC, amagats al principi. Cliqueu {{ui:Espais}} |
| Desa, Anomena i desa, sincronitza amb el model central | {{ui:Desa com a IFC}} baixa un fitxer IFC nou. L'original no canvia mai. Sense model central ni treball compartit |
| Desfer amb {{key:Mod+Z}} | Funciona amb les edicions IFC fins que deseu. [Canvia les propietats IFC i desa una còpia editada](topic:edit-ifc-properties) |
| Manage Links | Obriu la carpeta del projecte: cada enllaç es comprova i es marca com a **A aquesta carpeta**, **Trobat amb el mateix nom**, **Fitxer de biblioteca** o **No és a aquesta carpeta**. [Obre una carpeta de projecte sencera](topic:open-project-folder) |
| Auditar, o obrir un fitxer per veure si està malmès | L'informe de la carpeta comprova cada còpia i cada còpia de seguretat per si està tallada, en qüestió de segons. [Comprova una carpeta per detectar còpies malmeses](topic:check-folder-health) |
| Triar el fitxer correcte d'una carpeta desordenada | El quadre {{ui:Comença aquí}} en suggereix un, amb motius |

Si sobretot obriu models per revisar-los, com en un programa de revisió o de visualització d'IFC, trieu l'estil de menú {{ui:Visor}}: les eines de visualització i de revisió surten primer, i les eines d'edifici esperen en un sol menú. Vegeu [Menús, tecles i ratolí](topic:menus-keys-and-mouse).

## Des de la visualització de fitxers DWG

Si obriu DWG a AutoCAD o en un visualitzador de DWG:

| Si esteu acostumat a | A BimCraft |
|---|---|
| Pestanyes de model i de disposició a baix | Pestanyes sobre el dibuix: {{ui:Model}} i una per cada full |
| ZOOM Extents, doble clic a la roda | Doble clic, {{key:F}} o {{ui:Ajusta}} |
| Desplaçar amb el botó del mig | Arrossegar amb qualsevol botó |
| El gestor de capes | La llista {{ui:Capes}}: marqueu per mostrar, desmarqueu per amagar, {{ui:Activa-ho tot}} i {{ui:Desactiva-ho tot}} |
| El gestor de xrefs | **Dibuixos enllaçats** a la dreta, amb **Mostrat** o **No trobat**, i {{ui:Afegeix dibuixos enllaçats…}} |
| Vista prèvia de traçat | {{ui:Vista d'impressió}} o {{key:P}}: negre sobre blanc amb gruixos de línia. No imprimeix |
| Extracció de dades dels atributs de bloc | La pestanya {{ui:Equipament}} per als plànols de restauració amb etiquetes, amb {{ui:Baixa el CSV}} |
| Mesurar, dibuixar, editar, desar com a | No és a BimCraft. L'aplicació de dibuix CadCraft dibuixa i edita |

## Diferències que fan tropessar

- **Funciona al navegador, i el navegador té cura dels vostres fitxers.** BimCraft només pot llegir fitxers i carpetes que li doneu, triant-los o arrossegant-los. No pot obrir un fitxer per si sol, i no pot desar-hi a sobre. Cada desament és una baixada.
- **No es puja res.** Les paraules "upload" en alguns diàlegs de carpetes dels navegadors són la terminologia del propi navegador. Els fitxers es queden al vostre ordinador.
- **IFC és el format de model.** Un fitxer de projecte s'obre com a fitxa perquè el seu contingut 3D no està documentat. Considereu IFC la manera com els models arriben a BimCraft.
- **Les edicions són copia en escriure (copy-on-write).** Canviar el valor d'un element mai no canvia els veïns, encara que l'exportador hagi compartit aquest valor entre ells. Les propietats de tipus són l'excepció deliberada.
- **Sense projecte, sense vistes.** BimCraft mostra un fitxer cada cop i no recorda res d'ell després de tancar la pestanya, excepte els noms de les carpetes recents al Chrome i a l'Edge.
- **Tecles del Mac.** On les dreceres del Revit usen Ctrl, les de BimCraft usen {{key:Mod}}: Command en un Mac.
- **Els hàbits del ratolí.** L'òrbita és el botó esquerre, no Shift i el botó del mig, tret que trieu l'estil de menú {{ui:Cinta BIM}} o configureu vosaltres els botons a [Menús, tecles i ratolí](topic:menus-keys-and-mouse).

Vegeu [Què encara no està implementat](topic:not-built-yet) per saber què cal fer servir avui en lloc d'això.
