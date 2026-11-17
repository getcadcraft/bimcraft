---
title: Sisäjulkisivut
summary: Tee yksi arkki, joka näyttää huoneen neljä seinää sisältä päin mitoituksineen ja tunnisteineen, ja tallenna se PDF-tiedostona.
keywords: sisäjulkisivu, huone, seinä, kaappi, keittiö, julkisivu, arkki, PDF, mitoitus, tunniste, tila, A-501
from: 1e3a70a8
---

## Mitä teet

Valitset huoneen ja saat yhden arkin, joka näyttää sen neljä seinää niin kuin ne näkyisivät, kun seisot huoneen sisällä. Se on tehty keittiöille, kylpyhuoneille ja muille huoneille, joissa pitää nähdä kaappien, ovien ja ikkunoiden sijainti kullakin seinällä.

## Tee arkki

1. Valitse huone. Pohjakuvassa, kun {{ui:Piirrä}} on päällä, napsauta huoneen sisällä. 3D-näkymässä tai mallipuussa valitse tila (IfcSpace).
2. Napsauta **Ominaisuudet**-paneelissa {{ui:Sisäjulkisivut…}}.
3. Valintaikkuna avautuu arkin kanssa.
4. Napsauta {{ui:Lataa PDF}} tallentaaksesi sen. Tiedoston nimi on "<file> — Interior elevations — <room>.pdf" ja se on vektori-PDF.
5. Napsauta {{ui:Sulje}}, kun olet valmis.

## Mitä arkki näyttää

Arkissa on neljä näkymää kahdessa rivissä ja kahdessa sarakkeessa, yhdessä mittakaavassa: suurin vakiomittakaava, joka mahtuu. Ne ovat **Pohjoisseinä**, **Itäseinä**, **Eteläseinä** ja **Länsiseinä**. Piirustusotsikossa on arkkinumero A-501, otsikko ”Sisäjulkisivut — ” huoneen numeron ja nimen kanssa, projekti ja päivämäärä.

Jokainen näkymä leikataan huoneen keskeltä ja katsoo sen puolen seinää. Sivuseinät ja niihin leikatut kohteet, kuten ikkuna, näkyvät harmaana leikkauspoché-alueena näkymän ympärillä. Näkymä päättyy heti seinän pinnan jälkeen, joten seinän takana oleva ei näy.

Jokaisessa näkymässä on:

- huoneen leveys näkymän alla, sisäpinnasta sisäpintaan;
- huoneen korkeus näkymän vieressä, lattiasta yläpuolella olevaan tasoon;
- neliön muotoinen tunniste jokaiseen oveen ja kuusikulmainen tunniste jokaiseen ikkunaan kyseisellä seinällä, merkinnällä (D1, W1 ja niin edelleen);
- ympyrätunniste, jossa on kohdenumero, jokaiselle kirjastokohteelle, joka on sijoitettu tämän seinän eteen: kaapit, kiinteät laitteet ja varusteet.

:::note
Näkymät tehdään mallista joka kerta, kun avaat valintaikkunan, joten ne vastaavat aina mallia. Siirrä kaappi ja avaa valintaikkuna uudelleen.
:::

## Omilla arkeillasi

Jokainen huoneen seinä on myös näkymä, jonka voit asettaa itse tekemällesi arkille: valitse projektiselaimessa {{ui:Uusi arkki}} ja lisää kohdassa **Sisäjulkisivut** ”101 Keittiö — Pohjoisseinä” ja muut. Se tulee samoilla mitoituksilla ja tunnisteilla.

## Ei vielä toteutettu

Sisäjulkisivut luoduissa piirustussarjoissa (ne tulevat huoneen **Ominaisuudet**-paneelista tai omilta arkeiltasi), huoneet, jotka eivät ole enimmäkseen suorakulmaisia (näkymä näyttää neliömäiseltä huoneen laatikon kummallakin sivulla), piirtäminen, huomautukset tai omat mitoitukset niissä sekä se, mitkä seinät näytetään. Katso [Mikä ei vielä toteutettu](topic:not-built-yet).
