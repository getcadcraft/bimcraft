---
title: Havainnot ja BCF-tiedostot
summary: Tallenna mallin näkymä havaintona (kamera, valitut elementit, piilotetut ja leikkaus), jaa se BCF-tiedostona muille koordinointityökaluille ja avaa niiden BCF-tiedostot nähdäksesi niiden havainnot.
keywords: bcf, bcfzip, havainto, havainnot, aihe, näkymäpiste, törmäysraportti, koordinointi, kommentti, tilannekuva, avaa bcf, tallenna bcf, vienti, tuonti
from: 2a6cf201
---

## Mitä teet

Osoitat mallista ongelman ja säilytät näkymän, joka sen näyttää, ja lähetät sen BCF-tiedostossa, formaatissa jonka muut koordinointityökalut lukevat ja kirjoittavat.

## Vaiheet

1. Avaa IFC-malli ja aseta näkymä: kierrä sen ympäri, valitse mukana olevat elementit, piilota tiellä olevat ja leikkaa leikkaustasolla tai -laatikolla.
2. Napsauta oikealla olevaa {{ui:Havainnot}}-välilehteä ja sitten {{ui:Uusi havainto tästä näkymästä}}.
3. Kirjoita otsikko ja halutessasi kommentti; valitse tila; anna nimesi tai sähköpostiosoitteesi (kirjautuneena tilin nimi täytetään; katso [BimCraftin asetukset](topic:settings#your-name-on-issues)). Napsauta {{ui:Luo havainto}}.
4. Napsauta havainnon kohdalla {{ui:Näytä}}, niin sen näkymä palautuu.
5. Napsauta {{ui:Tallenna BCF}} ladataksesi kaikki havainnot yhtenä `.bcf`-tiedostona.
6. Nähdäksesi jonkun muun tekemät havainnot, napsauta {{ui:Avaa BCF…}} ja valitse hänen `.bcf`- tai `.bcfzip`-tiedostonsa.

## Mitä pitäisi näkyä

- Jokainen havainto luettelossa kuvansa kanssa näkymästä, sen otsikko, tila, tekijä ja päivämäärä.
- {{ui:Näytä}} palauttaa kameran, valitut elementit, sen mikä oli piilotettu (tai ainoat näkyvät kohteet) ja leikkauksen. Elementit löytyvät GlobalId-tunnisteella jokaisesta avoimesta mallista; tilarivi kertoo, jos joitakin ei ole.
- Toisen työkalun leikkaustaso tai -laatikko näytetään, kun se on linjassa mallin akselien kanssa. Kallistetut tai ylimääräiset tasot palautuvat leikkaustilavuutena (enintään 6 tasoa). Havainto säilyttää useiden laatikoiden tilavuuden ensimmäisen laatikon.

## Hyödyllistä tietoa

- Tiedosto on BCF 2.1 ja säilyttää näkymän mallin omissa koordinaateissa, joten muut työkalut asettavat kameran samaan paikkaan.
- Havainnot pysyvät tässä välilehdessä, kunnes tallennat ne. Toisen mallin avaaminen säilyttää luettelon; avaa malli, jota havainnot koskevat, ennen kuin näytät ne.
- Toisen työkalun rinnakkainen (ortogonaalinen) kamera näytetään tämän katselijan perspektiivikameralla, siirrettynä taaksepäin niin, että sama osa mallista täyttää näkymän.

## Yleisiä virheitä

- **Näytä siirsi kameran oudolle paikalle.** Havainto tehtiin toisessa mallissa tai muilla koordinaateilla. Avaa ensin oikea malli.
- **Tiedosto ei avaudu.** Se ei ole BCF-zip-tiedosto tai se on vaurioitunut; tilarivi kertoo syyn.

## Seuraavaksi

- [Piilota, eristä ja tee läpinäkyviksi elementit](topic:hide-and-isolate)
- [Leikkaa IFC-malli leikkaustasolla](topic:section-plane)
