---
title: Behåll tillgångsdata och en underhållslogg i modellen
summary: Använd den överlämnade IFC-modellen för att driva byggnaden: tillverkare, modell, serienummer, garanti och livslängd för utrustning och inredning, samt en logg över utfört underhåll, allt skrivet i IFC-filen.
keywords: överlämning, färdigställandeintyg, slutbesked, som byggt, överlämningspaket, tillgångar, tillgångsregister, fastighetsförvaltning, fm, drift, underhåll, service, garanti, serienummer, streckkod, tillverkare, modell, livslängd, överlämning, cobie, digital tvilling, försenad, förfaller, arbetsorder
from: b84ac492
---

Fliken {{ui:Assets}} i högerpanelen gör den öppna IFC-modellen till en förteckning över byggnadens utrustning. Allt skrivs in i IFC-filen själv, i IFC:s egna egenskapsuppsättningar och uppgifter, så att nästa program som öppnar filen läser det också. Inget laddas upp och ingen server behövs: spara IFC-filen för att behålla den.

## Vad som listas

- Utrustning och inredning: möbler, sanitetsutrustning, belysningsarmaturer, vitvaror, luftdon, ventiler, pumpar, fläktar, pannor, tankar, uttag, elcentraler, hissar och andra sådana element, samt biblioteksobjekt med utrustningsdata.
- Alla andra element du **spårar**: välj det i modellen (en dörr, en vägg, en pump ritad som ett vanligt objekt) och klicka på {{ui:Track picked}}.
- Allt som redan har tillgångsdata eller en underhållsuppgift, skriven här eller av ett annat program.

Det som är försenat kommer först, sedan det som förfaller inom 30 dagar. Filtrera på namn, tagg, tillverkare, modell eller serienummer, på våningsplan, eller markera {{ui:Only overdue or due within 30 days}}.

## Tillgångsdata

Klicka på en tillgång i listan (eller välj den i modellen) för att öppna dess data: tillverkare, modell, modellreferens, serienummer, streckkod, dagen den installerades, garantinummer och dess start- och slutdatum, samt livslängd i år. {{ui:Save the data}} skriver dem i ett steg ({{key:Mod+Z}} ångrar det). Lämna ett fält tomt för att ta bort det värdet.

## Dokument

Under datan visar {{ui:Documents}} manualer, garantier, foton, intyg och ritningar kopplade till tillgången. Välj typ, ge den en titel (eller lämna tom: filnamnet används) och skriv var den finns:

- en **webbadress** (`https://…`): den får en länk {{ui:Open link}}, som öppnas i en ny flik;
- eller ett **filnamn eller en sökväg** (`Manuals/AHU-1.pdf`, `C:\FM\pump.pdf`, en nätverksresurs): behåll filerna bredvid IFC-filen, i samma mapp eller en under den, så att namnen fortfarande fungerar när du lämnar över mappen. BimCraft visar namnet; öppna filen från mappen.

Filerna laddas aldrig upp eller kopieras in i IFC:n: bara länken skrivs. En webbadress med ett lösenord i, och varje länk som varken är en webbadress eller en fil (till exempel `javascript:`), avvisas. {{ui:Remove}} tar bort ett dokument från tillgången (ett steg; {{key:Mod+Z}} ångrar det).

Dokument som ett annat program lagt på elementet visas också. Dokument på elementets **typ** visas på varje element av den typen och säger det; ändra dem där typen skapades.

I IFC är varje dokument en IFC-dokumentreferens kopplad till elementet, med dess typ bevarad i kopplingen, i både IFC4 och IFC2X3.

## Underhållsloggen

Under dokumenten finns {{ui:Record work done}}: dagen det gjordes, arbetet, vem som gjorde det, när det nästa gång förfaller och anteckningar. Varje post är ett steg; {{ui:Edit}} och {{ui:Delete}} ändrar den senare. Den nyaste postens nästa förfallodatum avgör om tillgången är försenad eller förfaller snart.

## Så sparas det i IFC

- Tillverkare och modell i `Pset_ManufacturerTypeInformation`, serienummer, streckkod och installationsdagen i `Pset_ManufacturerOccurrence`, garantin i `Pset_Warranty` och livslängden i `Pset_ServiceLife`, på elementet själv. När elementets typ redan har en tillverkare eller modell visas den tills du skriver din egen.
- Varje underhållspost är en IFC-**uppgift** av underhållstyp, kopplad till elementet, med sina datum (i IFC4 även som uppgiftens egna tider) och en `CadCraft_Maintenance`-uppsättning med dagen, vem som utförde det och nästa förfallodag.
- Värden som andra element delar kopieras först: att ändra en tillgång ändrar aldrig dess grannar.
- I äldre IFC2X3-filer skrivs datumen som text (YYYY-MM-DD); den versionen vill ha en separat datumpost där, vilket BimCraft inte skriver.

## Sensoravläsningar

Öppna {{ui:Sensor values}} och {{ui:Open readings (CSV)…}} för att hämta avläsningar som exporterats från ett styrsystem för byggnaden, en datalogger eller ett kalkylblad:

- **Första kolumnen är tiden**: `2026-10-23 14:05`, `2026-10-23T14:05:00Z`, `2026-10-23T14:05+02:00` eller Unix-sekunder. En tid utan zon läses i datorns egen tidszon. Datum med dagen först, som `23/10/2026`, läses inte (de är tvetydiga); exportera ISO-datum.
- **Varje annan kolumn är en sensor**, med rubriken lika med dess tillgångs **tagg**, **namn** eller **GlobalId**. En rubrik som inte matchar någon tillgång, eller mer än en, listas och utelämnas. Kommatecken, semikolon eller tabbar separerar kolumnerna; med semikolon eller tabbar läses även ett decimalkomma (`21,5`).
- Tider eller värden som inte går att läsa (ett ord, en enhet skriven i cellen) räknas och utelämnas, aldrig gissas.

Den senaste avläsningen visas i listans kolumn {{ui:Reading}} och i tillgångens {{ui:Sensor}}-block, med en **graf** över alla avläsningar (på en telefon väntar graferna tills du trycker på {{ui:Show the chart}}). Ange en **undre och övre gräns** samt en enhet på en tillgång och klicka på {{ui:Save the limits}}: en avläsning utanför dem flaggar tillgången. Markera {{ui:Show on the model}} för att färgsätta varje tillgång efter dess avläsning — blå under dess undre gräns, grön inom gränserna, röd över dess övre gräns, och för tillgångar utan gränser en enda blå skala från lägsta till högsta avläsning — med avläsningen som etikett (upp till 60 etiketter, flaggade först).

**Avläsningar stannar i den här webbläsarfliken**: de sparas inte i IFC och skickas inte någonstans; öppna CSV-filen igen nästa gång. **Gränserna sparas i IFC-filen** (en `CadCraft_Sensor`-uppsättning på elementet: Low, High, Unit), så nästa person som öppnar filen ser samma flaggor.

## Liveavläsningar

{{ui:Live feed}} läser värden när de sker, **direkt från den här webbläsaren till ditt eget system**. Inget går via vår server, och ingenting lagras någonstans utom i din webbläsarflik. Inget ansluts när en fil öppnas: bara {{ui:Connect}} gör det.

- **MQTT över WebSockets**: adressen till meddelandemäklarens WebSocket-lyssnare (`wss://broker.example.com:8884/mqtt`), och ett eller flera ämnen med `{tag}` där tillgångens tagg ska stå, till exempel `site/{tag}/temperature` (BimCraft prenumererar på `site/+/temperature` och läser taggen från varje meddelandes ämne). Ämnen utan `{tag}` anger sensorn själv. Ett meddelande är antingen ett vanligt tal (`21.5`) eller JSON, till exempel `{"value": 21.5, "time": "2026-10-23T14:05:00Z"}` (ange {{ui:Value field in JSON}} om ditt fält heter något annat).
- **Fråga en adress (HTTP)**: en webbadress som ditt styrsystem eller ett litet skript svarar på, och som frågas var femte sekund eller oftare (minst 5 sekunder). Den kan svara med JSON nycklad på tagg (`{"AHU-1": 21.5}`), en JSON-lista (`[{"tag": "AHU-1", "value": 21.5}]`) eller en CSV med avläsningar som ovan. Svarar den inte väntar BimCraft dubbelt så länge innan nästa fråga, upp till fem minuter.

Varje avläsning går till den tillgång vars tagg, namn eller GlobalId den anger, precis som en CSV-kolumn; namn som inte matchar någon tillgång listas. Avläsningarna går in i {{ui:Sensor values}}: listan, graferna, gränserna och färgerna i modellen fungerar på samma sätt.

**Ditt lösenord eller din token** skrivs för en enda anslutning: den lämnas till anslutningen och rutan töms; den sparas aldrig i den här webbläsaren eller i IFC:n. En token skickas som en standardrubrik `Authorization: Bearer`, och inga cookies skickas.

{{ui:Keep these settings in the IFC}} skriver adressen, ämnena, värdefältet och hur ofta det ska frågas in i modellen (en `CadCraft_Feed`-uppsättning på projektet; det finns inget fält för ett lösenord), så att nästa person som öppnar filen bara skriver sin egen inloggning och klickar på {{ui:Connect}}. Lägg inte ett lösenord eller en nyckel i själva adressen: en adress med användarnamn och lösenord i avvisas.

:::note
**Vad din meddelandemäklare eller adress behöver.** En webbsida i en webbläsare kan bara prata med en server som tillåter det:
- Sidan är säker (https), så webbläsaren ansluter bara till `wss://`- och `https://`-adresser — utom på din egen dator (`localhost`), där `ws://` och `http://` fungerar för test.
- En HTTP-adress måste tillåta förfrågningar från den här sidan (CORS: rubriken `Access-Control-Allow-Origin`, och `Authorization` bland de tillåtna rubrikerna om du använder en token).
- De flesta meddelandemäklare (Mosquitto, EMQX, HiveMQ och andra) erbjuder en WebSocket-lyssnare; den är ofta avstängd tills den slås på. BimCraft talar MQTT 3.1.1.
:::

Det finns **inga larm** när BimCraft är stängt: gränserna flaggar en tillgång bara medan modellen är öppen med ett flöde anslutet. Att övervaka en byggnad dygnet runt kräver en server, vilket BimCraft inte kör.

## COBie-kalkylblad

**COBie** är överlämningskalkylbladet som många ägare och förvaltningsteam begär (publicerat av National BIM Standard i USA; BS 1192-4 i Storbritannien). Öppna {{ui:COBie spreadsheet}} i fliken:

- {{ui:Save as COBie (.xlsx)}} skriver COBie 2.4-bladen — Contact, Facility, Floor, Space, Type, Component, System, Job, Document och Attribute — från modellen och tillgångsdatan: byggnaden, dess våningsplan och rum (areor från modellens kvantiteter), varje tillgång som komponent med dess serienummer, installationsdag, garantistart, tagg och streckkod, dess typ med tillverkare, modell, livslängd och garantilängd, systemen den ingår i, underhållsloggen som jobb och de länkade dokumenten. Varje komponent bär elementets IFC GlobalId. Skriv din e-postadress för COBies kolumn ”created by”, eller lämna den tom (då står det n/a). Värden som modellen inte har står **n/a**; kategorikolumnerna bär IFC-klassen, inte en OmniClass-kod.
- {{ui:Read a COBie spreadsheet…}} läser tillbaka ett, från BimCraft eller ett annat program, och **listar varje ändring först**: vilken tillgång, vilket värde, från vad till vad, och nya dokument. {{ui:Apply}} skriver dem alla i ett steg ({{key:Mod+Z}} ångrar det). Rader matchas på GlobalId, sedan på komponentens namn. Rader som inte matchar något i modellen listas, läggs inte till.

Ett kalkylblad behandlas som ej betrott: formler läses eller körs aldrig (bara det värde som senast sparades i cellen), ett värde som skulle få en garanti att sluta före den börjar och en dokumentlänk som varken är en webbadress eller ett filnamn utelämnas och räknas, och mycket stora arbetsböcker avvisas. COBies jobb är en typs planerade arbete, så de skrivs ut men läses inte tillbaka. I kalkylbladet BimCraft skriver markeras text som ett kalkylblad kan ta för en formel (börjar med `=`, `+`, `-` eller `@`) som text.

Arbetsboken är i våra tester kontrollerad mot en oberoende kalkylbladsläsare; den har inte granskats av en COBie-validerare. Om ett mottagande team kör en sådan, berätta för oss vad den säger.

## Överlämningsdokument

Papper som går till ägaren med den färdiga byggnaden hör till projektet, inte till en enskild tillgång. Öppna {{ui:Handover documents}} på fliken {{ui:Assets}}:

1. {{ui:Add a document}}, välj dess typ (färdigställandeintyg, slutbesked, garanti, manual, ritningar som utförda, annat), och skriv dess titel, utfärdandedatum, vem som utfärdade det och dess referensnummer.
2. Ange var det finns: en webbadress, ett filnamn som ligger bredvid IFC-filen, eller {{ui:Attach a file}}.
3. {{ui:Add to the list}}. {{ui:Edit}} och {{ui:Remove}} ändrar listan; varje ändring är ett steg som du kan ångra.

{{ui:Build the handover package}} laddar ner en zip-fil: en försättssida som listar varje dokument, samma lista som ett kalkylblad, COBie-arbetsboken (dokumenten finns på dess Document-blad, som rader om Facility), modellen och varje bifogad fil. Ett färdigställande- eller slutbesiktningsintyg som ännu inte finns i listan namnges på försättssidan; paketet byggs ändå.

Modellen i paketet är **den som-byggt-modellen**: den anger vilka element som mättes på plats. Med den, i mappen `as-built`: uttalandet, en lista över varje element med dess verifieringsstatus, ritningsuppsättningen som den ser ut nu som en PDF (ritningarna som byggt) och ritningsändringsloggen när modellen har utfärdat uppsättningar. Se [Markera element som kontrollerade eller verifierade på plats](topic:verification).

- I IFC-filen är varje dokument en IfcDocumentInformation kopplad till projektet (IfcRelAssociatesDocument), med sin titel, referens, datum, utfärdare och plats, så att andra program listar det.
- En bifogad fil registreras med namn, storlek och SHA-256. För att behålla filen självt med projektet, använd {{ui:Save the project as a bundle}} (en .ccbundle innehåller modellen och de bifogade filerna; öppnar du den får du tillbaka dem, var och en kontrollerad mot sin post). Ett vanligt spara frågar vilket du vill ha.
- En vanlig .ifc behåller posten, inte filen: efter att du öppnat den, använd {{ui:Attach the file again}}. Samma fil känns igen; en annan fil ersätter posten.

## CSV

{{ui:CSV}} sparar varje tillgång med sina data, varje underhållspost och varje dokument, en rad var, för ett kalkylblad eller ett annat underhållsprogram.

:::note
Finns inte ännu: en värdbaserad tjänst som behåller avläsningar och skickar larm när BimCraft är stängt, och läsning av COBies jobb tillbaka. Se [Finns inte ännu](topic:not-built-yet).
:::
