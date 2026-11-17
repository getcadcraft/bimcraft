---
title: Documente și revizii (depozitul)
summary: Un pas cu pas printr-un proiect real: puneți sub control un dosar de modele IFC, extrageți un model, modificați-l, depuneți-l cu o notă, trimiteți-l la verificare, aprobați și eliberați-l, vedeți istoricul și ce îl folosește, ce vede a doua persoană cât timp este blocat și cum funcționează cu dosarele cloud.
keywords: depozit, documente, ghid pas cu pas, tutorial, extragere, depunere, revizie, eliberare, aprobare, blocare, istoric, unde este folosit, ifc, model, dosar cloud, dosar de proiect, două persoane, dosar partajat
from: 0a753f25
---

## Ce veți face

Sunteți Ana, lucrând la Riverside Clinic împreună cu un coleg, Ben. Modelele IFC ale proiectului trăiesc într-un singur dosar la care ajungeți amândoi (o unitate partajată, un dosar sincronizat sau un dosar cloud). Până la final, un fișier a trecut de la prima copie la o revizie eliberată **A**, a fost modificat din nou ca **B.1**, ați văzut cine a făcut ce și ce vede Ben când dețineți fișierul.

Totul se păstrează într-un dosar ascuns `.ccvault` lângă fișiere: fără server, fără nimic încărcat (un dosar cloud face excepție, vedeți ultimul pas). Pentru fiecare buton și regulă, la un loc, vedeți subiectul *Documente: extragere, revizii și eliberare*, acolo unde îl are aplicația.

## 1. Pregătiți dosarul proiectului

1. Alegeți {{ui:Documente}} lângă {{ui:Deschidere dosar}} pe ecranul de start, sau {{ui:Documente…}} din meniul **Fișier**.
2. Alegeți {{ui:Alegeți dosarul de proiect}} și selectați dosarul care conține modelele IFC ale proiectului. (Dosarele de proiect funcționează în Studio și în browserele care pot deschide un dosar, precum Chrome și Edge. În alte browsere panoul o spune.)
3. Alegeți {{ui:Modificare}} lângă **Utilizator:** și tastați numele, `Ana` (dacă cere, și numele acestui calculator). Panoul spune acum *Utilizator: Ana pe* și numele calculatorului. Numele Anei apare la tot ce se face.
4. Alegeți {{ui:Porniți un depozit în acest dosar}} și tastați numele proiectului, `Riverside clinic`. Panoul spune *Depozit pornit pentru Riverside clinic.*

## 2. Puneți un fișier sub control

1. Deschideți **Fișiere care nu sunt în depozit** și alegeți {{ui:Adăugare}} lângă `models/House.ifc`.
2. Fișierul apare sub **Fișiere în depozit** la revizia **A.1**, starea **Lucrare în curs**. A.1 este prima ei copie; depozitul păstrează o copie a fiecărei revizii.

## 3. Extrageți, modificați, depuneți

1. Alegeți {{ui:Deschisă}} lângă `models/House.ifc`. Modelul se deschide în BimCraft, iar panoul se închide ca să-l vedeți. Deschideți din nou panoul din {{ui:Documente}}.
2. Deschideți din nou panoul și alegeți {{ui:Extragere}}. Rândul spune acum **Extras pe numele utilizatorului**. A fost creat un fișier de blocare în `.ccvault/locks`; nimeni altcineva nu poate extrage acest fișier până la depunere.
3. Modificați modelul: mutați un perete, adăugați o ușă. Salvarea este refuzată dacă modelul nu este extras pe numele utilizatorului, și spune de ce; {{ui:Salvare ca}} funcționează mereu pentru o copie a propriului model.
4. Deschideți panoul, alegeți {{ui:Depunere}} și scrieți ce s-a schimbat (`Am mutat ușa`). Panoul spune *depus ca A.2*. Fișierul din dosarul proiectului este acum modelul pe care l-ați avut deschis, iar blocarea a dispărut. Depunerea fără nicio modificare păstrează revizia.

Dacă renunțați, {{ui:Anulare extragere}} returnează fișierul fără revizie nouă.

## 4. Verificare și eliberare

1. Alegeți {{ui:Trimitere la verificare}}. Starea devine **Pentru verificare**, iar fișierul devine doar pentru citire.
2. Înainte de aprobare, alegeți {{ui:Setări proiect}} și listați cine poate aproba (un nume pe rând), de exemplu `Ben` și `Carla`, apoi bifați regula că aprobatorul trebuie să fie altcineva decât autorul. Alegeți {{ui:Salvare setări}}. Acum depozitul însuși refuză pe oricine altcineva.
3. Ben (sau Carla) alege {{ui:Aprobare}} și tastează numele aprobatorului. Starea devine **Eliberat**, iar revizia devine **A**, cu *aprobat de* și numele. Un fișier eliberat este doar pentru citire. {{ui:Trimitere înapoi}} l-ar fi readus la Lucrare în curs, cu un motiv.

Numele aprobatorului este numele tastat în panou; este o evidență a cine a semnat, nu o dovadă a identității.

## 5. O revizie nouă

1. Pe fișierul eliberat, alegeți {{ui:Revizie nouă}}. Rezervați revizia pentru litera următoare.
2. Modificați fișierul, apoi {{ui:Depunere}}. Revizia este **B.1**, lucrare în curs. Eliberați-o la fel și devine **B**. {{ui:Anulare extragere}} înainte de prima depunere o lasă la **A**.

Literele reviziilor merg A, B … Z, AA, AB. Dacă standardul folosit lasă unele litere afară, setarea de proiect *Folosiți secvența ASME Y14.35* sare peste I, O, Q, S, X și Z la reviziile următoare.

## 6. Vedeți ce s-a întâmplat

Alegeți numele fișierului ca să deschideți detaliile lui:

- **{{ui:Istoric}}**: fiecare eveniment, cel mai nou primul, cu cine, ce calculator și când: *Depus A.2* de Ana, *Eliberat* de Ben și așa mai departe.
- **{{ui:Revizii}}**: tabelul reviziilor: fiecare revizie păstrată, cu data ei, cine a depus-o, nota și cine a aprobat-o. Depozitul păstrează o copie a fiecăreia în `.ccvault/revs`.
- **{{ui:Folosește}}**: documentele către care indică un model IFC.
- **{{ui:Folosit de}}**: listează fiecare model din depozit care indică spre acest fișier.

## Modele care indică alte documente

Un model IFC care indică alte documente din dosar (desene, tabele centralizatoare) le arată sub **Folosește**, iar fiecare dintre ele arată modelul sub **Folosit de**. Când depuneți un document, puteți vedea ce modele se referă la el.

## 7. Ce vede Ben cât timp dețineți fișierul

Acum extrageți din nou fișierul și rugați-l pe Ben să deschidă același dosar de proiect pe calculatorul lui și să deschidă panoul. Pe rândul fișierului el vede **Extras de Ana pe calculatorul ei din** ora, și nu are buton {{ui:Extragere}}. Dacă încearcă oricum, depozitul refuză: blocarea este un fișier pe care sistemul nu-l poate crea de două ori, deci două persoane nu pot deține amândouă fișierul, nici în aceeași fracțiune de secundă, când dosarul este pe disc în Studio. (Într-un browser, dosarul permite doar o încercare cât mai bună, iar panoul o spune sub **Dosar**.)

Dacă Ana este plecată și Ben are nevoie de fișier, {{ui:Întrerupere extragere}} îl eliberează. Trebuie să tasteze un motiv; acesta intră în jurnal, împreună cu cine deținea extragerea. Când proiectul are administratori listați, doar ei pot. O extragere mai veche decât limita de expirare (14 zile implicit) este marcată *de mult timp*. După întrerupere, depunerea târzie a Anei este refuzată, astfel încât nu se pot suprascrie reciproc.

## 8. Dosare cloud

Un dosar cloud este un dosar de proiect păstrat în spațiul de stocare cloud al echipei, deci echipa nu are nevoie de o unitate partajată. În Studio, conectat la contul CadCraft, panoul arată {{ui:Deschidere dosar cloud}} lângă {{ui:Alegeți dosarul de proiect}}. Alegeți-l și selectați dosarul, listat ca spațiu de lucru / dosar. Proprietarul spațiului de lucru creează întâi dosarul, iar spațiul de stocare cloud al echipei trebuie să fie activ. Totul de mai sus funcționează la fel; serverul creează blocarea, care este strictă între persoane. Dacă nu este conectat, panoul cere conectarea. Într-un tab de browser obișnuit butonul cloud nu este oferit; folosiți Studio.

## Încercați

Faceți cei opt pași de mai sus cu o copie a unui fișier real. Pentru pașii cu două persoane aveți nevoie de altă persoană sau de două ferestre cu două nume. Dacă încercați cu un dosar partajat real, pagina de testare a comunității listează o verificare care cere exact asta și primește rezultate.
