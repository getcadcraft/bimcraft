---
title: Novidades da versão 0.9
summary: Formas de parede, dividir, deslocar, esticar e travar na grade, níveis abaixo do solo, cotas de eixos e Medir na planta, vistas duplicadas com estilos de trabalho e tabelas de canetas, Informar como, exportação Collada e Google Earth, Scan para BIM, análise de vento e sísmica, complementos de impressão em resina.
keywords: novidades, 0.9, notas de versão, formas de parede, retângulo, polígono, arco, linhas escolhidas, contorno por traçado, deslocamento, junção, esticar por caixa, alinhar e travar, dividir parede, vão, reunir, travar na grade, crescer a partir de, medir a partir de, adicionar um nível abaixo, subsolo, comando de nível, cotas de eixo, medir na planta, estilo de trabalho, vista duplicada, cópia própria, vista vinculada, tabela de canetas, imprimir como exibido, informar como, digitar escala, importar svg, posicionar na planta, posicionar no modelo, collada, dae, kmz, google earth, scan para bim, carga de vento, sísmica, elementos finitos, painel de documentos, impressão em resina, novidades, changelog, mudanças, 0.8, 0.8.1, versão, novos recursos, evacuação, pessoas, filas, acústica, reverberação, resposta ao impulso, enchente, vento, terremoto, risco, ciclo de vida, vida útil, ids, etiquetas, tabelas, mover, alinhar, distribuir, imagem, plano de fundo, digitalização para paredes, terreno do civilcraft, desenhos de painéis, estrutura, solar, fv, dividir, vrf, fan coil, dimensionamento de tubulação, eletrocalha, iluminância, concreto, sísmica, comparar digitalização, epsg, projeção, documentos, modelo, carbono, custo, energyplus, motor de renderização, abrir em, usd, glb, unreal, desfazer, complementos, pcf, símbolos, plantas, traçado, canetas, faixa de opções, navegador de projeto, layout
from: 5624fe88
---

Estas são as mudanças do BimCraft 0.9, em comparação com a 0.8.1. Os dois grandes temas são uma ferramenta de parede de verdade e vistas que se comportam como as pessoas vindas dos grandes programas BIM esperam. Em volta deles vêm a exportação Collada, assistentes que podem colocar dispositivos elétricos, Scan para BIM, e análise de vento, sísmica e elementos finitos na aba {{ui:Analysis}}.

## Novidades

### Paredes

- **Desenhe formas inteiras.** Em {{ui:Draw}}, abra {{ui:Shapes}} (ou escolha uma forma na lista Forma da linha Parede) para um retângulo, um retângulo girado, um polígono de 3 a 64 lados, um arco por centro, um arco tangente, paredes sobre linhas escolhidas, ou paredes em volta de uma área fechada em que você clica. Um retângulo são quatro paredes com quatro cantos unidos e um passo de desfazer. Veja [Formas de parede, dividir, deslocar, esticar e travar](topic:wall-tools).
- **Defina antes de desenhar, altere depois.** A linha Parede tem {{ui:Offset}} e {{ui:Join}} (desmarque para desenhar paredes isoladas). Depois use {{ui:Offset}}, {{ui:Box stretch}} e {{ui:Align and lock}} em paredes desenhadas. Uma parede movida ou esticada mantém suas portas, janelas e cotas. Cada receita é um passo de desfazer.
- **Corte paredes.** {{ui:Split}}, {{ui:Gap}}, {{ui:Free ends}}, {{ui:Delete segment}} e {{ui:Rejoin}} cortam uma parede em um clique, ou onde outra parede a cruza. Um corte através de uma porta é recusado. Veja [Formas de parede, dividir, deslocar, esticar e travar](topic:wall-tools).
- **Trave paredes a linhas de eixo.** Selecione uma parede ao longo de uma linha de eixo e marque {{ui:Lock to grid}} em {{ui:Properties}}. Com a ferramenta Eixos ativa, digite uma distância em {{ui:Move by}} para uma linha escolhida, e as paredes travadas acompanham em um passo de desfazer.
- **Dê forma a uma parede.** Em {{ui:Properties}} de uma parede você pode fixar seu topo ou sua base a um telhado, piso ou forro, editar seu contorno de elevação, incliná-la, ou recortar uma abertura de parede sem porta nem janela. Veja [Forma de parede](topic:wall-shape).
- **O comprimento diz qual extremidade permanece.** {{ui:Grow from}} define se o início, o fim ou o centro permanece fixo quando você muda o comprimento.
- **Comprimento e a cota da planta concordam.** {{ui:Measure from}} (linha de centro, face interna ou face externa) comanda tanto o campo Comprimento quanto as cotas de parede da planta. Começa na linha de centro, então as cotas de parede da planta agora leem a linha de centro onde antes liam a face externa. Altere-a na linha Parede, em {{ui:Properties}} ou em {{ui:Settings}} › {{ui:BimCraft}} › {{ui:Walls}}.

### Níveis, eixos e medição

- **Adicione um nível abaixo.** {{ui:Add a level below}} no painel {{ui:Levels}} adiciona um nível sob o mais baixo, da mesma altura dele, em uma elevação negativa (Nível -1, Nível -2). Nada mais se move. {{ui:Add levels…}} agora aceita alturas negativas. Digitar LEVEL, LEVELS, STOREY ou STOREYS na linha de comando abre {{ui:Add levels…}}, e há um botão {{ui:Levels}} nos menus e nas abas da faixa. Veja [Terrenos, edificações e níveis](topic:site-building-and-levels).
- **Cotas de eixo na planta.** Com a ferramenta {{ui:Grid}} ativa, marque {{ui:Dimensions}} para desenhar o espaçamento entre linhas vizinhas e o tamanho total além das bolhas, na planta de cada nível. Veja [Cotar um eixo](topic:grid-dimensions).
- **Medir na planta.** {{ui:Measure}} no grupo {{ui:Draw}} dá uma distância com as diferenças X e Y entre dois cliques. Nada é salvo no modelo. Veja [Medir na planta](topic:measure-on-the-plan).
- **Altere várias colunas de uma vez.** Selecione colunas junto com uma parede, e a seleção lista cada tipo com {{ui:Keep only these}}. Um clique mantém as colunas e mostra os campos que elas têm em comum.
- **Uma unidade de exibição em todo lugar.** Coordenadas, medições, cortes, escalas de folha, os carregamentos e resultados da aba de estrutura e o texto de Problemas seguem a unidade que você escolhe. As exportações continuam em SI.

### Vistas, folhas e impressão

- **Estilo de trabalho.** {{ui:Settings}} › {{ui:BimCraft}} › {{ui:Working style}} escolhe entre cada vista ter suas próprias anotações e tabelas de canetas, ou compartilhá-las. Veja [Estilo de trabalho, vistas duplicadas, canetas no papel, Informar como e modelos](topic:working-style).
- **Duplique uma vista.** Plantas, planos de forro, chamadas, elevações e cortes podem ser duplicados como {{ui:Own copy}} ou {{ui:Linked}}; {{ui:Make own copy}} torna independente uma vista vinculada. Veja [Estilo de trabalho, vistas duplicadas, canetas no papel, Informar como e modelos](topic:working-style).
- **Imprima como exibido, ou por uma tabela de canetas.** Os overrides de caneta são mantidos no IFC com a vista, e folhas e PDFs os desenham como a tela. O mesmo tópico cobre as tabelas de canetas.
- **Informar como.** {{ui:Report as}} em {{ui:Properties}} grava uma laje desenhada como estrada, uma parede como painel ou um telhado como rampa no IFC como a classe que você escolher, e conta assim nas tabelas, Quantidades, Localizar, Colorir por e Problemas.
- **Edite em elevações e cortes.** Desenhe e mova paredes, aberturas, níveis, cotas e notas diretamente em uma elevação ou corte, com seus próprios tamanhos de folha e suas próprias legendas. Veja [Editar em elevações e cortes](topic:edit-in-elevations).
- **Folhas.** Toda folha pode ser paisagem ou retrato. Uma caixa {{ui:Type a scale}} fica ao lado da lista de escalas em cada vista colocada (1:64, 2:1, 1/4" = 1'). Você pode arrastar um desenho colocado ou empurrá-lo com as teclas de seta, e {{ui:Formats…}} › {{ui:Import SVG…}} transforma o seu próprio desenho de folha em uma legenda com campos digitados por folha.
- **Créditos de biblioteca na folha.** Um conjunto de desenhos com itens de biblioteca ganha uma tabela de créditos de biblioteca que você pode colocar em qualquer folha. Veja [Créditos de biblioteca](topic:library-credits).

### Biblioteca: colocação

- **A colocação segue a vista.** Na vista de Planta, a Biblioteca mostra {{ui:Place in plan}}; em 3D, mostra {{ui:Place in model}}; em Dividir, mostra um botão dividido com {{ui:Place in plan}} como ação principal. Ambas as formas gravam o mesmo elemento IFC. Você também pode arrastar um cartão da Biblioteca para a planta ou para a vista 3D; com caneta ou dedo, pressione e segure, depois arraste. Veja [Colocar a partir da Biblioteca](topic:place-from-library).

### Arquivos e assistentes

- **Collada e Google Earth.** {{ui:Collada}} na barra de ferramentas (menu Arquivo nos estilos de menu) grava um .dae, ou um .kmz posicionado onde o modelo está no mapa. Veja [Exportar o modelo como Collada ou para o Google Earth](topic:collada).
- **Assistentes podem colocar dispositivos elétricos.** Seu assistente conectado tem novas ferramentas para adicionar, listar, alterar e excluir dispositivos e para definir luzes. Os assistentes ficam desligados até você os ligar em {{ui:Settings}}. Veja [Deixe um assistente de IA trabalhar com seu modelo](topic:assistants).
- **Scan para BIM (complemento).** Desligado por padrão, e precisa do complemento Nuvens de pontos. Ele propõe pisos, paredes, portas e janelas a partir de uma digitalização, com o desvio medido de cada um; aceitar é um passo de desfazer.

### Análise

- **Dados de vento e sísmicos do local.** Na aba {{ui:Analysis}}: cargas de vento pela ASCE 7-10 ou 7-16 para uma edificação rígida fechada, com uma força em cada piso como casos de carga, e dados sísmicos do local com consulta ao USGS e o espectro de projeto.
- **Acompanhamento estrutural e elementos finitos.** Verificações de concreto pela ACI 318-19, forças laterais equivalentes pela ASCE 7-22, deriva de pavimento, lajes e paredes como placas, e combinações de carga da ASCE 7 e da EN 1990. Nosso próprio motor de elementos finitos faz cascas, tetraedros e análise modal. Veja [Verificar elementos de concreto e gerar cargas sísmicas](topic:concrete-and-seismic) e [Análise de pórticos](topic:frame-analysis).

### Outros complementos e documentos

- **Iluminação interna (complemento).** Coloca luminárias e escreve o lux como números em cada planta de nível, com uma estimativa de ofuscamento e um relatório imprimível.
- **Painel de documentos.** {{ui:File}} › {{ui:Documents…}} tem retirada e devolução com um arquivo de bloqueio, letras de revisão, estados de liberação e histórico.
- **Regiões e aço.** Pacotes de desenho e de regulamentação de construção da África do Sul no complemento Regulamentações, e 976 tamanhos de aço do Reino Unido na tabela de seções compartilhada.
- **Complementos gratuitos de impressão em resina.** Fatiador, suportes e base, teste de exposição, e os formatos de arquivo GOO, SL1, Chitubox e Anycubic, todos desligados por padrão.

## Em todos os aplicativos

- Passar o ponteiro sobre um botão ou controle mostra uma dica do Bootstrap.
- A dica inicial em uma área de desenho vazia tem um botão de fechar; o BimCraft lembra que ela foi fechada.
- Uma faixa de guias de painel que não cabe agora rola em vez de ser cortada.
- Com um documento aberto, a aba do navegador mostra "<documento> - BimCraft | CadCraft".
- Em {{ui:Settings}} › {{ui:General}} › {{ui:Layout}}, os layouts são uma lista suspensa de opções de duas linhas.
- A lista de idiomas em {{ui:Settings}} oferece mais idiomas do que na 0.8; os idiomas diferentes do inglês são rascunhos de máquina.

## Corrigido

- **Mover funciona em escadas,** e em rampas, guarda-corpos, planos de telhado, dispositivos isolados, imagens e caminhos.
- **Arrastar uma parede não distorce mais o ambiente.** O grip central move a parede em esquadro em relação a si mesma, e os cantos deslizam ao longo das paredes unidas. Segure {{key:Mod}} para o antigo movimento livre; {{ui:Square up}} devolve os 90 graus.
- **Uma mudança de espessura ou tipo em um nó unido** agora mantém o canto fechado em um L, em um T, em um nó de três paredes e ao lado de uma parede curva.
- **Mover ou copiar um grupo de ambientes** mantém fora do grupo as paredes unidas a ele, e elas continuam unidas.
- **Refazer mantém a identidade de uma cota de parede.**
- **Selecionar uma parede com Desenhar desligado** não gera mais erro em Propriedades.
- **Renderizar recorre ao WebGL** quando a GPU não consegue iniciar, em vez de parar.
- **A verificação do EnergyPlus pode ser ligada** de novo.
- **Documentos abre como uma caixa de diálogo centralizada.** {{key:Esc}}, o X ou um clique na página escurecida a fecha.
- **Os botões {{ui:Plan}}, {{ui:Split}} e {{ui:3D}} aparecem** assim que um modelo está aberto, não só depois de Desenhar ter sido ativado uma vez.

## Limites honestos

- Nada foi impresso em hardware real. Os suportes de resina são novos e não comprovados.
- Resultados de vento, sísmica, concreto e elementos finitos são auxílios de verificação para um engenheiro, conferidos com fórmulas fechadas, não com um edifício real.
- Scan para BIM foi testado em um edifício sintético, não em uma digitalização real, e encontra apenas ambientes retangulares.
- O Collada não foi aberto no Blender nem no Google Earth aqui.
- A estimativa de iluminação foi conferida com o nosso próprio traçado, não com outros programas de iluminação.
- Os números da África do Sul não foram verificados.
- Os estilos de junção de paredes (encontro, meia-esquadria, esquadro) e a prioridade de camadas ainda não estão implementados; os cantos são em meia-esquadria.
- Idiomas diferentes do inglês são rascunhos de máquina.

Todo o restante está em [O que ainda não está implementado](topic:not-built-yet). As mudanças anteriores estão nas notas de 0.8 e 0.8.1 mais abaixo nesta página.

## Anteriores: 0.8 e 0.8.1

Estas são as mudanças do BimCraft 0.8 (2026-11-01) e 0.8.1 (2026-11-02), em comparação com a 0.7. O BimCraft agora pode responder perguntas sobre uma edificação e testá-la, com pessoas, som, água, vento e terremotos, e desenhá-la com mais ferramentas; a 0.8.1 é uma versão de correção.

### Novidades

**Testar a edificação**

- **Pessoas na edificação.** A seção {{ui:People in the building}} do painel esquerdo leva uma evacuação ou a chegada de um dia normal pelos seus ambientes, portas e escadas. Você vê as filas onde a edificação se estreita, a caminhada mais longa até uma saída a partir de cada ambiente e quanto tempo a última pessoa leva. Marque {{ui:Shut}} em uma porta para ver o que muda, e marque {{ui:Show the people in the 3D view}} para acompanhar os caminhantes. Os resultados vão para Problemas. É um modelo grosseiro de multidão para decisões de projeto, não um certificado de segurança contra incêndio. Veja [Percorrer a edificação com pessoas](topic:people-in-the-building).
- **Acústica de ambientes, e ouvir.** A seção {{ui:Room acoustics}} dá o tempo de reverberação de cada ambiente por banda de oitava (Sabine e Eyring) a partir do seu tamanho e dos acabamentos que você escolhe, e, com uma meta sua, diz quanta absorção atenderia a ela. {{ui:Play it in this room}} toca uma voz, uma palma, notas dedilhadas ou o seu próprio arquivo de som através de uma resposta ao impulso calculada para o ambiente. Os valores de absorção são valores publicados típicos, para você substituir. Veja [Acústica de ambientes](topic:room-acoustics).
- **Reprodução de enchente, vento e terremoto.** {{ui:Hazard playback}} reproduz água subindo pelos ambientes, a pressão do vento em cada pavimento e um terremoto sacudindo os pavimentos, em uma planta ou uma elevação, com um controle de tempo. Modelos simples, com suas premissas no painel; não é uma verificação de norma. Veja [Reproduzir uma enchente, vento ou terremoto](topic:hazard-playback).
- **O que se desgasta em cinquenta anos.** {{ui:Life-cycle view}} lista as janelas, portas, acabamentos e o telhado com uma vida útil cada, os anos em que são substituídos e, quando você digita um custo por unidade, o custo por ano e seu valor presente. {{ui:Save the schedule (CSV)}} o grava. As vidas úteis são valores de planejamento. Veja [Ver o que se desgasta em cinquenta anos](topic:life-cycle-view).
- **Verificações de concreto e sísmicas.** Os blocos {{ui:Concrete members}} e {{ui:Seismic loads}} da aba {{ui:Analysis}} verificam vigas e pilares de concreto pela ACI 318-19 e geram forças laterais equivalentes pela ASCE 7-22 em lajes rígidas, com deriva de pavimento. Para um engenheiro conferir. Veja [Verificar elementos de concreto e gerar cargas sísmicas](topic:concrete-and-seismic).

**Verificar e informar**

- **Verificar com um IDS.** Carregue o arquivo `.ids` que um cliente lhe deu e veja em Problemas cada elemento que não atende a ele, antes de entregar o IFC. Abra {{ui:Check against an IDS}} em {{ui:Model checks}}. Veja [Verificar um modelo com o IDS de um cliente](topic:check-against-ids).
- **Etiquetas e tabelas.** Defina suas próprias etiquetas, atribua-as a muitos elementos de uma vez e faça tabelas cujas colunas, filtros e grupos as leem; as etiquetas são mantidas no IFC. Veja [Etiquetas e tabelas](topic:tags-and-schedules).
- **Documentos a partir do modelo.** {{ui:Documents from the model}} preenche um modelo de especificação a partir do IFC aberto e o salva como PDF, documento Word ou Markdown. Veja [Documentos a partir do modelo](topic:documents-from-the-model).
- **Comparar uma digitalização com o modelo.** Com uma nuvem de pontos aberta, {{ui:Compare}} julga cada elemento como construído, parcialmente construído, faltando ou não alcançado, e mostra o percentual construído. Veja [Comparar uma digitalização com o modelo](topic:compare-scan-with-model).
- **Carbono e custo.** O painel Carbono soma o carbono incorporado a partir de uma tabela de fatores que você pode editar, e o painel Custo distribui preços pelo cronograma 4D. Os fatores que vêm com o BimCraft são genéricos e marcados como não verificados. Veja [Carbono incorporado e custo](topic:embodied-carbon-and-5d-cost).
- **Qualquer projeção de mapa.** {{ui:Measure}} › {{ui:Coordinate system…}} aceita um número EPSG, uma zona UTM, um nome ou a sua própria definição de projeção. Veja [Georreferenciar com qualquer projeção](topic:georeference-any-projection).

**Desenhar e editar**

- **Mover, Alinhar e Distribuir.** Em {{ui:Build}}; {{key:Shift+M}} inicia Mover (o simples {{key:M}} continua sendo Medir). Mover copia enquanto você avança com {{key:C}}, cada passo é um desfazer, e viaja em uma sessão do Live TeamWork. Veja [Mover, copiar, alinhar e distribuir](topic:move-align-distribute).
- **Imagens sob a planta.** {{ui:Build}} › {{ui:Picture}} coloca um PNG, JPEG ou WebP sob a planta de um nível ou em um plano vertical. Defina a escala por dois pontos, e mova, gire, esmaeça e trave a imagem. Uma área copiada no MarkupCraft é colada na escala da sua folha. Veja [Colocar uma imagem sob a planta](topic:pictures-as-backgrounds).
- **Paredes a partir de uma digitalização.** Com uma digitalização aberta, paredes, portas e ambientes chegam como propostas que você mantém ou rejeita uma a uma, em um passo de desfazer. Só são encontradas paredes em duas direções perpendiculares. Veja [Transformar uma digitalização em paredes](topic:scan-to-walls).
- **Decalque, penas e escada de esboço.** {{ui:Trace}} mostra outro nível tracejado sob a planta, {{ui:Pens}} dá a paredes, portas e janelas a sua própria espessura de linha em uma vista, e {{ui:Sketch stair}} transforma uma linha de caminhada em uma escada. Uma malha Wavefront OBJ abre. Veja [Traçar um nível, penas e uma escada a partir de um esboço](topic:trace-pens-stairs-obj).
- **Vizinhança a partir de um endereço.** Os edifícios e o lote que o Endereço para terreno do CivilCraft encontrou chegam como sugestões; você marca os que quer adicionar. Veja [Começar a partir do terreno do CivilCraft](topic:site-from-civilcraft).
- **Desenhos de painéis.** {{ui:Build}} › {{ui:Panel drawings}} enquadra paredes, pisos e telhados em madeira ou em aço leve formado a frio e grava uma lista de corte em CSV e desenhos de fabricação em PDF. São valores iniciais, não um projeto estrutural. Veja [Desenhos de painéis](topic:panel-drawings).
- **Paleta de símbolos e plantas.** {{ui:Build}} › {{ui:Symbol palette}} encontra símbolos elétricos e hidráulicos pelo nome; a fonte {{ui:Plants}} da {{ui:Library}} lista cerca de 400 plantas com símbolos de planta. Veja [Paleta de símbolos](topic:symbol-palette) e [Colocar uma planta](topic:plant-list).

**Tubulações, dutos e energia**

- **Split, VRF e fan coils.** Unidades internas e externas com suas conexões, e linhas de fluido dimensionadas por uma tabela de valores típicos de exemplo que você pode alterar. Veja [Split, VRF e fan coils](topic:split-vrf-fan-coils).
- **Cálculos.** O painel Cálculos verifica o dimensionamento de tubulações de alimentação e de dutos pela perda de carga, roteia cabos por eletrocalhas e eletrodutos e mostra o seu preenchimento, e calcula a iluminância a partir de arquivos IES ou EULUMDAT. Os padrões são rotulados; digite os valores do seu código. Veja [Cálculos de tubulação, duto, cabo e luz](topic:mep-calculations).
- **Arquivos PCF.** O **Exportar PCF** da ferramenta Tubulação grava os trechos para programas de tensão em tubulação e de isométricos, e um arquivo PCF lido de volta desenha a sua tubulação. Veja [Arquivos de componentes de tubulação](topic:piping-pcf).
- **Solar FV.** Instale conjuntos em telhados ou no solo, sombreie-os a partir do modelo, estime a energia anual, verifique as strings e gere dados de diagrama unifilar. O módulo inicial e as perdas são genéricos. Veja [Solar FV](topic:solar-pv).
- **Arquivo EnergyPlus.** O painel Verificar com EnergyPlus grava o modelo como um IDF para rodar no seu próprio EnergyPlus. Rodá-lo no navegador exige uma build que você hospeda e o endereço que você digita; o BimCraft não a traz. Veja [Verificar aquecimento e resfriamento com EnergyPlus](topic:check-with-energyplus).

**Imagens e arquivos**

- **Escolha o motor de renderização.** {{ui:Render}} tem uma escolha {{ui:Engine}}. Nossos dois motores integrados (Rápido e Path tracer) continuam como padrão. **Abrir em** salva a cena como arquivo USD ou glTF, e uma pasta de projeto Unreal como .zip; no CadCraft Studio, um complemento pode adicionar um motor. O plugin do Unreal que abre o projeto ainda não foi lançado. Veja [Escolher qual programa desenha a imagem](topic:render-engines).
- **Desfazer no Studio.** Dentro do CadCraft Studio, o BimCraft informa ao Studio cada passo concluído, para que o Studio possa desfazer o seu último passo na janela que você usou por último. Veja [Desfazer entre aplicativos](topic:undo-across-apps).
- **Complementos no seu arquivo.** Um IFC registra quais complementos escreveram nele, e oferece os que você não tem quando o abre. Veja [Complementos no seu arquivo](topic:add-ons-in-your-file).

**Em todos os aplicativos**

- **Conecte sua IA.** Seu próprio assistente pode dirigir o BimCraft pela conexão do Studio e responder perguntas sobre o modelo, como quais ambientes estão sob determinada área. O Studio não tem IA própria. Veja [Deixe um assistente de IA trabalhar com seu modelo](topic:assistants).
- **Linhas da barra de ferramentas.** {{ui:Settings}} › {{ui:General}} › {{ui:Toolbar rows}} oferece Quebrar, 2 linhas ou 1 linha; Quebrar continua sendo o padrão.
- **Dispositivos de entrada.** Trackpad, caneta, mouse 3D, controle e configurações MIDI são compartilhados por todos os aplicativos.
- **Problemas e Live.** O painel de avisos e as sessões Live funcionam como antes, com as novas verificações acima alimentando Problemas.
- **Idiomas.** 54 idiomas, dez deles novos. Os diferentes do inglês são rascunhos de máquina ainda não lidos por um falante nativo; os tópicos de ajuda são, em sua maioria, em inglês.

### Corrigido na 0.8.1

- **Layout de faixa + navegador de projeto.** Inserir › Importar CAD, Inserir › Imagem e Gerenciar › Unidades do Projeto diziam "Ainda não implementado no BimCraft". Imagem agora abre a ferramenta {{ui:Picture}}, Importar CAD abre {{ui:Build}} › {{ui:From a drawing…}} (DWG, DXF, PDF ou uma digitalização), e Unidades do Projeto abre {{ui:Settings}} › {{ui:Global}} › {{ui:Units}}. Mover e Alinhar executam as ferramentas Mover e Alinhar, Nível abre {{ui:Add levels…}}, Fases abre a seção de fases de reforma, e Materiais abre a biblioteca de materiais.
- **Seção de classes DWG.** Era lida como o tipo errado; corrigido no BimCraft e nos outros aplicativos que leem DWG.
- **Idioma em tempo de execução.** O Studio e as edições empacotadas agora podem trocar de idioma sem reiniciar. Isso ainda não foi testado em todas as plataformas; diga-nos se o idioma não mudar.
- **Script de pacote do Archicad.** `archicad_bundle.py`, um download separado, agora encontra o caminho do Archicad, observa a pasta por até 20 segundos e tenta de novo ao lado do pacote.

### Ainda não nesta versão

- **Auxílios de segurança e de projeto.** Pessoas na edificação não tem limite de distância de percurso de um código de edificações (você digita o limite) e não foi conferido à mão em uma planta real. Os valores de acústica, ciclo de vida e risco são valores de planejamento, não uma verificação de norma.
- **Clima futuro e EnergyPlus.** Não há clima futuro integrado: você pode carregar um arquivo de cenário para a simulação de enchente. A execução do EnergyPlus no navegador não faz parte desta versão.
- **Layout da faixa.** Levantamento de material continua "Ainda não implementado", porque o BimCraft não tem lista de quantidades de material, e 54 outras ferramentas acinzentadas da faixa ainda não têm nenhuma ferramenta do BimCraft por trás.
- **Assinatura e plataformas.** Os instaladores do Windows e o .dmg do macOS não são assinados, então o SmartScreen mostra {{ui:More info}}, depois {{ui:Run anyway}}, e o macOS exige clicar com o botão direito e depois {{ui:Aberto}}. A versão para iPad e iPhone não foi reconstruída para a 0.8.1.
- **Testes em página real.** Alguns testes antigos do navegador do BimCraft ainda falham na nossa página de teste, como antes da 0.8.1.

Todo o restante está em [O que ainda não está implementado](topic:not-built-yet). As mudanças anteriores estão na [Novidades da versão 0.7](topic:whats-new-0-7).
