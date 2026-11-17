---
title: Dimensjoner rør og kanaler, kontroller kabelfylling og belysning
summary: Kontroller dimensjonene på forsyningsrør og kanaler med trykkfall, før kabler gjennom kabelbaner og kabelrør og se fyllingen, og beregn belysningsstyrken i rom fra IES- eller EULUMDAT-filer. Standardverdier er merket; skriv inn verdiene fra gjeldende norm.
keywords: dimensjonering, rørdimensjonering, kanaldimensjonering, trykkfall, sanitærenheter, behov, hunter, hazen-williams, hastighet, friksjon, lik friksjon, viftetrykk, spjeld, kritisk bane, kabelbane, kabelrør, fylling, kabelliste, ies, ldt, eulumdat, fotometri, belysningsstyrke, lux, jevnhet, belysningsberegning, effekttetthet, mep, beregninger, problemer
from: 9cb90815
---

## Hva du skal gjøre

Tegn rør, kanaler, kabelbaner og kabelrør som vanlig, og åpne **Beregninger**-panelet. Hver fane leser modellen, viser en tabell og lister det som er feil som Problemer i ⚠-panelet. Når en dimensjon ville rette et problem, endrer **Bruk dimensjoner** strekningene i ett angre-steg.

Dette er tegnehjelpemidler. Hver standardverdi er merket på skjermen, og ingen av dem er en normtabell: skriv inn tallene fra normen du prosjekterer etter, og la resultatet bli kontrollert av ingeniøren som står ansvarlig for det.

## Rør

1. Velg **system**-nøkkelen (kaldtvann er `cw`, varmtvann `hw`).
2. Angi høyeste hastighet og, hvis du vil ha trykket kontrollert, trykket ved kilden og minste trykk en sanitærenhet trenger.
3. Klikk {{ui:Kontroller}}.

Hvert rør bærer behovet fra sanitærenhetene under det. Behovet kommer fra en kurve av enheter mot strømning, slik Hunter beskrev det. **Den innebygde kurven er et eksempel, ikke en normtabell**; Problemene sier det helt til du skriver inn din egen. Friksjon er Hazen–Williams, fittings er tapskoeffisienter, og en stigning koster 9.8 kPa per meter. Enhetene til en sanitærenhet kommer fra typen, eller fra tallet du angir med assistentverktøyet `loads_set`.

## Kanaler

Angi systemet, friksjonsraten (lik friksjon) eller en hastighet, og eventuelle tap for varme- eller kjølebatteri, filter eller lyddemper. Terminaler henter luftmengden sin fra `loads_set` på diffusoren. Tabellen viser hastighet og friksjon per del, **viftetrykket** ved den kritiske banen, og trykket hver av de andre terminalenes spjeld må ta opp. Tap i fittings bruker avrundede standardkoeffisienter, ikke en fittingsdatabase.

## Kabelbaner og kabelrør

Tegn dem med kanalverktøyet: systemene **Kabelbane** og **Kabelrør** lagres som kabelbærere, så andre programmer leser dem som baner og rør. I fanen Kabler limer du inn kabellisten (merke, utvendig diameter i mm, antall, fra, til). `fra` og `til` er merket til et utstyr, eller et punkt `x,y,z` i millimeter. Kabler følger den korteste sammenhengende ruten gjennom banene og rørene; hver strekning viser sin fylling mot grensene du skriver inn, og listen lagres som CSV med en lengde som inkluderer en slakkprosent og endene.

## Belysning

Gi hver armatur sin IES- (LM-63) eller EULUMDAT-fil med assistentverktøyet `photometry_set`. Skriv inn målene, avstanden i rutenettet og arbeidsplanhøyden. Resultatet er bare **direkte** belysningsstyrke: ingen gjensidig refleksjon og ingen skygger, så det er en nedre grense i et rom.

## Brannsprinkler

Tilleggene for **Brannsprinkler** har sin egen fane; se hjelpen for dem.
