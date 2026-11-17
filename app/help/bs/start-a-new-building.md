---
title: Počni novu zgradu
summary: Napravi praznu model zgrade sa njenim nivoima, nacrtaj njene zidove, postavi elemente iz biblioteke i spasi je kao IFC.
keywords: novo, nova zgrada, prazno, prazan, počni od nule, šablon, nivoi, spratovi, podovi, kreiraj, model
from: 68786865
---

## Šta ćeš uraditi

Počni model zgrade od nule umjesto da otvaraš postojeći. BimCraft pravi prazan IFC model sa projektom, lokacijom, zgradom i njenim nivoima. Na nivoe možeš postaviti opremu i namještaj iz biblioteke i spasiti ga kao IFC datoteku.

:::note
Zidovi se mogu crtati odmah: vidi [Nacrtaj zidove](topic:draw-walls). Vrata, prozori, podovi i krovovi se tek rade.
:::

## Koraci

1. Klikni {{ui:Nova zgrada}} pod **Otvori datoteku ili folder**, ili na početnoj stranici.
2. Upiši **Naziv zgrade**.
3. Odaberi koliko **Nivoa** ima (1 do 200).
4. Upiši **Visinu nivoa**, od poda do poda: na primjer `10'-0"`, `10'6"` ili `3000 mm`. Običan broj znači stope u SAD, a milimetre drugdje.
5. Sva polja su već popunjena, pa ih možeš ostaviti kakva jesu. Ispod njih okvir kaže šta počinješ: jedinice, **Tip zida** koji alat Zid prvo crta (odaberi drugi sa liste ako želiš) i prvi list.
6. Klikni {{ui:Kreiraj}}. Nivoi se slažu od 0, svaki za jednu visinu nivoa iznad prethodnog, i nazivaju se Nivo 1, Nivo 2 i tako dalje. Prikazuju se u stablu modela, a plan Nivoa 1 se otvara pored 3D prikaza sa uključenim {{ui:Crtanje}}.
7. Nacrtaj zidove: klikni {{ui:Zid}} i dvije tačke. Vidi [Nacrtaj zidove](topic:draw-walls). Preimenuj nivoe ili promijeni njihove visine na panelu **Nivoi**.
8. Postavi elemente: vidi [Postavi opremu i namještaj iz biblioteke](topic:place-from-library). Traka za postavljanje navodi svaki nivo.
9. Klikni {{ui:Spasi kao IFC}}. Datoteka se imenuje po zgradi, na primjer `Smith's house.ifc`.

## Dobro je znati

- Model se čuva u milimetrima, kao IFC4. Drugi BIM programi ga otvaraju.
- Nova zgrada dolazi sa jednim listom, **A-101**, koji sadrži plan najnižeg nivoa: A3 u razmjeri 1:100 kada radiš u metričkim jedinicama, inače Tabloid u 1/8" = 1'-0". Prazan je dok se ne nacrta prvi zid, a onda prikazuje plan kako crtaš. Otvori ga pod **Listovi** u pregledaču projekta da promijeniš njegov papir, razmjeru ili naslov, dodaš poglede ili ga obrišeš. Zgrada započeta iz šablona donosi listove šablona.
- Da promijeniš ono sa čim počinje svaka nova zgrada (tip zida za metričke projekte, nivoe, prvi list, alat koji je aktivan nakon Kreiraj), vidi [Zadane politike](topic:default-policies).
- Ništa ne treba podešavati prije prvog zida. Tip zida, visine nivoa, jedinice i list mogu se promijeniti kasnije.
- **Spratovi** u lijevom panelu navode samo nivoe na kojima nešto postoji; stablo modela navodi sve.
- Dok ne spasiš, nova zgrada se računa kao nespašeni rad. BimCraft pita prije nego otvoriš drugu datoteku ili izađeš, i čuva kopiju u ovom pregledaču u slučaju da se kartica zatvori.
