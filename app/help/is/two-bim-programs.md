---
title: Vinna á milli tveggja BIM-forrita
summary: Sendu líkan frá einu BIM-forriti til annars í gegnum IFC með BimCraft í miðjunni, haltu GlobalId-auðkennum þess, eiginleikasettum og flokkunum, stilltu bæði forritin fyrir sömu eiginleika og sjáðu hvað skilaði sér til baka.
keywords: ifc, umferð fram og til baka, samvirkni, globalid, guid, eiginleikasett, psets, flokkanir, sameiginlegar breytur, kortlagning eiginleika, þýðandi, bcf, samhæfing, skipti
from: 9f224176
---

## Það sem þú gerir

Færðu líkan á milli tveggja BIM-forrita, til dæmis frá Revit til Archicad og til baka, í gegnum IFC, með BimCraft í miðjunni til að athuga það, bæta við það og skrá hvað lifði af. Skráarsnið hvorugs forrits er lesið: allt ferðast sem IFC.

## Það sem BimCraft varðveitir

Þegar þú breytir líkani í BimCraft og smellir á {{ui:Vista sem IFC}}, er sérhver lína sem þú breyttir ekki skrifuð til baka nákvæmlega eins og hún var. Þannig:

- **GlobalId** haldast þau sömu, og hitt forritið getur passað hvern hlut við þann sem það sendi.
- **Eiginleikasett** og gildi þeirra haldast, nema þau gildi sem þú breyttir.
- **Flokkanir** haldast tengdar sínum hlutum.

## Stilltu bæði forritin fyrir sömu eiginleika

1. Opnaðu líkanið í BimCraft (og verkefnapakkann, ef þú átt hann: eiginleikahópar hans bætast við).
2. Í vinstra spjaldinu, opnaðu {{ui:Milli tveggja BIM-forrita}}.
3. Undir **Kortlagning eiginleika** sækirðu það sem hvort forrit þarf:
   - {{ui:Sameiginlegar breytur}}: skrá með sameiginlegum breytum. Í Revit hleður þú henni með Manage › Shared Parameters og bætir breytunum við flokkana sem þurfa þær.
   - {{ui:IFC-útflutningur eiginleikasetta}}: skrá með notandaskilgreindu eiginleikasetti. Í IFC-útflutningsstillingum Revit velurðu hana undir notandaskilgreind eiginleikasett, svo útflutt IFC beri sama sett og sömu heiti eiginleika.
   - {{ui:Kortlagningartafla (CSV)}}: sérhver eiginleiki með sínu IFC-setti og heiti, gerð sinni og samsvarandi heitum í hvoru forriti. Kortlagningarskrár Archicad eru ekki birt snið, svo settu upp þýðanda þess og eiginleikastjóra eftir þessari töflu handvirkt.
   - {{ui:Kortlagningarskrá}}: öll kortlagningin sem ein skrá, til að geyma með verkefninu.

Staðlaðar sett (Pset_ og Qto_) eru látin vera utan sameiginlegu breytuskrárinnar: bæði forrit skrifa þau úr eigin gögnum.

## Sendu líkanið og fáðu það til baka

1. Fluttu út IFC úr fyrsta forritinu með GlobalId haldið (Revit: „Store the IFC GUID in an element parameter after export" kveikt).
2. Opnaðu það í BimCraft, athugaðu það ({{ui:Model checks}}, {{ui:Clash check}}), bættu við atriðum ({{ui:Atriði}}, BCF), breyttu gildum ef þú þarft, og {{ui:Vista sem IFC}}.
3. Opnaðu vistuðu IFC-skrána í öðru forritinu, vinndu í henni, og fluttu út IFC þaðan með GlobalId haldið (þýðandi Archicad: „Global Unique Identifiers: Keep existing").
4. Aftur í BimCraft, opnaðu líkanið sem fór út, og bættu svo við því sem kom til baka ({{ui:Bæta við líkani}} undir **Líkön**).
5. Í {{ui:Milli tveggja BIM-forrita}} velurðu **Fór út** og **Kom til baka**, og smellir á {{ui:Búa til skýrslu}}.

## Lestu skýrsluna

- **Hlutir**: hversu margir komu til baka með sama GlobalId, hversu margir vantar og hversu margir eru nýir. Hlutir með nýtt GlobalId birtast sem einn sem vantar og einn nýr: hitt forritið hélt ekki auðkenninu.
- **IFC-flokki breytt**: hlutir sem komu til baka sem önnur tegund hlutar.
- **Eiginleikagildi varðveitt**: hlutfall gilda sem komu til baka óbreytt. Listinn hér fyrir neðan sýnir þá eiginleika sem hafa flest breytt eða vantandi gildi.
- **Flokkanir**: varðveittar, breyttar (sama kerfi, annar kóði) eða vantandi.

{{ui:Sækja skýrsluna (CSV)}} gefur alla eiginleika með fjölda sínum. Til að sjá hvaða hlutir hafa hreyfst eða breytt lögun, notaðu {{ui:Bera saman útgáfur}} á sömu tvö líkön.

:::note
BimCraft keyrir hvorugt forritið. Hvaða stillingar koma gildum í gegn fer eftir IFC-stillingum hvers forrits: skýrslan sýnir hvað raunverulega skilaði sér til baka, svo prófaðu stillingu, fluttu út aftur og berðu saman.
:::

## Atriði ferðast sem BCF

Atriði sem þú vekur í BimCraft flytjast út sem BCF ({{ui:Atriði}}), sem bæði forrit geta lesið með BCF-verkfærum sínum, svo spurning um hlut nær til þess sem vinnur í hinu forritinu, með sjónarhorni sínu.

Sjá einnig [Opna verkefnapakka](topic:open-project-bundle), [Frá verkefnaskrá í BimCraft í gegnum IFC](topic:rvt-to-ifc) og [Bera saman tvær útgáfur af líkani](topic:compare-versions).
