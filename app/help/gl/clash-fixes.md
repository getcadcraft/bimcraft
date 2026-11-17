---
title: Resolver interferencias coas solucións de cada disciplina
summary: Desde os resultados da comprobación de interferencias, Propoñer solucións enumera para cada interferencia o que pode facer cada disciplina: un conduto desviado baixo unha viga, un tubo movido a un lado, un piar movido, unha abertura nunha viga. Cada solución se proba nunha copia do modelo cos seus compromisos, para que vostede a acepte ou rexeite. As solucións aceptadas entran como un único paso de desfacer.
keywords: interferencia, solución de interferencias, resolver interferencias, coordinación, propoñer solucións, reencamiñar, desvío, desprazamento, conduto, tubo, bandexa, viga, piar, abertura, manga, compromiso, disciplina, estrutura, mecánica, fontanaría, electricidade, arquitectura, asistente
from: f7bafdd9
---

## Que vai facer

Converter unha lista de interferencias en decisións. Cada disciplina (estrutura, mecánica, fontanaría, electricidade, arquitectura) propón solucións só para os seus propios elementos, cada proposta compróbase nunha copia do modelo, e vostede escolle.

## Pasos

1. Execute primeiro a comprobación de interferencias. Vexa [Comprobar interferencias](topic:clash-check) e [Comprobar tubaxes e condutos contra a estrutura](topic:mep-against-structure).
2. Baixo os resultados, prema {{ui:Propoñer solucións}}. O panel **Solucións propostas** ábrese xunto ao modelo.
3. Para cada interferencia vexe as propostas de cada disciplina, as mellores primeiro. Cada liña di o que fai e os seus compromisos: se resolve a interferencia, cantas interferencias novas crea, que regras incumpre, canto percorrido engade ou canto se move, cantos accesorios se usan e unha puntuación de custo.
4. Prema {{ui:Mostrar}} para ver os elementos en 3D. Prema {{ui:Aceptar}} na solución que queira (unha por interferencia), ou {{ui:Rexeitar}}.
5. A liña da parte inferior indica o que fan todas as solucións aceptadas xuntas: cantas interferencias se resolven, cantas quedan e se algo novo interfire.
6. Prema {{ui:Aplicar as solucións aceptadas (un paso de desfacer)}}. A comprobación de interferencias execútase de novo. {{ui:Desfacer}} as devolve todas de golpe.

## Que pode facer cada disciplina

- **Mecánica** (condutos, tubos de calefacción e refrixeración): desviar por riba ou por baixo na perna que choca, subir ou baixar todo o percorrido, movelo ao lado, aplanar un conduto rectangular coa mesma superficie.
- **Fontanaría** (auga, desaugadoiros, gas, incendios): os mesmos movementos, excepto que un desaugadoiro por gravidade nunca recibe un desvío; só pode moverse en conxunto, mantendo a súa pendente.
- **Electricidade** (bandexas e canalizacións de cables): os mesmos movementos; unha bandexa debe deixar 150 mm libres por riba para tender o cable.
- **Estrutura**: mover un piar (ata 300 mm), ou unha abertura na alma dunha viga ou nunha laxe para o percorrido que pasa. Cada solución estrutural indica que o enxeñeiro de estruturas a debe aprobar.
- **Arquitectura**: unha manga no muro para o percorrido que pasa, ou mover un muro do que se sabe que non soporta cargas.

## Que debe ver

- As solucións que incumpren unha regra márcanse: máis preto que a marxe de 25 mm respecto a outra cousa, por baixo da liña de altura libre de 2.100 mm, unha abertura na alma da viga maior que o 40 % da súa altura ou demasiado preto dos seus extremos, ou unha viga que cambiaría de ván.
- BimCraft aplica ao modelo as solucións que pode facer: percorridos que debuxou coas ferramentas Tubaxe e Conduto e piares que debuxou. As demais indican **Só consello**: ao aceptalas, engádese unha incidencia na pestana Incidencias.

## Boas a saber

- As solucións proceden de regras integradas na aplicación; non se usa IA para elas.
- Se conecta un asistente (vexa [Deixar que un asistente de IA traballe co seu modelo](topic:assistants)), este pode ler as interferencias e engadir as súas propias propostas para unha disciplina no panel aberto. Compróbanse do mesmo xeito, márcanse co nome do asistente e non se cambia nada ata que as acepte e as aplique.
- A copia compróbase con caixas arredor de cada elemento e de cada perna dun percorrido, así que un percorrido inclinado pode mostrar unha interferencia que a comprobación de interferencias non mostraría. Execute de novo a comprobación de interferencias despois de aplicar: é a última palabra.
- Os límites (canto pode moverse un percorrido, canto pode subir un desvío, a marxe) son os valores predeterminados que aparecen no panel.

## Seguinte

- [Incidencias e ficheiros BCF](topic:issues-bcf)
- [Debuxar percorridos de tubaxes e condutos](topic:pipes-and-ducts)
