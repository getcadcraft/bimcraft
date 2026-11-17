---
title: Skjöl úr líkaninu
summary: Skrifaðu verklýsingu eða lýsingu einu sinni sem sniðmát, með reitum fyrir magn, eiginleika og merki, og fylltu hana út úr opna IFC-líkaninu sem PDF eða Word-skjal.
keywords: skjal, skjöl, verklýsing, lýsing, sniðmát, markdown, skýrsla, word, docx, pdf, magn, listi, verkþáttur, hurðalisti, frágangur, documentcad
from: 2b0c9156
---

## Hvað þú gerir

Sniðmát er texti í Markdown með reitum í tvöföldum svigum. BimCraft fyllir reitina út úr opna líkaninu (fjölda, magn eftir gerð, eiginleika, þín [merki](topic:tags-and-schedules)) og vistar niðurstöðuna sem PDF, Word-skjal (.docx) eða Markdown.

## Skref

1. Opnaðu IFC-líkan.
2. Í vinstra spjaldinu, undir {{ui:Magn}}, opnaðu {{ui:Skjöl úr líkaninu}}.
3. Veldu sniðmát: {{ui:Hurðir og búnaður}} eða {{ui:Veggir, klæðningar og frágangur}}, eða {{ui:Hlaða inn sniðmáti (.md)…}} fyrir þitt eigið.
4. Ef sniðmátið les merki sem líkanið skilgreinir ekki enn, smelltu á {{ui:Bæta merkjum þessa sniðmáts við}}, merktu síðan frumefni undir {{ui:Merki}}.
5. Breyttu textanum eins og þú vilt og smelltu á {{ui:Sýna skjalið}}.
6. Smelltu á {{ui:PDF}} (veldu A4 eða Letter fyrst) eða {{ui:Word (.docx)}}.

## Það sem þú átt að sjá

- Útfyllt skjalið undir hnöppunum, með töflum sínum.
- Listi af viðvörunum þegar ekki er hægt að lesa reit (merki sem er ekki skilgreint, eiginleiki sem líkanið hefur ekki, blokk sem er aldrei lokað); slíkur reitur er prentaður sem `[?…]`.
- PDF-síður með titli skjalsins og „Síða 1 af 3“ neðst á hverri síðu; langar töflur halda haus sínum á síðunum sem á eftir koma.

## Reitir

| Reitur | Gefur |
|---|---|
| `{{project}}`, `{{project description}}`, `{{file}}`, `{{date}}` | heiti verkefnisins og lýsingu þess, heiti skráarinnar, í dag |
| `{{count IfcDoor}}` | hversu margar hurðir |
| `{{sum IfcWall NetSideArea}}` | samtala, með einingu sinni |
| `{{calc [sum IfcWall NetSideArea] * 1.1 round 1 unit m²}}` | reikningur (`+ - * /` og svigar) yfir liði í hornklofum: `[sum …]`, `[count …]`, og inni í each `[qty Width]`. `round n` stillir aukastafina, `unit` bætir við einingu. Það sem ekki er hægt að lesa, eða deiling með núlli, er prentað sem `[?…]` og varar við |
| `{{qty IfcWall NetSideArea by Type}}` | tafla: ein röð fyrir hverja gerð með fjölda sínum og samtölu, og samtöluröð |
| `{{table IfcDoor cols Mark, Type, Width, tag:Fire rating}}` | tafla, ein röð fyrir hvert frumefni |
| `{{tag Finish}}` | í lykkju, gildi frumefnisins; annars hvert gildi sem notað er (Oak, Paint) |
| `{{tags}}` | skilgreiningar merkja sem tafla |
| `{{#each IfcDoor}} … {{else}} … {{/each}}` | textinn einu sinni fyrir hvert frumefni; hlutinn eftir `{{else}}` þegar engin eru |
| `{{#group IfcWall by Type}} … {{/group}}` | textinn einu sinni fyrir hverja gerð, með `{{value}}`, `{{count}}`, `{{sum Length}}` og venjulegu `{{#each}}` inni í |

Inni í `{{#each}}`: `{{name}}`, `{{type}}`, `{{storey}}`, `{{class}}`, `{{material}}`, `{{mark}}` (IFC-merkið), `{{guid}}`, `{{n}}` (1, 2, 3 …), `{{prop Pset_DoorCommon.FireRating}}`, `{{qty Width}}` (eigið gildi frumefnisins, með einingu sinni).

Flokkur getur verið fleiri en einn (`IfcDoor|IfcWindow`) eða allir frumefnin (`*`). Þrengdu hvern þeirra með `where`: `{{#each IfcDoor where Fire rating >= 60}}`, `{{count IfcWall where Wall finish hasnot}}`. Prófin eru `=`, `!=`, `~` (inniheldur), `>`, `<`, `>=`, `<=`, `has` og `hasnot`; tengdu nokkur með `and`; settu gildi með bilum í "gæsalappir". `sort Name` raðar lykkju.

## Listar og verklýsingin í skjali

`{{schedule doors}}` prentar lista líkansins sem töflu, í útliti skrifstofunnar: `doors`, `windows`, `walls`, `rooms`, `floors`, `roomfinishes`, `wallfinishes`, `zonefinishes`, `finishtotals`, `layers`, eða heiti uppsetningar sem þú vistaðir í Listum. `{{specification}}` prentar verklýsingu verkefnisins. Sniðmátin **Verkteikningalistar** og **Verklýsing** nota þau. Í forskoðuninni smellirðu á tölu úr slíkum lista til að velja frumefnin sem hún kom frá. Sjá [Útlit, vistun og útflutningur lista](topic:schedule-layouts) og [Skrifa verklýsinguna út frá líkaninu](topic:specification).

## Gott að vita

- Reitur nefnir innbyggðan reit (Name, Type, Storey, Class, Material, Mark), merki (`tag:Fire rating`, eða heiti þess), eiginleika (`Pset_WallCommon.FireRating`) eða bara heiti eiginleikans (`NetSideArea`, `Width`): nakið heiti les eigið sett hvers frumefnis, magnsett fyrst, þannig að `Width` á hurð er breidd hurðarinnar, ekki þykkt veggs. Inni í `where` les nakið heiti settið sem flest völdu frumefnin hafa.
- Magn er það sem magnsett skráarinnar segja (BimCraft skrifar þau fyrir það sem það teiknar); einingar koma úr einingastillingum skráarinnar.
- Orðin í reitunum (`count`, `sum`, `qty`, `by`, `cols`, `where`, `each`, `group` …) haldast á ensku á öllum tungumálum. Dæmasniðmátin eru á ensku.
- Texti úr líkaninu verður aldrei að sniði: heiti með `*` eða `|` í sér er prentað eins og það er.
- Geymdu sniðmát sem þú breyttir með {{ui:Geyma í þessum vafra}} (aðeins þessi vafri hefur það) eða {{ui:Sækja sniðmátið}}.
- PDF-texti notar staðlaða PDF-leturgerðir: stafur utan vesturevrópsks texta er prentaður sem „?“ og stöðulínan segir hversu margir.
- Sniðmát eftir verkþáttum eru í Safninu (tegund Skjalasniðmát). Í Skjöl úr líkaninu velurðu Úr Safninu…, veljur eitt, og texti þess og merkin sem það les koma inn; breyttu því eins og þú vilt. Að birta eigið sniðmát í Safninu er sama upphleðsla og hvaða annar hlutur sem er. Ekki enn smíðað: útreikningar umfram fjölda og samtölur.
