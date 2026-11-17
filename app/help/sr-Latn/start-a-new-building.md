---
title: Započnite novu zgradu
summary: Napravite prazan model zgrade sa njenim nivoima, nacrtajte zidove, postavite stavke iz biblioteke i sačuvajte ga kao IFC.
keywords: novo, nova zgrada, prazno, prazan, počni od nule, šablon, nivoi, spratovi, podovi, napravi, model
from: 68786865
---

## Šta ćete uraditi

Započnite model zgrade od nule umesto da otvorite postojeći. BimCraft pravi prazan IFC model sa projektom, lokacijom, zgradom i njenim nivoima. Na nivoe možete postaviti opremu i nameštaj iz biblioteke i sačuvati ga kao IFC datoteku.

:::note
Zidovi se mogu crtati sada: pogledajte [Crtanje zidova](topic:draw-walls). Vrata, prozori, podovi i krovovi su sledeći na redu.
:::

## Koraci

1. Kliknite {{ui:Nova zgrada}} pod **Otvori datoteku ili fasciklu**, ili na početnoj strani.
2. Upišite **Naziv zgrade**.
3. Izaberite koliko **Nivoa** ima (od 1 do 200).
4. Upišite **Visinu nivoa**, od poda do poda: na primer `10'-0"`, `10'6"` ili `3000 mm`. Običan broj znači stope u SAD, a milimetre drugde.
5. Svako polje je već popunjeno, pa ih sve možete ostaviti kakva jesu. Ispod njih okvir kaže šta započinjete: jedinice, **Tip zida** koji prvi crta alat Zid (izaberite drugi sa liste ako želite) i prvi list.
6. Kliknite {{ui:Napravi}}. Nivoi su poredani od 0, svaki za jednu visinu nivoa iznad prethodnog, i nazvani Nivo 1, Nivo 2 i tako dalje. Prikazuju se u stablu modela, a plan Nivoa 1 se otvara pored 3D prikaza sa uključenim {{ui:Crtanje}}.
7. Nacrtajte zidove: kliknite {{ui:Zid}} i dve tačke. Pogledajte [Crtanje zidova](topic:draw-walls). Preimenujte nivoe ili promenite njihove visine u panelu **Nivoi**.
8. Postavite stavke: pogledajte [Postavljanje opreme i nameštaja iz biblioteke](topic:place-from-library). Traka za postavljanje navodi svaki nivo.
9. Kliknite {{ui:Sačuvaj kao IFC}}. Datoteka se imenuje po zgradi, na primer `Smith's house.ifc`.

## Dobro je znati

- Model se čuva u milimetrima, kao IFC4. Drugi BIM programi ga otvaraju.
- Nova zgrada dolazi sa jednim listom, **A-101**, koji sadrži plan najnižeg nivoa: A3 u razmeri 1:100 kad radite u metričkim jedinicama, a inače Tabloid u razmeri 1/8" = 1'-0". Prazan je dok se ne nacrta prvi zid, a zatim prikazuje plan kako crtate. Otvorite ga pod **Listovi** u pregledaču projekta da promenite papir, razmeru ili naslov, dodate poglede ili ga obrišete. Zgrada započeta iz šablona umesto toga donosi listove šablona.
- Da promenite šta svaka nova zgrada dobija na početku (tip zida za metričke projekte, nivoe, prvi list, alat koji je aktivan posle {{ui:Napravi}}), pogledajte [Podrazumevana pravila](topic:default-policies).
- Ništa ne mora da se podesi pre prvog zida. Tip zida, visine nivoa, jedinice i list mogu se sve promeniti kasnije.
- **Spratovi** u levom panelu navode samo nivoe na kojima nešto stoji; stablo modela navodi sve.
- Dok ne sačuvate, nova zgrada se računa kao nesačuvan rad. BimCraft pita pre nego što otvorite drugu datoteku ili izađete i čuva kopiju u ovom pregledaču, za slučaj da se kartica zatvori.
