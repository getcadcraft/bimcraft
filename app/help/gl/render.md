---
title: Renderizar unha imaxe do modelo
summary: Faga unha imaxe con luz do día da vista 3D: ceo, o sol na latitude do emprazamento, sombras suaves, xanelas de vidro; con WebGPU, trazado de camiños na tarxeta gráfica con ceos, cámara, mestura de luces, graduación, néboa e cola de render.
keywords: render, predefinición, predefinicións de escena, interior, exterior, vista de sección, noite, un clic, renderizado, trazado de camiños, trazado de raios, iluminación global, reflexos, refracción, alta calidade, foto, fotorrealista, realista, imaxe, png, fixa, ceo, sol, luz do día, sombras, sombras suaves, oclusión ambiental, vidro, xanelas, metal, materiais, exposición, brillo, nubrado, crepúsculo, estudio, presentación, visualización, webgpu, reducir ruído, ceo físico, hdri, ies, profundidade de campo, panorama, balance de brancos, mestura de luces, elementos de render, exr, png de 16 bits, néboa, cáusticas, cola de render
from: beb74cc7
---

{{ui:Render}} na barra de ferramentas fai unha imaxe da vista 3D que parece luz do día: un ceo, o sol onde a latitude do emprazamento o sitúa, sombras suaves, luz de todo o ceo que escurece as esquinas, e cores que poden parecer vidro ou metal. Non se cambia o modelo nin o ficheiro.

## Renderizar a vista

1. Prepare a vista 3D como queira a imaxe: oriente e amplíe, oculte as plantas ou elementos que non quere, e poña unha [sección](topic:section-plane) se a imaxe debe mostrar un corte.
2. Prema {{ui:Render}} na barra de ferramentas.
3. Escolla unha {{ui:Escena}} se a que está pulsada non é a que quere (ver [Predefinicións de escena](topic:render#scene-presets-a-good-picture-in-one-click)), escolla o {{ui:Tamaño}}, e logo prema {{ui:Render}} no diálogo.

   A imaxe vai aparecendo mentres se renderiza e mellora en cada pasada. {{ui:Parar}} (ou {{key:Esc}}) detén o proceso e conserva a imaxe ata ese momento.

4. Prema {{ui:Gardar}} para descargala como PNG, ou {{ui:Gardar como}} para outro formato (ver [Gardar a imaxe](topic:render#save-the-picture)). Lévalle o nome do ficheiro do modelo.

:::tip
Comece con {{ui:Borrador}} ao {{ui:Tamaño da vista}} para comprobar a cámara, e logo renderice en {{ui:Boa}} ou {{ui:Mellor}} nun tamaño maior para a imaxe final.
:::

## Predefinicións de escena: unha boa imaxe cun clic

A parte superior do diálogo ten catro botóns {{ui:Escena}}. Cada un fixa o ceo, o brillo, o chan, as liñas de borde, a calidade e o sol cun clic, así que non hai nada que aprender antes da primeira imaxe. Prema un e logo {{ui:Render}}.

| Escena | Que fixa | Para que |
|---|---|---|
| {{ui:Exterior}} | Ceo despexado, o sol propio do modelo, chan activado | O edificio desde fóra |
| {{ui:Interior}} | Ceo nubrado (luz uniforme, sen manchas de sol duras), medio paso máis claro | Unha vista desde dentro dunha sala |
| {{ui:Vista de sección}} | Estudio branco, sen chan, liñas de borde no render rápido | Un modelo cortado por unha sección |
| {{ui:Noite}} | O sol abaixo (medianoite en pleno inverno para a metade do mundo do emprazamento), un paso máis claro | Lámpadas que iluminan o modelo. Sen lámpadas a imaxe sae escura |

- {{ui:Escoller para esta vista}} escolle por vostede: {{ui:Vista de sección}} cando hai un corte de sección activo, {{ui:Interior}} cando a cámara está dentro do modelo, e {{ui:Exterior}} noutro caso. A primeira vez que abre o diálogo comeza así por si só.
- Todos os axustes seguen abaixo e poden cambiarse. Cando cambia algún, a escena deixa de estar pulsada e a liña baixo os botóns indica que os axustes son propios. Prema de novo a escena para devolverlle os seus valores.
- Unha escena non toca o motor, o modo, o tamaño, os materiais, a cámara nin as lámpadas.

:::note
As escenas dan os mesmos valores en ModelCraft e BimCraft. O aspecto final da imaxe depende do seu modelo e da súa tarxeta gráfica.
:::

## Que aparece na imaxe

Na imaxe aparece en sólido o que mostra a vista 3D: os elementos ocultos e transparentes, as plantas ocultas e os modelos ocultos quedan fóra, e as salas só se ven cando {{ui:Espazos}} está activo. Un plano de sección ou caixa de sección corta a imaxe como corta a vista. Os elementos mostran as súas propias cores: a coloración por propiedade (a pestana {{ui:Cor}}) non se usa.

## Axustes

| Axuste | Que fai |
|---|---|
| {{ui:Tamaño}} | O tamaño da vista, o dobre do tamaño da vista, Full HD, 4K ou un cadrado |
| {{ui:Modo}} | {{ui:Rápido}}, ou {{ui:Alta calidade (trazado de camiños)}} (abaixo) co seu {{ui:Límite de tempo}} |
| {{ui:Calidade}} | Cantas pasadas (ou, en alta calidade, mostras) se promedian: {{ui:Borrador}} 16, {{ui:Boa}} 64, {{ui:Mellor}} 256. Máis pasadas dan sombras e bordos máis suaves e tardan máis |
| {{ui:Ceo}} | {{ui:Ceo despexado}}, {{ui:Nubrado}}, {{ui:Crepúsculo}} ou {{ui:Estudio branco}} (un fondo branco liso) |
| {{ui:Sol}} | 21 de xuño ás 15:00 na latitude que o ficheiro indica para o seu emprazamento (IfcSite), xirado ao norte verdadeiro do modelo. Marque {{ui:Usar outra data e hora para esta imaxe}} para outro momento |
| {{ui:Brillo}} | Máis claro ou máis escuro, en pasos (stops) |
| {{ui:Terreo baixo o modelo}} | Un chan no punto máis baixo do modelo que recibe as sombras e se perde no horizonte |
| {{ui:Debuxar arestas}} | Debuxa as arestas dos elementos, finas, sobre a imaxe |

Cando o sol está baixo o horizonte á hora escollida é de noite: o ceo escurece e as lámpadas do modelo iluminan.

## Lámpadas

Cada luminaria do modelo é unha lámpada na imaxe: as luminarias dun ficheiro IFC (IfcLightFixture, ou un elemento tipificado como luminaria), incluídas as que coloque desde a biblioteca. Cada unha brilla cara abaixo desde xusto debaixo da luminaria. Cando o ficheiro indica a potencia dunha luminaria, o seu brillo sae dela; se non, son 800 lumens, un branco cálido.

O diálogo lista as lámpadas baixo {{ui:Lámpadas}}: desmarque unha para apagala, ou escriba o seu brillo en lumens. Estes cambios gárdanse no IFC (o conxunto de propiedades `CadCraft_Light` da luminaria, onde tamén pode cambialos en Propiedades), e {{key:Ctrl+Z}} os desfai.

Cando un ficheiro non indica onde está o seu emprazamento, o sol colócase a 40° norte, e o diálogo di iso. A hora é a hora local do emprazamento, calculada desde a súa lonxitude, así que pode estar unha hora desfasada onde os reloxos están configurados doutro xeito.

Estes axustes gárdanse neste navegador para a seguinte imaxe. Non se gardan no ficheiro IFC.

## Vidro e outros materiais

Baixo {{ui:Materiais}}, cada cor na pantalla ten un aspecto: {{ui:Mate}}, {{ui:Satinado}}, {{ui:Brillante}}, {{ui:Metal}}, {{ui:Metal pulido}}, {{ui:Vidro}} ou {{ui:Cristal esmerilado}}. As cores que o ficheiro IFC fai transparentes (o acristalamento das xanelas, por exemplo) empezan como {{ui:Vidro}}.

:::note
No modo {{ui:Rápido}}, o vidro e o metal reflicten o ceo, non o resto do modelo, e a luz non se dobra ao atravesar o vidro. O modo {{ui:Alta calidade (trazado de camiños)}} máis abaixo fai as dúas cousas.
:::

## Alta calidade

Escolla {{ui:Modo}} › {{ui:Alta calidade (trazado de camiños)}} para unha imaxe que segue a luz como a ve unha cámara:

- a luz rebota entre superficies, así que unha sala iluminada por unha xanela ou por unha lámpada queda iluminada por todos os lados e as cores tinguen os seus veciños;
- o vidro é vidro real: a luz se dobra ao atravesalo e reflicte o modelo;
- o metal e as superficies pulidas reflicten o resto do modelo;
- os paneis de luz iluminan como paneis, con sombras suaves.

É moito máis lento que {{ui:Rápido}}: cada pasada traza de novo a luz de cada píxel. A imaxe comeza granulosa e aclárase ao sumar mostras, así que comece pequeno ({{ui:Tamaño da vista}}, {{ui:Borrador}}) e escolla un {{ui:Límite de tempo}}: cando se esgota, consérvase a imaxe ata ese momento. {{ui:Parar}} tamén a conserva. A primeira pasada agarda mentres o navegador prepara o trazador de camiños.

Onde o navegador ten WebGPU, o trazador de camiños é o propio de CadCraft e funciona na tarxeta gráfica; a liña baixo a imaxe indícao. Despois de {{ui:Parar}} ou do límite de tempo, {{ui:Reanudar}} continúa coa mesma imaxe ata completar as súas mostras; cambiar un axuste ou premer {{ui:Render}} de novo comeza desde cero. Sen WebGPU, a imaxe trázase con WebGL (a liña indícao) e {{ui:Reanudar}} non se ofrece.

:::linux
Firefox e a maioría das configuracións de Chrome en Linux aínda non teñen WebGPU, así que a alta calidade usa WebGL alí.
:::

Neste modo non se debuxan bordos, as texturas mostran a súa cor e rugosidade pero non os seus relevos, e un corte de sección faise sobre o modelo antes de comezar a imaxe.

{{ui:Reducir o ruído (elimina o gran que queda despois das mostras)}} está activado por defecto: cando a imaxe está rematada, ou detida, o gran que queda elimínase cunha rede neuronal feita para isto (a rede publicada de Intel Open Image Denoise, executada no seu propio computador: na tarxeta gráfica, se non no procesador). {{ui:Mostrar}} › {{ui:A imaxe antes de reducir o ruído}} mostra a imaxe tal como se renderizou.

## Ceos e perfís de luz na tarxeta gráfica

Con WebGPU, a alta calidade ten dous ceos máis:

- {{ui:Ceo físico}} calcula a luz do día a partir da altura do sol: un azul profundo por enriba, unha banda pálida no horizonte, e un sol que se volve máis cálido e máis feble ao baixar. {{ui:Bruma}} vai dun día moi claro (2) a un día con néboa (10).
- {{ui:Imaxe do ceo (HDRI)}} ilumina o modelo cunha panorámica dun lugar real. {{ui:Escolla unha imaxe…}} toma un ficheiro `.hdr` ou `.exr` equirrectangular; {{ui:Xirar}} xira a imaxe arredor do modelo e {{ui:Brillo da imaxe}} a fai máis clara ou máis escura. A imaxe leva o seu propio sol, así que o sol do modelo non se engade. Consérvase só mentres a páxina está aberta: despois de reabrila, escóllaa de novo.

Cada lámpada da lista {{ui:Lámpadas}} pode tomar un perfil de luz do fabricante: {{ui:Perfil IES…}} le un ficheiro IES (LM-63) e a lámpada entón espalla a súa luz como esa luminaria (un downlight estreito, un bañador de paredes). Todas as lámpadas con ese nome usan o perfil, e cada unha conserva o seu propio brillo. Prema o nome do perfil para deixar de usalo.

As xanelas de vidro transparente axudan á luz do ceo a entrar nunha sala.

O modo {{ui:Rápido}} e o trazador de camiños en WebGL mostran o {{ui:Ceo físico}} e a {{ui:Imaxe do ceo (HDRI)}} como un ceo despexado e ignoran os perfís de luz.

## A cámara

{{ui:Cámara}} prepara a imaxe como unha fotografía:

- {{ui:Exposición}}: manteña o {{ui:Control de brillo}}, ou escolla {{ui:Axustes da cámara}} e fixe a {{ui:Abertura (f-stop)}}, a {{ui:Velocidade de obturación}} e o {{ui:ISO}} como nunha cámara; o EV ao seu lado é o valor de exposición habitual. f/16 a 1/100 s e ISO 100 corresponde a un día soleado; unha escena máis escura quere unha abertura máis ampla, un obturador máis lento ou un ISO máis alto. Isto funciona en todos os modos.
- {{ui:Profundidade de campo}} desenfoca o que está máis preto ou máis lonxe que a {{ui:Distancia de enfoque (m)}}, como o faría unha lente con esa abertura (déixeo baleiro para enfocar o que está no centro da vista); {{ui:Forma da abertura}} dá aos brillos desenfocados unha forma redonda ou de láminas.
- {{ui:Perspectiva de dous puntos (as liñas verticais seguen verticais)}} nivela a cámara e despraza a imaxe, como fai unha lente arquitectónica de tilt-shift, para que as paredes non se inclinen ao mirar cara arriba ou abaixo cara a un edificio.
- {{ui:Balance de brancos}} fixa que cor de luz se ve como branca: máis baixo (por exemplo 3000 K) para a luz cálida das lámpadas, máis alto para a sombra e os días nubrados.
- {{ui:Proxección}}: {{ui:Panorama de 360°}} fai unha imaxe 2:1 de todo o que rodea a cámara para visores de panoramas; {{ui:Panorama estéreo de 360°}} apila un panorama para o ollo esquerdo e outro para o dereito, para cascos; {{ui:Mapa cúbico (6 caras)}} fai seis vistas cadradas nunha grella de 3 × 2. A largura vén de {{ui:Tamaño}}.

A proxección, a profundidade de campo, a perspectiva de dous puntos e o balance de brancos precisan o trazador de camiños na tarxeta gráfica (WebGPU), así que só se mostran en {{ui:Alta calidade (trazado de camiños)}}.

## Rematar a imaxe

{{ui:Imaxe}} gradúa a imaxe de alta calidade como unha fotografía, e cada control cambia a imaxe rematada ao momento, sen renderizar de novo:

- {{ui:Aspecto (transformación de vista)}}: {{ui:ACES filmic}} (a imaxe como antes), {{ui:AgX}} (máis suave, conserva a cor en luz moi brillante), {{ui:Filmic}} (unha curva de película suave) ou {{ui:Estándar}} (simple: a luz moi brillante recórtase a branco).
- {{ui:Contraste}} e {{ui:Compresión de luces altas}} (recupera detalle nas partes moi brillantes).
- {{ui:Bloom}} (un brillo suave arredor da luz intensa), {{ui:Resplandor}} con as súas {{ui:Raias de resplandor}} (raios de estrela desde os puntos máis brillantes) e {{ui:Viñeteado}} (esquinas máis escuras).
- {{ui:Tabla de cores (.cube)…}} aplica unha graduación de cor desde un ficheiro `.cube`, coa súa {{ui:Intensidade da tabla de cores}}; como unha imaxe de ceo, só se conserva mentres a páxina está aberta.

## Gardar a imaxe

{{ui:Gardar como}} xunto a {{ui:Gardar}} escolle o ficheiro: {{ui:PNG}}, {{ui:JPEG}} ou {{ui:WebP}} para compartir (JPEG e WebP só onde o navegador os pode escribir), e tras unha renderización de alta calidade na tarxeta gráfica tamén:

- {{ui:PNG, 16 bits}}: a imaxe graduada con pasos máis finos entre tons, para imprimir ou seguir editando.
- {{ui:EXR, todas as capas (coma flotante de 32 bits)}}: a imaxe tal como se renderizou (luz lineal, sen graduación) con cada elemento de render e grupo de luz como capa propia, para programas de composición.
- {{ui:Ficheiro de render (.ccrender, para axustar de novo despois)}}: todo o que o diálogo precisa para mesturar e graduar de novo a imaxe. {{ui:Abrir un ficheiro de render…}} trae de volta a imaxe, coa súa mestura e a súa graduación, sen renderizar.

## Mesturar as luces despois do render

Active {{ui:Mestura de luces (cambie a cor e o brillo de cada luz despois do render)}} antes de premer {{ui:Render}}. Cando a imaxe está lista (ou detida), {{ui:Mesturar a imaxe}} lista as súas luces en grupos: o ceo, o sol e as lámpadas por nome (cada lámpada co mesmo nome é un grupo). Apague un grupo, dálle unha cor, ou fágao máis claro ou máis escuro, e a imaxe cambia ao momento, sen renderizar de novo. {{ui:Gardar mestura}} conserva a mestura cun nome para escoller despois; {{ui:Tal como se renderizou}} volve á imaxe tal como se fixo. {{ui:Gardar}} garda a imaxe mesturada.

{{ui:Elementos de render (albedo, normais, profundidade, difusa, especular, transmisión, emisión, IDs)}} conserva tamén as partes da imaxe. {{ui:Mostrar}} cambia a vista a unha delas: as cores da superficie (albedo), as normais, a profundidade, a luz difusa, especular e transmitida (cada unha directa e indirecta), o que brilla e o ceo, e unha cor por obxecto ou por material para facer máscaras.

Ambas cousas gardan capas extra na tarxeta gráfica. En tamaños grandes, a tarxeta gráfica pode non ter espazo; o diálogo di iso e un tamaño menor funciona.

## Néboa, fume, ruído e cáusticas

Estes axustes están en {{ui:Néboa, fume e ruído}} e funcionan en {{ui:Alta calidade (trazado de camiños)}} na tarxeta gráfica; os outros motores non os inclúen.

- {{ui:Néboa e bruma}} enche o aire ata unha altura cunha néboa que o sol, o ceo e as lámpadas iluminan. {{ui:Ata onde se pode ver, en metros}} fixa o seu espesor (uns 100 m é unha bruma lixeira, 20 m unha néboa densa), {{ui:Altura da néboa sobre o chan, en metros}} é onde remata, e {{ui:Raios de luz}} é canto brilla a néboa cara á luz. A luz do sol abandona a néboa pola súa parte superior, así que onde o sol entra por unha xanela ou entre edificios se ve como raios de luz.
- {{ui:Fume ou nube}} engade un volume de fume ou nube iluminado como a néboa. {{ui:Tipo}} é unha {{ui:Nube}}, unha {{ui:Columna de fume}} ou {{ui:Desde un ficheiro de volume (.ccvol)}}, o formato de rede propio de CadCraft. {{ui:Detalle}} e {{ui:Variación}} cambian unha nube ou columna feita; {{ui:Tamaño do seu lado máis longo, en metros (0 = o tamaño do modelo)}}, {{ui:Mover X (m)}}, {{ui:Mover Y (m)}}, {{ui:Mover Z (m)}} e {{ui:Xirar}} a colocan (empeza no centro do modelo); {{ui:Espesor}} a fai máis densa, {{ui:Brillo cara adiante}} faina máis brillante cara á luz, e {{ui:Cor}} tinxea. Un ficheiro de volume consérvase só mentres a páxina está aberta, como unha imaxe de ceo.
- {{ui:Deter antes onde a imaxe está limpa (mostraxe adaptativa)}} non dá máis mostras aos píxeles que xa se estabilizaron. {{ui:Ruído aceptable}} é canto gran queda cando un píxel se detén. A liña baixo a imaxe indica cantas mostras recibiu de media un píxel.
- {{ui:Cáusticas (luz desviada polo vidro ou reflectida polos espellos)}} traza a luz das lámpadas e do sol, así que a mancha brillante baixo unha bóla de vidro ou a luz dun espello sobre unha parede sae limpa en vez de granulosa. Está desactivada mentres estean activos a néboa, o fume, a mestura de luces ou os elementos de render, e está pensada para imaxes, non para imaxes de 360°.

## A cola de render

{{ui:Cola de render}} no diálogo: {{ui:Engadir esta imaxe á cola}} conserva os axustes e a vista da imaxe, e {{ui:Iniciar a cola}} renderiza o que espera, un tras outro, neste computador. Pechar a páxina conserva a cola; abra o mesmo modelo para continuar. {{ui:Gardar}} descarga unha rematada; {{ui:Eliminar}} e {{ui:Limpar os terminados}} ordenan a lista. A cola renderiza en alta calidade, así que precisa WebGPU.

## Canto tarda

A imaxe faise no seu propio computador, pola súa tarxeta gráfica; non se envía nada. O tempo medra coas pasadas e os píxeles: {{ui:Mellor}} ten 16 veces as pasadas de {{ui:Borrador}}, e unha imaxe 4K ten uns catro veces os píxeles de Full HD. Os modelos grandes tardan máis por pasada.
