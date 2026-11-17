---
title: Dolazak iz drugih BIM i programa za crtanje
summary: Kako navike iz desktop BIM alata za izradu i pregled DWG crteža odgovaraju programu BimCraft i razlike zbog kojih ljudi posrću.
keywords: prelazak, migracija, poznato, desktop bim, porodica, parametri, pretraživač projekta, paleta svojstava, kocka pogleda, xref, upravljač slojevima, razlike, uporedi
from: 2de629af
---

Ako poznajete Revit, većina programa BimCraft će vam biti poznata po nazivima, a nepoznata po obimu. Najvažnija razlika: **ova verzija čita i pregleda modele i uređuje IFC podatke. Još ne izrađuje kao Revit.** Ne možete crtati zidove, postavljati porodice, praviti poglede ili listove, niti spasiti projektnu datoteku. Ono što možete je otvoriti skoro bilo koju datoteku zgrade na bilo kojem računaru sa preglednikom, vidjeti šta je u njoj, provjeriti cijeli folder projekta i ispraviti podatke u IFC modelu.

## Navike preslikane

| Ako ste navikli na | U BimCraft-u |
|---|---|
| Otvaranje `.rvt` u Revitu da vidite model | BimCraft otvara `.rvt` kao karticu datoteke: verziju, informacije o projektu, veze, pregled. Za 3D model izvezite IFC i otvorite njega. [Pročitaj projektnu ili porodičnu datoteku](topic:read-rvt-file) |
| Provjeru u kojoj verziji je datoteka spašena prije otvaranja | Kartica na vrhu kaže „spašeno u Revitu …“, bez nadogradnje ili diranja datoteke |
| Pretraživač projekta | Nema pretraživača pogleda i listova. IFC model ima liste {{ui:Spratovi}} i {{ui:Elementi}}; crtež ima kartice listova |
| Paleta svojstava | Panel {{ui:Svojstva}} desno, za element koji ste kliknuli. IFC skupovi svojstava umjesto grupa parametara |
| Parametri instance i tipa | Skupovi svojstava instance i skupovi označeni „(tip)“. Promjena tipa važi za svaki element tog tipa, kao u Revitu. [Promijeni svojstvo tipa za svaki element tipa](topic:type-vs-instance) |
| Uredi tip | Nema dijaloga: kliknite vrijednost u skupu „(tip)“ i unesite |
| Odabir mnogo elemenata, filteri, Odaberi sve instance | Jedan element u jednom trenutku. Još nije napravljeno |
| Kocka pogleda i točkić za navigaciju | Kocka pogleda u donjem desnom uglu, četiri dugmeta ({{ui:Uklopi}}, {{ui:Gore}}, {{ui:Sprijeda}}, {{ui:Strana}}) i slobodna rotacija. Nema točkića za navigaciju |
| Shift i prevlačenje srednjim dugmetom za rotaciju, prevlačenje srednjim za pomak | Prevlačenje lijevim rotira, prevlačenje desnim (ili {{key:Shift}} i prevlačenje) pomjera, točkić zumira. Stil menija {{ui:BIM traka}} prebacuje na pomak srednjim dugmetom, a za rotaciju {{key:Shift}} sa srednjim dugmetom. [Meniji, tipke i miš](topic:menus-keys-and-mouse) |
| Tlocrti, presjeci, kutije presjeka | Jedna ravan {{ui:Presjek}} u jednom trenutku ({{key:X}}); nema kutije presjeka niti 2D tlocrta. [Presijeci IFC model ravninom presjeka](topic:section-plane) |
| Sakrij u pogledu, izoluj, vidljivost/grafika | {{ui:Spratovi}} uključeni i isključeni, {{ui:Prostorije}} i {{ui:Ivice}}. Još nema sakrivanja po elementu |
| Prostorije | IFC prostori, u početku sakriveni. Kliknite {{ui:Prostorije}} |
| Spasi, Spasi kao, sinhronizacija sa centralnom datotekom | {{ui:Spasi kao IFC}} preuzima novu IFC datoteku. Original se nikad ne mijenja. Nema centralne datoteke, nema zajedničkog rada |
| Poništi sa {{key:Mod+Z}} | Radi za IFC izmjene do spašavanja. [Promijeni IFC svojstva i spasi izmijenjenu kopiju](topic:edit-ifc-properties) |
| Upravljanje vezama | Otvorite folder projekta: svaka veza se provjerava i označava kao **U ovom folderu**, **Pronađen isti naziv**, **Datoteka biblioteke** ili **Nije u ovom folderu**. [Otvori cijeli folder projekta](topic:open-project-folder) |
| Revizija, ili otvaranje datoteke da vidite je li oštećena | Izvještaj o folderu provjerava svaku kopiju i rezervnu kopiju da nisu odsječene, za nekoliko sekundi. [Provjeri folder za oštećene kopije](topic:check-folder-health) |
| Biranje prave datoteke iz nesređenog foldera | Okvir {{ui:Počnite ovdje}} predlaže jednu, sa razlozima |

Ako uglavnom otvarate modele da ih provjerite, kao u programu za provjeru ili pregled IFC-a, odaberite stil menija {{ui:Pregledač}}: alati za pregled i provjeru dolaze prvi, a alati za izradu čekaju u jednom meniju. Pogledajte [Meniji, tipke i miš](topic:menus-keys-and-mouse).

## Iz pregleda DWG datoteka

Ako otvarate DWG u AutoCAD-u ili pregledniku DWG-a:

| Ako ste navikli na | U BimCraft-u |
|---|---|
| Kartice Model i raspored na dnu | Kartice iznad crteža: {{ui:Model}} i jedna po listu |
| ZOOM Extents, dvostruki klik na točkić | Dvostruki klik, {{key:F}} ili {{ui:Uklopi}} |
| Pomjeranje srednjim dugmetom | Prevlačenje bilo kojim dugmetom |
| Upravljač slojevima | Lista {{ui:Slojevi}}: označi da prikažeš, odznači da sakriješ, {{ui:Sve uključi}} i {{ui:Sve isključi}} |
| Upravljač vanjskim referencama | **Povezani crteži** desno, sa **Prikazano** ili **Nije pronađeno**, i {{ui:Dodaj povezane crteže…}} |
| Pregled štampe | {{ui:Prikaz za štampu}} ili {{key:P}}: crno na bijelo sa debljinama linija. Ne štampa se |
| Izvlačenje podataka atributa blokova | Kartica {{ui:Oprema}} za označene crteže ugostiteljske opreme, sa {{ui:Preuzmi CSV}} |
| Mjerenje, crtanje, uređivanje, spasi kao | Nije u BimCraft-u. Aplikacija za crtanje CadCraft crta i uređuje |

## Razlike zbog kojih ljudi posrću

- **Radi u pregledniku, a preglednik pažljivo postupa sa vašim datotekama.** BimCraft može čitati samo datoteke i foldere koje mu date, biranjem ili prevlačenjem. Ne može sam otvoriti datoteku i ne može je prepisati. Svako spašavanje je preuzimanje.
- **Ništa se ne šalje na server.** Riječ „upload“ u nekim dijalozima za foldere u pregledniku je njihova vlastita riječ. Datoteke ostaju na vašem računaru.
- **IFC je format modela.** Projektna datoteka se otvara kao kartica jer je njen 3D sadržaj nedokumentovan. Smatrajte IFC načinom na koji modeli dolaze u BimCraft.
- **Izmjene se rade kopiranjem pri pisanju.** Promjena vrijednosti jednog elementa nikad ne mijenja susjede, čak i kad ju je izvoznik dijelio među njima. Svojstva tipa su namjerna iznimka.
- **Nema projekta, nema pogleda.** BimCraft prikazuje jednu datoteku u jednom trenutku i ništa ne pamti o njoj nakon što zatvorite karticu, osim naziva nedavnih foldera u Chrome-u i Edge-u.
- **Tipke na Mac-u.** Gdje Revitove prečice za Windows koriste Ctrl, BimCraft prečice koriste {{key:Mod}}: Command na Mac-u.
- **Navike sa mišem.** Rotacija je lijevo dugme, a ne Shift i srednje dugme, osim ako ne odaberete stil menija {{ui:BIM traka}} ili sami podesite dugmad u [Meniji, tipke i miš](topic:menus-keys-and-mouse).

Pogledajte [Šta još nije napravljeno](topic:not-built-yet) za ono što koristiti umjesto toga danas.
