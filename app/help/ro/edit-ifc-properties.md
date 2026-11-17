---
title: Modificarea proprietăților IFC și salvarea unei copii editate
summary: Modificați numele, eticheta, descrierea sau o valoare de proprietate a unui element, anulați și descărcați un fișier IFC nou, în timp ce originalul rămâne neschimbat.
keywords: editare, modificare, proprietăți, parametri, etichetă, nume, redenumire, marcă, salvare ca, descărcare, anulare, copiere, ifc, scriere
from: f8035d62
---

## Scop

Corectați datele dintr-un model IFC: redenumiți un element, reparați eticheta lui, modificați o valoare de proprietate. Apoi salvați un fișier IFC nou cu modificările. Fișierul pe care l-ați deschis nu este atins niciodată.

## Ce puteți modifica

| Câmp | Editabil |
|---|---|
| Nume, Tip de obiect, Etichetă, Descriere | Da |
| Valori simple de proprietate (text, numere, Da/Nu) | Da |
| Proprietăți de tip (seturi marcate „(type)”) | Da, iar modificarea se aplică fiecărui element de acel tip |
| Tip, GlobalId, Linie | Nu |
| Cantități (lungimi, arii, volume, numărători) | Nu |
| Liste, enumerări și alte valori cu mai multe părți | Nu |
| Geometrie, poziție, adăugarea sau ștergerea elementelor | Nu |

## Pași

1. Deschideți un model IFC și faceți clic pe elementul pe care vreți să îl modificați.
2. În panoul {{ui:Properties}}, faceți clic pe valoarea pe care vreți să o modificați. Ea devine o casetă de text. O valoare goală apare ca *gol*.
3. Tastați noua valoare.
4. Apăsați {{key:Enter}}, sau faceți clic în altă parte, pentru a o păstra. Apăsați {{key:Esc}} pentru a anula.
5. Priviți valoarea: acum este îngroșată, cu o bară albastră lângă ea, care marchează o valoare editată.
6. Priviți secțiunea {{ui:Changes}} din stânga: modificarea apare listată ca *element*: *câmp*, valoarea veche la valoarea nouă.
7. Repetați pentru alte valori sau alte elemente.
8. Faceți clic pe {{ui:Save as IFC}} (arată câte modificări așteaptă, de exemplu „Salvare ca IFC (3)”), sau apăsați {{key:Mod+S}}.
9. Găsiți „*nume original* (edited).ifc” în dosarul dumneavoastră de descărcări.

## Rezultat

Bara de stare spune „*nume* (edited).ifc salvat cu *n* modificări (… octeți). Fișierul original nu a fost modificat.” Lista {{ui:Changes}} se golește, pregătită pentru runda următoare.

## Tipuri de valori

- **Text**: orice tastați se păstrează așa cum este. Golirea câmpurilor Nume, Tip de obiect, Etichetă sau Descriere elimină valoarea.
- **Numere**: tastați un număr simplu, cum ar fi `2.4` sau `1200`, în unitățile proprii fișierului. Fără simboluri de unitate. Orice altceva afișează „Introduceți un număr.”
- **Numere întregi** (numărători, întregi): „Introduceți un număr întreg.” dacă tastați o zecimală.
- **Da/Nu**: valoarea devine un meniu cu Da și Nu.

Fiecare valoare își păstrează tipul IFC, astfel încât un număr rămâne număr, iar alte programe îl citesc corect.

## Anulare

1. Faceți clic pe {{ui:Undo}} în secțiunea {{ui:Changes}}, sau apăsați {{key:Mod+Z}} cât timp nu tastați într-un câmp.
2. Repetați pentru a anula mai multe. Fiecare anulare elimină cea mai nouă modificare.

Nu puteți anula dincolo de o salvare: după salvare, lista începe din nou. Fișierul salvat păstrează tot.

## De ce modificarea dumneavoastră schimbă doar un element

Exportatoarele economisesc spațiu prin partajarea datelor. Un set de proprietăți poate fi partajat de douăzeci de uși, iar o valoare („Rezistență la foc: 60 min”) poate apărea în nouăzeci de seturi. Dacă BimCraft ar schimba pur și simplu valoarea partajată, fiecare element care o partajează s-ar schimba și el.

Așadar, BimCraft copiază înainte să scrie:

- Dacă setul de proprietăți pe care îl editați este partajat cu alte elemente, elementul dumneavoastră primește propria copie a setului, iar doar copia se schimbă.
- Dacă valoarea este partajată cu alte seturi, setul dumneavoastră primește propria copie a valorii.

Vecinii își păstrează datele vechi. Aceasta se numește *copiere la scriere* (copy-on-write). Adaugă câteva intrări mici în fișier, pe care orice program IFC le citește normal.

**Proprietățile de tip fac excepție, intenționat.** Un set marcat „(type)” aparține tipului elementului, iar în IFC fiecare element de acel tip îl citește de acolo. Modificarea lui schimbă tipul, deci fiecare element al tipului arată noua valoare. Lista {{ui:Changes}} marchează astfel de modificări cu „(type)”. Vezi [Modificarea unei proprietăți de tip pentru fiecare element de un tip](topic:type-vs-instance).

## Avertismente înainte să pierdeți munca

- Deschiderea unui alt fișier cât timp aveți modificări nesalvate întreabă „Aveți *n* modificări nesalvate la *fișier*. Să fie eliminate?” Faceți clic pe Anulare pentru a continua lucrul, apoi salvați.
- Închiderea sau reîncărcarea filei cu modificări nesalvate face browserul să întrebe dacă doriți să plecați.

## Greșeli frecvente

- **Scrierea unităților.** `2400 mm` este refuzat. Tastați `2400`.
- **Modificarea unei proprietăți de tip când vreați doar un element.** Căutați nota „(type)” înainte să tastați. Dacă vreți ca un element să difere, modificați o proprietate a instanței sau eticheta ori numele lui.
- **Așteptarea ca fișierul original să se schimbe.** Salvarea descarcă mereu un fișier nou. Înlocuiți originalul singur dacă asta vreți și păstrați o copie.
- **Apăsarea {{key:Mod+S}} fără modificări.** BimCraft salvează doar când există ceva de salvat; altfel se poate deschide „Salvare pagină” a browserului. Închideți-o.
- **Salvarea de două ori și așteptarea a două fișiere mici.** Fiecare salvare conține fiecare editare de la deschiderea modelului.
- **Așteptarea ca modificările să se întoarcă într-un fișier de proiect.** BimCraft scrie doar IFC. Aduceți fișierul IFC modificat în programul de autor, așa cum importați orice IFC.
