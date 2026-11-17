---
title: Rita bilden med ett annat program
summary: Vår egna strålföljare ritar bilden i Rendera; ett annat program kan bara rita den via ett renderingsmotortillägg i CadCraft Studio. Vad som förs över, och varför vissa program aldrig erbjuds.
keywords: rendera, motor, externt program, tilläggsmotor, studio, bakgrund, kö, usd, gltf, ritad av, blender, gpl
from: 652b413c
---

Bilden i {{ui:Rendera}} ritas av **våra egna motorer**: Snabbt och Strålföljare, i webbläsaren och i CadCraft Studio. Ett annat program kan bara rita den när ett **renderingsmotortillägg** tar hand om det: se [Lägg till en renderingsmotor med ett tillägg](topic:render-engine-addons). För att ta scenen till ett annat program och fortsätta arbeta där, använd [Öppna scenen i ett annat program](topic:render-open-in) eller [Skicka scenen till en spelmotor](topic:render-unreal).

## Rita en bild med ett tilläggs motor

1. Slå på tillägget under Inställningar › Tillägg. Dess motor visas i motorlistan för {{ui:Rendera}}.
2. Välj den. Dess egna inställningar visas under motorlistan.
3. Klicka på {{ui:Rendera}}. I Studio frågar Studio dig i sin egen dialogruta första gången ett tillägg kör ett program. Förloppet visas medan bilden ritas; {{ui:Stoppa}} avslutar den. Bilden visas markerad med motorn som ritade den.

En motor skriven i JavaScript körs även i webbläsaren. En motor som kör ett program på den här datorn körs bara i Studio; i webbläsaren visas den som en fil att spara.

## Vad som förs över

Motorn får ett **paket**: modellen som en USD-fil (och en glTF-fil när den begär en), och en inställningsfil med de exakta materialvärdena, solen och himlen, varje lampa som är på med sin effekt och ljusprofil, kameran och exponeringen. Varje program belyser, tonar och samplar på sitt eget sätt, så bilderna är lika i kamera, sol, lampor och exponering, men inte pixel för pixel.

## Program CadCraft aldrig kör

CadCraft startar aldrig ett program under GNU GPL-licensen, och listar aldrig ett sådant som motor eller som mål för Öppna i. Blender är ett av dem, så det finns inte i motorlistan. En USD- eller glTF-fil som sparats från {{ui:Rendera}} öppnas fortfarande i det, precis som i alla program som läser de filerna.

:::note
Panorama- och stereokameror samt en himmelsbild (himlens färger används i stället) förs inte över till ett annat program. Inget som görs i ett annat program kommer tillbaka till modellen.
:::
