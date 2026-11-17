---
title: Työtaso: aseta, näytä, katso suoraan siihen
summary: Työtaso on taso, jota mallin viivat, mallin teksti ja Työtason katselija käyttävät. Aseta se tasolle, pinnalle, nimetylle viitetasolle tai viivalle; näytä se näkymissä; avaa katselija piirtääksesi pystysuoralle tasolle.
keywords: työtaso, aseta työtaso, näytä työtaso, viitetaso, työtason katselija, nimetty taso, pinta, taso, pystysuora taso, piirrä seinälle, julkisivupiirros, tartunta, kohdistus, ref plane
from: 8aceee1d
---

## Mitä teet

Valitse taso, jolle piirrät, katso missä se on, ja piirrä tasolle, joka on pystysuorassa.

## Vaiheet

1. Ota **Piirrä** käyttöön ja avaa **Rakenna**-valikko (valintanauhan asettelussa: Arkkitehtuuri-välilehti, Työtaso).
2. Valitse **Aseta työtaso**. Tee sitten jokin seuraavista:
   - valitse taso kohdasta **Aseta tasoksi**;
   - valitse nimetty viitetaso sen vieressä olevasta luettelosta;
   - napsauta viivaa pohjakuvassa: seinä, akselilinja, viitetaso, mallin viiva tai verhoseinäjärjestelmä. Työtaso on pystysuora taso, joka kulkee tuon viivan kautta;
   - napsauta tasaista pintaa 3D-näkymässä. Työtaso on tuon pinnan tasossa.
3. Valitse **Näytä työtaso** nähdäksesi sen: värjätty arkki metrin ruudukolla 3D-näkymässä, katkoviiva tai viiva pohjakuvassa ja katkoviivakehys julkisivu- ja leikkauspaneelissa. Valitse se uudelleen piilottaaksesi sen.
4. Valitse **Työtason katselija** katsoaksesi tasoa suoraan. Mustat viivat ovat malliin tason leikkauksena. Käytä sen työkaluja piirtääksesi tasolle mallin viivan, mallin tekstin tai viitetason. **Katso 3D:ssä** kääntää 3D-näkymän tasoa kohti.

## Viitetasot

Viitetaso on nimetty taso, jonka piirrät viivana.

1. Valitse **Viitetaso**. Kirjoita nimi sen riville, jos haluat sellaisen (muuten se nimetään puolestasi), ja korkeus.
2. Napsauta kohtaa, josta se alkaa, ja kohtaa, johon se päättyy. Pohjakuvassa tämä tekee pystysuoran tason. Työtason katselijassa se tekee tason, joka on suorassa kulmassa työtasoon nähden.
3. Se näkyy pohjakuvassa vihreänä katkoviivana nimensä kanssa, 3D-näkymässä ja julkisivu- ja leikkauspaneelissa katkoviivakehyksenä.
4. Valitse se nimetäksesi uudelleen, muuttaaksesi pituutta, korkeutta ja alapäätä, tai paina **Käytä työtasona**.

Kahdella viitetasolla ei voi olla samaa nimeä, koska nimen perusteella valitaan yksi niistä.

## Hyvä tietää

- Malli, jolle työtasoa ei ole asetettu, toimii alimmalla tasollaan.
- Työtaso tallennetaan tiedostoon. Sen näyttäminen tai piilottaminen muistetaan tässä selaimessa, ei tiedostossa.
- Jos työtaso seuraa viitetasoa ja siirrät sitä, työtaso siirtyy sen mukana.
- Pystysuoralla työtasolla Mallin viiva- ja Mallin teksti -työkalut avaavat katselijan, koska pohjakuva ei voi osoittaa korkeutta.
- Piirtotyökalut tarttuvat pohjakuvassa piirrettyjen viitetasojen päihin samalla tavalla kuin muiden viivojen päihin katselijassa.

## IFC-tiedostossa

- Työtaso on ominaisuusjoukko (CadCraft_WorkPlane) projektissa.
- Viitetaso on IfcAnnotation, jonka objektityyppi on ReferencePlane ja jolla on sen nimi. Sen muoto on tason suljettu ääriviiva, joten toinen ohjelma näyttää, missä se on. Sen joukko CadCraft_ReferencePlane sisältää lähtöpisteen, suunnan, normaalin ja laajuuden. IFC:ssä ei ole viitetasoa varten omaa luokkaa; merkintää ei lasketa rakennuselementiksi eikä se rajaa huoneita.
