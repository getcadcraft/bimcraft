---
title: Het symboolpalet
summary: Zoek elektrische en sanitaire symbolen op naam of afbeelding, markeer de symbolen die u gebruikt als favoriet en plaats ze met één klik op de plattegrond.
keywords: symboolpalet, symbolen werkbalkknop, wand volgt, symbolen, elektrische symbolen, sanitaire symbolen, sanitair plan, toilet, wc, wastafel, spoelbak, bad, douche, vloerput, reinigingsopening, buitenkraan, boiler, klep, schuifklep, koud water, warm water, afvoer, ventilatie, lijnstijl, favorieten, zoeken
from: 67f20bc0
---

## Wat u gaat doen

Open één paneel dat de elektrische symbolen en de sanitaire plattegrondsymbolen met hun afbeeldingen en namen toont, zoek het symbool dat u wilt, en plaats het op de plattegrond. Hier is geen internet nodig: de symbolen komen met de app mee.

## Openen en een symbool plaatsen

1. Open een model en open {{ui:Build}} › {{ui:Symboolpalet}} (getypte opdracht: SYMBOLS). Dezelfde knop staat in het menu Hulpmiddelen van de tekenbalk en als **Symbolen** in de groep {{ui:Bibliotheek}} van de werkbalk.
2. Kies een set: **Elektrisch** of **Sanitair**, of **Alle sets**. Typ in het zoekvak om de lijst te beperken. U kunt zoeken op naam of op afkorting (WC, CW, HB).
3. Klik op een symbool. De plattegrond is klaar om het te plaatsen.
   - Een **elektrisch** symbool start het Elektrisch-hulpmiddel met dat apparaat gekozen, dus alles uit [De elektrische plattegrond](topic:electrical-plan) geldt: klik op de plattegrond, één stap ongedaan maken.
   - Een **sanitair** symbool start het hulpmiddel voor plattegrondsymbolen. Klik op de plattegrond. Een toestel dat op een wand staat (een toilet, wastafel, bad, spoelbak, buitenkraan) snapt naar het dichtstbijzijnde wandvlak, met zijn achterkant tegen de wand; afvoeren, kleppen, de boiler en lijnstijlen gaan waar u klikt.
4. Druk op {{key:R}} om het symbool 90 graden te draaien ({{key:Shift}}+{{key:R}} draait de andere kant op), of typ een hoek in **Rotatie** in de opties-balk. Druk op {{key:Esc}} om te stoppen.

Een toestel of buitenkraan dat op een wandvlak is gesnapt, onthoudt die wand: wanneer de wand verschuift, verschuift het symbool mee (hetzelfde vlak, dezelfde afstand langs de wand) in dezelfde stap ongedaan maken. Als u de wand verwijdert, blijft het symbool waar het was en toont **Problemen** "heeft zijn wand verloren"; verplaats of verwijder het. Symbolen die niet bij een wand staan, zijn aan niets gekoppeld.

Elk symbool dat u plaatst is één stap ongedaan maken. Een geplaatst symbool is een plattegrondannotatie in het IFC-bestand met zijn label (WC1, WC2, ...). Selecteer het om zijn label of rotatie in **Eigenschappen** te wijzigen, of druk op {{key:Delete}}.

## Wat de sanitaire set bevat

Toestellen (toilet, urinoir, wastafel, bad, douche, keukenspoelbak, enkele spoelbak), een vloerput, vloer- en wandreinigingsopeningen, een buitenkraan, een wandhydrant, een boiler, kleppen (schuifklep, doorgangsklep, kogelkraan, terugslagklep, vlinderklep, drukreduceerklep) en lijnstijlen met hun afkortingen: koud water (CW), warm water (HW), warmwaterretour (HWR), afvoer (W), ventilatie (V), hemelwaterafvoer (SD) en gas (G). De tekeningen schalen mee met de plattegrond, dus ze behouden hun grootte op het afgedrukte blad. Een lijnstijl is een korte stomp om de stijl op de plattegrond te tonen; teken de echte leidingroutes met de leidingshulpmiddelen.

:::note
Dit zijn gangbare conventies voor sanitaire plattegronden, door ons getekend; niet gecertificeerd volgens ISO 4067-1 of ASME Y32.4. Ze zijn vergeleken met openbare tekenlegenda's en opleidingshandleidingen (de lijst staat in de bronnotitie van de set, die aangeeft waar we overeenkomen en waar we verschillen), niet van een product gekopieerd, en ze zijn vrij te gebruiken (Apache-2.0). Tekensets verschillen, dus controleer de legenda van uw eigen project. Het zijn plattegrondsymbolen, geen sanitair ontwerp: ze dimensioneren geen leidingen en controleren geen voorschriften.
:::

## Favorieten en toetsenbord

- Klik op de ster bij een symbool (of druk erop op {{key:F}}) om het als favoriet te bewaren. Favorieten staan eerst en blijven in deze browser. **Alleen favorieten** toont alleen die.
- {{key:Down}} vanuit het zoekvak gaat naar de symbolen; de pijltjestoetsen, {{key:Home}} en {{key:End}} bewegen ertussen; {{key:Enter}} kiest het gefocuste symbool; {{key:Esc}} sluit het palet.
- Op een telefoon is het palet een blad onderaan het scherm; het schuift opzij zodra u een symbool kiest, zodat u de plattegrond kunt zien. Open het opnieuw via het menu Build of de knop **Palet** in de opties-balk.

:::tip
Als een bestand een symboolset gebruikt die deze build niet heeft, toont de plattegrond een vak waar het symbool stond, en **Problemen** vermeldt het.
:::

## Een geplaatst element koppelen aan een symbool

Een lamp uit de bibliotheek is een 3D-element, maar een elektrische indeling toont het als zijn symbool. U plaatst het **één keer** en koppelt het:

1. Kies Build › **Symboolkoppeling** (of typ SYMBOLLINK). Een sectie Symboolkoppeling opent in het linkerpaneel.
2. Selecteer de geplaatste elementen in de plattegrond of in 3D. De sectie zegt hoeveel er zijn geselecteerd en waaraan ze zijn gekoppeld.
3. Kies het **Symbool** (uit elke symboolset: Elektrisch, Sanitair) en kies **Koppelen**.

Het element blijft één element, en elke staat telt het één keer:

- **3D** toont altijd zijn lichaam.
- Een **plattegrond** toont zijn plattegrondvorm, zoals voorheen.
- Een plattegrond waarvan **Deze weergave toont gekoppelde elementen als** staat op **Hun symbool (een installatie-indeling)**, toont het symbool op zijn plaats. Een klik op het symbool selecteert het element. De keuze blijft voor die weergave in het bestand bewaard (de vloerplattegrond van een niveau, de plafondplattegrond of een callout).

**Draai het symbool 90°** draait het symbool ten opzichte van zijn element. **Koppeling verwijderen** haalt de koppeling weg; het element blijft. De staat **Gekoppelde symbolen** toont elk gekoppeld element één keer, met zijn niveau en de ruimte waarin het staat.

Nog niet beschikbaar: de keuze van een weergave op een blad is de keuze van het niveauplan dat het toont; apparaten die met het Elektrisch-hulpmiddel zijn geplaatst, zijn als voorheen symbolen in elke plattegrond.
