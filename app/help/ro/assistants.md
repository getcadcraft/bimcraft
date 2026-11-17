---
title: Lăsați un asistent AI să lucreze cu modelul
summary: Activați asistenții în Setări, ca un asistent de pe calculator să poată găsi elemente, să citească proprietățile lor, să le izoleze în vizualizare și să deseneze pereți, uși, ferestre, planșee, niveluri și grile, prin CadCraft Studio. Dezactivat până îl activați.
keywords: ai, asistent, mcp, script, automatizare, studio, găsire elemente, izolare, proprietăți, permisiuni, deconectare, activitate, desenare pereți, adăugare uși, adăugare ferestre, niveluri, grile, planșee, anulare, salvare, linie de comandă, cli, headless, utilizare cu asistenți AI
from: c5ee595b
---

## Ce veți învăța

Cum să lăsați un asistent AI (orice asistent care vorbește MCP) să se uite în modelul IFC deschis și să deseneze în el, ce poate și ce nu poate face și cum să-l opriți.

## Ce poate face un asistent în BimCraft

| Solicită să | Ce se întâmplă | Necesită |
|---|---|---|
| Găsească elemente | Primește o listă de elemente după clasă, etaj, nume sau valoare de proprietate, cum face **Căutare** | Citire |
| Citească proprietăți | Primește atributele, tipul, seturile de proprietăți și cantitățile unui element, cum le arată **Proprietăți** | Citire |
| Descrie modelul, listeze pereții | Primește nivelurile, pereții, ușile, ferestrele, camerele, planșeele, grilele și coloanele, precum și capetele, tipul și înălțimea fiecărui perete | Citire |
| Izoleze, pună în transparență, ascundă sau arate | Vizualizarea 3D se schimbă ca și cum ați folosi meniul {{ui:Afișare}} | Modificarea vizualizării și desenarea |
| Deseneze pereți, uși, ferestre, planșee, niveluri sau linii de grilă | Modelul se schimbă ca și cum ați folosi instrumentele {{ui:Desenare}}: pereții se îmbină, iar camerele, planșeele și acoperișurile urmează | Modificarea vizualizării și desenarea |
| Schimbe un nume sau o valoare de proprietate | Numele, descrierea, tipul de obiect sau eticheta unui element, sau o valoare de proprietate. O valoare pe care o împarte cu alte elemente este copiată mai întâi pentru el; o valoare a tipului său se schimbă doar când asistentul o cere, pentru că fiecare element de acel tip urmează | Modificarea vizualizării și desenarea |
| Mute, șteargă, schimbe pereți, uși și ferestre | Elementele se mută sau se șterg împreună cu ce găzduiesc; pereții desenați cu instrumentele {{ui:Desenare}} se schimbă prin capete sau tip, ușile și ferestrele prin loc, dimensiune sau tip, iar camerele și îmbinările urmează | Modificarea vizualizării și desenarea |
| Configureze, aranjeze și citească un tabel | „Un tabel de uși pe etaj, cu rezistența la foc și feronerie”: asistentul numește tabelul, coloanele sale (o proprietate sau o etichetă devine coloană) și gruparea; BimCraft îl completează din model și îl aranjează, luând din standardul biroului ce nu a precizat asistentul. Configurația se adaugă în lista {{ui:Tabele centralizatoare}}. Fiecare linie primită înapoi numește elementele sale, astfel încât acestea pot fi selectate | Citire pentru a citi; Modificarea vizualizării și desenarea pentru a salva o configurație |
| Exporte un tabel | CSV, Excel sau text separat prin tabulatoare, pentru a fi lipit în Google Sheets (nimic nu este trimis către Google) | Export |
| Citească și seteze finisajele camerelor | Tipurile de finisaje, finisajul podelei, peretelui și tavanului fiecărei camere, zonele; suprafețele, numărul de plăci și volumele de suport vin apoi din tabelele de finisaje | Citire; Modificarea vizualizării și desenarea pentru a seta |
| Selecteze elemente, anuleze propriii pași | Elementele sunt alese în vizualizare; ultimul său pas este anulat | Modificarea vizualizării și desenarea |
| Salveze | Un fișier IFC nou cu fiecare modificare, cum face {{ui:Salvare ca IFC}} (originalul nu este niciodată modificat) | Salvare |
| Exporte USD | Modelele deschise ca OpenUSD (.usda, .usdc sau .usdz), cum scrie {{ui:USD}} din bara de instrumente | Export |
| Randeze o imagine, să ruleze coada de randare | O imagine a vizualizării 3D, cum o face caseta {{ui:Randare}} cu setările de randare, dacă nu cere altele, sau imagini de calitate superioară adăugate în coada casetei și randate una după alta (coada are nevoie de WebGPU). Nimic din model nu se schimbă ([Randarea unei imagini](topic:render)) | Export |

Fiecare modificare făcută de un asistent este un pas în **Modificări**, numit „Asistent: …” (de exemplu „Asistent: adăugare 4 pereți”), astfel încât {{key:Mod+Z}} anulează întreaga sa acțiune, iar pasul poate fi văzut ca fiind al asistentului. În fereastra sa nu poate deschide fișiere: deschideți modelul; el lucrează cu cel deschis.

## Activați-l

Asistenții ajung în BimCraft prin CadCraft Studio de pe calculator; browserul obișnuit nu are acces.

1. Deschideți {{ui:Setări}} și alegeți fila **BimCraft**.
2. Sub **Asistenți**, bifați **Permiteți asistenților AI și scripturilor să folosească BimCraft**.
3. **Citire** este bifată implicit. Bifați și **Modificarea vizualizării și desenarea** dacă asistentul poate izola și ascunde elemente și poate desena, și **Salvare** dacă poate salva modelul ca fișier nou.
4. Conectați asistentul în Studio (Studio afișează adresa și setările de lipit în el).

## În timp ce un asistent este conectat

O notă din partea de sus a panoului din dreapta arată ce asistent este conectat și ce poate face. Faceți clic pe {{ui:Deconectare}} pentru a încheia sesiunea sa imediat; trebuie să se reconecteze pentru a continua.

**Activitate**, sub **Asistenți** în Setări, listează fiecare apel făcut de asistent, cel mai nou primul, cu indicația dacă a reușit.

:::tip
Întrebați în cuvinte simple, de exemplu „izolează pereții exteriori de la Nivelul 1”, „ce uși nu au rezistență la foc?” sau „desenează o cameră de 6 pe 4 metri la Nivelul 1, cu o ușă în peretele de sud”. Asistentul găsește elementele și le arată în vizualizare sau le desenează.
:::

## Fără fereastră: scripturi și linia de comandă

Aceleași instrumente de desenare funcționează pe fișiere IFC din dosarele pe care le numiți, fără nicio fereastră deschisă: serverul MCP și linia de comandă ale CadCraft pot începe o clădire nouă sau pot deschide un fișier IFC, îl pot descrie, adăuga pereți, uși, ferestre, planșee, niveluri și grile, pot anula și salva ca fișier `.ifc` nou. Decideți ce dosare poate folosi și dacă poate modifica sau salva ceva.

## Dezactivați-l

Debifați **Permiteți asistenților AI și scripturilor să folosească BimCraft**. Fiecare asistent este deconectat imediat, iar setarea este păstrată pentru data viitoare.

## Vezi și

- [Rețete pentru asistenții AI](common:assistants-recipes): exemple lucrate, fiecare cu instrumentele pe care le apelează.
- [Găsirea elementelor după clasă, nume sau proprietate](topic:find)
- [Ascunderea, izolarea și transparența elementelor](topic:hide-and-isolate)
- [Setările BimCraft](topic:settings)
