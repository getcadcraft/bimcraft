---
title: Odprite projektni paket
summary: Projektni paket je en zip z modelom, njegovimi pogledi, postavitvami in skupinami lastnosti. Odprite ga, prikažite pogled z njegovo etažo in sloji, odprite postavitev in si oglejte lastnosti v skupinah projekta.
keywords: paket, projektni paket, ccbundle, zip, pogledi, zemljevid pogledov, postavitve, knjiga postavitev, kombinacija slojev, skupine lastnosti, standardi, pln, predloga
from: b5b86e8f
---

## Kaj boste naredili

Odprite **projektni paket** (`.ccbundle.zip`) in delajte s projektom tako, kot je bil organiziran: njegovi pogledi, njegove postavitve in njegove skupine lastnosti, nad modelom.

Paket vsebuje:

- model kot IFC,
- postavitve kot PDF in DWG,
- seznam tega, kar IFC izpusti: poglede (vsak z njegovo etažo, kombinacijo slojev in merilom), postavitve in risbe, postavljene nanje, definicije lastnosti v njihovih skupinah, klasifikacije ter standarde, kot so sloji, nabori peres, tipi črt, polnila, površine in kompoziti.

Pakete ustvarja odprtokodni skript, ki teče v Archicadu in te sezname zahteva od samega Archicada. BimCraft datotek `.pln` ali `.tpl` ne bere neposredno; glejte [Odpiranje projektnih datotek .pln in .pla](topic:pln-project-files).

## Ustvarite paket

Skript je predogled: še ni bil preizkušen na vsaki različici Archicada. Prenesite ga z [github.com/getcadcraft/bim-project-bundle](https://github.com/getcadcraft/bim-project-bundle). Potrebujete Archicad 24 ali novejšega in Python 3.8 ali novejšega; nič drugega ni treba namestiti.

1. Shranite `archicad_bundle.py` v mapo, na primer `C:\cc-bundle`.
2. V Archicadu odprite projekt in ustvarite nabor objav z imenom natančno **CadCraft bundle**: 3D pogled kot IFC, vsaka postavitev kot PDF in vsaka postavitev še kot DWG, objavljeno v datoteke na disku v eni ravni mapi.
3. Z odprtim projektom zaženite `python archicad_bundle.py --probe --out .` enkrat. Samo bere in zapiše `probe.json`.
4. Zaženite `python archicad_bundle.py --out . --translator "IFC4 Reference View"` (uporabite prevajalnik IFC, ki ste ga izbrali). Archicad objavi nabor, skript pa zapiše `<project>.ccbundle.zip`.

Če objava prek skripta ne uspe, objavite nabor ročno in zaženite `python archicad_bundle.py --out . --no-publish --files <folder>\*.ifc <folder>\*.pdf <folder>\*.dwg`. Vse možnosti so v README-ju repozitorija. Če kaj ne pride skozi, tam odprite prijavo težave in priložite `probe.json`.

## Odprite paket

1. Kliknite {{ui:Izberi datoteko}} ali spustite `.ccbundle.zip` na BimCraft. V mapi, ki ste jo odprli z {{ui:Odpri mapo}}, so paketi navedeni pod **Projektni paketi**; kliknite enega po imenu.
2. Model se odpre kot vsak IFC, na levi pod dejstvi datoteke pa se prikaže razdelek **Projektni paket**.

Nič se ne naloži: paket se prebere na vašem računalniku, eno datoteko naenkrat, zato velik model ni kopiran dvakrat.

## Prikaz pogleda

Pod **Pogledi** so pogledi razvrščeni v mape, ki so jih imeli v projektu. Kliknite ime pogleda:

- **Tloris** prikaže samo svojo etažo, gledano z vrha.
- **Njegova kombinacija slojev** skrije elemente na slojih, ki jih ta kombinacija skriva. Statusna vrstica pove, koliko elementov je bilo tako skritih.
- **Njegovo merilo** je prikazano ob imenu in v statusni vrstici.
- **3D pogled** prikaže vse etaže.

Če želite znova prikazati vse, uporabite {{ui:Pokaži vse}} v {{ui:Pokaži}} in označite vse etaže.

:::note
BimCraft sloje najde prek dodelitev slojev v datoteki IFC. Če je bila IFC izvožena brez njih, kombinacija slojev ničesar ne skrije, statusna vrstica pa pove 0 skritih elementov.
:::

## Odprite postavitev

Pod **Postavitve** vsaka postavitev prikaže svojo številko, ime, velikost papirja in poglede, postavljene nanjo.

- **PDF** shrani PDF postavitve iz paketa.
- **DWG** odpre risbo postavitve v 2D pogledu. Kliknite kateri koli pogled, da se vrnete na model.
- **Odpri v …** pošlje datoteko postavitve aplikaciji, ki z njo dela, v novem zavihku: PDF v MarkupCraft, DWG v CadCraft. Prikaže se samo tam, kjer je ta aplikacija odprta ob BimCraftu. Datoteka se prebere iz paketa, ko se zavihek nalaga, in nič se ne naloži.

Postavitev brez obojega pove **V paketu ni datoteke**.

## Oglejte si lastnosti v skupinah projekta

Izberite element. **Skupine lastnosti** prikaže njegove lastnosti pod skupinami, ki jih je določil projekt, ujete prek nabora lastnosti in imena, ki jih določitev navaja za IFC, sicer pa po imenu. Preostale ostanejo v {{ui:Lastnosti}}, kot običajno. **Definicije lastnosti** navajajo vsako definicijo z njeno skupino, vrsto in imenom IFC.

## Standardi in opombe

- **Standardi** štejejo sloje, kombinacije slojev, nabore peres, tipe črt, polnila, površine, kompozite in materiale v paketu.
- **Opombe** navajajo, kar skript ni mogel pridobiti iz te različice Archicada, katero koli polje, ki ga BimCraft ni mogel prebrati, in vsako datoteko, ki jo paket navaja, a je ne vsebuje.

## Odpravljanje težav

- **„… je zip, vendar ne projektni paket.“** Zip nima `manifest.json`. Razpakirajte ga in odprite notranjo `.ifc`.
- **„… je novejši projektni paket, kot ga ta BimCraft bere.“** Posodobite BimCraft.
- **„… ne vsebuje modela, ki ga navaja njegov manifest.“** Zip je bil skrajšan ali urejen. Ustvarite paket znova.
- **Pogled prikaže vse etaže.** Njegove etaže ni v IFC modela (statusna vrstica to pove). Preverite, ali je izvoz IFC vključil to etažo.

Glejte tudi [Delo med dvema programoma BIM](topic:two-bim-programs) in [Kaj BimCraft bere iz posameznega formata](topic:file-formats).
