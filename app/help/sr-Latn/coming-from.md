---
title: Dolazak iz drugih BIM i programa za crteže
summary: Kako navike iz desktop BIM programa za izradu modela i pregled DWG crteža odgovaraju BimCraft-u, i razlike zbog kojih se ljudi spotaknu.
keywords: prelazak, migracija, poznato, desktop bim, familija, parametri, pregledač projekta, paleta svojstava, kocka pogleda, xref, upravljač slojevima, razlike, uporedi
from: 2de629af
---

Ako poznajete Revit, većina BimCraft-a će vam delovati poznato po nazivima, a nepoznato po obimu. Najvažnija razlika: **ova verzija čita i pregleda modele i menja IFC podatke. Još ne izrađuje kao Revit.** Ne možete crtati zidove, postavljati familije, praviti poglede i listove, niti čuvati datoteku projekta. Ono što možete je da otvorite gotovo svaku datoteku zgrade na bilo kom računaru sa pregledačem, vidite šta je u njoj, proverite celu fasciklu projekta i ispravite podatke u IFC modelu.

## Navike i odgovarajući pojmovi

| Ako ste navikli na | U BimCraft-u |
|---|---|
| Otvaranje `.rvt` u Revitu da vidite model | BimCraft otvara `.rvt` kao karticu datoteke: verzija, podaci o projektu, veze, pregled. Za 3D model izvezite IFC i otvorite ga. [Pročitaj datoteku projekta ili familije](topic:read-rvt-file) |
| Proveru u kojoj verziji je datoteka sačuvana pre otvaranja | Kartica na vrhu kaže „sačuvano u Revitu …”, bez nadogradnje ili menjanja datoteke |
| Pregledač projekta | Nema pregledača pogleda i listova. IFC model ima liste {{ui:Spratovi}} i {{ui:Elementi}}; crtež ima kartice listova |
| Paletu svojstava | Panel {{ui:Svojstva}} desno, za element koji ste kliknuli. IFC skupovi svojstava umesto grupa parametara |
| Parametre instance i tipa | Skupovi svojstava instance i skupovi označeni „(tip)”. Promena tipa važi za svaki element tog tipa, kao u Revitu. [Promeni svojstvo tipa za svaki element tipa](topic:type-vs-instance) |
| Edit Type | Nema dijaloga: kliknite vrednost u skupu „(tip)” i ukucajte |
| Izbor mnogo elemenata, filtere, Select All Instances | Jedan element po jedan. Još nije napravljeno |
| Kocku pogleda i točkić za navigaciju | Kocka pogleda u donjem desnom uglu, četiri dugmeta ({{ui:Uklopi}}, {{ui:Gore}}, {{ui:Napred}}, {{ui:Sa strane}}) i slobodno okretanje. Nema točkića za navigaciju |
| Shift i srednji taster za okretanje, srednji taster za pomeranje | Levi taster okreće, desni taster (ili {{key:Shift}} i prevlačenje) pomera, točkić zumira. Stil menija {{ui:BIM traka}} prebacuje pomeranje na srednji taster, a okretanje na {{key:Shift}} sa srednjim tasterom. [Meniji, tasteri i miš](topic:menus-keys-and-mouse) |
| Planove spratova, preseke, kutije preseka | Jedna ravan {{ui:Presek}} u isto vreme ({{key:X}}); bez kutije preseka i 2D planova. [Preseci IFC model ravnim presekom](topic:section-plane) |
| Sakrivanje u pogledu, izolaciju, vidljivost i grafiku | {{ui:Spratovi}} uključeni i isključeni, {{ui:Prostori}} i {{ui:Ivice}}. Još nema sakrivanja po elementu |
| Prostorije | IFC prostori, sakriveni na početku. Kliknite {{ui:Prostori}} |
| Sačuvaj, Sačuvaj kao, sinhronizaciju sa centralnim modelom | {{ui:Sačuvaj kao IFC}} preuzima novu IFC datoteku. Original se nikad ne menja. Nema centralnog modela ni zajedničkog rada |
| Opozovi sa {{key:Mod+Z}} | Radi na IFC izmenama do čuvanja. [Promeni IFC svojstva i sačuvaj izmenjenu kopiju](topic:edit-ifc-properties) |
| Manage Links | Otvorite fasciklu projekta: svaka veza se proverava i obeležava kao **U ovoj fascikli**, **Pronađen je isti naziv**, **Datoteka iz biblioteke** ili **Nije u ovoj fascikli**. [Otvori celu fasciklu projekta](topic:open-project-folder) |
| Reviziju, ili otvaranje datoteke da vidite je li oštećena | Izveštaj o fascikli proverava svaku kopiju i rezervnu kopiju da nisu odsečene, za nekoliko sekundi. [Proveri fasciklu za oštećene kopije](topic:check-folder-health) |
| Izbor prave datoteke iz neuredne fascikle | Polje {{ui:Počni ovde}} predlaže jednu, sa razlozima |

Ako uglavnom otvarate modele da biste ih proverili, kao u programu za proveru modela ili pregled IFC-a, izaberite stil menija {{ui:Pregledač}}: alati za pregled i proveru su prvi, a alati za izradu zgrade čekaju u jednom meniju. Pogledajte [Meniji, tasteri i miš](topic:menus-keys-and-mouse).

## Iz pregleda DWG datoteka

Ako otvarate DWG u AutoCAD-u ili pregledaču DWG-a:

| Ako ste navikli na | U BimCraft-u |
|---|---|
| Kartice modela i rasporeda na dnu | Kartice iznad crteža: {{ui:Model}} i po jedna za svaki list |
| ZOOM Extents, dvostruki klik na točkić | Dvostruki klik, {{key:F}} ili {{ui:Uklopi}} |
| Pomeranje srednjim tasterom | Prevlačenje bilo kojim tasterom |
| Menadžer slojeva | Lista {{ui:Slojevi}}: štiklirajte da prikažete, otštiklirajte da sakrijete, {{ui:Sve uključi}} i {{ui:Sve isključi}} |
| Menadžer xref-ova | **Povezani crteži** desno, sa **Prikazan** ili **Nije pronađen**, i {{ui:Dodaj povezane crteže…}} |
| Pregled za štampu | {{ui:Prikaz za štampu}} ili {{key:P}}: crno na belom sa debljinama linija. Ne štampa se |
| Izvlačenje podataka iz atributa blokova | Kartica {{ui:Oprema}} za označene crteže ugostiteljske opreme, sa {{ui:Preuzmi CSV}} |
| Merenje, crtanje, uređivanje, sačuvaj kao | Nije u BimCraft-u. Aplikacija CadCraft za crtanje crta i uređuje |

## Razlike zbog kojih se ljudi spotaknu

- **Radi u pregledaču, a pregledač pažljivo postupa sa vašim datotekama.** BimCraft može da čita samo datoteke i fascikle koje mu date, izborom ili prevlačenjem. Ne može sam da otvori datoteku niti da je prepiše. Svako čuvanje je preuzimanje.
- **Ništa se ne otprema.** Reč „otpremi” u nekim dijalozima pregledača za fascikle je reč samog pregledača. Datoteke ostaju na vašem računaru.
- **IFC je format modela.** Datoteka projekta se otvara kao kartica, jer je njen 3D sadržaj nedokumentovan. IFC tretirajte kao način na koji modeli stižu u BimCraft.
- **Izmene se čuvaju kopiranjem.** Promena vrednosti jednog elementa nikad ne menja susede, čak ni kada ju je izvoznik delio među njima. Svojstva tipa su namerni izuzetak.
- **Nema projekta, nema pogleda.** BimCraft prikazuje jednu datoteku u isto vreme i ne pamti ništa o njoj posle zatvaranja kartice, osim naziva nedavnih fascikli u Chrome-u i Edge-u.
- **Tasteri na Mac-u.** Gde Revitove prečice na Windows-u koriste Ctrl, prečice BimCraft-a koriste {{key:Mod}}: Command na Mac-u.
- **Navike sa mišem.** Okretanje je levi taster, a ne Shift i srednji taster, osim ako izaberete stil menija {{ui:BIM traka}} ili sami podesite tastere u [Meniji, tasteri i miš](topic:menus-keys-and-mouse).

Pogledajte [Šta još nije napravljeno](topic:not-built-yet) za to šta da koristite umesto toga danas.
