---
title: Samstilla nokkra skanna í eitt
summary: Staðsettu skanna teknar frá mismunandi stöðum í einn ramma með völdum punktapörum eða slegnum viðmiðum, betrumbættu þá með ICP, vistaðu samstillinguna sem verkefni og fluttu samstillt punktaskýið út sem LAS eða E57.
keywords: samstilling, samstilla, skannar, punktský, icp, endurtekinn næsti punktur, viðmið, punktapör, stíf umbreyting, jöfnun, sameina, e57, las, skanni í BIM
from: e8e270db
---

## Hvað þú gerir

Nokkrir skannar af sama stað (hver frá eigin staðsetningu skanna) byrja í eigin hnitum. Samstilltu þá: gefðu hverjum skanna eina staðsetningu svo þeir séu allir í einum ramma, vistaðu það síðan sem verkefni og skrifaðu samstillta punktaskýið sem eina LAS- eða E57-skrá.

## Staðsettu skannana

1. Opnaðu gluggann ({{ui:Samstilla skanna…}} á upphafsspjaldinu, eða {{ui:Sýna}} › {{ui:Samstilla skanna…}} þegar líkan er opið). {{ui:Bæta við skönnum…}} tekur við LAS-, LAZ-, E57-, PLY-, PCD-, PTX-, PTS- eða XYZ-skrám, eða dragðu þær á gluggann. Skannar sem nota mismunandi einingar eru hafnaðir með athugasemd: breyttu öðrum fyrst.
2. Veldu {{ui:Skanni til að færa}} og {{ui:Staðsetja gegn}}. Myndin sýnir hvern skanna í rammanum eins og hann er núna, í einum lit hver: {{ui:Grunnmynd}}, {{ui:Framan}} eða {{ui:Hlið}}; dragðu til að víkja, notaðu hjólið til að aðdraga.
3. **Eftir punktapörum.** Smelltu á {{ui:Velja par}}, síðan á punkt á skannanum sem á að færa, og síðan sama stað á öðrum skanna (horn, viðmið, fótur súlu). Gerðu þetta að minnsta kosti þrisvar, með punktum sem liggja ekki á einni línu og eru dreifðir. Smelltu á {{ui:Staðsetja með pörum}}: skanninn er staðsettur með minnstu-kvaðrata-aðlögun, og **Afgangur** sýnir hversu mikið hvert par missir enn. Par með stórri tölu er slæmt val: fjarlægðu það með krossinum og staðsettu aftur.
4. **Eftir viðmiðum.** Ef hnit punkts eru þekkt (mældir viðmiðunarpunktar), smelltu á {{ui:Velja, síðan slá inn viðmið}}, smelltu á punktinn á skanna sínum, og sláðu inn X, Y og Z viðmiðsins í línuna. Pör og slegin viðmið mega blandast frjálst.

## Fínstilla með ICP

Pör gefa grófa staðsetningu. {{ui:Fínstilla}} færir skannann þar til yfirborð hans liggur á yfirborði hins skannans: fyrst **punktur í punkt**, síðan **punktur í flöt**. Taflan sýnir hvert skref með villu sinni og hversu marga punkta það paraði; línan fyrir ofan teiknar hvernig villan lækkar. {{ui:Stöðva}} endar keyrslunni eftir skrefið sem er í gangi og heldur því sem náðist. {{ui:Afturkalla}} tekur alla keyrsluna (eða síðustu staðsetningu) til baka; {{ui:Endurstilla}} setur skannann aftur á skráarhnit sín.

Til að hafa þetta fljótlegt á fartölvu, vinnur ICP á afmörkuðum hluta punktanna ({{ui:Punktar notaðir}}, 5,000 til 60,000) og hunsar samsvaranir lengra en {{ui:Mesta fjarlægð samsvörunar}} (sjálfgefið 5% af stærð skannans, minnkar þegar hann sest). Það þarf grófa staðsetningu fyrst: skannar sem varla skarast tilkynna að ekki sé hægt að para þá. Yfirborð sem eru aðeins flöt eða aðeins bein geta ekki lagað stöðu eftir sjálfum sér; bættu þá við pörum.

## Vista og flytja út

- {{ui:Vista verkefni}} skrifar litla `.ccscans.json`-skrá: nafn, stærð og fingrafar fyrstu 64 KB hvers skanna, ásamt umbreytingu hans. Hún geymir engan punkt. {{ui:Opna verkefni…}} finnur skannaskrárnar eftir þessum tilvísunum (skrárnar verða að vera bættar við fyrst) og setur hverja umbreytingu aftur á sinn stað.
- {{ui:Flytja út LAS}} og {{ui:Flytja út E57}} skrifa eina skrá með öllum skönnunum á samstilltum stað sínum. Punktar í upprunalegu skránum eru aldrei skrifaðir yfir; umbreytingin er notuð á útleiðinni. Með {{ui:Lesa alla punkta úr skránum}} kveikt, er hver skrá lesin aftur fyrir hvern punkt (allt að 20 milljónum á skanna); slökkt, eru aðeins punktarnir sem sjást í skoðaranum skrifaðir.
- {{ui:Sýna samstillta punktaskýið}} (BimCraft) skrifar LAS-skrána og opnar hana í 3D-sýninni við hlið líkansins, eins og hvert annað ský.

:::note
Ekkert er sent upp. Samstilling vinnur í einingum skránna sjálfra og heldur millimetrum: LAS er skrifuð með skala sem passar (niður í 0.1 mm), E57 með tvöföldum tölum. Hnitakerfi berst inn í LAS aðeins þegar allir skannar tilgreina sama EPSG-kóðann. E57-skrifarinn er eigin; hann er prófaður með því að lesa skrárnar aftur með þessum lesara og með libE57Format.
:::
