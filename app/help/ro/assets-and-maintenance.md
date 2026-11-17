---
title: Păstrarea datelor despre resurse și a unei evidențe de întreținere în model
summary: Folosiți modelul IFC predat pentru exploatarea clădirii: producător, model, număr de serie, garanție și durată de viață pentru echipamente și corpuri, plus o evidență a lucrărilor de întreținere efectuate, toate scrise în IFC.
keywords: predare, certificat de terminare, certificat de ocupare, as-built, pachet de predare, resurse, registru de resurse, administrarea facilității, fm, exploatare, întreținere, service, garanție, număr de serie, cod de bare, producător, model, durată de viață, cobie, geamăn digital, întârziat, scadent, comandă de lucru
from: b84ac492
---

Fila {{ui:Resurse}} din panoul din dreapta transformă modelul IFC deschis într-o evidență a echipamentelor clădirii. Totul este scris în IFC însuși, în seturile de proprietăți și sarcinile proprii IFC, astfel încât următorul program care deschide fișierul le citește și el. Nu se încarcă nimic și nu este nevoie de server: salvați IFC-ul pentru a-l păstra.

## Ce este listat

- Echipamente și corpuri: mobilier, obiecte sanitare, corpuri de iluminat, aparate, terminale de aer, robinete, pompe, ventilatoare, cazane, rezervoare, prize, tablouri electrice, lifturi și alte elemente de acest fel, precum și elemente de bibliotecă cu date despre echipamente.
- Orice alt element pe care îl **urmăriți**: alegeți-l în model (o ușă, un perete, o pompă desenată ca obiect simplu) și faceți clic pe {{ui:Urmărire selecție}}.
- Orice are deja date despre resurse sau o sarcină de întreținere, scrise aici sau de alt program.

Ce este întârziat apare primul, apoi ce este scadent în 30 de zile. Filtrați după nume, etichetă, producător, model sau număr de serie, după nivel, sau bifați {{ui:Doar restante sau scadente în 30 de zile}}.

## Date despre resurse

Faceți clic pe o resursă din listă (sau alegeți-o în model) pentru a deschide datele sale: producător, model, referința modelului, număr de serie, cod de bare, ziua instalării, numărul garanției și începutul și sfârșitul ei, plus durata de viață în ani. {{ui:Salvare date}} le scrie într-un singur pas ({{key:Mod+Z}} îl anulează). Lăsați o casetă goală pentru a elimina acea valoare.

## Documente

Sub date, {{ui:Documente}} listează manualele, garanțiile, fotografiile, certificatele și desenele legate de resursă. Alegeți tipul, dați-i un titlu (sau lăsați-l gol: se folosește numele fișierului) și scrieți unde se află:

- o **adresă web** (`https://…`): primește un link Deschidere, care se deschide într-o filă nouă;
- sau un **nume de fișier sau o cale** (`Manuals/AHU-1.pdf`, `C:\FM\pump.pdf`, o partajare de rețea): păstrați fișierele lângă IFC, în același dosar sau într-unul din el, astfel încât numele să rămână valabile când predați dosarul. BimCraft afișează numele; deschideți fișierul din dosar.

Fișierele în sine nu sunt niciodată încărcate sau copiate în IFC: se scrie doar linkul. O adresă web cu o parolă în ea și orice link care nu este nici adresă web, nici fișier (precum `javascript:`) sunt refuzate. {{ui:Eliminare}} scoate un document din resursă (un pas; {{key:Mod+Z}} îl anulează).

Documentele pe care alt program le-a pus pe element sunt listate și ele. Documentele de pe **tipul** elementului apar pe fiecare element de acel tip și o spun; modificați-le acolo unde a fost creat tipul.

În IFC fiecare document este o referință de document IFC legată de element, cu tipul său păstrat pe această legătură, atât în IFC4, cât și în IFC2X3.

## Evidența de întreținere

Sub documente, {{ui:Înregistrare lucrare efectuată}}: ziua în care a fost făcută, lucrarea, cine a făcut-o, când este următoarea scadență și notele. Fiecare intrare este un pas; {{ui:Editare}} și {{ui:Ștergere}} o modifică mai târziu. Data scadentă următoare a celei mai noi intrări decide dacă resursa este întârziată sau scadentă curând.

## Cum este păstrat în IFC

- Producătorul și modelul în `Pset_ManufacturerTypeInformation`, numărul de serie, codul de bare și ziua instalării în `Pset_ManufacturerOccurrence`, garanția în `Pset_Warranty`, durata de viață în `Pset_ServiceLife`, pe elementul în sine. Când tipul elementului are deja un producător sau un model, acestea apar până scrieți propriile valori.
- Fiecare intrare de întreținere este o **sarcină** IFC de tip întreținere, legată de element, cu datele sale (în IFC4 și ca ore proprii ale sarcinii) și un set `CadCraft_Maintenance` cu ziua, cine a făcut-o și ziua scadentă următoare.
- Valorile pe care le împart alte elemente sunt copiate mai întâi: modificarea unei resurse nu schimbă niciodată vecinii ei.
- În fișierele IFC2X3 mai vechi, datele sunt scrise ca text (`YYYY-MM-DD`); această versiune cere acolo o înregistrare separată de dată, pe care BimCraft nu o scrie.

## Citirile senzorilor

Deschideți {{ui:Valori de senzori}} și {{ui:Deschidere citiri (CSV)…}} pentru a aduce citiri exportate dintr-un sistem de management al clădirii, dintr-un logger de date sau dintr-o foaie de calcul:

- **Prima coloană este ora**: `2026-10-23 14:05`, `2026-10-23T14:05:00Z`, `2026-10-23T14:05+02:00` sau secunde Unix. O oră fără fus orar este citită în fusul orar al calculatorului. Datele cu ziua pe primul loc, precum `23/10/2026`, nu sunt citite (sunt ambigue); exportați date ISO.
- **Fiecare altă coloană este un senzor**, al cărui antet este **eticheta**, **numele** sau **GlobalId** resursei sale. Un antet care nu se potrivește cu nicio resursă, sau cu mai multe, este listat și omis. Coloanele sunt separate prin virgule, punct și virgulă sau tabulatoare; la punct și virgulă sau tabulatoare se citește și virgula zecimală (`21,5`).
- Orele sau valorile care nu se citesc (un cuvânt, o unitate scrisă în celulă) sunt numărate și omise, niciodată ghicite.

Ultima citire apare în coloana {{ui:Citire}} a listei și în blocul {{ui:Senzor}} al resursei, cu un **grafic** al tuturor citirilor (pe telefon, graficele așteaptă până atingeți {{ui:Afișare grafic}}). Setați o **limită inferioară și una superioară** și o unitate pe o resursă, apoi faceți clic pe {{ui:Salvare limite}}: o citire în afara lor marchează resursa. Bifați {{ui:Afișare pe model}} pentru a colora fiecare resursă după citirea sa: albastru sub limita inferioară, verde în limite și roșu peste limita superioară; pentru resursele fără limite, o scară albastră unică de la cea mai mică la cea mai mare citire. Citirea apare ca etichetă (până la 60 de etichete, cele marcate primele).

**Citirile rămân în această filă a browserului**: nu sunt salvate în IFC și nu sunt trimise nicăieri; deschideți din nou CSV-ul data viitoare. **Limitele sunt salvate în IFC** (un set `CadCraft_Sensor` pe element: Low, High, Unit), astfel încât următoarea persoană care deschide fișierul vede aceleași marcaje.

## Citiri live

{{ui:Flux live}} citește valorile pe măsură ce apar, **direct din acest browser către propriul sistem**. Nimic nu trece prin serverul nostru și nimic nu este stocat altundeva decât în fila browserului. Nimic nu se conectează când se deschide un fișier: doar {{ui:Conectare}} o face.

- **MQTT peste WebSockets**: adresa listener-ului WebSocket al brokerului (`wss://broker.example.com:8884/mqtt`) și unul sau mai multe subiecte cu `{tag}` acolo unde merge eticheta resursei, de exemplu `site/{tag}/temperature` (BimCraft se abonează la `site/+/temperature` și citește eticheta din subiectul fiecărui mesaj). Subiectele fără `{tag}` numesc ele senzorul. Un mesaj este fie un număr simplu (`21.5`), fie JSON precum `{"value": 21.5, "time": "2026-10-23T14:05:00Z"}` (setați {{ui:Câmpul de valoare din JSON}} dacă al sistemului se numește altfel).
- **Întrebare la o adresă (HTTP)**: o adresă web la care răspunde sistemul de management al clădirii sau un script mic, întrebată la fiecare câteva secunde (cel puțin 5). Poate răspunde cu JSON indexat după etichetă (`{"AHU-1": 21.5}`), cu o listă JSON (`[{"tag": "AHU-1", "value": 21.5}]`) sau cu un CSV de citiri ca cel de mai sus. Dacă nu răspunde, BimCraft așteaptă de două ori mai mult înainte de a întreba din nou, până la cinci minute.

Fiecare citire merge la resursa a cărei etichetă, nume sau GlobalId o numește, exact ca o coloană CSV; numele care nu se potrivesc cu nicio resursă sunt listate. Citirile se alătură {{ui:Valori de senzori}}: lista, graficele, limitele și culorile de pe model funcționează la fel.

**Parola sau tokenul** se scrie pentru o singură conexiune: este predat conexiunii, iar caseta se golește; nu este salvat niciodată în acest browser sau în IFC. Un token merge ca antet standard `Authorization: Bearer`, și nu sunt trimise cookie-uri.

{{ui:Păstrare aceste setări în IFC}} scrie adresa, subiectele, câmpul de valoare și cât de des se întreabă în model (un set `CadCraft_Feed` pe proiect; nu există câmp pentru parolă), astfel încât următoarea persoană care deschide fișierul își scrie doar propria autentificare și face clic pe {{ui:Conectare}}. Nu puneți o parolă sau o cheie în adresa în sine: o adresă cu nume de utilizator și parolă în ea este refuzată.

:::note
**Ce are nevoie brokerul sau adresa.** O pagină de browser poate vorbi doar cu un server care permite asta:
- Pagina este sigură (https), deci browserul se conectează doar la adrese `wss://` și `https://` — cu excepția propriului calculator (`localhost`), unde `ws://` și `http://` funcționează pentru test.
- O adresă HTTP trebuie să permită cererile de la această pagină (CORS: antetul `Access-Control-Allow-Origin`, și `Authorization` printre antetele permise dacă folosiți un token).
- Majoritatea brokerilor (Mosquitto, EMQX, HiveMQ și alții) oferă un listener WebSocket; el este adesea oprit până este pornit. BimCraft vorbește MQTT 3.1.1.
:::

**Nu există alerte** când BimCraft este închis: limitele marchează o resursă cât timp modelul este deschis cu un flux conectat. Urmărirea unei clădiri non-stop are nevoie de un server, pe care BimCraft nu îl rulează.

## Foaie de calcul COBie

**COBie** este foaia de calcul de predare pe care o cer mulți proprietari și echipe de administrare a facilităților (publicată de National BIM Standard în SUA; BS 1192-4 în Marea Britanie). Deschideți {{ui:Foaie de calcul COBie}} în filă:

- {{ui:Salvare ca COBie (.xlsx)}} scrie foile COBie 2.4 — Contact, Facility, Floor, Space, Type, Component, System, Job, Document și Attribute — din model și din datele despre resurse: clădirea, nivelurile și camerele sale (ariile din cantitățile modelului), fiecare resursă ca o componentă cu numărul de serie, ziua instalării, începutul garanției, eticheta și codul de bare, tipul său cu producătorul, modelul, durata de viață și lungimea garanției, sistemele din care face parte, evidența de întreținere ca lucrări și documentele legate. Fiecare componentă poartă GlobalId-ul IFC al elementului. Scrieți adresa de e-mail pentru coloana „created by” a COBie sau lăsați-o goală (atunci scrie n/a). Valorile pe care modelul nu le are scriu **n/a**; coloanele de categorie conțin clasa IFC, nu un cod OmniClass.
- {{ui:Citire foaie de calcul COBie…}} o citește înapoi, din BimCraft sau dintr-un alt program, și **listează mai întâi fiecare modificare**: ce resursă, ce valoare, de la ce la ce și documentele noi. {{ui:Aplicare}} le scrie pe toate într-un singur pas ({{key:Mod+Z}} îl anulează). Rândurile sunt potrivite după GlobalId, apoi după numele componentei. Rândurile care nu se potrivesc cu nimic din model sunt listate, nu adăugate.

O foaie de calcul este tratată ca nesigură: formulele nu sunt citite sau rulate niciodată (se ia doar ultima valoare salvată în celulă), o valoare care ar face o garanție să se termine înainte să înceapă și un link de document care nu este nici adresă web, nici nume de fișier sunt lăsate afară și numărate, iar registrele foarte mari sunt refuzate. Lucrările din COBie sunt lucrările planificate ale unui tip, deci sunt scrise, dar nu sunt citite înapoi. În foaia de calcul pe care o scrie BimCraft, textul pe care o foaie de calcul l-ar putea lua drept formulă (care începe cu `=`, `+`, `-` sau `@`) este marcat ca text.

Registrul este verificat în testele noastre cu un cititor independent de foi de calcul; nu a trecut printr-un validator COBie. Dacă o echipă destinatară rulează unul, spuneți-ne ce arată.

## Documente de predare

Documentele care merg la proprietar odată cu clădirea finalizată aparțin proiectului, nu unei singure resurse. Pe fila {{ui:Resurse}}, deschideți {{ui:Documente de predare}}:

1. {{ui:Adăugare document}}, alegeți tipul (certificat de terminare, certificat de ocupare, garanție, manual, desene as-built, altele), apoi scrieți titlul, data emiterii, cine l-a emis și numărul de referință.
2. Spuneți unde se află: o adresă web, un nume de fișier păstrat lângă IFC sau {{ui:Atașare fișier}}.
3. {{ui:Adăugare în listă}}. {{ui:Editare}} și {{ui:Eliminare}} modifică lista; fiecare este un pas pe care îl puteți anula.

{{ui:Creare pachet de predare}} descarcă o arhivă zip: o pagină de copertă care listează fiecare document, aceeași listă ca o foaie de calcul, registrul COBie (documentele sunt pe foaia sa Document, ca rânduri despre Facility), modelul și fiecare fișier atașat. Un certificat de terminare sau de ocupare care nu este încă în listă este numit pe copertă; pachetul se creează oricum.

Pachetul conține modelul **as-built**: arată ce elemente au fost măsurate pe șantier. Cu el, în dosarul `as-built`: declarația, o listă cu fiecare element și starea sa de verificare, setul de desene așa cum este acum, ca un singur PDF (desenele as-built), și jurnalul de modificări al desenelor când modelul a emis seturi. Vezi [Marcarea elementelor ca verificate sau verificate pe teren](topic:verification).

- În fișierul IFC fiecare document este un IfcDocumentInformation legat de proiect (IfcRelAssociatesDocument), cu titlul, referința, data, emitentul și locul său, astfel încât alte programe să-l listeze.
- Un fișier atașat este înregistrat după nume, dimensiune și SHA-256. Pentru a păstra fișierul în sine cu proiectul, folosiți {{ui:Salvare proiect ca pachet}} (un .ccbundle conține modelul și fișierele atașate; deschiderea lui le restituie, fiecare verificată față de înregistrarea sa). O salvare obișnuită întreabă ce preferați.
- Un .ifc simplu păstrează înregistrarea, nu fișierul: după deschidere, folosiți {{ui:Atașați fișierul din nou}}. Același fișier este recunoscut; unul diferit înlocuiește înregistrarea.

## CSV

{{ui:CSV}} salvează fiecare resursă cu datele sale, fiecare intrare de întreținere și fiecare document, câte un rând fiecare, pentru o foaie de calcul sau alt program de întreținere.

:::note
Încă nerealizat: un serviciu găzduit care păstrează citirile și trimite alerte când BimCraft este închis și citirea înapoi a sarcinilor COBie. Vezi [Încă nerealizat](topic:not-built-yet).
:::
