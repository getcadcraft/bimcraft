---
title: Noutăți în 0.9 (anterioare)
summary: Forme de pereți, divizare, decalare, întindere și blocare pe linia de axă, niveluri sub nivelul solului, cotarea axelor și Măsurare pe plan, copii ale vizualizărilor cu stiluri de lucru și tabele de penițe, Raportare ca, export Collada și Google Earth, Scan to BIM, analiza vântului și a seismului, suplimente pentru tipărire cu rășină.
keywords: noutăți 0.9, versiune anterioară, noutăți, 0.9, note de lansare, forme de pereți, dreptunghi, poligon, arc, alegere linii, calchiere contur, decalare, îmbinare, întindere prin casetă, aliniere și blocare, divizare perete, interval, reunire, blocare pe linia de axă, crește de la, măsurare de la, adăugare nivel dedesubt, subsol, comanda level, cotarea axelor, măsurare pe plan, stil de lucru, copie a vizualizării, copie proprie, vizualizare legată, tabel de penițe, tipărire ca în ecran, raportare ca, tastați o scară, import svg, plasare în plan, plasare în model, collada, dae, kmz, google earth, scan to bim, sarcină de vânt, seism, element finit, panou documente, tipărire cu rășină, noutăți, what's new, note de lansare, jurnal de modificări, modificări, 0.8, 0.8.1, versiune, funcții noi, evacuare, persoane, cozi, acustică, reverberație, răspuns la impuls, inundație, vânt, cutremur, hazard, ciclu de viață, durată de viață, ids, etichete, tabele centralizatoare, mutare, aliniere, distribuire, imagine, fundal, scanare în pereți, amplasament din civilcraft, desene de panouri, structură, solar, pv, split, vrf, unitate fan coil, dimensionarea țevilor, tavă pentru cabluri, iluminare, beton, seism, comparare scanare, epsg, proiecție, documente, șablon, carbon, cost, energyplus, motor de randare, deschidere în, usd, glb, unreal, anulare, suplimente, pcf, simboluri, plante, calchiere, penițe, panglică, navigator de proiect, planșă
from: 816df7f8
---

Iată ce s-a schimbat în BimCraft 0.9, comparativ cu 0.8.1. Cele două teme mari sunt un instrument real pentru pereți și vizualizări care se comportă cum se așteaptă cei care vin de la marile programe BIM. În jurul lor vin exportul Collada, asistenții care pot plasa dispozitive electrice, Scan to BIM și lucrul la vânt, seism și elemente finite în fila {{ui:Analiză}}.

## Nou

### Pereți

- **Desenați forme întregi.** În {{ui:Desenare}}, deschideți {{ui:Forme}} (sau alegeți o formă din lista Formă a rândului Perete) pentru un dreptunghi, un dreptunghi rotit, un poligon cu 3 până la 64 de laturi, un arc după centru, un arc tangent, pereți pe linii alese sau pereți în jurul unei arii închise pe care dați clic în interior. Un dreptunghi sunt patru pereți cu patru colțuri îmbinate și un singur pas de anulare. Vezi [Forme de pereți, divizare, decalare, întindere și blocare](topic:wall-tools).
- **Setați înainte de desenare, modificați după.** Rândul Perete are {{ui:Decalare}} și {{ui:Îmbinare}} (debifați pentru a desena pereți independenți). După aceea folosiți {{ui:Decalare}}, {{ui:Întindere prin casetă}} și {{ui:Aliniere și blocare}} pe pereții desenați. Un perete mutat sau întins își păstrează ușile, ferestrele și cotele. Fiecare rețetă este un singur pas de anulare.
- **Tăiați pereții.** {{ui:Divizare}}, {{ui:Interval}}, {{ui:Capete libere}}, {{ui:Ștergere segment}} și {{ui:Reunire}} taie un perete printr-un clic sau acolo unde îl intersectează alt perete. O tăiere prin ușă este refuzată. Vezi [Forme de pereți, divizare, decalare, întindere și blocare](topic:wall-tools).
- **Blocați pereții pe liniile de axă.** Selectați un perete de-a lungul unei linii de axă și bifați {{ui:Blocare pe linia de axă}} în {{ui:Proprietăți}}. Cu instrumentul Axe activ, scrieți o distanță în {{ui:Mutare cu}} pentru o linie aleasă, iar pereții blocați urmează într-un singur pas de anulare.
- **Modelați un singur perete.** În {{ui:Proprietăți}} ale unui perete puteți lega partea de sus sau de jos de un acoperiș, un planșeu sau un tavan, puteți edita conturul de elevație, îl puteți înclina sau îi puteți tăia o deschidere fără ușă sau fereastră. Vezi [Forma peretelui](topic:wall-shape).
- **Lungimea arată ce capăt rămâne fix.** {{ui:Crește de la}} stabilește dacă rămân fixe începutul, sfârșitul sau centrul atunci când schimbați lungimea.
- **Lungimea și cota din plan se potrivesc.** {{ui:Măsurare de la}} (linia de centru, fața interioară sau fața exterioară) comandă atât câmpul Lungime, cât și cotele pereților din plan. Pornește de la linia de centru, deci cotele din plan citesc acum linia de centru, unde înainte citeau fața exterioară. Schimbați-l în rândul Perete, în {{ui:Proprietăți}} sau în {{ui:Setări}} › {{ui:BimCraft}} › {{ui:Pereți}}.

### Niveluri, axe și măsurare

- **Adăugați un nivel dedesubt.** {{ui:Adăugare nivel dedesubt}} din panoul {{ui:Niveluri}} adaugă un nivel sub cel mai de jos, la fel de înalt, la o cotă negativă (Level -1, Level -2). Nimic altceva nu se mută. {{ui:Adăugare niveluri…}} acceptă acum înălțimi negative. Scrierea LEVEL, LEVELS, STOREY sau STOREYS în linia de comandă deschide {{ui:Adăugare niveluri…}}, iar în meniuri și în filele panglicii există un buton {{ui:Niveluri}}. Vezi [Amplasamente, clădiri și niveluri](topic:site-building-and-levels).
- **Cotarea axelor pe plan.** Cu instrumentul {{ui:Axe}} activ, bifați {{ui:Dimensiuni}} pentru a desena distanța dintre liniile vecine și dimensiunea totală dincolo de cercuri, pe planul fiecărui nivel. Vezi [Cotarea unei axe](topic:grid-dimensions).
- **Măsurare pe plan.** {{ui:Măsurare}} din grupul {{ui:Desenare}} dă o distanță, cu diferențele X și Y, între două clicuri. Nimic nu se salvează în model. Vezi [Măsurare pe plan](topic:measure-on-the-plan).
- **Modificați mai multe coloane deodată.** Alegeți coloane împreună cu un perete, iar lista de alegere le grupează pe fiecare tip cu {{ui:Păstrați doar acestea}}. Un clic păstrează coloanele și arată câmpurile lor comune.
- **O singură unitate de afișare peste tot.** Coordonatele, măsurătorile, secțiunile, scările foilor, fila de sarcini și rezultate a cadrului și textul din Probleme urmează unitatea aleasă. Exporturile rămân în SI.

### Vizualizări, planșe și tipărire

- **Stil de lucru.** {{ui:Setări}} › {{ui:BimCraft}} › {{ui:Stil de lucru}} alege între fiecare vizualizare cu propriile adnotări și tabele de penițe sau partajarea lor. Vezi [Stil de lucru, vizualizări duplicate, penițe pe hârtie, Raportare ca și șabloane](topic:working-style).
- **Duplicați o vizualizare.** Planurile, planurile de tavan, indicațiile, elevațiile și secțiunile pot fi duplicate ca {{ui:Copie proprie}} sau {{ui:Legat}}; {{ui:Faceți copie proprie}} face una legată independentă. Vezi [Stil de lucru, vizualizări duplicate, penițe pe hârtie, Raportare ca și șabloane](topic:working-style).
- **Tipăriți ca în ecran, sau printr-un tabel de penițe.** Suprascrierile de peniță sunt păstrate în IFC împreună cu vizualizarea, iar planșele și PDF-urile le desenează ca ecranul. Același subiect acoperă tabelele de penițe.
- **Raportare ca.** {{ui:Raportare ca}} din {{ui:Proprietăți}} scrie o placă desenată ca drum, un perete ca panou sau un acoperiș ca rampă în IFC, ca clasă aleasă, și le numără astfel în tabele, Cantități, Găsire, Colorare după și Probleme.
- **Editați în elevații și secțiuni.** Desenați și mutați pereți, deschideri, niveluri, cote și note direct într-o elevație sau secțiune, cu dimensiunile proprii ale foilor și cu cartușe proprii. Vezi [Editare în elevații și secțiuni](topic:edit-in-elevations).
- **Planșe.** Fiecare planșă poate fi orizontală sau verticală. O casetă {{ui:Tastați o scară}} stă lângă lista de scări pe fiecare vizualizare plasată (1:64, 2:1, 1/4" = 1'). Puteți trage un desen plasat sau îl puteți deplasa cu tastele săgeată, iar {{ui:Formate…}} › {{ui:Import SVG…}} transformă propriul design de planșă într-un cartuș, cu câmpuri completate pe fiecare planșă.
- **Creditele bibliotecii pe o planșă.** Un set de desene cu elemente din bibliotecă primește un tabel de credite ale bibliotecii pe care îl puteți plasa pe orice planșă. Vezi [Credite de bibliotecă](topic:library-credits).

### Bibliotecă: plasarea

- **Plasarea urmează vizualizarea.** În vizualizarea Plan, Biblioteca arată {{ui:Plasare în plan}}; în 3D arată {{ui:Plasare în model}}; în Split arată un buton divizat cu {{ui:Plasare în plan}} ca acțiune principală. Ambele moduri scriu același element IFC. Puteți trage și un card din Bibliotecă pe plan sau pe vizualizarea 3D; cu creion sau deget, apăsați și țineți, apoi trageți. Vezi [Plasarea din Bibliotecă](topic:place-from-library).

### Fișiere și asistenți

- **Collada și Google Earth.** {{ui:Collada}} din bara de instrumente (meniul Fișier în stilurile de meniu) scrie un fișier .dae sau un .kmz plasat acolo unde este modelul pe hartă. Vezi [Exportul modelului ca Collada sau pentru Google Earth](topic:collada).
- **Asistenții pot plasa dispozitive electrice.** Asistentul conectat are unelte noi pentru a adăuga, lista, modifica și șterge dispozitive și pentru a seta corpurile de iluminat. Asistenții rămân dezactivați până îi activați în {{ui:Setări}}. Vezi [Lăsați un asistent AI să lucreze cu modelul](topic:assistants).
- **Scan to BIM (supliment).** Dezactivat implicit și are nevoie de suplimentul Point clouds. Propune planșee, pereți, uși și ferestre dintr-o scanare, cu abaterea măsurată pentru fiecare; acceptarea este un singur pas de anulare.

### Analiză

- **Date despre vânt și seism pe amplasament.** În fila {{ui:Analiză}}: sarcini de vânt după ASCE 7-10 sau 7-16 pentru o clădire rigidă închisă, cu o forță pe fiecare planșeu ca cazuri de încărcare, și date seismice ale amplasamentului cu o căutare USGS și spectrul de proiectare.
- **Urmărire structurală și elemente finite.** Verificări ale betonului după ACI 318-19, forțe laterale echivalente după ASCE 7-22, deriva pe niveluri, planșee și pereți ca plăci și combinații de încărcări din ASCE 7 și EN 1990. Propriul nostru motor de elemente finite face cochilii, tetraedre și analiză modală. Vezi [Verificarea elementelor din beton și calculul sarcinilor seismice](topic:concrete-and-seismic) și [Analiza cadrelor](topic:frame-analysis).

### Alte suplimente și documente

- **Iluminat interior (supliment).** Plasează corpuri de iluminat și scrie luxul ca numere în planul fiecărui nivel, cu o estimare a orbirii și un raport care poate fi tipărit.
- **Panoul Documente.** {{ui:Fișier}} › {{ui:Documente…}} are extragere pentru editare (check-out) și depunere (check-in) cu un fișier de blocare, litere de revizie, stări de lansare și istoric.
- **Regiuni și oțel.** Pachete sud-africane de desene și reglementări de construcții din suplimentul Regulations și 976 de dimensiuni britanice de oțel în tabelul comun de secțiuni.
- **Suplimente gratuite pentru tipărire cu rășină.** Slicer, suporturi și radier, test de expunere și formatele de fișier GOO, SL1, Chitubox și Anycubic, toate dezactivate implicit.

## În fiecare aplicație

- Trecerea cursorului peste un buton sau un control arată un sfat Bootstrap.
- Sfatul de pornire de pe o zonă de desen goală are un buton de închidere; BimCraft ține minte că a fost închis.
- Rândul de file al unui panou care nu încape acum derulează în loc să fie tăiat.
- Cu un document deschis, fila browserului arată „<document> - BimCraft | CadCraft”.
- În {{ui:Setări}} › {{ui:General}} › {{ui:Aranjare}} aranjamentele sunt o listă derulantă cu alegeri de două rânduri.
- Lista de limbi din {{ui:Setări}} oferă mai multe limbi decât în 0.8; limbile în afara engleză sunt ciorne făcute de mașină.

## Corectate

- **Mutarea funcționează pe scări,** și pe rampe, balustrade, planuri de acoperiș, dispozitive independente, imagini și trasee.
- **Tragerea unui perete nu mai deformează încăperea.** Mânerul central mută peretele pătrat față de el însuși, iar colțurile lui alunecă de-a lungul pereților îmbinați. Țineți apăsat {{key:Mod}} pentru vechea mutare liberă; {{ui:Aducere la unghi drept}} readuce unghiul de 90 de grade.
- **O schimbare de grosime sau tip într-un nod îmbinat** păstrează acum colțul închis la un L, un T, un nod cu trei pereți și lângă un perete curb.
- **Mutarea sau copierea unui grup de încăperi** păstrează pereții îmbinați din afara grupului îmbinați.
- **Refacerea păstrează identitatea unei cote de perete.**
- **Alegerea unui perete cu Desenare dezactivată** nu mai aruncă o eroare în Proprietăți.
- **Randarea trece la WebGL** când GPU-ul nu poate porni, în loc să se oprească.
- **Verificarea EnergyPlus** poate fi activată din nou.
- **Documente se deschide ca o casetă de dialog centrată.** {{key:Esc}}, butonul X sau un clic pe pagina estompată o închide.
- **Butoanele {{ui:Plan}}, {{ui:Split}} și {{ui:3D}} apar** de îndată ce un model este deschis, nu doar după ce Desenare a fost activată o dată.

## Limite reale

- Nimic nu a fost tipărit pe echipament real. Suporturile pentru rășină sunt noi și nedovedite.
- Rezultatele pentru vânt, seism, beton și elemente finite sunt ajutoare de verificare pentru un inginer, verificate față de formule închise, nu față de o clădire reală.
- Scan to BIM a fost testat pe o clădire sintetică, nu pe o scanare reală, și găsește doar încăperi rectilinii.
- Collada nu a fost deschis aici în Blender sau Google Earth.
- Estimarea iluminatului este verificată față de propria noastră trasare, nu față de alte programe de iluminat.
- Cifrele sud-africane nu sunt verificate.
- Stilurile de îmbinare a pereților (buted, la 45 de grade, tăiat pătrat) și prioritatea straturilor nu sunt realizate; colțurile sunt la 45 de grade.
- Limbile în afara engleză sunt ciorne făcute de mașină.

Restul se află în [Ce este încă nerealizat](topic:not-built-yet). Modificările anterioare sunt în notele pentru 0.8 și 0.8.1 de mai jos.

## Anterioare: 0.8 și 0.8.1

Iată ce s-a schimbat în BimCraft 0.8 (2026-11-01) și 0.8.1 (2026-11-02), comparativ cu 0.7. BimCraft poate acum să răspundă la întrebări despre o clădire și să o testeze, cu persoane, sunet, apă, vânt și cutremure, și să o deseneze cu mai multe unelte; 0.8.1 este o versiune de corectări.

### Nou

**Testarea clădirii**

- **Persoane în clădire.** Secțiunea {{ui:Persoane în clădire}} din panoul din stânga trece o evacuare sau o zi obișnuită de sosiri prin încăperile, ușile și scările modelului. Vedeți cozile acolo unde clădirea se îngustează, cel mai lung drum până la o ieșire din fiecare încăpere și cât durează ultima persoană. Bifați {{ui:Închisă}} pentru o ușă ca să vedeți ce se schimbă și bifați {{ui:Afișare persoane în vizualizarea 3D}} ca să urmăriți persoanele în mers. Constatările merg la Probleme. Un model grosier al mulțimii pentru decizii de proiectare, nu un certificat de siguranță la incendiu. Vezi [Plimbarea persoanelor prin clădire](topic:people-in-the-building).
- **Acustica încăperilor, și auzirea ei.** Secțiunea {{ui:Acustica încăperilor}} dă timpul de reverberație al fiecărei încăperi pe benzi de octavă (Sabine și Eyring), din dimensiunea ei și din finisajele alese, iar cu o țintă proprie spune cât de multă absorbție ar atinge-o. {{ui:Redați în această cameră}} redă o voce, o bătaie din palme, note ciupite sau un fișier sonor propriu printr-un răspuns la impuls calculat pentru încăpere. Valorile de absorbție sunt valori publicate tipice, pe care să le înlocuiți. Vezi [Acustica încăperilor](topic:room-acoustics).
- **Redarea inundației, a vântului și a cutremurului.** {{ui:Redare a hazardului}} redă apa care urcă prin încăperi, presiunea vântului pe fiecare etaj și un cutremur care zguduie etajele, pe un plan sau o elevație, cu un glisor de timp. Modele simple, cu ipotezele lor pe panou; nu este o verificare a normativului. Vezi [Redarea unei inundații, a vântului sau a unui cutremur](topic:hazard-playback).
- **Ce se uzează în cincizeci de ani.** {{ui:Vedere pe ciclul de viață}} listează ferestrele, ușile, finisajele și acoperișul, fiecare cu o durată de viață, anii în care sunt înlocuite și, când introduceți un cost pe unitate, costul pe an și valoarea lui actuală. {{ui:Salvare program (CSV)}} îl scrie într-un fișier. Duratele de viață sunt cifre de planificare. Vezi [Ce se uzează în cincizeci de ani](topic:life-cycle-view).
- **Verificări ale betonului și ale seismului.** Blocurile {{ui:Elemente din beton}} și {{ui:Încărcări seismice}} din fila {{ui:Analiză}} verifică grinzi și stâlpi din beton după ACI 318-19 și calculează forțe laterale echivalente după ASCE 7-22 pe planșee rigide, cu deriva pe etaje. Pentru verificare de către un inginer. Vezi [Verificarea elementelor din beton și calculul sarcinilor seismice](topic:concrete-and-seismic).

**Verificare și raportare**

- **Verificare față de un IDS.** Încărcați fișierul `.ids` primit de la beneficiar și vedeți în Probleme fiecare element care nu îl respectă, înainte de a livra IFC-ul. Deschideți {{ui:Verificare față de un IDS}} sub {{ui:Verificări ale modelului}}. Vezi [Verificarea unui model față de IDS-ul beneficiarului](topic:check-against-ids).
- **Etichete și tabele centralizatoare.** Definiți propriile etichete, setați-le pe multe elemente deodată și creați tabele centralizatoare ale căror coloane, filtre și grupuri le citesc; etichetele se păstrează în IFC. Vezi [Etichete și tabele centralizatoare](topic:tags-and-schedules).
- **Documente din model.** {{ui:Documente din model}} completează un șablon de caiet de sarcini din IFC-ul deschis și îl salvează ca PDF, document Word sau Markdown. Vezi [Documente din model](topic:documents-from-the-model).
- **Compararea unei scanări cu modelul.** Cu un nor de puncte deschis, {{ui:Comparare}} judecă fiecare element ca executat, parțial executat, lipsă sau neatins și arată procentul executat. Vezi [Compararea unei scanări cu modelul](topic:compare-scan-with-model).
- **Carbon și cost.** Panoul Carbon adună carbonul încorporat dintr-un tabel de factori pe care îl puteți edita, iar panoul Cost împarte prețurile pe programul 4D. Factorii care vin cu BimCraft sunt generici și marcați ca neverificați. Vezi [Carbon încorporat și cost](topic:embodied-carbon-and-5d-cost).
- **Orice proiecție de hartă.** {{ui:Măsurare}} › {{ui:Sistem de coordonate…}} primește un număr EPSG, o zonă UTM, un nume sau propria definiție de proiecție. Vezi [Georeferențiere cu orice proiecție](topic:georeference-any-projection).

**Desenare și editare**

- **Mutare, aliniere și distribuire.** Sub {{ui:Build}}; {{key:Shift+M}} pornește Mutarea (simplu {{key:M}} rămâne Măsurare). Mutarea copiază din mers cu {{key:C}}, fiecare pas este o anulare, iar funcția circulă într-o sesiune Live TeamWork. Vezi [Mutare, copiere, aliniere și distribuire](topic:move-align-distribute).
- **Imagini sub plan.** {{ui:Build}} › {{ui:Imagine}} plasează un PNG, JPEG sau WebP sub planul unui nivel sau pe un plan vertical. Stabiliți scara prin două puncte și mutați, rotiți, estompați și blocați imaginea. O zonă copiată în MarkupCraft se lipește la scara foii ei. Vezi [Punerea unei imagini sub plan](topic:pictures-as-backgrounds).
- **Pereți dintr-o scanare.** Cu o scanare deschisă, pereții, ușile și încăperile apar ca propuneri pe care le păstrați sau le respingeți pe rând, într-un singur pas de anulare. Se găsesc doar pereții în două direcții perpendiculare. Vezi [Transformarea unei scanări în pereți](topic:scan-to-walls).
- **Calchiere, penițe și schițare scară.** {{ui:Calchiere}} arată alt nivel punctat sub plan, {{ui:Penițe}} dă pereților, ușilor și ferestrelor propria grosime de linie într-o vizualizare, iar {{ui:Schițare scară}} transformă o linie de mers într-o scară. Se deschide o plasă Wavefront OBJ. Vezi [Calchierea unui nivel, penițe și o scară dintr-o schiță](topic:trace-pens-stairs-obj).
- **Clădiri în jurul unei adrese.** Clădirile și parcela găsite de Address to site din CivilCraft apar ca sugestii; bifați cele pe care le adăugați. Vezi [Începerea de la amplasamentul din CivilCraft](topic:site-from-civilcraft).
- **Desene de panouri.** {{ui:Build}} › {{ui:Desene de panouri}} încadrează pereți, planșee și acoperișuri în lemn sau oțel subțire și salvează o listă de debitare ca CSV și desene de execuție ca PDF. Valori de pornire, nu un proiect structural. Vezi [Desene de panouri](topic:panel-drawings).
- **Paleta de simboluri și plantele.** {{ui:Build}} › {{ui:Paletă de simboluri}} găsește simboluri electrice și sanitare după nume; sursa {{ui:Plante}} din {{ui:Bibliotecă}} listează aproximativ 400 de plante cu simboluri în plan. Vezi [Paleta de simboluri](topic:symbol-palette) și [Plasarea unei plante](topic:plant-list).

**Țevi, canale și energie**

- **Split, VRF și unități fan coil.** Unități interioare și exterioare cu racordurile lor și seturi de linii dimensionate dintr-un tabel de valori tipice exemplificative, pe care le puteți modifica. Vezi [Split, VRF și unități fan coil](topic:split-vrf-fan-coils).
- **Calcule.** Panoul Calcule verifică dimensiunile țevilor și canalelor de alimentare cu pierdere de presiune, trece cablurile prin tăvi și tuburi și arată gradul lor de umplere, iar iluminarea o calculează din fișiere IES sau EULUMDAT. Valorile implicite sunt etichetate; introduceți valorile normativului propriu. Vezi [Calcule pentru țevi, canale, cabluri și iluminat](topic:mep-calculations).
- **Fișiere PCF.** **Export PCF** din instrumentul Țeavă scrie traseele pentru programe de tensiuni în țevi și izometrice, iar un fișier PCF citit înapoi desenează țeava lui. Vezi [Fișiere cu componente de țevi](topic:piping-pcf).
- **Fotovoltaice.** Montați câmpuri pe acoperișuri sau pe sol, calculați umbrirea din model, estimați energia anuală, verificați șirurile și obțineți date pentru schema monofilară. Modulul de pornire și pierderile sunt generice. Vezi [Fotovoltaice](topic:solar-pv).
- **Fișier EnergyPlus.** Panoul Verificare cu EnergyPlus scrie modelul ca IDF pentru a fi rulat în propriul EnergyPlus. Rularea în browser are nevoie de o versiune pe care o găzduiți singuri și a cărei adresă o introduceți; BimCraft nu o include. Vezi [Verificarea încălzirii și răcirii cu EnergyPlus](topic:check-with-energyplus).

**Imagini și fișiere**

- **Alegerea motorului de randare.** {{ui:Randare}} are o alegere {{ui:Motor}}. Cele două motoare încorporate ale noastre (Fast și Path tracer) rămân implicite. **Deschidere în** salvează scena ca fișier USD sau glTF, iar un dosar de proiect Unreal ca .zip; în CadCraft Studio un supliment poate adăuga un motor. Modulul Unreal care deschide proiectul nu este lansat. Vezi [Alegerea programului care desenează imaginea](topic:render-engines).
- **Anulare în Studio.** În CadCraft Studio, BimCraft spune Studio-ului fiecare pas terminat, ca Studio să poată anula ultimul pas în fereastra folosită ultima dată. Vezi [Anularea între aplicații](topic:undo-across-apps).
- **Suplimente în fișier.** Un IFC înregistrează ce suplimente au scris în el și oferă pe cele care lipsesc când este deschis. Vezi [Suplimente în fișier](topic:add-ons-in-your-file).

**În fiecare aplicație**

- **Conectarea AI-ului.** Propriul asistent poate conduce BimCraft prin conexiunea Studio și poate răspunde la întrebări despre model, de exemplu ce încăperi sunt sub o anumită suprafață. Studio nu are AI propriu. Vezi [Lăsați un asistent AI să lucreze cu modelul](topic:assistants).
- **Rânduri ale barei de instrumente.** {{ui:Setări}} › {{ui:General}} › {{ui:Rânduri ale barei de instrumente}} oferă Înfășurare, 2 rânduri sau 1 rând; Înfășurarea rămâne implicită.
- **Dispozitive de intrare.** Setările pentru touchpad, creion, mouse 3D, controler și MIDI sunt comune tuturor aplicațiilor.
- **Probleme și Live.** Panoul de avertismente și sesiunile Live funcționează ca înainte, iar verificările noi de mai sus alimentează Probleme.
- **Limbi.** 54 de limbi, dintre care zece noi. Cele în afara englezei sunt ciorne făcute de mașină, încă necitite de un vorbitor nativ; subiectele de ajutor sunt în mare parte în engleză.

### Corectate în 0.8.1

- **Panglică și aranjamentul navigatorului de proiect.** Insert › Import CAD, Insert › Image și Manage › Project Units spuneau „Încă nerealizat în BimCraft”. Image deschide acum instrumentul Imagine, Import CAD deschide {{ui:Build}} › {{ui:Dintr-un desen…}} (DWG, DXF, PDF sau scanare), iar Project Units deschide {{ui:Setări}} › {{ui:Global}} › {{ui:Unități}}. Move și Align rulează instrumentele Mutare și Aliniere, Level deschide {{ui:Adăugare niveluri…}}, Phases deschide secțiunea Faze de renovare, iar Materials deschide biblioteca de materiale.
- **Secțiunea de clase DWG.** Era citită ca tip greșit; corectat în BimCraft și în celelalte aplicații care citesc DWG.
- **Limba din timpul rulării.** Studio și edițiile împachetate pot schimba acum limba fără repornire. Nu este încă testat pe toate platformele; semnalați dacă limba nu se schimbă.
- **Scriptul pentru pachetul Archicad.** `archicad_bundle.py`, o descărcare separată, găsește acum calea Archicad, urmărește dosarul până la 20 de secunde și reîncearcă lângă pachet.

### Încă nu este în această versiune

- **Ajutoare de siguranță și proiectare.** Persoane în clădire nu are o limită a distanței de parcurs dintr-un cod de construcții (limita se introduce) și nu a fost verificată manual pe un plan real. Cifrele de acustică, ciclu de viață și hazard sunt valori de planificare, nu o verificare a normativului.
- **Scenarii climatice și EnergyPlus.** Nu există scenarii climatice încorporate: puteți încărca un fișier de scenariu pentru rularea inundației. Rularea EnergyPlus în browser nu face parte din această versiune.
- **Aranjarea panglicii.** Material Takeoff rămâne „Încă nerealizat”, pentru că BimCraft nu are o listă cantitativă de materiale, iar alte 54 de unelte estompate din panglică nu au încă un instrument BimCraft în spate.
- **Semnare și platforme.** Programele de instalare Windows și fișierul .dmg macOS nu sunt semnate, așa că SmartScreen arată {{ui:Informații suplimentare}}, apoi {{ui:Rulați oricum}}, iar macOS cere clic dreapta, apoi {{ui:Deschidere}}. Versiunea pentru iPad și iPhone nu a fost reconstruită pentru 0.8.1.
- **Teste pe pagini reale.** Unele teste mai vechi ale browserului BimCraft încă eșuează pe pagina noastră de test, ca și înainte de 0.8.1.

Restul se află în [Ce este încă nerealizat](topic:not-built-yet). Modificările anterioare sunt în [Noutăți în 0.7](topic:whats-new-0-7).
