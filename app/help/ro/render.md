---
title: Randarea unei imagini a modelului
summary: Faceți o imagine în lumină de zi a vederii 3D: cer, soarele la latitudinea amplasamentului, umbre moi, ferestre de sticlă; cu WebGPU, trasată pe placa grafică, cu cer, cameră, amestec de lumini, corectare a culorilor, ceață și coadă de randare.
keywords: randare, presetare, presetări, presetare de scenă, interior, exterior, vedere în secțiune, noapte, un clic, randare, trasare de cale, trasată, trasare de raze, iluminare globală, reflexii, refracție, calitate înaltă, fotografie, fotorealist, realist, imagine, png, fotografie fixă, cer, soare, lumină de zi, umbre, umbre moi, ocluzie ambientală, sticlă, ferestre, metal, materiale, expunere, luminozitate, cer acoperit, amurg, studio, prezentare, vizualizare, webgpu, reducerea zgomotului, cer fizic, hdri, ies, adâncime de câmp, panoramă, echilibru de alb, amestec de lumini, elemente de randare, exr, png 16 biți, ceață, caustice, coadă de randare
from: beb74cc7
---

{{ui:Randare}} din bara de instrumente face o imagine a vederii 3D care arată ca lumina zilei: un cer, soarele acolo unde îl pune latitudinea amplasamentului, umbre moi, lumină de la întregul cer care întunecă colțurile și culori care pot arăta ca sticla sau metalul. Modelul și fișierul nu sunt modificate.

## Randarea vederii

1. Pregătiți vederea 3D cum doriți să arate imaginea: orbitați și măriți, ascundeți etajele sau elementele nedorite și setați o [secțiune](topic:section-plane) dacă imaginea trebuie să arate o tăietură.
2. Faceți clic pe {{ui:Randare}} din bara de instrumente.
3. Alegeți o {{ui:Scenă}} dacă cea apăsată nu este cea dorită (vezi [Presetările de scenă](topic:render#scene-presets-a-good-picture-in-one-click)), alegeți {{ui:Dimensiune}}, apoi faceți clic pe {{ui:Randare}} în casetă.

   Imaginea se completează pe măsură ce se randează și devine mai netedă la fiecare trecere. {{ui:Oprire}} (sau {{key:Esc}}) o încheie mai devreme și păstrează imaginea de până atunci.

4. Faceți clic pe {{ui:Salvare}} ca să o descărcați ca PNG, sau pe {{ui:Salvare ca}} pentru alt format (vezi [Salvarea imaginii](topic:render#save-the-picture)). Se numește după fișierul modelului.

:::tip
Începeți cu {{ui:Ciornă}} la {{ui:Dimensiunea vederii}} ca să verificați camera, apoi randați {{ui:Bună}} sau {{ui:Cea mai bună}} la o dimensiune mai mare pentru imaginea finală.
:::

## Presetările de scenă: o imagine bună dintr-un clic

În partea de sus a casetei sunt patru butoane {{ui:Scenă}}. Fiecare setează cerul, luminozitatea, solul, liniile de margine, calitatea și soarele dintr-un clic, deci nu trebuie învățat nimic înainte de prima imagine. Faceți clic pe unul, apoi pe {{ui:Randare}}.

| Scenă | Ce setează | Pentru ce se folosește |
|---|---|---|
| {{ui:Exterior}} | Cer senin, soarele propriu al modelului, teren pornit | Clădirea din exterior |
| {{ui:Interior}} | Cer acoperit (lumină uniformă, fără pete tari de soare), cu o jumătate de diafragmă mai luminos | O vedere din interiorul unei camere |
| {{ui:Vedere în secțiune}} | Studio alb, fără teren, liniile de margine în randarea rapidă | Un model tăiat de o secțiune |
| {{ui:Noapte}} | Soarele coboară (miezul nopții în mijlocul iernii pentru emisfera amplasamentului), cu o diafragmă mai luminos | Lămpi care luminează modelul. Fără lămpi, imaginea este întunecată |

- {{ui:Alegere pentru această vedere}} alege în locul dumneavoastră: {{ui:Vedere în secțiune}} când o tăietură de secțiune este activă, {{ui:Interior}} când camera este în interiorul modelului, altfel {{ui:Exterior}}. Prima dată când deschideți caseta, începe singură în acest fel.
- Fiecare setare rămâne mai jos și poate fi schimbată. Odată ce modificați o setare pe care o scenă o stabilește, niciun buton nu mai este apăsat, iar linia de sub butoane spune că setările sunt ale dumneavoastră. Faceți clic din nou pe scenă ca să puneți valorile ei la loc.
- O scenă nu atinge motorul, modul, dimensiunea, materialele, camera sau lămpile.

:::note
Scenele dau aceleași valori în ModelCraft și BimCraft. Cum arată imaginea finală depinde de model și de placa grafică.
:::

## Ce apare în imagine

Ce arată vederea 3D în plin: elementele ascunse și cele transparente, etajele ascunse și modelele ascunse sunt lăsate afară, iar încăperile apar doar când {{ui:Spații}} este pornit. Un plan de secțiune sau o cutie de secțiune taie imaginea așa cum taie vederea. Elementele apar în propriile lor culori: colorarea după proprietate (fila {{ui:Culoare}}) nu se folosește.

## Setări

| Setare | Ce face |
|---|---|
| {{ui:Dimensiune}} | Dimensiunea vederii, de două ori dimensiunea vederii, Full HD, 4K sau pătrat |
| {{ui:Mod}} | {{ui:Rapid}}, sau {{ui:Calitate înaltă (trasare de cale)}} (mai jos) cu {{ui:Limită de timp}} |
| {{ui:Calitate}} | Câte treceri (sau, în calitate înaltă, câte eșantioane) se mediază: {{ui:Ciornă}} 16, {{ui:Bună}} 64, {{ui:Cea mai bună}} 256. Mai multe treceri dau umbre și margini mai netede, dar durează mai mult |
| {{ui:Cer}} | {{ui:Cer senin}}, {{ui:Cer acoperit}}, {{ui:Amurg}} sau {{ui:Studio alb}} (un fundal alb simplu) |
| {{ui:Soare}} | 21 iunie la 15:00, la latitudinea pe care o dă fișierul pentru amplasamentul său (IfcSite), orientat spre nordul real al modelului. Bifați {{ui:Folosiți altă dată și oră pentru această imagine}} pentru o altă oră |
| {{ui:Luminozitate}} | Mai luminos sau mai întunecat, în trepte (diafragme) |
| {{ui:Teren sub model}} | Un teren la cel mai de jos punct al modelului, care primește umbrele și se estompează spre orizont |
| {{ui:Desenare muchii}} | Desenează subțire muchiile elementelor peste imagine |

Când soarele se află sub orizont la ora aleasă, este noapte: cerul se întunecă, iar lămpile modelului îl luminează.

## Lămpi

Fiecare corp de iluminat din model este o lampă în imagine: corpurile dintr-un fișier IFC (IfcLightFixture, sau un element tipizat ca o lampă), inclusiv cele pe care le plasați din bibliotecă. Fiecare luminează în jos, de chiar sub corp. Când fișierul dă puterea unui corp, luminozitatea urmează din ea; altfel este de 800 de lumeni, alb călduț.

Caseta listează lămpile sub {{ui:Lămpi}}: debifați una ca s-o stingeți sau scrieți luminozitatea ei în lumeni. Aceste modificări se salvează în IFC (setul de proprietăți `CadCraft_Light` al corpului, unde le puteți schimba și în {{ui:Proprietăți}}), iar {{key:Ctrl+Z}} le anulează.

Când un fișier nu spune nimic despre unde este amplasamentul lui, soarele este pus la 40° latitudine nordică, iar caseta spune asta. Ora este ora locală a amplasamentului, calculată după longitudinea lui, deci poate fi decalată cu o oră acolo unde ceasurile sunt setate diferit.

Aceste setări sunt păstrate în acest browser pentru următoarea imagine. Nu sunt salvate în fișierul IFC.

## Sticla și celelalte materiale

Sub {{ui:Materiale}}, fiecare culoare de pe ecran are un aspect: {{ui:Mat}}, {{ui:Satinat}}, {{ui:Lucios}}, {{ui:Metal}}, {{ui:Metal lustruit}}, {{ui:Sticlă}} sau {{ui:Sticlă mată}}. Culorile pe care fișierul IFC le face transparente (de exemplu geamurile ferestrelor) încep ca {{ui:Sticlă}}.

:::note
În modul {{ui:Rapid}}, sticla și metalul reflectă cerul, nu restul modelului, iar lumina nu se curbează prin sticlă. Modul {{ui:Calitate înaltă (trasare de cale)}} de mai jos face amândouă.
:::

## Calitate înaltă

Alegeți {{ui:Mod}} › {{ui:Calitate înaltă (trasare de cale)}} pentru o imagine care urmărește lumina așa cum o vede un aparat foto:

- lumina sare între suprafețe, deci o cameră luminată printr-o fereastră sau de o lampă este luminată din toate părțile, iar culorile se revarsă pe vecinii lor;
- sticla este sticlă adevărată: lumina se curbează prin ea, iar ea reflectă modelul;
- metalul și suprafețele lustruite reflectă restul modelului;
- panourile de lumină luminează ca panouri, cu umbre moi.

Este mult mai lent decât {{ui:Rapid}}: fiecare trecere urmărește din nou lumina pentru fiecare pixel. Imaginea începe granulată și se curăță pe măsură ce eșantioanele se adună, deci începeți mic ({{ui:Dimensiunea vederii}}, {{ui:Ciornă}}) și alegeți o {{ui:Limită de timp}}: când aceasta expiră, imaginea de până atunci se păstrează. {{ui:Oprire}} o păstrează și el. Prima trecere așteaptă cât timp browserul pregătește trasorul de cale.

Unde browserul are WebGPU, trasorul de cale este al CadCraft și rulează pe placa grafică; linia de sub imagine spune asta. După {{ui:Oprire}} sau limita de timp, {{ui:Reluare}} continuă aceeași imagine până are toate eșantioanele; schimbarea unei setări sau o nouă apăsare pe {{ui:Randare}} pornește de la zero. Fără WebGPU, imaginea este trasată cu WebGL (linia spune asta), iar {{ui:Reluare}} nu este oferită.

:::linux
Firefox și majoritatea configurațiilor Chrome pe Linux nu au încă WebGPU, deci calitatea înaltă folosește WebGL acolo.
:::

În acest mod marginile nu se desenează, texturile arată culoarea și rugozitatea lor, dar nu și relieful, iar o tăietură de secțiune se face pe model înainte ca imaginea să înceapă.

{{ui:Reducerea zgomotului (elimină granulația rămasă după eșantioane)}} este pornită implicit: când imaginea este gata, sau oprită, granulația rămasă este eliminată de o rețea neuronală făcută pentru asta (rețeaua publicată a Intel Open Image Denoise, rulată pe calculatorul dumneavoastră: pe placa grafică, altfel pe procesor). {{ui:Afișare}} › {{ui:Imaginea înainte de reducerea zgomotului}} o arată așa cum a fost randată.

## Cerurile și profilurile de lumină pe placa grafică

Cu WebGPU, calitatea înaltă are încă două ceruri:

- {{ui:Cer fizic}} calculează lumina zilei după înălțimea soarelui: un albastru adânc deasupra, o bandă palidă la orizont și un soare care devine mai cald și mai slab când coboară. {{ui:Ceață}} merge de la o zi foarte limpede (2) la una cețoasă (10).
- {{ui:Imagine de cer (HDRI)}} luminează modelul cu o imagine panoramică a unui loc real. {{ui:Alegeți o imagine…}} ia un fișier `.hdr` sau `.exr` echirectangular; {{ui:Rotire}} îl întoarce în jurul modelului, iar {{ui:Luminozitatea imaginii}} o face mai luminoasă sau mai întunecată. Imaginea are propriul soare, deci soarele modelului nu se adaugă. Rămâne doar cât timp pagina este deschisă: după redeschidere, alegeți-o din nou.

Fiecare lampă din lista {{ui:Lămpi}} poate primi un profil de lumină al producătorului: {{ui:Profil IES…}} citește un fișier IES (LM-63), iar lampa își aruncă atunci lumina ca acel corp (un spot îngust, un spălător de perete). Fiecare lampă cu acel nume îl folosește, iar lampa își păstrează propria luminozitate. Faceți clic pe numele profilului ca să încetați să-l folosiți.

Ferestrele cu sticlă clară ajută lumina cerului să își găsească drumul într-o cameră.

Modul {{ui:Rapid}} și trasorul de cale WebGL arată {{ui:Cer fizic}} și {{ui:Imagine de cer (HDRI)}} ca un cer senin și ignoră profilurile de lumină.

## Camera

{{ui:Cameră}} așază imaginea ca o fotografie:

- {{ui:Expunere}}: păstrați {{ui:Cursor de luminozitate}}, sau alegeți {{ui:Setările camerei}} și setați {{ui:Diafragmă (f-stop)}}, {{ui:Viteza obturatorului}} și {{ui:ISO}} ca pe un aparat foto; EV de lângă ele este valoarea de expunere obișnuită. f/16 la 1/100 s și ISO 100 corespunde unei zile însorite; o scenă mai întunecată cere o diafragmă mai deschisă, un obturator mai lent sau un ISO mai mare. Funcționează în orice mod.
- {{ui:Adâncime de câmp}} estompează ce este mai aproape sau mai departe de {{ui:Distanța de focalizare (m)}} așa cum ar face un obiectiv cu acea diafragmă (lăsați-o goală ca să focalizați pe ce este în mijlocul vederii); {{ui:Forma diafragmei}} dă reflexiilor din afara focalizării o formă rotundă sau cu lamele.
- {{ui:Perspectivă cu două puncte (liniile verticale rămân verticale)}} nivelează camera și deplasează imaginea, ca un obiectiv arhitectural de deplasare, astfel că pereții nu se înclină când priviți în sus sau în jos spre o clădire.
- {{ui:Echilibru de alb}} stabilește ce culoare de lumină apare ca alb: mai jos (de exemplu 3000 K) pentru lumina călduță a lămpilor, mai sus pentru umbră și zile înnorate.
- {{ui:Proiecție}}: {{ui:Panoramă 360°}} face o imagine 2:1 a tot ce este în jurul camerei, pentru vizualizatoarele de panorame; {{ui:Panoramă stereo 360°}} așază una pentru ochiul stâng și una pentru ochiul drept, pentru căști; {{ui:Hartă cub (6 fețe)}} face șase vederi pătrate într-o grilă de 3 × 2. Lățimea vine din {{ui:Dimensiune}}.

Proiecția, adâncimea de câmp, perspectiva cu două puncte și echilibrul de alb au nevoie de trasorul de cale de pe placa grafică (WebGPU), deci apar doar în {{ui:Calitate înaltă (trasare de cale)}}.

## Finisarea imaginii

{{ui:Imagine}} corectează culorile imaginii de calitate înaltă ca o fotografie, iar fiecare comandă schimbă imediat imaginea finală, fără o nouă randare:

- {{ui:Aspect (transformare de vizualizare)}}: {{ui:ACES filmic}} (imaginea ca până acum), {{ui:AgX}} (mai moale, păstrează culoarea în lumina foarte puternică), {{ui:Filmic}} (o curbă blândă de film) sau {{ui:Standard}} (simplu, lumina foarte puternică se taie la alb).
- {{ui:Contrast}} și {{ui:Comprimare a luminilor}} (readuce detaliul în părțile foarte luminoase).
- {{ui:Bloom}} (o strălucire moale în jurul luminii puternice), {{ui:Strălucire}} cu {{ui:Raze de strălucire}} (raze în formă de stea din cele mai luminoase puncte) și {{ui:Vignetare}} (colțuri mai întunecate).
- {{ui:Tabel de culori (.cube)…}} aplică o corecție de culoare dintr-un fișier `.cube`, cu {{ui:Intensitatea tabelului de culori}}; ca o imagine de cer, rămâne doar cât timp pagina este deschisă.

## Salvarea imaginii

{{ui:Salvare ca}} lângă {{ui:Salvare}} alege fișierul: {{ui:PNG}}, {{ui:JPEG}} sau {{ui:WebP}} pentru partajare (JPEG și WebP doar acolo unde browserul le poate scrie), iar după o randare de calitate înaltă pe placa grafică și:

- {{ui:PNG, 16 biți}}: imaginea corectată, cu trepte mai fine între nuanțe, pentru imprimare sau editare ulterioară.
- {{ui:EXR, fiecare strat (virgulă mobilă 32 de biți)}}: imaginea așa cum a fost randată (lumină liniară, fără corectare), cu fiecare element de randare și grup de lumini ca strat propriu, pentru programele de compunere.
- {{ui:Fișier de randare (.ccrender, pentru a corecta culorile mai târziu)}}: tot ce are nevoie caseta ca să amestece și să corecteze din nou imaginea. {{ui:Deschideți un fișier de randare…}} o aduce înapoi, cu amestecul și corecția ei, fără randare.

## Amestecarea luminilor după randare

Porniți {{ui:Amestec de lumini (schimbați culoarea și luminozitatea fiecărei lumini după randare)}} înainte să apăsați pe {{ui:Randare}}. Când imaginea este gata (sau oprită), {{ui:Amestecați imaginea}} listează luminile ei pe grupuri: cerul, soarele și lămpile după nume (fiecare lampă cu același nume este un grup). Opriți un grup, dați-i o culoare sau faceți-l mai luminos ori mai întunecat, iar imaginea se schimbă imediat, fără o nouă randare. {{ui:Salvare amestec}} păstrează amestecul sub un nume, ca să îl alegeți mai târziu; {{ui:Ca la randare}} revine la imaginea așa cum a fost făcută. {{ui:Salvare}} salvează imaginea amestecată.

{{ui:Elemente de randare (albedo, normale, adâncime, difuz, speculare, transmisie, emisie, ID-uri)}} păstrează și părțile imaginii. {{ui:Afișare}} comută vederea pe una dintre ele: culorile suprafețelor (albedo), normalele, adâncimea, lumina difuză, speculară și transmisă (fiecare directă și indirectă), ce strălucește și cerul, și o culoare pe obiect sau pe material pentru a face măști.

Ambele păstrează straturi în plus pe placa grafică. La dimensiuni mari, o placă grafică poate să nu aibă loc; caseta spune asta, iar o dimensiune mai mică funcționează.

## Ceață, fum, zgomot și caustice

Acestea sunt în {{ui:Ceață, fum și zgomot}} și funcționează în {{ui:Calitate înaltă (trasare de cale)}} pe placa grafică; celelalte motoare le lasă afară.

- {{ui:Ceață și abur}} umple aerul până la o înălțime cu o pâclă pe care o luminează soarele, cerul și lămpile. {{ui:Până unde se vede, în metri}} stabilește cât de groasă este (cam 100 m este o ceață ușoară, 20 m o ceață groasă), {{ui:Înălțimea ceții deasupra solului, în metri}} este unde se termină, iar {{ui:Fascicule de lumină}} este cât de mult strălucește pâcla spre lumină. Lumina soarelui iese din ceață la partea de sus, deci acolo unde soarele intră printr-o fereastră sau între clădiri, îl vedeți ca fascicule de lumină.
- {{ui:Fum sau nor}} adaugă un volum de fum sau nor, luminat ca ceața. {{ui:Fel}} este un {{ui:Nor}}, o {{ui:Coloană de fum}} sau {{ui:Dintr-un fișier de volum (.ccvol)}}, formatul de grilă propriu al CadCraft. {{ui:Detaliu}} și {{ui:Variație}} modifică un nor sau o coloană făcută, {{ui:Dimensiunea laturii cele mai lungi, în metri (0 = dimensiunea modelului)}}, {{ui:Deplasare pe X (m)}}, {{ui:Deplasare pe Y (m)}}, {{ui:Deplasare pe Z (m)}} și {{ui:Rotire}} îl așază (pornește la mijlocul modelului), {{ui:Grosime}} îl face mai dens, {{ui:Strălucire înainte}} îl face mai luminos spre lumină, iar {{ui:Culoare}} îl colorează. Un fișier de volum rămâne doar cât timp pagina este deschisă, ca o imagine de cer.
- {{ui:Oprire timpurie acolo unde imaginea este curată (eșantionare adaptivă)}} nu mai dă eșantioane pixelilor care s-au liniștit. {{ui:Zgomot acceptat}} este cât de multă granulație rămâne când un pixel se oprește. Linia de sub imagine spune câte eșantioane a primit un pixel, în medie.
- {{ui:Caustice (lumină deviată de sticlă sau reflectată de oglinzi)}} trasează lumina de la lămpi și de la soare, astfel că petele luminoase de sub o bilă de sticlă sau lumina unei oglinzi pe un perete ies curate, nu granulate. Este oprită cât timp ceața, fumul, amestecul de lumini sau elementele de randare sunt pornite, și este făcută pentru imagini, nu pentru imagini de 360°.

## Coada de randare

{{ui:Coadă de randare}} în casetă: {{ui:Adăugați această imagine în coadă}} păstrează setările și vederea imaginii, iar {{ui:Pornire coadă}} randează ce așteaptă, una după alta, pe acest calculator. Închiderea paginii păstrează coada; deschideți același model ca să continuați. {{ui:Salvare}} descarcă una terminată; {{ui:Eliminare}} și {{ui:Ștergere finalizate}} curăță lista. Coada randează în calitate înaltă, deci are nevoie de WebGPU.

## Cât durează

Imaginea este făcută pe calculatorul dumneavoastră, de placa grafică; nimic nu este încărcat. Timpul crește cu trecerile și pixelii: {{ui:Cea mai bună}} are de 16 ori mai multe treceri decât {{ui:Ciornă}}, iar o imagine 4K are cam de patru ori mai mulți pixeli decât Full HD. Modelele mari durează mai mult pentru fiecare trecere.
