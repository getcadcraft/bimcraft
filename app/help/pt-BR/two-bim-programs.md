---
title: Trabalhar entre dois programas BIM
summary: Envie um modelo de um programa BIM para outro por meio do IFC com o BimCraft no meio, mantenha seus GlobalIds, conjuntos de propriedades e classificações, configure os dois programas para as mesmas propriedades e veja o que voltou.
keywords: ifc, ida e volta, interoperabilidade, globalid, guid, conjuntos de propriedades, psets, classificações, parâmetros compartilhados, mapeamento de propriedades, tradutor, bcf, coordenação, intercâmbio
from: 9f224176
---

## O que você vai fazer

Mova um modelo entre dois programas BIM, por exemplo do Revit para o Archicad e de volta, por meio do IFC, com o BimCraft no meio para verificar, complementar e informar o que sobreviveu. O formato de arquivo próprio de nenhum dos programas é lido: tudo circula como IFC.

## O que o BimCraft mantém

Quando você altera um modelo no BimCraft e clica em {{ui:Save as IFC}}, cada linha que você não alterou é gravada de volta exatamente como estava. Assim:

- **GlobalIds** permanecem os mesmos, e o outro programa pode associar cada elemento ao que enviou.
- **Conjuntos de propriedades** e seus valores permanecem, exceto os valores que você alterou.
- **Classificações** continuam anexadas aos seus elementos.

## Configure os dois programas para as mesmas propriedades

1. Abra o modelo no BimCraft (e o pacote do projeto, se você tiver um: seus grupos de propriedades são adicionados).
2. No painel esquerdo, abra {{ui:Between two BIM programs}}.
3. Em **Mapeamento de propriedades**, baixe o que cada programa precisa:
   - {{ui:Shared parameters}}: um arquivo de parâmetros compartilhados. No Revit, carregue-o com Gerenciar › Parâmetros compartilhados e adicione os parâmetros às categorias que precisam deles.
   - {{ui:IFC export property sets}}: um arquivo de conjuntos de propriedades definidos pelo usuário. Nas configurações de exportação IFC do Revit, escolha-o em conjuntos de propriedades definidos pelo usuário, para que o IFC exportado traga os mesmos nomes de conjunto e de propriedade.
   - {{ui:Mapping table (CSV)}}: cada propriedade com seu conjunto e nome IFC, seu tipo e os nomes correspondentes em cada programa. Os arquivos de mapeamento do Archicad não são um formato publicado, então configure o tradutor IFC e o gerenciador de propriedades dele a partir desta tabela, manualmente.
   - {{ui:Mapping file}}: o mapeamento inteiro como um só arquivo, para guardar junto com o projeto.

Conjuntos padrão (Pset_ e Qto_) ficam de fora do arquivo de parâmetros compartilhados: ambos os programas os gravam a partir de seus próprios dados.

## Envie o modelo e traga-o de volta

1. Exporte o IFC do primeiro programa com os GlobalIds mantidos (Revit: "Armazenar o GUID IFC em um parâmetro do elemento após a exportação" ativado).
2. Abra-o no BimCraft, verifique ({{ui:Model checks}}, {{ui:Clash check}}), adicione tópicos ({{ui:Issues}}, BCF), altere valores se precisar, e {{ui:Save as IFC}}.
3. Abra o IFC salvo no segundo programa, trabalhe nele, e exporte o IFC de lá com os GlobalIds mantidos (tradutor do Archicad: "Global Unique Identifiers: Keep existing").
4. De volta ao BimCraft, abra o modelo que saiu e adicione o que voltou ({{ui:Add a model}} em Modelos).
5. Em {{ui:Between two BIM programs}}, escolha **Enviado** e **Retornado**, e clique em {{ui:Make the report}}.

## Leia o relatório

- **Elementos**: quantos voltaram com o mesmo GlobalId, quantos faltam e quantos são novos. Elementos com um GlobalId novo aparecem como um ausente e um novo: o outro programa não o manteve.
- **Classe IFC alterada**: elementos que voltaram como outro tipo de elemento.
- **Valores de propriedade mantidos**: a parcela de valores que voltaram inalterados. A lista abaixo mostra as propriedades com mais valores alterados ou ausentes.
- **Classificações**: mantidas, alteradas (mesmo sistema, outro código) ou ausentes.

{{ui:Download the report (CSV)}} traz cada propriedade com suas contagens. Para ver quais elementos se moveram ou mudaram de forma, use {{ui:Compare versions}} nos mesmos dois modelos.

:::note
O BimCraft não executa nenhum dos dois programas. Quais configurações levam um valor adiante depende das configurações IFC de cada programa: o relatório mostra o que realmente voltou, então teste uma configuração, exporte novamente e compare.
:::

## Os tópicos viajam como BCF

Os tópicos que você abre no BimCraft são exportados como BCF ({{ui:Issues}}), que ambos os programas podem ler com suas ferramentas BCF, então uma pergunta sobre um elemento chega à pessoa que trabalha no outro programa com a sua vista.

Veja também [Abrir um pacote de projeto](topic:open-project-bundle), [Do arquivo de projeto para o BimCraft pelo IFC](topic:rvt-to-ifc) e [Comparar duas versões de um modelo](topic:compare-versions).
