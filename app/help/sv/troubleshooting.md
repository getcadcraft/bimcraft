---
title: Felsökning
summary: Meddelanden som BimCraft visar, vad som orsakar dem och vad du ska göra, för att öppna filer, mappar, 3D-modeller, ritningar och ändringar.
keywords: problem, fel, fungerar inte, kan inte öppna, misslyckades, ofullständig, skadad, långsam, krasch, tom, saknas, meddelande, hjälp
from: 1e5a79fc
---

Meddelanden visas i statusfältet längst ned på scenen, i rött när något misslyckades. Hitta meddelandet nedan.

## Öppna filer

**"*name* är inte en IFC-, RVT-, RFA-, DWG- eller DXF-fil."**
BimCraft kände inte igen filen. Kontrollera filändelsen och att filen inte är tom. PDF-filer, bilder och kontorsfiler öppnas inte.

**".ifczip stöds inte ännu. Spara eller exportera modellen som en vanlig .ifc-fil."** (gäller även `.ifcxml`)
Packa upp `.ifczip` (det är en vanlig zip-fil som innehåller en `.ifc`) eller exportera vanlig IFC.

**"… är en projektfil som BimCraft inte läser ännu."**
En `.pln`-, `.pla`-, `.tpl`- eller `.bpn`-fil. Exportera IFC eller DWG från den och öppna den: se [Öppna .pln- och .pla-projektfiler](topic:pln-project-files).

**"Den här IFC-filen kunde inte läsas."**
IFC-filen är skadad eller inte riktig IFC. Öppna den i en textredigerare: en riktig IFC-fil börjar med `ISO-10303-21;`. Exportera den igen.

**"Den här filen är ofullständig: den är … MB, men dess egna index pekar på data som finns minst … MB in. …"**
Projekt- eller familjefilen klipptes av när den kopierades, laddades upp eller synkroniserades. En molnfil som är "endast online" ser likadan ut. En fil som öppnas på egen hand öppnas fortfarande, med det här meddelandet överst på kortet och "Visar det som återfanns; kopiera originalet igen för hela modellen.": kortet visar bara de delar vars alla byte finns i filen och listar resten under **Inte i filen**. Gör filen tillgänglig offline i din molnenhet, eller kopiera originalet igen, och öppna det på nytt. I en mapp visar BimCraft i stället den senaste kompletta säkerhetskopian.

**"… Filens egna innehållsförteckning finns också i den saknade delen, så ingenting i den kan öppnas."**
Filen klipptes så tidigt att inte ens dess innehållsförteckning finns kvar. Inget kan återställas från den här kopian. Kopiera originalet igen och öppna det på nytt.

**"Den här sammansatta filen saknar en BasicFileInfo-ström, så den är inte en Revit-fil."**
Filen är en sammansatt fil av något annat slag (äldre kontorsdokument använder samma behållare). Kontrollera att du valde rätt fil.

**"Arbetar fortfarande med den förra…"**
BimCraft är fortfarande upptaget med föregående fil eller mapp. Vänta tills statusfältet är klart och försök sedan igen.

**Filväljaren gråar ut min fil.**
Väljaren erbjuder bara `.ifc`, `.rvt`, `.rfa`, `.rte`, `.rft`, `.dwg` och `.dxf`. Dra i stället andra filer till sidan, så talar BimCraft om den kan läsa dem.

## Öppna mappar

**"Den här mappen har fler än 20 000 filer. Välj en mindre mapp, till exempel ett projekt."**
Du valde en mapp för högt upp, till exempel en hel enhet. Välj en projektmapp.

**"Webbläsaren gav inte åtkomst till *name*. Välj den igen med Öppna en mapp."**
Du klickade på {{ui:Öppna igen}} vid en senaste mapp, och webbläsarens behörighet nekades eller har gått ut. Välj mappen igen, eller dra in den.

**Webbläsaren säger att den kommer att "ladda upp" filer.**
Det är webbläsarens egen formulering för att lämna filer till en sida. BimCraft skickar dem inte någonstans. Dra in mappen för att undvika frågan.

**Ingenting händer på en telefon eller surfplatta.**
Många mobila webbläsare kan inte välja mappar. Öppna enskilda filer, eller använd en dator.

## IFC-motorn laddas första gången

**Statusfältet står kvar på "Startar IFC-motorn…", eller visar ett fel som "Failed to fetch".**
IFC-motorn kunde inte laddas ned. Du kan vara offline, eller så blockerar en brandvägg eller ett innehållsfilter den.

:::offline
Du är offline. Om appfältets knapp inte säger {{ui:Redo för offline}} har IFC-motorn aldrig sparats i den här webbläsaren. Anslut igen, öppna filen på nytt och klicka sedan på {{ui:Spara för offline}} så att den fungerar offline nästa gång. Se [Online och offline](topic:online-offline).
:::

:::online
Ladda om sidan och försök igen. På ett arbetsnätverk, be din IT-avdelning att tillåta sajtens `.wasm`-filer.
:::

## Spara för offline-användning

**Knappen säger {{ui:Kunde inte spara}}.**
Vissa filer laddades inte ned, oftast för att anslutningen bröts. Kontrollera anslutningen och klicka på knappen igen. En tidigare offlinekopia behålls tills en ny är klar.

**Knappen säger {{ui:Offline är inte tillgängligt}}.**
Det här fönstret kan inte behålla en offlinekopia, till exempel ett privat fönster eller en hanterad arbetsdator. Se [Att arbeta offline](common:offline).

**Knappen står kvar på "Sparar *n* av *m*" en stund.**
BimCrafts kopia är cirka 11 MB, mest IFC-motorn. Håll fliken öppen tills den säger {{ui:Redo för offline}}.

**BimCraft öppnades offline men ser föråldrad ut.**
Din sparade kopia är från ett tidigare besök. När du är online klickar du på {{ui:Redo för offline}} och väljer {{ui:Spara igen (hämta den senaste versionen)}}.

## 3D-vyn

**Modellen är inte där jag väntade, eller den är pytteliten.**
Tryck på {{key:F}} eller klicka på {{ui:Anpassa}}. Anpassa ramar alltid in allt i modellen, även våningsplan du avbockat och lösa element långt från byggnaden, så byggnaden kan se liten ut. Zooma in därifrån.

**Klick markerar inget.**
Håll musen stilla när du klickar: en liten dragning kretsar. Element på avbockade våningsplan kan inte markeras. Med {{ui:Utrymmen}} på markeras de genomskinliga utrymmena före det som finns inuti dem.

**Knappen {{ui:Kanter}} är nedtonad: "Kanter är av för mycket stora modeller".**
Modellen har fler än 1,5 miljoner trianglar. Kanterna är avstängda för att spara minne.

**Fliken blir långsam, vit eller visar webbläsarens kraschsida.**
Modellen är för stor för det minne som webbläsaren ger fliken. Stäng andra flikar och ladda om. Exportera en mindre IFC: en byggnad, en disciplin eller färre våningsplan. Se [Webbläsare, enheter och minne](topic:platforms).

**3D-vyn förblir tom.**
WebGL kan vara avstängd eller blockerad. Slå på maskinvaruacceleration (eller grafikacceleration) i webbläsarens inställningar och starta om webbläsaren.

## Redigera IFC

**"Använd ett tal."** Värdet är numeriskt. Skriv ett vanligt tal utan enheter, till exempel `2.4`.

**"Använd ett heltal."** Värdet är ett antal eller ett heltal. Ta bort decimalerna.

**"Endast egenskaper med ett enda värde kan redigeras."** Listor, uppräkningar och kvantiteter är skrivskyddade.

**{{key:Mod+S}} öppnar webbläsarens fönster "Spara sida".**
Det finns inga osparade ändringar, så BimCraft lämnade tangenten åt webbläsaren. Stäng fönstret.

**{{key:Mod+Z}} gör ingenting.**
Den fungerar bara när du har osparade ändringar och inte skriver i ett fält. Efter en sparning finns inget kvar att ångra.

**Listan {{ui:Ändringar}} visar fortfarande redigeringar efter att jag kasserat dem och öppnat en ritning eller en mapp.**
När du svarar på frågan "Kassera dem?" med OK och sedan öppnar något annat än en IFC-modell, finns de gamla redigeringarna kvar i minnet och {{ui:Spara som IFC}} skulle fortfarande spara dem. För att verkligen börja om, öppna den ursprungliga IFC-filen igen, eller ladda om sidan.

**Min redigering ändrade fler element än jag markerade.**
Du ändrade en egenskap i en uppsättning märkt "(typ)". Typegenskaper gäller för varje element av typen. Klicka på {{ui:Ångra}}. Se [Ändra en typegenskap för varje element av en typ](topic:type-vs-instance).

## Ritningar

**"*name* kunde inte läsas. Den kan vara skadad, eller sparad i ett format som läsaren inte hanterar ännu (…)."**
Spara ritningen från programmet som skapade den som en äldre DWG (2018 eller tidigare) eller som DXF, och försök igen.

**"Den här ritningen har inget att visa."** eller **"*name* är en tom ritning: den innehåller inga linjer, ingen text och inga block."**
Ritningen är tom, eller innehåller bara saker som BimCraft inte ritar ännu (se **Inte ritat ännu** till höger).

**"Den här ritningen är mycket stor; bara en del visas."**
BimCraft slutade rita för att hålla sig responsiv. Stäng av lager du inte behöver, eller öppna de blad du behöver från en mindre ritning.

**Delar av ett blad saknas.**
Länkade ritningar kan saknas: titta under **Länkade ritningar** till höger. Se [Hitta länkade ritningar och bilder](topic:dwg-linked-files). Lager kan också vara avstängda: klicka på {{ui:Alla på}}.

**En bild visas som en tom ram.**
Dess fil hittades inte, eller så är det en TIFF ("TIFF kan inte visas i en webbläsare"). Lägg till en PNG- eller JPEG-kopia med {{ui:Lägg till bilder…}}.

**Rullning på styrplattan zoomar i stället för att flytta ritningen.**
Så fungerar ritningar i BimCraft. Klicka och dra för att panorera.

## Fortfarande problem

Läs [Vad som inte är byggt ännu](topic:not-built-yet): det du letar efter kanske inte finns i den här versionen.
