---
title: Mostrar e ocultar pisos, espazos e arestas
summary: Desactive pisos para ver o interior dun edificio, mostre cuartos e espazos e active ou desactive as liñas das arestas.
keywords: pisos, niveis, andares, ocultar, illar, cuartos, espazos, ifcspace, arestas, visibilidade, sección
from: b838dcc0
---

## Que vai facer

Vexa o interior dun modelo IFC desactivando os pisos situados por riba do que lle interesa, despois mostre os cuartos e os espazos, e desactive as liñas das arestas para un aspecto máis limpo.

## Pasos: ver un piso

1. Abra un modelo IFC. Vexa [Abrir un modelo IFC e ver en 3D](topic:open-ifc-model).
2. Busque a lista {{ui:Pisos}} á esquerda. O piso máis alto vai primeiro, como ao ler unha sección de arriba cara abaixo.
3. Desmarque a cuberta e todos os pisos por riba do piso que quere ver.
4. Prema {{ui:Superior}} para mirar cara abaixo ao piso.
5. Marque de novo os pisos para repoñelos.

## Que debe ver

Cada piso que desmarca desaparece de inmediato, con todo o que contén. A lista só mostra os pisos que teñen algo visible. Os elementos que non están asignados a ningún piso agrúpanse como **Non está nun piso** na parte inferior; os elementos do terreo e algún mobiliario adoitan caer aí.

## Pasos: mostrar cuartos e espazos

1. Prema {{ui:Espazos}} na barra de ferramentas sobre o modelo. O botón queda premido.
2. Mire o modelo: os cuartos e espazos aparecen como volumes pálidos e transparentes.
3. Prema un espazo para ler as súas propiedades, como o nome, o número e a superficie, á dereita.
4. Prema de novo {{ui:Espazos}} para ocultalos.

Os espazos ocúltanse ao abrir un modelo porque, se non, taparían os muros e os pisos.

## Pasos: arestas

1. Prema {{ui:Arestas}} para desactivar as liñas finas das arestas.
2. Prémao de novo para volver activalas.

Nos modelos moi grandes (máis de 1,5 millóns de triángulos) o botón aparece en gris coa indicación "As arestas están desactivadas para modelos moi grandes". Así aforrase memoria.

## Erros comúns

- **Desmarcar un piso e seguir vendo partes del.** Un elemento pertence ao piso que lle asignou o programa que exportou o ficheiro. Un muro alto ou unha escaleira adoitan pertencer só ao piso base, así que se manteñen cando se oculta o piso de arriba, ou desaparecen co piso de abaixo.
- **Ocultar pisos para ver o interior.** Unha caixa de sección adoita ser máis rápida: vexa [Cortar un modelo IFC cun plano de sección](topic:section-plane#a-section-box). Tamén pode desmarcar filas na {{ui:Árbore do modelo}} (vexa [Orientarse coa árbore do modelo](topic:model-tree)).
- **Facer clic nun espazo a través dun muro.** O clic escolle a superficie visible máis próxima. Oculte o piso de arriba, ou cambie a {{ui:Superior}}, e despois faga clic.
- **Os nomes dos pisos parecen raros.** BimCraft mostra os nomes de pisos gardados no ficheiro. Se din "Nivel 1" ou un número, iso é o que escribiu o exportador.
