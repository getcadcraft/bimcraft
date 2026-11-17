---
title: O plano eléctrico
summary: Coloque tomas, interruptores, luces, sensores, caixas de conexión e cadros eléctricos no plano cos mesmos símbolos que o complemento Eléctrico de CadCraft, ligue os interruptores coas luces que acenden e liste os dispositivos e os circuítos nos cuadros.
keywords: eléctrico, plano eléctrico, toma, base de enchufe, dobre, interruptor, de tres vías, regulador, luz, luz de teito, luz empotrada, downlight, sensor de movemento, caixa de conexión, cadro eléctrico, cadro de distribución, circuíto, carga, watts, amperes, derivación de interruptor, cuadro de dispositivos, cuadro de cadros eléctricos
from: f7de1947
---

## O que vai facer

Debuxe o plano eléctrico da casa no modelo: tomas, interruptores e cadros eléctricos nos muros, e luces e sensores no teito. Cada dispositivo é un elemento eléctrico real no ficheiro IFC, coa súa etiqueta, o seu circuíto e a súa carga, e os interruptores lembran as luces que acenden.

## Colocar dispositivos

1. Nun nivel, abra {{ui:Compilación}} e escolla {{ui:Eléctrico}}.
2. Escolla o dispositivo: tomas (enerxía, datos, teléfono, audio e vídeo), interruptores e sensores (tamén un termostato e un temporizador), luces, detectores e alarmas, unha caixa de conexión, un cadro eléctrico ou un subcadro.
3. Escriba un **Circuíto** se o coñece (calquera nome: 1, 2, A-3). Deixe **Altura de montaxe** en branco para a altura habitual dese dispositivo.
4. Faga clic no plano. As tomas, os interruptores e os cadros van na cara do muro máis próximo, mirando cara ao cuarto; as luces, os sensores e as caixas de conexión van no teito, onde fai clic.

Os dispositivos etiquétanse ao colocalos: **R** para as tomas, **S** para os interruptores, **L** para as luces, **M** para os sensores de movemento, **J** para as caixas de conexión e **P** para os cadros eléctricos. Os dispositivos situados nun muro móvense con el cando move o muro.

Prefire buscar por imaxe? Abra a **Paleta de símbolos** desde {{ui:Compilación}} para atopar un dispositivo polo nome, marque con estrela os que usa e colóqueo cun só clic: vexa [A paleta de símbolos](topic:symbol-palette).

## Ligar interruptores a luces

1. Escolla un interruptor (ou un sensor de movemento) e faga clic en **Ligar luces** en {{ui:Propiedades}}.
2. Faga clic en cada luz que acende. Faga clic de novo nunha luz ligada para desligala.
3. Prema {{key:Enter}} ou faga clic en **Feito**.

O plano debuxa unha curva a trazos desde o interruptor a cada unha das súas luces. En {{ui:Propiedades}} dunha luz móstrase que interruptores a acenden.

## O cuarto onde está un dispositivo

Cada dispositivo sabe en que cuarto está. Un dispositivo nun muro está no cuarto ao que mira; un dispositivo de teito está no cuarto que ten debaixo. {{ui:Propiedades}} mostra **Cuarto**, e o cuadro **Dispositivos eléctricos** ten unha columna **Cuarto** (número e nome, como 101 Cociña).

Mantense ao día: cambie o nome ou o número do cuarto, mova o dispositivo ou mova un muro, e o cuarto actualízase no mesmo paso. Un dispositivo na cara exterior dun edificio, ou nun espazo que non é un cuarto, indica que non está nun cuarto.

O cuarto tamén se escribe no ficheiro, no conxunto de propiedades `CadCraft_Location` do dispositivo (Room, RoomNumber, RoomName), para que Buscar, Colorear por propiedade e un cuadro de etiquetas o poidan usar, e tamén outro programa. Os símbolos de planta e os elementos ligados a un símbolo reciben o mesmo conxunto; vexa [Paleta de símbolos](topic:symbol-palette).

## Deixe que o seu asistente os coloque

Cun asistente conectado (Configuración › Asistentes, con edicións permitidas), pode pedir dispositivos con palabras: "poña unha toma dobre cada 2 m ao longo dos muros da sala, a 300 mm do chan, no circuíto 3", ou "engada unha luz de teito co seu interruptor preto da porta". O asistente usa cinco ferramentas: `devices_add`, `device_change`, `lights_set`, `devices_delete` e `devices_list`. Crean os mesmos dispositivos que a ferramenta Eléctrico, nos mesmos muros e cos mesmos etiquetas, circuítos, cargas e alturas, e cada chamada é un paso de desfacer.

Un dispositivo nunca recibe un tipo que a ferramenta Eléctrico non ten: un tipo descoñecido recházase e o asistente recibe a lista. Unha toma ou un interruptor deben estar a menos de 600 mm dunha cara de muro, como nun clic; se non, a chamada recházase e non se coloca nada. As alturas por defecto están en milímetros: 300 para as tomas e 1100 para os interruptores. Un dispositivo de teito pende do teito.

## Cambiar e listar

Escolla un dispositivo para cambiar a súa etiqueta, o circuíto, a carga (watts) e a altura de montaxe. Escolla varios para poñelos todos nun mesmo circuíto dunha vez. Prema {{key:Delete}} para eliminar un; unha luz eliminada sae dos seus interruptores.

En {{ui:Cuadros}} escolla **Dispositivos eléctricos** para ver cada dispositivo co seu nivel, circuíto, carga, altura e as luces que acende cada interruptor, ou **Circuítos** para ver os dispositivos de cada circuíto, a carga total e a corrente. Ambos están tamén na folla de cuadros do conxunto de debuxos: vexa [Alzados, seccións e follas](topic:sheets).

:::note
As alturas de montaxe e as cargas son valores por defecto de planificación (unha toma a 16" do chan e 200 W, un interruptor a 48", unha luz de teito 60 W), non un deseño: o electricista ou o enxeñeiro dimensiona os circuítos e comproba o cumprimento da normativa.
:::

:::tip
Os símbolos son os que o complemento Eléctrico de CadCraft debuxa nos planos de instalación, así que un plano de calquera das dúas aplicacións se le igual.
:::
