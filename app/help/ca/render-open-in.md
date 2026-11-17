---
title: Obre l'escena en un altre programa
summary: Desa l'escena com a fitxer USD o glTF per a qualsevol programa que els llegeixi, o obre-la des de Studio en un programa d'aquest ordinador.
keywords: obre a, usd, gltf, glb, exporta, programa de renderitzat, archviz, studio, usdview, envia, paquet, carpeta unreal
from: 0a6559ee
---

Trieu una entrada **Obre a** de la llista Motor de {{ui:Renderitza}} per portar l'escena a un altre programa. No torna res al model.

## Un fitxer per a qualsevol programa

- **Fitxer USD** desa l'escena com a `.usdc` (o `.usdz` quan el model porta imatges): el [mateix fitxer que Desa com a USD](topic:usd), amb materials, llums i càmeres. Manté les instàncies i els valors exactes dels materials. La majoria de renderitzadors, motors de videojocs i visualitzadors llegeixen USD.
- **Fitxer glTF (.glb)** desa el fitxer glTF 2.0, més lleuger, amb materials, textures i llums; vegeu [Envia el model a un programa de renderitzat](topic:model-for-rendering) per saber què porta i què deixa fora.

- **Carpeta de projecte Unreal (.zip)** desa la carpeta que escriu [Envia l'escena a un motor de videojocs](topic:render-unreal), per a un projecte en qualsevol ordinador.

Els tres funcionen al navegador i a Studio.

## A Studio: obre-la en un programa

Studio mostra els programes que troba en aquest ordinador que poden obrir l'escena: usdview si és al camí de cerca, i el programa propi de l'ordinador per al tipus de fitxer. Trieu-ne un, trieu USD o glTF quan en llegeixi tots dos, i feu clic a {{ui:Renderitza}}. Studio escriu el paquet en una carpeta nova dins de Documents (`CadCraft hand-off`; no se sobreescriu res, cada enviament té la seva carpeta) i inicia el programa amb ell, i després indica on són els fitxers.

| Programa | Llegeix millor |
|---|---|
| usdview | USD |
| El programa propi de l'ordinador | El que tingui l'ordinador per al tipus de fitxer |

Studio només inicia programes d'aquesta llista fixa; no executa res que la pàgina demani pel nom, i mai no inicia un programa amb llicència GNU GPL (vegeu [Dibuixa la imatge amb un altre programa](topic:render-other-program#programs-cadcraft-never-runs)). Qualsevol programa que llegeixi USD o glTF obre el fitxer de **Un fitxer per a qualsevol programa** de dalt.

:::note
Twinmotion, Enscape i altres programes de visualització no són a la llista: CadCraft no els ha comprovat i no n'afirma res. Un fitxer glTF o USD des d'aquí és la via d'entrada; vegeu les notes sobre [renderitzadors de connector](topic:model-for-rendering#enscape-and-other-plug-in-renderers).
:::
