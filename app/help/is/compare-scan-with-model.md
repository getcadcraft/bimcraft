---
title: Bera skönnun saman við líkanið og 4D-áætlunina
summary: Metið sérhvern hlut líkansins gagnvart opnu punktaskýi (byggt, að hluta, vantar, ekki náð), sjáðu hlutfall byggt, litaðu líkanið eftir því, og listaðu með 4D-áætlun hlaðna hvað er á eftir eða á undan á 4D-deginum.
keywords: skönnun, punktaský, framvinda, hlutfall lokið, byggt, vantar, á eftir áætlun, á undan áætlun, 4D, framvinda á lóð, frávik, eins byggt, leysiskönnun, dróni, bera saman
from: 6fdc9003
---

Opnaðu IFC, opnaðu punktaský við hlið þess (sjá [Punktaský](topic:point-clouds)) og settu það á líkanið. Hlutinn {{ui:Bera skönnunina saman við líkanið}} birtist í hægri spjaldinu meðan ský er opið.

## Hvað hún gerir

Ýttu á {{ui:Bera saman}}. Sérhver hlutur líkansins er metinn eftir yfirborði sínu, því það er það sem skanninn sér. Sex fletir kassans hans eru skornir í reiti um 20 cm; reitur telst þegar skönnunarpunktur liggur innan {{ui:Vikmörk}} (50 mm í upphafi) frá fletinum. Besti stóri flöturinn telst, þannig að veggur sem er skannaður frá annarri hlið er ekki refsað fyrir hina hliðina.

- **Byggt**: að minnsta kosti 40 % af yfirborðinu sést.
- **Að hluta**: 10 % til 40 %.
- **Vantar**: minna en það, en skanninn nær til hlutarins (punktar innan 1,5 m frá honum).
- **Ekki náð**: skanninn fór aldrei þangað, svo ekkert er sagt um hann.

Fyrir byggða og að hluta byggða hluti gefur hún líka meðalfrávik skönnunarpunktanna frá yfirborði líkansins og segir hvort hluturinn sé á sínum stað (innan vikmarka), nærri (innan þreföldunar) eða frá (lengra). Hún sér aðeins frávik allt að fimmfölduðum vikmörkum: hlutur sem er byggður lengra frá sínum stað en það birtist sem vantandi.

Samantektin gefur hlutfall byggðra meðal hluta sem skanninn nær til, eftir fjölda og eftir rúmmáli. Hlutar að hluta eru taldir sérstaklega og eru ekki lagðir við byggðu hlutana.

## Gegn 4D-áætluninni

Með 4D-áætlun hlaðna (sjá [4D-áætlun](topic:4d-schedule)) notar niðurstaðan líka daginn sem þú hefur stillt á 4D-rennibrautinni: hlutir sem eiga að vera tilbúnir fyrir þann dag en skanninn sýnir ekki sem byggða eru **á eftir áætlun**; hlutir sem eru ekki enn á áætlun en eru byggðir eru **á undan**. Hlutir á eftir áætlun eru skráðir í {{ui:Vandamál}}, og töfluna má sía niður í þá. Án áætlunar er ekkert sagt um á eftir eða á undan.

## Taflan og líkanið

Smelltu á röð til að velja hlutinn. {{ui:Lita líkanið}} litar hluti græna (byggða), gula (að hluta), rauða (vantar) eða gráa (ekki náð); {{ui:Eigin litir}} setur þá aftur. {{ui:Vista CSV}} skrifar töfluna. {{ui:Merkja samsvarandi hluti sem staðfesta á vettvangi}} merkir sérhvern hlut sem sést sem byggðan og innan vikmarka sem staðfestan á vettvangi (LOD 500, aðferð: skönnun) í einu skrefi sem þú getur afturkallað. Sjá [Merktu hluti sem yfirfarna eða staðfesta á vettvangi](topic:verification).

:::warning
Þetta ber saman kassa hvers hlutar við skönnunarpunkta innan vikmarka. Þetta er **ekki mæling, magntaka né grundvöllur greiðslu**. Hlutur sem er falinn á bak við skannaðan hlut (veggur á bak við klæðningu, plata undir gólfefni) deilir yfirborði hans og getur birst sem byggður; bogadreginn eða hallandi hlutur hefur kassa stærri en búkinn og getur birst sem að hluta eða vantandi. Skoðaðu listann áður en þú grípur til aðgerða. Athugasemdir um leyfi og framvinduskýrslur eru ekki hluti af þessu: þær eru áfram í dálkunum sem þú heldur þeim í.
:::

Aðstoðarmaður getur keyrt sama samanburð með verkfærinu {{ui:Bera skönnunina saman við líkanið}}; það breytir engu í líkaninu.
