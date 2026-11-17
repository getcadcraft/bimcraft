---
title: Useiden IFC-mallien tarkastelu yhdessä
summary: Lisää kohtaukseen IFC-tiedostoja, kuten arkkitehtuuri-, rakenne- ja talotekniikkamalleja, katso ne samoissa koordinaateissa, siirrä yhtä, piilota yksi ja valitse, mitä muokkaat.
keywords: liitä, liitos, liitetty malli, useat mallit, useat tiedostot, yhdistä, päällekkäin, koordinointi, ala, rakenne, talotekniikka, LVIS, siirtymä, siirrä malli, aktiivinen malli, lisää malli
from: df0efbbf
---

## Mitä teet

Tarkastele eri aloilta tulevia malleja yhdessä paikassa: arkkitehdin mallia rakenne- ja talotekniikkamallien kanssa. Jokainen pysyy omana tiedostonaan; BimCraft näyttää ne vain yhdessä.

## Vaiheet

1. Avaa ensimmäinen IFC-malli tavalliseen tapaan.
2. Napsauta vasemmalla olevassa {{ui:Mallit}}-kohdassa {{ui:Lisää malli…}} ja valitse yksi tai useampi IFC-tiedosto. Jokainen ilmestyy luetteloon ja 3D-näkymään.
3. Poista mallin valinta piilottaaksesi sen; valitse se uudelleen näyttääksesi sen.
4. Jos malli tulee väärään kohtaan (eri mittauspiste), napsauta sen alla olevaa {{ui:Siirrä}}-painiketta, kirjoita, kuinka pitkälle mallia siirretään X-, Y- ja Z-suunnassa metreinä, ja napsauta {{ui:Käytä}}.
5. Pisteellä merkitty malli on se, jota muokkaat. Napsauta toisen mallin pistettä muokataksesi sitä.
6. Napsauta mallin vieressä olevaa × poistaaksesi sen kohtauksesta.

## Avaa tiimin mallit

Kun avoin malli on pilvitiedosto tiimiprojektissa, {{ui:Avaa tiimin mallit}} ilmestyy luettelon alle. Se avaa projektin muut IFC-mallit tämän rinnalle, kukin projektin asettaman siirtymän mukaan siirrettynä. Sinulta piilotetut mallit jäävät pois ja lasketaan; malli, jonka projekti kääntää, avataan kääntämättömänä ja se lasketaan myös; muut kuin IFC-tiedostot (esimerkiksi DWG) ohitetaan ja mainitaan tilarivillä. Jo auki oleva malli ei koskaan avaudu kahdesti. Painike on piilossa tiedostolle, joka ei ole tiimiprojektissa.

## Mitä pitäisi nähdä

- Jokainen malli ensimmäisen mallin koordinaateissa, sellaisena kuin sen tiedosto ne asettaa. Samasta projektista viedyt mallit asettuvat kohdalleen ilman siirtämistä.
- Kun valitset muokkaamattomasta mallista elementin, sen ominaisuudet näkyvät vain luettavina, ja {{ui:Muokkaa tuota mallia}} vaihtaa malliin.
- {{ui:Mallipuu}}, {{ui:Kerrokset}}, {{ui:Väri}}, {{ui:Muutokset}}-luettelo, kirjastokohteiden sijoittaminen ja {{ui:Tallenna IFC-tiedostona}} toimivat muokattavan mallin kanssa. Piilotus, eristys, läpinäkyvyys ja {{ui:Valitse kaikki}} toimivat kaikissa malleissa.
- {{ui:Tallenna IFC-tiedostona}} lataa muokattavan mallin vain sen muutoksineen.

## Yleisiä virheitä

- **Malli on kaukana tai puuttuu.** Sen tiedosto käyttää muita koordinaatteja. Etsi se {{ui:Sovita}}-painikkeella ja siirrä se paikoilleen {{ui:Siirrä}}-painikkeella.
- **Poista tai Kopioi on harmaana valitussa elementissä.** Se kuuluu toiseen malliin: vaihda ensin siihen.
- **Tiedoston avaaminen painikkeella Valitse tiedosto korvasi kaiken.** Se aloittaa uuden kohtauksen. Lisää tiedostoja olemassa olevaan {{ui:Lisää malli…}}-painikkeella.

## Seuraavaksi

- [Piilota, eristä ja tee elementit läpinäkyviksi](topic:hide-and-isolate)
- [Väritä elementit ominaisuuden mukaan](topic:color-by-property)
