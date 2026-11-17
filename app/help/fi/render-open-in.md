---
title: Avaa malli toisessa ohjelmassa
summary: Tallenna malli USD-tiedostona tai glTF-tiedostona mihin tahansa ohjelmaan, joka lukee niitä, tai avaa se Studiosta tällä tietokoneella olevassa ohjelmassa.
keywords: avaa ohjelmassa, usd, gltf, glb, vienti, renderöintiohjelma, archviz, studio, usdview, lähetä, siirto, paketti, unreal-kansio
from: 0a6559ee
---

Valitse Moottori-luettelosta kohta **Avaa ohjelmassa …** kohteessa {{ui:Renderöi}}, niin malli viedään toiseen ohjelmaan. Mitään ei palaa takaisin malliin.

## Tiedosto mihin tahansa ohjelmaan

- **USD-tiedosto** tallentaa mallin `.usdc`-tiedostona (tai `.usdz`-tiedostona, kun mallissa on kuvia): [sama tiedosto kuin Tallenna USD-tiedostona](topic:usd), materiaaleineen, lampuineen ja kameroineen. Se säilyttää ilmentymät ja tarkat materiaaliarvot. Useimmat renderöijät, pelimoottorit ja katseluohjelmat lukevat USD:tä.
- **glTF-tiedosto (.glb)** tallentaa kevyemmän glTF 2.0 -tiedoston, jossa ovat materiaalit, tekstuurit ja lamput; katso [Lähetä malli renderointiohjelmaan](topic:model-for-rendering), mitä se sisältää ja mitä jättää pois.
- **Unreal-projektikansio (.zip)** tallentaa kansion, jonka [Lähetä malli pelimoottoriin](topic:render-unreal) kirjoittaa, mihin tahansa tietokoneella olevaan projektiin.

Kaikki kolme toimivat selaimessa ja Studiossa.

## Studiossa: avaa ohjelmassa

Studio listaa tällä tietokoneella olevat ohjelmat, jotka voivat avata mallin: usdview, jos se on hakupolulla, ja tietokoneen oman ohjelman kyseiselle tiedostotyypille. Valitse ohjelma, valitse USD tai glTF siinä, missä se lukee molempia, ja napsauta {{ui:Renderöi}}. Studio kirjoittaa paketin uuteen kansioon Asiakirjat-kansion alle (`CadCraft hand-off`; mitään ei korvata, jokainen lähetys saa oman kansionsa) ja käynnistää ohjelman siinä, ja kertoo sitten, missä tiedostot ovat.

| Ohjelma | Lukee parhaiten |
|---|---|
| usdview | USD |
| Tietokoneen oma ohjelma | Mitä tietokoneella on kyseiselle tiedostotyypille |

Studio käynnistää vain tästä kiinteästä luettelosta olevia ohjelmia; se ei aja mitään, mitä sivu pyytää nimeltä, eikä koskaan käynnistä ohjelmaa GNU GPL -lisenssillä (katso [Piirrä kuva toisella ohjelmalla](topic:render-other-program#programs-cadcraft-never-runs)). Mikä tahansa ohjelma, joka lukee USD- tai glTF-tiedostoja, avaa tiedoston kohdasta **Tiedosto mihin tahansa ohjelmaan** yllä.

:::note
Twinmotion, Enscape ja muut visualisointiohjelmat eivät ole luettelossa: CadCraftia ei ole testattu niiden kanssa, eikä se väitä niistä mitään. Tästä tuleva glTF- tai USD-tiedosto on sisäänkäynti; katso huomautukset [liitännäisrenderöijistä](topic:model-for-rendering#enscape-and-other-plug-in-renderers).
:::
