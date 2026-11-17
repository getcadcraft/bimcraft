---
title: Deschiderea unui pachet de proiect
summary: Un pachet de proiect este un singur fișier zip cu un model, vizualizările, aranjările în pagină și grupurile de proprietăți. Deschideți-l, afișați o vizualizare cu etajul și straturile sale, deschideți o aranjare în pagină și vedeți proprietățile în grupurile proprii ale proiectului.
keywords: pachet, pachet de proiect, ccbundle, zip, vizualizări, hartă a vizualizărilor, aranjări în pagină, carte de aranjări, combinație de straturi, grupuri de proprietăți, standarde, pln, șablon
from: b5b86e8f
---

## Ce veți face

Deschideți un **pachet de proiect** (`.ccbundle.zip`) și lucrați cu proiectul așa cum a fost organizat: vizualizările, aranjările în pagină și grupurile de proprietăți, peste model.

Un pachet conține:

- modelul ca IFC,
- aranjările în pagină ca PDF și DWG,
- o listă a ceea ce omite IFC: vizualizările (fiecare cu etajul, combinația de straturi și scara), aranjările în pagină și desenele plasate pe ele, definițiile de proprietăți în grupurile lor, clasificările și standarde precum straturi, seturi de penițe, tipuri de linii, umpleri, suprafețe și compozite.

Pachetele sunt scrise de un script open-source care rulează în Archicad și cere chiar Archicad-ului aceste liste. BimCraft nu citește niciodată direct fișierele `.pln` sau `.tpl`; vezi [Deschiderea fișierelor de proiect .pln și .pla](topic:pln-project-files).

## Crearea unui pachet

Scriptul este o previzualizare: nu a fost încă testat pe fiecare versiune de Archicad. Obțineți-l de la [github.com/getcadcraft/bim-project-bundle](https://github.com/getcadcraft/bim-project-bundle). Aveți nevoie de Archicad 24 sau mai nou și de Python 3.8 sau mai nou; nu trebuie instalat nimic altceva.

1. Salvați `archicad_bundle.py` într-un dosar, de exemplu `C:\cc-bundle`.
2. În Archicad, deschideți proiectul și creați un set de publicare numit exact **CadCraft bundle**: vizualizarea 3D ca IFC, fiecare aranjare în pagină ca PDF și fiecare aranjare din nou ca DWG, publicate în fișiere pe disc, într-un singur dosar plat.
3. Cu proiectul deschis, rulați o singură dată `python archicad_bundle.py --probe --out .`. Comanda doar citește și scrie `probe.json`.
4. Rulați `python archicad_bundle.py --out . --translator "IFC4 Reference View"` (folosiți traducătorul IFC ales). Archicad publică setul, iar scriptul scrie `<project>.ccbundle.zip`.

Dacă publicarea prin script eșuează, publicați setul manual și rulați `python archicad_bundle.py --out . --no-publish --files <folder>\*.ifc <folder>\*.pdf <folder>\*.dwg`. README-ul depozitului conține toate opțiunile. Dacă ceva nu ajunge, deschideți o problemă acolo și atașați `probe.json`.

## Deschiderea unui pachet

1. Faceți clic pe {{ui:Alegere fișier}} sau trageți `.ccbundle.zip` peste BimCraft. Într-un dosar deschis cu {{ui:Deschidere dosar}}, pachetele sunt listate sub **Pachete de proiect**; faceți clic pe unul după nume.
2. Modelul se deschide ca orice IFC, iar secțiunea **Pachet de proiect** apare în stânga, sub datele fișierului.

Nimic nu este încărcat: pachetul este citit pe calculator, câte un fișier pe rând, astfel încât un model mare nu este copiat de două ori.

## Afișarea unei vizualizări

Sub **Vizualizări**, vizualizările sunt grupate după dosarele pe care le aveau în proiect. Faceți clic pe numele unei vizualizări:

- **Un plan de nivel** arată doar etajul său, văzut de sus.
- **Combinația sa de straturi** ascunde elementele de pe straturile pe care le ascunde combinația. Linia de stare arată câte elemente au fost ascunse.
- **Scara sa** este afișată lângă nume și în linia de stare.
- **O vizualizare 3D** arată toate etajele.

Pentru a afișa din nou totul, folosiți {{ui:Afișare totală}} din {{ui:Afișare}} și bifați fiecare etaj.

:::note
BimCraft găsește straturile prin atribuirile de straturi din fișierul IFC. Dacă IFC-ul a fost exportat fără ele, o combinație de straturi nu ascunde nimic, iar linia de stare arată 0 elemente ascunse.
:::

## Deschiderea unei aranjări în pagină

Sub **Aranjări în pagină**, fiecare aranjare arată numărul, numele, formatul hârtiei și vizualizările plasate pe ea.

- **PDF** salvează PDF-ul aranjării din pachet.
- **DWG** deschide desenul aranjării în vizualizarea 2D. Faceți clic pe orice vizualizare pentru a reveni la model.
- **Deschidere în …** trimite fișierul aranjării către aplicația care lucrează cu el, într-o filă nouă: PDF-ul către MarkupCraft, DWG-ul către CadCraft. Apare doar acolo unde acea aplicație este deschisă lângă BimCraft. Fișierul este citit din pachet în timpul încărcării filei, iar nimic nu este încărcat.

O aranjare fără niciunul dintre ele spune **Niciun fișier în pachet**.

## Vedeți proprietățile în grupurile proiectului

Alegeți un element. **Grupuri de proprietăți** arată proprietățile sale sub grupurile definite de proiect, potrivite prin setul de proprietăți și numele pe care definiția le dă pentru IFC, sau altfel după nume. Restul rămân în {{ui:Proprietăți}}, ca de obicei. **Definiții de proprietăți** listează fiecare definiție cu grupul, tipul și numele IFC.

## Standarde și note

- **Standarde** numără straturile, combinațiile de straturi, seturile de penițe, tipurile de linii, umplerile, suprafețele, compozitele și materialele din pachet.
- **Note** listează ce nu a putut obține scriptul din acea versiune de Archicad, orice câmp pe care BimCraft nu l-a putut citi și orice fișier pe care pachetul îl numește, dar nu îl conține.

## Depanare

- **„… este un zip, dar nu un pachet de proiect.”** Arhiva nu are `manifest.json`. Dezarhivați-o și deschideți fișierul `.ifc` din ea.
- **„… este un pachet de proiect mai nou decât poate citi acest BimCraft.”** Actualizați BimCraft.
- **„… nu conține modelul pe care îl numește manifestul.”** Arhiva a fost întreruptă sau modificată. Creați din nou pachetul.
- **O vizualizare arată toate etajele.** Etajul său nu se află în IFC-ul modelului (linia de stare spune asta). Verificați că exportul IFC a inclus acel etaj.

Vedeți și [Lucrul între două programe BIM](topic:two-bim-programs) și [Ce citește BimCraft din fiecare format](topic:file-formats).
