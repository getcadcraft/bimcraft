---
title: Pusti poplavu, vetar ili zemljotres na zgradi
summary: Voda koja se diže kroz prostorije, pritisak vetra na svakom spratu ili zemljotres koji trese spratove, pušteni na osnovi ili izgledu uz klizač vremena. Jednostavni modeli sa navedenim pretpostavkama; nije provera propisa ni konstruktivni proračun.
keywords: opasnost, poplava, vetar, zemljotres, seizmika, drift, ljuljanje, bazna sila smicanja, nivo vode, klima, scenario, nivo mora, reprodukcija, sprat, period
from: ff0d34d1
---

Odeljak {{ui:Prikaz opasnosti}} levog panela pušta opasnost na otvorenom IFC modelu. Ništa u modelu se ne menja.

:::warning
Ovo su **jednostavni modeli za prikaz kako opasnost utiče na ovaj raspored**, a ne studija poplave, provera propisa za vetar ili konstruktivni proračun. Svaki rezultat navodi svoje pretpostavke.
:::

## Poplava

Postavite najvišu visinu vode iznad najnižeg poda i minute za porast, zadržavanje i opadanje. Voda ulazi u prostoriju kroz otvor čiji je prag prešla, a prostorije spojene sa mokrim prostorijama otvorima ispod nivoa vode stoje na istom nivou (kvazistatički). Tabela daje kada se svaka prostorija prvi put okvasi i koliko je duboka; osnova to prikazuje. Upišite koliko vode prostorija sme da primi, pa prostorije iznad te vrednosti dobijaju upozorenja. **Klimatske budućnosti:** učitajte sopstvenu datoteku scenarija (JSON ili CSV sa godinom, porastom nivoa mora i faktorom poplave) i izaberite godinu. Ili uključite dodatak Klimatske budućnosti i izaberite scenario i godinu: poplava se pušta dvaput, sadašnja uz buduću (pogledajte „Klimatske budućnosti: poplava, toplota i požar 2050. i 2080.”). Vrste Izloženost požaru i Toplota: datoteka buduće vremenske prilike nalaze se na istoj listi.

## Vetar

Pritisak prati ½ρV², a brzina raste uz visinu; sila na sprat je taj pritisak puta faktor udara, dva koeficijenta pritiska, širina i visina sprata. Dobijate smičuću silu, moment prevrtanja i ljuljanje.

## Zemljotres

Smičuća zgrada: masa po spratu (površina osnove × kilogrami po kvadratnom metru, koje podešavate), ista krutost u svakom spratu prilagođena prvom periodu koji zadate (desetina sekunde po spratu ako ostavite prazno, i program to kaže), prigušenje i zadato kretanje tla (impuls ili filtrirani šum) pri vršnom ubrzanju koje izaberete. Rezultat je međuspratni pomak svakog sprata, ubrzanja podova i bazna sila smicanja; izgled prikazuje ljuljanje, nacrtano veće nego što jeste. Upišite dozvoljeni odnos pomaka i spratovi iznad njega dobijaju upozorenja. Elastično je: ništa ne popušta i ne puca.

## Krutost spratova iz okvira analize

Za zemljotres ili ljuljanje vetrom izaberite **Okvir analize** kao izvor krutosti umesto upisivanja perioda. Svaki pod se redom gura u stranu, okvir (grede, stubovi, ukrućenja, ploče) se rešava, a krutost spratova, sa svim elementima koji rade zajedno, pokreće proračun. Težina je sopstvena težina elemenata plus opterećenje poda po kvadratnom metru koje postavite u okviru plana svakog sprata. Prikazuje se stvarni prvi period. Elastično je: ništa ne popušta, a torzija nije modelirana. Za vetar, sile po spratovima su i dalje pretpostavljene gore navedene (profil po stepenu, vaš faktor udara i fiksni koeficijenti pritiska, a ne propis za vetar); samo ljuljanje dolazi iz okvira, rešavanjem pune matrice krutosti okvira za te sile. Model zahteva IFC sa okvirom koji kartica Analiza može da pročita.

## Jedinice

Dubine vode, ljuljanje i pomak po spratovima, rastojanja i površine prikazuju se u {{ui:Jedinice}} koje ste izabrali. Sile (kN), vremena i ubrzanja zadržavaju svoje jedinice, a vrednost koju upišete u polje obeleženo u metrima ostaje u metrima. Isto važi za rezultate evakuacije, dnevne svetlosti, grejanja i hlađenja i opremanja: dužine, površine i zapremine prate vaš izbor; pritisak, protok, temperatura, energija i snaga se nikad ne preračunavaju.
