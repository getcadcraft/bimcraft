---
title: Depanare
summary: Mesajele afișate de BimCraft, ce le cauzează și ce trebuie făcut, pentru deschiderea fișierelor și dosarelor, a modelelor 3D, a desenelor și a modificărilor.
keywords: problemă, eroare, nu funcționează, nu se poate deschide, eșuat, incomplet, corupt, lent, blocare, gol, lipsă, mesaj, ajutor
from: 1e5a79fc
---

Mesajele apar în linia de stare din partea de jos a scenei, cu roșu când ceva a eșuat. Găsiți mesajul de mai jos.

## Deschiderea fișierelor

**„*name* nu este un fișier IFC, RVT, RFA, DWG sau DXF.”**
BimCraft nu a recunoscut fișierul. Verificați extensia și faptul că fișierul nu este gol. Fișierele PDF, imaginile și fișierele de birou nu se deschid.

**„.ifczip nu este încă acceptat. Salvați sau exportați modelul ca fișier .ifc simplu.”** (la fel și pentru `.ifcxml`)
Dezarhivați `.ifczip` (este un zip obișnuit care conține un `.ifc`) sau exportați IFC simplu.

**„… este un fișier de proiect pe care BimCraft nu îl citește încă.”**
Un fișier `.pln`, `.pla`, `.tpl` sau `.bpn`. Exportați IFC sau DWG din el și deschideți-l: vezi [Deschiderea fișierelor de proiect .pln și .pla](topic:pln-project-files).

**„Acest fișier IFC nu a putut fi citit.”**
Fișierul IFC este deteriorat sau nu este cu adevărat IFC. Deschideți-l într-un editor de text: un fișier IFC real începe cu `ISO-10303-21;`. Exportați-l din nou.

**„Acest fișier este incomplet: are … MB, dar propriul index indică date de cel puțin … MB. …”**
Fișierul de proiect sau de familie a fost tăiat în timpul copierii, încărcării sau sincronizării. Un fișier de pe un disc în cloud „doar online” arată la fel. Un fișier deschis singur se deschide în continuare, cu acest mesaj în partea de sus a cardului și cu „Se afișează ce s-a recuperat; copiați din nou originalul pentru modelul complet.”: cardul arată doar părțile ale căror octeți sunt toți în fișier și listează restul sub **Nu este în fișier**. Faceți fișierul disponibil offline în discul din cloud sau copiați din nou originalul și redeschideți-l. Într-un dosar, BimCraft arată în schimb cea mai nouă copie de rezervă completă.

**„… Lista de conținut a fișierului este și ea în partea lipsă, deci nimic din el nu poate fi deschis.”**
Fișierul a fost tăiat atât de devreme, încât nici lista lui de conținut nu există. Din această copie nu se poate recupera nimic. Copiați din nou originalul și redeschideți-l.

**„Acest fișier compus nu are un flux BasicFileInfo, deci nu este un fișier Revit.”**
Fișierul este un fișier compus de alt tip (documentele vechi de birou folosesc același container). Verificați că ați ales fișierul corect.

**„Încă se lucrează la cel anterior…”**
BimCraft este încă ocupat cu fișierul sau dosarul anterior. Așteptați până când linia de stare se termină, apoi încercați din nou.

**Selectorul de fișiere estompează fișierul meu.**
Selectorul oferă doar `.ifc`, `.rvt`, `.rfa`, `.rte`, `.rft`, `.dwg` și `.dxf`. Trageți în schimb celelalte fișiere pe pagină, iar BimCraft spune dacă le poate citi.

## Deschiderea dosarelor

**„Acest dosar are mai mult de 20.000 de fișiere. Alegeți un dosar mai mic, de exemplu un singur proiect.”**
Dosarul ales este prea sus în ierarhie, de exemplu un disc întreg. Alegeți un singur dosar de proiect.

**„Browserul nu a acordat acces la *name*. Alegeți-l din nou cu Deschidere dosar.”**
Ați făcut clic pe {{ui:Redeschidere}} la un dosar recent, iar permisiunea browserului a fost refuzată sau a expirat. Alegeți din nou dosarul sau trageți-l în pagină.

**Browserul spune că va „încărca” fișierele.**
Acesta este cuvântul browserului pentru predarea fișierelor către pagină. BimCraft nu le trimite nicăieri. Trageți dosarul în pagină ca să evitați întrebarea.

**Nu se întâmplă nimic pe telefon sau tabletă.**
Multe browsere mobile nu pot alege dosare. Deschideți fișiere individuale sau folosiți un calculator.

## Motorul IFC se încarcă prima dată

**Linia de stare rămâne la „Pornire motor IFC…” sau afișează o eroare, de exemplu „Failed to fetch”.**
Motorul IFC nu a putut fi descărcat. Poate fi offline sau un firewall ori un blocator de conținut îl oprește.

:::offline
Aplicația este offline. Dacă butonul din bara aplicației nu spune {{ui:Pregătit pentru offline}}, motorul IFC nu a fost niciodată salvat în acest browser. Reconectați-vă, deschideți din nou fișierul, apoi faceți clic pe {{ui:Salvare pentru offline}}, ca să funcționeze offline data viitoare. Vezi [Online și offline](topic:online-offline).
:::

:::online
Reîncărcați pagina și încercați din nou. Pe o rețea de lucru, cereți echipei IT să permită fișierele `.wasm` ale site-ului.
:::

## Salvarea pentru utilizare offline

**Butonul afișează {{ui:Nu s-a putut salva}}.**
Unele fișiere nu s-au descărcat, de obicei pentru că s-a întrerupt conexiunea. Verificați conexiunea și faceți din nou clic pe buton. Orice copie offline anterioară este păstrată până când una nouă este completă.

**Butonul afișează {{ui:Modul offline nu este disponibil}}.**
Această fereastră nu poate păstra o copie offline, de exemplu o fereastră privată sau un calculator de lucru administrat. Vezi [Lucrul offline](common:offline).

**Butonul rămâne mult timp la „Salvare *n* din *m”.**
Copia BimCraft are circa 11 MB, cea mai mare parte fiind motorul IFC. Păstrați fila deschisă până când afișează {{ui:Pregătit pentru offline}}.

**BimCraft s-a deschis offline, dar pare învechit.**
Copia salvată este dintr-o vizită anterioară. Când există conexiune, faceți clic pe {{ui:Pregătit pentru offline}} și alegeți {{ui:Salvare din nou (obținere a celei mai noi versiuni)}}.

## Vizualizarea 3D

**Modelul nu este unde mă așteptam sau este minuscul.**
Apăsați {{key:F}} sau faceți clic pe {{ui:Potrivire}}. Potrivirea încadrează întotdeauna tot ce este în model, inclusiv nivelurile debifate și elementele rătăcite departe de clădire, deci clădirea poate părea mică. Măriți de acolo.

**Clicul nu alege nimic.**
Țineți mouse-ul nemișcat când faceți clic: o mică tragere orbitează. Elementele de pe niveluri debifate nu pot fi alese. Cu {{ui:Spații}} activat, spațiile transparente sunt alese înaintea celor din interior.

**Butonul {{ui:Muchii}} este estompat: „Muchiile sunt dezactivate pentru modelele foarte mari”.**
Modelul are peste 1.5 milioane de triunghiuri. Muchiile sunt lăsate dezactivate ca să economisească memorie.

**Fila devine lentă, albă sau arată pagina de blocare a browserului.**
Modelul este prea mare pentru memoria pe care o primește fila de la browser. Închideți celelalte file și reîncărcați. Exportați un IFC mai mic: o clădire, o disciplină sau mai puține niveluri. Vezi [Browsere, dispozitive și memorie](topic:platforms).

**Vizualizarea 3D rămâne goală.**
WebGL poate fi oprit sau blocat. În setările browserului, activați accelerarea hardware (sau accelerarea grafică) și reporniți browserul.

## Editarea IFC

**„Folosiți un număr.”** Valoarea este numerică. Scrieți un număr simplu, fără unități, de exemplu `2.4`.

**„Folosiți un număr întreg.”** Valoarea este un număr de bucăți sau un întreg. Eliminați zecimalele.

**„Se pot edita doar proprietățile cu o singură valoare.”** Listele, enumerările și cantitățile sunt doar pentru citire.

**{{key:Mod+S}} deschide fereastra „Salvare pagină” a browserului.**
Nu există modificări nesalvate, deci BimCraft lasă tasta browserului. Închideți fereastra.

**{{key:Mod+Z}} nu face nimic.**
Funcționează doar când există modificări nesalvate și nu scrieți într-un câmp. După o salvare nu mai există nimic de anulat.

**Lista {{ui:Modificări}} arată încă modificări după ce le-ați abandonat și ați deschis un desen sau un dosar.**
Când răspundeți la întrebarea „Le abandonați?” cu OK și apoi deschideți altceva decât un model IFC, vechile modificări rămân în memorie, iar {{ui:Salvare ca IFC}} le-ar salva totuși. Ca să începeți cu adevărat de la zero, deschideți din nou IFC-ul original sau reîncărcați pagina.

**Modificarea mea a schimbat mai multe elemente decât am ales.**
Ați schimbat o proprietate dintr-un set marcat „(tip)”. Proprietățile de tip se aplică fiecărui element din acel tip. Faceți clic pe {{ui:Anulare}}. Vezi [Schimbarea unei proprietăți de tip pentru fiecare element de un tip](topic:type-vs-instance).

## Desene

**„*name* nu a putut fi citit. Poate fi deteriorat sau salvat într-un format pe care cititorul nu îl tratează încă (…).”**
Salvați desenul din programul care l-a creat ca DWG mai vechi (2018 sau anterior) sau ca DXF, apoi încercați din nou.

**„Acest desen nu are ce afișa.”** sau **„*name* este un desen gol: nu conține linii, text sau blocuri.”**
Desenul este gol sau conține doar lucruri pe care BimCraft nu le desenează încă (vezi **Nedesenat încă** în dreapta).

**„Acest desen este foarte mare; se afișează doar o parte din el.”**
BimCraft a oprit desenarea ca să rămână receptiv. Dezactivați straturile de care nu aveți nevoie sau deschideți foile necesare dintr-un desen mai mic.

**Lipsesc părți dintr-o foaie.**
Pot lipsi desene externe: căutați sub **Desene externe**, în dreapta. Vezi [Găsirea desenelor și imaginilor externe](topic:dwg-linked-files). Straturile pot fi și ele dezactivate: faceți clic pe {{ui:Toate active}}.

**O imagine apare ca un cadru gol.**
Fișierul ei nu a fost găsit sau este un TIFF („TIFF nu poate fi afișat într-un browser”). Adăugați o copie PNG sau JPEG cu {{ui:Adăugare imagini…}}.

**Derularea pe touchpad mărește în loc să mute desenul.**
Așa funcționează desenele în BimCraft. Faceți clic și trageți pentru deplasare.

## Încă blocat

Citiți [Ce nu este încă realizat](topic:not-built-yet): lucrul pe care îl căutați s-ar putea să nu existe în această versiune.
