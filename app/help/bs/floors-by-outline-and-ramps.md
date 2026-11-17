---
title: Podovi bilo kojeg oblika, otvori i rampe
summary: Nacrtajte pod ili ploču po njenoj konturi (balkon, konzolu, podest), izrežite otvore u njoj i nacrtajte rampe s njihovim podestima.
keywords: pod, ploča, kontura, balkon, konzola, podest, terasa, otvor u podu, rupa, okno, šupljina, rampa, nagib, pristupačna rampa, rampa za invalidska kolica, 1:12, IfcRamp, IfcSlab
from: f8eabb7a
---

## Šta ćete uraditi

Pravite podove koji ne prate prostorije, kao balkon ispred zidova, i crtate rampe između nivoa.

## Nacrtajte pod po konturi

1. Uključite {{ui:Crtanje}}, izaberite nivo, pa {{ui:Verzija}} › {{ui:Pod po obrisu}}.
2. U redu ispod alata izaberite vrstu (betonska ploča ili drveni pod), njegovu namjenu (pod ili podest), debljinu i koliko je gornja strana iznad nivoa (0 = u nivou s podom nivoa; negativna vrijednost postavlja ga niže).
3. Kliknite uglove. Alat se hvata za zidove, linije mreže i njihova presjecanja; držite {{key:Shift}} da ivica ostane pod pravim uglom. Dužina svake ivice i površina prikazuju se dok crtate. {{key:Backspace}} vraća posljednji ugao.
4. Ponovo kliknite prvi ugao, dvaput kliknite ili pritisnite {{key:Enter}} da završite.

## Izrežite otvor

Kliknite pod (u 3D prikazu ili na njegovu konturu na planu), zatim u {{ui:Svojstvima}} kliknite {{ui:Dodaj otvor}} i kliknite uglove otvora unutar poda, završavajući kao gore. U {{ui:Svojstvima}} poda nalaze se njegovi otvori, svaki s dugmetom {{ui:Obriši}}, i njegova površina bez njih.

## Nacrtajte rampu

1. Izaberite {{ui:Verzija}} › {{ui:Rampa}}. Podesite njenu širinu i to da li ide **do nivoa iznad** ili **uz uspon** koji upišete.
2. Izaberite kako se postavlja: **po nagibu** (1:12 kao početak; rampa je onoliko duga koliko uspon traži) ili **po dužini** (vaš drugi klik postavlja dužinu, a nagib slijedi).
3. Kliknite podnožje rampe (sredinu donje ivice), zatim kliknite smjer uspona. Pregled prikazuje njenu dužinu, krakove i nagib.

Uspon veći od 30 inča (760 mm) dijeli se na krakove s podestom od 5 stopa (1525 mm) između njih. Ovo su uobičajene planske vrijednosti, a ne vaš građevinski propis: provjerite pravila na mjestu gradnje. Rampa strmija od 1:12 označava se u njenim {{ui:Svojstvima}}.

## Šta treba da vidite

- Svaki pod, otvor i rampa je jedan korak: {{key:Mod+Z}} ga vraća.
- Na planu, kontura nacrtanog poda (otvor je prekrižen), te kontura rampe, krakovi, podesti i strelica prema gore s nagibom.
- Svojstva nacrtanog poda (vrsta, namjena, debljina, gornja strana, površina, otvori) i rampe (širina, gornja strana, uspon, nagib ili dužina); {{key:Delete}} uklanja jedno ili drugo.
- Rampa do nivoa iznad prati taj nivo kad se promijeni njegova visina.
- U IFC datoteci: nacrtani pod je ploča (IfcSlab, pod ili podest) s izrezanim otvorima (IfcOpeningElement); rampa je IfcRamp, sastavljena od nagnutih krakova (IfcRampFlight) i podestnih ploča, sa svojim nagibom i širinom.

:::note
Podovi nacrtani na ovaj način ostaju tamo gdje ste ih nacrtali. Podovi napravljeni s {{ui:Pod}} prate prostorije kad se zidovi pomjere: pogledajte [Prostorije, podovi, plafoni i krovovi](topic:floors-and-roofs).
:::
