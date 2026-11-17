---
title: "Verhoseinäjärjestelmät: lasiseinät ruudukolla ja pystypuilla"
summary: Piirrä verhoseinäjärjestelmä kuten seinä tai aseta se pinnalle, ja määritä sitten sen ruudukkolinjat ja pystypuut. Se tallennetaan IfcCurtainWall-elementtinä, jossa ovat sen ruudut ja pystypuut.
keywords: verhoseinäjärjestelmä, verhoseinä, verhoseinän ruudukko, pystypuu, lasitus, myymäläjulkisivu, lasiseinä, paneeli, ruutu, pinnan mukaan, pinta, massa, ruudukkolinja, väli, profiili, vaakapuu, IfcCurtainWall, IfcPlate, IfcMember
from: 99d6219c
---

## Mitä teet

Tee lasiseinä ruuduista, jotka ovat pystypuiden välissä, muuta sen ruudukkolinjojen paikkoja ja valitse, mihin linjoihin tulee pystypuu.

## Vaiheet

1. Ota **Piirrä** päälle ja avaa **Rakenna**-valikko (valintanauhassa: Arkkitehtuuri-välilehti).
2. Valitse **Verhoseinäjärjestelmä**. Aseta sen rivillä yläreuna (kerros sen yläpuolella tai korkeus), väli, jolla pystylinjoja tulee seinän pituussuunnassa, väli, jolla vaakalinjoja tulee ylöspäin (jätä tyhjäksi, jos ei yhtään), onko siinä pystypuita ja pystypuun profiili.
3. Napsauta kohtaa, josta se alkaa, ja kohtaa, johon se päättyy, kuten piirtäessäsi seinää. Shift pitää sen suorakulmaisena.
4. Muuta ruudukkoa valitsemalla **Verhoseinän ruudukko** ja napsauttamalla järjestelmää:
   - **Lisää linja**: pystylinja tulee siihen kohtaan, johon napsautat. Vaakalinjan kohdalla kirjoita ensin sen korkeus kenttään **Kohdassa**.
   - **Siirrä linjaa**: napsauta linjaa ja sitten kohtaa, johon se siirtyy.
   - **Poista linja**: napsauta linjaa.
   - **Aseta välin mukaan**: kirjoita väli kenttään **Väli** ja napsauta sitten järjestelmää.
5. Muuta pystypuita valitsemalla **Pystypuu**, valitse, mihin se kohdistuu (napsauttamasi pystylinja, korkeudella oleva vaakalinja, reuna tai kaikki linjat), valitse **Lisää pystypuut** tai **Poista pystypuut** ja profiili, ja napsauta sitten järjestelmää.
6. Valitse järjestelmä nähdäksesi kaiken sen tiedot **Ominaisuudet**-kohdassa: jokainen ruudukkolinja paikkoineen, rasti sen pystypuulle ja painike sen poistamiseksi; väli; reuna; profiili; ruudun paksuus.

## Pinnan mukaan

**Pinnan mukaan** tekee verhoseinäjärjestelmän tasaiselle pinnalle, jota napsautat 3D-näkymässä. Sen rivillä ovat samat ruudukon ja pystypuiden asetukset.

- Se toimii minkä tahansa 3D-näkymässä näkyvän elementin tasaisella pinnalla: massa, seinä, lattia, kattotaso, pilari tai sijoitettu kohde. Pinta voi olla pystysuora, kalteva tai vaakasuora.
- Järjestelmä ottaa pinnan ulkoreunan. Päätykolmio tai muu outo muoto leikkaa ruudut ja pystypuut sen mukaan.
- Se voi tehdä sen sijaan **seinän**, pystysuoran pinnan jalkaa pitkin ja yhtä korkeana kuin pinta. Seinä on aina pystysuorassa, joten kalteva tai vaakasuora pinta ei voi ottaa sitä.
- Se ei tee kattoa. BimCraftin katto lasketaan kerroksen ulkoreunasta ja kaltevuudesta, ei yksittäisestä pinnasta.
- Kaareva pinta on monta pientä tasaista pintaa: yksi napsautus ottaa yhden niistä.
- Pinta, jossa on aukkoja: järjestelmä peittää pinnan ulkoreunan.

## Miten se mitataan

- **Bruttopinta-ala** on järjestelmän ulkoreuna.
- **Lasipinta-ala** on valmiiden ruutujen pinta-ala: kukin ruutu menettää puolet pystypuun leveydestä sivulla, jolla on ruudukon pystypuu, ja koko leveyden reunapystypuun kohdalla.
- Pystypuu kulkee reunalta reunalle. Vaakapuu pysähtyy jokaisen pystypuun ja reunan kohdalla. Reunapystypuut ovat ulkoreunan sisäpuolella; kun kaksi kohtaa, pystymmäinen menee läpi. Liitokset leikataan suoraan, ei viistettynä.
- **Luettelot**-kohdassa on **Verhoseinäjärjestelmät**-luettelo näillä luvuilla, kun mallissa on sellainen.

## IFC-tiedostossa

IfcCurtainWall kerroksellaan, joka koostuu yhdestä IfcPlate-elementistä (verhoseinäpaneeli) per ruutu ja yhdestä IfcMember-elementistä (pystypuu) per pystypuun osa; kullakin on oma muoto, materiaali ja perusmäärät.

## Hyvä tietää

- Mitä tahansa kokoa tehdään pyydetyllä tavalla. Vain ulkoreunaa, jolla ei ole pinta-alaa, ei hyväksytä, koska siitä ei synny mitään.
- Seinän tavoin piirretty järjestelmä säilyttää piirretyn korkeutensa. Jos siirrät kerrosta myöhemmin, aseta sen korkeus uudelleen Ominaisuudet-kohdassa.
- Siirrä-työkalu ei vielä siirrä verhoseinäjärjestelmää. Poista se ja piirrä uudelleen tai muuta sen ruudukkoa paikallaan.
- Kumoa peruu jokaisen vaiheen: koko järjestelmän, yhden ruudukkomuutoksen, yhden pystypuumuutoksen.
