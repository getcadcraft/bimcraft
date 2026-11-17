---
title: Postavite opremu i nameštaj iz biblioteke
summary: Pronađite stavku u Biblioteci, datoteci ili otvorenom crtežu, postavite je na sprat IFC modela uz pregled senke, okrenite je, prikačite za zid i sačuvajte.
keywords: pomeri, okreni, rotiraj, prevuci, biblioteka, librarycraft, postavi, umetni, oprema, nameštaj, blok, porodica, stavka, katalog, sadržaj, kcl, csv, gltf, obj, rfa, dwg, IFC tip
from: 3dad5d4b
---

## Šta ćete uraditi

Stavite stavku iz biblioteke u IFC model: sudoper, radni sto, stolicu. BimCraft je upisuje kao pravi IFC element s tipom, pa svaka kopija iste stavke deli jedan skup geometrije, a njeni podaci, broj stavke i licenca idu s njom.

## Koraci

1. Otvorite IFC model.
2. Kliknite karticu {{ui:Library}} pored {{ui:Properties}} s desne strane, ili {{ui:Library}} na traci iznad modela.
3. Izaberite izvor:
   - **Ugrađeni simboli**: opšti simboli za vodovodni plan koje BimCraft sadrži pod Apache-2.0, dostupni van mreže. Proverite njihove dimenzije pre građenja. Za električne simbole plana i IFC električne uređaje koristite **Verzija › Električne instalacije**.
   - **Biblioteka**: CadCraft biblioteka na ovom sajtu. Javne stavke ne traže prijavu.
   - **Ova datoteka**: blokovi otvorenog DWG ili DXF crteža. Dinamički blok s stanjima vidljivosti nudi se jednom za svako stanje, nazvan „Sudoper: Dvostruka kada“, a svako se crta samo s objektima tog stanja.
   - **{{ui:Datoteke…}}**: DWG, DXF, IFC, glTF/GLB, OBJ, RFA ili CSV datoteka na vašem računaru. Čita se u ovoj kartici; ništa se ne šalje.
   - **Drugi izvori**: druga biblioteka koja govori isti format izvora. Dodajte njenu adresu jednom; čuva se u ovom pregledaču.
4. Pretražite ili izaberite kategoriju, pa kliknite karticu. Kartica prikazuje pregled u planu, naziv, proizvođača i model, licencu i verziju.
5. Kliknite {{ui:Postavi u osnovu}} (u prikazu Plan) ili {{ui:Postavi u model}} (u 3D prikazu). U prikazu **Podeli**, gde se plan i 3D prikaz pokazuju zajedno, dugme je podeljeno: glavna radnja je {{ui:Postavi u osnovu}}, a strelica na njegovom desnom kraju otvara meni s {{ui:Postavi u model}}. Ili prevucite karticu, ili sliku u pojedinostima stavke, na plan ili 3D prikaz: stavka se postavlja tamo gde otpustite. Olovkom ili prstom pritisnite i zadržite karticu nekoliko trenutaka, pa prevucite.
6. Izaberite sprat u traci za postavljanje. U 3D prikazu, spratovi iznad njega su sakriveni dok postavljate, a prikaz se okreće na vrh; u planu, plan već prikazuje taj sprat. Izbor {{ui:Postavi u model}} samo iz plana dovodi 3D prikaz pored njega.
7. Pomerite pokazivač preko modela: providna kutija pokazuje gde stavka ide.
8. Pritisnite {{key:R}} da je okrenete za 90°. Pritisnite {{key:Tab}} (ili {{ui:Prikači za zid}}) da njena leđa stanu uz najbliži zid, okrenuta prema prostoriji.
9. Kliknite da je postavite. Ili upišite položaj u **X, Y (mm)**, na primer `1200, 3400`, i pritisnite {{key:Enter}}.

Svetlo ili bilo šta okačeno odozgo: postavite **Montaža** na **Na plafonu**. Gornja ivica stavke tada leži na donjoj strani plafona iznad tog mesta (ili na visini nivoa gde nema plafona). Kada je plan plafona uključen u prikazu Plan, **Montaža** počinje od **Na plafonu**.

10. Odgovorite na jedno pitanje: **broj stavke** (sledeći slobodni broj se popunjava), količinu i napomenu. Pritisnite {{key:Enter}}.
11. Postavite još ili pritisnite {{key:Esc}} da zaustavite.
12. Kliknite {{ui:Sačuvaj kao IFC}} da preuzmete izmenjenu kopiju.

## Plan ili model

Dugme za postavljanje u Biblioteci prati prikaz u kojem ste i menja se čim promenite prikaz (dugmad {{ui:Plan}}, {{ui:Podeli}} i {{ui:3D}}, tastatura, otvaranje datoteke). Plan prikazuje jedno dugme, {{ui:Postavi u osnovu}}; 3D prikazuje jedno dugme, {{ui:Postavi u model}}; Podeli prikazuje podeljeno dugme, s {{ui:Postavi u osnovu}} kao glavnom radnjom i {{ui:Postavi u model}} u meniju. Oba načina koriste istu traku za postavljanje i upisuju isti IFC element: pokazivač radi u planu za jedan, a u 3D prikazu za drugi. Pritisnite {{key:Esc}} u bilo kom trenutku da zaustavite.

Prevlačenje kartice nema sopstveni taster: podeljeno dugme ili obično dugme radi isto s tastaturom.

## Pomerite ili okrenite postavljenu stavku

U {{ui:Draw}}, izaberite stavku u planu. Na njenoj tački umetanja pojavljuje se kvadratna ručica, a pored nje okrugla.

- Prevucite stavku, ili njenu kvadratnu ručicu, da je pomerite. Ona se privlači kao alat Zid (krajevi i strane zidova); {{key:Shift}} je drži upravno na mestu gde je bila.
- Prevucite okruglu ručicu da je okrenete u koracima od 15°. Držite {{key:Shift}} za korake od 1°.
- Pritisnite {{key:R}} da je okrenete za 90°.
- U **Svojstva** (takođe u 3D prikazu) upišite **X**, **Y** i **Rotacija (°)**, ili kliknite **Okreni za 90°**.

Svako pomeranje je jedan korak {{ui:Undo}} i putuje u Live TeamWork. Stavka zadržava svoj broj stavke, svoje podatke iz biblioteke i svoju visinu iznad nivoa. Još nije izrađeno: prevlačenje u 3D prikazu.

## Šta treba da vidite

- Stavku u modelu, izabranu, sa svojim svojstvima s desne strane: okvir **Library item** s licencom i navođenjem autora, i skupove `CadCraft_Placement`, `CadCraft_LibraryItem`, `CadCraft_Equipment` i, za stavke iz označenih crteža, `CadCraft_SourceAttributes`.
- „Postavljeno: *stavka* (stavka *n*)“ u listi promena. {{key:Mod+Z}} je opoziva.
- Statusnu liniju: „Postavljeno: *stavka* kao stavka *n*.“

## Dobro je znati

- Neke stavke dolaze u nekoliko dimenzija ili opcija: kartica tada ima izbor **Varijanta**, a postavlja se ona koju izaberete. Pogledajte [Postavite i zamenite stavku biblioteke koja ima varijante](topic:library-variants).
- Još iste: izaberite postavljenu stavku i koristite {{ui:Copy}} i {{ui:Paste}}, ili {{key:Mod+D}}. Pogledajte [Kopiranje, nalepljivanje i dupliranje stavki biblioteke](topic:copy-paste).
- Da biste svako postavljanje počeli s uključenim prikačinjanjem za zid, uključite **Počni s uključenim prikačinjanjem za zid** u [podešavanjima BimCraft-a](topic:settings).
- Dužine se pretvaraju u sopstvene jedinice modela, ma koje one bile.
- **Entourage** (drveće, žbunje, ljudi, automobili) je takođe u biblioteci: pretražite „drvo“, „osoba“ ili „automobil“. Njih crta CadCraft (CC0), i zadržavaju svoje boje kada se postave (deblo smeđe, lišće zeleno, prozori automobila providni), u BimCraft-u i u drugim BIM programima. Prikazuju se u [renderovanim slikama](topic:render).
- U IFC2X3 datoteci telo se upisuje kao fasetirano čvrsto telo; u IFC4 kao trougaona mreža lica. Oba se otvaraju u drugim IFC alatima.
- Crtež (DWG ili DXF) ne može se ovde sačuvati, pa se stavke postavljaju samo u IFC modele. Koristite **Ova datoteka** na crtežu da vidite šta bi njegovi blokovi postali.

## Stavke na vašem jeziku

Stavka može da nosi svoj naziv, opis i tip na drugim jezicima. Kada ih ima na jeziku na kojem je BimCraft podešen (Podešavanja › Opšte › Jezik), stranica stavke prikazuje njih, a ispod naziv koji joj je dao proizvođač; **Postavi** upisuje naziv na vašem jeziku u model, pa tabela {{ui:Oprema}} navodi stavku tako. Stavka ostaje ista stavka: provera ažuriranja i zamena idu po samoj stavci, nikada po nazivu. Stavke bez prevoda zadržavaju svoje reči.

## Uobičajene greške

- **Dugme za postavljanje nedostaje.** IFC model nije otvoren. Prvo ga otvorite.
- **Senka ne prati pokazivač.** Pokazivač je van područja modela, ili ravan sprata nije u prikazu. Kliknite {{ui:Top}}.
- **{{ui:Prikači za zid}} kaže da nema zidova.** Sprat nema zidove u IFC-u (neki izvozi stavljaju zidove na drugi sprat). Izaberite taj sprat ili upišite X i Y.
- **Stavke iz datoteke imaju pogrešnu veličinu.** Datoteka nema jedinice ili navodi pogrešne. U {{ui:Datoteke…}} izaberite jedinice i učitajte je ponovo.

:::tip
Postavljanje iste stavke dvaput deli jedan IFC tip, pa model s četrdeset stolica čuva stolicu samo jednom.
:::
