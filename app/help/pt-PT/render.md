---
title: Renderizar uma imagem do modelo
summary: Criar uma imagem com luz do dia da vista 3D: céu, sol à latitude do local, sombras suaves, janelas de vidro; com WebGPU, com path tracing na placa gráfica, céus, câmara, mistura de luzes, gradação, nevoeiro e fila de renderização.
keywords: render, predefinição, predefinições, predefinição de cena, interior, exterior, vista de corte, noite, um clique, renderização, path tracing, path traced, ray tracing, iluminação global, reflexos, refração, alta qualidade, foto, fotorrealista, realista, imagem, png, fixa, céu, sol, luz do dia, sombras, sombras suaves, oclusão ambiente, vidro, janelas, metal, materiais, exposição, luminosidade, encoberto, crepúsculo, estúdio, apresentação, visualização, webgpu, remoção de ruído, céu físico, hdri, ies, profundidade de campo, panorama, equilíbrio de brancos, mistura de luzes, elementos de renderização, exr, png 16 bits, nevoeiro, cáusticas, fila de renderização
from: beb74cc7
---

{{ui:Render}} na barra de ferramentas faz uma imagem da vista 3D com aspeto de luz do dia: um céu, o sol onde a latitude do local o coloca, sombras suaves, luz de todo o céu que escurece os cantos, e cores que podem parecer vidro ou metal. O modelo e o ficheiro não são alterados.

## Renderizar a vista

1. Configure a vista 3D como quer a imagem: oriente e aproxime, oculte os pisos ou elementos que não quer, e defina um [corte](topic:section-plane) se a imagem deve mostrar um corte.
2. Clique em {{ui:Render}} na barra de ferramentas.
3. Escolha uma {{ui:Scene}} se a que está ativa não for a pretendida (ver [Predefinições de cena](topic:render#scene-presets-a-good-picture-in-one-click)), escolha o {{ui:Size}} e clique em {{ui:Render}} na caixa de diálogo.

   A imagem preenche-se à medida que é renderizada e fica mais suave a cada passagem. {{ui:Stop}} (ou {{key:Esc}}) termina-a mais cedo e mantém a imagem até esse ponto.

4. Clique em {{ui:Save}} para a transferir como PNG, ou em {{ui:Save as}} para outro formato (ver [Guardar a imagem](topic:render#save-the-picture)). Fica com o nome do ficheiro do modelo.

:::tip
Comece com {{ui:Draft}} no {{ui:The view's size}} para verificar a câmara, depois renderize {{ui:Good}} ou {{ui:Best}} num tamanho maior para a imagem final.
:::

## Predefinições de cena: uma boa imagem com um clique

No topo da caixa de diálogo há quatro botões {{ui:Scene}}. Cada um define o céu, a luminosidade, o terreno, as linhas de arestas, a qualidade e o sol com um clique, por isso não há nada a aprender antes da primeira imagem. Clique num e depois em {{ui:Render}}.

| Cena | O que define | Para que serve |
|---|---|---|
| {{ui:Exterior}} | Céu limpo, o próprio sol do modelo, terreno ativo | O edifício visto de fora |
| {{ui:Interior}} | Céu encoberto (luz uniforme, sem manchas de sol diretas), meio ponto de exposição mais luminoso | Uma vista do interior de uma sala |
| {{ui:Section view}} | Estúdio branco, sem terreno, linhas de arestas no render rápido | Um modelo cortado por um corte |
| {{ui:Night}} | O sol em baixo (meia-noite de pleno inverno para o hemisfério do local), mais um ponto de exposição | Lâmpadas a iluminar o modelo. Sem lâmpadas a imagem fica escura |

- {{ui:Pick for this view}} escolhe por si: {{ui:Section view}} quando um corte está ativo, {{ui:Interior}} quando a câmara está dentro do modelo, caso contrário {{ui:Exterior}}. Na primeira vez que abre a caixa de diálogo começa assim automaticamente.
- Todas as definições ficam abaixo e podem ser alteradas. Depois de alterar uma que a cena define, nenhum botão fica premido e a linha abaixo dos botões indica que as definições são suas. Clique de novo na cena para repor os seus valores.
- Uma cena não altera o motor, o modo, o tamanho, os materiais, a câmara nem as lâmpadas.

:::note
As cenas dão os mesmos valores no ModelCraft e no BimCraft. O aspeto final da imagem depende do modelo e da sua placa gráfica.
:::

## O que aparece na imagem

O que a vista 3D mostra sólido: elementos ocultos e transparentes, pisos ocultos e modelos ocultos ficam de fora, e os espaços só aparecem quando {{ui:Spaces}} está ativo. Um plano de corte ou uma caixa de corte corta a imagem como corta a vista. Os elementos aparecem nas suas próprias cores: a colorir por propriedade (o separador {{ui:Color}}) não é usado.

## Definições

| Definição | O que faz |
|---|---|
| {{ui:Size}} | O tamanho da vista, o dobro do tamanho da vista, Full HD, 4K ou um quadrado |
| {{ui:Mode}} | {{ui:Fast}}, ou {{ui:High quality (path traced)}} (abaixo) com o seu {{ui:Time limit}} |
| {{ui:Quality}} | Quantas passagens (ou, em alta qualidade, amostras) são calculadas em média: {{ui:Draft}} 16, {{ui:Good}} 64, {{ui:Best}} 256. Mais passagens dão sombras e arestas mais suaves e demoram mais |
| {{ui:Sky}} | {{ui:Clear sky}}, {{ui:Overcast}}, {{ui:Dusk}} ou {{ui:White studio}} (um fundo branco simples) |
| {{ui:Sun}} | 21 de junho às 15:00 na latitude que o ficheiro indica para o seu local (IfcSite), rodado para o norte verdadeiro do modelo. Marque {{ui:Use another date and time for this picture}} para outra hora |
| {{ui:Brightness}} | Mais claro ou mais escuro, em pontos de exposição (stops) |
| {{ui:Ground under the model}} | Um terreno no ponto mais baixo do modelo que recebe as sombras e se dissolve no horizonte |
| {{ui:Draw edges}} | Desenha as arestas dos elementos com um traço fino sobre a imagem |

Quando o sol está abaixo do horizonte na hora escolhida, é noite: o céu escurece e as lâmpadas do modelo iluminam-no.

## Lâmpadas

Cada luminária do modelo é uma lâmpada na imagem: as luminárias de um ficheiro IFC (IfcLightFixture, ou um elemento tipificado como luminária), incluindo as que coloca a partir da biblioteca. Cada uma brilha para baixo, a partir logo abaixo da luminária. Quando o ficheiro indica a potência de uma luminária, a sua luminosidade segue-a; caso contrário são 800 lúmens, um branco quente.

A caixa de diálogo lista as lâmpadas em {{ui:Lamps}}: desmarque uma para a desligar, ou escreva a sua luminosidade em lúmens. Estas alterações ficam guardadas no IFC (o conjunto de propriedades `CadCraft_Light` da luminária, onde também as pode alterar em Propriedades), e {{key:Ctrl+Z}} as anula.

Quando um ficheiro não indica onde fica o seu local, o sol é colocado a 40° norte, e a caixa de diálogo diz isso. A hora é a hora local do local, calculada a partir da sua longitude, por isso pode estar uma hora desfasada onde os relógios estão definidos de forma diferente.

Estas definições ficam guardadas neste navegador para a próxima imagem. Não ficam guardadas no ficheiro IFC.

## Vidro e outros materiais

Em {{ui:Materials}}, cada cor no ecrã tem um aspeto: {{ui:Matte}}, {{ui:Satin}}, {{ui:Glossy}}, {{ui:Metal}}, {{ui:Polished metal}}, {{ui:Glass}} ou {{ui:Frosted glass}}. As cores que o ficheiro IFC torna transparentes (os envidraçados das janelas, por exemplo) começam como {{ui:Glass}}.

:::note
No modo {{ui:Fast}}, o vidro e o metal refletem o céu, não o resto do modelo, e a luz não se curva através do vidro. O modo {{ui:High quality (path traced)}} abaixo faz ambas as coisas.
:::

## Alta qualidade

Escolha {{ui:Mode}} › {{ui:High quality (path traced)}} para uma imagem que segue a luz tal como uma câmara a vê:

- a luz ressalta entre superfícies, por isso uma sala iluminada por uma janela ou por uma lâmpada fica iluminada por todos os lados, e as cores passam para as vizinhas;
- o vidro é vidro real: a luz curva-se através dele e ele reflete o modelo;
- o metal e as superfícies polidas refletem o resto do modelo;
- os painéis de luz iluminam como painéis, com sombras suaves.

É muito mais lento do que {{ui:Fast}}: cada passagem volta a traçar a luz de cada pixel. A imagem começa granulada e fica limpa à medida que as amostras se acumulam, por isso comece pequeno ({{ui:The view's size}}, {{ui:Draft}}) e escolha um {{ui:Time limit}}: quando o tempo acaba, a imagem até esse ponto é mantida. {{ui:Stop}} também a mantém. A primeira passagem espera enquanto o navegador prepara o path tracer.

Onde o navegador tem WebGPU, o path tracer é o do CadCraft e corre na placa gráfica; a linha por baixo da imagem indica-o. Depois de {{ui:Stop}} ou do limite de tempo, {{ui:Resume}} continua a mesma imagem até ter todas as amostras; alterar uma definição ou premir {{ui:Render}} de novo começa do zero. Sem WebGPU, a imagem é calculada com WebGL (a linha indica-o) e {{ui:Resume}} não é oferecido.

:::linux
O Firefox e a maioria das configurações do Chrome no Linux ainda não têm WebGPU, por isso a alta qualidade usa WebGL nesses casos.
:::

Neste modo as arestas não são desenhadas, as texturas mostram a sua cor e rugosidade mas não os seus relevos, e é feito um corte no modelo antes de a imagem começar.

{{ui:Denoise (clears the grain left after the samples)}} está ativo por defeito: quando a imagem fica pronta, ou é parada, o grão que resta é limpo por uma rede neuronal feita para isso (a rede publicada pela Intel Open Image Denoise, executada no seu próprio computador: na placa gráfica, senão no processador). {{ui:Show}} › {{ui:The picture before denoising}} mostra-a tal como foi renderizada.

## Céus e perfis de luz na placa gráfica

Com WebGPU, a alta qualidade tem mais dois céus:

- {{ui:Physical sky}} calcula a luz do dia a partir da altura do sol: um azul profundo por cima, uma faixa pálida no horizonte, e um sol que fica mais quente e mais fraco à medida que baixa. {{ui:Haze}} vai de um dia muito limpo (2) a um dia enevoado (10).
- {{ui:Sky picture (HDRI)}} ilumina o modelo com uma imagem panorâmica de um lugar real. {{ui:Choose a picture…}} escolhe um ficheiro `.hdr` ou `.exr` equirretangular; {{ui:Turn}} roda-o à volta do modelo e {{ui:Picture brightness}} torna-o mais claro ou mais escuro. A imagem traz o seu próprio sol, por isso o sol do modelo não é acrescentado. Fica guardada apenas enquanto a página estiver aberta: depois de reabrir, escolha-a de novo.

Cada lâmpada na lista {{ui:Lamps}} pode receber um perfil de luz do fabricante: {{ui:IES profile…}} lê um ficheiro IES (LM-63), e a lâmpada passa a emitir a sua luz como essa luminária (um foco descendente estreito, um iluminador de parede). Todas as lâmpadas com esse nome usam-no, e cada uma mantém a sua própria luminosidade. Clique no nome do perfil para deixar de o usar.

As janelas de vidro transparente ajudam a luz do céu a entrar numa sala.

O modo {{ui:Fast}} e o path tracer em WebGL mostram o {{ui:Physical sky}} e a {{ui:Sky picture (HDRI)}} como um céu limpo e ignoram os perfis de luz.

## A câmara

{{ui:Camera}} posiciona a imagem como uma fotografia:

- {{ui:Exposure}}: mantenha o {{ui:Brightness slider}}, ou escolha {{ui:Camera settings}} e defina a {{ui:Aperture (f-stop)}}, a {{ui:Shutter speed}} e o {{ui:ISO}} como numa câmara; o EV ao lado é o valor de exposição habitual. f/16 a 1/100 s e ISO 100 corresponde a um dia de sol; uma cena mais escura pede uma abertura maior, uma velocidade mais lenta ou um ISO mais alto. Isto funciona em todos os modos.
- A {{ui:Depth of field}} desfoca o que está mais perto ou mais longe do que a {{ui:Focus distance (m)}}, como o faria uma lente com esse f-stop (deixe-a vazia para focar o que está no meio da vista); a {{ui:Aperture shape}} dá aos realces desfocados uma forma redonda ou de lâminas.
- {{ui:Two-point perspective (vertical lines stay vertical)}} nivela a câmara e desloca a imagem, como faz uma lente de deslocamento arquitetónica, para que as paredes não se inclinem quando olha para cima ou para baixo para um edifício.
- O {{ui:White balance}} define qual a luz que aparece como branca: mais baixo (por exemplo 3000 K) para a luz quente de lâmpadas, mais alto para sombra e dias encobertos.
- {{ui:Projection}}: {{ui:360° panorama}} faz uma imagem 2:1 de tudo à volta da câmara para visualizadores de panorama; {{ui:360° stereo panorama}} empilha um panorama para o olho esquerdo e outro para o direito, para óculos de realidade virtual; {{ui:Cube map (6 faces)}} faz seis vistas quadradas numa grelha de 3 × 2. A largura vem de {{ui:Size}}.

A projeção, a profundidade de campo, a perspetiva de dois pontos e o equilíbrio de brancos precisam do path tracer na placa gráfica (WebGPU), por isso só aparecem em {{ui:High quality (path traced)}}.

## Acabar a imagem

{{ui:Picture}} gradua a imagem de alta qualidade como uma fotografia, e cada controlo altera a imagem final de imediato, sem renderizar de novo:

- {{ui:Look (view transform)}}: {{ui:ACES filmic}} (a imagem como antes), {{ui:AgX}} (mais suave, mantém a cor em luz muito intensa), {{ui:Filmic}} (uma curva suave de filme) ou {{ui:Standard}} (simples: a luz muito forte fica branca).
- {{ui:Contrast}} e {{ui:Highlight compression}} (recupera detalhe nas partes muito luminosas).
- {{ui:Bloom}} (um brilho suave em volta de luzes fortes), {{ui:Glare}} com os seus {{ui:Glare streaks}} (raios em estrela a partir dos pontos mais brilhantes) e {{ui:Vignette}} (cantos mais escuros).
- {{ui:Colour table (.cube)…}} aplica uma gradação de cor a partir de um ficheiro `.cube`, com a sua {{ui:Colour table strength}}; tal como uma imagem de céu, só fica guardada enquanto a página estiver aberta.

## Guardar a imagem

{{ui:Save as}} ao lado de {{ui:Save}} escolhe o ficheiro: {{ui:PNG}}, {{ui:JPEG}} ou {{ui:WebP}} para partilhar (JPEG e WebP só onde o navegador os consegue escrever), e, depois de uma renderização de alta qualidade na placa gráfica, também:

- {{ui:PNG, 16 bits}}: a imagem graduada, com passos mais finos entre tons, para impressão ou edição posterior.
- {{ui:EXR, every layer (32-bit float)}}: a imagem tal como foi renderizada (luz linear, sem gradação), com cada elemento de renderização e grupo de luzes como camada própria, para programas de composição.
- {{ui:Render file (.ccrender, to grade again later)}}: tudo o que a caixa de diálogo precisa para voltar a misturar e a graduar a imagem. {{ui:Open a render file…}} traz de volta, com a sua mistura e a sua gradação, sem renderizar.

## Misturar as luzes depois da renderização

Ative a {{ui:Light mixing (change each light's colour and brightness after the render)}} antes de premir {{ui:Render}}. Quando a imagem fica pronta (ou é parada), {{ui:Mix the picture}} lista as suas luzes em grupos: o céu, o sol e as lâmpadas pelo nome (cada lâmpada com o mesmo nome é um grupo). Desligue um grupo, dê-lhe uma cor, ou torne-o mais claro ou mais escuro, e a imagem muda de imediato, sem renderizar de novo. {{ui:Save mix}} guarda a mistura com um nome para escolher mais tarde; {{ui:As rendered}} volta à imagem tal como foi feita. {{ui:Save}} guarda a imagem misturada.

{{ui:Render elements (albedo, normals, depth, diffuse, specular, transmission, emission, IDs)}} mantém também as partes da imagem. {{ui:Show}} muda a vista para uma delas: as cores das superfícies (albedo), as normais, a profundidade, a luz difusa, especular e transmitida (cada uma direta e indireta), o que brilha e o céu, e uma cor por objeto ou por material para fazer máscaras.

Ambos mantêm camadas extra na placa gráfica. Em tamanhos grandes uma placa gráfica pode não ter espaço; a caixa de diálogo indica-o, e um tamanho menor resolve.

## Nevoeiro, fumo, ruído e cáusticas

Estes estão em {{ui:Fog, smoke and noise}} e funcionam em {{ui:High quality (path traced)}} na placa gráfica; os outros motores não os incluem.

- {{ui:Fog and haze}} enche o ar até uma altura com uma névoa que o sol, o céu e as lâmpadas iluminam. {{ui:How far you can see, in meters}} define a densidade (cerca de 100 m é uma neblina ligeira, 20 m um nevoeiro denso), {{ui:Fog height above the ground, in meters}} é onde termina, e {{ui:Light shafts}} é quanto a névoa brilha em direção à luz. A luz do sol sai do nevoeiro no topo, por isso, onde o sol entra por uma janela ou entre edifícios, vê-o como feixes de luz.
- {{ui:Smoke or cloud}} acrescenta um volume de fumo ou nuvem iluminado como o nevoeiro. {{ui:Kind}} é uma {{ui:Cloud}}, uma {{ui:Smoke column}} ou {{ui:From a volume file (.ccvol)}}, o formato de grelha próprio do CadCraft. {{ui:Detail}} e {{ui:Variation}} alteram uma nuvem ou coluna feita; {{ui:Size of its longest side, in meters (0 = the size of the model)}}, {{ui:Move X (m)}}, {{ui:Move Y (m)}}, {{ui:Move Z (m)}} e {{ui:Turn}} posicionam-na (começa no meio do modelo); {{ui:Thickness}} torna-a mais densa, {{ui:Forward glow}} torna-a mais brilhante em direção à luz, e {{ui:Color}} tinge-a. Um ficheiro de volume fica guardado apenas enquanto a página estiver aberta, como uma imagem de céu.
- {{ui:Stop early where the picture is clean (adaptive sampling)}} não dá mais amostras a pixels que já estabilizaram. {{ui:Noise to accept}} é quanto grão fica quando um pixel para. A linha por baixo da imagem indica quantas amostras um pixel recebeu em média.
- {{ui:Caustics (light bent by glass or bounced by mirrors)}} traça a luz das lâmpadas e do sol, por isso a mancha luminosa debaixo de uma esfera de vidro, ou a luz de um espelho numa parede, sai limpa em vez de granulada. Fica desligada enquanto o nevoeiro, o fumo, a mistura de luzes ou os elementos de renderização estão ativos, e é feita para imagens, não para imagens de 360°.

## A fila de renderização

{{ui:Render queue}} na caixa de diálogo: {{ui:Add this picture to the queue}} guarda as definições e a vista da imagem, e {{ui:Start the queue}} renderiza o que espera, uma a seguir à outra, neste computador. Fechar a página mantém a fila; abra o mesmo modelo para continuar. {{ui:Save}} transfere uma concluída; {{ui:Remove}} e {{ui:Clear finished}} arrumam a lista. A fila renderiza em alta qualidade, por isso precisa de WebGPU.

## Quanto tempo demora

A imagem é feita no seu computador, pela sua placa gráfica; nada é enviado. O tempo cresce com as passagens e os pixels: {{ui:Best}} tem 16 vezes as passagens de {{ui:Draft}}, e uma imagem 4K tem cerca de quatro vezes os pixels de Full HD. Modelos grandes demoram mais por passagem.
