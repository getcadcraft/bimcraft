---
title: Bygglovspaketet och myndighetens stödjande handlingar
summary: Samla regelkontrollen, de troliga granskningskommentarerna, modellen och myndighetens lista över stödjande handlingar i en zip-fil, där varje handling är kopplad till bladet eller förteckningen som uppfyller den.
keywords: godkännandeprocess, inlämningsformat, krävda ritningar, bladstorlek, filformat, kopior, regelpaket, bygglov, bygglovspaket, bygglovsinlämning, planprövning, lagstadgad inlämning, stödjande handlingar, checklista, myndighet, kommun, National Building Regulations, granskningskommentarer, saknade handlingar
from: 47dd77ee
---

## Vad du gör

Bygg en zip-fil för en lagstadgad inlämning (när myndighetens lista kommer från ett regelpaket innehåller den också godkännandestegen och inlämningsformatet): ett omslag, de kommentarer en granskare sannolikt kommer att göra (skrivna utifrån kontrollerna, inte gissade), regelrapporten när tillägget Byggregler är på, modellen och listan över stödjande handlingar som din godkännande myndighet begär.

Detta är en guide gjord utifrån modellen. Den registrerade yrkesutövaren och myndigheten avgör vad som krävs och vad som godtas.

## Steg

1. Med en modell öppen, öppna {{ui:Bygglovspaket}} i vänster panel.
2. Skriv in projektets namn, adress och sökande, och lista dina blad och blanketter, ett per rad.
3. Under {{ui:Stödjande handlingar}}, välj {{ui:Myndighetens lista}}. Listorna kommer från regelpaket: lägg till tillägget Byggregler och bocka i paketet för din plats under Inställningar › Byggregler (ett paket kan innehålla reglerna, en godkännandeprocess, ett inlämningsformat, ritningskonventioner och standardnoteringar). Den allmänna listan fungerar utan det.
4. Läs listan. Varje handling är {{ui:Kopplad}} (med bladet och varför), {{ui:Lämnad av dig}}, {{ui:Gäller inte}} eller {{ui:Saknade}}.
5. För ett papper du själv lämnar (en blankett, ett lagfartsbevis, ett avgiftskvitto) välj {{ui:Lämnad av mig}}. För ett objekt som är markerat ”om det gäller” och som inte gör det, välj {{ui:Gäller inte här}}. För att koppla en handling till ett blad själv, välj bladet.
6. Öppna {{ui:Godkännandeprocess}} och {{ui:Inlämningsformat}} under listan för att läsa stegen och vad som ska lämnas in (bladstorlekar, filformat, kopior). En avgift eller tidsram visas bara när paketets källa anger den, med sidan och datumet då den lästes.
7. Klicka på {{ui:Skapa bygglovspaketet (zip)}}. Stegen och formatet finns också på omslaget.

## Hur en handling kopplas

En handling kopplas till ett blad som innehåller rätt sorts vy (en planritning, en fasad, en sektion), till ett blad som innehåller rätt förteckning (dörrförteckningen, för en dörrförteckning), eller till ett blad vars titel säger det (ett blad med titeln ”Situationsplan”). När modellen har raderna men inget blad innehåller förteckningen, eller när tomten är ritad men inget blad har titeln situationsplan, förblir posten saknad och säger varför.

## Bra att veta

- **Varje myndighets lista är ännu inte granskad av en lokal yrkesutövare.** Varje lista lästes från den publicerade källan den anger, på det datum den visar, och skrevs med våra egna ord. Krav ändras: kontrollera myndighetens egna aktuella lista.
- Det som uppsättningen ännu saknar, eller ett blad som inte har rätt storlek, orientering eller skala som paketet kräver, visas i listan Problem som en anteckning. Anteckningar är råd: de stoppar aldrig paketet.
- Saknade handlingar stoppar aldrig paketet. De listas på omslaget och i `04-supporting-documents.csv`.
- Listorna är data, inte kod, i regelpaketen: Sydafrika (National Building Regulations, regel A2), Cape Town (med regionen South Africa tillagd från biblioteket), England (nationella informationskrav), Portland i Oregon, ett UPPDIKTAT undervisningspaket och en allmän lista som inte tillhör någon myndighet. Vem som helst kan skriva ett paket för sin egen plats.
- Dina val sparas i modellen, så de finns där när du öppnar den igen, och varje val är ett steg du kan ångra.

Se även [Blad](topic:sheets) och [Tomten, byggnaden på den och dess nivåer](topic:site-building-and-levels).
