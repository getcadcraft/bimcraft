---
title: Abrir um pacote de projeto
summary: Um pacote de projeto é um único zip com um modelo, as suas vistas, os seus layouts e os seus grupos de propriedades. Abra-o, mostre uma vista com o seu piso e as suas camadas, abra um layout e veja as propriedades nos grupos do próprio projeto.
keywords: pacote, pacote de projeto, ccbundle, zip, vistas, mapa de vistas, layouts, livro de layouts, combinação de camadas, grupos de propriedades, normas, pln, template
from: b5b86e8f
---

## O que vai fazer

Abra um **pacote de projeto** (`.ccbundle.zip`) e trabalhe com o projeto tal como foi organizado: as suas vistas, os seus layouts e os seus grupos de propriedades, sobre o modelo.

Um pacote contém:

- o modelo em IFC,
- os layouts em PDF e DWG,
- uma lista do que o IFC deixa de fora: as vistas (cada uma com o seu piso, combinação de camadas e escala), os layouts e os desenhos colocados neles, as definições de propriedades nos seus grupos, as classificações e as normas, como camadas, conjuntos de canetas, tipos de linha, preenchimentos, superfícies e compostos.

Os pacotes são criados por um script de código aberto que é executado dentro do Archicad e pede ao próprio Archicad estas listas. O BimCraft nunca lê diretamente os ficheiros `.pln` ou `.tpl`; veja [Abrir ficheiros de projeto .pln e .pla](topic:pln-project-files).

## Criar um pacote

O script está em pré-visualização: ainda não foi testado em todas as versões do Archicad. Obtenha-o em [github.com/getcadcraft/bim-project-bundle](https://github.com/getcadcraft/bim-project-bundle). É preciso o Archicad 24 ou posterior e o Python 3.8 ou posterior; não há mais nada para instalar.

1. Guarde `archicad_bundle.py` numa pasta, por exemplo `C:\cc-bundle`.
2. No Archicad, abra o projeto e crie um conjunto de publicação com o nome exato **CadCraft bundle**: a vista 3D como IFC, cada layout como PDF e cada layout de novo como DWG, publicados em ficheiros no disco, numa só pasta, sem subpastas.
3. Com o projeto aberto, execute `python archicad_bundle.py --probe --out .` uma vez. Só lê e escreve `probe.json`.
4. Execute `python archicad_bundle.py --out . --translator "IFC4 Reference View"` (use o tradutor IFC que escolheu). O Archicad publica o conjunto e o script escreve `<project>.ccbundle.zip`.

Se a publicação através do script falhar, publique o conjunto manualmente e execute `python archicad_bundle.py --out . --no-publish --files <folder>\*.ifc <folder>\*.pdf <folder>\*.dwg`. O README do repositório tem todas as opções. Se algo não chegar, abra uma questão nesse repositório e anexe `probe.json`.

## Abrir um pacote

1. Clique em {{ui:Escolher um ficheiro}}, ou arraste o `.ccbundle.zip` para o BimCraft. Numa pasta que abriu com {{ui:Abrir uma pasta}}, os pacotes aparecem listados em **Pacotes de projeto**; clique num pelo nome.
2. O modelo abre-se como qualquer IFC, e a secção **Pacote de projeto** aparece à esquerda, por baixo dos dados do ficheiro.

Nada é carregado: o pacote é lido no seu computador, um ficheiro de cada vez, para que um modelo grande não seja copiado duas vezes.

## Mostrar uma vista

Em **Vistas**, as vistas são agrupadas pelas pastas que tinham no projeto. Clique no nome de uma vista:

- **Uma planta de piso** mostra apenas o seu piso, visto de cima.
- **A sua combinação de camadas** oculta os elementos nas camadas que essa combinação oculta. A linha de estado indica quantos elementos ocultou.
- **A sua escala** é mostrada ao lado do nome e na linha de estado.
- **Uma vista 3D** mostra todos os pisos.

Para mostrar tudo de novo, use {{ui:Mostrar tudo}} em {{ui:Mostrar}} e marque todos os pisos.

:::note
O BimCraft encontra as camadas através das atribuições de camada do ficheiro IFC. Se o IFC foi exportado sem elas, uma combinação de camadas não oculta nada, e a linha de estado indica 0 elementos ocultos.
:::

## Abrir um layout

Em **Layouts**, cada layout mostra o seu número, nome, formato de papel e as vistas colocadas nele.

- **PDF** guarda o PDF do layout a partir do pacote.
- **DWG** abre o desenho do layout na vista 2D. Clique em qualquer vista para voltar ao modelo.
- **Abrir em …** envia o ficheiro do layout para a aplicação que trabalha sobre ele, num novo separador: o PDF para o MarkupCraft, o DWG para o CadCraft. Só aparece onde essa aplicação está aberta ao lado do BimCraft. O ficheiro é lido do pacote enquanto o separador carrega, e nada é carregado.

Um layout sem nenhum dos dois mostra **Sem ficheiro no pacote**.

## Ver propriedades nos grupos do projeto

Escolha um elemento. Os **Grupos de propriedades** mostram as suas propriedades sob os grupos definidos no projeto, associadas através do conjunto de propriedades e do nome que a definição indica para IFC, ou então pelo nome. As restantes continuam em {{ui:Propriedades}}, como habitualmente. As **Definições de propriedades** listam cada definição com o seu grupo, tipo e nome IFC.

## Normas e notas

- **Normas** conta as camadas, combinações de camadas, conjuntos de canetas, tipos de linha, preenchimentos, superfícies, compostos e materiais do pacote.
- **Notas** lista o que o script não conseguiu obter dessa versão do Archicad, qualquer campo que o BimCraft não conseguiu ler e qualquer ficheiro que o pacote indique mas não contenha.

## Resolução de problemas

- **«… é um zip mas não um pacote de projeto.»** O zip não tem `manifest.json`. Extraia-o e abra o `.ifc` que está dentro.
- **«… é um pacote de projeto mais recente do que o BimCraft lê.»** Atualize o BimCraft.
- **«… não contém o modelo que o seu manifesto indica.»** O zip foi cortado ou editado. Crie de novo o pacote.
- **Uma vista mostra todos os pisos.** O seu piso não está no IFC do modelo (a linha de estado indica isso). Verifique se a exportação IFC incluiu esse piso.

Veja também [Trabalhar entre dois programas BIM](topic:two-bim-programs) e [O que o BimCraft lê de cada formato](topic:file-formats).
