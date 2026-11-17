---
title: Dimensionér rør og kanaler, kontrollér kabelfyldning og belysning
summary: Kontrollér dimensioner på forsyningsrør og kanaler med trykfald, før kabler føres gennem kabelbakker og kabelrør, og se deres fyldning, og beregn belysningsstyrke i rum ud fra IES- eller EULUMDAT-filer. Standardværdier er mærket; skriv værdierne fra den gældende norm.
keywords: dimensionering, rørdimensionering, kanaldimensionering, trykfald, armaturenheder, behov, hunter, hazen-williams, hastighed, friktion, lige friktion, ventilatortryk, spjæld, kritisk sti, kabelbakke, kabelrør, fyldning, kabelliste, ies, ldt, eulumdat, fotometri, belysningsstyrke, lux, ensartethed, belysningsberegning, effekttæthed, mep, beregninger, problemer
from: 9cb90815
---

## Hvad du gør

Tegn rør, kanaler, kabelbakker og kabelrør som sædvanligt, og åbn derefter ruden **Beregninger**. Hver fane læser modellen, viser en tabel og lister det, der er galt, som Problemer i ⚠-panelet. Når en dimension ville rette et problem, ændrer **Anvend dimensioner** føringerne i ét fortrydelsestrin.

Dette er tegnehjælp. Hver standardværdi er mærket på skærmen, og ingen af dem er en normtabel: skriv tallene fra den standard, du projekterer efter, og lad resultatet gennemgås af den ingeniør, der står inde for det.

## Rør

1. Vælg **system**-nøglen (koldt vand er `cw`, varmt vand `hw`).
2. Angiv den højeste hastighed og, hvis du vil have trykket kontrolleret, trykket ved kilden og det mindste tryk, en armatur kræver.
3. Klik på {{ui:Kontrollér}}.

Hvert rør bærer behovet fra de armaturenheder, der sidder under det. Behovet kommer fra en kurve over armaturenheder mod flow, på den måde Hunter beskrev. **Den indbyggede kurve er et eksempel, ikke en normtabel**; Problemerne siger det, indtil du indtaster din egen. Friktionen er Hazen–Williams, fittings er tabskoefficienter, og en stigning koster 9.8 kPa pr. meter. En armaturs enheder kommer fra dens type eller fra det tal, du har angivet med assistentværktøjet `loads_set`.

## Kanaler

Angiv systemet, friktionsraten (lige friktion) eller en hastighed og eventuelle tab i varmeflade, filter eller lyddæmper. Terminaler henter deres luftmængde fra `loads_set` på diffusoren. Tabellen viser hastighed og friktion pr. stykke, **ventilatortrykket** ved den kritiske sti og det tryk, hver anden terminals spjæld skal optage. Tab i fittings bruger afrundede standardkoefficienter, ikke en fittings-database.

## Kabelbakker og kabelrør

Tegn dem med værktøjet Kanal: systemerne **Kabelbakke** og **Kabelrør** gemmes som kabelbærere, så andre programmer læser dem som bakker og rør. Indsæt kabellisten (mærke, udvendig diameter i mm, antal, fra, til) på fanen Kabler. `from` og `to` er mærket på et stykke udstyr eller et punkt `x,y,z` i millimeter. Kabler følger den korteste sammenhængende rute gennem bakkerne og rørene; hver føring viser sin fyldning mod de grænser, du skriver, og listen gemmes som CSV med en længde, der inkluderer en slækprocent og enderne.

## Belysning

Giv hver armatur dens IES (LM-63)-fil eller EULUMDAT-fil med assistentværktøjet `photometry_set`. Skriv målene, gitterafstanden og arbejdsfladehøjden. Resultatet er kun **direkte** belysningsstyrke: ingen gensidig refleksion og ingen skygger, så det er en nedre grænse i et rum.

## Brandsprinklere

Tilføjelsen **Brandsprinklere** har sin egen fane; se dens hjælp.
