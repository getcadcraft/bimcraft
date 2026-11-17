---
title: Colorarea elementelor după o proprietate
summary: Colorați fiecare element după valoarea unei proprietăți, cum ar fi clasa, tipul, nivelul, materialul, rezistența la foc sau costul, citiți legenda, faceți clic pe o valoare ca să arătați doar acele elemente și salvați culorile ca schemă de folosit pe alte modele.
keywords: culoare, colorare, colorează după, legendă, vizualizare inteligentă, aspect, proprietate, tip, material, rezistență la foc, filtru, izolare, temă, valori, schemă, schemă de culori, salvare culori, reutilizare, echipă, json, mostră de culoare
from: f081d343
---

## Ce veți face

Vedeți dintr-o privire cum este distribuită o proprietate în model: ce pereți sunt exteriori, ce materiale sunt folosite unde, ce elemente nu au o rezistență la foc. Fiecare element capătă culoarea valorii sale, iar legenda spune ce înseamnă fiecare culoare și câte elemente o au.

## Pași

1. Deschideți un model IFC.
2. Faceți clic pe fila {{ui:Culoare}} din dreapta.
3. Alegeți o proprietate din listă. Primele aparțin fiecărui element ({{ui:Clasă}}, {{ui:Tip}}, {{ui:Nivel}}, {{ui:Material}}, {{ui:Nume}}…); restul vin din seturile de proprietăți și seturile de cantități ale modelului, sub numele setului. Numărul de după fiecare este câte elemente o au.
4. Citiți legenda: o culoare, valoarea și câte elemente o au.
5. Faceți clic pe o valoare ca să arătați doar acele elemente. Țineți apăsat {{key:Mod}} și faceți clic ca să adăugați alte valori. Apăsați {{key:Shift+H}} ca să arătați din nou totul.
6. Faceți clic pe {{ui:Dezactivat}} ca să reveniți la culorile proprii ale modelului.

## Ce ar trebui să vedeți

- Până la șapte valori primesc fiecare propria culoare, cea mai frecventă valoare prima. Mai multe valori decât atât împart un gri, listat ca **alte valori**.
- Un număr cu multe valori diferite este împărțit în șase intervale egale, de la deschis (mic) la închis (mare).
- Elementele fără proprietate sunt gri pal, listate ca **Fără valoare**, ca să iasă în evidență cele colorate.
- Culorile se schimbă odată cu Hârtie și Model și rămân în timp ce editați modelul.
- Proprietatea unui tip se aplică fiecărui element al acelui tip; când un element are propria valoare pentru aceeași proprietate, valoarea sa proprie are prioritate.

## Schimbați culorile și păstrați-le ca schemă

- Faceți clic pe mostra de culoare a unei valori din legendă ca să alegeți altă culoare. Modelul este recolorat imediat.
- {{ui:Salvare schemă}} descarcă culorile ca un mic fișier `.json` numit după proprietate, de exemplu `Class colors.json`.
- Pe alt model sau pe calculatorul unui coleg, faceți clic pe {{ui:Deschidere schemă…}} și alegeți fișierul. Fiecare valoare din schemă primește culoarea sa, deci aceeași rezistență la foc sau același sistem are aceeași culoare în fiecare model.
- O valoare pe care schema nu o are este colorată gri și listată ca „nu este în schemă”; valorile din schemă pe care modelul nu le are rămân listate cu 0, ca să vedeți întreaga schemă.
- O schemă își păstrează culorile în ambele teme. Alegerea unei proprietăți din listă pornește din nou de la culorile automate.

## Greșeli frecvente

- **„This model has no … values”.** Schema a fost salvată pentru o proprietate pe care modelul nu o are (un alt nume de set de proprietăți, de exemplu). Deschideți o schemă făcută pentru acest tip de model sau alegeți o proprietate din listă.

- **O proprietate lipsește din listă.** Niciun element cu formă din model nu o are. Proprietățile nivelurilor și spațiilor înseși nu sunt listate.
- **Totul are aceeași culoare.** Fiecare element are aceeași valoare sau niciuna: uitați-vă la numerele din legendă.

## Următorul pas

- [Ascundeți, izolați și vedeți prin elemente](topic:hide-and-isolate)
- [Găsiți drumul prin arborele modelului](topic:model-tree)
