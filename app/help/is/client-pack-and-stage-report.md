---
title: Kynningarpakkar, áfangaskýrslur og samanburður valkosta
summary: Búðu til kynningarpakka eða áfangaskýrslu úr líkaninu, með massavalkostum bornum saman eftir flatarmáli og kostnaði, gólfflatarmáli, teikningunum með endurskoðunum sínum og útgáfusögunni. Sérhver tala heldur utan um þá hluti sem liggja að baki henni.
keywords: kynningarpakki, kynning, áfangaskýrsla, skýrsla, samanburður valkosta, valkostir, bera saman valkosti, flatarmál og kostnaður, kostnaður á valkost, enginn taxti, massi, gólfflatarmál, teikningalisti, útgáfusaga, tölur, tengdar tölur
from: f6679bf5
---

## Hvað þú gerir

Búðu til kynningarpakka eða áfangaskýrslu úr líkaninu eins og það er núna, og berðu saman geymda massavalkosti hlið við hlið eftir flatarmáli og kostnaði.

## Skref

1. Í vinstra spjaldinu opnarðu **Kynningarpakki og áfangaskýrsla**.
2. Veldu **Opna í Skjölum** við hliðina á Kynningarpakki eða Áfangaskýrsla. Skjalið birtist í Skjölum út frá líkaninu, þar sem þú getur breytt texta þess.
3. Í forskoðuninni smellirðu á tölu til að velja þá hluti sem liggja að baki henni.
4. Veldu **Búa til pakkann**. Ein zip-skrá er vistuð: skjalið sem PDF, mynd af 3D-sýninni, og `figures.csv`, sem telur upp hverja tölu með GlobalId hluta hennar.

## Reitirnir

Þú getur notað þessa reiti í hvaða skjali sem er.

| Reitur | Hvað hann prentar |
|---|---|
| `{{stage}}` | Áfangi verkefnisins úr teikniupplýsingunum. |
| `{{options}}` | Geymdu massavalkostirnir hlið við hlið: hæðir, hæð, grunnflötur, brúttó gólfflatarmál, byggingarhjúpur og kostnaður. |
| `{{areas}}` | Gólfflatarmál eftir hæð, úr herbergjunum. |
| `{{sheets}}` | Blöðin með endurskoðuninni sem hvert stendur í og hvenær það var síðast gefið út. |
| `{{issues}}` | Útgáfusagan og breytingaskráin. |
| `{{changes}}` | Hvað breyttist frá síðustu útgáfu, blað fyrir blað. |

## Hvernig valkostir eru verðlagðir

Kostnaður kemur aðeins úr verðtöflu verkefnisins (Orka/Kostnaður, 5D kostnaður). Ekkert er áætlað fyrir þig.

- Verðlína verðleggur valkost aðeins þegar flokkar hennar nefna `IfcBuildingElementProxy`.
- Gólfflatarmál er verðlagt eftir línu þar sem orðin nefna notkun valkostarins, eins og office. Án hennar er notuð lína með orðunum gross floor area eða building mass. Lína eftir m² notar brúttó gólfflatarmál. Lína eftir m³ notar rúmmál.
- Byggingarhjúpurinn (ummál sinnum hæð) er verðlagður eftir línu með orðinu envelope eða facade.
- Valkostur án samsvarandi línu sýnir **Enginn taxti**. Heildarsumma er aðeins sýnd þegar sérhver hluti sem óskað er eftir hefur taxta.

## Gott að vita

- Geymdu valkosti með **Geyma sem valkost** í massalista herbergjaáætlunarinnar. Sjá „Massavalkostir“.
- PDF getur ekki valið hluti. Utan BimCraft ber `figures.csv` tengilinn frá hverri tölu til hluta hennar.

## Ekki smíðað enn

- Blöð og teiknaðar sýnir eru ekki sett inn í skjalið. Pakkinn geymir aðeins mynd af 3D-sýninni.
