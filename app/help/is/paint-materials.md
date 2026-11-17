---
title: Mála efni á veggi, gólf og þök
summary: Gefðu þáttum efni eins og múrsteini, klæðningu, þakspóna, við, stein eða flísar, á allan þáttinn eða á aðra hliðina; það er vistað í IFC og sýnt í myndgerðum myndum.
keywords: mála, efni, áferð, áferðir, múrsteinn, klæðning, þakspónn, þakefni, viður, steinn, flís, steinsteypa, steypuhúð, gras, möl, gler, málmur, veggjahlið, innan, utan, gólfáferð, rými, yfirborðsstíll
from: fbfed676
---

{{ui:Mála}} á tækjastikunni opnar efnissafnið yfir 3D-sýninni: múrstein og blokk, klæðningu, þakefni, við, stein, flísar, steinsteypu, steypuhúð, jörð, gler og málm.

## Mála þætti

1. Smelltu á {{ui:Mála}}.
2. Smelltu á efni.
3. Smelltu á þætti í 3D-sýninni. Hver smellur málar þann þátt sem þú smellir á.

Til að mála marga í einu, veldu þá fyrst (smelltu, {{key:Ctrl}}+smellur, eða [leit](topic:find)), smelltu síðan á efnið: hver valinn þáttur fær það í einu skrefi.

Þátturinn sýnir lit efnisins í 3D-sýninni strax. Áferð hans sést á [myndgerðri mynd](topic:render). {{key:Esc}} eða {{ui:Loka}} lýkur málun.

## Mála eina hlið

Veldu {{ui:Aðeins smellt hlið}}, smelltu síðan á hliðina sem þú vilt: útvegg í klæðningu og innvegginn í annarri áferð, eða efri hlið gólfs í viði með neðri hliðinni óbreyttri. Restin af þættinum heldur efni sínu.

Hlið er fundin út frá eigin stefnum þáttarins, þannig að hún helst sama hliðin þegar þú færir eða snýrð þættinum.

Til að mála gólf herbergi fyrir herbergi, gefðu hverju herbergi sitt eigið gólf ({{ui:Teikna}} › {{ui:Gólf}} › **Þetta rými**, sjá [Rými, gólf, loft og þök](topic:floors-and-roofs)), og málaðu síðan efri hlið hvers gólfs.

## Taka efni af

Smelltu á röndótta litaprófið ({{ui:Ekkert efni}}), smelltu síðan á þáttinn. Hvert efni á honum, þar með taldar hliðar, fer.

## Í skránni

Málun breytir IFC (eitt skref hver, {{key:Ctrl+Z}} afturkallar því) og helst venjulegt IFC:

- hver málaður þáttur fær eiginleikasettið `CadCraft_Render` sem nefnir efni hans, og einn eiginleika fyrir hverja málaða hlið;
- líkami hans fær yfirborðsstíl með lit efnisins, svo önnur BIM-forrit sýni litinn. Í IFC4 nefnir stíllinn líka áferðina.

Þegar BimCraft breytir lögun veggs sem þú málaðir (þú færir enda hans, til dæmis), heldur veggurinn efni sínu og lit sínum, í BimCraft, í myndum og í öðrum forritum.

:::note
Áferðirnar eru teiknaðar af BimCraft sjálfu: þær virka án nettengingar og má nota þær frjálst til hvers sem er (CC0). Eigin myndaáferðir þínar eru ekki komnar enn.
:::

## Áferðir í 3D-sýninni

Málaður múrsteinsveggur sýnir múrsteinana sína, og viðargólf sýnir borðin sín, í raunstærð, um leið og málningin er komin á. Taktu hakið úr **Sýna áferðirnar í 3D sýninni** í Málunarspjaldinu til að sjá flata liti í staðinn (mjög stórt líkan slekkur á þeim sjálft og segir frá því). Litur eftir eiginleika sýnir alltaf sína eigin liti. Áferðirnar eru teiknaðar af forritinu, svo ekkert er sótt, og myndgerðirnar og glTF-skráin bera þær hvort sem er.
