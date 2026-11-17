---
title: Pusti poplavu, vjetar ili zemljotres na zgradi
summary: Porast vode kroz prostorije, pritisak vjetra na svaki sprat ili zemljotres koji trese spratove, prikazani na osnovi ili izgledu uz klizač vremena. Jednostavni modeli s navedenim pretpostavkama; nije provjera propisa ni konstruktivni proračun.
keywords: opasnost, poplava, vjetar, zemljotres, seizmički, pomak, njihanje, bazna posmična sila, nivo vode, klima, scenarij, nivo mora, reprodukcija, sprat, period
from: ff0d34d1
---

Odjeljak {{ui:Reprodukcija opasnosti}} lijevog panela pušta opasnost na otvorenom IFC modelu. Ništa u modelu se ne mijenja.

:::warning
Ovo su **jednostavni modeli da se vidi šta opasnost radi s ovim rasporedom**, a ne studija poplava, provjera vjetrovnog propisa ni konstruktivni proračun. Svaki rezultat navodi svoje pretpostavke.
:::

## Poplava

Postavi najvišu razinu vode iznad najnižeg poda i minute za porast, zadržavanje i opadanje. Voda ulazi u prostoriju kroz otvor čiji prag je prešla, a prostorije povezane s mokrim prostorijama otvorima ispod nivoa vode stoje na istom nivou (kvazi-statički). Tabela pokazuje kada se svaka prostorija prvi put smoči i koliko je duboko; osnova to reproducira. Upiši najviše vode koju prostorija može podnijeti, a prostorije iznad toga su upozorenja. **Klimatske budućnosti:** učitaj svoju datoteku scenarija (JSON ili CSV sa godinom, porastom nivoa mora i faktorom poplave) i izaberi godinu. Ili uključi dodatak Klimatske budućnosti i izaberi scenarij i godinu: poplava se pokreće dvaput, sadašnja uz buduću (vidi „Klimatske budućnosti: poplava, vrućina i požar 2050. i 2080.“). Vrste Izloženost požaru i Vrućina: datoteka budućeg vremena nalaze se u istoj listi.

## Vjetar

Pritisak prati ½ρV², a brzina raste s visinom; sila na sprat je taj pritisak puta faktor udara, dva koeficijenta pritiska, širina i visina sprata. Dobiješ posmik, moment prevrtanja i njihanje.

## Zemljotres

Posmična zgrada: masa po podu (površina tlocrta × kilogrami po kvadratnom metru, koje ti postaviš), ista krutost u svakom spratu prilagođena prvom periodu koji daš (desetina sekunde po spratu ako ga ostaviš prazno, i to se kaže), prigušenje i zadano kretanje tla (impuls ili filtrirana buka) pri vršnom ubrzanju koje izabereš. Rezultat je pomak svakog sprata, ubrzanja podova i bazna posmična sila; izgled prikazuje njihanje, nacrtano veće nego što jeste. Upiši dozvoljeni odnos pomaka i spratovi iznad toga su upozorenja. Elastično je: ništa ne popušta ni ne puca.

## Krutost podova iz analitičkog okvira

Za zemljotres ili vjetrovno njihanje izaberi **Analitički okvir** kao izvor krutosti umjesto upisivanja perioda. Svaki pod se redom gura bočno, okvir (grede, stubovi, ukrute, ploče) se rješava, a krutost podova sa svim dijelovima koji rade zajedno pokreće proračun. Težina su vlastita težina elemenata plus opterećenje poda po kvadratnom metru koje postaviš u polju plana svakog poda. Prikazuje se stvarni prvi period. Elastično je: ništa ne popušta, a torzija nije modelirana. Za vjetar, sile po spratu su i dalje pretpostavljene gore (profil po zakonu stepena, tvoj faktor udara i fiksni koeficijenti pritiska, a ne vjetrovni propis); samo njihanje dolazi iz okvira, rješavanjem pune matrice krutosti okvira za te sile. Model treba IFC s okvirom koji kartica Analiza može pročitati.

## Jedinice

Dubine vode, njihanje i pomak po spratu, udaljenosti i površine prikazuju se u {{ui:Jedinice}} koje si izabrao. Sile (kN), vremena i ubrzanja zadržavaju svoje jedinice, a vrijednost koju upišeš u polje označeno u metrima ostaje u metrima. Isto važi za rezultate evakuacije, dnevnog svjetla, grijanja i hlađenja te opremanja: dužine, površine i zapremine prate tvoj izbor; pritisak, protok, temperatura, energija i snaga se nikad ne pretvaraju.
