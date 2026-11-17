---
title: Yksiköt tuonnissa: tiedosto ilmoittaa yksikkönsä tai yksiköistä kysytään ensin
summary: Kun tuotava tiedosto ilmoittaa yksikkönsä, BimCraft käyttää niitä ja kertoo sen. Kun se ei ilmoita, BimCraft kysyy ennen kuin sijoittaa mitään ja muistaa vastauksen kyseiselle tiedostolle.
keywords: yksiköt, tuonti, avaa, OBJ, STL, DWG, DXF, IFC, pistepilvi, kirjaston kohde, millimetrit, metrit, tuumat, jalat, mittakaava, väärä koko, liian suuri, liian pieni, 1000 kertaa, kysy, muistettu
from: f044e9bc
---

## Mitä teet

Tuo tiedosto ja varmista, että se tulee oikeaan kokoon.

## Vaiheet

1. Avaa tai lisää tiedosto tavalliseen tapaan: {{ui:Open}}, kirjaston {{ui:Files}}, {{ui:Point clouds}} tai Rakenna › Piirustuksesta.
2. Jos tiedosto ilmoittaa yksikkönsä, mitään ei kysytä. Tilarivi kertoo, mitä yksiköitä tiedosto ilmoittaa.
3. Jos ei ilmoita, avautuu valintaikkuna, jossa kysytään **Tiedoston yksiköt**. Valitse, mikä yksi yksikkö tiedostossa on, ja napsauta {{ui:Use these units}}. Mitään ei sijoiteta ennen vastausta.
4. {{ui:Cancel}} (tai {{key:Esc}}) ei tuo mitään.

## Mitkä tiedostot ilmoittavat yksikkönsä

- **IFC**: ilmoittaa pituusyksikkönsä, ja "Avattu" kertoo, mikä se on. IFC, joka ei ilmoita yksikköään, kysytään ennen avaamista; vastauksesi kirjoitetaan malliin, joten tiedosto ilmoittaa sen, kun tallennat.
- **DWG ja DXF**: piirustuksen lisäysyksiköt. Ilman niitä kysytään (kirjaston tiedostot, Rakenna › Piirustuksesta, maasto korkeuskäyristä).
- **Pistelistat** maastoa varten: eivät ilmoita yksiköitä. Niistä kysytään.
- **Pistepilvet**: LAS ja LAZ koordinaattijärjestelmällä, E57, PTX ja PLY ilmoittavat omansa. Muista kysytään.
- **OBJ ja STL**: eivät koskaan ilmoita yksiköitä. Niistä kysytään.
- **glTF ja GLB**: metrejä muodon oman säännön mukaan.
- **Kuvat**: niillä ei ole omaa kokoa. Kuva sovitetaan näkymään, ja koon asetat komennolla Skaalaa kahdella pisteellä. Antamasi koko muistetaan kyseiselle tiedostolle: kun se sijoitetaan uudelleen, se tulee siihen kokoon ja tilarivi kertoo sen.
- **Pistepilvet-lisäosa**: kysyy, kun rakennetaan pilveä, jonka tiedosto ei ilmoita yksikköä, ja merkitsee pilven luvut sen kantamassa yksikössä.

## Hyvä tietää

- Vastaus muistetaan kyseiselle tiedostolle (sen nimi, koko ja päiväys) tällä tietokoneella, kaikissa CadCraft-sovelluksissa. Kun sama tiedosto tuodaan seuraavan kerran, kysymystä ei esitetä, ja tilarivi kertoo, että muistettuja yksiköitä käytettiin.
- Kysymys tulee uudelleen komentopaletista ({{key:Mod+K}}) › **Kysy tuotujen tiedostojen yksiköt uudelleen**.
- Tuonnissa jo oleva yksikköluettelo (kirjaston Yksiköt, pilvipalkin Yksiköt, Piirustuksen yksiköt kohdassa Rakenna › Piirustuksesta) muuttaa yksiköitä edelleen tuonnin jälkeen. Maastotyökalun Yksiköt-luettelo on nyt vain se, mistä kysymys alkaa.
