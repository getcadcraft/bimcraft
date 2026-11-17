---
title: Tla poljubne oblike, odprtine in klančine
summary: Narišite tla ali ploščo po njenem obrisu (balkon, konzolo, podest), v njih izrežite odprtine in narišite klančine s podesti.
keywords: tla, plošča, obris, balkon, konzola, podest, terasa, odprtina v tleh, luknja, jašek, praznina, klančina, naklon, dostopna klančina, invalidska klančina, 1:12, IfcRamp, IfcSlab
from: f8eabb7a
---

## Kaj boste naredili

Naredite tla, ki ne sledijo sobam, na primer balkon zunaj zidov, in narišite klančine med nivoji.

## Narišite tla po obrisu

1. Vklopite {{ui:Risanje}}, izberite nivo, nato {{ui:Zgradba}} › {{ui:Tla po obrisu}}.
2. V vrstici pod orodji izberite vrsto (betonska plošča ali lesena tla), namen (tla ali podest), debelino in koliko je njihov zgornji rob nad nivojem (0 = na ravni tal nivoja; negativna vrednost ga postavi nižje).
3. Kliknite vogale. Orodje se lovi na zidove, mrežne črte in njihova presečišča; za pravokoten rob držite {{key:Shift}}. Dolžina vsakega roba in površina se prikazujeta med risanjem. {{key:Backspace}} povrne zadnji vogal.
4. Znova kliknite prvi vogal, dvakrat kliknite ali pritisnite {{key:Enter}}, da končate.

## Izrežite odprtino

Kliknite tla (v 3D-pogledu ali njihov obris na tlorisu), nato v {{ui:Lastnosti}} kliknite {{ui:Dodaj odprtino}} in kliknite vogale odprtine znotraj tal ter končajte kot zgoraj. Seznam v **Lastnostih** tal navaja njihove odprtine, vsako z {{ui:Izbriši}}, ter njihovo površino brez njih.

## Narišite klančino

1. Izberite {{ui:Zgradba}} › {{ui:Klančina}}. Nastavite njeno širino in ali gre **do nivoja nad njim** ali **navzgor za dvig**, ki ga vpišete.
2. Izberite, kako je nastavljena: **po naklonu** (začetno 1:12; klančina je tako dolga, kot zahteva dvig) ali **po dolžini** (vaš drugi klik nastavi dolžino, naklon pa sledi).
3. Kliknite podnožje klančine (sredino spodnjega roba), nato kliknite smer navzgor. Predogled prikaže njeno dolžino, njene odseke in naklon.

Dvig nad 30 in (760 mm) je razdeljen na odseke s podestom 5 ft (1525 mm) med njimi. To so običajne vrednosti za načrtovanje, ne vaš predpis: preverite pravila pri gradnji. Klančina, strmejša od 1:12, je v svojih **Lastnostih** označena.

## Kaj morate videti

- Vsaka tla, odprtina in klančina je en korak: {{key:Mod+Z}} jo povrne.
- Na tlorisu je viden obris narisanih tal (odprtina je prečrtana) ter obris klančine, njeni odseki, podesti in puščica navzgor z naklonom.
- Lastnosti narisanih tal (vrsta, namen, debelina, zgornji rob, površina, odprtine) in klančine (širina, zgornji rob, dvig, naklon ali dolžina); {{key:Delete}} odstrani katero koli od njiju.
- Klančina do nivoja nad njo sledi temu nivoju, ko se spremeni njegova višina.
- V datoteki IFC: narisana tla so plošča (IfcSlab, tla ali podest) z izrezanimi odprtinami (IfcOpeningElement); klančina je IfcRamp iz nagnjenih odsekov (IfcRampFlight) in plošč podestov, z naklonom in širino.

:::note
Tla, narisana na ta način, ostanejo tam, kjer ste jih narisali. Tla, narejena z {{ui:Tla}}, sledijo sobam, ko se zidovi premaknejo: glejte [Sobe, tla, stropi in strehe](topic:floors-and-roofs).
:::
