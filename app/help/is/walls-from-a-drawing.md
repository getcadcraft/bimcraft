---
title: Veggir úr rakinni teikningu
summary: Breyttu DWG- eða DXF-grunnmynd í veggi, hurðir og glugga á kóta og haltu teikningunni undir grunnmyndinni sem viðmiðun.
keywords: dwg, dxf, rekja, rakin, flytja inn grunnmynd, breyta, CAD í BIM, 2D í 3D, veggir úr línum, lög, blokkir, hurðir úr blokkum, undirlag, viðmiðunarteikning, bakgrunnur, xref, teiknihugbúnaður
from: 3bf213f1
---

## Það sem þú gerir

Notaðu grunnmynd sem þú (eða einhver annar) teiknaðir í teiknihugbúnaðinum sem upphaf líkansins: veggjalínur hennar verða að veggjum, og hurða- og gluggablokkir hennar verða að hurðum og gluggum.

## Skref

1. Kveiktu á {{ui:Draw}} og veldu kótann sem teikningin sýnir í kótalista grunnmyndarinnar.
2. Veldu {{ui:Build}} › {{ui:From a drawing…}}, síðan {{ui:Choose a drawing…}} og veldu DWG eða DXF.
3. Í glugganum:
   - **Einingar teikningar** koma úr teikningunni; veldu aðrar ef þær eru rangar (grunnmynd teiknuð í fetum sem er lesin sem tommur er tólf sinnum of lítil).
   - **Lög með veggjunum**: merktu lögin sem veggjalínurnar eru á. Lög sem heita „wall“ eru merkt fyrir þig.
   - **Línurnar eru**: **báðir fletir hvers veggjar** (venjulega leiðin sem grunnmyndir eru teiknaðar á: hvert par samsíða lína allt að 600 mm á milli verður einn veggur, jafnþykkur bilinu), **miðlínur veggjanna**, eða **einn flötur** með veggnum vinstra eða hægra megin við hann. Með miðlínum eða einum fleti ákvarðar gerð veggjar þykktina.
   - **Gerð veggjar** og **Hæð veggjar**, eins og fyrir verkfærið {{ui:Wall}}.
   - **Blokkir**: veldu hurðar- eða gluggagerð fyrir hverja blokk sem er hurð eða gluggi, eða slepptu henni. Blokkir sem heita „door“ eða „window“ eru valdar fyrir þig. Hver þeirra fer í vegginn sem hún situr á, jafnbreið og blokkin er eftir veggnum; hurð opnast til þeirrar hliðar sem hreyfibogi hennar er teiknaður á.
   - **Hvar hún fer**: á eigin hnitum teikningarinnar, eða með neðra vinstra horni hennar á upphafspunkti grunnmyndarinnar.
   - **Halda teikningunni undir grunnmynd þessarar hæðar**: láttu hana vera hakaða til að sjá teikninguna sem þunnar línur undir því sem þú býrð til.
4. Línan undir valkostunum segir hversu marga veggi, hurðir og glugga hún býr til. Smelltu á {{ui:Make them}}.

## Hvað þú ættir að sjá

- Veggirnir, hurðirnar og gluggarnir á kótanum, tengdir þar sem þeir mætast, með rýmunum sem þeir loka; allt er eitt skref, svo {{key:Mod+Z}} tekur það til baka.
- Teikningin sem þunnar línur undir grunnmyndinni. {{ui:Build}} › {{ui:From a drawing…}} listar teikningarnar sem eru geymdar á kótanum, hver með {{ui:Remove}}; að fjarlægja eina skilur veggina eftir.
- Í IFC-skránni er geymda teikningin skýring á kótanum (línur hennar), svo önnur BIM-forrit sýna hana líka.

:::note
PDF eða skanni virkar líka: sjá [Veggir úr setti af grunnmyndum](topic:walls-from-plans). Bogar eru skildir eftir (BimCraft teiknar beina veggi), og sama gildir um línur inni í blokkum. Línur án félaga í „báðir fletir“ eru taldar í glugganum og skildar eftir: teiknaðu þá veggi með verkfærinu {{ui:Wall}}, eða lagfærðu þá með {{ui:Modify}} › {{ui:Trim / extend}} (sjá [Stytta, lengja og tengja veggi](topic:trim-extend-walls)).
:::

:::tip
Rakið yfir skanna í teiknihugbúnaðinum? Opnaðu skannann hér líka og athugaðu veggina við hann: sjá [Líkan úr skanna](topic:model-from-a-scan).
:::
