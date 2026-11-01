---
title: Ficheiros que o BimCraft abre e guarda
summary: Todos os formatos que o BimCraft abre, o que mantém, o que guarda, para onde vão os ficheiros guardados e o que muda entre navegadores e quando está offline.
keywords: formatos, abrir, guardar, exportar, transferir, ifc, rvt, rfa, rte, rft, dwg, dxf, step, stp, csv, carregar, privacidade, tamanho do ficheiro
from: a1f0161b
---

O BimCraft lê ficheiros no seu computador, no separador do navegador. **Nada é carregado** para o CadCraft nem para mais ninguém. Quando guarda, o BimCraft entrega ao navegador um ficheiro novo para transferir; nunca escreve por cima de um ficheiro que abriu.

## O que abre

| Formato | Extensões | O que obtém |
|---|---|---|
| IFC | `.ifc` | O modelo em 3D, pisos, número de elementos e as propriedades de cada elemento. É possível alterar nomes, etiquetas e valores de propriedades individuais. |
| Ficheiros de projeto e de família | `.rvt` `.rfa` `.rte` `.rft` | Uma ficha do ficheiro: versão, compilação, trabalho partilhado, informações do projeto, parâmetros de família, ficheiros ligados e a imagem de pré-visualização. Sem 3D. |
| DWG | `.dwg` | O desenho em 2D: espaço modelo, todas as folhas, camadas, desenhos referenciados, imagens e vista de impressão. O espaço modelo também em 3D. Os formatos do AutoCAD 2000 ao 2018 são os que foram verificados. |
| DXF | `.dxf` | O mesmo que o DWG. |
| STEP | `.step` `.stp` | Uma peça, um equipamento ou o modelo de um fornecedor (AP203, AP214, AP242) em 3D: cada sólido torna-se um elemento (um proxy de elemento de construção) de um pequeno modelo IFC num só piso, lido como triângulos à sua dimensão real, uma montagem com todas as peças onde o ficheiro as coloca. A partir daí funciona como qualquer IFC: propriedades, cortes, medição, guardar como IFC. As cores e a árvore da montagem não são lidas. |
| Nuvens de pontos | `.las` `.laz` `.e57` `.ply` `.pcd` `.ptx` `.pts` `.xyz` | A digitalização na vista 3D, ao lado de um modelo ou sozinha: consulte [Mostrar uma nuvem de pontos ao lado do modelo](topic:point-clouds). |
| Pacote de projeto | `.ccbundle.zip` | O modelo com as suas vistas, layouts e grupos de propriedades: consulte [Abrir um pacote de projeto](topic:open-project-bundle). |
| Uma pasta | qualquer | Um relatório de todos os modelos, desenhos e pacotes de projeto que contém. Qualquer IFC, modelo, desenho ou pacote do relatório abre-se com um clique. |

[O que o BimCraft lê de cada formato](topic:file-formats) entra em pormenor.

O BimCraft decide o que um ficheiro é olhando para os seus primeiros bytes e também para o nome, pelo que um ficheiro de projeto com uma extensão invulgar abre-se na mesma como uma ficha de ficheiro.

### Não são abertos

- `.ifczip` e `.ifcxml`: o BimCraft diz ".ifczip ainda não é suportado. Guarde ou exporte o modelo como um ficheiro .ifc simples." Descomprima o `.ifczip` (contém um `.ifc` simples) ou exporte de novo como IFC simples.
- Os desenhos DGN são listados no relatório de uma pasta, mas não se abrem.
- Os PDF, as imagens e os ficheiros de escritório não se abrem por si só. As imagens são usadas como imagens dentro de um DWG, e {{ui:Construir}} › {{ui:A partir de um desenho…}} transforma as páginas de um PDF ou de uma digitalização em paredes: consulte [Paredes a partir de um conjunto de plantas](topic:walls-from-plans).

## O que guarda

| Clica em | Obtém | Onde |
|---|---|---|
| {{ui:Guardar como IFC}} | Um novo ficheiro IFC com as suas edições, com o nome "*nome original* (edited).ifc" | A pasta de transferências do navegador |
| {{ui:Transferir CSV}} no mapa de equipamento | Um CSV dos itens da lista, com o nome "*nome do desenho* equipment.csv" | A pasta de transferências do navegador |

Outras coisas são guardadas onde são criadas, cada uma no seu tópico: {{ui:USD}} ([Exportar o modelo como USD](topic:usd)), o .glb {{ui:Para renderização}}, imagens renderizadas, folhas e plantas em PDF, mapas e listas em CSV, questões BCF, a folha de cálculo COBie, ficheiros de família e digitalizações registadas em LAS ou E57. O BimCraft não guarda DWG, DXF nem ficheiros de projeto, e nunca altera os ficheiros que abriu.

:::chromium
O Chrome e o Edge guardam as transferências na pasta definida nas suas definições, normalmente Transferências. Para ser perguntado onde guardar de cada vez, ative "Perguntar onde guardar cada ficheiro antes de transferir" nas definições de transferências do navegador.
:::

:::firefox
O Firefox guarda na pasta Transferências, a não ser que defina "Perguntar sempre onde guardar os ficheiros" nas suas definições.
:::

:::safari
O Safari guarda em Transferências, a não ser que escolha outra pasta em **Safari > Definições > Geral > Localização de transferência de ficheiros**.
:::

## Guardar uma segunda vez

Cada gravação transfere o modelo inteiro com **todas as edições desde que o abriu**, e não apenas as feitas depois da última gravação. A lista {{ui:Alterações}} fica de novo vazia depois de cada gravação, pelo que não é possível anular para além de uma gravação. Para recomeçar a partir do original, abra novamente o ficheiro original.

## Ficheiros grandes e memória

- Os ficheiros **IFC** são lidos por inteiro para a memória do separador, e a geometria 3D ocupa ainda mais memória. Um modelo de algumas centenas de megabytes pode ser demasiado para um portátil. Acima de 1,5 milhões de triângulos, as arestas são desligadas para poupar memória ("As arestas estão desligadas em modelos muito grandes").
- Os **ficheiros de projeto** não são lidos na totalidade. O BimCraft lê apenas as pequenas partes de que precisa, cerca de 40 KB a 100 KB, por maior que seja o ficheiro, pelo que um modelo central de 500 MB numa unidade de rede abre num instante.
- Os ficheiros **DWG e DXF** são lidos por inteiro. Um desenho muito grande mostra "Este desenho é muito grande; só é mostrada uma parte."
- As **pastas** até 20 000 ficheiros abrem-se. Só são lidos os poucos kilobytes de que a ficha de cada modelo precisa.

Consulte [Navegadores, dispositivos e memória](topic:platforms) para mais informações.

## Online e offline

Abrir ficheiros nunca precisa da Internet. Um leitor é carregado a partir do site na primeira vez que for necessário: o motor IFC, na primeira vez que abre um modelo IFC ("A iniciar o motor IFC…"). Os leitores de DWG e DXF fazem parte da aplicação.

:::offline
Está offline. Se o botão da barra da aplicação disser {{ui:Pronto para offline}}, todos os formatos abrem-se como habitualmente. Se não, um modelo IFC não se pode abrir, a menos que um já tenha sido aberto neste separador: volte primeiro a ligar-se. Consulte [Online e offline](topic:online-offline).
:::

Para utilizar o BimCraft sem ligação, clique em {{ui:Guardar para offline}} na barra da aplicação enquanto estiver online e aguarde por {{ui:Pronto para offline}}. A cópia guardada tem cerca de 33 MB; inclui o motor IFC, pelo que os modelos IFC também se abrem offline. [Trabalhar offline](common:offline) explica as cópias guardadas em geral.

## Gravação na nuvem

A gravação na nuvem ainda não está disponível. Guarde as suas cópias editadas no seu computador ou no servidor de ficheiros do escritório, como faria com qualquer outro ficheiro. Consulte [Os seus ficheiros](common:your-files).
