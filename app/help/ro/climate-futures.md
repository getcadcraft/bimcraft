---
title: "Scenarii climatice: inundații, căldură și incendii forestiere în 2050 și 2080"
summary: Rulați din nou analiza inundațiilor, anul energetic și o evaluare de incendiu forestier cu clima viitoare (scenariile SSP2-4.5 și SSP5-8.5, anii 2050 și 2080) dintr-un pachet de date climatice, prezentate alături de situația actuală.
keywords: climă, schimbare climatică, viitor, 2050, 2080, ssp, cmip6, scenariu, nivelul mării, inundație, căldură, fișier meteo, epw, morfare, energyplus, incendiu forestier, vreme de incendiu
from: 224ecd08
---

Datele climatice vin dintr-un **pachet de date**, nu din aplicație. Activați suplimentul {{ui:Scenarii climatice}} din Setări › Suplimente sau încărcați un fișier de pachet propriu în blocul {{ui:Clima viitoare}}.

:::warning
Pachetul care vine cu suplimentul este un **exemplu**: trei locuri (Denver, Miami, Johannesburg), un singur model climatic, cinci ani în fiecare perioadă de 20 de ani. Există ca să încercați uneltele, **nu pentru proiectare**. Panoul o spune cu caractere aldine cât timp este în uz. Un pachet complet (multe modele, toți anii, mai multe locuri) se construiește cu `tools/climate/build-pack.mjs` din datele NASA NEX-GDDP-CMIP6.
:::

## Alegeți un viitor

În {{ui:Redare a hazardului}} din panoul din stânga, alegeți un **Scenariu** (SSP2-4.5, calea de mijloc, sau SSP5-8.5, emisii mari) și un **An** (2050 înseamnă 2041-2060, 2080 înseamnă 2071-2090; ambele față de 1995-2014). **Locul** este locul din pachet cel mai apropiat de amplasamentul modelului (latitudinea și longitudinea IfcSite), sau cel pe care îl alegeți. Departe de orice loc, se folosesc schimbările medii globale din pachet, iar panoul spune asta.

## Inundație, prezentată alături de viitor

Cu un scenariu ales, setați **Tipul de inundație**: costieră (adaugă creșterea nivelului mării), fluvială sau ploi torențiale (mai adâncă cu schimbarea ploii din cea mai ploioasă zi) sau ambele. Apăsați Rulare: inundația se redă ca înainte, iar un tabel arată alăturat inundația actuală și cea viitoare (nivelul apei, camerele care se udă, cea mai adâncă apă). Presupunerile sunt listate sub el:

- un nivel costier crește cu toată creșterea nivelului mării; valul de furtună și valurile nu se schimbă;
- debitul râului crește proporțional cu ploaia din cea mai ploioasă zi, iar adâncimea urmează debitul la puterea 0.6 (ecuația Manning pentru un canal larg);
- cele două părți sunt pur și simplu adunate.

## Căldură: un fișier meteo viitor

Alegeți tipul {{ui:Încălzire: fișier meteo viitor}}, alegeți un fișier meteo `.epw` actual și apăsați {{ui:Creare fișier meteo viitor}}. Fișierul este **morfat** lună de lună, cu metoda publicată de deplasare și întindere (Belcher, Hacker și Powell 2005): media lunii se încălzește cu schimbarea din pachet, după-amiezile fierbinți cu schimbarea maximei zilnice, iar nopțile reci cu schimbarea minimei zilnice; umiditatea relativă se mișcă cu schimbarea din pachet, iar punctul de rouă se recalculează. Presiunea și vântul rămân cum erau. Tabelul compară temperaturile medii și cele maxime, temperaturile de proiectare de 0.4 % pentru răcire și 99.6 % pentru încălzire, orele la 30 °C și 35 °C și gradele-zile.

{{ui:Salvare fișier meteo viitor}} îl salvează; {{ui:Folosire în verificarea energetică}} îl trimite verificării EnergyPlus (fila Energie). Fișierul viitor este același an tipic, mai cald: nu adaugă valuri de căldură noi.

## An energetic, prezentat alături de viitor

În verificarea EnergyPlus din fila Energie (un supliment propriu, cu motorul dvs.), alegeți un fișier meteo actual, apoi un scenariu și un an în blocul său {{ui:Clima viitoare}}, și apăsați {{ui:Simulare un an: prezent și viitor}}. Anul rulează pe fișierul actual și pe versiunea sa viitoare morfată, iar încălzirea și răcirea fiecărei camere sunt listate alături.

## Expunere la incendii forestiere (doar evaluare)

Alegeți tipul {{ui:Expunere la incendiu forestier (doar evaluare)}}: vegetația cea mai apropiată, panta de la ea în sus până la clădire și distanța până la ea. Rezultatul este o bandă de la foarte scăzut la extrem, actual și viitor.

:::warning
**Doar evaluare.** Aceasta este scara noastră relativă, ca să aflați dacă un amplasament are nevoie de o evaluare adecvată a riscului de incendiu forestier, nu o clasificare de cod sau un nivel de atac al incendiului de vegetație. Se înmulțesc o pondere pentru vegetație, un factor de pantă (un incendiu își dublează aproximativ viteza la fiecare 10 grade în sus, numărate până la 20 de grade), un factor de distanță (10 m împărțit la distanță, cel mult 1) și schimbarea din pachet a indicelui de vreme de incendiu.
:::

## De unde vin cifrele

- **Temperatură, umiditate, insolație, precipitații, vreme de incendiu:** NASA NEX-GDDP-CMIP6, ieșirea zilnică reduscalată a modelelor CMIP6. Ieșirea fiecărui model este sub CC BY 4.0. Schimbarea indicelui de vreme de incendiu este Canadian Fire Weather Index calculat zi de zi din vremea modelului (cu umiditatea zilnică în locul celei de la amiază).
- **Creșterea nivelului mării:** media globală IPCC AR6 (nu cea locală; ridicarea sau scufundarea terenului nu este inclusă), dacă un pachet nu conține cifre locale.
- Pachetul își numește sursa, licența și data; panoul le afișează.
