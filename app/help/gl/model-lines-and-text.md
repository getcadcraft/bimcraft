---
title: Liñas e texto do modelo: debuxados no modelo, sobre o plano de traballo
summary: Unha liña do modelo é unha liña, polilínea ou arco que vive no modelo e se ve en todas as vistas que o ven. O texto do modelo é rotulación 3D con profundidade real. Ambos debúxanse sobre o plano de traballo.
keywords: liña do modelo, texto do modelo, texto 3D, rotulación, sinal, sinalización, liña en 3D, arco, polilínea, plano de traballo, texto extruído, tipo de letra, profundidade, liña de detalle, liña de debuxo, anotación, IfcAnnotation
from: fc9cccb5
---

## Que vai facer

Debuxar liñas e rotulacións que forman parte do modelo, e non dunha soa vista.

## Pasos

1. Estableza primeiro o plano de traballo (véxase **O plano de traballo**). Un plano de nivel debúxase na planta; un plano vertical, no Visor do plano de traballo.
2. Para unha liña, escolla **Liña do modelo** no menú **Compilación** e escolla **Liña**, **Polilínea** ou **Arco (tres puntos)**:
   - unha liña son dous clics;
   - unha polilínea é un clic por cada punto, e logo {{key:Enter}} ou un dobre clic. Un clic no primeiro punto a pecha;
   - un arco son tres clics: o seu inicio, un punto polo que pasa e o seu fin.
3. Para texto escolla **Texto do modelo**. Escriba as palabras, estableza a altura de maiúsculas e a profundidade, e logo prema onde comeza o texto (o extremo esquerdo da súa liña base).
4. Escolla unha liña ou un texto para vela en **Propiedades**. As palabras, a altura e a profundidade dun texto pódense cambiar aí. Eliminar borra o elemento.

## Onde se ven

- Unha liña do modelo vese na planta do seu nivel, na vista 3D, no panel de alzados e seccións e no Visor do plano de traballo cando está sobre o plano de traballo. Unha liña de debuxo (Anotar, Liña) pertence a unha soa vista.
- O texto do modelo é xeometría sólida: vese onde se vexa o modelo, na planta, en 3D, en alzados e seccións, e nas follas.
- As liñas do modelo aínda non se debuxan nas follas impresas. O texto do modelo si.

## O tipo de letra

O texto do modelo usa o mesmo tipo de letra que as follas e os PDF: Liberation Sans, baixo a SIL Open Font License. Unha letra que o tipo non ten debúxase como un signo de interrogación, e indícase cal é. Hai un só tipo e un só peso. As letras espácianse segundo as anchuras propias do tipo, sen kerning.

## No ficheiro IFC

- Unha liña do modelo é un IfcAnnotation co tipo de obxecto ModelLine. A súa forma é unha curva 3D: unha polilínea, ou un círculo recortado para un arco.
- O texto do modelo é un IfcBuildingElementProxy co tipo de obxecto ModelText. A súa forma é un sólido extruído para cada anaco de letra, cos buratos de letras como O e B. As súas cantidades son a área da cara e o volume (área da cara por profundidade).

## Para saber

- Calquera tamaño se fai como o pida. Só se rexeita unha liña sen lonxitude, un arco cuxos tres puntos estean na mesma liña, ou un texto sen letras, porque non hai nada que facer.
- Cada liña, e cada texto ou cambio nel, é un paso de Desfacer.
