---
title: Comezar un edificio novo
summary: Crear un modelo de edificio en branco cos seus niveis, debuxar os seus muros, colocar elementos da biblioteca e gardalo como IFC.
keywords: novo, edificio novo, en branco, baleiro, comezar desde cero, plantilla, niveis, pisos, andares, crear, modelo
from: 546b8ae8
---

## O que vai facer

Comece un modelo de edificio desde cero en vez de abrir un. BimCraft crea un modelo IFC en branco cun proxecto, un emprazamento, o edificio e os seus niveis. Pode colocar equipos e mobiliario nos niveis desde a biblioteca e gardalo como ficheiro IFC.

:::note
Os muros xa se poden debuxar: vexa [Debuxar muros](topic:draw-walls). As portas, as xanelas, os chans e as cubertas están en desenvolvemento a seguir.
:::

## Pasos

1. Prema {{ui:Edificio novo}} en **Abrir un ficheiro ou cartafol**, ou na páxina de inicio.
2. Escriba o **Nome do edificio**.
3. Escolla cantos **Niveis** ten (de 1 a 200).
4. Escriba a **Altura do nivel**, de piso a piso: por exemplo `10'-0"`, `10'6"` ou `3000 mm`. Un número simple son pés nos EUA, e milímetros no resto do mundo.
5. Prema {{ui:Crear}}. Os niveis apílanse desde o 0, cada un a unha altura de nivel por riba do anterior, e chámanse Nivel 1, Nivel 2 e así sucesivamente. Aparecen na árbore do modelo, e a planta do Nivel 1 ábrese xunto á vista 3D con {{ui:Debuxar}} activado.
6. Debuxe os muros: vexa [Debuxar muros](topic:draw-walls). Cambie o nome dos niveis ou as súas alturas no panel **Niveis**.
7. Coloque os elementos: vexa [Colocar equipos e mobiliario desde a biblioteca](topic:place-from-library). A barra de colocación lista todos os niveis.
8. Prema {{ui:Gardar como IFC}}. O ficheiro leva o nome do edificio, por exemplo `Casa de Smith.ifc`.

## Bo saber

- O modelo gárdase en milímetros, como IFC4. Outros programas BIM poden abrilo.
- **Pisos** no panel da esquerda lista só os niveis que teñen algo; a árbore do modelo lístaos todos.
- Ata que garde, o edificio novo conta como traballo sen gardar. BimCraft pregunta antes de abrir outro ficheiro ou saír, e garda unha copia neste navegador por se a pestana se pecha.
