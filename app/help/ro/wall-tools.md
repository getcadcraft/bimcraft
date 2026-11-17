---
title: Forme de pereți, divizare, decalare, întindere și blocare
summary: Desenați pereți ca dreptunghi, poligon sau arc, pe linii existente ori în jurul unui contur; împărțiți-i, scoateți o bucată, decalați, întindeți cu o casetă și aliniați-i și blocați-i unii de alții, de o cotă sau de o axă. Fiecare modificare păstrează pereții uniți și este un singur pas de anulare.
keywords: schimbare tip, retipizare, ce s-a mutat, lod, nivel de dezvoltare, stil de îmbinare, mitră, cap la cap, tăiere pătrată, îmbinări de pereți, următorul, trece prin, interzicere îmbinare, permitere îmbinare, prioritate strat, miez, prioritate, joncțiune, dreptunghi, dreptunghi rotit, poligon, înscris, circumscris, arc, centru, arc tangent, alegere linii, calchiere, contur, baghetă magică, divizare, divizare cu interval, interval, ștergere segment, reunire, decalare, copiere, întindere prin casetă, casetă de selecție, întindere, aliniere, blocare, lacăt, constrângere, blocare cotă, editare cotă, axe, blocare pe axe, mutare linie de axă, decalare de plasare, îmbinare oprită, liber, crește de la, măsurare de la, linie centrală, față interioară, față exterioară, dezlegare, alt
from: 5b7d2f75
---

## Ce veți face

Creați și modificați pereți cu rețetele instrumentului Perete. Fiecare se termină la fel ca desenarea unui perete după colțuri: colțurile se îmbină singure, îmbinările sunt salvate în fișier, iar întreaga modificare este un pas în **Modificări**, pe care {{ui:Anulare}} îl ia înapoi. Pereții își păstrează identitatea: un perete împărțit, decalat sau întins rămâne același perete, cu ușile, ferestrele și cotele lui.

## Desenați un dreptunghi, poligon sau arc

Cu {{ui:Desenare}} activ, deschideți {{ui:Forme}} din grupul Desenare (sau alegeți o formă din lista **Formă** a rândului Perete). Rândul Perete arată tipul peretelui, referința de desen, partea exterioară și partea de sus, ca pentru instrumentul {{ui:Perete}}. Apoi faceți clic sau scrieți punctele (x,y · @dx,dy · @lungime<unghi · o lungime pe direcția cursorului):

- **Dreptunghi**: două colțuri opuse. Patru pereți, patru îmbinări de colț, un singur pas.
- **Dreptunghi rotit**: unde încep și se termină prima latură (asta îi stabilește direcția și lungimea), apoi un al treilea clic pentru cealaltă latură.
- **Poligon**: centrul, apoi un colț (**Înscris**) sau mijlocul unei laturi (**Circumscris**). Setați întâi **Laturi** (între 3 și 64).
- **Arc, centru**: centrul, începutul (asta stabilește raza), sfârșitul. **Sens**: drumul mai scurt, în sens antiorar sau în sens orar. O măturare pe trei sferturi dintr-un cerc este desenată ca doi pereți.
- **Arc tangent**: faceți clic pe capătul unui perete, apoi unde se termină arcul. Arcul pleacă din capătul peretelui în direcția proprie a peretelui.

Un contur închis își are exteriorul spre afară. Desenat pe **Față exterioară** sau **Față interioară**, fața pe care faceți clic este cea care rămâne pe loc.

## Pereți pe linii deja existente

- **Alegere linii**: faceți clic pe o linie și un perete merge pe ea. Apăsați {{key:Tab}} (sau țineți {{key:Shift}} în timp ce faceți clic) ca să luați tot lanțul de linii unite cap la cap. Liniile sunt liniile de desen ale acestei vederi, referința de calchiere și liniile de axe.
- **Contur prin calchiere**: faceți clic înăuntrul unei zone închise de aceste linii sau de pereți. Pereții merg în jurul celei mai mici zone din jurul clicului.

## Stabiliți înainte de desenare: decalare și îmbinare

Rândul Perete are încă două câmpuri, folosite de instrumentul {{ui:Perete}} și de forme:

- **Decalare**: pereții sunt desenați la această distanță de linia pe care faceți clic: + spre stânga ei, − spre dreapta ei, văzut în direcția în care desenați.
- **Îmbinare**: debifați ca să desenați pereți liberi. Capetele lor primesc **Interzicere îmbinare** și rămân libere oriunde merg (vezi [Modificarea unui perete](topic:change-a-wall-or-door)).

## Divizare, scoaterea unei bucăți, reunire

Deschideți {{ui:Pereți}} din grupul Editare.

- **Divizare**: faceți clic pe un perete acolo unde trebuie tăiat sau scrieți distanța de la început. Lângă un perete care îl traversează, tăietura se fixează acolo unde se întâlnesc. Cele două părți au același tip și rămân unite cap la cap. **Interval** lasă un spațiu de această lungime, centrat pe tăietură. **Capete libere** dă în schimb capetelor tăieturii **Interzicere îmbinare** (Setări › BimCraft › Pereți › **Când un perete este divizat** stabilește care este bifată la început). O ușă sau o fereastră merge cu partea în care stă; o tăietură prin ea este refuzată.
- **Ștergere segment**: faceți clic unde începe bucata și unde se termină. O ușă din bucată merge odată cu ea.
- **Reunire**: faceți clic pe cele două părți ale unui perete (în linie, același tip). Devin din nou un singur perete, primul pe care l-ați ales, cu ușile din ambele.

## Stil de îmbinare, interzicere îmbinare, prioritate de strat

Deschideți {{ui:Pereți}} din grupul Editare.

- **Stil de îmbinare**: faceți clic pe un colț unde se termină doi pereți drepți. Fiecare clic trece la stilul următor: **Mitră** (ambele capete tăiate pe linia de la colțul interior la cel exterior, cum începe fiecare colț), **Cap la cap** (unul trece până la fața exterioară a celuilalt, care se oprește lângă latura lui) și **Tăiere pătrată** (ca la cap la cap, dar peretele care trece se termină drept; la un unghi drept arată ca la cap la cap). **Următorul** sau {{key:Tab}} face ca celălalt perete să fie cel care trece. Lista **Stil** din bară arată colțul pe care ați făcut clic ultima dată. Aceleași două alegeri sunt în **Proprietăți** ale unui perete: **Stil de îmbinare la început / la sfârșit** și **Trece prin**. Fiecare modificare este un pas în **Modificări**. Planul, corpul 3D, încăperile și cantitățile urmează.
- La un T, peretele a cărui latură este atinsă trece întotdeauna. Unde doi pereți se intersectează, un clic (sau **Continuu unde se intersectează** în Proprietăți) spune care dintre ei este continuu; asta decide ce straturi ale peretelui sunt desenate prin intersecție.
- Stilul aparține îmbinării: rămâne când pereții se mută și dispare doar când dispare îmbinarea (peretele este șters, divizat la acel capăt sau capătul primește Interzicere îmbinare). Un colț cu un perete curb, sau unde se întâlnesc trei sau mai mulți pereți, păstrează mitra. Un colt mai ascuțit de aproximativ 30 de grade, sau mai plat de aproximativ 150, cade și el la mitră.
- **Interzicere îmbinare**: faceți clic lângă un capăt de perete. Capătul este eliberat: nu se îmbină cu nimic, oriunde merge peretele, până faceți din nou clic pe el. Capetele libere sunt marcate cu o cruce cât timp instrumentul este activ. Același comutator este **Îmbinare la început / Îmbinare la sfârșit** în Proprietăți.
- **Prioritate strat**: unde se întâlnesc pereți cu straturi, stratul mai puternic taie stratul mai slab, astfel miezurile se îmbină cu miezuri, iar un finisaj se oprește lângă stratul mai puternic. Fiecare strat are o prioritate de la 0 la 999; implicit provine din funcția stratului (structură 800, substrat 600, izolație 400, membrană 300, finisaj 200, o cavitate 100). **Prioritate strat** deschide alcătuirea peretelui, unde coloana **Prioritate** stabilește numărul propriu al unui strat. Straturile cu prioritate egală se opresc unul lângă altul, iar o linie este desenată doar între materiale diferite. Se vede pe planuri cu detaliu **Mediu** sau **Fin**, în colțuri, joncțiuni T și intersecții ale doi pereți drepți; Setări › BimCraft › Pereți › **Curăță straturile de perete acolo unde se întâlnesc pereții** o oprește. Schimbă doar ce este desenat în interiorul pereților: conturul și cantitățile pereților rămân cum le dă stilul de îmbinare.

## Schimbarea tipului multor pereți

Trecerea de la planuri de schiță la desene de lucru este mai ales o schimbare de tip: un perete generic devine alcătuirea specifică. Nu desenați nimic din nou.

1. Alegeți pereții (unul, sau mai mulți cu {{key:Ctrl}} sau {{key:Shift}}).
2. În **Proprietăți**, apăsați **Schimbare tip…** sub Tip de perete (sau deschideți {{ui:Pereți}} din grupul Editare și alegeți {{ui:Schimbare tip}}, care deschide aceeași listă). Lista se deschide în **Proprietăți**, în blocul propriu al peretelui (sau al pereților) aleși. Nu este o casetă de dialog și nu acoperă nimic: planul, vederea 3D și alegerea continuă să funcționeze cât timp este deschisă, iar lista urmează pereții pe care îi alegeți.
3. Lista arată fiecare tip de perete cu grosimea și eticheta LOD, de exemplu „Perete generic 230, LOD 200” și „230 cărămidă ceramică, tencuită pe ambele fețe, LOD 300”. Tipurile pe care le au acum pereții aleși sunt marcate. Scrieți în **Caută** ca să restrângeți: un nume, o grosime sau `lod 300`.
4. Faceți clic pe un tip. Fiecare perete ales se schimbă în el într-un singur pas, deci o singură {{ui:Anulare}} ia înapoi întreaga schimbare. Micul x închide lista.

Fiecare perete își păstrează linia de referință. Un perete pe linia lui centrală crește în ambele părți; un perete a cărui linie de referință este o față păstrează acea față și crește în cealaltă parte, iar pereții uniți cu el urmează la colțuri. Pereții blocați de un perete schimbat urmează și ei. Ușile și ferestrele rămân în pereții lor și sunt tăiate din nou pentru noua grosime.

După schimbare, lista arată **Ce s-a mutat**: câți pereți s-au schimbat și în ce, grosimea și LOD-ul înainte și după, pereții care s-au mutat lateral ca să-și păstreze linia de referință, pereții uniți care au urmat, ușile și ferestrele reintroduse în perete și fiecare încăpere a cărei suprafață s-a schimbat, cu suprafața ei înainte și după. Bara de stare spune același lucru pe un rând. Raportul doar informează; nu oprește niciodată o schimbare. Alegerea unui tip în **Proprietăți › Tip de perete** face aceeași schimbare și dă același raport.

Două lucruri opresc o schimbare, iar atunci nimic nu este modificat: o ușă sau o fereastră care nu ar mai încăpea în perete (un perete se scurtează acolo unde urmează un colț; micșorați mai întâi ușa sau mutați-o departe de colț) și o blocare pe care schimbarea ar rupe-o (un perete blocat de o axă prin linia lui centrală, în timp ce linia de referință este o față; deblocați-l sau puneți linia de referință înapoi pe linia centrală).

Un asistent conectat la BimCraft poate face aceeași schimbare (instrumentele `wall_types_list` și `walls_swap_type`) și primește același raport înapoi.

Eticheta LOD a unui tip se stabilește în editorul de alcătuiri de pereți: vezi [Alcătuiri de pereți](topic:wall-assemblies).

## Decalare și întindere prin casetă

- **Decalare**: faceți clic pe un perete, apoi pe latura spre care să-l mutați, sau scrieți distanța. Peretele se mută perpendicular pe el însuși, iar pereții uniți cu el se întind. Bifați **Copiere** pentru o copie paralelă în schimb (nu este unită cu originalul).
- **Întindere prin casetă**: faceți clic pe două colțuri ale unei casete, apoi pe un punct de la care să mutați și pe un punct până la care să mutați. Fiecare capăt de perete din casetă se mută; un perete complet din casetă se mută, iar pereții care se opresc în el vin și ei; pereții care traversează caseta se întind.

## Editarea unei cote și blocarea ei

Alegeți o cotă de referință ({{ui:Adnotare}} › {{ui:Cotă de referință}}) și scrieți valoarea ei în **Proprietăți**: peretele celei de-a doua referințe se mută perpendicular pe el însuși, prima referință rămâne pe loc, iar pereții uniți urmează. Bifați **Blocare cotă** ca să păstrați valoarea: când oricare dintre pereți se mută mai târziu, celălalt urmează. O valoare blocată nu poate fi suprascrisă până nu o debifați.

## Aliniere și blocare

**Aliniere și blocare**: faceți clic pe o față a peretelui (sau pe linia centrală, aproape de mijlocul peretelui) ori pe o axă, apoi pe fața peretelui care trebuie adusă pe acea linie. Peretele se mută perpendicular pe ea. Bifați întâi **Blocare** ca să rămână aliniați: pe plan apare un lacăt, iar când un perete se mută, celălalt urmează. **Proprietăți** ale unui perete listează **Blocările** lui, fiecare cu **Deblocare**.

## Blocarea pereților de liniile de axă

Alegeți un perete care merge de-a lungul unei linii de axă, sau al cărui capăt se află pe una, și alegeți linia de axă în **Proprietăți** › **Blocare pe linia de axă**. Apoi alegeți linia de axă cu instrumentul {{ui:Axe}} și scrieți o distanță în {{ui:Mutare cu}}: linia se mută perpendicular pe ea însăși, iar pereții blocați de ea urmează, împreună cu pereții uniți, într-un singur pas. Un perete blocat de o linie de axă nu poate fi scos de pe ea singur (mutați linia sau deblocați peretele); o linie de axă rotită astfel încât un perete blocat să nu mai poată rămâne perpendicular pe ea este refuzată. Redenumirea liniei păstrează blocarea; ștergerea ei elimină blocarea.

## Lungime: ce parte rămâne și ce măsoară

- **Crește de la** (Proprietăți ale unui perete): **Începutul rămâne** (capătul se mută), **Sfârșitul rămâne** (începutul se mută) sau **Centrul rămâne** (ambele capete se mută cu jumătate). Cât timp scrieți Lungimea, planul marchează punctul care rămâne. Peretele unit la capătul care se mută se mută perpendicular pe el însuși și își păstrează unghiul.
- **Măsurare de la** (lângă Dimensiuni pe plan, în Proprietăți și în Setări › BimCraft › Pereți): linia centrală, fața interioară sau fața exterioară. Câmpul Lungime și cotele peretelui de pe plan citesc același lucru, deci se potrivesc. Începe pe linia centrală.
- Ca să mutați un perete liber de îmbinările lui (ele se rup, peretele își păstrează identitatea), țineți apăsat {{key:Alt}} în timp ce trageți mânerul din mijloc.

## Bine de știut

- Aceste rețete sunt cele din specificația instrumentului de pereți (paginile 4 până la 9). Stilul de îmbinare și prioritatea de strat sunt construite pentru pereți drepți; prioritatea de strat apare doar pe plan (nu în secțiuni, elevații sau 3D, unde un perete este un singur corp), nu în noduri cu trei sau mai mulți pereți, iar membranele nu sunt preluate.
- Stilul unei îmbinări este salvat în înregistrarea ei din fișierul IFC (numele `IfcRelConnectsPathElements`, de exemplu `CadCraft join L butt 1`), așa că alte programe citesc în continuare îmbinarea, iar un fișier mai vechi se deschide cu mitre.
- Blocările și îmbinările sunt salvate în fișierul IFC (blocările ca `CadCraft_WallHolds` pe proiect, îmbinările ca `IfcRelConnectsPathElements`), deci există când redeschideți fișierul.
- Pereții curbi pot fi divizați, reuniți și li se poate scoate o bucată; nu sunt decalați sau blocați.
- Vezi și [Desenarea pereților](topic:draw-walls), [Modificarea unui perete, ușă sau fereastră](topic:change-a-wall-or-door) și [Forma unui perete](topic:wall-shape).
