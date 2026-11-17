---
title: Láttu fólk ganga um bygginguna
summary: Rýming eða venjulegur dagur með komu fólks í gegnum herbergi, dyr og stiga, með biðröðum þar sem byggingin þrengist, lengstu göngu að útgangi úr hverju herbergi og niðurstöðunum sem Vandamál. Gróft mannfjöldalíkan fyrir hönnunarákvarðanir, ekki brunaöryggisvottorð.
keywords: fólk, rýming, flótti, útgangur, göngufjarlægð, röð, mannfjöldi, flæði, dyrabreidd, stigar, komur, flöskuháls, hermun, íbúar, gangandi, hvað ef, lokaðar dyr
from: 84aa8920
---

{{ui:Fólk í byggingunni}} hluti vinstra spjaldsins lætur fólk ganga um herbergi, dyr og stiga í opnu IFC-líkani. Engu í líkaninu er breytt og engu er hlaðið upp.

:::warning
Þetta er **hönnunarhjálp, ekki brunaöryggisvottorð**. Það þekkir ekki eld, reyk, skelfingu, mismunandi hreyfigetu né það sem reglur krefjast af þér. Takmörkin eru þín: lengsta gangan að útgangi og tíminn sem er til staðar eru tölur sem þú slærð inn, og engin er gefin fyrir fram.
:::

## Keyra

1. Opnaðu líkan með lokuðum herbergjum og dyrum. Dyr með herbergi aðeins öðrum megin eru útgangur; dyr á milli tveggja herbergja tengja þau; stigi tengir herbergin við enda sína.
2. Veldu **Rýming** (allir ganga að útgangi), **Komur** (allir koma inn og ganga að herbergi) eða **Skipti** (fólkið í herbergjunum fer út meðan jafn margir koma inn), og gólfflatarmál á hvern einstakling. Herbergi sem heita eins og gangur, stigi, anddyri eða salerni hýsa engan.
3. Smelltu á {{ui:Keyra}}. Þú færð tímann þar til síðasti maðurinn er kominn út (og hvenær helmingur og níu af hverjum tíu eru það), biðröðina við hverjar dyr og stiga, herbergið með lengstu göngunni og grunnmynd sem spilar keyrsluna.

## Hvað ef

Merktu við {{ui:Lokað}} á dyr í töflunni og keyrðu aftur: fólk finnur aðra leið, eða herbergin án útgönguleiðar eru skráð sem villur. Dyr sem er tvöfalt breiðari tæmir herbergi mun fyrr; taflan sýnir hvar biðraðirnar eru.

## Hvernig það virkar

Hvert herbergi er rist, svo fólk gengur fyrir horn, ekki í gegnum veggi. Hraðinn minnkar eftir því sem herbergi fyllist (S = 1.4 (1 − 0.266 D) m/s, D í fólki á m²). Dyr hleypa 1.3 manns á sekúndu í gegnum hvern metra breiddar sinnar, að frádregnum 150 mm hvoru megin; stigi 1.0 og hægari gangur. Fólk bíður í röð eftir því hver kom fyrst. Keyrslunúmer endurtekur sömu keyrsluna nákvæmlega.

Aðstoðarmaðurinn getur keyrt sama hlutinn: biddu um rýmingu, eða lengstu göngu að útgangi úr hverju herbergi.

## Fólk í hverju herbergi

Opnaðu {{ui:Fólk í hverju herbergi}} til að slá inn tölu fyrir hvaða herbergi sem er. Tómur reitur notar tölu gólfflatarins (sýnd í gráu); 0 tæmir herbergi. Tölurnar þínar eru notaðar í keyrslunni og eru geymdar í þessum vafra.

## Mótflæði við dyr

Í **Skipti** mætast fólk sem fer út og fólk sem kemur inn við sömu dyr. Þegar dyr hleypir einhverjum í hina áttina rétt á eftir síðasta manni, heldur hún hluta af hraða sínum (0.8 hér; forsenda, því birt gildi eru mismunandi), og taflan telur stefnubreytingar. Dyr sem skiptir oft um stefnu er skráð undir **Vandamál** sem athugasemd.

## Stigar og pallar

Hver palli stiga kostar göngumann eina sekúndu að snúa sér (forsenda). Beinn stigi hefur enga; L- eða U-stigi hefur einn. Hraði stigans kemur enn úr breidd stigaloftsins.

## Í 3D-sýninni

Merktu við {{ui:Sýna fólkið í þrívíddarmyndinni}} og göngumennirnir birtast sem myndir í líkaninu, litaðir eftir því hvað þeir eru að gera, og hreyfast þegar þú spilar keyrsluna. Engu er bætt við líkanið.
