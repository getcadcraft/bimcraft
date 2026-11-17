---
title: Carbonul încorporat și costurile pe grafic
summary: Adunați carbonul încorporat al modelului dintr-un tabel de factori deschis și editabil și repartizați prețurile pe graficul 4D într-o curbă de cost și de flux de numerar. Ambele pornesc de la valori pe care le introduceți sau le importați.
keywords: carbon încorporat, carbon, co2, kgco2e, emisii, tabel de factori, epd, 5d, cost, flux de numerar, curbă în S, cost de grafic, prețuri, prețuri din extragerea de cantități
from: 83e82840
---

## Carbonul încorporat

Deschideți panoul **Carbon**. Cantitatea fiecărui element (volum, suprafață sau lungime) se înmulțește cu un factor din tabel, pe modul de ciclu de viață: etapa de producție este obligatorie, transportul și deșeurile sunt opționale. Totalurile se obțin pe material, clasă și etaj și pe metru pătrat de planșeu.

**Tabelul de factori vă aparține.** Rândurile livrate împreună cu BimCraft sunt valori generice de pornire, de ordinul de mărime corect. Ele nu provin dintr-o bază de date, sunt marcate ca neverificate și trebuie înlocuite cu sursa pe care o folosiți (o EPD, o bază de date națională sau cifrele firmei dumneavoastră). Editați rândurile în panou sau importați și exportați tabelul ca CSV sau JSON. Rândurile pe care le adăugați înlocuiesc rândul de pornire cu același id. Tabelul este salvat în model.

Elementele fără corespondență sau fără cantitate sunt enumerate ca Probleme, în loc să fie numărate ca zero.

## Costurile pe graficul 4D

Deschideți panoul **Cost** lângă graficul 4D. Introduceți prețurile (scrieți-le, importați un CSV sau JSON sau aduceți liniile din TakeoffCraft), asociați fiecare preț cu materialele din model prin cuvinte cheie, iar panoul prețuiește elementele fiecărei sarcini. Costul unei sarcini se repartizează pe zilele de la început la sfârșit (uniform, sau cu încărcare la început ori la sfârșit), iar panoul trasează curba cumulată a fluxului de numerar pe zi, săptămână sau lună, cu costul pe etapă și pe pachet și ce este planificat față de ce este construit la o dată. Export în CSV. Nimic nu are preț până nu introduceți prețuri: nu este livrat niciunul.

## Moneda

Un tabel de prețuri poate indica în ce monedă sunt prețurile (trei litere, de exemplu USD sau EUR). Panoul 5D are un câmp pentru aceasta, moneda se păstrează în fișier împreună cu prețurile, iar exporturile JSON o includ. Un tabel făcut înainte de aceasta sau în care ați lăsat câmpul gol nu are monedă: costurile sale sunt afișate în USD, moneda implicită a aplicației, iar panoul și totalurile curente o spun. Nu se face conversie între monede.
