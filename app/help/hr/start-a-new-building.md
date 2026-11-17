---
title: Početak nove zgrade
summary: Napravite prazan model zgrade s njezinim razinama, nacrtajte zidove, postavite stavke iz knjižnice i spremite ga kao IFC.
keywords: novo, nova zgrada, prazno, prazan, početak od nule, predložak, razine, etaže, podovi, izradi, model
from: 68786865
---

## Što ćete napraviti

Započnite model zgrade od nule umjesto da otvorite postojeći. BimCraft izrađuje prazan IFC model s projektom, lokacijom, zgradom i njezinim razinama. Na razinama možete postaviti opremu i namještaj iz knjižnice te ga spremiti kao IFC datoteku.

:::note
Zidove je moguće nacrtati sada: vidi [Crtanje zidova](topic:draw-walls). Vrata, prozori, podovi i krovovi su u izradi.
:::

## Koraci

1. Kliknite {{ui:Nova zgrada}} pod **Otvori datoteku ili mapu** ili na početnoj stranici.
2. Upišite **Naziv zgrade**.
3. Odaberite koliko **Razina** ima (1 do 200).
4. Upišite **Visina razine**, od poda do poda: na primjer `10'-0"`, `10'6"` ili `3000 mm`. Obični broj je u stopama u SAD-u, a u milimetrima drugdje.
5. Sva polja su već popunjena, pa ih možete ostaviti kakva jesu. Ispod njih okvir kaže s čime započinjete: jedinice, **Vrstu zida** koju alat Zid prvu crta (po želji odaberite drugu s popisa) i prvi list.
6. Kliknite {{ui:Izradi}}. Razine su poredane od 0, svaka jednu visinu razine iznad prethodne, i nazvane Razina 1, Razina 2 itd. Prikazuju se u {{ui:Stablo modela}}, a tlocrt Razine 1 otvara se uz 3D prikaz s uključenim {{ui:Crtanje}}.
7. Nacrtajte zidove: kliknite {{ui:Zid}} i dvije točke. Vidi [Crtanje zidova](topic:draw-walls). Preimenujte razine ili promijenite njihove visine na ploči **Razine**.
8. Postavite stavke: vidi [Postavljanje opreme i namještaja iz knjižnice](topic:place-from-library). Traka za postavljanje navodi svaku razinu.
9. Kliknite {{ui:Spremi kao IFC}}. Datoteka se imenuje po zgradi, na primjer `Smith's house.ifc`.

## Dobro je znati

- Model se sprema u milimetrima, kao IFC4. Drugi BIM programi ga mogu otvoriti.
- Nova zgrada dolazi s jednim listom, **A-101**, koji sadrži tlocrt najniže razine: A3 u mjerilu 1:100 kad radite u metričkim jedinicama, inače Tabloid u 1/8" = 1'-0". Prazan je do prvog zida, a onda prikazuje tlocrt dok crtate. Otvorite ga pod **{{ui:Listovi}}** u pregledniku projekta da promijenite papir, mjerilo ili naslov, dodate poglede ili ga izbrišete. Zgrada započeta iz predloška donosi listove predloška.
- Za promjenu onoga s čime svaka nova zgrada započinje (vrsta zida za metričke projekte, razine, prvi list, alat koji je aktivan nakon Izradi) vidi [Zadane postavke](topic:default-policies).
- Ništa ne mora biti postavljeno prije prvog zida. Vrsta zida, visine razina, jedinice i list mogu se kasnije promijeniti.
- **Etaže** u lijevom oknu popisuju samo razine na kojima nešto stoji; stablo modela navodi ih sve.
- Dok ne spremite, nova zgrada se smatra nespremljenim radom. BimCraft pita prije otvaranja druge datoteke ili izlaska i čuva kopiju u ovom pregledniku ako se kartica zatvori.
