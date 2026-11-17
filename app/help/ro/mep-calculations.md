---
title: Dimensionarea țevilor și conductelor de aer, verificarea umplerii cablurilor și iluminatul
summary: Verificați dimensiunile țevilor de alimentare și ale conductelor de aer cu pierderea de presiune, dirijați cablurile prin jgheaburi de cabluri și tuburi de protecție și vedeți gradul lor de umplere, și calculați iluminarea în încăperi din fișiere IES sau EULUMDAT. Valorile implicite sunt etichetate; introduceți valorile codului în vigoare.
keywords: dimensionare, dimensionarea țevilor, dimensionarea conductelor de aer, pierdere de presiune, unități de obiect sanitar, cerere, hunter, hazen-williams, viteză, frecare, frecare egală, presiune de ventilator, clapetă, traseu critic, jgheab de cabluri, tub de protecție, umplere, tabel de cabluri, ies, ldt, eulumdat, fotometrie, iluminare, lux, uniformitate, calcul de iluminat, densitate de putere, mep, calcule, probleme
from: 9cb90815
---

## Ce veți face

Desenați țevile, conductele de aer, jgheaburile de cabluri și tuburile de protecție ca de obicei, apoi deschideți panoul **Calcule**. Fiecare filă citește modelul, afișează un tabel și listează ce nu este corect ca Probleme în panoul ⚠. Când o dimensiune ar rezolva o problemă, **Aplicare dimensiuni** modifică traseele într-un singur pas de {{ui:Anulare}}.

Acestea sunt instrumente de desenare. Fiecare valoare implicită este etichetată pe ecran, iar niciuna nu este un tabel de coduri: introduceți cifrele din standardul după care proiectați și lăsați rezultatul să fie verificat de inginerul care răspunde de el.

## Țevi

1. Alegeți tasta de **sistem** (apa rece este `cw`, apa caldă `hw`).
2. Setați viteza maximă și, dacă doriți să se verifice presiunea, presiunea la sursă și presiunea minimă de care are nevoie un obiect sanitar.
3. Faceți clic pe {{ui:Verificare}}.

Fiecare țeavă poartă cererea unităților de obiecte sanitare aflate sub ea. Cererea provine dintr-o curbă a unităților de obiecte sanitare în raport cu debitul, în felul descris de Hunter. **Curba încorporată este un exemplu, nu un tabel de coduri**; Problemele o spun până când introduceți propria curbă. Frecarea este Hazen–Williams, racordurile sunt coeficienți de pierdere, iar o ridicare costă 9.8 kPa pe metru. Unitățile unui obiect sanitar provin din tipul său sau din numărul pe care îl setați cu instrumentul de asistent `loads_set`.

## Conducte de aer

Setați sistemul, rata de frecare (frecare egală) sau o viteză și orice pierdere de serpentină, filtru sau atenuator. Terminalele iau debitul de aer din `loads_set` de pe difuzor. Tabelul arată viteza și frecarea pe fiecare piesă, **presiunea ventilatorului** la traseul critic și presiunea pe care trebuie să o preia clapeta fiecărui alt terminal. Pierderile pe racorduri folosesc coeficienți impliciți rotunjiți, nu o bază de date de racorduri.

## Jgheaburi de cabluri și tuburi de protecție

Desenați-le cu instrumentul Conductă de aer: sistemele **Jgheab de cabluri** și **Tub de protecție** sunt salvate ca purtători de cabluri, astfel încât alte programe le citesc ca jgheaburi și tuburi. În fila Cabluri, lipiți lista de cabluri (etichetă, diametru exterior în mm, număr, de la, până la). `from` și `to` sunt eticheta unei piese de echipament sau un punct `x,y,z` în milimetri. Cablurile urmează cel mai scurt traseu continuu prin jgheaburi și tuburi; fiecare traseu își arată umplerea în raport cu limitele pe care le introduceți, iar tabelul se salvează ca CSV cu o lungime care include un procent de rezervă și capetele.

## Iluminat

Dați fiecărui corp de iluminat fișierul său IES (LM-63) sau EULUMDAT cu instrumentul de asistent `photometry_set`. Introduceți țintele, pasul grilei și înălțimea planului de lucru. Rezultatul este iluminarea **directă** doar: fără reflexii reciproce și fără umbre, deci este o limită inferioară într-o încăpere.

## Sprinklere de incendiu

Add-on-ul **Sprinklere de incendiu** are propria filă; vezi ajutorul său.
