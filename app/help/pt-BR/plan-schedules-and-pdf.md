---
title: Tabelas, cotas e um PDF da planta
summary: Tabelas de portas, janelas, paredes e ambientes que mudam enquanto você desenha, cotas na planta, e a planta de um pavimento salva como PDF em uma escala padrão.
keywords: tabela, tabela de portas, tabela de janelas, tabela de paredes, tabela de ambientes, quantitativos, levantamento de quantitativos, área, csv, planilha, cota, cotas, imprimir, pdf, plotar, escala, 1/4", 1:50, folha
from: d97cd16e
---

## O que você vai fazer

Veja o que o edifício que você desenhou soma enquanto desenha: quantas portas e janelas de cada tamanho, quanta parede de cada tipo, a área de cada ambiente. Coloque cotas na planta e salve-a como PDF para imprimir ou enviar.

## Tabelas

Com {{ui:Desenhar}} ativo, **Tabelas** no painel da esquerda mostra uma tabela de cada vez:

- **Portas** e **Janelas**: cada uma pela sua marca (D1, D2 … e W1 …, dadas conforme você as posiciona), o tipo, a largura, a altura (e o peitoril), o pavimento e a parede em que está.
- **Paredes por tipo**: para cada tipo de parede, quantas paredes, a espessura, o comprimento total e a área lateral como **Área bruta**, **Deduções** e **Área líquida**, com um total.
- **Ambientes**: número, nome, pavimento, área e perímetro, com a área total.
- **Pisos**: cada piso com o seu nível, tipo e espessura, e a sua área bruta, deduções e área líquida.
- **Acabamentos**: cada camada de acabamento dos tipos de parede (por material e lado da parede) e os forros, com o número de faces e bruta, deduções e líquida.
- **Tipos de parede: dados de levantamento**: o que foi informado uma vez em cada tipo de parede (unidade, argamassa, taxa), com o número de paredes, o comprimento e a área líquida, e a taxa vezes a quantidade medida. Veja [Composições de paredes](topic:wall-assemblies).

- **Acabamentos por ambiente**, **Acabamentos por parede**, **Acabamentos por zona** e **Quantidades de acabamento**: o que cobre cada ambiente, com áreas, contagens de peças de revestimento incluindo cortes e volumes de base. Veja [Acabamentos de ambientes e tabelas de acabamento](topic:room-finishes).
- Suas próprias **configurações**: uma tabela que você agrupou, totalizou e salvou com um nome. Veja [Organizar, salvar e exportar uma tabela](topic:schedule-layouts).

As tabelas mudam a cada edição. Clique em uma linha, ou em um único número, para escolher os elementos de onde ele vem. **Baixar CSV** salva a tabela, para abrir em uma planilha; **Baixar Excel** e **Copiar para o Google Sheets** ficam abaixo dela. **Acabamentos de ambientes** e **Especificação** ([Escrever a especificação a partir do modelo](topic:specification)) abrem do mesmo lugar.

## Área e volume de cada camada

Escolha **Camadas: área e volume** na lista de Tabelas. Ela tem uma linha para cada camada de cada tipo de parede, piso, cobertura e forro em uso: o elemento, o tipo e o seu LOD, a camada (contada a partir do lado externo de uma parede, ou do topo de um piso, cobertura ou forro), o material e a função dela, a espessura, quantos elementos, a **área líquida** e o **volume**.

- A área é a área líquida dos elementos daquele tipo, medida exatamente como em Paredes por tipo, Pisos e Acabamentos, pelo método de medição do projeto. Uma cobertura é medida na inclinação; nenhum método de medição tem regra para coberturas.
- O volume é essa área vezes a espessura própria da camada.
- Um piso, cobertura ou forro sem tipo é uma linha: uma camada da sua própria espessura.
- Uma câmara de ar é listada com a sua área e deixada de fora do volume total. Uma membrana tem área e não tem volume.

Clique em uma linha para escolher os seus elementos. **Baixar CSV** salva a tabela.

## Como as áreas são medidas

Toda área são três números que somam: a bruta menos as deduções é a líquida. A regra está escrita acima de cada uma dessas tabelas, e é uma só regra: as tabelas, as quantidades salvas no arquivo IFC e o levantamento enviado ao TakeoffCraft usam todas a mesma.

- **Uma parede**: a bruta é uma face da parede, seu comprimento ao longo da linha central vezes sua altura (a face real, para uma parede com topo ou base formados). Cada porta, janela e outra abertura é deduzida, largura vezes altura, cada abertura uma vez.
- **Um piso ou um forro**: a bruta é a área dentro do seu contorno. Cada abertura e recorte dentro dele é deduzido uma vez.
- **Um acabamento de parede**: cada camada de acabamento do tipo de parede cobre uma face da parede, medida como a parede, com as mesmas aberturas deduzidas. Um acabamento é uma camada da parede: fica listado em Acabamentos e não é somado à área da parede, então uma parede com porta nunca é contada duas vezes.

Essa é a **regra padrão do CadCraft**: toda abertura é deduzida, qualquer que seja o seu tamanho; os comprimentos das paredes são ao longo da linha central; as reentrâncias das aberturas não são medidas. É o que todo projeto usa até você escolher outro método.

## Escolher um método de medição

Acima da tabela, **Método de medição** lista os métodos que vêm com o BimCraft, e **Carregar um arquivo de método** carrega o da sua empresa. A escolha é salva no arquivo IFC, como uma etapa de desfazer, e três coisas a seguem de uma vez: as tabelas, as quantidades líquidas salvas no arquivo e o levantamento enviado ao TakeoffCraft. A regra acima de cada tabela então começa com o método, a sua fonte, a data em que a fonte foi lida e as palavras **Não verificado por um orçamentista de quantitativos**.

Um método é um pequeno arquivo de fatos, não código de programa. Para cada quantidade ele diz:

- **a menor abertura deduzida**: por exemplo, uma abertura de 0.5 m² ou menos permanece na área da parede;
- **como as junções de paredes são medidas**: ao longo da linha central; ou, com uma parede que termina contra outra, medida até a face dessa parede; ou, com toda extremidade de parede que encontra outra parede, medida até a face mais próxima;
- **se as reentrâncias são medidas** para um acabamento (os retornos do acabamento nas aberturas), como área ou, quando rasas, como comprimento. A profundidade de uma reentrância é tomada como metade da espessura da parede;
- **o que diz sobre alvenaria**: como ela é medida, e quaisquer perdas ou margens de argamassa que ele declare.

Os métodos que vêm com o BimCraft:

| Método | Paredes: menor abertura deduzida | Acabamentos de parede | Forros | Alvenaria |
|---|---|---|---|---|
| Padrão CadCraft | toda abertura | toda abertura | todo recorte | sem margens |
| RICS NRM 2 (Reino Unido), 2ª edição 2021 | 0.5 m² ou menos permanece | 1 m² ou menos permanece | 1 m² ou menos permanece | por área; sem percentuais declarados |
| AAQS Standard Method for Africa 2015 | 0.5 m² ou menos permanece | 0.5 m² ou menos permanece | 0.5 m² ou menos permanece | por área; medido líquido, 0% de perda |
| IS 1200 (Índia), 1976, alvenaria | 0.1 m² ou menos permanece | padrão (veja abaixo) | padrão | por volume |
| BIA Technical Note 10 (Estados Unidos), 2009 | toda abertura | padrão | padrão | 5% de perda em unidades, 15% em argamassa |

Leia estes limites antes de confiar em um método:

- **Nenhum orçamentista de quantitativos verificou nenhum deles.** Cada um foi feito lendo a fonte citada e registrando os seus números com a cláusula de onde vêm. Se você é um orçamentista de quantitativos e pode conferir um, os criadores do aplicativo gostariam de saber.
- Quando uma regra não pôde ser lida na fonte, o método diz **não confirmada** para ela e a regra padrão do CadCraft é usada. Nenhum método que vem com o BimCraft tem uma regra confirmada para junções de paredes, reentrâncias ou pisos, então estes são medidos do jeito padrão em todos eles.
- A IS 1200 deduz aberturas em reboco em três faixas. Um arquivo de método ainda não comporta faixas, então os acabamentos de parede usam o padrão sob esse método, e a regra diz isso.
- O South African Standard System of Measuring Building Work **não** está entre eles: o seu texto não pôde ser lido. O método AAQS para a África diz que foi feito com base na edição de 1991 desse sistema, mas é um documento diferente.
- A BIA Technical Note 10 é uma nota de orçamento do setor, não um método padrão de medição.
- Uma abertura exatamente do menor tamanho segue as próprias palavras do método ("não excedendo", "menor que"). Tamanhos dentro de 2 partes em 10 000 dele contam como exatamente ele.
- Sob um método, a área lateral líquida de uma parede e a área líquida de um piso ou forro no arquivo seguem o método, e o conjunto de quantidades informa isso. As áreas brutas e os volumes no arquivo permanecem como foram desenhados.

**Notas sobre este método**, sob o seletor, dizem o que cada fonte deixa em aberto. **Abrir a fonte** leva ao documento.

### O método próprio do seu escritório

Um arquivo de método é JSON no formato `cadcraft-measurement-method`. Cada valor nele nomeia a cláusula de onde vem; um valor sem cláusula é recusado. O arquivo é verificado ao ser carregado, um campo errado é apontado pelo nome, e nada é usado de um arquivo que não passa na verificação. Depois de escolhido, o arquivo fica salvo dentro do projeto, para que o projeto abra igual em outro computador. O id dele é um nome simples de sua escolha (pode não ser o id de um método que vem com o aplicativo).

## Tijolos, blocos e argamassa

**Tipos de parede: dados de levantamento** conta as unidades e a argamassa de cada tipo de parede cuja unidade tem comprimento e altura (veja [Dar ao tipo os seus dados de levantamento](topic:wall-assemblies#give-a-type-its-takeoff-data)). Estas são as fórmulas, exatamente como calculadas:

- **Unidades por área de um pano** = 1 / ((comprimento da unidade + junta) × (altura da unidade + junta)). Um tijolo de 215 × 65 mm com junta de 10 mm: 1 / (225 × 75 mm) = 59.26 por m².
- **Unidades na largura de um pano** = (espessura do pano + junta) / (largura da unidade + junta), arredondado para um número inteiro, no mínimo 1. Um pano de 102.5 mm feito de tijolos de 102.5 mm é 1; uma parede de 215 mm dos mesmos tijolos é 2.
- **Unidades** = unidades por área × unidades na largura × a área líquida da face da parede, somadas sobre os panos de alvenaria do tipo.
- **Unidades a pedir** = unidades × (1 + perda % / 100), arredondado para cima até uma unidade inteira. A perda é a informada no tipo; sem nenhuma informada, a do método, se ele declarar uma; senão, 0%.
- **Argamassa** = área líquida × espessura do pano, menos o volume das unidades (unidades × comprimento × altura × largura), depois mais a porcentagem extra informada no tipo para rebaixos ou perfurações, depois mais a margem do método, se ele declarar uma. Precisa da largura da unidade.

Premissas: cada pano de alvenaria de um tipo é feito da única unidade do tipo; um pano mais espesso que uma largura de unidade é contado como essas larguras, cada uma como um pano deitado no sentido do comprimento, então tijolos cortados, fechamentos e formas especiais não são contados à parte; onde nenhuma camada está marcada como feita com a unidade, as camadas do núcleo são tomadas como panos, e a nota acima da tabela diz isso. **Quantidade** é a taxa vezes aquilo a que a taxa se refere, que agora também pode ser uma unidade a pedir, 1000 unidades a pedir ou um m³ de argamassa.

As marcas são a etiqueta IFC dos elementos: altere uma em **Propriedades** (Etiqueta) e a tabela acompanha. Para todo modelo IFC, desenhado ou não, [Somar quantidades, listar elementos e tabelar espaços](topic:quantity-totals) soma qualquer propriedade.

## Cotas

A planta mostra o comprimento de cada parede desenhada ao longo da sua face externa (uma parede interna: ao longo de uma face) e, para uma parede com portas ou janelas, uma cadeia dos cantos até cada abertura. {{ui:Dimensões}} na barra do modelo as oculta e as mostra de novo.

## Salvar a planta como PDF

1. Mostre o pavimento que você quer e defina as unidades no painel **Níveis**.
2. Clique em {{ui:Imprimir}} na barra do modelo.
3. O BimCraft salva "<arquivo> — <nível>.pdf": a planta em preto e branco, na maior escala padrão que cabe na página (1/4" = 1'-0", 1/8" = 1'-0" … em Letter, com pés e polegadas; 1:50, 1:100 … em A4, com milímetros), com as paredes preenchidas, portas, janelas, nomes e áreas dos ambientes, cotas, e uma faixa de título com o nível, o arquivo, a altura do corte, a data e a escala.

O PDF é desenhado como linhas e texto, então continua nítido em qualquer zoom e o seu texto pode ser pesquisado.

## Boas práticas

- As tabelas listam o que as ferramentas de desenho criaram. Portas e janelas de outro programa aparecem em Totais de quantidades.
- Para orçar a obra, envie as quantidades ao TakeoffCraft: veja [Quantidades para o TakeoffCraft](topic:takeoff). O download em CSV continua disponível para uma planilha.
