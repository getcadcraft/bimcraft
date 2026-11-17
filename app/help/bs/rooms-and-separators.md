---
title: Prostorije i razdjelnici prostorija
summary: Odaberite prostoriju da joj dodijelite naziv i broj i pročitate njenu površinu, obim i zapreminu. Nacrtajte razdjelnik prostorija tamo gdje se dvije prostorije spajaju bez zida između njih.
keywords: prostorija, prostorije, razdjelnik prostorija, linija razdvajanja, prostor, IfcSpace, naziv, broj, površina, obim, zapremina, otvoreni plan, podijeli prostoriju, kuhinja i dnevna soba, nije zatvoreno
from: d4c1d66b
---

## Šta ćete uraditi

Imenujte prostorije koje formiraju zidovi, i podijelite otvorenu prostoriju na dvije bez zida.

## Gdje su alati

- Layouti sa trakom: {{ui:Arhitektura}} › **Prostorija i površina** › {{ui:Prostorija}} i {{ui:Razdjelnik prostorija}}.
- Klasični layout: traka Crtanje › meni {{ui:Prostorije}}.
- Bilo koji stil menija: naredbe se zovu Prostorija i Razdjelnik prostorija; paleta naredbi ih pronalazi.

## Koraci

1. Nacrtajte zidove. Svaka zatvorena petlja zidova je već prostorija: BimCraft je pravi, numeriše i daje joj površinu dok crtate.
2. Odaberite {{ui:Prostorija}}. Pređite preko plana: prostorija ispod pokazivača svijetli sa svojom površinom, obimom i zapreminom.
3. Da brzo imenujete prostorije, prvo upišite {{ui:Naziv}} i {{ui:Broj}} u redu, pa kliknite u prostoriju. Broj se povećava za jedan za sljedeću prostoriju (101, 102; A-09, A-10).
4. Ili samo kliknite prostoriju: ona se odabere, a Svojstva imaju njen naziv, broj, površinu, obim, zapreminu i njenu oznaku.
5. Da podijelite otvorenu prostoriju, odaberite {{ui:Razdjelnik prostorija}} i kliknite dvije tačke: od zida do zida, ili od zida do drugog razdjelnika. Nastavite klikati za lanac; Enter, Esc ili dvostruki klik ga završava.

## Šta razdjelnik radi

- Ograničava prostorije kao zid bez debljine. Površine dvije prostorije zbrajaju se tačno u prostoriju koju su bile.
- Prostorija koja sadrži sredinu stare prostorije zadržava njen naziv i broj. Druga je nova.
- Razdjelnik koji se zaustavlja na otvorenom, bez dodira na jednom kraju, ne dijeli ništa. Produžite ga i hoće.
- Dio razdjelnika koji leži unutar zida se ignoriše, pa se možete uhvatiti za osu zida.
- Odaberite razdjelnik i pritisnite Delete da ga uklonite: dvije prostorije postaju opet jedna. Poništi ga vraća.

## Ako nema prostorije tamo gdje kliknete

Statusna linija to kaže: zidovi se tamo ne zatvaraju. Zatvorite prazninu ili nacrtajte razdjelnik preko nje. Ništa se ne odbija; jednostavno još nema zatvorene prostorije.

## U IFC-u

Prostorija je IfcSpace sa svojim brojem (Name), nazivom (LongName) i Qto_SpaceBaseQuantities: NetFloorArea, NetPerimeter, Height, NetVolume. Zapremina je površina puta visina do nivoa iznad.

Razdjelnik prostorija je IfcVirtualElement, entitet koji IFC ima za granicu koja nije izgrađena. Ima liniju i nema tijelo, pa drugi program ne čita zid i ništa ne broji za njega.

## Još nije urađeno

- Zakrivljeni razdjelnici.
- Prostorija koja prati kosi plafon: zapremina je uvijek površina puta visina nivoa.
- Relacije granica prostora (IfcRelSpaceBoundary) se ne zapisuju, ni za zidove ni za razdjelnike.

Vidi i [Oznake prostorija i površina](topic:room-and-area-tags), [Površine i granice površina](topic:areas-and-area-boundaries).
