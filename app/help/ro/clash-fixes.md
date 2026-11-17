---
title: Rezolvarea conflictelor cu soluțiile fiecărei discipline
summary: Din rezultatele verificării conflictelor, Propune remedieri listează pentru fiecare conflict ce ar putea face fiecare disciplină — o conductă ocolită sub o grindă, o țeavă mutată într-o parte, un stâlp mutat, o deschidere într-o grindă — fiecare încercată pe o copie a modelului, cu compromisurile ei, ca să o acceptați sau să o respingeți. Remedierile acceptate intră ca un singur pas de anulare.
keywords: conflict, remediere conflict, rezolvare conflicte, soluționare conflicte, coordonare, propunere remedieri, ocolire, decalare, conductă, canal, grindă, stâlp, deschidere, manșon, compromis, disciplină, structură, mecanică, instalații sanitare, electric, arhitectură, asistent
from: f7bafdd9
---

## Ce veți face

Transformați o listă de conflicte în decizii. Fiecare disciplină (structură, mecanică, instalații sanitare, electrice, arhitectură) propune remedieri doar pentru propriile elemente, fiecare propunere este verificată pe o copie a modelului, iar dvs. alegeți.

## Pași

1. Rulați întâi verificarea conflictelor. Vedeți [Verificarea conflictelor](topic:clash-check) și [Verificarea conductelor și a canalelor față de structură](topic:mep-against-structure).
2. Sub rezultate, faceți clic pe {{ui:Propune remedieri}}. Panoul **Remedieri propuse** se deschide lângă model.
3. Pentru fiecare conflict vedeți propunerile fiecărei discipline, cea mai bună prima. Fiecare rând spune ce face și ce compromisuri are: dacă rezolvă conflictul, câte conflicte noi creează, ce reguli încalcă, cât traseu adaugă sau cât de departe se mută, câte piese de racord și un scor de cost.
4. Faceți clic pe {{ui:Afișare}} ca să vedeți elementele în 3D. Faceți clic pe {{ui:Acceptare}} la remedierea dorită (una pentru fiecare conflict) sau pe {{ui:Respingere}}.
5. Linia de jos spune ce fac împreună toate remedierile acceptate: câte conflicte sunt rezolvate, câte rămân și dacă apare ceva nou.
6. Faceți clic pe {{ui:Aplicare remedieri acceptate (un singur pas de anulare)}}. Verificarea conflictelor rulează din nou. {{ui:Anulare}} le ia pe toate înapoi deodată.

## Ce poate face fiecare disciplină

- **Mecanică** (conducte de aer, încălzire și răcire): ocolire peste sau sub ramura care lovește, ridicarea sau coborârea întregului traseu, mutarea într-o parte, aplatizarea unei conducte dreptunghiulare cu aceeași arie.
- **Instalații sanitare** (apă, scurgeri, gaz, incendiu): aceleași mutări, cu excepția faptului că o scurgere gravitațională nu primește niciodată ocolire; poate fi mutată doar ca întreg, păstrându-și panta.
- **Electrice** (jgheaburi și tuburi de cablu): aceleași mutări; un jgheab trebuie să păstreze 150 mm liberi deasupra lui ca să poată trage cablul.
- **Structură**: mutarea unui stâlp (până la 300 mm) sau a unei deschideri în inima unei grinzi ori într-un planșeu, pentru traseul care trece. Fiecare remediere structurală spune că inginerul structurist o avizează.
- **Arhitectură**: un manșon într-un perete pentru traseul care trece sau mutarea unui perete despre care se știe că nu poartă sarcini.

## Ce ar trebui să vedeți

- Remedierile care încalcă o regulă sunt marcate: mai aproape de 25 mm de altceva, sub linia de înălțime liberă de 2,100 mm, o deschidere în inimă mai mare de 40% din înălțimea grinzii sau prea aproape de capete, o grindă care ar schimba deschiderea.
- Remedierile pe care BimCraft le poate face sunt aplicate modelului: traseele desenate cu uneltele Țeavă și Conductă de aer și stâlpii desenați de dvs. Celelalte spun **Doar consultanță**: acceptarea lor adaugă o problemă în fila Probleme.

## De reținut

- Remedierile vin din regulile încorporate în aplicație; nu se folosește AI pentru ele.
- Dacă conectați un asistent (vedeți [Lăsarea unui asistent AI să lucreze cu modelul dvs.](topic:assistants)), acesta poate citi conflictele și poate adăuga propriile propuneri pentru o disciplină în panoul deschis. Acestea sunt verificate în același mod, marcate cu numele asistentului, iar nimic nu se modifică până nu le acceptați și aplicați.
- Copia este verificată cu casete în jurul fiecărui element și al fiecărui segment al unui traseu, deci un traseu înclinat poate arăta un conflict pe care verificarea conflictelor nu l-ar arăta. Rulați din nou verificarea conflictelor după aplicare: ea este ultimul cuvânt.
- Limitele (cât de departe poate fi mutat un traseu, cât de sus poate urca o ocolire, distanța) sunt valorile implicite scrise în panou.

## Următorul pas

- [Probleme și fișiere BCF](topic:issues-bcf)
- [Desenarea traseelor de conducte și de canale](topic:pipes-and-ducts)
