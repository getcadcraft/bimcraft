---
title: Especificações de tubulação, válvulas, dampers e famílias de fabricantes
summary: Crie suas próprias especificações de tubulação (tabelas de diâmetros com material, junta e rugosidade), guardadas no arquivo do modelo; coloque válvulas, um filtro e dampers nos trechos; e importe o modelo de uma válvula ou equipamento de um fabricante como família com portas de conexão.
keywords: especificação de tubulação, especificações de tubulação, classe de tubulação, tubulação personalizada, tabela de diâmetros, tubo, tubo higiênico, aço inoxidável, schedule, diâmetro externo, espessura de parede, diâmetro interno, rugosidade, classe de pressão, csv, json, importar, exportar, planilha, norma, bpe, din, en 10357, en 10255, válvula, válvulas, válvula borboleta, válvula de balanceamento, válvula de controle, filtro, damper, damper de volume, damper corta-fogo, oem, fabricante, marca, família, famílias, portas, conexão, step, obj, gltf, ifc, radiador, convector, aquecedor de painel, unidade de tratamento de ar, difusor, grelha
from: bc2f7c4e
---

## O que você vai fazer

Desenhe tubulação com a sua própria especificação, em vez das tabelas integradas de aço, cobre e plástico, coloque válvulas e dampers nos trechos, e posicione o modelo de um fabricante com portas às quais as tubulações se conectam.

:::note
Uma ferramenta de desenho e coordenação. Uma especificação de tubulação guarda os números que você digita ou importa: confira cada tabela com o padrão do seu projeto. As válvulas, filtros e dampers integrados são formas esquemáticas dimensionadas a partir do trecho, não o comprimento de um fabricante ou de uma norma de válvulas.
:::

## Criar uma especificação de tubulação

1. Ative {{ui:Desenhar}}, abra {{ui:Build}} e escolha {{ui:Especificações de tubulação}}. O mesmo botão está na barra da ferramenta Tubulação.
2. Escolha {{ui:Novo}}, ou comece a partir de um arquivo, de uma colagem ou de uma especificação inicial (abaixo).
3. Digite o nome dela, a norma ou referência que ela segue, o material e o tipo de extremidade ou de junta.
4. Digite uma linha por diâmetro: o nome do diâmetro, o diâmetro externo e a parede, em milímetros. Digite o diâmetro interno no lugar da parede, se for o que você tem: o outro é preenchido. DN, classe de pressão e peso são opcionais.
5. Opcional: a rugosidade em milímetros (o cálculo de perda de carga a usa), uma espessura de isolamento com que os novos trechos começam, o raio da curva como fator do diâmetro externo, se a especificação tem tês e reduções, e uma cor própria em 3D.
6. Marque os serviços cujos novos trechos devem começar nesta especificação, por exemplo água gelada.
7. Escolha {{ui:Salvar no modelo}}.

As especificações são salvas no arquivo do modelo. Quem abrir o arquivo as tem, e {{ui:Desfazer}} desfaz uma alteração.

Uma especificação, ou um dos seus diâmetros, não pode ser excluída enquanto houver um trecho desenhado nela. Alterar os números de um diâmetro redesenha os trechos nesse diâmetro.

## Reutilizar uma especificação em outro modelo

- {{ui:Exportar .json}} salva a especificação selecionada como um arquivo pequeno; {{ui:Exportar tudo}} salva todas as especificações do modelo. {{ui:Importar um arquivo}} as lê de volta.
- {{ui:Exportar .csv}} salva a tabela de diâmetros para uma planilha. {{ui:Importar um arquivo}} também lê um `.csv`.
- {{ui:Colar linhas}} recebe uma tabela copiada de uma planilha. A primeira linha nomeia as colunas: `Size`, `OD` e `Wall` (ou `ID`), e opcionalmente `DN`, `Pressure`, `Weight`. Uma linha por diâmetro. Os números são em milímetros, a menos que você escolha polegadas ou que uma célula escreva a sua unidade (`0.065 in`).

## Especificações iniciais

{{ui:Adicionar uma especificação inicial}} adiciona uma destas ao seu modelo como uma cópia que você pode editar:

| Inicial | Diâmetros |
|---|---|
| Tubo ASME BPE | 1/4" a 6" |
| Tubo EN 10357 série A (DIN 11850 linha 2) | DN10 a DN200 |
| Tubo de aço EN 10255, série média | DN15 a DN150 |
| Tubo de aço EN 10255, série pesada | DN15 a DN125 |

Estas tabelas são os diâmetros externos e as paredes que duas ou mais páginas publicadas de fornecedores apresentam para a norma e concordam entre si. Elas não foram tiradas das próprias normas. Diâmetros que só uma página informou ficaram de fora. Cada especificação inicial mostra suas páginas de origem e é marcada como "confira com o padrão do seu projeto". Não são informadas rugosidade, classe de pressão nem peso.

## Desenhar um trecho em uma especificação

1. Escolha {{ui:Tubulação}}. Um serviço marcado em uma especificação começa nela. Para qualquer outro trecho, escolha a especificação na lista de materiais: as especificações aparecem depois dos materiais integrados como "Spec: nome".
2. A lista de diâmetros passa a ter só os diâmetros dessa especificação. Escolha um e desenhe o trecho.

Para mover um trecho para uma especificação depois, selecione-o e altere o **Material** em Propriedades. Seu diâmetro passa a ser o diâmetro da especificação mais próximo pelo diâmetro externo.

No arquivo IFC, o tubo carrega o nome, a norma, o material, a junta e as dimensões da especificação (`CadCraft_PipeSpec` e `Pset_PipeSegmentTypeCommon`, no tubo e no seu tipo).

Os cálculos de dimensionamento e de perda de carga leem o diâmetro interno da especificação. Quando a especificação tem rugosidade, o atrito de um trecho é calculado com ela (Darcy-Weisbach); sem ela, usa-se o padrão habitual do cálculo.

## Válvulas, um filtro e dampers

1. Escolha {{ui:Válvula}} e o tipo na barra: gaveta, esfera, borboleta, globo, retenção, balanceamento ou controle, ou um filtro, para tubulações; um damper de volume ou um damper corta-fogo, para dutos.
2. Clique no trecho onde ela vai. O trecho é cortado em volta dela e os dois lados continuam conectados. Ela assume o diâmetro do trecho e se move com ele.

Propriedades do trecho lista cada uma com {{ui:Remover}}; o trecho volta a se fechar.

O cálculo de perda de carga considera a perda localizada somente para válvulas gaveta, esfera, globo e retenção. Os outros tipos, os dampers e as famílias de fabricantes não somam perda ali: considere-os na sua própria verificação. Eles são contados na tabela **Conexões e válvulas** e no levantamento de quantitativos, e gravados no IFC como válvulas, um filtro (o strainer) e dampers com duas portas conectadas.

## O modelo de um fabricante como família

1. Abra {{ui:Build}} e escolha {{ui:Famílias}}, depois {{ui:Importar um modelo}}. Arquivos IFC, STEP, OBJ, STL, glTF e de item da Biblioteca são lidos. Para OBJ e STL, defina antes as unidades do arquivo e o eixo para cima.
2. Na caixa de diálogo de portas, digite o nome, o fabricante e o número do modelo.
3. Escolha se ele vai **Em um trecho** (uma válvula, filtro ou damper) ou é **Equipamento**, e como ele é gravado.
4. Defina as portas. Cada uma tem um nome, tubulação ou duto, o serviço, o diâmetro em milímetros (o diâmetro externo de um tubo), o diâmetro nominal como a sua especificação o nomeia, o tipo de extremidade, sua posição e o sentido para o qual ela está voltada. {{ui:Em uma face}} coloca uma porta no centro de uma face da caixa do modelo. A pequena vista superior mostra as portas.
5. Escolha {{ui:Salvar a família no modelo}}.

Uma família que vai em um trecho precisa de exatamente duas portas voltadas em sentidos opostos, numa mesma linha. Escolha-a na lista da ferramenta Válvula e clique em um trecho: ela é posicionada no seu próprio comprimento e as tubulações se conectam às suas portas.

Uma família nunca é esticada. Se as portas dela não tiverem o diâmetro do trecho, você é avisado ao posicioná-la, e {{ui:Verificar conexões}} a lista.

Uma família de equipamento é posicionada com {{ui:Equipamentos}}, tipo **Família do fabricante**. Tubulações e dutos se encaixam nas suas portas.

{{ui:Baixar como item da Biblioteca}} salva uma família com suas portas como um arquivo que você pode enviar à Biblioteca.

## Radiadores e convectores

{{ui:Equipamentos}} também tem **Radiador** e **Convector / aquecedor de painel**: corpos genéricos com uma conexão de ida e outra de retorno para água de aquecimento. Veja [Equipamentos MEP com portas](topic:mep-equipment).
