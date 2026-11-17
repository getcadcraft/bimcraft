---
title: Huoneet, lattiat, alakatot ja katot
summary: Huoneet syntyvät, kun seinät sulkevat tilan. Anna huoneelle tai koko rakennukselle lattia ja alakatto ja aseta seinille aumakatto tai harjakatto. Kaikki seuraavat seinien siirtyessä.
keywords: huone, huoneet, tila, pinta-ala, piiri, lattia, laatta, alapohja, alakatto, katto, aumakatto, harjakatto, kaltevuus, ulkonema, räystäs, harja, laakso, 6/12
from: 1fb1813c
---

## Mitä teet

Viimeistele rakennuksen runko. Huoneet syntyvät seinistä itsestään; lattia, alakatto ja katto valmistuvat yhdellä napsautuksella kukin. Koska ne muodostuvat seinistä, ne seuraavat seinien siirtymistä.

## Huoneet

Jokainen piirretyillä seinillä suljettu tila on huone. Huone ilmestyy heti, kun viimeinen seinä sulkee sen. Sille annetaan numero (101, 102 … ensimmäisessä kerroksessa, 201 … seuraavassa) ja nimi (**Huone 1**, **Huone 2** …), ja sen pinta-ala näkyy pohjakuvassa huoneen keskellä.

- Kun {{ui:Valitse}} on päällä, napsauta huoneen sisältä valitaksesi sen. Muuta **Ominaisuudet**-kohdassa sen **Nimi** (esimerkiksi `Keittiö`) ja **Numero**; pinta-ala ja piiri näkyvät.
- Poista kahden huoneen välinen seinä, niin niistä tulee yksi huone; piirrä seinä huoneen yli, niin siitä tulee kaksi. Huone säilyttää nimensä ja numeronsa, kun sitä ympäröivät seinät siirtyvät.
- Huonetta ei voi poistaa yksinään: se on seinien muodostama tila.

Pinta-alat mitataan seinien pintojen sisäpuolelta. Huoneet tallennetaan IFC-tiloina niiden lattiapinta-alan, piirin, korkeuden ja tilavuuden kanssa, joten taulukot lukevat ne (katso [Laske yhteen määriä, luettele elementit ja tee tilataulukko](topic:quantity-totals)).

## Lattiat

1. Napsauta {{ui:Lattia}}.
2. Valitse **Tämä huone** tai **Koko rakennus**, **Laji** (puulattia tai betonilaatta) ja paksuus.
3. Osoita huoneen sisälle (tai minne tahansa rakennuksen sisälle). Lattian peittämä alue korostuu pinta-alan kanssa.
4. Napsauta. Lattian yläpinta on tason lattia; lattia menee alaspäin paksuutensa verran. Koko rakennuksen lattia ulottuu seinien ulkopintoihin asti.

## Alakatot

1. Napsauta {{ui:Alakatto}}.
2. Valitse **Tämä huone** tai **Koko rakennus** ja **Korkeus** lattiasta.
3. Osoita sisälle ja napsauta.
4. Nähdäksesi sen alhaalta, ruudukon ja valaisimien kanssa, vaihda pohjakuva alakattokuvaan: katso [Näkymät, näkymäalueet ja omat arkit](topic:views-and-sheets).

## Katto

1. Sillä tasolla, jonka seinät kantavat katon, napsauta {{ui:Katto}}.
2. Kirjoita **Kaltevuus** nousuna 12:ta kohti (`6/12`) tai asteina (`30`), ja **Ulkonema**.
3. Valitse **Päät**: **Aumakatto** (jokainen sivu kallistuu), **Harjapäädyt lyhyillä sivuilla** tai **Harjapäädyt pitkillä sivuilla** (neljän sivun rakennus), tai **Pulpettikatto**.
4. Osoita rakennuksen sisälle: räystäs ja harja näkyvät pohjakuvassa. Napsauta.

Katto on seinien päällä, seuraavalla tasolla, ja sen alapinta osuu seinien ulkopintaan. Harjapäädyt täytetään harjaseinällä, joka on yhtä paksu kuin alla oleva seinä. L-, T- tai U-muotoisen rakennuksen katto on aumakatto, jonka siivet kohtaavat laaksoissa.

## Muuta niitä

Valitse lattia, alakatto tai katto (3D-näkymästä, mallipuusta tai napsauttamalla katon ääriviivan sisältä tason yläpuolella) ja muuta sitä **Ominaisuudet**-kohdassa: lattian laji, paksuus ja yläpinnan korkeus tasosta; alakaton korkeus, paksuus ja **Kuvio** (ruudukko, jonka alakattokuva piirtää siihen: ei mitään, 600 × 600, 600 × 1200, 2' × 2' tai 2' × 4'); katon kaltevuus, ulkonema, päät ja paksuus. Jokainen muutos on yksi kumoamisvaihe.

## Anna lattialle, alakatolle tai katolle tyyppi kerroksilla

Lattialle, alakatolle ja katolle voi antaa **tyypin**, kuten seinälle: nimetyn rakennekerrosten kokonaisuuden, jossa jokaisella kerroksella on oma materiaali ja todellinen paksuus.

- **Kun sijoitat.** Lattia-, Alakatto-, Katto- ja Piirrä lattia -työkaluilla on rivillään **Tyyppi**-luettelo. **Ei tyyppiä** sijoittaa elementin kuten ennenkin, omalla paksuudellaan. Tyyppi sijoittaa sen yhtä paksuna kuin tyypin kerrokset yhteensä.
- **Myöhemmin.** Valitse lattia, alakatto tai katto ja valitse **Tyyppi** kohdassa Ominaisuudet. Elementti pysyy samana elementtinä: sen paikka, huone ja tiedot säilyvät, eikä mitään piirretä uudelleen. Vain sen tyyppi, paksuus ja materiaali muuttuvat. Näin luonnosvaiheen elementistä tulee kehitetty elementti: vaihda yleinen tyyppi todelliseen tyyppiin.
- **Muokkaa tyyppiä…** avaa tyyppieditorin: kerrokset **ylhäältä** alaspäin, ydin, kunkin kerroksen tehtävä ja tyypin LOD-merkintä. Tallennus muuttaa kaikkia tyypin elementtejä yhdellä kerralla, ja yksi Kumoa palauttaa muutoksen. Aloitustyypin muuttaminen tallentaa kopion omaksi tyypiksesi.
- Kun elementillä on tyyppi, sen **Paksuus** on tyypin paksuus eikä sitä voi kirjoittaa. Muuta sitä valitsemalla toinen tyyppi tai **Ei tyyppiä**.

Aloitustyyppejä on kullekin yksi **yleinen** tyyppi (yksi kerros yleistä materiaalia, merkintä LOD 200) ja kaksi kerrostyyppiä (merkintä LOD 300): puurakenteinen välipohja ja betonilattia tasoitteella; puinen katto ja betoninen tasakatto; kipsilevyalakatto ja riippuva laattakatto. Ne ovat lähtöarvoja, eivät testattuja rakenteita: tarkista kerrokset ennen kuin luotat niihin.

Taulukko **Kerrokset: pinta-ala ja tilavuus** luettelee kaikki käytössä olevien tyyppien kerrokset; katso [Taulukot, mitoitus ja PDF](topic:plan-schedules-and-pdf). Lattia-, katto- ja alakattotyypit siirtyvät projektien välillä tyyppipaketissa tai kirjastokohteena; katso [Tyyppipaketit](topic:type-packs).

## Hyvä tietää

- Seinien siirtäminen, lisääminen tai poistaminen tekee huoneet, lattiat, alakatot ja niiden päällä olevan katon uudelleen.
- Katto sopii mihin tahansa ääriviivaan. Jos haluat antaa jokaiselle seinälle oman kaltevuuden, päädyn tai pulpettikaton, korotetun pohjapuun, räystäslaudan ja alalaudan tai piirtää yksittäisen kattotason, katso [Katot: kaltevuus jokaiselle seinälle, harjapäädyt, pulpettikatot ja kattotasot](topic:roofs).
- {{key:Delete}} poistaa valitun lattian, alakaton tai katon.
