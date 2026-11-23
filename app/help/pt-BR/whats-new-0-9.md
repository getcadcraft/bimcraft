---
title: Novidades da versão 0.9 (anteriores)
summary: Formas de parede, dividir, deslocar, esticar e travar na grade, níveis abaixo do solo, cotas de eixos e Medir na planta, vistas duplicadas com estilos de trabalho e tabelas de canetas, Reportar como, exportação Collada e Google Earth, Scan para BIM, análise de vento e sísmica, complementos de impressão em resina.
keywords: novidades 0.9, versão anterior, novidades, 0.9, notas de versão, formas de parede, retângulo, polígono, arco, escolher linhas, contorno de traço, deslocamento, união, esticar por caixa, alinhar e travar, dividir parede, vão, reunir, travar na grade, crescer a partir de, medir a partir de, adicionar nível abaixo, subsolo, comando nível, cotas de eixos, medir na planta, estilo de trabalho, vista duplicada, cópia própria, vista vinculada, tabela de canetas, imprimir como exibido, reportar como, digitar uma escala, importar svg, posicionar na planta, posicionar no modelo, collada, dae, kmz, google earth, scan para bim, carga de vento, sísmica, elementos finitos, painel de documentos, impressão em resina, novidades, o que há de novo, notas de versão, registro de alterações, 0.8, 0.8.1, versão, novos recursos, evacuação, pessoas, filas, acústica, reverberação, resposta ao impulso, enchente, vento, terremoto, risco, ciclo de vida, vida útil, ids, etiquetas, tabelas, mover, alinhar, distribuir, imagem, plano de fundo, scan para paredes, terreno do civilcraft, painéis, enquadramento, solar, fotovoltaico, vrf, fan coil, dimensionamento de tubos, eletrocalha, iluminância, concreto, sísmica, comparar scan, epsg, projeção, documentos, modelo, carbono, custo, energyplus, motor de renderização, abrir em, usd, glb, unreal, desfazer, complementos, pcf, símbolos, plantas, traço, canetas, faixa de opções, navegador de projeto, layout
from: 816df7f8
---

Estas são as mudanças do BimCraft 0.9, em comparação com a 0.8.1. Os dois grandes temas são uma ferramenta de parede de verdade e vistas que se comportam como as pessoas que vêm dos grandes programas BIM esperam. Em torno deles vêm a exportação Collada, assistentes que podem posicionar dispositivos elétricos, Scan para BIM, e trabalho de vento, sísmica e elementos finitos na guia {{ui:Análise}}.

## Novidades

### Paredes

- **Desenhe formas inteiras.** Em {{ui:Desenhar}}, abra {{ui:Formas}} (ou escolha uma forma na lista Forma da linha Parede) para um retângulo, um retângulo girado, um polígono de 3 a 64 lados, um arco por centro, um arco tangente, paredes sobre linhas escolhidas ou paredes ao redor de uma área fechada onde você clicar dentro. Um retângulo são quatro paredes com quatro cantos unidos e um passo de desfazer. Veja [Formas de parede, dividir, deslocar, esticar e travar](topic:wall-tools).
- **Defina antes de desenhar, altere depois.** A linha Parede tem {{ui:Deslocamento}} e {{ui:União}} (desmarque para desenhar paredes isoladas). Depois, use {{ui:Deslocamento}}, {{ui:Esticar por caixa}} e {{ui:Alinhar e travar}} nas paredes desenhadas. Uma parede movida ou esticada mantém suas portas, janelas e cotas. Cada receita é um passo de desfazer.
- **Corte paredes.** {{ui:Dividir}}, {{ui:Vão}}, {{ui:Extremidades livres}}, {{ui:Excluir segmento}} e {{ui:Reunir}} cortam uma parede com um clique ou onde outra parede a cruza. Um corte que passa por uma porta é recusado. Veja [Formas de parede, dividir, deslocar, esticar e travar](topic:wall-tools).
- **Trave paredes nas linhas de eixo.** Selecione uma parede ao longo de uma linha de eixo e marque {{ui:Travar na grade}} em {{ui:Propriedades}}. Com a ferramenta Eixos ativa, digite uma distância em {{ui:Mover em}} para uma linha escolhida, e as paredes travadas acompanham em um passo de desfazer.
- **Dê forma a uma parede.** Em {{ui:Propriedades}} de uma parede, você pode prender o topo ou a base dela a uma cobertura, piso ou forro, editar o contorno de elevação dela, inclinar a parede ou cortar uma abertura na parede sem porta nem janela. Veja [Forma da parede](topic:wall-shape).
- **O comprimento indica qual ponta permanece.** {{ui:Crescer a partir de}} define se o início, o fim ou o centro permanece fixo quando você altera o comprimento.
- **Comprimento e cota na planta concordam.** {{ui:Medir a partir de}} (linha de centro, face interna ou face externa) controla tanto o campo Comprimento quanto as cotas de parede da planta. Ele começa na linha de centro, então as cotas de parede da planta agora mostram a linha de centro onde antes mostravam a face externa. Altere-o na linha Parede, em {{ui:Propriedades}} ou em {{ui:Configurações}} › {{ui:BimCraft}} › {{ui:Paredes}}.

### Níveis, eixos e medição

- **Adicione um nível abaixo.** {{ui:Adicionar um nível abaixo}} no painel {{ui:Níveis}} adiciona um nível sob o mais baixo, com a mesma altura dele, em elevação negativa (Nível -1, Nível -2). Nada mais se move. {{ui:Adicionar níveis…}} agora aceita alturas negativas. Digitar LEVEL, LEVELS, STOREY ou STOREYS na linha de comando abre {{ui:Adicionar níveis…}}, e há um botão {{ui:Níveis}} nos menus e nas guias da faixa de opções. Veja [Terrenos, edifícios e níveis](topic:site-building-and-levels).
- **Cotas de eixos na planta.** Com a ferramenta {{ui:Eixos}} ativa, marque {{ui:Dimensões}} para desenhar o espaçamento entre linhas vizinhas e o tamanho total além dos marcadores, na planta de cada nível. Veja [Cotar um eixo](topic:grid-dimensions).
- **Medir na planta.** {{ui:Medir}} no grupo {{ui:Desenhar}} dá uma distância com as diferenças em X e Y entre dois cliques. Nada é salvo no modelo. Veja [Medir na planta](topic:measure-on-the-plan).
- **Altere vários pilares de uma vez.** Escolha pilares junto com uma parede e a seleção lista cada tipo com {{ui:Manter só estes}}. Um clique mantém os pilares e mostra os campos que eles têm em comum.
- **Uma unidade de exibição em todos os lugares.** Coordenadas, medições, cortes, escalas de folha, as cargas e os resultados da guia de análise de pórticos e o texto de Problemas seguem a unidade que você escolher. As exportações continuam em SI.

### Vistas, folhas e impressão

- **Estilo de trabalho.** {{ui:Configurações}} › {{ui:BimCraft}} › {{ui:Estilo de trabalho}} escolhe entre cada vista ter as próprias anotações e tabelas de canetas, ou compartilhá-las. Veja [Estilo de trabalho, vistas duplicadas, canetas no papel, Reportar como e modelos](topic:working-style).
- **Duplique uma vista.** Plantas, plantas de forro, chamadas, elevações e cortes podem ser duplicados como {{ui:Cópia própria}} ou {{ui:Vinculado}}; {{ui:Tornar cópia própria}} torna independente uma vista vinculada. Veja [Estilo de trabalho, vistas duplicadas, canetas no papel, Reportar como e modelos](topic:working-style).
- **Imprima como exibido, ou por meio de uma tabela de canetas.** As substituições de canetas são mantidas no IFC junto com a vista, e as folhas e os PDFs as desenham como a tela. O mesmo tópico cobre as tabelas de canetas.
- **Reportar como.** {{ui:Reportar como}} em {{ui:Propriedades}} grava no IFC uma laje desenhada como uma via, uma parede como um painel ou uma cobertura como uma rampa, com a classe que você escolher, e a conta assim nas tabelas, em Quantitativos, Localizar, Colorir por e Problemas.
- **Edite em elevações e cortes.** Desenhe e mova paredes, aberturas, níveis, cotas e notas diretamente em uma elevação ou em um corte, com os seus próprios tamanhos de folha e legendas. Veja [Editar em elevações e cortes](topic:edit-in-elevations).
- **Folhas.** Cada folha pode estar na horizontal ou na vertical. Uma caixa {{ui:Digite uma escala}} fica ao lado da lista de escalas em cada vista posicionada (1:64, 2:1, 1/4" = 1'). Você pode arrastar um desenho posicionado ou deslocá-lo com as setas do teclado, e {{ui:Formatos…}} › {{ui:Importar SVG…}} transforma o seu próprio projeto de folha em uma legenda, com campos digitados por folha.
- **Créditos da biblioteca em uma folha.** Um conjunto de desenhos com itens da biblioteca ganha uma tabela de créditos da biblioteca que você pode posicionar em qualquer folha. Veja [Créditos da biblioteca](topic:library-credits).

### Biblioteca: posicionamento

- **O posicionamento segue a vista.** Na vista Planta, a Biblioteca mostra {{ui:Posicionar na planta}}; em 3D, mostra {{ui:Posicionar no modelo}}; na vista Dividir, mostra um botão dividido com {{ui:Posicionar na planta}} como ação principal. As duas formas gravam o mesmo elemento IFC. Você também pode arrastar um cartão da Biblioteca para a planta ou para a vista 3D; com caneta ou dedo, pressione e segure e depois arraste. Veja [Posicionar a partir da Biblioteca](topic:place-from-library).

### Arquivos e assistentes

- **Collada e Google Earth.** {{ui:Collada}} na barra de ferramentas (menu {{ui:Arquivo}} nos estilos de menu) grava um .dae, ou um .kmz posicionado onde o modelo está no mapa. Veja [Exportar o modelo como Collada ou para o Google Earth](topic:collada).
- **Os assistentes podem posicionar dispositivos elétricos.** Seu assistente conectado tem novas ferramentas para adicionar, listar, alterar e excluir dispositivos e para configurar luminárias. Os assistentes permanecem desligados até você ativá-los em {{ui:Configurações}}. Veja [Deixe um assistente de IA trabalhar com o seu modelo](topic:assistants).
- **Scan para BIM (complemento).** Desligado por padrão e precisa do complemento Nuvens de pontos. Ele propõe pisos, paredes, portas e janelas a partir de um scan, com o desvio medido de cada um; aceitar é um passo de desfazer.

### Análise

- **Dados de vento e sísmica do local.** Na guia {{ui:Análise}}: cargas de vento pela ASCE 7-10 ou 7-16 para uma edificação rígida e fechada, com uma força em cada pavimento como casos de carga, e dados sísmicos do local com consulta ao USGS e o espectro de projeto.
- **Acompanhamento estrutural e elementos finitos.** Verificações de concreto pela ACI 318-19, forças laterais equivalentes pela ASCE 7-22, deslocamento entre pavimentos, lajes e paredes como placas, e combinações de carga da ASCE 7 e da EN 1990. Nosso próprio motor de elementos finitos faz cascas, tetraedros e análise modal. Veja [Verificar elementos de concreto e criar cargas sísmicas](topic:concrete-and-seismic) e [Análise de pórticos](topic:frame-analysis).

### Outros complementos e documentos

- **Iluminação interna (complemento).** Posiciona luminárias e grava o lux como números na planta de cada nível, com uma estimativa de ofuscamento e um relatório para impressão.
- **Painel de documentos.** {{ui:Arquivo}} › {{ui:Documentos…}} tem retirada e devolução com um arquivo de bloqueio, letras de revisão, estados de liberação e histórico.
- **Regiões e aço.** Pacotes sul-africanos de desenho e de regulamentação de edificações no complemento de Regulamentações, e 976 tamanhos de aço do Reino Unido na tabela de seções compartilhada.
- **Complementos gratuitos de impressão em resina.** Fatiador, suportes e base, teste de exposição, e os formatos de arquivo GOO, SL1, Chitubox e Anycubic, todos desligados por padrão.

## Em todos os aplicativos

- Ao passar o mouse sobre um botão ou controle, aparece uma dica de ferramenta do Bootstrap.
- A dica inicial em uma área de desenho vazia tem um botão de fechar; o BimCraft lembra que ela foi fechada.
- A faixa de guias de um painel que não cabe agora rola, em vez de ser cortada.
- Com um documento aberto, a guia do navegador mostra "<documento> - BimCraft | CadCraft".
- Em {{ui:Configurações}} › {{ui:Geral}} › {{ui:Layout}}, os layouts são uma lista suspensa de opções de duas linhas.
- A lista de idiomas em {{ui:Configurações}} oferece mais idiomas que a 0.8; os idiomas além do inglês são rascunhos de máquina.

## Corrigido

- **Mover funciona em escadas,** e em rampas, guarda-corpos, planos de cobertura, dispositivos isolados, imagens e caminhos.
- **Arrastar uma parede não distorce mais o ambiente.** O grip central move a parede em esquadro consigo mesma, e os cantos dela deslizam ao longo das paredes unidas. Segure {{key:Mod}} para o antigo movimento livre; {{ui:Esquadrar}} devolve os 90 graus.
- **Uma mudança de espessura ou de tipo em um nó unido** agora mantém o canto fechado em um L, em um T, em um nó de três paredes e ao lado de uma parede curva.
- **Mover ou copiar um grupo de ambientes** mantém unidas as paredes de fora do grupo que já estavam unidas.
- **Refazer mantém a identidade de uma cota de parede.**
- **Escolher uma parede com Desenhar desligado** não gera mais um erro em Propriedades.
- **Renderizar recorre ao WebGL** quando a GPU não consegue iniciar, em vez de parar.
- **A verificação do EnergyPlus pode ser ativada** novamente.
- **Documentos abre como caixa de diálogo centralizada.** {{key:Esc}}, o X ou um clique na página escurecida a fecha.
- **Os botões {{ui:Planta}}, {{ui:Dividir}} e {{ui:3D}} aparecem** assim que um modelo é aberto, e não só depois que Desenhar foi ativado uma vez.

## Limitações

- Nada foi impresso em hardware real. Os suportes de resina são novos e não foram comprovados.
- Os resultados de vento, sísmica, concreto e elementos finitos são auxílios de verificação para um engenheiro, conferidos contra fórmulas fechadas, não contra um edifício real.
- O Scan para BIM foi testado em um edifício sintético, não em um scan real, e encontra apenas ambientes retilíneos.
- O Collada não foi aberto aqui no Blender nem no Google Earth.
- A estimativa de iluminação é conferida contra nosso próprio traçado de referência, não contra outros programas de iluminação.
- Os números sul-africanos não foram verificados.
- Os estilos de união de parede (topo a topo, meia-esquadria, esquadro) e a prioridade de camadas ainda não estão implementados; os cantos são em meia-esquadria.
- Os idiomas além do inglês são rascunhos de máquina.

Todo o restante está em [O que ainda não está implementado](topic:not-built-yet). As alterações anteriores estão nas notas 0.8 e 0.8.1 mais abaixo nesta página.

## Anteriores: 0.8 e 0.8.1

Estas são as mudanças do BimCraft 0.8 (2026-11-01) e 0.8.1 (2026-11-02), em comparação com a 0.7. O BimCraft agora pode responder perguntas sobre um edifício e testá-lo, com pessoas, som, água, vento e abalos sísmicos, e desenhá-lo com mais ferramentas; a 0.8.1 é uma versão de correções.

### Novidades

**Teste o edifício**

- **Pessoas no edifício.** A seção {{ui:Pessoas no edifício}} do painel esquerdo simula uma evacuação ou a chegada de um dia normal pelos seus ambientes, portas e escadas. Você vê as filas onde o edifício se estreita, o trajeto mais longo até uma saída a partir de cada ambiente e quanto tempo a última pessoa leva. Marque {{ui:Fechada}} em uma porta para ver o que muda, e marque {{ui:Mostrar as pessoas na vista 3D}} para acompanhar os caminhantes. Os resultados vão para Problemas. É um modelo grosseiro de multidão para decisões de projeto, não um certificado de segurança contra incêndio. Veja [Fazer pessoas percorrerem o edifício](topic:people-in-the-building).
- **Acústica de ambientes, e ouça.** A seção {{ui:Acústica de ambientes}} dá o tempo de reverberação de cada ambiente por banda de oitava (Sabine e Eyring) a partir do tamanho dele e dos acabamentos escolhidos, e, com uma meta sua, informa quanta absorção seria necessária para atendê-la. {{ui:Reproduzir neste ambiente}} toca uma voz, uma palma, notas dedilhadas ou o seu próprio arquivo de som, por meio de uma resposta ao impulso calculada para o ambiente. Os valores de absorção são valores publicados típicos para você substituir. Veja [Acústica de ambientes](topic:room-acoustics).
- **Reprodução de enchente, vento e terremoto.** {{ui:Reprodução de risco}} mostra a água subindo pelos ambientes, a pressão do vento em cada pavimento e um terremoto sacudindo os pavimentos, em uma planta ou em uma elevação, com uma barra de tempo. Modelos simples, com as premissas no painel; não é uma verificação de norma. Veja [Reproduzir uma enchente, vento ou terremoto](topic:hazard-playback).
- **O que se desgasta em cinquenta anos.** {{ui:Visão do ciclo de vida}} lista as janelas, portas, acabamentos e a cobertura, cada um com uma vida útil, os anos em que são substituídos e, quando você digita um custo por unidade, o custo por ano e o valor presente dele. {{ui:Salvar o cronograma (CSV)}} grava a lista em arquivo. As vidas úteis são valores de planejamento. Veja [Veja o que se desgasta em cinquenta anos](topic:life-cycle-view).
- **Verificações de concreto e sísmica.** Os blocos {{ui:Elementos de concreto}} e {{ui:Cargas sísmicas}} da guia {{ui:Análise}} verificam vigas e pilares de concreto pela ACI 318-19 e calculam forças laterais equivalentes pela ASCE 7-22 em pisos rígidos, com deslocamento entre pavimentos. Para um engenheiro verificar. Veja [Verificar elementos de concreto e criar cargas sísmicas](topic:concrete-and-seismic).

**Verifique e relate**

- **Verificar com um IDS.** Carregue o arquivo `.ids` que um cliente lhe entregou e veja em Problemas cada elemento que não atende a ele, antes de entregar o IFC. Abra {{ui:Verificar com um IDS}} em {{ui:Verificações do modelo}}. Veja [Verificar um modelo com o IDS de um cliente](topic:check-against-ids).
- **Etiquetas e tabelas.** Defina suas próprias etiquetas, atribua-as a muitos elementos de uma vez e crie tabelas cujas colunas, filtros e grupos as leiam; as etiquetas são mantidas no IFC. Veja [Etiquetas e tabelas](topic:tags-and-schedules).
- **Documentos a partir do modelo.** {{ui:Documentos a partir do modelo}} preenche um modelo de especificação a partir do IFC aberto e o salva como PDF, documento do Word ou Markdown. Veja [Documentos a partir do modelo](topic:documents-from-the-model).
- **Compare um scan com o modelo.** Com uma nuvem de pontos aberta, {{ui:Comparar}} classifica cada elemento como construído, parcialmente construído, ausente ou não alcançado, e mostra o percentual construído. Veja [Comparar um scan com o modelo](topic:compare-scan-with-model).
- **Carbono e custo.** O painel Carbono soma o carbono incorporado a partir de uma tabela de fatores que você pode editar, e o painel Custo distribui os preços pelo cronograma 4D. Os fatores que acompanham o BimCraft são genéricos e estão marcados como não verificados. Veja [Carbono incorporado e custo](topic:embodied-carbon-and-5d-cost).
- **Qualquer projeção de mapa.** {{ui:Medir}} › {{ui:Sistema de coordenadas…}} aceita um número EPSG, uma zona UTM, um nome ou a sua própria definição de projeção. Veja [Georreferenciar com qualquer projeção](topic:georeference-any-projection).

**Desenhe e edite**

- **Mover, Alinhar e Distribuir.** Em {{ui:Build}}; {{key:Shift+M}} inicia Mover ({{key:M}} sozinho continua sendo Medir). Mover copia enquanto você avança com {{key:C}}, cada passo é um desfazer, e ele vai para uma sessão do Live TeamWork. Veja [Mover, copiar, alinhar e distribuir](topic:move-align-distribute).
- **Imagens sob a planta.** {{ui:Build}} › {{ui:Imagem}} posiciona um PNG, JPEG ou WebP sob a planta de um nível ou em um plano vertical. Defina a escala por dois pontos e mova, gire, esmaeça e bloqueie a imagem. Uma área copiada no MarkupCraft é colada na escala da folha dela. Veja [Colocar uma imagem sob a planta](topic:pictures-as-backgrounds).
- **Paredes a partir de um scan.** Com um scan aberto, paredes, portas e ambientes chegam como propostas que você mantém ou rejeita uma a uma, em um passo de desfazer. Só são encontradas paredes em duas direções perpendiculares. Veja [Transformar um scan em paredes](topic:scan-to-walls).
- **Decalque, canetas e escada esboçada.** {{ui:Decalque}} mostra outro nível tracejado sob a planta, {{ui:Penas}} dá às paredes, portas e janelas a própria espessura de linha em uma vista, e {{ui:Esboçar escada}} transforma uma linha de percurso em uma escada. Uma malha Wavefront OBJ pode ser aberta. Veja [Decalcar um nível, canetas e uma escada a partir de um esboço](topic:trace-pens-stairs-obj).
- **Edifícios em torno de um endereço.** Os edifícios e o lote que o Endereço para terreno do CivilCraft encontrou chegam como sugestões; você marca os que quer adicionar. Veja [Começar pelo terreno do CivilCraft](topic:site-from-civilcraft).
- **Desenhos de painéis.** {{ui:Build}} › {{ui:Desenhos de painéis}} enquadra paredes, pisos e coberturas em madeira ou aço leve, e salva uma lista de corte em CSV e desenhos de fabricação em PDF. São valores iniciais, não um projeto estrutural. Veja [Desenhos de painéis](topic:panel-drawings).
- **Paleta de símbolos e plantas.** {{ui:Build}} › {{ui:Paleta de símbolos}} encontra símbolos elétricos e hidráulicos pelo nome; a fonte {{ui:Plantas}} da {{ui:Biblioteca}} lista cerca de 400 plantas com símbolos de planta. Veja [Paleta de símbolos](topic:symbol-palette) e [Posicionar uma planta](topic:plant-list).

**Tubulações, dutos e energia**

- **Split, VRF e fan coils.** Unidades internas e externas com suas conexões, e conjuntos de linhas dimensionados a partir de uma tabela de valores típicos de exemplo que você pode alterar. Veja [Split, VRF e fan coils](topic:split-vrf-fan-coils).
- **Cálculos.** O painel Cálculos verifica os diâmetros de tubulações e dutos de suprimento com a perda de carga, passa cabos por eletrocalhas e eletrodutos e mostra o preenchimento deles, e calcula a iluminância a partir de arquivos IES ou EULUMDAT. Os padrões estão identificados; digite os valores da sua norma. Veja [Cálculos de tubulação, duto, cabo e iluminação](topic:mep-calculations).
- **Arquivos PCF.** **Exportar PCF**, na ferramenta Tubo, grava os trechos para programas de tensão em tubulações e de isométricos, e um arquivo PCF lido de volta desenha a tubulação dele. Veja [Arquivos de componentes de tubulação](topic:piping-pcf).
- **Solar fotovoltaico.** Posicione arranjos em coberturas ou no solo, calcule o sombreamento deles a partir do modelo, estime a energia anual, verifique as strings e gere os dados do diagrama unifilar. O módulo inicial e as perdas são genéricos. Veja [Solar fotovoltaico](topic:solar-pv).
- **Arquivo EnergyPlus.** O painel Verificar com EnergyPlus grava o modelo como um IDF para ser executado no seu próprio EnergyPlus. Executá-lo no navegador exige uma versão que você hospeda e cujo endereço você digita; o BimCraft não a inclui. Veja [Verificar aquecimento e refrigeração com o EnergyPlus](topic:check-with-energyplus).

**Imagens e arquivos**

- **Escolha o motor de renderização.** {{ui:Renderizar}} tem uma opção {{ui:Motor}}. Nossos dois motores integrados (Fast e Path tracer) continuam como padrão. **Abrir em** salva a cena como um arquivo USD ou glTF, e uma pasta de projeto Unreal como .zip; no CadCraft Studio, um complemento pode adicionar um motor. O plug-in do Unreal que abre o projeto ainda não foi lançado. Veja [Escolher o programa que desenha a imagem](topic:render-engines).
- **Desfazer no Studio.** Dentro do CadCraft Studio, o BimCraft informa ao Studio cada passo concluído, para que o Studio possa desfazer o seu último passo na janela que você usou por último. Veja [Desfazer entre aplicativos](topic:undo-across-apps).
- **Complementos no seu arquivo.** Um IFC registra quais complementos gravaram nele, e oferece os que você não tem ao abri-lo. Veja [Complementos no seu arquivo](topic:add-ons-in-your-file).

**Em todos os aplicativos**

- **Conecte sua IA.** Seu próprio assistente pode controlar o BimCraft pela conexão do Studio e responder perguntas sobre o modelo, como quais ambientes estão abaixo de determinada área. O Studio não tem IA própria. Veja [Deixe um assistente de IA trabalhar com o seu modelo](topic:assistants).
- **Linhas da barra de ferramentas.** {{ui:Configurações}} › {{ui:Geral}} › {{ui:Linhas da barra de ferramentas}} oferece Quebrar, 2 linhas ou 1 linha; Quebrar continua como padrão.
- **Dispositivos de entrada.** As configurações de trackpad, caneta, mouse 3D, controle e MIDI são compartilhadas por todos os aplicativos.
- **Problemas e Live.** O painel de avisos e as sessões Live funcionam como antes, com as novas verificações acima alimentando Problemas.
- **Idiomas.** 54 idiomas, dez deles novos. Os que não são inglês são rascunhos de máquina ainda não lidos por um falante nativo; os tópicos de ajuda estão, em sua maioria, em inglês.

### Corrigido na 0.8.1

- **Layout da faixa de opções + navegador de projeto.** Inserir › Importar CAD, Inserir › Imagem e Gerenciar › Unidades do projeto diziam "Ainda não implementado no BimCraft". Imagem agora abre a ferramenta Imagem, Importar CAD abre {{ui:Build}} › {{ui:A partir de um desenho…}} (DWG, DXF, PDF ou um scan), e Unidades do projeto abre {{ui:Configurações}} › {{ui:Global}} › {{ui:Unidades}}. Mover e Alinhar executam as ferramentas Mover e Alinhar, Nível abre {{ui:Adicionar níveis…}}, Fases abre a seção de fases de reforma e Materiais abre a biblioteca de materiais.
- **Seção de classes DWG.** Ela era lida com o tipo errado; corrigido no BimCraft e nos outros aplicativos que leem DWG.
- **Idioma em tempo de execução.** O Studio e as edições empacotadas agora podem trocar de idioma sem reiniciar. Isso ainda não foi testado em todas as plataformas; avise-nos se o idioma não mudar.
- **Script de pacote do Archicad.** `archicad_bundle.py`, um download separado, agora encontra o caminho do Archicad, observa a pasta por até 20 segundos e tenta de novo ao lado do pacote.

### Ainda não nesta versão

- **Auxílios de segurança e projeto.** Pessoas no edifício não tem limite de distância de percurso de uma norma (você digita o limite) e não foi conferido à mão em uma planta real. Os valores de acústica, ciclo de vida e risco são valores de planejamento, não uma verificação de norma.
- **Cenários climáticos futuros e EnergyPlus.** Não há cenários climáticos futuros integrados: você pode carregar um arquivo de cenário para a simulação de enchente. A execução do EnergyPlus no navegador não faz parte desta versão.
- **Layout da faixa de opções.** Levantamento de quantitativos de materiais continua "Não implementado", porque o BimCraft não tem lista de quantidades de materiais, e 54 outras ferramentas desabilitadas da faixa de opções ainda não têm uma ferramenta do BimCraft por trás delas.
- **Assinatura e plataformas.** Os instaladores do Windows e o .dmg do macOS não são assinados, então o SmartScreen mostra {{ui:Mais informações}} e depois {{ui:Executar mesmo assim}}, e no macOS é preciso clicar com o botão direito e depois em {{ui:Aberta}}. A versão para iPad e iPhone não foi recompilada para a 0.8.1.
- **Testes em página real.** Alguns testes mais antigos do navegador do BimCraft ainda falham na nossa página de teste, como antes da 0.8.1.

Todo o restante está em [O que ainda não está implementado](topic:not-built-yet). As alterações anteriores estão em [Novidades da versão 0.7](topic:whats-new-0-7).
