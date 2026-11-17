---
title: Solcellsanläggningar, skuggning och energiutbyte
summary: Placera solcellsfält på tak eller mark, skugga dem från modellen, uppskatta årsenergi, dimensionera strängar och ta fram data för enlinjeschemat. Alla indata visas och startmodulen och förlusterna är generiska.
keywords: sol, solenergi, solceller, pv, fotovoltaisk, fält, modul, tak, skuggning, energiutbyte, kwh, kwp, strängdimensionering, växelriktare, enlinje, enlinjeschema, lutning, azimut, radavstånd
from: adf4aaf3
---

## Vad du gör

Öppna panelen **Solceller**. Välj en takyta (dess lutning och riktning läses från modellen) eller lägg ut ett markfält med en lutning och riktning; modulerna placeras inom med avstånd från kanterna och räknas, vilket ger likströmseffekten i kWp. När du placerar fältet skrivs det in i modellen som solenheter, i ett steg i Ångra.

## Skuggning, energiutbyte och strängar

- **Skuggning** skickar en stråle från varje modul mot solen för typiska dagar i varje månad, mot modellens egen geometri, så att grannbyggnader, attiker och raderna framför räknas. Bara det direkta solljuset minskas, och ett delvis skuggat fält förlorar effekt i samma proportion.
- **Energiutbyte** ger kWh per månad och år, kWh per kWp och prestandakvoten. Solinstrålningen kommer från dina egna månadssummor för en horisontell yta om du skriver in dem. Utan dem använder panelen en övre gräns för klar himmel, och säger det. **Hämta klimatet från NASA POWER** med en knapp på fliken Energiutbyte: den skickar bara tomtens latitud och longitud, en gång, och behåller svaret på den här datorn (kontrollerat från webbläsaren 2026-10-30). PVGIS tillåter inte en webbsida att läsa dess svar, så fliken ger en länk som öppnar PVGIS månadsdata för tomten i en ny flik; klistra in det den visar i rutan så fylls de tolv månaderna i.
- **Strängar** kontrollerar moduler per sträng mot växelriktarens spänningsfönster vid den kallaste och varmaste dagen, och de parallella strängarna mot dess ström.
- **Enlinje** tar fram schemadata (fält, kombinerare, frånskiljare, växelriktare, central och nät) med ledar- och säkringsdimensioner från de faktorer du skriver in. Det är data och en SVG; tillägget Elektriska i CadCraft kan placera den som symboler.

Modulen, växelriktaren, förlusterna och ledarfaktorerna som följer med BimCraft är generiska exempel, märkta i varje resultat. Skriv in tillverkarens data och de normvärden du dimensionerar efter, och låt den person som ansvarar för designen granska den.
