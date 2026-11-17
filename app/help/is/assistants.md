---
title: Láttu gervigreindaraðstoðarmann vinna með líkanið þitt
summary: Kveiktu á aðstoðarmönnum í Stillingum svo aðstoðarmaður á tölvunni þinni geti fundið hluti, lesið eiginleika þeirra, einangrað þá í sýninni og teiknað veggi, hurðir, glugga, gólf, hæðir og rist, í gegnum CadCraft Studio. Slökkt þar til þú kveikir á því.
keywords: ai, aðstoðarmaður, mcp, skrifta, sjálfvirkni, studio, finna hluti, einangra, eiginleikar, heimildir, aftengja, virkni, teikna veggi, bæta við hurðum, bæta við gluggum, hæðir, rist, gólf, afturkalla, vista, skipanalína, cli, án glugga, nota með gervigreindaraðstoðarmönnum
from: c5ee595b
---

## Það sem þú munt læra

Hvernig aðstoðarmaður gervigreindar (hvaða aðstoðarmaður sem talar MCP) getur skoðað IFC-líkanið sem þú hefur opið og teiknað í því, hvað hann getur og getur ekki gert, og hvernig þú stöðvar hann.

## Hvað aðstoðarmaður getur gert í BimCraft

| Hann biður um | Hvað gerist | Þarf |
|---|---|---|
| Finna hluti | Hann fær lista yfir hluti eftir flokki, hæð, heiti eða gildi eiginleika, eins og **Finna** gerir | Lesa |
| Lesa eiginleika | Hann fær eigindi eins hlutar, gerð hans, eiginleikasöfn og magn, eins og **Eiginleikar** sýnir þau | Lesa |
| Lýsa líkaninu, telja veggi | Hann fær hæðirnar, veggi, hurðir, glugga, herbergi, gólf, rist og súlur, og enda hvers veggs, gerð hans og hæð | Lesa |
| Einangra, gegnsætt, fela eða sýna | Þrívíddarsýnin breytist eins og þú hefðir notað valmyndina {{ui:Sýna}} | Breyta sýn og teikna |
| Teikna veggi, hurðir, glugga, gólf, hæðir eða ristarlínur | Líkanið breytist eins og þú hefðir notað {{ui:Teikna}}-verkfærin: veggir tengjast, herbergi, gólf og þök fylgja | Breyta sýn og teikna |
| Breyta heiti eða eiginleikagildi | Heiti, lýsingu, hlutargerð eða merkingu eins hlutar, eða eitt eiginleikagildi. Gildi sem hann deilir með öðrum hlutum er fyrst afritað fyrir hann; gildi gerðar breytist aðeins þegar aðstoðarmaðurinn segir til um það, því hver hlutur af þeirri gerð fylgir | Breyta sýn og teikna |
| Færa, eyða, breyta veggjum, hurðum og gluggum | Hlutir færast eða eyðast með því sem þeir hýsa; veggir sem teiknaðir eru með {{ui:Teikna}}-verkfærunum breytast eftir endum eða gerð, hurðir og gluggar eftir staðsetningu, stærð eða gerð, og herbergi og tengingar fylgja | Breyta sýn og teikna |
| Setja upp, raða og lesa lista | „Hurðalisti eftir hæð, með brunaþoli og járnvörum“: aðstoðarmaðurinn nefnir listann, dálka hans (eiginleiki eða merking verður dálkur) og flokkun; BimCraft fyllir hann úr líkaninu og setur hann upp, og tekur það sem aðstoðarmaðurinn tók ekki fram úr skrifstofustaðlinum. Uppsetningin bætist á listann þinn yfir {{ui:Listar}}. Hver lína sem hann fær til baka nefnir hluti sína, svo hann geti valið þá | Lesa til að lesa; Breyta sýn og teikna til að vista uppsetningu |
| Flytja út lista | CSV, Excel, eða textatexti aðskilinn með tabbum til að líma í Google Sheets (ekkert er sent til Google) | Útflutningur |
| Lesa og stilla frágang herbergja | Gerðir frágangs, gólf, veggur og loft hvers herbergis, og svæði; flatarmál, fjöldi flísa og rúmmál undirlags koma þá úr frágangslistunum | Lesa; Breyta sýn og teikna til að stilla |
| Velja hluti, afturkalla eigin skref | Hlutir eru valdir í sýninni; síðasta skref hans er afturkallað | Breyta sýn og teikna |
| Vista | Ný IFC-skrá með öllum breytingum, eins og {{ui:Vista sem IFC}} býr hana til (upprunalega skráin er aldrei breytt) | Vista |
| Flytja út USD | Opnu líkönin sem OpenUSD (.usda, .usdc eða .usdz), eins og {{ui:USD}} á tækjastikunni skrifar þau | Útflutningur |
| Myndgera mynd, keyra biðröð myndgerðar | Mynd af þrívíddarsýninni, eins og {{ui:Myndgerð}}-glugginn býr hana til með stillingum þínum nema hann biðji um aðrar, eða myndir í háum gæðum bættar í biðröð gluggans og myndgerðar hver á eftir annarri (biðröðin þarf WebGPU). Ekkert breytist í líkaninu ([Myndgerð mynd](topic:render)) | Útflutningur |

Sérhver breyting sem aðstoðarmaður gerir er eitt skref í **Breytingar**, heitið „Assistant: …“ (til dæmis „Assistant: add 4 walls“), þannig að {{key:Mod+Z}} tekur allan aðgerðina til baka, og þú sérð hvers skref það var. Í glugganum getur hann ekki opnað skrár: þú opnar líkanið; hann vinnur með það sem er opið.

## Kveiktu á því

Aðstoðarmenn ná til BimCraft í gegnum CadCraft Studio á tölvunni þinni; venjulegi vafrinn hefur enga leið inn.

1. Opnaðu {{ui:Stillingar}} og veldu flipann **BimCraft**.
2. Undir **Aðstoðarmenn**, hakaðu við **Leyfa gervigreindaraðstoðarmönnum og skriftum að nota BimCraft**.
3. **Lesa** er hakað fyrir þig. Hakaðu við **Breyta sýn og teikna** líka ef aðstoðarmaðurinn má einangra og fela hluti og teikna, og **Vista** ef hann má vista líkanið sem nýja skrá.
4. Tengdu aðstoðarmanninn í Studio (Studio sýnir vistfangið og stillingarnar sem þarf að líma inn í hann).

## Á meðan aðstoðarmaður er tengdur

Athugasemd efst í hægra spjaldinu segir hvaða aðstoðarmaður er tengdur og hvað hann getur gert. Smelltu á {{ui:Aftengja}} til að ljúka setu hans samstundis; hann þarf að tengjast aftur til að halda áfram.

**Virkni**, undir **Aðstoðarmenn** í Stillingum, listar hvert kall sem aðstoðarmaðurinn gerði, nýjast fyrst, með því hvort það tókst.

:::tip
Spurðu með venjulegum orðum, til dæmis „einangraðu ytri veggi á hæð 1“, „hvaða hurðir hafa engan brunaþol?“ eða „teiknaðu 6 x 4 metra herbergi á hæð 1 með hurð í suðurvegg“. Aðstoðarmaðurinn finnur hlutina og sýnir þá í sýninni þinni, eða teiknar þá.
:::

## Án glugga: skriftur og skipanalínan

Sömu teikniverkfæri virka á IFC-skrám í möppum sem þú nefnir, án þess að nokkur gluggi sé opinn: MCP-þjónn CadCraft og skipanalínan geta byrjað nýja byggingu eða opnað IFC-skrá, lýst henni, bætt við veggjum, hurðum, gluggum, gólfum, hæðum og ristum, afturkallað og vistað hana sem nýja `.ifc`-skrá. Þú ákveður hvaða möppur hann má nota og hvort hann megi breyta eða vista nokkuð.

## Slökktu á því

Taktu hakið úr **Leyfa gervigreindaraðstoðarmönnum og skriftum að nota BimCraft**. Sérhver aðstoðarmaður er aftengdur strax, og stillingin er geymd fyrir næst.

## Sjá einnig

- [Uppskriftir fyrir gervigreindaraðstoðarmenn](common:assistants-recipes): unnin dæmi, hvert með verkfærunum sem það kallar á.
- [Finndu hluti eftir flokki, heiti eða eiginleika](topic:find)
- [Fela, einangra og gera hluti gegnsæja](topic:hide-and-isolate)
- [Stillingar BimCraft](topic:settings)
