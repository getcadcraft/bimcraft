---
title: Mapas, cotas e um PDF da planta
summary: Mapas de portas, janelas, paredes e divisões que mudam à medida que desenha, cotas na planta, e a planta de um piso guardada como PDF numa escala padrão.
keywords: mapa, mapa de portas, mapa de janelas, mapa de paredes, mapa de divisões, quantidades, medição, área, csv, folha de cálculo, cotas, cota, imprimir, pdf, plotar, escala, 1/4", 1:50, folha
from: d97cd16e
---

## O que vai fazer

Veja o que o edifício que desenhou soma, enquanto o desenha: quantas portas e janelas de cada medida, quanta parede de cada tipo, quão grande é cada divisão. Ponha cotas na planta e guarde-a como PDF para imprimir ou enviar.

## Mapas

Com {{ui:Desenhar}} ativo, **Mapas** no painel esquerdo mostra uma tabela de cada vez:

- **Portas** e **Janelas**: cada uma pela sua marca (D1, D2 … e W1 …, dadas à medida que as coloca), o seu tipo, largura, altura (e peitoril), piso e a parede em que está.
- **Paredes por tipo**: para cada tipo de parede, quantas paredes, a sua espessura, o seu comprimento total e a sua área lateral como **Área bruta**, **Deduções** e **Área líquida**, com um total.
- **Divisões**: número, nome, piso, área e perímetro, com a área total.
- **Pavimentos**: cada pavimento com o seu nível, tipo e espessura, e a sua área bruta, deduções e área líquida.
- **Acabamentos**: cada camada de acabamento dos tipos de parede (por material e lado da parede) e os tetos, com o número de faces e a área bruta, deduções e área líquida.
- **Tipos de parede: dados de medição**: o que foi introduzido uma vez em cada tipo de parede (unidade, argamassa, taxa), com o número de paredes, o seu comprimento e área líquida, e a taxa vezes a quantidade medida. Ver [Conjuntos de paredes](topic:wall-assemblies).
- **Acabamentos por divisão**, **Acabamentos por parede**, **Acabamentos por zona** e **Quantidades de acabamentos**: o que cobre cada divisão, com áreas, contagens de azulejos incluindo cortes e volumes de base. Ver [Acabamentos de divisões e mapas de acabamentos](topic:room-finishes).
- As suas próprias **configurações**: um mapa que agrupou, totalizou e guardou com um nome. Ver [Organizar, guardar e exportar um mapa](topic:schedule-layouts).

As tabelas mudam a cada edição. Clique numa linha, ou num único valor, para escolher os elementos de onde vieram. {{ui:Transferir CSV}} guarda a tabela, para abrir numa folha de cálculo; **Transferir Excel** e **Copiar para o Google Sheets** ficam por baixo dela. **Acabamentos de divisões** e **Especificação** ([Escrever a especificação a partir do modelo](topic:specification)) abrem a partir do mesmo sítio.

## Área e volume de cada camada

Escolha **Camadas: área e volume** na lista de Mapas. Tem uma linha para cada camada de cada tipo de parede, pavimento, cobertura e teto em uso: o elemento, o tipo e o seu LOD, a camada (contada a partir do lado exterior de uma parede, ou do topo de um pavimento, cobertura ou teto), o seu material e função, a sua espessura, quantos elementos, a **área líquida** e o **volume**.

- A área é a área líquida dos elementos desse tipo, medida exatamente como em Paredes por tipo, Pavimentos e Acabamentos, pelo método de medição do projeto. Uma cobertura é medida na inclinação; nenhum método de medição tem uma regra para coberturas.
- O volume é essa área vezes a espessura própria da camada.
- Um pavimento, cobertura ou teto sem tipo é uma linha: uma camada da sua própria espessura.
- Uma caixa de ar é listada com a sua área e deixada de fora do volume total. Uma membrana tem área e não tem volume.

Clique numa linha para escolher os seus elementos. {{ui:Transferir CSV}} guarda a tabela.

## Como se medem as áreas

Cada área são três números que somam: a bruta menos as deduções é a líquida. A regra está escrita acima de cada uma destas tabelas, e é uma só regra: os mapas, as quantidades guardadas no ficheiro IFC e a medição enviada ao TakeoffCraft usam todos a mesma.

- **Uma parede**: a bruta é uma face da parede, o seu comprimento ao longo do eixo vezes a sua altura (a face real, para uma parede com topo ou base moldada). Cada porta, janela e outra abertura é deduzida, largura vezes altura, cada abertura uma vez.
- **Um pavimento ou um teto**: a bruta é a área dentro do seu contorno. Cada abertura e recorte no seu interior é deduzido uma vez.
- **Um acabamento de parede**: cada camada de acabamento do tipo de parede cobre uma face da parede, medida como a parede, com as mesmas aberturas deduzidas. Um acabamento é uma camada da parede: é listado em Acabamentos e não é somado à área da parede, por isso uma parede com uma porta nunca é contada duas vezes.

Isto é o **padrão CadCraft**: cada abertura é deduzida, seja qual for o seu tamanho; os comprimentos de parede são ao longo do eixo; as ombreiras não são medidas. É o que todos os projetos usam até escolherem outro método.

## Escolher um método de medição

Acima do mapa, **Método de medição** lista os métodos que vêm com o BimCraft, e **Carregar um ficheiro de método** aceita o do seu gabinete. A escolha fica guardada no ficheiro IFC, como um passo de anular, e três coisas a seguem de imediato: os mapas, as quantidades líquidas guardadas no ficheiro e a medição enviada ao TakeoffCraft. A regra acima de cada tabela passa então a começar pelo método, pela sua fonte, pela data em que a fonte foi lida e pelas palavras **Não verificado por um orçamentista**.

Um método é um pequeno ficheiro de factos, não código de programa. Para cada quantidade indica:

- **a menor abertura deduzida**: por exemplo, uma abertura de 0.5 m² ou menos fica na área da parede;
- **como se medem as junções de paredes**: ao longo do eixo; ou com uma parede que termina contra outra, medida até à face dessa parede; ou com cada extremidade de parede que encontra outra, medida até à face próxima;
- **se as ombreiras são medidas** para um acabamento (as voltas do acabamento para dentro das aberturas), como área ou, quando pouco profundas, como comprimento. A profundidade de uma ombreira é tomada como metade da espessura da parede;
- **o que diz sobre alvenaria**: como é medida, e qualquer margem de desperdício ou de argamassa que declare.

Os métodos que vêm com o BimCraft:

| Método | Paredes: menor abertura deduzida | Acabamentos de parede | Tetos | Alvenaria |
|---|---|---|---|---|
| Padrão CadCraft | cada abertura | cada abertura | cada recorte | sem margens |
| RICS NRM 2 (Reino Unido), 2.ª edição 2021 | 0.5 m² ou menos fica | 1 m² ou menos fica | 1 m² ou menos fica | por área; sem percentagens indicadas |
| AAQS Standard Method for Africa 2015 | 0.5 m² ou menos fica | 0.5 m² ou menos fica | 0.5 m² ou menos fica | por área; medida líquida, 0% de desperdício |
| IS 1200 (Índia), 1976, alvenaria | 0.1 m² ou menos fica | predefinido (ver abaixo) | predefinido | por volume |
| BIA Technical Note 10 (Estados Unidos), 2009 | cada abertura | predefinido | predefinido | 5% de desperdício nas unidades, 15% na argamassa |

Leia estes limites antes de confiar num método:

- **Nenhum orçamentista verificou nenhum deles.** Cada um foi feito lendo a fonte indicada e registando os seus números com a cláusula de onde vêm. Se é orçamentista e pode verificar um, os criadores da aplicação gostariam de saber.
- Quando uma regra não pôde ser lida na fonte, o método diz **not confirmed** para ela, e usa-se o padrão CadCraft. Nenhum método que vem com o BimCraft tem uma regra confirmada para junções de paredes, ombreiras ou pavimentos, por isso estes são medidos da forma predefinida em todos eles.
- O IS 1200 deduz aberturas no reboco em três faixas. Um ficheiro de método ainda não pode conter faixas, por isso os acabamentos de parede usam o padrão nesse método, e a regra diz isso.
- O South African Standard System of Measuring Building Work **não** está entre eles: o seu texto não pôde ser lido. O método AAQS para África diz que foi feito sobre a edição de 1991 desse sistema, mas é um documento diferente.
- O BIA Technical Note 10 é uma nota de estimativa do setor, não um método padrão de medição.
- Uma abertura exatamente do menor tamanho segue as próprias palavras do método ("not exceeding", "less than"). Medidas dentro de 2 partes em 10 000 dele contam como exatamente ele.
- Sob um método, a área lateral líquida de uma parede e a área líquida de um pavimento ou teto do ficheiro seguem o método, e o conjunto de quantidades indica-o. As áreas brutas e os volumes do ficheiro mantêm-se como desenhados.

**Notas sobre este método**, sob o seletor, diz o que cada fonte deixa em aberto. **Abrir a fonte** vai para o documento.

### O método próprio do seu gabinete

Um ficheiro de método é JSON no formato `cadcraft-measurement-method`. Cada valor indica a cláusula de onde vem; um valor sem cláusula é recusado. O ficheiro é verificado ao ser carregado, um campo errado é indicado pelo nome, e nada é usado de um ficheiro que não passe. Depois de escolhido, o ficheiro fica guardado dentro do projeto, para que o projeto abra da mesma forma noutro computador. O seu id é um nome simples à sua escolha (pode não ser o id de um método que vem com a aplicação).

## Tijolos, blocos e argamassa

**Tipos de parede: dados de medição** conta as unidades e a argamassa de cada tipo de parede cuja unidade tem um comprimento e uma altura (ver [Dar a um tipo os seus dados de medição](topic:wall-assemblies#give-a-type-its-takeoff-data)). São estas as fórmulas, exatamente como calculadas:

- **Unidades por área de uma folha** = 1 / ((comprimento da unidade + junta) × (altura da unidade + junta)). Um tijolo de 215 × 65 mm com junta de 10 mm: 1 / (225 × 75 mm) = 59.26 por m².
- **Larguras de unidade através de uma folha** = (espessura da folha + junta) / (largura da unidade + junta), arredondado a um número inteiro, pelo menos 1. Uma folha de 102.5 mm de tijolos de 102.5 mm é 1; uma parede de 215 mm dos mesmos tijolos é 2.
- **Unidades** = unidades por área × larguras de unidade através × a área líquida da face da parede, somadas pelas folhas de alvenaria do tipo.
- **Unidades a encomendar** = unidades × (1 + % de desperdício / 100), arredondado por excesso a uma unidade inteira. O desperdício é o introduzido no tipo; sem nenhum introduzido, o do método, se o indicar; caso contrário, 0%.
- **Argamassa** = área líquida × espessura da folha, menos o volume das unidades (unidades × comprimento × altura × largura), depois mais a percentagem extra introduzida no tipo para rebaixos ou furos, depois mais a margem do método, se a indicar. Precisa da largura da unidade.

O que se assume: cada folha de alvenaria de um tipo é construída com a unidade única desse tipo; uma folha mais espessa do que uma largura de unidade é contada como essas larguras de unidade, cada uma como uma folha assente no sentido do comprimento, por isso as unidades cortadas, os fechos e as formas especiais não são contados à parte; onde nenhuma camada está marcada como construída com a unidade, as camadas centrais são tomadas como as folhas, e a nota acima da tabela diz isso. **Quantidade** é a taxa vezes aquilo a que a taxa se refere, que agora também pode ser uma unidade a encomendar, 1000 unidades a encomendar ou um m³ de argamassa.

As marcas são a etiqueta IFC dos elementos: altere uma em **Propriedades** (Etiqueta) e o mapa segue. Para qualquer modelo IFC, desenhado ou não, [Somar quantidades, listar elementos e tabelar espaços](topic:quantity-totals) soma qualquer propriedade.

## Cotas

A planta mostra o comprimento de cada parede desenhada ao longo da sua face exterior (uma parede interior: ao longo de uma face) e, para uma parede com portas ou janelas, uma cadeia dos cantos até cada abertura. {{ui:Cotas}} na barra do modelo oculta-as e volta a mostrá-las.

## Guardar a planta como PDF

1. Mostre o nível que quer e defina as unidades no painel **Níveis**.
2. Clique em {{ui:Imprimir}} na barra do modelo.
3. O BimCraft guarda "<ficheiro> — <nível>.pdf": a planta a preto e branco na maior escala padrão que cabe na página (1/4" = 1'-0", 1/8" = 1'-0" … em Letter, em pés e polegadas; 1:50, 1:100 … em A4, em milímetros), com as paredes preenchidas, portas, janelas, nomes e áreas das divisões, cotas e uma faixa de legenda com o nível, o ficheiro, a altura de corte, a data e a escala.

O PDF é desenhado como linhas e texto, por isso fica nítido em qualquer zoom e o seu texto pode ser pesquisado.

## Bom saber

- Os mapas listam o que as ferramentas de desenho criaram. Portas e janelas vindas de outro programa aparecem antes em Somas de quantidades.
- Para orçamentar a obra, entregue as quantidades ao TakeoffCraft: ver [Quantidades para o TakeoffCraft](topic:takeoff). O download em CSV continua disponível para uma folha de cálculo.
