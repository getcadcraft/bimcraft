---
title: Geymdu eignagögn og viðhaldsskrá í líkaninu
summary: Notaðu afhenta IFC-líkanið til að reka bygginguna: framleiðandi, líkan, raðnúmer, ábyrgð og endingartími búnaðar og innréttinga, og skrá yfir framkvæmt viðhald, allt skrifað inn í IFC.
keywords: afhending, lokavottorð, notkunarvottorð, eins og byggt, afhendingarpakki, eignir, eignaskrá, rekstur húsnæðis, fm, rekstur, viðhald, þjónusta, ábyrgð, raðnúmer, strikamerki, framleiðandi, líkan, endingartími, afhending, cobie, stafrænn tvíburi, á eftir tíma, á gjalddaga, verkbeiðni
from: b84ac492
---

Flipinn {{ui:Eignir}} í hægra spjaldinu breytir opna IFC-líkaninu í skrá yfir búnað byggingarinnar. Allt er skrifað í IFC-skrána sjálfa, í eigin eiginleikasöfnum og verkefnum IFC, þannig að næsta forrit sem opnar skrána les það líka. Ekkert er hlaðið upp og enginn netþjónn er nauðsynlegur: vistaðu IFC-skrána til að geyma hana.

## Hvað er á listanum

- Búnaður og innréttingar: húsgögn, hreinlætistæki, ljósabúnaður, heimilistæki, loftdreifarar, lokar, dælur, viftur, katlar, tankar, tengi, rofaborð, lyftur og annar slíkur þáttur, og hlutir úr safni með búnaðargögn.
- Hver annar þáttur sem þú **fylgist með**: veldu hann í líkaninu (hurð, vegg, dælu sem er teiknuð sem venjulegur hlutur) og smelltu á {{ui:Fylgjast með völdum}}.
- Allt sem þegar hefur eignagögn eða viðhaldsverkefni, skrifað hér eða af öðru forriti.

Það sem er á tíma kemur fyrst, síðan það sem er á gjalddaga innan 30 daga. Síaðu eftir heiti, merkingu, framleiðanda, líkani eða raðnúmeri, eftir hæð, eða hakaðu við {{ui:Aðeins á eftir tíma eða á gjalddaga innan 30 daga}}.

## Eignagögn

Smelltu á eign á listanum (eða veldu hana í líkaninu) til að opna gögn hennar: framleiðandi, líkan, tilvísun líkans, raðnúmer, strikamerki, dagurinn sem hún var sett upp, ábyrgðarnúmer og upphaf og lok hennar, og endingartími í árum. {{ui:Vista gögnin}} skrifar þau í einu skrefi ({{key:Mod+Z}} afturkallar það). Skildu reit eftir auðan til að fjarlægja það gildi.

## Skjöl

Undir gögnunum sýnir {{ui:Skjöl}} handbækur, ábyrgðir, myndir, vottorð og teikningar sem tengd eru eigninni. Veldu tegundina, gefðu henni titil (eða skildu hann eftir auðan: skráarheitið er notað) og skrifaðu hvar hún er:

- **vefslóð** (`https://…`): hún fær tengil sem opnast í nýjum flipa;
- eða **skráarheiti eða slóð** (`Manuals/AHU-1.pdf`, `C:\FM\pump.pdf`, netdeiling): geymdu skrárnar við hlið IFC-skrárinnar, í sömu möppu eða undir henni, þannig að heitin virki enn þegar þú afhendir möppuna. BimCraft sýnir heitið; opnaðu skrána úr möppunni.

Skrárnar sjálfar eru aldrei hlaðnar upp né afritaðar inn í IFC: aðeins tengillinn er skrifaður. Vefslóð með lykilorði í sér, og hvaða tengill sem er hvorki vefslóð né skrá (eins og `javascript:`), er hafnað. {{ui:Fjarlægja}} tekur skjal af eigninni (eitt skref; {{key:Mod+Z}} afturkallar það).

Skjöl sem annað forrit setti á hlutinn eru líka skráð. Skjöl á **gerð** hlutarins birtast á sérhverjum hlut af þeirri gerð og segja það; breyttu þeim þar sem gerðin var búin til.

Í IFC er hvert skjal IFC-skjalatilvísun tengd hlutnum, með gerð sinni á tengingunni, í IFC4 og IFC2X3 eins.

## Viðhaldsskráin

Undir skjölunum, {{ui:Skrá unna vinnu}}: dagurinn sem hún var unnin, verkið, hver vann það, hvenær það er næst á gjalddaga og athugasemdir. Hver færsla er eitt skref; {{ui:Breyta}} og {{ui:Eyða}} breyta henni síðar. Næsti gjalddagi nýjustu færslunnar ræður því hvort eignin er á tíma eða á gjalddaga fljótlega.

## Hvernig þetta er geymt í IFC

- Framleiðandi og líkan í `Pset_ManufacturerTypeInformation`, raðnúmer, strikamerki og uppsetningardagur í `Pset_ManufacturerOccurrence`, ábyrgð í `Pset_Warranty`, endingartími í `Pset_ServiceLife`, á hlutnum sjálfum. Ef gerð hlutarins hefur þegar framleiðanda eða líkan birtist hún þar til þú skrifar þitt eigið.
- Sérhver viðhaldsfærsla er IFC-**verkefni** af viðhaldsgerð, tengt hlutnum, með dagsetningum sínum (í IFC4 einnig sem tímar verkefnisins) og `CadCraft_Maintenance`-safni með deginum, hver vann það og næsta gjalddaga.
- Gildi sem annar hlutur deilir eru afrituð fyrst: breyting á einni eign breytir aldrei nágrönnum hennar.
- Í eldri IFC2X3-skrám eru dagsetningar skrifaðar sem texti (YYYY-MM-DD); sú útgáfa vill þar sérstaka dagsetningarskrá, sem BimCraft skrifar ekki.

## Skynjaramælingar

Opnaðu {{ui:Skynjaragildi}} og {{ui:Opna mælingar (CSV)…}} til að flytja inn mælingar sem fluttar eru út úr byggingarstjórnunarkerfi, gagnaskrártæki eða töflureikni:

- **Fyrsti dálkurinn er tíminn**: `2026-10-23 14:05`, `2026-10-23T14:05:00Z`, `2026-10-23T14:05+02:00` eða Unix-sekúndur. Tími án tímabeltis er lesinn í tímabelti tölvunnar þinnar. Dagsetningar með degi fyrst, eins og `23/10/2026`, eru ekki lesnar (þær eru tvíræðar); fluttu út ISO-dagsetningar.
- **Hver annar dálkur er einn skynjari**, með haus sem er **merking**, **heiti** eða **GlobalId** eignarinnar. Haus sem passar við enga eign, eða fleiri en eina, er skráður og sleppt. Kommur, semíkommur eða tabbar skilja dálkana; með semíkommum eða tabbum er decimal-komma (`21,5`) líka lesin.
- Tímar eða gildi sem ekki eru lesanleg (orð, eining slegin inn í reit) eru talin og sleppt, aldrei getið.

Nýjasta mæling birtist í dálkinum {{ui:Mæling}} í listanum og í reitnum {{ui:Skynjari}} á eigninni, með **línuriti** af öllum mælingum (í síma bíða línurit þar til þú smellir á {{ui:Sýna töfluna}}). Stilltu **lágmark og hámark** og einingu á eign og smelltu á {{ui:Vista mörkin}}: mæling utan þeirra merkir eignina. Hakaðu við {{ui:Sýna á líkaninu}} til að lita hverja eign eftir mælingu sinni — blá undir lágmarki, græn innan marka, rauð yfir hámarki, og fyrir eignir án marka einn blár kvarði frá lægstu til hæstu mælingar — með mælingunni sem merki (allt að 60 merki, merkt fyrst).

**Mælingar haldast í þessum vafraflipa**: þær eru hvorki vistaðar í IFC né sendar neitt; opnaðu CSV-skrána aftur næst. **Mörkin eru vistuð í IFC** (`CadCraft_Sensor`-safn á hlutnum: Low, High, Unit), þannig að næsti sem opnar skrána sér sömu merkingar.

## Beinar mælingar

{{ui:Beint streymi}} les gildi um leið og þau gerast, **beint úr þessum vafra í þitt eigið kerfi**. Ekkert fer í gegnum netþjóninn okkar og ekkert er geymt annars staðar en í vafraflipanum þínum. Ekkert tengist þegar skrá opnast: aðeins {{ui:Tengja}} gerir það.

- **MQTT yfir WebSockets**: vefslóð WebSocket-hlustunar miðlarans þíns (`wss://broker.example.com:8884/mqtt`), og eitt eða fleiri efni með `{tag}` þar sem merking eignarinnar fer, til dæmis `site/{tag}/temperature` (BimCraft gerist áskrifandi að `site/+/temperature` og les merkinguna úr efni hvers skeytis). Efni án `{tag}` nefna skynjarann sjálfan. Skeyti er annaðhvort einföld tala (`21.5`) eða JSON eins og `{"value": 21.5, "time": "2026-10-23T14:05:00Z"}` ({{ui:Gildisreitur í JSON}} er stilltur ef þinn heitir eitthvað annað).
- **Spyrja vefslóð (HTTP)**: vefslóð sem kerfi þitt um byggingarstjórnun eða lítið skriftu þín svarar, spurt á nokkurra sekúndna fresti (að minnsta kosti 5). Hún má svara með JSON lykluðu eftir merkingu (`{"AHU-1": 21.5}`), JSON-lista (`[{"tag": "AHU-1", "value": 21.5}]`), eða CSV af mælingum eins og hér að ofan. Ef hún svarar ekki, bíður BimCraft tvöfalt lengur áður en spurt er aftur, allt að fimm mínútum.

Hver mæling fer til þeirrar eignar sem merking, heiti eða GlobalId hennar nefnir, nákvæmlega eins og dálkur í CSV; heiti sem passa við enga eign eru skráð. Mælingarnar bætast í {{ui:Skynjaragildi}}: listinn, línuritin, mörkin og litirnir á líkaninu virka eins.

**Lykilorðið þitt eða auðkennislykill** er slegið inn fyrir eina tengingu: það er afhent tengingunni og reiturinn er tæmdur; það er aldrei vistað í þessum vafra né í IFC. Auðkennislykill er sendur sem staðlaður `Authorization: Bearer`-haus, og engar vafrakökur eru sendar.

{{ui:Geyma þessar stillingar í IFC}} skrifar vefslóðina, efnin, gildisreitinn og hversu oft er spurt inn í líkanið (`CadCraft_Feed`-safn á verkefninu; það er enginn reitur fyrir lykilorð), þannig að næsti sem opnar skrána slær aðeins inn eigin innskráningu og smellir á {{ui:Tengja}}. Settu aldrei lykilorð eða lykil í vefslóðina sjálfa: vefslóð með notandanafni og lykilorði í sér er hafnað.

:::note
**Hvað miðlarinn þinn eða vefslóðin þarf.** Vefsíða í vafra getur aðeins talað við netþjón sem leyfir það:
- Síðan er örugg (https), þannig að vafrinn tengist aðeins við `wss://`- og `https://`-vefslóðir, nema á þinni eigin tölvu (`localhost`), þar sem `ws://` og `http://` virka til prófunar.
- HTTP-vefslóð verður að leyfa beiðnir frá þessari síðu (CORS: hausinn `Access-Control-Allow-Origin`, og `Authorization` meðal leyfðra hausa ef þú notar auðkennislykil).
- Flestir miðlarar (Mosquitto, EMQX, HiveMQ og fleiri) bjóða upp á WebSocket-hlustun; hún er oft óvirk þar til kveikt er á henni. BimCraft talar MQTT 3.1.1.
:::

Engar **viðvaranir** eru þegar BimCraft er lokað: mörk merkja eign meðan líkanið er opið með tengdu streymi. Að fylgjast með byggingu allan sólarhringinn þarf netþjón, sem BimCraft rekur ekki.

## COBie-töflureikningur

**COBie** er afhendingartöflureikningurinn sem margir eigendur og rekstrarteymi biðja um (gefinn út af National BIM Standard í Bandaríkjunum; BS 1192-4 í Bretlandi). Opnaðu {{ui:COBie-töflureikningur}} í flipanum:

- {{ui:Vista sem COBie (.xlsx)}} skrifar COBie 2.4-blöðin — Contact, Facility, Floor, Space, Type, Component, System, Job, Document og Attribute — úr líkaninu og eignagögnunum: bygginguna, hæðir hennar og rými (flatarmál úr magni líkansins), sérhverja eign sem hluta með raðnúmeri sínu, uppsetningardegi, upphafi ábyrgðar, merkingu og strikamerki, gerð hennar með framleiðanda, líkani, endingartíma og lengd ábyrgðar, kerfin sem hún tilheyrir, viðhaldsskrána sem verk og tengd skjöl. Hver hluti ber IFC GlobalId hlutarins. Skrifaðu netfangið þitt í dálkinn „created by“ í COBie, eða skildu hann eftir auðan (þá stendur n/a). Gildi sem líkanið hefur ekki segja **n/a**; flokkadálkarnir bera IFC-flokkinn, ekki OmniClass-kóða.
- {{ui:Lesa COBie-töflureikning…}} les hann til baka, frá BimCraft eða öðru forriti, og **listar allar breytingar fyrst**: hvaða eign, hvaða gildi, frá hverju í hvað, og ný skjöl. {{ui:Beita}} skrifar þær allar í einu skrefi ({{key:Mod+Z}} afturkallar). Línur eru paraðar eftir GlobalId, síðan eftir heiti hlutarins. Línur sem passa við ekkert í líkaninu eru skráðar, ekki bættar við.

Töflureikningur er meðhöndlaður sem óáreiðanlegur: formúlur eru aldrei lesnar né keyrðar (aðeins síðasta vistaða gildi reitsins), gildi sem myndi láta ábyrgð enda áður en hún byrjar og tengill á skjal sem er hvorki vefslóð né skráarheiti eru skilin eftir og talin, og mjög stórar vinnubækur eru hafnaðar. Verk COBie eru áætlað verk tegundar, þannig að þau eru skrifuð út en ekki lesin til baka. Í töflureikninum sem BimCraft skrifar er texti sem töflureikni gæti tekið fyrir formúlu (byrjar á `=`, `+`, `-` eða `@`) merktur sem texti.

Vinnubókin er prófuð í prófunum okkar gegn óháðum töflureiknislesara; hún hefur ekki farið í gegnum COBie-staðfesti. Ef móttökuteymi keyrir slíkan, segðu okkur hvað hann segir.

## Afhendingarskjöl

Pappírarnir sem fara til eigandans með fullgerðu byggingunni tilheyra verkefninu, ekki einni eign. Á flipanum {{ui:Eignir}} opnaðu {{ui:Skilagögn}}:

1. {{ui:Bæta við skjali}}, veldu tegund þess (lokavottorð, notkunarvottorð, ábyrgð, handbók, teikningar eins og byggt, annað), og skrifaðu titil þess, útgáfudag, hver gaf það út og tilvísunarnúmer.
2. Segðu hvar það er: vefslóð, skráarheiti við hlið IFC-skrárinnar, eða {{ui:Festa skrá}}.
3. {{ui:Bæta á listann}}. {{ui:Breyta}} og {{ui:Fjarlægja}} breyta listanum; hvort um sig er eitt skref sem þú getur afturkallað.

{{ui:Búa til skilapakkann}} sækir eina zip-skrá: forsíðu sem listar hvert skjal, sama lista og í töflureikni, COBie-vinnubókina (skjölin eru á Document-blaði hennar, sem línur um Facility), líkanið og hverja setta skrá. Lokavottorð eða notkunarvottorð sem er ekki komið á listann enn er nefnt á forsíðunni; pakkinn er búinn til engu að síður.

Líkanið í pakkanum er **líkanið eins og byggt**: það segir hvaða hlutir voru mældir á staðnum. Með því, í möppunni `as-built`: yfirlýsingin, listi yfir hvern hlut með staðfestingarstöðu sinni, teikningasettið eins og það er núna sem ein PDF (teikningarnar eins og byggt), og breytingaskrá teikninga þegar líkanið hefur gefið út sett. Sjá [Merkja hluti sem athugaða eða staðfesta á staðnum](topic:verification).

- Í IFC-skránni er hvert skjal IfcDocumentInformation tengt verkefninu (IfcRelAssociatesDocument), með titli þess, tilvísun, dagsetningu, útgefanda og stað, þannig að önnur forrit listi það.
- Fest skrá er skráð eftir heiti, stærð og SHA-256. Til að geyma skrána sjálfa með verkefninu, notaðu {{ui:Vista verkefnið sem pakka}} (.ccbundle geymir líkanið og festu skrárnar; þegar hann er opnaður fást þær aftur, hver athuguð gegn skráningu sinni). Venjuleg vistun spyr hvort þú viljir.
- Venjuleg .ifc-skrá geymir skráninguna, ekki skrána: eftir opnun, notaðu {{ui:Festa skrána aftur}}. Sama skrá er viðurkennd; önnur skrá kemur í stað skráningarinnar.

## CSV

{{ui:CSV}} vistar hverja eign með gögnum sínum, hverja viðhaldsfærslu og hvert skjal, eina línu hvert, fyrir töflureikni eða annað viðhaldsforrit.

:::note
Ekki smíðað: hýst þjónusta sem geymir mælingar og sendir viðvaranir þegar BimCraft er lokað, og að lesa verk COBie til baka. Sjá [Ekki smíðað enn](topic:not-built-yet).
:::
