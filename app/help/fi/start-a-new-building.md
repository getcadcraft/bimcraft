---
title: Aloita uusi rakennus
summary: Luo tyhjä rakennusmalli kerroksineen, piirrä sen seinät, sijoita kohteita kirjastosta ja tallenna malli IFC-tiedostona.
keywords: uusi, uusi rakennus, tyhjä, aloita alusta, pohja, tasot, kerrokset, lattiat, luo, malli
from: 68786865
---

## Mitä teet

Aloita rakennusmalli tyhjästä sen sijaan, että avaisit olemassa olevan. BimCraft luo tyhjän IFC-mallin, jossa on projekti, tontti, rakennus ja sen tasot. Voit sijoittaa kirjastosta laitteita ja kalusteita tasoille ja tallentaa mallin IFC-tiedostona.

:::note
Seinät voi piirtää jo nyt: katso [Piirrä seinät](topic:draw-walls). Ovet, ikkunat, lattiat ja katot ovat seuraavaksi rakenteilla.
:::

## Vaiheet

1. Napsauta {{ui:Uusi rakennus}} kohdasta **Avaa tiedosto tai kansio** tai aloitussivulta.
2. Kirjoita **Rakennuksen nimi**.
3. Valitse, montako **Kerrosta** rakennuksessa on (1–200).
4. Kirjoita **Kerroksen korkeus**, lattiasta lattiaan: esimerkiksi `10'-0"`, `10'6"` tai `3000 mm`. Pelkkä luku tarkoittaa Yhdysvalloissa jalkoja, muualla millimetrejä.
5. Jokainen kenttä on jo täytetty, joten voit jättää ne ennalleen. Niiden alla ruudussa lukee, mitä aloitat: yksiköt, **Seinätyypin**, jonka Seinä-työkalu piirtää ensin (voit valita toisen luettelosta), ja ensimmäisen arkin.
6. Napsauta {{ui:Luo}}. Kerrokset pinotaan nollasta, kukin yhden kerroksen korkeuden päähän edellisestä, ja ne nimetään Kerros 1, Kerros 2 ja niin edelleen. Ne näkyvät mallipuussa, ja Kerros 1:n pohjapiirros avautuu 3D-näkymän viereen, {{ui:Piirrä}} päällä.
7. Piirrä seinät: napsauta {{ui:Seinä}} ja sitten kahta pistettä. Katso [Piirrä seinät](topic:draw-walls). Nimeä kerroksia uudelleen tai muuta niiden korkeuksia **Kerrokset**-paneelissa.
8. Sijoita kohteita: katso [Sijoita laitteet ja kalusteet kirjastosta](topic:place-from-library). Sijoituspalkki listaa jokaisen kerroksen.
9. Napsauta {{ui:Tallenna IFC-tiedostona}}. Tiedosto nimetään rakennuksen mukaan, esimerkiksi `Smith's house.ifc`.

## Hyvä tietää

- Malli tallennetaan millimetreinä IFC4-muodossa. Muut BIM-ohjelmat avaavat sen.
- Uudessa rakennuksessa on yksi arkki, **A-101**, jossa on alimman kerroksen pohjapiirros: A3 mittakaavassa 1:100, kun työskentelet metrisillä yksiköillä, muuten Tabloid mittakaavassa 1/8" = 1'-0". Arkki on tyhjä ensimmäiseen seinään asti ja näyttää sen jälkeen pohjapiirroksen piirtäessäsi. Avaa se projektiselaimen kohdasta **Arkit**, jos haluat muuttaa sen paperia, mittakaavaa tai otsikkoa, lisätä näkymiä tai poistaa arkin. Mallipohjasta aloitettu rakennus tuo mukanaan mallipohjan arkit.
- Kaikki, mistä uusi rakennus alkaa (seinätyyppi metrisille projekteille, kerrokset, ensimmäinen arkki ja työkalu, joka on aktiivinen Luo-painikkeen jälkeen), on muutettavissa kohdassa [Oletuskäytännöt](topic:default-policies).
- Mitään ei tarvitse määrittää ennen ensimmäistä seinää. Seinätyypin, kerrosten korkeudet, yksiköt ja arkin voi muuttaa myöhemmin.
- **Kerrokset** vasemmassa paneelissa listaa vain ne kerrokset, joissa on jotain; mallipuu listaa ne kaikki.
- Ennen tallennusta uusi rakennus on tallentamatonta työtä. BimCraft kysyy ennen kuin avaat toisen tiedoston tai poistut, ja säilyttää kopion tässä selaimessa, jos välilehti sulkeutuu.
