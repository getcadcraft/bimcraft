---
title: Tegn billedet med et andet program
summary: Vores egen path tracer tegner billedet i Render; et andet program kan kun tegne det via en renderingsmotor-add-on i CadCraft Studio. Hvad der overføres, og hvorfor nogle programmer aldrig tilbydes.
keywords: render, motor, eksternt program, add-on-motor, studio, baggrund, kø, usd, gltf, tegnet af, blender, gpl
from: 652b413c
---

Billedet i {{ui:Render}} tegnes af **vores egne motorer**: Hurtig og Path tracer, i browseren og i CadCraft Studio. Et andet program kan kun tegne det, når en **renderingsmotor-add-on** leverer det: se [Tilføj en renderingsmotor med en add-on](topic:render-engine-addons). For at tage scenen med til et andet program og fortsætte arbejdet dér bruger du [Åbn scenen i et andet program](topic:render-open-in) eller [Send scenen til en spilmotor](topic:render-unreal).

## Tegn et billede med en add-on's motor

1. Slå add-on'en til i Indstillinger › Add-ons. Dens motor vises i motorlisten i {{ui:Render}}.
2. Vælg den. Dens egne indstillinger vises under motorlisten.
3. Klik på {{ui:Render}}. I Studio spørger Studio dig i sin egen dialog, første gang en add-on kører et program. Fremskridt vises, mens den tegner; {{ui:Stop}} afslutter den. Billedet vises markeret med den motor, der tegnede det.

En motor skrevet i JavaScript kører også i browseren. En motor, der kører et program på denne computer, kører kun i Studio; i browseren vises den som en fil, der kan gemmes.

## Hvad der overføres

Motoren får en **pakke**: modellen som en USD-fil (og en glTF-fil, når den beder om en), og en indstillingsfil med de præcise materialeværdier, solen og himlen, hver lampe der er tændt med sin effekt og lysprofil, kameraet og eksponeringen. Hvert program belyser, justerer tonerne og sampler på sin egen måde, så billederne er ens i kamera, sol, lamper og eksponering, men ikke pixel for pixel.

## Programmer CadCraft aldrig kører

CadCraft starter aldrig et program under GNU GPL-licensen og opfører aldrig et sådant som motor eller som mål for Åbn i. Blender er et af dem, så den står ikke på motorlisten. En USD- eller glTF-fil gemt fra {{ui:Render}} kan stadig åbnes i det, som i ethvert program, der læser de filer.

:::note
Panorama- og stereokameraer og et himmelbillede (himlens farver bruges i stedet) overføres ikke til et andet program. Intet, der gøres i et andet program, kommer tilbage til modellen.
:::
