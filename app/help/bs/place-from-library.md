---
title: Postavljanje opreme i namještaja iz biblioteke
summary: Pronađite stavku u biblioteci, datoteci ili otvorenom crtežu, postavite je na sprat IFC modela uz pregled sjene, okrenite je, prislonite na zid i sačuvajte.
keywords: pomjeranje, okretanje, prevlačenje, biblioteka, librarycraft, postavljanje, umetanje, oprema, namještaj, blok, familija, stavka, katalog, sadržaj, kcl, csv, gltf, obj, rfa, dwg, vrsta ifc
from: 3dad5d4b
---

## Šta ćete raditi

Stavite stavku iz biblioteke u IFC model: sudoper, radni sto, stolicu. BimCraft je zapisuje kao pravi IFC element s tipom, pa svaka kopija iste stavke dijeli jedan skup geometrije, a njeni podaci, broj stavke i licenca putuju s njom.

## Koraci

1. Otvorite IFC model.
2. Kliknite karticu {{ui:Biblioteka}} pored {{ui:Svojstva}} s desne strane, ili {{ui:Biblioteka}} na traci iznad modela.
3. Izaberite izvor:
   - **Ugrađeni simboli**: opšti simboli za plan vodoinstalacija uključeni uz BimCraft pod Apache-2.0, dostupni van mreže. Provjerite njihove dimenzije prije gradnje. Za simbole električnih planova i IFC električne uređaje koristite **Verzija › Električne**.
   - **Biblioteka**: CadCraft biblioteka na ovoj stranici. Javne stavke ne traže prijavu.
   - **Ova datoteka**: blokovi otvorenog DWG ili DXF crteža. Dinamički blok sa stanjima vidljivosti nudi se jednom po stanju, imenovan „Sudoper: Dupla kada“, svaki nacrtan samo s objektima tog stanja.
   - **Datoteke…**: DWG, DXF, IFC, glTF/GLB, OBJ, RFA ili CSV datoteka na vašem računaru. Čita se u ovoj kartici; ništa se ne šalje.
   - **Drugi izvori**: druga biblioteka koja govori isti format izvora. Upišite njenu adresu jednom; čuva se u ovom pregledaču.
4. Pretražite ili izaberite kategoriju, zatim kliknite karticu. Kartica prikazuje pregled plana, naziv, proizvođača i model, licencu i verziju.
5. Kliknite {{ui:Postavi u plan}} (u prikazu Plan) ili {{ui:Postavi u model}} (u 3D prikazu). U {{ui:Podijeli}}, gdje se plan i 3D prikaz prikazuju zajedno, dugme je podijeljeno: glavna radnja je {{ui:Postavi u plan}}, a strelica na njegovom desnom kraju otvara meni s {{ui:Postavi u model}}. Ili prevucite karticu, ili sliku u detaljima stavke, na plan ili 3D prikaz: stavka se postavlja tamo gdje otpustite. Uz olovku ili prst, pritisnite i zadržite karticu trenutak, zatim prevucite.
6. Izaberite sprat u traci za postavljanje. U 3D prikazu, spratovi iznad njega su sakriveni dok postavljate, a prikaz se okreće na vrh; u planu, plan već prikazuje taj sprat. Izbor {{ui:Postavi u model}} samo iz plana otvara 3D prikaz pored njega.
7. Pomjerite pokazivač preko modela: kutija bez punog ispuna pokazuje gdje stavka ide.
8. Pritisnite {{key:R}} da je okrenete za 90°. Pritisnite {{key:Tab}} (ili {{ui:Prislanjanje na zid}}) da njena leđa prislonite na najbliži zid, okrenuto prema prostoriji.
9. Kliknite da je postavite. Ili upišite položaj u **X, Y (mm)**, na primjer `1200, 3400`, i pritisnite {{key:Enter}}.

Svjetiljka ili bilo šta okačeno odozgo: postavite **Montaža** na **Na plafonu**. Gornja strana stavke tada se nalazi na donjoj strani plafona iznad tog mjesta (ili na visini nivoa gdje nema plafona). Uz plan plafona u prikazu plana, **Montaža** počinje na **Na plafonu**.
10. Odgovorite na jedno pitanje: **broj stavke** (popunjava se sljedeći slobodni broj), količina i napomena. Pritisnite {{key:Enter}}.
11. Postavite još, ili pritisnite {{key:Esc}} da zaustavite.
12. Kliknite {{ui:Spasi kao IFC}} da preuzmete izmijenjenu kopiju.

## Plan ili model

Dugme za postavljanje u biblioteci prati prikaz u kojem ste, i mijenja se čim promijenite prikaz (dugmad {{ui:Plan}}, {{ui:Podijeli}} i {{ui:3D}}, tastatura, otvaranje datoteke). Plan prikazuje jedno dugme, {{ui:Postavi u plan}}; 3D prikazuje jedno dugme, {{ui:Postavi u model}}; Podijeli prikazuje podijeljeno dugme, s {{ui:Postavi u plan}} kao glavnom radnjom i {{ui:Postavi u model}} u meniju. Oba načina koriste istu traku za postavljanje i zapisuju isti IFC element: pokazivač radi u prikazu plana za jedan, a u 3D prikazu za drugi. Pritisnite {{key:Esc}} u bilo kom trenutku da zaustavite.

Prevlačenje kartice nema vlastitu tipku: podijeljeno dugme ili obično dugme radi isto kao tastatura.

## Pomjeranje ili okretanje postavljene stavke

U {{ui:Crtanje}} izaberite stavku u planu. Kvadratna ručka se pojavljuje na njenoj tački umetanja, a okrugla ručka pored nje.

- Prevucite stavku, ili njenu kvadratnu ručku, da je pomjerite. Privlači se kao alat Zid (krajevi zidova i strane); {{key:Shift}} je drži upravnom na mjesto gdje je bila.
- Prevucite okruglu ručku da je okrećete u koracima od 15°. Držite {{key:Shift}} za korake od 1°.
- Pritisnite {{key:R}} da je okrenete za 90°.
- U **Svojstvima** (također u 3D prikazu) upišite **X**, **Y** i **Rotacija (°)**, ili kliknite **Okreni za 90°**.

Svaki pomak je jedan korak poništavanja i putuje u Live TeamWork. Stavka zadržava svoj broj, svoje podatke iz biblioteke i svoju visinu iznad nivoa. Još nije urađeno: prevlačenje u 3D prikazu.

## Šta treba da vidite

- Stavka u modelu, izabrana, sa svojstvima s desne strane: okvir **Stavka biblioteke** s licencom i navođenjem autora, i skupovi `CadCraft_Placement`, `CadCraft_LibraryItem`, `CadCraft_Equipment` i, za stavke iz označenih crteža, `CadCraft_SourceAttributes`.
- „Postavljeno: *stavka* (stavka *n*)“ u listi promjena. {{key:Mod+Z}} je poništava.
- Statusna linija: „Postavljeno *stavka* kao stavka *n*.“

## Dobro je znati

- Neke stavke dolaze u više dimenzija ili opcija: kartica tada ima izbor **Varijanta**, i postavlja se ona koju odaberete. Pogledajte [Postavljanje i zamjena stavke biblioteke koja ima varijante](topic:library-variants).
- Stavka bez 3D tijela (2D simbol) postavlja se kao zamjenska kutija; zatražiće vam visinu.
- Još istih: izaberite postavljenu stavku i koristite {{ui:Kopiraj}} i {{ui:Zalijepi}}, ili {{key:Mod+D}}. Pogledajte [Kopiranje, lijepljenje i dupliranje stavki biblioteke](topic:copy-paste).
- Da svako postavljanje počne s uključenim prislanjanjem na zid, uključite **Počni s uključenim prislanjanjem na zid** u [postavkama programa BimCraft](topic:settings).
- Dužine se pretvaraju u jedinice samog modela, kakve god da su.
- **Entourage** (drveće, grmlje, ljudi, automobili) je također u biblioteci: tražite „tree“, „person“ ili „car“. Ovo crta CadCraft (CC0) i zadržava svoje boje kad se postavi (deblo smeđe, lišće zeleno, prozori automobila prozirni), u BimCraft-u i u drugim BIM programima. Prikazuju se u [renderovanim slikama](topic:render).
- U IFC2X3 datoteci tijelo se zapisuje kao fasetirani čvrsti oblik; u IFC4 kao triangulirani skup površina. Oba se otvaraju u drugim IFC alatima.
- Crtež (DWG ili DXF) se ovdje ne može sačuvati, pa se stavke postavljaju samo u IFC modele. Koristite **Ova datoteka** na crtežu da vidite šta bi njegovi blokovi postali.

## Stavke na vašem jeziku

Stavka može imati svoj naziv, opis i vrstu na drugim jezicima. Kad ih ima na jeziku na kojem je BimCraft postavljen (Postavke › Opšte › Jezik), stranica stavke prikazuje njih, s nazivom koji joj je dao proizvođač ispod, a **Postavi** upisuje naziv na vašem jeziku u model, pa ga spisak {{ui:Oprema}} tako navodi. Stavka ostaje ista stavka: provjera ažuriranja i zamjena idu prema samoj stavci, nikad prema nazivu. Stavke bez prijevoda zadržavaju svoje riječi.

## Česte greške

- **Dugme za postavljanje nedostaje.** Nijedan IFC model nije otvoren. Prvo otvorite jedan.
- **Sjena ne prati pokazivač.** Pokazivač je van područja modela, ili ravan sprata nije u vidu. Kliknite {{ui:Gore}}.
- **{{ui:Prislanjanje na zid}} kaže da nema zidova.** Sprat nema zidove u IFC (neki izvozi stavljaju zidove na drugi sprat). Izaberite taj sprat, ili upišite X i Y.
- **Stavke iz datoteke su pogrešne veličine.** Datoteka nema jedinice ili navodi pogrešne. U {{ui:Datoteke…}} izaberite jedinice i ponovo je pročitajte.

:::tip
Postavljanje iste stavke dva puta dijeli jedan IFC tip, pa model s četrdeset stolica čuva stolicu jednom.
:::
