---
title: Rumsytskikt och ytskiktsförteckningar
summary: Ange vad som täcker golv, väggar och tak i varje rum, lägg till zoner som ett kaklat stänkskydd, och få ytskiktsförteckningar per rum, vägg och zon med areor, kakelantal inklusive skurna kakel och underlagsvolymer.
keywords: ytskikt, ytskiktsförteckning, rumsytskikt, golvytskikt, väggytskikt, takytskikt, socklar, kakel, plattor, skurna plattor, kakelantal, spill, underlag, avjämningsbruk, bakskiva, puts, zon, stänkskydd, dado, våtutrymme, interiör, mängder
from: 8c30498c
---

## Vad du gör

Berätta för BimCraft en gång vad varje rum är ytskiktat med. Ytskiktsförteckningarna visar då areorna, kakel att beställa och underlagsvolymerna, och de ändras med modellen.

## Steg

1. Slå på {{ui:Draw}}, öppna **Förteckningar** i den vänstra panelen och klicka på **Rumsytskikt**.
2. Under **Ytskiktstyper** klickar du på **Lägg till en ytskiktstyp**. Ge den ett namn, en typ (Kakel, Ark, Bestrykning eller Skiva) och en tjocklek. För ett kakel anger du kakelns längd och bredd, fogen och ett spillutrymme i procent. Om något ligger under ytskiktet (ett avjämningsbruk, en bakskiva, ett putsskikt) namnger du det under **Underlag** och anger dess tjocklek.
3. Under **Rum** väljer du golv-, vägg- och takytskikt för varje rum. Skriv ett sockelnamn och dess höjd om rummet har en socklar.
4. Under **Zoner** klickar du på **Lägg till en zon** för en del av ett rum som får ett annat ytskikt:
   - en **vägg**zon är ett band mellan två höjder ovanför golvet (ett kaklat stänkskydd från 0 till 1200, en dado). Den finns på alla väggar i rummet, eller så väljer du rummets väggar i modellen och klickar på knappen **På** för att begränsa den till dem;
   - en **golv**- eller **takzon** är en yta som du skriver in. Den dras av från rummets eget ytskikt.
5. Klicka på **Spara**. Det är ett steg i Ångra. Längder skrivs in i projektets enheter.

## Förteckningarna

Fyra poster går med i listan över förteckningar:

- **Ytskikt per rum**: varje rum med sitt golv-, vägg- och takytskikt, deras areor, och socklarna med deras längd.
- **Ytskikt per vägg**: varje sträcka av vägg på ett rums sida och det band av den som ett ytskikt täcker, med dess längd, bruttoarea, avdrag, nettoarea och, för kakel, hela kakel, skurna kakel och kakel att beställa.
- **Ytskikt per zon**: varje zon med sitt ytskikt, nettoarea, kakel och underlagsvolym.
- **Ytskiktsmängder**: en rad per ytskikt: nettoarea, hela och skurna kakel, kakel att beställa, underlaget och dess volym, samt ytskiktets egna volym.

Gruppera, summera, spara och exportera dem som vilken förteckning som helst: se [Layouta, spara och exportera en förteckning](topic:schedule-layouts). Klicka på en siffra för att markera vad den kommer från: avdragen för en vägg markerar dess dörrar och fönster.

## Så mäts ytskikt

- **Väggar**: varje sträcka av vägg på rummets sida, dess längd längs rummet gånger den höjd ytskiktet täcker, minus den del av varje dörr och fönster som ligger inom den höjden. En vägg som är lägre än rummet ytskiktas upp till sin egen överkant. Projektets mätmetod avgör vilka öppningar som är för små för att dras av ([Förteckningar](topic:plan-schedules-and-pdf)).
- **Golv och tak**: rummet innanför dess väggytor, minus öar i det.
- **Socklar**: rummets vägglängd minus bredden på dess dörrar.
- **Kakel**: läggs ut som ett rutnät från ett hörn av ytan, med en fog mellan kakel. Ett kakel som helt ligger på ytan är ett helt kakel; ett kakel som delvis ligger på den (vid en kant, runt en öppning) är ett skuret kakel. Kakel att beställa är hela plus skurna, plus spillutrymmet, avrundat uppåt. Varje skuret kakel räknas som ett nytt kakel: avskärningar återanvänds inte.
- **Underlagsvolym**: nettoarean gånger underlagets tjocklek.
- Ett antal markerat **≈** räknas ut från arean i stället för att läggas ut kakel för kakel: en yta med en inritad zon dragen från den, eller en mycket stor yta.

## Bra att veta

- Ytskikten sparas i byggnadsfilen (egenskapsuppsättningen `CadCraft_Finishes` på projektet). Varje rum som har ett ytskikt får också den standardiserade IFC-egenskapsuppsättningen `Pset_SpaceCoveringRequirements`, så att andra program läser namnen.
- Kakelläggningen börjar i ett hörn. En läggning centrerad i rummet, ett mönster (fiskben, förband) och återanvändning av avskärningar beräknas inte.
- En krökt vägg, och en rumsgräns som inte är en vägg (en rumsavskiljare), listas som **Annan gräns** med sin längd och inga öppningar.
- Posten **Ytskikt** som fanns tidigare listar ytskiktsskikten för väggtyperna; **Skikt: area och volym** listar varje skikt för varje skiktad typ. Rumsytskikten här läggs på rummet ovanpå dem.
- En assistent kan ställa in ytskikt åt dig med `finishes_set`: se [Låt en AI-assistent arbeta med din modell](topic:assistants).
