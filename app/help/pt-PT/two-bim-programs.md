---
title: Trabalhar entre dois programas BIM
summary: Enviar um modelo de um programa BIM para outro através de IFC, com o BimCraft no meio, manter os seus GlobalIds, conjuntos de propriedades e classificações, configurar os dois programas para as mesmas propriedades e ver o que voltou.
keywords: ifc, ida e volta, interoperabilidade, globalid, guid, conjuntos de propriedades, psets, classificações, parâmetros partilhados, mapeamento de propriedades, tradutor, bcf, coordenação, troca
from: 9f224176
---

## O que vai fazer

Mover um modelo entre dois programas BIM, por exemplo do Revit para o Archicad e de volta, através de IFC, com o BimCraft ao meio para o verificar, lhe acrescentar conteúdo e relatar o que sobreviveu. Nenhum dos formatos de ficheiro próprios dos programas é lido: tudo viaja como IFC.

## O que o BimCraft mantém

Quando altera um modelo no BimCraft e clica em {{ui:Save as IFC}}, cada linha que não alterou é escrita de volta exatamente como estava. Assim:

- Os **GlobalIds** mantêm-se, e o outro programa pode associar cada elemento ao que enviou.
- Os **conjuntos de propriedades** e os seus valores mantêm-se, exceto os valores que alterou.
- As **classificações** continuam ligadas aos seus elementos.

## Configurar os dois programas para as mesmas propriedades

1. Abrir o modelo no BimCraft (e o pacote de projeto, se tiver um: os seus grupos de propriedades são acrescentados).
2. No painel da esquerda, abrir {{ui:Between two BIM programs}}.
3. Em **Mapeamento de propriedades**, transferir o que cada programa precisa:
   - {{ui:Shared parameters}}: um ficheiro de parâmetros partilhados. No Revit, carregá-lo com Manage › Shared Parameters e acrescentar os parâmetros às categorias que os precisam.
   - {{ui:IFC export property sets}}: um ficheiro de conjuntos de propriedades definidos pelo utilizador. Nas definições de exportação IFC do Revit, escolhê-lo em conjuntos de propriedades definidos pelo utilizador, para que o IFC exportado tenha os mesmos nomes de conjuntos e propriedades.
   - {{ui:Mapping table (CSV)}}: cada propriedade com o seu conjunto e nome IFC, o seu tipo e os nomes correspondentes em cada programa. Os ficheiros de mapeamento do Archicad não são um formato publicado, por isso configurar o seu tradutor IFC e o gestor de propriedades a partir desta tabela, manualmente.
   - {{ui:Mapping file}}: o mapeamento completo num só ficheiro, para guardar com o projeto.

Os conjuntos padrão (Pset_ e Qto_) ficam fora do ficheiro de parâmetros partilhados: ambos os programas os escrevem a partir dos seus próprios dados.

## Enviar o modelo e trazê-lo de volta

1. Exportar IFC do primeiro programa com os GlobalIds mantidos (Revit: "Store the IFC GUID in an element parameter after export" ativado).
2. Abrir o IFC no BimCraft, verificá-lo ({{ui:Model checks}}, {{ui:Clash check}}), acrescentar questões ({{ui:Issues}}, BCF), alterar valores se necessário, e {{ui:Save as IFC}}.
3. Abrir o IFC guardado no segundo programa, trabalhar nele, e exportar IFC a partir daí com os GlobalIds mantidos (tradutor do Archicad: "Global Unique Identifiers: Keep existing").
4. De volta ao BimCraft, abrir o modelo que saiu, e depois acrescentar o que voltou ({{ui:Add a model}} em Modelos).
5. Em {{ui:Between two BIM programs}}, escolher **Saiu** e **Voltou**, e clicar em {{ui:Make the report}}.

## Ler o relatório

- **Elementos**: quantos voltaram com o mesmo GlobalId, quantos faltam e quantos são novos. Elementos com um novo GlobalId aparecem como um em falta e um novo: o outro programa não o manteve.
- **Classe IFC alterada**: elementos que voltaram como outro tipo de elemento.
- **Valores de propriedades mantidos**: a proporção de valores que voltaram inalterados. A lista abaixo mostra as propriedades com mais valores alterados ou em falta.
- **Classificações**: mantidas, alteradas (mesmo sistema, outro código) ou em falta.

{{ui:Download the report (CSV)}} dá cada propriedade com as suas contagens. Para ver quais elementos se moveram ou mudaram de forma, usar {{ui:Compare versions}} com os mesmos dois modelos.

:::note
O BimCraft não executa nenhum dos dois programas. Quais as definições que levam um valor até ao fim depende das definições IFC de cada programa: o relatório mostra o que realmente voltou, por isso experimente uma definição, exporte de novo e compare.
:::

## As questões viajam como BCF

As questões que levanta no BimCraft exportam-se como BCF ({{ui:Issues}}), que ambos os programas conseguem ler com as suas ferramentas BCF, por isso uma pergunta sobre um elemento chega a quem trabalha no outro programa com o seu ponto de vista.

Ver também [Abrir um pacote de projeto](topic:open-project-bundle), [De um ficheiro de projeto para o BimCraft através de IFC](topic:rvt-to-ifc) e [Comparar duas versões de um modelo](topic:compare-versions).
