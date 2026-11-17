---
title: Vaated, vaate ulatused ja sinu lehed
summary: Leia kõik plaanid, fassaadid, lõiked, 3D-vaated, loendid ja lehed projektibrauseris, määra, kuidas iga plaan lõigatakse ja mida ta näitab, tee väljavõtteid, joonista jooni ja viirutusi ühte vaatesse, hoia sätteid vaatemallides ning korralda oma lehti.
keywords: väljavõte, väljavõttevaade, detailvaade, suurendatud plaan, joonestamine, detailjooned, viirutus, viirutusala, täidetud ala, täitemuster, peegeldav laeplaan, rcp, laeplaan, laeruudustik, valgustid, projektibrauser, vaated, vaate ulatus, lõige, lõikeala, vaate lõige, vaate mõõtkava, alusjoon, näita teist korrust, poolläbipaistev, lõikejoon, lõikekõrgus, ülemine, alumine, vaate sügavus, nähtavus, kategooriad, peida vaates, vaatemall, mallid, leht, lehed, tiitliplokk, vaateaken, mõõtkava, korralda lehed, paigutus, pdf, plaani vaate sätted, brauser
from: ee1d5afe
---

## Mida teed

Töötle BIM-projekte nende korralduse järgi: kõik vaated ühes loendis, iga plaan lõigatud seal, kus soovid, sama sätted mitmele plaanile malli kaudu ning lehed, mille ise paigutad.

## Projektibrauser

1. Lülita sisse {{ui:Joonista}}. Vasakul paneelil on {{ui:Projektibrauser}} mudelite all.
2. See loetleb:
   - **Korruseplaanid**: iga tasandi. Klõpsa ühel, et näha selle plaani. Kõrval olev liugurinupp määrab selle vaate ulatuse (allpool). Malli järgiv plaan näitab malli nime.
   - **Laeplaanid**: iga tasandi peegeldav laeplaan (allpool).
   - **Väljavõtted**: iga väljavõte koos vaatega, millel see joonistatakse, ja {{ui:Uus väljavõte}}. **Puuduvad** loetleb väljavõtted, mille vaade on kadunud.
   - **Fassaadid** ja **Lõiked**: neli külge ja iga lõikejoon. Klõpsa ühel, et avada joonisekomplekt, milles need joonistatakse.
   - **3D-vaated**: vaated, mille salvestasid {{ui:Vaated}}-ga.
   - **Loendid**: klõpsa ühel, et näidata see plaani all.
   - **Lehed**: sinu tehtud lehed, {{ui:Uus leht}} ja {{ui:Joonisekomplekt…}} terve mudelist tehtud komplekti jaoks.
   - **Vaatemallid**, koos {{ui:Uus mall}}-ga, ja **Lingid** (seotud mudelid).

## Plaani vaate ulatuse seadmine

1. Klõpsa liugurinuppu korrusest jaotises **Korruseplaanid**.
2. Määra kõrgused, üle selle korruse:
   - **Lõige kõrgusel**: kus plaan lõikab läbi seinad, uksed ja aknad (1200 mm, umbes 4 jalga, kui sa seda ei muuda).
   - **Ülemine**: lõike kohal ja ülemise all olevad asjad joonistatakse katkendjoonega (kõrge kapp, tala). Jäta tühjaks, et kasutada korruse kõrgust.
   - **Alumine** ja **Sügavus alumisest allpool**: lõikest madalamad asjad joonistatakse õhukeste joontena alumiseni ja sellest kaugemale.
3. Jaotises **Näidatud selles plaanis** tühjenda, mida see plaan välja jätab: mööbel, ruumid, tugisambad jne.
4. Üksikute elementide väljajätmiseks vali need plaanilt või 3D-vaatest, ava dialoog ja klõpsa {{ui:Peida valitud siit}}. {{ui:Näita kõiki}} toob need tagasi.
5. Klõpsa {{ui:Kasuta neid sätteid}}.

Plaan lõigatakse kohe uuesti ning joonisekomplekt ja sinu lehed järgivad seda. Punktpilve lõik järgib samuti lõikekõrgust.

## Lõika plaan, anna mõõtkava, näita all teist korrust

Kõik kolm on samas dialoogis (liugurinupp korruse kõrval):

- **Mõõtkava**: mõõtkava, millega plaan prinditakse ({{ui:Prindi}} plaani ribal) ja millega ta tuleb lehele. **Mahuta** valib suurima standardse mõõtkava, mis mahub.
- **Lõikeala**: klõpsa {{ui:Joonista plaanile…}}, siis klõpsa ühte nurka ja vastasnurka plaanil ({{key:Esc}} lõpetab). Ala väline plaan on ekraanil hägustatud ja sellega saab seal ikka töötada. Prinditud, lehtedel ja joonisekomplektis näitab plaan ainult ala sees olevat. {{ui:Tühjenda}} eemaldab lõikeala. {{ui:Mahuta}} mahutab lõikeala.
- **Alusjoon**: vali teine tasand. Selle seinad, lõigatud elemendid, uksed ja aknad joonistatakse selle plaani all kergelt, et joondada asju allpool või ülal oleva tasandiga. Neid ei saa siin valida ja need prinditakse helehallina.

Vaatemall kannab mõõtkava koos kõrguste ja kategooriatega. Lõikeala ja alusjoon kuuluvad alati ainult ühele plaanile.

## Korruse laeplaan

Igal korrusel on peegeldav laeplaan oma korruseplaani kõrval: plaan, mida vaadatakse altpoolt, lagede ja nende küljest rippuva paigutamiseks.

1. Klõpsa tasandit jaotises **Laeplaanid** brauseris või vali plaani ribal {{ui:Laeplaan}} tasandi kõrval.
2. Seinad lõigatakse kõrgusel 2300 mm (umbes 7'-6"). Lõikejoonest kõrgemal ja tasandi kõrguse all olev asi joonistatakse: laed koos ruudustiku ja kõrgusmärgiga (`CLG 2438`), valgustid, talad. Uksed, aknad ja lõikest allpool olev jäetakse välja.
3. Lae tegemiseks kasuta {{ui:Lagi}} nagu korruseplaanil, vali see ja määra selle **Muster** omadustes. Vt [Ruumid, põrandad, laed ja katused](topic:floors-and-roofs).
4. Valgusti selle külge riputamiseks paiguta teegist üksus, kui laeplaan on näidatud: see läheb jaotisse **Laes**. Vt [Paiguta seadmed ja mööbel teegist](topic:place-from-library).
5. Liugurinupp laeplaani kõrval määrab selle lõike ja ülemise, mõõtkava, kategooriad, lõikeala ja alusjoone, nagu korruseplaanil. Laeplaanid ei võta vaatemalli.

See joonistatakse samal viisil nagu korruseplaan (peegeldav plaan, mitte peegelpilt). Lagi, mis on lõikest madalam, ei joonistu: langeta selle tasandi laeplaani jaoks lõiget. Laeplaanid lähevad sinu lehtedele nagu plaanid; joonisekomplekt ei lisa neid ise.

## Väljavõtte tegemine

Väljavõte näitab osa plaanist suuremana, oma mõõtkavas, oma vaatena: köök, trepp, seinanurk.

1. Näita plaani, laeplaani või väljavõtet, millele see kuulub.
2. Vali plaani ribalt {{ui:Märgista}} › {{ui:Väljavõte}} (või {{ui:Uus väljavõte}} brauseris), siis klõpsa ala ühte nurka ja vastasnurka. {{key:Esc}} lõpetab.
3. Väljavõte tehakse mõõtkavas 1:20 (tollides ja jalgades 1/2" = 1'-0"). Selle ristkülik ja ümmargune silt joonistatakse plaanile.
4. Väljavõtte avamiseks klõpsa sildil käsuga {{ui:Vali}} või väljavõttel brauseris: plaan näitab ainult seda ala väljavõtte mõõtkavas. Riba ütleb {{ui:Väljavõte:}} ja selle nime; {{ui:Üles}} viib tagasi vaatesse, millel see joonistatakse.
5. Liugurinupp selle kõrval (brauseris või ribal) nimetab selle ümber, muudab mõõtkava, joonistab ristküliku uuesti või kustutab selle.

Väljavõte näitab seda, mida tema vaade näitab: sama lõige, samad kategooriad, laeplaani laed. Väljavõte väljavõttes töötab samamoodi. Pane väljavõte lehele nagu plaan; silt ütleb siis, kus see asub (`1 / A-501`: esimene vaade lehel A-501). {{ui:Prindi}} väljavõttes prindib ainult selle ala oma mõõtkavas.

Väljavõtte kustutamine kustutab ka selle sees joonistatud väljavõtted ning neis joonistatud jooned ja viirutused (küsitakse enne). Kui tasand, millel väljavõte joonistatakse, kustutatakse, jääb väljavõte kuni kustutamiseni jaotisse **Puuduvad** ja lehed, millel see on, teatavad, et see on puudu.

## Joonte ja viirutuste joonistamine ühes vaates

Joonestamine on 2D-töö, mis kuulub ainult ühele vaatele: märkmed joontega, viirutatud betooni- või mullaala, täidetud ala. See ei ole kunagi 3D-vaates ega teises plaanis.

1. Näita korruseplaani, laeplaani või väljavõtet, kuhu joonistada.
2. Vali plaani ribalt {{ui:Märgista}}:
   - {{ui:Rida}}: klõpsa kohta, kus see algab, ja kohta, kus see lõpeb. Järgmine joon algab sealt, kus eelmine lõppes; {{key:Enter}} alustab uuesti.
   - {{ui:Murdjoon}}: klõpsa punktid; {{key:Enter}} või topeltklõps lõpetab, klõps esimesel punktil sulgeb.
   - {{ui:Ristkülik}}: kaks vastasnurka.
   - {{ui:Viirutusala}}: vali ribal **Muster** (Tahke, Diagonaal, Ristviirutus, Betoon, Soojustus, Muld) ja selle mõõtkava, siis klõpsa nurki; {{key:Enter}}, topeltklõps või klõps esimesel nurgal sulgeb. Kui {{ui:Täida ruum}} on märgitud, viirutab üks klõps ruumis selle piiri.
3. Punktid haakuvad nagu seintel; {{key:Shift}} hoiab joone ristsuunas ja pikkust saab kirjutada nagu seintele. {{key:Backspace}} võtab viimase punkti tagasi.

Joon või viirutus valitakse plaanil käsuga {{ui:Vali}}. Omadused muudavad viirutuse mustrit ja mõõtkava ning sisaldavad {{ui:Teisalda…}} (klõpsa punktil, millest liigutada, siis kohta, kuhu see läheb). {{key:Delete}} kustutab selle. Iga joon, viirutus ja muudatus on üks samm.

Jooned ja viirutused prinditakse koos plaaniga, lähevad lehtedele koos sellega ja on joonisekomplektis. Märgi vaate ulatuses **Märkused** maha, et jätta need sellest vaatest välja.

## Hoia sätted vaatemallis

1. Klõpsa brauseris {{ui:Uus mall}} või plaani vaate ulatuses {{ui:Salvesta mallina…}} (see plaan kasutab siis seda).
2. Anna sellele nimi, määra kõrgused ja kategooriad ning klõpsa {{ui:Salvesta mall}}.
3. Mis tahes plaani vaate ulatuses vali mall. Plaan võtab selle kõrgused ja kategooriad; muuda malli, et muuta kõiki plaane, mis seda kasutavad. Üksikult peidetud elemendid jäävad oma plaanis peidetuks.
4. Klõpsa brauseris mallil, et seda muuta, ümber nimetada või kustutada. Kustutamine jätab selle plaanid oma sätetega.

## Korralda oma leht

1. Klõpsa {{ui:Uus leht}}. Kirjuta number ja pealkiri ning vali paber.
2. Klõpsa {{ui:Lisa}} plaani, laeplaani, väljavõtte, fassaadi, lõike või loendi kõrval. See tuleb lehe keskele.
3. Lohista see kohta, kuhu see läheb. Kui see on valitud, vali **Mõõtkava** või jäta see plaani enda mõõtkavale (kui plaanil on see), muidu mõõtkava, mis mahutab lehe kolmandiku. {{ui:Eemalda leht}} eemaldab selle lehelt.
4. Klõpsa {{ui:Salvesta leht}}. See on loetletud jaotises **Lehed**; klõpsa sellel, et seda hiljem muuta.
5. {{ui:Laadi alla PDF-ina}} salvestab selle lehe ühe leheküljena.

## Mida peaksid nägema

- Plaanid lõigatud sinu kõrgustel, lõike kohal olev katkendjoonena ja see, mida tühjendasid, välja jäetud.
- Lõigatud plaan hägustatud ekraanil väljaspool oma ala ja lõigatud sellele paberil, mille mõõtkavas sa selle andsid.
- Laeplaan lae ruudustiku ja kõrgusmärkide ning valgustitega laes.
- Väljavõtted oma ristküliku ja sildiga plaanil, igaüks avaneb oma mõõtkavas.
- Jooned ja viirutused ainult vaates, kus need joonistasid.
- Su lehed joonistatakse mudelist iga kord uuesti, kui need avad, nii et need alati sobivad. Vaade, mille tasand või lõikejoon kustutati, teatatakse, mitte ei joonistata.
- Iga muudatus siin on üks samm: {{key:Mod+Z}} võtab selle tagasi.

:::note
Kõik see hoitakse IFC-failis omaduste hulkadena, mida teised programmid ei puutu: iga tasandi vaate ulatus ja laeplaan tasandil, mallid, väljavõtted ja sinu lehed projektil. Jooned ja viirutused on IFC-märkused oma tasandil, nii et teised programmid näevad neid 2D-kõveratena ja viirutatud aladena (nende enda joonistus iga muster), kuid mitte seda, millisele vaatele need kuuluvad.
:::

:::tip
Teised BIM-programmid nimetavad lõiget vaate ulatuseks või lõiketasandiks, malle vaatemallideks või vaate seadeteks, joonestusjooni detailjoonteks ja viirutusalasid täidetud aladeks. Ideed on samad; vaate seaded neid teistesse programmidesse ei kandu.
:::
