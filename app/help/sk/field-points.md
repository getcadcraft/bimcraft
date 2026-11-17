---
title: Body na vytýčenie a kontrolu skutočného stavu
summary: Očíslujte miesta, ktoré posádka vytyčuje z modelu — stredy stĺpov, konce stien, kotevné skrutky, chráničky, ľubovoľný vybraný prvok — zapíšte ich pre totálnu stanicu a potom načítajte body zamerané posádkou a zistite, čo je mimo.
keywords: body vytýčenia, vytyčovanie, vytýčiť, totálna stanica, geodézia, súbor bodov, csv, txt, pnezd, penzd, xyz, sever, východ, výška, skutočný stav, kontrola, tolerancia, odchýlka, kotevné skrutky, stredy stĺpov, konce stien, chráničky, geodetické súradnice, prevod mapy
from: acea9606
---

Karta {{ui:Points}} vpravo vytvára body, ktoré posádka vytyčuje na stavenisku z otvoreného modelu, a kontroluje body, ktoré potom zmerajú.

## Vytvorenie bodov

1. Otvorte model IFC a kartu {{ui:Points}}.
2. Zaškrtnite, čo vytyčiť: **stredy stĺpov** (päta stredovej osi každého stĺpa), **konce stien** (oba konce osi každej steny, na jej základni), **kotevné skrutky**, **chráničky** (prvky, ktorých názov alebo typ uvádza sleeve) a **vybrané prvky** (každý v bode umiestnenia — najprv ich vyberte v zobrazení).
3. Vyberte prvé číslo a predponu, súradnice, jednotky, stĺpce a súbor:
   - **Model**: vlastné súradnice súboru. **Geodetická sieť**: mapová sieť georeferencie modelu (zobrazí sa len vtedy, keď IFC obsahuje mapový prevod), v metroch alebo jednotke, ktorú zvolíte.
   - Stĺpce **PNEZD** (bod, sever, východ, výška, popis), **PENZD** alebo **XYZ**; **CSV** (čiarky) alebo **TXT** (tabulátory).
4. Stlačte {{ui:Make points}}: zoznam ich zobrazí a zobrazenie ich označí modrou. {{ui:Download the points}} zapíše súbor.

Body majú pevné poradie — podľa druhu a potom v radoch naprieč pôdorysom —, takže ich opätovné vytvorenie z toho istého modelu dá rovnaké čísla. Súbor je ten, ktorý otvorí CivilCraft a ktorý zapíše CadCraft príkazom EXPORTPOINTS: jeden bod na riadok, tri desatinné miesta, popis v úvodzovkách, keď obsahuje čiarku.

## Kontrola bodov skutočného stavu

Keď posádka pošle namerané údaje, zvoľte **toleranciu** v milimetroch a spôsob párovania bodov — podľa **čísla bodu** (zachovali vaše čísla) alebo podľa **najbližšieho zamerania** — a stlačte {{ui:Read as-built points…}}. Súbor načítajte v tých istých jednotkách a súradniciach, v akých ste ho zapísali.

Každý projektový bod je potom **v** tolerancii, **mimo** nej, **nezmeraný**, a každé zameranie, o ktoré nikto nežiadal, je **navyše**. Tabuľka uvádza rozdiely v jednotke, ktorú zvolíte na paneli nástrojov; stopy sa zobrazujú ako desatinné palce (skutočný stav mínus projekt: východ, sever, výška a vzdialenosť v pôdoryse); zobrazenie označí každý bod zeleno alebo červene s čiarou k zameraniu a sivo, keď nebol zmeraný. {{ui:Report (CSV)}} zapíše celé porovnanie.

Nič tu nemení model. Ešte nie je hotové: vytyčovanie z hrán dosiek, priesečníkov osí alebo otvorov, ktoré sa vytvoria za vás, a posielanie bodov priamo do prístroja — použite súbor.
