---
title: Portaat ja kaiteet
summary: Piirrä suoria, L-muotoisia, U-muotoisia ja kierreportaita, jotka mitoittavat nousunsa ja askelmansa kerrosten välisestä korkeudesta, käsijohteineen ja tolppineen, sekä leikkaa porrasaukko yläkerran lattiaan. Piirrä suojakaiteita terassien reunoille ja aukkojen ympärille.
keywords: kierreportaat, pyöreät portaat, portaat, porrassuora, porrasosa, nousu, askelma, välitaso, kiertoaskelma, L-portaat, U-portaat, käsijohde, suojakaide, kaide, tolppa, pylväs, porrasaukko, pääkorkeus, terassi, parveke
from: 16e5ace4
---

## Mitä teet

Lisää portaat tasojen välille ja kaiteet paikkoihin, joissa ihmiset niitä tarvitsevat. Portaat laskevat omat askelmansa tasojen välisestä korkeudesta, pysyvät tavanomaisissa asuinrakennusten rajoissa, saavat käsijohteet avoimille sivuilleen ja leikkaavat porrasaukkonsa yläkerran lattiaan.

## Piirrä portaat

1. Avaa taso, josta portaat alkavat, valitse {{ui:Koontiversio}} ja valitse {{ui:Portaat}}.
2. Valitse tyyppi — **Suora**, **L-muotoinen välitasolla**, **U-muotoinen välitasolla** tai **L-muotoinen kiertoaskelmilla** — mihin suuntaan se **kääntyy**, sen **leveys** ja minne **käsijohteet** menevät.
3. Napsauta kohtaa, josta portaat alkavat: alimman askelman etureunan keskikohta.
4. Siirrä osoitinta portaiden noususuuntaan. Askelmat seuraavat sitä, ja mukana on nousujen ja askelmien määrä. Osoitin tarttuu seiniin ja 15°:n askelin. Pidä {{key:Shift}} pohjassa, jos haluat portaiden pysyvän suorakulmaisina.
5. Napsauta. {{key:Esc}} aloittaa alusta.

## Piirrä kierreportaat

1. Avaa {{ui:Koontiversio}}, valitse {{ui:Portaat}} ja valitse tyypiksi **Kierre**.
2. Aseta **Kierto**: mihin suuntaan portaat kiertyvät ylöspäin (vasen tarkoittaa vastapäivään).
3. Napsauta keskipylvään keskikohtaa.
4. Napsauta suuntaa, johon alimmainen askelma osoittaa.

Portaat alkavat 30" leveinä (askelma pylväästä ulkoreunaan) ja 4½" pylväällä. Nousut lasketaan kerrosten välisestä korkeudesta, enintään oletuksena 9½". Askelmat ovat 7½" syviä kävelylinjalla, 12" pylväästä ulospäin. Käsijohde kulkee ulkoreunaa pitkin.

**Ominaisuudet**-kohdassa kierreportailla on lisäksi **Keskipylväs**, eli sen halkaisija. **Askelma**-kenttä mitataan kävelylinjalta. Sen tarkistukset ovat kierreportaiden oletusarvoisia nimikkeitä: 26" vapaa leveys, vähintään 6¾" askelma kävelylinjalla, nousut enintään 9½" ja käsijohteet 34"–38". Ne eivät ole rakennesuunnittelua; rakennusvalvontaviranomainen päättää.

## Miten askelmat lasketaan

Tason lattian ja yläpuolisen tason lattian välinen korkeus jaetaan yhtä suuriin nousuihin, jotka ovat enintään 7¾", ja jokainen askelma on 10" syvä. Molempia voi muuttaa **Ominaisuudet**-kohdassa. Välitaso lasketaan yhdeksi askeleeksi. Kiertoaskelmat ovat kolme askelmaa, jotka on sijoitettu viuhkamaisesti sisäkulman ympärille. Kun muutat tason korkeutta, jokainen sen portaat lasketaan uudelleen.

:::warning
7¾" nousut, 10" askelmat, 36" leveys, 6'-8" pääkorkeus ja 34"–38" käsijohteet ovat tavanomaisen asuinrakennusmääräyksen mukaisia oletusarvoja, eivät rakennesuunnittelua. **Ominaisuudet** kertoo, mitkä täyttyvät. Rakennusvalvontaviranomainen päättää, mitä sovelletaan.
:::

## Muuta portaita

Valitse portaat (napsauta niitä pohjapiirroksessa tai 3D-näkymässä) ja muuta **Ominaisuudet**-kohdassa niiden tyyppiä ja kääntöä, leveyttä, korkeinta nousua, askelman syvyyttä, käsijohteita ja niiden korkeutta sekä **Leikkaa yläkerran lattia** porrasaukkoa varten. Lopulta käytetyt nousut ja askelmat näkyvät alla.

## Porrasaukko

Kun yläkerroksessa on lattia, portaat leikkaavat sen kohdasta, jossa askelmilla olisi alle 6'-8" pääkorkeutta. Leikkaus siirtyy portaiden mukana ja poistuu, kun portaat poistetaan.

## Piirrä kaide

1. Avaa {{ui:Koontiversio}} ja valitse {{ui:Kaide}}.
2. Valitse **Suojakaide** (36" korkea) tai **Käsijohde** sekä sen korkeus.
3. Napsauta reunaa pitkin (terassin, parvekkeen, portaiden aukon ympäri) ja kaksoisnapsauta tai paina {{key:Enter}} lopettaaksesi.

Kaiteissa on pylväät päissään ja kulmissaan sekä tolpat, joiden väli on alle 4". Valitse kaide, jos haluat muuttaa sen tyyppiä, korkeutta tai sitä, kuinka korkealta lattiasta se alkaa.

## Piirrä aita

Valitse **Aita** samasta Kaide-työkalusta, aseta sen korkeus (aluksi 1800 mm), napsauta aidan linjaa pitkin ja paina {{key:Enter}}.

- Aidassa on pylväs kumpaankin päähän ja jokaiseen kulmaan sekä pylväs enintään 2.4 m:n välein niiden välillä. Paneeliaidassa on paneeli pylväiden välissä, palkkiaidassa kaksi palkkia. Nämä koot ovat tavallisia valintoja, eivät vaatimuksia. Paikalliset määräykset rajoittavat aidan korkeutta.
- Se on yksi elementti mallissa (IfcRailing nimeltään Fence), ja sillä on ominaisuusjoukko {{ui:CadCraft_Fence}}: tyyli, korkeus, pylväät, paneelit, palkit, portit, pituus ja paneelin pinta-ala. Yksi kumoamisvaihe.
- Tässä ei piirretä: portteja (CivilCraftin generaattori asettelee ne), pystytolppia, maastoa (aita seisoo kerroksen tasolla) eikä yksittäisen pylvään valitsemista.

## Mitä tallennetaan

Portaat tallennetaan IFC-portaina, jotka koostuvat porrasosista (nousuineen, askelmineen, nousun korkeuksineen ja askelman pituuksineen), välitasoista, kiertoaskelmista ja käsijohteista. Porrasaukko on aukko yläpuolisessa lattialaatassa. Kaiteet tallennetaan IFC-kaiteina, joissa on pituus sekä tolppien ja pylväiden määrä.
