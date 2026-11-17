---
title: "Políticas predeterminadas: fixe con que empeza un edificio"
summary: Indique unha vez con que tipo de muro, niveis, primeira folla, etiquetas LOD, unidades e ferramenta empeza un edificio novo, para proxectos métricos e en pulgadas, e comparta as políticas na oficina como un ficheiro pequeno.
keywords: predeterminado, predeterminados, políticas predeterminadas, política, estándar da oficina, predeterminados da oficina, plantilla, edificio novo, primeiro tipo de muro, muro métrico, alvenaría, LOD, nivel de desenvolvemento, primeira folla, papel, escala, niveis, altura de piso, nomes de niveis, ferramenta de muro, unidades, compartir, exportar, importar, json
from: 42379aa5
---

## Que vai facer

Indique a BimCraft con que debe empezar un edificio novo, para que ninguén da oficina teña que cambiar as mesmas cousas cada vez. Isto é un complemento: está desactivado ata que o active, e unha política que non fixa conserva tal cal o valor predeterminado de BimCraft.

:::note
Estas son predeterminacións para edificios **novos** e cousas **novas**. Un proxecto que xa comezou non cambia.
:::

## Pasos

1. Abra {{ui:Configuración}}, vaia a {{ui:Complementos}} e active {{ui:Políticas predeterminadas}}.
2. En {{ui:Configuración}}, abra a lapela **BimCraft** e escolla {{ui:Políticas predeterminadas}} na lista da esquerda.
3. Fixe as políticas que quere. Cada unha comeza co valor propio de BimCraft, indicado entre parénteses. Unha política con caixas **Métrico** e **Imperial** toma un valor para cada tipo de proxecto; cubra só as que necesite.
4. Non hai botón de gardar: cada cambio gárdase ao facelo. Un valor que non se pode usar recházase con palabras e o antigo mantense.
5. Faga clic en {{ui:Edificio novo}}. O diálogo énchese coas súas políticas, e xunto a cada valor que unha política fixa aparece **dende as súas Políticas predeterminadas**. Aínda pode cambiar calquera deles antes de {{ui:Crear}}.

## As políticas

- **Unidades dun edificio novo**: as unidades cambian a esta ao crear.
- **Número de niveis**, **Nomes de niveis** e **Altura de nivel**. Nun nome, `{n}` conta 1, 2, 3; `{n0}` conta 0, 1, 2; `{nn}` e `{nn0}` fan o mesmo con dous díxitos. Así que `Floor {nn0}` dá Floor 00, Floor 01, Floor 02.
- **Primeiro tipo de muro**: o que debuxa a ferramenta Muro en primeiro lugar. Unha oficina métrica pode empezar con Alvenaría exterior 300 mm, mentres que os proxectos en pulgadas conservan Exterior 2×6.
- **Etiqueta LOD nos tipos de muro iniciais**: o nivel de desenvolvemento (LOD 100 a 500) que os nove tipos iniciais mostran onde se liste un tipo. Vexa [Construír conxuntos de muros](topic:wall-assemblies).
- **LOD dun tipo de muro novo**: a etiqueta que un tipo novo leva ao empezar no editor de tipos. Pode cambiala alí.
- **Primeira folla**: o seu papel, escala, número de folla e nome (use `{level}` para o nome do nivel máis baixo), ou ningunha primeira folla.
- **Tamaños de anotación no papel** (Configuración › Global › Políticas predeterminadas): as alturas da oficina, en milímetros impresos, para notas, texto de cotas, etiquetas, nomes de cuartos, letras das burbullas de cuadrícula, títulos de vista e texto de cadros. Un edificio novo tómaos ao crear e consérvaos no seu ficheiro. Vexa [Debuxar a tamaño real, anotar por escala](topic:annotation-sizes).
- **Ferramenta activa despois de crear**: Seleccionar, como fai BimCraft por si mesmo, ou Muro, para que os dous primeiros clics na planta xa debuxen un muro.

## Disposición dos cadros: o estándar da oficina

En **Configuración › Global › Políticas predeterminadas**, baixo **Disposición dos cadros (estándar da oficina)**, fixe como se agrupa cada cadro, se ten subtotais e un total, o seu título e a maiúscula das cabeceiras das columnas. Cada cadro que non indique a súa propia toma estes valores, sexa quen sexa o que o configure. Vexa [Dispor, gardar e exportar un cadro](topic:schedule-layouts).

## Compartir na oficina

1. En {{ui:Configuración}}, abra a lapela **Global** e escolla {{ui:Políticas predeterminadas}}.
2. Escriba o **Nome da oficina** se o quere. Escríbese no ficheiro.
3. Faga clic en {{ui:Gardar nun ficheiro}}. Obtén un ficheiro pequeno que remata en `.ccdefaults.json`.
4. Noutro ordenador, active o complemento, abra o mesmo lugar e faga clic en {{ui:Cargar desde un ficheiro}}. As políticas do ficheiro substitúen as dese ordenador.

A lapela Global tamén ten o **Sistema de unidades dun proxecto novo**, que vale para todas as aplicacións que teñan o complemento, e {{ui:Restablecer todas as políticas}}. {{ui:Restablecer os predeterminados propios de BimCraft}} na lapela BimCraft borra só os de BimCraft.

## Cousas que convén saber

- O ficheiro é JSON plano e aberto: unha lista de nomes e valores de políticas. Unha política que o ficheiro nomea e que esta versión non coñece déixase fóra e menciónase na mensaxe; o resto cárgase igual.
- As políticas gárdanse neste navegador, para todas as aplicacións CadCraft deste ordenador. Non se gardan no ficheiro do edificio e non se sincronizan entre ordenadores: use o ficheiro.
- A etiqueta LOD dun tipo inicial vén da política deste ordenador. Un tipo que fai como copia dun inicial leva a súa etiqueta no ficheiro do edificio.
- BimCraft non ten axuste de precisión, así que non hai política de precisión aquí.
- Un edificio comezado desde unha plantilla trae os seus propios niveis e follas. A política de tipo de muro e a de unidades seguen aplicándose.
- Desactive o complemento e todo volve a ser o propio de BimCraft. As súas políticas consérvanse para cando o volva activar.
