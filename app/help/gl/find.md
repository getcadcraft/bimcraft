---
title: Buscar elementos por clase, nome ou propiedade
summary: Buscar todos os elementos que cumpran unha ou máis regras (a súa clase, nome, tipo, piso, material ou calquera valor de propiedade), seleccionalos todos e gardar as regras como un conxunto de busca con nome.
keywords: buscar, filtro, consulta, regra, conxunto de busca, conxunto de selección, busca gardada, propiedade, valor, clase, material, seleccionar todo
from: 3d293bc2
---

## O que vai facer

Seleccionar de golpe todos os elementos dun tipo ou cun mesmo valor: todas as portas, todos os muros do Nivel 2, todos os elementos cunha resistencia ao lume EI60, todos os muros que custan máis dunha cantidade fixada.

## Pasos

1. Abra un modelo IFC.
2. Abra {{ui:Buscar}} no panel esquerdo.
3. Na primeira regra, escolla unha propiedade (primeiro as propias do elemento, como {{ui:Clase}} e {{ui:Piso}}, e despois os conxuntos de propiedades do modelo), como comparar e un valor. O campo de valor suxire os valores que ten o modelo.
4. Para afinar a busca, prema {{ui:Engadir unha regra}}. Escolla {{ui:Todas as regras}} para que cumpran todas, ou {{ui:Calquera regra}} para cumprir unha delas.
5. Prema {{ui:Buscar}}, ou prema {{key:Enter}} nun campo de valor. Os elementos que coincidan quedan seleccionados.
6. Para gardar as regras, prema {{ui:Gardar como conxunto}}, escriba un nome e prémao de novo. Máis tarde, prema o nome dun conxunto para buscar con el.

## O que debe ver

- Os elementos atopados seleccionados na vista 3D e na árbore do modelo, e en {{ui:Propiedades}} o número por clase. Prema {{key:I}} para mostrar só eles, e {{key:H}} para ocultalos.
- As palabras coinciden sen distinguir maiúsculas. Os números compáranse como números: «é maior que 1000» refírese ao valor, non ao texto.
- {{ui:ten un valor}} e {{ui:non ten valor}} non precisan valor; atopan o que está cuberto ou o que falta.
- Os conxuntos gardados quedan neste navegador para todos os modelos que abra.

## Erros habituais

- **Non se atopa nada.** Unha regra necesita un valor que poida coincidir: mire as suxestións do campo de valor.
- **Falta unha propiedade na lista.** Ningún elemento con forma neste modelo a ten.

## Seguinte

- [Colorear elementos segundo unha propiedade](topic:color-by-property)
- [Ocultar, illar e ver a través de elementos](topic:hide-and-isolate)
