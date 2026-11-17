---
title: Crear un edificio novo
summary: Cree un modelo de edificio en branco cos seus niveis, debuxe os seus muros, coloque elementos da biblioteca e gárdeo como IFC.
keywords: novo, edificio novo, en branco, baleiro, comezar desde cero, plantilla, niveis, pisos, andares, crear, modelo
from: 68786865
---

## Que vai facer

Comece un modelo de edificio desde cero en vez de abrir un. BimCraft crea un modelo IFC en branco cun proxecto, un terreo, o edificio e os seus niveis. Pode colocar equipos e mobiliario nos niveis desde a biblioteca e gardalo como ficheiro IFC.

:::note
Os muros xa se poden debuxar: vexa [Debuxar muros](topic:draw-walls). As portas, as xanelas, os chans e as cubertas son o seguinte en desenvolverse.
:::

## Pasos

1. Prema {{ui:Edificio novo}} en **Abrir un ficheiro ou cartafol**, ou na páxina de inicio.
2. Escriba o **Nome do edificio**.
3. Escolla cantos **Niveis** ten (de 1 a 200).
4. Escriba a **Altura do nivel**, de piso a piso: por exemplo `10'-0"`, `10'6"` ou `3000 mm`. Un número sen unidade son pés nos EUA e milímetros no resto do mundo.
5. Todos os campos xa están cubertos, así que pode deixalos como están. Debaixo deles a caixa indica o que se comeza: as unidades, o **Tipo de muro** que a ferramenta Muro debuxa primeiro (escolla outro da lista se quere) e a primeira folla.
6. Prema {{ui:Crear}}. Os niveis apílanse desde 0, cada un unha altura de nivel por riba do anterior, e chámanse Nivel 1, Nivel 2 e así. Aparecen na {{ui:Árbore do modelo}}, e a planta do Nivel 1 ábrese xunto á vista 3D con {{ui:Debuxar}} activado.
7. Debuxe os muros: prema {{ui:Muro}} e dous puntos. Vexa [Debuxar muros](topic:draw-walls). Cambie o nome aos niveis ou as súas alturas no panel **Niveis**.
8. Coloque elementos: vexa [Colocar equipos e mobiliario desde a biblioteca](topic:place-from-library). A barra de colocación lista todos os niveis.
9. Prema {{ui:Gardar como IFC}}. O ficheiro toma o nome do edificio, por exemplo `Casa de Smith.ifc`.

## Cousas que convén saber

- O modelo gárdase en milímetros, como IFC4. Outros programas BIM poden abrilo.
- Un edificio novo trae unha folla, **A-101**, que contén a planta do nivel máis baixo: A3 a 1:100 cando traballa en unidades métricas, Tabloid a 1/8" = 1'-0" noutro caso. Está baleira ata o primeiro muro e despois mostra a planta mentres debuxa. Ábrea en {{ui:Follas}} no navegador do proxecto para cambiar o seu papel, a escala ou a cartela, engadir vistas ou eliminala. Un edificio iniciado desde unha plantilla trae no seu lugar as follas da plantilla.
- Para cambiar o que comeza cada edificio novo (o tipo de muro en proxectos métricos, os niveis, a primeira folla, a ferramenta activa despois de Crear), vexa [Políticas predeterminadas](topic:default-policies).
- Non hai que configurar nada antes do primeiro muro. O tipo de muro, as alturas dos niveis, as unidades e a folla poden cambiarse máis tarde.
- {{ui:Pisos}} no panel esquerdo lista só os niveis que teñen algo; a {{ui:Árbore do modelo}} lístaos todos.
- Ata que garde, o edificio novo conta como traballo sen gardar. BimCraft pregunta antes de abrir outro ficheiro ou saír, e garda unha copia neste navegador por se se pecha a lapela.
