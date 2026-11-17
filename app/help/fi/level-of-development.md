---
title: Kehitystaso (LOD) ja välitavoitetarkistukset
summary: Anna elementeille kehitystaso, katso mistä se tulee, tarkista malli välitavoitteen vaatimaa LOD-tasoa vastaan sekä korjaa puuttuvat tunnisteet ja nimettömät huoneet. Jokainen tarkistus neuvoo; mitään ei estetä.
keywords: lod, kehitystaso, lod 100, lod 200, lod 300, lod 350, lod 400, lod 500, välitavoite, välitavoitetaulukko, mallintarkastukset, puuttuvat tunnisteet, nimettömät huoneet, varhainen yleisyys, IFC-luokka, luokitus
from: 2091c79b
---

## Mitä teet

Määritä, kuinka pitkälle kukin elementti on kehitetty, ja tarkista sitten koko malli sen mukaan, mitä projektin välitavoite vaatii.

## Vaiheet

1. Valitse elementti (tai useita) ja avaa {{ui:Ominaisuudet}}. Etsi {{ui:Kehitystaso}}.
2. Valitse taso luettelosta. Jokainen taso on nimetty sen mukaan, mitä se tarkoittaa, ja jokainen sisältää sitä alemmat. Yksi Kumoa-vaihe kumoaa koko valinnan.
3. Lue, mistä taso tulee: tästä elementistä, sen tyypistä vai kenttätarkistetusta merkinnästä.
4. Tarkistaaksesi mallin avaa vasemmalla {{ui:Mallintarkastukset}} ja sen jälkeen {{ui:LOD-välitavoitteet}}. Valitse välitavoite ja taulukko (aloitustaulukko tai oma CSV- tai JSON-tiedostosi, jonka lataat kohdasta {{ui:Kuorma}}).
5. Valitse {{ui:Tarkista malli}}. Yhteissummat ja rivi jokaiselle taulukon riville näyttävät, mikä on saavuttanut tasonsa ja mikä ei. Havainnot näkyvät myös luettelossa {{ui:Ongelmat}}.
6. Kohdassa {{ui:Puuttuvat tunnisteet ja nimettömät huoneet}} valitse {{ui:Etsi ne}}, muokkaa ehdotuksia tarvittaessa ja valitse {{ui:Käytä}}.

## Mitä pitäisi näkyä

- Elementille valitsemasi taso sekä sen IFC-luokka ja luokituskoodit sen vieressä.
- Välitavoitteen summat ja rivit. Taulukko ei koskaan muuta tason merkitystä: mittakaava on kiinteä, ja taulukko kertoo vain, mitä tasoa välitavoite vaatii.
- "Pysy yleisenä varhaisessa vaiheessa": neuvo pitää elementit yleisinä varhaisessa välitavoitteessa. Se on pelkkä neuvo.

## Hyvä tietää

- Mikään täällä ei estä työskentelyä. Malli, joka on alle välitavoitteen vaatiman tason, luetellaan, eikä sitä hylätä.
- Tason kolme osaa (geometria, tieto, dokumentointi) voidaan asettaa kukin erikseen. Merkki kertoo, onko taso saavutettu, alle tason vai ei ilmoitettu.
