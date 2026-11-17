---
title: Rešavanje problema
summary: Poruke koje BimCraft prikazuje, šta ih izaziva i šta da uradiš, za otvaranje datoteka, fascikli, 3D modela, crteža i izmena.
keywords: problem, greška, ne radi, ne može da se otvori, nije uspelo, nepotpuno, oštećeno, sporo, pad, prazno, nedostaje, poruka, pomoć
from: 1e5a79fc
---

Poruke se pojavljuju u statusnoj liniji pri dnu radnog prostora, crveno kad nešto nije uspelo. Pronađi poruku ispod.

## Otvaranje datoteka

**"*name* nije IFC, RVT, RFA, DWG ni DXF datoteka."**
BimCraft nije prepoznao datoteku. Proveri nastavak i da datoteka nije prazna. PDF-ovi, slike i kancelarijske datoteke se ne otvaraju.

**".ifczip još nije podržan. Sačuvaj ili izvezi model kao običnu .ifc datoteku."** (važi i za `.ifcxml`)
Raspakuj `.ifczip` (to je obična zip arhiva koja sadrži `.ifc`) ili izvezi običan IFC.

**"… je projektna datoteka koju BimCraft još ne čita."**
Datoteka `.pln`, `.pla`, `.tpl` ili `.bpn`. Izvezi IFC ili DWG iz nje i otvori to: vidi [Otvaranje .pln i .pla projektnih datoteka](topic:pln-project-files).

**"Ova IFC datoteka ne može da se pročita."**
IFC datoteka je oštećena ili nije pravi IFC. Otvori je u uređivaču teksta: prava IFC datoteka počinje sa `ISO-10303-21;`. Izvezi je ponovo.

**"Ova datoteka je nepotpuna: ima … MB, ali njen sopstveni indeks ukazuje na podatke do najmanje … MB u njoj. …"**
Datoteka projekta ili porodice je odsečena pri kopiranju, otpremanju ili sinhronizaciji. Datoteka u oblačnom disku koja je „samo na mreži“ izgleda isto. Datoteka otvorena sama za sebe i dalje se otvara, sa ovom porukom na vrhu kartice i "Prikazuje se ono što je vraćeno; ponovo kopiraj original za ceo model.": kartica prikazuje samo delove čiji je svaki bajt u datoteci, a ostalo navodi pod **Nije u datoteci**. Učini datoteku dostupnom van mreže u oblačnom disku ili ponovo kopiraj original i ponovo je otvori. U fascikli BimCraft prikazuje najnoviju potpunu rezervnu kopiju.

**"… Sopstveni spisak sadržaja datoteke je takođe u nedostajućem delu, pa se ništa u njoj ne može otvoriti."**
Datoteka je odsečena toliko rano da ni njen spisak sadržaja nije tu. Iz ove kopije ništa ne može da se vrati. Ponovo kopiraj original i ponovo ga otvori.

**"Ova složena datoteka nema BasicFileInfo tok, pa nije Revit datoteka."**
Datoteka je složena datoteka druge vrste (stari kancelarijski dokumenti koriste isti kontejner). Proveri da si izabrao pravu datoteku.

**"Još radimo na prethodnoj…"**
BimCraft još radi na prethodnoj datoteci ili fascikli. Sačekaj da statusna linija završi, pa pokušaj ponovo.

**Birač datoteka sivi moju datoteku.**
Birač nudi samo `.ifc`, `.rvt`, `.rfa`, `.rte`, `.rft`, `.dwg` i `.dxf`. Umesto toga prevuci druge datoteke na stranicu, pa će ti BimCraft reći može li da ih pročita.

## Otvaranje fascikli

**"Ova fascikla ima više od 20,000 datoteka. Izaberi manju fasciklu, na primer jedan projekat."**
Izabrao si fasciklu previsoko u hijerarhiji, na primer ceo disk. Izaberi jednu fasciklu projekta.

**"Pregledač nije dao pristup *name*. Izaberi je ponovo pomoću Otvori fasciklu."**
Kliknuo si {{ui:Ponovo otvori}} na nedavnoj fascikli, a pregledač je odbio dozvolu ili je ona istekla. Izaberi fasciklu ponovo ili je prevuci.

**Pregledač kaže da će „otpremiti“ datoteke.**
To je pregledačeva reč za predavanje datoteka stranici. BimCraft ih nigde ne šalje. Prevuci fasciklu da izbegneš pitanje.

**Na telefonu ili tabletu se ništa ne dešava.**
Mnogi mobilni pregledači ne mogu da biraju fascikle. Otvori pojedinačne datoteke ili koristi računar.

## IFC motor se učitava prvi put

**Statusna linija ostaje na "Pokretanje IFC motora…", ili pokazuje grešku kao "Failed to fetch".**
IFC motor nije mogao da se preuzme. Možda nisi na mreži, ili vatrozid ili blokator sadržaja to sprečava.

:::offline
Van si mreže. Ako dugme u traci aplikacije ne kaže {{ui:Spremno za rad van mreže}}, IFC motor nikad nije sačuvan u ovom pregledaču. Poveži se, ponovo otvori datoteku, pa klikni {{ui:Sačuvaj za rad van mreže}} da radi i van mreže sledeći put. Vidi [Rad na mreži i van nje](topic:online-offline).
:::

:::online
Osveži stranicu i pokušaj ponovo. Na poslovnoj mreži zamoli IT tim da dozvoli `.wasm` datoteke sa sajta.
:::

## Čuvanje za rad van mreže

**Dugme kaže {{ui:Nije moguće sačuvati}}.**
Neke datoteke nisu preuzete, obično zato što je veza prekinuta. Proveri vezu i ponovo klikni dugme. Svaka ranija kopija za rad van mreže ostaje dok nova ne bude potpuna.

**Dugme kaže {{ui:Rad van mreže nije dostupan}}.**
Ovaj prozor ne može da čuva kopiju za rad van mreže, na primer privatni prozor ili upravljani poslovni računar. Vidi [Rad van mreže](common:offline).

**Dugme neko vreme ostaje na "Čuvanje *n* od *m*".**
BimCraft-ova kopija ima oko 11 MB, uglavnom IFC motor. Ostavi karticu otvorenu dok ne piše {{ui:Spremno za rad van mreže}}.

**BimCraft se otvorio van mreže, ali izgleda zastarelo.**
Tvoja sačuvana kopija je iz ranije posete. Kad si na mreži, klikni {{ui:Spremno za rad van mreže}} i izaberi {{ui:Sačuvaj ponovo (preuzmi najnoviju verziju)}}.

## 3D prikaz

**Model nije tamo gde sam očekivao, ili je sitan.**
Pritisni {{key:F}} ili klikni {{ui:Uklopi}}. Uklapanje uvek obuhvata sve u modelu, uključujući sprat koji si isključio i lutajuće elemente daleko od zgrade, pa zgrada može izgledati mala. Odatle uvećaj.

**Klik ne bira ništa.**
Drži miš mirno dok klikneš: mali pomeraj okreće prikaz. Elementi na isključenim spratovima ne mogu da se biraju. Kad je {{ui:Prostori}} uključeno, prozirni prostori se biraju pre onoga što je u njima.

**Dugme {{ui:Ivice}} je sivo: "Ivice su isključene za veoma velike modele".**
Model ima više od 1.5 miliona trouglova. Ivice su isključene da se uštedi memorija.

**Kartica postaje spora, bela, ili prikazuje pregledačevu stranicu o padu.**
Model je prevelik za memoriju koju pregledač daje kartici. Zatvori ostale kartice i osveži stranicu. Izvezi manji IFC: jednu zgradu, jednu disciplinu ili manje spratova. Vidi [Pregledači, uređaji i memorija](topic:platforms).

**3D prikaz ostaje prazan.**
WebGL je možda isključen ili blokiran. U podešavanjima pregledača uključi hardversko ubrzanje (ili ubrzanje grafike) i ponovo pokreni pregledač.

## Izmena IFC-a

**"Upiši broj."** Vrednost je brojčana. Upiši običan broj bez jedinica, na primer `2.4`.

**"Upiši ceo broj."** Vrednost je brojanje ili ceo broj. Ukloni decimale.

**"Mogu da se menjaju samo svojstva sa jednom vrednošću."** Liste, nabrajanja i količine su samo za čitanje.

**{{key:Mod+S}} otvara pregledačev prozor "Sačuvaj stranicu".**
Nema nesačuvanih promena, pa je BimCraft ostavio taster pregledaču. Zatvori prozor.

**{{key:Mod+Z}} ne radi ništa.**
Radi samo dok imaš nesačuvane promene i ne kucaš u polju. Posle čuvanja nema šta da se opozove.

**Lista {{ui:Izmene}} i dalje prikazuje izmene posle odbacivanja i otvaranja crteža ili fascikle.**
Kad na pitanje „Odbaciti ih?“ odgovoriš sa {{ui:U redu}}, pa otvoriš nešto što nije IFC model, stare izmene ostaju u memoriji, a {{ui:Sačuvaj kao IFC}} bi ih i dalje sačuvao. Da stvarno počneš ispočetka, ponovo otvori originalni IFC ili osveži stranicu.

**Moja izmena je promenila više elemenata nego što sam izabrao.**
Promenio si svojstvo u skupu označenom sa „(tip)“. Svojstva tipa važe za svaki element tog tipa. Klikni {{ui:Opozovi}}. Vidi [Promena svojstva tipa za svaki element tipa](topic:type-vs-instance).

## Crteži

**"*name* ne može da se pročita. Možda je oštećen ili sačuvan u formatu koji čitač još ne obrađuje (…)."**
Sačuvaj crtež iz programa koji ga je napravio kao stariji DWG (2018 ili ranije) ili kao DXF, pa pokušaj ponovo.

**"Ovaj crtež nema šta da prikaže."** ili **"*name* je prazan crtež: ne sadrži linije, tekst ni blokove."**
Crtež je prazan ili sadrži samo stvari koje BimCraft još ne crta (vidi **Još nije nacrtano** desno).

**"Ovaj crtež je veoma velik; prikazan je samo deo."**
BimCraft je prestao da crta da bi ostao brz. Isključi slojeve koji ti nisu potrebni, ili otvori listove koji ti trebaju iz manjeg crteža.

**Delovi lista nedostaju.**
Povezani crteži možda nedostaju: pogledaj pod **Povezani crteži** desno. Vidi [Pronalaženje povezanih crteža i slika](topic:dwg-linked-files). Slojevi mogu biti isključeni: klikni {{ui:Sve uključi}}.

**Slika se pokazuje kao prazan okvir.**
Njena datoteka nije pronađena, ili je TIFF ("TIFF ne može da se prikaže u pregledaču"). Dodaj kopiju u PNG ili JPEG pomoću {{ui:Dodaj slike…}}.

**Skrolovanje na tačpedu zumira umesto da pomera crtež.**
Tako crteži rade u BimCraft-u. Klikni i prevuci da pomeraš.

## Još uvek zaglavljen

Pročitaj [Šta još nije napravljeno](topic:not-built-yet): stvar koju tražiš možda ne postoji u ovoj verziji.
