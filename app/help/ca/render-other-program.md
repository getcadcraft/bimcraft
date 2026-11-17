---
title: Dibuixa la imatge amb un altre programa
summary: El nostre propi traçador de camins dibuixa la imatge de Renderitza; un altre programa només la pot dibuixar mitjançant un complement de motor de renderitzat a CadCraft Studio. Què es transfereix i per què alguns programes mai no s'ofereixen.
keywords: renderitza, motor, programa extern, motor de complement, studio, segon pla, cua, usd, gltf, dibuixat per, blender, gpl
from: 652b413c
---

La imatge de {{ui:Renderitza}} la dibuixen **els nostres motors propis**: Ràpid i el Traçador de camins, al navegador i a CadCraft Studio. Un altre programa només la pot dibuixar quan la porta un **complement de motor de renderitzat**: vegeu [Afegeix un motor de renderitzat amb un complement](topic:render-engine-addons). Per portar l'escena a un altre programa i seguir treballant-hi, useu [Obre l'escena en un altre programa](topic:render-open-in) o [Envia l'escena a un motor de videojocs](topic:render-unreal).

## Dibuixa una imatge amb el motor d'un complement

1. Activeu el complement a Configuració › Complements. El seu motor apareix a la llista Motor de {{ui:Renderitza}}.
2. Trieu-lo. Les seves pròpies opcions es mostren sota la llista Motor.
3. Feu clic a {{ui:Renderitza}}. A Studio, la primera vegada que un complement executa un programa, Studio us pregunta en el seu propi diàleg. El progrés es mostra mentre dibuixa; {{ui:Atura}} l'atura. La imatge apareix marcada amb el motor que l'ha dibuixada.

Un motor escrit en JavaScript també s'executa al navegador. Un motor que executa un programa en aquest ordinador només s'executa a Studio; al navegador apareix com a fitxer per desar.

## Què es transfereix

El motor rep un **paquet**: el model com a fitxer USD (i un fitxer glTF quan el demana), i un fitxer de configuració amb els valors exactes dels materials, el sol i el cel, cada llum encesa amb la seva potència i el seu perfil de llum, la càmera i l'exposició. Cada programa il·lumina, tonalitza i mostreja a la seva manera, així que les imatges s'assemblen en càmera, sol, llums i exposició, però no píxel a píxel.

## Programes que CadCraft mai no executa

CadCraft mai no inicia un programa amb llicència GNU GPL, i mai no el mostra com a motor ni com a destí de l'opció Obre a. Blender n'és un, així que no és a la llista Motor. Un fitxer USD o glTF desat des de {{ui:Renderitza}} encara s'hi obre, com en qualsevol programa que llegeixi aquests fitxers.

:::note
Les càmeres de panoràmica i estèreo i una imatge de cel (s'usen els colors del cel en el seu lloc) no es transfereixen a un altre programa. Res del que es fa en un altre programa torna al model.
:::
