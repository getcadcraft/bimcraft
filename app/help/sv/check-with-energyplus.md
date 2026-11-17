---
title: Kontrollera värme och kyla med EnergyPlus
summary: Skriv modellen som en EnergyPlus-fil, eller kör EnergyPlus version 26.2.0 på den i webbläsaren, och jämför dess dimensionerande laster med det snabba värme- och kylhjälpmedlet. En andra åsikt för tidig projektering, inte en efterlevnadsberäkning.
keywords: energyplus, energisimulering, dimensionerande dag, värmelast, kyllast, väderfil, epw, idf, termisk massa, årsenergi, simulera
from: b82a5bf2
---

## Vad du gör

Panelen **Kontrollera med EnergyPlus** skriver den öppna modellen som en EnergyPlus-indatafil (en IDF): en zon per rum, väggarna, golven, taken och fönstren med sina U-värden, luftomsättningen samt ideal värme och kyla. Du kan alltid **spara den filen** och köra den i din egen EnergyPlus.

Om du också installerar motorn kan panelen simulera på plats och lista EnergyPlus dimensionerande värme och kyla bredvid det snabba hjälpmedlets, rum för rum.

Detta är ett projekteringshjälpmedel. Energikrav, certifiering och bygglov kräver ett godkänt verktyg och de klimatdata det kräver, och resultatet måste granskas av den person som svarar för det.

## Installera motorn

BimCraft innehåller inte EnergyPlus. Det är en stor WebAssembly-version (cirka 6 MB komprimerad, plus en datafil på 4.6 MB), så du hostar den själv och skriver dess adress i panelen. Sidan laddar den bara när du trycker på en simuleringsknapp, aldrig vid start. Adressen måste vara https, en sökväg på den här webbplatsen eller localhost.

## Dimensionerande dagar eller ett år

- **Simulera dimensionerande dagar** kräver ingen väderfil. Den kör en kall vinterdag utan sol och en varm klar sommardag, med temperaturerna i värme- och kylindata på fliken Dagsljus, och redovisar varje rums last i watt.
- **Simulera ett år** kräver en väderfil i EPW-format som du väljer. Den lägger till personer, belysning och utrustning från samma indata (alltid på, eftersom inget schema hittas på) och redovisar värme- och kylenergin för varje rum i kWh. Väderfiler har egna licenser, så använd en som du får använda.

## Termisk massa

Kryssa i **Ge väggar med kända skikt termisk massa** så skrivs väggar, tak och golv vars materialskikt är kända lager för lager, med densitet och specifik värmekapacitet hämtade från en kort tabell över typiska värden efter materialnamn. Skikten tas utifrån först, i den ordning filen listar dem. Element utan skikt behåller sitt U-värde utan massa.

## Läsa jämförelsen

De två metoderna besvarar lite olika frågor. Det snabba hjälpmedlet behåller varje element; EnergyPlus-filen medelvärdesbildar varje rums U-värden per ytans typ. En skillnad på över 15 % i ett rums dimensionerande värme listas som en notering i ⚠-panelen, med båda siffrorna. Kyla skiljer sig mer, av konstruktion: det snabba hjälpmedlet räknar ut en topp från solen på ett datum, medan EnergyPlus dimensionerar på sin egen dimensionerande dag.
