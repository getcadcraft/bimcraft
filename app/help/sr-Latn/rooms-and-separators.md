---
title: Prostorije i razdelnici prostorija
summary: Izaberi prostoriju da joj daš naziv i broj i pročitaš njenu površinu, obim i zapreminu. Nacrtaj razdelnik prostorija tamo gde se dve prostorije spajaju bez zida između njih.
keywords: prostorija, prostorije, razdelnik prostorija, linija razdvajanja, prostor, IfcSpace, naziv, broj, površina, obim, zapremina, otvoreni plan, podela prostorije, kuhinja i dnevna soba, nezatvoreno
from: d4c1d66b
---

## Šta ćeš uraditi

Imenuj prostorije koje zidovi čine i podeli otvorenu prostoriju na dve bez zida.

## Gde su alatke

- Rasporedi trake: {{ui:Arhitektura}} › **Prostorija i površina** › {{ui:Prostorija}} i {{ui:Razdelnik prostorija}}.
- Klasičan raspored: traka za crtanje › meni {{ui:Prostorije}}.
- Bilo koji stil menija: naredbe se zovu Room i Room Separator; paleta naredbi ih nalazi.

## Koraci

1. Nacrtaj zidove. Svaka zatvorena petlja zidova je već prostorija: BimCraft je pravi, numeriše i daje joj površinu dok crtaš.
2. Izaberi {{ui:Prostorija}}. Pređi preko plana: prostorija pod pokazivačem se osvetli sa svojom površinom, obimom i zapreminom.
3. Da brzo imenuješ prostorije, prvo u traci upiši {{ui:Naziv}} i {{ui:Broj}}, pa klikni u prostoriji. Broj ide za jedan za sledeću prostoriju (101, 102; A-09, A-10).
4. Ili samo klikni na prostoriju: ona se izabere, a Svojstva imaju njen naziv, broj, površinu, obim, zapreminu i njenu oznaku.
5. Da podeliš otvorenu prostoriju, izaberi {{ui:Razdelnik prostorija}} i klikni dve tačke: od zida do zida, ili od zida do drugog razdelnika. Nastavi klikanjem za lanac; Enter, Esc ili dvostruki klik završavaju ga.

## Šta razdelnik radi

- Ograničava prostorije kao zid bez debljine. Površine dve prostorije zbrojene su tačno jednake prostoriji koja je bila.
- Prostorija koja drži sredinu stare prostorije zadržava naziv i broj. Druga je nova.
- Razdelnik koji se zaustavlja na otvorenom, bez dodira na jednom kraju, ne deli ništa. Produži ga i hoće.
- Deo razdelnika koji leži unutar zida se ignoriše, pa možeš da se hvataš za sredinu zida.
- Izaberi razdelnik i pritisni Delete da ga ukloniš: dve prostorije se ponovo spajaju u jednu. {{ui:Opozovi}} ga vraća.

## Ako nema prostorije tamo gde kliknete

Statusna linija to kaže: zidovi se tamo ne zatvaraju. Zatvori prazninu ili nacrtaj razdelnik preko nje. Ništa se ne odbija; jednostavno još nema zatvorene prostorije.

## U IFC-u

Prostorija je IfcSpace sa svojim brojem (Name), nazivom (LongName) i Qto_SpaceBaseQuantities: NetFloorArea, NetPerimeter, Height, NetVolume. Zapremina je površina puta visina do nivoa iznad.

Razdelnik prostorije je IfcVirtualElement, entitet koji IFC ima za granicu koja nije izgrađena. Ima liniju i nema telo, pa drugi program ne čita zid i ne broji ništa za nju.

## Još nije napravljeno

- Zakriveljeni razdelnici.
- Prostorija koja prati kosi plafon: zapremina je uvek površina puta visina nivoa.
- Odnosi granica prostora (IfcRelSpaceBoundary) se ne upisuju, ni za zidove ni za razdelnike.

Pogledaj takođe [Oznake prostorija i površina](topic:room-and-area-tags), [Površine i granice površina](topic:areas-and-area-boundaries).
