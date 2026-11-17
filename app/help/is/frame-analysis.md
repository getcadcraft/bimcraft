---
title: Greining á burðargrind
summary: Kraftar, viðbrögð og aflögun bita, súlna og skástífa líkansins undir álagstilvikum og samsetningum sem þú stillir, geymt í IFC-skránni. Greiningarhjálp, ekki kóðaathugun.
keywords: greining, einingar, fet og tommur, birtingareining, burðargreining, hönnunarathuganir, nýting, valsað, soðið, AISC 360, EN 1993-1-1, rammagreining, greiningarlíkan, stífleikaaðferð, álag, álagstilvik, samsetning, eigin þyngd, fast álag, breytilegt álag, viðbrögð, beygjumóment, skerkraftur, normálkraftur, durgur, aflöguð lögun, stuðningar, liðaður, innspenntur, losun, skýrsla, PDF, CSV, CraftScript, frame3d, bitar, súlur, burðarstykki
from: b93b58c4
---

{{ui:Greining}}-flipinn hægra megin finnur kraftana í bitum, súlum og skástífum opna líkansins, viðbrögðin við súlufætur og hversu mikið stykkin beygjast, fyrir þau álag sem þú gefur.

:::warning
Þetta er **greiningarhjálp, ekki kóðaathugun**. Greiningin beitir engum hönnunarstaðli: hún mælir ekki stærð stykkja eða athugar burðargetu, og hún velur ekki álagsstuðla. Verkfræðingur athugar greiningarlíkanið, álagið og stuðningana, og ákveður hvað tölurnar þýða. Blokkin {{ui:Hönnunarathuganir}} fyrir neðan athugar valsaða stál-I-prófíla samkvæmt AISC 360 eða EN 1993-1-1, en það er hjálp þar til verkfræðingur hefur yfirfarið hana: sjá [Hönnunarathuganir](topic:frame-analysis#design-checks).
:::

## Keyrðu það

1. Opnaðu IFC-líkan og flipann {{ui:Greining}}.
2. Veldu einn eða fleiri bita, súlur eða skástífur í sýninni, veldu {{ui:Tilvik}}, {{ui:Álag}} og {{ui:Stefna}}, skrifaðu gildið og ýttu á {{ui:Bæta við álagi}}: kN/m fyrir álag sem dreift er eftir stykki, kN fyrir punktálag.
3. Ýttu á {{ui:Keyra greiningu}}.

Taflan sýnir hámarks normálkraft, skerkrafta, beygjumóment, snúning og durg hvers stykkis; smelltu á heiti stykkis til að velja það í sýninni. Fyrir neðan eru viðbrögðin. {{ui:Á líkaninu}} teiknar aflöguðu lögunina, eða eina verkun sem skýringarmynd við hvert stykki. Niðurstöðurnar úreldast þegar líkanið breytist: keyrðu hana aftur.

Hvert álag og stilling er ein breyting í listanum {{ui:Breytingar}}: {{ui:Afturkalla}} tekur hana til baka, og {{ui:Vista sem IFC}} geymir þær í skránni (eiginleikasett verkefnisins `CadCraft_Analysis`), svo þegar líkanið opnast aftur hér eru álögin enn til staðar.

## Hvernig greiningarlíkanið er búið til

- Sérhvert IfcBeam, IfcColumn og IfcMember sem er ein bein útpressun verður stykki á þyngdarmiðslínu þverskurðar síns. Eiginleikar þverskurðarins koma af prófílnum: I-, U-, L- og T-prófílar, rétthyrningar og rör, hringir og kringlótt rör, eða hvaða lokaða útlína sem er (þá er snúningsfastinn áætlaður, og það er sagt í skýrslunni). Annað er skilið út og talið.
- Í líkaninu enda bitar við andlit súlu og liggja undir gólfinu. Sérhver stykkjaendi er færður eftir eigin línu á ás stykkisins sem hann rammar inn í, þegar sá ás er nálægt (innan um það bil stærð þverskurðanna), og það stykki er klofið þar. Skýrslan segir hversu margir endar færðust.
- **Súlufætur** sem ekkert liggur niður úr eru stuðningar: innspenntir (upphafið) eða liðaðir (haldið á sínum stað og gegn snúningi, frjálsir að snúast).
- **Bitaendar** eru stífir eða liðaðir samkvæmt reglunni {{ui:Endar bita án tengingar}}; **skástífur** (IfcMember) eru liðaðar í báðum endum. Veldu eitt stykki til að gefa endum þess, eða fæti súlu, sína eigin reglu.
- Efni eftir heiti: steinsteypa (E = 30 GPa), timbur (E = 11 GPa), annars stál (E = 200 GPa).

Ef grindin getur hreyfst án þess að beygja nokkuð — hreyfibúnaður — stöðvast keyrslan og segir hvar og í hvaða átt.

## Tilvik, samsetningar, formerki og skýrslan

Greiningin byrjar á **Fast álag** (eigin þyngd), **Breytilegt** og **Fast + breytilegt**; bættu við tilvikum og samsetningum með þeim stuðlum sem hönnunarstaðallinn þinn krefst. N > 0 er tog; My > 0 setur staðbundna −z hlið stykkisins í tog (bita sem sígur undir þyngdarkrafti hefur My > 0). {{ui:Skýrsla (PDF)}} og {{ui:Skýrsla (CSV)}} geyma forsendurnar, þverskurðina, tilvikin, viðbrögðin ásamt summum þeirra, kraftana í stykkjunum, færslurnar og umslag (hámarksgildi). {{ui:Flytja út sem CraftScript}} skrifar grindina fyrir Script-vinnusvæði PartCraft, þar sem safnfallið `frame3d` leysir hana í læsilegum kóða.

Aðferðin er bein stífleikaaðferð, línuleg og fyrsta stigs nema þú hakir við **Annað stig (P-Delta)**, og er prófuð gegn dæmum úr kennslubókum.

**Annað stig (P-Delta).** Hakaðu við *Annað stig (P-Delta)* við hliðina á {{ui:Keyra greiningu}}: hver samsetning er leyst aftur með normálkröftum stykkjanna sem verka á aflöguðu grindina (hvert stykki er skorið í 4 hluta, svo beygja stykkis milli enda telst líka), þangað til normálkraftarnir jafnast. Niðurstöðulínan gefur fjölda umferða og hversu mikið hliðrunin jókst; mómentin, durgin, hönnunarathuganirnar og skýrslan nota síðan þessar niðurstöður. Yfir teygjanlegu mikilvægisálagi grindarinnar stöðvast keyrslan og segir það. Hún er teygjanleg með litlum snúningum, aðeins beygjuátak, án stífleikaminnkunar eða táknrænna álaga (ekki beinagreiningaraðferð AISC ein og sér); plötur, veggir og stíf gólf haldast á fyrsta stigi.

**Gólfþrýstingur á plötur.** Fyrir steyptar plötur (greiningin les plötu sem plötuþætti þegar efni hennar er steinsteypa) er í álagsblokkinni {{ui:Þrýstingur á allar plötur}}: skrifaðu kN/m², veldu tilvikið hér að ofan og ýttu á {{ui:Bæta við plötur}}. Hann dreifist á allar plötur sem greiningin fann, niður á við, og er skráður með tengli sem fjarlægir hann. Þetta er einn þrýstingur fyrir allar plötur, ekki einn á hverja plötu, og hann er ekki kóðaálag: skrifaðu það gildi sem verkfræðingurinn þinn gefur þér.

**Eigintíðni (endanlegir þættir).** Blokkin {{ui:Endanlegir þættir: eiginsveiflutíðnir}} undir niðurstöðunum finnur lægstu sveiflumyndirnar í sama líkani með endanlegra þátta vélinni: bitar með endalosunum sínum, plötur og veggir sem flatar fjórhyrndar skeljar, stíf gólf, stuðningar. Veldu hversu margar sveiflumyndir (3, 6, 10 eða 20) og plötuþáttinn (fjórhyrndu skelina fyrir þykkar eða þunnar plötur, eða þunnplötuþáttinn) og ýttu á {{ui:Finna tíðnirnar}}. Taflan gefur tíðni hverrar myndar í Hz, lotutíma hennar í sekúndum og virkan mótmassa hennar eftir X, Y og Z sem hlutfall af massanum sem getur hreyfst; {{ui:Sýna á líkaninu}} teiknar hvaða mynd sem er á sama hátt og aflöguðu lögunin er teiknuð. Massi er eðlismassi efnisins sinnum rúmmálið: álög bæta ekki við massa, og efni án eðlismassa hefur engan. Skýrslan (PDF, CSV) geymir töfluna. Hún er aðeins teygjanleg og fyrir litlar hreyfingar, og engin jarðskjálfta- eða vindálög eru búin til út frá staðli hér. Ekki kóðaathugun; verkfræðingur yfirfer niðurstöðurnar.

**Svörunarlínurit, tímasaga og ýtiprófun.** Þrjár blokkir í viðbót eru fyrir neðan tíðnirnar og nota sama endanlegra þátta líkanið. Massi fyrir þær allar er eðlismassi efnisins auk niðurávið álaganna í þeim tilvikum sem þú hakar við, hvert margfaldað með stuðli sem þú skrifar (til dæmis Fast á 1 og Breytilegt á þeim hluta sem þú telur sem massa).

{{ui:Svörunarlínurit}} les hverja mynd af litrófi sem þú gefur (töflu með lotutíma og hröðun, eða ASCE 7 lögun út frá SDS, SD1 og TL; hnappurinn {{ui:Nota gildi jarðskjálftablokkarinnar}} afritar þau úr {{ui:Jarðskjálfti}}-blokkinni) og sameinar myndirnar með CQC, SRSS, tíu prósenta reglunni eða algildissummu, og setur síðan X-, Y- og Z-stefnurnar saman (100 % + 30 % eða SRSS). Það gefur grunnskurðarkraft, hæðarhliðranir, endakrafta stykkja og mynditöflu sem varar við þegar myndirnar sem notaðar eru bera minna en 90 % af massanum. Þú getur skalað niðurstöðurnar með stuðli eða upp í grunnskurðarkraft sem þú skrifar; blokkin reiknar aldrei þann grunnskurðarkraft sjálf. Niðurstöðurnar hafa ekkert formerki.

{{ui:Tímasaga}} keyrir jarðhröðun með mótunarsamlagningu (nákvæmt fyrir beinu línur skrárinnar milli punkta) eða með beinni heildun (Newmark-meðalhröðun með Rayleigh-dempun). Inntakið er tilbúin sínusbylgja eða púls (merkt sem tilbúið), skrá sem þú límir inn, eða textaskrá sem þú opnar (tími og hröðun, ein hröðun í línu með skrefi, eða skrá í PEER-stíl með DT=-haus; í g eða m/s²). Hún gefur þakhliðrunina og grunnskurðarkraftinn gegn tíma, hliðrun hverrar hæðar og umslag endakraftanna. Líkön með mjög langa skrá geyma hana aðeins fyrir þessa lotu.

{{ui:Ýtiprófun}} ýtir þakinu til hliðar í litlum skrefum (mynstur eins og fyrsta sveiflumyndin, eða jafnt), með plasthjörum við enda stykkja sem hafa I-lögun. Hjörur gefa eftir við plastmómentið, sem lækkar þegar normálkrafturinn vex (reiknað út frá teiknaðri lögun, horn hunsuð); herðing er valkvæð, P-delta er valkvæð, og þyngdarsamsetning má beita fyrst. Hún gefur burðarferilinn (grunnskurðarkraft gegn þakhliðrun), fyrstu hjörina, og ástand og plastískan snúning hverrar hjöru. {{ui:Keyra ólínulegu tímasöguna}} keyrir sömu hjörur undir skrá {{ui:Tímasaga}}-blokkarinnar á litlum líkönum. Hjörur myndast aðeins við enda stykkja (settu hnút þar sem ein ætti að myndast inni í bitahafi); stykki sem er losað í báðum endum fær engar, og flæði og knék skástífa er ekki hermt eftir; plötur og veggir haldast teygjanlegir; engin viðtökuskilyrði eru gefin. Ekki kóðaathugun; verkfræðingur yfirfer niðurstöðurnar. Stillingarnar eru vistaðar með líkaninu og skýrslan geymir töflurnar.

Ekki smíðað ennþá: knék, leiðrétting á vantandi massa fyrir svörunarlínuritið, skölun skráa, viðtökuskilyrði fyrir hjörur (kraftsvörun er þegar til, hér fyrir ofan), flatarmálsálög önnur en þrýstingurinn á allar plötur, forskot stykkja, skástífur sem toga einungis, veggir og plötur í grindinni, og kóðaathuganir á soðnum prófílum og þverskurðum sem eru ekki valsaðir I-prófílar. Sjá [Ekki smíðað ennþá](topic:not-built-yet).

## Einingar

Lengdir fylgja einingunni sem þú velur í tækjastikunni ({{ui:Einingar}}), eins og annað í BimCraft: hleðslustaðsetningarnar sem þú skrifar og sérð ({{ui:Frá}}, {{ui:Í}}, {{ui:Við}}), punktar hnútaálaga og viðbragða, hæðir kóta í {{ui:Jarðskjálfti}}, og durg- og hliðrunardálkarnir (fet og tommur sýna þessar litlu lengdir í aukastafatommum). Breyttu einingunni hvenær sem er; flipinn teiknast aftur. Kraftar haldast í kN og kN·m, og skýrslan (PDF, CSV) og CraftScript-skráin haldast í millimetrum með einingunni skrifaðri. Þverskurðarstærðir, þvermál stanga og þekjur í blokkinni {{ui:Steypa}} haldast í millimetrum, eins og þau heita.

## Hönnunarathuganir

Blokkin {{ui:Hönnunarathuganir}} (sú sama og í DetailCraft) tekur {{ui:Hönnunarstaðall}}, ASCE 7 + AISC 360 eða EN 1990 + EN 1993-1-1, og {{ui:Stálgæði}}. Gefðu hverju hleðslutilviki sína gerð (fast, breytilegt, vindur …) og {{ui:Búa til samsetningar}} skrifar hleðslusamsetningar staðalsins úr tilvikunum þínum; greiningin keyrir þær síðan eins og hverja aðra samsetningu.

{{ui:Athuga bita}} athugar síðan hvern **valsaðan stál-I-prófíl** með athugunum DetailCraft (tog, þrýsting með knékum, beygju með hliðar-snúningsknékum, skurð, beygju með normálkrafti, durg; greinarnar eru í skýrslunni) og sýnir hversu mikið af burðargetu sinni það notar, litað á líkaninu. Það er **hjálp þar til verkfræðingur hefur yfirfarið það**.

**Hvaða stykki eru athuguð.** IFC-prófíll segir ekki hvort stál-I-prófíll sé valsaður eða soðinn, svo BimCraft kallar hann valsaðan aðeins þegar prófílheiti hans (annars heiti tegundar einingarinnar) er stærð úr AISC W- eða S-töflunum eða EN 10365 IPE-, HEA- eða HEB-töflunum (`W12x26`, `IPE 300`, `HEA200`, `HE 200 A`) **og** hæð, breidd, sál og flansar í skránni passa við þá stærð innan 1 %. Sérhver annar I-prófíll (plötubiti, stærð undir öðru heiti, breytt stærð) er tekinn sem soðinn og kemur til baka **ekki athugaður**, eins og rör, horn, rásir og aðrir þverskurðir, grannir hlutar og snúningur. Athugaðu þau stykki með verkfræðingi.
