---
title: Superficies e límites de superficie
summary: Mida a superficie bruta do edificio ou a superficie alugable dentro de liñas de límite que debuxa ou toma dos muros, e liste as superficies nun cadro.
keywords: superficie, superficies, límite de superficie, esquema de superficie, superficie bruta do edificio, GFA, alugable, planta de superficies, cadro de superficies, escoller muros, sen pechar
from: c79f96d2
---

## O que vai facer

Debuxe os límites dun esquema de superficies, coloque as superficies dentro deles e lea os totais.

## Onde están as ferramentas

- Disposicións con cinta: {{ui:Arquitectura}} › **Cuarto e superficie** › {{ui:Superficie}} e {{ui:Límite de superficie}}.
- Disposición clásica: a barra Debuxar › menú {{ui:Cuartos}}.

## Pasos

1. Escolla {{ui:Límite de superficie}}. Na fila escolla o {{ui:Esquema}}: Superficie bruta do edificio ou Alugable. Cada esquema ten os seus propios límites.
2. Escolla como facer as liñas en {{ui:Facer por}}:
   - **Debuxar**: prema punto a punto.
   - **Escoller muros: liña central**: prema un muro, e a súa liña central é un límite.
   - **Escoller muros: a cara premida**: prema un muro polo lado que queira; esa cara é o límite. Para a superficie bruta do edificio, prema o exterior dos muros exteriores.
3. Escolla {{ui:Superficie}}. Escolla o mesmo esquema, escriba un nome, un número ou un tipo se quere, e prema dentro dos límites.
4. A superficie mídese ao momento. Escóllaa para cambiar o seu nome, número ou tipo en **Propiedades**.

## Que segue a que

- Un límite feito escollendo un muro segue ese muro: se move o muro, a superficie mídese de novo no mesmo paso.
- Un límite que debuxou queda onde o debuxou.
- As caras dos muros que se encontran nunha esquina encóntranse alí tamén, así que catro muros escollidos pechan unha superficie sen buracos.
- Os límites das superficies móstranse na planta mentres ten na man unha ferramenta de cuarto ou de superficie, así que o resto do tempo non cargan a planta.

## Se os límites non pechan

A superficie colócase igualmente. Indica **Sen pechar** e non mide nada ata que os límites a rodeen. É un consello: non se rexeita nada.

## O cadro

Panel esquerdo › {{ui:Cuadros}} › **Superficies**: esquema, número, nome, tipo, nivel, superficie e perímetro, con un total. Un clic nunha fila escolle a superficie. {{ui:Descargar CSV}} dá a mesma táboa.

## No IFC

Unha superficie é un IfcSpace sen corpo: PredefinedType GFA para o esquema de superficie bruta do edificio, USERDEFINED con ObjectType Rentable para a alugable. Leva GrossFloorArea e GrossPerimeter, e non leva superficie neta, para que non se confunda cun cuarto. Un límite é un IfcVirtualElement.

## Aínda sen construír

- Esquemas propios (só Superficie bruta do edificio e Alugable).
- Recheos por cor segundo o tipo de superficie.
- Regras que colocan o límite por vostede, como «ata a liña do vidro».

Ver tamén [Cuartos e separadores de cuartos](topic:rooms-and-separators), [Etiquetas de cuartos e superficies](topic:room-and-area-tags).
