---
title: Ekran BimCraft-a
summary: Obilazak svake trake, panela i dugmeta po njihovom nazivu na ekranu i kako se ekran mijenja za svaku vrstu datoteke.
keywords: ekran, raspored, paneli, traka s alatima, sučelje, ui, obilazak, panel svojstava, pregledač, traka aplikacije
from: 2eb01ec2
---

Ekran BimCraft-a ima traku na vrhu i tri područja ispod nje: panel lijevo, prostor u sredini i panel **Svojstva** desno. Šta se pojavljuje u svakom području zavisi od toga šta ste otvorili: IFC model, datoteku projekta ili porodice, crtež ili folder.

## Traka aplikacije

Tanka traka na vrhu pripada sajtu CadCraft, a ne samom BimCraft-u. Slijeva nadesno:

- Oznaka CadCraft-a: vodi na početnu stranicu CadCraft-a.
- Naziv aplikacije i meni verzije. U internoj verziji pokazuje koju verziju pokrećete i omogućava vam da pređete na objavljenu verziju.
- {{ui:About BimCraft}}: stranica aplikacije na sajtu (O BimCraft-u).
- {{ui:Settings}}: postavke BimCraft-a i one koje dijele sve aplikacije. Pogledajte [Postavke BimCraft-a](topic:settings).
- {{ui:Full screen}}: mijenja režime ekrana. Pogledajte [Režimi ekrana](topic:workspace#screen-modes) dolje.
- {{ui:Paper}} i {{ui:Model}}: svijetla i tamna tema. 3D prikaz i 2D crteži prate temu koju izaberete.

## Lijevi panel

Lijevi panel uvijek počinje s **Otvori datoteku ili folder**:

- Područje za prevlačenje, {{ui:Choose a file, or drop a file or folder here}}. Kliknite da izaberete jednu datoteku, ili prevucite datoteku ili folder na njega (ili bilo gdje na stranici).
- {{ui:Open a folder}}: izaberite cijeli projektni folder. Pogledajte [Otvaranje cijelog projektnog foldera](topic:open-project-folder).
- {{ui:Recent folders}}: pojavljuje se u Chrome-u i Edge-u nakon što otvorite folder pomoću birača foldera ili prevlačenjem. Kliknite {{ui:Reopen}} i naziv foldera da ga ponovo otvorite, ili mali × da ga zaboravite.

Ispod toga pojavljuju se odjeljci kako se primjenjuju:

| Odjeljak | Kada se prikazuje | Šta je u njemu |
|---|---|---|
| {{ui:Changes}} | Otvoren je IFC model | Vaše nespašene izmjene, najnovije prvo, s {{ui:Undo}} i {{ui:Save as IFC}} |
| {{ui:File}} | Otvoren je model ili kartica datoteke | Činjenice o datoteci: veličina, šema ili izdanje, projekt, autor, broj elemenata |
| {{ui:Drawing}} | Otvoren je DWG ili DXF | Format, jedinice, brojevi entiteta i slojeva, listovi, povezani crteži, oprema |
| {{ui:Folder}} | Otvoren je folder | Brojevi datoteka i modela, veličina, pronađeni problemi |
| {{ui:Back to the folder}} | Otvorili ste datoteku iz foldera | Vraća na izvještaj o folderu |
| {{ui:Layers}} | Otvoren je crtež | Potvrdni okvir po sloju, s {{ui:All on}} i {{ui:All off}} |
| {{ui:Storeys}} | Otvoren je IFC model | Potvrdni okvir po spratu, najviši sprat prvi |
| {{ui:Elements}} | Otvoren je IFC model | Koliko elemenata svake vrste model sadrži (30 najčešćih) |

## Prostor

Sredina ekrana prikazuje otvorenu datoteku.

- **Prazno**: "Otvori model zgrade." s {{ui:Choose a file}} i {{ui:Open a folder}}, te kratak opis svakog formata.
- **IFC model**: 3D prikaz s trakom s alatima na vrhu, u imenovanim grupama kao u CadCraft-ovoj aplikaciji za crtanje, ikona svakog alata iznad njegovog naziva: {{ui:View}} ({{ui:Fit}}, {{ui:Top}}, {{ui:Front}}, {{ui:Side}}, {{ui:Edges}}, {{ui:Spaces}}); {{ui:Edit}} ({{ui:Undo}}, {{ui:Redo}}, {{ui:Copy}}, {{ui:Paste}} i {{ui:More}}, pogledajte [Kopiranje, lijepljenje i dupliranje stavki iz biblioteke](topic:copy-paste)); {{ui:Model}} ({{ui:Units}} i {{ui:Draw}}); {{ui:Library}} ({{ui:Library}}, {{ui:Equipment}}, {{ui:Updates}}, {{ui:Credits}}); {{ui:Review}} ({{ui:Show}}, {{ui:Section}}, {{ui:Walk}}, {{ui:Measure}}; pogledajte [Presijecanje IFC modela ravninom presjeka](topic:section-plane)); i {{ui:Output}} (renderovanje, živi prikaz, VR, izvozi, boja i sačuvani pogledi). Kada je {{ui:Draw}} uključeno, traka Draw ispod nje ima isti izgled: {{ui:View}} (nivo i vrsta plana), {{ui:Draw}}, {{ui:Edit}} i {{ui:Library}}. Kocka pogleda nalazi se u donjem desnom uglu. Pogledajte [Otvaranje IFC modela i pregled u 3D](topic:open-ifc-model). {{ui:Settings}}, {{ui:General}} bira ikone, nazive ili oboje na ovim dugmićima, prikazuje ili sakriva nazive grupa, a desnim klikom na traku možete rasporediti njene alate i grupe. U niskom prozoru traka izostavlja nazive ispod ikona.
- **Projektna ili porodična datoteka**: kartica datoteke, sa slikom pregleda, podacima o projektu i povezanim datotekama. Pogledajte [Čitanje projektne ili porodične datoteke](topic:read-rvt-file).
- **DWG ili DXF**: red kartica ({{ui:Model}}, zatim jedna za svaki list, {{ui:Equipment}} kada crtež ima označenu opremu, {{ui:3D}}, {{ui:Fit}} i {{ui:Print view}}), crtež, i žive koordinate X i Y u jednom uglu. Pogledajte [Pregled DWG ili DXF crteža](topic:view-dwg) i [Pregled DWG ili DXF crteža u 3D](topic:dwg-in-3d).
- **Folder**: izvještaj o folderu, s okvirom {{ui:Start here}} i tabelama modela, veza, IFC modela i crteža. Pogledajte [Otvaranje cijelog projektnog foldera](topic:open-project-folder).

**Statusna linija** na dnu prostora govori šta BimCraft radi ("Čitanje modela…", "Izgradnja geometrije: 1200 od 5400 elemenata") i šta nije u redu, crveno, kada nešto ne uspije. Poruke o uspjehu nestaju nakon nekoliko sekundi.

## Panel svojstava

Desni panel prikazuje:

- Za IFC model: element na koji ste kliknuli, s njegovim nazivom, vrstom, oznakom, GlobalId-jem i svakim skupom svojstava. Vrijednosti koje možete promijeniti izgledaju kao dugmad. Pogledajte [Polja panela svojstava](topic:properties-panel).
- Za crtež: kako se kretati, povezane crteže i slike te da li je svaki pronađen, i spisak onoga što je **Još nije nacrtano**.
- Za karticu datoteke ili folder: kratku napomenu o tome šta otvoriti sljedeće.

## Mali ekran

Kada je prozor uži od laptop ekrana, BimCraft slaže svoja područja: prostor na vrhu, panele ispod. Pomjerite stranicu da dođete do panela. Na telefonu čine jednu kolonu; na tabletu, dvije.

## Režimi ekrana

Dugme {{ui:Full screen}} u traci aplikacije, ili {{key:Ctrl+Shift+F}} na svim platformama, mijenja tri režima:

1. Normalan.
2. Puni ekran, s prikazanim trakama.
3. Puni ekran sa skrivenom trakom aplikacije. Pomjerite pokazivač do gornje ivice, ili dodirnite tu, da je vratite.

Pritisnite {{key:Esc}} da se vratite na normalno. Pregledači bez podrške za puni ekran (kao na iPhone-u) prebacuju se samo između normalnog i skrivenih traka.

## Povezano

- [Tasteri i miš](topic:keyboard)
- [Datoteke koje BimCraft otvara i čuva](topic:files)
