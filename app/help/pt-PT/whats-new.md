---
title: Novidades na 0.9
summary: Formas de parede, dividir, deslocar, esticar e bloquear à grelha, níveis abaixo do solo, cotas de grelha e Medir na planta, vistas duplicadas com estilos de trabalho e tabelas de canetas, Classificar como, exportação Collada e Google Earth, Scan to BIM, análise de vento e sismo, suplementos de impressão em resina.
keywords: novidades, 0.9, notas de lançamento, formas de parede, retângulo, polígono, arco, escolher linhas, traçar contorno, deslocamento, ligação, esticar por caixa, dividir parede, intervalo, voltar a juntar, bloquear à grelha, crescer a partir de, medir a partir de, adicionar um nível abaixo, cave, comando de nível, cotas de grelha, medir na planta, estilo de trabalho, duplicar vista, cópia própria, vista ligada, tabela de canetas, imprimir como se mostra, classificar como, escrever uma escala, importar svg, colocar na planta, colocar no modelo, collada, dae, kmz, google earth, scan to bim, carga de vento, sísmica, elementos finitos, painel de documentos, impressão em resina, novidades, o que há de novo, notas de lançamento, registo de alterações, alterações, 0.8, 0.8.1, versão, novas funcionalidades, evacuação, pessoas, filas, acústica, tempo de reverberação, resposta ao impulso, cheia, vento, sismo, perigo, ciclo de vida, vida útil, ids, etiquetas, mapas, mover, alinhar, distribuir, imagem, fundo, digitalização para paredes, terreno do civilcraft, desenhos de painéis, estrutura, solar, fv, dividir, vrf, unidade ventilo-convetora, dimensionamento de tubos, calha para cabos, iluminância, betão, sísmica, comparar digitalização, epsg, projeção, documentos, modelo, carbono, custo, energyplus, motor de render, abrir em, usd, glb, unreal, anular, suplementos, pcf, símbolos, plantas, traçado, canetas, friso, browser de projeto, esquema
from: 5624fe88
---

Esta é a lista do que mudou no BimCraft 0.9, em comparação com a 0.8.1. Os dois grandes temas são uma verdadeira ferramenta de paredes e vistas que se comportam como as pessoas que vêm dos grandes programas BIM esperam. À volta deles vêm a exportação Collada, assistentes que podem colocar dispositivos elétricos, Scan to BIM, e trabalho de vento, sismo e elementos finitos no separador {{ui:Análise}}.

## Novo

### Paredes

- **Desenhar formas completas.** Em {{ui:Desenhar}}, abra {{ui:Formas}} (ou escolha uma forma na lista Forma da linha Parede) para um retângulo, um retângulo rodado, um polígono de 3 a 64 lados, um arco pelo centro, um arco tangente, paredes sobre linhas escolhidas, ou paredes à volta de uma área fechada em que clica. Um retângulo são quatro paredes com quatro cantos ligados e um passo de Anular. Veja [Formas de parede, dividir, deslocar, esticar e bloquear](topic:wall-tools).
- **Definir antes de desenhar, alterar depois.** A linha Parede tem {{ui:Offset}} e {{ui:Ligação}} (desmarque para desenhar paredes autónomas). Depois use {{ui:Offset}}, {{ui:Esticar por caixa}} e {{ui:Alinhar e bloquear}} em paredes desenhadas. Uma parede movida ou esticada mantém as suas portas, janelas e cotas. Cada receita é um passo de Anular.
- **Cortar paredes.** {{ui:Dividir}}, {{ui:Intervalo}}, {{ui:Extremidades livres}}, {{ui:Eliminar segmento}} e {{ui:Voltar a juntar}} cortam uma parede com um clique ou onde outra parede a atravessa. Um corte através de uma porta é recusado. Veja [Formas de parede, dividir, deslocar, esticar e bloquear](topic:wall-tools).
- **Bloquear paredes a linhas de grelha.** Escolha uma parede ao longo de uma linha de grelha e marque {{ui:Bloquear à grelha}} em {{ui:Propriedades}}. Com a ferramenta Grelha ativa, escreva uma distância em {{ui:Mover em}} para uma linha escolhida, e as paredes bloqueadas seguem-na num passo de Anular.
- **Dar forma a uma parede.** Em {{ui:Propriedades}} de uma parede pode fixar o seu topo ou a sua base a uma cobertura, piso ou teto, editar o seu contorno de alçado, inclina-la, ou abrir um vão sem porta nem janela. Veja [Dar forma a uma parede](topic:wall-shape).
- **O comprimento diz qual extremidade se mantém.** {{ui:Crescer a partir de}} define se o início, o fim ou o centro fica no lugar quando altera o comprimento.
- **O comprimento e a cota da planta concordam.** {{ui:Medir a partir de}} (linha de eixo, face interior ou face exterior) comanda tanto o campo Comprimento como as cotas de parede da planta. Começa no eixo, pelo que as cotas de parede da planta passam a ler o eixo onde antes liam a face exterior. Altere-o na linha Parede, em {{ui:Propriedades}} ou em {{ui:Definições}} › {{ui:BimCraft}} › {{ui:Paredes}}.

### Níveis, grelhas e medição

- **Adicionar um nível abaixo.** {{ui:Adicionar um nível abaixo}} no painel {{ui:Níveis}} acrescenta um nível sob o mais baixo, com a mesma altura, a uma cota negativa (Nível -1, Nível -2). Nada mais se move. {{ui:Adicionar níveis…}} aceita agora alturas negativas. Escrever LEVEL, LEVELS, STOREY ou STOREYS na linha de comandos abre {{ui:Adicionar níveis…}}, e há um botão {{ui:Níveis}} nos menus e nos separadores do friso. Veja [Locais, edifícios e níveis](topic:site-building-and-levels).
- **Cotas de grelha na planta.** Com a ferramenta {{ui:Grelha}} ativa, marque {{ui:Cotas}} para desenhar o espaçamento entre linhas vizinhas e o tamanho total para além das bolhas, em cada planta de nível. Veja [Cotar uma grelha](topic:grid-dimensions).
- **Medir na planta.** {{ui:Medir}} no grupo {{ui:Desenhar}} dá uma distância com as diferenças X e Y entre dois cliques. Nada fica guardado no modelo. Veja [Medir na planta](topic:measure-on-the-plan).
- **Alterar várias colunas de uma vez.** Escolha colunas juntamente com uma parede e a lista mostra cada tipo com {{ui:Manter só estes}}. Um clique mantém as colunas e mostra os seus campos comuns.
- **Uma unidade de apresentação em todo o lado.** Coordenadas, medições, cortes, escalas de folha, as cargas e resultados do separador de estrutura e o texto de Problemas seguem a unidade que escolher. As exportações ficam em SI.

### Vistas, folhas e impressão

- **Estilo de trabalho.** {{ui:Definições}} › {{ui:BimCraft}} › {{ui:Estilo de trabalho}} escolhe entre cada vista ter as suas próprias anotações e tabelas de canetas, ou partilhá-las. Veja [Estilo de trabalho, vistas duplicadas, canetas no papel, Classificar como e modelos](topic:working-style).
- **Duplicar uma vista.** Plantas, planos de teto, chamadas, alçados e cortes podem ser duplicados como {{ui:Cópia própria}} ou {{ui:Ligado}}; {{ui:Tornar cópia própria}} torna uma ligada independente. Veja [Estilo de trabalho, vistas duplicadas, canetas no papel, Classificar como e modelos](topic:working-style).
- **Imprimir como se mostra, ou por uma tabela de canetas.** As alterações de canetas ficam guardadas no IFC com a vista, e as folhas e os PDF desenham-nas como o ecrã. O mesmo tópico cobre as tabelas de canetas.
- **Classificar como.** {{ui:Classificar como}} em {{ui:Propriedades}} escreve uma laje desenhada como estrada, uma parede como painel ou uma cobertura como rampa no IFC, com a classe que escolher, e conta-a assim em mapas, Quantidades, Procurar, Colorir por e Problemas.
- **Editar em alçados e cortes.** Desenhe e mova paredes, aberturas, níveis, cotas e notas diretamente num alçado ou corte, com os seus próprios tamanhos de folha e blocos de título. Veja [Editar em alçados e cortes](topic:edit-in-elevations).
- **Folhas.** Cada folha pode ser paisagem ou retrato. Uma caixa {{ui:Escrever uma escala}} fica ao lado da lista de escalas em cada vista colocada (1:64, 2:1, 1/4" = 1'). Pode arrastar um desenho colocado ou empurrá-lo com as setas do teclado, e {{ui:Formatos…}} › {{ui:Importar SVG…}} transforma o seu próprio desenho de folha num bloco de título com campos escritos por folha.
- **Créditos da biblioteca numa folha.** Um conjunto de desenhos com itens de Biblioteca recebe um mapa de créditos da Biblioteca que pode colocar em qualquer folha. Veja [Créditos da biblioteca](topic:library-credits).

### Biblioteca: colocar

- **Colocar segue a vista.** Na vista de Planta, a Biblioteca mostra {{ui:Colocar na planta}}; em 3D mostra {{ui:Colocar no modelo}}; em Dividir mostra um botão dividido com {{ui:Colocar na planta}} como ação principal. Ambas as formas escrevem o mesmo elemento IFC. Pode também arrastar um cartão da Biblioteca para a planta ou para a vista 3D; com uma caneta ou um dedo, carregue e mantenha, depois arraste. Veja [Colocar a partir da Biblioteca](topic:place-from-library).

### Ficheiros e assistentes

- **Collada e Google Earth.** {{ui:Collada}} na barra de ferramentas (menu Ficheiro nos estilos de menu) escreve um .dae, ou um .kmz colocado onde o modelo está no mapa. Veja [Exportar o modelo como Collada ou para o Google Earth](topic:collada).
- **Assistentes podem colocar dispositivos elétricos.** O seu assistente ligado tem novas ferramentas para acrescentar, listar, alterar e eliminar dispositivos e para definir luzes. Os assistentes ficam desligados até os ligar em {{ui:Definições}}. Veja [Deixar um assistente de IA trabalhar com o seu modelo](topic:assistants).
- **Scan to BIM (suplemento).** Desligado por predefinição e precisa do suplemento Nuvens de pontos. Propõe pisos, paredes, portas e janelas a partir de uma digitalização, com o desvio medido de cada um; aceitar é um passo de Anular.

### Análise

- **Dados de vento e sismo do local.** No separador {{ui:Análise}}: cargas de vento segundo a ASCE 7-10 ou 7-16 para um edifício rígido e fechado, com uma força em cada piso como casos de carga, e dados sísmicos do local com uma consulta ao USGS e o espetro de projeto.
- **Acompanhamento estrutural e elementos finitos.** Verificações de betão segundo a ACI 318-19, forças laterais equivalentes segundo a ASCE 7-22, deriva por piso, lajes e paredes como placas, e combinações de cargas da ASCE 7 e da EN 1990. O nosso próprio motor de elementos finitos faz cascas, tetraedros e análise modal. Veja [Verificar elementos de betão e calcular cargas sísmicas](topic:concrete-and-seismic) e [Análise de pórticos](topic:frame-analysis).

### Outros suplementos e documentos

- **Iluminação interior (suplemento).** Coloca luminárias e escreve a iluminância em lux como números no plano de cada nível, com uma estimativa de encandeamento e um relatório imprimível.
- **Painel de documentos.** {{ui:Ficheiro}} › {{ui:Documentos…}} tem retirar e devolver com um ficheiro de bloqueio, letras de revisão, estados de publicação e histórico.
- **Regiões e aço.** Pacotes de desenho e de regulamentação de construção sul-africanos no suplemento de Regulamentos, e 976 tamanhos de aço do Reino Unido na tabela de secções partilhada.
- **Suplementos gratuitos de impressão em resina.** Fatiador, suportes e base, teste de exposição, e os formatos de ficheiro GOO, SL1, Chitubox e Anycubic, todos desligados por predefinição.

## Em todas as aplicações

- Passar o rato sobre um botão ou controlo mostra uma sugestão Bootstrap.
- A sugestão inicial numa área de desenho vazia tem um botão de fecho; o BimCraft lembra-se de que foi fechada.
- A faixa de separadores de um painel que não cabe agora desliza em vez de ser cortada.
- Com um documento aberto, o separador do navegador lê "<documento> - BimCraft | CadCraft".
- Em {{ui:Definições}} › {{ui:Geral}} › {{ui:Esquema}} os esquemas são uma lista pendente de escolhas de duas linhas.
- A lista de idiomas em {{ui:Definições}} oferece mais idiomas do que na 0.8; os idiomas que não o inglês são rascunhos automáticos.

## Corrigido

- **Mover funciona em escadas,** e em rampas, corrimãos, planos de cobertura, dispositivos autónomos, imagens e caminhos.
- **Arrastar uma parede já não deforma o compartimento.** A pega central move a parede em esquadro consigo própria, e os seus cantos deslizam ao longo das paredes ligadas. Mantenha {{key:Mod}} para o antigo movimento livre; {{ui:Tornar quadrado}} repõe os 90 graus.
- **Uma alteração de espessura ou de tipo num nó ligado** mantém agora o canto fechado num L, num T, num nó de três paredes e junto a uma parede curva.
- **Mover ou copiar um grupo de compartimentos** mantém as paredes ligadas fora do grupo ligadas.
- **Voltar a fazer mantém a identidade de uma cota de parede.**
- **Escolher uma parede com Desenhar desligado** já não gera um erro em Propriedades.
- **A renderização passa para WebGL** quando a placa gráfica não consegue arrancar, em vez de parar.
- **A verificação com EnergyPlus pode ser ligada** de novo.
- **Documentos abre como uma caixa de diálogo centrada.** {{key:Esc}}, o X ou um clique na página escurecida fecha-a.
- **Os botões {{ui:Planta}}, {{ui:Dividir}} e {{ui:3D}} aparecem** assim que um modelo está aberto, e não apenas depois de Desenhar ter sido ativado uma vez.

## Limites assumidos

- Nada foi impresso em hardware real. Os suportes de resina são novos e não provados.
- Os resultados de vento, sismo, betão e elementos finitos são ajudas de verificação para um engenheiro, comparados com fórmulas fechadas, não com um edifício real.
- Scan to BIM foi testado num edifício sintético, não numa digitalização real, e encontra apenas compartimentos retilíneos.
- A Collada não foi aberta no Blender nem no Google Earth aqui.
- A estimativa de iluminação foi comparada com o nosso próprio traçado, não com outros programas de iluminação.
- Os números sul-africanos não estão verificados.
- Os estilos de ligação de paredes (topo, meia-esquadria, esquadrar) e a prioridade da camada não estão construídos; os cantos são em meia-esquadria.
- Os idiomas que não o inglês são rascunhos automáticos.

Tudo o resto está em [O que ainda não está implementado](topic:not-built-yet). As alterações anteriores estão nas notas da 0.8 e da 0.8.1 mais abaixo nesta página.

## Anteriores: 0.8 e 0.8.1

Esta é a lista do que mudou no BimCraft 0.8 (2026-11-01) e 0.8.1 (2026-11-02), em comparação com a 0.7. O BimCraft consegue agora responder a perguntas sobre um edifício e testá-lo, com pessoas, som, água, vento e sismos, e desenhá-lo com mais ferramentas; a 0.8.1 é uma versão de correções.

### Novo

**Testar o edifício**

- **Pessoas no edifício.** A secção {{ui:Pessoas no edifício}} do painel esquerdo leva uma evacuação ou um dia normal de chegadas pelos seus compartimentos, portas e escadas. Vê as filas onde o edifício estreita, a caminhada mais longa até uma saída a partir de cada compartimento e quanto tempo demora a última pessoa. Marque {{ui:Fechada}} numa porta para ver o que muda, e marque {{ui:Mostrar as pessoas na vista 3D}} para ver os caminhantes. Os resultados vão para Problemas. Um modelo grosseiro de multidões para decisões de projeto, não um certificado de segurança contra incêndio. Veja [Levar pessoas pelo edifício](topic:people-in-the-building).
- **Acústica de compartimentos, e ouvi-la.** A secção {{ui:Acústica de compartimentos}} dá o tempo de reverberação de cada compartimento por banda de oitava (Sabine e Eyring) a partir do seu tamanho e dos acabamentos que escolhe, e com um objetivo próprio diz quanta absorção cumpriria esse objetivo. {{ui:Reproduzir neste compartimento}} reproduz uma voz, um aplauso, notas dedilhadas ou um ficheiro de som seu através de uma resposta ao impulso calculada para o compartimento. Os valores de absorção são valores publicados típicos para substituir. Veja [Acústica de compartimentos](topic:room-acoustics).
- **Reprodução de cheias, vento e sismos.** {{ui:Reprodução de perigos}} reproduz água a subir pelos compartimentos, a pressão do vento em cada piso e um sismo a abanar os pisos, numa planta ou num alçado com um cursor de tempo. Modelos simples com os seus pressupostos no painel; não é uma verificação de norma. Veja [Reproduzir uma cheia, vento ou sismo](topic:hazard-playback).
- **O que se desgasta em cinquenta anos.** {{ui:Vista do ciclo de vida}} lista as janelas, portas, acabamentos e cobertura com uma vida útil cada, os anos em que são substituídos e, quando escreve um custo por unidade, o custo por ano e o seu valor presente. {{ui:Guardar o planeamento (CSV)}} escreve-o. As vidas úteis são valores de planeamento. Veja [Ver o que se desgasta em cinquenta anos](topic:life-cycle-view).
- **Verificações de betão e sísmica.** Os blocos {{ui:Verificações de betão}} e {{ui:Cargas sísmicas}} do separador {{ui:Análise}} verificam vigas e pilares de betão segundo a ACI 318-19 e fazem forças laterais equivalentes segundo a ASCE 7-22 em pisos rígidos, com deriva por piso. Para um engenheiro verificar. Veja [Verificar elementos de betão e calcular cargas sísmicas](topic:concrete-and-seismic).

**Verificar e reportar**

- **Verificar contra um IDS.** Carregue o ficheiro `.ids` que um cliente lhe deu e veja em Problemas cada elemento que não cumpre, antes de entregar o IFC. Abra {{ui:Verificar com um IDS}} em {{ui:Verificações do modelo}}. Veja [Verificar um modelo contra o IDS de um cliente](topic:check-against-ids).
- **Etiquetas e mapas.** Defina as suas próprias etiquetas, defina-as em muitos elementos de uma vez e crie mapas cujas colunas, filtros e grupos as leiam; as etiquetas ficam guardadas no IFC. Veja [Etiquetas e mapas](topic:tags-and-schedules).
- **Documentos a partir do modelo.** {{ui:Documentos a partir do modelo}} preenche um modelo de especificação a partir do IFC aberto e guarda-o como PDF, documento Word ou Markdown. Veja [Documentos a partir do modelo](topic:documents-from-the-model).
- **Comparar uma digitalização com o modelo.** Com uma nuvem de pontos aberta, {{ui:Comparar}} julga cada elemento como construído, parcialmente construído, em falta ou não alcançado, e mostra a percentagem construída. Veja [Comparar uma digitalização com o modelo](topic:compare-scan-with-model).
- **Carbono e custo.** O painel Carbono soma o carbono incorporado a partir de uma tabela de fatores que pode editar, e o painel Custo distribui os preços pelo cronograma 4D. Os fatores que vêm com o BimCraft são genéricos e marcados como não verificados. Veja [Carbono incorporado e custo](topic:embodied-carbon-and-5d-cost).
- **Qualquer projeção de mapa.** {{ui:Medir}} › {{ui:Sistema de coordenadas…}} aceita um número EPSG, uma zona UTM, um nome ou a sua própria definição de projeção. Veja [Georreferenciar com qualquer projeção](topic:georeference-any-projection).

**Desenhar e editar**

- **Mover, Alinhar e Distribuir.** Em {{ui:Compilação}}; {{key:Shift+M}} inicia Mover (o simples {{key:M}} continua a ser Medir). Mover copia à medida que avança com {{key:C}}, cada passo é um Anular, e viaja numa sessão Live TeamWork. Veja [Mover, copiar, alinhar e distribuir](topic:move-align-distribute).
- **Imagens sob a planta.** {{ui:Compilação}} › {{ui:Imagem}} coloca um PNG, JPEG ou WebP sob a planta de um nível ou num plano vertical. Defina a escala por dois pontos, e mova, rode, esbata e bloqueie-a. Uma área copiada no MarkupCraft é colada à escala da sua folha. Veja [Pôr uma imagem sob a planta](topic:pictures-as-backgrounds).
- **Paredes a partir de uma digitalização.** Com uma digitalização aberta, paredes, portas e compartimentos surgem como propostas que mantém ou rejeita uma a uma, num só passo de Anular. Só são encontradas paredes em duas direções perpendiculares. Veja [Transformar uma digitalização em paredes](topic:scan-to-walls).
- **Traçado, canetas e escada de esboço.** {{ui:Traçado}} mostra outro nível tracejado sob a planta, {{ui:Canetas}} dá às paredes, portas e janelas a sua própria espessura de linha numa vista, e {{ui:Escada de esboço}} transforma uma linha de percurso numa escada. Um malha OBJ Wavefront abre. Veja [Traçar um nível, canetas e uma escada a partir de um esboço](topic:trace-pens-stairs-obj).
- **Edifícios em torno de uma morada.** Os edifícios e o lote que o Address to site do CivilCraft encontrou chegam como sugestões; marca os que quer acrescentar. Veja [Começar a partir do terreno do CivilCraft](topic:site-from-civilcraft).
- **Desenhos de painéis.** {{ui:Compilação}} › {{ui:Desenhos de painéis}} enquadra paredes, pisos e coberturas em madeira ou aço leve e guarda uma lista de corte em CSV e desenhos de oficina em PDF. Valores de partida, não um projeto estrutural. Veja [Desenhos de painéis](topic:panel-drawings).
- **Palete de símbolos e plantas.** {{ui:Compilação}} › {{ui:Paleta de símbolos}} encontra símbolos elétricos e de canalização pelo nome; a fonte {{ui:Plantas}} da {{ui:Biblioteca}} lista cerca de 400 plantas com símbolos de planta. Veja [Paleta de símbolos](topic:symbol-palette) e [Colocar uma planta](topic:plant-list).

**Tubagens, condutas e energia**

- **Split, VRF e unidades ventilo-convetoras.** Unidades interiores e exteriores com as suas ligações, e linhas de fluido frigorigénio dimensionadas a partir de uma tabela de valores típicos de exemplo que pode alterar. Veja [Split, VRF e unidades ventilo-convetoras](topic:split-vrf-fan-coils).
- **Cálculos.** O painel Cálculos verifica o dimensionamento de tubos de alimentação e condutas com a perda de pressão, encaminha cabos por caleiras e tubos e mostra o seu enchimento, e calcula a iluminância a partir de ficheiros IES ou EULUMDAT. Os valores por predefinição estão identificados; escreva os valores do seu código. Veja [Cálculos de tubagens, condutas, cabos e luz](topic:mep-calculations).
- **Ficheiros PCF.** {{ui:Exportar PCF}} da ferramenta Tubo escreve os troços para programas de tensões em tubagem e de isométricas, e um ficheiro PCF lido de volta desenha o seu tubo. Veja [Ficheiros de componentes de tubagem](topic:piping-pcf).
- **Solar fotovoltaico.** Instale painéis em coberturas ou no solo, faça-lhes sombra a partir do modelo, estime a energia anual, verifique as cadeias e produza dados de um esquema unifilar. O módulo de partida e as perdas são genéricos. Veja [Solar fotovoltaico](topic:solar-pv).
- **Ficheiro EnergyPlus.** O painel Verificar com EnergyPlus escreve o modelo como um IDF para executar no seu próprio EnergyPlus. Executá-lo no navegador precisa de uma versão que aloja e cujo endereço escreve; o BimCraft não a inclui. Veja [Verificar aquecimento e arrefecimento com EnergyPlus](topic:check-with-energyplus).

**Imagens e ficheiros**

- **Escolher o motor de render.** {{ui:Render}} tem uma escolha {{ui:Motor}}. Os nossos dois motores integrados (Rápido e Path tracer) continuam a ser a predefinição. {{ui:Abrir em}} guarda a cena como ficheiro USD ou glTF, e uma pasta de projeto Unreal como .zip; no CadCraft Studio, um suplemento pode acrescentar um motor. O plug-in do Unreal que abre o projeto ainda não foi lançado. Veja [Escolher o programa que desenha a imagem](topic:render-engines).
- **Anular entre aplicações.** Dentro do CadCraft Studio, o BimCraft diz ao Studio cada passo concluído, para que o Studio possa anular o seu último passo na janela que usou por último. Veja [Anular entre aplicações](topic:undo-across-apps).
- **Suplementos no seu ficheiro.** Um IFC regista os suplementos que escreveram nele, e oferece os que lhe faltam quando o abre. Veja [Suplementos no seu ficheiro](topic:add-ons-in-your-file).

**Em todas as aplicações**

- **Ligue a sua IA.** O seu próprio assistente pode conduzir o BimCraft através da ligação do Studio e responder a perguntas sobre o modelo, como quais os compartimentos sob uma determinada área. O Studio não tem IA própria. Veja [Deixar um assistente de IA trabalhar com o seu modelo](topic:assistants).
- **Linhas da barra de ferramentas.** {{ui:Definições}} › {{ui:Geral}} › {{ui:Linhas da barra de ferramentas}} oferece Quebrar, 2 linhas ou 1 linha; Quebrar continua a ser a predefinição.
- **Dispositivos de entrada.** As definições de trackpad, caneta, rato 3D, comando e MIDI são partilhadas por todas as aplicações.
- **Problemas e Live.** O painel de avisos e as sessões Live funcionam como antes, com as novas verificações acima a alimentarem Problemas.
- **Idiomas.** 54 idiomas, dez deles novos. Os que não são o inglês são rascunhos automáticos ainda não revistos por um falante nativo; os tópicos de ajuda estão sobretudo em inglês.

### Corrigido na 0.8.1

- **Friso + layout do Browser de projeto.** Inserir › Importar CAD, Inserir › Imagem e Gerir › Unidades do projeto diziam "Ainda não construído no BimCraft". Imagem abre agora a ferramenta Imagem, Importar CAD abre {{ui:Compilação}} › {{ui:A partir de um desenho…}} (DWG, DXF, PDF ou uma digitalização), e Unidades do projeto abre {{ui:Definições}} › {{ui:Global}} › {{ui:Unidades}}. Mover e Alinhar executam as ferramentas Mover e Alinhar, Nível abre {{ui:Adicionar níveis…}}, Fases abre a secção de fases de renovação, e Materiais abre a biblioteca de materiais.
- **Separador DWG de classes.** Era lido como o tipo errado; corrigido no BimCraft e nas outras aplicações que leem DWG.
- **Idioma em tempo de execução.** O Studio e as edições empacotadas podem mudar de idioma sem reiniciar. Isto ainda não foi testado em todas as plataformas; diga-nos se o idioma não mudar.
- **Script do pacote Archicad.** `archicad_bundle.py`, um download separado, encontra agora o caminho do Archicad, vigia a pasta durante até 20 segundos e tenta de novo junto ao pacote.

### Ainda não nesta versão

- **Ajudas de segurança e de projeto.** Pessoas no edifício não tem limite de distância de percurso de um código de construção (o limite escreve-o você) e não foi verificado à mão numa planta real. As figuras de acústica, ciclo de vida e perigos são valores de planeamento, não uma verificação de norma.
- **Futuros climáticos e EnergyPlus.** Não há futuros climáticos incluídos: pode carregar um ficheiro de cenário para a simulação de cheias. A execução do EnergyPlus no navegador não faz parte desta versão.
- **Layout do friso.** Material Takeoff continua "Não construído" porque o BimCraft não tem uma lista de quantidades de material, e 54 outras ferramentas do friso a cinzento ainda não têm uma ferramenta BimCraft por trás.
- **Assinatura e plataformas.** Os instaladores do Windows e o .dmg do macOS não estão assinados, por isso o SmartScreen mostra {{ui:Mais informações}}, depois {{ui:Executar mesmo assim}}, e o macOS precisa de clique com o botão direito e depois {{ui:Abrir}}. A versão para iPad e iPhone não foi reconstruída para a 0.8.1.
- **Testes de página real.** Alguns testes antigos do navegador do BimCraft continuam a falhar na nossa página de teste, como falhavam antes da 0.8.1.

Tudo o resto está em [O que ainda não está implementado](topic:not-built-yet). As alterações anteriores estão em [Novidades na 0.7](topic:whats-new-0-7).
