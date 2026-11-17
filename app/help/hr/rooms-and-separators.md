---
title: Prostorije i razdjelnici prostorija
summary: Odaberite prostoriju da joj dodijelite naziv i broj te pročitate njezinu površinu, opseg i volumen. Nacrtajte razdjelnik prostorija tamo gdje se dvije prostorije spajaju bez zida među njima.
keywords: prostorija, prostorije, razdjelnik prostorija, linija razdvajanja, prostor, IfcSpace, naziv, broj, površina, opseg, volumen, otvoreni tlocrt, podijeliti prostoriju, kuhinja i dnevni boravak, nezatvoreno
from: d4c1d66b
---

## Što ćete učiniti

Imenujte prostorije koje tvore zidovi i podijelite otvorenu prostoriju na dvije bez zida.

## Gdje su alati

- Rasporedi s vrpcom: {{ui:Arhitektura}} › **Prostorija i površina** › {{ui:Prostorija}} i {{ui:Razdjelnik prostorija}}.
- Klasični raspored: traka za crtanje › izbornik {{ui:Prostorije}}.
- Bilo koji stil izbornika: naredbe se zovu Prostorija i Razdjelnik prostorija; paleta naredbi ih pronalazi.

## Koraci

1. Nacrtajte zidove. Svaka zatvorena petlja zidova već je prostorija: BimCraft je stvara, numerira i dodjeljuje joj površinu dok crtate.
2. Odaberite {{ui:Prostorija}}. Pomaknite se preko tlocrta: prostorija pod pokazivačem svijetli sa svojom površinom, opsegom i volumenom.
3. Da brzo imenujete prostorije, prvo u retku upišite {{ui:Naziv}} i {{ui:Broj}}, pa kliknite u prostoriju. Broj se za sljedeću prostoriju povećava za jedan (101, 102; A-09, A-10).
4. Ili samo kliknite prostoriju: ona se odabire, a Svojstva imaju njezin naziv, broj, površinu, opseg, volumen i oznaku.
5. Da podijelite otvorenu prostoriju, odaberite {{ui:Razdjelnik prostorija}} i kliknite dvije točke: zid do zida ili zid do drugog razdjelnika. Za lanac nastavite klikati; Enter, Esc ili dvostruki klik završavaju ga.

## Što radi razdjelnik

- Ograničava prostorije kao zid bez debljine. Površine dviju prostorija zajedno točno daju prostoriju od koje su nastale.
- Prostorija koja zadržava sredinu stare prostorije zadržava naziv i broj. Druga je nova.
- Razdjelnik koji završava u otvorenom prostoru, bez dodira na jednom kraju, ne dijeli ništa. Produljite ga pa hoće.
- Dio razdjelnika koji leži unutar zida se zanemaruje, pa se možete hvatati za središnje linije zidova.
- Odaberite razdjelnik i pritisnite Delete da ga uklonite: dvije prostorije opet postaju jedna. Poništavanje ga vraća.

## Ako nema prostorije tamo gdje kliknete

Statusna traka to kaže: zidovi se tamo ne zatvaraju. Zatvorite prazninu ili nacrtajte razdjelnik preko nje. Ništa se ne odbija; jednostavno još nema zatvorene prostorije.

## U IFC-u

Prostorija je IfcSpace s brojem (Name), nazivom (LongName) i Qto_SpaceBaseQuantities: NetFloorArea, NetPerimeter, Height, NetVolume. Volumen je površina puta visina do razine iznad.

Razdjelnik prostorija je IfcVirtualElement, entitet koji IFC ima za granicu koja nije izgrađena. Ima liniju i nema tijelo, pa drugi program ne vidi zid i ne broji ništa za nju.

## Još nije izrađeno

- Zakrivljeni razdjelnici.
- Prostorija koja prati kosi strop: volumen je uvijek površina puta visina razine.
- Odnosi granica prostora (IfcRelSpaceBoundary) nisu zapisani, ni za zidove ni za razdjelnike.

Vidi i [Oznake prostorija i površina](topic:room-and-area-tags), [Površine i granice površina](topic:areas-and-area-boundaries).
