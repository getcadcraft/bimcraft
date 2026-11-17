---
title: Vaihda sijoitettu kohde ja päivitä kirjaston kohteet
summary: Korvaa yksi sijoitettu kirjastokohde toisella säilyttäen sen paikan ja kohdenumeron, ja tarkista Kirjastosta uudemmat versiot kaikista mallin kohteista.
keywords: vaihda, korvaa, korvike, päivitä, uudempi versio, tarkista päivitykset, kirjasto, poistettu, lisenssin muutos, kohdenumero
from: 8bdfe01d
---

## Mitä teet

Vaihda mielesi kohteesta siirtämättä sitä uudelleen, ja pidä mallin kirjaston kohteet ajan tasalla.

## Vaihda yksi kohde

1. Napsauta sijoitettua kirjastokohdetta mallissa.
2. Napsauta **Ominaisuudet**-kohdassa **Kirjaston kohde** -ruudussa {{ui:Vaihda kohde…}}. {{ui:Kirjasto}}-välilehti avautuu.
3. Etsi uusi kohde ja napsauta sen korttia.
4. Napsauta {{ui:Vaihda … tähän}}.

Elementti säilyttää paikkansa, kiertonsa, kerroksensa, kohdenumeronsa, määränsä ja muistiinpanonsa. Sen tyyppi, muoto ja kohteen tiedot vaihtuvat uuden kohteen mukaan. Samalla tavalla sijoitetut kohteet jakavat yhden tyypin, samoin kuin sijoittaessa.

Kohteella, jossa on muunnelmia (katso [Sijoita ja vaihda kirjastokohde, jolla on muunnelmia](topic:library-variants)), luetellaan sen muut muunnelmat {{ui:Kirjasto}}-välilehden yläosassa, kun vaihdat sen: yksi napsautus kutakin kohti.

Kun uusi kohde on eri tyyppinen asia, esimerkiksi pesuallas pöydän sijaan, elementin IFC-luokka vaihtuu vastaamaan sitä (tässä kalusteesta saniteettipäätteeksi), jotta muut ohjelmat aikataulutavat sen oikein. Se on sama elementti samalla GlobalId:llä, joten siihen osoittavat linkit toimivat edelleen. {{key:Mod+Z}} palauttaa vanhan luokan ja vanhan kohteen.

## Tarkista päivitykset

1. Napsauta työkalurivin {{ui:Päivitykset}}-painiketta (tai kirjaston kohteen ruudun {{ui:Tarkista päivitykset}}-painiketta).
2. Lue luettelo: jokainen mallin kirjaston kohde versioineen mallissa, uusin versio ja tila: **Ajan tasalla**, **Uudempi versio**, **Poistettu käytöstä** tai **Ei löytynyt**. Siinä kerrotaan myös, mitä muuttui (geometria, tiedot, lisenssi tai korjaus).
3. Napsauta riviltä {{ui:Päivitä}} tai {{ui:Päivitä kaikki}}.

## Mitä pitäisi näkyä

- ”Päivitettiin *n* sijoitusta. Sijoitukset, kohdenumerot, määrät ja muistiinpanot säilyvät.”
- Muutosluettelossa rivit ”Päivitetty: *kohde*”. {{key:Mod+Z}} kumoaa jokaisen niistä.

## Hyvä tietää

- Vain kirjastosta peräisin olevat kohteet voidaan tarkistaa. Tiedostoista tulevilla kohteilla ei ole kirjastotunnusta.
- Kun lisenssi on muuttunut, jo sijoitettu kopio säilyttää lisenssinsä, kunnes päivität sen.
- **Poistettua käytöstä** -kohdetta ei tarjota uusiin sijoituksiin. Tekijänoikeussyistä poistettua kohdetta ei voi ladata lainkaan; korvaa se {{ui:Vaihda kohde…}}-toiminnolla.
- Sijoitettu muunnelma säilyy samana muunnelmana, jos uudemmassa kohteen versiossa se vielä on. Muuten se ottaa kohteen oletusmuunnelman.
- Tarkistus lähettää vain kohteiden tunnukset ja versiot, ei koskaan mallia.
