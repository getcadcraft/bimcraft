---
title: Kävele ihmiset rakennuksessa
summary: Evakuointi tai tavallisen päivän saapumiset huoneiden, ovien ja portaiden läpi jonoineen rakennuksen kapenevissa kohdissa, pisin kävelymatka poistumiseen jokaisesta huoneesta ja löydökset Ongelmina. Karkea ihmisjoukkomalli suunnittelupäätöksiin, ei paloturvallisuustodistus.
keywords: ihmiset, evakuointi, poistuminen, pako, uloskäynti, kulkumatka, jono, väkijoukko, virtaus, ovileveys, portaat, saapumiset, pullonkaula, simulointi, asukkaat, jalankulkija, mitä jos, tukittu ovi
from: 84aa8920
---

{{ui:Ihmiset rakennuksessa}}-osio vasemmassa paneelissa kävelyttää ihmisiä avoimen IFC-mallin huoneiden, ovien ja portaiden läpi. Mitään mallissa ei muuteta eikä mitään lähetetä.

:::warning
Tämä on **suunnittelun apuväline, ei paloturvallisuustodistus**. Se ei tiedä tulipalosta, savusta, paniikista, liikkumisrajoitteista eikä siitä, mitä määräys sinulta vaatii. Rajat ovat sinun: pisin kävelymatka uloskäyntiin ja käytettävissä oleva aika ovat lukuja, jotka kirjoitat itse, eikä mitään oleteta valmiiksi.
:::

## Aja se

1. Avaa malli, jossa on suljetut huoneet ja ovet. Ovi, jonka toisella puolella on huone, on uloskäynti; ovi kahden huoneen välillä yhdistää ne; porras yhdistää huoneet sen päissä.
2. Valitse **Evakuointi** (kaikki kävelevät uloskäynnille), **Saapumiset** (kaikki tulevat sisään ja kävelevät huoneeseen) tai **Vaihto** (huoneissa olevat ihmiset lähtevät, kun yhtä monta tulee sisään), ja lattiapinta-ala henkilöä kohden. Huoneet, joiden nimi viittaa käytävään, porrashuoneeseen, aulaan tai WC:hen, eivät sisällä ketään.
3. Napsauta {{ui:Suorita}}. Saat ajan, jolloin viimeinen henkilö on ulkona (ja milloin puolet ja yhdeksän kymmenestä ovat), jonon jokaisessa ovessa ja portaassa, huoneen, jossa on pisin kävelymatka, sekä pohjakuvan, joka toistaa ajon.

## Mitä jos -kysymykset

Ruksaa taulukon ovessa {{ui:Suljettu}} ja aja uudelleen: ihmiset löytävät toisen tien, tai huoneet, joista ei ole poistumistietä, luetellaan virheinä. Kaksi kertaa leveämpi ovi tyhjentää huoneen paljon nopeammin; taulukko näyttää, missä jonot ovat.

## Miten se toimii

Jokainen huone on ruudukko, joten ihmiset kävelevät nurkkien ympäri eivätkä seinien läpi. Nopeus hidastuu huoneen täyttyessä (S = 1.4 (1 − 0.266 D) m/s, D henkilöä neliömetriä kohden). Ovi päästää läpi 1.3 henkilöä sekunnissa jokaista ovenleveyden metriä kohden, vähennettynä 150 mm kummallakin puolella; porras 1.0 ja hitaammin kävellessä. Ihmiset odottavat jonossa, joka noudattaa saapumisjärjestystä. Ajon siemenluku toistaa saman ajon tarkasti.

Avustaja voi ajaa saman: pyydä evakuointi tai pisin kävelymatka uloskäynnille jokaisesta huoneesta.

## Henkilöt kussakin huoneessa

Avaa {{ui:Ihmiset kussakin huoneessa}} kirjoittaaksesi luvun mihin tahansa huoneeseen. Tyhjä ruutu käyttää lattiapinta-alaan perustuvaa lukua (harmaana näkyvää); 0 tyhjentää huoneen. Antamasi luvut käytetään ajossa, ja ne säilytetään tässä selaimessa.

## Vastavirta ovilla

**Vaihdossa** poistuvat ja sisään tulevat kohtaavat samoissa ovissa. Kun ovi päästää jonkun vastakkaiseen suuntaan juuri viimeisen henkilön perässä, se säilyttää osan nopeudestaan (tässä 0.8; oletus, koska julkaistut arvot vaihtelevat), ja taulukko laskee suunnanvaihdot. Ovi, joka vaihtaa suuntaa usein, luetellaan **Ongelmat**-kohdassa huomautuksena.

## Portaat ja tasanteet

Jokainen portaan tasanne vie kävelijältä yhden sekunnin kääntymiseen (oletus). Suoralla portaalla ei ole tasannetta; L- tai U-muotoisella portaalla on yksi. Portaan nopeus perustuu edelleen nousun leveyteen.

## 3D-näkymässä

Ruksaa {{ui:Näytä henkilöt 3D-näkymässä}}, niin kävelijät näkyvät mallissa hahmoina, väritettyinä sen mukaan mitä he tekevät, ja liikkuvat ajon toistuessa. Malliin ei lisätä mitään.
