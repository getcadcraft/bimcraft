---
title: Placera utrustning och möbler från biblioteket
summary: Hitta ett objekt i Biblioteket, en fil eller den öppna ritningen, placera det på en våning i en IFC-modell med en spökförhandsvisning, vrid det, snäpp det till en vägg och spara.
keywords: flytta, rotera, vrida, dra, bibliotek, librarycraft, placera, infoga, utrustning, möbler, block, familj, objekt, katalog, innehåll, kcl, csv, gltf, obj, rfa, dwg, ifc-typ
from: 3dad5d4b
---

## Det här gör du

Lägg ett biblioteksobjekt i en IFC-modell: en diskbänk, ett arbetsbord, en stol. BimCraft skriver det som ett riktigt IFC-element med en typ, så att varje kopia av samma objekt delar en uppsättning geometri, och dess data, artikelnummer och licens följer med.

## Steg

1. Öppna en IFC-modell.
2. Klicka på fliken {{ui:Bibliotek}} bredvid {{ui:Egenskaper}} till höger, eller {{ui:Bibliotek}} i verktygsfältet ovanför modellen.
3. Välj en källa:
   - **Inbyggda symboler**: generiska VVS-planssymboler som ingår i BimCraft under Apache-2.0, tillgängliga offline. Kontrollera deras mått före byggnation. För elektriska planssymboler och IFC-elektriska enheter, använd **Bygge › Elektrisk**.
   - **Bibliotek**: CadCraft-biblioteket på denna webbplats. Publika objekt kräver ingen inloggning.
   - **Denna fil**: blocken i en öppen DWG- eller DXF-ritning. Ett dynamiskt block med synlighetslägen erbjuds en gång per läge, namngivet ”Diskbänk: Dubbel häll”, och ritas med bara det lägets objekt.
   - **{{ui:Filer…}}**: en DWG-, DXF-, IFC-, glTF/GLB-, OBJ-, RFA- eller CSV-fil på din dator. Den läses i den här fliken; inget laddas upp.
   - **Andra flöden**: ett annat bibliotek som talar samma flödesformat. Lägg till dess adress en gång; den sparas i den här webbläsaren.
4. Sök eller välj en kategori, och klicka sedan på ett kort. Kortet visar en planförhandsvisning, namnet, tillverkaren och modellen, licensen och versionen.
5. Klicka på {{ui:Placera i plan}} (i planvyn) eller {{ui:Placera i modell}} (i 3D-vyn). I {{ui:Dela}}, där planen och 3D-vyn visas båda, är knappen en delad knapp: dess huvudåtgärd är {{ui:Placera i plan}}, och pilen i dess högra ände öppnar en meny med {{ui:Placera i modell}}. Eller dra kortet, eller bilden i objektets detaljer, till planen eller 3D-vyn: objektet placeras där du släpper. Med en penna eller ett finger, tryck och håll kvar kortet en stund, och dra sedan.
6. Välj våningen i placeringsfältet. I 3D-vyn döljs våningar ovanför den medan du placerar och vyn vänder sig uppifrån; i planen visar planen redan den våningen. Om du väljer {{ui:Placera i modell}} enbart från planen öppnas 3D-vyn bredvid den.
7. För pekaren över modellen: en genomskinlig låda visar var objektet hamnar.
8. Tryck på {{key:R}} för att vrida det 90°. Tryck på {{key:Tab}} (eller {{ui:Väggfångst}}) för att ställa dess baksida mot närmaste vägg, vänd mot rummet.
9. Klicka för att placera det. Eller skriv positionen i **X, Y (mm)**, till exempel `1200, 3400`, och tryck på {{key:Enter}}.

En lampa eller något annat hängt uppifrån: ställ **Montering** på **Vid taket**. Objektets överkant hamnar då vid takets undersida över platsen (eller vid nivåns höjd där det inte finns något tak). Med en takplan i planvyn startar **Montering** på **Vid taket**.
10. Svara på den enda frågan: **artikelnumret** (nästa lediga nummer fylls i), antalet och en anteckning. Tryck på {{key:Enter}}.
11. Placera fler, eller tryck på {{key:Esc}} för att sluta.
12. Klicka på {{ui:Spara som IFC}} för att ladda ner den redigerade kopian.

## Plan eller modell

Bibliotekets placeringsknapp följer vyn du är i, och ändras så snart du ändrar vy (knapparna {{ui:Plan}}, {{ui:Dela}} och {{ui:3D}}, tangentbordet, öppnandet av en fil). Plan visar en knapp, {{ui:Placera i plan}}; 3D visar en knapp, {{ui:Placera i modell}}; Dela visar den delade knappen, med {{ui:Placera i plan}} som huvudåtgärd och {{ui:Placera i modell}} i dess meny. Båda sätten använder samma placeringsfält och skriver samma IFC-element: pekaren arbetar i planvyn för det ena och i 3D-vyn för det andra. Tryck på {{key:Esc}} när som helst för att sluta.

Att dra ett kort har ingen egen tangent: den delade knappen, eller den vanliga knappen, gör samma sak med tangentbordet.

## Flytta eller vrid ett placerat objekt

I {{ui:Rita}}, välj objektet i planen. Ett fyrkantigt handtag visas vid dess infogningspunkt och ett runt handtag bredvid den.

- Dra objektet, eller dess fyrkantiga handtag, för att flytta det. Det snäpper som Väggverktyget (väggändar och ytor); {{key:Shift}} håller det vinkelrätt mot där det var.
- Dra det runda handtaget för att vrida det i steg om 15°. Håll {{key:Shift}} för steg om 1°.
- Tryck på {{key:R}} för att vrida det 90°.
- I **Egenskaper** (även i 3D-vyn) skriver du **X**, **Y** och **Rotation (°)**, eller klickar på **Vrid 90°**.

Varje flyttning är ett steg i ångra och följer med i Live TeamWork. Objektet behåller sitt artikelnummer, sina bibliotekdata och sin höjd över nivån. Ännu inte byggt: att dra det i 3D-vyn.

## Vad du ska se

- Objektet i modellen, markerat, med sina egenskaper till höger: en ruta **Biblioteksobjekt** med dess licens och källangivelse, och uppsättningarna `CadCraft_Placement`, `CadCraft_LibraryItem`, `CadCraft_Equipment` och, för objekt från märkta ritningar, `CadCraft_SourceAttributes`.
- ”Placerat: *objekt* (objekt *n*)” i ändringslistan. {{key:Mod+Z}} ångrar det.
- Statusraden: ”*Objekt* placerades som objekt *n*.”

## Bra att veta

- Vissa objekt finns i flera storlekar eller alternativ: kortet har då ett val för **Variant**, och det du väljer är det som placeras. Se [Placera och byt ett biblioteksobjekt som har varianter](topic:library-variants).
- Ett objekt utan 3D-kropp (en 2D-symbol) placeras med en ersättningslåda; du anger dess höjd när du tillfrågas.
- Fler av samma: välj ett placerat objekt och använd {{ui:Kopiera}} och {{ui:Klistra in}}, eller {{key:Mod+D}}. Se [Kopiera, klistra in och duplicera biblioteksobjekt](topic:copy-paste).
- För att starta varje placering med väggfångst på, slå på **Börja med väggfångst på** i [BimCraft-inställningar](topic:settings).
- Längder omvandlas till modellens egna enheter, oavsett vilka de är.
- **Entourage** (träd, buskar, människor, bilar) finns också i biblioteket: sök på ”tree”, ”person” eller ”car”. Dessa ritas av CadCraft (CC0) och behåller sina färger när de placeras (en stam brun, löv gröna, en bils fönster genomskinliga), i BimCraft och i andra BIM-program. De visas i [renderade bilder](topic:render).
- I en IFC2X3-fil skrivs kroppen som en facetterad solid; i IFC4 som en triangulerad ytmängd. Båda öppnas i andra IFC-verktyg.
- En ritning (DWG eller DXF) kan inte sparas här, så objekt placeras bara i IFC-modeller. Använd **Denna fil** på en ritning för att se vad dess block skulle bli.

## Objekt på ditt språk

Ett objekt kan ha sitt namn, sin beskrivning och sin typ på andra språk. När det har dem på det språk BimCraft är inställt på (Inställningar › Allmänt › Språk) visar objektets sida dem, med namnet tillverkaren gav det under, och **Placera** skriver namnet på ditt språk in i modellen, så att förteckningen {{ui:Utrustning}} listar det så. Objektet förblir samma objekt: sökningen efter uppdateringar och bytet görs efter objektet självt, aldrig efter dess namn. Objekt utan översättning behåller sina egna ord.

## Vanliga misstag

- **Placeringsknappen saknas.** Ingen IFC-modell är öppen. Öppna en först.
- **Spöket följer inte pekaren.** Pekaren är utanför modellens område, eller våningsplanet är inte i vyn. Klicka på {{ui:Ovan}}.
- **{{ui:Väggfångst}} säger att det inte finns några väggar.** Våningen har inga väggar i IFC:n (vissa exporter lägger väggar på en annan våning). Välj den våningen, eller skriv X och Y.
- **En fils objekt har fel storlek.** Filen saknar enheter, eller anger fel. I {{ui:Filer…}} väljer du enheterna och läser in den igen.

:::tip
Att placera samma objekt två gånger delar en IFC-typ, så en modell med fyrtio stolar lagrar stolen en gång.
:::
