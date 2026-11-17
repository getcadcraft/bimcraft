---
title: Composicións de muros e cotas de referencia
summary: Cree os seus propios tipos de muro capa a capa cun núcleo explícito, manteña unha biblioteca de materiais do proxecto e acote a caras e eixes centrais que permanecen unidos cando o muro cambia.
keywords: lod, nivel de desenvolvemento, lod 200, lod 300, xenérico, composición de muro, tipo de muro, capas, núcleo, cara do núcleo, eixe central do núcleo, cámara, cámara de aire, membrana, barreira hidrófuga, biblioteca de materiais, materiais, grosor, cota de referencia, cota, asociativo, liña de localización, revestimento, montante, placa de xeso laminado
from: 4ea8fbf5
---

## Que vai facer

Cree un tipo de muro que coincida co muro que vai construír: revestimento exterior, tableiro de revestimento, un núcleo de montantes de 5½ polgadas e placa de xeso laminado, ou ladrillo, unha cámara de aire e un muro de estrutura de madeira. Marque que capas son o núcleo, para que unha cota ou unha liña de localización poida manter o núcleo mentres cambian os acabados que o rodean. Despois acote os muros ás caras e aos eixes centrais que lle interesen.

## Crear un tipo de muro

1. Comece un edificio ou abra un modelo IFC, active {{ui:Debuxar}} e escolla a ferramenta {{ui:Muro}}.
2. Escolla un punto de partida en {{ui:Tipo de muro}} e abra {{ui:Composicións de muros…}}. Un punto de partida ábrese como unha copia; dea nome ao novo tipo.
3. As capas van desde o exterior, na parte superior da lista, ata o interior, na parte inferior. Escolla o material de cada capa, escriba o seu grosor (en unidades do proxecto, ou valores explícitos como `12.7 mm` ou `1/2"`), escolla a súa función (acabado, substrato, estrutura, illamento, membrana) e marque as capas do **Núcleo**. O núcleo ten que ser un grupo continuo.
4. {{ui:Engadir capa}} engade unha capa, {{ui:Engadir cámara}} engade unha cámara de aire coa súa ventilación (sen especificar, sen ventilar, ventilada), e {{ui:Engadir membrana}} engade unha capa sen grosor nominal, como unha barreira hidrófuga. As frechas desprazan unha capa cara ao exterior ou cara ao interior.
5. A vista previa debuxa as capas a escala, co núcleo subliñado, numeradas como as filas, e acota cada capa, o núcleo e o total. {{ui:Gardar tipo}}.

O novo tipo está na lista da ferramenta Muro e nas **Propiedades** dun muro seleccionado. Ao gardar un tipo que editou, cámbianse todos os muros que o usan; {{ui:Duplicar tipo}} crea un tipo separado e asígnao só aos muros seleccionados. Cada gardado é un só paso de desfacer, xunto cos muros que move, as portas e xanelas que contén e as cotas que dependen deles.

Unha cámara engade anchura. Unha membrana non engade ningunha: permanece no tipo para que un cuadro a poida atopar despois, e non conta para o grosor do muro nin do núcleo. Nunca se conta unha cámara ou unha membrana como material macizo. Nun ficheiro gardado como IFC2X3, a membrana consérvase no rexistro do tipo, pero queda fóra das súas capas físicas de material.

## Etiquetar un tipo co seu nivel de desenvolvemento (LOD)

Un tipo pode indicar o seu grao de desenvolvemento. No editor, **Nivel de desenvolvemento (LOD)** ofrece a escala fixa 100, 200, 300, 350, 400 e 500, ou **Sen definir**. Un muro xenérico («Muro 230 xenérico») é LOD 100 ou 200; unha composición concreta coas súas capas reais («230 ladrillo cerámico, revocado nas dúas caras») é LOD 300 ou superior. A etiqueta depende de vostede: BimCraft non a calcula, e os tipos de punto de partida non teñen ningunha.

A etiqueta aparece xunto ao nome do tipo na lista de tipos da ferramenta Muro, nas Propiedades dun muro e na lista de [Cambiar tipo](topic:wall-tools), e o informe despois dun cambio indica se o nivel subiu ou baixou. Para velo no cuadro **Muros por tipo** e no seu CSV, marque **Mostrar o LOD de cada tipo de muro no cuadro de muros** en Configuración › BimCraft › Muros: engádese unha última columna, LOD. Gárdase no ficheiro IFC co tipo (no conxunto de propiedades `CadCraft_WallType` do tipo, como a propiedade `LOD` e dentro do rexistro do tipo), así que está alí cando volve abrir o ficheiro. De momento a etiqueta só se aplica aos tipos de muro, non a elementos individuais nin a outras clases de elemento.

## Muros xenéricos para a fase de esbozo

A lista de tipos da ferramenta Muro comeza con dous muros **xenéricos**: **Muro xenérico de 200 mm (exterior)** e **Muro xenérico de 100 mm (interior)**. Cada un é unha capa do material xenérico, etiquetada LOD 200. Úseos cando sabe onde van os muros pero aínda non de que están feitos.

Un muro cuio tipo está etiquetado LOD 100 ou LOD 200 debúxase en todas as plantas como unha única banda con trama, en todos os niveis de detalle: sen capas nin liñas de capa. Isto é así para os muros xenéricos e para calquera tipo propio que etiquete LOD 100 ou 200. O muro en si está completo: ten o seu grosor, as súas portas e xanelas, os seus espazos e as súas cantidades.

Para desenvolvelo, cambie o seu tipo (Editar › Muros › **Cambiar tipo**, ou Tipo nas Propiedades). Non se volve debuxar o muro: o mesmo muro toma o novo tipo, e o informe indica o que se moveu. Un tipo etiquetado LOD 300 ou superior debúxase coas súas capas como antes.

Para debuxar todos os muros polas súas capas sen importar a etiqueta: Configuración › BimCraft › Muros, desmarque **Debuxar os muros dun tipo LOD 100 ou LOD 200 como unha única banda con trama**.

As portas e xanelas de punto de partida tamén son tipos xenéricos (un tamaño e un modo de abrir, non un produto). Con **Mostrar o LOD de cada tipo de muro no cuadro de muros** activado, os cuadros de portas e de xanelas mostran LOD 200 para elas.

## Dar ao tipo os seus datos de medición

No editor de tipos de muro, **Datos de medición** recolle o que un orzamentista necesita saber sobre o muro, unha vez para o tipo: a **unidade** coa que se constrúe (un ladrillo ou un bloque: o seu nome, lonxitude, altura e anchura), o **morteiro** (nome e grosor da xunta) e unha **tarifa** co seu código de moeda (tres letras, como USD, EUR ou ZAR) e a base da tarifa: por metro cadrado ou pé cadrado de superficie líquida de muro, por metro ou pé de lonxitude de muro, ou por cada muro. Todo isto é opcional.

Gárdase co tipo no ficheiro. Cada muro do tipo informa despois del: {{ui:Cuadros}} › **Tipos de muro: datos de medición** mostra a unidade, o morteiro, a tarifa e a tarifa multiplicada pola cantidade medida, e a medición enviada a TakeoffCraft leva os datos no elemento dese tipo de muro. Cámbieos no tipo e todos os muros seguen o cambio.

Tres campos máis serven para contar ladrillos ou bloques e morteiro:

- **Desperdicio en unidades, %** engádese ao número de unidades. Déixeo baleiro para usar a cifra do método de medición do proxecto, ou ningunha se o método non ten. Escriba 0 para non ter desperdicio, sexa cal sexa o método.
- **Morteiro extra, %** é para os furados ou as perforacións que levan morteiro. Engádese ao volume de morteiro. Déixeo baleiro se non hai ningún.
- **Capas construídas con esta unidade**: marque cada capa que sexa unha folla deste ladrillo ou bloque. Un muro de cámara ten dúas. Se non marca ningunha, contaranse as capas do núcleo.

A tarifa tamén pode ser por unidade a pedir, por 1000 unidades a pedir ou por m³ de morteiro. Cando a unidade ten lonxitude e altura, **Tipos de muro: datos de medición** mostra as unidades por m² (ou ft²) dunha folla, as unidades a pedir e o volume de morteiro; as fórmulas están en [Ladrillos, bloques e morteiro](topic:plan-schedules-and-pdf#bricks-blocks-and-mortar). Un tipo ten unha soa unidade: de momento non se poden contar nun mesmo tipo dúas follas de unidades distintas (unha folla exterior de ladrillo e unha folla interior de bloque).

## Manter fixo o núcleo

Nas **Propiedades**, poña a **Liña de localización** dun muro nunha cara do núcleo ou no eixe central do núcleo. Cando despois engada ou engrose un acabado, esa liña queda no seu sitio e o muro crece ao seu redor; os muros que se xuntan con el nunha esquina séguenno, así que as esquinas rectas seguen pechadas.

## Materiais do proxecto

{{ui:Biblioteca de materiais…}} lista os materiais do proxecto: nome, categoría, o grosor co que comeza unha capa, cor de visualización, patrón de trama de corte e notas. A biblioteca gárdase no IFC co proxecto. Ao escoller un material para unha capa, esa capa recibe o grosor por defecto do material, que despois pode cambiar; editar a biblioteca máis tarde nunca redimensiona os muros que xa debuxou. Tamén pode crear un material desde a lista de materiais da capa con {{ui:+ Novo material…}}.

## Cotas de referencia

{{ui:Anotar}} › {{ui:Cota de referencia}}: escolla horizontal, vertical ou alineada, e unha referencia: a cara do acabado exterior ou interior, a cara do núcleo exterior ou interior, o eixe central do muro ou o eixe central do núcleo. Escolla o primeiro muro, cambie a referencia se quere, escolla o segundo e logo prema onde vai a liña de cota. Dúas referencias nun mesmo muro miden o seu grosor total ou o do núcleo. {{ui:Cotas de referencia…}} lista as cotas da vista, incluídas as que perderon un muro, con Propiedades, Revincular referencias e Eliminar.

### Acotar toda a planta por regras

{{ui:Anotar}} › {{ui:Acotar a planta…}} acota o exterior da planta que está vendo: o tamaño total en cada sentido, unha fila de cotas ao longo de cada bordo exterior (extremos de muros, muros que tocan o bordo, e as portas e xanelas que contén), coas filas colocadas libres do edificio. Marque o que queira, lea o número e logo prema {{ui:Engadir as cotas}}. Son cotas de referencia ordinarias, así que seguen aos muros cando estes se moven, e pode escoller, mover ou eliminar calquera delas; o conxunto completo é un só paso de desfacer, e volver executalo non crea ningunha duplicada.

Acota só o exterior: os espazos dentro do edificio, os muros curvos e os muros que non están en ángulo recto coa planta quedan para as ferramentas manuais, e as liñas de reixa non son muros, polo que aquí non se fan cotas entre reixas. O seu asistente conectado pode facer o mesmo con `plan_dimension`.

A cota está unida aos muros, non a un punto da pantalla: cando un muro se move ou cambia o seu tipo, o valor séguea. Se se elimina un muro, a cota indica que non está resolta e non mostra número, ata que a revincule ou desfaga. A caixa de lonxitude tamén admite coordenadas de planta como `10',12'` para unha liña de cota nun lugar exacto.

As cotas son para os muros que BimCraft debuxou, en vistas de planta. Aínda non están feitas: cotas en seccións e alzados, cotas de portas, xanelas e outros compoñentes, e capas de composición debuxadas na planta e na sección; vexa [Que aínda non está feito](topic:not-built-yet).

## Ver tamén

[Debuxar muros](topic:draw-walls), [Cambiar un muro, porta ou xanela](topic:change-a-wall-or-door), [Propiedades](topic:properties-panel).
