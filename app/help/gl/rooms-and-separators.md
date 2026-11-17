---
title: Cuartos e separadores de cuartos
summary: Escolla un cuarto para darlle nome e número e ler a súa superficie, perímetro e volume. Debuxe un separador de cuarto onde dous cuartos se xuntan sen muro entre eles.
keywords: cuarto, cuartos, separador de cuarto, liña de separación, espazo, IfcSpace, nome, número, superficie, perímetro, volume, planta aberta, dividir un cuarto, cociña e salón, sen pechar
from: d4c1d66b
---

## O que vai facer

Dea nome aos cuartos que forman os muros, e divida un cuarto aberto en dous sen muro.

## Onde están as ferramentas

- Disposicións en cinta: {{ui:Architecture}} › **Cuarto e superficie** › {{ui:Room}} e {{ui:Room Separator}}.
- Disposición clásica: na barra Debuxar › menú {{ui:Rooms}}.
- Calquera estilo de menú: os comandos se chaman Cuarto e Separador de cuarto; a paleta de comandos atópaos.

## Pasos

1. Debuxe os muros. Cada circuíto pechado de muros xa é un cuarto: BimCraft o forma, o numera e lle dá a súa superficie mentres debuxa.
2. Escolla {{ui:Room}}. Mova o punteiro sobre a planta: o cuarto baixo el ilumínase coa súa superficie, perímetro e volume.
3. Para dar nome aos cuartos rapidamente, escriba primeiro un {{ui:Name}} e un {{ui:Number}} na fila, e logo prema no cuarto. O número avanza en un para o seguinte cuarto (101, 102; A-09, A-10).
4. Ou prema simplemente nun cuarto: queda seleccionado, e Propiedades mostra o seu nome, número, superficie, perímetro, volume e a súa etiqueta.
5. Para dividir un cuarto aberto, escolla {{ui:Room Separator}} e prema en dous puntos: de muro a muro, ou de muro a outro separador. Siga premendo para unha cadea; Enter, Esc ou un dobre clic a rematan.

## Que fai un separador

- Delimita os cuartos como un muro sen grosor. As superficies dos dous cuartos suman exactamente a superficie do cuarto orixinal.
- O cuarto que contén o centro do antigo cuarto conserva o seu nome e número. O outro é novo.
- Un separador que para ao aire libre, sen tocar nada por un extremo, non divide nada. Alárgueo e xa o fará.
- A parte dun separador que está dentro dun muro ignórase, así que pode encaixar nas liñas centrais dos muros.
- Seleccione un separador e prema en Delete para eliminalo: os dous cuartos volven ser un. Desfacer repón o separador.

## Se non hai ningún cuarto onde preme

A liña de estado indícao: os muros non pechan alí. Peche o burato, ou debuxe un separador a través del. Non se rexeita nada; simplemente aínda non hai un cuarto pechado.

## No IFC

Un cuarto é un IfcSpace co seu número (Name), nome (LongName) e Qto_SpaceBaseQuantities: NetFloorArea, NetPerimeter, Height, NetVolume. O volume é a superficie por a altura ata o nivel de enriba.

Un separador de cuarto é un IfcVirtualElement, a entidade que IFC emprega para un límite que non está construído. Ten unha liña e ningún corpo, así que outro programa non le ningún muro e non conta nada por el.

## Aínda sen construír

- Separadores curvos.
- Un cuarto que segue un teito inclinado: o volume é sempre superficie por altura do nivel.
- As relacións de límite de espazo (IfcRelSpaceBoundary) non se escriben, nin para os muros nin para os separadores.

Vexa tamén [Etiquetas de cuartos e superficies](topic:room-and-area-tags), [Superficies e límites de superficie](topic:areas-and-area-boundaries).
