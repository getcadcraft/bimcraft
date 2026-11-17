---
title: Spila flóð, vind eða jarðskjálfta á byggingunni
summary: Vatn sem rís um herbergin, vindþrýstingur á hverja hæð, eða jarðskjálfti sem hristir hæðirnar, spilað á grunnmynd eða útliti með tímasleða. Einföld líkön með forsendum sínum skráðum; ekki staðlaprófun né burðarvirkishönnun.
keywords: hætta, flóð, vindur, jarðskjálfti, jarðskjálftavirkni, hliðarvik, hliðarsveifla, grunnskúfkraftur, vatnshæð, loftslag, sviðsmynd, sjávarborð, afspilun, hæð, eiginsveiflutími
from: ff0d34d1
---

{{ui:Hazard playback}} kaflinn í vinstri spjaldinu spilar hættu á opna IFC-líkaninu. Ekkert í líkaninu er breytt.

:::warning
Þetta eru **einföld líkön til að sjá hvað hætta gerir við þetta skipulag**, ekki flóðarannsókn, ekki athugun á vindstaðli og ekki burðarvirkishönnun. Hver niðurstaða telur upp forsendur sínar.
:::

## Flóð

Stilltu hæsta vatnsborð yfir lægstu hæð og mínúturnar sem það tekur að rísa, haldast og falla. Vatn kemst inn í herbergi um op sem það hefur farið yfir þröskuldinn á, og herbergi sem tengjast blautum herbergjum um op undir vatnsborðinu standa í sömu hæð (kvasi-stöðugt). Taflan sýnir hvenær hvert herbergi blotnar fyrst og hversu djúpt; grunnmyndin spilar hana. Sláðu inn mesta vatn sem herbergi má taka og herbergi yfir því eru viðvaranir. **Loftslagsframtíðir:** hlaðið inn eigin sviðsmyndaskrá (JSON eða CSV með ári, hækkun sjávarborðs og flóðstuðli) og veldu ár. Eða kveiktu á viðbótinni Loftslagsframtíðir og veldu sviðsmynd og ár: flóðið keyrir tvisvar, núverandi við hlið framtíðarinnar (sjá „Loftslagsframtíðir: flóð, hiti og skógareldar 2050 og 2080“). Tegundirnar Váhrif skógarelda og Hiti: framtíðarveðurskrá eru í sama lista.

## Vindur

Þrýstingurinn fylgir ½ρV² með hraðanum sem hækkar með hæðinni; krafturinn á hæð er þrýstingurinn sinnum vindhviðustuðull, þrýstistuðlarnir tveir, breiddin og hæð hæðarinnar. Þú færð skurðkraft, veltimóment og hliðarsveiflu.

## Jarðskjálfti

Skurðbyggingarlíkan: massi á hverja hæð (grunnflötur × kílógrömm á fermetra, sem þú stillir), sami stífleiki í hverri hæð miðaður við fyrsta eiginsveiflutímann sem þú gefur (tíundi úr sekúndu á hæð ef þú skilur hann eftir auðan, og það er sagt til um það), dempun, og búin jarðhreyfing (púls eða síaður hávaði) við hámarkshröðunina sem þú velur. Niðurstaðan er hliðarvik hverrar hæðar, hröðun gólfanna og grunnskúfkrafturinn; útlitið spilar hliðarsveifluna, teiknaða stærri en hún er. Sláðu inn leyfilegt hlutfall hliðarviks og hæðir yfir því eru viðvaranir. Hún er teygjanleg: ekkert gefur sig né springur.

## Stífleiki gólfa úr greiningarrammanum

Fyrir jarðskjálfta eða vindhliðarsveiflu skaltu velja **Greiningarrammann** sem uppsprettu stífleikans í stað þess að slá inn tímabil. Hvert gólf er ýtt til hliðar í röð, rammin (bitar, súlur, stífingar, plötur) er leystur, og stífleiki gólfanna með öllu sem vinnur saman knýr keyrsluna. Þyngdin er eigin þyngd burðarhlutanna auk álags gólfsins á fermetra sem þú stillir í reit hvers gólfs á grunnmynd. Raunverulegi fyrsti eiginsveiflutíminn birtist. Hún er teygjanleg: ekkert gefur sig og snúningur er ekki líkaður. Fyrir vind eru kraftar hverrar hæðar enn forsendukraftar hér fyrir ofan (aflalög, vindhviðustuðullinn þinn og föstu þrýstistuðlarnir, ekki vindstaðall); aðeins hliðarsveiflan kemur úr rammanum, með því að leysa fulla stífleikafylki rammans gegn þessum kröftum. Líkanið þarf IFC með ramma sem flipinn Greining getur lesið.

## Einingar

Vatnsdýpt, hliðarsveifla og viðvik hæð fyrir hæð, vegalengdir og flatarmál birtast í {{ui:Einingar}} sem þú valdir. Kraftar (kN), tímar og hröðun halda sínum eigin einingum, og gildi sem þú slærð inn í reit merktan í metrum helst í metrum. Það sama gildir um niðurstöður rýmingar, dagsbirtu, hita- og kæliálags og innréttinga: lengdir, flatarmál og rúmmál fylgja vali þínu; þrýstingur, rennsli, hitastig, orka og afl eru aldrei umreiknuð.
