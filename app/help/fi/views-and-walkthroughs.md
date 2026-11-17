---
title: Tallenna näkymät ja kävelykierrokset
summary: Säilytä mallin kameranäkymät nimellä, palaa niihin, toista ne peräkkäin ja tallenna kävely rakennuksen läpi, jotta sen voi toistaa.
keywords: näkymät, tallennetut näkymät, kamera, kamerat, näkökulma, kohtaus, kohtaukset, kierros, esitys, kävelykierros, kävele läpi, lennä läpi, tallenna, toista, reitti, animaatio
from: 3af19a36
---

{{ui:Views}} työkalurivillä säilyttää 3D-näkymän kamerat mallin tiedostossa, joten niihin voi palata suoraan, myös silloin kun malli lähetetään toiselle.

## Tallenna näkymä

1. Aseta 3D-näkymä: kiertele, zoomaa ja piilota se, mitä et halua.
2. Napsauta {{ui:Views}}, kirjoita nimi (tai säilytä tarjottu) ja napsauta {{ui:Save view}} tai paina {{key:Enter}}.

Nimellä, joka on jo luettelossa, tallennus päivittää kyseisen näkymän. Napsauta näkymän nimeä palataksesi siihen; kamera siirtyy sinne pehmeästi.

Nuolet vaihtavat järjestystä, kynä nimeää uudelleen ja roskakori poistaa. Jokainen muutos on yksi vaihe, joten {{key:Ctrl+Z}} kumoaa sen.

## Toista näkymät

{{ui:Play the views}} siirtyy luettelon järjestyksessä seuraavaan näkymään ja pysähtyy hetkeksi kuhunkin. {{key:Esc}} tai {{ui:Stop}} lopettaa toiston.

## Tallenna kävelykierros

1. Ota käyttöön [Kävely](topic:walk) ja aloita kävely rakennuksen sisällä.
2. Napsauta {{ui:Views}}-kohdassa {{ui:Record a walk}}.
3. Kävele näppäimillä {{key:W}} {{key:A}} {{key:S}} {{key:D}} ja katsele ympärillesi hiirellä.
4. Napsauta {{ui:Stop recording}}. Kävely tallennetaan nimellä "Kävely 1", ja sen pituus näkyy.

Napsauta kävelyä toistaaksesi sen niin kuin se kävellään. {{key:Esc}} pysäyttää toiston.

## Renderöi kävelykierros videoksi

Napsauta kävelyn vieressä olevaa elokuvakuvaketta. Videodialogi piirtää jokaisen kehyksen kävelystä viimeksi valituilla renderöintiasetuksilla, siinä koossa, kehysnopeudessa ja laadussa, jotka valitset tässä. Tallenna se WebM- tai MP4-videona tai ZIP-tiedostona, jossa on yksi kuva per kehys. Kehysten laskeminen vie yhtä kauan kuin kuvien, joten aloita valinnalla {{ui:Quick}} (Nopea).

## Kerro kävelykierros

Napsauta kävelyn vieressä olevaa puhekuplakuvaketta. Kirjoita yksi rivi jokaiselle sanotulle asialle ja aloita rivi ajalla, jolloin se alkaa (`12`, `0:12` tai `1:02.5`). Rivi ilman aikaa seuraa yllä olevaa riviä sen puhumiseen kuluneen ajan jälkeen. Valitse kieli, asiakkaan kieli mukaan lukien, jos asiakas katsoo kävelyn. {{ui:Preview}} toistaa sanat tämän tietokoneen omalla äänellä ja näyttää ne tekstityksinä; sama tapahtuu aina, kun kävely toistetaan. {{ui:Save with the walk}} säilyttää kerronnan IFC-tiedostossa kävelyn mukana.

Oma yhdistetty avustaja voi kirjoittaa kerronnan: pyydä sitä katsomaan kävely ja tallennetut näkymät, ja se asettaa rivit valitsemallasi kielellä yhtenä kumoamisvaiheena.

Renderöity video ei sisällä omaa ääntään, koska selain ei voi tallentaa omaa ääntään. Tallenna tekstitykset (`.srt` tai `.vtt`) ja lisää ne videoon videosoittimessa tai muokkausohjelmassa. Mitkä äänet ovat valittavissa, riippuu tietokoneesta; kieli ilman asennettua ääntä saa silti tekstitykset.

## Tiedostossa

Näkymät ja kävelyt säilytetään IFC-tiedostossa ominaisuusjoukkona `CadCraft_Views` projektissa: tavallista IFC:tä, jonka muut ohjelmat ohittavat. Ne ovat ensimmäisen mallin koordinaateissa, joten ne sopivat yhä, kun malli ladataan uudelleen tai toinen malli lisätään.

:::tip
Renderöidäksesi kuvan tallennetusta näkymästä siirry näkymään ja napsauta [Renderöi](topic:render).
:::
