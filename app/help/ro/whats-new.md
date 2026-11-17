---
title: Noutăți în 0.9
summary: Forme de pereți, divizare, decalare, întindere și blocare pe axe, niveluri sub nivelul terenului, cote de axe și Măsurare pe plan, vederi duplicate cu stiluri de lucru și tabele de penițe, Raportare ca, export Collada și Google Earth, Scan to BIM, analiza vântului și a seismului, suplimente de imprimare cu rășină.
keywords: noutăți, 0.9, note de lansare, forme de pereți, dreptunghi, poligon, arc, alegere linii, contur prin calchiere, decalare, îmbinare, întindere prin casetă, aliniere și blocare, divizare pereți, interval, reunire, blocare pe axe, crește de la, măsurare de la, adăugare nivel dedesubt, subsol, comanda nivel, cote de axe, măsurare pe plan, stil de lucru, vedere duplicată, copie proprie, vedere legată, tabel de penițe, tipărire ca în ecran, raportare ca, scalare, importare SVG, plasare în plan, plasare în model, collada, dae, kmz, google earth, scan to bim, sarcină de vânt, seism, element finit, panou documente, imprimare cu rășină, noutăți, jurnal de modificări, modificări, 0.8, 0.8.1, versiune, funcții noi, evacuare, persoane, cozi, acustică, reverberație, răspuns la impuls, inundație, vânt, cutremur, hazard, ciclu de viață, durată de viață, ids, etichete, tabele centralizatoare, mutare, aliniere, distribuire, imagine, fundal, scanare în pereți, amplasament din civilcraft, desene de panouri, cadru, solar, pv, divizare, vrf, unitate fan coil, dimensionare conducte, tavă de cabluri, iluminare, beton, seism, comparare scanare, epsg, proiecție, documente, șablon, carbon, cost, energyplus, motor de randare, deschidere în, usd, glb, unreal, anulare, suplimente, pcf, simboluri, plante, trasare, penițe, panglică, panou de proiect, aspect
from: 5624fe88
---

Aceasta este lista modificărilor din BimCraft 0.9, comparativ cu 0.8.1. Cele două teme mari sunt un instrument real pentru pereți și vederi care se comportă așa cum se așteaptă cei care vin din programele BIM mari. În jurul lor vin exportul Collada, asistenții care pot plasa dispozitive electrice, Scan to BIM și analiza vântului, a seismului și cu elemente finite în fila {{ui:Analiză}}.

## Noutăți

### Pereți

- **Desenați forme întregi.** În {{ui:Desenare}}, deschideți {{ui:Forme}} (sau alegeți o formă din lista Formă a rândului Perete) pentru un dreptunghi, un dreptunghi rotit, un poligon cu 3 până la 64 de laturi, un arc după centru, un arc tangent, pereți pe linii alese sau pereți în jurul unei zone închise pe care o alegeți. Un dreptunghi este patru pereți cu patru colțuri unite și un singur pas de anulare. Vezi [Forme de pereți, divizare, decalare, întindere și blocare](topic:wall-tools).
- **Setați înainte de desenare, modificați după.** Rândul Perete are {{ui:Decalare}} și {{ui:Îmbinare}} (debifați ca să desenați pereți liberi). După aceea folosiți {{ui:Decalare}}, {{ui:Întindere prin casetă}} și {{ui:Aliniere și blocare}} pe pereții desenați. Un perete mutat sau întins își păstrează ușile, ferestrele și cotele. Fiecare rețetă este un pas de anulare.
- **Tăiați pereții.** {{ui:Divizare}}, {{ui:Interval}}, {{ui:Capete libere}}, {{ui:Ștergere segment}} și {{ui:Reunire}} taie un perete la un clic sau acolo unde îl traversează alt perete. O tăietură printr-o ușă este refuzată. Vezi [Forme de pereți, divizare, decalare, întindere și blocare](topic:wall-tools).
- **Blocați pereții de axe.** Selectați un perete de-a lungul unei axe și bifați {{ui:Blocare pe linia de axă}} în {{ui:Proprietăți}}. Cu instrumentul Axe activ, scrieți o distanță în {{ui:Mutare cu}} pentru o linie aleasă, iar pereții blocați urmează într-un singur pas de anulare.
- **Formați un perete.** În {{ui:Proprietăți}} ale unui singur perete puteți atașa partea lui de sus sau de jos de un acoperiș, o placă sau un tavan, să-i editați conturul de elevație, să-l înclinați sau să tăiați un gol de perete fără ușă sau fereastră. Vezi [Forma unui perete](topic:wall-shape).
- **Lungimea arată ce capăt rămâne.** {{ui:Crește de la}} stabilește dacă rămâne fix începutul, sfârșitul sau centrul când schimbați lungimea.
- **Lungimea și cota de plan se potrivesc.** {{ui:Măsurare de la}} (linia centrală, fața interioară sau fața exterioară) comandă atât câmpul Lungime, cât și cotele de perete de pe plan. Începe pe linia centrală, deci cotele de perete de pe plan citesc acum linia centrală, unde înainte citeau fața exterioară. Schimbați-l în rândul Perete, în {{ui:Proprietăți}} sau în {{ui:Setări}} › {{ui:BimCraft}} › {{ui:Pereți}}.

### Niveluri, axe și măsurare

- **Adăugați un nivel dedesubt.** {{ui:Adăugare nivel dedesubt}} din panoul {{ui:Niveluri}} adaugă un nivel sub cel mai de jos, la fel de înalt ca el, la o cotă negativă (Nivel -1, Nivel -2). Nimic altceva nu se mută. {{ui:Adăugare niveluri…}} acceptă acum înălțimi negative, iar dacă scrieți LEVEL, LEVELS, STOREY sau STOREYS în linia de comandă se deschide {{ui:Adăugare niveluri…}}; există și un buton {{ui:Niveluri}} în meniuri și în filele panglicii. Vezi [Amplasamente, clădiri și niveluri](topic:site-building-and-levels).
- **Cote de axe pe plan.** Cu instrumentul {{ui:Axe}} activ, bifați {{ui:Dimensiuni}} ca să desenați distanța dintre liniile vecine și dimensiunea totală dincolo de cercurile de la capete, pe planul fiecărui nivel. Vezi [Cotarea unei axe](topic:grid-dimensions).
- **Măsurare pe plan.** {{ui:Măsurare}} din grupul {{ui:Desenare}} dă o distanță cu diferențele X și Y dintre două clicuri. Nimic nu este salvat în model. Vezi [Măsurarea pe plan](topic:measure-on-the-plan).
- **Modificați mai multe coloane deodată.** Alegeți coloane împreună cu un perete, iar lista le arată pe fiecare tip cu {{ui:Păstrați doar acestea}}. Un clic păstrează coloanele și arată câmpurile lor comune.
- **O unitate de afișare peste tot.** Coordonatele, măsurătorile, secțiunile, scările planșelor, filele de sarcini și rezultate ale cadrului și textul Probleme urmează unitatea pe care o alegeți. Exporturile rămân în SI.

### Vederi, planșe și tipărire

- **Stil de lucru.** {{ui:Setări}} › {{ui:BimCraft}} › {{ui:Stil de lucru}} alege între fiecare vedere cu propriile adnotări și tabele de penițe sau împărtășirea lor. Vezi [Stil de lucru, vederi duplicate, penițe pe hârtie, Raportare ca și șabloane](topic:working-style).
- **Duplicați o vedere.** Planurile, planurile de tavan, chemările, elevațiile și secțiunile pot fi duplicate ca {{ui:Copie proprie}} sau {{ui:Legată}}; {{ui:Faceți copie proprie}} face una legată independentă. Vezi [Stil de lucru, vederi duplicate, penițe pe hârtie, Raportare ca și șabloane](topic:working-style).
- **Tipăriți cum se vede, sau printr-un tabel de penițe.** Modificările de penițe sunt păstrate în IFC cu vederea, iar planșele și PDF-urile le desenează cum le desenează ecranul. Același subiect acoperă tabelele de penițe.
- **Raportare ca.** {{ui:Raportare ca}} din {{ui:Proprietăți}} scrie o placă desenată ca drum, un perete ca panou sau un acoperiș ca rampă în IFC, ca clasa pe care o alegeți, și o numără așa în tabele, Cantități, Caută, Colorare după și Probleme.
- **Editați în elevații și secțiuni.** Desenați și mutați pereți, goluri, niveluri, cote și note chiar într-o elevație sau o secțiune, cu propriile dimensiuni de planșe și cartușe. Vezi [Editarea în elevații și secțiuni](topic:edit-in-elevations).
- **Planșe.** Fiecare planșă poate fi pe orizontală sau pe verticală. O casetă {{ui:Tastați o scară}} stă lângă lista de scări a fiecărei vederi plasate (1:64, 2:1, 1/4" = 1'). Puteți trage un desen plasat sau îl puteți mișca cu tastele cu săgeți, iar {{ui:Formate…}} › {{ui:Import SVG…}} transformă propriul design de planșă într-un cartuș cu câmpuri scrise pe fiecare planșă.
- **Credite de bibliotecă pe o planșă.** Un set de desene cu elemente din bibliotecă primește un tabel Credite de bibliotecă pe care îl puteți plasa pe orice planșă. Vezi [Credite de bibliotecă](topic:library-credits).

### Bibliotecă: plasare

- **Plasarea urmează vederea.** În vederea Plan, Biblioteca arată {{ui:Plasare în plan}}; în 3D arată {{ui:Plasare în model}}; în Divizare arată un buton divizat cu {{ui:Plasare în plan}} ca acțiune principală. Ambele moduri scriu același element IFC. Puteți trage și un card din Bibliotecă pe plan sau pe vederea 3D; cu un creion sau cu degetul, apăsați și țineți, apoi trageți. Vezi [Plasarea din Bibliotecă](topic:place-from-library).

### Fișiere și asistenți

- **Collada și Google Earth.** {{ui:Collada}} din bara de instrumente (meniul Fișier în stilurile de meniu) scrie un fișier .dae sau un .kmz plasat acolo unde este modelul pe hartă. Vezi [Exportul modelului ca Collada sau pentru Google Earth](topic:collada).
- **Asistenții pot plasa dispozitive electrice.** Asistentul dvs. conectat are unelte noi pentru a adăuga, lista, modifica și șterge dispozitive și pentru a seta lumini. Asistenții rămân opriți până îi porniți în {{ui:Setări}}. Vezi [Lăsați un asistent AI să lucreze cu modelul dvs.](topic:assistants).
- **Scan to BIM (supliment).** Oprit implicit și are nevoie de suplimentul Nori de puncte. Propune planșee, pereți, uși și ferestre dintr-o scanare, cu abaterea măsurată pentru fiecare; acceptarea este un singur pas de anulare.

### Analiză

- **Date de sit pentru vânt și seism.** În fila {{ui:Analiză}}: sarcini de vânt după ASCE 7-10 sau 7-16 pentru o clădire rigidă închisă, cu o forță pe fiecare etaj ca cazuri de sarcină, și date de sit seismice cu o căutare USGS și spectrul de proiectare.
- **Urmărire structurală și elemente finite.** Verificări ale betonului după ACI 318-19, forțe laterale echivalente după ASCE 7-22, derivă pe etaj, planșee și pereți ca plăci și combinații de sarcini din ASCE 7 și EN 1990. Propriul nostru motor cu elemente finite face învelișuri, tetraedre și analiză modală. Vezi [Verificarea elementelor de beton și sarcini seismice](topic:concrete-and-seismic) și [Analiza cadrelor](topic:frame-analysis).

### Alte suplimente și documente

- **Iluminat interior (supliment).** Plasează corpuri de iluminat și scrie luxul ca numere în planul fiecărui nivel, cu o estimare a orbirii și un raport care poate fi tipărit.
- **Panoul documentelor.** {{ui:Fișier}} › {{ui:Documente…}} are preluare și depunere cu un fișier de blocare, litere de revizie, stări de lansare și istoric.
- **Regiuni și oțel.** Pachete de desen și de reglementări de construcții din Africa de Sud în suplimentul Reglementări, și 976 de dimensiuni de oțel britanice în tabelul comun de secțiuni.
- **Suplimente gratuite de imprimare cu rășină.** Slicer, suporturi și radier, test de expunere, și formatele de fișier GOO, SL1, Chitubox și Anycubic, toate oprite implicit.

## În fiecare aplicație

- Când treceți cu mouse-ul peste un buton sau un control apare o sugestie Bootstrap.
- Sugestia de start de pe o zonă de desen goală are un buton de închidere; BimCraft ține minte că a fost închisă.
- Șirul de file al unui panou care nu încape acum derulează în loc să fie tăiat.
- Cu un document deschis, fila browserului spune „<document> - BimCraft | CadCraft”.
- În {{ui:Setări}} › {{ui:General}} › {{ui:Aspect}}, aspectele sunt o listă derulantă cu alegeri pe două rânduri.
- Lista de limbi din {{ui:Setări}} oferă mai multe limbi decât în 0.8; limbile în afara engleziei sunt ciorne automate.

## Remediate

- **Mutarea funcționează pe scări,** și pe rampe, balustrade, planuri de acoperiș, dispozitive independente, imagini și trasee.
- **Trăgând un perete, camera nu mai este deformată.** Mânerul central mută peretele perpendicular pe el însuși, iar colțurile lui alunecă de-a lungul pereților uniți. Țineți apăsat {{key:Mod}} pentru vechea mutare liberă; {{ui:Aducere la unghi drept}} readuce unghiul de 90 de grade.
- **O schimbare de grosime sau de tip la un nod unit** păstrează acum colțul închis la un L, un T, un nod cu trei pereți și lângă un perete curb.
- **Mutarea sau copierea unui grup de încăperi** păstrează pereții uniți în afara grupului uniți.
- **Refacerea păstrează identitatea cotei de perete.**
- **Alegerea unui perete cu Desenare oprită** nu mai aruncă o eroare în Proprietăți.
- **Randarea trece pe WebGL** atunci când placa grafică nu poate porni, în loc să se oprească.
- **Verificarea EnergyPlus poate fi activată** din nou.
- **Documente se deschide ca o casetă de dialog centrată.** {{key:Esc}}, X sau un clic pe pagina întunecată o închid.
- **Butoanele {{ui:Plan}}, {{ui:Divizare}} și {{ui:3D}} apar** imediat ce un model este deschis, nu doar după ce Desenare a fost activată o dată.

## Limite reale

- Nimic nu a fost tipărit pe hardware real. Suporturile din rășină sunt noi și nedovedite.
- Rezultatele pentru vânt, seism, beton și elemente finite sunt ajutoare de verificare pentru un inginer, verificate față de formule închise, nu față de o clădire reală.
- Scan to BIM a fost testat pe o clădire sintetică, nu pe o scanare reală, și găsește doar încăperi rectilinii.
- Collada nu a fost deschis aici în Blender sau Google Earth.
- Estimarea iluminării este verificată față de propria noastră trasare, nu față de alte programe de iluminat.
- Cifrele pentru Africa de Sud nu sunt verificate.
- Tipurile de îmbinare a pereților (cap la cap, mitră, tăiere pătrată) și prioritatea de strat nu sunt construite; colțurile sunt mitrate.
- Limbile în afara engleziei sunt ciorne automate.

Restul este în [Ce nu este încă realizat](topic:not-built-yet). Modificările anterioare sunt în notele 0.8 și 0.8.1 mai jos pe această pagină.

## Mai devreme: 0.8 și 0.8.1

Aceasta este lista modificărilor din BimCraft 0.8 (2026-11-01) și 0.8.1 (2026-11-02), comparativ cu 0.7. BimCraft poate acum să răspundă la întrebări despre o clădire și să o testeze, cu persoane, sunet, apă, vânt și cutremure, și să o deseneze cu mai multe unelte; 0.8.1 este o versiune de remediere.

### Noutăți

**Testați clădirea**

- **Persoane în clădire.** Secțiunea {{ui:Persoane în clădire}} din panoul din stânga parcurge o evacuare sau sosirile dintr-o zi obișnuită prin camerele, ușile și scările dvs. Vedeți cozile acolo unde clădirea se îngustează, cel mai lung drum până la o ieșire din fiecare încăpere și cât durează ultima persoană. Bifați {{ui:Închisă}} pe o ușă ca să vedeți ce se schimbă și bifați {{ui:Afișare persoane în vizualizarea 3D}} ca să urmăriți persoanele. Constatările merg în Probleme. Un model grosier de mulțime pentru decizii de proiectare, nu un certificat de securitate la incendiu. Vezi [Plimbarea persoanelor prin clădire](topic:people-in-the-building).
- **Acustica încăperilor, și ascultați-o.** Secțiunea {{ui:Acustica încăperilor}} dă timpul de reverberație al fiecărei încăperi pe benzi de octavă (Sabine și Eyring) din dimensiunea ei și din finisajele pe care le alegeți, iar cu o țintă proprie spune câtă absorbție ar fi necesară. {{ui:Redați în această cameră}} redă o voce, o bătaie din palme, note ciupite sau propriul fișier sonor printr-un răspuns la impuls calculat pentru încăpere. Cifrele de absorbție sunt valori publicate tipice, pe care le puteți înlocui. Vezi [Acustica încăperilor](topic:room-acoustics).
- **Redare de inundație, vânt și cutremur.** {{ui:Redare a hazardului}} redă apa care urcă prin încăperi, presiunea vântului pe fiecare etaj și un cutremur care zguduie etajele, pe un plan sau o elevație, cu un cursor de timp. Modele simple, cu presupunerile lor pe panou; nu este o verificare de cod. Vezi [Redarea unei inundații, a vântului sau a unui cutremur](topic:hazard-playback).
- **Ce se uzează în cincizeci de ani.** {{ui:Vedere pe ciclul de viață}} listează ferestrele, ușile, finisajele și acoperișul, cu o durată de viață fiecare, anii în care sunt înlocuite și, când scrieți un cost pe unitate, costul pe an și valoarea lui prezentă. {{ui:Salvarea programului (CSV)}} îl scrie. Duratele de viață sunt valori de planificare. Vezi [Vedeți ce se uzează în cincizeci de ani](topic:life-cycle-view).
- **Verificări ale betonului și seismice.** Secțiunile {{ui:Elemente din beton}} și {{ui:Sarcini seismice}} din fila {{ui:Analiză}} verifică grinzi și stâlpi din beton după ACI 318-19 și fac forțe laterale echivalente după ASCE 7-22 pe planșee rigide, cu derivă pe etaj. Pentru un inginer care verifică. Vezi [Verificarea elementelor de beton și sarcini seismice](topic:concrete-and-seismic).

**Verificați și raportați**

- **Verificare față de un IDS.** Încărcați fișierul `.ids` pe care vi l-a dat un client și vedeți în Probleme fiecare element care nu îl respectă, înainte de a livra IFC-ul. Deschideți {{ui:Verificare față de un IDS}} din {{ui:Verificări ale modelului}}. Vezi [Verificarea unui model față de IDS-ul unui client](topic:check-against-ids).
- **Etichete și tabele centralizatoare.** Definiți propriile etichete, puneți-le pe multe elemente deodată și creați tabele centralizatoare ale căror coloane, filtre și grupări le citesc; etichetele sunt păstrate în IFC. Vezi [Etichete și tabele centralizatoare](topic:tags-and-schedules).
- **Documente din model.** {{ui:Documente din model}} umple un șablon de specificație din IFC-ul deschis și îl salvează ca PDF, document Word sau Markdown. Vezi [Documente din model](topic:documents-from-the-model).
- **Comparați o scanare cu modelul.** Cu un nor de puncte deschis, {{ui:Comparare}} judecă fiecare element ca executat, parțial executat, lipsă sau neatins și arată procentul executat. Vezi [Compararea unei scanări cu modelul](topic:compare-scan-with-model).
- **Carbon și cost.** Panoul Carbon adună carbonul încorporat dintr-un tabel de factori pe care îl puteți edita, iar panoul Cost împarte prețurile pe programul 4D. Factorii care vin cu BimCraft sunt generici și marcați ca neverificați. Vezi [Carbonul încorporat și costul](topic:embodied-carbon-and-5d-cost).
- **Orice proiecție de hartă.** {{ui:Măsurare}} › {{ui:Sistem de coordonate…}} primește un număr EPSG, o zonă UTM, un nume sau propria definiție de proiecție. Vezi [Georeferențierea cu orice proiecție](topic:georeference-any-projection).

**Desenați și editați**

- **Mutare, aliniere și distribuire.** Sub {{ui:Build}}; {{key:Shift+M}} pornește Mutarea (simplu {{key:M}} rămâne Măsurare). Mutarea copiază pe măsură ce mergeți cu {{key:C}}, fiecare pas este o anulare, iar călătorește într-o sesiune Live TeamWork. Vezi [Mutare, copiere, aliniere și distribuire](topic:move-align-distribute).
- **Imagini sub plan.** {{ui:Build}} › {{ui:Imagine}} plasează un PNG, JPEG sau WebP sub planul unui nivel sau pe un plan vertical. Stabiliți scara prin două puncte și mutați, rotiți, estompați și blocați imaginea. O zonă copiată în MarkupCraft se lipește la scara planșei ei. Vezi [Puneți o imagine sub plan](topic:pictures-as-backgrounds).
- **Pereți dintr-o scanare.** Cu o scanare deschisă, pereții, ușile și încăperile vin ca propuneri pe care le păstrați sau le respingeți una câte una, într-un singur pas de anulare. Sunt găsiți doar pereți pe două direcții perpendiculare. Vezi [Transformarea unei scanări în pereți](topic:scan-to-walls).
- **Calchiere, penițe și scară de schiță.** {{ui:Calchiere}} arată alt nivel punctat sub plan, {{ui:Penițe}} dă pereților, ușilor și ferestrelor propria grosime a liniei într-o vedere, iar {{ui:Scară din schiță}} transformă o linie de mers într-o scară. Se deschide o rețea Wavefront OBJ. Vezi [Calchierea unui nivel, penițe și o scară dintr-o schiță](topic:trace-pens-stairs-obj).
- **Clădiri în jurul unei adrese.** Clădirile și parcela pe care le-a găsit Adresă în sit din CivilCraft sosesc ca sugestii; bifați cele pe care le adăugați. Vezi [Începerea de la amplasamentul din CivilCraft](topic:site-from-civilcraft).
- **Desene de panouri.** {{ui:Build}} › {{ui:Desene de panouri}} încadrează pereți, planșee și acoperișuri din lemn sau din oțel ușor profilat și salvează o listă de tăiere ca CSV și desene de execuție ca PDF. Valori de pornire, nu un proiect structural. Vezi [Desene de panouri](topic:panel-drawings).
- **Paletă de simboluri și plante.** {{ui:Build}} › {{ui:Paletă de simboluri}} găsește simboluri electrice și sanitare după nume; sursa {{ui:Plante}} din {{ui:Bibliotecă}} listează vreo 400 de plante cu simboluri de plan. Vezi [Paleta de simboluri](topic:symbol-palette) și [Plasarea unei plante](topic:plant-list).

**Țevi, conducte de aer și energie**

- **Divizat, VRF și fan coil.** Unități interioare și exterioare cu conexiunile lor, și linii de agent dimensionate dintr-un tabel de valori tipice de exemplu, pe care le puteți schimba. Vezi [Divizat, VRF și fan coil](topic:split-vrf-fan-coils).
- **Calcule.** Panoul Calcule verifică dimensiunile țevilor de alimentare și ale conductelor de aer cu pierdere de presiune, trece cabluri prin tăvi și tuburi și arată gradul lor de umplere, iar calculează iluminarea din fișiere IES sau EULUMDAT. Valorile implicite sunt etichetate; scrieți valorile codului dvs. Vezi [Calcule de țevi, conducte de aer, cabluri și lumină](topic:mep-calculations).
- **Fișiere PCF.** {{ui:Export PCF}} din instrumentul Țeavă scrie traseele pentru programele de tensiune și izometrice, iar un fișier PCF citit înapoi desenează țeava lui. Vezi [Fișiere cu componente de țevi](topic:piping-pcf).
- **Energie solară.** Montați rețele pe acoperișuri sau pe sol, umbriți-le din model, estimați energia anuală, verificați șirurile și creați date pentru o schemă monofilară. Modulul de pornire și pierderile sunt generice. Vezi [Energie solară](topic:solar-pv).
- **Fișier EnergyPlus.** Panoul {{ui:Verificare cu EnergyPlus}} scrie modelul ca IDF pentru a-l rula în propriul EnergyPlus. Rularea în browser are nevoie de o versiune pe care o găzduiți și la a cărei adresă o scrieți; BimCraft nu o include. Vezi [Verificarea încălzirii și răcirii cu EnergyPlus](topic:check-with-energyplus).

**Imagini și fișiere**

- **Alegeți motorul de randare.** {{ui:Randare}} are o alegere {{ui:Motor}}. Cele două motoare încorporate (Rapid și Trasor de cale) rămân implicite. {{ui:Deschidere în …}} salvează scena ca fișier USD sau glTF, iar un dosar de proiect Unreal ca .zip; în CadCraft Studio un supliment poate adăuga un motor. Modulul Unreal care deschide proiectul nu este lansat. Vezi [Alegeți ce program desenează imaginea](topic:render-engines).
- **Anulare în Studio.** În CadCraft Studio, BimCraft îi spune lui Studio fiecare pas terminat, ca Studio să poată anula ultimul pas în fereastra folosită ultima dată. Vezi [Anulare între aplicații](topic:undo-across-apps).
- **Suplimente în fișierul dvs.** Un IFC notează ce suplimente au scris în el și vă oferă pe cele care lipsesc când îl deschideți. Vezi [Suplimente în fișierul dvs.](topic:add-ons-in-your-file).

**În fiecare aplicație**

- **Conectați-vă AI-ul.** Propriul asistent poate conduce BimCraft prin conexiunea Studio și poate răspunde la întrebări despre model, cum ar fi ce încăperi se află sub o anumită suprafață. Studio nu are AI propriu. Vezi [Lăsați un asistent AI să lucreze cu modelul dvs.](topic:assistants).
- **Rânduri ale barei de instrumente.** {{ui:Setări}} › {{ui:General}} › {{ui:Rânduri ale barei de instrumente}} oferă Înfășurare, 2 rânduri sau 1 rând; Înfășurarea rămâne implicită.
- **Dispozitive de intrare.** Setările pentru touchpad, creion, mouse 3D, controler și MIDI sunt comune tuturor aplicațiilor.
- **Probleme și Live.** Panoul de avertismente și sesiunile Live funcționează ca înainte, cu noile verificări de mai sus alimentând Probleme.
- **Limbi.** 54 de limbi, zece dintre ele noi. Cele în afara engleziei sunt ciorne automate nerevizuite de un vorbitor nativ; subiectele de ajutor sunt în mare parte în engleză.

### Remediate în 0.8.1

- **Panglică și aspectul Browserului de proiect.** Insert › Import CAD, Insert › Image și Manage › Project Units spuneau „Nu este încă realizat în BimCraft”. Acum Image deschide instrumentul Imagine, Import CAD deschide {{ui:Build}} › {{ui:Dintr-un desen…}} (DWG, DXF, PDF sau o scanare), iar Project Units deschide {{ui:Setări}} › {{ui:Global}} › {{ui:Unități}}. Move și Align rulează instrumentele Mutare și Aliniere, Level deschide {{ui:Adăugare niveluri…}}, Phases deschide secțiunea Faze de renovare, iar Materials deschide biblioteca de materiale.
- **Secțiunea de clase DWG.** Era citită ca tip greșit; remediată în BimCraft și în celelalte aplicații care citesc DWG.
- **Limba la rulare.** Studio și edițiile împachetate pot schimba acum limba fără repornire. Nu a fost încă testat pe fiecare platformă; spuneți-ne dacă limba nu se schimbă.
- **Script pentru pachetul Archicad.** `archicad_bundle.py`, o descărcare separată, găsește acum calea Archicad, urmărește dosarul timp de până la 20 de secunde și reîncearcă lângă pachet.

### Încă nu în această versiune

- **Ajutoare de siguranță și de proiectare.** Persoanele din clădire nu au o limită de distanță de parcurs dintr-un cod de construcție (o scrieți dvs.) și nu au fost verificate manual pe un plan real. Cifrele pentru acustică, ciclul de viață și hazard sunt valori de planificare, nu o verificare de cod.
- **Scenarii climatice și EnergyPlus.** Nu există scenarii climatice încorporate: puteți încărca un fișier de scenariu pentru rularea inundației. Rularea EnergyPlus în browser nu face parte din această versiune.
- **Panglică.** Material Takeoff rămâne „Nerealizat”, pentru că BimCraft nu are o listă de cantități de materiale, iar alte 54 de unelte cenușii din panglică nu au încă o unealtă BimCraft în spate.
- **Semnare și platforme.** Instalatorele Windows și fișierul .dmg pentru macOS nu sunt semnate, deci SmartScreen arată {{ui:Mai multe informații}}, apoi {{ui:Rulați oricum}}, iar macOS cere clic dreapta, apoi {{ui:Deschisă}}. Versiunea pentru iPad și iPhone nu a fost reconstruită pentru 0.8.1.
- **Teste pe pagini reale.** Unele teste mai vechi ale BimCraft din browser încă eșuează pe pagina noastră de test, cum eșuau și înainte de 0.8.1.

Restul este în [Ce nu este încă realizat](topic:not-built-yet). Modificările din 0.7 sunt în [Noutăți în 0.7](topic:whats-new-0-7).
