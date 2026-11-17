---
title: Verificarea încălzirii și a răcirii cu EnergyPlus
summary: Scrieți modelul ca fișier EnergyPlus sau rulați pe el EnergyPlus versiunea 26.2.0 în browser și comparați sarcinile de proiectare cu ajutorul rapid pentru încălzire și răcire. O a doua opinie pentru faza incipientă de proiectare, nu un calcul de conformitate.
keywords: energyplus, simulare energetică, zi de proiectare, sarcină de încălzire, sarcină de răcire, fișier meteo, epw, idf, masă termică, energie anuală, simulare
from: b82a5bf2
---

## Ce veți face

Panoul **Verificare cu EnergyPlus** scrie modelul deschis ca fișier de intrare EnergyPlus (un IDF): o zonă pentru fiecare cameră, pereții, planșeele, acoperișurile și ferestrele cu coeficienții lor U, schimburile de aer și încălzirea și răcirea ideale. Puteți oricând **salva acest fișier** și să îl rulați în propriul EnergyPlus.

Dacă și configurați motorul, panoul poate simula pe loc și afișează sarcinile de proiectare ale EnergyPlus pentru încălzire și răcire, lângă cele ale ajutorului rapid, cameră cu cameră.

Acesta este un ajutor de proiectare. Codurile energetice, certificările și autorizațiile cer un instrument aprobat și datele climatice pe care le solicită, iar rezultatul trebuie verificat de persoana care răspunde pentru el.

## Configurarea motorului

BimCraft nu include EnergyPlus. Este un build WebAssembly mare (circa 6 MB comprimat, plus un fișier de date de 4.6 MB), deci îl găzduiți singur și scrieți adresa lui în panou. Pagina îl încarcă doar când apăsați un buton de simulare, niciodată la pornire. Adresa trebuie să fie https, o cale de pe acest site sau localhost.

## Zile de proiectare sau un an

- **Simulare zile de proiectare** nu necesită fișier meteo. Rulează o zi rece de iarnă, fără soare, și o zi de vară caldă și senină, la temperaturile din intrările de încălzire și răcire ale filei Lumină naturală, și raportează sarcina fiecărei camere în wați.
- **Simulare un an** necesită un fișier meteo în format EPW, pe care îl alegeți. Adaugă persoane, lumini și echipamente din aceleași intrări (mereu active, deoarece nu se inventează niciun program) și raportează energia de încălzire și răcire a fiecărei camere în kWh. Fișierele meteo au propriile licențe, deci folosiți unul pe care aveți voie să îl folosiți.

## Masa termică

Bifați **Acordare masă termică pereților cu straturi cunoscute**. Pereții, acoperișurile și planșeele ale căror straturi de material sunt cunoscute sunt scrise strat cu strat, cu densitatea și căldura specifică luate dintr-un tabel scurt de valori tipice, după numele materialului. Straturile sunt luate mai întâi din exterior, în ordinea în care le listează fișierul. Elementele fără straturi rămân cu coeficientul U, fără masă.

## Citirea comparației

Cele două metode răspund la întrebări ușor diferite. Ajutorul rapid păstrează fiecare element; fișierul EnergyPlus face media coeficienților U ai fiecărei camere pe tipuri de suprafață. O diferență mai mare de 15 % în încălzirea de proiectare a unei camere este listată ca notă în panoul ⚠, cu ambele cifre. Răcirea diferă mai mult prin construcție: ajutorul rapid calculează un vârf din soare, pentru o singură dată, iar EnergyPlus dimensionează pe propria sa zi de proiectare.
