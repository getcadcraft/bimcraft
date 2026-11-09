---
title: Novosti u 0.8 i 0.8.1
summary: BimCraft dodaje ljude koji prolaze kroz zgradu, akustiku prostorija koju možete čuti, prikaz poplave, vetra i zemljotresa, pregled životnog ciklusa od pedeset godina, provere prema IDS-u, oznake i rasporede, Move, Align i Distribute, slike ispod plana, zidove iz skena, crteže panela, solarnu energiju, split i VRF sisteme, dimenzionisanje cevi i kablova, provere betona i seizmike, bilo koju kartografsku projekciju, izbor motora za renderovanje i opozivanje u Studiju; 0.8.1 popravlja zasivljene alate u rasporedu Ribbon.
keywords: novosti, šta je novo, napomene o izdanju, dnevnik promena, izmene, 0.8, 0.8.1, verzija, nove funkcije, evakuacija, ljudi, redovi, akustika, reverberacija, impulsni odziv, poplava, vetar, zemljotres, opasnost, životni ciklus, vek trajanja, ids, oznake, rasporedi, move, align, distribute, slika, pozadina, sken u zidove, lokacija iz civilcraft, crteži panela, uokvirivanje, solarno, pv, split, vrf, fan coil, dimenzionisanje cevi, kablovska trasa, osvetljenje, beton, seizmika, uporedi sken, epsg, projekcija, dokumenti, šablon, ugljenik, trošak, energyplus, motor za renderovanje, otvori u, usd, glb, unreal, opozovi, dodaci, pcf, simboli, biljke, trace, olovke, ribbon, pregledač projekta, raspored
from: 87b03056
---

Ovo je ono što se promenilo u BimCraft 0.8 (2026-11-01) i 0.8.1 (2026-11-02) u odnosu na 0.7. BimCraft sada može da odgovara na pitanja o zgradi i da je proverava, sa ljudima, zvukom, vodom, vetrom i zemljotresima, i da je crta sa više alata; 0.8.1 je izdanje sa ispravkama.

## Novo

### Proverite zgradu

- **Ljudi u zgradi.** Odeljak {{ui:Ljudi u zgradi}} levog panela provodi evakuaciju ili uobičajen dan dolazaka kroz vaše prostorije, vrata i stepenice. Vidite redove tamo gde se zgrada sužava, najduži put do izlaza iz svake prostorije i koliko dugo je potrebno poslednjoj osobi. Označite {{ui:Zatvoreno}} na vratima da vidite šta se menja, a {{ui:Prikaži ljude u 3D prikazu}} da pratite šetače. Nalazi idu u Problemi. Ovo je grubi model gomile za projektne odluke, a ne sertifikat protivpožarne zaštite. Pogledajte [Provedite ljude kroz zgradu](topic:people-in-the-building).
- **Akustika prostorija, i čujte je.** Odeljak {{ui:Akustika prostorija}} daje vreme reverberacije svake prostorije po oktavnim opsezima (Sabine i Eyring) iz njene veličine i završnih obrada koje izaberete, a sa zadatim ciljem kaže koliko apsorpcije bi zadovoljilo. {{ui:Pusti u ovoj prostoriji}} pušta glas, pljesak, trzanje žica ili vašu zvučnu datoteku kroz impulsni odziv izračunat za prostoriju. Vrednosti apsorpcije su tipične objavljene vrednosti koje možete zameniti. Pogledajte [Akustika prostorija](topic:room-acoustics).
- **Prikaz poplave, vetra i zemljotresa.** {{ui:Prikaz opasnosti}} prikazuje vodu koja raste kroz prostorije, pritisak vetra na svakom spratu i zemljotres koji trese spratove, na planu ili u izgledu, uz klizač vremena. Jednostavni modeli, sa svojim pretpostavkama na panelu; nije provera po propisu. Pogledajte [Pustite poplavu, vetar ili zemljotres](topic:hazard-playback).
- **Šta se troši za pedeset godina.** {{ui:Prikaz životnog ciklusa}} navodi prozore, vrata, završne obrade i krov, sa vekom trajanja za svaki, godinama kada se menjaju i, kada upišete cenu po jedinici, trošak po godini i njegovu sadašnju vrednost. {{ui:Sačuvaj raspored (CSV)}} ga upisuje. Vekovi trajanja su planske vrednosti. Pogledajte [Pogledajte šta se troši tokom pedeset godina](topic:life-cycle-view).
- **Provere betona i seizmike.** Blokovi {{ui:Betonski elementi}} i {{ui:Seizmička opterećenja}} na kartici {{ui:Analiza}} proveravaju betonske grede i stubove po ACI 318-19 i računaju ekvivalentne bočne sile po ASCE 7-22 na krutim spratovima, uz pomak sprata. Za proveru inženjera. Pogledajte [Proverite betonske elemente i napravite seizmička opterećenja](topic:concrete-and-seismic).

### Proverite i izveštavajte

- **Provera prema IDS-u.** Učitajte `.ids` datoteku koju vam je dao klijent i vidite u Problemima svaki element koji joj ne odgovara, pre nego što isporučite IFC. Otvorite {{ui:Proveri prema IDS-u}} pod {{ui:Provere modela}}. Pogledajte [Proverite model prema IDS-u klijenta](topic:check-against-ids).
- **Oznake i rasporedi.** Definišite sopstvene oznake, postavite ih na mnogo elemenata odjednom i pravite rasporede čije kolone, filteri i grupe ih čitaju; oznake se čuvaju u IFC-u. Pogledajte [Oznake i rasporedi](topic:tags-and-schedules).
- **Dokumenti iz modela.** {{ui:Dokumenti iz modela}} popunjava šablon specifikacije iz otvorenog IFC-a i čuva ga kao PDF, Word dokument ili Markdown. Pogledajte [Dokumenti iz modela](topic:documents-from-the-model).
- **Uporedite sken sa modelom.** Sa otvorenim oblakom tačaka, {{ui:Uporedi}} ocenjuje svaki element kao izgrađen, delimično izgrađen, nedostajući ili nedostignut i prikazuje procenat izgrađenog. Pogledajte [Uporedite sken sa modelom](topic:compare-scan-with-model).
- **Ugljenik i trošak.** Okno Carbon sabira ugrađeni ugljenik iz tabele faktora koju možete menjati, a okno Cost raspoređuje cene preko 4D rasporeda. Faktori koji dolaze uz BimCraft su generički i označeni kao neproveren. Pogledajte [Ugrađeni ugljenik i trošak](topic:embodied-carbon-and-5d-cost).
- **Bilo koja kartografska projekcija.** {{ui:Izmeri}} › {{ui:Koordinatni sistem…}} prihvata EPSG broj, UTM zonu, naziv ili vašu sopstvenu definiciju projekcije. Pogledajte [Georeferenciranje bilo kojom projekcijom](topic:georeference-any-projection).

### Crtajte i menjajte

- **Move, Align i Distribute.** Pod {{ui:Verzija}}; {{key:Shift+M}} pokreće Move (običan {{key:M}} je i dalje Izmeri). Move kopira dok idete uz {{key:C}}, svaki korak je jedno opozivanje i putuje u sesiji Live TeamWork. Pogledajte [Premestite, kopirajte, poravnajte i rasporedite](topic:move-align-distribute).
- **Slike ispod plana.** {{ui:Verzija}} › {{ui:Slika}} postavlja PNG, JPEG ili WebP ispod plana nivoa ili na vertikalnu ravan. Razmeru podesite sa dve tačke, a sliku pomerate, okrećete, stišavate i zaključavate. Oblast kopirana u MarkupCraft nalepljuje se u razmeri svog lista. Pogledajte [Stavite sliku ispod plana](topic:pictures-as-backgrounds).
- **Zidovi iz skena.** Sa otvorenim skenom, zidovi, vrata i prostorije dolaze kao predlozi koje zadržite ili odbacite jedan po jedan, u jednom koraku opozivanja. Pronalaze se samo zidovi u dva normalna pravca. Pogledajte [Pretvorite sken u zidove](topic:scan-to-walls).
- **Prati, olovke i skiciraj stepenice.** {{ui:Prati}} prikazuje drugi sprat isprekidano ispod plana, {{ui:Olovke}} daju zidovima, vratima i prozorima sopstvenu debljinu linije u jednom prikazu, a {{ui:Skiciraj stepenice}} pretvara liniju hodanja u stepenice. Otvara se Wavefront OBJ mreža. Pogledajte [Prati nivo, olovke i stepenice iz skice](topic:trace-pens-stairs-obj).
- **Zgrade oko adrese.** Zgrade i parcela koje je pronašla CivilCraft-ova funkcija Adresa u lokaciju stižu kao predlozi; označite one koje želite da dodate. Pogledajte [Počnite od lokacije iz CivilCraft-a](topic:site-from-civilcraft).
- **Crteži panela.** {{ui:Verzija}} › {{ui:Crteži panela}} uokviruje zidove, podove i krovove od drveta ili lakih čeličnih profila i čuva spisak za sečenje kao CSV, a radioničke crteže kao PDF. Ovo su početne vrednosti, a ne konstruktivni proračun. Pogledajte [Crteži panela](topic:panel-drawings).
- **Paleta simbola i biljke.** {{ui:Verzija}} › {{ui:Paleta simbola}} pronalazi električne i vodovodne simbole po imenu; izvor {{ui:Biljke}} iz {{ui:Biblioteka}} navodi oko 400 biljaka sa simbolima na planu. Pogledajte [Paleta simbola](topic:symbol-palette) i [Postavite biljku](topic:plant-list).

### Cevi, kanali i energija

- **Split, VRF i fan coil jedinice.** Unutrašnje i spoljašnje jedinice sa svojim priključcima i vodovi dimenzionisani iz tabele tipičnih primernih vrednosti koje možete menjati. Pogledajte [Split, VRF i fan coil jedinice](topic:split-vrf-fan-coils).
- **Proračuni.** Okno Calculations proverava dimenzije dovodnih cevi i kanala preko pada pritiska, vodi kablove kroz kablovske kanale i cevi i prikazuje njihovu popunjenost, a iz IES ili EULUMDAT datoteka računa osvetljenost. Podrazumevane vrednosti su označene; upišite vrednosti vašeg propisa. Pogledajte [Proračuni cevi, kanala, kablova i svetla](topic:mep-calculations).
- **PCF datoteke.** Alatka Pipe **Export PCF** upisuje vodove za programe za analizu naprezanja cevi i izometriju, a PCF datoteka koja se ponovo učita crta njenu cev. Pogledajte [Datoteke komponenti cevi](topic:piping-pcf).
- **Solarni PV.** Postavite nizove na krovove ili na zemlju, zasenčite ih iz modela, procenite godišnju energiju, proverite stringove i napravite podatke za jednolinijski dijagram. Početni modul i gubici su generički. Pogledajte [Solarni PV](topic:solar-pv).
- **EnergyPlus datoteka.** Okno Check with EnergyPlus upisuje model kao IDF za pokretanje u vašem EnergyPlus-u. Pokretanje u pregledaču traži build koji sami hostujete i čiju adresu upišete; BimCraft ga ne sadrži. Pogledajte [Proverite grejanje i hlađenje sa EnergyPlus-om](topic:check-with-energyplus).

### Slike i datoteke

- **Izaberite motor za renderovanje.** {{ui:Renderuj}} ima izbor {{ui:Motor}}. Naša dva ugrađena motora (Fast i Path tracer) ostaju podrazumevani. **Otvori u** čuva scenu kao USD ili glTF datoteku, a projektnu fasciklu Unreal kao .zip; u CadCraft Studio dodatak može dodati motor. Unreal dodatak koji otvara projekat nije objavljen. Pogledajte [Izaberite koji program crta sliku](topic:render-engines).
- **Opozivanje u Studiju.** Unutar CadCraft Studio, BimCraft javlja Studiju svaki završen korak, pa Studio može da opozove vaš poslednji korak u prozoru koji ste poslednji koristili. Pogledajte [Opozivanje preko aplikacija](topic:undo-across-apps).
- **Dodaci u vašoj datoteci.** IFC beleži koji su dodaci u njega upisivali i nudi one koje nemate kada ga otvorite. Pogledajte [Dodaci u vašoj datoteci](topic:add-ons-in-your-file).

### U svakoj aplikaciji

- **Povežite svoj AI.** Vaš sopstveni asistent može da upravlja BimCraft-om kroz vezu Studija i odgovara na pitanja o modelu, na primer koje su prostorije ispod date površine. Studio nema sopstveni AI. Pogledajte [Neka AI asistent radi sa vašim modelom](topic:assistants).
- **Redovi alatki.** {{ui:Podešavanja}} › {{ui:Opšte}} › {{ui:Redovi alatki}} nudi Prelomi, 2 reda ili 1 red; Prelomi ostaje podrazumevani.
- **Ulazni uređaji.** Podešavanja touchpada, olovke, 3D miša, kontrolera i MIDI-ja dele sve aplikacije.
- **Problemi i Live.** Panel upozorenja i Live sesije rade kao ranije, a nove provere iznad ulaze u Problemi.
- **Jezici.** 54 jezika, od toga deset novih. Oni osim engleskog su mašinski nacrti koje još nije pročitao izvorni govornik; teme pomoći su uglavnom na engleskom.

## Ispravljeno u 0.8.1

- **Raspored Ribbon + pregledač projekta.** Umetni › Uvezi CAD, Umetni › Slika i Upravljanje › Jedinice projekta prikazivali su „Nije ugrađeno u BimCraft“. Slika sada otvara alat Slika, Uvezi CAD otvara {{ui:Verzija}} › {{ui:Iz crteža…}} (DWG, DXF, PDF ili sken), a Jedinice projekta otvaraju {{ui:Podešavanja}} › {{ui:Globalno}} › {{ui:Jedinice}}. Move i Align pokreću alate Move i Align, Nivo otvara {{ui:Dodaj nivoe…}}, Phases otvara odeljak Faze rekonstrukcije, a Materials otvara biblioteku materijala.
- **Odeljak DWG classes.** Čitao se kao pogrešan tip; ispravljeno u BimCraft i drugim aplikacijama koje čitaju DWG.
- **Jezik u toku rada.** Studio i spakovana izdanja sada mogu da menjaju jezik bez ponovnog pokretanja. Ovo još nije testirano na svim platformama; javite nam ako se jezik ne promeni.
- **Skripta za Archicad paket.** `archicad_bundle.py`, zasebno preuzimanje, sada pronalazi putanju Archicad-a, prati fasciklu do 20 sekundi i pokušava ponovo pored paketa.

## Još nije u ovoj verziji

- **Pomoćna sredstva za bezbednost i projektovanje.** Ljudi u zgradi nemaju ograničenje dužine puta iz propisa o gradnji (vi upisujete ograničenje) i nisu ručno provereni na stvarnom planu. Vrednosti za akustiku, životni ciklus i opasnosti su planske vrednosti, a ne provera po propisu.
- **Klimatske promene i EnergyPlus.** Nema ugrađenih klimatskih scenarija: možete učitati datoteku scenarija za pokretanje poplave. Pokretanje EnergyPlus-a u pregledaču nije deo ovog izdanja.
- **Raspored Ribbon.** Predmer materijala ostaje „Nije ugrađeno“ jer BimCraft nema spisak količina materijala, a još 54 zasivljena alata u traci nemaju iza sebe BimCraft alat.
- **Potpisivanje i platforme.** Windows instalacije i macOS .dmg nisu potpisani, pa SmartScreen prikazuje {{ui:Više informacija}}, zatim {{ui:Ipak pokreni}}, a macOS traži desni klik pa {{ui:Otvori}}. iPad i iPhone build nije ponovo napravljen za 0.8.1.
- **Testovi na stvarnim stranicama.** Neki stariji testovi BimCraft-a u pregledaču i dalje padaju na našoj test stranici, kao i pre 0.8.1.

Sve ostalo je u [Šta još nije ugrađeno](topic:not-built-yet). Ranije izmene su u [Novosti u 0.7](topic:whats-new-0-7).
