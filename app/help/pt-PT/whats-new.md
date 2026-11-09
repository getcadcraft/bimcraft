---
title: Novidades na 0.8 e na 0.8.1
summary: O BimCraft acrescenta pessoas a percorrer o edifício, acústica de compartimentos que pode ouvir, reprodução de cheias, vento e sismos, uma vista do ciclo de vida de cinquenta anos, verificações com um IDS, etiquetas e mapas, Mover, Alinhar e Distribuir, imagens sob a planta, paredes a partir de uma digitalização, desenhos de painéis, solar, sistemas split e VRF, dimensionamento de tubagens e cabos, verificações de betão e sísmicas, qualquer projeção cartográfica, escolha do motor de renderização e anulação no Studio; a 0.8.1 corrige as ferramentas a cinzento da disposição do friso.
keywords: novidades, o que há de novo, notas de lançamento, registo de alterações, alterações, 0.8, 0.8.1, versão, novas funcionalidades, evacuação, pessoas, filas, acústica, reverberação, resposta ao impulso, cheia, vento, sismo, perigo, ciclo de vida, vida útil, ids, etiquetas, mapas, mover, alinhar, distribuir, imagem, fundo, digitalização para paredes, local do civilcraft, desenhos de painéis, estruturação, solar, fv, split, vrf, ventiloconvetor, dimensionamento de tubagem, calha de cabos, iluminância, betão, sísmico, comparar digitalização, epsg, projeção, documentos, modelo, carbono, custo, energyplus, motor de renderização, abrir em, usd, glb, unreal, anular, suplementos, pcf, símbolos, plantas, decalcar, penas, friso, navegador do projeto, layout
from: 87b03056
---

Eis o que mudou no BimCraft 0.8 (2026-11-01) e 0.8.1 (2026-11-02), em comparação com a 0.7. O BimCraft já consegue responder a perguntas sobre um edifício e testá-lo, com pessoas, som, água, vento e sismos, e desenhá-lo com mais ferramentas; a 0.8.1 é uma versão de correção.

## Novidades

### Pôr o edifício à prova

- **Pessoas no edifício.** A secção {{ui:People in the building}} do painel da esquerda leva uma evacuação ou as chegadas de um dia normal pelos seus compartimentos, portas e escadas. Vê as filas onde o edifício se estreita, o percurso mais longo até uma saída a partir de cada compartimento e quanto tempo demora a última pessoa. Marque {{ui:Shut}} numa porta para ver o que muda, e marque {{ui:Show the people in the 3D view}} para ver as pessoas a caminhar. Os resultados vão para Problemas. Um modelo simplificado de multidões para decisões de projeto, não um certificado de segurança contra incêndios. Veja [Percorrer o edifício com pessoas](topic:people-in-the-building).
- **Acústica de compartimentos, que pode ouvir.** A secção {{ui:Room acoustics}} dá o tempo de reverberação de cada compartimento por banda de oitava (Sabine e Eyring) a partir da sua dimensão e dos acabamentos que escolhe, e, com um objetivo próprio, indica quanta absorção seria necessária para o cumprir. {{ui:Play it in this room}} reproduz uma voz, uma palma, notas dedilhadas ou o seu próprio ficheiro de som através de uma resposta ao impulso calculada para o compartimento. Os valores de absorção são valores típicos publicados, para substituir pelos seus. Veja [Acústica de compartimentos](topic:room-acoustics).
- **Reprodução de cheias, vento e sismos.** {{ui:Hazard playback}} reproduz a subida da água pelos compartimentos, a pressão do vento em cada piso e um sismo a abanar os pisos, numa planta ou num alçado, com um cursor temporal. Modelos simples, com os seus pressupostos no painel; não é uma verificação regulamentar. Veja [Reproduzir uma cheia, vento ou um sismo](topic:hazard-playback).
- **O que se desgasta em cinquenta anos.** {{ui:Life-cycle view}} lista as janelas, portas, acabamentos e cobertura, cada um com uma vida útil, os anos em que são substituídos e, quando escreve um custo por unidade, o custo por ano e o seu valor atual. {{ui:Save the schedule (CSV)}} exporta-o para ficheiro. As vidas úteis são valores de planeamento. Veja [O que se desgasta em cinquenta anos](topic:life-cycle-view).
- **Verificações de betão e sísmicas.** Os blocos {{ui:Concrete members}} e {{ui:Seismic loads}} do separador {{ui:Analysis}} verificam vigas e pilares de betão segundo a ACI 318-19 e calculam forças horizontais equivalentes segundo a ASCE 7-22 em pisos rígidos, com a deriva entre pisos. Para ser verificado por um engenheiro. Veja [Verificar elementos de betão e calcular ações sísmicas](topic:concrete-and-seismic).

### Verificar e reportar

- **Verificar com um IDS.** Carregue o ficheiro `.ids` que um cliente lhe enviou e veja em Problemas cada elemento que não cumpre, antes de entregar o IFC. Abra {{ui:Check against an IDS}} em {{ui:Model checks}}. Veja [Verificar um modelo contra o IDS de um cliente](topic:check-against-ids).
- **Etiquetas e mapas.** Defina as suas próprias etiquetas, atribua-as a muitos elementos de uma só vez e faça mapas cujas colunas, filtros e grupos as leiam; as etiquetas ficam guardadas no IFC. Veja [Etiquetas e mapas](topic:tags-and-schedules).
- **Documentos a partir do modelo.** {{ui:Documents from the model}} preenche um modelo de especificação a partir do IFC aberto e guarda-o como PDF, documento Word ou Markdown. Veja [Documentos a partir do modelo](topic:documents-from-the-model).
- **Comparar uma digitalização com o modelo.** Com uma nuvem de pontos aberta, {{ui:Compare}} classifica cada elemento como construído, parcialmente construído, em falta ou não alcançado, e mostra a percentagem construída. Veja [Comparar uma digitalização com o modelo](topic:compare-scan-with-model).
- **Carbono e custo.** O painel de Carbono soma o carbono incorporado a partir de uma tabela de fatores que pode editar, e o painel de Custo distribui os preços pelo planeamento 4D. Os fatores que vêm com o BimCraft são genéricos e estão marcados como por verificar. Veja [Carbono incorporado e custo](topic:embodied-carbon-and-5d-cost).
- **Qualquer projeção cartográfica.** {{ui:Measure}} › {{ui:Coordinate system…}} aceita um número EPSG, uma zona UTM, um nome ou a sua própria definição de projeção. Veja [Georreferenciar com qualquer projeção](topic:georeference-any-projection).

### Desenhar e editar

- **Mover, Alinhar e Distribuir.** Em {{ui:Build}}; {{key:Shift+M}} inicia Mover (apenas {{key:M}} continua a ser Medir). Mover copia à medida que avança com {{key:C}}, cada passo é uma só anulação e funciona numa sessão Live TeamWork. Veja [Mover, copiar, alinhar e distribuir](topic:move-align-distribute).
- **Imagens sob a planta.** {{ui:Build}} › {{ui:Picture}} coloca um PNG, JPEG ou WebP sob a planta de um piso ou num plano vertical. Defina a escala por dois pontos e mova, rode, esbata e bloqueie-a. Uma área copiada no MarkupCraft é colada à escala da sua folha. Veja [Colocar uma imagem sob a planta](topic:pictures-as-backgrounds).
- **Paredes a partir de uma digitalização.** Com uma digitalização aberta, paredes, portas e compartimentos chegam como propostas que mantém ou rejeita uma a uma, num só passo de anulação. Só são encontradas paredes em duas direções perpendiculares. Veja [Transformar uma digitalização em paredes](topic:scan-to-walls).
- **Decalque, penas e escada de esboço.** {{ui:Trace}} mostra outro piso a tracejado sob a planta, {{ui:Pens}} dá às paredes, portas e janelas a sua própria espessura de linha numa só vista, e {{ui:Sketch stair}} transforma uma linha de percurso numa escada. Uma malha Wavefront OBJ abre. Veja [Decalcar um piso, penas e uma escada a partir de um esboço](topic:trace-pens-stairs-obj).
- **Edifícios em torno de uma morada.** Os edifícios e o lote encontrados pelo Endereço para local do CivilCraft chegam como sugestões; marque os que quer acrescentar. Veja [Começar a partir do local do CivilCraft](topic:site-from-civilcraft).
- **Desenhos de painéis.** {{ui:Build}} › {{ui:Panel drawings}} enquadra paredes, pisos e coberturas em madeira ou aço leve enformado e guarda uma lista de corte em CSV e desenhos de fabrico em PDF. Valores de partida, não um projeto estrutural. Veja [Desenhos de painéis](topic:panel-drawings).
- **Paleta de símbolos e plantas.** {{ui:Build}} › {{ui:Symbol palette}} encontra símbolos elétricos e de canalização pelo nome; a fonte {{ui:Plants}} da {{ui:Library}} lista cerca de 400 plantas com símbolos de planta. Veja [Paleta de símbolos](topic:symbol-palette) e [Colocar uma planta](topic:plant-list).

### Tubagens, condutas e energia

- **Split, VRF e ventiloconvetores.** Unidades interiores e exteriores com as suas ligações, e conjuntos de tubagem dimensionados a partir de uma tabela de valores típicos de exemplo que pode alterar. Veja [Split, VRF e ventiloconvetores](topic:split-vrf-fan-coils).
- **Cálculos.** O painel Cálculos verifica as dimensões das tubagens e condutas de alimentação com a perda de pressão, encaminha cabos por calhas e tubos de proteção e mostra o seu enchimento, e calcula a iluminância a partir de ficheiros IES ou EULUMDAT. Os valores predefinidos estão identificados; escreva os valores do seu regulamento. Veja [Cálculos de tubagens, condutas, cabos e luz](topic:mep-calculations).
- **Ficheiros PCF.** A opção **Exportar PCF** da ferramenta Tubagem escreve os troços para programas de análise de tensões em tubagens e de isométricos, e um ficheiro PCF lido de volta desenha a sua tubagem. Veja [Ficheiros de componentes de tubagem](topic:piping-pcf).
- **Solar fotovoltaico.** Coloque matrizes de painéis em coberturas ou no solo, sombreie-as a partir do modelo, estime a energia anual, verifique as cadeias e gere dados de esquema unifilar. O módulo de partida e as perdas são genéricos. Veja [Solar fotovoltaico](topic:solar-pv).
- **Ficheiro do EnergyPlus.** O painel Verificar com EnergyPlus escreve o modelo como IDF para executar no seu próprio EnergyPlus. Executá-lo no navegador exige uma compilação alojada pelo próprio e cujo endereço indica; o BimCraft não a inclui. Veja [Verificar aquecimento e arrefecimento com o EnergyPlus](topic:check-with-energyplus).

### Imagens e ficheiros

- **Escolha o motor de renderização.** {{ui:Render}} tem uma escolha de {{ui:Engine}}. Os nossos dois motores incorporados (Rápido e Traçador de caminhos) continuam a ser o predefinido. **Abrir em** guarda a cena como ficheiro USD ou glTF, e uma pasta de projeto do Unreal como .zip; no CadCraft Studio, um suplemento pode acrescentar um motor. O plug-in do Unreal que abre o projeto ainda não foi lançado. Veja [Escolher o programa que desenha a imagem](topic:render-engines).
- **Anular no Studio.** Dentro do CadCraft Studio, o BimCraft informa o Studio de cada passo concluído, para que o Studio possa anular o seu último passo na janela que usou por último. Veja [Anular entre aplicações](topic:undo-across-apps).
- **Suplementos no seu ficheiro.** Um IFC regista os suplementos que nele escreveram e oferece os que não tem quando o abre. Veja [Suplementos no seu ficheiro](topic:add-ons-in-your-file).

### Em todas as aplicações

- **Ligue a sua IA.** O seu próprio assistente pode controlar o BimCraft através da ligação do Studio e responder a perguntas sobre o modelo, como quais os compartimentos que estão sob uma determinada área. O Studio não tem IA própria. Veja [Deixe um assistente de IA trabalhar com o seu modelo](topic:assistants).
- **Linhas da barra de ferramentas.** {{ui:Settings}} › {{ui:General}} › {{ui:Toolbar rows}} oferece Ajustar, 2 linhas ou 1 linha; Ajustar continua a ser o predefinido.
- **Dispositivos de entrada.** As definições de trackpad, caneta, rato 3D, controlador e MIDI são partilhadas por todas as aplicações.
- **Problemas e Live.** O painel de avisos e as sessões Live funcionam como antes, com as novas verificações acima a alimentar os Problemas.
- **Idiomas.** 54 idiomas, dez deles novos. Os que não são inglês são traduções automáticas ainda não revistas por um falante nativo; os tópicos de ajuda estão sobretudo em inglês.

## Corrigido na 0.8.1

- **Disposição do friso e do navegador do projeto.** Inserir › Importar CAD, Inserir › Imagem e Gerir › Unidades do projeto diziam "Ainda não implementado no BimCraft". Imagem passa agora a abrir a ferramenta Imagem, Importar CAD abre {{ui:Build}} › {{ui:From a drawing…}} (DWG, DXF, PDF ou uma digitalização), e Unidades do projeto abre {{ui:Settings}} › {{ui:Global}} › {{ui:Units}}. Mover e Alinhar executam as ferramentas Mover e Alinhar, Nível abre {{ui:Add levels…}}, Fases abre a secção Fases de renovação e Materiais abre a biblioteca de materiais.
- **Secção de classes DWG.** Era lida como um tipo errado; corrigido no BimCraft e nas outras aplicações que leem DWG.
- **Idioma em tempo de execução.** O Studio e as edições empacotadas podem agora mudar de idioma sem reiniciar. Isto ainda não foi testado em todas as plataformas; diga-nos se o idioma não mudar.
- **Script do pacote Archicad.** `archicad_bundle.py`, um transferível à parte, encontra agora o caminho do Archicad, vigia a pasta durante até 20 segundos e volta a tentar junto ao pacote.

## Ainda não nesta versão

- **Apoios à segurança e ao projeto.** A função Pessoas no edifício não tem limite de distância de percurso de um regulamento de construção (escreve o limite) e ainda não foi verificada manualmente numa planta real. As figuras de acústica, ciclo de vida e perigos são valores de planeamento, não uma verificação regulamentar.
- **Cenários climáticos futuros e EnergyPlus.** Não há cenários climáticos futuros incorporados: pode carregar um ficheiro de cenário para a simulação de cheias. A simulação do EnergyPlus no navegador não faz parte desta versão.
- **Disposição do friso.** Medição de materiais continua "Ainda não implementado", porque o BimCraft não tem lista de quantidades de materiais, e outras 54 ferramentas do friso a cinzento ainda não têm uma ferramenta do BimCraft por trás.
- **Assinatura e plataformas.** Os instaladores do Windows e o .dmg do macOS não estão assinados, por isso o SmartScreen mostra {{ui:More info}}, depois {{ui:Run anyway}}, e o macOS exige que clique com o botão direito e depois em {{ui:Open}}. A compilação para iPad e iPhone não foi refeita para a 0.8.1.
- **Testes em páginas reais.** Alguns testes mais antigos do navegador do BimCraft continuam a falhar na nossa página de testes, como acontecia antes da 0.8.1.

Tudo o resto está em [O que ainda não está implementado](topic:not-built-yet). As alterações anteriores estão em [Novidades na 0.7](topic:whats-new-0-7).
