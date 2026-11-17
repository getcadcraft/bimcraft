---
title: Conectarea țevilor și conductelor de aer la echipamente
summary: Începeți sau terminați o țeavă sau o conductă de aer pe un port, astfel încât să preia dimensiunea și sistemul portului și să rămână fixată de el, apoi verificați conexiunile: porturi deschise, nepotriviri de dimensiune și sistem, trasee fără sursă.
keywords: mep, conectare, conexiune, conexiuni, port, porturi, port deschis, nepotrivire de dimensiune, nepotrivire de sistem, sursă, verificare conexiuni, fixat, urmărire, mutare echipament, ifcrelconnectsports, coordonare
from: 29144fb0
---

## Ce veți face

Uniți traseele cu echipamentele, astfel încât modelul să fie un singur sistem conectat: ieșirea unei pompe cu țeava care pleacă din ea, gâtul unui difuzor cu conducta sa de ramificație. Apoi lăsați BimCraft să listeze ce nu este unit.

## Desenați de la un port

1. Alegeți {{ui:Țeavă}} sau {{ui:Conductă de aer}}.
2. Mutați indicatorul pe un port al unei piese de echipament (cercurile mici; un port deschis este desenat în culoarea de avertisment). Indicatorul se fixează pe el și spune **pe un port**.
3. Faceți clic: traseul începe la înălțimea portului și **preia dimensiunea și sistemul** acestuia (o țeavă preia și materialul obișnuit al sistemului). Linia de stare spune ce a preluat.
4. Desenați în continuare ca de obicei. Terminarea unui traseu pe alt port fixează și acel capăt.

Capătul unui traseu de pe un port este **fixat** de el: mutați sau rotiți echipamentul (în Proprietăți) și capătul traseului merge cu el; editați traseul și acel capăt rămâne pe port. Celelalte colțuri ale traseului rămân unde sunt, deci după o mutare mare primul segment poate să iasă de pe port sub un unghi: mutați și următorul colț.

## Verificați conexiunile

Deschideți {{ui:Build}} și faceți clic pe {{ui:Verificare conexiuni}}. Lista de sub bară arată:

| Linie | Ce înseamnă |
|---|---|
| Un port nu este conectat | O piesă de echipament are o conexiune de care nu este desenat nimic |
| Nimic la capătul său | Un traseu se termină în aer |
| Porturi unite de dimensiuni diferite | Un traseu de o dimensiune întâlnește un port sau un traseu de altă dimensiune fără reductor (dimensiunea nominală a unei țevi, forma și laturile unei conducte de aer) |
| Porturi unite de sisteme diferite | De exemplu o conductă de retur pe un difuzor de alimentare |
| O țeavă unită de o conductă de aer | Două conexiuni de tipuri diferite se întâlnesc |
| Niciun echipament din rețeaua sa nu o alimentează | Nimic de care un traseu este unit, oricât de departe pe parcurs, nu are o ieșire. Scurgerile, pluvialele și ventilațiile nu sunt verificate în acest sens: apa lor provine de la obiectele sanitare |
| Fixat de un port al unui echipament care nu mai este în model | Echipamentul a fost șters; desenați din nou capătul sau ștergeți traseul |

Erorile vin primele. Faceți clic pe o linie pentru a selecta ce denumește. {{ui:Închidere}} ascunde lista. Verificarea citește modelul așa cum este desenat: verifică conexiunile și dimensiunile, niciodată debitele, presiunile sau echilibrarea.
