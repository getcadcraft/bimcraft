---
title: Početak nove zgrade
summary: Napravite prazan model zgrade s njenim nivoima, nacrtajte zidove, postavite stavke iz biblioteke i spasite ga kao IFC.
keywords: novo, nova zgrada, prazno, prazan, od nule, šablon, nivoi, spratovi, podovi, kreiraj, model
from: 546b8ae8
---

## Šta ćete uraditi

Počnite model zgrade od nule umjesto da otvarate postojeći. BimCraft pravi prazan IFC model s projektom, lokacijom, zgradom i njenim nivoima. Na nivoe možete postaviti opremu i namještaj iz biblioteke i spasiti ga kao IFC datoteku.

:::note
Zidovi se sada mogu crtati: pogledajte [Crtanje zidova](topic:draw-walls). Vrata, prozori, podovi i krovovi se tek izrađuju.
:::

## Koraci

1. Kliknite {{ui:New building}} pod **Otvori datoteku ili folder**, ili na početnoj stranici.
2. Ukucajte **Naziv zgrade**.
3. Izaberite koliko **Nivoa** ima (od 1 do 200).
4. Ukucajte **Visinu nivoa**, od poda do poda: na primjer `10'-0"`, `10'6"` ili `3000 mm`. Običan broj znači stope u SAD-u, a milimetre drugdje.
5. Kliknite {{ui:Create}}. Nivoi se slažu od 0, svaki jednu visinu nivoa iznad prethodnog, i nazivaju se Nivo 1, Nivo 2 i tako dalje. Prikazuju se u stablu modela, a plan Nivoa 1 otvara se pored 3D prikaza s uključenim {{ui:Draw}}.
6. Nacrtajte zidove: pogledajte [Crtanje zidova](topic:draw-walls). Preimenujte nivoe ili promijenite njihove visine na panelu **Nivoi**.
7. Postavite stavke: pogledajte [Postavljanje opreme i namještaja iz biblioteke](topic:place-from-library). Traka za postavljanje navodi svaki nivo.
8. Kliknite {{ui:Save as IFC}}. Datoteka se naziva po zgradi, na primjer `Smith's house.ifc`.

## Dobro je znati

- Model se čuva u milimetrima, kao IFC4. Drugi BIM programi ga otvaraju.
- **Spratovi** u lijevom panelu navode samo nivoe na kojima nešto postoji; stablo modela navodi ih sve.
- Dok ne spasite, nova zgrada se smatra nespašenim radom. BimCraft pita prije nego što otvorite drugu datoteku ili izađete, i čuva kopiju u ovom pregledaču u slučaju da se kartica zatvori.
