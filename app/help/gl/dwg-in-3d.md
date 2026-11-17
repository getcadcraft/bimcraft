---
title: Ver un debuxo DWG ou DXF en 3D
summary: Cambie o espazo de modelo dun debuxo a 3D para ver cotas, grosores, caras 3D, mallas e bloques, orbitar ao seu redor, facer clic nun obxecto para ver as súas propiedades e ver o que aínda non se debuxa.
keywords: 3d, dwg, dxf, debuxo, espazo de modelo, orbitar, sección, corte, recorte, elixir, seleccionar, propiedades, atributos, identificador, cota, grosor, extrusión, 3dface, polyface, malla, polilínea 3D, bloques, vistas, perspectiva, paralela, extensións, acis, sólidos
from: a0c6cd17
---

## Que vai facer

Vexa o espazo de modelo dun debuxo en 3D. As liñas e as polilíneas están á súa altura real, os obxectos con grosor érguense como muros, e as caras 3D, as mallas e os bloques 3D móstranse como superficies que pode orbitar. As follas seguen en 2D.

## Pasos

1. Abra un DWG ou DXF. Vexa [Ver un debuxo DWG ou DXF](topic:view-dwg). Ábrese en 3D salvo que {{ui:Configuración}} › {{ui:BimCraft}} › **Os debuxos ábrense en** diga {{ui:Modelo (2D)}}.
2. Desde 2D, faga clic en {{ui:3D}} na barra enriba do debuxo, ou prema {{key:3}}.
3. Agarde un momento a primeira vez: a liña de estado indica «Construíndo o debuxo en 3D…» e despois cantas liñas e caras mostra.
4. Oriente, desprace e amplíe (vexa a táboa máis abaixo).
5. Faga clic nunha vista da segunda barra: {{ui:Iso}}, {{ui:Superior}}, {{ui:Inferior}}, {{ui:Fronte}}, {{ui:Atrás}}, {{ui:Esquerda}} ou {{ui:Dereita}}.
6. Faga clic en {{ui:Perspectiva}} para alternar entre unha vista en perspectiva e unha vista paralela.
7. Faga clic en {{ui:Extensións}} ou prema {{key:F}} para ver de novo todo o debuxo.
8. Faga clic de novo en {{ui:3D}}, prema {{key:3}}, ou faga clic en {{ui:Modelo}} ou nunha lapela de folla para volver a 2D.

## Que debe ver

- Espazo de modelo en 3D, Z cara arriba, coas cores propias do debuxo. As caras son un tono máis claras có seus bordos.
- As capas que desactive en {{ui:Capas}} desaparecen tamén da vista 3D.
- À dereita: o número de liñas e caras, o tamaño do debuxo en X, Y e Z, **Só na vista 2D** e **Aínda non debuxado**.

## Cortar cun plano de sección

Faga clic en {{ui:Sección}} na barra 3D, ou prema {{key:X}}. A barra debaixo funciona como para os modelos IFC (vexa [Cortar un modelo IFC cun plano de sección](topic:section-plane)): corte desde {{ui:Superior}}, {{ui:Fronte}} ou {{ui:Lateral}}, arrastre ou escriba o desfase (aquí nas unidades propias do debuxo) e use {{ui:Inverter}} para conservar o outro lado. O que o plano corta non se pode seleccionar. Ao volver a 2D, o corte retírase.

## Ver as propiedades dun obxecto

Faga clic nun obxecto na vista 3D. Cambia á cor de selección e {{ui:Propiedades}} mostra o que di o ficheiro sobre el: o seu tipo, capa, cor, tipo de liña e identificador, e despois os seus datos propios, como o inicio, o final e a lonxitude dunha liña, o centro e o raio dun círculo, as esquinas dunha cara 3D, ou o bloque, o punto de inserción, a escala, a rotación e os valores de atributo dunha referencia de bloque.

- Unha referencia de bloque selecciónase completa, e tamén os bloques aniñados nela.
- Un clic a uns píxeles dunha liña selecciona a liña.
- Manteña premida {{key:Mod}} e faga clic para seleccionar máis obxectos, ou para retirar un; {{ui:Propiedades}} conta entón por tipo.
- {{key:Esc}}, ou un clic no espazo baleiro, borra a selección.
- Os obxectos das capas que desactivou non se poden seleccionar.

## Movemento pola vista

:::mouse
| Para | Faga isto |
|---|---|
| Orbitar | Arrastre co botón central, ou co botón esquerdo |
| Desprazar | Arrastre co botón dereito, ou manteña premida {{key:Shift}} e arrastre |
| Ampliar | Mova a roda do rato; amplía cara ao que hai baixo o punteiro |
| Ver todo | {{ui:Extensións}} ou {{key:F}} |
| Mirar desde un lado | Faga clic nunha cara, aresta ou esquina do cubo de vista, na esquina inferior dereita |
:::

O cubo de vista pode cambiarse por unha icona de eixes, ou ocultarse, en {{ui:Configuración}}. Vexa [Configuración de BimCraft](topic:settings).

:::mac mouse
Nun touchpad, deslice con dous dedos para orbitar, manteña premida {{key:Shift}} e deslice para desprazar, e faga pinza para ampliar.
:::

:::touch
Arrastre cun dedo para orbitar. Faga pinza con dous dedos para ampliar, e mova ambos xuntos para desprazar.
:::

## Que se debuxa en 3D

| No debuxo | En 3D |
|---|---|
| Liñas, polilíneas 3D | Á súa altura real |
| Polilíneas, círculos, arcos, elipses | No seu propio plano, á súa cota, inclinados cando o debuxo os inclina |
| Grosor en liñas, polilíneas, círculos e arcos | Muros desa altura; os círculos quedan pechados por arriba e por abaixo |
| Caras 3D, mallas polyface, mallas de polígonos | Superficies sombreadas cos seus bordos visibles |
| Bloques | Colocados, xirados e escalados en 3D, tamén os bloques aniñados |
| Tramas | Os seus contornos |
| Trazos 2D simples | Planos, onde se debuxaron |

## Só na vista 2D

O texto, o texto de varias liñas e os atributos visibles dos bloques debúxanse en 3D, no seu propio plano e á súa altura, e un clic sobre eles selecciónaos. As polilíneas anchas amosan o seu ancho como unha banda plana. As liñas de chamada múltiples, as imaxes e os patróns de trama contanse en **Só na vista 2D**: véxaos na lapela {{ui:Modelo}} ou nas follas.

## Aínda non debuxado

Os sólidos e superficies gardados como corpos ACIS (sólidos 3D, corpos, rexións e superficies) e as mallas de subdivisión aparecen listados en **Aínda non debuxado**, co número que hai. Sáltanse; non se adiviñan.

## Erros habituais

- **Todo parece plano.** O debuxo é 2D: as súas liñas non teñen altura. Faga clic en {{ui:Fronte}} para comprobalo; un debuxo plano aparece como unha liña.
- **Un modelo sólido non mostra nada.** Os sólidos feitos cun modelador de sólidos son corpos ACIS, listados en **Aínda non debuxado**. Exporte o modelo como IFC ou como caras 3D desde o programa que o fixo.
- **O debuxo é un pequeno cúmulo no centro.** Algo lonxe no espazo de modelo, como unha copia antiga dunha planta, fai que as extensións sexan grandes. Amplíe coa roda onde queira mirar.

## Seguinte

- [Traballar con capas e follas](topic:dwg-layers-sheets)
- [Cortar un modelo IFC cun plano de sección](topic:section-plane)
