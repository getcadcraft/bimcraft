---
title: Teiknaðu í fullri stærð, merktu eftir mælikvarða
summary: Byggingin er alltaf teiknuð í fullri stærð. Texti, málsetningar, merkingar, heiti rýma, netkúlur og tákn eru stærðarsett á blaði, í millimetrum eins og þau eru prentuð, og halda þeirri stærð þegar mælikvarði teikningar breytist úr 1:100 í 1:50.
keywords: mælikvarði athugasemda, merkingar eftir mælikvarða, stærð texta, textahæð, blaðhæð, stærð málsetningatexta, stærð merkingar, heiti rýmis, netkúla, stærð tákns, mælikvarði teikningar, 1:50, 1:100, skrifstofustaðall, letur, teikna í 1:1, full stærð, texti á blaði
from: 94118788
---

## Hvað þú gerir

Stilltu hversu há letur teikninga þinna eru á blaði, einu sinni fyrir bygginguna. Þú skalar aldrei líkanið og breytir aldrei texta eftir mælikvarða: BimCraft reiknar stærðina út frá blaðhæðinni og mælikvarða teikningarinnar.

## Hvernig þetta virkar

- Líkanið er í fullri stærð. Veggur sem er 10 m langur er 10 000 mm langur í öllum mælikvörðum.
- Athugasemd hefur **blaðhæð**: hæð hástafs á prentaða blaðinu, í millimetrum.
- Í mælikvarðanum 1:100 er 2.5 mm texti 250 mm hár í líkaninu; í 1:50 er hann 125 mm. Á blaði er hann 2.5 mm í bæði skiptin.
- Tákn grunnmynda (rafmagn, pípulagnir) eru teiknuð í millimetrum á blaði og fylgja sömu reglu.

## Skref

1. Opnaðu verkefnavafrann. Undir {{ui:Blöð}} smelltu á {{ui:Stærðir athugasemda…}}.
2. Skrifaðu hæð í millimetrum fyrir þá flokka sem þú vilt stilla: {{ui:Athugasemdir og merkingar}}, {{ui:Texti málsetninga}}, {{ui:Merkingar og heiti hæða}}, {{ui:Heiti rýma}}, {{ui:Stafir netkúlna}}, {{ui:Heiti sýna á blöðum}} og {{ui:Texti lista}}. Tómur reitur heldur stærð BimCraft, sem er sýnd með gráum lit.
3. Smelltu á {{ui:Vista}}. Það er eitt skref sem hægt er að afturkalla.

Hvert blað, teikningasettið, PDF-grunnmyndin og útlitin og sniðin nota stærðirnar frá þeim tíma. Bilið milli málsetningarlínu og texta hennar, stærð netkúlu og hæð raðar listans vaxa með textanum.

## Grunnmynd með eigin mælikvarða

Gefðu grunnmynd mælikvarða í sýnasviði hennar ({{ui:Mælikvarði}}; sjá [Sýnir og blöð](topic:views-and-sheets)). Þá:

- á skjánum eru heiti rýma, merkingar, málsetningatexti og netkúlur teiknuð í prentaðri stærð miðað við líkanið, þannig að það sem þú sérð er það sem blaðið sýnir;
- tákn grunnmyndarinnar og merkingar þeirra eru stærðarsett fyrir þennan mælikvarða. Breyttu mælikvarðanum úr 1:100 í 1:50 og þau verða helmingi stærri í líkaninu og jafnstór á blaði.

Grunnmynd án eigin mælikvarða heldur sínum föstu skjátextum, og tákn hennar eru stærðarsett fyrir 1:50 (1/4" = 1'-0" í fetum og tommum), eins og áður.

## Stærðir skrifstofunnar þinnar

Með viðbótinni Default Policies virka, stilltu hæðir skrifstofunnar í Stillingar › Global › Default Policies › {{ui:Stærðir athugasemda á blaði}}. Ný bygging tekur þær þegar þú smellir á Búa til. Í byggingu sem þegar er hafin hefur glugginn {{ui:Nota stærðir skrifstofunnar minnar}}. Sjá [Default Policies](topic:default-policies).

## Stærðir reglugerðarsafns

Reglugerðarsafn getur gefið textahæðir sem staðsetning þess krefst (viðbótin Building regulations, teiknivenjur). Hakaðu við safnið í Stillingar › Building regulations, smelltu síðan í glugganum á {{ui:Nota stærðir reglugerðarsafns}}: reitirnir fyllast, þú yfirfarir þá og vistar. Stærð sem safn gefur í punktum er leturstærð og er umreiknuð í hástafahæð, svo athugaðu hana. Ekkert er stillt fyrr en þú vistar.

## Hvað þú ættir að sjá

- Sama textahæð í millimetrum á blaði í 1:100 og á blaði í 1:50, en grunnmyndin sjálf er tvöfalt stærri í 1:50.
- Stærðirnar fylgja byggingunni: þær eru vistaðar í IFC-skránni hennar.

## Gott að vita

- Eigin stærðir BimCraft eru þær sem blöð þess hafa alltaf notað (um 1,5 mm hástafir fyrir málsetningatexta). Þær eru ekki teiknistaðall: stilltu stærðir skrifstofunnar þinnar.
- Hæð verður að vera frá 0,5 til 50 mm.
- Letur á titilreit og lyklaskýringar eru ekki hluti af þessu: þau halda sínum eigin stærðum.
