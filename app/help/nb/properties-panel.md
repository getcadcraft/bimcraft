---
title: Felt i panelet Egenskaper
summary: Hva hvert felt i panelet Egenskaper og panelene Fil, Tegning og Mappe betyr, og hvilke av dem du kan endre.
keywords: egenskaper, felt, attributter, globalid, guid, kopier, kopier verdi, kopier alt, csv, utklippstavle, serienummer, merke, objekttype, linje, express-id, egenskapssett, pset, mengder, skjema, filpanel
from: fe55b435
---

## Et IFC-element

Øverst i {{ui:Egenskaper}}-panelet vises elementets type uten «Ifc»-prefikset (for eksempel «Door», «WallStandardCase», «FurnishingElement») og dets navn, eller «Uten navn».

| Felt | Betydning | Kan redigeres |
|---|---|---|
| Name | Elementets navn, ofte familie- og typenavnet fra eksportøren | Ja |
| Type | Navnet på elementets type, når det har en | Nei |
| Object type | En fritekstbeskrivelse av typen, som noen eksportører fyller ut | Ja |
| Tag | Elementets merke eller markering; mange eksportører skriver elementets ID her | Ja |
| Description | Fritekst | Ja |
| GlobalId | Elementets permanente 22-tegns IFC-identifikator, den samme i hver eksport av samme element | Nei |
| Line | Elementets linjenummer (`#1234`) i denne IFC-filen. Det endrer seg mellom eksporter | Nei |

Under kommer **egenskapssettene**, sortert etter navn:

- Hvert sett åpnes og lukkes når du klikker på navnet. De tre første er åpne.
- Et sett merket «(type)» hører til elementets type: «Typeegenskap: en endring her gjelder for hvert element av denne typen.»
- Mengdesett (lengder, arealer, volumer, antall, vekter) er skrivebeskyttet.
- Lister og oppramsede verdier vises, skrivebeskyttet.
- Ja/nei-verdier vises som **Ja** eller **Nei**.
- Tall avrundes til fire desimaler i visningen. Lengder (en lengdeegenskap eller en mengdes lengde) vises i {{ui:Enheter}} valgt på verktøylinjen, med enheten ved siden av. Du kan skrive en ny i den enheten eller med en annen enhetsbetegnelse (2.4 m, 8'-0"): BimCraft skriver filens egen tallverdi tilbake. Andre tall vises slik filen har dem.
- En tom verdi vises som *tom*. En redigert verdi er fet med en blå strek ved siden av.

## Kopier en verdi

Hver verdi i {{ui:Egenskaper}} har en liten kopiknapp ved siden av. Klikk den for å legge verdien på utklippstavlen akkurat slik den vises, for eksempel en GlobalId, et serienummer eller en verdi i et egenskapssett. Kopiering starter aldri en redigering.

Øverst kopierer {{ui:Kopier alt}} hver verdi for elementet som tekst, sett for sett. {{ui:Kopier som CSV}} kopierer dem som rader med gruppe, egenskap og verdi, klare til å lime inn i et regneark. Tomme verdier beholdes, slik at hvert felt får en rad. Dette fungerer likt for et element i en annen åpen modell. Når flere modeller er åpne, starter CSV-filen med en Modell-kolonne som angir filnavnet.

## Filpanelet (IFC)

| Felt | Betydning |
|---|---|
| Fil, Størrelse | Filen du åpnet |
| Schema | IFC-versjonen, for eksempel IFC2X3 eller IFC4 |
| Project | Prosjektets navn og lange navn |
| Phase | Prosjektfasen, hvis eksportøren skrev en |
| Exported from | Eksportprogrammet, fra filhodet |
| Author | Forfatteren i filhodet |
| Exported | Dato og klokkeslett i filhodet |
| Elements | Hvor mange elementer med en form som ble tegnet |
| Triangles | Hvor mange trekanter formene deres består av; et mål på hvor tung modellen er |

## Filpanelet (prosjekt- og familiefiler)

| Felt | Betydning |
|---|---|
| Kind | Prosjekt, Prosjektmal, Familie eller Familiemal |
| Saved in | Utgaven som sist lagret filen |
| Build | Den nøyaktige byggversjonen av den utgaven |
| Read | Hvor mye av filen BimCraft leste, av størrelsen |

## Tegningspanelet (DWG og DXF)

| Felt | Betydning |
|---|---|
| Format | Utgaven tegningen ble lagret som, med formatkoden, for eksempel AC1032 |
| Units | Tegningens innsettingsenheter, når de er satt |
| Entities | Hvor mange objekter som ble lest |
| Layers | Hvor mange layere |
| Sheets | Hvor mange ark (layouter), eller Ingen |
| Linked drawings | Hvor mange av de koblede tegningene som ble funnet og lastet |
| Equipment | Hvor mange merkede utstyrselementer som er på ark |

## Mappepanelet

| Felt | Betydning |
|---|---|
| Folder, Files, Size | Mappen du åpnet, hvor mange filer den inneholder og deres samlede størrelse |
| Models | Prosjekt- og familiefiler, hver med sine sikkerhetskopier telt én gang |
| CAD drawings, IFC models | Hvor mange av hver |
| Problems | Hvor mange modellkopier som er ufullstendige eller ikke kan leses, eller Ingen |
