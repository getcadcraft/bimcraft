---
title: Lag en utstyrsliste og eksporter CSV
summary: Gjør merkingene av elementer i en serveringstegning om til en utstyrsliste, filtrer den, gå til hvert element på arket, og last den ned som CSV.
keywords: utstyr, utstyrsliste, serveringskjøkken, kjøkken, elementmerker, kcl, attributter, stykkliste, mengdeliste, bom, csv, regneark, eksport, datauttrekk
from: e3faa1c8
---

## Hva du gjør

Les utstyrslisten ut av en kjøkken- eller serveringstegning, kontroller den, finn hvert element i planen, og last den ned som en regnearkfil.

Dette fungerer på tegninger der utstyrsmerkene har data som blokkattributter, slik kjøkkendesignbibliotek som KCL har: hver merking inneholder elementnummer (`KCL-ITEM`), antall, kategori, produsent, modell, elektriske og sanitære data, og merknader. Andre tegninger har ingen fane {{ui:Utstyr}}.

## Trinn

1. Åpne tegningen, helst fra prosjektmappen, slik at de koblede tegningene også lastes.
2. Klikk fanen {{ui:Utstyr}} over tegningen. Etiketten viser hvor mange elementer som er på ark, for eksempel «Utstyr (88)».
3. Les listen: **Post**, **Antall**, **Utstyr**, **Produsent**, **Modell**, **Elektro**, **Sanitær** og **Hvor**.
4. Velg hva som skal listes i menyen over tabellen: **Alle ark**, ett ark, **Ikke på noe ark**, eller **Alt merket i tegningen**. Hvert valg viser antallet sitt.
5. Skriv i filterboksen («Filter: kategori, produsent, modell …») for å snevre inn listen, for eksempel `refrigerator` eller `208`.
6. Klikk arknavnet til et element i kolonnen **Hvor**.
7. Se på tegningen: BimCraft bytter til det arket, zoomer inn på elementet og tegner en ring rundt det. Statuslinjen sier «Post *n*, *category* er ringet inn på *sheet*».
8. Klikk {{ui:Utstyr}} for å gå tilbake til listen.
9. Klikk {{ui:Last ned CSV}}.

## Hva du ser

- En fil kalt «*drawing name* equipment.csv» (med arkets navn i parentes når du listet ett ark) i nedlastingsmappen. Den åpnes i Excel, Numbers, LibreOffice eller Google Sheets.
- Statuslinjen: «Lastet ned *file name* (*n* poster).»

CSV-filen har disse kolonnene: Item, Qty, Category, Manufacturer, Model, Electrical, Plumbing, Remarks, Electrical remarks, Plumbing remarks, Sheets, Placed (how many tags). Den laster ned nøyaktig de radene tabellen viser, etter menyen og filteret.

## Slik bygges listen

- Den leses fra **selve merkingene**, ikke fra tabellen som er tegnet på arket. Merknaden over tabellen sier hvor mange merkinger som ble lest.
- Én rad er ett elementnummer med ett sett data. Antallet er **summen** av merkingene, slik en utskrevet liste teller det: hyller merket «5» på ett sted og «3» på et annet blir 8, vist som «5 + 3».
- **Hvor** lister arkene som viser hvert element, beregnet ut fra hva visningsområdene på hvert ark viser, altså det som skrives ut. «Kun modell» betyr at ingen ark viser det.
- **Nummer brukt to ganger** markerer ett elementnummer på to ulike utstyrsenheter. Raden har en gul markering.
- Merkinger som ingen ark viser, holdes adskilt under **Ikke på noe ark**. De er ofte rester fra tidligere planer eller andre jobber, og blandes aldri inn i **Alle ark**.
- **Elektro** viser ampere, kW, HP, volt, fase, tilkobling og plugg slik de er merket. **Sanitær** viser tilkoblingsstørrelser: CW kaldt vann, HW varmt vann, DD direkte avløp, ID indirekte avløp og gass. Andre merkingsfelt vises ikke ennå.

## Vanlige feil

- **Ingen fane {{ui:Utstyr}}.** Tegningen har ingen `KCL-ITEM`-merkinger, eller utstyret er tegnet uten data. Det er ingenting å lese.
- **Antall avviker fra den utskrevne listen.** En utskrevet liste kan ha reservenummer eller kortere navn enn merkingene. Stol på merkingene for det som er plassert; kontroller avvik med designeren.
- **CSV-filen viser rare tegn.** Filen er UTF-8. Åpne den med regnearkets importkommando, og velg UTF-8 hvis programmet spør.
- **En celle begynner med en apostrof.** Verdier som begynner med `=`, `+`, `-` eller `@`, får en `'` foran, slik at regneark ikke kjører dem som formler.
- {{key:F}} og {{key:P}} gjør ingenting. De virker på tegningen, ikke på listen. Klikk en arkfane først.
