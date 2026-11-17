---
title: Pacotes de tipos: partilhar tipos de parede como ficheiros abertos
summary: Guardar tipos de parede com as suas camadas, materiais, etiquetas, códigos de classificação e famílias, como um só ficheiro aberto (JSON simples ou IFC), e acrescentá-los a outro projeto. Os tipos de parede de um ficheiro IFC de outro programa também podem ser lidos.
keywords: pacote de tipos, tipos, tipo de parede, partilhar, exportar, importar, biblioteca, formato aberto, json, ifc, IfcWallType, IfcMaterialLayerSet, IfcProjectLibrary, materiais, camadas, modelo, norma de escritório, famílias
from: e4c91331
---

## O que vai fazer

Levar os seus tipos de parede de um projeto para outro, ou entregá-los a alguém que trabalha noutro programa. Um pacote de tipos guarda cada tipo de parede com as suas camadas, espessuras, materiais, núcleo, cavidades, prioridade de camadas, nível de desenvolvimento, dados de medição e códigos de classificação, e quaisquer famílias que acrescente. É um ficheiro aberto: texto JSON simples que qualquer pessoa pode ler, ou um ficheiro IFC. Nada nele está preso a uma empresa, a um país ou a uma conta.

## Guardar tipos de um projeto

1. Abrir **Dados** na barra do modelo e escolher {{ui:Type packs}}.
2. Em {{ui:Save types from this project}}, marcar os tipos de parede a incluir. Os tipos do próprio projeto já estão marcados; um tipo inicial pode ser acrescentado e entra como cópia. Marcar as famílias se as quiser incluir.
3. Escrever um {{ui:Pack name}}.
4. {{ui:Save as a pack (.json)}} transfere um ficheiro `.cctypes.json`. {{ui:Save as IFC (.ifc)}} transfere um ficheiro IFC que contém apenas tipos: cada tipo de parede como IfcWallType, com o seu conjunto de camadas de material, materiais e classificação, para qualquer programa BIM.

## Acrescentar tipos a um projeto

1. Na mesma janela, escolher {{ui:Open a pack or an IFC file…}} e selecionar um pacote `.json` ou um ficheiro `.ifc`.
2. A janela lista o que o ficheiro contém: cada tipo de parede com a sua espessura, número de camadas e códigos, os materiais e as famílias.
3. Escolher o que acontece a {{ui:A type this project already has}}: **Manter o do projeto**, **Acrescentar o do pacote como cópia** (fica com um novo nome que termina em "(2)"), ou **Substituir (só quando nenhuma parede o usa)**.
4. {{ui:Add to the project}}. A janela lista o que foi acrescentado, copiado, substituído ou mantido. É um só passo de anulação.

Os novos tipos ficam logo na lista de tipos da ferramenta Parede.

## Tipos de piso, cobertura e teto

A lista de tipos a guardar também contém os tipos de piso, cobertura e teto do projeto e os seus iniciais (marcados Piso, Cobertura, Teto). Um pacote pode levar os quatro tipos; cada tipo indica a sua classe IFC (IfcWallType, IfcSlabType, IfcCoveringType). Um tipo de piso, cobertura ou teto que os elementos usam não é substituído a partir de um pacote: alterá-lo no editor de tipos.

## Um tipo como item da biblioteca

Marcar exatamente um tipo e escolher **Guardar como item da biblioteca…**. Isto guarda um ficheiro `.cctype.json`: um item da biblioteca do tipo Tipos que contém esse tipo (as suas camadas, materiais, LOD e códigos de classificação). Carregá-lo na Biblioteca para o partilhar. **Abrir um pacote ou um ficheiro IFC** também lê esse item e acrescenta o seu tipo ao projeto como um pacote.

## Bom saber

- Um ficheiro IFC de outro programa também pode ser aberto aqui. Cada um dos seus tipos de parede que tem camadas de material é lido: o nome, os materiais e as espessuras das camadas e qualquer cavidade são os do próprio ficheiro. Quais as camadas que são o núcleo e o que cada camada faz (acabamento, estrutura, isolamento) são estimados, o tipo fica marcado **(estimado)**, e deve ser verificado no editor de tipos de parede. Um tipo de parede sem camadas fica de fora e é indicado pelo nome.
- Um material que o projeto já tem é mantido tal como está. Um novo material cujo nome já existe recebe "(pacote)" depois do nome.
- Um tipo que as paredes usam nunca é substituído a partir de um pacote. Alterá-lo no editor de tipos de parede, que move as suas paredes corretamente.
- Um código definido numa parede não viaja: pertence a essa parede. Um código definido no tipo viaja.
- Um ficheiro com um campo que o formato não tem, uma camada cujo material está em falta, ou algo que não seja texto simples é recusado, e a mensagem indica onde e porquê.
- Ainda não implementado: tipos de piso, cobertura e teto (não têm tipos nesta versão: cada um tem a sua própria espessura), tipos de porta e janela que não sejam famílias, e tramas ou cores do ficheiro de outro programa.
