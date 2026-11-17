---
title: Otvorite projektni paket
summary: Projektni paket je jedna zip-datoteka s modelom, njegovim pogledima, layoutima i grupama svojstava. Otvorite je, prikažite pogled s njegovom etažom i slojevima, otvorite layout i pogledajte svojstva u grupama samog projekta.
keywords: paket, projektni paket, ccbundle, zip, pogledi, karta pogleda, layouti, knjiga layouta, kombinacija slojeva, grupe svojstava, standardi, pln, predložak
from: b5b86e8f
---

## Što ćete učiniti

Otvorite **projektni paket** (`.ccbundle.zip`) i radite s projektom onako kako je bio organiziran: s njegovim pogledima, layoutima i grupama svojstava, nad modelom.

Paket sadrži:

- model kao IFC,
- layoute kao PDF i DWG,
- popis onoga što IFC ne uključuje: poglede (svaki s njegovom etažom, kombinacijom slojeva i mjerilom), layoute i crteže postavljene na njih, definicije svojstava u njihovim grupama, klasifikacije te standarde kao što su slojevi, skupovi olovaka, tipovi linija, ispune, površine i kompozitni elementi.

Pakete izrađuje skripta otvorenog koda koja se pokreće unutar Archicada i od samog Archicada traži te popise. BimCraft nikad izravno ne čita datoteke `.pln` ili `.tpl`; pogledajte [Otvaranje projektnih datoteka .pln i .pla](topic:pln-project-files).

## Izrada paketa

Skripta je pregled: još nije isprobana na svim verzijama Archicada. Preuzmite je s [github.com/getcadcraft/bim-project-bundle](https://github.com/getcadcraft/bim-project-bundle). Potreban vam je Archicad 24 ili noviji te Python 3.8 ili noviji; ništa drugo ne treba instalirati.

1. Spremite `archicad_bundle.py` u mapu, na primjer `C:\cc-bundle`.
2. U Archicadu otvorite projekt i napravite skup za objavu s točno imenom **CadCraft bundle**: 3D prikaz kao IFC, svaki layout kao PDF i svaki layout ponovno kao DWG, objavljeno u datoteke na disku u jednoj ravnoj mapi.
3. Dok je projekt otvoren, pokrenite `python archicad_bundle.py --probe --out .` jednom. Samo čita i zapisuje `probe.json`.
4. Pokrenite `python archicad_bundle.py --out . --translator "IFC4 Reference View"` (upotrijebite IFC prevoditelj koji ste odabrali). Archicad objavljuje skup, a skripta zapisuje `<project>.ccbundle.zip`.

Ako objava kroz skriptu ne uspije, objavite skup ručno i pokrenite `python archicad_bundle.py --out . --no-publish --files <folder>\*.ifc <folder>\*.pdf <folder>\*.dwg`. README repozitorija navodi sve opcije. Ako nešto ne dođe, otvorite prijavu u tom repozitoriju i priložite `probe.json`.

## Otvorite paket

1. Kliknite {{ui:Odaberi datoteku}} ili povucite `.ccbundle.zip` na BimCraft. U mapi koju ste otvorili s {{ui:Otvori mapu}}, paketi su navedeni pod **Projektni paketi**; kliknite jedan po imenu.
2. Model se otvara kao i svaki IFC, a odjeljak **Projektni paket** pojavljuje se s lijeve strane, ispod činjenica o datoteci.

Ništa se ne učitava: paket se čita na vašem računalu, jednu po jednu datoteku, pa se veliki model ne kopira dvaput.

## Prikaz pogleda

Pod **Pogledi** pogledi su grupirani prema mapama koje su imali u projektu. Kliknite ime pogleda:

- **Tlocrt** prikazuje samo svoju etažu, gledanu odozgo.
- **Njegova kombinacija slojeva** skriva elemente na slojevima koje ta kombinacija skriva. Statusni redak kaže koliko je elemenata skriveno.
- **Njegovo mjerilo** prikazuje se uz ime i u statusnom retku.
- **3D pogled** prikazuje sve etaže.

Da biste ponovno prikazali sve, upotrijebite {{ui:Prikaži sve}} u {{ui:Prikaži}} i označite svaku etažu.

:::note
BimCraft pronalazi slojeve preko dodjela slojeva u IFC datoteci. Ako je IFC izvezen bez njih, kombinacija slojeva ne skriva ništa, a statusni redak kaže da je skriveno 0 elemenata.
:::

## Otvorite layout

Pod **Layouti**, svaki layout prikazuje svoj broj, naziv, veličinu papira i poglede postavljene na njemu.

- **PDF** sprema PDF layouta iz paketa.
- **DWG** otvara crtež layouta u 2D prikazu. Kliknite bilo koji pogled da se vratite na model.
- **Otvori u …** šalje datoteku layouta aplikaciji koja na njoj radi, u novoj kartici: PDF u MarkupCraft, DWG u CadCraft. Prikazuje se samo tamo gdje je ta aplikacija otvorena pokraj BimCrafta. Datoteka se čita iz paketa dok se kartica učitava, a ništa se ne učitava.

Layout bez nijedne od njih kaže **Nema datoteke u paketu**.

## Pogledajte svojstva u grupama projekta

Odaberite element. **Grupe svojstava** prikazuje njegova svojstva pod grupama koje je projekt definirao, a podudaraju se preko skupa svojstava i naziva koje definicija daje za IFC ili inače prema nazivu. Ostatak ostaje u {{ui:Svojstva}} kao i obično. **Definicije svojstava** navodi svaku definiciju s njezinom grupom, tipom i IFC nazivom.

## Standardi i napomene

- **Standardi** broje slojeve, kombinacije slojeva, skupove olovaka, tipove linija, ispune, površine, kompozitne elemente i materijale u paketu.
- **Napomene** navode što skripta nije mogla dobiti iz te verzije Archicada, svako polje koje BimCraft nije mogao pročitati i svaku datoteku koju paket navodi, ali ne sadrži.

## Rješavanje problema

- **„… je zip, ali nije projektni paket.“** Zip nema `manifest.json`. Raspakirajte ga i otvorite `.ifc` unutra.
- **„… je noviji projektni paket nego što ga BimCraft čita.“** Ažurirajte BimCraft.
- **„… ne sadrži model koji navodi njegov manifest.“** Zip je skraćen ili izmijenjen. Ponovno izradite paket.
- **Pogled prikazuje svaku etažu.** Njegova etaža nije u IFC modelu (statusni redak to kaže). Provjerite je li IFC izvoz uključivao tu etažu.

Vidi i [Rad između dvaju BIM programa](topic:two-bim-programs) i [Što BimCraft čita iz svakog formata](topic:file-formats).
