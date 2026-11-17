---
title: Sameina breytingar tveggja á einu líkani
summary: Láttu git, Fossil eða Mercurial sameina tvö breytt afrit af sama IFC-líkaninu hlut fyrir hlut, svo að tvær manneskjur geti teiknað á sömu byggingu og sameinað vinnuna.
keywords: sameina, git, fossil, mercurial, útgáfustýring, ágreiningur, þriggja vega, cadcraft merge, gitattributes, ifc, globalid, teymi, tvö afrit, greinar
from: 50733df8
---

Tvær manneskjur taka afrit af sömu byggingu, önnur teiknar austurálmuna og hin vesturálmuna, og síðar þurfa afritin að verða eitt. Ef þau snertu mismunandi hluti getur forrit gert það í stað manneskju.

## Hvernig þetta virkar

Sérhver veggur, hurð, kóti, rými og eiginleikasafn í IFC-skrá hefur GlobalId sem breytist aldrei. Sameiningin leitar að hlutum eftir þessu auðkenni, ekki eftir númerinu sem skráin gefur þeim (`#123`), því númerin breytast þegar forrit vista. Hlutarnir sem hanga á hlut og hafa ekkert auðkenni sitt eigið (staðsetningar, form, einingar) eru bornir saman eftir því sem þeir innihalda.

Bæði afrit verða að vera sama IFC-útgáfa (2x3, 4 eða 4.3). Sameiningin heldur skránni þinni eins og hún er, röðinni og númerunum, og bætir við því sem er nýtt, svo git-mismunur sameiningarinnar sýnir aðeins það sem sameiningin breytti.

## Uppsetning

Git þarf tvær línur einu sinni fyrir hverja geymslu:

```
# .gitattributes
*.ifc merge=cadcraft

# einu sinni, á hverri tölvu
git config merge.cadcraft.driver "node /path/to/tools/cli/merge.mjs %O %A %B"
```

Án git keyrir þú `cadcraft merge <base> <ours> <theirs>`. Fossil og Mercurial taka sömu þrjár skrárnar í eigin stillingu fyrir sameiningarverkfæri. Ekkert er sent upp; allt keyrir á tölvunni þinni.

## Reglurnar

- Eigind sem breytt er á annarri hliðinni eingöngu er tekin. Sama breyting beggja vegna er tekin einu sinni.
- Sama eigind breytt á tvo vegu (sami kóti endurnefndur á tvo vegu) er **ágreiningur**: þín hlið helst og skýrslan listar báðar. Opnaðu niðurstöðuna og lagaðu hana handvirkt.
- Listi yfir hluti (veggir kóta, eiginleikar eiginleikasafns) sameinast sem mengi: það sem hvor hlið bætti við er haldið og það sem hvor hlið fjarlægði er fjarlægt. Tvær manneskjur sem bæta hvor sínum veggjum við sama kóta lenda ekki í ágreiningi.
- Hlutur sem bætt er við öðrum megin er haldið, með formi sínu og eiginleikum. Fjarlægður öðrum megin og óbreyttur hinum megin: fjarlægður. Fjarlægður öðrum megin og breyttur hinum megin: fjarlægður og tilkynntur.
- Tímamerki og höfundur skráarinnar, og eigandasaga hvers hlutar, haldast þín.

Rúmfræði er sameinuð í heild: form veggs kemur frá annarri hliðinni, aldrei blandað punkt fyrir punkt. Þjappaðar IFC- og IFCX-skrár eru ekki sameinaðar. Eftir sameiningu skaltu opna niðurstöðuna í BimCraft og líta á Vandamálaspjaldið áður en þú vistar.
