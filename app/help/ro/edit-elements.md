---
title: Ștergerea, decuparea, copierea și lipirea elementelor de construcție
summary: Selectați pereți, uși, mobilier sau orice alt element dintr-un model IFC; ștergeți-le, decupați-le sau copiați-le și lipiți-le acolo unde faceți clic, pe loc sau la alt nivel.
keywords: ștergere, eliminare, șterge, decupare, copiere, lipire, duplicare, mutare, selectare totală, selectare toate, element de construcție, perete, ușă, fereastră, scară, gol, anulare
from: d9eec37f
---

## Ce veți face

Modificați ce se află într-un model IFC: eliminați elementele nedorite, copiați un perete sau un set de mobilier într-un alt loc sau mutați elemente prin decupare și lipire. Fiecare modificare este un pas pe care îl puteți anula, iar salvarea scrie un fișier nou, astfel încât originalul rămâne neschimbat.

## Pași

1. Deschideți un model IFC. Consultați [Deschiderea unui model IFC și explorarea lui în 3D](topic:open-ifc-model).
2. Selectați ce doriți să modificați: faceți clic pe un element, țineți apăsat {{key:Mod}} sau {{key:Shift}} și faceți clic pentru a selecta mai multe, sau apăsați {{key:Mod+A}} ({{ui:Mai multe}}, {{ui:Selectare totală}}) pentru a selecta toate elementele afișate.
3. Apoi:
   - **Ștergere:** apăsați {{key:Delete}}, sau {{ui:Mai multe}}, {{ui:Ștergere}}.
   - **Copiere:** apăsați {{key:Mod+C}} sau faceți clic pe {{ui:Copiere}}.
   - **Decupare:** apăsați {{key:Mod+X}}, sau {{ui:Mai multe}}, {{ui:Decupare}}. Elementele dispar și le puteți lipi.
4. Pentru a lipi, apăsați {{key:Mod+V}} sau faceți clic pe {{ui:Lipire}}. O casetă transparentă, de dimensiunea a ceea ce ați copiat, urmează indicatorul pe nivelul ales în bara de plasare. Apăsați {{key:R}} pentru a o roti cu 90°, apoi faceți clic acolo unde trebuie să fie. Fiecare clic plasează o nouă copie; apăsați {{key:Esc}} pentru a opri.
5. Sau apăsați {{key:Mod+Shift+V}} ({{ui:Mai multe}}, {{ui:Lipire în aceeași poziție}}): după o decupare, elementele revin exact la locul lor; după o copiere, copia se așază chiar lângă originale.
6. Faceți clic pe {{ui:Salvare ca IFC}} pentru a descărca modelul modificat.

## Ce înseamnă un element

- **Piese:** o scară include rampele sale, un perete-cortină include panourile sale, iar orice alcătuit din piese le include pe toate.
- **Goluri:** un perete include golurile tăiate în el. Ștergerea unei uși sau a unei ferestre înlătură și golul pe care îl umplea, astfel încât peretele se închide, așa cum se întâmplă într-un program de proiectare. Ștergerea unui perete desenat în BimCraft șterge și ușile și ferestrele lui și reunește pereții rămași. Ștergerea unui perete dintr-un fișier realizat în altă parte lasă ușile și ferestrele unde erau.
- **Date:** o copie are același tip, aceleași materiale, seturi de proprietăți și cantități ca originalul, și un GlobalId nou. Modificarea ulterioară a unei valori din copie nu afectează originalul.
- **Elementele de bibliotecă** își păstrează datele din bibliotecă; o copie primește următorul număr liber de element, iar un element decupat și lipit înapoi își păstrează numărul.

## Ce ar trebui să vedeți

- „Șters: …” sau „Lipit: …” în lista {{ui:Modificări}}. {{key:Mod+Z}} anulează ultima modificare; {{key:Mod+Y}} o restabilește.
- După o ștergere, linia de stare arată câte piese și câte goluri au fost șterse și ele.
- Elementele lipite sunt selectate, astfel încât puteți lipi din nou pe loc pentru a crea un rând sau le puteți șterge.

## Bună de știut

- Copiile folosesc aceeași geometrie ca originalul (IFC permite elementelor să o partajeze), astfel încât fișierul crește foarte puțin.
- Elementele de construcție se lipesc în modelul din care au fost copiate, în aceeași filă. Pentru a folosi elemente de bibliotecă plasate într-un alt model, copiați câte un element o dată: consultați [Copierea, lipirea și duplicarea elementelor de bibliotecă](topic:copy-paste).
- Nivelurile, spațiile, clădirile și amplasamentul nu pot fi șterse sau copiate. Selectați în schimb elementele din ele. O cameră desenată în BimCraft provine din pereții din jur: ștergeți un perete pentru a uni două camere.
- Pereții, ușile și ferestrele desenate cu uneltele proprii de perete, ușă și fereastră ale BimCraft nu pot fi încă copiate, decupate sau duplicate; linia de stare o arată. Desenați-le din nou. Ștergerea funcționează.
- Copierea pune și numele și proprietățile elementelor copiate pe clipboard, ca text, pentru a le lipi într-o foaie de calcul sau într-un e-mail.

## Greșeli frecvente

- **{{ui:Ștergere}} este estompată.** Nu este selectat nimic, sau sunt selectate doar niveluri sau spații. Treceți cu cursorul peste ea pentru a citi motivul.
- **Lipirea spune că elementele provin dintr-un alt model.** Ați deschis alt model după ce le-ați copiat. Deschideți din nou primul model și copiați-le acolo.
- **Copia lipită se află la alt etaj.** {{ui:Nivel}} din bara de plasare decide unde ajunge; selectați nivelul înainte de a face clic.

## Vezi și

- [Ascunderea, izolarea și transparența elementelor](topic:hide-and-isolate)
- [Taste și mouse](topic:keyboard#edit)
