---
title: Kontroleer verhitting en verkoeling met EnergyPlus
summary: Skryf die model as 'n EnergyPlus-lêer, of laat EnergyPlus weergawe 26.2.0 daarop in die blaaier loop, en vergelyk die ontwerplading met die vinnige verhittings- en verkoelingshulpmiddel. 'n Tweede opinie vir vroeë ontwerp, nie 'n nakomingsberekening nie.
keywords: energyplus, energiesimulasie, ontwerpdag, verhittingslading, verkoelingslading, weerlêer, epw, idf, termiese massa, jaarlikse energie, simuleer
from: b82a5bf2
---

## Wat jy gaan doen

Die **Kontroleer met EnergyPlus**-paneel skryf die oop model as 'n EnergyPlus-invoerlêer ('n IDF): een sone per vertrek, die mure, vloere, dakke en vensters met hul U-waardes, die lugwisselings en ideale verhitting en verkoeling. Jy kan altyd **daardie lêer stoor** en dit in jou eie EnergyPlus laat loop.

As jy ook die enjin opstel, kan die paneel op die plek simuleer, en lys EnergyPlus se ontwerpverhitting en -verkoeling langs dié van die vinnige hulpmiddel, vertrek vir vertrek.

Dit is 'n ontwerphulpmiddel. Energiekodes, sertifisering en permitte benodig 'n goedgekeurde hulpmiddel en die klimaatdata wat dit vereis, en die resultaat moet hersien word deur die persoon wat daarvoor instaan.

## Stel die enjin op

BimCraft bevat nie EnergyPlus nie. Dit is 'n groot WebAssembly-bou (ongeveer 6 MB saamgepers, plus 'n 4.6 MB-datalêer), so jy host dit self en tik sy adres in die paneel in. Die bladsy laai dit slegs wanneer jy 'n simuleerknoppie druk, nooit by opstart nie. Die adres moet https, 'n pad op hierdie webwerf, of localhost wees.

## Ontwerpdae of 'n jaar

- **Simuleer ontwerpdae** benodig geen weerlêer nie. Dit loop 'n koue winterdag sonder son en 'n warm, helder somerdag by die temperature in die verhittings- en verkoelingsinvoere op die Daglig-oortjie, en gee elke vertrek se lading in watt aan.
- **Simuleer 'n jaar** benodig 'n weerlêer in EPW-formaat wat jy kies. Dit voeg mense, ligte en toerusting by uit dieselfde invoere (altyd aan, omdat geen skedule self opgestel word nie), en gee die verhittings- en verkoelingsenergie van elke vertrek in kWh aan. Weerlêers het hul eie lisensies, so gebruik een wat jy mag gebruik.

## Termiese massa

Merk **Gee mure met bekende lae termiese massa** aan, en mure, dakke en vloere waarvan die materiaallae bekend is, word laag-vir-laag geskryf, met digtheid en spesifieke hitte uit 'n kort tabel van tipiese waardes volgens materiaalnaam. Die lae word eers van buite af geneem, in die volgorde wat die lêer lys. Elemente sonder lae bly by hul U-waarde sonder massa.

## Die vergelyking lees

Die twee metodes beantwoord effens verskillende vrae. Die vinnige hulpmiddel hou elke element; die EnergyPlus-lêer gemiddeld elke vertrek se U-waardes volgens soort oppervlak. 'n Verskil van meer as 15 % in 'n vertrek se ontwerpverhitting word as 'n nota in die ⚠-paneel gelys, met albei syfers. Verkoeling verskil meer volgens ontwerp: die vinnige hulpmiddel bereken 'n piek uit die son op een datum, en EnergyPlus dimensioneer op sy eie ontwerpdag.
