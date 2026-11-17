---
title: Editar unha familia
summary: Cambie os parámetros, as fórmulas e os sólidos dunha familia, mostre partes mediante un parámetro Sí / Non, corte e una sólidos, dea conectores para tubaxes e condutos, e vexa o resultado debuxado a partir do IFC que vai gardar.
keywords: editor de familias, editar familia, parámetro, parámetros, fórmula, fórmulas, visibilidade, sí non, sólido, sólidos, caixa, extrusión, extruír, revolución, barrido, perfil, arco, booleana, booleanas, cortar, unir, diferenza, unión, asa, asas, plano de traballo, esbozo, nova familia, conector, conectores, porto, portos, conector de tubaxe, conector de conduto, desaugadoiro, subministración de auga
from: 1ab31c10
---

## Abrir o editor

Abra unha familia (o grupo **Familias** do navegador de proxecto, ou {{ui:Compilación}} › {{ui:Familias…}}) e faga clic en {{ui:Editar a familia}}. Para empezar desde cero, faga clic en {{ui:Nova familia}}: dálle un nome, diga o que é (unha porta, unha xanela, mobiliario, un accesorio ou outra cousa) e, para unha porta ou unha xanela, de que partida proceden o seu símbolo de planta e a súa asa. O editor ábrese cunha familia con uns poucos parámetros e un sólido.

Editar unha familia de partida garda os seus cambios só neste modelo. Os outros modelos conservan a partida tal como está.

Nada do modelo cambia ata que faga clic en {{ui:Gardar a familia}}. O editor ten o seu propio desfacer e refacer (as frechas xunto ao nome, ou {{key:Mod+Z}} e {{key:Mod+Y}}); gardar é un paso no desfacer do modelo.

## Parámetros

A lapela {{ui:Parámetros}} lista os parámetros da familia: un nome, un tipo e un valor por defecto. Os tipos son: **Lonxitude** (milímetros), **Ángulo** (graos), **Número**, **Número enteiro**, **Sí / Non**, **Pluma** (1–16), e tres que gardan palabras en vez de números: **Texto**, **Material** (un dos materiais do proxecto) e **Trama** (unha trama da planta). As palabras non se usan en fórmulas; dan cor a un sólido (o seu **Material**), enchen unha parte dun símbolo, ou impórtanse como `{Nome}` dentro do texto dun símbolo. A caixa **Por elemento** fai que un parámetro sexa algo que cada elemento colocado fixa para si, en vez do seu tamaño.

- Unha **fórmula** fai que un parámetro siga a outros, por exemplo `Width / 30` ou `if(Width > 1200, 2, 1)`. As lonxitudes en fórmulas son milímetros, ou escriba unha unidade: `3'`, `6in`, `50cm`.
- Cambiar o nome dun parámetro cámbiao en todas as fórmulas e campos que o usan. Un parámetro que aínda está en uso non se pode eliminar.
- O **Material** dun sólido toma a cor dun material do proxecto (ou dun parámetro Material), **Mostrar en** oculta o sólido nos niveis de detalle máis grosos, e **Repetir** fai copias: un número (un parámetro Número ou Número enteiro, de 1 a 200) e o paso entre elas en x, y e z. Un sólido repetido é unha fila de taboleiros, barras ou furados; usado nun corte, as copias córtanse xuntas.
- Unha familia de porta ou de xanela tamén recibe dous nomes do seu muro: `WallThickness` e `Face` (1 ou −1, o lado ao que abre a porta).

## Sólidos

A lapela {{ui:Sólidos}} lista os sólidos. Engada unha caixa, unha extrusión, unha revolución ou un barrido:

| Sólido | O que fixa |
|---|---|
| Caixa | as súas dúas esquinas: x0 a x1, y0 a y1, z0 a z1 |
| Extrusión | un perfil nun plano de traballo (planta, alzado ou lateral), onde está o plano e unha profundidade |
| Revolución | un perfil, un eixo no plano e un ángulo ata 360° |
| Barrido | unha traxectoria de puntos e un raio (unha barra ou un carril) |

Cada número pode ser un número escrito ou unha expresión dos parámetros. Cada sólido ten unha cor e **Mostrar cando**: déixeo baleiro para mostralo sempre, ou escriba o nome dun parámetro Sí / Non (ou unha comparación como `Shelves >= 3`) para mostralo só entón. Iso é un parámetro de visibilidade.

### Debuxar un perfil

O perfil dunha extrusión ou dunha revolución debúxase no seu plano de traballo, baixo a vista previa:

- Faga clic no papel para engadir un punto despois do escollido.
- Arrastre un punto para movelo. Os puntos encaixan na cuadrícula; manteña {{key:Shift}} para colocalos libremente.
- Faga clic nun cadrado pequeno dun segmento para engadir alí un punto. {{key:Shift}}+clic nel fai dese segmento un arco (faga clic de novo para o outro sentido, e despois recto).
- Faga dobre clic nun punto para eliminalo.

Os puntos ocos fíxanse por parámetros: cámbieos na táboa, non os arrastre.

## Booleanas

A lapela {{ui:Booleanas}} corta o segundo sólido do primeiro, ou úneos. O resultado dunha booleana pode cortarse ou unirse de novo. Un sólido usado nunha booleana debúxase só como parte dela.

Cando o segundo sólido está oculto polo seu parámetro Sí / Non, o primeiro mantense tal como está; cando o primeiro está oculto, o resultado tamén.

## Símbolo en planta

A lapela {{ui:Símbolo en planta}} debuxa o que mostra a planta para esta familia, en vez do corte dos seus sólidos: liñas, rectángulos, círculos, arcos, polígonos e texto, nos propios eixos da familia. Cada parte ten unha **pluma** (1–16, unha expresión ou un parámetro Pluma), unha **trama** (ningunha, sólida, diagonal, cruzada, formigón, illamento, terra, ou un parámetro Trama), unha expresión **mostrado por**, un **rango de corte** en milímetros por enriba da súa base (debúxase con peso completo cando o corte da planta está dentro, fina por debaixo e a trazos por enriba: un armario por enriba do corte móstrase a trazos), un nivel de detalle e unha repetición. O texto pode nomear parámetros como `{Nome}`. **A planta mostra: O corte dos sólidos** mantén a planta cortando os sólidos mentres o símbolo queda na familia. Os outros programas len o símbolo como a pegada da familia (liñas e formas; o texto queda en BimCraft).

## Familias dentro

A lapela {{ui:Familias dentro}} pon outra familia dentro desta: unha pata nunha mesa, unha asa nunha porta. Escolla a familia, despois onde vai (x, y, z), canto está xirada (só cuartos de volta: 0, 90, 180, 270), cando se mostra, e os valores que recibe, un por liña, como `Height = Height - 40`. Ao gardar a familia interior, debúxase de novo esta; unha familia que outra contén non se pode eliminar; unha familia non pode conterse a si mesma, nin sequera a través doutra, e o aniñado para en catro niveis.

## Puntos activos

Un punto activo é un punto ou unha arista que arrastra para cambiar un parámetro. Na lapela {{ui:Puntos activos}} engada un, escolla o eixe polo que arrastra e o parámetro numérico que cambia, e escriba a súa posición coas mesmas expresións que os sólidos. Na vista previa, escolla **Puntos activos** baixo as asas para arrastralos. Nun elemento colocado na planta (escóllao con {{ui:Seleccionar}}), os puntos activos x e y móstranse como agarres: arrástrese un e o elemento toma o tamaño que pon o punto aí, a través de calquera fórmula que haxa entre medias; un Desfacer devólvello. Un punto activo non pode cambiar un parámetro conducido por fórmula, un Sí / Non nin unha palabra.

No espazo 3D, os mesmos puntos activos aparecen como agarres no elemento seleccionado, e os de arriba e abaixo (eixe z) aparecen tamén, cousa que a planta non pode debuxar. Escolla o elemento, arrastre un agarre polo seu eixe e solte: o elemento toma o tamaño que pon o punto aí, como un único paso de desfacer. Os agarres ocúltanse mentres a caixa de sección está activa, porque usa eses mesmos agarres.

## Conectores

As familias colocadas nun piso (mobiliario, accesorios e outras) teñen unha lapela {{ui:Conectores}}: os puntos onde unha tubaxe ou un conduto se une ao elemento, como na billa e no desaugadoiro dun lavabo. Faga clic en {{ui:Engadir un conector}} e fixe:

- **Tipo**: tubaxe ou conduto, e o seu **Sistema** (auga fría, desaugadoiro sanitario, aire de subministración…).
- **x**, **y** e **z**: onde está, nos eixos propios da familia. Como os números dun sólido, cada un pode ser un número ou unha fórmula dos parámetros, así que o conector se move co tamaño.
- **Dirección de saída**: a dirección pola que a tubaxe ou o conduto sae, ao longo dun dos eixos da familia (un desaugadoiro baixo un lavabo sae **Abaixo**).
- **Tamaño (mm)**: o tamaño nominal da tubaxe (DN) ou o diámetro do conduto redondo.
- **Fluxo**: **Entrada** para un conector alimentado (unha billa), **Saída** para un que desagua.

A vista previa debuxa cada conector como un anel cunha frecha na dirección de saída. As portas e as xanelas non teñen conectores.

Para un accesorio de fontanería, escolla cal é en **Accesorio de fontanería** (inodoro, lavabo, pía de cociña, ducha, pía de lavar). As partidas xa o indican.

Cada elemento colocado desde a familia recibe os seus conectores como portos no ficheiro IFC, e réfanse cando o elemento cambia de tamaño ou cando se garda a familia. Os programas que len sistemas IFC ven onde pertence cada tubaxe ou conduto.

## A vista previa e as súas asas

A vista previa é a familia escrita como IFC, polo mesmo código que a garda no modelo, e debuxada de novo. O que vostede ve é o que reciben os outros programas. Debaixo, **Tamaño mostrado** fixa os valores dos parámetros que usa a vista previa.

As **asas** son puntos na vista previa: **O tamaño** mostra unha asa para Largura, Fondo e Altura; **O sólido escollido** mostra unha en cada cara do sólido que escolla. Arrastre unha asa:

- nunha cara fixada por un parámetro, cambia o tamaño mostrado (as fórmulas da familia consérvanse);
- nunha cara fixada por un número escrito, cambia ese número.

## Gardar

{{ui:Gardar a familia}} comproba a familia, debuxa de novo cada un dos seus tamaños e refai cada elemento, como un único paso que pode desfacer. Se un tamaño non se pode debuxar co cambio (por exemplo, un sólido quedaría sen ancho nese tamaño), non se garda nada e o editor indica cal é o tamaño.

Se outra persoa gardou a mesma familia mentres o seu editor estaba aberto (nunha sesión de Live TeamWork, ou noutra xanela), {{ui:Gardar a familia}} recúsase e dío, en vez de substituír o cambio da outra persoa polo seu. Peche o editor, abra a familia de novo para ver o cambio da outra persoa, e faga o seu de novo.

:::note
A xeometría gárdase como os propios sólidos de IFC: extrusións, revolucións, discos de barrido e resultados de booleanas. Nada se convirte nunha lista de triángulos, así que os ficheiros quedan pequenos e outros programas poden ler as formas como formas. Os perfís con arcos gárdanse con arcos en IFC4; IFC2X3 non ten segmentos de arco nun perfil, así que alí os arcos se gardan como trazos rectos curtos.
:::

Ver tamén [Familias e os seus tamaños](topic:families).
