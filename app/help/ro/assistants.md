---
title: Lăsați un asistent AI să lucreze cu modelul
summary: Activați asistenții din Setări, ca un asistent de pe calculator să găsească elemente, să le citească proprietățile, să le izoleze în vizualizare și să deseneze pereți, uși, ferestre, planșee, niveluri și axe, prin CadCraft Studio. Dezactivat până la activare.
keywords: ai, asistent, mcp, script, automatizare, studio, găsire elemente, izolare, proprietăți, permisiuni, deconectare, activitate, desenare pereți, adăugare uși, adăugare ferestre, niveluri, axe, planșee, anulare, salvare, linie de comandă, cli, fără fereastră, utilizare cu asistenți AI
from: 66d72742
---

## Ce veți învăța

Cum să lăsați un asistent AI (orice asistent care vorbește MCP) să se uite în modelul IFC deschis și să deseneze în el, ce poate și ce nu poate face și cum îl opriți.

## Ce poate face un asistent în BimCraft

| Cere să | Ce se întâmplă | Necesită |
|---|---|---|
| Găsească elemente | Primește o listă de elemente după clasă, etaj, nume sau valoare a unei proprietăți, cum face **Găsire** | Citire |
| Citească proprietăți | Primește atributele, tipul, seturile de proprietăți și cantitățile unui element, cum le arată **Proprietăți** | Citire |
| Descrie modelul, listeze pereții | Primește nivelurile, pereții, ușile, ferestrele, încăperile, planșeele, axele și stâlpii, precum și capetele, tipul și înălțimea fiecărui perete | Citire |
| Izoleze, facă transparent, ascundă sau afișeze | Vizualizarea 3D se schimbă ca și cum ați fi folosit meniul {{ui:Afișare}} | Modificarea vizualizării și desenare |
| Deseneze pereți, uși, ferestre, planșee, niveluri sau linii de axă | Modelul se schimbă ca și cum ați fi folosit instrumentele {{ui:Desenare}}: pereții se îmbină, iar încăperile, planșeele și acoperișurile urmează modificările | Modificarea vizualizării și desenare |
| Schimbe un nume sau o valoare de proprietate | Numele, descrierea, tipul de obiect sau eticheta unui element, sau o valoare de proprietate. O valoare pe care o împarte cu alte elemente este mai întâi copiată pentru acel element; o valoare a tipului se schimbă doar când asistentul o spune, pentru că fiecare element de acel tip urmează | Modificarea vizualizării și desenare |
| Mute, șteargă, schimbe pereți, uși și ferestre | Elementele se mută sau se șterg împreună cu ce găzduiesc; pereții desenați cu instrumentele {{ui:Desenare}} se modifică prin capete sau tip, ușile și ferestrele prin amplasare, dimensiune sau tip, iar încăperile și îmbinările urmează | Modificarea vizualizării și desenare |
| Configureze, aranjeze și citească un tabel centralizator | „Un tabel de uși pe etaje, cu clasa de rezistență la foc și feronerie”: asistentul dă numele tabelului, coloanele lui (o proprietate sau o etichetă devine o coloană) și gruparea; BimCraft îl completează din model și îl aranjează, luând din standardul biroului ce nu a precizat asistentul. Configurarea se adaugă la lista Tabelelor centralizatoare. Fiecare rând primit numește elementele sale, astfel încât asistentul le poate selecta | Citire pentru citire; Modificarea vizualizării și desenare pentru salvarea configurării |
| Exporte un tabel centralizator | CSV, Excel sau text cu separatori de tabulare, de lipit în Google Sheets (nimic nu se trimite către Google) | Export |
| Citească și stabilească finisajele încăperilor | Tipurile de finisaje, finisajul pardoselii, al peretelui și al tavanului fiecărei încăperi, zonele; suprafețele, numărul de plăci și volumele de suport vin apoi din tabelele de finisaje | Citire; Modificarea vizualizării și desenare pentru stabilire |
| Selecteze elemente, anuleze propriii pași | Elementele se aleg în vizualizare; ultimul pas al asistentului este anulat | Modificarea vizualizării și desenare |
| Salveze | Un fișier IFC nou cu fiecare modificare, cum îl face {{ui:Salvare ca IFC}} (originalul nu se modifică niciodată) | Salvare |
| Exporte USD | Modelele deschise ca OpenUSD (.usda, .usdc sau .usdz), cum le scrie {{ui:USD}} din bara de instrumente | Export |
| Randeze o imagine, ruleze coada de randare | O imagine a vizualizării 3D, cum o face caseta {{ui:Randare}} cu setările de randare, dacă nu cere altele, sau imagini de calitate înaltă adăugate în coada casetei și randate una după alta (coada are nevoie de WebGPU). Nimic din model nu se schimbă ([Randarea unei imagini](topic:render)) | Export |

Fiecare modificare făcută de un asistent este un pas în **Modificări**, numit „Asistent: …” (de exemplu „Asistent: adăugare 4 pereți”), astfel încât {{key:Mod+Z}} anulează toată acțiunea sa și puteți vedea al cui pas a fost. În fereastră nu poate deschide fișiere: modelul se deschide de utilizator, iar asistentul lucrează cu cel deschis.

## Activare

Asistenții ajung la BimCraft prin CadCraft Studio de pe calculator; simplul browser nu are cale de acces.

1. Deschideți {{ui:Setări}} și alegeți fila **BimCraft**.
2. Sub **Asistenți**, bifați **Permiteți asistenților AI și scripturilor să utilizeze BimCraft**.
3. **Citire** este bifată implicit. Bifați și **Modificarea vizualizării și desenare** dacă asistentul poate izola și ascunde elemente și poate desena, iar **Salvare** dacă poate salva modelul ca fișier nou.
4. Conectați asistentul în Studio (Studio arată adresa și setările de lipit în el).

## Cât timp este conectat un asistent

O notă din partea de sus a panoului din dreapta spune ce asistent este conectat și ce poate face. Faceți clic pe {{ui:Deconectare}} pentru a încheia imediat sesiunea; asistentul trebuie să se reconecteze pentru a continua.

**Activitatea**, sub **Asistenți** din Setări, listează fiecare apel făcut de asistent, cele mai noi primele, cu indicarea dacă a reușit.

:::tip
Întrebați în cuvinte simple, de exemplu „izolează pereții exteriori de la Nivelul 1”, „ce uși nu au clasă de rezistență la foc?” sau „desenează o cameră de 6 pe 4 metri la Nivelul 1, cu o ușă în peretele de sud”. Asistentul găsește elementele și le arată în vizualizare sau le desenează.
:::

## Fără fereastră: scripturi și linia de comandă

Aceleași instrumente de desenare funcționează pe fișiere IFC din dosarele pe care le numiți, fără fereastră deschisă: serverul MCP și linia de comandă CadCraft pot începe o clădire nouă sau pot deschide un fișier IFC, îl pot descrie, adăuga pereți, uși, ferestre, planșee, niveluri și axe, anula și salva ca fișier `.ifc` nou. Alte patru unelte sunt potrivite pentru scripturi: `ifc_batch` rulează până la 200 de pași de editare ca unul (totul sau nimic: o anulare ia înapoi tot lotul, iar un pas refuzat anulează restul și numește pasul); `ifc_describe` listează nivelurile și fiecare perete, cu ușile și ferestrele sale; `ifc_render_png` scrie o imagine de verificare cu umbrire plată a modelului (fără materiale, texturi sau umbre), fără fereastră; `usd_export` scrie `.usda`, `.usdc` sau `.usdz`. În linia de comandă, `cadcraft bim script.json --from model.ifc -o out.ifc` rulează un script de pași, iar `--usd`, `--png` și `--plan` scriu un fișier USD, o imagine sau un plan din aceeași rulare. Decideți ce dosare poate folosi și dacă poate modifica sau salva ceva.

## Dezactivare

Debifați **Permiteți asistenților AI și scripturilor să utilizeze BimCraft**. Fiecare asistent este deconectat imediat, iar setarea se păstrează pentru data viitoare.

## Vezi și

- [Rețete pentru asistenții AI](common:assistants-recipes): exemple lucrate, fiecare cu uneltele pe care le apelează.
- [Găsirea elementelor după clasă, nume sau proprietate](topic:find)
- [Ascunderea, izolarea și transparența elementelor](topic:hide-and-isolate)
- [Setările BimCraft](topic:settings)
