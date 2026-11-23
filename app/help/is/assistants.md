---
title: Láttu gervigreindaraðstoðarmann vinna með líkanið þitt
summary: Kveiktu á aðstoðarmönnum í Stillingum svo aðstoðarmaður í tölvunni þinni geti fundið hluti, lesið eiginleika þeirra, einangrað þá í sýninni og teiknað veggi, hurðir, glugga, gólf, kóta og ristir, í gegnum CadCraft Studio. Slökkt þar til þú kveikir á því.
keywords: gervigreind, aðstoðarmaður, mcp, skrift, sjálfvirkni, studio, finna hluti, einangra, eiginleikar, heimildir, aftengja, virkni, teikna veggi, bæta við hurðum, bæta við gluggum, kótar, ristir, gólf, afturkalla, vista, skipanalína, cli, án glugga, nota með gervigreindaraðstoðarmönnum
from: 66d72742
---

## Það sem þú munt læra

Hvernig þú leyfir gervigreindaraðstoðarmanni (hvaða aðstoðarmanni sem talar MCP) að skoða IFC-líkanið sem er opið hjá þér og teikna í það, hvað hann getur og getur ekki gert, og hvernig þú stöðvar hann.

## Það sem aðstoðarmaður getur gert í BimCraft

| Hann biður um | Hvað gerist | Þarf |
|---|---|---|
| Finna hluti | Hann fær lista yfir hluti eftir flokki, hæð, heiti eða gildi eiginleika, eins og **Finna** gerir | Lesa |
| Lesa eiginleika | Hann fær eigindi eins hlutar, gerð, eiginleikasöfn og magntölur, eins og **Eiginleikar** sýnir þau | Lesa |
| Lýsa líkaninu, lista veggi | Hann fær kóta, veggi, hurðir, glugga, rými, gólf, ristlínur og súlur, og enda hvers veggs, gerð hans og hæð | Lesa |
| Einangra, sýna í gegn, fela eða sýna | Þrívíddarsýnin breytist eins og þú hefðir notað valmyndina {{ui:Sýna}} | Breyta sýn og teikna |
| Teikna veggi, hurðir, glugga, gólf, kóta eða ristlínur | Líkanið breytist eins og þú hefðir notað {{ui:Teikna}}-verkfærin: veggir tengjast, rými, gólf og þök fylgja á eftir | Breyta sýn og teikna |
| Breyta heiti eða gildi eiginleika | Heiti, lýsingu, hlutartegund eða merki eins hlutar, eða eitt gildi eiginleika. Gildi sem hlutur deilir með öðrum hlutum er fyrst afritað fyrir hann; gildi af gerð breytist aðeins þegar aðstoðarmaðurinn segir til um það, því allir hlutir af þeirri gerð fylgja með | Breyta sýn og teikna |
| Færa, eyða, breyta veggjum, hurðum og gluggum | Hlutir færast eða eyðast ásamt því sem þeir bera. Veggir sem teiknaðir eru með {{ui:Teikna}}-verkfærunum breytast eftir endum eða gerð, hurðir og gluggar eftir staðsetningu, stærð eða gerð, og rými og tengingar fylgja á eftir | Breyta sýn og teikna |
| Setja upp, raða og lesa lista | „Hurðalisti eftir hæð, með brunaflokki og járnvöru“: aðstoðarmaðurinn nefnir listann, dálka hans (eigind eða merki verður að dálki) og flokkun; BimCraft fyllir hann úr líkaninu og raðar honum upp, og tekur það sem aðstoðarmaðurinn tilgreindi ekki úr staðli skrifstofunnar. Uppsetningin bætist við listana þína. Hver lína sem kemur til baka nefnir hluti sína, svo hægt sé að velja þá | Lesa til að lesa; Breyta sýn og teikna til að vista uppsetningu |
| Flytja út lista | CSV, Excel eða textaskrá með tab-skilum til að líma í Google Sheets (ekkert er sent til Google) | Flytja út |
| Lesa og setja frágang rýma | Frágangsgerðirnar, gólf, vegg og loftfrágang hvers rýmis og svæði; flatarmál, fjöldi flísa og rúmmál undirlags koma síðan úr frágangslistunum | Lesa; Breyta sýn og teikna til að setja |
| Velja hluti, afturkalla eigin skref | Hlutir eru valdir í sýninni; síðasta skrefi hans er afturkallað | Breyta sýn og teikna |
| Vista | Ný IFC-skrá með öllum breytingum, eins og {{ui:Vista sem IFC}} gerir (upprunalegu skránni er aldrei breytt) | Vista |
| Flytja út USD | Opin líkön sem OpenUSD (.usda, .usdc eða .usdz), eins og {{ui:USD}} á tækjastikunni skrifar þau | Flytja út |
| Myndgera mynd, keyra myndgerðarröðina | Mynd af þrívíddarsýninni, eins og glugginn {{ui:Myndgerð}} gerir með Myndgerðarstillingunum þínum nema hann biðji um aðrar, eða myndir í hágæða bætt í gluggann og myndgerðar hver á eftir annarri (röðin þarfnast WebGPU). Ekkert í líkaninu breytist ([Myndgera mynd](topic:render)) | Flytja út |

Hver breyting sem aðstoðarmaður gerir er eitt skref í **Breytingar**, og heitir „Aðstoðarmaður: …“ (til dæmis „Aðstoðarmaður: bæta við 4 veggjum“), svo {{key:Mod+Z}} tekur alla aðgerð hans til baka, og þú sérð hvers skref það var. Í glugganum getur hann ekki opnað skrár: þú opnar líkanið og hann vinnur með það sem er opið.

## Kveiktu á því

Aðstoðarmenn ná til BimCraft í gegnum CadCraft Studio á tölvunni þinni; venjulegi vafrinn hefur enga leið inn.

1. Opnaðu {{ui:Stillingar}} og veldu flipann **BimCraft**.
2. Undir **Aðstoðarmenn** skaltu haka við **Leyfa gervigreindaraðstoðarmönnum og skriftum að nota BimCraft**.
3. **Lesa** er þegar hakað fyrir þig. Hakaðu einnig við **Breyta sýn og teikna** ef aðstoðarmaðurinn má einangra og fela hluti og teikna, og við **Vista** ef hann má vista líkanið sem nýja skrá.
4. Tengdu aðstoðarmanninn í Studio (Studio sýnir vistfangið og stillingarnar sem þarf að líma inn í hann).

## Meðan aðstoðarmaður er tengdur

Athugasemd efst í hægra spjaldinu segir hvaða aðstoðarmaður er tengdur og hvað hann getur gert. Smelltu á {{ui:Aftengja}} til að ljúka lotu hans samstundis; hann þarf að tengjast aftur til að halda áfram.

**Virkni**, undir **Aðstoðarmenn** í Stillingum, listar hvert kall sem aðstoðarmaðurinn gerði, það nýjasta fyrst, og hvort það tókst.

:::tip
Spurðu með venjulegum orðum, til dæmis „einangraðu ytri veggina á kóta 1“, „hvaða hurðir hafa engan brunaflokk?“ eða „teiknaðu 6 x 4 metra rými á kóta 1 með hurð í suðurvegg“. Aðstoðarmaðurinn finnur hlutina og sýnir þá í sýninni þinni, eða teiknar þá.
:::

## Án glugga: skriftur og skipanalína

Sömu teikniverkfæri virka á IFC-skrám í möppum sem þú nefnir, án þess að nokkur gluggi sé opinn: MCP-þjónn og skipanalína CadCraft geta búið til nýja byggingu eða opnað IFC-skrá, lýst henni, bætt við veggjum, hurðum, gluggum, gólfum, kótum og ristlínum, afturkallað og vistað hana sem nýja `.ifc`-skrá. Fjögur verkfæri til viðbótar henta skriftum: `ifc_batch` keyrir allt að 200 breytingaskref sem eina heild (allt eða ekkert: ein afturköllun tekur allan hópinn til baka, og skref sem er hafnað afturkallar hin og nefnir skrefið); `ifc_describe` listar kóta og hvern vegg með hurðum og gluggum sínum; `ifc_render_png` skrifar flata, skyggða yfirlitsmynd af líkaninu (án efna, áferða eða skugga) án glugga; `usd_export` skrifar `.usda`, `.usdc` eða `.usdz`. Á skipanalínunni keyrir `cadcraft bim script.json --from model.ifc -o out.ifc` skriftu með skrefum, og `--usd`, `--png` og `--plan` skrifa USD-skrá, mynd eða grunnmynd úr sömu keyrslu. Þú ákveður hvaða möppur hún má nota og hvort hún megi breyta eða vista nokkuð.

## Slökktu á því

Taktu hakið úr **Leyfa gervigreindaraðstoðarmönnum og skriftum að nota BimCraft**. Hver aðstoðarmaður er aftengdur samstundis og stillingin geymist fyrir næst.

## Sjá einnig

- [Uppskriftir fyrir gervigreindaraðstoðarmenn](common:assistants-recipes): unnin dæmi, hvert með þeim verkfærum sem það kallar á.
- [Finna hluti eftir flokki, heiti eða eiginleika](topic:find)
- [Fela, einangra og sýna hluti í gegn](topic:hide-and-isolate)
- [Stillingar BimCraft](topic:settings)
