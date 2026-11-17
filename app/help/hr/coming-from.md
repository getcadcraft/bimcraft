---
title: Dolazak iz drugih BIM i programa za crtanje
summary: Kako navike iz BIM programa za stolna računala i pregleda DWG datoteka odgovaraju BimCraftu te razlike zbog kojih se ljudi često spotaknu.
keywords: prelazak, migracija, poznato, stolni BIM, obitelj, parametri, preglednik projekta, paleta svojstava, ViewCube, xref, upravitelj slojeva, razlike, usporedba
from: 2de629af
---

Ako poznajete Revit, većina BimCrafta će vam u riječima biti poznata, a po opsegu nepoznata. Najvažnija razlika: **ova verzija čita i pregledava modele te uređuje IFC podatke. Još ne izrađuje kao Revit.** Ne možete crtati zidove, postavljati obitelji, izrađivati poglede ili listove, niti spremati projektnu datoteku. Ono što možete jest otvoriti gotovo svaku datoteku zgrade na bilo kojem računalu s preglednikom, vidjeti što sadrži, provjeriti cijelu mapu projekta i ispraviti podatke u IFC modelu.

## Navike i njihovi pandani

| Ako ste navikli na | U BimCraftu |
|---|---|
| Otvaranje `.rvt` u programu Revit radi pregleda modela | BimCraft otvara `.rvt` kao karticu datoteke: izdanje, podaci o projektu, veze, pregled. Za 3D model izvezite IFC i otvorite ga. [Pročitajte projektnu ili obiteljsku datoteku](topic:read-rvt-file) |
| Provjeru u kojem je izdanju datoteka spremljena prije otvaranja | Kartica na vrhu kaže „spremljeno u programu Revit …“, bez nadogradnje ili diranja datoteke |
| Preglednik projekta | Nema preglednika pogleda i listova. IFC model ima popise {{ui:Etaže}} i {{ui:Elementi}}; crtež ima kartice listova |
| Paleta svojstava | Panel {{ui:Svojstva}} s desne strane, za element na koji ste kliknuli. IFC skupovi svojstava umjesto grupa parametara |
| Parametri instance i tipa | Skupovi svojstava instance i skupovi označeni s „(tip)“. Promjena tipa primjenjuje se na svaki element tog tipa, kao u programu Revit. [Promijenite svojstvo tipa za svaki element tipa](topic:type-vs-instance) |
| Edit Type | Nema dijaloga: kliknite vrijednost u skupu „(tip)“ i upišite |
| Odabir mnogo elemenata, filtri, Select All Instances | Jedan element po jednom. Još nije izrađeno |
| Pogled ViewCube i kotač za navigaciju | ViewCube u donjem desnom kutu, četiri gumba ({{ui:Prilagodi}}, {{ui:Gore}}, {{ui:Naprijed}}, {{ui:Bočno}}) i slobodno rotiranje. Nema kotača za navigaciju |
| Shift i povlačenje srednjim gumbom za rotiranje, povlačenje srednjim gumbom za pomicanje | Lijevi gumb rotira, desni gumb (ili {{key:Shift}} i povlačenje) pomiče, kotačić zumira. Stil izbornika {{ui:BIM vrpca}} prebacuje pomicanje na srednji gumb, a rotiranje na {{key:Shift}} sa srednjim gumbom. [Izbornici, tipke i miš](topic:menus-keys-and-mouse) |
| Tlocrti, presjeci, kutije presjeka | Jedna ravnina {{ui:Presjek}} u isto vrijeme ({{key:X}}); bez kutije presjeka ili 2D tlocrta. [Presijecite IFC model ravninom presjeka](topic:section-plane) |
| Sakrivanje u pogledu, izolacija, vidljivost i grafika | {{ui:Etaže}} uključene i isključene, {{ui:Prostori}} i {{ui:Bridovi}}. Još nema sakrivanja pojedinačnih elemenata |
| Prostorije | IFC prostori, u početku skriveni. Kliknite {{ui:Prostori}} |
| Spremi, Spremi kao, sinkroniziraj sa središnjom datotekom | {{ui:Spremi kao IFC}} preuzima novu IFC datoteku. Izvorna se nikad ne mijenja. Nema središnje datoteke ni zajedničkog rada |
| Poništi s {{key:Mod+Z}} | Radi za IFC izmjene dok ne spremite. [Promijenite IFC svojstva i spremite uređenu kopiju](topic:edit-ifc-properties) |
| Upravljanje vezama | Otvorite mapu projekta: svaka veza se provjerava i označava kao **U ovoj mapi**, **Pronađen je isti naziv**, **Datoteka knjižnice** ili **Nije u ovoj mapi**. [Otvorite cijelu mapu projekta](topic:open-project-folder) |
| Revizija ili otvaranje datoteke da se vidi je li oštećena | Izvještaj o mapi provjerava svaku kopiju i sigurnosnu kopiju je li odrezana, u nekoliko sekundi. [Provjerite mapu za oštećene kopije](topic:check-folder-health) |
| Odabir prave datoteke iz nepregledne mape | Okvir {{ui:Počnite ovdje}} predlaže jednu, s razlozima |

Ako uglavnom otvarate modele da biste ih provjerili, kao u programu za provjeru ili pregled IFC-a, odaberite stil izbornika {{ui:Preglednik}}: alati za pregled i provjeru dolaze prvi, a alati za izradu čekaju u jednom izborniku. Pogledajte [Izbornici, tipke i miš](topic:menus-keys-and-mouse).

## Iz pregledavanja DWG datoteka

Ako otvarate DWG u AutoCADu ili pregledniku DWG-a:

| Ako ste navikli na | U BimCraftu |
|---|---|
| Kartice modela i layouta na dnu | Kartice iznad crteža: {{ui:Model}} i po jedna za svaki list |
| ZOOM Extents, dvostruki klik na kotačić | Dvostruki klik, {{key:F}} ili {{ui:Prilagodi}} |
| Pomicanje srednjim gumbom | Povucite bilo kojim gumbom |
| Upravitelj slojeva | Popis {{ui:Slojevi}}: označite za prikaz, odznačite za skrivanje, {{ui:Sve uključeno}} i {{ui:Sve isključeno}} |
| Upravitelj vanjskih referenci (xref) | **Povezani crteži** s desne strane, s oznakom **Prikazano** ili **Nije pronađeno**, i {{ui:Dodaj povezane crteže…}} |
| Pregled ispisa | {{ui:Pogled ispisa}} ili {{key:P}}: crno na bijelom s debljinama linija. Ne ispisuje se |
| Izvlačenje podataka atributa blokova | Kartica {{ui:Oprema}} za označene crteže ugostiteljske opreme, s {{ui:Preuzmi CSV}} |
| Mjerenje, crtanje, uređivanje, spremi kao | Nije u BimCraftu. Aplikacija CadCraft za crtanje crta i uređuje |

## Razlike zbog kojih se ljudi spotaknu

- **Radi u pregledniku, a preglednik pažljivo postupa s vašim datotekama.** BimCraft može čitati samo datoteke i mape koje mu predate, odabirom ili povlačenjem. Ne može sam otvoriti datoteku niti je prepisati. Svako spremanje je preuzimanje.
- **Ništa se ne šalje.** Riječ „učitaj“ u dijaloškim okvirima mapa nekih preglednika je njihov vlastiti izraz. Datoteke ostaju na vašem računalu.
- **IFC je format modela.** Projektna datoteka se otvara kao kartica jer je njezin 3D sadržaj nedokumentiran. Smatrajte IFC načinom na koji modeli dolaze u BimCraft.
- **Izmjene se rade kopiranjem pri pisanju.** Promjena vrijednosti jednog elementa nikad ne mijenja njegove susjede, čak ni kad je izvoznik tu vrijednost dijelio među njima. Svojstva tipa su namjerna iznimka.
- **Nema projekta, nema pogleda.** BimCraft prikazuje jednu datoteku u isto vrijeme i ništa ne pamti o njoj nakon što zatvorite karticu, osim naziva nedavnih mapa u Chromeu i Edgeu.
- **Tipke na Macu.** Gdje Reviti Windows prečaci koriste Ctrl, BimCraftovi prečaci koriste {{key:Mod}}: Command na Macu.
- **Navike s mišem.** Rotiranje je lijevim gumbom, a ne Shift i srednjim gumbom, osim ako ne odaberete stil izbornika {{ui:BIM vrpca}} ili sami ne postavite gumbe u [Izbornici, tipke i miš](topic:menus-keys-and-mouse).

Pogledajte [Što još nije izrađeno](topic:not-built-yet) za ono što danas koristite umjesto toga.
