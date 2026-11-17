---
title: Punktar fyrir útsetningu og athuganir eins og reist
summary: Númeraðu staðina sem áhöfn setur út úr líkaninu — súlumiðjur, veggenda, akkerisbolta, hylsur, hvaða hlut sem þú velur — skrifaðu þá fyrir heildarstöð, og lestu síðan mældu punktana aftur og sjáðu hvað er út af.
keywords: útsetningarpunktar, útsetning, setja út, merkja út, merking, heildarstöð, mæling, punktaskrá, csv, txt, pnezd, penzd, xyz, norðurhnit, austurhnit, hæð, eins-og-reist, athugun, vikmörk, frávik, akkerisboltar, súlumiðjur, veggendar, hylsur, mæld hnit, kortaumreikningur
from: acea9606
---

Flipinn {{ui:Punktar}} hægra megin býr til punktana sem áhöfn setur út á staðnum úr opna líkaninu, og athugar punktana sem þeir mæla eftir á.

## Búa til punkta

1. Opnaðu IFC-líkan og flipann {{ui:Punktar}}.
2. Hakaðu við það sem á að setja út: **súlumiðjur** (fótur miðlínu hverrar súlu), **veggendar** (báðir endar miðáss hvers veggs, við grunn hans), **akkerisbolta**, **hylsur** (hlutir sem heiti eða gerð segir hylsa), og **valda hluti** (hver á staðsetningarpunkti sínum — veldu þá fyrst í sýninni).
3. Veldu fyrsta númer og forskeyti, hnitin, einingarnar, dálkana og skrána:
   - **Líkan**: eigin hnit skráarinnar. **Mælinet**: kortanetið úr landfræðitilvísun líkansins (sýnt aðeins þegar IFC hefur kortaumreikning), í metrum eða þeirri einingu sem þú velur.
   - Dálkar **PNEZD** (punktur, norður, austur, hæð, lýsing), **PENZD** eða **XYZ**; **CSV** (kommur) eða **TXT** (tabúlustafir).
4. Ýttu á {{ui:Búa til punkta}}: listinn sýnir þá og sýnin merkir þá í bláu. {{ui:Sækja punktana}} skrifar skrána.

Punktarnir koma í föstri röð — eftir tegund, og síðan í röðum yfir grunnmyndina — svo að ef þeir eru búnir til aftur úr sama líkani fást sömu tölur. Skráin er sú sem CivilCraft opnar og EXPORTPOINTS frá CadCraft skrifar: einn punktur í línu, þrír aukastafir, og lýsing innan „ “ þegar hún inniheldur kommu.

## Athuga punkta eins og reist

Þegar áhöfnin sendir til baka það sem hún mældi, veldu **vikmörk** í millimetrum og hvernig á að para punktana — eftir **punktanúmeri** (þeir héldu þínum númerum) eða **næstu mælingu** — og ýttu á {{ui:Lesa inn punkta eins og reist…}}. Lestu skrána í sömu einingum og hnitum og þú skrifaðir.

Hver hönnunarpunktur er þá **innan** vikmarkanna, **utan** þeirra, **ekki mældur**, og sérhver mæling sem enginn bað um er **aukamæling**. Taflan sýnir mismuninn í þeirri einingu sem þú velur í tækjastikunni, fet birt sem tugabrot úr tommum (eins og reist mínus hönnun: austur, norður, hæð og fjarlægðin í grunnmynd); sýnin merkir hvern punkt grænan eða rauðan með línu að mælingunni, og gráan þegar hann var ekki mældur. {{ui:Skýrsla (CSV)}} skrifar alla samanburðinn út.

Ekkert hér breytir líkaninu. Ekki enn gert: útsetning frá brúnum platna, ásskurðir eða göt búin til fyrir þig, og senda punkta beint í mælitæki — notaðu skrána.
