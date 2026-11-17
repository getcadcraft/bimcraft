---
title: Tria quin programa dibuixa la imatge
summary: L'opció Motor del diàleg Renderitza: els nostres dos motors, altres programes a CadCraft Studio, i què fa la web en canvi.
keywords: renderitza, render, motor, renderitzador, motor de renderitzat, connector, studio, programa extern, dibuixat per, cua, complement, motor de complement
from: 44a1ef5e
---

{{ui:Renderitza}} té una opció **Motor** sobre {{ui:Mode}}. Els nostres dos motors sempre hi són i funcionen a tot arreu; els complements en poden afegir més, i a CadCraft Studio la llista també conté els programes que s'encarreguen de l'escena.

| Motor | Què fa | On |
|---|---|---|
| Integrat: {{ui:Ràpid}} | La imatge ràpida: llum del dia, ombres suaus, aspecte de vidre i metall, en segons | El navegador i Studio |
| Integrat: Traçador de camins | Llum que rebota entre superfícies a la targeta gràfica o al processador, la cua de renderitzat i els altres ordinadors de la xarxa | El navegador i Studio |
| El motor d'un complement | Dibuixa la imatge i la torna: vegeu [Dibuixa la imatge amb un altre programa](topic:render-other-program) | El navegador (un motor escrit en JavaScript) o Studio (un motor que executa un programa) |
| Un programa que s'encarrega de l'escena | Studio posa l'escena a la seva carpeta i la manté al dia | Studio |
| Obre a … | Desa l'escena i l'obre en un programa; no torna res: vegeu [Obre l'escena en un altre programa](topic:render-open-in) | La web desa el fitxer |

## Com es comporta l'elecció

- Triar Ràpid o el Traçador de camins canvia Mode amb ell, i a la inversa. La resta del diàleg no canvia per a qui mai no fa servir un altre motor.
- Un motor que no és disponible es queda a la llista amb el motiu ("no trobat", "cal una versió més nova"); no el podeu triar. Al navegador, un motor que només funciona a Studio mostra "desa un fitxer": {{ui:Renderitza}} llavors desa l'escena i la seva configuració en un fitxer que porteu a aquell programa.
- L'elecció es desa amb la configuració de renderitzat del fitxer, i el darrer motor triat és el motor inicial per als fitxers que no en tenen cap de propi.
- Una imatge d'un altre programa indica quin programa l'ha dibuixada i la seva versió, al diàleg i a la cua de renderitzat. Les promeses de la pàgina [Renderitza](topic:render) només cobreixen els **nostres** motors: un altre programa il·lumina, tonalitza i mostreja a la seva manera, així que dues imatges d'una mateixa escena s'assemblen en càmera, sol, llums i exposició, però no píxel a píxel.

## Què rep cada motor

L'escena va a un altre programa com a **paquet**: el model com a fitxer USD (el mateix fitxer que escriu [Desa com a USD](topic:usd)), i un fitxer de configuració que conté el que un importador USD no es pot fiar de transferir: els valors exactes dels materials, els llums que estan encesos amb la seva potència i els seus perfils de llum, el sol, el cel, l'exposició i la càmera tal com la dibuixaria el diàleg. No es puja res enlloc.

## La cua de renderitzat

Una imatge per a un altre programa pot esperar a [la cua de renderitzat](topic:render#the-render-queue) igual que les nostres; la seva tasca recorda per a quin motor és.
