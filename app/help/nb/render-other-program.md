---
title: Tegn bildet med et annet program
summary: Vår egen stråleføringsmotor tegner Render-bildet. Et annet program kan bare tegne det gjennom et rendermotor-tillegg i CadCraft Studio. Her står hva som overføres, og hvorfor noen programmer aldri tilbys.
keywords: render, motor, eksternt program, tillegg-motor, studio, bakgrunn, kø, usd, gltf, tegnet av, blender, gpl
from: 652b413c
---

Bildet i {{ui:Render}} tegnes av **våre egne motorer**: Rask og Stråleføring, i nettleseren og i CadCraft Studio. Et annet program kan bare tegne det når et **rendermotor-tillegg** leverer det. Se [Legg til en rendermotor med et tillegg](topic:render-engine-addons). For å ta scenen med til et annet program og fortsette arbeidet der, bruk [Åpne scenen i et annet program](topic:render-open-in) eller [Send scenen til en spillmotor](topic:render-unreal).

## Tegn et bilde med et tillegs motor

1. Slå på tillegget i Innstillinger › Tillegg. Motoren vises i motorlisten i {{ui:Render}}.
2. Velg den. Dens egne innstillinger vises under motorlisten.
3. Klikk {{ui:Render}}. I Studio spør Studio deg i sin egen dialogboks første gang et tillegg kjører et program. Fremdrift vises mens det tegner. {{ui:Stop}} avslutter det. Bildet vises merket med motoren som tegnet det.

En motor skrevet i JavaScript kjører også i nettleseren. En motor som kjører et program på denne datamaskinen, kjører bare i Studio. I nettleseren vises den som en fil du kan lagre.

## Hva som overføres

Motoren får en **pakke**: modellen som en USD-fil (og en glTF-fil når den ber om en), og en innstillingsfil med de nøyaktige materialverdiene, solen og himmelen, hver lampe som er på med sin effekt og lysprofil, kameraet og eksponeringen. Hvert program belyser, tonelegger og prøver på sin egen måte. Bilder er derfor like i kamera, sol, lamper og eksponering, men ikke piksel for piksel.

## Programmer CadCraft aldri kjører

CadCraft starter aldri et program under GNU GPL-lisensen, og lister aldri et slikt som motor eller mål for Åpne i. Blender er ett av dem, så det finnes ikke i motorlisten. En USD- eller glTF-fil lagret fra {{ui:Render}} åpnes fortsatt der, som i ethvert program som leser disse filene.

:::note
Panorama- og stereokameraer og et himmelbilde overføres ikke til et annet program. Himmelens farger brukes i stedet. Ingenting gjort i et annet program kommer tilbake til modellen.
:::
