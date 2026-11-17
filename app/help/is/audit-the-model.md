---
title: Úttekt á líkaninu: herbergi, merkingar, LOD, árekstrar og tengi
summary: Keyrðu tilbúnar athuganir á óheitum herbergjum, vantandi merkingum, hlutum undir þróunarstigi (LOD) sem verkstigið krefst, árekstrum milli fagsviða og LOD 350-tengiflötum. Aðeins ráðgjöf: ekkert er hindrað.
keywords: úttekt, athugun, óheitt herbergi, vantandi merking, merking, lod, þróunarstig, áfangi, stig, árekstur, fagsvið, samhæfing, tengiflötur, lod 350, op, yfirlit, bitar, gegnumstunga, hylki, pípa, loftstokkur, vandamál, athugunarskýrsla, ráðgefandi
from: cc83a14d
---

## Hvað þú gerir

Lítur yfir allt líkanið í einu áður en þú gefur það út. Úttektin keyrir tilbúin reglusett og setur það sem hún finnur í listann {{ui:Vandamál}} sem ráðgjöf. Ekkert er hindrað: þú lagar niðurstöðu, eða samþykkir hana með ástæðu, eins og hvert annað vandamál.

## Skref

1. Opnaðu {{ui:Líkanathuganir}} › {{ui:Úttekt}} í vinstra spjaldinu, eða {{ui:Verkfæri}} › {{ui:Úttekt á líkaninu…}} (skrifað: `AUDIT`).
2. Veldu {{ui:Verkstig}}. Það er sama stig og í teikningaupplýsingunum.
3. Hakaðu við reglusettin sem á að keyra.
4. Smelltu á {{ui:Keyra úttektina}}.
5. Lestu línuna fyrir hvert reglusett, og opnaðu síðan {{ui:Opna Vandamálalistann}}. Smellur á niðurstöðu velur hlut hennar.
6. {{ui:Athugunarskýrslan}} sækir skýrsluna: hverja niðurstöðu, hver samþykkti hvað og af hverju, og þau reglusett sem keyrðu.

## Reglusettin

- **Óheiti herbergi**: herbergi án heitis, eða enn kallað það sem forritið kallaði það („Room 3“).
- **Vantandi merkingar**: hurð eða gluggi án merkis, herbergi án númers, rafbúnaður án merkingar.
- **Hlutir undir LOD stigsins**: hver veggur, gólf, loft, þak, hurð og gluggi þar sem LOD er lægra en stigið krefst. Hlutur les LOD-merki gerðar sinnar; hlutur sem er staðfestur á staðnum er LOD 500. Hlutir án merkingar eru taldir í einni athugasemd, því ekki er hægt að athuga þá.
- **Árekstrar milli fagsviða**: hlutir tveggja fagsviða (arkitektúr, burðarvirki, vélrænt, pípulagnir, rafmagn, eftir IFC-flokki) sem rekast hver á annan. Þak sem hvílir á veggjum sínum er ekki talið.
- **LOD 350-tengiflötur**: sérhver hurð og gluggi situr í opi í vegg sínum, opið passar innan veggsins, tvö op skarast ekki, op sem er breiðara en mörkin hefur yfirlit eða bita (hlut yfir því, eða athugasemd á hurðina eða gluggann), og pípa, loftstokkur eða kapalbakki sem fer í gegnum vegg eða plötu hefur op þar. Niðurstöður eru taldar fyrir hvert par fagsviða.
- **Þekktir hlutir sem enginn hefur staðfest**: veggir, hurðir, gluggar og herbergi lesin úr PDF, skanna eða teikningu sem eru enn óstaðfest. Sjá [Merkja hluti sem athugaða eða staðfesta á staðnum](topic:verification).

## LOD-stigið

Opnaðu {{ui:LOD sem hvert stig krefst}} til að sjá eða breyta töflunni.

:::note
Taflan og breidd yfirlitsins eru upphafsgildi CadCraft. Þau eru ekki tekin úr staðli: verkefni stillir LOD fyrir hvert stig í BIM-framkvæmdaáætlun sinni. Stilltu þau að þínum. Skrifstofa getur stillt töfluna fyrir alla í Stillingar › Default Policies › Audit; breyting í Audit-kaflanum er geymd á þessari tölvu.
:::

## Gott að vita

- Yfirlit má skrá sem athugasemd í stað þess að módelera það: veldu hurð eða glugga og fylltu út {{ui:Athugasemd um yfirlit eða bita}} undir {{ui:Staðfesting}} í Eiginleikum.
- Pípa sem fer í gegnum raunverulegt op fer ekki í gegnum yfirborð og er ekki skráð. Pípa sem er módeleruð beint í gegnum vegg er skráð.
- Árekstrarathugunin hættir eftir nokkrar sekúndur á mjög stóru líkani og segir frá því. Fyrir fulla athugun á tveimur völdum settum notaðu [Finna árekstra milli hluta](topic:clash-check).
- Keyrðu úttektina aftur eftir að þú breytir líkaninu. Samþykktar niðurstöður haldast samþykktar meðan númer þeirra breytast ekki.
- Hún les líkanið. Hún kemur ekki í stað samhæfingarskoðunar þeirra sem bera ábyrgð.

## Næst

- [Athugaðu líkan með tilliti til algengra vandamála](topic:model-checks)
- [Finndu árekstra milli hluta](topic:clash-check)
- [Merkja hluti sem athugaða eða staðfesta á staðnum](topic:verification)
