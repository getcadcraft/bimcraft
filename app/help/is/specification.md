---
title: Skrifaðu verklýsinguna út frá líkaninu
summary: Ein verklýsingargrein fyrir hverja vegg-, hurða-, glugga-, gólf- og frágangsgerð sem er í notkun, með staðreyndum lesnum úr líkaninu og þínum eigin texta, gerð að PDF- eða Word-skjali.
keywords: verklýsing, vinnuteikningar, áfangi 5, verksamningsgögn, kafli, veggjagerð, hurðargerð, gluggagerð, frágangur, flokkun, uniclass, omniclass, masterformat, skjal, pdf, word, docx, listar
from: a6acc6d4
---

## Hvað þú gerir

Fáðu verklýsingu sem fylgir líkaninu: kafla fyrir hverja gerð sem er raunverulega í byggingunni, hver með uppbyggingu sinni og magntölum lesnum úr líkaninu, og textann sem þú skrifar fyrir hann.

## Skref

1. Kveiktu á {{ui:Teikna}}, opnaðu **{{ui:Listar}}** í vinstra spjaldinu og smelltu á **Verklýsing**.
2. Glugginn sýnir einn kafla fyrir hverja veggja-, hurða-, glugga-, gólf- og rýmisfrágangsgerð í notkun. Undir hverri fyrirsögn eru **staðreyndir** hennar, lesnar úr líkaninu: þykkt, lögin eitt af öðru, þróunarstig, stærðir, hversu margar og hversu mikið. Kafli þar sem frumhlutirnir bera flokkunarkóða sýnir kóðann í fyrirsögninni sinni.
3. Skrifaðu verklýsingartextann þinn í reitinn undir kafla. **Velja frumhluti hans** sýnir hvað kaflinn fjallar um.
4. Smelltu á **Vista**. Það er eitt skref í Afturkalla, og textinn er geymdur í byggingarskránni.
5. Opnaðu **Skjöl úr líkaninu**, veldu sniðmátið **Verklýsing** og smelltu á **Forskoðun**, og vistaðu síðan sem PDF, Word eða Markdown. Sjá [Skjöl úr líkaninu](topic:documents-from-the-model).

## Vinnuteikningalistarnir sem skjal

Sniðmátið **Vinnuteikningalistar** prentar hurða-, glugga- og frágangslistana beint úr líkaninu, í þinni skrifstofuuppsetningu. Í þínu eigin sniðmáti skrifarðu `{{schedule doors}}`, `{{schedule windows}}`, `{{schedule roomfinishes}}`, `{{schedule finishtotals}}`, eða heiti vistaðrar uppsetningar, til dæmis `{{schedule Door schedule by floor}}`. `{{specification}}` prentar verklýsinguna.

## Gott að vita

- Staðreyndirnar eru úr líkaninu. Þær breytast þegar líkanið breytist; textinn þinn breytist ekki.
- BimCraft skrifar enga grein úr neinum staðli og engan texta framleiðanda. Kafli án texta prentast sem „Engur verklýsingartexti skrifaður enn.“
- Texti sem var skrifaður fyrir gerð sem er ekki lengur í líkaninu er geymdur og talinn upp undir „Texti fyrir gerðir sem eru ekki lengur í líkaninu“.
- Til að breyta almennri gerð í sérstaka uppbyggingu sjá [Veggjaverkfæri](topic:wall-tools) (Skipta um gerð).
