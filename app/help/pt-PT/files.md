---
title: Ficheiros que o BimCraft abre e guarda
summary: Todos os formatos que o BimCraft abre, o que conserva, o que guarda, para onde vão os ficheiros guardados e o que muda entre navegadores e quando está offline.
keywords: formatos, abrir, guardar, exportar, transferir, ifc, rvt, rfa, rte, rft, dwg, dxf, step, stp, csv, carregar, privacidade, tamanho do ficheiro
from: a7275dbf
---

O BimCraft lê os ficheiros do seu computador, no separador do navegador. **Nada é carregado** para o CadCraft nem para ninguém. Ao guardar, o BimCraft entrega ao navegador um novo ficheiro para transferir; nunca substitui um ficheiro que tenha aberto.

## O que abre

| Formato | Extensões | O que obtém |
|---|---|---|
| IFC | `.ifc` | O modelo em 3D, pisos, contagens de elementos e todas as propriedades de cada elemento. Os nomes, as etiquetas e os valores de propriedades individuais podem ser alterados. |
| Ficheiros de projeto e de famílias | `.rvt` `.rfa` `.rte` `.rft` | Uma ficha do ficheiro: versão, compilação, trabalho partilhado, informação do projeto, parâmetros de família, ficheiros ligados e a imagem de pré-visualização. Sem 3D. |
| DWG | `.dwg` | O desenho em 2D: espaço modelo, cada folha, camadas, desenhos referenciados, imagens e vista de impressão. Também o espaço modelo em 3D. Os formatos do AutoCAD de 2000 a 2018 são os verificados. |
| DXF | `.dxf` | O mesmo que DWG. |
| STEP | `.step` `.stp` | Uma peça, um equipamento ou o modelo de um fornecedor (AP203, AP214, AP242) em 3D: cada sólido torna-se um elemento (um proxy de elemento de construção) de um pequeno modelo IFC num único piso, lido como triângulos à sua dimensão real, uma montagem com cada peça onde o ficheiro a coloca. A partir daí funciona como qualquer IFC: propriedades, cortes, medir, guardar como IFC. As cores e a árvore da montagem não são lidas. |
| Nuvens de pontos | `.las` `.laz` `.e57` `.ply` `.pcd` `.ptx` `.pts` `.xyz` | A digitalização na vista 3D, ao lado de um modelo ou sozinha: veja [Mostrar uma nuvem de pontos ao lado do modelo](topic:point-clouds). |
| Pacote de projeto | `.ccbundle.zip` | O modelo com as suas vistas, disposições e grupos de propriedades: veja [Abrir um pacote de projeto](topic:open-project-bundle). |
| Uma pasta | qualquer | Um relatório de cada modelo, desenho e pacote de projeto que contém. Qualquer IFC, modelo, desenho ou pacote do relatório abre com um clique. |

[O que o BimCraft lê de cada formato](topic:file-formats) explica o assunto em pormenor.

O BimCraft decide o que é um ficheiro analisando os primeiros bytes e também o nome, por isso um ficheiro de projeto com uma extensão pouco habitual continua a abrir como uma ficha do ficheiro.

### Não abertos

- `.ifczip` e `.ifcxml`: o BimCraft diz ".ifczip ainda não é suportado. Guarde ou exporte o modelo como um ficheiro .ifc simples." Descomprima o `.ifczip` (contém um `.ifc` simples) ou exporte novamente como IFC simples.
- Os desenhos DGN aparecem listados num relatório de pasta, mas não abrem.
- PDF, imagens e ficheiros de escritório não abrem sozinhos. Dentro de um DWG, as imagens aparecem como figuras, e {{ui:Build}} › {{ui:From a drawing…}} transforma as páginas de um PDF ou de uma digitalização em paredes: veja [Paredes a partir de um conjunto de plantas](topic:walls-from-plans).

## O que guarda

| Ação | Obtém | Onde |
|---|---|---|
| {{ui:Save as IFC}} | Um novo ficheiro IFC com as suas edições, com o nome "*nome original* (edited).ifc" | A pasta de transferências do navegador |
| {{ui:Download CSV}} no mapa de equipamentos | Um CSV dos itens da lista, com o nome "*nome do desenho* equipment.csv" | A pasta de transferências do navegador |

Outras coisas são guardadas onde são feitas, cada uma no seu tópico: {{ui:USD}} ([Exportar o modelo como USD](topic:usd)), {{ui:Collada}} (.dae e o .kmz do Google Earth: [Exportar o modelo como Collada ou para o Google Earth](topic:collada)), o .glb de {{ui:For rendering}}, imagens renderizadas, folhas e plantas em PDF, mapas e listas em CSV, questões BCF, a folha de cálculo COBie, ficheiros de famílias e os levantamentos registados em LAS ou E57. O BimCraft não guarda DWG, DXF nem ficheiros de projeto, e nunca altera os ficheiros que abriu.

:::chromium
O Chrome e o Edge guardam as transferências na pasta definida nas suas definições, normalmente Transferências. Para ser perguntado onde guardar cada ficheiro antes de transferir, ative "Perguntar onde guardar cada ficheiro antes de o transferir" nas definições de transferência do navegador.
:::

:::firefox
O Firefox guarda na pasta Transferências, a não ser que tenha definido "Perguntar sempre onde guardar os ficheiros" nas suas definições.
:::

:::safari
O Safari guarda em Transferências, a não ser que escolha outra pasta em **Safari > Definições > Geral > Localização das transferências de ficheiros**.
:::

## Guardar uma segunda vez

Cada vez que guarda, transfere o modelo inteiro com **todas as edições desde que o abriu**, e não apenas as feitas após o último guardar. A lista {{ui:Changes}} volta a começar vazia depois de cada guardar, por isso não pode anular nada anterior a um guardar. Para recomeçar a partir do original, abra novamente o ficheiro original.

## Ficheiros grandes e memória

- Os ficheiros **IFC** são lidos por completo para a memória do separador, e a geometria 3D ocupa ainda mais memória. Um modelo de algumas centenas de megabytes pode ser demasiado para um portátil. Acima de 1.5 milhões de triângulos, as arestas são desligadas para poupar memória ("Edges are off for very large models").
- Os **ficheiros de projeto** não são lidos por completo. O BimCraft lê apenas as pequenas partes de que precisa, cerca de 40 KB a 100 KB, seja qual for o tamanho do ficheiro, pelo que um modelo central de 500 MB numa unidade de rede abre num instante.
- Os ficheiros **DWG e DXF** são lidos por completo. Um desenho muito grande mostra "Este desenho é muito grande; só é mostrada uma parte."
- Abrem **pastas** com até 20,000 ficheiros. Só são lidos os poucos kilobytes de que cada ficha de modelo precisa.

Veja [Navegadores, dispositivos e memória](topic:platforms) para mais informação.

## Online e offline

Abrir ficheiros nunca precisa de internet. Um leitor é carregado a partir do site na primeira vez que é preciso: o motor IFC, na primeira vez que abre um modelo IFC ("A iniciar o motor IFC…"). Os leitores DWG e DXF fazem parte da aplicação.

:::offline
Está offline. Se o botão da barra da aplicação disser {{ui:Offline ready}}, todos os formatos abrem como habitualmente. Se não disser, um modelo IFC não pode abrir a não ser que um já tenha sido aberto neste separador: volte a ligar-se primeiro. Veja [Online e offline](topic:online-offline).
:::

Para usar o BimCraft sem ligação, clique em {{ui:Save for offline}} na barra da aplicação enquanto estiver online e aguarde por {{ui:Offline ready}}. A cópia guardada tem cerca de 33 MB; inclui o motor IFC, por isso os modelos IFC também abrem offline. [Trabalhar offline](common:offline) explica as cópias guardadas em geral.

## Armazenamento na nuvem

O armazenamento na nuvem ainda não está disponível. Guarde as suas cópias editadas no seu próprio computador ou no servidor de ficheiros do seu escritório, como faria com qualquer outro ficheiro. Veja [Os seus ficheiros](common:your-files).
