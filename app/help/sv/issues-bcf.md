---
title: Ärenden och BCF-filer
summary: Spara en vy av modellen som ett ärende — kamera, markerade element, dolda element, sektion — dela den som en BCF-fil med andra samordningsverktyg, och öppna deras BCF-filer för att se deras ärenden.
keywords: bcf, bcfzip, ärende, ärenden, ämne, vypunkt, kollisionsrapport, samordning, kommentar, ögonblicksbild, öppna bcf, spara bcf, export, import
from: 2a6cf201
---

## Vad du gör

Peka på ett problem i modellen och behåll vyn som visar det, och skicka sedan vidare den i en BCF-fil, formatet som andra samordningsverktyg läser och skriver.

## Steg

1. Öppna en IFC-modell och ställ in vyn: rotera till den, markera elementen som berörs, dölj det som är i vägen, skär den med ett sektionsplan eller en box.
2. Klicka på fliken {{ui:Ärenden}} till höger, och sedan på {{ui:Nytt ärende från den här vyn}}.
3. Skriv en titel, och en kommentar om du vill; välj en status; ange ditt namn eller din e-post (när du är inloggad fylls ditt kontos namn i; se [BimCraft-inställningar](topic:settings#your-name-on-issues)). Klicka på {{ui:Skapa ärende}}.
4. Klicka på {{ui:Visa}} vid ett ärende för att återställa dess vy.
5. Klicka på {{ui:Spara BCF}} för att ladda ner alla ärenden som en `.bcf`-fil.
6. För att se ärenden som någon annan skapat klickar du på {{ui:Öppna BCF…}} och väljer deras `.bcf`- eller `.bcfzip`-fil.

## Vad du bör se

- Varje ärende i listan med en bild av dess vy, titel, status, författare och datum.
- {{ui:Visa}} återställer kameran, de markerade elementen, det som var dolt (eller de enda synliga sakerna) och sektionen. Element hittas med sitt GlobalId i varje öppen modell; statusraden anger om vissa saknas.
- Ett sektionsplan eller en box från ett annat verktyg visas när det ligger i linje med modellens axlar; lutande eller extra plan återkommer som en sektionsvolym (upp till 6 plan). Ett ärende behåller den första boxen i en volym med flera boxar.

## Bra att veta

- Filen är BCF 2.1 och behåller vyn i modellens egna koordinater, så att andra verktyg placerar kameran på samma ställe.
- Ärenden stannar i den här fliken tills du sparar dem. Att öppna en annan modell behåller listan; öppna modellen som ärendena gäller innan du visar dem.
- En parallell (ortogonal) kamera från ett annat verktyg visas med den här visarens perspektivkamera, backad så att samma del av modellen fyller vyn.

## Vanliga misstag

- **Visa flyttade kameran till något konstigt.** Ärendet gjordes på en annan modell eller med andra koordinater. Öppna rätt modell först.
- **Filen går inte att öppna.** Den är inte en BCF-zip, eller är skadad; statusraden anger varför.

## Nästa

- [Dölj, isolera och se igenom element](topic:hide-and-isolate)
- [Skär en IFC-modell med ett sektionsplan](topic:section-plane)
