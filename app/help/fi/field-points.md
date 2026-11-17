---
title: Asettamispisteet ja toteumatarkistukset
summary: Numeroi kohdat, jotka työryhmä merkitsee maastoon mallista (pilarien keskipisteet, seinien päät, ankkuripultit, holkit tai mikä tahansa valitsemasi rakennusosa), kirjoita ne kokoasemalle, lue työryhmän toteumapisteet takaisin ja katso, mikä ei täsmää.
keywords: asettamispisteet, asettaminen, maastoon merkintä, kokoasema, mittaus, pistetiedosto, csv, txt, pnezd, penzd, xyz, pohjoinen, itä, korkeus, toteuma, tarkistus, toleranssi, poikkeama, ankkuripultit, pilarien keskipisteet, seinien päät, holkit, mittauskoordinaatit, karttamuunnos
from: acea9606
---

Oikealla oleva {{ui:Points}}-välilehti tekee pisteet, jotka työryhmä merkitsee maastoon avoimesta mallista, ja tarkistaa pisteet, jotka he mittaavat jälkikäteen.

## Tee pisteet

1. Avaa IFC-malli ja {{ui:Points}}-välilehti.
2. Valitse, mitkä kohdat merkitään maastoon: **pilarien keskipisteet** (kunkin pilarin keskiviivan jalka), **seinien päät** (seinän akselin molemmat päät pohjassa), **ankkuripultit**, **holkit** (elementit, joiden nimi tai tyyppi sisältää sanan sleeve) ja **valitut elementit** (kukin sijoituspisteessään). Valitse elementit ensin näkymästä.
3. Valitse ensimmäinen numero ja etuliite, koordinaatit, yksiköt, sarakkeet ja tiedosto:
   - **Malli**: tiedoston omat koordinaatit. **Karttaruudukko**: mallin georeferoinnin karttaruudukko (näytetään vain, jos IFC:ssä on karttamuunnos), metreinä tai valitsemassasi yksikössä.
   - Sarakkeet **PNEZD** (piste, pohjoinen, itä, korkeus, kuvaus), **PENZD** tai **XYZ**. Tiedostomuotona **CSV** (pilkut) tai **TXT** (tabulaattorilla erotettu).
4. Paina {{ui:Make points}}. Luettelo näyttää pisteet, ja näkymä merkitsee ne sinisellä. {{ui:Download the points}} kirjoittaa tiedoston.

Pisteet tulevat kiinteässä järjestyksessä: lajin mukaan, sitten riveittäin pohjakuvassa. Sama malli tuottaa siis samat luvut, kun pisteet tehdään uudelleen. Tiedosto on sitä muotoa, jonka CivilCraft avaa ja jonka CadCraft-ohjelman EXPORTPOINTS-komento kirjoittaa: yksi piste riviä kohden, kolme desimaalia, ja kuvaus lainausmerkeissä, jos siinä on pilkku.

## Tarkista toteumapisteet

Kun työryhmä lähettää mitatut pisteet takaisin, valitse **toleranssi** millimetreinä ja tapa, jolla pisteet parittetaan. Parittaminen tehdään joko **pistenumeron** mukaan (he säilyttivät numerosi) tai **lähimmän mittauksen** mukaan. Paina sitten {{ui:Read as-built points…}}. Lue tiedosto samoissa yksiköissä ja koordinaateissa, joilla kirjoitit sen.

Kukin suunnittelupiste on sitten **toleranssin sisällä**, **toleranssin ulkopuolella** tai **ei mitattu**. Jokainen mittaus, jota kukaan ei pyytänyt, on **ylimääräinen**. Taulukko antaa erot yksikössä, jonka valitset työkalupalkista. Jalat näytetään desimaalituumina. Erot lasketaan toteuma miinus suunnitelma: itä, pohjoinen, korkeus ja etäisyys pohjakuvassa. Näkymä merkitsee kunkin pisteen vihreällä tai punaisella, ja viiva yhdistää sen mittaukseen. Mittaamaton piste on harmaa. {{ui:Report (CSV)}} kirjoittaa koko vertailun.

Mikään tässä ei muuta mallia.

**Ei vielä toteutettu:** asettaminen laatan reunoista, ruudukkoleikkauksista tai aukoista, joita ei tehdä puolestasi, sekä pisteiden lähettäminen suoraan mittauslaitteelle. Käytä tiedostoa.
