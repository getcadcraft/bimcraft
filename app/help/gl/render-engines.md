---
title: Escoller que programa debuxa a imaxe
summary: A escolla de Motor no diálogo Render: os nosos dous motores, outros programas en CadCraft Studio, e o que fai a web no seu lugar.
keywords: render, motor, renderizador, motor de render, complemento, plug-in, studio, programa externo, debuxado por, cola, motor de complemento
from: 44a1ef5e
---

{{ui:Render}} ten unha escolla **Motor** por enriba de Modo. Os nosos dous motores están sempre aí e funcionan en todas partes; os complementos poden engadir máis, e en CadCraft Studio a lista tamén contén os programas que se fan cargo da escena.

| Motor | Que fai | Onde |
|---|---|---|
| Integrado: Rápido | A imaxe fixa rápida: luz do día, sombras suaves, aspecto de vidro e metal, en segundos | O navegador e Studio |
| Integrado: Trazador de camiños | A luz que rebota entre superficies na tarxeta gráfica ou no procesador, a cola de render e os outros ordenadores da súa rede | O navegador e Studio |
| Motor dun complemento | Debuxa a imaxe e devólvea: ver [Debuxar a imaxe con outro programa](topic:render-other-program) | O navegador (un motor escrito en JavaScript) ou Studio (un motor que executa un programa) |
| Un programa que se fai cargo da escena | Studio pon a escena no seu cartafol e mantena en sintonía | Studio |
| Abrir en … | Garda a escena e ábreaa nun programa; non volve nada: ver [Abrir a escena noutro programa](topic:render-open-in) | A web garda o ficheiro |

## Como se comporta a escolla

- Escoller Rápido ou o Trazador de camiños cambia Modo con el, e á inversa. Nada máis do diálogo cambia para quen nunca usa outro motor.
- Un motor que non está dispoñible permanece na lista co motivo ("non atopado", "precisa unha versión máis nova"); non se pode escoller. No navegador, un motor que só funciona en Studio mostra "garda un ficheiro": {{ui:Render}} entón garda a escena e os seus axustes nun ficheiro que se leva a ese programa.
- A escolla gárdase cos axustes de render do ficheiro, e o último motor escollido é o motor inicial para os ficheiros que non teñen escolla propia.
- Unha imaxe doutro programa indica que programa a debuxou e a súa versión, no diálogo e na cola de render. As promesas da páxina [Render](topic:render) cobren só os **nosos** motores: outro programa ilumina, tonifica e fai as mostras á súa maneira, así que dúas imaxes da mesma escena son parecidas en cámara, sol, lámpadas e exposición, pero non píxel a píxel.

## O que recibe cada motor

A escena vai a outro programa como un **paquete**: o modelo como ficheiro USD (o mesmo ficheiro que escribe [Gardar como USD](topic:usd)), e un ficheiro de axustes que contén o que un importador de USD non é de fiar: os valores exactos dos materiais, as lámpadas que están acesas coa súa potencia e perfís de luz, o sol, o ceo, a exposición e a cámara tal como a debuxaría o diálogo. Non se envía nada a ningún lugar.

## A cola de render

Unha imaxe para outro programa pode esperar en [a cola de render](topic:render#the-render-queue) como as nosas; o seu traballo lembra para que motor é.
