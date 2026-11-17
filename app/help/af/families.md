---
title: Families en hul groottes
summary: Deure, vensters en meubels kom in families. Elke grootte van 'n familie is een tipe in die IFC-lêer, so die tipelys bly kort in BimCraft terwyl ander programme gewone tipes lees.
keywords: familie, families, tipe, tipes, grootte, groottes, deurtipe, venstertipe, meubels, tafel, rak, kas, nuwe grootte, dupliseer, plaas familie, familielêer, ccfamily, IFC-biblioteek, projekbiblioteek, groep, sigbaarheid, IfcDoorType, IfcWindowType, IfcGroup
from: 77caac48
---

## Wat 'n familie is

'n Familie is een soort ding in verskeie groottes: 'n enkele swaaideur wat 32, 36 en 42 duim breed kom, of 'n tafel wat lank en kort kom. In BimCraft sien jy die familie een keer, met sy groottes onder dit, in plaas van 'n lang lys tipes.

IFC het geen families nie. In die lêer is elke grootte 'n gewone tipe ('n deurtipe, 'n venstertipe, 'n meubeltipe…), en die familie is 'n groep wat sy groottes lys. Ander BIM-programme lees die tipes en die groep soos hulle is; BimCraft lees die familie weer uit hulle.

## Waar om hulle te vind

- Die projekbladeerder se **Families**-groep lys die families in hierdie model, met hoeveel groottes elkeen het en hoeveel geplaas is. Onder hulle is die **Startfamilies**: die deure en vensters van die Deur- en Venster-gereedskap, en 'n tafel, 'n rakeenheid en 'n basiskas.
- {{ui:Build}} › {{ui:Families…}} wys dieselfde lys in 'n venster.
- Klik 'n familie om dit oop te maak: sy groottes, wat elke grootte se waardes is, en hoeveel elemente elke grootte gebruik.

## Deure en vensters

Die Deur- en Venster-gereedskap lys die families van daardie soort, en 'n **groottelys** langs hulle. Kies 'n grootte, of tik **W** en **H**: 'n breedte en hoogte wat geen grootte nog het nie, word 'n nuwe grootte van die familie wanneer jy die deur plaas. Deure van dieselfde grootte deel een tipe.

In {{ui:Properties}} wys 'n gekose deur of venster sy **Familie** en **Grootte**. Kies 'n ander grootte uit die lys, of tik 'n nuwe breedte of hoogte. {{ui:Open the family}} maak die familie oop waartoe dit behoort.

Elke deur- of vensterraam volg sy eie muur se dikte, soos voor families. Die grootte se tipe hou ook die deur geteken in 'n 140 mm-muur, vir programme wat tipes lees.

## Nuwe grootte van hierdie familie

1. Maak die familie oop.
2. Onder **Nuwe grootte van hierdie familie**, tik sy waardes (Breedte, Hoogte en die familie se ander parameters) en, as jy wil, 'n naam. Sonder 'n naam kry dit 'n naam uit sy waardes.
3. Klik {{ui:Make the size}}.

Twee groottes kan nie dieselfde waardes hê nie. **Hernoem** verander 'n grootte se naam; **Verwyder** haal 'n grootte weg wat niemand gebruik nie; **Kies** kies die elemente van daardie grootte.

## Plaas meubels

1. {{ui:Build}} › {{ui:Place family}}, of {{ui:Place}} in 'n familie se venster.
2. Kies in die balk die familie en sy grootte.
3. Klik op die plan om dit op die vlak te plaas. Druk {{key:R}} om dit 90° te draai voordat jy klik. {{key:Esc}} stop.

'n Geplaasde stuk se {{ui:Properties}} wys sy grootte, waar dit is en hoe ver dit gedraai is; {{key:Delete}} verwyder dit. Elke stuk van een grootte deel daardie grootte se vorm, so verandering van die familie verander hulle almal.

## Groottes uit 'n tabel

{{ui:Sizes from a table…}} in 'n familie se venster lees 'n CSV-lêer (komma, kommapunt of tab). Die eerste ry noem die kolomme: 'n parameter se naam of etiket, en opsioneel `Name`. Lengtes is millimeter tensy jy 'n eenheid skryf (`1.2 m`, `36 in`). Ja / Nee-kolomme neem yes, no, true, false, 1 of 0, en 'n parameter sonder 'n kolom hou sy verstekwaarde. Elke ry word 'n grootte, in een stap wat jy kan ontdoen; 'n grootte wat reeds daar is, word oorgeslaan. Een ry wat nie lees nie, of wat die familie nie kan teken nie, weier die hele tabel en noem sy lyn. Hoogstens 200 rye en 1 MB. {{ui:Save the sizes as a table}} skryf dieselfde tabel terug uit.

## Stel op elke element

'n Parameter wat in die redigeerder as **Per element** gemerk is ('n Ja / Nee wat 'n dwarsbalk, 'n etiket of 'n materiaal byvoeg), is nie deel van 'n grootte nie: twee deure van een grootte kan verskil. Kies die element en **Eienskappe** wys hierdie parameters; verander een en daardie element word weer met sy eie vorm geteken (meubels en sanitêre toestelle kry 'n eie vorm, deure en vensters word weer in hulle mure gemaak). Stel hulle almal terug op hul verstekwaardes en dit gaan terug na sy grootte se vorm.

## Detailvlak

{{ui:Build}} › {{ui:Families…}} › **Detailvlak** stel, vir elke familie in die model, wat in die massiewe liggame gestoor word en in die plansimbole geteken word: **Fyn** hou alles, **Medium** en **Growwe** laat die dele weg wat die redigeerder as fyner merk (kleiner lêers, vinniger aansigte). **Outomaties** stoor alles en laat 'n blad se aansig kies volgens sy skaal: 1:50 en groter fyn, 1:100 medium, 1:200 en kleiner growwe. Een stap wat jy kan ontdoen.

## Dupliseer 'n familie

Jy hoef nie van niks af te begin nie. {{ui:Duplicate}} kopieer 'n familie met sy parameters, massiewe liggame en groottes onder 'n nuwe naam. Verander die kopie in die redigeerder; die oorspronklike bly soos dit was.

## Familielêers

- {{ui:Save the family file}} stoor 'n `.ccfamily.json`: die familie se parameters, massiewe liggame en groottes. Maak dit in 'n ander model oop met {{ui:Open a family file…}} in die Families-groep.
- {{ui:Save as IFC}} stoor die familie as 'n klein IFC-lêer: sy groottes se tipes en sy groep, verklaar deur 'n IFC-projekbiblioteek. Ander programme maak dit oop as 'n stel tipes; BimCraft maak dit oop as die familie weer.

'n Familielêer wat hier oopgemaak word, word as data gelees en nagegaan voordat iets geskryf word. 'n Familie wie se sleutel reeds in die model is, kom as 'n afsonderlike familie in. 'n Familie wat ander hou (sien Families binne, in die redigeerder se hulp), bring hulle saam: die lêer lys hulle, en die model hou die wat dit reeds het.

## Families in die Biblioteek

Maak {{ui:Families…}} oop en kies {{ui:From the Library…}} om die families te sien wat in die Biblioteek gedeel is. {{ui:Add to this project}} lees een soos 'n familielêer: BimCraft kontroleer elke veld voordat dit iets maak, die familie kom in as 'n eie familie, en dit maak oop in die redigeerder. Om dit by te voeg, is een ontdoen-stap. Om jou eie te deel, gebruik {{ui:Save all as a library}} en stuur die lêer na die Biblioteek (die Biblioteek se personeel publiseer 'n familielêer met 'n opdrag, en elke familie is sy eie item met sy groottes). As die Biblioteek nie bereik kan word nie, sê die lys dit en verander niks nie.

## Ander programme se tipes

Tipes wat deur ander programme gemaak is, wys ook in die Families-groep, gegroepeer volgens 'n raaiwerk: volgens die deel van hulle elemente se name voor die eerste dubbelpunt, anders volgens tipenamen wat net in hulle nommers verskil. Die familievenster sê watter raaiwerk dit gebruik het. Hulle word gelys en jy kan hulle elemente kies, maar hulle word hier nie gewysig nie: hulle het geen familie-resep nie.

:::note
Die startdeure en -vensters word presies geteken soos voor families. Lêers wat voor families gemaak is, maak onveranderd oop: hulle deure en vensters wys onder hulle familie met die groottes in gebruik, en skuif die eerste keer dat jy dit verander na 'n eie grootte.
:::

Sien ook [Redigeer 'n familie](topic:family-editor) en [Deure en vensters](topic:doors-and-windows).
