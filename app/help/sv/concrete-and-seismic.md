---
title: Kontrollera betongelement och skapa seismiska laster
summary: Ställ in armeringsjärnen i betongbalkar och pelare i den öppna modellen, kontrollera dem enligt ACI 318-19, beräkna ekvivalenta horisontella krafter enligt ASCE 7-22 på styva bjälklag, och se våningsdrift. Ett hjälpmedel för en ingenjör att granska.
keywords: betong, armerad betong, ACI 318, ACI 318-19, armering, balk, pelare, skjuvning, bygel, seismisk, jordbävning, ekvivalent horisontell kraft, ELF, ASCE 7-22, drift, våningsdrift, bjälklag, styvt membran, våningsvikt, utnyttjande, konstruktion, ingenjör, analys
from: 2f342e72
---

Blocken {{ui:Betongelement}} och {{ui:Seismiska laster}} i fliken {{ui:Analys}} kontrollerar armerade betongbalkar och pelare i den öppna IFC-modellen, och beräknar jordbävningens sidokrafter på modellens bjälklag. De är samma block som i DetailCraft, körs efter analysen i fliken {{ui:Analys}} och sparas i IFC-filen tillsammans med de andra analysinställningarna.

:::warning
Resultaten är **till för en ingenjör att kontrollera**: ett hjälpmedel tills någon har granskat dem. Betongkontrollerna använder förstaordningskrafter (en pelare i en ram du kallar icke-sidoförskjutbar dimensioneras för sitt förstorade moment), utan förstoring av sidoförskjutning, ingen vridningsdimensionering, ingen seismisk detaljering (ACI kapitel 18) och ingen byglingsdetaljering. De seismiska lasterna utelämnar redundansfaktorn, den vertikala seismiska effekten, vridningsförstoringen och P-delta-effekter. **Vindlaster finns inte ännu**: standardens vindkapitel finns inte i projektets referenssidor.
:::

## Vad BimCraft läser

Analysen läser modellens balkar, pelare och stag med deras profiler (se [Analysera den bärande ramen](topic:frame-analysis)). Blocket {{ui:Betongelement}} listar alla sektioner de använder. Tryck på {{ui:Ställ in som betong…}} för en sektion som är betong: BimCraft tar en rektangel från profilens area och styvhet (bredden b och djupet h som du sedan kan ändra), så en sektion som inte liknar en rektangel (en valsad stålprofil) ger en storlek som du måste korrigera, eller lämnas orörd.

En sektion som ställts in som betong, och alla element vars material heter betong, analyseras som betong: E = 4700 √f′c, 2400 kg/m³, och som standard med **sprickade sektioner** (pelare 0.70 Ig, balkar 0.35 Ig; ACI 318-19 tabell 6.6.3.1.1(a)). Välj {{ui:Brutto sektioner}} för att stänga av det. Utan dessa inställningar analyseras modellen precis som förut.

## Armering, kombinationer, kontroll

Ange täckskiktet, de översta, nedersta och sidoarmeringsjärnen (eller en pelarkorg) och byglarna för varje sektion, ställ in f′c, fy, fyt, K och sidoförskjutbar eller icke-sidoförskjutbar. Ge lastfallen deras typ, tryck på {{ui:Gör kombinationer}} (ASCE 7 §5.3.1) och sedan på {{ui:Kontrollera betong}}: varje element får en utnyttjandegrad, färgad på modellen. Element över kapacitet, och en våningsdrift över sin gräns, listas i {{ui:Problem}} med sin punkt; klicka på ett för att markera elementet.

## Bjälklag och seismiska laster

I blocket {{ui:Seismiska laster}} tar {{ui:Hitta våningsplan}} fram de nivåer där två eller fler balkar möts; var och en blir ett styvt membran. {{ui:Hämta vikter från lastfall}} läser varje bjälklags seismiska vikt från de lastfall du ger en faktor. Fyll i SDS, SD1, S1, R, Ie, Cd, TL, systemet och riskklassen, och tryck sedan på {{ui:Skapa seismiska lastfall}} (ASCE 7-22 12.8: period, basskjuvkraft, fördelning uppåt i våningarna, 5 % oavsiktlig vridning). Våningskrafterna och driftkontrollen (12.12) visas efter en körning. Samma period och våningsstyvhet matas in i jordbävningen i [Spela upp en översvämning, vind eller en jordbävning](topic:hazard-playback) när du väljer analysramen som källa.

Betongbjälklag och betongväggar blir plattor i analysen, och blocket {{ui:Bjälklagsarmering}} räknar ut hur mycket stål de behöver per meter. Detaljerna för varje kontroll finns i DetailCraft:s ämne med samma namn.
