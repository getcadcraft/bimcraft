---
title: Početak nove zgrade
summary: Napravite prazan model zgrade sa njenim nivoima, nacrtajte zidove, postavite stavke iz biblioteke i sačuvajte ga kao IFC.
keywords: novo, nova zgrada, prazno, prazan, počni od nule, šablon, nivoi, spratovi, podovi, napravi, model
from: 546b8ae8
---

## Šta ćete uraditi

Počnite model zgrade od nule umesto da otvarate postojeći. BimCraft pravi prazan IFC model sa projektom, lokacijom, zgradom i njenim nivoima. Na nivoe možete postaviti opremu i nameštaj iz biblioteke i sačuvati ga kao IFC datoteku.

:::note
Zidovi se mogu crtati sada: pogledajte [Crtanje zidova](topic:draw-walls). Vrata, prozori, podovi i krovovi se tek pripremaju.
:::

## Koraci

1. Kliknite {{ui:New building}} pod **Otvori datoteku ili fasciklu**, ili na početnoj stranici.
2. Upišite **Naziv zgrade**.
3. Izaberite koliko **Nivoa** ima (1 do 200).
4. Upišite **Visinu nivoa**, od poda do poda: na primer `10'-0"`, `10'6"` ili `3000 mm`. Običan broj je u stopama u SAD, a u milimetrima drugde.
5. Kliknite {{ui:Create}}. Nivoi se slažu od 0, svaki za jednu visinu nivoa iznad prethodnog, i nazivaju se Nivo 1, Nivo 2 i tako dalje. Prikazuju se u stablu modela, a plan nivoa 1 se otvara uz 3D prikaz sa uključenim {{ui:Draw}}.
6. Nacrtajte zidove: pogledajte [Crtanje zidova](topic:draw-walls). Preimenujte nivoe ili promenite njihove visine u panelu **Nivoi**.
7. Postavite stavke: pogledajte [Postavljanje opreme i nameštaja iz biblioteke](topic:place-from-library). Traka za postavljanje navodi svaki nivo.
8. Kliknite {{ui:Save as IFC}}. Datoteka se imenuje po zgradi, na primer `Smith's house.ifc`.

## Dobro je znati

- Model se čuva u milimetrima, kao IFC4. Drugi BIM programi ga otvaraju.
- **Spratovi** u levom panelu navode samo nivoe na kojima je nešto postavljeno; stablo modela navodi sve.
- Dok ne sačuvate, nova zgrada se računa kao nesačuvan rad. BimCraft pita pre nego što otvorite drugu datoteku ili napustite stranicu, i čuva kopiju u ovom pregledaču za slučaj da se kartica zatvori.
