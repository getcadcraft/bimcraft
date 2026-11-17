---
title: Ontleed die strukturele raamwerk
summary: Kragte, reaksies en defleksies van die model se balke, kolomme en bande onder lasgevalle en kombinasies wat jy stel, en dit word in die IFC gehou. 'n Ontledingshulpmiddel, nie 'n kodetoets nie.
keywords: ontleding, eenhede, voete en duim, vertooneenheid, strukturele ontleding, ontwerpkontroles, benutting, gewalste, gelaste, AISC 360, EN 1993-1-1, raamwerkontleding, analitiese model, styfheidsmetode, laste, lasgeval, kombinasie, doodlas, lewendelas, eie gewig, reaksies, buigmoment, skuifkrag, normaalkrag, defleksie, vervormde vorm, steunpunte, skarnier, vrystelling, verslag, pdf, csv, craftscript, frame3d, balke, kolomme, lede
from: b93b58c4
---

Die {{ui:Ontleding}}-oortjie aan die regterkant vind die kragte in die oop model se balke, kolomme en bande, die reaksies by die kolomvoete, en hoe ver die lede buig, vir die laste wat jy gee.

:::warning
Dit is 'n **ontledingshulpmiddel, nie 'n kodetoets nie**. Die ontleding pas geen ontwerpkode toe nie: dit dimensioneer nie lede of kontroleer kapasiteite nie, en dit kies nie lastfaktore nie. 'n Ingenieur kontroleer die analitiese model, sy laste en steunpunte, en besluit wat die getalle beteken. Die {{ui:Ontwerpkontroles}}-blok daaronder kontroleer gewalste staal-I-profiele teen AISC 360 of EN 1993-1-1, 'n hulpmiddel totdat 'n ingenieur dit nagesien het: sien [Ontwerpkontroles](topic:frame-analysis#design-checks).
:::

## Voer dit uit

1. Maak 'n IFC-model en die {{ui:Ontleding}}-oortjie oop.
2. Kies een of meer balke, kolomme of bande in die aansig, kies 'n {{ui:Geval}}, 'n {{ui:Belasting}} en 'n {{ui:Rigting}}, tik die waarde en druk {{ui:Voeg belasting by}}: kN/m vir 'n las wat oor 'n lid versprei is, kN vir 'n puntlas.
3. Druk {{ui:Voer ontleding uit}}.

Die tabel lys elke lid se grootste normaalkrag, skuifkragte, buigmomente, wringing en defleksie; klik 'n lid se naam om dit in die aansig te kies. Daaronder is die reaksies. {{ui:Op die model}} teken die vervormde vorm, of een snitkrag as 'n diagram langs elke lid. Die resultate verouder wanneer die model verander: voer dit weer uit.

Elke las en instelling is een verandering in die lys {{ui:Veranderinge}}: {{ui:Ontdoen}} neem dit terug, en {{ui:Stoor as IFC}} hou hulle in die lêer (die projek se `CadCraft_Analysis`-eiendomstel), sodat die laste die volgende keer as die model hier oopmaak nog daar is.

## Hoe die analitiese model gemaak word

- Elke IfcBeam, IfcColumn en IfcMember waarvan die vorm een reguit ekstrusie is, word 'n lid op sy profiel se swaartepuntlyn. Sy profieleienskappe kom uit die profiel: I-, U-, L- en T-vorms, reghoeke en buise, sirkels en ronde buise, of enige geslote omtrek (dan is die wringkonstante 'n skatting, en die verslag sê dit). Enigiets anders word weggelaat en getel.
- In 'n model stop balke by 'n kolom se vlak en sit onder die vloer. Elke lid se einde word langs sy eie lyn gedra na die as van die lid waarin dit raam, wanneer daardie as naby is (binne ongeveer die grootte van die profiele), en daardie lid word daar verdeel. Die verslag sê hoeveel eindes verskuif is.
- **Kolomvoete** waaronder niks gaan nie, is steunpunte: vas (die begin) of skarnier (vasgehou op plek en teen draai, vry om te draai).
- **Balkeindes** is styf of skarnier volgens die reël {{ui:Balkeindes sonder verbinding}}; **bande** (IfcMember) is aan albei eindes geskarnier. Kies een lid om sy eindes, of 'n kolom se voet, 'n eie reël te gee.
- Materiale volgens naam: beton (E = 30 GPa), hout (E = 11 GPa), andersins staal (E = 200 GPa).

As die raamwerk kan beweeg sonder om iets te buig — 'n meganisme — stop die lopie en sê waar en in watter rigting.

## Gevalle, kombinasies, tekens en die verslag

Die ontleding begin met **Dood** (eie gewig), **Lewe** en **Dood + lewe**; voeg gevalle en kombinasies by met die faktore wat jou ontwerpkode vra. N > 0 is trek; My > 0 plaas die lid se plaaslike −z-kant in trek ('n balk wat onder swaartekrag sak, het My > 0). {{ui:Verslag (PDF)}} en {{ui:Verslag (CSV)}} hou die aannames, profiele, gevalle, reaksies met hul somme, lidkragte, verplasings en 'n omhulsel. {{ui:Voer uit as CraftScript}} skryf die raamwerk vir PartCraft se Script-werkruimte, waar die biblioteekfunksie `frame3d` dit in leesbare kode oplos.

Die metode is die direkte styfheidsmetode, lineêr en eerste-orde tensy jy Tweede orde (P-Delta) merk; dit is teen handboekgevalle nagegaan.

**Tweede orde (P-Delta).** Merk *Tweede orde (P-Delta)* langs Voer uit: elke kombinasie word weer opgelos met die lede se normaalkragte wat op die vervormde raamwerk inwerk (elke lid in 4 stukke gesny, sodat die buiging van 'n lid tussen sy eindes ook tel), totdat die normaalkragte vasstel. Die resultaatlyn gee die aantal passe en hoeveel die swaai toegeneem het; die momente, defleksies, ontwerpkontroles en verslag gebruik dan hierdie resultate. Bo die raamwerk se elastiese kritieke las stop die lopie en sê dit so. Dit is elasties met klein rotasies, slegs buiging, sonder styfheidsvermindering of skynlaste (nie die AISC-direkte ontledingsmetode op sy eie nie); plate, mure en styf vloere bly eerste-orde.

**Vloerdruk op plate.** Vir betonplate (die ontleding lees 'n plaat as plate wanneer sy materiaal beton is), het die Laste-blok {{ui:Druk op elke plaat}}: tik kN/m², kies die geval hierbo en druk {{ui:Voeg by plate}}. Dit word oor elke plaat wat die ontleding gevind het, afwaarts versprei, en gelys met 'n Verwyder-skakel. Dit is een druk vir alle plate, nie een per plaat nie, en dit is nie 'n kodelas nie: tik die waarde wat jou ingenieur jou gee.

**Natuurlike frekwensies (eindige elemente).** Die {{ui:Eindige elemente: natuurlike frekwensies}}-blok onder die resultate vind die laagste modusse van dieselfde model met die eindige-elementenjin: balke met hul eindvrystellings, plate en mure as plat vier-knoop-skille, styf vloere en steunpunte. Kies hoeveel modusse (3, 6, 10 of 20) en die plaatelement (die vier-knoop-skil vir dik of dun plate, of die dunplaatelement) en druk {{ui:Vind die frekwensies}}. Die tabel gee elke modus se frekwensie in Hz, sy periode in sekondes en sy effektiewe modale massa langs X, Y en Z as 'n aandeel van die massa wat kan beweeg; {{ui:Wys op die model}} teken enige modus soos die vervormde vorm geteken word. Massa is die materiaal se digtheid maal die volume: laste voeg nie massa by nie, en 'n materiaal sonder digtheid het geen nie. Die verslag (PDF, CSV) dra die tabel. Dit is slegs elasties en klein beweging, en geen seismiese of windlas word hier uit 'n kode gemaak nie. Nie 'n kodetoets nie; jou ingenieur hersien die resultate.

**Responsspektrum, tydgeskiedenis en stootproef.** Drie blokke meer sit onder die frekwensies en gebruik dieselfde eindige-elementmodel. Massa vir almal is die materiaal se digtheid plus die afwaartse laste van die gevalle wat jy merk, elk maal 'n faktor wat jy tik (byvoorbeeld Dood teen 1 en Lewe teen die aandeel wat jy as massa tel).

{{ui:Responsspektrum}} lees elke modus af van 'n spektrum wat jy gee (’n tabel van periode en versnelling, of die ASCE 7-vorm uit SDS, SD1 en TL; die knoppie {{ui:Gebruik die Seismies-blok se waardes}} kopieer dié uit die Seismies-blok), en kombineer die modusse deur CQC, SRSS, die tien-persent-reël of 'n absolute som, en voeg dan die X-, Y- en Z-rigtings saam (100 % + 30 % of SRSS). Dit gee die basisskuifkrag, verdiepingsverplasings, lideindekragte en 'n modustabel wat waarsku wanneer die gebruikte modusse minder as 90 % van die massa dra. Jy kan die resultate met 'n faktor skaal of tot 'n basisskuifkrag wat jy tik; die blok bereken daardie basisskuifkrag nooit self nie. Resultate het geen teken nie.

{{ui:Tydgeskiedenis}} laat 'n grondversnelling loop deur modale superposisie (presies vir die rekord se reguit lyne tussen punte) of deur direkte integrasie (Newmark-gemiddelde versnelling met Rayleigh-demping). Die invoer is 'n self-gemaakte sinus of puls (altyd as sintetiese gemerk), 'n rekord wat jy plak, of 'n teksleer wat jy oopmaak (tyd en versnelling, een versnelling per reël met 'n stap, of 'n PEER-agtige lêer met 'n DT=-kop; in g of m/s²). Dit gee die dakverplasing en basisskuifkrag teenoor tyd, die verplasing van elke vlak, en die omhulsel van die lid-eindekragte. Modelle met 'n baie lang rekord hou dit net vir die sessie.

{{ui:Stootproef}} stoot die dak sywaarts in klein stappe (patroon soos die eerste modus, of eenvormig), met plastiese skarniere aan die eindes van lede wat 'n I-vorm het. 'n Skarnier swig by die plastiese moment, wat daal soos die normaalkrag groei (uitgewerk uit die getekende vorm, afrondings geïgnoreer); verharding is opsioneel, P-delta is opsioneel, en 'n swaartekragkombinasie kan eers toegepas word. Dit gee die kapasiteitskromme (basisskuifkrag teenoor dakverplasing), die eerste skarnier, en die toestand en plastiese rotasie van elke skarnier. {{ui:Voer die nie-lineêre tydgeskiedenis uit}} laat dieselfde skarniere onder die Tydgeskiedenis-blok se rekord loop op klein modelle. Skarniere vorm net by lid-eindes (plaas 'n knoop waar een binne 'n spanwydte moet vorm); 'n lid wat aan albei eindes vrygestel is, kry geen; swigting en knik van bande word nie gemodelleer nie; plate en mure bly elasties; geen aanvaardingskriteria word gegee nie. Nie 'n kodetoets nie; jou ingenieur hersien die resultate. Die instellings word saam met die model gestoor, en die verslag dra die tabelle.

Nog nie gebou nie: knik, 'n ontbrekende-massa-korreksie vir die responsspektrum, rekordskaling, aanvaardingskriteria vir skarniere (dinamiese respons is hierbo), areaslaste behalwe die een druk op elke plaat, lidverskuiwings, bande wat slegs trek, mure en plate in die raamwerk, kodetoetse van gelaste profiele, en van snitte anders as gewalste I-profiele. Sien [Nog nie gebou nie](topic:not-built-yet).

## Eenhede

Lengtes volg die eenheid wat jy in die nutsbalk kies ({{ui:Eenhede}}), soos die res van BimCraft: die lasposisies wat jy tik en sien ({{ui:Van}}, {{ui:Na}}, {{ui:Op}}), die punte van knoopllaste en reaksies, die vloerhoogtes in {{ui:Seismies}}, en die defleksie- en driftkolomme (voete en duim wys hierdie klein lengtes in desimale duim). Verander die eenheid enige tyd; die oortjie word weer geteken. Kragte bly in kN en kN·m, en die verslag (PDF, CSV) en die CraftScript-lêer bly in millimeter, met die eenheid geskryf. Snitgroottes, staafdeursnee en oordekkings in die {{ui:Beton}}-blok bly in millimeter, soos hulle genoem word.

## Ontwerpkontroles

Die {{ui:Ontwerpkontroles}}-blok (dieselfde as DetailCraft s'n) neem 'n {{ui:Ontwerpkode}}, ASCE 7 + AISC 360 of EN 1990 + EN 1993-1-1, en 'n {{ui:Staalgraad}}. Gee elke lasgeval sy soort (dood, lewe, wind …) en {{ui:Maak kombinasies}} skryf die kode se lasekombinasies van jou gevalle; die ontleding voer hulle dan uit soos enige kombinasie.

{{ui:Kontroleer lede}} kontroleer dan elke **gewalste staal-I-profiel** met DetailCraft se kontroles (trek, druk met knik, buiging met sywaartse-wringknik, skuif, buiging met normaalkrag, defleksie; die klousules is in die verslag) en wys hoeveel van sy kapasiteit dit gebruik, in kleur op die model. Dit is 'n **hulpmiddel totdat 'n ingenieur dit nagesien het**.

**Watter lede word gekontroleer.** 'n IFC-profiel sê nie of 'n staal-I-vorm gewals of gelas is nie, so BimCraft noem dit slegs gewals wanneer sy profielnaam (anders die element se tipenaam) 'n grootte uit die AISC W- of S-tabelle of die EN 10365 IPE-, HEA- of HEB-tabelle is (`W12x26`, `IPE 300`, `HEA200`, `HE 200 A`) **en** die diepte, breedte, lyf en flens in die lêer by daardie grootte pas binne 1 %. Elke ander I-vorm ('n plaatbalk, 'n grootte onder 'n ander naam, 'n gewysigde grootte) word as gelas geneem en kom terug as **nie gekontroleer nie**, net so buise, hoeke, kanale en ander snitte, slanke dele en wringing. Kontroleer daardie lede met 'n ingenieur.
