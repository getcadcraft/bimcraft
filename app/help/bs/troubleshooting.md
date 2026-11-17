---
title: Rješavanje problema
summary: Poruke koje BimCraft prikazuje, šta ih uzrokuje i šta uraditi, za otvaranje datoteka, foldera, 3D modela, crteža i izmjena.
keywords: problem, greška, ne radi, ne može se otvoriti, nije uspjelo, nepotpuno, oštećeno, sporo, pad, prazno, nedostaje, poruka, pomoć
from: 1e5a79fc
---

Poruke se pojavljuju u statusnoj liniji na dnu scene, crvenom bojom kada nešto nije uspjelo. Pronađite poruku ispod.

## Otvaranje datoteka

**"*name* nije IFC, RVT, RFA, DWG ili DXF datoteka."**
BimCraft nije prepoznao datoteku. Provjerite nastavak i da datoteka nije prazna. PDF-ovi, slike i uredske datoteke se ne otvaraju.

**".ifczip još nije podržan. Spasi ili izvezi model kao običnu .ifc datoteku."** (takođe za `.ifcxml`)
Raspakujte `.ifczip` (to je obična zip datoteka koja sadrži `.ifc`) ili izvezite običan IFC.

**"… je datoteka projekta koju BimCraft još ne čita."**
Datoteka `.pln`, `.pla`, `.tpl` ili `.bpn`. Izvezite IFC ili DWG iz nje i otvorite to: vidi [Otvaranje .pln i .pla datoteka projekta](topic:pln-project-files).

**"Ova IFC datoteka se ne može pročitati."**
Datoteka je oštećena ili zapravo nije IFC. Otvorite je u uređivaču teksta: prava IFC datoteka počinje s `ISO-10303-21;`. Izvezite je ponovo.

**"Ova datoteka je nepotpuna: velika je … MB, ali njen vlastiti indeks upućuje na podatke najmanje … MB unutar nje. …"**
Datoteka projekta ili porodice je odsječena pri kopiranju, otpremanju ili sinhronizaciji. Datoteka na oblaku koja je "samo online" izgleda isto. Datoteka otvorena sama za sebe i dalje se otvara, uz ovu poruku na vrhu kartice i "Prikazujem ono što je oporavljeno; ponovo kopirajte original za puni model.": kartica prikazuje samo dijelove čiji je svaki bajt u datoteci, a ostale navodi pod **Nije u datoteci**. Učinite datoteku dostupnom van mreže na svom oblačnom disku, ili ponovo kopirajte original, pa je ponovo otvorite. U folderu BimCraft prikazuje najnoviju potpunu rezervnu kopiju.

**"… Njen vlastiti spisak sadržaja je takođe u nedostajućem dijelu, pa se ništa u njoj ne može otvoriti."**
Datoteka je odsječena tako rano da nema ni spiska sadržaja. Iz ove kopije se ništa ne može oporaviti. Ponovo kopirajte original i otvorite ga.

**"Ova složena datoteka nema BasicFileInfo tok, pa nije Revit datoteka."**
Datoteka je složena datoteka druge vrste (stari uredski dokumenti koriste isti kontejner). Provjerite jeste li odabrali pravu datoteku.

**"Još radim na prethodnoj…"**
BimCraft je još zauzet prethodnom datotekom ili folderom. Sačekajte da statusna linija završi, pa pokušajte ponovo.

**Birač datoteka sivi moju datoteku.**
Birač nudi samo `.ifc`, `.rvt`, `.rfa`, `.rte`, `.rft`, `.dwg` i `.dxf`. Umjesto toga prevucite druge datoteke na stranicu, a BimCraft će vam reći može li ih pročitati.

## Otvaranje foldera

**"Ovaj folder ima više od 20.000 datoteka. Odaberite manji folder, na primjer jedan projekat."**
Odabrali ste folder previsoko, na primjer cijeli disk. Odaberite jedan folder projekta.

**"Pregledač nije dao pristup *name*. Odaberite ga ponovo pomoću Otvori folder."**
Kliknuli ste {{ui:Reopen}} na nedavnom folderu, a dozvola pregledača je odbijena ili je istekla. Odaberite folder ponovo ili ga prevucite.

**Pregledač kaže da će "otpremiti" datoteke.**
To je vlastita formulacija pregledača za predavanje datoteka stranici. BimCraft ih nigdje ne šalje. Da izbjegnete pitanje, prevucite folder.

**Na telefonu ili tabletu se ništa ne dešava.**
Mnogi mobilni pregledači ne mogu birati foldere. Otvorite pojedinačne datoteke ili koristite računar.

## IFC motor se učitava prvi put

**Statusna linija ostaje na "Pokretanje IFC motora…" ili prikazuje grešku poput "Failed to fetch".**
IFC motor nije mogao biti preuzet. Možda ste van mreže, ili vatrozid ili blokator sadržaja to zaustavlja.

:::offline
Van ste mreže. Ako dugme na traci aplikacije ne kaže {{ui:Spremno za rad van mreže}}, IFC motor nikada nije bio sačuvan u ovom pretraživaču. Ponovo se povežite, ponovo otvorite datoteku, pa kliknite {{ui:Spasi za rad van mreže}} da radi van mreže sljedeći put. Vidi [Rad na mreži i van mreže](topic:online-offline).
:::

:::online
Ponovo učitajte stranicu i pokušajte ponovo. Na radnoj mreži zamolite svoj IT tim da dozvoli `.wasm` datoteke sajta.
:::

## Čuvanje za rad van mreže

**Dugme kaže {{ui:Could not save}}.**
Neke datoteke se nisu preuzele, obično zato što je veza prekinuta. Provjerite vezu i ponovo kliknite dugme. Svaka ranija kopija za rad van mreže se čuva dok nova ne bude potpuna.

**Dugme kaže {{ui:Offline not available}}.**
Ovaj prozor ne može čuvati kopiju za rad van mreže, na primjer privatni prozor ili upravljani radni računar. Vidi [Rad van mreže](common:offline).

**Dugme dugo ostaje na "Spašavanje *n* od *m*".**
Kopija BimCraft-a je oko 11 MB, uglavnom IFC motor. Ostavite karticu otvorenu dok ne kaže {{ui:Spremno za rad van mreže}}.

**BimCraft se otvorio van mreže, ali izgleda zastarjelo.**
Vaša sačuvana kopija je iz ranije posjete. Kada ste na mreži, kliknite {{ui:Spremno za rad van mreže}} i odaberite {{ui:Save again (get the newest version)}}.

## 3D prikaz

**Model nije tamo gdje sam očekivao, ili je sitan.**
Pritisnite {{key:F}} ili kliknite {{ui:Fit}}. Uklopi uvijek uokviruje sve u modelu, uključujući spratove koje ste isključili i pojedinačne elemente daleko od zgrade, pa zgrada može izgledati mala. Zumirajte odatle.

**Klik ne bira ništa.**
Držite miš mirno dok kliknete: mali pomak rotira. Elementi na isključenim spratovima ne mogu se odabrati. Kada je {{ui:Spaces}} uključeno, prozirni prostori se biraju prije onoga što je unutra.

**Dugme {{ui:Edges}} je zasivljeno: "Ivice su isključene za veoma velike modele".**
Model ima više od 1.5 miliona trouglova. Ivice su isključene da se uštedi memorija.

**Kartica postaje spora, bijela, ili prikazuje stranicu pada pregledača.**
Model je prevelik za memoriju koju pregledač daje kartici. Zatvorite druge kartice i ponovo učitajte. Izvezite manji IFC: jednu zgradu, jednu disciplinu ili manje spratova. Vidi [Pregledači, uređaji i memorija](topic:platforms).

**3D prikaz ostaje prazan.**
WebGL može biti isključen ili blokiran. U postavkama pregledača uključite hardversko ubrzanje (ili ubrzanje grafike) i ponovo pokrenite pregledač.

## Uređivanje IFC-a

**"Upišite broj."** Vrijednost je numerička. Upišite običan broj bez jedinica, na primjer `2.4`.

**"Upišite cijeli broj."** Vrijednost je brojač ili cijeli broj. Uklonite decimale.

**"Samo svojstva s jednom vrijednošću se mogu mijenjati."** Liste, nabrajanja i količine su samo za čitanje.

**{{key:Mod+S}} otvara prozor pregledača "Spasi stranicu".**
Nema nespašenih promjena, pa je BimCraft prepustio tipku pregledaču. Zatvorite prozor.

**{{key:Mod+Z}} ne radi ništa.**
Radi samo dok imate nespašene promjene i ne kucate u polju. Nakon čuvanja, nema šta poništiti.

**Spisak {{ui:Changes}} i dalje prikazuje izmjene nakon što ste ih odbacili i otvorili crtež ili folder.**
Kada na pitanje "Odbaciti ih?" odgovorite sa {{ui:OK}}, pa otvorite nešto što nije IFC model, stare izmjene ostaju u memoriji i {{ui:Save as IFC}} bi ih i dalje sačuvao. Da stvarno počnete ispočetka, ponovo otvorite originalni IFC ili ponovo učitajte stranicu.

**Moja izmjena je promijenila više elemenata nego što sam odabrao.**
Promijenili ste svojstvo u skupu označenom "(type)". Svojstva tipa se primjenjuju na svaki element tipa. Kliknite {{ui:Undo}}. Vidi [Promjena svojstva tipa za svaki element tipa](topic:type-vs-instance).

## Crteži

**"*name* nije mogao biti pročitan. Možda je oštećen ili sačuvan u formatu koji čitač još ne podržava (…)."**
Sačuvajte crtež iz programa koji ga je napravio kao stariji DWG (2018 ili ranije) ili kao DXF, pa pokušajte ponovo.

**"Ovaj crtež nema šta prikazati."** ili **"*name* je prazan crtež: ne sadrži linije, tekst ni blokove."**
Crtež je prazan ili sadrži samo stvari koje BimCraft još ne crta (vidi **Not drawn yet** desno).

**"Ovaj crtež je veoma velik; prikazan je samo dio."**
BimCraft je prestao crtati da ostane brz. Isključite slojeve koji vam nisu potrebni, ili otvorite listove koji su vam potrebni iz manjeg crteža.

**Dijelovi lista nedostaju.**
Povezani crteži mogu nedostajati: pogledajte pod **Linked drawings** desno. Vidi [Pronalaženje povezanih crteža i slika](topic:dwg-linked-files). Slojevi takođe mogu biti isključeni: kliknite {{ui:All on}}.

**Slika se prikazuje kao prazan okvir.**
Njena datoteka nije pronađena, ili je TIFF ("TIFF se ne može prikazati u pregledaču"). Dodajte kopiju PNG ili JPEG pomoću {{ui:Add pictures…}}.

**Pomicanje na tačpedu zumira umjesto da pomjera crtež.**
Tako crteži rade u BimCraft-u. Kliknite i povucite da pomjerate.

## Još uvijek ne radi

Pročitajte [Šta još nije izgrađeno](topic:not-built-yet): stvar koju tražite možda ne postoji u ovoj verziji.
