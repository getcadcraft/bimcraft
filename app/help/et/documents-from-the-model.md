---
title: Dokumendid mudelist
summary: Kirjuta spetsifikatsioon või kirjeldus üks kord mallina väljadega kogustele, omadustele ja siltidele ning täida see avatud IFC-st PDF-ina või Wordi dokumendina.
keywords: dokument, dokumendid, spetsifikatsioon, spets, kirjeldus, mall, markdown, aruanne, word, docx, pdf, kogused, loend, eriala, ukse loend, viimistlused, documentcad
from: 2b0c9156
---

## Mida teed

Mall on Markdown-tekst, mille väljad on topeltsulgudes. BimCraft täidab väljad avatud mudelist (arvud, kogused tüübi järgi, omadused, sinu [sildid](topic:tags-and-schedules)) ja salvestab tulemuse PDF-ina, Wordi dokumendina (.docx) või Markdownina.

## Sammud

1. Ava IFC-mudel.
2. Vasakpoolsel paneelil, jaotise {{ui:Kogused}} all, ava {{ui:Dokumendid mudelist}}.
3. Vali mall: {{ui:Uksed ja riistvara}} või {{ui:Seinad, vooderdused ja viimistlused}}, või {{ui:Laadi mall (.md)…}} enda oma jaoks.
4. Kui mall loeb silte, mida mudel veel ei määratle, klõpsa {{ui:Lisa selle malli märgendid}}, seejärel märgi elemendid jaotises {{ui:Sildid}}.
5. Muuda teksti nagu tahad ja klõpsa {{ui:Näita dokumenti}}.
6. Klõpsa {{ui:PDF}} (vali enne A4 või Letter) või {{ui:Word (.docx)}}.

## Mida peaksid nägema

- Täidetud dokument nuppude all koos oma tabelitega.
- Hoiatuste loend, kui välja ei saa lugeda (määratlemata silt, mudelil puuduv omadus, lõpetamata plokk); selline väli trükitakse kujul `[?…]`.
- PDF-lehed dokumendi pealkirjaga ning „Lk 1 / 3“ iga lehe allservas; pikad tabelid kantakse üle koos päisereaga.

## Väljad

| Väli | Annab |
|---|---|
| `{{project}}`, `{{project description}}`, `{{file}}`, `{{date}}` | projekti nimi ja kirjeldus, faili nimi, täna |
| `{{count IfcDoor}}` | mitu ust |
| `{{sum IfcWall NetSideArea}}` | kogusumma koos ühikuga |
| `{{calc [sum IfcWall NetSideArea] * 1.1 round 1 unit m²}}` | aritmeetika (`+ - * /` ja sulud) nurksulgudes olevate terminite üle: `[sum …]`, `[count …]`, ja iga-plokis `[qty Width]`. `round n` määrab komakohad, `unit` lisab ühiku. Midagi, mida ei saa lugeda, või jagamine nulliga, trükitakse `[?…]` ja annab hoiatuse |
| `{{qty IfcWall NetSideArea by Type}}` | tabel: üks rida tüübi kohta koos arvu ja summaga, ning kogusumma rida |
| `{{table IfcDoor cols Mark, Type, Width, tag:Fire rating}}` | tabel, üks rida elemendi kohta |
| `{{tag Finish}}` | tsüklis elemendi väärtus; mujal kõik kasutatud väärtused (Tamm, Värv) |
| `{{tags}}` | siltide määratlused tabelina |
| `{{#each IfcDoor}} … {{else}} … {{/each}}` | tekst üks kord elemendi kohta; osa pärast `{{else}}`, kui elemente pole |
| `{{#group IfcWall by Type}} … {{/group}}` | tekst üks kord tüübi kohta koos `{{value}}`, `{{count}}`, `{{sum Length}}` ja lihtsa `{{#each}}` sees |

`{{#each}}` seest saab kasutada: `{{name}}`, `{{type}}`, `{{storey}}`, `{{class}}`, `{{material}}`, `{{mark}}` (IFC silt), `{{guid}}`, `{{n}}` (1, 2, 3 …), `{{prop Pset_DoorCommon.FireRating}}`, `{{qty Width}}` (elemendi enda, koos ühikuga).

Klasse võib olla mitu (`IfcDoor|IfcWindow`) või iga element (`*`). Kitsenda neid `where`-ga: `{{#each IfcDoor where Fire rating >= 60}}`, `{{count IfcWall where Wall finish hasnot}}`. Testid on `=`, `!=`, `~` (sisaldab), `>`, `<`, `>=`, `<=`, `has` ja `hasnot`; ühenda mitu `and`-ga; tühikuid sisaldav väärtus pannakse „jutumärkide“ vahele. `sort Name` järjestab tsükli.

## Loendid ja spetsifikatsioon dokumendis

`{{schedule doors}}` trükib mudeli loendi tabelina sinu kontori paigutuses: `doors`, `windows`, `walls`, `rooms`, `floors`, `roomfinishes`, `wallfinishes`, `zonefinishes`, `finishtotals`, `layers` või sinu loendite seas salvestatud seadistuse nime. `{{specification}}` trükib projekti spetsifikatsiooni. Mallid **Tööjooniste loendid** ja **Spetsifikatsioon** kasutavad neid. Eelvaates klõpsa sellise loendi arvul, et valida elemendid, millest see tuli. Vt [Paiguta, salvesta ja ekspordi loend](topic:schedule-layouts) ja [Kirjuta spetsifikatsioon mudelist](topic:specification).

## Hea teada

- Väli nimetab sisseehitatud välja (Name, Type, Storey, Class, Material, Mark), sildi (`tag:Fire rating` või selle nime), omaduse (`Pset_WallCommon.FireRating`) või lihtsalt omaduse nime (`NetSideArea`, `Width`): paljas nimi loeb iga elemendi enda komplekti, kõigepealt koguste komplektid, nii et `Width` ukse puhul on ukse laius, mitte seina paksus. `where`-s loeb paljas nimi komplekti, mis enamikul valitud elementidest on.
- Kogused on see, mida faili koguste komplektid ütlevad (BimCraft kirjutab need sellele, mida joonistab); ühikud tulevad faili ühikuseadetest.
- Väljasõnad (`count`, `sum`, `qty`, `by`, `cols`, `where`, `each`, `group` …) jäävad igas keeles inglise keelde. Näidismallid on inglise keeles.
- Mudelist pärit tekst ei muutu kunagi vormindamiseks: nimi, kus on `*` või `|`, trükitakse nii, nagu on.
- Muudetud malli hoia alles nupuga {{ui:Hoia selles brauseris}} (ainult see brauser seda näeb) või {{ui:Laadi mall alla}}.
- PDF-tekst kasutab standardseid PDF-fonte: Lääne-Euroopa tekstist väljaspool olev märk trükitakse kui „?“ ja olekurida ütleb, mitu neid oli.
- Malle igale erialale elavad Teegis (tüüp Dokumendimall). Vali **Dokumendid mudelist** vahekaardil „Teegist…“, vali üks, ja selle tekst ning loetavad sildid tulevad sisse; muuda vabalt. Oma malli avaldamine Teeki on sama üleslaadimine nagu iga muu üksuse puhul. Veel pole ehitatud: arvutused, mis ületavad arvud ja summad.
