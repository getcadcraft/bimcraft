---
title: Plaas toerusting en meubels uit die biblioteek
summary: Vind 'n item in die Biblioteek, 'n lêer of die oop tekening, plaas dit op 'n verdieping van 'n IFC-model met 'n spookvoorskou, draai dit, kap dit teen 'n muur vas, en stoor.
keywords: skuif, draai, roteer, sleep, biblioteek, librarycraft, plaas, invoeg, toerusting, meubels, blok, gesin, item, katalogus, inhoud, kcl, csv, gltf, obj, rfa, dwg, IFC-tipe
from: 3dad5d4b
---

## Wat jy gaan doen

Plaas 'n biblioteekitem in 'n IFC-model: 'n bak, 'n werkstafel, 'n stoel. BimCraft skryf dit as 'n behoorlike IFC-element met 'n tipe, sodat elke kopie van dieselfde item een stel geometrie deel, en sy data, itemnommer en lisensie saam reis.

## Stappe

1. Maak 'n IFC-model oop.
2. Klik die {{ui:Biblioteek}}-oortjie langs {{ui:Eienskappe}} aan die regterkant, of {{ui:Biblioteek}} in die balk bo die model.
3. Kies 'n bron:
   - **Ingeboude simbole**: generiese loodgieters-planssimbole wat saam met BimCraft onder Apache-2.0 ingesluit is, beskikbaar sonder aanlyn. Kontroleer hul afmetings voor konstruksie. Vir elektriese planssimbole en IFC-elektriese toestelle, gebruik **Bou › Elektries**.
   - **Biblioteek**: die CadCraft-biblioteek op hierdie webwerf. Openbare items vereis nie aanmelding nie.
   - **Hierdie lêer**: die blokke van 'n oop DWG- of DXF-tekening. 'n Dinamiese blok met sigbaarheidstoestande word een keer per toestand aangebied, benoem "Bak: Dubbele bak", elk slegs met daardie toestand se voorwerpe geteken.
   - **Lêers…**: 'n DWG-, DXF-, IFC-, glTF/GLB-, OBJ-, RFA- of CSV-lêer op jou rekenaar. Dit word in hierdie oortjie gelees; niks word opgelaai nie.
   - **Ander voere**: 'n ander biblioteek wat dieselfde voerformaat praat. Voeg sy adres een keer by; dit word in hierdie blaaier bewaar.
4. Soek of kies 'n kategorie, en klik dan 'n kaartjie. Die kaartjie wys 'n planvoorskou, die naam, vervaardiger en model, die lisensie en die weergawe.
5. Klik {{ui:Plaas in plan}} (in die Plan-aansig) of {{ui:Plaas in model}} (in die 3D-aansig). In Splits, waar die plan en die 3D-aansig albei wys, is die knoppie 'n verdeelknoppie: die hoofaksie is {{ui:Plaas in plan}}, en die pyl aan die regterkant se einde maak 'n kieslys oop met {{ui:Plaas in model}}. Of sleep die kaartjie, of die prent in die item se besonderhede, op die plan of die 3D-aansig: die item word geplaas waar jy los. Met 'n pen of 'n vinger, hou die kaartjie 'n oomblik vas en sleep dan.
6. Kies die verdieping in die plasingbalk. In die 3D-aansig word verdiepings bo dit verberg terwyl jy plaas, en die aansig draai na die bo-aansig; in die plan wys die plan reeds daardie verdieping. Die keuse van {{ui:Plaas in model}} vanaf die plan alleen bring die 3D-aansig langs dit op.
7. Beweeg die aanwyser oor die model: 'n deursigtige boks wys waar die item gaan.
8. Druk {{key:R}} om dit 90° te draai. Druk {{key:Tab}} (of {{ui:Muur-snap}}) om sy rug teen die naaste muur te plaas, na die kamer gerig.
9. Klik om dit te plaas. Of tik die posisie in **X, Y (mm)**, byvoorbeeld `1200, 3400`, en druk {{key:Enter}}.

'n Lig of enigiets wat van bo hang: stel **Monteer** op **Teen die plafon**. Die item se bo sit dan by die onderkant van die plafon oor die plek (of by die vlak se hoogte waar daar geen plafon is nie). Met 'n plafonplan op die plan-aansig begin **Monteer** op **Teen die plafon**.

10. Beantwoord die een vraag: die **itemnommer** (die volgende vrye nommer word ingevul), die hoeveelheid en 'n notas. Druk {{key:Enter}}.
11. Plaas meer, of druk {{key:Esc}} om te stop.
12. Klik {{ui:Stoor as IFC}} om die gewysigde kopie af te laai.

## Plan of model

Die biblioteek se plasingknoppie volg die aansig waarin jy is, en verander sodra jy die aansig verander (die {{ui:Plan}}-, {{ui:Splits}}- en {{ui:3D}}-knoppies, die sleutelbord, die oopmaak van 'n lêer). Plan wys een knoppie, {{ui:Plaas in plan}}; 3D wys een knoppie, {{ui:Plaas in model}}; Splits wys die verdeelknoppie, met {{ui:Plaas in plan}} as hoofaksie en {{ui:Plaas in model}} in sy kieslys. Albei maniere gebruik dieselfde plasingbalk en skryf dieselfde IFC-element: die aanwyser werk in die plan-aansig vir die een en in die 3D-aansig vir die ander. Druk {{key:Esc}} enige tyd om te stop.

Om 'n kaartjie te sleep het geen sleutel van sy eie nie; die verdeelknoppie, of die gewone knoppie, doen dieselfde met die sleutelbord.

## Skuif of draai 'n geplaaste item

In {{ui:Teken}}, kies die item in die plan. 'n Vierkantige handvatsel verskyn by sy invoegpunt en 'n ronde handvatsel langs dit.

- Sleep die item, of sy vierkantige handvatsel, om dit te skuif. Dit kap vas soos die Muur-gereedskap (muurente en -vlakke); {{key:Shift}} hou dit vierkant met waar dit was.
- Sleep die ronde handvatsel om dit in 15°-stappe te draai. Hou {{key:Shift}} vas vir 1°-stappe.
- Druk {{key:R}} om dit 90° te draai.
- In **Eienskappe** (ook in die 3D-aansig), tik **X**, **Y** en **Rotasie (°)**, of klik **Draai 90°**.

Elke skuif is een ontdoen-stap en reis in Live TeamWork. Die item hou sy itemnommer, sy biblioteekdata en sy hoogte bo die vlak. Nog nie gebou nie: sleep dit in die 3D-aansig.

## Wat jy behoort te sien

- Die item in die model, gekies, met sy eienskappe aan die regterkant: 'n **Biblioteekitem**-blokkie met sy lisensie en erkenning, en die stelle `CadCraft_Placement`, `CadCraft_LibraryItem`, `CadCraft_Equipment` en, vir items uit gemerkte tekeninge, `CadCraft_SourceAttributes`.
- "Geplaas: *item* (item *n*)" in die veranderingslys. {{key:Mod+Z}} ontdoen dit.
- Die statuslyn: "Geplaas *item* as item *n*."

## Goed om te weet

- Sommige items kom in verskeie groottes of opsies: die kaartjie het dan 'n **Variant**-keuse, en die een wat jy kies, is die een wat geplaas word. Sien [Plaas en ruil 'n biblioteekitem wat variante het](topic:library-variants).
- 'n Item sonder 'n 3D-liggaam ('n 2D-simbool) word met 'n plaasvervangerboks geplaas; jy gee sy hoogte wanneer jy gevra word.
- Meer van dieselfde: kies 'n geplaaste item en gebruik {{ui:Kopieer}} en {{ui:Plak}}, of {{key:Mod+D}}. Sien [Kopieer, plak en dupliseer biblioteekitems](topic:copy-paste).
- Om elke plasing met muur-snap aan te begin, skakel **Begin met muur-snap aan** aan in [BimCraft-instellings](topic:settings).
- Lengtes word na die model se eie eenhede omgeskakel, wat dit ook al is.
- **Entourage** (bome, struike, mense, motors) is ook in die biblioteek: soek na "tree", "person" of "car". Dit word deur CadCraft (CC0) geteken en hou hul kleure wanneer hulle geplaas word (’n stam bruin, blare groen, 'n motor se vensters deursigtig), in BimCraft en in ander BIM-programme. Hulle wys in [weergegee prente](topic:render).
- In 'n IFC2X3-lêer word die liggaam as 'n gefasette soliede voorwerp geskryf; in IFC4 as 'n getrianguleerde vlakstel. Albei open in ander IFC-gereedskap.
- 'n Tekening (DWG of DXF) kan nie hier gestoor word nie, so items word slegs in IFC-modelle geplaas. Gebruik **Hierdie lêer** op 'n tekening om te sien wat sy blokke sou word.

## Items in jou taal

'n Item kan sy naam, beskrywing en tipe in ander tale dra. Wanneer dit dit het in die taal waarop BimCraft gestel is (Instellings › Algemeen › Taal), wys die item se bladsy dié, met die naam wat sy vervaardiger daaronder gegee het, en **Plaas** skryf die naam in jou taal in die model, sodat die {{ui:Toerusting}}-skedule dit so lys. Die item bly dieselfde item: opdateringskontroles en ruil gaan volgens die item self, nooit volgens sy naam nie. Items sonder 'n vertaling hou hul eie woorde.

## Algemene foute

- **Die plasingknoppie ontbreek.** Geen IFC-model is oop nie. Maak eers een oop.
- **Die spook volg nie die aanwyser nie.** Die aanwyser is buite die model se gebied, of die verdiepingsvlak is buite beeld. Klik {{ui:Bo}}.
- **{{ui:Muur-snap}} sê daar is geen mure nie.** Die verdieping het geen mure in die IFC nie (sommige uitvoere plaas mure op 'n ander verdieping). Kies daardie verdieping, of tik X en Y.
- **'n Lêer se items is die verkeerde grootte.** Die lêer het geen eenhede nie, of sê die verkeerde een. In {{ui:Lêers…}} kies die eenhede en lees dit weer.

:::tip
Om dieselfde item twee keer te plaas deel een IFC-tipe, so 'n model met veertig stoele stoor die stoel een keer.
:::
