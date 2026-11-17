---
title: Vie malli Collada-muodossa tai Google Earthia varten
summary: Kirjoita avoimet IFC-mallit Collada-tiedostoksi (.dae) Blenderiin ja muihin 3D-ohjelmiin tai Google Earth -paketiksi (.kmz), joka sijoittuu karttaan siihen kohtaan, jossa malli on.
keywords: collada, dae, kmz, kml, google earth, blender, vienti, geosijainti, georeferointi, leveyspiiri, pituuspiiri, sijainti, 3d-ohjelmat
from: 81cfec09
---

{{ui:Collada}} työkalurivillä (tai {{ui:Vie Collada (.dae, .kmz)…}} Tiedosto-valikossa valikko- ja valintanauhatyyleissä) kirjoittaa auki olevan sisällön Collada 1.4.1 -muodossa: jokaisen näkyvän mallin, ja liitetyt mallit siihen kohtaan, johon ne on sijoitettu.

## Vienti

1. Valitse {{ui:Collada}}.
2. Valitse muoto:
   - {{ui:Collada-tiedosto (.dae), Blenderiin ja muihin 3D-ohjelmiin}}.
   - {{ui:Google Earth -paketti (.kmz): malli sijoitettuna karttaan siihen kohtaan, jossa se on}}. Tarjolla vain, kun mallilla on sijainti.
3. Valitse asetukset ja napsauta {{ui:Vie}}. Tiedosto latautuu, ja tilarivillä kerrotaan, montako elementtiä siihen meni.

| Asetus | Mitä se tekee |
|---|---|
| {{ui:Kirjoita sijainti tiedostoon}} | Lisää .dae-tiedostoon tiedoston origon leveyspiirin, pituuspiirin, korkeuden ja suuntakulman |
| {{ui:Korkeus}} | {{ui:Maanpinnalla: mallin taso 0 on maastomallin päällä}} tai {{ui:Mallin oma korkeus merenpinnasta}} |
| {{ui:Sisällytä huoneet ja tilat}} | Tilat menevät mukaan myös (oletuksena ne jätetään pois) |
| {{ui:Sisällytä piilotetut rakennusosat}} | Piilotetut elementit kirjoitetaan myös (oletuksena vain se, mitä näet) |

## Mitä tiedostossa on

| Mallissa | Collada-tiedostossa |
|---|---|
| Rakennus, kerrokset | Sisäkkäiset solmut, kerrokset korkeusjärjestyksessä; elementit ilman kerrosta kohdassa "Unplaced" |
| Jokainen elementti | Yksi solmu omalla verkollaan, nimettynä kuten mallissa (nimi, muuten luokka ja tunniste) |
| Luokka, GlobalId, ennalta määritetty tyyppi | Solmun lisätiedoissa (profiili IFC), tarkalla nimellä (profiili ModelCraft) |
| Värit | Materiaaleina, läpinäkyvyys mukana |
| Yksiköt ja akselit | Metriä, Z ylöspäin. Edessä olevan mallin taso 0 on korkeudella 0 |

Malli pysyy lähellä origoa maanpinnan tasolla, joten ohjelmat, jotka toimivat yksinkertaisella tarkkuudella, näyttävät sen ilman värinää. ModelCraft kirjoittaa Collada-tiedostonsa samalla kirjoitusmoduulilla ja avaa nämä tiedostot elementtien nimillä.

## Mistä sijainti tulee

Edessä oleva malli antaa sijainnin samalla tavalla kuin {{ui:Mittaa}} laskee pisteen leveys- ja pituuspiirin:

- Karttamuunnos (IFC4 IfcMapConversion tai IFC2X3-ominaisuusjoukot) mallin koordinaattijärjestelmän kautta. Mallille valitsemasi järjestelmä voittaa tiedoston nimeämän.
- Muuten kohteen leveys- ja pituuspiiri (likimääräinen, riittää koko kohteen tarkkuudella).

Suuntakulma mitataan, sitä ei oleteta: siinä otetaan huomioon kartan kierto, todellinen pohjoinen ja kartan lähentyminen. Mallille annetaan sijainti käyttämällä {{ui:Karttaorigo…}}-toimintoa kohdassa {{ui:Mittaa}}.

## Muissa ohjelmissa

- **Google Earth** lukee .kmz-tiedoston: malli näkyy sijainnissaan, käännettynä pohjoiseen. Pelkkä .dae ei sisällä paikkaa, jonka Google Earth lukisi; käytä .kmz-tiedostoa.
- **Blender** (4.x ja aiemmat): File, Import, Collada (.dae). Jokainen elementti tulee omana objektinaan omine materiaaleineen. Sijainti säilyy tiedoston lisätiedoissa, joita Blender ei lue. Blender 5.0 poisti sisäänrakennetun Collada-tuojan: siinä käytä {{ui:USD}}-muotoa tai glTF-vientiä, tai avaa .dae Blender 4.5:ssä ja tallenna se .blend-tiedostona.

Testimme jokaisen tiedoston Collada 1.4.1 -skeemaa vastaan ja luimme sen takaisin riippumattomalla Collada-lukijalla. Emme ole avanneet sitä Blenderissä tai Google Earthissa.
