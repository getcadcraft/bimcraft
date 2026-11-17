---
title: Campos do painel Propriedades
summary: O que significa cada campo do painel Propriedades e dos painéis Arquivo, Desenho e Pasta, e quais deles você pode alterar.
keywords: propriedades, campos, atributos, globalid, guid, copiar, copiar valor, copiar tudo, csv, área de transferência, número de série, etiqueta, tipo de objeto, linha, id express, conjunto de propriedades, pset, quantidades, esquema, painel de arquivo
from: fe55b435
---

## Um elemento IFC

A parte de cima do painel {{ui:Propriedades}} mostra o tipo do elemento sem o prefixo "Ifc" (por exemplo "Door", "WallStandardCase", "FurnishingElement") e o nome dele, ou "Unnamed" quando não tem nome.

| Campo | Significado | Editável |
|---|---|---|
| Nome | O nome do elemento, muitas vezes o nome da família e do tipo vindo do exportador | Sim |
| Tipo | O nome do tipo do elemento, quando ele tem um | Não |
| Tipo de objeto | Uma descrição livre de tipo que alguns exportadores preenchem | Sim |
| Etiqueta | A etiqueta ou marca do elemento; muitos exportadores escrevem aqui o ID do elemento | Sim |
| Descrição | Texto livre | Sim |
| GlobalId | O identificador IFC permanente de 22 caracteres do elemento, o mesmo em toda exportação do mesmo elemento | Não |
| Linha | O número da linha (`#1234`) do elemento neste arquivo IFC. Ele muda entre exportações | Não |

Abaixo vêm os **conjuntos de propriedades**, em ordem de nome:

- Cada conjunto abre e fecha quando você clica no nome dele. Os três primeiros começam abertos.
- Um conjunto marcado "(tipo)" pertence ao tipo do elemento: "Propriedade de tipo: uma alteração aqui vale para todos os elementos deste tipo."
- Conjuntos de quantidades (comprimentos, áreas, volumes, contagens, pesos) são somente leitura.
- Listas e valores enumerados são exibidos, somente leitura.
- Valores Sim/Não aparecem como **Sim** ou **Não**.
- Números são arredondados para quatro casas decimais na exibição. Comprimentos (uma propriedade de comprimento ou o comprimento de uma quantidade) aparecem nas {{ui:Unidades}} escolhidas na barra de ferramentas, com a unidade ao lado, e você pode digitar um novo valor nessa unidade ou com outra unidade (2.4 m, 8'-0"): o BimCraft grava de volta o número do próprio arquivo. Outros números aparecem como o arquivo os tem.
- Um valor vazio aparece como *vazio*. Um valor editado fica em negrito com uma barra azul ao lado.

## Copiar um valor

Todo valor em {{ui:Propriedades}} tem um pequeno botão de cópia ao lado: clique nele para colocar esse valor na área de transferência exatamente como exibido, por exemplo um GlobalId, um número de série ou qualquer valor de conjunto de propriedades. Copiar nunca inicia uma edição.

No topo, {{ui:Copiar tudo}} copia todos os valores do elemento como texto, conjunto por conjunto, e {{ui:Copiar como CSV}} copia-os como linhas de grupo, propriedade e valor para colar em uma planilha; valores vazios são mantidos para que cada campo tenha uma linha. Isso funciona da mesma forma para um elemento de outro modelo aberto; quando mais de um modelo está aberto, o CSV começa com uma coluna Modelo com o nome do arquivo.

## O painel Arquivo (IFC)

| Campo | Significado |
|---|---|
| Arquivo, Tamanho | O arquivo que você abriu |
| Esquema | A versão do IFC, como IFC2X3 ou IFC4 |
| Projeto | O nome do projeto e o nome longo |
| Fase | A fase do projeto, se o exportador a tiver escrito |
| Exportado de | O programa exportador, a partir do cabeçalho do arquivo |
| Autor | O autor no cabeçalho do arquivo |
| Exportado em | A data e a hora no cabeçalho do arquivo |
| Elementos | Quantos elementos com forma foram desenhados |
| Triângulos | Quantos triângulos formam as formas deles; uma medida do peso do modelo |

## O painel Arquivo (arquivos de projeto e de família)

| Campo | Significado |
|---|---|
| Tipo | Projeto, Modelo de projeto, Família ou Modelo de família |
| Salvo em | O lançamento que salvou o arquivo por último |
| Compilação | A compilação exata desse lançamento |
| Lido | Quanto do arquivo o BimCraft leu, em relação ao tamanho dele |

## O painel Desenho (DWG e DXF)

| Campo | Significado |
|---|---|
| Formato | O lançamento em que o desenho foi salvo, com o código de formato, como AC1032 |
| Unidades | As unidades de inserção do desenho, quando definidas |
| Entidades | Quantos objetos foram lidos |
| Camadas | Quantas camadas |
| Folhas | Quantas folhas (layouts), ou Nenhuma |
| Desenhos vinculados | Quantos dos seus desenhos vinculados foram encontrados e carregados |
| Equipamentos | Quantos itens de equipamento com etiqueta estão nas folhas |

## O painel Pasta

| Campo | Significado |
|---|---|
| Pasta, Arquivos, Tamanho | A pasta que você abriu, quantos arquivos ela contém e o tamanho total |
| Modelos | Arquivos de projeto e de família, cada um com as suas cópias de segurança contadas uma vez |
| Desenhos CAD, modelos IFC | Quantos de cada |
| Problemas | Quantas cópias de modelo estão incompletas ou ilegíveis, ou Nenhum |
