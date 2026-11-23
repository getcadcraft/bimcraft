---
title: Medbring dine egne objekter og familiefiler til biblioteket
summary: Læs familiefiler (.rfa) og IFC-, DWG-, DXF-, glTF- eller OBJ-filer i fanen Bibliotek, placér dem som ethvert bibliotekselement, og behold dem i Mine objekter, en privat liste, som kun du kan se.
keywords: rfa, familie, familier, familiebibliotek, egne objekter, mine objekter, private objekter, privat bibliotek, importér objekter, producentindhold, bim-objekter, ifc-objekt, gltf, obj, dwg-blok, gem, skift, migrér
from: 886261f8
---

## Hvad du skal gøre

Medbring objekter, du allerede har, ind i BimCraft: et familiebibliotek fra Revit, en producents IFC- eller DWG-download eller et net fra en anden modelleringsapp. Du læser filen i fanen {{ui:Bibliotek}}, placerer objektet i din model som et rigtigt IFC-element, og hvis du vil have det igen senere, gemmer du det i {{ui:Mine objekter}}.

## Trin

1. Åbn en IFC-model, eller start en ny bygning.
2. Klik på fanen {{ui:Bibliotek}} ved siden af {{ui:Egenskaber}}.
3. Klik på {{ui:Filer…}}, og derefter på {{ui:Vælg en fil…}}. Vælg én fil eller flere på én gang: `.rfa`, `.ifc`, `.dwg`, `.dxf`, `.glb`, `.gltf`, `.obj` eller `.csv`. Eller klik på {{ui:Vælg en mappe…}} for at læse en hel mappe og de mapper, der ligger i den (op til 200 filer på én gang).
4. Klik på et kort for at se, hvad der blev læst: planforhåndsvisningen, navnet, producent og model, størrelserne og noterne.
5. Klik på {{ui:Placér i plan}} eller {{ui:Placér i model}} for at placere det.
6. Vil du bruge det igen i andre projekter, klik på {{ui:Gem i mine objekter}}. Med flere filer læst gemmer {{ui:Gem alle i mine objekter}} dem på én gang.
7. Senere klikker du på {{ui:Mine objekter}} i fanen Bibliotek for at finde dem. De placeres, udskiftes og opdateres ligesom ethvert bibliotekselement.

Filerne læses i denne fane. Intet uploades, før du vælger {{ui:Gem i mine objekter}}.

## Hvad der læses fra hver filtype

| Fil | Hvad du får |
|---|---|
| IFC | Hver elementtype som et objekt med sin rigtige 3D-form, IFC-klasse og egenskabssæt |
| glTF, GLB, OBJ | Ét objekt med sin rigtige 3D-form som et net. Angiv {{ui:Filens enheder}} og {{ui:Opadgående akse for et net}} først. |
| DWG, DXF | Hver blok som et objekt med sin plantegning og attributter |
| Familiefil (`.rfa`) | Familiens navn, kategori, producent, model, parametre og dens typer. **Ikke dens 3D-form:** en boks med familiens Width, Depth og Height står i stedet. |
| CSV | Ét objekt pr. række: navn, størrelser og data, tegnet som en boks |

## Familiefiler og deres 3D-form

Den 3D-form inde i en `.rfa`-fil er gemt i et udokumenteret format. BimCraft læser derfor familiens data og gætter ikke på dens geometri. Kortet siger det: »Geometri ikke læst fra denne familie; en boks står i stedet.«

For at få en familie med dens rigtige form skal du eksportere den fra det program, der lavede den (Revit):

1. Åbn familien, eller et projekt med familien placeret i sig.
2. Vælg **Fil > Eksportér > IFC**. Se [eksportindstillingerne, der åbner bedst her](topic:rvt-to-ifc).
3. I BimCraft læser du `.ifc`-filen med {{ui:Filer…}}. Hver familietype kommer som sit eget objekt, med sin form og egenskabssæt.

Mange producenter tilbyder en IFC- eller DWG-download ved siden af familiefilen. Disse læses direkte.

## Familietyper

En familie med flere typer kommer som ét element med et valg {{ui:Variant}}, én variant pr. type. Hver variant har de værdier, der er forskellige mellem typerne, og sin egen boks, når typen har en Width og en Depth. En familie med én type er et almindeligt element, udfyldt med den types værdier.

Nogle familier har deres typer i en typekatalog: en `.txt`-fil med samme navn ved siden af familiefilen. Vælg begge sammen, eller vælg mappen, så bliver katalogets rækker til varianterne.

## En families data på en rigtig form

Hvis en mappe indeholder en familiefil og en IFC-, glTF- eller OBJ-fil med samme navn (`Chair.rfa` og `Chair.ifc`), vælg begge sammen, eller vælg mappen. BimCraft laver ét element. Familiefilen giver navn, producent, model, parametre og typer, og den anden fil giver den rigtige 3D-form. Noterne siger, hvilken fil formen kom fra. Én form bruges til alle typer.

Hvis en familiefil har et billede gemt i sig, viser elementets detaljer billedet under plantegningen. Billedet vises kun der. Det gemmes ikke med elementet.

## Mine objekter

{{ui:Mine objekter}} er din egen private liste i biblioteket. Kun du kan se, hvad der er i den: den er ikke i det offentlige bibliotek, ikke i søgning og ikke vist for dit team. Den følger din konto, så de samme objekter er der på en anden computer, når du logger ind i biblioteket.

- Du skal være logget ind i biblioteket for at gemme et objekt. Se [log ind i biblioteket](topic:library-credits).
- Når du gemmer et objekt, sendes netop det objekt til din konto. Indtil da bliver det på din computer.
- {{ui:Fjern fra mine objekter}} tager et objekt ud af listen. Kopier, der allerede er placeret i tegninger, bliver.
- Vil du dele et objekt med alle, så upload det til det offentlige bibliotek i stedet, under en licens du vælger.

:::note
Mine objekter testes stadig og er måske ikke åbnet for din konto endnu. Hvis kilden mangler, eller der står »Mine objekter er ikke åbnet for denne konto endnu«, kan du stadig læse og placere dine egne filer med {{ui:Filer…}}. De gemmes inde i din model.
:::

## Almindelige fejl

- **Forventer familiens rigtige form fra en `.rfa`.** Kun dens data læses. Eksportér IFC for formen.
- **To elementer, hvor du forventede ét.** En familie og dens formfil sammenføjes kun, når deres navne er ens bortset fra endelsen, og de ligger i samme mappe.
- **Et net kommer tusind gange for stort eller ligger på siden.** Angiv {{ui:Filens enheder}} og {{ui:Opadgående akse for et net}} under {{ui:Filer…}}, før du vælger filen.
- **»Ingen familiedata« på en fil.** Det er et projekt (`.rvt` gemt med en anden endelse) eller en familieskabelon, ikke en familie. Se [Læs en projekt- eller familiefil](topic:read-rvt-file).
- **Gemmer indhold, du ikke må opbevare.** Nogle betalte biblioteker tillader ikke kopier uden for deres egen tjeneste. Tjek vilkårene for indhold, du ikke selv har lavet.
