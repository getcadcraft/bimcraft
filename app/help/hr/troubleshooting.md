---
title: Rješavanje problema
summary: Poruke koje BimCraft prikazuje, što ih uzrokuje i što učiniti, za otvaranje datoteka, mapa, 3D modela, crteža i izmjena.
keywords: problem, pogreška, ne radi, ne može se otvoriti, nije uspjelo, nepotpuno, oštećeno, sporo, rušenje, prazno, nedostaje, poruka, pomoć
from: 1e5a79fc
---

Poruke se prikazuju u statusnoj traci na dnu radnog prostora, crveno kada nešto nije uspjelo. Pronađite poruku u nastavku.

## Otvaranje datoteka

**"*name* nije IFC, RVT, RFA, DWG ni DXF datoteka."**
BimCraft nije prepoznao datoteku. Provjerite nastavak i je li datoteka prazna. PDF-ovi, slike i uredski dokumenti se ne otvaraju.

**".ifczip još nije podržan. Spremite ili izvezite model kao običnu .ifc datoteku."** (također za `.ifcxml`)
Raspakirajte `.ifczip` (to je obična zip arhiva koja sadrži `.ifc`) ili izvezite običan IFC.

**"… je projektna datoteka koju BimCraft još ne čita."**
Datoteka `.pln`, `.pla`, `.tpl` ili `.bpn`. Izvezite iz nje IFC ili DWG i otvorite to: vidi [Otvaranje .pln i .pla projektnih datoteka](topic:pln-project-files).

**"Ova IFC datoteka ne može se pročitati."**
IFC datoteka je oštećena ili zapravo nije IFC. Otvorite je u uređivaču teksta: prava IFC datoteka počinje s `ISO-10303-21;`. Izvezite je ponovno.

**"Ova datoteka je nepotpuna: ima … MB, ali njezin vlastiti indeks pokazuje na podatke najmanje … MB u. …"**
Projektna ili datoteka obitelji je odrezana tijekom kopiranja, učitavanja ili sinkronizacije. Datoteka na pogonu u oblaku koja je "samo na mreži" izgleda isto. Datoteka otvorena sama za sebe i dalje se otvara, uz ovu poruku na vrhu kartice i "Prikazuje se ono što je oporavljeno; za cijeli model ponovno kopirajte izvornik.": kartica prikazuje samo dijelove čiji je svaki bajt u datoteci, a ostalo navodi pod **Nije u datoteci**. Učinite datoteku dostupnom offline na svojem pogonu u oblaku ili ponovno kopirajte izvornik i ponovno ga otvorite. U mapi BimCraft prikazuje najnoviju cjelovitu sigurnosnu kopiju.

**"… Popis sadržaja datoteke također je u nedostajućem dijelu, pa se ništa u njoj ne može otvoriti."**
Datoteka je odrezana toliko rano da nema ni njezina popisa sadržaja. Iz ove kopije ništa se ne može oporaviti. Ponovno kopirajte izvornik i otvorite ga.

**"Ova složena datoteka nema tok BasicFileInfo, pa nije Revit datoteka."**
Datoteka je složena datoteka druge vrste (stari uredski dokumenti koriste isti spremnik). Provjerite jeste li odabrali pravu datoteku.

**"Još se obrađuje prethodna datoteka ili mapa…"**
BimCraft je još zauzet prethodnom datotekom ili mapom. Pričekajte da statusna traka završi, zatim pokušajte ponovno.

**Izbornik datoteka zasivi moju datoteku.**
Izbornik nudi samo `.ifc`, `.rvt`, `.rfa`, `.rte`, `.rft`, `.dwg` i `.dxf`. Umjesto toga povucite ostale datoteke na stranicu, a BimCraft će vam reći može li ih čitati.

## Otvaranje mapa

**"Ova mapa ima više od 20,000 datoteka. Odaberite manju mapu, na primjer jedan projekt."**
Odabrali ste previsoku mapu, poput cijelog diska. Odaberite jednu mapu projekta.

**"Preglednik nije dao pristup *name*. Odaberite je ponovno pomoću Otvori mapu."**
Kliknuli ste {{ui:Ponovno otvori}} na nedavnoj mapi, a dopuštenje preglednika je odbijeno ili je isteklo. Odaberite mapu ponovno ili je povucite.

**Preglednik kaže da će datoteke "učitati".**
To je vlastita formulacija preglednika za predaju datoteka stranici. BimCraft ih nikamo ne šalje. Da izbjegnete pitanje, povucite mapu.

**Na telefonu ili tabletu se ništa ne događa.**
Mnogi mobilni preglednici ne mogu odabrati mape. Otvorite pojedinačne datoteke ili koristite računalo.

## IFC motor se učitava prvi put

**Statusna traka ostaje na "Pokretanje IFC motora…" ili prikazuje pogrešku poput "Failed to fetch".**
IFC motor nije mogao biti preuzet. Možda ste offline, ili vatrozid ili blokator sadržaja to zaustavlja.

:::offline
Niste na mreži. Ako gumb u traci aplikacije ne kaže {{ui:Spremno za offline}}, IFC motor nikad nije bio spremljen u ovom pregledniku. Ponovno se spojite, otvorite datoteku ponovno, zatim kliknite {{ui:Spremi za offline}} da radi offline sljedeći put. Vidi [Online i offline](topic:online-offline).
:::

:::online
Ponovno učitajte stranicu i pokušajte ponovno. Na radnoj mreži zamolite svoj IT tim da dopusti `.wasm` datoteke stranice.
:::

## Spremanje za offline rad

**Gumb kaže {{ui:Spremanje nije uspjelo}}.**
Neke datoteke nisu preuzete, obično jer je veza prekinuta. Provjerite vezu i ponovno kliknite gumb. Prethodna offline kopija čuva se dok nova ne bude cjelovita.

**Gumb kaže {{ui:Offline nije dostupan}}.**
Ovaj prozor ne može čuvati offline kopiju, na primjer privatni prozor ili upravljano radno računalo. Vidi [Rad offline](common:offline).

**Gumb neko vrijeme ostaje na "Spremanje *n* od *m*".**
Kopija BimCraft-a je oko 11 MB, uglavnom IFC motor. Ostavite karticu otvorenu dok ne kaže {{ui:Spremno za offline}}.

**BimCraft se otvorio offline, ali izgleda zastarjelo.**
Vaša spremljena kopija je iz ranijeg posjeta. Kad ste na mreži, kliknite {{ui:Spremno za offline}} i odaberite {{ui:Spremi ponovno (preuzmi najnoviju verziju)}}.

## 3D prikaz

**Model nije tamo gdje sam očekivao ili je sitan.**
Pritisnite {{key:F}} ili kliknite {{ui:Prilagodi}}. Prilagodi uvijek obuhvaća sve u modelu, uključujući etaže koje ste odznačili i zalutale elemente daleko od zgrade, pa zgrada može izgledati malo. Zumirajte od tamo.

**Klik ništa ne odabire.**
Držite miš mirno dok kliknete: mali pomak zakreće prikaz. Elementi na odznačenim etažama ne mogu se odabrati. Ako je {{ui:Prostori}} uključeno, prozirni prostori se odabiru prije onoga što je unutra.

**Gumb {{ui:Bridovi}} je zasivljen: "Bridovi su isključeni za vrlo velike modele".**
Model ima više od 1.5 milijuna trokuta. Bridovi su isključeni radi uštede memorije.

**Kartica postaje spora, bijela ili pokazuje stranicu rušenja preglednika.**
Model je prevelik za memoriju koju preglednik daje kartici. Zatvorite ostale kartice i ponovno učitajte. Izvezite manji IFC: jednu zgradu, jednu disciplinu ili manje etaža. Vidi [Preglednici, uređaji i memorija](topic:platforms).

**3D prikaz ostaje prazan.**
WebGL je možda isključen ili blokiran. U postavkama preglednika uključite hardversko ubrzanje (ili ubrzanje grafike) i ponovno pokrenite preglednik.

## Uređivanje IFC-a

**"Upišite broj."** Vrijednost je brojčana. Upišite običan broj bez jedinica, poput `2.4`.

**"Upišite cijeli broj."** Vrijednost je brojač ili cijeli broj. Uklonite decimale.

**"Mogu se uređivati samo svojstva s jednom vrijednošću."** Popisi, nabrajanja i količine samo se čitaju.

{{key:Mod+S}} **otvara prozor "Spremi stranicu" preglednika.**
Nema nespremljenih promjena, pa je BimCraft prepustio tipku pregledniku. Zatvorite prozor.

{{key:Mod+Z}} **ne radi ništa.**
Radi samo dok imate nespremljene promjene i ne upisujete u polje. Nakon spremanja nema što poništiti.

**Popis {{ui:Promjene}} još pokazuje izmjene nakon što ste ih odbacili i otvorili crtež ili mapu.**
Kad na pitanje "Odbaciti ih?" odgovorite s U redu, a zatim otvorite nešto drugo osim IFC modela, stare izmjene ostaju u memoriji i {{ui:Spremi kao IFC}} bi ih i dalje spremio. Da zaista počnete ispočetka, ponovno otvorite izvorni IFC ili ponovno učitajte stranicu.

**Moja izmjena promijenila je više elemenata nego što sam odabrao.**
Promijenili ste svojstvo u skupu označenom "(tip)". Svojstva tipa primjenjuju se na svaki element tipa. Kliknite {{ui:Poništi}}. Vidi [Promjena svojstva tipa za svaki element tipa](topic:type-vs-instance).

## Crteži

**"*name* se nije mogao pročitati. Možda je oštećen ili spremljen u formatu koji čitač još ne obrađuje (…)."**
Spremite crtež iz programa koji ga je napravio kao stariji DWG (2018. ili ranije) ili kao DXF, i pokušajte ponovno.

**"Ovaj crtež nema što prikazati."** ili **"*name* je prazan crtež: nema linija, teksta ni blokova."**
Crtež je prazan ili sadrži samo stvari koje BimCraft još ne crta (vidi **Još nije nacrtano** s desne strane).

**"Ovaj crtež je vrlo velik; prikazan je samo dio."**
BimCraft je prestao crtati kako bi ostao brz. Isključite slojeve koji vam ne trebaju ili otvorite listove koji su vam potrebni iz manjeg crteža.

**Dijelovi lista nedostaju.**
Povezani crteži možda nedostaju: pogledajte pod **Povezani crteži** s desne strane. Vidi [Pronalaženje povezanih crteža i slika](topic:dwg-linked-files). Slojevi mogu biti isključeni: kliknite {{ui:Sve uključeno}}.

**Slika se prikazuje kao prazan okvir.**
Njezina datoteka nije pronađena ili je TIFF ("TIFF se ne može prikazati u pregledniku"). Dodajte PNG ili JPEG kopiju pomoću {{ui:Dodaj slike…}}.

**Pomicanje na trackpadu zumira umjesto pomicanja crteža.**
Tako crteži rade u BimCraftu. Kliknite i povucite za pomicanje.

## Još ste zapeli

Pročitajte [Što još nije izrađeno](topic:not-built-yet): stvar koju tražite možda ne postoji u ovoj verziji.
