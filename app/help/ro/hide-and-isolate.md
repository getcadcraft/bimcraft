---
title: Ascunderea, izolarea și transparența elementelor
summary: Alegeți mai multe elemente, ascundeți-le, afișați doar pe ele sau afișați-le în timp ce restul devine transparent, apoi readuceți totul.
keywords: ascundere, izolare, transparent, fantomă, raze X, afișare totală, reafișare, selectare multiplă, ctrl clic, shift clic, vizibilitate
from: 97e98b8c
---

## Ce veți face

Curățați vederea până la ceea ce urmăriți: ascundeți elementele care stau în cale, afișați doar pe cele alese sau păstrați tot restul pe ecran ca un contur estompat, ca să știți unde vă aflați.

## Pași

1. Deschideți un model IFC. Vedeți [Deschiderea unui model IFC și privirea în 3D](topic:open-ifc-model).
2. Faceți clic pe un element pentru a-l alege. Pentru a alege mai multe, țineți apăsat {{key:Mod}} sau {{key:Shift}} și faceți clic pe fiecare. Un clic pe un element ales în acest fel îl scoate din nou din alegere.
3. Deschideți {{ui:Afișare}} din bara de instrumente și alegeți ce să faceți sau apăsați tasta sa:
   - {{ui:Ascundere}} ({{key:H}}) ascunde elementele alese.
   - {{ui:Izolare}} ({{key:I}}) afișează doar elementele alese.
   - {{ui:Transparent}} ({{key:T}}) afișează elementele alese așa cum sunt și restul transparent.
4. Faceți clic pe {{ui:Afișare totală}} din același meniu sau apăsați {{key:Shift+H}}, pentru a afișa din nou fiecare element.
5. Pentru a tăia tot ce este în jurul elementelor alese, faceți clic pe {{ui:Casetă de secțiune în jurul selecției}} din același meniu sau apăsați {{key:Shift+X}}. Vedeți [Tăierea unui model IFC cu un plan de secțiune](topic:section-plane).

## Ce ar trebui să vedeți

- Când sunt alese mai multe elemente, {{ui:Proprietăți}} spune câte sunt și le listează pe clase. Faceți clic pe unul singur pentru a-i vedea proprietățile.
- Elementele ascunse nu pot fi alese: un clic ajunge pe ce se află în spatele lor.
- Elementele transparente nu pot fi alese nici ele, astfel încât puteți face clic direct prin pereți până la ce ați izolat.
- Muchiile se ascund odată cu elementul și devin estompate împreună cu el.
- Ascunderea, izolarea și transparența rămân așa cum sunt când modificați, plasați elemente din bibliotecă sau tăiați modelul cu un plan de secțiune. Deschiderea altui model afișează din nou totul.

## Greșeli frecvente

- **Elementele din meniu sunt estompate.** Nu este ales nimic. Faceți mai întâi clic pe un element; treceți cu cursorul peste o opțiune pentru a citi de ce nu poate acționa.
- **Izolarea a afișat un perete pe care îl ascunsesem.** Izolarea afișează exact ce ați ales, ascuns sau nu.
- **Lipsește un întreg nivel.** Asta ține de lista {{ui:Niveluri}}, nu de {{ui:Afișare totală}}: bifați din nou nivelul.

## Continuare

- [Afișarea și ascunderea nivelurilor, spațiilor și muchiilor](topic:storeys-and-spaces)
- [Tăierea unui model IFC cu un plan de secțiune](topic:section-plane)
