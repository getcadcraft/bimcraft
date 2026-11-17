---
title: Liveabilden
summary: En panel bredvid modellen som visar den i realtidsutseende, med sol, skuggor och studsljus, och som följer varje ändring du gör. Gå genom den och ställ in tiden på dygnet och månaden.
keywords: liveabild, realtid, realtidsrendering, genomgång, gå igenom, förstapersonsvy, presentation, kund, andra skärmen, andra fönstret, bildskärm, tid på dygnet, sol, årstid, månad, skuggor, omgivningsocklusion, reflektioner, studsljus, global belysning, webgpu, webgl
from: ea5c02bf
---

Liveabilden visar modellen i realtidsutseende: himlen och solen utifrån din tomts plats och datum, solens skuggor, färgerna och materialen du gav elementen, lampor och ljus som studsar mot väggar och golv. Den följer det du gör. Vrider du 3D-vyn vrider den sig också, och ändrar du modellen visar den ändringen strax efteråt. Inget laddas upp.

Den ritar samma scen, färger, lampor och sol som [Rendera en bild](topic:render). För en färdig bild använder du den.

## Öppna den

1. Öppna en modell och välj {{ui:Liveabild}} i verktygsfältet. Panelen öppnas över appen, nere till höger.
2. Dra i namnlisten för att flytta den, dra i hörnet för att göra den större.
3. {{ui:Liveabild i ett nytt fönster}} (knappen bredvid) eller {{ui:Nytt fönster}} i panelen flyttar den till ett eget fönster, för en andra skärm. Om din webbläsare blockerar popup-fönster öppnas den som panel.
4. {{ui:Stäng}} stänger den.

## Reglagen

| Reglage | Vad det gör |
|---|---|
| {{ui:Följ vyn}} | På: liveabilden tittar dit 3D-vyn tittar. När du går stängs den av |
| {{ui:Vandra}} | Gå genom modellen (nedan) |
| {{ui:Tyngdkraft}} | När du går: stå på golv och gå i trappor. Av: flyg |
| {{ui:Tid}} | Timmen på dygnet. Solen rör sig när du drar |
| {{ui:Månad}} | Månaden, så att du kan se solen på vintern och på sommaren |
| {{ui:Kvalitet}} | {{ui:För den här datorn}}, eller {{ui:Låg}}, {{ui:Medel}} eller {{ui:Hög}} |

Raden längst ner säger vad som ritar vyn (WebGPU eller WebGL 2), kvaliteten och studsljuset.

## Gå genom modellen

1. Vrid 3D-vyn dit du vill stå och välj {{ui:Vandra}}. Du står på golvet under vyns ögonpunkt, 1.6 m lång.
2. Klicka i liveabilden och använd {{key:W}} {{key:A}} {{key:S}} {{key:D}} eller piltangenterna. Håll {{key:Shift}} för att springa. Dra för att titta runt.
3. Steg upp till 40 cm klättras (trappor). Allt högre är en vägg. Väggar stoppar dig och du glider längs dem.
4. Med {{ui:Tyngdkraft}} av flyger du: {{key:E}} går upp, {{key:Q}} ner.
5. {{key:Esc}} avslutar gåendet.

## Studsljus

Ljus som studsar från en solbelyst vägg ner på golvet, och den mörkare insidan av ett rum, räknas ut i bakgrunden på alla processorkärnor. Medan det räknar står {{ui:Studsljus: 40 %}} på raden längst ner. När det är klart tar vyn emot det. Efter en ändring börjar det om.

:::note
Det här är en approximation för en liveabild, inte en renderad bild. Små detaljer mellan punkterna får studsljuset från de punkter som ligger närmast.
:::

:::note
Webbläsare skiljer sig åt. Där webbläsaren har WebGPU använder liveabilden det. Annars använder den WebGL 2 och ser likadan ut. Saknar webbläsaren båda säger panelen det.
:::
