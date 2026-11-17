---
title: Massoitusvaihtoehdot rinnakkain
summary: Säilytä useita massoitusvaihtoehtoja samassa mallissa, tee yhdestä nykyinen vaihtoehto, tarkista se tontin rakennusrajojen ja rasitteiden suhteen, tuo massoitusta ModelCraftista ja kehitä valittu vaihtoehto seiniksi ja laatoiksi.
keywords: massoitus, massa, vaihtoehto, vaihtoehdot, vaihtoehtosarja, ratkaisu, konsepti, konseptisuunnittelu, vaihe 2, vaihtoehtoiset ratkaisut, vertaa vaihtoehtoja, nykyinen vaihtoehto, rakennusmassa, työnnä vedä, modelcraft, civilcraft, bruttoala, pohjapinta-ala, tilavuus, kehitä massa, rasite, rakennusraja, takaetäisyys
from: 69a01459
---

## Mitä teet

Säilytä konseptin massoitusvaihtoehdot yhdessä mallissa erillisten tiedostojen sijaan: useita rakennusmassoja rinnakkain, yksi niistä on **nykyinen vaihtoehto** ja muut säilytetään vertailua varten.

Massoitusvaihtoehto on rakennusmassa: ääriviiva nostettuna korkeuteen ja kerrosmäärällä. Se ei ole vielä seiniä. Voit säilyttää niin monta kuin haluat, ryhmiteltyinä **vaihtoehtosarjoihin** (saman sarjan vaihtoehdot ovat keskenään vaihtoehtoja).

## Säilytä vaihtoehto

1. Avaa {{ui:Tilaohjelmasta massoitteluun}}, kirjoita tilaohjelma ja ääriviiva ja valitse {{ui:Etsi vaihtoehdot}}.
2. Valitse yksi listatuista vaihtoehdoista.
3. Kohdassa {{ui:Massoitusvaihtoehdot mallissa}} kirjoita vaihtoehtosarjan nimi kenttään {{ui:Vaihtoehtosarja}}, jos haluat sen, ja valitse {{ui:Säilytä valittu vaihtoehto}}.

Vaihtoehto näkyy mallissa rakennusmassana ja luettelossa kerroksineen, pohjapinta-aloineen, bruttoalineen ja tilavuuksineen. Mitään ei rakenneta. Säilytä toinen samalla tavalla.

Sarjan ensimmäinen vaihtoehto on sen nykyinen vaihtoehto. Jokainen vaihe on yksi kumoamisvaihe.

## Nykyinen vaihtoehto

Kussakin sarjassa yksi vaihtoehto on nykyinen. Se tarkoittaa kahta asiaa:

- **Sen kerrokset lasketaan rakennuksen kerrosaloina.** Nykyisellä vaihtoehdolla on yksi tila kerrosta kohti, joka kantaa kyseisen kerroksen bruttoalan, joten kaikki, mikä lukee kerrosaloja, näkee vain voimassa olevan vaihtoehdon.
- **Sitä tarkistetaan tonttia vasten.** Jos se sijaitsee tontin rajan ulkopuolella, rakennusrajan yli tai rasitteella, {{ui:Ongelmat}}-listaan ilmestyy varoitus, joka nimeää sen. Se on pelkkä varoitus: mitään ei estetä. Muita kuin nykyisiä vaihtoehtoja ei tarkisteta.

Valitse {{ui:Tee nykyiseksi}} toisesta vaihtoehdosta vaihtaaksesi sen. {{ui:Piilota muut kuin nykyiset vaihtoehdot}} piilottaa muut 3D-näkymästä. Se koskee vain tätä selainta eikä tallennu tiedostoon.

## Massoitus ModelCraftista

ModelCraftissa {{ui:Vie}} › {{ui:Massoitus BimCraftiin…}} lähettää jokaisen ryhmän tai komponentin yhtenä vaihtoehtona. BimCraft avaa tiedoston, ja vaihtoehdot ovat listattuina.

Jos haluat tuoda ne jo avoinna olevaan malliin, valitse {{ui:Lisää massoitusvaihtoehtoja tiedostosta}} ja valitse `.ifc`-tiedosto. Sen massat tulevat sisään vaihtoehtoina sarjaan yhdellä kumoamisvaiheella, siihen kohtaan, johon ne mallinnettiin. CivilCraftin rakennusmassojen tiedosto toimii samalla tavalla.

Vaihtoehto, joka on merkitty ”(muoto yksinkertaistettu)”, ei ollut ModelCraftissa tavallinen pystysuora laatikko (se vetäytyy, kallistuu tai ei ole suljettu). Sen massa tässä on pohjansa ääriviiva nostettuna korkeuteensa. Sen kerrosalat ja tilavuus on mitattu itse kappaleesta.

## Kehitä valittu vaihtoehto

Valitse vaihtoehdosta {{ui:Kehitä}}. Siitä tulee tasoja (lisätään kerrosmäärän verran), seiniä sen ääriviivan ympärille jokaiselle kerrokselle ja laatta jokaiselle kerrokselle, yhdellä kumoamisvaiheella. Vaihtoehto poistuu listalta, ja muut pysyvät ennallaan. Kattoa ei vielä ole.

{{ui:Nimeä uudelleen}} muuttaa vaihtoehdon nimeä, ja {{ui:Poista}} vie sen pois mallista. Nykyisen vaihtoehdon poistaminen tekee sarjan ensimmäisestä muusta vaihtoehdosta nykyisen.

## Mitä pitäisi näkyä

- Jokainen säilytetty vaihtoehto lohkona 3D-näkymässä ja rivinä listassa.
- ”(nykyinen)” yhden vaihtoehdon vieressä jokaisessa sarjassa.
- Varoitus kohdassa {{ui:Ongelmat}}, kun nykyinen vaihtoehto ylittää tontin rajan, rakennusrajan tai rasitteen.

## Hyvä tietää

- IFC-tiedostossa vaihtoehto on rakennuselementtiproxy, jolla on ominaisuusjoukko `CadCraft_SiteMass` (sen vaihtoehtosarja, vaihtoehdon nimi ja se, onko se nykyinen, ovat tässä joukossa). Nykyisen vaihtoehdon kerrokset ovat `MassingFloor`-tyyppisiä tiloja. Muut ohjelmat lukevat proxyn yleisenä elementtinä.
- Vaihtoehdon säilyttäminen ei koskaan lisää tasoja, sen kehittäminen lisää.
- Avustaja voi listata säilytetyt vaihtoehdot, säilyttää yhden, tehdä yhdestä nykyisen, nimetä uudelleen, kehittää tai poistaa sen.
