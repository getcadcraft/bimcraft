---
title: Kirjaston tekijätiedot ja kirjautuminen kirjastoon
summary: Katso jokainen mallissa käytetty kirjastokohde lisenssinsä ja lähdemerkintänsä kanssa, kopioi tekijätiedot tai lataa ne luettelon kanssa ja kirjaudu sisään nähdäksesi tiimisi kohteet.
keywords: tekijätiedot, lähdemerkintä, lisenssi, CC BY, CC0, tekijänoikeus, tiimin kirjasto, kirjaudu sisään, yhdistä, tunnus, laiteluettelo, csv
from: 81971658
---

## Mitä teet

Annat tunnustuksen siellä, missä lisenssi sitä vaatii, ja pääset tiimisi omiin kirjastokohteisiin.

## Kirjaston tekijätiedot

1. Avaa malli.
2. Napsauta työkalurivillä {{ui:Tekijätiedot}}.
3. Lue luettelo: jokainen käytetty kohde, sen versio, lisenssi, lähdemerkintä ja kohdenumerot, joille se on sijoitettu.
4. Napsauta {{ui:Kopioi tekijätiedot}} kopioidaksesi lähdemerkintärivit tai {{ui:CSV luettelon kanssa}} saadaksesi laskentataulukon jokaisesta sijoituksesta sen tekijätietoineen.

Lisenssi ja lähdemerkintä näkyvät myös {{ui:Ominaisuudet}}-kohdassa, kun valitset sijoitetun kohteen. Ne tallennetaan IFC-tiedostoon (`CadCraft_LibraryItem`), joten ne kulkevat tiedoston mukana.

## Mallin laiteluettelo

Napsauta työkalurivillä {{ui:Laitteet}}. Luettelo rakennetaan sijoitetuista kirjastokohteista: kohdenumero, määrä, nimi, valmistaja, malli, sähkö- ja LVI-tiedot, ryhmiteltynä kerroksittain. Se ladataan samana CSV-tiedostona kuin piirustuksen luettelo.

## Kirjaudu kirjastoon

1. Valitse {{ui:Kirjasto}}-välilehdessä **Kirjasto**.
2. Napsauta {{ui:Kirjaudu kirjastoon}}. Pieni ikkuna aukeaa tällä sivustolla.
3. Kirjaudu sisään, jos sitä pyydetään, ja napsauta **Yhdistä**. Ikkuna antaa BimCraftille kirjastoavaimen, ja voit sulkea sen.

## Mitä pitäisi näkyä

- ”Kirjautunut kirjastoon” Kirjasto-luettelon yläosassa. Tiimisi kohteet näkyvät julkisten kohteiden vieressä.
- Sijoittamasi kohteet kirjataan käytetyiksi, jotta kirjasto voi kertoa, kun ne muuttuvat.

## Hyödyllistä tietoa

- Avain säilytetään vain tässä välilehdessä, ja se päättyy, kun suljet sen. {{ui:Unohda kirjautuminen}} poistaa sen aiemmin.
- Tilisi suojaussivu luettelee avaimen nimellä ”BimCraft library (browser)”; peruuta se siellä.
- Mallistasi ei lähetetä mitään: vain se, mitkä kirjastokohteet sijoitit.
