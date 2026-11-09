---
title: Što je novo u 0.8 i 0.8.1
summary: BimCraft dodaje ljude koji hodaju kroz zgradu, akustiku prostorija koju možete čuti, reprodukciju poplave, vjetra i potresa, pogled na životni ciklus od pedeset godina, provjere prema IDS-u, oznake i rasporede, Pomakni, Poravnaj i Raspodijeli, slike ispod tlocrta, zidove iz skeniranja, crteže panela, solarnu energiju, split i VRF sustave, dimenzioniranje cijevi i kabela, provjere betona i potresa, bilo koju kartografsku projekciju, izbor render pogona i poništavanje u Studiju; 0.8.1 ispravlja zasivljene alate rasporeda vrpce.
keywords: što je novo, release notes, bilješke o izdanju, dnevnik promjena, promjene, 0.8, 0.8.1, verzija, nove značajke, evakuacija, ljudi, redovi, akustika, reverberacija, impulsni odziv, poplava, vjetar, potres, opasnost, životni ciklus, vijek trajanja, ids, oznake, rasporedi, pomakni, poravnaj, raspodijeli, slika, pozadina, skeniranje u zidove, lokacija iz civilcraft, crteži panela, okvir, solarno, pv, split, vrf, fan coil, dimenzioniranje cijevi, kabelski kanal, osvjetljenje, beton, seizmički, usporedi skeniranje, epsg, projekcija, dokumenti, predložak, ugljik, trošak, energyplus, render pogon, otvori u, usd, glb, unreal, poništi, dodaci, pcf, simboli, biljke, ucrtavanje, pera, vrpca, preglednik projekta, raspored
from: 87b03056
---

Ovo se promijenilo u BimCraftu 0.8 (2026-11-01) i 0.8.1 (2026-11-02) u odnosu na 0.7. BimCraft sada može odgovoriti na pitanja o zgradi i ispitati je, s ljudima, zvukom, vodom, vjetrom i potresima, te je crtati s više alata; 0.8.1 je ispravak.

## Novo

### Ispitivanje zgrade

- **Ljudi u zgradi.** Odjeljak {{ui:Ljudi u zgradi}} lijevog panela provodi evakuaciju ili uobičajen dan dolazaka kroz vaše prostorije, vrata i stubišta. Vidite redove čekanja tamo gdje se zgrada sužava, najdulji put do izlaza iz svake prostorije i koliko vremena treba zadnjoj osobi. Označite {{ui:Zatvoreno}} na vratima da vidite što se mijenja, a {{ui:Prikaži ljude u 3D prikazu}} da pratite šetače. Nalazi idu u Problemi. Gruba simulacija gužve za odluke pri projektiranju, a ne potvrda o protupožarnoj sigurnosti. Vidi [Provedite ljude kroz zgradu](topic:people-in-the-building).
- **Akustika prostorija, i čujte je.** Odjeljak {{ui:Akustika prostorija}} daje vrijeme reverberacije svake prostorije po oktavnim pojasevima (Sabine i Eyring) iz njezine veličine i odabrane obrade, a uz vlastiti cilj kaže koliko apsorpcije bi ga zadovoljilo. {{ui:Reproduciraj u ovoj prostoriji}} pušta glas, pljesak, trzane tonove ili vašu zvučnu datoteku kroz impulsni odziv izračunat za prostoriju. Vrijednosti apsorpcije su tipične objavljene vrijednosti koje možete zamijeniti. Vidi [Akustika prostorija](topic:room-acoustics).
- **Poplava, vjetar i potres.** {{ui:Reprodukcija opasnosti}} pušta vodu koja raste kroz prostorije, tlak vjetra na svakoj etaži i potres koji trese etaže, na tlocrtu ili pročelju s kliznikom vremena. Jednostavni modeli s pretpostavkama na ploči; nije provjera prema propisu. Vidi [Pokrenite poplavu, vjetar ili potres](topic:hazard-playback).
- **Što se troši u pedeset godina.** {{ui:Pogled na životni ciklus}} navodi prozore, vrata, obrade i krov, sa svakim vijekom trajanja, godinama zamjene i, kad upišete trošak po jedinici, trošak po godinama i njegovu sadašnju vrijednost. {{ui:Spremi raspored (CSV)}} ga zapisuje. Vijekovi trajanja su planske vrijednosti. Vidi [Pogledajte što se troši u pedeset godina](topic:life-cycle-view).
- **Provjere betona i potresa.** Blokovi {{ui:Betonski štapovi}} i {{ui:Potresna opterećenja}} kartice {{ui:Analiza}} provjeravaju betonske grede i stupove prema ACI 318-19 i računaju ekvivalentne bočne sile prema ASCE 7-22 na krutim etažama, s međukatnim pomakom. Za provjeru inženjera. Vidi [Provjera betonskih štapova i izrada potresnih opterećenja](topic:concrete-and-seismic).

### Provjera i izvještavanje

- **Provjera prema IDS-u.** Učitajte `.ids` datoteku koju vam je dao naručitelj i u Problemima vidite svaki element koji joj ne odgovara, prije nego isporučite IFC. Otvorite {{ui:Provjera prema IDS-u}} pod {{ui:Provjere modela}}. Vidi [Provjera modela prema IDS-u naručitelja](topic:check-against-ids).
- **Oznake i rasporedi.** Definirajte vlastite oznake, postavite ih na mnogo elemenata odjednom i napravite rasporede čiji stupci, filtri i grupe ih čitaju; oznake se čuvaju u IFC-u. Vidi [Oznake i rasporedi](topic:tags-and-schedules).
- **Dokumenti iz modela.** {{ui:Dokumenti iz modela}} popunjava predložak specifikacije iz otvorenog IFC-a i sprema ga kao PDF, Word dokument ili Markdown. Vidi [Dokumenti iz modela](topic:documents-from-the-model).
- **Usporedba skeniranja s modelom.** S otvorenim oblakom točaka {{ui:Usporedi}} ocjenjuje svaki element kao izgrađen, djelomično izgrađen, nedostajući ili nedohvaćen, i pokazuje postotak izgrađenoga. Vidi [Usporedba skeniranja s modelom](topic:compare-scan-with-model).
- **Ugljik i trošak.** Ploča Ugljik zbraja ugrađeni ugljik iz tablice faktora koju možete uređivati, a ploča Trošak raspoređuje cijene po 4D rasporedu. Faktori koji dolaze uz BimCraft su generički i označeni kao neprovjereni. Vidi [Ugrađeni ugljik i trošak](topic:embodied-carbon-and-5d-cost).
- **Bilo koja kartografska projekcija.** {{ui:Mjeri}} › {{ui:Koordinatni sustav…}} prihvaća EPSG broj, UTM zonu, naziv ili vašu definiciju projekcije. Vidi [Georeferenciranje bilo kojom projekcijom](topic:georeference-any-projection).

### Crtanje i uređivanje

- **Pomakni, Poravnaj i Raspodijeli.** Pod {{ui:Izgradnja}}; {{key:Shift+M}} pokreće Pomakni (obični {{key:M}} je i dalje Mjeri). Pomicanje kopira dok idete uz {{key:C}}, svaki korak je jedan poništaj i prenosi se u sesiji Live TeamWork. Vidi [Pomicanje, kopiranje, poravnavanje i raspodjela](topic:move-align-distribute).
- **Slike ispod tlocrta.** {{ui:Izgradnja}} › {{ui:Slika}} postavlja PNG, JPEG ili WebP ispod tlocrta etaže ili na okomitu ravninu. Mjerilo se postavlja dvjema točkama, a sliku možete pomicati, okretati, prigušiti i zaključati. Područje kopirano u MarkupCraftu zalijepi se u mjerilu svog lista. Vidi [Stavite sliku ispod tlocrta](topic:pictures-as-backgrounds).
- **Zidovi iz skeniranja.** S otvorenim skenom zidovi, vrata i prostorije dolaze kao prijedlozi koje zadržavate ili odbacujete jedan po jedan, u jednom koraku poništavanja. Pronalaze se samo zidovi u dva okomita smjera. Vidi [Pretvorba skeniranja u zidove](topic:scan-to-walls).
- **Ucrtavanje, pera i skica stubišta.** {{ui:Ucrtavanje}} prikazuje drugu etažu isprekidano ispod tlocrta, {{ui:Pera}} daje zidovima, vratima i prozorima vlastitu debljinu linije u jednom prikazu, a {{ui:Skiciraj stubište}} pretvara crtu hoda u stubište. Otvara se Wavefront OBJ mreža. Vidi [Ucrtavanje etaže, pera i stubište iz skice](topic:trace-pens-stairs-obj).
- **Zgrade oko adrese.** Zgrade i čestica koje je CivilCraftova Adresa do lokacije pronašla dolaze kao prijedlozi; označite one koje želite dodati. Vidi [Početak s lokacijom iz CivilCrafta](topic:site-from-civilcraft).
- **Crteži panela.** {{ui:Izgradnja}} › {{ui:Crteži panela}} uokviruje zidove, etaže i krovove u drvu ili lakom čeličnom profilu te sprema popis za rezanje kao CSV i radioničke crteže kao PDF. Početne vrijednosti, a ne konstrukcijski proračun. Vidi [Crteži panela](topic:panel-drawings).
- **Paleta simbola i biljke.** {{ui:Izgradnja}} › {{ui:Paleta simbola}} pronalazi električne i vodovodne simbole po nazivu; izvor {{ui:Biljke}} u {{ui:Knjižnica}} navodi oko 400 biljaka s tlocrtnim simbolima. Vidi [Paleta simbola](topic:symbol-palette) i [Postavljanje biljke](topic:plant-list).

### Cijevi, kanali i energija

- **Split, VRF i fan coil.** Unutarnje i vanjske jedinice s njihovim priključcima te rashladni vodovi dimenzionirani iz tablice tipičnih primjernih vrijednosti koje možete mijenjati. Vidi [Split, VRF i fan coil](topic:split-vrf-fan-coils).
- **Proračuni.** Ploča Proračuni provjerava dimenzije dovodnih cijevi i kanala s padom tlaka, vodi kabele kroz kabelske kanale i cijevi te prikazuje njihovu ispunu, a računa osvjetljenje iz IES ili EULUMDAT datoteka. Zadane vrijednosti su označene; upišite vrijednosti vašeg pravilnika. Vidi [Proračuni cijevi, kanala, kabela i svjetla](topic:mep-calculations).
- **PCF datoteke.** Alat Cijev, **Izvezi PCF**, zapisuje vodove za programe za analizu naprezanja cijevi i izometrijske programe, a PCF datoteka pročitana natrag iscrtava svoju cijev. Vidi [Datoteke komponenti cijevi](topic:piping-pcf).
- **Solarna PV.** Postavite nizove na krovove ili tlo, zasjenite ih iz modela, procijenite godišnju energiju, provjerite nizove i napravite podatke jednolinijskog dijagrama. Početni modul i gubici su generički. Vidi [Solarna PV](topic:solar-pv).
- **Datoteka EnergyPlus.** Ploča Provjera s EnergyPlusom zapisuje model kao IDF za pokretanje u vašem EnergyPlusu. Pokretanje u pregledniku traži izgradnju koju sami hostate i čiju adresu upišete; BimCraft je ne isporučuje. Vidi [Provjera grijanja i hlađenja s EnergyPlusom](topic:check-with-energyplus).

### Slike i datoteke

- **Odaberite render pogon.** {{ui:Render}} ima izbor {{ui:Pogon}}. Naša dva ugrađena pogona (Fast i Path tracer) ostaju zadana. **Otvori u** sprema scenu kao USD ili glTF datoteku, a mapu projekta Unreal kao .zip; u CadCraft Studiju dodatak može dodati pogon. Dodatak za Unreal koji otvara projekt nije objavljen. Vidi [Odaberite koji program crta sliku](topic:render-engines).
- **Poništavanje u Studiju.** Unutar CadCraft Studija BimCraft javlja Studiju svaki dovršeni korak, da Studio može poništiti vaš zadnji korak u onom prozoru koji ste zadnji koristili. Vidi [Poništavanje među aplikacijama](topic:undo-across-apps).
- **Dodaci u vašoj datoteci.** IFC bilježi koji su dodaci u njega pisali i nudi one koje nemate kad ga otvorite. Vidi [Dodaci u vašoj datoteci](topic:add-ons-in-your-file).

### U svakoj aplikaciji

- **Povežite svoju AI.** Vaš vlastiti pomoćnik može upravljati BimCraftom kroz vezu Studija i odgovarati na pitanja o modelu, primjerice koje su prostorije pod zadanom površinom. Studio nema vlastitu AI. Vidi [Pustite AI pomoćnika da radi s vašim modelom](topic:assistants).
- **Redci alatne trake.** {{ui:Postavke}} › {{ui:Općenito}} › {{ui:Redci alatne trake}} nudi Prelamanje, 2 retka ili 1 redak; Prelamanje ostaje zadano.
- **Ulazni uređaji.** Postavke trackpada, olovke, 3D miša, kontrolera i MIDI-ja dijele sve aplikacije.
- **Problemi i Live.** Ploča upozorenja i Live sesije rade kao i prije, a nove provjere iznad šalju nalaze u Problemi.
- **Jezici.** 54 jezika, od toga deset novih. Svi osim engleskoga su strojne radne verzije koje izvorni govornik još nije pročitao; teme pomoći su uglavnom na engleskom.

## Ispravljeno u 0.8.1

- **Raspored vrpce + Preglednik projekta.** Umetni › Uvezi CAD, Umetni › Slika i Upravljanje › Jedinice projekta govorili su „Još nije izrađeno u BimCraftu“. Slika sada otvara alat Slika, Uvezi CAD otvara {{ui:Izgradnja}} › {{ui:Iz crteža…}} (DWG, DXF, PDF ili skeniranje), a Jedinice projekta otvaraju {{ui:Postavke}} › {{ui:Globalne}} › {{ui:Jedinice}}. Pomakni i Poravnaj pokreću alate Pomakni i Poravnaj, Razina otvara {{ui:Dodaj razine…}}, Faze otvaraju odjeljak Faze obnove, a Materijali otvaraju knjižnicu materijala.
- **Odjeljak Razredi DWG-a.** Bio je pročitan kao pogrešan tip; ispravljeno u BimCraftu i ostalim aplikacijama koje čitaju DWG.
- **Jezik za vrijeme rada.** Studio i zapakirana izdanja sada mogu mijenjati jezik bez ponovnog pokretanja. Nije još testirano na svim platformama; javite nam ako se jezik ne promijeni.
- **Skripta za Archicad paket.** `archicad_bundle.py`, zasebno preuzimanje, sada pronalazi put Archicada, prati mapu do 20 sekundi i pokušava ponovno pokraj paketa.

## Još nije u ovoj verziji

- **Sigurnosna i projektantska pomagala.** Ljudi u zgradi nemaju ograničenje putne udaljenosti iz pravilnika (upisujete ga sami) i nisu ručno provjereni na stvarnom tlocrtu. Vrijednosti akustike, životnog ciklusa i opasnosti su planske vrijednosti, a ne provjera prema pravilniku.
- **Klimatske budućnosti i EnergyPlus.** Nema ugrađenih klimatskih scenarija: možete učitati datoteku scenarija za pokretanje poplave. Pokretanje EnergyPlusa u pregledniku nije dio ovog izdanja.
- **Raspored vrpce.** Predmjer materijala ostaje „Još nije izrađeno“ jer BimCraft nema popis količina materijala, a za 54 drugih zasivljenih alata vrpce još nema alata u BimCraftu.
- **Potpisivanje i platforme.** Instalateri za Windows i .dmg za macOS nisu potpisani, pa SmartScreen prikazuje {{ui:Više informacija}}, zatim {{ui:Ipak pokreni}}, a macOS traži desni klik pa {{ui:Otvoreno}}. Izrada za iPad i iPhone nije ponovno napravljena za 0.8.1.
- **Testovi na stvarnim stranicama.** Neki stariji testovi preglednika BimCrafta još ne prolaze na našoj testnoj stranici, kao i prije 0.8.1.

Sve ostalo je u [Što još nije izrađeno](topic:not-built-yet). Ranije promjene su u [Što je novo u 0.7](topic:whats-new-0-7).
