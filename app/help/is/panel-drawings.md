---
title: Einingateikningar í timbri eða léttstáli
summary: Rammaðu veggi, gólf og þök líkansins inn sem einingar í timbri eða léttstáli, sjáðu hvern stafa, plötu, yfirbita, gólfbita og sperru í réttum mælikvarða, og vistaðu skurðarlistann sem CSV og verkstæðisteikningarnar sem PDF.
keywords: eining, grind, verkstæðisteikning, skurðarlisti, léttstál, stálstafur, LGS, timbur, gólfbiti, sperra, yfirbiti, lager, PDF
from: c09f916e
---

## Opna einingarnar

Veldu {{ui:Einingateikningar}} í valmyndinni {{ui:Smíð}} (eða skrifaðu {{cmd:PANELS}}). Listinn geymir hvern teiknaðan vegg, hverja hæð og hvert þak líkansins, hvert með hakinu. Veggir koma með hurðum sínum og gluggum sem göt. Gólf er rammað sem rétthyrningurinn utan um útlínu sína, með gólfbitunum sem liggja styttri leiðina. Þak er rammað sem gafl yfir útlínu veggja sinna, með halla þaksins; listinn segir frá því, því valþak eða flókið þak er ekki gafl.

## Efni, stærð og bil

Veldu {{ui:Efni}}: **Timbur** eða **Léttstál**. Stálbitar eru C-stafir nefndir eftir dýpt og þykkt (til dæmis C92-1.2), með braut fyrir plöturnar. {{ui:Stærð burðarhluta}} velur eina stærð fyrir hverja merkta einingu, eða láttu hana vera á Sjálfgefið til að taka sjálfgefnar stærðir hverrar tegundar eininga. {{ui:Bil}} er fjarlægðin milli stafa, gólfbita eða sperra. Þetta eru upphafsgildi fyrir þig til að stilla. Þau eru ekki staðlaathugun: hvort stafur með því bili beri þann vegg, og yfirbiti það spann, er verk fyrir töflur reglugerðarinnar (viðbótin Byggingarreglugerð hefur IRC-töflurnar) og verkfræðinginn þinn.

## Það sem þú færð

Fyrsta merkta eining er teiknuð í réttum mælikvarða í glugganum, með málunum. {{ui:Skurðarlisti (CSV)}} vistar alla hluti hverrar einingar eftir merki, stærð og lengd, og lagerlengdirnar sem þarf að kaupa fyrir þá. {{ui:Verkstæðisteikningar (PDF)}} vistar eina A3-síðu fyrir hverja einingu, með öllum hlutum merktum og skurðarlistanum þeirra. {{ui:Teikning (SVG)}} vistar fyrstu eininguna sem teikningu. Allt sem rammakóðinn finnur og ekki er hægt að ramma (gat of nálægt enda veggs, yfirbiti sem passar ekki undir plötunum, hlutur lengri en lengsta lager) er einnig skráð undir **Vandamál** sem og í glugganum.

## Það sem það gerir ekki

Einingarnar eru teikningar gerðar úr líkaninu þegar þú biður um þær: ekkert er skrifað inn í líkanið, svo þær passa alltaf við það. Til að setja grindina inn í líkanið sem burðarhluta, notaðu {{ui:Grind}} fyrir timburveggi, gólf og þök.
