---
title: Tõrkeotsing
summary: BimCraft'i kuvatavad teated, nende põhjused ja mida teha failide, kaustade, 3D-mudelite, joonistega ja muudatustega seotult.
keywords: probleem, viga, ei tööta, ei saa avada, ebaõnnestus, poolik, rikutud, aeglane, kokkujooksmine, tühi, puuduv, teade, abi
from: 1e5a79fc
---

Teated ilmuvad lava allosas olevale olekuribale, punasena, kui midagi ebaõnnestus. Leia teade allpool.

## Failide avamine

**„*nimi* ei ole IFC-, RVT-, RFA-, DWG- ega DXF-fail.“**
BimCraft ei tundnud faili ära. Kontrolli laiendit ja seda, et fail ei ole tühi. PDF-id, pildid ja kontorifailid ei avane.

**„.ifczip ei ole veel toetatud. Salvesta või ekspordi mudel tavalise .ifc-failina.“** (kehtib ka `.ifcxml` puhul)
Paki `.ifczip` lahti (see on tavaline zip-fail, mis sisaldab `.ifc`-faili) või ekspordi tavaline IFC.

**„… on projektifail, mida BimCraft veel ei loe.“**
Fail `.pln`, `.pla`, `.tpl` või `.bpn`. Ekspordi sellest IFC või DWG ja ava see: vt [Projektifailide .pln ja .pla avamine](topic:pln-project-files).

**„Seda IFC-faili ei saanud lugeda.“**
IFC-fail on rikutud või pole tõeline IFC. Ava see tekstiredaktoris: tõeline IFC-fail algab reaga `ISO-10303-21;`. Ekspordi see uuesti.

**„See fail on poolik: see on … MB, kuid selle enda register osutab andmetele vähemalt … MB kaugusel. …“**
Projekti- või perekonnafail katkes kopeerimise, üleslaadimise või sünkroonimise ajal. Pilvedraivi fail „ainult võrgus“ näeb välja samasugune. Fail, mida avad iseseisvalt, avaneb ikka, ning kaardi ülaosas on see teade ja „Näitan, mis taastati; kopeeri originaal uuesti täieliku mudeli jaoks.“: kaart näitab ainult neid osi, mille iga bait on failis, ja loetleb ülejäänud jaotises **Faili pole**. Tee fail oma pilvedraivis võrguvabalt kättesaadavaks või kopeeri originaal uuesti ja ava see uuesti. Kaustas näitab BimCraft uusimat täielikku varukoopiat.

**„… Faili enda sisuloend on ka puuduvas osas, seega pole sellest midagi avatav.“**
Fail katkes nii varakult, et isegi selle sisuloend puudub. Sellest koopiast ei saa midagi taastada. Kopeeri originaal uuesti ja ava see uuesti.

**„See liitfail ei sisalda BasicFileInfo-voogu, seega ei ole see Revit-fail.“**
Fail on muud liiki liitfail (vanad kontoridokumendid kasutavad sama konteinerit). Kontrolli, et valisid õige faili.

**„Viimase kallal töötan veel…“**
BimCraft on endiselt hõivatud eelmise faili või kaustaga. Oota, kuni olekurida lõpetab, ja proovi uuesti.

**Failivalija hallitab minu faili.**
Valija pakub ainult faile `.ifc`, `.rvt`, `.rfa`, `.rte`, `.rft`, `.dwg` ja `.dxf`. Lohista muud failid selle asemel lehele, ja BimCraft ütleb, kas ta suudab neid lugeda.

## Kaustade avamine

**„See kaust sisaldab rohkem kui 20 000 faili. Vali väiksem kaust, näiteks üks projekt.“**
Valisid liiga kõrge kausta, näiteks terve draivi. Vali üks projektikaust.

**„Brauser ei andnud juurdepääsu *nimi*-le. Vali see uuesti käsuga Ava kaust.“**
Klõpsasid hiljutisel kaustal {{ui:Reopen}} ja brauseri luba keelduti või on aegunud. Vali kaust uuesti või lohista see sisse.

**Brauser ütleb, et see „laeb“ failid üles.**
See on brauseri enda sõnastus failide andmiseks lehele. BimCraft ei saada neid kuhugi. Vältimaks küsimust, lohista kaust sisse.

**Telefonis või tahvelarvutis ei juhtu midagi.**
Paljud mobiilibrauserid ei saa kaustu valida. Ava üksikud failid või kasuta arvutit.

## IFC-mootor laadib esimesel korral

**Olekurida jääb teatele „IFC-mootor käivitub…“ või näitab viga, nagu „Failed to fetch“.**
IFC-mootorit ei saanud alla laadida. Sa võid olla võrguühenduseta või tulemüür või sisublokeerija takistab seda.

:::offline
Oled võrguühenduseta. Kui rakenduse riba nupp ei ütle {{ui:Offline ready}}, pole IFC-mootorit selles brauseris kunagi salvestatud. Ühenda võrku, ava fail uuesti ja klõpsa seejärel {{ui:Save for offline}}, et see järgmine kord ka võrguühenduseta töötaks. Vt [Võrgus ja võrguta](topic:online-offline).
:::

:::online
Lae leht uuesti ja proovi uuesti. Töövõrgus palu oma IT-meeskonnal lubada saidi `.wasm`-failid.
:::

## Salvestamine võrguta kasutamiseks

**Nupul on tekst {{ui:Could not save}}.**
Mõned failid ei laadinud alla, tavaliselt seetõttu, et ühendus katkes. Kontrolli ühendust ja klõpsa nuppu uuesti. Varasem võrguta koopia säilib, kuni uus on täielik.

**Nupul on tekst {{ui:Offline not available}}.**
See aken ei saa võrguta koopiat hoida, näiteks privaatne aken või hallatud töörvuti. Vt [Töötamine võrguta](common:offline).

**Nupp jääb pikaks ajaks tekstile „Salvestan *n* / *m*“.**
BimCraft'i koopia on umbes 11 MB, enamik sellest on IFC-mootor. Hoia vahekaart avatuna, kuni seal on {{ui:Offline ready}}.

**BimCraft avanes võrguta, kuid näib aegunud.**
Sinu salvestatud koopia on varasemast külastusest. Kui oled võrgus, klõpsa {{ui:Offline ready}} ja vali {{ui:Save again (get the newest version)}}.

## 3D-vaade

**Mudel pole seal, kus ootasin, või on väike.**
Vajuta {{key:F}} või klõpsa {{ui:Fit}}. Mahuta raamib alati kogu mudeli, sealhulgas korrused, mille märkeruudu välja lülitasid, ja juhuslikud elemendid hoonest kaugel, seega võib hoone väikesena paista. Suumi sealt sisse.

**Klõpsamine ei vali midagi.**
Hoia hiir klõpsamise ajal paigal: väike lohistamine pöörleb. Märkeruudu väljalülitatud korrustel olevaid elemente ei saa valida. Kui {{ui:Spaces}} on sisse lülitatud, valitakse läbipaistvad ruumid enne nende sees olevat.

**Nupp {{ui:Edges}} on hallina: „Servad on väga suurte mudelite puhul väljas“.**
Mudelil on rohkem kui 1,5 miljonit kolmnurka. Servad on mälu säästmiseks väljas.

**Vaheleht muutub aeglaseks, valgeks või näitab brauseri kokkujooksmislehte.**
Mudel on brauseri vahelehele antud mälust liiga suur. Sulge teised vahelehed ja lae uuesti. Ekspordi väiksem IFC: üks hoone, üks eriala või vähem korruseid. Vt [Brauserid, seadmed ja mälu](topic:platforms).

**3D-vaade jääb tühjaks.**
WebGL võib olla välja lülitatud või blokeeritud. Brauseri sätetes lülita riistvaraline kiirendus (või graafikakiirendus) sisse ja käivita brauser uuesti.

## IFC muutmine

**„Kasuta numbrit.“** Väärtus on arv. Sisesta lihtne number ilma ühikuteta, näiteks `2,4`.

**„Kasuta täisarvu.“** Väärtus on loendus või täisarv. Eemalda kümnendkohad.

**„Muuta saab ainult üksikväärtusega omadusi.“** Loendid, loetelud ja suurused on ainult lugemiseks.

**{{key:Mod+S}} avab brauseri akna „Salvesta leht“.**
Salvestamata muudatusi pole, seega jättis BimCraft klahvi brauserile. Sulge aken.

**{{key:Mod+Z}} ei tee midagi.**
See töötab ainult siis, kui on salvestamata muudatusi ja sa ei kirjuta väljale. Pärast salvestamist pole enam midagi tagasi võtta.

**Loend {{ui:Changes}} näitab ikka muudatusi, pärast seda kui need hülgasid ja avasid joonise või kausta.**
Kui vastad küsimusele „Kas hüljata need?“ nupuga OK ja avad seejärel midagi muud kui IFC-mudeli, jäävad vanad muudatused mällu ning {{ui:Save as IFC}} salvestaks need ikka. Et tõeliselt otsast alustada, ava originaal-IFC uuesti või lae leht uuesti.

**Minu muudatus muutis rohkem elemente, kui valisin.**
Muutsid omadust komplektis, mis on märgitud „(tüüp)“. Tüübiomadused kehtivad kõigile selle tüübi elementidele. Klõpsa {{ui:Undo}}. Vt [Tüübi omaduse muutmine kõigi selle tüübi elementide jaoks](topic:type-vs-instance).

## Joonised

**„*nimi* ei saanud lugeda. See võib olla rikutud või salvestatud vormingus, mida lugeja veel ei käsitle (…).“**
Salvesta joonis programmist, mis selle tegi, vanema DWG-na (2018 või varasem) või DXF-na ja proovi uuesti.

**„See joonis ei sisalda midagi näidatavat.“** või **„*nimi* on tühi joonis: sellel pole jooni, teksti ega plokke.“**
Joonis on tühi või sisaldab ainult asju, mida BimCraft ei joonista veel (vt paremal olevat **Pole veel joonistatud**).

**„See joonis on väga suur; näidatakse ainult osa sellest.“**
BimCraft lõpetas joonistamise, et jääda reageerivaks. Lülita välja kihid, mida ei vaja, või ava vajalikud lehed väiksemast joonisest.

**Lehe osad puuduvad.**
Lingitud joonised võivad puududa: vaata paremal jaotist **Lingitud joonised**. Vt [Lingitud jooniste ja piltide leidmine](topic:dwg-linked-files). Kihid võivad olla ka väljas: klõpsa {{ui:All on}}.

**Pilt näitab tühja raami.**
Selle fail ei leitud või see on TIFF („TIFF-i ei saa brauseris näidata“). Lisa PNG- või JPEG-koopia nupuga {{ui:Add pictures…}}.

**Puuteplaadil kerimine suumib joonise liigutamise asemel.**
Nii joonised BimCraftis töötavadki. Joonise nihutamiseks klõpsa ja lohista.

## Ikka kinni

Loe [Mida pole veel ehitatud](topic:not-built-yet): asi, mida otsid, ei pruugi selles versioonis olla.
