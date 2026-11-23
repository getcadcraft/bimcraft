---
title: Novidades da versão 0.9 (anteriores)
summary: Formas de paredes, dividir, offset, esticar e bloquear à grelha, níveis abaixo do solo, cotas de grelha e Medir na planta, vistas duplicadas com estilos de trabalho e tabelas de canetas, Classificar como, exportação Collada e Google Earth, Scan to BIM, análise de vento e sísmica, complementos de impressão em resina.
keywords: novidades 0.9, versão anterior, novidades, 0.9, notas de lançamento, formas de paredes, retângulo, polígono, arco, escolher linhas, contorno de decalque, offset, ligação, esticar por caixa, alinhar e bloquear, dividir parede, intervalo, voltar a juntar, bloquear à grelha, crescer a partir de, medir a partir de, adicionar um nível abaixo, cave, comando nível, cotas de grelha, medir na planta, estilo de trabalho, duplicar vista, cópia própria, vista ligada, tabela de canetas, imprimir como se vê, classificar como, escrever escala, importar svg, colocar na planta, colocar no modelo, collada, dae, kmz, google earth, scan to bim, carga do vento, sísmica, elementos finitos, painel de documentos, impressão em resina, alterações, 0.8, 0.8.1, versão, novas funcionalidades, evacuação, pessoas, filas, acústica, reverberação, resposta ao impulso, cheia, vento, sismo, perigo, ciclo de vida, vida útil, ids, etiquetas, mapas, mover, alinhar, distribuir, imagem, fundo, digitalizar para paredes, local do civilcraft, desenhos de painéis, estrutura, solar, fotovoltaico, vrf, ventiloconvector, dimensionamento de tubagens, calha de cabos, iluminância, betão, sísmica, comparar digitalização, epsg, projeção, documentos, modelo, carbono, custo, energyplus, motor de renderização, abrir em, usd, glb, unreal, anular, complementos, pcf, símbolos, plantas, decalcar, canetas, friso, explorador de projeto, layout
from: 816df7f8
---

Estas são as alterações do BimCraft 0.9, em comparação com a 0.8.1. Os dois grandes temas são uma ferramenta de paredes verdadeira e vistas que se comportam como as pessoas vindas dos grandes programas BIM esperam. À volta deles surgem a exportação Collada, assistentes que podem colocar dispositivos elétricos, Scan to BIM, e o trabalho de vento, sísmica e elementos finitos no separador {{ui:Análise}}.

## Novo

### Paredes

- **Desenhar formas completas.** Em {{ui:Desenhar}}, abra {{ui:Formas}} (ou escolha uma forma na lista Forma da linha Parede) para um retângulo, um retângulo rodado, um polígono de 3 a 64 lados, um arco por centro, um arco tangente, paredes em linhas escolhidas ou paredes à volta de uma área fechada onde clicar dentro. Um retângulo são quatro paredes com quatro cantos ligados e um único passo de anulação. Ver [Formas de paredes, dividir, offset, esticar e bloquear](topic:wall-tools).
- **Definir antes de desenhar, alterar depois.** A linha Parede tem {{ui:Offset}} e {{ui:Ligação}} (desmarque para desenhar paredes isoladas). Depois, use {{ui:Offset}}, {{ui:Esticar por caixa}} e {{ui:Alinhar e bloquear}} nas paredes desenhadas. Uma parede movida ou esticada mantém as suas portas, janelas e cotas. Cada receita é um passo de anulação.
- **Cortar paredes.** {{ui:Dividir}}, {{ui:Intervalo}}, {{ui:Extremidades livres}}, {{ui:Eliminar segmento}} e {{ui:Voltar a juntar}} cortam uma parede com um clique ou onde outra parede a atravessa. Um corte por uma porta é recusado. Ver [Formas de paredes, dividir, offset, esticar e bloquear](topic:wall-tools).
- **Bloquear paredes às linhas da grelha.** Selecione uma parede ao longo de uma linha da grelha e marque {{ui:Bloquear à grelha}} em {{ui:Propriedades}}. Com a ferramenta Grelha ativa, escreva uma distância em {{ui:Mover em}} para uma linha escolhida, e as paredes bloqueadas seguem num único passo de anulação.
- **Dar forma a uma parede.** Em {{ui:Propriedades}} de uma parede, pode prender o topo ou a base a uma cobertura, laje ou teto, editar o contorno da sua elevação, incliná-la, ou abrir na parede um vão sem porta nem janela. Ver [Forma da parede](topic:wall-shape).
- **O comprimento indica o lado que fica.** {{ui:Crescer a partir de}} define se o início, o fim ou o centro se mantêm quando altera o comprimento.
- **Comprimento e cota da planta coincidem.** {{ui:Medir a partir de}} (linha do centro, face interior ou face exterior) define tanto o campo Comprimento como as cotas de parede da planta. Começa na linha do centro, por isso as cotas de parede da planta passam a indicar a linha do centro, onde antes indicavam a face exterior. Altere na linha Parede, em {{ui:Propriedades}} ou em {{ui:Definições}} › {{ui:BimCraft}} › {{ui:Paredes}}.

### Níveis, grelhas e medição

- **Adicionar um nível abaixo.** {{ui:Adicionar um nível abaixo}} no painel {{ui:Níveis}} acrescenta um nível sob o mais baixo, com a mesma altura, a uma cota negativa (Nível -1, Nível -2). Nada mais se move. {{ui:Adicionar níveis…}} aceita agora alturas negativas. Escrever LEVEL, LEVELS, STOREY ou STOREYS na linha de comandos abre {{ui:Adicionar níveis…}}, e há um botão {{ui:Níveis}} nos menus e nos separadores do friso. Ver [Terrenos, edifícios e níveis](topic:site-building-and-levels).
- **Cotas de grelha na planta.** Com a ferramenta {{ui:Grelha}} ativa, marque {{ui:Cotas}} para desenhar o espaçamento entre linhas vizinhas e a dimensão total, para lá dos balões, em cada planta de nível. Ver [Cotar uma grelha](topic:grid-dimensions).
- **Medir na planta.** {{ui:Medir}} no grupo {{ui:Desenhar}} dá uma distância com as diferenças em X e Y entre dois cliques. Nada fica guardado no modelo. Ver [Medir na planta](topic:measure-on-the-plan).
- **Alterar várias colunas de uma vez.** Escolha colunas juntamente com uma parede, e a lista mostra cada tipo com {{ui:Manter só estes}}. Um clique mantém as colunas e mostra os seus campos comuns.
- **Uma unidade de visualização em todo o lado.** Coordenadas, medições, cortes, escalas de folhas, as cargas e resultados do separador de pórticos e o texto de Problemas seguem a unidade que escolher. As exportações ficam em SI.

### Vistas, folhas e impressão

- **Estilo de trabalho.** {{ui:Definições}} › {{ui:BimCraft}} › {{ui:Estilo de trabalho}} escolhe entre cada vista ter as suas próprias anotações e tabelas de canetas, ou partilhá-las. Ver [Estilo de trabalho, vistas duplicadas, canetas no papel, Classificar como e modelos](topic:working-style).
- **Duplicar uma vista.** Plantas, planos de teto, chamadas, alçados e cortes podem ser duplicados como {{ui:Cópia própria}} ou {{ui:Ligado}}; {{ui:Tornar cópia própria}} torna uma vista ligada independente. Ver [Estilo de trabalho, vistas duplicadas, canetas no papel, Classificar como e modelos](topic:working-style).
- **Imprimir como se vê, ou por uma tabela de canetas.** As substituições de canetas ficam guardadas no IFC com a vista, e as folhas e os PDF desenham-nas como o ecrã. O mesmo tópico cobre as tabelas de canetas.
- **Classificar como.** {{ui:Classificar como}} em {{ui:Propriedades}} escreve para o IFC uma laje desenhada como estrada, uma parede como painel ou uma cobertura como rampa, na classe que escolher, e conta-a assim em mapas, Quantidades, Encontrar, Colorir por e Problemas.
- **Editar em alçados e cortes.** Desenhe e mova paredes, aberturas, níveis, cotas e notas diretamente num alçado ou corte, com os seus próprios tamanhos de folha e legendas. Ver [Editar em alçados e cortes](topic:edit-in-elevations).
- **Folhas.** Cada folha pode ser paisagem ou retrato. Uma caixa {{ui:Escreva uma escala}} fica ao lado da lista de escalas em cada vista colocada (1:64, 2:1, 1/4" = 1'). Pode arrastar um desenho colocado ou deslocá-lo com as setas, e {{ui:Formatos…}} › {{ui:Importar SVG…}} transforma o seu próprio desenho de folha numa legenda, com campos escritos folha a folha.
- **Créditos da biblioteca numa folha.** Um conjunto de desenhos com itens da Biblioteca recebe um mapa de créditos da Biblioteca que pode colocar em qualquer folha. Ver [Créditos da biblioteca](topic:library-credits).

### Biblioteca: colocar

- **A colocação segue a vista.** Na vista Planta, a Biblioteca mostra {{ui:Colocar na planta}}; em 3D mostra {{ui:Colocar no modelo}}; em Dividir mostra um botão dividido com {{ui:Colocar na planta}} como ação principal. As duas formas escrevem o mesmo elemento IFC. Também pode arrastar um cartão da Biblioteca para a planta ou para a vista 3D; com caneta ou dedo, prima e mantenha e depois arraste. Ver [Colocar a partir da Biblioteca](topic:place-from-library).

### Ficheiros e assistentes

- **Collada e Google Earth.** {{ui:Collada}} na barra de ferramentas (menu Ficheiro nos estilos de menu) escreve um .dae, ou um .kmz colocado onde o modelo está no mapa. Ver [Exportar o modelo como Collada ou para o Google Earth](topic:collada).
- **Assistentes podem colocar dispositivos elétricos.** O seu assistente ligado tem novas ferramentas para acrescentar, listar, alterar e eliminar dispositivos e para definir luzes. Os assistentes ficam desativados até os ativar nas {{ui:Definições}}. Ver [Permitir que um assistente de IA trabalhe com o seu modelo](topic:assistants).
- **Scan to BIM (complemento).** Desligado por predefinição e precisa do complemento Nuvens de pontos. Propõe pisos, paredes, portas e janelas a partir de uma digitalização, com o desvio medido de cada um; aceitar é um único passo de anulação.

### Análise

- **Dados de vento e sísmicos do local.** No separador {{ui:Análise}}: cargas de vento segundo ASCE 7-10 ou 7-16 para um edifício rígido e fechado, com uma força em cada piso como casos de carga, e dados sísmicos do local com uma consulta USGS e o espectro de cálculo.
- **Seguimento estrutural e elementos finitos.** Verificações de betão segundo ACI 318-19, forças laterais equivalentes segundo ASCE 7-22, deriva entre pisos, lajes e paredes como placas, e combinações de cargas de ASCE 7 e EN 1990. O nosso próprio motor de elementos finitos faz cascas, tetraedros e análise modal. Ver [Verificar elementos de betão e criar cargas sísmicas](topic:concrete-and-seismic) e [Análise de pórticos](topic:frame-analysis).

### Outros complementos e documentos

- **Iluminação interior (complemento).** Coloca luminárias e escreve o lux em números na planta de cada nível, com uma estimativa de encandeamento e um relatório imprimível.
- **Painel de documentos.** {{ui:Ficheiro}} › {{ui:Documentos…}} tem retirar e devolver com um ficheiro de bloqueio, letras de revisão, estados de publicação e histórico.
- **Regiões e aço.** Pacotes de desenho e de regulamentação de construção sul-africanos no complemento Regulamentos, e 976 perfis de aço do Reino Unido na tabela de secções partilhada.
- **Complementos gratuitos de impressão em resina.** Fatiador, suportes e base, teste de exposição, e os formatos de ficheiro GOO, SL1, Chitubox e Anycubic, todos desligados por predefinição.

## Em todas as aplicações

- Ao passar o rato sobre um botão ou controlo aparece uma sugestão Bootstrap.
- A dica inicial numa área de desenho vazia tem um botão de fechar; o BimCraft lembra-se de que foi fechada.
- A barra de separadores de um painel que não cabe agora desliza em vez de ser cortada.
- Com um documento aberto, o separador do navegador mostra "<documento> - BimCraft | CadCraft".
- Em {{ui:Definições}} › {{ui:Geral}} › {{ui:Layout}} os layouts são uma lista pendente de opções de duas linhas.
- A lista de idiomas em {{ui:Definições}} oferece mais idiomas do que na 0.8; os idiomas que não o inglês são rascunhos automáticos.

## Corrigido

- **Mover funciona em escadas,** e em rampas, corrimãos, planos de cobertura, dispositivos isolados, imagens e percursos.
- **Arrastar uma parede já não desvirtua o compartimento.** O punho central move a parede em quadrado consigo própria, e os seus cantos deslizam ao longo das paredes ligadas. Mantenha {{key:Mod}} para o antigo movimento livre; {{ui:Tornar quadrado}} repõe os 90 graus.
- **Uma alteração de espessura ou de tipo num nó ligado** agora mantém o canto fechado num L, num T, num nó de três paredes e junto a uma parede curva.
- **Mover ou copiar um grupo de compartimentos** mantém as paredes ligadas fora do grupo ligadas.
- **Refazer mantém a identidade de uma cota de parede.**
- **Escolher uma parede com Desenhar desligado** já não gera um erro em Propriedades.
- **Render recorre a WebGL** quando a GPU não consegue iniciar, em vez de parar.
- **A verificação de EnergyPlus pode voltar a ser ativada.**
- **Documentos abre como uma caixa centrada.** {{key:Esc}}, o X ou um clique na página escurecida fecha-a.
- **Os botões {{ui:Planta}}, {{ui:Dividir}} e {{ui:3D}} aparecem** assim que um modelo está aberto, e não só depois de Desenhar ter sido ativado uma vez.

## Limites assumidos

- Nada foi impresso em hardware real. Os suportes de resina são novos e não estão provados.
- Os resultados de vento, sísmica, betão e elementos finitos são auxiliares de verificação para um engenheiro, comparados com soluções fechadas, não com um edifício real.
- O Scan to BIM foi testado num edifício sintético, não numa digitalização real, e encontra apenas compartimentos retilíneos.
- O Collada não foi aberto aqui no Blender nem no Google Earth.
- A estimativa de iluminação foi comparada com o nosso próprio traçado, não com outros programas de iluminação.
- Os números sul-africanos não estão verificados.
- Os tipos de união de paredes (topo, meia-esquadria, esquadrado) e a prioridade de camadas não estão implementados; os cantos são em meia-esquadria.
- As línguas que não o inglês são rascunhos automáticos.

Tudo o resto está em [O que ainda não está implementado](topic:not-built-yet). As alterações anteriores estão nas notas da 0.8 e 0.8.1 mais abaixo nesta página.

## Anterior: 0.8 e 0.8.1

Estas são as alterações do BimCraft 0.8 (2026-11-01) e 0.8.1 (2026-11-02), em comparação com a 0.7. O BimCraft pode agora responder a perguntas sobre um edifício e testá-lo, com pessoas, som, água, vento e sismos, e desenhá-lo com mais ferramentas; a 0.8.1 é uma versão de correção.

### Novo

**Testar o edifício**

- **Pessoas no edifício.** A secção {{ui:Pessoas no edifício}} do painel esquerdo leva uma evacuação, ou a chegada de um dia normal, pelos seus compartimentos, portas e escadas. Vê as filas onde o edifício se estreita, o percurso mais longo até uma saída a partir de cada compartimento e quanto tempo demora a última pessoa. Marque {{ui:Fechada}} numa porta para ver o que muda, e marque {{ui:Mostrar as pessoas na vista 3D}} para ver os caminhantes. Os resultados vão para Problemas. É um modelo grosseiro de multidões para decisões de projeto, não um certificado de segurança contra incêndio. Ver [Percorrer o edifício com pessoas](topic:people-in-the-building).
- **Acústica dos compartimentos, e ouvi-la.** A secção {{ui:Acústica de compartimentos}} dá a cada compartimento o tempo de reverberação por banda de oitava (Sabine e Eyring), a partir do seu tamanho e dos acabamentos que escolher, e, com um objetivo próprio, indica quanta absorção seria necessária para o cumprir. {{ui:Reproduzir neste compartimento}} reproduz uma voz, um aplauso, notas dedilhadas ou um ficheiro de som próprio através de uma resposta ao impulso calculada para o compartimento. Os valores de absorção são valores típicos publicados, para substituir. Ver [Acústica de compartimentos](topic:room-acoustics).
- **Reprodução de cheias, vento e sismos.** {{ui:Reprodução de perigos}} faz subir a água pelos compartimentos, mostra a pressão do vento em cada piso e um sismo a abanar os pisos, numa planta ou num alçado com um cursor de tempo. Modelos simples, com as suas premissas no painel; não é uma verificação regulamentar. Ver [Reproduzir uma cheia, vento ou sismo](topic:hazard-playback).
- **O que se desgasta em cinquenta anos.** {{ui:Vista do ciclo de vida}} lista as janelas, portas, acabamentos e cobertura, com uma vida útil cada, os anos em que são substituídos e, quando escreve um custo por unidade, o custo por ano e o seu valor atual. {{ui:Guardar o planeamento (CSV)}} escreve-o. As vidas úteis são valores de planeamento. Ver [Ver o que se desgasta em cinquenta anos](topic:life-cycle-view).
- **Verificações de betão e sísmica.** Os blocos {{ui:Elementos de betão}} e {{ui:Ações sísmicas}} do separador {{ui:Análise}} verificam vigas e pilares de betão segundo ACI 318-19, e calculam forças laterais equivalentes segundo ASCE 7-22 em lajes rígidas, com deriva entre pisos. Para um engenheiro verificar. Ver [Verificar elementos de betão e criar cargas sísmicas](topic:concrete-and-seismic).

**Verificar e reportar**

- **Verificar com um IDS.** Carregue o ficheiro `.ids` que um cliente lhe entregou e veja em Problemas cada elemento que não o cumpre, antes de entregar o IFC. Abra {{ui:Verificar com um IDS}} em {{ui:Verificações do modelo}}. Ver [Verificar um modelo com o IDS de um cliente](topic:check-against-ids).
- **Etiquetas e mapas.** Defina as suas próprias etiquetas, atribua-as a muitos elementos de uma vez e faça mapas cujas colunas, filtros e agrupamentos as leiam; as etiquetas ficam guardadas no IFC. Ver [Etiquetas e mapas](topic:tags-and-schedules).
- **Documentos a partir do modelo.** {{ui:Documentos a partir do modelo}} preenche um modelo de especificação a partir do IFC aberto e guarda-o como PDF, documento Word ou Markdown. Ver [Documentos a partir do modelo](topic:documents-from-the-model).
- **Comparar uma digitalização com o modelo.** Com uma nuvem de pontos aberta, {{ui:Comparar}} julga cada elemento como construído, parcialmente construído, em falta ou não atingido, e mostra a percentagem construída. Ver [Comparar uma digitalização com o modelo](topic:compare-scan-with-model).
- **Carbono e custo.** O painel Carbono soma o carbono incorporado a partir de uma tabela de fatores que pode editar, e o painel Custo distribui os preços pelo planeamento 4D. Os fatores que vêm com o BimCraft são genéricos e marcados como não verificados. Ver [Carbono incorporado e custo](topic:embodied-carbon-and-5d-cost).
- **Qualquer projeção de mapa.** {{ui:Medir}} › {{ui:Sistema de coordenadas…}} aceita um número EPSG, uma zona UTM, um nome ou a sua própria definição de projeção. Ver [Georreferenciar com qualquer projeção](topic:georeference-any-projection).

**Desenhar e editar**

- **Mover, Alinhar e Distribuir.** Em {{ui:Compilação}}; {{key:Shift+M}} inicia Mover (o simples {{key:M}} continua a ser Medir). Mover copia à medida que avança com {{key:C}}, cada passo é uma anulação, e funciona numa sessão Live TeamWork. Ver [Mover, copiar, alinhar e distribuir](topic:move-align-distribute).
- **Imagens sob a planta.** {{ui:Compilação}} › {{ui:Imagem}} coloca um PNG, JPEG ou WebP sob a planta de um nível ou num plano vertical. Defina a escala por dois pontos, e mova, rode, esbata e bloqueie-a. Uma área copiada no MarkupCraft cola-se à escala da sua folha. Ver [Colocar uma imagem sob a planta](topic:pictures-as-backgrounds).
- **Paredes a partir de uma digitalização.** Com uma digitalização aberta, paredes, portas e compartimentos chegam como propostas que mantém ou rejeita uma a uma, num único passo de anulação. Só são encontradas paredes em duas direções perpendiculares. Ver [Transformar uma digitalização em paredes](topic:scan-to-walls).
- **Decalque, canetas e escada esboçada.** {{ui:Decalcar}} mostra outro nível a tracejado sob a planta, {{ui:Penas}} dá às paredes, portas e janelas a sua própria espessura de linha numa só vista, e {{ui:Esboçar escada}} transforma uma linha de percurso numa escada. Abre-se uma malha Wavefront OBJ. Ver [Decalcar um nível, canetas e uma escada a partir de um esboço](topic:trace-pens-stairs-obj).
- **Edifícios em torno de uma morada.** Os edifícios e o lote que a Morada para local do CivilCraft encontrou chegam como sugestões; marque os que quer acrescentar. Ver [Começar a partir do local do CivilCraft](topic:site-from-civilcraft).
- **Desenhos de painéis.** {{ui:Compilação}} › {{ui:Desenhos de painéis}} enquadra paredes, pisos e coberturas em madeira ou aço leve, e guarda uma lista de corte em CSV e desenhos de fabrico em PDF. São valores iniciais, não um projeto estrutural. Ver [Desenhos de painéis](topic:panel-drawings).
- **Paleta de símbolos e plantas.** {{ui:Compilação}} › {{ui:Paleta de símbolos}} encontra símbolos elétricos e de canalização pelo nome; a fonte {{ui:Plantas}} da {{ui:Biblioteca}} lista cerca de 400 plantas com símbolos de planta. Ver [Paleta de símbolos](topic:symbol-palette) e [Colocar uma planta](topic:plant-list).

**Tubagens, condutas e energia**

- **Split, VRF e ventiloconvectores.** Unidades interiores e exteriores com as suas ligações, e linhas de gás dimensionadas a partir de uma tabela de valores típicos de exemplo que pode alterar. Ver [Split, VRF e ventiloconvectores](topic:split-vrf-fan-coils).
- **Cálculos.** O painel Cálculos verifica o dimensionamento de tubagens de abastecimento e de condutas com perda de pressão, encaminha cabos por caleiras e tubos e mostra o seu enchimento, e calcula a iluminância a partir de ficheiros IES ou EULUMDAT. Os valores predefinidos estão identificados; escreva os valores do seu regulamento. Ver [Cálculos de tubagens, condutas, cabos e luz](topic:mep-calculations).
- **Ficheiros PCF.** O **Exportar PCF** da ferramenta de tubagem escreve os troços para programas de tensões em tubagens e isométricos, e um ficheiro PCF lido de volta desenha a sua tubagem. Ver [Ficheiros de componentes de tubagem](topic:piping-pcf).
- **Fotovoltaico solar.** Coloque conjuntos em coberturas ou no solo, sombreie-os a partir do modelo, estime a energia anual, verifique as cadeias de módulos e faça dados de esquema unifilar. O módulo de partida e as perdas são genéricos. Ver [Fotovoltaico solar](topic:solar-pv).
- **Ficheiro EnergyPlus.** O painel Verificar com EnergyPlus escreve o modelo como um IDF para executar no seu próprio EnergyPlus. Executá-lo no navegador exige uma compilação alojada por si, cujo endereço indica; o BimCraft não a inclui. Ver [Verificar aquecimento e arrefecimento com EnergyPlus](topic:check-with-energyplus).

**Imagens e ficheiros**

- **Escolher o motor de renderização.** {{ui:Render}} tem uma escolha {{ui:Motor}}. Os nossos dois motores incorporados (Rápido e Traçador de caminhos) continuam a ser a predefinição. {{ui:Abrir em}} guarda a cena como ficheiro USD ou glTF, e uma pasta de projeto Unreal como .zip; no CadCraft Studio, um complemento pode acrescentar um motor. O plug-in Unreal que abre o projeto não está publicado. Ver [Escolher o programa que desenha a imagem](topic:render-engines).
- **Anular no Studio.** Dentro do CadCraft Studio, o BimCraft informa o Studio de cada passo concluído, para que o Studio possa anular o seu último passo na janela que usou por último. Ver [Anular entre aplicações](topic:undo-across-apps).
- **Complementos no seu ficheiro.** Um IFC regista os complementos que escreveram nele, e oferece os que não tem quando o abre. Ver [Complementos no seu ficheiro](topic:add-ons-in-your-file).

**Em todas as aplicações**

- **Ligar a sua IA.** O seu próprio assistente pode controlar o BimCraft através da ligação do Studio e responder a perguntas sobre o modelo, como quais os compartimentos sob uma determinada área. O Studio não tem IA própria. Ver [Permitir que um assistente de IA trabalhe com o seu modelo](topic:assistants).
- **Linhas da barra de ferramentas.** {{ui:Definições}} › {{ui:Geral}} › {{ui:Linhas da barra de ferramentas}} oferece Quebra automática, 2 linhas ou 1 linha; Quebra automática continua a ser a predefinição.
- **Dispositivos de entrada.** As definições de trackpad, caneta, rato 3D, comando e MIDI são partilhadas por todas as aplicações.
- **Problemas e Live.** O painel de avisos e as sessões Live funcionam como antes, com as novas verificações acima a alimentar Problemas.
- **Idiomas.** 54 idiomas, dez deles novos. Os que não o inglês são rascunhos automáticos, ainda não revistos por um falante nativo; os tópicos de ajuda estão sobretudo em inglês.

### Corrigido na 0.8.1

- **Layout do friso e Explorador de projeto.** Inserir › Importar CAD, Inserir › Imagem e Gerir › Unidades do projeto diziam «Ainda não implementado no BimCraft». Agora Imagem abre a ferramenta Imagem, Importar CAD abre {{ui:Compilação}} › {{ui:A partir de um desenho…}} (DWG, DXF, PDF ou uma digitalização), e Unidades do projeto abre {{ui:Definições}} › {{ui:Global}} › {{ui:Unidades}}. Mover e Alinhar executam as ferramentas Mover e Alinhar, Nível abre {{ui:Adicionar níveis…}}, Fases abre a secção Fases de renovação e Materiais abre a biblioteca de materiais.
- **Secção de classes DWG.** Era lida com o tipo errado; corrigido no BimCraft e nas outras aplicações que leem DWG.
- **Idioma em tempo de execução.** O Studio e as edições empacotadas podem agora mudar de idioma sem reiniciar. Ainda não foi testado em todas as plataformas; se o idioma não mudar, comunique-o.
- **Script de pacote Archicad.** `archicad_bundle.py`, um download à parte, agora encontra o caminho do Archicad, observa a pasta durante até 20 segundos e tenta de novo ao lado do pacote.

### Ainda não nesta versão

- **Ajudas de segurança e de projeto.** Pessoas no edifício não tem limite de distância de evacuação de um código de construção (o limite é introduzido pelo utilizador), e não foi verificado manualmente numa planta real. Os valores de acústica, ciclo de vida e perigo são valores de planeamento, não uma verificação regulamentar.
- **Cenários climáticos e EnergyPlus.** Não há cenários climáticos incorporados: pode carregar um ficheiro de cenário para a simulação de cheias. A execução do EnergyPlus no navegador não faz parte desta versão.
- **Layout do friso.** A «Medição de materiais» continua «Não implementado», porque o BimCraft não tem lista de quantidades de materiais, e 54 outras ferramentas do friso a cinzento ainda não têm uma ferramenta BimCraft por trás.
- **Assinatura e plataformas.** Os instaladores do Windows e o .dmg do macOS não estão assinados, por isso o SmartScreen mostra {{ui:Mais informações}}, depois {{ui:Executar mesmo assim}}, e o macOS exige clique com o botão direito e depois {{ui:Abrir}}. A compilação para iPad e iPhone não foi recompilada para a 0.8.1.
- **Testes em páginas reais.** Alguns testes mais antigos do navegador do BimCraft continuam a falhar na nossa página de teste, como já falhavam antes da 0.8.1.

Tudo o resto está em [O que ainda não está implementado](topic:not-built-yet). As alterações anteriores estão em [O que há de novo na 0.7](topic:whats-new-0-7).
