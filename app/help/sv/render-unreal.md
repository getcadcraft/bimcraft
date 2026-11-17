---
title: Skicka scenen till en spelmotor
summary: Studio kan skriva scenen i ett Unreal Engine-projekt och hålla den uppdaterad vid varje sändning; dina egna ändringar ligger i ett lager som CadCraft aldrig skriver. Insticksprogrammet som öppnar den är ännu inte släppt.
keywords: unreal, unreal engine, spelmotor, länk, skicka, usd-scen, projekt, live, cine-kamera, filmrenderingskö
from: 154d55ef
---

I CadCraft Studio kan motorlistan innehålla en **länk** till ett Unreal Engine-projekt. Den går bara åt ett håll: från CadCraft till Unreal.

## Skicka scenen

1. Välj Unreal-posten i motorlistan. Första gången frågar Studio dig efter projektets mapp (den med filen `.uproject`); Studio kommer ihåg den.
2. Klicka på {{ui:Skicka}}. Studio skriver `CadCraft/<filnamn>/` i projektet: scenen som en USD-fil, inställningsfilen, ljusprofiler och två små lagerfiler.
3. Ändra modellen, spara och skicka igen. Endast scenen och inställningsfilen ersätts.

## Dina egna ändringar är säkra

Det Unreal öppnar är en liten rotfil som skapas en gång, med två lager under sig: **ditt** överst (`<name>.user.usda`, tomt från början, skrivs aldrig om av CadCraft) och CadCraft:s scen under. Ändringar du sparar i ditt eget lager finns kvar när scenen skickas igen. Ljus och andra aktörer du placerar i Unreal-nivån ligger utanför det och påverkas inte heller.

## Utan Studio

I webbläsaren, eller på en dator där Studio inte hittar Unreal, välj **Unreal-projektmapp (.zip)** i motorlistan och klicka på {{ui:Rendera}}. Den sparar samma mapp som en zip-fil: packa upp den i projektets mapp `CadCraft`. Lämna **Inkludera scenfilerna** ikryssad första gången; kryssa ur den vid senare sparningar, så att zip-filen bara innehåller scenen och inställningsfilen och ditt eget lager aldrig ersätts.

:::note
Unreal-insticksprogrammet som öppnar scenen, tillämpar solen, lamporna, kamerorna och exponeringen, följer varje sändning och renderar en kamera är **ännu inte släppt** och har inte körts i Unreal. Tills dess lägger Skicka filerna i projektet, och Unreals egna USD-verktyg kan öppna dem. Windows är första systemet; macOS kommer efter.
:::
