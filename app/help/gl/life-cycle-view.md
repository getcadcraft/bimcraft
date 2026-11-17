---
title: Ver o que se desgasta ao longo de cincuenta anos
summary: As xanelas, portas, acabados e cuberta que contén o modelo, a súa vida útil, os anos en que se substitúe cada un e o custo por ano, e o seu valor actual cando se indica un custo por unidade.
keywords: ciclo de vida, vida útil, substitución, mantemento, custo, valor actual, desconto, inflación, 50 anos, xanelas, pintura, cuberta, acabados, custo total
from: 1b849545
---

A sección {{ui:Life-cycle view}} do panel esquerdo lista o que contén o modelo e que se desgasta, e cando se substitúe durante o período de estudo (50 anos para comezar). Non se muda nada do modelo.

## Como se le

Cada parte mostra a súa cantidade (medida no modelo: superficie das xanelas, portas interiores e exteriores, acabado do muro exterior, pintura interior, acabado de chan e teito, proxección da cuberta, escaleiras), unha **vida en anos** e un **custo por unidade**. Unha parte substitúese ao cabo da súa vida, ao dobre da súa vida e así sucesivamente, mentres iso sexa antes do fin do estudo; así, unha xanela de 30 anos nun estudo de 50 anos substitúese unha vez, no ano 30. As vidas útiles son cifras típicas de planificación: cámbieas aos seus produtos e ao seu clima. Non se supón ningún custo; escriba un para ver o diñeiro por ano, o total e o seu valor actual. Engada unha taxa de desconto e unha taxa de inflación se as quere.

{{ui:Save the schedule (CSV)}} escribe os compoñentes e os anos. Tamén se listan as tubaxes, os condutos, o cableado e os equipos (ver abaixo).

## Tubaxes, condutos, cableado e equipos

- **As tubaxes e os condutos** son os metros de cada trazo debuxado. Os **equipos** (bombas, ventiladores, válvulas, terminais, accesorios, tomas, interruptores, cadros e as demais cousas que a lapela Activos controla) contanse por tipo, cada tipo cunha vida de planificación. Un elemento cuxa *vida útil* se define na lapela Activos ten a súa propia liña con esa vida, e se ten data de instalación comeza coa súa idade: unha bomba de 16 anos cunha vida de 10 anos toca substituírse agora, e despois cada dez anos.
- **O cableado** é unha **estimación**: a distancia en planta desde o cadro ao longo dos dispositivos de cada circuíto, do máis próximo ao máis afastado, multiplicada por 1,25 polo percorrido. O modelo non debuxa cable, así que compróbeo contra a súa propia medición.
- As vidas son cifras de planificación para revisar, non unha fonte.

## Carbono por substitución

Marque {{ui:Include the embodied carbon of each replacement}}. Unha xanela, porta, escaleira, cuberta, tubaxe ou equipo novo contabilízase co carbono que levan os elementos do modelo do mesmo tipo (os factores da lapela Carbono, por unidade). Unha parte sen elemento nin factor, como a pintura, os acabados e o cableado, amosa un guion e figura na lista. Non se contan o fin de vida da parte vella nin o traballo de substituíla.
