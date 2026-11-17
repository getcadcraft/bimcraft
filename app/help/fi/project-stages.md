---
title: Hankkeen vaiheet, lähtötiedoista työmaaohjeisiin
summary: Aloita lähtötiedoista tavoitealueineen ja näe piirtäessäsi, täyttyykö tavoite vai jääkö alle. Vertaa konseptivaihtoehtoja tavoitteeseen, liitä specifikaatiot ja detaljit tyyppeihin, tarkista valmistuspiirustukset ja kirjaa työmaaohjeet rakennusosiin.
keywords: lähtötiedot, tilaohjelma, tavoitealue, täyttyy, alle, huoneet, konseptivaihtoehdot, vaihtoehdot, massoittelu, budjetti, specifikaatio, spec, detalj, rakennedetalj, tyyppi, valmistuspiirustus, tarkistus, hyväksy, uudelleen lähetys, työmaaohje, revisio, syy, työmaa, vaihe
from: 0a49b852
---

## Mitä teet

Käyt hankkeen vaiheet läpi yhdessä paneelissa: kirjoitat asiakkaan lähtötiedot huoneina tavoitealueineen, vertaat konseptivaihtoehtoja niihin, pidät specifikaation ja rakennedetaljit niiden tyyppien yhteydessä, joihin ne kuuluvat, tarkistat valmistuspiirustukset niiden palatessa urakoitsijoilta ja kirjaat työmaaohjeet rakennusosiin, joita ne muuttavat.

## Vaiheet

1. Avaa vasemmasta paneelista **Hankkeen vaiheet** ja sitten **Lähtötiedot**.
2. Liitä huoneet, yksi riviltä: `Olohuone; 1; 30` tarkoittaa yhtä 30 m² huonetta. Lukumäärän voi jättää pois. Valitse **Lisää huoneet**. Täytä asiakas, kohde, budjetti, toleranssi ja ohjelma ja valitse sitten **Tallenna lähtötiedot**.
3. Piirrä seinät. Jokainen seinien muodostama huone, jolla on lähtötiedon huoneen nimi, lasketaan mukaan (sen perässä oleva numero, kuten ”Makuuhuone 2”, ei vaikuta). **Tilaluettelo** näyttää **Täyttyy**, **Alle**, **Yli** tai **Ei piirretty**, ja erotuksen m²:nä.
4. Aloittaaksesi uuden hankkeen tällä tavalla valitse **Aloita uusi hanke lähtötiedoista**. Se avaa uuden mallin, pohjana jokin tallentamistasi malleista, jos valitset sellaisen, ja lisää lähtötiedot ensimmäiseksi vaiheeksi.
5. Avaa **Vaihtoehdot lähtötietoja vasten**. Jokainen mallissa säilytetty massoitteluvaihtoehto piirtyy samassa mittakaavassa bruttoalansa, lähtötietojen vaatiman alan ja sen kanssa, montako lähtötietojen huonetta siihen mahtuu. **Pinoa lähtötiedot tähän** sijoittaa huoneet vaihtoehdon kerroksiin alimmasta alkaen ja kertoo, mikä ei mahdu. Kustannus tulee vain hankkeen hintataulukosta; ilman vastaavaa riviä lukee ”Ei hintaa”.
6. Avaa **Tyypit, specifikaatiot ja detaljit**. Jokainen seinä-, ovi-, ikkuna- ja lattiatyyppi näyttää, onko siinä specifikaatioteksti, siihen liitetyt detaljit ja missä specifikaatio, luettelot ja piirustusarkit ovat ristiriidassa. **Liitä detalji** lisää DetailCraft- tai CadCraft-tiedoston, osoitteen tai tämän mallin arkin.
7. Avaa **Valmistuspiirustukset**. Valitse mallista elementit, joita valmistuspiirustus koskee, ja valitse sitten **Vastaanota**. Käytä **Hyväksy**, **Hyväksytty huomautuksin** tai **Muuta** tarkastajan nimen ja huomautuksen kanssa. **Lähetetty uudelleen** tekee saman tietueen seuraavan revision ja säilyttää tarkastushistorian. Tila kirjoitetaan myös jokaiseen elementtiin.
8. Avaa **Työmaaohjeet**. Valitse elementit, anna syy sekä sen vaikutus kustannuksiin ja aikatauluun omin sanoin ja valitse **Kirjaa se**. Kun julkaisu on kirjattu, **Selitä muutokset tämän julkaisun jälkeen** kertoo, mitkä muuttuneet elementit ohje kattaa ja mitkä muuttuivat ilman kirjausta.

## Hyvä tietää

- Jokainen vaihe on yksi Kumoa. Mitään ei estetä: lähtötieto, joka ei täyty, tyyppi, joka ei vastaa tekstiään, tai myöhässä oleva valmistuspiirustus on varoitus tai huomautus paneelissa Ongelmat.
- Lähtötietojen huoneet ovat tiloja ilman seiniä. Niillä on tavoite, ei piirretty ala, joten huonetaulukot ja COBie eivät laske niitä piirretyiksi huoneiksi.
- Asettelu vain sijoittaa huoneet kerroksiin alan perusteella. Se ei piirrä seiniä.
- Specifikaatioteksti kirjoitetaan mallista Asiakirjoissa. Täällä sitä verrataan vain mallin omiin mittoihin: standardin lausekkeita ei kirjoiteta puolestasi koskaan.
- Valmistuspiirustukset ja työmaaohjeet ovat tietueita samassa historiassa kuin paneeli Julkaisut ja revisiot, joten molemmat paneelit näyttävät ne.
- Valmistuspiirustuksen tila on jokaisen elementin ominaisuus (`CadCraft_ShopDrawing`), ja työmaaohje on `CadCraft_SiteInstruction`, joten Etsi ja Väritä ominaisuuden mukaan voivat käyttää niitä.
- Kenttätarkistetut merkinnät (vaihe 7) löytyvät ominaisuuksista kohdasta Tarkistus.
