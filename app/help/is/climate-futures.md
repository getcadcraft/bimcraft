---
title: "Loftslagsframtíðir: flóð, hiti og gróðureldar 2050 og 2080"
summary: Keyrðu flóðið, orkuárið og skimun gróðurelda aftur með framtíðarloftslagi (sviðsmyndir SSP2-4.5 og SSP5-8.5, árin 2050 og 2080) úr loftslagsgagnapakka, birt við hlið nútíðar.
keywords: loftslag, loftslagsbreytingar, framtíð, 2050, 2080, ssp, cmip6, sviðsmynd, sjávarborð, flóð, hiti, veðurskrá, epw, morph, energyplus, gróðureldur, kjarreldur, eldveður
from: 224ecd08
---

Loftslagstölurnar koma úr **gagnapakka**, ekki úr forritinu. Kveiktu á viðbótinni {{ui:Loftslagsframtíðir}} í Stillingar › Viðbætur, eða hladdu inn eigin pakkaskrá í blokkinni {{ui:Loftslagsframtíð}}.

:::warning
Pakkinn sem fylgir viðbótinni er **sýnishorn**: þrír staðir (Denver, Miami, Jóhannesarborg), eitt loftslagslíkan og fimm ár í hverju 20 ára tímabili. Hann er þar til að prófa verkfærin, **ekki til hönnunar**. Spjaldið segir það með feitletri meðan hann er í notkun. Heilan pakka (mörg líkön, öll ár, fleiri staðir) er smíðaður með `tools/climate/build-pack.mjs` úr NEX-GDDP-CMIP6 gögnum NASA.
:::

## Veldu framtíð

Í vinstra spjaldinu undir {{ui:Afspilun vár}} velurðu **Sviðsmynd** (SSP2-4.5, millivegurinn, eða SSP5-8.5, mikil losun) og **Ár** (2050 merkir 2041-2060, 2080 merkir 2071-2090; bæði miðað við 1995-2014). **Staður** er sá staður í pakkanum sem er næstur lóð líkansins (IfcSite breiddar- og lengdargráða), eða sá sem þú velur. Ef enginn staður er nálægt eru notaðar hnattrænar meðalbreytingar pakkans og spjaldið segir það.

## Flóð, nútíð við hlið framtíðar

Þegar sviðsmynd er valin skaltu stilla **Tegund flóðs**: strandflóð (bætir við hækkun sjávarborðs), árflóð eða mikil úrkoma (dýpra sem nemur breytingu á úrkomu votasta dagsins), eða bæði. Ýttu á Keyra: flóðið spilast eins og áður, og tafla sýnir flóð nútíðar og framtíðar hlið við hlið (vatnshæð, herbergi sem blotna, dýpsta vatn). Forsendurnar eru skráðar undir henni:

- strandsjávarhæð hækkar um alla hækkun sjávarborðs; ölduhlaup og úthafsbylgjur eru ekki breytt;
- rennsli áa hækkar í einu á móti einu með úrkomu votasta dagsins, og dýpið fylgir rennslinu í veldinu 0.6 (jafna Manning fyrir breiða rás);
- hlutarnir tveir eru einfaldlega lagðir saman.

## Hiti: framtíðarveðurskrá

Veldu tegundina {{ui:Hiti: framtíðarveðurskrá}}, veldu `.epw`-veðurskrá úr nútíð og ýttu á {{ui:Búa til framtíðarveðurskrána}}. Skráin er **mótuð** mánuð fyrir mánuð með birtu aðferðinni um tilfærslu og teygju (Belcher, Hacker og Powell 2005): meðaltal mánaðarins hlýnar um breytingu pakkans, heitu síðdegin um breytinguna á dagshámarki og köldu næturnar um breytinguna á dagslágmarki; rakastig breytist um breytingu pakkans og döggpunkturinn er reiknaður aftur. Þrýstingur og vindur haldast eins og þeir voru. Taflan ber saman meðal- og hámarkshita, kælihönnunarhita 0.4 % og hitahönnunarhita 99.6 %, klukkustundir við 30 °C og 35 °C og gráðudaga.

{{ui:Vista framtíðarveðurskrána}} vistar hana; {{ui:Nota hana í orkuathuguninni}} afhendir hana EnergyPlus-athuguninni (Orkuflipinn). Framtíðarskráin er sama dæmigerða árið, bara hlýrra: hún bætir ekki við nýjum hitabylgjum.

## Orkuár, nútíð við hlið framtíðar

Í EnergyPlus-athuguninni á Orkuflipanum (sjálfstæð viðbót, með þína eigin vél) velurðu veðurskrá úr nútíð, síðan sviðsmynd og ár í blokkinni sinni {{ui:Loftslagsframtíð}}, og ýtir á {{ui:Herma heilt ár: nútíð og framtíð}}: árið keyrir á skránni úr nútíð og á mótuðu framtíðarskránni, og hiti og kæling hvers herbergis er birt hlið við hlið.

## Váhrif gróðureldar (aðeins skimun)

Veldu tegundina {{ui:Váhrif gróðureldar (aðeins skimun)}}: næsti gróður, hallinn upp frá honum að byggingunni og fjarlægðin til hans. Niðurstaðan er bil frá mjög lágu til öfgafullt, nútíð og framtíð.

:::warning
**Aðeins skimun.** Þetta er okkar eigin hlutfallslegi kvarði til að sjá hvort lóð þurfi raunverulegt mat á gróðureldahættu, ekki byggingareinkunn né bushfire attack level (BAL). Hann margfaldar saman vog fyrir gróðurinn, hallastuðul (eldur tvöfaldast nokkurn veginn í hraða fyrir hverjar 10 gráður upp í móti, talið upp í 20 gráður), fjarlægðarstuðul (10 m deilt með fjarlægðinni, í mesta lagi 1) og breytingu pakkans á eldveðursvísitölunni.
:::

## Hvaðan tölurnar koma

- **Hiti, raki, sólskin, úrkoma, eldveður:** NASA NEX-GDDP-CMIP6, daglegar smækkaðar úttaksgögn CMIP6-líkana. Úttak hvers líkans er undir CC BY 4.0. Breytingin á eldveðri er kanadíska eldveðursvísitalan (Canadian Fire Weather Index) reiknuð dag fyrir dag út frá veðri líkansins (með daglegum raka í stað hádegisraka).
- **Hækkun sjávarborðs:** hnattrænt meðaltal IPCC AR6 (ekki staðbundið; landris eða landsig er ekki innifalið), nema pakki beri staðbundnar tölur.
- Pakkinn nefnir uppruna sinn, leyfi og dagsetningu; spjaldið sýnir þær.
