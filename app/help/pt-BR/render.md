---
title: Renderizar uma imagem do modelo
summary: Faça uma imagem com luz do dia da vista 3D: céu, sol na latitude do seu local, sombras suaves, janelas de vidro; com WebGPU, com path tracing na placa de vídeo, com céus, câmera, mistura de luz, tratamento de cor, neblina e uma fila de renderização.
keywords: renderizar, predefinição, predefinições, predefinição de cena, interior, exterior, vista de corte, noite, um clique, renderização, path tracing, path traced, ray tracing, iluminação global, reflexos, refração, alta qualidade, foto, fotorrealista, realista, imagem, png, imagem fixa, céu, sol, luz do dia, sombras, sombras suaves, oclusão ambiental, vidro, janelas, metal, materiais, exposição, brilho, nublado, entardecer, estúdio, apresentação, visualização, webgpu, redução de ruído, céu físico, hdri, ies, profundidade de campo, panorama, balanço de branco, mistura de luz, elementos de renderização, exr, png 16 bits, neblina, cáusticas, fila de renderização
from: beb74cc7
---

{{ui:Renderizar}} na barra de ferramentas faz uma imagem da vista 3D que parece luz do dia: um céu, o sol onde a latitude do local o coloca, sombras suaves, luz de todo o céu que escurece os cantos, e cores que podem parecer vidro ou metal. O modelo e o arquivo não são alterados.

## Renderizar a vista

1. Ajuste a vista 3D do jeito que quer a imagem: oriente e dê zoom, oculte os pavimentos ou elementos que não quer, e defina um [corte](topic:section-plane) se a imagem deve mostrar um corte.
2. Clique em {{ui:Renderizar}} na barra de ferramentas.
3. Escolha uma {{ui:Cena}} se a que estiver marcada não for a que você quer (veja [Predefinições de cena](topic:render#scene-presets-a-good-picture-in-one-click)), escolha o {{ui:Tamanho}} e clique em {{ui:Renderizar}} na caixa de diálogo.

   A imagem vai sendo preenchida à medida que é renderizada e fica mais lisa a cada passagem. {{ui:Parar}} (ou {{key:Esc}}) encerra antes e mantém a imagem até ali.

4. Clique em {{ui:Salvar}} para baixá-la como PNG, ou em {{ui:Salvar como}} para outro formato (veja [Salvar a imagem](topic:render#save-the-picture)). Ela recebe o nome do arquivo do modelo.

:::tip
Comece com {{ui:Rascunho}} em {{ui:O tamanho da vista}} para conferir a câmera, depois renderize {{ui:Bom}} ou {{ui:Melhor}} em um tamanho maior para a imagem final.
:::

## Predefinições de cena: uma boa imagem com um clique

No alto da caixa de diálogo há quatro botões de {{ui:Cena}}. Cada um define o céu, o brilho, o chão, as linhas de contorno, a qualidade e o sol com um clique, então não há nada para aprender antes da primeira imagem. Clique em um e depois em {{ui:Renderizar}}.

| Cena | O que define | Use para |
|---|---|---|
| {{ui:Exterior}} | Céu limpo, o sol próprio do modelo, chão ligado | O prédio por fora |
| {{ui:Interior}} | Céu nublado (luz uniforme, sem manchas de sol fortes), um stop mais claro | Uma vista de dentro de um ambiente |
| {{ui:Vista de corte}} | Estúdio branco, sem chão, linhas de contorno na renderização rápida | Um modelo cortado por um corte |
| {{ui:Noite}} | O sol abaixo do horizonte (meia-noite no inverno, para o hemisfério do local), um stop mais claro | Lâmpadas iluminando o modelo. Sem lâmpadas a imagem fica escura |

- {{ui:Escolher para esta vista}} escolhe por você: {{ui:Vista de corte}} quando um corte está ativo, {{ui:Interior}} quando a câmera está dentro do modelo, senão {{ui:Exterior}}. Na primeira vez que você abre a caixa de diálogo, ela começa assim sozinha.
- Todas as configurações ficam abaixo e podem ser alteradas. Quando você altera uma que a cena define, nenhum botão fica pressionado e a linha sob os botões informa que as configurações são suas. Clique na cena de novo para restaurar os valores dela.
- Uma cena não altera o motor, o modo, o tamanho, os materiais, a câmera nem as lâmpadas.

:::note
As cenas dão os mesmos valores no ModelCraft e no BimCraft. O resultado final da imagem depende do seu modelo e da sua placa de vídeo.
:::

## O que aparece na imagem

O que a vista 3D mostra sólido: elementos ocultos e transparentes, pavimentos ocultos e modelos ocultos ficam de fora, e os ambientes aparecem só quando {{ui:Espaços}} está ativo. Um plano de corte ou caixa de corte corta a imagem como corta a vista. Os elementos aparecem nas próprias cores: a coloração por propriedade (a guia {{ui:Cor}}) não é usada.

## Configurações

| Configuração | O que faz |
|---|---|
| {{ui:Tamanho}} | O tamanho da vista, o dobro do tamanho da vista, Full HD, 4K ou um quadrado |
| {{ui:Modo}} | {{ui:Rápido}}, ou {{ui:Alta qualidade (path tracing)}} (abaixo) com seu {{ui:Limite de tempo}} |
| {{ui:Qualidade}} | Quantas passagens (ou, em alta qualidade, amostras) são médias: {{ui:Rascunho}} 16, {{ui:Bom}} 64, {{ui:Melhor}} 256. Mais passagens deixam as sombras e as bordas mais suaves e demoram mais |
| {{ui:Céu}} | {{ui:Céu limpo}}, {{ui:Nublado}}, {{ui:Entardecer}} ou {{ui:Estúdio branco}} (um fundo branco liso) |
| {{ui:Sol}} | 21 de junho às 15:00 na latitude que o arquivo informa para o local dele (IfcSite), girado para o norte verdadeiro do modelo. Marque {{ui:Usar outra data e hora para esta imagem}} para outro horário |
| {{ui:Brilho}} | Mais claro ou mais escuro, em passos (stops) |
| {{ui:Terreno sob o modelo}} | Um chão no ponto mais baixo do modelo que recebe as sombras e se funde com o horizonte |
| {{ui:Desenhar arestas}} | Desenha as arestas dos elementos, finas, sobre a imagem |

Quando o sol está abaixo do horizonte na hora escolhida, é noite: o céu fica escuro e as lâmpadas do modelo o iluminam.

## Lâmpadas

Cada luminária do modelo é uma lâmpada na imagem: as luminárias de um arquivo IFC (IfcLightFixture, ou um elemento tipado como luminária), inclusive as que você coloca a partir da biblioteca. Cada uma ilumina para baixo, a partir logo abaixo da luminária. Quando o arquivo informa a potência de uma luminária, o brilho dela segue essa potência; caso contrário, são 800 lúmens, branco quente.

A caixa de diálogo lista as lâmpadas em {{ui:Lâmpadas}}: desmarque uma para desligá-la, ou digite o brilho dela em lúmens. Essas alterações são salvas no IFC (o conjunto de propriedades `CadCraft_Light` da luminária, onde você também pode alterá-las em Propriedades), e {{key:Ctrl+Z}} as desfaz.

Quando um arquivo não diz onde fica o local dele, o sol é posicionado a 40° norte, e a caixa de diálogo informa isso. A hora é a hora local do local, calculada a partir da longitude dele, então pode haver uma hora de diferença onde os relógios estão configurados de outra forma.

Essas configurações ficam guardadas neste navegador para a próxima imagem. Elas não são salvas no arquivo IFC.

## Vidro e outros materiais

Em {{ui:Materiais}}, cada cor na tela tem um aspecto: {{ui:Fosco}}, {{ui:Acetinado}}, {{ui:Brilhante}}, {{ui:Metal}}, {{ui:Metal polido}}, {{ui:Vidro}} ou {{ui:Vidro fosco}}. As cores que o arquivo IFC torna transparentes (o vidro de janelas, por exemplo) começam como {{ui:Vidro}}.

:::note
No modo {{ui:Rápido}}, vidro e metal refletem o céu, não o resto do modelo, e a luz não se curva ao atravessar o vidro. O modo {{ui:Alta qualidade (path tracing)}}, abaixo, faz as duas coisas.
:::

## Alta qualidade

Escolha {{ui:Modo}} › {{ui:Alta qualidade (path tracing)}} para uma imagem que segue a luz do jeito que uma câmera a vê:

- a luz reflete entre as superfícies, então um ambiente iluminado por uma janela, ou por uma lâmpada, é iluminado por todos os lados e as cores se espalham nos vizinhos;
- o vidro é vidro de verdade: a luz se curva ao atravessá-lo e ele reflete o modelo;
- metal e superfícies polidas refletem o resto do modelo;
- painéis de luz iluminam como painéis, com sombras suaves.

É bem mais lento que {{ui:Rápido}}: cada passagem refaz o traçado da luz de cada pixel. A imagem começa granulada e fica limpa à medida que as amostras se acumulam, então comece pequeno ({{ui:O tamanho da vista}}, {{ui:Rascunho}}) e escolha um {{ui:Limite de tempo}}: quando ele acaba, a imagem até ali é mantida. {{ui:Parar}} também a mantém. A primeira passagem espera enquanto o navegador prepara o path tracer.

Onde o navegador tem WebGPU, o path tracer é o próprio do CadCraft e roda na placa de vídeo; a linha sob a imagem diz isso. Depois de {{ui:Parar}} ou do limite de tempo, {{ui:Retomar}} continua com a mesma imagem até ter todas as amostras; alterar uma configuração ou pressionar {{ui:Renderizar}} de novo recomeça do zero. Sem WebGPU, a imagem é feita com path tracing em WebGL (a linha informa isso), e {{ui:Retomar}} não é oferecido.

:::linux
O Firefox e a maioria das instalações do Chrome no Linux ainda não têm WebGPU, então a alta qualidade usa WebGL nelas.
:::

Neste modo as arestas não são desenhadas, as texturas mostram sua cor e rugosidade, mas não os relevos, e um corte é feito no modelo antes de a imagem começar.

{{ui:Reduzir ruído (remove o granulado que sobra depois das amostras)}} fica ativado por padrão: quando a imagem termina, ou é parada, o granulado que sobra é removido por uma rede neural feita para isso (a rede publicada do Intel Open Image Denoise, executada no seu próprio computador: na placa de vídeo, senão no processador). {{ui:Exibir}} › {{ui:A imagem antes da redução de ruído}} mostra como ela ficou renderizada.

## Céus e perfis de luz na placa de vídeo

Com WebGPU, a alta qualidade tem mais dois céus:

- {{ui:Céu físico}} calcula a luz do dia pela altura do sol: um azul profundo no alto, uma faixa pálida no horizonte, e um sol que fica mais quente e mais fraco quando está baixo. {{ui:Névoa}} vai de um dia muito limpo (2) a um dia enevoado (10).
- {{ui:Imagem de céu (HDRI)}} ilumina o modelo com uma imagem panorâmica de um lugar real. {{ui:Escolher uma imagem…}} recebe um arquivo `.hdr` ou `.exr` equirretangular; {{ui:Girar}} gira em torno do modelo e {{ui:Brilho da imagem}} a deixa mais clara ou mais escura. A imagem tem o próprio sol, então o sol do modelo não é somado. Ela fica guardada só enquanto a página está aberta: depois de reabrir, escolha-a de novo.

Cada lâmpada na lista {{ui:Lâmpadas}} pode receber um perfil de luz de fabricante: {{ui:Perfil IES…}} lê um arquivo IES (LM-63) e a lâmpada passa a emitir a luz do jeito que aquela luminária faz (um downlight estreito, um iluminador de parede). Toda lâmpada com aquele nome usa o perfil, e a lâmpada mantém o próprio brilho. Clique no nome do perfil para deixar de usá-lo.

Janelas de vidro transparente ajudam a luz do céu a entrar em um ambiente.

O modo {{ui:Rápido}} e o path tracer em WebGL mostram o {{ui:Céu físico}} e a {{ui:Imagem de céu (HDRI)}} como um céu limpo e ignoram os perfis de luz.

## A câmera

{{ui:Câmera}} monta a imagem como uma fotografia:

- {{ui:Exposição}}: mantenha o {{ui:Controle de brilho}}, ou escolha {{ui:Configurações da câmera}} e defina a {{ui:Abertura (f-stop)}}, a {{ui:Velocidade do obturador}} e o {{ui:ISO}} como em uma câmera; o EV ao lado deles é o valor de exposição usual. f/16 com 1/100 s e ISO 100 corresponde a um dia de sol; uma cena mais escura pede abertura mais larga, obturador mais lento ou ISO mais alto. Isso funciona em todos os modos.
- {{ui:Profundidade de campo}} desfoca o que está mais perto ou mais longe que a {{ui:Distância de foco (m)}}, como faria uma lente com aquele f-stop (deixe vazio para focar no que está no meio da vista); {{ui:Formato da abertura}} dá aos realces fora de foco um formato redondo ou de lâminas.
- {{ui:Perspectiva de dois pontos (linhas verticais permanecem verticais)}} nivela a câmera e desloca a imagem, como faz uma lente tilt-shift arquitetônica, para que as paredes não se inclinem quando você olha para cima ou para baixo em um prédio.
- {{ui:Balanço de branco}} define qual cor de luz aparece como branca: mais baixo (por exemplo 3000 K) para a luz quente de lâmpadas, mais alto para sombra e dias nublados.
- {{ui:Projeção}}: {{ui:Panorama 360°}} faz uma imagem 2:1 de tudo ao redor da câmera para visualizadores de panorama; {{ui:Panorama estéreo de 360°}} empilha um panorama do olho esquerdo e outro do olho direito, para óculos de realidade virtual; {{ui:Mapa cúbico (6 faces)}} faz seis vistas quadradas em uma grade de 3 × 2. A largura vem de {{ui:Tamanho}}.

Projeção, profundidade de campo, perspectiva de dois pontos e balanço de branco precisam do path tracer na placa de vídeo (WebGPU), então só aparecem em {{ui:Alta qualidade (path tracing)}}.

## Finalizar a imagem

{{ui:Imagem}} dá tratamento de cor à imagem de alta qualidade como em uma fotografia, e cada controle altera a imagem final de uma vez, sem renderizar de novo:

- {{ui:Aparência (transformação de visualização)}}: {{ui:ACES filmic}} (a imagem como antes), {{ui:AgX}} (mais suave, mantém a cor em luz muito intensa), {{ui:Filmic}} (uma curva suave de filme) ou {{ui:Padrão}} (simples; luz muito forte estoura para o branco).
- {{ui:Contraste}} e {{ui:Compressão de realces}} (recupera detalhes nas partes muito claras).
- {{ui:Bloom}} (um brilho suave ao redor de luzes fortes), {{ui:Ofuscamento}} com seus {{ui:Raios de ofuscamento}} (raios de estrela a partir dos pontos mais brilhantes) e {{ui:Vinheta}} (cantos mais escuros).
- {{ui:Tabela de cores (.cube)…}} aplica um tratamento de cor a partir de um arquivo `.cube`, com sua {{ui:Intensidade da tabela de cores}}; como uma imagem de céu, ela fica guardada só enquanto a página está aberta.

## Salvar a imagem

{{ui:Salvar como}} ao lado de {{ui:Salvar}} escolhe o arquivo: {{ui:PNG}}, {{ui:JPEG}} ou {{ui:WebP}} para compartilhar (JPEG e WebP só onde o navegador consegue gravá-los), e depois de uma renderização de alta qualidade na placa de vídeo também:

- {{ui:PNG, 16 bits}}: a imagem com tratamento de cor, com passos mais finos entre os tons, para impressão ou edição posterior.
- {{ui:EXR, todas as camadas (ponto flutuante de 32 bits)}}: a imagem como renderizada (luz linear, sem tratamento), com cada elemento de renderização e cada grupo de luz como camada própria, para programas de composição.
- {{ui:Arquivo de renderização (.ccrender, para ajustar depois)}}: tudo o que a caixa de diálogo precisa para misturar e tratar a imagem de novo. {{ui:Abrir um arquivo de renderização…}} o traz de volta, com sua mistura e seu tratamento, sem renderizar.

## Misturar as luzes depois da renderização

Ative {{ui:Mistura de luz (altera a cor e o brilho de cada luz depois da renderização)}} antes de pressionar {{ui:Renderizar}}. Quando a imagem termina (ou é parada), {{ui:Misturar a imagem}} lista as luzes em grupos: o céu, o sol e as lâmpadas pelo nome (cada lâmpada com o mesmo nome forma um grupo). Desligue um grupo, dê uma cor a ele ou deixe-o mais claro ou mais escuro, e a imagem muda na hora, sem renderizar de novo. {{ui:Salvar mistura}} guarda a mistura com um nome para escolher depois; {{ui:Como renderizado}} volta à imagem como foi feita. {{ui:Salvar}} salva a imagem misturada.

{{ui:Elementos de renderização (albedo, normais, profundidade, difuso, especular, transmissão, emissão, IDs)}} mantém também as partes da imagem. {{ui:Exibir}} troca a vista para uma delas: as cores de superfície (albedo), as normais, a profundidade, a luz difusa, a especular e a transmitida (cada uma direta e indireta), o que brilha e o céu, e uma cor por objeto ou por material para fazer máscaras.

Ambos mantêm camadas extras na placa de vídeo. Em tamanhos grandes, a placa de vídeo pode não ter espaço; a caixa de diálogo informa isso e um tamanho menor resolve.

## Neblina, fumaça, ruído e cáusticas

Estes ficam em {{ui:Neblina, fumaça e ruído}} e funcionam em {{ui:Alta qualidade (path tracing)}} na placa de vídeo; os outros motores não os incluem.

- {{ui:Neblina e névoa}} preenche o ar até uma altura com uma névoa que o sol, o céu e as lâmpadas iluminam. {{ui:Até onde você enxerga, em metros}} define a densidade (cerca de 100 m é uma névoa leve, 20 m uma neblina densa), {{ui:Altura da neblina acima do chão, em metros}} é onde ela termina, e {{ui:Raios de luz}} é o quanto a névoa brilha em direção à luz. A luz do sol deixa a neblina no topo, então, onde o sol entra por uma janela ou entre prédios, você a vê como feixes de luz.
- {{ui:Fumaça ou nuvem}} adiciona um volume de fumaça ou nuvem iluminado como a neblina. {{ui:Tipo}} é {{ui:Nuvem}}, {{ui:Coluna de fumaça}} ou {{ui:De um arquivo de volume (.ccvol)}}, o formato de grade próprio do CadCraft. {{ui:Detalhe}} e {{ui:Variação}} alteram uma nuvem ou coluna criada; {{ui:Tamanho do lado mais longo, em metros (0 = o tamanho do modelo)}}, {{ui:Mover X (m)}}, {{ui:Mover Y (m)}}, {{ui:Mover Z (m)}} e {{ui:Girar}} a posicionam (ela começa no meio do modelo); {{ui:Espessura}} a deixa mais densa, {{ui:Brilho frontal}} a deixa mais brilhante em direção à luz, e {{ui:Cor}} a tinge. Um arquivo de volume fica guardado só enquanto a página está aberta, como uma imagem de céu.
- {{ui:Parar cedo onde a imagem já está limpa (amostragem adaptativa)}} não dá mais amostras a pixels que já se acomodaram. {{ui:Ruído aceitável}} é o quanto de granulado sobra quando um pixel para. A linha sob a imagem informa quantas amostras um pixel recebeu, em média.
- {{ui:Cáusticas (luz desviada por vidro ou refletida por espelhos)}} traça a luz das lâmpadas e do sol, então a mancha clara sob uma bola de vidro ou a luz de um espelho em uma parede sai limpa, e não granulada. Ela fica desligada enquanto neblina, fumaça, mistura de luz ou elementos de renderização estão ativos, e é feita para imagens, não para imagens de 360°.

## A fila de renderização

{{ui:Fila de renderização}} na caixa de diálogo: {{ui:Adicionar esta imagem à fila}} mantém as configurações e a vista da imagem, e {{ui:Iniciar a fila}} renderiza o que está esperando, uma após a outra, neste computador. Fechar a página mantém a fila; abra o mesmo modelo para continuar. {{ui:Salvar}} baixa uma imagem pronta; {{ui:Remover}} e {{ui:Limpar concluídos}} organizam a lista. A fila renderiza em alta qualidade, então precisa de WebGPU.

## Quanto tempo leva

A imagem é feita no seu próprio computador, pela sua placa de vídeo; nada é enviado. O tempo cresce com as passagens e os pixels: {{ui:Melhor}} tem 16 vezes as passagens de {{ui:Rascunho}}, e uma imagem 4K tem cerca de quatro vezes os pixels de Full HD. Modelos grandes levam mais tempo por passagem.
