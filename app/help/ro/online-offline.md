---
title: Online și offline
summary: Ce încarcă BimCraft de pe site, cum Salvare pentru offline face ca modelele IFC și desenele DWG să se deschidă fără conexiune și de ce nu se încarcă niciodată ceea ce deschideți.
keywords: offline, online, internet, conexiune, fără rețea, avion, vizită pe șantier, salvare pentru offline, pregătit pentru offline, încărcare, confidențialitate, wasm, webassembly, motor IFC, dwg, cloud
from: 39e5c7eb
---

BimCraft vă citește fișierele în fila browserului. Deschiderea, inspectarea, editarea și salvarea nu trimit niciodată fișierele nicăieri, nici online, nici offline. [Lucrul offline](common:offline) explică cum funcționează copiile offline în toate aplicațiile; această pagină acoperă ce este specific BimCraft.

## Ce încarcă BimCraft de pe site

| Parte | Când se încarcă fără o copie offline | Dimensiune |
|---|---|---|
| Aplicația în sine, cu vizualizatorul 3D și codul motorului IFC | Când deschideți BimCraft | Câțiva megaocteți |
| Partea WebAssembly a motorului IFC | Primul fișier IFC deschis în filă: „Pornirea motorului IFC…” | Circa 1.6 MB |

Desenele DWG și DXF, fișierele de proiect și de familie și dosarele nu necesită nimic în plus: cititoarele lor fac parte din aplicație.

## Salvarea BimCraft pentru utilizare offline

1. Deschideți BimCraft cât sunteți online.
2. Faceți clic pe {{ui:Salvare pentru offline}} din bara aplicației de sus.
3. Urmăriți numărul de pe buton cum crește: „Se salvează 40 din 212”, de exemplu. Copia BimCraft are circa 11 MB, pentru că include motorul IFC.
4. Așteptați până apare {{ui:Pregătit pentru offline}}.

Odată ce apare {{ui:Pregătit pentru offline}}, modelele IFC, desenele DWG și DXF, fișierele de proiect, dosarele și acest ajutor se deschid fără nicio conexiune. Nu trebuie să deschideți mai întâi un IFC sau un DWG ca să „încălziți” cititoarele.

Ca să actualizați sau să eliminați copia, faceți clic pe {{ui:Pregătit pentru offline}} și alegeți {{ui:Salvare din nou (obținere a celei mai noi versiuni)}} sau {{ui:Eliminare a copiei offline}}.

## Ce spune butonul

| Buton | Înseamnă |
|---|---|
| {{ui:Salvare pentru offline}} | Nu există încă o copie offline în acest browser. Faceți clic ca să salvați una |
| „Se salvează *n* din *m*” | Se salvează; mențineți fila deschisă până se termină |
| {{ui:Pregătit pentru offline}} | Salvat. Treceți cu mouse-ul ca să vedeți când; faceți clic pentru meniu |
| {{ui:Nu s-a putut salva}} | Unele fișiere nu s-au descărcat. Verificați conexiunea și faceți clic ca să încercați din nou. Ultima copie bună, dacă există, se păstrează |
| {{ui:Modul offline nu este disponibil}} | Această fereastră nu poate păstra o copie offline (o fereastră privată sau un calculator administrat). Vezi [Lucrul offline](common:offline) |

:::offline
Sunteți offline.

- Dacă butonul spune {{ui:Pregătit pentru offline}}, fiecare tip de fișier se deschide ca de obicei.
- Dacă nu, funcționează doar ce a încărcat deja această filă: un cititor care nu s-a încărcat niciodată în această filă nu poate porni, iar deschiderea acelui tip de fișier afișează o eroare de la browser în linia de stare. Nu reîncărcați fila până nu aveți din nou conexiune.
:::

## Ce nu necesită niciodată conexiune

Odată ce BimCraft este deschis în filă, acestea funcționează offline chiar fără o copie salvată:

- Citirea fișierelor de proiect și de familie și verificarea dosarelor.
- Alegerea elementelor, citirea proprietăților și editarea valorilor IFC într-un model deja deschis.
- {{ui:Salvare ca IFC}} și {{ui:Descărcare CSV}}: ambele sunt descărcări făcute în filă.

## Ce nu este încă disponibil

- **Salvarea în cloud.** Fișierele se salvează doar pe calculator.

Vezi [Unde sunt salvate fișierele](common:your-files).
