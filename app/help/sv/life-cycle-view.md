---
title: Se vad som slits ut under femtio år
summary: Fönstren, dörrarna, ytskikten och taket i modellen, deras livslängd, vilka år de byts ut och kostnaden per år samt nuvärdet när du skriver in en kostnad per enhet.
keywords: livscykel, livscykelvy, livslängd, utbyte, underhåll, kostnad, nuvärde, diskontering, inflation, 50 år, fönster, målning, tak, ytskikt, totalkostnad
from: 1b849545
---

Avsnittet {{ui:Livscykelvy}} i den vänstra panelen listar det i modellen som slits ut och när det byts ut under studieperioden (50 år från början). Inget i modellen ändras.

## Läs av den

Varje del visar sin mängd (mätt i modellen: fönsterarea, yttre och inre dörrar, ytskikt på yttervägg, invändig målning, golv- och takytskikt, takets fotavtryck, trappor), en **livslängd i år** och en **kostnad per enhet**. En del byts ut vid sin livslängd, vid dubbla livslängden och så vidare så länge det är före studiens slut. Ett 30 år gammalt fönster i en 50-årig studie byts alltså ut en gång, vid år 30. Livslängderna är typiska planeringsvärden: ändra dem till dina produkter och ditt klimat. Ingen kostnad antas. Skriv in en för att se pengarna per år, summan och nuvärdet. Lägg till en diskonteringsränta och en inflationstakt om du vill ha dem.

{{ui:Spara schemat (CSV)}} sparar komponenterna och åren. Rör, kanaler, ledningsdragning och utrustning listas också (se nedan).

## Rör, kanaler, ledningar och utrustning

- **Rör och kanaler** är antalet meter för varje ritad sträcka. **Utrustning** (pumpar, fläktar, ventiler, terminaler, armaturer, uttag, strömbrytare, centraler och de andra sakerna som fliken Tillgångar följer) räknas per typ, och varje typ har en planeringslivslängd. Ett objekt vars egen *livslängd* är satt i fliken Tillgångar får en egen rad med den livslängden. Om det har ett installationsdatum börjar det på sin ålder: en pump som är 16 år gammal med en livslängd på 10 år ska bytas nu, sedan var tionde år.
- **Ledningsdragning** är en **uppskattning**: plansträckan från centralen längs enheterna i varje krets, närmaste först, gånger 1.25 för dragningen. Modellen ritar ingen kabel, så kontrollera den mot din egen mängdavtagning.
- Livslängderna är planeringsvärden att granska, inte en källa.

## Koldioxid per utbyte

Bocka i {{ui:Ta med den bundna koldioxiden för varje utbyte}}. Ett nytt fönster, en ny dörr, trappa, ett nytt tak, rör eller utrustningsdel räknas med den koldioxid som modellens egna element av samma slag bär (faktorerna i fliken Kol, per enhet). En del utan element eller faktor, till exempel målning, ytskikt och ledningsdragning, visar ett streck och listas. Den gamla delens slut på livslängden och arbetet med att byta ut den räknas inte med.
