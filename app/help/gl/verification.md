---
title: Marcar elementos como comprobados ou verificados en obra
summary: Un elemento lido dun PDF ou dunha dixitalización non está verificado ata que o comprobes. Marca elementos como comprobados, ou como verificados en obra (LOD 500) con quen os mediu, cando e como, e entrega un modelo as-built que indique cal é cal.
keywords: non verificado, verificado, comprobado, verificado en obra, as-built, lod 500, peche, entrega, medido en obra, cinta métrica, láser, dixitalización, levantamento, edificio existente, reforma, marcar como comprobado, verificación, fase 7
from: df35d908
---

## Que farás

Levar conta do que alguén realmente revisou no modelo. Un elemento ten unha de tres marcas, ou ningunha:

- **Non verificado**: o programa o recoñeceu dun PDF, dun debuxo escaneado, dun debuxo calcado ou dunha dixitalización de nube de puntos. Ninguén o comprobou aínda.
- **Comprobado**: unha persoa o comparou co debuxo do que procede.
- **Verificado en obra (LOD 500)**: unha persoa o mediu en obra. Quen, cando e como consérvanse con el.
- **Sen marca**: debuxado por unha persoa. O modelo non fai ningunha afirmación sobre el.

## Pasos

1. Escolle un elemento ou varios (muros, portas, xanelas, cuartos, calquera elemento).
2. En {{ui:Propiedades}}, abre {{ui:Verificación}}.
3. Escribe quen o comprobou ou mediu. A data é a de hoxe, salvo que a cambies.
4. Fai clic en {{ui:Marcar como comprobado}}. Para unha medición en obra, escolle como se mediu (cinta métrica, medidor de distancia láser, dixitalización, levantamento) e fai clic en {{ui:Marcar como verificado en obra (LOD 500)}}.
5. {{ui:Marcar como sen verificar}} e {{ui:Quitar a marca}} desfán o cambio. Cada clic é un paso que podes desfacer, para toda a selección.

Para marcar unha selección rapidamente: {{ui:Ferramentas}} › {{ui:Marcar como comprobado}} (escrito: `MARKCHECKED`) márcaa como comprobada por ti, hoxe.

## Que deberías ver

- No plano, un elemento non verificado ten unha caixa de trazos e un "?"; un verificado en obra ten unha marca de visto. Desmarca {{ui:Mostrar as marcas de verificación na planta}} na sección {{ui:Auditoría}} para ocultalas.
- {{ui:Cuadros}} › {{ui:Verificación}} lista cada elemento marcado co seu nivel, estado, quen, cando, como e de onde procede.
- A auditoría lista os elementos non verificados e conta un elemento verificado en obra como LOD 500. Consulta [Auditar o modelo](topic:audit-the-model).

## Desde unha dixitalización

Cando comparas unha dixitalización co modelo, {{ui:Marcar os elementos coincidentes como verificados en obra}} marca cada elemento que a dixitalización viu como construído dentro da tolerancia, co método "dixitalización" e a tolerancia na nota. Consulta [Comparar unha dixitalización co modelo](topic:compare-scan-with-model).

:::warning
Esa comparación fai coincidir a caixa de cada elemento con puntos da dixitalización. Non é un levantamento. Úsaa para elementos que tamén miraches.
:::

## O modelo as-built e o paquete de entrega

{{ui:Construír o paquete de entrega}} na lapela {{ui:Activos}} pon o modelo as-built no zip, con:

- unha declaración no proxecto de cantos elementos están verificados en obra, comprobados, non verificados e sen marcar;
- `as-built/verified-elements.csv`: cada elemento e cuarto co seu estado, quen, cando e como;
- `as-built/as-built-drawings.pdf`: o conxunto de debuxos tal como está agora;
- o rexistro de cambios dos debuxos, cando o modelo emitiu conxuntos.

Consulta [Activos e mantemento](topic:assets-and-maintenance).

## Como se conserva no IFC

Cada elemento marcado leva o conxunto de propiedades `CadCraft_Verification`: State, By, On, Method, Source, Note e LevelOfDevelopment (`LOD 500` mentres está verificado en obra). Son propiedades de texto plano, así que outros programas as listan, e Buscar, Colorear por propiedade e os cuadros con etiquetas poden usalas. A declaración as-built é o conxunto de propiedades `CadCraft_AsBuilt` no proxecto. Un elemento sen ese conxunto non foi medido en obra.

## Seguinte

- [Muros a partir dun conxunto de planos](topic:walls-from-plans)
- [Auditar o modelo](topic:audit-the-model)
