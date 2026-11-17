---
title: Link andre modeller til koordinering
summary: Vis en anden IFC-model ved siden af din ved reference (aldrig sammenflettet), placér den efter fælles koordinater, kortkoordinater eller to punkter, fastgør til den, mens du tegner, og genindlæs den, når dens fil ændres.
keywords: link, tilknyttet model, reference, xref, koordinering, føderation, konstruktion, MEP, konsulent, fælles koordinater, opmåling, kortkoordinater, genindlæs, fjern fra hukommelsen, dokumentreference, IfcDocumentReference
from: 3e0f1eab
---

## Hvad du skal gøre

Tegn mod en konsulents model (konstruktionen, installationerne, den eksisterende bygning) uden at kopiere noget ind i din egen fil.

En **tilknyttet model** vises i 3D-visningen og skæres på dine planer, men den ændres aldrig og gemmes aldrig i din model. Din model gemmer kun linket: filens navn og hvor den placeres.

## Tilknyt en model

1. I venstre panels sektion {{ui:Tilknyttede modeller}} klik på {{ui:Tilknyt en model…}} og vælg IFC-filen. Den vises med det samme, og dens række siger **Vist**.
2. Vælg hvor den placeres under {{ui:Placering}}:
   - **Fælles koordinater** (til at begynde med): dens koordinater er dine, som når begge modeller er opmålt fra samme udgangspunkt.
   - **Kortkoordinater**: begge filers kortkoordinater flugter dem (begge skal have en kortkonvertering; BimCraft siger det, når den ene ikke har en).
   - **Efter to punkter…**: klik på et punkt på den tilknyttede model, derefter hvor det skal ligge i din; så et andet par. Linket flyttes og drejes (om den lodrette akse), så det passer.
3. Hver tilknytning og hver ændring af placering er ét trin: {{key:Mod+Z}} fortryder den.

## Arbejd med den

- Planerne viser den tilknyttede model skåret ved etagens snithøjde som tynde linjer, og værktøjet {{ui:Væg}} og de andre tegneværktøjer fastgør til dens hjørner og kanter.
- Vælg dens elementer i 3D-visningen for at læse deres egenskaber. En tilknyttet model er aldrig den, du redigerer, så dens radioknap i {{ui:Modeller}} er fra.
- **Er filen ændret?** Når browseren kan holde øje med filen (en fil åbnet via dens filvælger, eller i Studio), genindlæser BimCraft linket af sig selv nogle sekunder efter, at filen er gemt igen, og siger det. Ellers klik på {{ui:Genindlæs}}.
- {{ui:Fjern fra hukommelsen}} skjuler den og frigør hukommelsen; linket bliver i din model. {{ui:Indlæs…}} viser den igen (du vælger filen: en browser kan ikke åbne en fil på egen hånd ud fra navnet).
- × fjerner linket fra din model.

## Hvad du skal se

- I din IFC-fil: en IfcDocumentReference for hvert link (filens navn), knyttet til projektet, og hvor den placeres i projektets egenskabssæt CadCraft_Links. Når du åbner din model igen, står dens links som **Ikke indlæst**, indtil du indlæser dem.

:::note
Kollisionskontroller, Sammenlign og Find kan bruge et indlæst link som enhver anden åben model: se [Se flere IFC-modeller samlet](topic:several-models).
:::
