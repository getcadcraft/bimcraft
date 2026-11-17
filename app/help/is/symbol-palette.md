---
title: Táknaspjaldið
summary: Finndu raf- og pípulagnatákn eftir heiti eða mynd, stjörnumerktu þau sem þú notar og settu þau á grunnmyndina með einum smelli.
keywords: táknaspjald, tákn á tækjastiku, veggur fylgir, tákn, rafmagnstákn, pípulagnatákn, pípulagnagrunnmynd, salerni, handlaug, vaskur, baðkar, sturta, gólfniðurfall, hreinsilok, slönguteinn, vatnshitari, loki, hliðarloki, kalt vatn, heitt vatn, affall, loftun, línustíll, uppáhald, leit
from: 67f20bc0
---

## Það sem þú gerir

Opnaðu eitt spjald sem listar raf- og pípulagnatákn grunnmyndar með myndum og heitum, finndu það sem þú vilt og settu það á grunnmyndina. Ekkert hér þarf netið: táknin fylgja forritinu.

## Opna og setja tákn inn

1. Opnaðu líkan og opnaðu {{ui:Smíð}} › {{ui:Táknaspjald}} (skipunin sem þú skrifar: SYMBOLS). Sami hnappur er í Verkfæravalmynd Teikna-stikunnar og sem **Tákn** í Safnhópnum á tækjastikunni.
2. Veldu sett: **Rafmagn** eða **Pípulagnir**, eða **Öll sett**. Skrifaðu í leitarreitinn til að þrengja listann. Þú getur leitað eftir heiti eða skammstöfun (WC, CW, HB).
3. Smelltu á tákn. Grunnmyndin er tilbúin til að setja það inn.
   - **Rafmagnstákn** ræsir rafmagnstólið með því tæki valið, þannig að allt á [Rafmagnsgrunnmynd](topic:electrical-plan) gildir: smelltu á grunnmyndina, eitt skref í afturköllun.
   - **Pípulagnatákn** ræsir táknverkfæri grunnmyndarinnar. Smelltu á grunnmyndina. Tæki sem stendur við vegg (salerni, handlaug, baðkar, vaskur, slönguteinn) smellur að næsta vegg, með bakið upp að veggnum; niðurföll, lokar, vatnshitarinn og línustílar fara þangað sem þú smellir.
4. Ýttu á {{key:R}} til að snúa tákninu 90 gráður ({{key:Shift}}+{{key:R}} snýr því hina leiðina), eða skrifaðu horn í **Snúningur** á valkostastikunni. Ýttu á {{key:Esc}} til að hætta.

Tæki eða slönguteinn sem smellur að vegg man þann vegg: þegar veggurinn færist færist táknið með honum (sama flötur, sama fjarlægð eftir veggnum) í sama afturkallaskrefi. Ef þú eyðir veggnum helst táknið þar sem það var og **Vandamál** listar „lost its wall“ (týndi veggnum sínum); færðu það eða eyddu því. Tákn sem eru sett fjarri veggjum eru ekki tengd neinu.

Hvert tákn sem þú setur er eitt afturkallaskref. Sett tákn er grunnmyndarskýring í IFC-skránni með merki sínu (WC1, WC2, ...). Veldu það til að breyta merki þess eða snúningi í **Eiginleikar**, eða ýttu á {{key:Delete}}.

## Hvað pípulagnasettið hefur

Tæki (salerni, þvagskál, handlaug, baðkar, sturta, eldhúsvaskur, stakur vaskur), gólfniðurfall, gólf- og veggjahreinsiloka, slönguteinn, veggkrana, vatnshitara, loka (hliðarloka, hnattloka, kúluloka, bakstreymisloka, fiðrildaloka, þrýstiminnkandi loka) og línustíla með skammstöfunum sínum: kalt vatn (CW), heitt vatn (HW), heitt vatn til baka (HWR), affall (W), loftun (V), regnvatnslögn (SD) og gas (G). Teikningarnar skalast með grunnmyndinni, svo þær halda stærð sinni á prentuðu blaði. Línustíll er stuttur stúfur til að sýna stílinn á grunnmyndinni; teiknaðu raunverulegu pípulagnirnar með pípuverkfærunum.

:::note
Þetta eru algengar venjur í pípulagnagrunnmyndum, teiknaðar af okkur; ekki vottaðar samkvæmt ISO 4067-1 eða ASME Y32.4. Þær voru bornar saman við opinberar teikniskýringar og þjálfunarhandbækur (listinn er í heimildaskýringu settsins, sem segir hvar við erum sammála og hvar við erum ólík), ekki afritaðar úr neinni vöru, og þær má nota án endurgjalds (Apache-2.0). Teiknisett eru mismunandi, svo athugaðu skýringu þíns eigin verkefnis. Þetta eru grunnmyndartákn, ekki pípulagnahönnun: þau stærðarákvarða ekki pípur og athuga ekki reglugerðir.
:::

## Uppáhald og lyklaborð

- Smelltu á stjörnuna á tákni (eða ýttu á {{key:F}} á því) til að geyma það sem uppáhald. Uppáhald er listað fyrst og er geymt í þessum vafra. **Aðeins uppáhald** sýnir þau ein.
- {{key:Down}} úr leitarreitnum fer inn í táknin; örvatakkarnir, {{key:Home}} og {{key:End}} færa á milli þeirra; {{key:Enter}} velur það sem er í fókus; {{key:Esc}} lokar spjaldinu.
- Í síma er spjaldið blað neðst á skjánum; það víkur þegar þú velur tákn svo þú sjáir grunnmyndina. Opnaðu það aftur úr Smíð-valmyndinni eða með hnappinum **Spjald** á valkostastikunni.

:::tip
Ef skrá notar táknasett sem þessi útgáfa hefur ekki, sýnir grunnmyndin reit þar sem táknið átti að vera og **Vandamál** listar það.
:::

## Tengja settan frumefni við tákn

Ljósatæki úr safninu er 3D-frumefni, en raflagnaskipan sýnir það sem táknið sitt. Þú setur það **einu sinni** og tengir það:

1. Veldu Smíð › **Táknatengill** (eða skrifaðu SYMBOLLINK). Hlutinn Táknatengill opnast í vinstra spjaldinu.
2. Veldu settu frumefnin á grunnmyndinni eða í 3D. Hlutinn segir hversu mörg eru valin og hvað þau eru tengd við.
3. Veldu **Tákn** (úr hvaða táknasetti sem er: Rafmagn, Pípulagnir) og veldu **Tengja**.

Frumefnið er áfram eitt frumefni og hver tafla telur það einu sinni:

- **3D** sýnir alltaf búk þess.
- **Grunnmynd** sýnir grunnmyndarform sitt, eins og áður.
- Grunnmynd þar sem **Þessi sýn sýnir tengd frumefni sem** er stillt á **Táknin þeirra (þjónustuskipan)** sýnir táknið á sínum stað. Smellur á táknið velur frumefnið. Valið er geymt fyrir þá sýn (grunnmynd hæðar, loftmynd hennar eða tilvísun) í skránni.

**Snúa tákninu 90°** snýr tákninu miðað við frumefnið sitt. **Fjarlægja tengilinn** tekur tengilinn af; frumefnið helst. Taflan **Tengd tákn** listar hvert tengt frumefni einu sinni, með hæð sinni og herberginu sem það stendur í.

Ekki smíðað: val sýnar á blaði er valið á grunnmynd hæðarinnar sem hún sýnir; tæki sem sett eru með rafmagnstólinu eru tákn á öllum grunnmyndum, eins og áður.
