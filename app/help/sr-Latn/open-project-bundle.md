---
title: Otvaranje paketa projekta
summary: Paket projekta je jedan zip sa modelom, njegovim prikazima, rasporedima i grupama svojstava. Otvorite ga, prikažite prikaz sa njegovim spratom i slojevima, otvorite raspored i pogledajte svojstva u sopstvenim grupama projekta.
keywords: paket, paket projekta, ccbundle, zip, prikazi, mapa prikaza, rasporedi, knjiga rasporeda, kombinacija slojeva, grupe svojstava, standardi, pln, šablon
from: b5b86e8f
---

## Šta ćete uraditi

Otvorite **paket projekta** (`.ccbundle.zip`) i radite sa projektom onako kako je bio organizovan: sa njegovim prikazima, rasporedima i grupama svojstava, preko modela.

Paket sadrži:

- model kao IFC,
- rasporede kao PDF i DWG,
- spisak onoga što IFC izostavlja: prikaze (svaki sa spratom, kombinacijom slojeva i razmerom), rasporede i crteže postavljene na njima, definicije svojstava u njihovim grupama, klasifikacije i standarde kao što su slojevi, setovi olovaka, tipovi linija, šrafure, površine i kompozitni elementi.

Pakete pišu skripte otvorenog koda koje rade unutar Archicad-a i traže od samog Archicad-a te spiskove. BimCraft nikada ne čita `.pln` ili `.tpl` datoteke direktno; pogledajte [Otvaranje .pln i .pla datoteka projekta](topic:pln-project-files).

## Pravljenje paketa

Skripta je pregled: još nije isprobana na svakoj verziji Archicad-a. Preuzmite je sa [github.com/getcadcraft/bim-project-bundle](https://github.com/getcadcraft/bim-project-bundle). Potrebni su vam Archicad 24 ili noviji i Python 3.8 ili noviji; ništa drugo ne treba instalirati.

1. Sačuvajte `archicad_bundle.py` u fasciklu, na primer `C:\cc-bundle`.
2. U Archicad-u otvorite projekat i napravite set za objavljivanje pod nazivom tačno **CadCraft bundle**: 3D prikaz kao IFC, svaki raspored kao PDF, i svaki raspored ponovo kao DWG, objavljeno u datoteke na disku u jednoj ravnoj fascikli.
3. Dok je projekat otvoren, pokrenite `python archicad_bundle.py --probe --out .` jednom. Skripta samo čita i piše `probe.json`.
4. Pokrenite `python archicad_bundle.py --out . --translator "IFC4 Reference View"` (koristite IFC prevodilac koji ste izabrali). Archicad objavljuje set, a skripta piše `<project>.ccbundle.zip`.

Ako objavljivanje preko skripte ne uspe, objavite set ručno i pokrenite `python archicad_bundle.py --out . --no-publish --files <folder>\*.ifc <folder>\*.pdf <folder>\*.dwg`. README repozitorijuma sadrži sve opcije. Ako nešto ne stigne, otvorite prijavu problema u tom repozitorijumu i priložite `probe.json`.

## Otvaranje paketa

1. Kliknite {{ui:Izaberi datoteku}}, ili prevucite `.ccbundle.zip` na BimCraft. U fascikli koju ste otvorili sa {{ui:Otvori fasciklu}}, paketi su navedeni pod **Paketi projekta**; kliknite jedan po nazivu.
2. Model se otvara kao i svaki IFC, a odeljak **Paket projekta** se pojavljuje levo, ispod činjenica o datoteci.

Ništa se ne otprema: paket se čita na vašem računaru, jedna datoteka po jedna, pa se veliki model ne kopira dvaput.

## Prikaz prikaza

Pod **Prikazi**, prikazi su grupisani prema fasciklama koje su imali u projektu. Kliknite naziv prikaza:

- **Osnova sprata** prikazuje samo njegov sprat, gledan odozgo.
- **Njegova kombinacija slojeva** sakriva elemente na slojevima koje ta kombinacija sakriva. Statusna linija kaže koliko je elemenata sakriveno.
- **Njegova razmera** se prikazuje pored naziva i u statusnoj liniji.
- **3D prikaz** prikazuje sve spratove.

Da biste ponovo prikazali sve, koristite {{ui:Prikaži sve}} u {{ui:Prikaži}} i označite svaki sprat.

:::note
BimCraft pronalazi slojeve preko dodela slojeva u IFC datoteci. Ako IFC nije izvezen sa njima, kombinacija slojeva ne sakriva ništa, a statusna linija kaže 0 elemenata sakriveno.
:::

## Otvaranje rasporeda

Pod **Rasporedi**, svaki raspored prikazuje svoj broj, naziv, veličinu papira i prikaze postavljene na njemu.

- **PDF** čuva PDF rasporeda iz paketa.
- **DWG** otvara crtež rasporeda u 2D prikazu. Kliknite bilo koji prikaz da se vratite na model.
- **Otvori u …** šalje datoteku rasporeda aplikaciji koja radi sa njom, u novoj kartici: PDF u MarkupCraft, DWG u CadCraft. Prikazuje se samo tamo gde je ta aplikacija otvorena pored BimCraft-a. Datoteka se čita iz paketa dok se kartica učitava, a ništa se ne otprema.

Raspored bez nijednog kaže **Nema datoteke u paketu**.

## Pregled svojstava u grupama projekta

Izaberite element. **Grupe svojstava** prikazuje njegova svojstva pod grupama koje je projekat definisao, uparena preko skupa svojstava i naziva koje definicija daje za IFC, ili inače po nazivu. Ostala ostaju u {{ui:Svojstva}} kao i obično. **Definicije svojstava** navode svaku definiciju sa njenom grupom, tipom i IFC nazivom.

## Standardi i napomene

- **Standardi** broje slojeve, kombinacije slojeva, setove olovaka, tipove linija, šrafure, površine, kompozitne elemente i materijale u paketu.
- **Napomene** navode šta skripta nije mogla da dobije iz te verzije Archicad-a, svako polje koje BimCraft nije mogao da pročita i svaku datoteku koju paket navodi, a ne sadrži.

## Rešavanje problema

- **„… je zip, ali nije paket projekta.“** Zip nema `manifest.json`. Raspakujte ga i otvorite `.ifc` unutra.
- **„… je noviji paket projekta nego što ovaj BimCraft može da čita.“** Ažurirajte BimCraft.
- **„… ne sadrži model koji njegov manifest navodi.“** Zip je skraćen ili izmenjen. Napravite paket ponovo.
- **Prikaz prikazuje sve spratove.** Njegov sprat nije u IFC modelu (statusna linija to kaže). Proverite da je IFC izvoz uključio taj sprat.

Pogledajte [Rad između dva BIM programa](topic:two-bim-programs) i [Šta BimCraft čita iz svakog formata](topic:file-formats).
