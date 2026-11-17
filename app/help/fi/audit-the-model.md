---
title: Tarkasta malli: huoneet, tunnisteet, LOD, törmäykset ja liittymät
summary: Suorita valmiit tarkistukset nimettömille huoneille, puuttuville tunnisteille, elementeille, jotka ovat alle projektivaiheen vaatiman LOD-tason, eri alojen törmäyksille ja LOD 350 -liittymille. Pelkkä neuvo: mitään ei estetä.
keywords: tarkastus, tarkistus, nimetön huone, puuttuva tunniste, merkintä, lod, kehitystaso, virstanpylväs, vaihe, törmäys, ala, koordinointi, liittymä, lod 350, aukko, ylipalkki, pääty, läpivienti, holkki, putki, kanava, ongelmat, tarkistusraportti, neuvoa antava
from: cc83a14d
---

## Mitä teet

Tarkista koko malli kerralla ennen julkaisua. Tarkastus suorittaa valmiit sääntöjoukot ja asettaa löydökset {{ui:Ongelmat}}-luetteloon neuvoina. Mitään ei estetä: korjaat löydöksen tai hyväksyt sen perusteluineen kuten minkä tahansa muun ongelman.

## Vaiheet

1. Avaa {{ui:Mallintarkastukset}} › {{ui:Tarkastus}} vasemmasta paneelista tai {{ui:Työkalut}} › {{ui:Tarkasta malli…}} (kirjoitettuna: `AUDIT`).
2. Valitse {{ui:Projektivaihe}}. Se on sama vaihe kuin piirustuksen tiedoissa.
3. Valitse sääntöjoukot, jotka ajetaan.
4. Napsauta {{ui:Suorita tarkastus}}.
5. Lue kunkin sääntöjoukon rivi ja avaa sitten {{ui:Avaa Ongelmat-luettelo}}. Löydöksen napsautus valitsee sen elementin.
6. {{ui:Tarkistusraportti}} lataa raportin: jokaisen löydöksen, kuka hyväksyi mitä ja miksi, sekä sääntöjoukot, jotka ajettiin.

## Sääntöjoukot

- **Nimettömät huoneet**: huone ilman nimeä tai huone, joka on yhä nimetty ohjelman antamalla nimellä ("Room 3").
- **Puuttuvat tunnisteet**: ovi tai ikkuna ilman merkintää, huone ilman numeroa, sähkölaite ilman tunnistetta.
- **Vaiheen LOD-tasoa alhaisemmat elementit**: jokainen seinä, lattia, katto, kattorakenne, ovi ja ikkuna, jonka LOD on alhaisempi kuin vaihe vaatii. Elementti lukee tyyppinsä LOD-tunnisteen; työmaalla varmennettu elementti on LOD 500. Elementit ilman tunnistetta lasketaan yhteen huomautukseen, koska niitä ei voi tarkistaa.
- **Törmäykset eri alojen välillä**: kahden alan (arkkitehtuuri, rakenne, LVI, putkisto, sähkö, IFC-luokan mukaan) elementit, jotka törmäävät toisiinsa. Seinien varassa lepäävää kattoa ei lasketa.
- **LOD 350 -liittymät**: jokainen ovi ja ikkuna on seinänsä aukossa, aukko mahtuu seinän sisään, kaksi aukkoa eivät mene päällekkäin, leveä aukko, joka ylittää rajan, on ylipalkilla tai pääty-ilmoituksella (elementti sen yläpuolella tai huomautus ovessa tai ikkunassa), ja putki, kanava tai kaapelihylly, joka ylittää seinän tai laatan, on siinä aukossa. Löydöksiä lasketaan alapareittain.
- **Tunnistetut elementit, joita kukaan ei ole tarkistanut**: seinät, ovet, ikkunat ja huoneet, jotka on luettu PDF:stä, skannauksesta tai piirustuksesta ja jotka ovat yhä varmentamattomia. Katso [Merkitse elementit tarkistetuiksi tai työmaalla varmennetuiksi](topic:verification).

## Vaiheen vaatima LOD-taso

Avaa {{ui:Kunkin vaiheen vaatima LOD-taso}} nähdäksesi tai muuttaaksesi taulukkoa.

:::note
Taulukko ja ylipalkin leveys ovat CadCraftin lähtöarvoja. Ne eivät ole standardista: projekti asettaa LOD:n vaiheittain BIM-toteutussuunnitelmassaan. Aseta ne omiin arvoihisi. Toimisto voi asettaa taulukon kaikille kohdassa Asetukset › Yleiset › Default Policies › {{ui:Tarkastus}}; muutos osiossa {{ui:Tarkastus}} säilyy tällä tietokoneella.
:::

## Hyvä tietää

- Ylipalkki voidaan merkitä huomautuksena mallintamisen sijaan: valitse ovi tai ikkuna ja täytä {{ui:Ylipalkin huomautus}} kohdassa {{ui:Varmennus}} Ominaisuudet-paneelissa.
- Putki, joka kulkee todellisen aukon läpi, ei ylitä pintaa eikä sitä raportoida. Putki, joka on mallinnettu suoraan seinän läpi, raportoidaan.
- Törmäystarkistus pysähtyy muutaman sekunnin jälkeen erittäin suuressa mallissa ja kertoo siitä. Kahden valitun joukon täyttä tarkistusta varten katso [Etsi elementtien väliset törmäykset](topic:clash-check).
- Suorita tarkastus uudelleen, kun muutat mallia. Hyväksytyt löydökset pysyvät hyväksyttyinä, kun niiden numerot eivät muutu.
- Se lukee mallin. Se ei korvaa vastuuhenkilöiden koordinointikatselmusta.

## Seuraavaksi

- [Tarkista malli yleisten ongelmien varalta](topic:model-checks)
- [Etsi elementtien väliset törmäykset](topic:clash-check)
- [Merkitse elementit tarkistetuiksi tai työmaalla varmennetuiksi](topic:verification)
