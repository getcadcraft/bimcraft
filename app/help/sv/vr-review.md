---
title: Granska modellen i ett VR-headset
summary: Gå runt i IFC-modellen i full storlek i ett VR-headset: hoppa, vrid dig, mät, skär upp den, placera BCF-ärenden med en bild, se den som en bordsmodell och möt de andra i en live-session.
keywords: vr, virtuell verklighet, vr-glasögon, webxr, xr, uppslukande, quest, oculus, vive, index, pico, gå igenom, genomgång, teleportera, designgranskning, samordning, granskning, mät, sektion, skär, ärende, ärenden, bcf, bordsmodell, skalmodell, närvaro, avatarer, live, tillsammans
from: 8994b36d
---

{{ui:VR}} i verktygsfältet placerar dig inne i modellen med VR-glasögon, i full storlek. Du står där 3D-vyns kamera är, på golvet under den, och tittar åt samma håll. VR-glasögonen visar det 3D-vyn visar: dolda våningsplan, element och modeller förblir dolda, och målade material följer med. Inget laddas upp: webbläsaren ritar upp den på den här datorn (eller i VR-glasögonens egen webbläsare).

## Vad du behöver

- VR-glasögon som webbläsaren kan styra (WebXR): VR-glasögonens egna webbläsare, eller Chrome eller Edge på en dator med VR-glasögon anslutna.
- En IFC-modell öppen, på en säker sida (https), som den är på den här webbplatsen.

När det inte finns några VR-glasögon är {{ui:VR}} nedtonat och säger varför.

## Starta

1. Ställ in 3D-vyn där du vill börja: i ett rum, eller utanför och tittar på byggnaden.
2. Klicka på {{ui:VR}} i verktygsfältet.
3. Sätt på dig VR-glasögonen.

Menyn sitter på baksidan av din vänstra hand. Peka på den med den högra kontrollen och tryck på avtryckaren för att välja en knapp. (Med bara en hand svävar menyn framför den plats du började på.)

## Förflytta dig

- **Hoppa:** i {{ui:Flytta}} pekar du på ett golv och trycker på avtryckaren; du hamnar där. Eller tryck spaken framåt för att sikta, och släpp för att hoppa. Du kan bara landa på golv, bjälklag och mark (ytor som vetter uppåt), aldrig på en vägg.
- **Vrid:** tryck spaken åt vänster eller höger: du vrider dig 30° varje gång.
- **Gå:** i ditt rörelseområde går du bara.

## Mät

Välj {{ui:Mät}} och tryck sedan på avtryckaren på två punkter. Avståndet visas mellan dem, i meter. En punkt nära ett hörn fäster i hörnet.

## Skär upp den

Välj {{ui:Sektion}} och tryck på avtryckaren på en yta:

- på en vägg (eller något som inte är ett golv): allt mellan dig och ytan skärs bort, så att du ser in. Det fungerar bäst utifrån, eller över ett rum;
- på ett golv, uppifrån: ett plansnitt 1.2 m över golvet, så att väggarna visar sin nedre del.

{{ui:Rensa}} tar bort snittet och mätningarna. Om ett [sektionsplan](topic:section-plane) skär modellen när du startar, startar VR-glasögonen med det.

## Placera ett ärende

Välj {{ui:Ärende}} och tryck på avtryckaren där problemet finns. En numrerad nål markerar det, och ärendet läggs i fliken {{ui:Ärenden}} som ett BCF-ämne, med en bild av vad du såg och kameran där du stod, i modellens egna koordinater. Spara dem tillsammans med dina övriga [ärenden](topic:issues-bcf) som en BCF-fil; andra samordningsverktyg öppnar dem i samma vy.

Lägg till en kommentar till ett ärende när du har lämnat VR, i fliken {{ui:Ärenden}}: att skriva i VR-glasögonen finns inte ännu.

## Se den som en bordsmodell

{{ui:Bordsmodell}} krymper modellen så att den får plats på ett bord framför dig; gå runt den, eller vrid den med spaken. {{ui:Full storlek}} flyttar tillbaka dig dit du var.

## Tillsammans med andra, live

I en [live-session](topic:work-live) ser alla i VR de andra som ett huvud och två händer i sin egen färg, med namn, och en prick där var och en pekar. Ändringar som någon gör når dina VR-glasögon inom ett ögonblick. Personer vid skrivbordet visas inte i VR-glasögonen än.

## Lämna

Välj {{ui:Lämna VR}} (eller ta av VR-glasögonen och avsluta där). 3D-vyn på skärmen flyttas dit ditt huvud var.

:::note
Testad med en emulator för VR-glasögon, ännu inte på alla VR-glasögon. En stor modell kan göra att VR-glasögonen hackar: dölj våningsplan eller modeller du inte behöver först ([dölj och isolera](topic:hide-and-isolate)).
:::
