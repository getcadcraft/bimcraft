---
title: Šta je novo u 0.8 i 0.8.1
summary: BimCraft dodaje ljude koji prolaze kroz zgradu, akustiku prostorija koju možete čuti, reprodukciju poplave, vjetra i zemljotresa, pregled životnog ciklusa od pedeset godina, provjere prema IDS-u, oznake i rasporede, Move, Align i Distribute, slike pod planom, zidove iz skena, crteže panela, solarne sisteme, podijeljene i VRF sisteme, dimenzioniranje cijevi i kablova, provjere betona i seizmike, bilo koju projekciju karte, izbor motora za renderovanje i poništavanje u Studiju; 0.8.1 ispravlja sive alate u rasporedu Ribbon.
keywords: šta je novo, šta je novo, bilješke o izdanju, dnevnik promjena, promjene, 0.8, 0.8.1, verzija, nove funkcije, evakuacija, ljudi, redovi, akustika, reverberacija, impulsni odziv, poplava, vjetar, zemljotres, opasnost, životni ciklus, vijek trajanja, ids, oznake, rasporedi, move, align, distribute, slika, pozadina, sken u zidove, lokacija iz civilcraft, crteži panela, uokvirivanje, solar, pv, split, vrf, fan coil, dimenzioniranje cijevi, kablovska kanta, osvijetljenost, beton, seizmika, uporedi sken, epsg, projekcija, dokumenti, šablon, karbon, trošak, energyplus, motor renderovanja, otvori u, usd, glb, unreal, poništi, dodaci, pcf, simboli, biljke, podloga, olovke, ribbon, pregledač projekta, raspored
from: 87b03056
---

Ovo je šta se promijenilo u BimCraftu 0.8 (2026-11-01) i 0.8.1 (2026-11-02), u odnosu na 0.7. BimCraft sada može odgovoriti na pitanja o zgradi i ispitati je, s ljudima, zvukom, vodom, vjetrom i zemljotresima, a crtati je s više alata; 0.8.1 je ispravka.

## Novo

### Ispitajte zgradu

- **Ljudi u zgradi.** Odjeljak {{ui:Ljudi u zgradi}} lijevog panela provodi evakuaciju ili uobičajeni dolazak ljudi kroz vaše prostorije, vrata i stepeništa. Vidite redove čekanja tamo gdje se zgrada sužava, najduži put do izlaza iz svake prostorije i koliko dugo traje posljednja osoba. Označite {{ui:Zatvoreno}} na vratima da vidite šta se mijenja, a označite {{ui:Prikaži ljude u 3D pogledu}} da pratite pješake. Nalazi idu u Problems. Gruby model mase za projektne odluke, a ne potvrda o protivpožarnoj sigurnosti. Pogledajte [Provedite ljude kroz zgradu](topic:people-in-the-building).
- **Akustika prostorije, i čujte je.** Odjeljak {{ui:Akustika prostorije}} daje vrijeme reverberacije svake prostorije po oktavnim pojasevima (Sabine i Eyring) iz njene veličine i izabranih završnih obrada, a uz vlastitu ciljnu vrijednost kaže koliko apsorpcije bi zadovoljilo. {{ui:Pusti u ovoj prostoriji}} pušta glas, pljesak, trzanje žica ili vaš zvučni fajl kroz impulsni odziv izračunat za prostoriju. Vrijednosti apsorpcije su tipične objavljene vrijednosti koje možete zamijeniti. Pogledajte [Akustika prostorije](topic:room-acoustics).
- **Reprodukcija poplave, vjetra i zemljotresa.** {{ui:Reprodukcija opasnosti}} pušta vodu koja raste kroz prostorije, pritisak vjetra na svaki sprat i zemljotres koji trese spratove, na planu ili izgledu s vremenskim klizačem. Jednostavni modeli s njihovim pretpostavkama na panelu; nije provjera prema propisu. Pogledajte [Pustite poplavu, vjetar ili zemljotres](topic:hazard-playback).
- **Šta se troši u pedeset godina.** {{ui:Pregled životnog ciklusa}} navodi prozore, vrata, završne obrade i krov, sa svakim vijekom trajanja, godinama kad se zamjenjuju i, kad upišete trošak po jedinici, trošak po godinama i njegovu sadašnju vrijednost. {{ui:Spasi raspored (CSV)}} ga zapisuje. Vijekovi trajanja su planske vrijednosti. Pogledajte [Pogledajte šta se troši u pedeset godina](topic:life-cycle-view).
- **Provjere betona i seizmike.** Blokovi {{ui:Betonski elementi}} i {{ui:Seizmička opterećenja}} na kartici {{ui:Analiza}} provjeravaju betonske grede i stubove prema ACI 318-19 i izrađuju ekvivalentne bočne sile prema ASCE 7-22 na krutim podovima, uz pomak po spratovima. Na provjeru inženjeru. Pogledajte [Provjerite betonske elemente i napravite seizmička opterećenja](topic:concrete-and-seismic).

### Provjerite i izvijestite

- **Provjera prema IDS-u.** Učitajte `.ids` datoteku koju vam je dao klijent i vidite svaki element koji mu ne odgovara u Problems, prije nego predate IFC. Otvorite {{ui:Provjera prema IDS-u}} pod {{ui:Provjere modela}}. Pogledajte [Provjerite model prema IDS-u klijenta](topic:check-against-ids).
- **Oznake i rasporedi.** Definišite vlastite oznake, postavite ih na mnogo elemenata odjednom i napravite rasporede čije kolone, filteri i grupe ih čitaju; oznake se čuvaju u IFC-u. Pogledajte [Oznake i rasporedi](topic:tags-and-schedules).
- **Dokumenti iz modela.** {{ui:Dokumenti iz modela}} popunjava šablon specifikacije iz otvorenog IFC-a i spašava ga kao PDF, Word dokument ili Markdown. Pogledajte [Dokumenti iz modela](topic:documents-from-the-model).
- **Uporedite sken s modelom.** Kad je oblak tačaka otvoren, {{ui:Uporedi}} procjenjuje svaki element kao izgrađen, djelimično izgrađen, nedostajući ili nedostignut, i pokazuje procenat izgrađenog. Pogledajte [Uporedite sken s modelom](topic:compare-scan-with-model).
- **Karbon i trošak.** Okno Carbon zbraja ugrađeni karbon iz tabele faktora koju možete mijenjati, a okno Cost raspoređuje cijene po 4D rasporedu. Faktori koji dolaze uz BimCraft su generički i označeni kao neprovjereni. Pogledajte [Ugrađeni karbon i trošak](topic:embodied-carbon-and-5d-cost).
- **Bilo koja projekcija karte.** {{ui:Mjeri}} › {{ui:Koordinatni sistem…}} prima EPSG broj, UTM zonu, naziv ili vašu vlastitu definiciju projekcije. Pogledajte [Georeferenciranje s bilo kojom projekcijom](topic:georeference-any-projection).

### Crtajte i uređujte

- **Move, Align i Distribute.** Pod {{ui:Verzija}}; {{key:Shift+M}} pokreće Move (obično {{key:M}} je i dalje Mjeri). Move kopira dok idete s {{key:C}}, svaki korak je jedno poništavanje, i putuje u sesiji Live TeamWork. Pogledajte [Premjesti, kopiraj, poravnaj i rasporedi](topic:move-align-distribute).
- **Slike pod planom.** {{ui:Verzija}} › {{ui:Slika}} postavlja PNG, JPEG ili WebP pod plan nivoa ili na vertikalnu ravan. Postavite razmjeru s dvije tačke, pa pomjerite, okrećite, bljedite i zaključajte je. Područje kopirano u MarkupCraft lijepi se u razmjeri svog lista. Pogledajte [Stavite sliku pod plan](topic:pictures-as-backgrounds).
- **Zidovi iz skena.** Kad je sken otvoren, zidovi, vrata i prostorije dolaze kao prijedlozi koje pojedinačno zadržavate ili odbacujete, u jednom koraku poništavanja. Pronalaze se samo zidovi u dva okomita pravca. Pogledajte [Pretvorite sken u zidove](topic:scan-to-walls).
- **Podloga, olovke i skica stepeništa.** {{ui:Podloga}} prikazuje drugi nivo isprekidano pod planom, {{ui:Olovke}} daje zidovima, vratima i prozorima vlastitu debljinu linije u jednom pogledu, a {{ui:Skiciraj stepenište}} pretvara liniju hoda u stepenište. Otvara se Wavefront OBJ mreža. Pogledajte [Podloga nivoa, olovke i stepenište iz skice](topic:trace-pens-stairs-obj).
- **Zgrade oko adrese.** Zgrade i parcela koje je pronašao Address to site iz CivilCraft-a stižu kao prijedlozi; označite one koje želite dodati. Pogledajte [Počnite od lokacije iz CivilCraft-a](topic:site-from-civilcraft).
- **Crteži panela.** {{ui:Verzija}} › {{ui:Crteži panela}} uokviruje zidove, podove i krovove od drveta ili lakog čeličnog profila i spašava listu rezanja kao CSV i radioničke crteže kao PDF. Početne vrijednosti, a ne konstruktivni proračun. Pogledajte [Crteži panela](topic:panel-drawings).
- **Paleta simbola i biljke.** {{ui:Verzija}} › {{ui:Paleta simbola}} pronalazi električne i vodovodne simbole po nazivu; izvor {{ui:Biljke}} u {{ui:Biblioteka}} navodi oko 400 biljaka s simbolima na planu. Pogledajte [Paleta simbola](topic:symbol-palette) i [Postavite biljku](topic:plant-list).

### Cijevi, kanali i energija

- **Split, VRF i fan coil.** Unutrašnje i vanjske jedinice s njihovim priključcima, i setovi vodova dimenzionisani iz tabele tipičnih primjernih vrijednosti koje možete mijenjati. Pogledajte [Split, VRF i fan coil](topic:split-vrf-fan-coils).
- **Proračuni.** Okno Calculations provjerava dimenzije dovodnih cijevi i kanala s padom pritiska, vodi kablove kroz kanale i cijevi i prikazuje njihovo punjenje, te računa osvijetljenost iz IES ili EULUMDAT datoteka. Zadane vrijednosti su označene; upišite vrijednosti vašeg propisa. Pogledajte [Proračuni cijevi, kanala, kablova i svjetla](topic:mep-calculations).
- **PCF datoteke.** {{ui:Export PCF}} alata Pipe zapisuje vodove za programe za analizu naprezanja cijevi i izometrijske crteže, a PCF datoteka pročitana nazad crta njegovu cijev. Pogledajte [Datoteke komponenti cijevi](topic:piping-pcf).
- **Solarni PV.** Postavite nizove na krovove ili na zemlju, zasjenite ih iz modela, procijenite godišnju energiju, provjerite stringove i napravite podatke za jednolinijski dijagram. Početni modul i gubici su generički. Pogledajte [Solarni PV](topic:solar-pv).
- **Datoteka EnergyPlus.** Okno Check with EnergyPlus zapisuje model kao IDF za pokretanje u vašem EnergyPlus-u. Pokretanje u pregledniku traži build koji sami hostujete i čiju adresu upisujete; BimCraft ga ne isporučuje. Pogledajte [Provjerite grijanje i hlađenje s EnergyPlus-om](topic:check-with-energyplus).

### Slike i datoteke

- **Izaberite motor za renderovanje.** {{ui:Renderuj}} ima izbor {{ui:Motor}}. Naša dva ugrađena motora (Fast i Path tracer) ostaju zadana. {{ui:Otvori u}} spašava scenu kao USD ili glTF datoteku, a projektnu fasciklu Unreal kao .zip; u CadCraft Studiju dodatak može dodati motor. Unreal dodatak koji otvara projekt nije objavljen. Pogledajte [Izaberite koji program crta sliku](topic:render-engines).
- **Poništavanje u Studiju.** Unutar CadCraft Studija, BimCraft javlja Studiju svaki završen korak da Studio može poništiti vaš posljednji korak u prozoru koji ste zadnji koristili. Pogledajte [Poništavanje između aplikacija](topic:undo-across-apps).
- **Dodaci u vašoj datoteci.** IFC bilježi koji su dodaci u njega pisali i nudi one koje nemate kad ga otvorite. Pogledajte [Dodaci u vašoj datoteci](topic:add-ons-in-your-file).

### U svakoj aplikaciji

- **Povežite svoj AI.** Vaš vlastiti asistent može upravljati BimCraftom preko Studio veze i odgovarati na pitanja o modelu, na primjer koje prostorije su ispod date površine. Studio nema vlastiti AI. Pogledajte [Neka AI asistent radi s vašim modelom](topic:assistants).
- **Redovi alatne trake.** {{ui:Postavke}} › {{ui:Opšte}} › {{ui:Redovi alatne trake}} nudi Wrap, 2 rows ili 1 row; Wrap ostaje zadan.
- **Ulazni uređaji.** Postavke touchpada, olovke, 3D miša, kontrolera i MIDI-ja dijele sve aplikacije.
- **Problems i Live.** Panel upozorenja i Live sesije rade kao i prije, a nove provjere iznad idu u Problems.
- **Jezici.** 54 jezika, od kojih je deset novih. Oni osim engleskog su mašinski prijevodi koje još nije pregledao izvorni govornik; teme pomoći su uglavnom na engleskom.

## Ispravljeno u 0.8.1

- **Raspored Ribbon + Pregledač projekta.** Umetni › Uvezi CAD, Umetni › Slika i Upravljaj › Jedinice projekta govorili su "Još nije ugrađeno u BimCraft". Slika sada otvara alat Slika, Uvezi CAD otvara {{ui:Verzija}} › {{ui:Iz crteža…}} (DWG, DXF, PDF ili sken), a Jedinice projekta otvaraju {{ui:Postavke}} › {{ui:Globalno}} › {{ui:Jedinice}}. Move i Align pokreću alate Move i Align, Nivo otvara {{ui:Dodaj nivoe…}}, Faze otvara odjeljak Renovation phases, a Materijali otvara biblioteku materijala.
- **Odjeljak klasa DWG-a.** Bio je pročitan kao pogrešan tip; ispravljeno u BimCraftu i drugim aplikacijama koje čitaju DWG.
- **Jezik u toku rada.** Studio i zapakovana izdanja sada mogu promijeniti jezik bez ponovnog pokretanja. Ovo još nije testirano na svim platformama; javite nam ako se jezik ne promijeni.
- **Skripta za Archicad paket.** `archicad_bundle.py`, zasebno preuzimanje, sada pronalazi putanju Archicada, prati folder do 20 sekundi i ponovo pokušava pored paketa.

## Još nije u ovoj verziji

- **Sigurnosna i projektna pomagala.** Ljudi u zgradi nemaju ograničenje dužine puta iz propisa o zgradama (vi upisujete ograničenje) i nisu ručno provjereni na stvarnom planu. Vrijednosti akustike, životnog ciklusa i opasnosti su planske vrijednosti, a ne provjera prema propisu.
- **Klimatske scenarije i EnergyPlus.** Nema ugrađenih klimatskih scenarija: možete učitati fajl scenarija za pokretanje poplave. Pokretanje EnergyPlus-a u pregledniku nije dio ovog izdanja.
- **Raspored Ribbon.** Predmjer materijala ostaje "Nije ugrađeno" jer BimCraft nema listu količina materijala, a još 54 sivih alata na traci nemaju iza sebe BimCraft alat.
- **Potpisivanje i platforme.** Windows instalateri i macOS .dmg nisu potpisani, pa SmartScreen prikazuje {{ui:Više informacija}}, pa {{ui:Ipak pokreni}}, a macOS traži desni klik pa {{ui:Otvori}}. Build za iPad i iPhone nije ponovo napravljen za 0.8.1.
- **Testovi stvarne stranice.** Neki stariji BimCraft testovi preglednika i dalje ne prolaze na našoj testnoj stranici, kao i prije 0.8.1.

Sve ostalo je u [Šta još nije ugrađeno](topic:not-built-yet). Ranije promjene su u [Šta je novo u 0.7](topic:whats-new-0-7).
