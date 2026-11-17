---
title: Uppskatta värme- och kyllaster
summary: Varje rums värmeförlust, uppvärmning under ett år med graddagar och kyltopp, utifrån vad som avgränsar det i modellen och varje elements U-värde, med alla indata visade. Ett projekteringsstöd, inte en efterlevnadsberäkning.
keywords: energi, uppvärmning, kyla, värmeförlust, värmelast, kyllast, u-värde, värmegenomgångskoefficient, graddagar, hdd, ventilation, luftomsättning, interna värmetillskott, solvärme, lambda, värmeledningsförmåga, isolering, tidig projektering, analys, rum, utrymmen
from: ec312d20
---

Under fliken {{ui:Dagsljus}}, efter {{ui:Beräkna}}, öppnar du {{ui:Värme- och kyllaster}} och klickar på {{ui:Beräkna lasterna}}. Varje rum får sin **värmeförlust** en kall dimensionerande dag, sin **uppvärmning under ett år** och sin **kyltopp** en varm dag. Inget laddas upp; inget i modellen ändras om du inte skriver in ett U-värde.

:::warning
Detta är **ett projekteringsstöd, inte en efterlevnadsberäkning**: en stationär uppskattning med alla indata på skärmen. Det är **inte** metoden ISO 52016-1, inte en simulering och inte ett energicertifikat; det dimensionerar inte pannor, värmepumpar eller kylmaskiner. Kontrollera resultaten och dimensionera utrustningen tillsammans med en ingenjör.
:::

## Vad som avgränsar varje rum

BimCraft hittar det i modellen själv, så vilket program som helst kan göra IFC (det behöver inte de avgränsningsytor som vissa program exporterar). Från varje del av rummets egen yta tittar den rakt ut:

- den första vägg, fönster, dörr, golv, tak, beklädnad, gardinvägg eller balk den möter **avgränsar** den delen;
- strax bortom det elementet ligger antingen **ett annat rum** (räknas som granne, med samma temperatur: ingen förlust), **ingenting** (ute), eller, under ett golv på lägsta nivån, **marken**;
- en öppen dörröppning in i ett annat rum räknas som granne; en del som inte möter något alls (inom 1,5 m i sidled eller nedåt, 8 m uppåt) listas under rummet och utelämnas.

Fönster och dörrar tar sin egen storlek från IFC (total bredd × höjd) från väggen de sitter i. Klicka på ett rum i tabellen för att se varje element som avgränsar det med sin area, sitt U-värde och varifrån U-värdet kommer.

## U-värden

För varje element använder BimCraft, i denna ordning:

1. **IFC:ns eget U-värde**: `ThermalTransmittance` i elementets gemensamma egenskapsuppsättning (till exempel `Pset_WallCommon`) eller i dess typ. De flesta projekteringsprogram kan skriva det.
2. **Dess materiallager**: 1 ÷ (invändigt ytmotstånd + varje lagers tjocklek ÷ dess värmeledningsförmåga λ + utvändigt ytmotstånd), med de vanliga ytmotstånden (0,13 och 0,04 m²K/W för väggar; 0,10 uppåt och 0,17 nedåt invändigt). Typiska värmeledningsförmågor att börja med (mineralull 0,035, tegel 0,77, betong 1,4…); under {{ui:Materialens värmeledningsförmåga}} skriver du tillverkarens värden, och varje U-värde från de lagren följer med.
3. **Ett typiskt värde** (väggar 0,3, tak 0,2, golv 0,25, fönster 1,4, dörrar 1,6 W/m²K), markerat som sådant; skriv in ditt eget.

Ett U-värde som skrivs in i ett rums detaljer skrivs in i elementets gemensamma egenskapsuppsättning som `ThermalTransmittance` (ett steg; {{key:Mod+Z}} ångrar det). Om flera element delar den uppsättningen (till exempel en väggtyp), ändras de alla tillsammans, och statusraden säger hur många.

## Uppvärmning

- **Värmeförlust** = Σ U × A × (inne − ute) för allt som går ut + Σ U × A × (inne − mark) för golv mot marken + 0,335 × luftomsättningar per timme × rummets volym × (inne − ute). 0,335 Wh per m³ per kelvin är luftens densitet (1,2 kg/m³) gånger dess värmekapacitet (1005 J/kgK).
- **Uppvärmning under ett år** = (rummets förlust per grad mot ute, genom konstruktionen och luften, plus dess markförlust skalad till samma skillnad) × **graddagarna** × 24 ÷ 1000, i kWh. Skriv in graddagarna för platsen, eller {{ui:Läs graddagar från en CSV…}} (en rad per dag eller månad; det sista talet på varje rad läggs ihop). Använd graddagar till den basetemperatur din källa använder: den basen tar redan hänsyn till den gratis värme som människor, belysning och solen ger.

## Kyla

**Kyltoppen** = värmen genom konstruktionen och luften vid sommarens dimensionerande temperatur + personer (golvyta per person × värme per person) + belysning och utrustning per m² golv + **solen**: toppen av {{ui:Sol genom fönstren ett visst datum}} för rummet. Räkna ut solen först, en varm dag; tills dess räknas solen som 0 och avsnittet säger det. Toppen för varje del läggs ihop även om de infaller vid olika timmar, vilket överskattar lite.

## Vad det utelämnar

- De månatliga och timvisa metoderna i ISO 52016-1 (en betald standard), värme lagrad i byggnadens massa, köldbryggor, hur värme- och kylsystem presterar, och klimatfiler.
- Rum som ligger intill varandra tas med samma temperatur; ouppvärmda utrymmen modelleras inte.

Se även [Uppskatta dagsljuset i varje rum](topic:daylight-factor).
