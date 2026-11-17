---
title: Vegger fra et sett med planer (PDF eller skanning)
summary: Gjør sidene i en PDF, eller en innskannet tegning, til vegger, dører og vinduer, med ett nivå for hver side og siden beholdt under hver plan.
keywords: pdf, planer, sett med planer, skanning, skannet tegning, tiff, spor, vegger fra en pdf, vegger fra en skanning, nivåer, sider, målestokk, dører, vinduer, sving, underkant, underlag
from: b70d9db7
---

## Det du skal gjøre

Start en modell fra planene du har på papir: en PDF (tegnet som linjer, eller en skanning inne i en PDF) eller en skanning (PNG, JPEG, TIFF med én eller mange sider). Hver side blir veggene, dørene og vinduene på ett nivå.

## Steg

1. Slå på {{ui:Tegn}}. Velg {{ui:Bygg}} › {{ui:Fra en tegning…}}, deretter {{ui:Velg en tegning…}}, og velg PDF-en eller skanningen.
2. **Sider og nivåer.** Hver side listes med hva den er (**linjetegning**, eller **et bilde (sporet)**) og nivået den går til: ett av nivåene du har, **et nytt nivå over de andre**, eller **utelat denne siden**. Sider matches til nivåene dine i rekkefølge. Endre hvilken som helst av dem.
3. **Målestokk.** For en PDF, si hvordan den er tegnet (**1 : 100**, **1 : 50** …). For alt annet, eller når du ikke vet, velg **fra en avstand jeg kjenner**: klikk de to endene av et mål eller en målestokklinje i forhåndsvisningen, og skriv inn den virkelige avstanden. Alle sidene bruker den ene målestokken.
4. Velg **veggtype** og **høyden på et nytt nivå**. La **Behold hver side under planen for sitt nivå** stå avkrysset for å se hver side som tynne linjer under planen sin.
5. Linjen under valgene sier hvor mange vegger, dører og vinduer den lager, og på hvor mange nivåer. Klikk {{ui:Lag dem}}.

## Slik leser den en side

- **Vegger** kommer fra par av parallelle linjer inntil 600 mm fra hverandre (de to flatene på en vegg). Veggen er like tykk som gapet. Skravur og skrift utelates.
- **Dører og vinduer.** Et gap i en vegg (500 til 2600 mm) med en dørsving tegnet ved siden av er en dør. Den er hengslet i den ene enden av gapet og åpnes til siden av svingen. Et gap, eller en vegg med underkantlinjer i seg, er et vindu. Et gap uten noe av dette er en dør opp til 1300 mm, og et vindu over det.
- **En skanning** rettes først når den ble skannet skjevt (dialogen sier det), gjøres svart-hvit, renses for flekker og sporeres. En **PDF-side som er et bilde**, tegnes først og behandles deretter likt. Sporingen finner midten av hvert strøk og tilpasser rette linjer og buer til den. Den bruker ikke nettverk og ingen trent modell.
- **Rom** følger av seg selv fra de lukkede sløyfene veggene danner. Når PDF-en har tekst, får et rom navnet fra skriften inni det (den største; en måltilsetting, en målestokk eller et arknummer er ikke et navn). En skanning har ingen tekst, så rommene beholder navnene programmet gir dem.
- **Alt som er lest fra siden, er merket som ikke verifisert**: hver vegg, dør, hvert vindu og rom har en stiplet boks og et «?» i planen til du har kontrollert det. Velg det du har kontrollert, og bruk {{ui:Verktøy}} › {{ui:Merk som kontrollert}}. Se [Merk elementer som kontrollert eller feltverifisert](topic:verification).

## Det du skal se

- Veggene, dørene, vinduene og rommene på hvert nivå, og eventuelle nye nivåer, alt som ett trinn: {{key:Mod+Z}} tar alt tilbake.
- Hver side som tynne linjer under planen til sitt nivå, listet under {{ui:Bygg}} › {{ui:Fra en tegning…}} med {{ui:Fjern}}.

:::note
Dette er det linjene ga, med sidens nøyaktighet. En skanning kan miste en svak vegg, slå sammen to vegger som ligger svært nær hverandre, eller finne en vegg i en flekk. En sving tegningen ikke viser, gjør et gap til en vanlig dør. Kontroller hvert nivå mot siden før du stoler på det, og rett det som er feil med verktøyene {{ui:Vegg}}, {{ui:Dør}} og {{ui:Vindu}}.
:::
