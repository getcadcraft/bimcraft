---
title: Skicka ett element till PartCraft och ta tillbaka det
summary: Markera ett stöd, en konsol, ett räcke eller en utrustningsdel, utforma det som en del i PartCraft med byggnaden runt omkring och godkänn den nya formen tillbaka i modellen.
keywords: partcraft, del, skicka, länk, element, stöd, konsol, staket, räcke, utrustning, utforma, rundresa, godkänn, ändrad, dellänkar
from: 4ce2f449
---

## Vad du gör

Utforma ett element i byggnaden som en del: skicka det till PartCraft, ändra det där (klipp, lägg till, borra, ändra storlek) och ta tillbaka den nya formen till modellen.

## Steg

1. Markera ett element i modellen: ett generiskt element, utrustning, en pelare, en balk, ett räcke eller en möbel.
2. Välj {{ui:Dellänkar}} i verktygsfältet och sedan {{ui:Skicka till PartCraft}}. PartCraft öppnas i en ny flik med elementet som en del. Elementen inom 3 m ritas i grått bredvid det, så att du kan utforma det på plats. De kan inte ändras där.
3. Ändra delen i PartCraft. I PartCraft väljer du {{ui:Fil}} › {{ui:Exportera}} › {{ui:Spara tillbaka till BimCraft}}. Du kan spara tillbaka så ofta du vill.
4. Tillbaka i BimCraft visar knappen {{ui:Dellänkar}} ett antal, och kortet listar elementet som {{ui:Ändrad i PartCraft}} med förändringen i storlek och volym i ord.
5. Välj {{ui:Visa}} för att titta på det, och sedan {{ui:Godkänn}} för att ge elementet den nya formen, eller {{ui:Behåll min}} för att lämna det som det var.

## Vad du bör se

- Att godkänna är ett steg som kan ångras. Elementet behåller sin plats, GlobalId, typ, material och egenskaper. Bara dess kropp ersätts.
- Elementet får en egenskapsuppsättning {{ui:CadCraft_PartLink}} med länken, dess status och revisionen.
- {{ui:Skicka igen}} öppnar samma element i PartCraft en gång till, på samma länk.

## Bra att veta

- Väggar, golv, tak, dörrar, fönster, trappor, ramper och utrymmen ritas med byggverktygen utifrån en kontur och byggs om efter varje ändring. En kropp från ett annat program skulle skrivas över, så de avvisas med en förklaring.
- Formen kommer tillbaka som ett nät (en IFC-tessellering), inte som delens funktioner. Delens historik finns kvar i PartCraft.
- Om elementet ändrades i modellen efter att du skickade det visar kortet det innan du godkänner: godkännandet ersätter de ändringarna.
- Inget laddas upp. De två apparna är sidor på samma webbplats och skickar elementet mellan sig i den här webbläsaren. Båda måste vara öppna i samma webbläsare.
- Elementet måste bli en solid i PartCraft. Ett element vars form har stora öppna luckor avvisas där, med antalet öppna kanter.
- För att godkänna måste du göra modellen som innehåller elementet till den aktiva.
