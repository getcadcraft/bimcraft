---
title: Muursamestellings en verwysingsmaatte
summary: Bou jou eie muurtipes laag vir laag met 'n eksplisiete kern, hou 'n projekmateriaalbiblioteek, en meet na vlakke en middellyne wat aangeheg bly wanneer die muur verander.
keywords: lod, ontwikkelingsvlak, lod 200, lod 300, generies, muursamestelling, muurtipe, lae, kern, kernvlak, kernmiddellyn, holte, lugspleet, membraan, huisomwikkeling, materiaalbiblioteek, materiale, dikte, verwysingsmaat, maat, assosiatief, liniggeeflyn, gevelbekleding, stut, gipsbord
from: 4ea8fbf5
---

## Wat jy sal doen

Maak 'n muurtipe wat ooreenstem met die muur wat jy gaan bou: gevelbekleding, bekleding, 'n 5½-inch stutkern en gipsbord, of baksteen, 'n lugspleet en 'n houtraammuur. Merk watter lae die kern is, sodat 'n maat of 'n liniggeeflyn die kern kan vashou terwyl die afwerkings daarom verander. Meet dan muur na die vlakke en middellyne wat jy bedoel.

## Maak 'n muurtipe

1. Begin 'n gebou of maak 'n IFC-model oop en skakel {{ui:Teken}} aan, kies dan die {{ui:Muur}}-gereedskap.
2. Kies 'n beginpunt in {{ui:Muurtipe}} en maak {{ui:Muursamestellings…}} oop. 'n Beginpunt open as 'n kopie; gee die nuwe tipe 'n naam.
3. Lae loop van die buitekant bo-aan die lys na die binnekant onderaan. Kies elke laag se materiaal, tik sy dikte (projekeenhede, of eksplisiete waardes soos `12.7 mm` of `1/2"`), kies sy funksie (afwerking, onderlaag, struktuur, isolasie, membraan) en merk die **Kern**-lae. Die kern moet een aaneenlopende groep wees.
4. {{ui:Voeg laag by}} voeg 'n laag by, {{ui:Voeg lugholte by}} voeg 'n lugspleet met sy ventilasie by (nie gespesifiseer, nie geventileer, geventileer), en {{ui:Voeg membraan by}} voeg 'n laag sonder nominale dikte by, soos huisomwikkeling. Die pyltjies skuif 'n laag na buite of na binne.
5. Die voorskou teken die lae volgens skaal met die kern onderstreep, genommer soos die rye, en gee 'n maat vir elke laag, die kern en die totaal. {{ui:Stoor tipe}}.

Die nuwe tipe verskyn in die Muur-gereedskap se lys en in 'n gekose muur se **Eienskappe**. Die stoor van 'n tipe wat jy wysig, verander elke muur wat dit gebruik; {{ui:Dupliseer tipe}} maak 'n aparte een en gee dit slegs aan die mure wat jy gekies het. Elke stoor is een ontdoen-stap, saam met die mure wat dit skuif, die deure en vensters daarin en die maate wat daarvan afhang.

'n Lugholte voeg breedte by. 'n Membraan voeg niks by nie: dit bly in die tipe sodat 'n skedule dit later kan vind, en dit tel nie mee vir die muur se of die kern se dikte nie. 'n Holte of 'n membraan word nooit as soliede materiaal getel nie. In 'n lêer wat as IFC2X3 gestoor is, word 'n membraan in die tipe se rekord behou maar weggelaat uit sy fisiese materiaallae.

## Merk 'n tipe met sy ontwikkelingsvlak (LOD)

'n Tipe kan sê hoe ontwikkeld dit is. In die redigeerder bied **Ontwikkelingsvlak (LOD)** die vaste skaal 100, 200, 300, 350, 400 en 500, of **Nie gestel nie**. 'n Generiese muur ("Wall 230 generic") is LOD 100 of 200; 'n spesifieke opbou met sy werklike lae ("230 clay brick, plastered both sides") is LOD 300 of meer. Die merker is joune om te stel: BimCraft bereken dit nie uit nie, en die beginpunt-tipes het geen.

Die merker verskyn langs die tipe se naam in die Muur-gereedskap se tipe-lys, in 'n muur se Eienskappe en in die lys [Ruil tipe](topic:wall-tools), en die verslag na 'n ruil sê of die vlak op- of afgegaan het. Om dit in die **Mure volgens tipe**-skedule en sy CSV te sien, merk **Wys elke muurtipe se LOD in die muurskedule** in Instellings › BimCraft › Mure: 'n laaste kolom, LOD, word bygevoeg. Dit word saam met die tipe in die IFC-lêer gestoor (in die tipe se `CadCraft_WallType`-eienskapstel, as die eienskap `LOD` en binne die tipe se rekord), so dit is daar wanneer jy die lêer weer oopmaak. Die merker is vir die oomblik net op muurtipes, nie op enkele elemente of ander soorte elemente nie.

## Generiese mure vir die skets-stadium

Die Muur-gereedskap se Tipe-lys begin met twee **generiese** mure: **Generiese muur 200 mm (buite)** en **Generiese muur 100 mm (binne)**. Elkeen is een laag van die generiese materiaal, gemerk LOD 200. Gebruik hulle wanneer jy weet waar die mure gaan, maar nog nie wat hulle van is nie.

'n Muur waarvan die tipe as **LOD 100** of **LOD 200** gemerk is, word in elke plan as **een gearseerde band** geteken, op elke detailvlak: geen lae, geen laaglyne nie. Dit geld vir die generiese mure en vir enige eie tipe wat jy as LOD 100 of 200 merk. Die muur self is volledig: dit het sy dikte, sy deure en vensters, sy vertrekke en sy hoeveelhede.

Om dit te ontwikkel, ruil sy tipe (Wysig › Mure › **Ruil tipe**, of Tipe in Eienskappe). Die muur word nooit weer geteken nie: dieselfde muur neem die nuwe tipe, en die verslag sê wat geskuif het. 'n Tipe wat as LOD 300 of hoër gemerk is, word soos voorheen met sy lae geteken.

Om elke muur volgens sy lae te teken, ongeag sy merker: Instellings › BimCraft › Mure, ontmerk **Teken mure van 'n LOD 100- of LOD 200-tipe as een gearseerde band**.

Die beginpunt-deure en -vensters is ook generiese soorte ('n grootte en 'n manier van oopmaak, nie 'n produk nie). Met **Wys elke muurtipe se LOD in die muurskedule** aan, wys die Deure- en Vensters-skedules LOD 200 vir hulle.

## Gee 'n tipe sy hoeveelheidsopname-data

In die muurtipe-redigeerder neem **Hoeveelheidsopname-data** wat 'n skatter oor die muur moet weet, een keer vir die tipe: die **eenheid** waarvan dit gebou is ('n baksteen of 'n blok: sy naam, lengte, hoogte en breedte), die **mortel** (naam en voegdikte), en 'n **tarief** met sy geldeenheidkode (drie letters, soos USD, EUR of ZAR) en wat dit per is: 'n vierkante meter of vierkante voet netto muuroppervlakte, 'n meter of voet muurlengte, of elke muur. Al hierdie is opsioneel.

Dit word saam met die tipe in die lêer gestoor. Elke muur van die tipe rapporteer dan dit: {{ui:Skedules}} › **Muurtipes: hoeveelheidsopname-data** lys die eenheid, die mortel, die tarief en die tarief maal die gemete hoeveelheid, en die hoeveelheidsopname wat aan TakeoffCraft gegee word, dra dit op daardie muurtipe se item. Verander dit op die tipe en elke muur volg.

Drie meer velde is vir die tel van bakstene of blokke en mortel:

- **Afval op eenhede, %** word by die getal eenhede gevoeg. Laat dit leeg om die syfer van die projek se metode te gebruik, of geen as die metode geen het nie. Tik 0 om geen afval te hê nie, wat die metode ook sê.
- **Ekstra mortel, %** is vir gate of perforasies wat mortel opneem. Dit word by die mortelvolume gevoeg. Laat dit leeg vir geen.
- **Lae gebou van hierdie eenheid**: merk elke laag wat 'n blad van hierdie baksteen of blok is. 'n Holmuur het twee. As niks gemerk is nie, word die kernlae getel.

Die tarief kan ook per eenheid om te bestel, per 1000 eenhede om te bestel of per m³ mortel wees. Waar die eenheid 'n lengte en 'n hoogte het, wys **Muurtipes: hoeveelheidsopname-data** die eenhede per m² (of ft²) van een blad, die eenhede om te bestel en die mortelvolume; die formules is in [Bakstene, blokke en mortel](topic:plan-schedules-and-pdf#bricks-blocks-and-mortar). 'n Tipe het een eenheid: twee blaaie van verskillende eenhede ('n baksteen buitenblad en 'n blok binneblad) kan nog nie op een tipe getel word nie.

## Hou die kern stil

In **Eienskappe** stel 'n muur se **Liniggeeflyn** op 'n kernvlak of die kernmiddellyn. Wanneer jy later 'n afwerking byvoeg of dik maak, bly daardie lyn waar hy is en die muur groei rondom hom; mure wat by 'n hoek daarop uitkom, volg, sodat reguit hoeke gesluit bly.

## Projekmateriaal

{{ui:Materiaalbiblioteek…}} lys die projek se materiale: naam, kategorie, die dikte waarmee 'n laag begin, vertoonkleur, gesnyde vulpatroon en notas. Die biblioteek word saam met die projek in die IFC gestoor. Wanneer jy 'n materiaal vir 'n laag kies, kry daardie laag die materiaal se verstekdikte, wat jy dan kan verander; om die biblioteek later te wysig, verander nooit mure wat jy reeds geteken het nie. Jy kan ook 'n materiaal maak vanaf die laag se materiaallys met {{ui:+ Nuwe materiaal…}}.

## Verwysingsmaatte

{{ui:Annoteer}} › {{ui:Verwysingsmaat}}: kies horisontaal, vertikaal of uitgelyn, en 'n verwysing: die buite- of binne-afwerkingsvlak, die buite- of binne-kernvlak, die muur se middellyn of die kernmiddellyn. Kies die eerste muur, verander die verwysing as jy wil, kies die tweede, en klik dan waar die maatlyn gaan. Twee verwysings op een muur meet sy totale of sy kern se dikte. {{ui:Verwysingsmaatte…}} lys die aansig se maate, insluitend enige wat 'n muur verloor het, met Eienskappe, Herbind verwysings en Skrap.

### Meet die hele plan volgens reëls

{{ui:Annoteer}} › {{ui:Meet die plan…}} meet die buitekant van die vloerplan waarna jy kyk: die algehele grootte in elke rigting, 'n ry maate langs elke buitekant (muureindes, mure wat die rand raak, en die deure en vensters daarin), met die rye duidelik van die gebou af geplaas. Merk wat jy wil hê, lees die telling, en klik dan {{ui:Voeg die mate by}}. Dit is gewone verwysingsmaate, so hulle volg die mure wanneer die mure beweeg, en jy kan enige van hulle kies, skuif of skrap; die hele stel is een ontdoen-stap, en om dit weer te doen maak geen nuwe een nie.

Dit meet net die buitekant: vertrekke binne die gebou, geboë mure en mure wat nie vierkant op die plan is nie, word aan die handgereedskap oorgelaat, en roosterlyne is nie mure nie, so maate tussen roosters word hier nie gemaak nie. Jou gekoppelde assistent kan dieselfde doen met `plan_dimension`.

Die maat is aan die mure geheg, nie aan 'n plek op die skerm nie: wanneer 'n muur beweeg of sy tipe verander, volg die waarde. As 'n muur geskrap word, sê die maat dit is onopgelos en wys geen getal nie, totdat jy dit herbind of ontdoen. Die lengtekassie neem ook plankoördinate soos `10',12'` vir 'n maatlyn op 'n presiese plek.

Maate is vir mure wat BimCraft geteken het, in plan-aansigte. Nog nie gebou nie: maate in snitte en aansigte, na deure, vensters en ander komponente, en samestellingslae wat in die plan en snit geteken word; sien [Wat nog nie gebou is nie](topic:not-built-yet).

## Sien ook

[Teken mure](topic:draw-walls), [Verander 'n muur, deur of venster](topic:change-a-wall-or-door), [Eienskappe](topic:properties-panel).
