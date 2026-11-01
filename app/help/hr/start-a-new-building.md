---
title: Pokretanje nove zgrade
summary: Izradite prazan model zgrade s razinama, nacrtajte zidove, postavite stavke iz knjižnice i spremite je kao IFC.
keywords: novo, nova zgrada, prazno, početi od nule, predložak, razine, etaže, katovi, izrada, model
from: 546b8ae8
---

## Što ćete učiniti

Pokrenite model zgrade od nule umjesto da otvarate postojeći. BimCraft izrađuje prazan IFC model s projektom, lokacijom, zgradom i njezinim razinama. Opremu i namještaj možete postaviti na razine iz knjižnice i spremiti kao IFC datoteku.

:::note
Zidove je sada moguće crtati: vidi [Crtanje zidova](topic:draw-walls). Vrata, prozori, ploče i krovovi izrađuju se sljedeći.
:::

## Koraci

1. Kliknite {{ui:Nova zgrada}} pod **Otvori datoteku ili mapu**, ili na početnoj stranici.
2. Upišite **Naziv zgrade**.
3. Odaberite koliko **Razina** ima (od 1 do 200).
4. Upišite **Visinu razine**, od poda do poda: na primjer `10'-0"`, `10'6"` ili `3000 mm`. Običan broj su stope u SAD-u, a drugdje milimetri.
5. Kliknite {{ui:Izradi}}. Razine se slažu od 0, svaka za jednu visinu razine iznad prethodne, a nazivaju se Razina 1, Razina 2 i tako dalje. Prikazuju se u stablu modela, a tlocrt Razine 1 otvara se pored 3D prikaza s uključenim {{ui:Crtanje}}.
6. Nacrtajte zidove: vidi [Crtanje zidova](topic:draw-walls). Preimenujte razine ili promijenite njihove visine na ploči **Razine**.
7. Postavite stavke: vidi [Postavljanje opreme i namještaja iz knjižnice](topic:place-from-library). Traka za postavljanje navodi svaku razinu.
8. Kliknite {{ui:Spremi kao IFC}}. Datoteka se naziva prema zgradi, na primjer `Smith's house.ifc`.

## Dobro je znati

- Model se sprema u milimetrima, kao IFC4. Otvaraju ga i drugi BIM programi.
- **Etaže** u lijevoj ploči navode samo razine na kojima nešto postoji; stablo modela navodi sve.
- Dok ne spremite, nova zgrada smatra se nespremljenim radom. BimCraft pita prije nego što otvorite drugu datoteku ili napustite stranicu, a kopiju čuva u ovom pregledniku za slučaj da se kartica zatvori.
