---
title: Malli skannauksesta
summary: Lyhyt opas laserskannauksesta seiniin: avaa pistepilvi uuden rakennuksen rinnalle, kohdista se tasolle ja jäljitä sen seinät pohjakuvaan.
keywords: skannaus, laserskannaus, pistepilvi, toteutunut, olemassa oleva rakennus, mittaus, jäljitys, skannauksesta BIM:ään, malli skannauksesta, viipale, kohdistus, suoristus, LAS, LAZ, E57, PLY
from: ce3b9b37
---

## Mitä tehdään

Piirrä olemassa oleva rakennus sen laserskannauksesta: seinät sinne, missä skannaus ne näyttää, oikealle tasolle ja suorassa toisiinsa nähden.

## Vaiheet

1. **Rakennus, johon piirretään.** {{ui:Tiedosto}} › {{ui:Uusi rakennus}}, niin monella tasolla kuin rakennuksessa on (tasoja voi lisätä myöhemmin, ks. [Tontti, sen rakennus ja sen tasot](topic:site-building-and-levels)). {{ui:Piirrä}} kytkeytyy päälle.
2. **Skannaus.** {{ui:Näytä}} › {{ui:Pistepilvi}} ja valitse tiedosto (LAS, LAZ, E57, PLY, PCD, PTX tai XYZ: ks. [Näytä pistepilvi mallin rinnalla](topic:point-clouds)). Pistepilvi näkyy 3D-näkymässä, ja pohjakuvassa näkyy sen **viipale**: skannatut pisteet 1200 mm (4 jalkaa) tason yläpuolella pisteinä. Tämä on korkeus, jolla seinät, ovet ja ikkunat erottuvat parhaiten.
3. **Kohdista taso.** Avaa mallipalkin {{ui:Scan}}-valikko ja valitse {{ui:Kohdista lattia tähän tasoon}}: pistepilvi siirtyy ylös tai alas, kunnes skannattu lattia on näytetyllä tasolla. Tarkista, että viipale leikkaa nyt seinät.
4. **Suorista rakennukseen nähden.** {{ui:Skannaus}} › {{ui:Käännä se suoraksi rakennukseen nähden}} kääntää pistepilveä niin, että sen viipaleen seinät kulkevat pohjakuvan akselien suuntaisesti. Kun {{key:Shift}} on pohjassa, piirtämäsi seinät ovat silloin linjassa skannauksen kanssa. Kääntö tapahtuu löydettyjen seinien keskikohdan ympäri, joten viipaleeseen osuvat puut tai naapurin seinä eivät heitä skannausta pois. Kohdista lattia ensin: silloin viipale leikkaa seinät.
5. **Jäljitä seinät.** Valitse {{ui:Seinä}} ja napsauta pisteiden kohdalta: työkalu tarttuu skannattuihin pisteisiin (tartuntamerkki on pieni timantti) sekä piirtämiisi seiniin. Seinä piirtyy keskiviivalleen, joten napsauta kahden seinän jättämän pisterivin keskikohdasta; anna paksuus valitsemalla ensin seinätyyppi. Lisää sitten ovet ja ikkunat niihin kohtiin, joissa viipale näyttää aukot.
6. **Seuraava taso.** Valitse pohjakuvan tasoluettelosta ylempi taso: viipale seuraa tason leikkauskorkeutta. Kohdista lattia tuohon tasoon uudelleen vain, jos skannauksen lattiat eivät ole tasojesi kohdalla.

## Mitä pitäisi näkyä

- Viipale muuttuu tasoa vaihtaessasi, ja paksumpi viipale ({{ui:Scan}} › {{ui:Viipaleen paksuus}}) näyttää enemmän pisteitä siellä, missä skannaus on harva.
- {{ui:Scan}} › {{ui:Kumoa kohdistus}} palauttaa pistepilven siihen kohtaan, johon se sijoitettiin avattaessa. Kohdistus siirtää pistepilveä vain näkymässä: sitä ei tallenneta IFC-tiedostoon, eikä piirtämäsi seinät liiku. Kohdistus seuraa pistepilveä, kun vaihdat {{ui:Sijoita}}- tai {{ui:Yksiköt}}-asetusta tai avaat toisen mallin.
- {{ui:Scan}} › {{ui:Näytä viipale pohjakuvassa}} piilottaa tai näyttää pisteet.

:::tip
Suuret skannaukset: pohjakuva piirtää enintään 60 000 viipaleen pistettä ja 3D-näkymä muutaman miljoonan pistettä koko pistepilvestä, molemmat tasaisesti valittuina koko skannauksesta, joten suuri tiedosto pysyy nopeana. Jäljittääksesi piirtosovelluksessa käytä pistepilvipalkin {{ui:Jäljitä CadCraftissa}}-painiketta.
:::
