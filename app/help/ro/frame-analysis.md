---
title: Analizați cadrul structural
summary: Forțele, reacțiunile și deformațiile grinzilor, stâlpilor și contravântuirilor modelului sub cazurile și combinațiile de încărcări pe care le setați, păstrate în IFC. O unealtă de analiză, nu o verificare la normă.
keywords: analiză, unități, picioare și inci, unitate de afișare, analiză structurală, verificări de proiectare, utilizare, laminat, sudat, AISC 360, EN 1993-1-1, analiză de cadru, model analitic, metoda rigidității, încărcări, caz de încărcare, combinație, încărcare permanentă, încărcare utilă, greutate proprie, reacțiuni, moment încovoietor, forță tăietoare, forță axială, săgeată, formă deformată, reazeme, articulat, încastrat, eliberare, raport, pdf, csv, craftscript, frame3d, grinzi, stâlpi, bare
from: b93b58c4
---

Fila {{ui:Analysis}} din dreapta găsește forțele din grinzile, stâlpii și contravântuirile modelului deschis, reacțiunile din bazele stâlpilor și cât se încovoaie barele, pentru încărcările pe care le dați.

:::warning
Este o **unealtă de analiză, nu o verificare la normă**. Analiza nu aplică niciun normativ de proiectare: nu dimensionează barele, nu verifică capacitățile și nu alege coeficienții de siguranță. Un inginer verifică modelul analitic, încărcările și reazemele și decide ce înseamnă cifrele. Blocul {{ui:Design checks}} de mai jos verifică profilele metalice laminate în I la AISC 360 sau EN 1993-1-1; este o unealtă de ajutor până când un inginer le revizuiește: vezi [Verificări de proiectare](topic:frame-analysis#design-checks).
:::

## Rulați-o

1. Deschideți un model IFC și fila {{ui:Analysis}}.
2. Selectați una sau mai multe grinzi, stâlpi sau contravântuiri în vizualizare, alegeți un {{ui:Case}}, o {{ui:Load}} și o {{ui:Direction}}, scrieți valoarea și apăsați {{ui:Add load}}: kN/m pentru o încărcare întinsă pe o bară, kN pentru o forță concentrată.
3. Apăsați {{ui:Run analysis}}.

Tabelul listează forța axială maximă, forțele tăietoare, momentele încovoietoare, torsiunea și deplasarea fiecărei bare; faceți clic pe numele unei bare ca s-o selectați în vizualizare. Dedesubt sunt reacțiunile. {{ui:On the model}} desenează forma deformată sau o acțiune ca diagramă lângă fiecare bară. Rezultatele devin învechite când se schimbă modelul: rulați-le din nou.

Fiecare încărcare și setare este o singură modificare în lista {{ui:Changes}}: {{ui:Undo}} o anulează, iar {{ui:Save as IFC}} le păstrează în fișier (proprietatea de proiect `CadCraft_Analysis`), astfel încât, la următoarea deschidere a modelului aici, încărcările sunt tot acolo.

## Cum se face modelul analitic

- Fiecare IfcBeam, IfcColumn și IfcMember a cărui formă este o singură extrudare dreaptă devine o bară pe linia centrului de greutate al secțiunii sale. Proprietățile secțiunii vin din profil: forme în I, U, L și T, dreptunghiuri și tuburi, cercuri și tuburi rotunde sau orice contur închis (atunci constanta de torsiune este o estimare, spusă în raport). Orice altceva este lăsat deoparte și numărat.
- Într-un model, grinzile se opresc la fața unui stâlp și stau sub planșeu. Fiecare capăt de bară este mutat pe propria lui linie, pe axa barei în care se leagă, când acea axă este aproape (în limita mărimii secțiunilor), iar acea bară se împarte acolo. Raportul spune câte capete au fost mutate.
- **Bazele stâlpilor** pe care nu se sprijină nimic sunt reazeme: încastrate (la început) sau articulate (ținute pe loc și împotriva răsucirii, libere să se rotească).
- **Capetele grinzilor** sunt rigide sau articulate prin regula {{ui:Beam ends with no connection}}; **contravântuirile** (IfcMember) sunt articulate la ambele capete. Selectați o bară ca s-o dați capetele sau baza unui stâlp o regulă proprie.
- Materiale după nume: beton (E = 30 GPa), lemn (E = 11 GPa), altfel oțel (E = 200 GPa).

Dacă structura se poate mișca fără să încovoaie nimic (un mecanism), rularea se oprește și spune unde și în ce direcție.

## Cazuri, combinații, semne și raport

Analiza pornește cu **Permanentă** (greutate proprie), **Utilă** și **Permanentă + utilă**; adăugați cazuri și combinații cu coeficienții pe care îi cere normativul dvs. N > 0 este întindere; My > 0 pune latura −z locală a barei în întindere (o grindă care se lasă sub greutate are My > 0). {{ui:Report (PDF)}} și {{ui:Report (CSV)}} conțin ipotezele, secțiunile, cazurile, reacțiunile cu sumele lor, forțele din bare, deplasările și o anvelopă. {{ui:Export as CraftScript}} scrie cadrul pentru spațiul de lucru Script al PartCraft, unde funcția din bibliotecă `frame3d` îl rezolvă în cod lizibil.

Metoda este metoda rigidității directe, liniară și de ordinul întâi, dacă nu bifați Ordinul doi (P-Delta), verificată pe cazuri de manual.

**Ordinul doi (P-Delta).** Bifați **Ordinul doi (P-Delta)** lângă Run: fiecare combinație se rezolvă din nou cu forțele axiale ale barelor acționând pe cadrul deformat (fiecare bară tăiată în 4 porțiuni, ca încovoierea unei bare între capete să conteze), până când forțele axiale se stabilizează. Linia rezultatului dă numărul de treceri și cât a crescut deplasarea laterală; momentele, deplasările, verificările de proiectare și raportul folosesc apoi aceste rezultate. Peste sarcina critică elastică a cadrului, rularea se oprește și spune asta. Este elastic, cu rotiri mici, numai la încovoiere, fără reducerea rigidității sau încărcări nominale (nu metoda directă de analiză AISC de una singură); planșeele, pereții și planșeele rigide rămân de ordinul întâi.

**Presiunea din planșee.** Pentru planșeele de beton (analiza citește un planșeu ca placă atunci când materialul lui este beton), blocul de încărcări are {{ui:Pressure on every slab}}: scrieți kN/m², alegeți cazul de mai sus și apăsați {{ui:Add to slabs}}. Presiunea se aplică pe fiecare planșeu găsit de analiză, în jos, și apare listată cu o legătură Eliminare. Este o singură presiune pentru toate planșeele, nu una pentru fiecare, și nu este o încărcare normată: scrieți valoarea pe care v-o dă inginerul.

**Frecvențe proprii (elemente finite).** Blocul {{ui:Finite elements: natural frequencies}} de sub rezultate găsește cele mai joase moduri ale aceluiași model cu motorul de elemente finite: grinzi cu eliberările capetelor lor, planșee și pereți ca cochilii plane cu patru noduri, planșee rigide, reazeme. Alegeți câte moduri (3, 6, 10 sau 20) și elementul de placă (cochilia cu patru noduri pentru plăci groase sau subțiri, sau cel pentru plăci subțiri) și apăsați {{ui:Find the frequencies}}. Tabelul dă frecvența fiecărui mod în Hz, perioada lui în secunde și masa modală efectivă după X, Y și Z, ca procent din masa care se poate mișca; {{ui:Show on the model}} desenează orice mod la fel cum se desenează forma deformată. Masa este densitatea materialului înmulțită cu volumul: încărcările nu adaugă masă, iar un material fără densitate nu are masă. Raportul (PDF, CSV) conține tabelul. Este elastic și numai pentru mișcări mici, iar aici nu se face nicio încărcare seismică sau eoliană după normă. Nu este o verificare la normă; inginerul dvs. revizuiește rezultatele.

**Spectru de răspuns, istoric în timp și pushover.** Trei blocuri în plus sunt sub frecvențe, folosind același model cu elemente finite. Masa pentru toate este densitatea materialului plus încărcările permanente în jos ale cazurilor bifate, fiecare înmulțit cu un coeficient pe care îl scrieți (de exemplu Permanentă la 1 și Utilă la partea pe care o numărați drept masă).

{{ui:Response spectrum}} citește fiecare mod dintr-un spectru pe care îl dați (un tabel cu perioada și accelerația, sau forma ASCE 7 din SDS, SD1 și TL; butonul {{ui:Use the Seismic block values}} copiază aceste valori din blocul {{ui:Seismic}}) și combină modurile prin CQC, SRSS, regula celor zece la sută sau o sumă absolută, apoi pune împreună direcțiile X, Y și Z (100 % + 30 % sau SRSS). Dă forța tăietoare de bază, deriva pe niveluri, forțele de la capetele barelor și un tabel de moduri care avertizează când modurile folosite poartă mai puțin de 90 % din masă. Puteți scala rezultatele cu un coeficient sau până la o forță tăietoare de bază pe care o scrieți; blocul nu calculează niciodată singur acea forță. Rezultatele nu au semn.

{{ui:Time history}} rulează o accelerație a terenului prin superpoziție modală (exactă pentru liniile drepte ale înregistrării între puncte) sau prin integrare directă (accelerație medie Newmark cu amortizare Rayleigh). Intrarea este o sinusoidă sau un impuls inventat (etichetat mereu sintetic), o înregistrare pe care o lipiți sau un fișier text pe care îl deschideți (timp și accelerație, câte o accelerație pe linie cu un pas, sau un fișier de tip PEER cu un antet DT=; în g sau m/s²). Dă deplasarea acoperișului și forța tăietoare de bază în funcție de timp, deriva fiecărui nivel și anvelopa forțelor de la capetele barelor. Modelele cu o înregistrare foarte lungă o păstrează doar pentru sesiune.

{{ui:Pushover}} împinge acoperișul lateral în pași mici (formă ca primul mod sau uniformă), cu articulații plastice la capetele barelor cu secțiune în I. Articulația cedează la momentul plastic, care scade pe măsură ce forța axială crește (calculat din forma desenată, colțurile rotunjite ignorate); întărirea este opțională, P-delta este opțional, iar o combinație gravitațională poate fi aplicată mai întâi. Dă curba de capacitate (forța tăietoare de bază în funcție de deplasarea acoperișului), prima articulație și starea și rotirea plastică a fiecărei articulații. {{ui:Run the nonlinear time history}} rulează aceleași articulații sub înregistrarea blocului {{ui:Time history}}, pe modele mici. Articulațiile se formează numai la capetele barelor (puneți un nod acolo unde ar trebui să se formeze una în interiorul unei deschideri); o bară eliberată la ambele capete nu primește niciuna, iar cedarea și flambajul contravântuirilor nu sunt modelate; planșeele și pereții rămân elastici; nu se dau criterii de acceptare. Nu este o verificare la normă; inginerul dvs. revizuiește rezultatele. Setările sunt salvate cu modelul, iar raportul conține tabelele.

Încă nerealizat: flambajul, corecția masei lipsă pentru spectrul de răspuns, scalarea înregistrărilor, criteriile de acceptare pentru articulații (răspunsul dinamic este deja acolo, mai sus), încărcări pe suprafață altele decât presiunea unică pe toate planșeele, excentricitățile barelor, contravântuirile care lucrează numai la întindere, pereții și planșeele din cadru, verificările de normă pentru formele sudate și pentru secțiunile altele decât profilele laminate în I. Vezi [Încă nerealizat](topic:not-built-yet).

## Unități

Lungimile urmează unitatea pe care o alegeți în bara de instrumente ({{ui:Units}}), ca restul BimCraft: poziția încărcărilor pe care le scrieți și le vedeți ({{ui:From}}, {{ui:To}}, {{ui:At}}), punctele încărcărilor și reacțiunilor din noduri, înălțimile de nivel din {{ui:Seismic}} și coloanele de deplasare și de derivă (picioare și inci arată aceste lungimi mici în inci zecimali). Schimbați unitatea oricând; fila se redesenează. Forțele rămân în kN și kN·m, iar raportul (PDF, CSV) și fișierul CraftScript rămân în milimetri, cu unitatea scrisă. Dimensiunile secțiunilor, diametrele barelor și acoperirile din blocul {{ui:Concrete}} rămân în milimetri, așa cum sunt numite.

## Verificări de proiectare

Blocul {{ui:Design checks}} (același cu cel din DetailCraft) alege un {{ui:Design code}}, ASCE 7 + AISC 360 sau EN 1990 + EN 1993-1-1, și o {{ui:Steel grade}}. Dați fiecărui caz de încărcare tipul lui (permanentă, utilă, vânt …), iar {{ui:Make combinations}} scrie combinațiile de încărcare ale normei din cazurile dvs.; analiza le rulează apoi ca pe orice combinație.

{{ui:Check members}} verifică apoi fiecare **profil metalic laminat în I** cu verificările din DetailCraft (întindere, compresiune cu flambaj, încovoiere cu deversare, forfecare, încovoiere cu forță axială, deplasare; clauzele sunt în raport) și arată cât din capacitate folosește, colorat pe model. Este o **unealtă de ajutor până când un inginer a revizuit-o**.

**Ce bare sunt verificate.** Un profil IFC nu spune dacă un profil metalic în I este laminat sau sudat, așa că BimCraft îl consideră laminat numai când numele profilului (sau, în lipsă, numele tipului elementului) este o dimensiune din tabelele AISC W sau S ori din tabelele EN 10365 IPE, HEA sau HEB (`W12x26`, `IPE 300`, `HEA200`, `HE 200 A`) **și** înălțimea, lățimea, inima și tălpile din fișier se potrivesc cu acea dimensiune în limita de 1 %. Orice alt profil în I (o grindă cu inimă plină, o dimensiune cu alt nume, o dimensiune modificată) este considerat sudat și apare **neverificat**, la fel ca tuburile, cornierele, canalele și alte secțiuni, părțile zvelte și torsiunea. Verificați aceste bare cu un inginer.
