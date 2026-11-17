---
title: Georeferointi mielivaltaisella projektiolla
summary: Kerro BimCraftille, mitä karttajärjestelmää mallin koordinaatit käyttävät. Valitse se koko EPSG-luettelosta, mistä tahansa UTM-vyöhykkeestä tai itse määrittelemästäsi projektiosta, ja käytä sitä sijainnille, karttatasoille ja pistepilville.
keywords: projektio, koordinaattijärjestelmä, crs, epsg, utm, utm-vyöhyke, mukautettu projektio, proj4, proj-merkkijono, prj, wkt, georeferointi, karttamuunnos, ifcprojectedcrs, omat projektiot, leveysaste, pituusaste, itäkoordinaatti, pohjoiskoordinaatti, lambert, gauss-kruger, state plane, kansallinen ruudukko
from: 6894c1f2
---

Joitakin piirustuksia on piirretty karttajärjestelmällä, jota ei ole lyhyessä luettelossa: UTM-vyöhykkeellä, kansallisella ruudukolla tai projektiolla, jonka joku on kirjoittanut tekstimuotoiseksi määritelmäksi. {{ui:Mittaa}} › {{ui:Koordinaattijärjestelmä…}} kertoo, mitä järjestelmää malli käyttää.

## Valitse mallille järjestelmä

1. Avaa malli, valitse {{ui:Mittaa}} ja sitten {{ui:Koordinaattijärjestelmä…}}.
2. Kirjoita hakukenttään. Jokin näistä toimii:
   - EPSG-numero: `32633` tai `EPSG:2277`;
   - UTM-vyöhyke: `UTM 33N`, `UTM 20 S`, `NAD83 UTM 15N`, `ETRS89 UTM 32N`;
   - sanoja nimestä: `lambert 93`, `mga zone 56`, `texas central`;
   - projektion määritelmä: `+proj=tmerc +lat_0=0 +lon_0=9 +k=0.9996 +x_0=500000 +y_0=0 +ellps=WGS84 +units=m`, valinnaisesti nimi edessä (`Oma ruudukko = +proj=…`);
   - `.prj`-tiedoston teksti tai {{ui:Lataa .prj-tiedosto…}}.
3. Valitse tulos ja napsauta {{ui:Käytä tätä järjestelmää}}.

Valinta tallennetaan malliin (projektin ominaisuusjoukko nimeltä `CadCraft_CRS`), joten se avautuu mallin mukana. Tallenna malli, jotta valinta säilyy. {{ui:Poista mallista}} palauttaa sen, mitä tiedosto itse sanoo.

Jos määritelmäsi antaa samat koordinaatit kuin jokin listattu EPSG-järjestelmä, BimCraft kertoo sen ja käyttää sitä koodia. Kun useilla listatuilla järjestelmillä on sama laskentatapa, se nimeää myös muut.

## Omat projektiot

Määritelmän, jonka liität, tai `.prj`-tiedoston, jonka lataat, voi tallentaa napsauttamalla {{ui:Tallenna Omiin projektioihin}}. Luettelo on tällä laitteella (tässä selaimessa), ja se tarjotaan seuraavan kerran, kun avaat valitsimen.

## Mihin sitä käytetään

- {{ui:Mittaa}} › {{ui:Sijainti}} muuntaa valitun pisteen leveys- ja pituusasteiksi mallin järjestelmän kautta. Aiemmin se pysähtyi huomautukseen, kun tiedosto nimesi karttajärjestelmänsä ilman EPSG-koodia. Nyt, kun valinta on tallennettu, se antaa vastauksen.
- Mallin alla olevat karttatasot käyttävät samaa järjestelmää. Toisessa järjestelmässä oleva pistepilvi tai maastotiedosto tarjotaan mallin järjestelmään (katso alla).
- {{ui:Asetukset}} › {{ui:BimCraft}} › {{ui:Sijainti}} › {{ui:Valitse toinen järjestelmä…}} asettaa, mitä {{ui:Sijainti}} raportoi lisäksi: leveys- ja pituusasteet mistä tahansa listatusta maantieteellisestä järjestelmästä, tai itä- ja pohjoiskoordinaatit mistä tahansa projisoidusta järjestelmästä, mallin omien lisäksi.

## Malli, joka ei vielä ole kartalla

Jos tiedostossa ei ole karttamuunnosta, järjestelmän valinta avaa {{ui:Sijoita tämä malli karttaan}}. Voit avata sen myös kohdasta {{ui:Mittaa}} › {{ui:Karttaorigo…}}.

1. Anna mallin origo itä- ja pohjoiskoordinaatteina järjestelmässä, tai kirjoita leveys- ja pituusaste ja valitse {{ui:Muunna itä- ja pohjoiskoordinaateiksi}}.
2. Anna pyöritys ruudukon pohjoiseen (asteina, vastapäivään; 0 tarkoittaa, että mallin Y-akseli osoittaa ruudukon pohjoiseen) ja origon korkeus.
3. Mittakaava alkaa mallin ja kartan yksikköeron mukaan (0.001 millimetrin mallille metrin ruudukolla). Muuta sitä vain yhdistettyä maanpinnan ja ruudukon kerrointa varten.
4. Valitse {{ui:Sijoita karttaan}}. Yksi kumoamisvaihe kirjoittaa IfcProjectedCRS:n ja IfcMapConversionin (IFC4). Malli itse ei liiku.

IFC2X3-tiedostossa ei ole kumpaakaan oliota. BimCraft kirjoittaa samat luvut tavalla, jonka standardi sallii: buildingSMART-ominaisuusjoukot `ePSet_MapConversion` ja `ePSet_ProjectedCRS` projektiin, kohteen leveys- ja pituusasteet sekä todellisen pohjoisen. Valintaikkuna kertoo tämän. Tallenna malli, jotta se säilyy.

## Malli, joka on jo kartalla

Kun tiedosto sijoittaa itsensä jo kartalle ja valitset toisen järjestelmän, BimCraft kysyy:

- {{ui:Muuta vain Sijainnin ilmoitusta}} säilyttää tiedoston oman georeferoinnin ja käyttää valintaasi {{ui:Sijainti}}-toiminnolle, karttatasoille ja pistepilville (mallin luvut luetaan silloin uuteen järjestelmään).
- {{ui:Siirrä malli tähän järjestelmään}} kirjoittaa georeferoinnin uudelleen: origo kulkee projektion läpi (itä, pohjoinen, korkeus, pyöritys ja mittakaava), ja IfcProjectedCRS (nimi, datum, projektio, vyöhyke, yksikkö) kirjoitetaan uudelleen, joten tallennettu IFC kertoo uuden järjestelmän. Paikka maapallolla pysyy samana: origo säilyttää leveys- ja pituusasteensa. Mallin elementit eivät koskaan muutu, vain georeferointi muuttuu.

Valintaikkuna näyttää vanhan ja uuden origon ennen valintaa. Siirto edestakaisin palauttaa origon millimetrin tarkkuudella.

## Pistepilvet ja maasto toisessa järjestelmässä

Pilvi tai mittaustiedosto kantaa omaa järjestelmäänsä (LAS, LAZ, E57, GeoTIFF) tai ei mitään. Kun se poikkeaa mallin järjestelmästä, BimCraft tarjoaa {{ui:Projisoi uudelleen mallin järjestelmään}}. Pisteet siirretään erissä (työprosessissa, kun niitä on paljon, jotta sivu pysyy käytettävänä). Tiedostoa tietokoneellasi ei kosketa, ja tilarivi kertoo, mitä tehtiin. Avaa tiedosto uudelleen palataksesi sen omaan järjestelmään. Jo avatulle pilvelle {{ui:Projisoi uudelleen mallin järjestelmään…}} pistepilvipalkissa tekee saman.

Jos tiedosto ei nimeä järjestelmää, BimCraft kysyy {{ui:Mikä järjestelmä tällä tiedostolla on?}}. Valitse se {{ui:Valitse järjestelmä…}}-painikkeella, ja vastaus muistetaan kyseiselle tiedostolle tällä laitteella. {{ui:Säilytä tiedoston oma järjestelmä}} jättää pisteet ennalleen.

## Kun jokin on likimääräistä

Ongelmat luetellaan valintaikkunassa ja {{ui:Ongelmat}}-paneelissa, ei koskaan hiljaa:

- Paikka alueen ulkopuolella, jolle järjestelmä on tehty: laskenta toimii, mutta vääristymä kasvaa.
- Datumsiirrot, jotka vaativat ruudukkotiedoston (NADCON, NTv2 ja vastaavat), eivät ole saatavilla. Eri datumilla olevat järjestelmät siirretään EPSG-rekisterin listaamalla ruudukottomalla siirrolla. Tulos on likimääräinen ilmoitettuun tarkkuuteen, jonka viesti ilmoittaa metreinä.
- Piste, jota ei voi projisoida, jätetään pois ja lasketaan. Tiedosto, joka ylittää kokorajan, hylätään, ja raja ilmoitetaan.

:::tip
Karttakoordinaatit tarvitsevat karttamuunnoksen. Tiedosto ilman sitä sijoitetaan kartalle {{ui:Karttaorigo…}}-toiminnolla.
:::

:::note
Siirtyminen datumien välillä ilman ruudukkotiedostoa on tarkka muutamaan metriin. Sijainti-tulos kertoo, kuinka paljon, kun luettelo sen tietää.
:::
