---
title: Pacotes de tipos: compartilhe tipos de parede como arquivos abertos
summary: Salve tipos de parede com suas camadas, materiais, etiquetas e códigos de classificação, e famílias, como um único arquivo aberto (JSON simples ou IFC), e adicione-os a outro projeto. Tipos de parede de um arquivo IFC de outro programa também podem ser lidos.
keywords: pacote de tipos, tipos, tipo de parede, compartilhar, exportar, importar, biblioteca, formato aberto, json, ifc, IfcWallType, IfcMaterialLayerSet, IfcProjectLibrary, materiais, camadas, modelo padrão, padrão de escritório, famílias
from: e4c91331
---

## O que você vai fazer

Leve seus tipos de parede de um projeto para outro, ou entregue-os a alguém que trabalha em outro programa. Um pacote de tipos guarda cada tipo de parede com suas camadas, espessuras, materiais, núcleo, cavidades, prioridade de camada, nível de desenvolvimento, dados de quantitativos e códigos de classificação, e as famílias que você adicionar. É um arquivo aberto: texto JSON simples que qualquer um pode ler, ou um arquivo IFC. Nada nele é preso a uma empresa, a um país ou a uma conta.

## Salve tipos de um projeto

1. Abra **Dados** na barra do modelo e escolha {{ui:Type packs}}.
2. Em {{ui:Save types from this project}}, marque os tipos de parede a incluir. Os tipos do próprio projeto já estão marcados; um tipo inicial pode ser adicionado e entra como cópia. Marque as famílias se quiser incluí-las.
3. Digite um {{ui:Pack name}}.
4. {{ui:Save as a pack (.json)}} baixa um arquivo `.cctypes.json`. {{ui:Save as IFC (.ifc)}} baixa um arquivo IFC que contém apenas tipos: cada tipo de parede como um IfcWallType, com seu conjunto de camadas de material, materiais e classificação, para qualquer programa BIM.

## Adicione tipos a um projeto

1. Na mesma caixa de diálogo, escolha {{ui:Open a pack or an IFC file…}} e selecione um pacote `.json` ou um arquivo `.ifc`.
2. A caixa de diálogo lista o que o arquivo contém: cada tipo de parede com sua espessura, número de camadas e códigos, os materiais e as famílias.
3. Escolha o que acontece com {{ui:A type this project already has}}: **Manter o do projeto**, **Adicionar o do pacote como cópia** (recebe um novo nome terminando em "(2)"), ou **Substituir (somente quando nenhuma parede o usa)**.
4. {{ui:Add to the project}}. A caixa de diálogo lista o que foi adicionado, copiado, substituído ou mantido. É um único passo para desfazer.

A lista de tipos da ferramenta Parede mostra os novos tipos de imediato.

## Tipos de piso, cobertura e forro

A lista de tipos a salvar também contém os tipos de piso, cobertura e forro do projeto e seus tipos iniciais (marcados como Piso, Cobertura, Forro). Um pacote pode trazer os quatro tipos; cada tipo indica sua classe IFC (IfcWallType, IfcSlabType, IfcCoveringType). Um tipo de piso, cobertura ou forro que elementos usam não é substituído por um pacote: altere-o no editor de tipos.

## Um tipo como item da Biblioteca

Marque exatamente um tipo e escolha **Salvar como item da Biblioteca…**. Ele salva um arquivo `.cctype.json`: um item da Biblioteca do tipo Tipos que contém esse único tipo (suas camadas, materiais, LOD e códigos de classificação). Envie-o na Biblioteca para compartilhar. **Abrir um pacote ou um arquivo IFC** também lê esse item e adiciona o tipo ao projeto como um pacote.

## Bom saber

- Um arquivo IFC de outro programa também pode ser aberto aqui. Cada um de seus tipos de parede que tem camadas de material é lido: o nome, os materiais e as espessuras das camadas e qualquer cavidade são do próprio arquivo. Quais camadas são o núcleo e o que cada camada faz (acabamento, estrutura, isolamento) são estimados; o tipo é marcado como **(estimado)**, e você deve verificar no editor de tipo de parede. Um tipo de parede sem camadas é deixado de fora e seu nome é informado.
- Um material que o projeto já tem é mantido como está. Um novo material cujo nome já está em uso recebe "(pacote)" depois do nome.
- Um tipo que paredes usam nunca é substituído por um pacote. Altere-o no editor de tipos de parede, que move as paredes corretamente.
- Um código definido em uma parede não é transferido: ele pertence àquela parede. Um código definido no tipo é transferido.
- Um arquivo com um campo que o formato não tem, uma camada cujo material está faltando, ou qualquer coisa que não seja texto simples é recusado, e a mensagem diz onde e por quê.
- Ainda não implementado: tipos de piso, cobertura e forro (não têm tipos nesta versão: cada um tem sua própria espessura), tipos de porta e janela além das famílias, e hachuras ou cores de arquivo de outro programa.
