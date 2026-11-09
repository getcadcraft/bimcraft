---
title: Novidades na 0.8 e 0.8.1
summary: O BimCraft adiciona pessoas circulando pelo edifício, acústica de ambientes que você pode ouvir, reprodução de inundação, vento e terremoto, uma visão do ciclo de vida de cinquenta anos, verificações com um IDS, etiquetas e tabelas, Mover, Alinhar e Distribuir, imagens sob a planta, paredes a partir de um escaneamento, desenhos de painéis, solar, sistemas split e VRF, dimensionamento de tubulações e cabos, verificações de concreto e sísmicas, qualquer projeção de mapa, a escolha do motor de renderização e desfazer no Studio; a 0.8.1 corrige as ferramentas desabilitadas do layout Ribbon.
keywords: novidades, o que há de novo, notas de versão, registro de alterações, alterações, 0.8, 0.8.1, versão, novos recursos, evacuação, pessoas, filas, acústica, reverberação, resposta ao impulso, inundação, vento, terremoto, risco, ciclo de vida, vida útil, ids, etiquetas, tabelas, mover, alinhar, distribuir, imagem, plano de fundo, escaneamento para paredes, terreno do CivilCraft, desenhos de painéis, estrutura, solar, fv, split, vrf, fan coil, dimensionamento de tubulação, eletrocalha, iluminância, concreto, sísmico, comparar escaneamento, epsg, projeção, documentos, modelo, carbono, custo, energyplus, motor de renderização, abrir em, usd, glb, unreal, desfazer, complementos, pcf, símbolos, plantas, decalque, penas, ribbon, navegador de projeto, layout
from: 87b03056
---

Estas são as mudanças do BimCraft 0.8 (2026-11-01) e 0.8.1 (2026-11-02), em comparação com a 0.7. O BimCraft agora consegue responder perguntas sobre um edifício e testá-lo, com pessoas, som, água, vento e terremotos, e desenhá-lo com mais ferramentas; a 0.8.1 é uma versão de correções.

## Novo

### Teste o edifício

- **Pessoas no edifício.** A seção {{ui:Pessoas no edifício}} do painel esquerdo leva uma evacuação ou a chegada normal de um dia pelos seus ambientes, portas e escadas. Você vê as filas onde o edifício se estreita, o caminho mais longo até uma saída a partir de cada ambiente e quanto tempo a última pessoa leva. Marque {{ui:Fechada}} em uma porta para ver o que muda, e marque {{ui:Mostrar as pessoas na vista 3D}} para acompanhar os pedestres. Os resultados vão para Problemas. É um modelo grosseiro de multidão para decisões de projeto, não um certificado de segurança contra incêndio. Veja [Caminhar pessoas pelo edifício](topic:people-in-the-building).
- **Acústica de ambientes, e ouça.** A seção {{ui:Acústica de ambientes}} dá o tempo de reverberação de cada ambiente por banda de oitava (Sabine e Eyring) a partir do seu tamanho e dos acabamentos que você escolhe e, com uma meta própria, diz quanta absorção atenderia a ela. {{ui:Reproduzir neste ambiente}} toca uma voz, uma palma, notas dedilhadas ou o seu próprio arquivo de som por meio de uma resposta ao impulso calculada para o ambiente. Os valores de absorção são valores típicos publicados para você substituir. Veja [Acústica de ambientes](topic:room-acoustics).
- **Reprodução de inundação, vento e terremoto.** {{ui:Reprodução de risco}} reproduz a água subindo pelos ambientes, a pressão do vento em cada pavimento e um terremoto sacudindo os pavimentos, em uma planta ou uma elevação com um controle deslizante de tempo. Modelos simples, com suas premissas no painel; não é uma verificação de norma. Veja [Reproduzir uma inundação, vento ou terremoto](topic:hazard-playback).
- **O que se desgasta em cinquenta anos.** {{ui:Visão do ciclo de vida}} lista as janelas, portas, acabamentos e o telhado, cada um com uma vida útil, os anos em que são substituídos e, quando você digita um custo por unidade, o custo por ano e o seu valor presente. {{ui:Salvar o cronograma (CSV)}} grava isso em arquivo. As vidas úteis são valores de planejamento. Veja [O que se desgasta em cinquenta anos](topic:life-cycle-view).
- **Verificações de concreto e sísmicas.** Os blocos {{ui:Elementos de concreto}} e {{ui:Cargas sísmicas}} da aba {{ui:Análise}} verificam vigas e pilares de concreto segundo a ACI 318-19 e calculam forças laterais equivalentes segundo a ASCE 7-22 em pisos rígidos, com deriva por pavimento. Para um engenheiro conferir. Veja [Verificar elementos de concreto e calcular cargas sísmicas](topic:concrete-and-seismic).

### Verifique e relate

- **Verificar com um IDS.** Carregue o arquivo `.ids` que um cliente lhe enviou e veja, em Problemas, cada elemento que não atende a ele, antes de entregar o IFC. Abra {{ui:Verificar com um IDS}} em {{ui:Verificações do modelo}}. Veja [Verificar um modelo com o IDS de um cliente](topic:check-against-ids).
- **Etiquetas e tabelas.** Defina suas próprias etiquetas, atribua-as a muitos elementos de uma vez e crie tabelas cujas colunas, filtros e grupos as leiam; as etiquetas são mantidas no IFC. Veja [Etiquetas e tabelas](topic:tags-and-schedules).
- **Documentos a partir do modelo.** {{ui:Documentos a partir do modelo}} preenche um modelo de especificação a partir do IFC aberto e o salva como PDF, documento do Word ou Markdown. Veja [Documentos a partir do modelo](topic:documents-from-the-model).
- **Comparar um escaneamento com o modelo.** Com uma nuvem de pontos aberta, {{ui:Comparar}} julga cada elemento como construído, parcialmente construído, faltando ou não alcançado, e mostra o percentual construído. Veja [Comparar um escaneamento com o modelo](topic:compare-scan-with-model).
- **Carbono e custo.** O painel de Carbono soma o carbono incorporado a partir de uma tabela de fatores que você pode editar, e o painel de Custo distribui os preços pelo cronograma 4D. Os fatores que vêm com o BimCraft são genéricos e marcados como não verificados. Veja [Carbono incorporado e custo](topic:embodied-carbon-and-5d-cost).
- **Qualquer projeção de mapa.** {{ui:Medir}} › {{ui:Sistema de coordenadas…}} aceita um número EPSG, uma zona UTM, um nome ou a sua própria definição de projeção. Veja [Georreferenciar com qualquer projeção](topic:georeference-any-projection).

### Desenhe e edite

- **Mover, Alinhar e Distribuir.** Em {{ui:Build}}; {{key:Shift+M}} inicia Mover (só {{key:M}} continua sendo Medir). Mover copia enquanto você avança com {{key:C}}, cada passo é um desfazer, e ele é propagado em uma sessão do Live TeamWork. Veja [Mover, copiar, alinhar e distribuir](topic:move-align-distribute).
- **Imagens sob a planta.** {{ui:Build}} › {{ui:Imagem}} coloca um PNG, JPEG ou WebP sob a planta de um pavimento ou em um plano vertical. Defina a escala por dois pontos e mova, gire, esmaeça e bloqueie a imagem. Uma área copiada no MarkupCraft é colada na escala da sua folha. Veja [Colocar uma imagem sob a planta](topic:pictures-as-backgrounds).
- **Paredes a partir de um escaneamento.** Com um escaneamento aberto, paredes, portas e ambientes chegam como propostas que você mantém ou rejeita uma a uma, em um único passo de desfazer. Apenas paredes em duas direções perpendiculares são encontradas. Veja [Transformar um escaneamento em paredes](topic:scan-to-walls).
- **Decalque, penas e escada por esboço.** {{ui:Decalque}} mostra outro pavimento tracejado sob a planta, {{ui:Penas}} dá às paredes, portas e janelas a sua própria espessura de linha em uma só vista, e {{ui:Esboçar escada}} transforma uma linha de caminhada em uma escada. Uma malha Wavefront OBJ é aberta. Veja [Decalque de um nível, penas e uma escada a partir de um esboço](topic:trace-pens-stairs-obj).
- **Edifícios em torno de um endereço.** Os edifícios e o lote que o Endereço para terreno do CivilCraft encontrou chegam como sugestões; você marca os que quer adicionar. Veja [Começar a partir do terreno do CivilCraft](topic:site-from-civilcraft).
- **Desenhos de painéis.** {{ui:Build}} › {{ui:Desenhos de painéis}} enquadra paredes, pisos e telhados em madeira ou em aço leve formado a frio e salva uma lista de corte em CSV e desenhos de fabricação em PDF. São valores iniciais, não um projeto estrutural. Veja [Desenhos de painéis](topic:panel-drawings).
- **Paleta de símbolos e plantas.** {{ui:Build}} › {{ui:Paleta de símbolos}} encontra símbolos elétricos e hidráulicos pelo nome; a fonte {{ui:Plantas}} da {{ui:Biblioteca}} lista cerca de 400 plantas com símbolos de planta. Veja [Paleta de símbolos](topic:symbol-palette) e [Colocar uma planta](topic:plant-list).

### Tubulações, dutos e energia

- **Split, VRF e fan coils.** Unidades internas e externas com suas conexões, e linhas dimensionadas a partir de uma tabela de valores típicos de exemplo que você pode alterar. Veja [Split, VRF e fan coils](topic:split-vrf-fan-coils).
- **Cálculos.** O painel de Cálculos verifica o dimensionamento de tubulações de suprimento e de dutos com a perda de carga, passa cabos por eletrocalhas e eletrodutos e mostra o seu preenchimento, e calcula a iluminância a partir de arquivos IES ou EULUMDAT. Os padrões são rotulados; digite os valores da sua norma. Veja [Cálculos de tubulação, duto, cabo e iluminação](topic:mep-calculations).
- **Arquivos PCF.** **Exportar PCF** na ferramenta de tubulação grava os trechos para programas de análise de tensões em tubulações e de isométricos, e um arquivo PCF lido de volta desenha a sua tubulação. Veja [Arquivos de componentes de tubulação](topic:piping-pcf).
- **Solar FV.** Instale arranjos em telhados ou no terreno, sombreie-os a partir do modelo, estime a energia anual, verifique as strings e gere dados de diagrama unifilar. O módulo inicial e as perdas são genéricos. Veja [Solar FV](topic:solar-pv).
- **Arquivo EnergyPlus.** O painel Verificar com EnergyPlus grava o modelo como um IDF para ser executado no seu próprio EnergyPlus. Executá-lo no navegador exige uma build que você hospeda e cujo endereço você digita; o BimCraft não a inclui. Veja [Verificar aquecimento e resfriamento com EnergyPlus](topic:check-with-energyplus).

### Imagens e arquivos

- **Escolha o motor de renderização.** {{ui:Renderizar}} tem uma opção {{ui:Motor}}. Nossos dois motores internos (Rápido e Traçador de caminho) continuam como padrão. **Abrir em** salva a cena como arquivo USD ou glTF, e uma pasta de projeto do Unreal como .zip; no CadCraft Studio, um complemento pode adicionar um motor. O plug-in do Unreal que abre o projeto ainda não foi lançado. Veja [Escolher qual programa desenha a imagem](topic:render-engines).
- **Desfazer no Studio.** Dentro do CadCraft Studio, o BimCraft informa ao Studio cada passo concluído, para que o Studio possa desfazer o seu último passo na janela que você usou por último. Veja [Desfazer entre aplicativos](topic:undo-across-apps).
- **Complementos no seu arquivo.** Um IFC registra quais complementos gravaram nele e oferece os que você não tem quando o abre. Veja [Complementos no seu arquivo](topic:add-ons-in-your-file).

### Em todos os aplicativos

- **Conecte sua IA.** Seu próprio assistente pode controlar o BimCraft pela conexão do Studio e responder perguntas sobre o modelo, como quais ambientes estão sob determinada área. O Studio não tem IA própria. Veja [Deixe um assistente de IA trabalhar com seu modelo](topic:assistants).
- **Linhas da barra de ferramentas.** {{ui:Configurações}} › {{ui:Geral}} › {{ui:Linhas da barra de ferramentas}} oferece Quebrar, 2 linhas ou 1 linha; Quebrar continua como padrão.
- **Dispositivos de entrada.** As configurações de trackpad, caneta, mouse 3D, controle e MIDI são compartilhadas por todos os aplicativos.
- **Problemas e Live.** O painel de avisos e as sessões Live funcionam como antes, com as novas verificações acima alimentando Problemas.
- **Idiomas.** 54 idiomas, dez deles novos. Os que não são o inglês são rascunhos de tradução automática ainda não revisados por um falante nativo; os tópicos de ajuda estão, em sua maioria, em inglês.

## Corrigido na 0.8.1

- **Layout faixa de opções (ribbon) + navegador de projeto.** Inserir › Importar CAD, Inserir › Imagem e Gerenciar › Unidades do projeto diziam "Ainda não implementado no BimCraft". Agora Imagem abre a ferramenta Imagem, Importar CAD abre {{ui:Build}} › {{ui:A partir de um desenho…}} (DWG, DXF, PDF ou um escaneamento), e Unidades do projeto abre {{ui:Configurações}} › {{ui:Global}} › {{ui:Unidades}}. Mover e Alinhar executam as ferramentas Mover e Alinhar, Nível abre {{ui:Adicionar níveis…}}, Fases abre a seção Fases de reforma e Materiais abre a biblioteca de materiais.
- **Seção de classes DWG.** Ela era lida como o tipo errado; corrigido no BimCraft e nos outros aplicativos que leem DWG.
- **Idioma em tempo de execução.** O Studio e as edições empacotadas agora podem trocar de idioma sem reiniciar. Isso ainda não foi testado em todas as plataformas; avise-nos se o idioma não mudar.
- **Script de pacote do Archicad.** `archicad_bundle.py`, um download separado, agora encontra o caminho do Archicad, observa a pasta por até 20 segundos e tenta novamente ao lado do pacote.

## Ainda não nesta versão

- **Auxílios de segurança e de projeto.** Pessoas no edifício não tem um limite de distância de percurso de uma norma de edificações (você digita o limite) e não foi verificado manualmente em uma planta real. As figuras de acústica, ciclo de vida e risco são valores de planejamento, não uma verificação de norma.
- **Climas futuros e EnergyPlus.** Não há climas futuros embutidos: você pode carregar um arquivo de cenário para a simulação de inundação. A execução do EnergyPlus no navegador não faz parte desta versão.
- **Layout Ribbon.** Levantamento de quantitativos de material permanece "Não implementado", porque o BimCraft não tem lista de quantidades de material, e outras 54 ferramentas desabilitadas da faixa de opções ainda não têm uma ferramenta do BimCraft por trás.
- **Assinatura e plataformas.** Os instaladores do Windows e o .dmg do macOS não são assinados, então o SmartScreen mostra {{ui:Mais informações}}, depois {{ui:Executar assim mesmo}}, e o macOS exige clicar com o botão direito e depois em {{ui:Abrir}}. A build para iPad e iPhone não foi refeita para a 0.8.1.
- **Testes em páginas reais.** Alguns testes mais antigos do navegador do BimCraft ainda falham na nossa página de testes, como falhavam antes da 0.8.1.

Todo o restante está em [O que ainda não foi implementado](topic:not-built-yet). Mudanças anteriores estão em [Novidades da 0.7](topic:whats-new-0-7).
