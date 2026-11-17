---
title: Podovi bilo kojeg oblika, otvori i rampe
summary: Nacrtajte pod ili ploču prema njezinom obrisu (balkon, konzola, podest), izrežite otvore u njoj i nacrtajte rampe s njihovim podestima.
keywords: pod, ploča, obris, balkon, konzola, podest, terasa, otvor u podu, rupa, okno, šupljina, rampa, nagib, pristupačna rampa, rampa za invalidska kolica, 1:12, IfcRamp, IfcSlab
from: f8eabb7a
---

## Što ćete učiniti

Izradite podove koji ne slijede sobe, poput balkona izvan zidova, i nacrtajte rampe između razina.

## Nacrtajte pod prema obrisu

1. Uključite {{ui:Crtanje}}, odaberite razinu, zatim {{ui:Izgradnja}} › {{ui:Pod po obrisu}}.
2. U retku ispod alata odaberite vrstu (betonska ploča ili drveni pod), njegovu namjenu (pod ili podest), debljinu i koliko je njegova gornja strana iznad razine (0 = u razini s podom razine; negativna vrijednost postavlja ga niže).
3. Kliknite kutove. Alat se hvata za zidove, linije mreže i njihova sjecišta; držite {{key:Shift}} da bi rub ostao pod pravim kutom. Duljina svakog ruba i površina prikazuju se dok crtate. {{key:Backspace}} poništava zadnji kut.
4. Ponovno kliknite prvi kut, dvaput kliknite ili pritisnite {{key:Enter}} za završetak.

## Izrežite otvor

Kliknite pod (u 3D prikazu ili njegov obris na tlocrtu), zatim u {{ui:Svojstva}} kliknite {{ui:Dodaj otvor}} i kliknite kutove otvora unutar poda, završavajući kao iznad. U {{ui:Svojstva}} poda navedeni su njegovi otvori, svaki s {{ui:Izbriši}}, te njegova površina bez njih.

## Nacrtajte rampu

1. Odaberite {{ui:Izgradnja}} › {{ui:Rampa}}. Postavite njezinu širinu i hoće li ide **do razine iznad** ili **uz uspon** koji upišete.
2. Odaberite kako je postavljena: **prema nagibu** (1:12 kao početna vrijednost; rampa je onoliko duga koliko uspon traži) ili **prema duljini** (vaš drugi klik postavlja duljinu, a nagib slijedi).
3. Kliknite podnožje rampe (sredinu donjeg ruba), zatim kliknite smjer uspona. Pregled prikazuje njezinu duljinu, krakove i nagib.

Uspon veći od 30 palaca (760 mm) dijeli se na krakove s podestom od 5 stopa (1525 mm) između njih. To su uobičajene vrijednosti za planiranje, a ne vaš propis: provjerite pravila gdje gradite. Rampa strmija od 1:12 označena je u njezinim {{ui:Svojstva}}.

## Što trebate vidjeti

- Svaki pod, otvor i rampa je jedan korak: {{key:Mod+Z}} ga vraća.
- Na tlocrtu obris nacrtanog poda (otvor je prekrižen), te obris rampe, krakovi, podesti i strelica prema gore s nagibom.
- Svojstva nacrtanog poda (vrsta, namjena, debljina, gornja strana, površina, otvori) i rampe (širina, gornja strana, uspon, nagib ili duljina); {{key:Delete}} uklanja jedno i drugo.
- Rampa do razine iznad prati tu razinu kada se promijeni njezina visina.
- U IFC datoteci: nacrtani pod je ploča (IfcSlab, pod ili podest) s izrezanim otvorima (IfcOpeningElement); rampa je IfcRamp načinjen od kosih krakova (IfcRampFlight) i podestnih ploča, s nagibom i širinom.

:::note
Podovi nacrtani na ovaj način ostaju tamo gdje ste ih nacrtali. Podovi napravljeni s {{ui:Pod}} prate sobe kada se zidovi pomaknu: vidi [Sobe, podovi, stropovi i krovovi](topic:floors-and-roofs).
:::
