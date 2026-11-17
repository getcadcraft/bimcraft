---
title: Ocultar, illar e ver a través de elementos
summary: Seleccione varios elementos, ocúltelos, mostre só eles, ou mostre cos demais vistos a través, e logo devolva todo á vista.
keywords: ocultar, illar, ver a través, transparente, fantasma, raios X, mostrar todo, volver mostrar, seleccionar varios, selección múltiple, Ctrl clic, Shift clic, visibilidade
from: 97e98b8c
---

## Que vai facer

Deixe a vista só co que está a mirar: oculte os elementos que estorban, mostre só os que escolleu, ou manteña todo o demais na pantalla como un contorno tenue para seguir sabendo onde está.

## Pasos

1. Abra un modelo IFC. Vexa [Abrir un modelo IFC e mirar en 3D](topic:open-ifc-model).
2. Prema nun elemento para seleccionalo. Para seleccionar máis, manteña {{key:Mod}} ou {{key:Shift}} e prema en cada un. Premer nun elemento xa seleccionado dese xeito quítao da selección.
3. Abra {{ui:Show}} na barra de ferramentas e escolla o que fará, ou prema a súa tecla:
   - {{ui:Hide}} ({{key:H}}) oculta os elementos seleccionados.
   - {{ui:Isolate}} ({{key:I}}) mostra só os elementos seleccionados.
   - {{ui:See-through}} ({{key:T}}) mostra os elementos seleccionados tal como son e todo o demais visto a través.
4. Prema {{ui:Show all}} no mesmo menú, ou prema {{key:Shift+H}}, para mostrar de novo todos os elementos.
5. Para cortar todo o que rodea os elementos seleccionados, prema {{ui:Section box round the pick}} no mesmo menú, ou prema {{key:Shift+X}}. Vexa [Cortar un modelo IFC cun plano de sección](topic:section-plane).

## Que debe ver

- Con varios elementos seleccionados, {{ui:Properties}} indica cantos son e lístaos por clase. Prema nun só para ver as súas propiedades.
- Os elementos ocultos non se poden seleccionar: un clic cae sobre o que hai detrás deles.
- Os elementos vistos a través tampouco se poden seleccionar, así que pode facer clic directamente a través dos muros ata o que illou.
- As arestas ocúltanse co seu elemento, e pasan a ser tenues con el.
- Ocultar, illar e ver a través mantéñense mentres edita, coloca elementos da biblioteca ou corta o modelo cun plano de sección. Abrir outro modelo mostra todo de novo.

## Erros comúns

- **Os elementos do menú aparecen en gris.** Non hai nada seleccionado. Prema primeiro nun elemento; sitúe o punteiro sobre un elemento do menú para ler por que non pode actuar.
- **Illar mostrou un muro que eu oculara.** Illar mostra exactamente o que seleccionou, oculto ou non.
- **Falta un piso enteiro.** Iso é a lista {{ui:Storeys}}, non {{ui:Show all}}: marque de novo o piso.

## Seguinte

- [Mostrar e ocultar pisos, espazos e arestas](topic:storeys-and-spaces)
- [Cortar un modelo IFC cun plano de sección](topic:section-plane)
