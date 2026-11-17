---
title: Gennemgå modellen i et VR-headset
summary: Gå rundt i IFC-modellen i fuld størrelse i et VR-headset: hop rundt, drej, mål, skær den op, placér BCF-emner med et billede, se den som en bordmodel og mød de andre i en live-session.
keywords: vr, virtual reality, headset, webxr, xr, immersiv, quest, oculus, vive, index, pico, gå igennem, rundtur, teleportér, designgennemgang, koordinering, gennemgang, mål, snit, udsnit, emne, emner, bcf, bordmodel, skalamodel, tilstedeværelse, avatarer, live, sammen
from: 8994b36d
---

{{ui:VR}} på værktøjslinjen sætter dig inde i modellen med et VR-headset, i fuld størrelse. Du står, hvor 3D-visningens kamera er, på gulvet under det, og vender samme vej. Headsettet viser det, 3D-visningen viser: skjulte etager, elementer og modeller forbliver skjult, og malede materialer følger med. Intet uploades: browseren tegner det på denne computer (eller i headsettets egen browser).

## Hvad du skal bruge

- Et headset, browseren kan styre (WebXR): et selvstændigt headsets egen browser, eller Chrome eller Edge på en pc med et headset tilsluttet.
- En IFC-model åben på en sikker side (https), som den er på dette site.

Når der ikke er noget headset, er {{ui:VR}} nedtonet og siger hvorfor.

## Start

1. Sæt 3D-visningen op, hvor du vil starte: i et rum, eller udenfor og kigge på bygningen.
2. Klik på {{ui:VR}} på værktøjslinjen.
3. Tag headsettet på.

Menuen sidder på bagsiden af din venstre hånd. Peg på den med højre controller og tryk på aftrækkeren for at vælge en knap. (Med kun én hånd svæver menuen foran det sted, du startede.)

## Bevæg dig rundt

- **Hop:** i {{ui:Flyt}} peger du på et gulv og trykker på aftrækkeren; du lander der. Eller skub joysticket fremad for at sigte, og slip for at hoppe. Du kan kun lande på gulve, dæk og terræn (flader, der vender opad), aldrig på en væg.
- **Drej:** skub joysticket til venstre eller højre: du drejer 30° hver gang.
- **Gå:** i dit spilleområde går du bare.

## Mål

Vælg {{ui:Mål}}, og tryk derefter på aftrækkeren på to punkter. Afstanden vises mellem dem, i meter. Et punkt nær et hjørne fanger hjørnet.

## Skær den op

Vælg {{ui:Snit}} og tryk på aftrækkeren på en flade:

- på en væg (eller noget, der ikke er et gulv): alt mellem dig og fladen skæres væk, så du kan se ind. Det virker bedst udefra eller på tværs af et rum;
- på et gulv, set ovenfra: et plansnit 1.2 m over det gulv, så væggene viser deres nedre del.

{{ui:Ryd}} fjerner snittet og målingerne. Hvis et [snitplan](topic:section-plane) skærer modellen, når du starter, starter headsettet med det.

## Placér et emne

Vælg {{ui:Emne}} og tryk på aftrækkeren, hvor problemet er. En nummereret nål markerer det, og emnet kommer ind i fanen {{ui:Emner}} som et BCF-emne, med et billede af det, du så, og kameraet, hvor du stod, i modellens egne koordinater. Gem dem sammen med resten af dine [emner](topic:issues-bcf) som en BCF-fil; andre koordineringsværktøjer åbner dem i samme visning.

Tilføj en kommentar til et emne, efter du forlader VR, i fanen Emner: at skrive i headsettet er ikke lavet endnu.

## Se den som en bordmodel

{{ui:Bordplade}} skrumper modellen, så den passer på et bord foran dig; gå rundt om den, eller drej den med joysticket. {{ui:Fuld størrelse}} sætter dig tilbage, hvor du var.

## Sammen med andre, live

I en [live-session](topic:work-live) ser alle i VR de andre som et hoved og to hænder i deres egen farve, med deres navn, og en prik, hvor hver enkelt peger. Redigeringer, som nogen foretager, når dit headset på et øjeblik. Folk ved skrivebordet vises ikke i headsettet endnu.

## Afslut

Vælg {{ui:Forlad VR}} (eller tag headsettet af og afslut der). 3D-visningen på skærmen flytter sig dertil, hvor dit hoved var.

:::note
Testet med en headset-emulator, endnu ikke på alle headsets. En stor model kan få headsettet til at hakke: skjul først de etager eller modeller, du ikke har brug for ([skjul og isolér](topic:hide-and-isolate)).
:::
