---
title: Campos do painel Propriedades
summary: O que significa cada campo do painel Propriedades e dos painéis Ficheiro, Desenho e Pasta, e quais pode alterar.
keywords: propriedades, campos, atributos, globalid, guid, copiar, copiar valor, copiar tudo, csv, área de transferência, número de série, etiqueta, tipo de objeto, linha, id EXPRESS, conjunto de propriedades, pset, quantidades, esquema, painel de ficheiro
from: fe55b435
---

## Um elemento IFC

A parte superior do painel {{ui:Propriedades}} mostra o tipo do elemento sem o prefixo "Ifc" (por exemplo "Door", "WallStandardCase", "FurnishingElement") e o seu nome, ou "Sem nome".

| Campo | Significado | Editável |
|---|---|---|
| Nome | O nome do elemento, muitas vezes o nome da família e do tipo dado pelo exportador | Sim |
| Tipo | O nome do tipo do elemento, quando tem um | Não |
| Tipo de objeto | Uma descrição de tipo em texto livre que alguns exportadores preenchem | Sim |
| Etiqueta | A etiqueta ou marca do elemento; muitos exportadores escrevem aqui o ID do elemento | Sim |
| Descrição | Texto livre | Sim |
| GlobalId | O identificador IFC permanente de 22 caracteres do elemento, o mesmo em todas as exportações do mesmo elemento | Não |
| Linha | O número de linha do elemento (`#1234`) neste ficheiro IFC. Muda entre exportações | Não |

Abaixo surgem os **conjuntos de propriedades**, ordenados por nome:

- Cada conjunto abre e fecha ao clicar no nome. Os três primeiros estão abertos.
- Um conjunto marcado "(tipo)" pertence ao tipo do elemento: "Propriedade de tipo: uma alteração aqui aplica-se a todos os elementos deste tipo."
- Os conjuntos de quantidades (comprimentos, áreas, volumes, contagens, pesos) são só de leitura.
- As listas e os valores enumerados são mostrados, só de leitura.
- Os valores Sim/Não aparecem como **Sim** ou **Não**.
- Os números são arredondados a quatro casas decimais para apresentação. Os comprimentos (uma propriedade de comprimento ou o comprimento de uma quantidade) aparecem nas {{ui:Unidades}} escolhidas na barra de ferramentas, com a unidade ao lado, e pode escrever um novo valor nessa unidade ou com outra marca de unidade (2.4 m, 8'-0"): o BimCraft escreve de volta o número do próprio ficheiro. Os outros números aparecem como o ficheiro os tem.
- Um valor vazio aparece como *vazio*. Um valor editado fica a negrito, com uma barra azul ao lado.

## Copiar um valor

Cada valor em {{ui:Propriedades}} tem um pequeno botão de cópia ao lado: clique nele para pôr esse valor na área de transferência exatamente como é mostrado, por exemplo um GlobalId, um número de série ou qualquer valor de um conjunto de propriedades. Copiar nunca inicia uma edição.

No topo, {{ui:Copiar tudo}} copia todos os valores do elemento como texto, conjunto a conjunto, e {{ui:Copiar como CSV}} copia-os como linhas de grupo, propriedade e valor para colar numa folha de cálculo; os valores vazios são mantidos para que cada campo tenha uma linha. Isto funciona da mesma forma para um elemento de outro modelo aberto; quando há mais de um modelo aberto, o CSV começa com uma coluna Modelo com o nome do seu ficheiro.

## O painel Ficheiro (IFC)

| Campo | Significado |
|---|---|
| Ficheiro, Tamanho | O ficheiro que abriu |
| Esquema | A versão IFC, como IFC2X3 ou IFC4 |
| Projeto | O nome do projeto e o nome longo |
| Fase | A fase do projeto, se o exportador a tiver escrito |
| Exportado de | O programa exportador, a partir do cabeçalho do ficheiro |
| Autor | O autor, no cabeçalho do ficheiro |
| Exportado | A data e a hora, no cabeçalho do ficheiro |
| Elementos | Quantos elementos com forma foram desenhados |
| Triângulos | Quantos triângulos formam as suas formas; uma medida do peso do modelo |

## O painel Ficheiro (projeto e ficheiros de família)

| Campo | Significado |
|---|---|
| Tipo | Projeto, Modelo de projeto, Família ou Modelo de família |
| Guardado em | A versão que guardou o ficheiro pela última vez |
| Compilação | A compilação exata dessa versão |
| Lido | Quanto do ficheiro o BimCraft leu, em relação ao seu tamanho |

## O painel Desenho (DWG e DXF)

| Campo | Significado |
|---|---|
| Formato | A versão em que o desenho foi guardado, com o seu código de formato, como AC1032 |
| Unidades | As unidades de inserção do desenho, quando definidas |
| Entidades | Quantos objetos foram lidos |
| Camadas | Quantas camadas |
| Folhas | Quantas folhas (layouts), ou Nenhuma |
| Desenhos referenciados | Quantos dos seus desenhos referenciados foram encontrados e carregados |
| Equipamento | Quantos itens de equipamento com etiqueta estão nas folhas |

## O painel Pasta

| Campo | Significado |
|---|---|
| Pasta, Ficheiros, Tamanho | A pasta que abriu, quantos ficheiros contém e o seu tamanho total |
| Modelos | Ficheiros de projeto e de família, cada um com as suas cópias de segurança contadas uma vez |
| Desenhos CAD, Modelos IFC | Quantos de cada |
| Problemas | Quantas cópias de modelos estão incompletas ou ilegíveis, ou Nenhum |
