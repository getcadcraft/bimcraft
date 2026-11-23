---
title: Ta med egne objekter og familiefiler inn i biblioteket
summary: Les familiefiler (.rfa) og IFC-, DWG-, DXF-, glTF- eller OBJ-filer i fanen Bibliotek, plasser dem som ethvert bibliotekselement, og behold dem i Mine objekter, en privat liste som bare du kan se.
keywords: rfa, familie, familier, familiebibliotek, egne objekter, mine objekter, private objekter, privat bibliotek, importer objekter, produsentinnhold, bim-objekter, ifc-objekt, gltf, obj, dwg-blokk, behold, bytt, migrer
from: 886261f8
---

## Hva du gjør

Ta med objekter du allerede har inn i BimCraft: et familiebibliotek fra Revit, en produsents IFC- eller DWG-nedlasting, et nett fra en annen modellerer. Du leser filen i fanen {{ui:Bibliotek}}, plasserer objektet i modellen din som et ekte IFC-element, og hvis du vil ha det igjen senere, beholder du det i {{ui:Mine objekter}}.

## Trinn

1. Åpne en IFC-modell, eller start en ny bygning.
2. Klikk fanen {{ui:Bibliotek}} ved siden av {{ui:Egenskaper}}.
3. Klikk {{ui:Filer…}}, deretter {{ui:Velg en fil…}}. Velg én fil eller flere samtidig: `.rfa`, `.ifc`, `.dwg`, `.dxf`, `.glb`, `.gltf`, `.obj` eller `.csv`. Eller klikk {{ui:Velg en mappe…}} for å lese en hel mappe og mappene inni den (opptil 200 filer om gangen).
4. Klikk et kort for å se hva som ble lest: forhåndsvisningen av planen, navnet, produsent og modell, størrelsene og merknadene.
5. Klikk {{ui:Plasser i plan}} eller {{ui:Plasser i modell}} for å plassere det.
6. For å bruke det igjen i andre prosjekter, klikk {{ui:Behold i mine objekter}}. Med flere filer lest, behold alle i én omgang med {{ui:Behold alle i mine objekter}}.
7. Senere klikker du {{ui:Mine objekter}} i fanen Bibliotek for å finne dem. De plasseres, byttes og oppdateres som ethvert bibliotekselement.

Filene leses i denne fanen. Ingenting lastes opp før du velger {{ui:Behold i mine objekter}}.

## Hva som leses fra hver filtype

| Fil | Dette får du |
|---|---|
| IFC | Hver elementtype som et objekt med sin ekte 3D-form, IFC-klasse og egenskapssett |
| glTF, GLB, OBJ | Ett objekt med sin ekte 3D-form som et nett. Sett enheter og hvilken vei som er opp først. |
| DWG, DXF | Hver blokk som et objekt med sin plantegning og attributter |
| Familiefil (`.rfa`) | Familiens navn, kategori, produsent, modell, parametere og dens typer. **Ikke dens 3D-form:** en boks med familiens Bredde, Dybde og Høyde står inn i stedet. |
| CSV | Ett objekt per rad: navn, størrelser og data, tegnet som en boks |

## Familiefiler og deres 3D-form

Den 3D-formen i en `.rfa`-fil er lagret i et udokumentert format, så BimCraft leser familiens data og gjetter ikke på geometrien. Kortet sier det: «Geometrien ble ikke lest fra denne familien; en boks står inn.»

For å ta med en familie med sin ekte form, eksporter den fra programmet som laget den (Revit):

1. Åpne familien, eller et prosjekt der familien er plassert.
2. Velg **File > Export > IFC**. Se [eksportinnstillingene som åpner best her](topic:rvt-to-ifc).
3. I BimCraft leser du `.ifc`-filen med {{ui:Filer…}}. Hver familietype kommer som sitt eget objekt, med sin form og sine egenskapssett.

Mange produsenter tilbyr en IFC- eller DWG-nedlasting ved siden av familiefilen. De leses direkte.

## Familietyper

En familie med flere typer kommer som ett element med et valg {{ui:Variant}}, én variant per type. Hver variant har verdiene som skiller seg mellom typene, og sin egen boks når typen har en Bredde og en Dybde. En familie med én type er et vanlig element fylt med den typens verdier.

Noen familier har typene sine i en typekatalog: en `.txt`-fil med samme navn ved siden av familiefilen. Velg begge samtidig, eller velg mappen, så blir katalogens rader til variantene.

## Familiens data med en ekte form

Hvis en mappe har en familiefil og en IFC-, glTF- eller OBJ-fil med samme navn (`Stol.rfa` og `Stol.ifc`), velg begge samtidig, eller velg mappen. BimCraft lager ett element: familiefilen gir navnet, produsenten, modellen, parametrene og typene, og den andre filen gir den ekte 3D-formen. Merknadene sier hvilken fil formen kom fra. Én form brukes for alle typer.

Når en familiefil har et bilde lagret i seg, viser elementets detaljer det bildet under plantegningen. Bildet vises bare der; det lagres ikke sammen med elementet.

## Mine objekter

{{ui:Mine objekter}} er din egen private liste i biblioteket. Bare du kan se hva som er i den: den er ikke i det offentlige biblioteket, ikke i søk, og den vises ikke for teamet ditt. Den følger kontoen din, så de samme objektene finnes på en annen datamaskin når du logger inn i biblioteket.

- Du må være innlogget i biblioteket for å beholde et objekt. Se [logg inn i biblioteket](topic:library-credits).
- Når du beholder et objekt, sendes det ene objektet til kontoen din. Til da blir det på datamaskinen din.
- {{ui:Fjern fra mine objekter}} tar et objekt ut av listen. Kopier som allerede er plassert i tegninger, blir.
- For å dele et objekt med alle, last det opp til det offentlige biblioteket i stedet, under en lisens du velger.

:::note
Mine objekter er under testing og er kanskje ikke åpent for kontoen din ennå. Hvis kilden mangler, eller det står «Mine objekter er ikke åpent for denne kontoen ennå», kan du fortsatt lese og plassere egne filer med {{ui:Filer…}}; de lagres inne i modellen din.
:::

## Vanlige feil

- **Å forvente familiens ekte form fra en `.rfa`.** Bare dens data leses. Eksporter IFC for formen.
- **To elementer der du forventet ett.** En familie og dens formfil slås bare sammen når navnene er like, bortsett fra endelsen, og de ligger i samme mappe.
- **Et nett kommer tusen ganger for stort eller ligger på siden.** Sett {{ui:Filens enheter}} og {{ui:Opp-akse for et nett}} under {{ui:Filer…}} før du velger filen.
- **«Ingen familiedata» på en fil.** Det er et prosjekt (`.rvt` lagret med en annen endelse) eller en familiemal, ikke en familie. Se [Les et prosjekt- eller familiefil](topic:read-rvt-file).
- **Å beholde innhold du ikke har lov til å lagre.** Noen betalte biblioteker tillater ikke kopier utenfor sin egen tjeneste. Sjekk vilkårene for innhold du ikke selv har laget.
