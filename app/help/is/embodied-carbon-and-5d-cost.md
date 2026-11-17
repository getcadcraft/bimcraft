---
title: Innbyggt kolefni og kostnaður á áætluninni
summary: Leggðu saman innbyggt kolefni líkansins úr opinni, breytanlegri stuðlatöflu, og dreifðu verðum yfir 4D-áætlunina í kostnaðar- og sjóðstreymisferil. Hvort tveggja byrjar á gildum sem þú slærð inn eða flytur inn.
keywords: innbyggt kolefni, kolefni, co2, kgco2e, losun, stuðlatafla, epd, 5d, kostnaður, sjóðstreymi, S-ferill, kostnaður áætlunar, verð, magntökuverð
from: 83e82840
---

## Innbyggt kolefni

Opnaðu **Kolefni**-spjaldið. Magn hvers hlutar (rúmmál, flatarmál eða lengd) er margfaldað með stuðli úr töflunni, eftir stigi líftímaeiningar: framleiðslustigið er krafist, flutningur og úrgangur eru valfrjáls. Heildartölur fást eftir efni, flokki og hæð, og á hvern fermetra gólfflatar.

**Stuðlataflan er þín.** Línurnar sem fylgja BimCraft eru almenn upphafsgildi af réttri stærðargráðu. Þær koma ekki úr gagnagrunni, eru merktar sem óyfirfarnar, og þarf að skipta þeim út fyrir heimildina sem þú notar (EPD, landsgagnagrunn eða tölur fyrirtækisins þíns). Breyttu línum í spjaldinu, eða fluttu töfluna inn og út sem CSV eða JSON. Línur sem þú bætir við yfirskrifa upphafslínuna með sama auðkenni. Taflan er vistuð í líkaninu.

Hlutir án samsvörunar, eða án magns, eru skráðir sem vandamál í stað þess að vera taldir sem núll.

## Kostnaður á 4D-áætluninni

Opnaðu **Kostnað**-spjaldið við hliðina á 4D-áætluninni. Gefðu því verð (sláðu þau inn, fluttu inn CSV eða JSON, eða taktu línur úr TakeoffCraft), tengdu hvert verð við efni líkansins með leitarorðum, og það verðleggur alla hluti hvers verkþáttar. Kostnaður hvers verkþáttar dreifist yfir daga frá upphafi til loka (jafnt, eða þungt í upphafi eða enda), og spjaldið teiknar uppsafnaða sjóðstreymisferilinn eftir degi, viku eða mánuði, með kostnaði eftir stigi og pakka og því sem er áætlað á móti því sem er byggt á tiltekinni dagsetningu. Útflutningur í CSV. Ekkert er verðlagt fyrr en þú gefur verð: engin fylgja með.

## Gjaldmiðill

Verðtafla getur tilgreint í hvaða gjaldmiðli verðin eru (þrír stafir, eins og USD eða EUR). 5D-spjaldið hefur reit fyrir það, það er geymt í skránni með verðunum, og JSON-útflutningur ber það með sér. Tafla sem var gerð áður, eða þar sem þú skildir reitinn eftir auðan, hefur engan gjaldmiðil: kostnaður hennar birtist sem USD, sjálfgefinn gjaldmiðill forritsins, og spjaldið og keyrandi samtölur segja það. Ekkert er umreiknað milli gjaldmiðla.
