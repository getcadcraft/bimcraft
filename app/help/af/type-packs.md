---
title: Tipe-pakkies: deel muurtipes as oop lêers
summary: Stoor muurtipes met hul lae, materiale, etikette en klassifikasiekodes, en families, as een oop lêer (gewone JSON of IFC), en voeg dit by 'n ander projek. Muurtipes van 'n IFC-lêer van 'n ander program kan ook gelees word.
keywords: tipe-pakkie, tipes, muurtipe, deel, uitvoer, invoer, biblioteek, oop formaat, json, ifc, IfcWallType, IfcMaterialLayerSet, IfcProjectLibrary, materiale, lae, sjabloon, kantoorstandaard, families
from: e4c91331
---

## Wat jy sal doen

Dra jou muurtipes van een projek na 'n ander, of gee dit aan iemand wat in 'n ander program werk. 'n Tipe-pak hou elke muurtipe met sy lae, dikte, materiale, kern, holtes, laagprioriteit, ontwikkelingsvlak, hoeveelheidsdata en klassifikasiekodes, en enige families wat jy byvoeg. Dit is 'n oop lêer: gewone JSON-teks wat enigiemand kan lees, of 'n IFC-lêer. Niks daarin is vasgeslaan aan 'n firma, 'n land of 'n rekening nie.

## Stoor tipes uit 'n projek

1. Maak **Data** op die modelbalk oop en kies {{ui:Tipe-pakkies}}.
2. Onder {{ui:Stoor tipes uit hierdie projek}}, merk die muurtipes om in te sluit. Die projek se eie tipes is gemerk; 'n beginnertipe kan bygevoeg word en gaan in as 'n kopie. Merk families as jy wil hê hulle moet ingesluit word.
3. Tik 'n {{ui:Paknaam}}.
4. {{ui:Stoor as 'n pak (.json)}} laai 'n `.cctypes.json`-lêer af. {{ui:Stoor as IFC (.ifc)}} laai 'n IFC-lêer af wat net tipes hou: elke muurtipe as 'n IfcWallType met sy materiaallaagstel, materiale en klassifikasie, vir enige BIM-program.

## Voeg tipes by 'n projek

1. Kies in dieselfde dialoog {{ui:Open 'n pak of 'n IFC-lêer…}} en kies 'n `.json`-pak of 'n `.ifc`-lêer.
2. Die dialoog lys wat die lêer hou: elke muurtipe met sy dikte, aantal lae en kodes, die materiale en die families.
3. Kies wat gebeur met {{ui:'n Tipe wat hierdie projek alreeds het}}: **Hou die projek se eie**, **Voeg die pak s'n as 'n kopie by** (dit kry 'n nuwe naam wat op "(2)" eindig), of **Vervang dit (net wanneer geen muur dit gebruik nie)**.
4. {{ui:Voeg by die projek}}. Die dialoog lys wat bygevoeg, gekopieer, vervang of behou is. Dit is een ontdoenstap.

Die nuwe tipes is dadelik in die Muur-gereedskap se tipelys.

## Vloer-, dak- en plafontipes

Die lys van tipes om te stoor hou ook die projek se vloer-, dak- en plafontipes en hul beginners (gemerk Vloer, Dak, Plafon). 'n Pak kan al vier soorte dra; elke tipe noem sy IFC-klas (IfcWallType, IfcSlabType, IfcCoveringType). 'n Vloer-, dak- of plafontipe wat elemente gebruik, word nie uit 'n pak vervang nie: verander dit in die tipe-redigeerder.

## Een tipe as 'n biblioteekitem

Merk presies een tipe en kies **Stoor as 'n biblioteekitem…**. Dit stoor 'n `.cctype.json`-lêer: 'n biblioteekitem van die Tipes-soort wat net daardie een tipe hou (sy lae, materiale, LOD en klassifikasiekodes). Laai dit in die {{ui:Biblioteek}} op om dit te deel. **Open 'n pak of 'n IFC-lêer** lees ook so 'n item en voeg sy tipe by die projek soos 'n pak.

## Goed om te weet

- 'n IFC-lêer van 'n ander program kan ook hier oopgemaak word. Elke muurtipe daarin wat materiaallae het, word gelees: die naam, die lae se materiale en diktes en enige holte is die lêer s'n. Watter lae die kern is en wat elke laag doen (afwerking, struktuur, isolasie) word geraai; die tipe is gemerk **(geraai)**, en jy moet dit in die muurtipe-redigeerder nagaan. 'n Muurtipe sonder lae word uitgelaat en benoem.
- 'n Materiaal wat die projek alreeds het, word soos dit is behou. 'n Nuwe materiaal wie se naam reeds gebruik word, kry "(pak)" na sy naam.
- 'n Tipe wat muurs gebruik, word nooit uit 'n pak vervang nie. Verander dit in die muurtipe-redigeerder, wat sy mure behoorlik skuif.
- 'n Kode wat op een muur gestel is, reis nie: dit hoort by daardie muur. 'n Kode wat op die tipe gestel is, wel.
- 'n Lêer met 'n veld wat die formaat nie het nie, 'n laag wie se materiaal ontbreek, of enigiets wat nie gewone teks is nie, word geweier, en die boodskap sê waar en waarom.
- Nie gebou nie: vloer-, dak- en plafontipes (hulle het geen tipes in hierdie weergawe nie: elk het sy eie dikte), deur- en venstertipes behalwe families, en arserings of kleure uit 'n ander program se lêer.
