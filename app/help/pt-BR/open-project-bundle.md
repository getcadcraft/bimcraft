---
title: Abrir um pacote de projeto
summary: Um pacote de projeto é um único zip com um modelo, suas vistas, seus layouts e seus grupos de propriedades. Abra-o, mostre uma vista com seu pavimento e suas camadas, abra um layout e veja as propriedades nos grupos do próprio projeto.
keywords: pacote, pacote de projeto, ccbundle, zip, vistas, mapa de vistas, layouts, livro de layouts, combinação de camadas, grupos de propriedades, padrões, pln, template
from: b5b86e8f
---

## O que você vai fazer

Abrir um **pacote de projeto** (`.ccbundle.zip`) e trabalhar com o projeto da forma como ele foi organizado: suas vistas, seus layouts e seus grupos de propriedades, sobre o modelo.

Um pacote contém:

- o modelo em IFC,
- os layouts em PDF e DWG,
- uma lista do que o IFC deixa de fora: as vistas (cada uma com seu pavimento, combinação de camadas e escala), os layouts e os desenhos posicionados neles, definições de propriedades em seus grupos, classificações e padrões, como camadas, conjuntos de canetas, tipos de linha, preenchimentos, superfícies e compostos.

Os pacotes são gerados por um script de código aberto que roda dentro do Archicad e pede ao próprio Archicad essas listas. O BimCraft nunca lê arquivos `.pln` ou `.tpl` diretamente; veja [Abrir arquivos de projeto .pln e .pla](topic:pln-project-files).

## Criar um pacote

O script é uma prévia: ainda não foi testado em todas as versões do Archicad. Obtenha-o em [github.com/getcadcraft/bim-project-bundle](https://github.com/getcadcraft/bim-project-bundle). Você precisa do Archicad 24 ou posterior e do Python 3.8 ou posterior; não há mais nada para instalar.

1. Salve `archicad_bundle.py` em uma pasta, por exemplo `C:\cc-bundle`.
2. No Archicad, abra o projeto e crie um conjunto de publicação com o nome exato **CadCraft bundle**: a vista 3D como IFC, cada layout como PDF e cada layout de novo como DWG, publicados em arquivos no disco, em uma única pasta sem subpastas.
3. Com o projeto aberto, execute `python archicad_bundle.py --probe --out .` uma vez. Ele apenas lê e grava `probe.json`.
4. Execute `python archicad_bundle.py --out . --translator "IFC4 Reference View"` (use o tradutor IFC que você escolheu). O Archicad publica o conjunto e o script grava `<project>.ccbundle.zip`.

Se a publicação pelo script falhar, publique o conjunto manualmente e execute `python archicad_bundle.py --out . --no-publish --files <pasta>\*.ifc <pasta>\*.pdf <pasta>\*.dwg`. O README do repositório tem todas as opções. Se algo não chegar, abra uma issue lá e anexe `probe.json`.

## Abrir um pacote

1. Clique em {{ui:Choose a file}}, ou arraste o `.ccbundle.zip` para o BimCraft. Em uma pasta aberta com {{ui:Open a folder}}, os pacotes aparecem em **Pacotes de projeto**; clique em um deles pelo nome.
2. O modelo abre como qualquer IFC, e a seção **Pacote de projeto** aparece à esquerda, abaixo dos dados do arquivo.

Nada é enviado: o pacote é lido no seu computador, um arquivo por vez, então um modelo grande não é copiado duas vezes.

## Mostrar uma vista

Em **Vistas**, as vistas são agrupadas pelas pastas que tinham no projeto. Clique no nome de uma vista:

- **Uma planta baixa** mostra apenas o seu pavimento, visto de cima.
- **Sua combinação de camadas** oculta os elementos das camadas que essa combinação oculta. A linha de status diz quantos elementos foram ocultados.
- **Sua escala** aparece ao lado do nome e na linha de status.
- **Uma vista 3D** mostra todos os pavimentos.

Para mostrar tudo de novo, use {{ui:Mostrar tudo}} em {{ui:Exibir}} e marque todos os pavimentos.

:::note
O BimCraft encontra as camadas pelas atribuições de camada do arquivo IFC. Se o IFC foi exportado sem elas, uma combinação de camadas não oculta nada, e a linha de status diz 0 elementos ocultados.
:::

## Abrir um layout

Em **Layouts**, cada layout mostra seu número, seu nome, o tamanho do papel e as vistas posicionadas nele.

- **PDF** salva o PDF do layout a partir do pacote.
- **DWG** abre o desenho do layout na vista 2D. Clique em qualquer vista para voltar ao modelo.
- **Abrir em …** envia o arquivo do layout para o aplicativo que trabalha com ele, em uma nova guia: o PDF para o MarkupCraft, o DWG para o CadCraft. Só aparece quando esse aplicativo está aberto ao lado do BimCraft. O arquivo é lido do pacote enquanto a guia carrega, e nada é enviado.

Um layout sem nenhum dos dois diz **Nenhum arquivo no pacote**.

## Ver propriedades nos grupos do projeto

Escolha um elemento. **Grupos de propriedades** mostra as propriedades dele sob os grupos definidos no projeto, relacionadas pelo conjunto de propriedades e pelo nome que a definição fornece para IFC, ou então pelo nome. As demais continuam em {{ui:Propriedades}}, como de costume. **Definições de propriedades** lista cada definição com seu grupo, tipo e nome IFC.

## Padrões e notas

- **Padrões** conta as camadas, combinações de camadas, conjuntos de canetas, tipos de linha, preenchimentos, superfícies, compostos e materiais no pacote.
- **Notas** lista o que o script não conseguiu obter daquela versão do Archicad, qualquer campo que o BimCraft não conseguiu ler e qualquer arquivo que o pacote cita mas não contém.

## Solução de problemas

- **"… é um zip, mas não um pacote de projeto."** O zip não tem `manifest.json`. Descompacte-o e abra o `.ifc` que está dentro.
- **"… é um pacote de projeto mais novo do que este BimCraft lê."** Atualize o BimCraft.
- **"… não contém o modelo que o manifesto cita."** O zip foi cortado ou editado. Refaça o pacote.
- **Uma vista mostra todos os pavimentos.** O pavimento dela não está no IFC do modelo (a linha de status informa isso). Verifique se a exportação IFC incluiu esse pavimento.

Veja também [Trabalhar entre dois programas BIM](topic:two-bim-programs) e [O que o BimCraft lê de cada formato](topic:file-formats).
