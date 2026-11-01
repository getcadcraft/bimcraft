---
title: Ekran BimCraft-a
summary: Obilazak svake trake, panela i dugmeta po njihovom nazivu na ekranu i kako se ekran menja za svaku vrstu datoteke.
keywords: ekran, raspored, paneli, traka alata, interfejs, ui, obilazak, panel svojstava, pregledač, traka aplikacije
from: 2eb01ec2
---

Ekran BimCraft-a ima traku pri vrhu i tri oblasti ispod nje: panel levo, prostor za prikaz u sredini i panel {{ui:Properties}} desno. Šta se pojavljuje u svakoj oblasti zavisi od toga šta ste otvorili: IFC model, projektnu ili porodičnu datoteku, crtež ili fasciklu.

## Traka aplikacije

Tanka traka pri vrhu pripada sajtu CadCraft, a ne samom BimCraft-u. Sleva nadesno:

- Znak CadCraft: vodi na početnu stranicu CadCraft-a.
- Naziv aplikacije i meni verzije. U internoj verziji pokazuje koju verziju pokrećete i omogućava prebacivanje na objavljenu verziju.
- {{ui:About BimCraft}}: stranica aplikacije na sajtu.
- {{ui:Settings}}: BimCraft-ova sopstvena podešavanja i ona koja dele sve aplikacije. Pogledajte [Podešavanja BimCraft-a](topic:settings).
- {{ui:Full screen}}: menja režime ekrana. Pogledajte [Režimi celog ekrana](topic:workspace#screen-modes) dole.
- {{ui:Paper}} i {{ui:Model}}: svetla i tamna tema. 3D prikaz i 2D crteži prate temu koju izaberete.

## Levi panel

Levi panel uvek počinje sa **Otvori datoteku ili fasciklu**:

- Oblast za prevlačenje, {{ui:Choose a file, or drop a file or folder here}}. Kliknite da izaberete jednu datoteku, ili prevucite datoteku ili fasciklu na nju (ili bilo gde na stranici).
- {{ui:Open a folder}}: izaberite celu fasciklu projekta. Pogledajte [Otvaranje cele fascikle projekta](topic:open-project-folder).
- {{ui:Recent folders}}: pojavljuje se u Chrome i Edge posle toga što otvorite fasciklu biračem fascikli ili prevlačenjem. Kliknite {{ui:Reopen}} i naziv fascikle da je ponovo otvorite, ili mali × da je zaboravite.

Ispod nje se pojavljuju odeljci kako se primenjuju:

| Odeljak | Kada se prikazuje | Šta sadrži |
|---|---|---|
| {{ui:Changes}} | Otvoren je IFC model | Vaše nesačuvane izmene, najnovije prve, sa {{ui:Undo}} i {{ui:Save as IFC}} |
| {{ui:File}} | Otvoren je model ili kartica datoteke | Podaci o datoteci: veličina, šema ili izdanje, projekat, autor, broj elemenata |
| {{ui:Drawing}} | Otvoren je DWG ili DXF | Format, jedinice, brojevi entiteta i slojeva, listovi, povezani crteži, oprema |
| {{ui:Folder}} | Otvorena je fascikla | Broj datoteka i modela, veličina, pronađeni problemi |
| {{ui:Back to the folder}} | Otvorili ste datoteku iz fascikle | Vraća na izveštaj o fascikli |
| {{ui:Layers}} | Otvoren je crtež | Potvrdni okvir za svaki sloj, sa {{ui:All on}} i {{ui:All off}} |
| {{ui:Storeys}} | Otvoren je IFC model | Potvrdni okvir za svaki sprat, najviši sprat prvi |
| {{ui:Elements}} | Otvoren je IFC model | Koliko elemenata svake vrste model sadrži (30 najčešćih) |

## Prostor za prikaz

Sredina ekrana prikazuje otvorenu datoteku.

- **Prazno**: „Otvori model zgrade.“ sa {{ui:Choose a file}} i {{ui:Open a folder}}, i kratkim opisom svakog formata.
- **IFC model**: 3D prikaz sa trakom alata pri vrhu, u imenovanim grupama, kao u aplikaciji za crtanje CadCraft-a, sa ikonom svakog alata iznad njegovog naziva: {{ui:View}} ({{ui:Fit}}, {{ui:Top}}, {{ui:Front}}, {{ui:Side}}, {{ui:Edges}}, {{ui:Spaces}}); {{ui:Edit}} ({{ui:Undo}}, {{ui:Redo}}, {{ui:Copy}}, {{ui:Paste}} i {{ui:More}}, pogledajte [Kopiranje, lepljenje i dupliranje stavki iz biblioteke](topic:copy-paste)); {{ui:Model}} ({{ui:Units}} i {{ui:Draw}}); {{ui:Library}} ({{ui:Library}}, {{ui:Equipment}}, {{ui:Updates}}, {{ui:Credits}}); {{ui:Review}} ({{ui:Show}}, {{ui:Section}}, {{ui:Walk}}, {{ui:Measure}}; pogledajte [Presecanje IFC modela ravni preseka](topic:section-plane)); i {{ui:Output}} (renderovanje, živi prikaz, VR, izvozi, boje i sačuvani prikazi). Kada je {{ui:Draw}} uključeno, traka Draw ispod nje ima isti izgled: {{ui:View}} (nivo i vrsta plana), {{ui:Draw}}, {{ui:Edit}} i {{ui:Library}}. Kocka pogleda nalazi se u donjem desnom uglu. Pogledajte [Otvaranje IFC modela i pregled u 3D](topic:open-ifc-model). {{ui:Settings}}, {{ui:General}} bira ikone, nazive ili oboje na ovim dugmadima, prikazuje ili sakriva nazive grupa, a desni klik na traku alata služi za raspoređivanje alata i grupa. U niskom prozoru traka izostavlja nazive ispod ikona.
- **Projektna ili porodična datoteka**: kartica datoteke, sa slikom pregleda, podacima o projektu i povezanim datotekama. Pogledajte [Čitanje projektne ili porodične datoteke](topic:read-rvt-file).
- **DWG ili DXF**: red kartica ({{ui:Model}}, zatim po jedna za svaki list, {{ui:Equipment}} kada crtež ima označenu opremu, {{ui:3D}}, {{ui:Fit}} i {{ui:Print view}}), crtež, i živi X i Y koordinate u jednom uglu. Pogledajte [Prikaz DWG ili DXF crteža](topic:view-dwg) i [Prikaz DWG ili DXF crteža u 3D](topic:dwg-in-3d).
- **Fascikla**: izveštaj o fascikli, sa okvirom {{ui:Start here}} i tabelama modela, veza, IFC modela i crteža. Pogledajte [Otvaranje cele fascikle projekta](topic:open-project-folder).

**Statusna linija** na dnu prostora za prikaz govori šta BimCraft radi („Čitanje modela…“, „Izgradnja geometrije: 1200 od 5400 elemenata“) i šta je pošlo po zlu, crveno, kada nešto ne uspe. Poruke o uspehu nestaju posle nekoliko sekundi.

## Panel Svojstva

Desni panel prikazuje:

- Za IFC model: element na koji ste kliknuli, sa nazivom, vrstom, oznakom, GlobalId i svakim skupom svojstava. Vrednosti koje možete menjati izgledaju kao dugmad. Pogledajte [Polja panela Svojstva](topic:properties-panel).
- Za crtež: kako da se krećete, povezane crteže i slike i da li je svaki pronađen, kao i spisak onoga što **Još nije nacrtano**.
- Za karticu datoteke ili fasciklu: kratku napomenu šta da otvorite sledeće.

## Na malom ekranu

Kada je prozor uži od ekrana laptopa, BimCraft slaže svoje oblasti: prostor za prikaz gore, a paneli ispod. Skrolujte stranicu da dođete do panela. Na telefonu čine jednu kolonu; na tabletu dve.

## Režimi celog ekrana

Dugme {{ui:Full screen}} u traci aplikacije, ili {{key:Ctrl+Shift+F}} na svakoj platformi, redom menja tri režima:

1. Normalan.
2. Ceo ekran, sa vidljivim trakama.
3. Ceo ekran sa sakrivenom trakom aplikacije. Pomerite pokazivač do gornje ivice, ili tu dodirnite, da se traka vrati.

Pritisnite {{key:Esc}} da se vratite na normalan režim. Pregledači bez podrške za ceo ekran (kao na iPhone-u) prelaze samo između normalnog režima i režima sa sakrivenim trakama.

## Povezano

- [Tasteri i miš](topic:keyboard)
- [Datoteke koje BimCraft otvara i čuva](topic:files)
