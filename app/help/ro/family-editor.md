---
title: Editarea unei familii
summary: Modificați parametrii, formulele și solidele unei familii, arătați piese printr-un parametru Da / Nu, tăiați și uniți solide, dați-le conectori pentru conducte și canale și vedeți rezultatul desenat din IFC-ul pe care îl va salva.
keywords: editor de familii, editare familie, parametru, parametri, formulă, formule, vizibilitate, da nu, solid, solide, cutie, extrudare, revoluție, baleiere, profil, arc, boolean, booleene, tăiere, unire, diferență, reuniune, mâner, mânere, plan de lucru, schiță, familie nouă, conector, conectori, port, porturi, conector de țeavă, conector de canal, scurgere, alimentare cu apă
from: 1ab31c10
---

## Deschiderea editorului

Deschideți o familie (grupul **Familii** din browserul proiectului sau {{ui:Build}} › {{ui:Families…}}) și faceți clic pe {{ui:Edit the family}}. Pentru a porni de la zero, faceți clic pe {{ui:New family}}: dați-i un nume, spuneți ce este (o ușă, o fereastră, mobilier, un corp fix sau altceva) și, pentru o ușă sau o fereastră, de la ce pornire vin simbolul său de plan și mâna sa. Editorul se deschide pe o familie cu câțiva parametri și un solid.

Editarea unei familii de pornire își păstrează modificările doar în acest model. Celelalte modele păstrează pornirea așa cum este.

Nimic din model nu se schimbă până nu faceți clic pe {{ui:Save the family}}. Editorul are propriile anulări și refaceri (săgețile de lângă nume sau {{key:Mod+Z}} și {{key:Mod+Y}}); salvarea este un singur pas în anularea modelului.

## Parametri

Fila {{ui:Parameters}} listează parametrii familiei: un nume, un tip și o valoare implicită. Tipurile: **Lungime** (milimetri), **Unghi** (grade), **Număr**, **Număr întreg**, **Da / Nu**, **Stilou** (1–16) și trei care țin cuvinte în loc de numere: **Text**, **Material** (unul dintre materialele proiectului) și **Umplere** (o umplere de plan). Cuvintele nu se folosesc în formule; ele colorează un solid (**Material** său), umplu o piesă a unui simbol sau se tipăresc ca `{Nume}` în textul unui simbol. Caseta **Pe element** face din parametru ceva ce fiecare element plasat își setează singur, în loc să fie parte a dimensiunii.

- O **formulă** face un parametru să urmeze alți parametri, de exemplu `Width / 30` sau `if(Width > 1200, 2, 1)`. Lungimile din formule sunt în milimetri sau scrieți o unitate: `3'`, `6in`, `50cm`.
- Redenumirea unui parametru îl redenumește în fiecare formulă și câmp care-l folosește. Un parametru încă folosit nu poate fi eliminat.
- **Material** al unui solid ia culoarea unui material al proiectului (sau a unui parametru Material), **Afișat la** îl ascunde la nivelurile de detaliu mai grosiere, iar **Repetare** face copii: un număr (un parametru numeric sau număr întreg, de la 1 la 200) și pasul dintre ele pe x, y și z. Un solid repetat este un rând de scânduri, bare sau găuri; folosit într-o tăiere, copiile se taie împreună.
- O familie de uși sau ferestre primește și două nume din peretele său: `WallThickness` și `Face` (1 sau −1, partea în care se deschide ușa).

## Solide

Fila {{ui:Solids}} listează solidele. Adăugați o cutie, o extrudare, o revoluție sau o baleiere:

| Solid | Ce setați |
|---|---|
| Cutie | cele două colțuri ale sale: x0 până la x1, y0 până la y1, z0 până la z1 |
| Extrudare | un profil pe un plan de lucru (plan, față sau lateral), unde se află planul și o adâncime |
| Revoluție | un profil, o axă pe plan și un unghi de până la 360° |
| Baleiere | un traseu de puncte și o rază (o tijă sau o șină) |

Fiecare număr poate fi un număr scris sau o expresie a parametrilor. Fiecare solid are o culoare și **Afișat când**: lăsați-l gol pentru a-l arăta mereu sau numiți un parametru Da / Nu (ori scrieți o comparație, de exemplu `Shelves >= 3`) pentru a-l arăta doar atunci. Acesta este un parametru de vizibilitate.

### Desenarea unui profil

Profilul unei extrudări sau al unei revoluții se desenează pe planul său de lucru, sub previzualizare:

- Faceți clic pe foaie pentru a adăuga un punct după cel ales.
- Trageți un punct pentru a-l muta. Punctele se fixează pe grilă; țineți {{key:Shift}} pentru a le plasa liber.
- Faceți clic pe un pătrat mic de pe un segment pentru a adăuga un punct acolo. {{key:Shift}}+clic pe el face din segment un arc (faceți din nou clic pentru celălalt sens, apoi drept).
- Faceți dublu clic pe un punct pentru a-l elimina.

Punctele goale sunt setate prin parametri: modificați-le în tabel, nu prin tragere.

## Operații booleene

Fila {{ui:Booleans}} taie al doilea solid din primul sau le unește. Rezultatul unei operații booleene poate fi tăiat sau unit din nou. Un solid folosit într-o operație booleană este desenat doar ca parte a acesteia.

Când al doilea solid este ascuns de parametrul său Da / Nu, primul se păstrează cum este; când primul este ascuns, rezultatul este ascuns.

## Simbolul de plan

Fila {{ui:Plan symbol}} desenează ce arată planul pentru această familie, în locul secțiunii solidelor sale: linii, dreptunghiuri, cercuri, arce, poligoane și text, pe axele proprii ale familiei. Fiecare piesă are un **stilou** (1–16, o expresie sau un parametru Stilou), o **umplere** (fără, plină, diagonală, încrucișată, beton, izolație, pământ sau un parametru Umplere), o expresie **arătat de**, un **interval de tăiere** în milimetri deasupra bazei sale (desenată cu grosime întreagă când tăierea planului este în interiorul ei, subțire sub ea, punctată deasupra ei: un dulap deasupra tăierii apare punctat), un nivel de detaliu și o repetare. Textul poate numi parametri ca `{Nume}`. **Planul arată: Tăierea solidelor** păstrează tăierea solidelor în plan, în timp ce simbolul rămâne în familie. Alte programe citesc simbolul ca amprenta familiei (linii și forme; textul rămâne în BimCraft).

## Familii în interior

Fila {{ui:Families inside}} pune o altă familie în interiorul acesteia: un picior într-o masă, un mâner pe o ușă. Alegeți familia, apoi unde se află (x, y, z), cât este rotită (doar sferturi de tură: 0, 90, 180, 270), când este arătată și valorile pe care le primește, câte una pe rând, ca `Height = Height - 40`. Salvarea familiei interioare desenează din nou pe aceasta; o familie ținută de alta nu poate fi ștearsă; o familie nu se poate ține pe sine, nici indirect printr-o alta, iar imbricarea se oprește la patru niveluri.

## Puncte active

Un punct activ este un punct sau o muchie pe care o trageți pentru a schimba un parametru. Pe fila {{ui:Hotspots}} adăugați unul, alegeți axa pe care o trage și parametrul numeric pe care îl schimbă, iar poziția sa o scrieți în aceleași expresii ca solidele. În previzualizare, alegeți **Puncte active** sub mânere pentru a le trage. Pe un element plasat în plan (selectați-l cu {{ui:Select}}), punctele active x și y apar ca apucători: trageți unul și elementul primește dimensiunea care pune punctul acolo, prin orice formule între ele; un pas de anulare îl readuce. Un punct activ nu poate schimba un parametru condus, un Da / Nu sau un cuvânt.

În vederea 3D, aceleași puncte active apar ca apucători pe elementul selectat, iar cele sus-jos (axa z) apar și ele acolo, ceea ce planul nu le poate desena. Selectați elementul, trageți un apucător pe axa sa și lăsați: elementul primește dimensiunea care pune punctul acolo, ca un singur pas de anulare. Apucătorii sunt ascunși cât timp este activă caseta de secțiune, deoarece aceasta folosește aceiași apucători.

## Conectori

Familiile plasate pe un planșeu (mobilier, corpuri fixe și altele) au o filă {{ui:Connectors}}: punctele în care o conductă sau un canal se leagă de element, ca la robinetul și scurgerea unui lavoar. Faceți clic pe {{ui:Add a connector}} și setați:

- **Tip**: conductă sau canal și **Sistemul** său (apă rece, scurgere sanitară, aer de alimentare…).
- **x**, **y** și **z**: unde se află, pe axele proprii ale familiei. Ca numerele unui solid, fiecare poate fi un număr sau o formulă a parametrilor, astfel încât conectorul se mută odată cu dimensiunea.
- **Direcția de ieșire**: direcția în care o conductă sau un canal iese din el, de-a lungul uneia dintre axele familiei (o scurgere sub un lavoar merge **Jos**).
- **Dimensiune (mm)**: dimensiunea nominală (DN) a conductei sau diametrul canalului rotund.
- **Curgere**: **Intrare** pentru un conector alimentat (un robinet), **Ieșire** pentru unul care scurge.

Previzualizarea desenează fiecare conector ca un inel cu o săgeată pentru direcția de ieșire. Ușile și ferestrele nu au conectori.

Pentru un obiect sanitar, alegeți care este sub **Obiect sanitar** (vas WC, lavoar, chiuvetă de bucătărie, duș, cadă de spălat rufe). Obiectele de pornire deja o spun.

Fiecare element plasat din familie primește conectorii săi ca porturi în fișierul IFC, iar aceștia sunt refăcuți când elementul își schimbă dimensiunea sau când familia este salvată. Programele care citesc sistemele IFC văd unde aparține fiecare conductă sau canal.

## Previzualizarea și mânerele sale

Previzualizarea este familia scrisă ca IFC, de același cod care o salvează în model, și desenată înapoi. Ce vedeți este ce primesc celelalte programe. Sub ea, **Dimensiune afișată** setează valorile parametrilor pe care le folosește previzualizarea.

**Mânerele** sunt puncte pe previzualizare: **Dimensiunea** arată un mâner pentru Lățime, Adâncime și Înălțime; **Solidul selectat** arată câte unul pe fiecare față a solidului ales. Trageți un mâner:

- pe o față stabilită de un parametru, dimensiunea afișată se schimbă (formulele familiei se păstrează);
- pe o față stabilită de un număr scris, numărul se schimbă.

## Salvarea

{{ui:Save the family}} verifică familia, apoi desenează din nou fiecare dimensiune a ei și refac fiecare element, ca un singur pas de anulare. Dacă o dimensiune nu poate fi desenată cu schimbarea (de exemplu, un solid ar avea lățime zero la acea dimensiune), nimic nu se salvează, iar editorul spune care dimensiune este.

Dacă altcineva a salvat aceeași familie cât timp editorul dumneavoastră era deschis (într-o sesiune Live TeamWork sau într-o altă fereastră), {{ui:Save the family}} refuză și o spune, în loc să-i înlocuiască modificarea cu a dumneavoastră. Închideți editorul, deschideți din nou familia pentru a vedea modificarea lor și faceți-o pe a dumneavoastră din nou.

:::note
Geometria este salvată ca solidele proprii ale IFC: extrudări, revoluții, discuri baleiate și rezultate booleene. Nimic nu este transformat într-o listă de triunghiuri, astfel încât fișierele rămân mici, iar alte programe pot citi formele ca forme. Profilele cu arce sunt salvate cu arce în IFC4; IFC2X3 nu are segmente de arc într-un profil, deci acolo arcele sunt salvate ca piese drepte scurte.
:::

Vezi și [Familii și dimensiunile lor](topic:families).
