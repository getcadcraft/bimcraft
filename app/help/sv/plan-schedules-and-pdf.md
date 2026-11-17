---
title: Förteckningar, måttsättning och en PDF av planen
summary: Dörr-, fönster-, vägg- och rumsförteckningar som ändras när du ritar, måttsättning i planen, och planen för en nivå sparad som PDF i en standardskala.
keywords: förteckning, dörrförteckning, fönsterförteckning, väggförteckning, rumsförteckning, kvantiteter, mängdavtagning, area, csv, kalkylblad, måttsättning, mått, skriva ut, pdf, plotta, skala, 1/4", 1:50, ark
from: d97cd16e
---

## Det här gör du

Se vad byggnaden du ritat blir till medan du ritar: hur många dörrar och fönster av varje storlek, hur mycket vägg av varje typ, hur stort varje rum är. Sätt måttsättning i planen och spara den som PDF för att skriva ut eller skicka.

## Förteckningar

Med {{ui:Rita}} på visar **Förteckningar** i vänstra panelen en tabell i taget:

- **Dörrar** och **Fönster**: var och en med sin beteckning (D1, D2 … och W1 …, angivna när du placerar dem), sin typ, bredd, höjd (och tröskel), nivå och väggen den sitter i.
- **Väggar efter typ**: för varje väggtyp, hur många väggar, deras tjocklek, deras totala längd och deras sidoarea som **Bruttoarea**, **Avdrag** och **Nettoarea**, med en summa.
- **Rum**: nummer, namn, nivå, area och omkrets, med den totala arean.
- **Golv**: varje golv med sin nivå, typ och tjocklek, och dess bruttoarea, avdrag och nettoarea.
- **Ytskikt**: varje ytskiktslager på väggtyperna (efter material och väggens sida) och taken, med antalet ytor samt brutto, avdrag och netto.
- **Väggtyper: mängdavtagningsdata**: vad som angavs en gång för varje väggtyp (enhet, bruk, sats), med antalet väggar, deras längd och nettoarea, och satsen gånger den uppmätta kvantiteten. Se [Väggkonstruktioner](topic:wall-assemblies).

- **Ytskikt per rum**, **Ytskikt per vägg**, **Ytskikt per zon** och **Ytskiktskvantiteter**: vad som täcker varje rum, med areor, antal plattor inklusive skär och underlagsvolymer. Se [Rumsytskikt och ytskiktsförteckningar](topic:room-finishes).
- Egna **uppsättningar**: en förteckning du grupperat, summerat och sparat under ett namn. Se [Lägg upp, spara och exportera en förteckning](topic:schedule-layouts).

Tabellerna ändras med varje redigering. Klicka på en rad, eller på en enskild siffra, för att välja de element den kommer från. **Ladda ner CSV** sparar tabellen, för att öppna i ett kalkylblad; **Ladda ner Excel** och **Kopiera för Google Sheets** finns under den. **Rumsytskikt** och **Specifikation** ([Skriv specifikationen från modellen](topic:specification)) öppnas från samma ställe.

## Area och volym för varje lager

Välj **Lager: area och volym** i listan för Förteckningar. Den har en rad för varje lager i varje väggtyp, golvtyp, taktyp och undertakstyp som används: elementet, typen och dess LOD, lagret (räknat från väggens utsida, eller från golvets, takets eller undertakets översida), dess material och funktion, dess tjocklek, hur många element, **nettoarean** och **volymen**.

- Arean är nettoarean för elementen av den typen, mätt precis som i Väggar efter typ, Golv och Ytskikt, enligt projektets mätmetod. Ett tak mäts på lutningen; ingen mätmetod har en regel för tak.
- Volymen är den arean gånger lagrets egna tjocklek.
- Ett golv, tak eller undertak utan typ är en rad: ett lager av sin egen tjocklek.
- En luftspalt listas med sin area och utelämnas från den totala volymen. Ett membran har en area och ingen volym.

Klicka på en rad för att välja dess element. **Ladda ner CSV** sparar tabellen.

## Hur areor mäts

Varje area är tre tal som summeras: brutto minus avdrag är netto. Regeln står skriven ovanför var och en av dessa tabeller, och det är en och samma regel: förteckningarna, kvantiteterna som sparas i IFC-filen och mängdavtagningen som lämnas till TakeoffCraft använder alla den.

- **En vägg**: brutto är en yta av väggen, dess längd längs mittlinjen gånger dess höjd (den verkliga ytan för en vägg med formad överkant eller underkant). Varje dörr, fönster och annan öppning avräknas, bredd gånger höjd, en gång var.
- **Ett golv eller ett tak**: brutto är arean innanför dess kontur. Varje öppning och urtag inuti den avräknas en gång.
- **Ett väggytskikt**: varje ytskiktslager på väggtypen täcker en yta av väggen, mätt som väggen, med samma öppningar avräknade. Ett ytskikt är ett lager av väggen: det listas under Ytskikt och läggs inte till väggarean, så en vägg med en dörr räknas aldrig två gånger.

Det är **CadCraft-standarden**: varje öppning avräknas, oavsett storlek; väggars längd mäts längs mittlinjen; infällningar mäts inte. Det är vad varje projekt använder tills du väljer en annan metod.

## Välj en mätmetod

Ovanför förteckningen listar **Mätmetod** de metoder som följer med BimCraft, och **Läs in en metodfil** tar in ditt kontors egen. Valet sparas i IFC-filen, som ett steg i ångra, och tre saker följer det samtidigt: förteckningarna, nettokvantiteterna som sparas i filen och mängdavtagningen som lämnas till TakeoffCraft. Regeln ovanför varje tabell börjar då med metoden, dess källa, datumet då källan lästes och orden **Ej granskad av en kvantitetsingenjör**.

En metod är en liten fil med fakta, inte programkod. För varje kvantitet anger den:

- **den minsta öppning som avräknas**: till exempel stannar en öppning på 0.5 m² eller mindre i väggarean;
- **hur väganslutningar mäts**: längs mittlinjen; eller med en vägg som slutar mot en annan mätt till den väggens yta; eller med varje väggände som möter en annan vägg mätt till den närmaste ytan;
- **om infällningar mäts** för ett ytskikt (ytskiktets vikningar in i öppningarna), som en area eller, när de är grunda, som en längd. Infällningens djup tas som hälften av väggens tjocklek;
- **vad den säger om murverk**: hur det mäts, och eventuella spill- eller bruksmån den anger.

Metoderna som följer med BimCraft:

| Metod | Väggar: minsta öppning som avräknas | Väggytskikt | Tak | Murverk |
|---|---|---|---|---|
| CadCraft-standard | varje öppning | varje öppning | varje urtag | inga påslag |
| RICS NRM 2 (Storbritannien), 2:a upplagan 2021 | 0.5 m² eller mindre stannar kvar | 1 m² eller mindre stannar kvar | 1 m² eller mindre stannar kvar | efter area; inga procentsatser anges |
| AAQS Standard Method for Africa 2015 | 0.5 m² eller mindre stannar kvar | 0.5 m² eller mindre stannar kvar | 0.5 m² eller mindre stannar kvar | efter area; mätt netto, 0 % spill |
| IS 1200 (Indien), 1976, tegelmurning | 0.1 m² eller mindre stannar kvar | standard (se nedan) | standard | efter volym |
| BIA Technical Note 10 (USA), 2009 | varje öppning | standard | standard | 5 % spill på enheter, 15 % på bruk |

Läs dessa begränsningar innan du lita på en metod:

- **Ingen kvantitetsingenjör har granskat någon av dem.** Var och en gjordes genom att läsa den angivna källan och registrera dess siffror med den klausul de kommer från. Om du är kvantitetsingenjör och kan granska en, vill appens skapare gärna höra från dig.
- Där en regel inte kunde läsas i källan säger metoden **inte bekräftad** för den, och CadCraft-standarden används. Ingen metod som följer med BimCraft har en bekräftad regel för väganslutningar, infällningar eller golv, så de mäts på standardsättet under alla.
- IS 1200 avräknar öppningar i murbruk i tre band. En metodfil kan ännu inte innehålla band, så väggytskikt använder standarden under den metoden, och regeln säger det.
- Den sydafrikanska standarden System of Measuring Building Work ingår **inte** bland dem: dess text kunde inte läsas. AAQS-metoden för Afrika säger att den byggdes på 1991 års upplaga av det systemet, men det är ett annat dokument.
- BIA Technical Note 10 är en branschanteckning för kalkylering, inte en standardmätmetod.
- En öppning som är exakt den minsta storleken följer metodens egna ord (”inte överstigande”, ”mindre än”). Storlekar inom 2 delar på 10 000 av den räknas som exakt den.
- Under en metod följer filens nettoarea för en vägg och nettoarea för ett golv eller tak metoden, och kvantitetsuppsättningen anger den. Bruttoareorna och volymerna i filen står kvar som ritade.

**Anteckningar om denna metod**, under väljaren, säger vad varje källa lämnar öppet. **Öppna källan** går till dokumentet.

### Ditt kontors egen metod

En metodfil är JSON i formatet `cadcraft-measurement-method`. Varje värde i den anger den klausul det kommer från; ett värde utan klausul avvisas. Filen kontrolleras när du läser in den, ett felaktigt fält anges med namn, och inget används från en fil som inte klarar kontrollen. När den väl valts sparas filen i projektet, så att projektet öppnas likadant på en annan dator. Dess id är ett enkelt namn du själv väljer (det får inte vara id för en metod som följer med appen).

## Tegel, block och bruk

**Väggtyper: mängdavtagningsdata** räknar enheterna och bruket för varje väggtyp vars enhet har en längd och en höjd (se [Ge en typ dess mängdavtagningsdata](topic:wall-assemblies#give-a-type-its-takeoff-data)). Det här är formlerna, exakt så som de beräknas:

- **Enheter per area av ett skikt** = 1 / ((enhetslängd + fog) × (enhetshöjd + fog)). Ett tegel på 215 × 65 mm med en 10 mm fog: 1 / (225 × 75 mm) = 59.26 per m².
- **Enhetsbredder över ett skikt** = (skiktets tjocklek + fog) / (enhetsbredd + fog), avrundat till ett heltal, minst 1. Ett 102.5 mm skikt av 102.5 mm tegel är 1; en 215 mm vägg av samma tegel är 2.
- **Enheter** = enheter per area × enhetsbredder över × nettoarean av väggytan, summerat över typens murskikt.
- **Enheter att beställa** = enheter × (1 + spill % / 100), avrundat uppåt till en hel enhet. Spillet är det som anges på typen; utan något angivet, metodens, om den anger ett; annars 0 %.
- **Bruk** = nettoarea × skiktets tjocklek, minus enheternas volym (enheter × längd × höjd × bredd), sedan plus den extra procentandel som anges på typen för skålning eller perforering, sedan plus metodens påslag om den anger ett. Det behöver enhetsbredden.

Vad som antas: varje murskikt i en typ är byggt av typens en enhet; ett skikt tjockare än en enhetsbredd räknas som så många enhetsbredder, var och en som ett skikt lagt på längden, så att kapade enheter, slutstenar och specialformer inte räknas separat; där inget lager är bockat som byggt av enheten tas kärnlagren som skikt, och noten ovanför tabellen säger det. **Mängd** är satsen gånger det satsen gäller per, vilket nu också kan vara en enhet att beställa, 1000 enheter att beställa eller en m³ bruk.

Beteckningar är elementens IFC-märkning: ändra en i **Egenskaper** (Märkning) och förteckningen följer. För varje IFC-modell, ritad eller inte, lägger [Summera kvantiteter, lista element och förteckna utrymmen](topic:quantity-totals) ihop vilken egenskap som helst.

## Måttsättning

Planen visar varje ritad väggs längd längs dess utsida (en innervägg: längs en sida) och, för en vägg med dörrar eller fönster, en kedja från hörnen till varje öppning. {{ui:Måttsättning}} i modellfältet döljer dem och visar dem igen.

## Spara planen som PDF

1. Visa den nivå du vill ha och ställ in enheterna i panelen **Nivåer**.
2. Klicka på {{ui:Skriv ut}} i modellfältet.
3. BimCraft sparar ”<fil> — <nivå>.pdf”: planen i svartvitt i den största standardskala som får plats på sidan (1/4" = 1'-0", 1/8" = 1'-0" … på Letter i fot och tum; 1:50, 1:100 … på A4 i millimeter), med väggarna ifyllda, dörrar, fönster, rumsnamn och areor, måttsättning och en titelrad med nivån, filen, skärhöjden, datumet och skalan.

PDF:en ritas som linjer och text, så den förblir skarp vid varje zoomnivå och dess text kan sökas.

## Bra att veta

- Förteckningarna listar det ritningsverktygen skapade. Dörrar och fönster från ett annat program visas i Kvantitetssummor i stället.
- För att prissätta jobbet lämnar du kvantiteterna till TakeoffCraft: se [Kvantiteter till TakeoffCraft](topic:takeoff). CSV-nedladdningen finns kvar för ett kalkylblad.
