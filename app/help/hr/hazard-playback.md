---
title: Reproduciraj poplavu, vjetar ili potres na zgradi
summary: Voda koja se diže kroz prostorije, tlak vjetra na svakoj etaži ili potres koji trese etaže, prikazano na planu ili pročelju s klizačem vremena. Jednostavni modeli s popisanim pretpostavkama; nije provjera propisa ni konstrukcijski proračun.
keywords: opasnost, poplava, vjetar, potres, potresni, pomak, njihanje, posmična sila, razina vode, klima, scenarij, porast razine mora, reprodukcija, etaža, period
from: ff0d34d1
---

Odjeljak {{ui:Reprodukcija opasnosti}} lijevog okna pušta opasnost na otvorenom IFC modelu. Ništa u modelu se ne mijenja.

:::warning
Ovo su **jednostavni modeli koji pokazuju što opasnost čini ovom rasporedu**, a ne studija poplava, provjera propisa za vjetar ni konstrukcijski proračun. Svaki rezultat navodi svoje pretpostavke.
:::

## Poplava

Postavite najvišu razinu vode iznad najniže etaže te minute za porast, zadržavanje i spuštanje. Voda ulazi u prostoriju kroz otvor čiji je prag prešla, a prostorije povezane s mokrim prostorijama otvorima ispod razine vode stoje na istoj razini (kvazistatički). Tablica daje kada se svaka prostorija prvi put smoči i koliko je duboko; plan to reproducira. Upišite najviše vode koju prostorija smije primiti, a prostorije iznad toga bit će upozorenja. **Klimatske budućnosti:** učitajte vlastitu datoteku scenarija (JSON ili CSV s godinom, porastom razine mora i faktorom poplave) i odaberite godinu. Ili uključite dodatak Klimatske budućnosti i odaberite scenarij i godinu: poplava se pokreće dvaput, sadašnja uz buduću (vidi „Klimatske budućnosti: poplava, vrućina i šumski požar 2050. i 2080.“). Vrste Izloženost šumskom požaru i Vrućina: datoteka budućeg vremena također su u istom popisu.

## Vjetar

Tlak slijedi ½ρV², a brzina raste s visinom; sila na etažu je taj tlak pomnožen faktorom udara, dvama koeficijentima tlaka, širinom i visinom etaže. Dobivate posmik, moment prevrtanja i njihanje.

## Potres

Posmični model zgrade: masa po etaži (tlocrtna površina × kilogrami po kvadratnom metru, koje postavljate), jednaka krutost u svakoj etaži prilagođena prvom periodu koji zadajete (0.1 sekunde po etaži ako ostavite prazno, a program to kaže), prigušenje i zadano podrhtavanje tla (impuls ili filtrirani šum) pri vršnom ubrzanju koje odaberete. Rezultat je pomak svake etaže, ubrzanja podova i posmična sila u temelju; pročelje prikazuje njihanje, nacrtano veće nego što jest. Upišite dopušteni omjer pomaka i etaže iznad njega bit će upozorenja. Model je elastičan: ništa ne popušta niti puca.

## Krutost etaža iz analitičkog okvira

Za potres ili za njihanje od vjetra odaberite **Analitički okvir** kao izvor krutosti umjesto upisivanja perioda. Svaka etaža se redom gura u stranu, okvir (grede, stupovi, ukrute, ploče) se rješava, a krutost etaža uz sav zajednički rad pokreće izračun. Težina su vlastita težina elemenata plus opterećenje poda po kvadratnom metru koje postavljate u okviru tlocrta svake etaže. Prikazuje se stvarni prvi period. Model je elastičan: ništa ne popušta, a torzija nije modelirana. Za vjetar, sile po etažama i dalje su one pretpostavljene gore (profil potencijalnog zakona, vaš faktor udara i fiksni koeficijenti tlaka, a ne propis za vjetar); samo njihanje dolazi iz okvira, rješavanjem pune matrice krutosti okvira za te sile. Model treba IFC s okvirom koji kartica Analiza može očitati.

## Jedinice

Dubine vode, njihanje i pomak po etažama, udaljenosti i površine prikazuju se u {{ui:Jedinice}} koje ste odabrali. Sile (kN), vremena i ubrzanja zadržavaju svoje jedinice, a vrijednost koju upišete u polje označeno u metrima ostaje u metrima. Isto vrijedi za rezultate evakuacije, dnevnog svjetla, grijanja i hlađenja te namještaja: duljine, površine i volumeni prate vaš izbor; tlak, protok, temperatura, energija i snaga se nikad ne pretvaraju.
