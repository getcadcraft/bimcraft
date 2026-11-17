---
title: Taste și mouse
summary: Fiecare acțiune de la taste, mouse, trackpad și ecran tactil din BimCraft, grupată după ce vedeți.
keywords: tastatură, scurtături, taste rapide, taste, mouse, trackpad, tactil, orbitare, panoramare, zoom, ascundere, izolare, transparență, anulare, refacere, copiere, lipire, duplicare, salvare, potrivire, imprimare vizualizare, Esc, setări, desenare, perete, ușă, fereastră, plan
from: 5c6eedce
---

BimCraft are puține scurtături. Cea mai mare parte a lucrului se face cu mouse-ul și cu panourile. Scurtăturile scrise cu {{key:Mod}} folosesc Cmd pe Mac și Ctrl în rest. Vedeți [Taste, mouse-uri și trackpad-uri](common:keys) pentru cum sunt scrise tastele în acest ajutor.

## Peste tot

| Tastă | Ce face |
|---|---|
| {{key:Ctrl+Shift+F}} | Parcurge modurile de ecran: normal, ecran complet, ecran complet cu barele ascunse. Ctrl pe toate platformele, inclusiv pe Mac |
| {{key:Esc}} | Iese din ecranul complet |
| {{key:Mod+,}} | Deschide {{ui:Setări}}. Vedeți [Setările BimCraft](topic:settings) |
| {{key:Tab}} | Trece între butoane, casete de bifare și valori. Fiecare control poate fi atins de la tastatură |

## Vizualizarea 3D (modele IFC)

| Tastă sau acțiune | Ce face |
|---|---|
| {{key:F}} | Potrivește tot modelul, vedere din trei sferturi (la fel ca {{ui:Potrivire}}) |
| {{key:Esc}} | Golește selecția sau oprește plasarea ori lipirea |
| Clic | Alege elementul de sub cursor; clic pe fundalul gol golește selecția |
| {{key:Mod}}+clic sau {{key:Shift}}+clic | Adaugă un element la alegere sau îl scoate din ea |
| {{key:H}} | Ascunde elementele alese. Vedeți [Ascundere, izolare și transparență a elementelor](topic:hide-and-isolate) |
| {{key:I}} | Afișează numai elementele alese (izolare) |
| {{key:T}} | Afișează elementele alese, restul transparent |
| {{key:Shift+H}} | Afișează din nou toate elementele |
| {{ui:Plimbare}} | Apoi {{key:W}} {{key:A}} {{key:S}} {{key:D}} sau săgeți pentru a merge, {{key:Shift}} aleargă, trageți pentru a privi în jur, {{key:Esc}} oprește. Vedeți [Plimbare prin model](topic:walk) |
| {{key:M}} | Măsoară distanțe și arii de fețe. Vedeți [Măsurarea distanțelor, ariilor fețelor și pozițiilor în 3D](topic:measure) |
| Trageți cu butonul stâng | Orbitare |
| Trageți cu butonul drept | Panoramare |
| {{key:Shift}} sau {{key:Mod}} și trageți cu butonul stâng | Panoramare (util pe trackpad) |
| Derulați roata, sau trageți cu butonul din mijloc | Zoom |
| Derulare cu două degete sau ciupire pe trackpad | Zoom |
| Un deget (ecran tactil) | Orbitare; o atingere alege |
| Două degete (ecran tactil) | Ciupire pentru zoom, mutare împreună pentru panoramare |

| {{key:X}} | Plan de secțiune pornit și oprit. Vedeți [Tăierea unui model IFC cu un plan de secțiune](topic:section-plane) |
| {{key:Shift+X}} | Casetă de secțiune în jurul elementelor alese, cu încăperea setată în Setări |

Nu există taste pentru {{ui:Sus}}, {{ui:Față}} și {{ui:Lateral}}; folosiți butoanele.

## Editare

Aceleași comenzi sunt în bara de instrumente: {{ui:Anulare}}, {{ui:Refacere}}, {{ui:Copiere}}, {{ui:Lipire}} și meniul {{ui:Mai multe}}, care arată fiecare tastă. Ele funcționează în vizualizarea 3D a unui model IFC, nu cât scrieți într-un câmp. Vedeți [Copiere, lipire și duplicare a elementelor de bibliotecă](topic:copy-paste).

| Tastă | Ce face |
|---|---|
| {{key:Mod+Z}} | Anulează ultima modificare |
| {{key:Mod+Y}} sau {{key:Mod+Shift+Z}} | Refă ce a fost luat înapoi de Anulare |
| {{key:Mod+C}} | Copiază elementele alese (numele și proprietățile lor merg și în clipboard, ca text) |
| {{key:Mod+X}} | Decupează elementele alese: le copiază, apoi le șterge |
| {{key:Mod+V}} | Lipește ce ați copiat: urmează cursorul, faceți clic unde merge |
| {{key:Mod+Shift+V}} | Lipire pe loc: unde a fost o decupare, sau lângă originale după o copiere |
| {{key:Mod+D}} | Duplică: copiază elementele alese și începe lipirea lor |
| {{key:Delete}} | Șterge elementele alese, cu părțile și golurile lor. Vedeți [Ștergerea, decuparea, copierea și lipirea elementelor de construcție](topic:edit-elements) |
| {{key:Mod+A}} | Alege fiecare element afișat |
| {{key:Esc}} | Anularea selecției |

Când este selectat text pe pagină, {{key:Mod+C}} copiază textul ca de obicei.

## Vizualizarea planului (Desenare)

Acestea funcționează cât timp {{ui:Desenare}} este pornit și nu scrieți într-un câmp. Vedeți [Trasarea pereților](topic:draw-walls) și [Uși și ferestre](topic:doors-and-windows).

| Tastă sau acțiune | Ce face |
|---|---|
| {{key:V}} | {{ui:Selectare}} |
| {{key:W}} | {{ui:Perete}} |
| {{key:D}} | {{ui:Ușă}} |
| {{key:N}} | {{ui:Fereastră}} |
| {{key:H}} | Cu {{ui:Ușă}} sau {{ui:Fereastră}}: balamalele la celălalt capăt |
| {{key:Shift}} cât trasați un perete | Îl menține la 0°, 90°, 180° sau 270° |
| Cifre și semnele de picior și de inch (`'` și `"`) | Începe scrierea unei lungimi în caseta {{ui:Lungime}}; {{key:Enter}} o folosește |
| {{key:Enter}}, {{key:Esc}}, clic dreapta sau dublu clic | Încheie peretele pe care îl trasați; {{key:Esc}} încă o dată revine la {{ui:Selectare}} |
| {{key:Delete}} | Șterge pereții, ușile și ferestrele alese; pereții rămași se unesc din nou |
| {{key:F}} cu cursorul peste plan | Potrivește planul |
| Derulare cu roata | Zoom în jurul cursorului |
| Trageți cu butonul din mijloc sau cel drept, sau {{key:Space}} și trageți | Panoramare; cu {{ui:Selectare}} pornit, o simplă tragere panorămează și ea |
| Trageți o ușă sau o fereastră cu {{ui:Selectare}} | O mută de-a lungul peretelui sau pe alt perete |
| Două degete (ecran tactil) | Ciupire pentru zoom, mutare împreună pentru panoramare |

## Plasarea și lipirea elementelor de bibliotecă

| Tastă | Ce face |
|---|---|
| {{key:R}} | Rotește elementul cu 90° |
| {{key:Tab}} | Fixare pe perete pornită și oprită: spatele elementului se pune pe peretele cel mai apropiat |
| {{key:Enter}} în **X, Y (mm)** | Plasează elementul la poziția scrisă |
| {{key:Esc}} | Oprește plasarea sau lipirea |

## Editarea valorilor IFC

| Tastă | Ce face |
|---|---|
| {{key:Enter}} | Păstrează valoarea scrisă |
| {{key:Esc}} | Renunță și pune la loc vechea valoare |
| Clic în altă parte | Păstrează valoarea scrisă |
| {{key:Mod+Z}} | Anulează ultima modificare. Numai cât timp aveți modificări nesalvate și nu scrieți într-un câmp |
| {{key:Mod+Y}} | Refă ce a fost luat înapoi de Anulare |
| {{key:Mod+S}} | Salvare ca IFC. Numai cât timp aveți modificări nesalvate; altfel se deschide comanda de salvare a browserului |

Pentru a edita numai de la tastatură: apăsați {{key:Tab}} până este evidențiată o valoare, apoi apăsați {{key:Enter}} pentru a începe scrierea.

## Desene 2D (DWG și DXF)

| Tastă sau acțiune | Ce face |
|---|---|
| {{key:F}} | Potrivește desenul sau planșa |
| {{key:P}} | Vizualizare imprimare pornită și oprită |
| Dublu clic | Potrivire |
| Trageți cu orice buton | Panoramare |
| Derulare cu roata | Zoom la cursor |
| Derulare cu două degete sau ciupire pe trackpad | Zoom la cursor. Derularea cu două degete nu panorămează |
| Un deget (ecran tactil) | Panoramare. Zoomul prin ciupire nu este încă realizat pentru desene |

## Desene în 3D

| Tastă sau acțiune | Ce face |
|---|---|
| {{key:3}} | 3D pornit și oprit (și în vizualizarea 2D) |
| {{key:F}} | Extinderi: întregul desen |
| Trageți cu butonul din mijloc sau cu cel stâng | Orbitare |
| Trageți cu butonul drept, sau {{key:Shift}} și trageți | Panoramare |
| Derulare cu roata | Zoom spre ce este sub cursor |
| Derulare cu două degete pe trackpad | Orbitare; cu {{key:Shift}}, panoramare |
| Ciupire pe trackpad | Zoom |
| Un deget (ecran tactil) | Orbitare |
| Două degete (ecran tactil) | Ciupire pentru zoom, mutare împreună pentru panoramare |

{{key:F}}, {{key:P}} și {{key:3}} nu fac nimic cât scrieți într-un câmp, cât este afișat tabelul de echipamente sau când țineți apăsat {{key:Mod}} ori {{key:Alt}}.

## Fișiere

| Acțiune | Ce face |
|---|---|
| Trageți un fișier pe pagină | Îl deschide |
| Trageți un dosar pe pagină | Îl deschide ca dosar de proiect, fără cerere de permisiune |
