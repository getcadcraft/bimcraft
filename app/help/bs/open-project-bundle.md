---
title: Otvaranje paketa projekta
summary: Paket projekta je jedan zip sa modelom, njegovim pogledima, listovima i grupama svojstava. Otvorite ga, prikažite pogled sa njegovim spratom i slojevima, otvorite list i pogledajte svojstva u grupama samog projekta.
keywords: paket, paket projekta, ccbundle, zip, pogledi, mapa pogleda, listovi, knjiga listova, kombinacija slojeva, grupe svojstava, standardi, pln, šablon
from: b5b86e8f
---

## Šta ćete uraditi

Otvorite **paket projekta** (`.ccbundle.zip`) i radite sa projektom onako kako je bio organizovan: sa njegovim pogledima, listovima i grupama svojstava, nad modelom.

Paket sadrži:

- model kao IFC,
- listove kao PDF i DWG,
- popis onoga što IFC ne prenosi: poglede (svaki sa spratom, kombinacijom slojeva i razmjerom), listove i crteže postavljene na njima, definicije svojstava u grupama, klasifikacije i standarde kao što su slojevi, setovi olovaka, tipovi linija, ispune, površine i kompozitni elementi.

Pakete pišu skripte otvorenog koda koje rade unutar Archicad-a i traže od samog Archicad-a ove popise. BimCraft nikada ne čita `.pln` ili `.tpl` datoteke direktno; vidite [Otvaranje .pln i .pla projektnih datoteka](topic:pln-project-files).

## Pravljenje paketa

Skripta je pregled: još nije isprobana na svakoj verziji Archicad-a. Preuzmite je sa [github.com/getcadcraft/bim-project-bundle](https://github.com/getcadcraft/bim-project-bundle). Potreban vam je Archicad 24 ili noviji i Python 3.8 ili noviji; ništa drugo ne treba instalirati.

1. Sačuvajte `archicad_bundle.py` u neki folder, na primjer `C:\cc-bundle`.
2. U Archicad-u otvorite projekat i napravite set za objavljivanje tačno pod nazivom **CadCraft bundle**: 3D pogled kao IFC, svaki list kao PDF, i svaki list ponovo kao DWG, objavljeno u datoteke na disku u jednom ravnom folderu.
3. Dok je projekat otvoren, pokrenite `python archicad_bundle.py --probe --out .` jednom. Ona samo čita i piše `probe.json`.
4. Pokrenite `python archicad_bundle.py --out . --translator "IFC4 Reference View"` (koristite IFC prevodilac koji ste odabrali). Archicad objavljuje set, a skripta piše `<project>.ccbundle.zip`.

Ako objavljivanje preko skripte ne uspije, objavite set ručno i pokrenite `python archicad_bundle.py --out . --no-publish --files <folder>\*.ifc <folder>\*.pdf <folder>\*.dwg`. README repozitorijuma sadrži sve opcije. Ako nešto ne stigne, otvorite prijavu problema u tom repozitorijumu i priložite `probe.json`.

## Otvaranje paketa

1. Kliknite {{ui:Odaberi datoteku}}, ili prevucite `.ccbundle.zip` na BimCraft. U folderu koji ste otvorili sa {{ui:Otvori folder}}, paketi su navedeni pod **Paketi projekta**; kliknite jedan po nazivu.
2. Model se otvara kao i svaki IFC, a odjeljak **Paket projekta** se pojavljuje lijevo, ispod podataka o datoteci.

Ništa se ne otprema: paket se čita na vašem računaru, jednu po jednu datoteku, pa se veliki model ne kopira dvaput.

## Prikaz pogleda

Pod **Pogledi**, pogledi su grupisani prema folderima koje su imali u projektu. Kliknite na naziv pogleda:

- **Tlocrt** prikazuje samo svoj sprat, gledano odozgo.
- **Njegova kombinacija slojeva** sakriva elemente na slojevima koje ta kombinacija sakriva. Statusni red kaže koliko je elemenata sakriveno.
- **Njegova razmjera** prikazuje se pored naziva i u statusnom redu.
- **3D pogled** prikazuje sve spratove.

Da biste ponovo prikazali sve, koristite {{ui:Prikaži sve}} u {{ui:Prikaži}} i označite svaki sprat.

:::note
BimCraft pronalazi slojeve preko dodjela slojeva u IFC datoteci. Ako IFC nije izvezen sa njima, kombinacija slojeva ništa ne sakriva, a statusni red kaže 0 sakrivenih elemenata.
:::

## Otvaranje lista

Pod **Listovi**, svaki list prikazuje svoj broj, naziv, format papira i poglede postavljene na njemu.

- **PDF** snima PDF lista iz paketa.
- **DWG** otvara crtež lista u 2D prikazu. Kliknite bilo koji pogled da se vratite na model.
- **Otvori u …** šalje datoteku lista aplikaciji koja na njoj radi, u novoj kartici: PDF u MarkupCraft, DWG u CadCraft. Prikazuje se samo tamo gdje je ta aplikacija otvorena pored BimCraft-a. Datoteka se čita iz paketa dok se kartica učitava, i ništa se ne otprema.

List bez jedne ni druge datoteke kaže **Nema datoteke u paketu**.

## Pregled svojstava u grupama projekta

Odaberite element. **Grupe svojstava** prikazuje njegova svojstva pod grupama koje je projekat definisao, uparena preko skupa svojstava i naziva koje definicija daje za IFC, ili inače preko naziva. Ostala svojstva ostaju u {{ui:Svojstva}} kao i obično. **Definicije svojstava** navodi svaku definiciju sa njenom grupom, tipom i IFC nazivom.

## Standardi i napomene

- **Standardi** broje slojeve, kombinacije slojeva, setove olovaka, tipove linija, ispune, površine, kompozitne elemente i materijale u paketu.
- **Napomene** navode šta skripta nije mogla dobiti iz te verzije Archicad-a, svako polje koje BimCraft nije mogao pročitati, i svaku datoteku koju paket navodi, ali ne sadrži.

## Rješavanje problema

- **„… je zip, ali ne paket projekta.“** Zip nema `manifest.json`. Raspakujte ga i otvorite `.ifc` unutra.
- **„… je noviji paket projekta nego što ovaj BimCraft može da čita.“** Ažurirajte BimCraft.
- **„… ne sadrži model koji navodi njegov manifest.“** Zip je skraćen ili izmijenjen. Napravite paket ponovo.
- **Pogled prikazuje svaki sprat.** Njegov sprat nije u IFC modelu (statusni red to kaže). Provjerite da je IFC izvoz uključio taj sprat.

Vidite i [Rad između dva BIM programa](topic:two-bim-programs) i [Šta BimCraft čita iz svakog formata](topic:file-formats).
