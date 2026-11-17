---
title: Listar, víddir og PDF af grunnmynd
summary: Hurða-, glugga-, veggja- og herbergjalistar sem breytast meðan þú teiknar, víddir á grunnmynd, og hæð vistuð sem PDF í stöðluðum mælikvarða.
keywords: listi, hurðalisti, gluggalisti, veggjalisti, herbergjalisti, magn, magntaka, flatarmál, csv, töflureiknir, málsetning, málsetningar, prenta, pdf, prentun, mælikvarði, blað, 1/4", 1:50
from: d97cd16e
---

## Hvað þú gerir

Sjáðu hvað byggingin sem þú teiknaðir leggst saman í, meðan þú teiknar: hversu margar hurðir og gluggar af hverri stærð, hversu mikill veggur af hverri gerð, hversu stórt hvert herbergi er. Settu víddir á grunnmyndina og vistaðu hana sem PDF til prentunar eða sendingar.

## Listar

Með {{ui:Teikna}} kveikt sýnir **Listar** í vinstra spjaldinu eina töflu í einu:

- **Hurðir** og **Gluggar**: hver eftir merkinu sínu (D1, D2 … og W1 …, gefin þegar þú setur þá), gerð þeirra, breidd, hæð (og þröskuldur), hæð og veggurinn sem þeir eru í.
- **Veggir eftir gerð**: fyrir hverja veggtegund, hversu margir veggir, þykkt þeirra, heildarlengd og hliðarflatarmál þeirra sem **Brúttóflatarmál**, **Frádráttur** og **Nettóflatarmál**, með samtölu.
- **Herbergi**: númer, heiti, hæð, flatarmál og ummál, með heildarflatarmáli.
- **Gólf**: hvert gólf með hæð, gerð og þykkt, og brúttóflatarmáli, frádrætti og nettóflatarmáli.
- **Frágangur**: hvert frágangslag veggjagerða (eftir efni og hlið veggsins) og loft, með fjölda flata og brútto, frádrætti og nettó.
- **Veggjagerðir: magntökugögn**: það sem var slegið inn einu sinni á hverja veggjagerð (eining, steypa, hraði), með fjölda veggja, lengd þeirra og nettóflatarmáli, og hraðanum sinnum mældu magni. Sjá [Veggjasamsetningar](topic:wall-assemblies).

- **Frágangur eftir herbergi**, **Frágangur eftir vegg**, **Frágangur eftir svæði** og **Magn frágangs**: hvað þekur hvert herbergi, með flatarmálum, fjölda flísa þar með talið skurðir og rúmmál undirlags. Sjá [Frágangur herbergja og frágangslistar](topic:room-finishes).
- Þínar eigin **uppsetningar**: listi sem þú hópaðir, samtaldir og vistaðir undir heiti. Sjá [Settu upp, vistaðu og fluttu út lista](topic:schedule-layouts).

Töflurnar breytast með hverri breytingu. Smelltu á röð, eða á einstaka tölu, til að velja hlutina sem hún kom frá. {{ui:Sækja CSV}} vistar töfluna til að opna í töflureikni; **Sækja Excel** og **Afrita fyrir Google Sheets** eru undir henni. **Herbergjafrágangur** og **Forskrift** ([Skrifaðu forskriftina úr líkaninu](topic:specification)) opnast af sama stað.

## Flatarmál og rúmmál hvers lags

Veldu **Lög: flatarmál og rúmmál** í listanum Listar. Það hefur eina röð fyrir hvert lag í hverri veggja-, gólf-, þak- og loftgerð í notkun: hlutinn, gerðin og LOD hans, lagið (talið frá ytri hlið veggs, frá efri hlið gólfs, þaks eða lofts), efni þess og hlutverk, þykkt þess, hversu margir hlutir, **nettóflatarmálið** og **rúmmálið**.

- Flatarmálið er nettóflatarmál hlutanna af þeirri gerð, mælt nákvæmlega eins og í Veggir eftir gerð, Gólf og Frágangur, eftir mælingaaðferð verkefnisins. Þak er mælt á hallanum; engin mælingaaðferð hefur reglu fyrir þök.
- Rúmmálið er það flatarmál sinnum eigin þykkt lagsins.
- Gólf, þak eða loft án gerðar er ein röð: eitt lag af eigin þykkt.
- Loftbil er skráð með flatarmáli sínu og sleppt úr heildarrúmmáli. Himna hefur flatarmál og ekkert rúmmál.

Smelltu á röð til að velja hlutina hennar. {{ui:Sækja CSV}} vistar töfluna.

## Hvernig flatarmál eru mæld

Sérhvert flatarmál eru þrjár tölur sem leggjast saman: brúttó mínus frádrættir er nettó. Reglan er skrifuð fyrir ofan hverja þessara taflna, og það er ein regla: listarnir, magnin sem vistuð eru í IFC-skránni og magntakan sem send er til TakeoffCraft nota hana öll.

- **Veggur**: brútto er einn flötur veggsins, lengd hans eftir miðlínu sinni sinnum hæð hans (raunverulegi flöturinn fyrir vegg með mótaðri efri eða neðri brún). Sérhvert hurða-, glugga- og annað op er dregið frá, breidd sinnum hæð, hvert op einu sinni.
- **Gólf eða loft**: brúttó er flatarmálið innan útlínu þess. Sérhvert op og útskurður innan þess er dregið frá einu sinni.
- **Veggfrágangur**: hvert frágangslag veggjagerðarinnar þekur einn flöt veggsins, mældur eins og veggurinn, með sömu opum dregnum frá. Frágangur er lag á veggnum: hann er skráður undir Frágangur og er ekki bættur við veggflatarmálið, þannig að veggur með hurð er aldrei talinn tvisvar.

Þetta er **sjálfgefna regla CadCraft**: sérhvert op er dregið frá, hver sem stærð þess er; lengdir veggja eru eftir miðlínu; innfellingar eru ekki mældar. Hana nota öll verkefni þar til þú velur aðra aðferð.

## Veldu mælingaaðferð

Fyrir ofan töfluna listar **Mælingaaðferð** aðferðirnar sem fylgja BimCraft, og **Hlaða inn aðferðaskrá** tekur þína eigin skrifstofu. Valið er vistað í IFC-skránni, sem eitt skref af afturköllun, og þrjú atriði fylgja því samstundis: listarnir, nettómagnin sem vistuð eru í skránni og magntakan sem send er til TakeoffCraft. Reglan fyrir ofan hverja töflu byrjar þá á aðferðinni, uppruna hennar, dagsetningunni sem uppruninn var lesinn og orðunum **Óathugað af magnmælingamanni**.

Aðferð er lítil skrá af staðreyndum, ekki forritskóði. Fyrir hverja magnstærð segir hún:

- **minnsta opið sem er dregið frá**: til dæmis, op upp á 0,5 m² eða minna er áfram í veggflatarmálinu;
- **hvernig veggjamót eru mæld**: eftir miðlínu; eða með vegg sem endar við annan, mældan að fleti þess veggs; eða með hverjum veggenda sem mætir öðrum vegg, mældum að nærfleti;
- **hvort innfellingar eru mældar** fyrir frágang (útvíkkun frágangs inn í opin), sem flatarmál eða, þegar þær eru grunnar, sem lengd. Dýpt innfellingar er tekin sem helmingur af þykkt veggsins;
- **hvað hún segir um múrverk**: hvernig það er mælt, og hvaða úrgangs- eða steypuheimild hún tilgreinir.

Aðferðirnar sem fylgja BimCraft:

| Aðferð | Veggir: minnsta op dregið frá | Veggfrágangur | Loft | Múrverk |
|---|---|---|---|---|
| CadCraft sjálfgefið | sérhvert op | sérhvert op | sérhver útskurður | engar heimildir |
| RICS NRM 2 (Bretland), 2. útgáfa 2021 | 0,5 m² eða minna er áfram | 1 m² eða minna er áfram | 1 m² eða minna er áfram | eftir flatarmáli; engar prósentur tilgreindar |
| AAQS Standard Method for Africa 2015 | 0,5 m² eða minna er áfram | 0,5 m² eða minna er áfram | 0,5 m² eða minna er áfram | eftir flatarmáli; mælt nettó, 0% úrgangur |
| IS 1200 (Indland), 1976, múrsteinsvinna | 0,1 m² eða minna er áfram | sjálfgefið (sjá hér að neðan) | sjálfgefið | eftir rúmmáli |
| BIA Technical Note 10 (Bandaríkin), 2009 | sérhvert op | sjálfgefið | sjálfgefið | 5% úrgangur á einingar, 15% á steypu |

Lestu þessi takmörk áður en þú treystir aðferð:

- **Enginn magnmælingamaður hefur athugað neina þeirra.** Hver var gerð með því að lesa tilgreinda heimild og skrá tölur hennar ásamt greininni sem þær koma úr. Ef þú ert magnmælingamaður og getur athugað eina, vilja smiðir forritsins heyra frá þér.
- Þar sem reglu var ekki hægt að lesa úr heimildinni segir aðferðin **ekki staðfest** fyrir hana, og sjálfgefna regla CadCraft er notuð. Engin aðferð sem fylgir BimCraft hefur staðfesta reglu fyrir veggjamót, innfellingar eða gólf, þannig að þau eru mæld á sjálfgefna hátt undir þeim öllum.
- IS 1200 dregur op frá í gifsi í þremur þrepum. Aðferðaskrá getur ekki haldið þrepum enn, þannig að veggfrágangur notar sjálfgefið undir þeirri aðferð, og reglan segir það.
- Suður-afríski staðalinn System of Measuring Building Work er **ekki** meðal þeirra: texti hans gat ekki verið lesinn. AAQS-aðferðin fyrir Afríku segir að hún sé byggð á útgáfunni frá 1991 af því kerfi, en hún er annað skjal.
- BIA Technical Note 10 er iðnaðar áætlunarathugasemd, ekki staðlað mælingaaðferð.
- Op sem er nákvæmlega minnsta stærðin fylgir orðalagi aðferðarinnar („ekki yfir“, „minna en“). Stærðir innan 2 hluta af 10 000 af henni teljast nákvæmlega hún.
- Samkvæmt aðferð fylgja nettó hliðarflatarmál veggs og nettóflatarmál gólfs eða lofts í skránni aðferðinni, og magnhópurinn nefnir hana. Brúttóflatarmálin og rúmmálin í skránni haldast eins og teiknað var.

**Athugasemdir um þessa aðferð**, undir valinu, segja hvað hver heimild skilur eftir opið. **Opna heimildina** fer í skjalið.

### Eigin aðferð skrifstofu þinnar

Aðferðaskrá er JSON á sniðinu `cadcraft-measurement-method`. Sérhvert gildi í henni nefnir greinina sem það kemur úr; gildi án greinar er hafnað. Skráin er athuguð þegar hún er hlaðin inn, rangur reitur er nefndur, og ekkert er notað úr skrá sem stenst ekki. Þegar hún hefur verið valin er skráin vistuð í verkefninu, þannig að verkefnið opnast eins á annarri tölvu. Auðkenni hennar er einfalt heiti að eigin vali (það má ekki vera auðkenni aðferðar sem fylgir forritinu).

## Múrsteinar, einingar og steypa

**Veggjagerðir: magntökugögn** telja einingar og steypu hverrar veggjagerðar sem hefur einingu með lengd og hæð (sjá [Gefðu gerð þinni magntökugögn](topic:wall-assemblies#give-a-type-its-takeoff-data)). Þetta eru formúlurnar, nákvæmlega eins og þær eru reiknaðar:

- **Einingar á flatarmál eins blaðs** = 1 / ((lengd einingar + samskeyti) × (hæð einingar + samskeyti)). Múrsteinn 215 × 65 mm með 10 mm samskeyti: 1 / (225 × 75 mm) = 59,26 á m².
- **Breiddir eininga þvert á blað** = (þykkt blaðs + samskeyti) / (breidd einingar + samskeyti), námundað í heila tölu, að minnsta kosti 1. Blað 102,5 mm úr 102,5 mm múrsteinum er 1; 215 mm veggur úr sömu múrsteinum er 2.
- **Einingar** = einingar á flatarmál × breiddir þvert × nettóflatarmál veggflatar, lagt saman yfir múrblöð gerðarinnar.
- **Einingar til pöntunar** = einingar × (1 + úrgangur % / 100), námundað upp í heila einingu. Úrgangurinn er sá sem er færður inn á gerðina; ef enginn er færður inn, sá aðferðarinnar, ef hún tilgreinir hann; annars 0%.
- **Steypa** = nettóflatarmál × þykkt blaðs, mínus rúmmál eininganna (einingar × lengd × hæð × breidd), síðan plús aukaprósentan sem er færð inn á gerðina fyrir göt eða göt í einingunum, síðan plús heimild aðferðarinnar ef hún tilgreinir eina. Hún þarf breidd einingarinnar.

Það sem er gert ráð fyrir: sérhvert múrblað gerðar er byggt úr einni einingu gerðarinnar; blað þykkara en ein breidd einingar er talið sem svo margar breiddir einingar, hver eins og blað lagt eftir lengdinni, þannig að skornar einingar, lokarar og sérlögun eru ekki talin sérstaklega; þar sem ekkert lag er merkt sem byggt úr einingunni, eru kjarnalögin tekin sem blöðin, og athugasemdin fyrir ofan töfluna segir það. **Magn** er hraðinn sinnum það sem hraðinn er gefinn upp fyrir, sem nú getur einnig verið eining til pöntunar, 1000 einingar til pöntunar eða m³ af steypu.

Merkin eru IFC-merki frumefnanna: breyttu einu í **Eiginleikum** (Merki) og listinn fylgir. Fyrir sérhvert IFC-líkan, teiknað eða ekki, [Leggðu saman magn, listaðu frumefni og settu upp rými á lista](topic:quantity-totals) leggur saman hvaða eign sem er.

## Víddir

Grunnmyndin sýnir lengd hvers teiknaðs veggs eftir ytri fleti hans (innveggur: eftir einum fleti) og, fyrir vegg með hurðum eða gluggum, keðju frá hornunum að hverju opi. {{ui:Málsetningar}} í líkanastikunni felur þær og sýnir þær aftur.

## Vistaðu grunnmyndina sem PDF

1. Sýndu hæðina sem þú vilt og stilltu einingarnar í spjaldinu **Hæðir**.
2. Smelltu á {{ui:Prenta}} í líkanastikunni.
3. BimCraft vistar „<skrá> — <hæð>.pdf“: grunnmyndina í svörtu og hvítu í stærsta stöðluðum mælikvarða sem passar á síðuna (1/4" = 1'-0", 1/8" = 1'-0" … á Letter í fetum og tommum; 1:50, 1:100 … á A4 í millimetrum), með fylltum veggjum, hurðum, gluggum, heitum herbergja og flatarmálum, víddum og titilræmu með hæðinni, skránni, skurðhæðinni, dagsetningunni og mælikvarðanum.

PDF-skjalið er teiknað sem línur og texti, þannig að það helst skarpt við hvaða aðdrátt sem er og texti þess er leitarbær.

## Gott að vita

- Listarnir skrá það sem teikniverkfærin bjuggu til. Hurðir og gluggar úr öðru forriti birtast í Magnheildum í staðinn.
- Til að verðleggja verkið, sendu magntölurnar til TakeoffCraft: sjá [Magntölur til TakeoffCraft](topic:takeoff). CSV-niðurhalið er áfram fyrir töflureikni.
