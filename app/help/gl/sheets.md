---
title: Alzados, seccións e follas
summary: Debuxe liñas de sección na planta, despois abra Follas para un conxunto listo para imprimir feito a partir do modelo: plantas de cada nivel, os catro alzados, seccións do edificio, cuadros e estrutura de muros, con cartelas e escalas, nun único PDF.
keywords: follas, conxunto de debuxos, documentos de construción, imprimir, trazar, pdf, alzado, alzados, alzado norte, sección, sección do edificio, liña de sección, corte, liñas ocultas, cartela, número de folla, escala, 1/4" = 1'-0", 1:50, 1:100, papel, 11x17, 24x36, A3, A1, conxunto para licenza
from: 91ed0cde
---

## Que vai facer

Faga un conxunto de debuxos a partir do modelo: a planta de cada nivel, os alzados norte, leste, sur e oeste, unha sección do edificio por cada liña de sección, os cuadros de portas, xanelas, cuartos e madeira, e un alzado de cada muro con estrutura. O conxunto debúxase de novo a partir do modelo cada vez que o abre, polo que sempre coincide co que construíu.

## Debuxar unha liña de sección

1. Nun nivel, abra {{ui:Compilación}} e escolla {{ui:Liña de sección}}.
2. Faga clic onde comeza a liña e onde remata. A liña curta no seu centro indica o lado ao que mira a sección: a esquerda da liña, segundo vai do primeiro clic ao segundo.
3. A liña amósase na planta cos seus extremos e coa súa letra (A, despois B, e así sucesivamente).

Escolla a liña para cambiala en **Propiedades**: a súa letra, **Inverter a vista** para mirar no sentido contrario, e **Mirar ata** para deter a vista a unha distancia fixada detrás do corte (0 amosa todo o que hai detrás). Prema {{key:Delete}} para eliminala.

## Abrir as follas

1. Faga clic en {{ui:Follas}} na barra do modelo (xunto a {{ui:Imprimir}}).
2. As follas listanse á esquerda: **A-101** e seguintes para as plantas, **A-201** para os alzados, **A-301** para as seccións, **A-401** para os cuadros e **S-101** para a estrutura dos muros. Faga clic nunha para a ver.
3. Escolla o **Papel**: Letter, Tabloid (11 × 17), Arch D (24 × 36), A3 ou A1. O papel conserva o seu nome normalizado, e o seu tamaño escríbese coas {{ui:Unidades}} que escolleu, por exemplo *Letter · 8.5 × 11 in* ou *A3 · 297 × 420 mm*.
4. Faga clic en {{ui:Descargar o conxunto en PDF}}: unha páxina por folla.

## Notas normalizadas dun pack de normativa

Nunha folla, {{ui:Notas normalizadas}} permítelle colocar notas dun pack de normativa (por disciplina) na columna dereita da folla. Cada nota conserva o pack e a cláusula de onde procede, e a folla impresa indica cando ese pack non está verificado. As notas son un punto de partida: a persoa responsable do debuxo decide o que din. Necesitan o complemento Normativa de edificación.

## Que hai nas follas

- **Plantas** amosan muros, portas, xanelas, cuartos coas súas superficies, cotas e liñas de sección, á maior escala normalizada que cabe: 1/4" = 1'-0" ou menor (1:50 ou menor en milímetros).
- **Alzados** debúxanse a partir do modelo 3D coas liñas ocultas eliminadas, dous por folla, todos á mesma escala, cunha liña de terreo debaixo. A cuberta, as cimentacións e o terreo amósanse tal como están modelados.
- **Seccións** pintan o que atravesa o corte (muros, pisos, cuberta) e debuxan o que se ve máis alá.
- **Alzados e seccións levan as súas notas:** unha marca por cada nivel co seu nome e altura á dereita, a altura entre niveis á esquerda, e nun alzado a largura do edificio debaixo e unha etiqueta (D1, W1) en cada porta e xanela dun muro que lle mira. Para os muros propios dun cuarto consulte [Alzados interiores](topic:interior-elevations).
- **Os cuadros** son as mesmas táboas que {{ui:Cuadros}} na barra do modelo.
- **A estrutura** amosa os montantes, placas, dinteis e peitorís de cada muro con estrutura tal como se ven desde o seu exterior, para que unha cuadrilla poida trazalo. Consulte [Estrutura de muros, pisos e cubertas](topic:framing).

Cada folla ten unha cartela co seu número, o seu título, o nome do ficheiro e a data.

:::tip
As follas saen do modelo: para cambiar un debuxo, cambie o modelo e abra de novo {{ui:Follas}}.
:::

:::note
Os alzados e as seccións amosan só liñas e recheos: as cotas, as marcas de nivel e as notas sobre eles aínda non están feitas.
:::
