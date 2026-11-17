---
title: Dimensionera rör och kanaler, kontrollera kabelfyllnad och belysning
summary: Kontrollera dimensioner på tilledningsrör och kanaler med tryckfall, dra kablar genom kabelbanor och kabelrör och se deras fyllnadsgrad, och beräkna belysningsstyrkan i rum från IES- eller EULUMDAT-filer. Standardvärden är märkta; skriv in värdena från den gällande normen.
keywords: dimensionering, rördimensionering, kanaldimensionering, tryckfall, apparatenheter, behov, hunter, hazen-williams, hastighet, friktion, lika friktion, fläkttryck, spjäll, kritisk väg, kabelbana, kabelrör, fyllnad, kabelförteckning, ies, ldt, eulumdat, fotometri, belysningsstyrka, lux, likformighet, belysningsberäkning, effekttäthet, mep, beräkningar, problem
from: 9cb90815
---

## Vad du gör

Rita rör, kanaler, kabelbanor och kabelrör som vanligt och öppna sedan panelen **Beräkningar**. Varje flik läser modellen, visar en tabell och listar det som är fel som Problem i ⚠-panelen. När en dimension skulle åtgärda ett Problem ändrar **Verkställ dimensioner** sträckorna i ett enda ångrasteg.

Det här är hjälpmedel för ritning. Varje standardvärde är märkt på skärmen, och ingen av dem är en normtabell: skriv in siffrorna från den norm du projekterar efter, och låt den ingenjör som ansvarar för det granska resultatet.

## Rör

1. Välj nyckeln för **system** (kallvatten är `cw`, varmvatten `hw`).
2. Ange högsta hastighet och, om du vill kontrollera trycket, trycket vid källan och lägsta tryck en armatur behöver.
3. Klicka på {{ui:Kontrollera}}.

Varje rör bär behovet från de apparatenheter som ligger nedströms det. Behovet kommer från en kurva av apparatenheter mot flöde, på det sätt som Hunter beskrev. **Den inbyggda kurvan är ett exempel, inte en normtabell**; Problemen säger det tills du skriver in din egen. Friktionen beräknas med Hazen–Williams, rördelar har förlustkoefficienter, och en stigning kostar 9.8 kPa per meter. En armaturs enheter kommer från dess typ, eller från det tal du ställer in med assistentverktyget `loads_set`.

## Kanaler

Ange systemet, friktionsvärdet (lika friktion) eller en hastighet, samt eventuell förlust i värmebatteri, filter eller ljuddämpare. Terminalerna får sitt luftflöde från `loads_set` på diffusorn. Tabellen visar hastighet och friktion per del, **fläkttrycket** vid den kritiska vägen och det tryck som varje annan terminals spjäll behöver ta upp. Förluster i rördelar använder avrundade standardkoefficienter, inte en databas över rördelar.

## Kabelbanor och kabelrör

Rita dem med kanalverktyget: systemen **Kabelbana** och **Kabelrör** sparas som kabelbärare, så att andra program läser dem som banor och rör. På fliken Kablar klistrar du in kabellistan (beteckning, ytterdiameter i mm, antal, från, till). `from` och `to` är beteckningen för en utrustning eller en punkt `x,y,z` i millimeter. Kablar följer den kortaste sammanhängande vägen genom banorna och rören; varje sträcka visar sin fyllnadsgrad mot de gränsvärden du skriver in, och förteckningen sparas som CSV med en längd som inkluderar en reservmån i procent samt ändarna.

## Belysning

Ge varje armatur dess IES- (LM-63) eller EULUMDAT-fil med assistentverktyget `photometry_set`. Skriv in målvärdena, rutnätets avstånd och arbetsplanets höjd. Resultatet är bara **direkt** belysningsstyrka: ingen inbördes reflektion och inga skuggor, så det är en nedre gräns i ett rum.

## Brandsprinklers

Tillägget **Brandsprinklers** har en egen flik; se dess hjälp.
