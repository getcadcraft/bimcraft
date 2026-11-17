---
title: Podovi proizvoljnog oblika, otvori i rampe
summary: Nacrtajte pod ili ploču po njenom obrisu (balkon, konzola, podest), isecite otvore u njoj i nacrtajte rampe sa njihovim podestima.
keywords: pod, ploča, obris, balkon, konzola, podest, terasa, otvor u podu, rupa, šaht, praznina, rampa, nagib, pristupačna rampa, rampa za invalidska kolica, 1:12, IfcRamp, IfcSlab
from: f8eabb7a
---

## Šta ćete uraditi

Pravite podove koji ne prate prostorije, poput balkona izvan zidova, i crtate rampe između nivoa.

## Nacrtajte pod po obrisu

1. Uključite {{ui:Crtanje}}, izaberite nivo, zatim {{ui:Verzija}} › {{ui:Pod po obrisu}}.
2. U redu ispod alata izaberite vrstu (betonska ploča ili drveni pod), njegovu namenu (pod ili podest), debljinu i koliko je gornja površina iznad nivoa (0 = u nivou sa podom nivoa; negativna vrednost ga spušta niže).
3. Kliknite uglove. Alat se hvata za zidove, linije mreže i njihove preseke; držite {{key:Shift}} da ivica ostane pravougaona. Dužina svake ivice i površina prikazuju se dok crtate. {{key:Backspace}} vraća poslednji ugao.
4. Ponovo kliknite prvi ugao, dvaput kliknite ili pritisnite {{key:Enter}} za kraj.

## Isecite otvor

Kliknite pod (u 3D prikazu ili njegov obris na planu), zatim u {{ui:Svojstva}} kliknite {{ui:Dodaj otvor}} i kliknite uglove otvora unutar poda, završavajući kao gore. Svojstva poda navode njegove otvore, svaki sa {{ui:Izbriši}}, i njegovu površinu bez njih.

## Nacrtajte rampu

1. Izaberite {{ui:Verzija}} › {{ui:Rampa}}. Podesite njenu širinu i da li ide **do nivoa iznad** ili **uz visinu** koju upišete.
2. Izaberite kako se postavlja: **po nagibu** (1:12 na početku; rampa je onoliko duga koliko visina traži) ili **po dužini** (vaš drugi klik postavlja dužinu, a nagib prati).
3. Kliknite na podnožje rampe (sredinu njene donje ivice), zatim kliknite put naviše. Pregled prikazuje njenu dužinu, krake i nagib.

Visina veća od 30 inča (760 mm) deli se na krake, sa podestom od 5 stopa (1525 mm) između njih. Ovo su uobičajene vrednosti za planiranje, a ne vaš propis: proverite pravila gde gradite. Rampa strmija od 1:12 označena je u njenim {{ui:Svojstvima}}.

## Šta treba da vidite

- Svaki pod, otvor i rampa je jedan korak: {{key:Mod+Z}} ga vraća.
- Na planu, obris nacrtanog poda (otvor je prekrštен), a obris rampe, kraci, podesti i strelica naviše sa njenim nagibom.
- Svojstva nacrtanog poda (vrsta, namena, debljina, gornja površina, površina, otvori) i rampe (širina, gornja površina, visina, nagib ili dužina); {{key:Delete}} uklanja bilo koje.
- Rampa do nivoa iznad prati taj nivo kad se njegova visina promeni.
- U IFC datoteci: nacrtani pod je ploča (IfcSlab, pod ili podest) sa isečenim otvorima (IfcOpeningElement); rampa je IfcRamp od nagnutih krakova (IfcRampFlight) i ploča podesta, sa svojim nagibom i širinom.

:::note
Podovi nacrtani na ovaj način ostaju tamo gde ste ih nacrtali. Podovi napravljeni sa {{ui:Pod}} prate prostorije kad se zidovi pomere: videti [Prostorije, podovi, plafoni i krovovi](topic:floors-and-roofs).
:::
