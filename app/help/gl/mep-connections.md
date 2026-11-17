---
title: Conectar tubaxes e condutos aos equipos
summary: Comece ou remate unha tubaxe ou conduto nun porto para que tome o tamaño e o sistema del e quede fixada a el; despois comprobe as conexións: portos abertos, incompatibilidades de tamaño e sistema, e tramos sen orixe.
keywords: mep, conectar, conexión, conexións, porto, portos, porto aberto, incompatibilidade de tamaño, incompatibilidade de sistema, orixe, comprobar conexións, fixo, seguir, mover equipo, ifcrelconnectsports, coordinación
from: 29144fb0
---

## Que vai facer

Una os tramos aos equipos para que o modelo sexa un único sistema conectado: a saída dunha bomba coa tubaxe que sae dela, o pescozo dun difusor co seu conduto derivado. Despois deixe que BimCraft liste o que non está unido.

## Debuxar desde un porto

1. Escolla {{ui:Tubaxe}} ou {{ui:Conduto}}.
2. Mova o punteiro sobre un porto dunha peza de equipo (os círculos pequenos; un porto aberto debúxase na cor de aviso). O punteiro encaixa nel e indica **en un porto**.
3. Prema: o tramo comeza á altura do porto e **toma o seu tamaño e sistema** (unha tubaxe toma tamén o material habitual do sistema). A barra de estado indica o que tomou.
4. Siga debuxando como de costume. Rematar un tramo noutro porto fixa tamén ese extremo.

O extremo dun tramo nun porto está **fixado** a el: mova ou xire o equipo (nas Propiedades) e o extremo do tramo vai con el; edite o tramo e ese extremo queda no porto. As outras esquinas do tramo quedan onde están, así que tras un gran desprazamento o primeiro segmento pode separarse do porto en ángulo: mova tamén a seguinte esquina.

## Comprobar as conexións

Abra {{ui:Compilación}} e prema {{ui:Comprobar conexións}}. A lista debaixo da barra mostra:

| Liña | Que significa |
|---|---|
| Un porto non está conectado | Unha peza de equipo ten unha conexión á que non se debuxa nada |
| Nada no seu extremo | Un tramo remata no aire |
| Portos unidos de tamaños distintos | Un tramo dun tamaño encóntrase cun porto ou tramo doutro tamaño sen reductor (o tamaño nominal dunha tubaxe, a forma e os lados dun conduto) |
| Portos unidos de sistemas distintos | Por exemplo, un conduto de retorno nun difusor de impulsión |
| Unha tubaxe unida a un conduto | Encóntranse dúas conexións de tipos distintos |
| Ningún equipo da súa rede o subministra | Ningún elemento ao que está unido un tramo, por lonxe que estea, ten unha saída. Os desaugues, a pluvial e as ventilacións non se comprobán así: a súa auga procede dos aparellos |
| Fixado a un porto dun equipo que xa non está no modelo | Eliminouse o equipo; debuxe de novo o extremo ou elimine o tramo |

Os erros aparecen primeiro. Prema unha liña para escoller o que nomea. {{ui:Pechar}} oculta a lista. A comprobación le o modelo tal como está debuxado: comproba conexións e tamaños, nunca caudais, presións nin equilibrado.
