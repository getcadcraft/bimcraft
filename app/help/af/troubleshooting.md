---
title: Probleemoplossing
summary: Boodskappe wat BimCraft wys, wat dit veroorsaak, en wat om te doen, vir die oopmaak van lêers, vouers, 3D-modelle, tekeninge en wysigings.
keywords: probleem, fout, werk nie, kan nie oopmaak nie, misluk, onvolledig, beskadig, stadig, ineenstort, leeg, ontbreek, boodskap, hulp
from: 1e5a79fc
---

Boodskappe verskyn in die statuslyn onderaan die verhoog, in rooi wanneer iets misluk het. Soek die boodskap hieronder.

## Lêers oopmaak

**"*naam* is nie 'n IFC-, RVT-, RFA-, DWG- of DXF-lêer nie."**
BimCraft het die lêer nie herken nie. Kontroleer die uitbreiding en dat die lêer nie leeg is nie. PDF's, prente en kantoorlêers open nie.

**".ifczip word nog nie ondersteun nie. Stoor of voer die model uit as 'n gewone .ifc-lêer."** (ook vir `.ifcxml`)
Pak die `.ifczip` uit (dit is 'n gewone zip-lêer wat 'n `.ifc` hou) of voer gewone IFC uit.

**"… is 'n projeklêer wat BimCraft nog nie lees nie."**
'n `.pln`-, `.pla`-, `.tpl`- of `.bpn`-lêer. Voer IFC of DWG daaruit uit en open dit: sien [Open .pln- en .pla-projeklêers](topic:pln-project-files).

**"Hierdie IFC-lêer kon nie gelees word nie."**
Die IFC-lêer is beskadig of is nie werklik IFC nie. Maak dit oop in 'n teksredigeerder: 'n werklike IFC-lêer begin met `ISO-10303-21;`. Voer dit weer uit.

**"Hierdie lêer is onvolledig: dit is … MB, maar sy eie indeks wys na data van ten minste … MB in. …"**
Die projek- of familielêer is afgesny terwyl dit gekopieer, opgelaai of gesinkroniseer is. 'n Lêer op 'n wolkskyf wat "net aanlyn" is, lyk dieselfde. 'n Lêer wat op sy eie oopgemaak word, open steeds, met hierdie boodskap bo-aan die kaart en "Wys wat herwin is; kopieer die oorspronklike weer vir die volle model.": die kaart wys net die dele waarvan elke greep in die lêer is, en lys die res onder **Nie in die lêer nie**. Maak die lêer vanlyn beskikbaar op jou wolkskyf, of kopieer die oorspronklike weer, en heropen dit. In 'n vouer wys BimCraft eerder die nuutste volledige rugsteun.

**"… Die lêer se eie lys van inhoud is ook in die ontbrekende deel, so niks daarin kan oopgemaak word nie."**
Die lêer is so vroeg afgesny dat nie eens sy inhoudslys daar is nie. Niks kan uit hierdie kopie herwin word nie. Kopieer die oorspronklike weer en heropen dit.

**"Hierdie saamgestelde lêer het geen BasicFileInfo-stroom nie, so dit is nie 'n Revit-lêer nie."**
Die lêer is 'n saamgestelde lêer van 'n ander soort (ou kantoordokumente gebruik dieselfde houer). Kontroleer dat jy die regte lêer gekies het.

**"Werk nog aan die vorige een…"**
BimCraft is nog besig met die vorige lêer of vouer. Wag tot die statuslyn klaar is, en probeer dan weer.

**Die lêerkieser maak my lêer grys.**
Die kieser bied net `.ifc`, `.rvt`, `.rfa`, `.rte`, `.rft`, `.dwg` en `.dxf` aan. Sleep ander lêers eerder op die bladsy, en BimCraft sal jou sê of dit dit kan lees.

## Vouers oopmaak

**"Hierdie vouer het meer as 20,000 lêers. Kies 'n kleiner vouer, soos een projek."**
Jy het 'n vouer te hoog gekies, soos 'n hele skyf. Kies een projekvouer.

**"Die blaaier het nie toegang tot *naam* gegee nie. Kies dit weer met Open 'n vouer."**
Jy het op {{ui:Heropen}} op 'n onlangse vouer geklik, en die blaaier se toestemming is geweier of het verval. Kies die vouer weer, of sleep dit in.

**Die blaaier sê dit sal lêers "oplaai".**
Dit is die blaaier se eie woord vir die oorhandiging van lêers aan 'n bladsy. BimCraft stuur hulle nêrens nie. Sleep die vouer in om die vraag te vermy.

**Niks gebeur op 'n foon of tablet nie.**
Baie mobiele blaaiers kan nie vouers kies nie. Maak enkele lêers oop, of gebruik 'n rekenaar.

## Die IFC-enjin laai die eerste keer

**Die statuslyn bly op "Begin die IFC-enjin…", of wys 'n fout soos "Failed to fetch".**
Die IFC-enjin kon nie afgelaai word nie. Jy is dalk vanlyn, of 'n vuurmuur of inhoudsblokkeerder keer dit.

:::offline
Jy is vanlyn. As die app-balk se knoppie nie {{ui:Vanlyn gereed}} sê nie, is die IFC-enjin nooit in hierdie blaaier gestoor nie. Koppel weer aan, maak die lêer weer oop, en klik dan {{ui:Stoor vir vanlyn}} sodat dit die volgende keer vanlyn werk. Sien [Aanlyn en vanlyn](topic:online-offline).
:::

:::online
Herlaai die bladsy en probeer weer. Op 'n werksnetwerk, vra jou IT-span om die site se `.wasm`-lêers toe te laat.
:::

## Stoor vir vanlynge gebruik

**Die knoppie sê {{ui:Kon nie stoor nie}}.**
Sommige lêers het nie afgelaai nie, gewoonlik omdat die verbinding gebreek het. Kontroleer jou verbinding en klik die knoppie weer. Enige vroeëre vanlyn-kopie word behou totdat 'n nuwe een voltooi is.

**Die knoppie sê {{ui:Vanlyn nie beskikbaar nie}}.**
Hierdie venster kan nie 'n vanlyn-kopie hou nie, byvoorbeeld 'n privaatvenster of 'n bestuurde werkrekenaar. Sien [Werk vanlyn](common:offline).

**Die knoppie bly vir 'n rukkie op "Stoor *n* van *m*".**
BimCraft se kopie is ongeveer 11 MB, meeste daarvan die IFC-enjin. Hou die oortjie oop totdat dit {{ui:Vanlyn gereed}} sê.

**BimCraft het vanlyn oopgemaak maar lyk verouderd.**
Jou gestoorde kopie is van 'n vroeëre besoek. Wanneer jy aanlyn is, klik {{ui:Vanlyn gereed}} en kies {{ui:Stoor weer (kry die nuutste weergawe)}}.

## 3D-aansig

**Die model is nie waar ek verwag het nie, of dit is klein.**
Druk {{key:F}} of klik {{ui:Pas}}. Pas raam altyd alles in die model, insluitend verdiepings wat jy afgemerk het en los elemente ver van die gebou, so die gebou kan klein lyk. Zoem vanaf daar in.

**Klik kies niks nie.**
Hou die muis stil terwyl jy klik: 'n klein sleep wentel. Elemente op afgemerkte verdiepings kan nie gekies word nie. Met {{ui:Ruimtes}} aan, word die deursigtige ruimtes gekies voordat wat binne is.

**Die {{ui:Rante}}-knoppie is grys: "Rante is af vir baie groot modelle".**
Die model het meer as 1.5 miljoen driehoeke. Rante is afgelaat om geheue te spaar.

**Die oortjie word stadig, wit, of wys die blaaier se ineenstortingsbladsy.**
Die model is te groot vir die geheue wat die blaaier aan die oortjie gee. Maak ander oortjies toe en herlaai. Voer 'n kleiner IFC uit: een gebou, een dissipline of minder verdiepings. Sien [Blaaiers, toestelle en geheue](topic:platforms).

**Die 3D-aansig bly leeg.**
WebGL is dalk afgeskakel of geblokkeer. Skakel in die blaaier se instellings hardewareversnelling (of grafiese versnelling) aan en herbegin die blaaier.

## IFC wysig

**"Gebruik 'n getal."** Die waarde is numeries. Tik 'n gewone getal sonder eenhede, soos `2.4`.

**"Gebruik 'n heelgetal."** Die waarde is 'n telling of heelgetal. Verwyder die desimale.

**"Net enkelwaarde-eienskappe kan gewysig word."** Lyste, opsommings en hoeveelhede is leesalleen.

**{{key:Mod+S}} maak die blaaier se "Stoor bladsy"-venster oop.**
Daar is geen ongestoorde veranderinge nie, so BimCraft het die sleutel aan die blaaier gelaat. Maak die venster toe.

**{{key:Mod+Z}} doen niks nie.**
Dit werk net terwyl jy ongestoorde veranderinge het en nie in 'n veld tik nie. Na 'n stoor is daar niks meer om te ontdoen nie.

**Die {{ui:Veranderinge}}-lys wys steeds wysigings nadat ek hulle weggegooi het en 'n tekening of vouer oopgemaak het.**
Wanneer jy die "Gooi hulle weg?"-vraag met OK beantwoord en dan iets anders as 'n IFC-model oopmaak, bly die ou wysigings in die geheue, en {{ui:Stoor as IFC}} sou hulle steeds stoor. Om regtig vars te begin, maak die oorspronklike IFC weer oop, of herlaai die bladsy.

**My wysiging het meer elemente verander as wat ek gekies het.**
Jy het 'n eienskap verander in 'n stel wat "(tipe)" gemerk is. Tipe-eienskappe geld vir elke element van die tipe. Klik {{ui:Ontdoen}}. Sien [Verander 'n tipe-eienskap vir elke element van 'n tipe](topic:type-vs-instance).

## Tekeninge

**"*naam* kon nie gelees word nie. Dit kan beskadig wees, of in 'n formaat gestoor wees wat die leser nog nie hanteer nie (…)."**
Stoor die tekening vanaf die program wat dit gemaak het as 'n ouer DWG (2018 of vroeër) of as DXF, en probeer weer.

**"Hierdie tekening het niks om te wys nie."** of **"*naam* is 'n leë tekening: dit hou geen lyne, teks of blokke nie."**
Die tekening is leeg, of hou net dinge wat BimCraft nog nie teken nie (sien **Nog nie getekend nie** aan die regterkant).

**"Hierdie tekening is baie groot; net 'n deel word gewys."**
BimCraft het opgehou teken om responsief te bly. Skakel lae wat jy nie nodig het af, of maak die blaaie wat jy nodig het oop uit 'n kleiner tekening.

**Dele van 'n blad ontbreek.**
Gekoppelde tekeninge ontbreek dalk: kyk onder **Gekoppelde tekeninge** aan die regterkant. Sien [Vind gekoppelde tekeninge en prente](topic:dwg-linked-files). Lae kan ook af wees: klik {{ui:Alles aan}}.

**'n Prent wys as 'n leë raam.**
Die lêer is nie gevind nie, of dit is 'n TIFF ("TIFF kan nie in 'n blaaier gewys word nie"). Voeg 'n PNG- of JPEG-kopie by met {{ui:Voeg prente by…}}.

**Blaai op my trackpad zoem in plaas daarvan om die tekening te skuif.**
Dit is hoe tekeninge in BimCraft werk. Klik en sleep om te pan.

## Steeds vas?

Lees [Wat is nog nie gebou nie](topic:not-built-yet): die ding waarna jy soek bestaan dalk nie in hierdie weergawe nie.
