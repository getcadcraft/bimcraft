---
title: Athuga líkan gegn IDS viðskiptavinar
summary: Hlaðið inn .ids-skránni sem þér var afhent og sjáið hvern hlut sem uppfyllir hana ekki undir Vandamál, áður en þið afhendið IFC-skrána.
keywords: ids, upplýsingaforskrift um afhendingu upplýsinga, buildingsmart, kröfur, afhending, athugun, staðfesting, gæðaeftirlit, eir, bep, eiginleiki, flokkun, efni, innkaup
from: 7b960222
---

## Hvað þú gerir

IDS (Information Delivery Specification, staðall frá buildingSMART) er listinn yfir það sem IFC-skrá þarf að innihalda: hvaða flokka, hvaða eiginleika með hvaða gildum, flokkanir, efni og hvar hlutir eiga að vera. Viðskiptavinir og opinber innkaup senda hana með verkinu. BimCraft ber opna IFC-líkanið saman við hana og skráir alla hluti sem standast hana ekki.

## Skref

1. Opnaðu IFC-líkan.
2. Opnaðu {{ui:Athuga gegn IDS}} í vinstra spjaldinu, undir {{ui:Líkanathuganir}}, eða veldu {{ui:Athuga gegn IDS…}} úr valmyndinni í þeim valmyndastíl sem þú notar.
3. Smelltu á {{ui:Hlaða inn .ids-skrá…}} og veldu skrána. Ekkert er sent upp.
4. Lestu niðurstöðuna: hverja kröfulýsingu með {{ui:Stenst}} eða {{ui:Fellur}} og hversu marga hluti hún nær yfir.
5. Opnaðu Vandamál ({{key:Ctrl+Shift+M}}) og smelltu á bilun til að velja hlutinn og súmma á hann.

## Það sem þú átt að sjá

- Ein viðvörun fyrir hvern hlut og hverja kröfu sem hann uppfyllir ekki, með heiti kröfulýsingarinnar, því sem IDS krefst og því sem hluturinn hefur.
- Krafa sem ekkert í líkaninu passar við fær eina viðvörun út af fyrir sig.
- Athugunarskýrslan (í Vandamálum) byrjar á IDS: heiti hennar, titli, útgáfu, höfundi og fjölda við hverja kröfulýsingu sem á við, stenst og fellur.

## Gott að vita

- IFC-skráin geymir aðeins tilvísun í IDS (heiti, titil, útgáfu og kjötkássa), ekki IDS-skrána sjálfa: IDS viðskiptavinar getur verið trúnaðarmál og IFC-skráin fer til annarra. IDS-skráin er geymd í þessum vafra við hlið líkansins, þannig að þegar þú opnar vistuðu IFC-skrána hér aftur er hún athuguð aftur. Það að hlaða inn eða gleyma IDS-skránni er eitt skref sem þú getur afturkallað.
- Ef líkanið er opnað í annarri tölvu eða öðrum vafra sýnir Vandamál athugasemd um að IDS-skráin hafi ekki fundist: hlaðið henni inn aftur til að athuga aftur.
- Til að senda IDS-skrána með IFC-skránni skaltu kveikja á {{ui:Geyma IDS-skrána inni í IFC-skránni}} í Stillingar, á BimCraft-flipanum, áður en þú hleður henni inn.
- Sérhver breyting, afturköllun og endurgerð er athuguð aftur skömmu síðar.
- Gildi eru borin saman eins og IDS gerir: texti nákvæmlega (há- og lágstafir skipta máli), tölur í SI-einingum með lítilli skekkjumörk (lengdir í metrum, þannig að líkan í millimetrum er fyrst breytt).
- Krafa sem skrifuð er fyrir aðra IFC-útgáfu (til dæmis IFC2X3 þegar líkanið er IFC4) er samt athuguð; niðurstaðan segir það.
- Ef IDS-skráin hefur galla sem IDS-úttekt myndi merkja, sýnir glugginn þá; kröfurnar sem þeir eru í falla.
- Þú getur samþykkt bilun með ástæðu, eins og hvert annað vandamál. Hún helst samþykkt meðan gildi hlutarins haldast óbreytt.

- Mynstur í IDS eru lesin sem allt gildið. `^` í upphafi og `$` í lok eru líka túlkuð sem „allt gildið“, eins og flestar IDS-skrár meina.

## Næst

- [Athuga líkan með algengum vandamálum](topic:model-checks)
- [Breyta vegg eða hurð](topic:change-a-wall-or-door)
