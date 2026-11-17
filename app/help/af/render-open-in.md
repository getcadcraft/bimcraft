---
title: Maak die toneel oop in 'n ander program
summary: Stoor die toneel as 'n USD-lêer of 'n glTF-lêer vir enige program wat hulle lees, of maak dit vanaf Studio oop in 'n program op hierdie rekenaar.
keywords: maak oop in, usd, gltf, glb, uitvoer, weergeerprogram, archviz, studio, usdview, stuur, oorhandiging, pakket, Unreal-vouer
from: 0a6559ee
---

Kies 'n **Maak oop in**-inskrywing in die Enjin-lys van {{ui:Weergee}} om die toneel na 'n ander program te neem. Niks kom terug na die model nie.

## 'n Lêer vir enige program

- **USD-lêer** stoor die toneel as `.usdc` (of `.usdz` wanneer die model prente dra): dieselfde lêer as [Stoor as USD](topic:usd), met materiale, lampe en kameras. Dit behou instansiëring en die presiese materiaalwaardes. Die meeste weergeerders, speletjie-enjins en kykers lees USD.
- **glTF-lêer (.glb)** stoor die ligter glTF 2.0-lêer met materiale, teksture en lampe; sien [Stuur die model na 'n weergeeprogram](topic:model-for-rendering) vir wat dit dra en uitlaat.

- **Unreal-projekvouer (.zip)** stoor die vouer wat [Stuur die toneel na 'n speletjie-enjin](topic:render-unreal) skryf, vir 'n projek op enige rekenaar.

Al drie werk in die blaaier en in Studio.

## In Studio: maak dit oop in 'n program

Studio lys die programme wat dit op hierdie rekenaar vind wat die toneel kan oopmaak: usdview as dit op jou soekpad is, en die rekenaar se eie program vir die lêertipe. Kies een, kies USD of glTF waar dit albei lees, en klik {{ui:Weergee}}. Studio skryf die pakket in 'n nuwe vouer onder Dokumente (`CadCraft hand-off`; niks word oorskryf nie, elke stuur kry sy eie vouer) en begin die program daarop, en sê dan waar die lêers is.

| Program | Lees die beste |
|---|---|
| usdview | USD |
| Die rekenaar se eie program | Wat die rekenaar ook al vir die lêertipe het |

Studio begin net programme van hierdie vaste lys; dit loop nie enigiets wat die bladsy by naam vra nie, en dit begin nooit 'n program onder die GNU GPL-lisensie nie (sien [Teken die prent met 'n ander program](topic:render-other-program#programs-cadcraft-never-runs)). Enige program wat USD of glTF lees, maak die lêer oop uit **'n Lêer vir enige program** hierbo.

:::note
Twinmotion, Enscape en ander visualiseringsprogramme is nie in die lys nie: CadCraft is nie met hulle getoets nie en maak geen bewering oor hulle nie. 'n glTF- of USD-lêer vanaf hier is die roete in; sien die notas oor [inprop-weergeerders](topic:model-for-rendering#enscape-and-other-plug-in-renderers).
:::
