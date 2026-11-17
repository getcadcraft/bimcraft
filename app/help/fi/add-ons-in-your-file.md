---
title: Tiedostosi käyttämät lisäosat
summary: BimCraft merkitsee IFC-tiedostoon, mitkä lisäosat ovat kirjoittaneet siihen, ja tarjoaa puuttuvien lisäämistä, kun avaat sen.
keywords: lisäosa, addon, tiedosto käyttää, puuttuva lisäosa, trusscraft, kirjasto, merkintä, cadcraft_addons
from: 9d9500d8
---

## Mitä se tekee

Kun lisäosa kirjoittaa malliin (kattoristikko, putkilinja), BimCraft tallentaa lisäosan ja sen version IFC-projektiin ominaisuusjoukkoon CadCraft_AddOns. Merkintä kirjoitetaan samaan kumoamisvaiheeseen kuin lisäosan oma muutos, joten muutoksen kumoaminen vie merkinnänkin mukanaan. Muut ohjelmat jättävät ominaisuusjoukon huomiotta; lisäosan piirtämä jää tiedostoon joka tapauksessa.

## Vaiheet

1. Avaa IFC-tiedosto, jonka tekemiseen lisäosa auttoi.
2. Jos jokin sen käyttämä lisäosa ei ole päällä, mallin yläpuolella on huomautus, joka kertoo, mitkä lisäosat ne ovat, ja painike niiden lisäämiseksi kirjastotililtäsi.
3. Lisää ne tai sulje huomautus. Malli avautuu kummassakin tapauksessa.

## Yleiset virheet

- **Huomautusta ei tule.** Et ole kirjautunut tilillesi tässä välilehdessä, tai tiedostossa ei ole merkintää (se on tehty ennen merkintöjä tai toisella ohjelmalla).
- **Muutoslistassa lukee "undefined".** Korjattu: nimikkeet näyttävät nyt lisäosan nimen.

## Seuraavaksi

- [Sijoita laitteita ja kalusteita kirjastosta](topic:place-from-library)
