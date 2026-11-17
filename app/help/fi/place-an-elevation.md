---
title: Aseta julkisivu ja avaa sen näkymä
summary: Sijoita julkisivumerkki pohjapiirrokselle, osoita sen suunta, etsi sen piirustus projektiselaimesta, muokkaa sitä ja lisää se arkille. Ohjeet valintanauhan asetteluille ja klassiselle asettelulle.
keywords: julkisivu, julkisivunäkymä, julkisivumerkki, julkisivumerkintä, julkisivun sijoittaminen, uusi julkisivu, julkisivun tekeminen, ulkoinen julkisivu, sivunäkymä, edestä näkymä, näkymä pisteestä, missä julkisivu on, avaa julkisivu, julkisivu arkilla, käännä julkisivu, nimeä julkisivu uudelleen, pohjoinen julkisivu, ruudutus, jaettu näkymä, pohjapiirros ja 3D rinnakkain
from: a7cfd2b9
---

## Mitä teet

Teet oman julkisivun: piirustuksen rakennuksesta, joka on nähty valitsemastasi pisteestä ja valitsemaasi suuntaan. Se vaatii kaksi napsautusta pohjapiirroksella. Piirustus luetellaan sen jälkeen rakennuksen muiden julkisivujen joukossa.

:::note
Neljä julkisivua on jo valmiina. Jokaisella rakennuksella on pohjoinen, itäinen, eteläinen ja läntinen julkisivu kohdassa {{ui:Julkisivut}} {{ui:Projektiselain}}-ikkunassa ilman mitään sijoittamista. Sijoita oma julkisivu, kun haluat näkymän muualta: kulmassa olevaan siipeen nähden suoraan, pihapiiristä tai yhdestä seinästä huoneen sisällä.
:::

## Missä työkalu on

- Valintanauhan asettelut: {{ui:View}} › **Luo** › {{ui:Elevation}}.
- Klassinen asettelu: ota käyttöön {{ui:Draw}}, sitten {{ui:Build}} › {{ui:Elevation}}.
- Mikä tahansa valikkotyyli: komento on nimeltään {{ui:Elevation}}. Komentopaletti löytää sen, ja komentorivi hyväksyy ELEVATION.

## Vaiheet

1. Valitse {{ui:Elevation}}. Julkisivu sijoitetaan pohjapiirrokselle, joten jos olit 3D-näkymässä, BimCraft näyttää sen kerroksen pohjapiirroksen, jolla olit. Osoitin näyttää tekstin **Napsauta kohtaa, johon julkisivu sijoitetaan**.
2. Napsauta kohtaa, mistä näkymä otetaan. Ulkoista julkisivua varten napsauta rakennuksen ulkopuolelle, hieman siitä seinästä, jonka haluat näkyvän.
3. Osoitin näyttää nyt tekstin **Napsauta suuntaa, johon näkymä katsoo**. Siirrä osoitin kohti rakennusta: nuoli näyttää suunnan, ja ensimmäisen napsautuksen yli kulkeva lyhyt viiva on reuna, josta näkymä katsotaan. Napsauta.
4. Pohjapiirrokselle ilmestyy ympyrä, jossa on numero, ja osoitin. Se on julkisivumerkki. Ensimmäinen on 1, seuraava 2.
5. Lopeta painamalla Esc, tai jatka ja sijoita toinen.

Merkin sijoittaminen on yksi vaihe: {{key:Mod+Z}} kumoaa sen.

## Avaa piirustus

Pohjapiirros pysyy edessäsi toisen napsautuksen jälkeen. Piirustus on {{ui:Projektiselain}}-ikkunassa:

1. Avaa {{ui:Elevations}}. Oma julkisivu on listattu neljän pääsuunnan jälkeen nimellä **Korkeus 1**.
2. Napsauta kynäpainiketta {{ui:Edit in this view}} sen rivillä, nähdäksesi piirustuksen ja työskennelläksesi siinä: seinien, ovien, ikkunoiden ja kerrosten siirtäminen, huomautusten ja mittojen lisääminen. Katso [Muokkaa julkisivuissa ja leikkauksissa](topic:edit-in-elevations).
3. Napsauta riviä itseään avataksesi piirustusjoukon, tai lisää näkymä omalle arkillesi. Katso [Näkymät ja arkit](topic:views-and-sheets).

Klassisessa asettelussa projektiselain on vasemmassa paneelissa, kun {{ui:Draw}} on päällä. Valintanauhan asetteluissa se on {{ui:Project Browser}}-välilehti kohdassa Ominaisuudet.

## Mitä näkymä näyttää

- Kaiken merkin edessä, rakennukseen asti. Mitään takana ei näy.
- Kerrokset nimineen ja korkeuksineen.
- Jos merkki on rakennuksen sisällä, siinä oleva kohde leikataan siitä kohdasta, kuten leikkaus sen leikkaisi. Puhtaan ulkoisen julkisivun saa, kun merkki on ulkopuolella.

## Muuta sitä

Valitse merkki pohjapiirrokselta napsauttamalla sen ympyrää {{ui:Select}}-työkalulla. Ominaisuuksissa on:

- {{ui:Label}}: sen numero tai oma nimi, enintään 8 merkkiä.
- {{ui:Flip the view}}: katso samasta kohdasta vastakkaiseen suuntaan.
- {{ui:Look as far as}}: kuinka pitkälle merkin edestä näkymä ulottuu. 0 näyttää kaiken.

Poista merkki ja sen piirustus painamalla Delete. Kumoa palauttaa molemmat.

:::tip
Jos haluat nähdä pohjapiirroksen ja 3D-näkymän samaan aikaan työskennellessäsi, käytä valintanauhan asetteluissa {{ui:View}} › **Ikkunat** › {{ui:Tile Views}}, tai klassisessa asettelussa {{ui:Split}}. Näkymävälilehden napsautus palauttaa yhden näkymän.
:::

## Rajoitukset

- Merkkiä ei voi vielä vetää tai kääntää pohjapiirroksella. Poista se ja sijoita uudelleen, tai käytä {{ui:Flip the view}}.
- Arkille lisättävien näkymien luettelossa oma julkisivu on listattu leikkausten kanssa.
- Ovi- ja ikkunamerkinnät piirretään neljälle pääjulkisivulle, ei sijoittamallesi julkisivulle.

## IFC-tiedostossa

Merkki tallennetaan tiedostoon IfcAnnotation-kohteena nimellä ”Elevation 1” ja objektityypillä ”Elevation marker”, siihen kerrokseen, jolle se sijoitettiin. Toinen ohjelma näyttää sen merkintänä. Piirustuksen itsensä tekee BimCraft mallista joka kerta.
