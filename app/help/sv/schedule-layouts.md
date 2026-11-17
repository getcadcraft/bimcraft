---
title: Layouta, spara och exportera en förteckning
summary: Gruppera en förteckning, ge den delsummor och summor, lägg till en kolumn som läses från en egenskap, spara den som en uppsättning i filen, och exportera den som kalkylbok (.xlsx), som text att klistra in i ett onlinekalkylblad eller som CSV. Kontorsstandarden fyller i det som en förteckning inte anger.
keywords: förteckningslayout, gruppera efter, delsumma, summa, rubriker, kontorsstandard, standardpolicyer, uppsättning, dörrförteckning per våning, brandklass, beslag, xlsx, arbetsbok, onlinekalkylblad, klistra in, csv, export, kalkylblad, element, välj från förteckning, siffra
from: 95dfd801
---

## Vad du gör

Gör en vanlig förteckning till den som ditt kontor utfärdar: grupperad per nivå, typ eller rum, med delsummor och en summa, med de kolumner du behöver, under sitt eget namn. Skicka den sedan till ett kalkylblad. Varje rad och varje siffra känner fortfarande till de element den kommer från.

## Steg

1. Slå på {{ui:Draw}} och öppna **Förteckningar** i den vänstra panelen. Välj en förteckning, till exempel **Dörrar**.
2. Ovanför tabellen väljer du **Gruppera efter** (en kolumn i förteckningen, till exempel Nivå eller Typ, eller **Ingen gruppering**) och **Summor** (**Inga summor**, **En summa** eller **Delsummor och en summa**). **Som inställt** lämnar valet till den sparade uppsättningen eller till kontorsstandarden.
3. För att lägga till en kolumn som läses från elementen skriver du ett egenskaps- eller taggnamn under tabellen (till exempel `FireRating`, `Pset_DoorCommon.FireRating` eller namnet på en tagg, såsom `Ironmongery`) och klickar på **Lägg till kolumn**. BimCraft läser elementets egna egenskapsuppsättningar först, sedan dess typs. När inget element har ett värde ännu säger den det; kolumnen fylls av sig själv när ett värde sätts.
4. Skriv ett namn (till exempel "Dörrförteckning per våning") och klicka på **Spara som uppsättning**. Uppsättningen sparas i byggnadsfilen och går med i förteckningslistan under sitt namn. Den följer varje ändring i modellen. **Ta bort uppsättningen** tar bort den igen. Båda är ett steg i Ångra.

## Klicka på en siffra för att markera vad den kommer från

Klicka på en rad eller på en enskild siffra för att markera de bakomliggande elementen i planen och i 3D:

- en rad markerar elementen på den raden;
- en delsumma eller en summa markerar allt den adderar, och en grupprubrik markerar sin grupp;
- en siffra med egna element markerar dem: **Avdragen** för en väggtyp markerar dess dörrar och fönster, och ett rums väggarea markerar dess väggar.

Samma sak fungerar i ett dokument gjort av modellen: klicka på en siffra i förteckningen i förhandsvisningen.

## Export

- **Ladda ner Excel** sparar en .xlsx-arbetsbok. Längder, areor, volymer och antal är riktiga tal i den enhet kolumnen visar (fot och tum förblir text). Ett andra blad, **Element**, listar för varje rad GlobalId:na för elementen bakom den.
- **Kopiera för Google Sheets** lägger förteckningen på urklipp som tabbavgränsad text. I ett Google Sheet klickar du på cell A1 och klistrar in. **Öppna ett nytt Google Sheet** öppnar `sheets.new`, Googles egen adress för ett tomt kalkylblad, i ditt eget Google-konto. BimCraft loggar inte in på Google och skickar ingenting dit: inklistringen är din.
- **Ladda ner CSV** sparar tabellen så som den är uppställd på skärmen.

## Kontorsstandarden

Ett kontor kan ange en gång hur dess förteckningar ska layoutas. Slå på tillägget **Default Policies** ([Default Policies](topic:default-policies)) och ange, under **Inställningar › Global › Default Policies › Förteckningslayout (kontorsstandarden)**:

| Regel | Vad den gör |
|---|---|
| Gruppera förteckningar efter | Nivå, Typ, Rum eller ingen gruppering, för varje förteckning som har en sådan kolumn |
| Summor i förteckningar | Inga summor, en summa i slutet, eller en delsumma under varje grupp och en summa |
| Förteckningens titel | Ett mönster, till exempel `{project}: {schedule}` |
| Kolumnrubriker | Som skrivet, I VERSALER eller Med versaler |

Standarden gäller alla förteckningar, oavsett vem som ställer in dem: de vanliga förteckningarna i panelen, en sparad uppsättning, en förteckning som en assistent ställer in, exporterna och förteckningarna i ett dokument. En uppsättning som anger egen gruppering, egna summor eller egen titel behåller dem; standarden fyller i resten. Panelen anger vilka delar kontorsstandarden satte. Reglerna följer med i Default Policies-filen tillsammans med de övriga.

## Bra att veta

- En uppsättning anger sin källförteckning och sina kolumner; den innehåller inga tal. Talen läses från modellen varje gång.
- Listor som inte är rader av element (väggsammansättningarna och materialförklaringen) har ingen layout och ingen export här.
- En assistent kan göra allt detta åt dig: se [Låt en AI-assistent arbeta med din modell](topic:assistants).
