---
title: BimCraft zaslon
summary: Obilazak svake trake, ploče i gumba po nazivu na zaslonu te kako se zaslon mijenja za svaku vrstu datoteke.
keywords: zaslon, raspored, ploče, alatna traka, sučelje, obilazak, ploča svojstava, preglednik, traka aplikacije
from: 2eb01ec2
---

BimCraft zaslon ima traku preko vrha i tri područja ispod nje: ploču lijevo, pozornicu na sredini i ploču {{ui:Svojstva}} desno. Što se pojavljuje u svakom području ovisi o onome što ste otvorili: IFC model, projektnu datoteku ili datoteku obitelji, crtež ili mapu.

## Traka aplikacije

Tanka traka preko vrha pripada web-mjestu CadCraft, a ne samom BimCraftu. S lijeva na desno:

- Znak CadCraft: vodi na početnu stranicu CadCrafta.
- Naziv aplikacije i izbornik verzija. U internoj verziji prikazuje koju verziju koristite i omogućuje prelazak na objavljenu verziju.
- {{ui:O aplikaciji BimCraft}}: stranica aplikacije na web-mjestu.
- {{ui:Postavke}}: BimCraftove vlastite postavke i one koje dijele sve aplikacije. Vidi [Postavke BimCrafta](topic:settings).
- {{ui:Cijeli zaslon}}: mijenja načine zaslona. Vidi [Načini zaslona](topic:workspace#screen-modes) dolje.
- {{ui:Papir}} i {{ui:Model}}: svijetla i tamna tema. 3D prikaz i 2D crteži prate temu koju odaberete.

## Lijeva ploča

Lijeva ploča uvijek počinje s **Otvori datoteku ili mapu**:

- Područje za ispuštanje, {{ui:Odaberite datoteku ili ovdje ispustite datoteku ili mapu}}. Kliknite ga da odaberete jednu datoteku ili na njega ispustite datoteku ili mapu (ili bilo gdje na stranici).
- {{ui:Otvori mapu}}: odaberite cijelu projektnu mapu. Vidi [Otvaranje cijele projektne mape](topic:open-project-folder).
- {{ui:Nedavne mape}}: pojavljuje se u Chromeu i Edgeu nakon što mapu otvorite biračem mapa ili ispuštanjem. Kliknite {{ui:Ponovno otvori}} i naziv mape da je ponovno otvorite ili mali × da je zaboravite.

Ispod nje odjeljci se pojavljuju prema potrebi:

| Odjeljak | Kada se prikazuje | Što sadrži |
|---|---|---|
| {{ui:Promjene}} | Otvoren je IFC model | Vaše nespremljene izmjene, najnovije prve, s {{ui:Poništi}} i {{ui:Spremi kao IFC}} |
| {{ui:Datoteka}} | Otvoren je model ili kartica datoteke | Podaci o datoteci: veličina, shema ili izdanje, projekt, autor, broj elemenata |
| {{ui:Crtež}} | Otvoren je DWG ili DXF | Format, jedinice, brojevi entiteta i slojeva, listovi, povezani crteži, oprema |
| {{ui:Mapa}} | Otvorena je mapa | Brojevi datoteka i modela, veličina, pronađeni problemi |
| {{ui:Natrag na mapu}} | Otvorili ste datoteku iz mape | Vraća na izvješće o mapi |
| {{ui:Slojevi}} | Otvoren je crtež | Potvrdni okvir po sloju, s {{ui:Sve uključeno}} i {{ui:Sve isključeno}} |
| {{ui:Etaže}} | Otvoren je IFC model | Potvrdni okvir po etaži, najviša etaža prva |
| {{ui:Elementi}} | Otvoren je IFC model | Koliko elemenata svake vrste model sadrži (30 najčešćih) |

## Pozornica

Sredina zaslona prikazuje otvorenu datoteku.

- **Prazno**: „Otvorite model zgrade.“ s {{ui:Odaberi datoteku}} i {{ui:Otvori mapu}} te kratkim opisom svakog formata.
- **IFC model**: 3D prikaz s alatnom trakom preko vrha, u imenovanim skupinama poput onih u aplikaciji za crtanje CadCraft, s ikonom svakog alata iznad njegova naziva: {{ui:Pogled}} ({{ui:Prilagodi}}, {{ui:Gore}}, {{ui:Naprijed}}, {{ui:Bočno}}, {{ui:Bridovi}}, {{ui:Prostori}}); {{ui:Uređivanje}} ({{ui:Poništi}}, {{ui:Ponovi}}, {{ui:Kopiraj}}, {{ui:Zalijepi}} i {{ui:Više}}, vidi [Kopiranje, lijepljenje i dupliciranje stavki knjižnice](topic:copy-paste)); {{ui:Model}} ({{ui:Jedinice}} i {{ui:Crtanje}}); {{ui:Knjižnica}} ({{ui:Knjižnica}}, {{ui:Oprema}}, {{ui:Ažuriranja}}, {{ui:Zasluge}}); {{ui:Pregled}} ({{ui:Prikaži}}, {{ui:Presjek}}, {{ui:Šetnja}}, {{ui:Mjeri}}; vidi [Rezanje IFC modela ravninom presjeka](topic:section-plane)); i {{ui:Izlaz}} (render, prikaz uživo, VR, izvozi, bojanje i spremljeni pogledi). Kada je {{ui:Crtanje}} uključeno, traka Crtanje ispod nje izgleda isto: {{ui:Pogled}} (razina i vrsta tlocrta), {{ui:Crtanje}}, {{ui:Uređivanje}} i {{ui:Knjižnica}}. ViewCube se nalazi u donjem desnom kutu. Vidi [Otvaranje IFC modela i razgledavanje u 3D-u](topic:open-ifc-model). {{ui:Postavke}}, {{ui:Općenito}} bira ikone, oznake ili oboje na ovim gumbima, prikazuje ili skriva nazive skupina, a desnim klikom na alatnu traku uređujete raspored njezinih alata i skupina. U niskom prozoru alatna traka ispušta nazive ispod ikona.
- **Projektna datoteka ili datoteka obitelji**: kartica datoteke sa slikom pregleda, podacima o projektu i povezanim datotekama. Vidi [Čitanje projektne datoteke ili datoteke obitelji](topic:read-rvt-file).
- **DWG ili DXF**: red kartica ({{ui:Model}}, zatim jedna po listu, zatim {{ui:Oprema}} kada crtež ima označenu opremu, {{ui:3D}}, {{ui:Prilagodi}} i {{ui:Pogled ispisa}}), crtež i žive X i Y koordinate u kutu. Vidi [Pregled DWG ili DXF crteža](topic:view-dwg) i [DWG ili DXF crtež u 3D-u](topic:dwg-in-3d).
- **Mapa**: izvješće o mapi s okvirom {{ui:Počnite ovdje}} i tablicama modela, veza, IFC modela i crteža. Vidi [Otvaranje cijele projektne mape](topic:open-project-folder).

**Statusni redak** pri dnu pozornice govori što BimCraft radi („Čitanje modela…“, „Izrada geometrije: 1200 od 5400 elemenata“) i što je pošlo po zlu, crvenom bojom, kada nešto ne uspije. Poruke o uspjehu nestaju nakon nekoliko sekundi.

## Ploča Svojstva

Desna ploča prikazuje:

- Za IFC model: element koji ste kliknuli, s nazivom, tipom, oznakom, GlobalId-om i svakim skupom svojstava. Vrijednosti koje možete mijenjati izgledaju kao gumbi. Vidi [Polja ploče Svojstva](topic:properties-panel).
- Za crtež: kako se kretati, povezane crteže i slike crteža te je li svaka pronađena, i popis onoga što **Još nije nacrtano**.
- Za karticu datoteke ili mapu: kratku napomenu što otvoriti sljedeće.

## Na malom zaslonu

Kada je prozor uži od zaslona prijenosnog računala, BimCraft slaže svoja područja jedno na drugo: pozornica gore, a ploče ispod. Pomaknite stranicu da dođete do ploča. Na mobitelu čine jedan stupac, a na tabletu dva.

## Načini zaslona

Gumb {{ui:Cijeli zaslon}} na traci aplikacije, ili {{key:Ctrl+Shift+F}} na svakoj platformi, mijenja tri načina:

1. Uobičajeno.
2. Cijeli zaslon, uz trake koje su i dalje vidljive.
3. Cijeli zaslon sa skrivenom trakom aplikacije. Pomaknite pokazivač na gornji rub ili dodirnite ondje da je vratite.

Pritisnite {{key:Esc}} da se vratite na uobičajeno. Preglednici bez podrške za cijeli zaslon (primjerice na iPhoneu) prebacuju samo između uobičajenog i skrivenih traka.

## Povezano

- [Tipke i miš](topic:keyboard)
- [Datoteke koje BimCraft otvara i sprema](topic:files)
