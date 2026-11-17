---
title: Flokkunarkóðar (Uniclass, OmniClass, UniFormat)
summary: Gefðu hverjum hlut og tegund flokkunarkóða, veldu hvaða kerfi verkefnið notar, leitaðu í Uniclass-töflunum sem fylgja forritinu, hlaðið inn eigin leyfisbundnum töflum skrifstofunnar og sýndu kóðana í listum. Kóðarnir eru skrifaðir í IFC-skrána fyrir annan hugbúnað.
keywords: flokkun, flokka, kóði, uniclass, omniclass, uniformat, nbs, csi, ef, ss, pr, tafla, hlutakóði, tegundakóði, sjálfgefinn kóði, IfcClassification, IfcClassificationReference, cobie, listadálkur, csv, leyfi, license
from: 222b94cd
---

## Hvað þú gerir

Settu flokkunarkóða á veggi, gólf, þök, hurðir, glugga og allt annað í líkaninu, í allt að þremur kerfum hlið við hlið: Uniclass, OmniClass og UniFormat. Aðrar greinar og annar hugbúnaður treystir á kóðann, ekki heitið, þannig að kóðarnir eru vistaðir í IFC-skránni sem flokkunartilvísanir sem sérhvert BIM-forrit les.

## Gefa hlut kóða

1. Veldu hlut (eða nokkra) og opnaðu **Eiginleika**. Opnaðu hlutann {{ui:Flokkun}}.
2. Skrifaðu kóðann í reit kerfisins og ýttu á Enter. Þegar kóðalisti er hlaðinn skaltu skrifa hluta kóða eða nokkur orð („gluggatjaldaveggur“) og velja úr samsvörunum: titill kóðans er fylltur inn fyrir þig.
3. {{ui:Á við um}} segir hvert kóðinn fer: **Þennan hlut**, eða **Tegund hans (sérhver hlutur af tegundinni)**. Kóði á veggjartegund er lesinn af sérhverjum vegg af þeirri tegund, líka þeim sem þú teiknar síðar.
4. {{ui:Hreinsa}} tekur kóðann í burtu.

Undir hverjum kóða segir hlutinn hvaðan hann kemur: settur á þennan hlut, úr tegund hans, eða sjálfgefið verkefnisgildi fyrir flokk hans. Eigin kóði hlutar vinnur alltaf fram yfir kóða tegundarinnar, og tegundarinnar fram yfir sjálfgefið gildi. Þegar nokkrir hlutir eru valdir þýðir reitur sem segir „breytilegt“ að þeir deila ekki einum kóða; að skrifa einn gefur þeim öllum hann. Sérhver breyting er eitt afturköllunarskref.

Kóða er alltaf hægt að skrifa, hvort sem listi er hlaðinn eða ekki. Ef hann lítur ekki út eins og kóði þessa kerfis, eða er ekki í hlaðna listanum, segir vísbending það og kóðinn er geymdur eins og þú skrifaðir hann.

## Veldu kerfi verkefnisins

Opnaðu **Gögn** á líkanastikunni og veldu {{ui:Flokkun}} (eða {{ui:Flokkun verkefnis…}} í eiginleikahlutanum).

- Hakaðu við kerfin sem þetta verkefni notar. Eiginleikar sýna þá aðeins.
- **Uniclass**: EF (Hlutir/ virkni), Ss (Kerfi) og Pr (Vörur) töflurnar fylgja forritinu. Þær eru © NBS, leyfðar undir Creative Commons Attribution-NoDerivatives 4.0, og eru afhentar óbreyttar. Glugginn sýnir útgáfu hverrar töflu og daginn sem hún var lesin. Þær eru ekki þær nýjustu: útgefandinn gefur út nýjar á hverjum ársfjórðungi á eigin vefsíðu.
- **OmniClass** og **UniFormat**: enginn kóðalisti fylgir forritinu, því útgefandinn leyfir ekki að töflurnar séu afhentar án leyfis. Skrifaðu hvaða kóða sem er, eða hlaðið inn eigin leyfisbundinni töflu skrifstofunnar.
- {{ui:Hlaða inn töflu (CSV)…}} les töflu skrifstofunnar úr CSV-skrá með kóðadálki og titildálki (hausröð sem heitir Code, Number eða Identifier og Title, Name eða Description finnst sjálfkrafa; án hennar eru fyrstu tveir dálkarnir notaðir). Taflan er geymd í þessum vafra og er aldrei sett í verkefnaskrána. Aðeins kóðarnir sem þú úthlutar eru vistaðir í skránni. Þú getur hlaðið inn nýrri Uniclass-töflu á sama hátt.
- {{ui:Gefa hlutum sjálfgefinn kóða eftir flokki þeirra}} gefur sérhverjum vegg, gólfi, þaki, hurð, glugga, stiga, rampi, súlu, bita og húsgagni upphafskóða Uniclass úr EF-töflunni (Hlutir/ virkni) þegar hann hefur engan eigin. Hlutir sem þú teiknar síðar fá hann líka.
- {{ui:Sýna kóðana sem dálka í listunum}} bætir einum dálki fyrir hvert kerfi við Hurðir, Gluggar, Veggir eftir tegund og Herbergi listana og CSV-skrár þeirra. Röð með nokkrum hlutum sýnir „breytilegt“ þegar kóðar þeirra eru ólíkir.

## Gott að vita

- Sjálfgefnu kóðarnir eru eigið upphafsval CadCraft, ekki útgefandans, og hafa ekki verið yfirfarnir af fagmanni. Berðu þá saman við staðal verkefnisins.
- Í skránni er sjálfgefið gildi raunveruleg flokkun, merkt með tengslaheitinu „CadCraft default“, og það hverfur um leið og hluturinn eða tegund hans fær eigin kóða.
- Kóðar sem innflutt skrá hefur nú þegar eru lesnir og sýndir, með hvaða stafsetningu sem hitt forritið notaði fyrir heiti kerfisins. Kóðar annarra kerfa (skrifstofu eigin) eru skráðir og látnir vera.
- Kóðarnir eru lesnir aftur þegar skráin er opnuð aftur, hér eða í öðru forriti. Þeir eru líka fluttir með í IFC5 alfa (IFCX) útflutninginn þegar sá tilraunavalkostur er virkur, nema kóði sem settur er á þak.
- Ekki smíðað enn: tré til að fletta í töflu eftir stigum, kóðar á hæðum og herbergjum sem verkefnisgildi sjálfgefin, og að athuga kóða gegn útgáfunni sem nefnd er í skránni.
