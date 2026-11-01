---
title: Arquivos que o BimCraft abre e salva
summary: Todos os formatos que o BimCraft abre, o que ele mantém, o que salva, para onde vão os arquivos salvos e o que muda entre navegadores e quando você está offline.
keywords: formatos, abrir, salvar, exportar, baixar, ifc, rvt, rfa, rte, rft, dwg, dxf, step, stp, csv, enviar, privacidade, tamanho de arquivo
from: a1f0161b
---

O BimCraft lê arquivos no seu computador, na guia do navegador. **Nada é enviado** ao CadCraft nem a mais ninguém. Quando você salva, o BimCraft entrega ao navegador um arquivo novo para baixar; ele nunca grava por cima de um arquivo que você abriu.

## O que ele abre

| Formato | Extensões | O que você obtém |
|---|---|---|
| IFC | `.ifc` | O modelo em 3D, pavimentos, contagem de elementos e as propriedades de cada elemento. Nomes, tags e valores de propriedades simples podem ser alterados. |
| Arquivos de projeto e de família | `.rvt` `.rfa` `.rte` `.rft` | Uma ficha do arquivo: versão, build, trabalho compartilhado, informações do projeto, parâmetros da família, arquivos vinculados e a imagem de visualização. Sem 3D. |
| DWG | `.dwg` | O desenho em 2D: espaço modelo, todas as folhas, camadas, desenhos vinculados, imagens e vista de impressão. O espaço modelo também em 3D. Os formatos do AutoCAD 2000 ao 2018 são os verificados. |
| DXF | `.dxf` | O mesmo que o DWG. |
| STEP | `.step` `.stp` | Uma peça, um equipamento ou um modelo de fornecedor (AP203, AP214, AP242) em 3D: cada sólido vira um elemento (um proxy de elemento de edificação) de um pequeno modelo IFC em um pavimento, lido como triângulos no tamanho real, uma montagem com cada peça onde o arquivo a coloca. A partir daí funciona como qualquer IFC: propriedades, cortes, medição, salvar como IFC. Cores e a árvore da montagem não são lidas. |
| Nuvens de pontos | `.las` `.laz` `.e57` `.ply` `.pcd` `.ptx` `.pts` `.xyz` | A varredura na vista 3D, ao lado de um modelo ou sozinha: veja [Mostrar uma nuvem de pontos ao lado do modelo](topic:point-clouds). |
| Pacote de projeto | `.ccbundle.zip` | O modelo com suas vistas, layouts e grupos de propriedades: veja [Abrir um pacote de projeto](topic:open-project-bundle). |
| Uma pasta | qualquer | Um relatório de todos os modelos, desenhos e pacotes de projeto dela. Qualquer IFC, modelo, desenho ou pacote do relatório abre com um clique. |

[O que o BimCraft lê de cada formato](topic:file-formats) entra em detalhes.

O BimCraft decide o que um arquivo é olhando para os primeiros bytes além do nome, então um arquivo de projeto com extensão incomum ainda abre como uma ficha de arquivo.

### Não abre

- `.ifczip` e `.ifcxml`: o BimCraft diz ".ifczip ainda não é suportado. Salve ou exporte o modelo como um arquivo .ifc simples." Descompacte o `.ifczip` (ele contém um `.ifc` simples) ou exporte de novo como IFC simples.
- Desenhos DGN aparecem no relatório de uma pasta, mas não abrem.
- PDF, imagens e arquivos de escritório não abrem sozinhos. As imagens são usadas como figuras dentro de um DWG, e {{ui:Construir}} › {{ui:A partir de um desenho…}} transforma as páginas de um PDF ou de uma digitalização em paredes: veja [Paredes a partir de um conjunto de plantas](topic:walls-from-plans).

## O que ele salva

| Você clica em | Você obtém | Onde |
|---|---|---|
| {{ui:Salvar como IFC}} | Um arquivo IFC novo com suas edições, com o nome "*nome original* (edited).ifc" | A pasta de downloads do navegador |
| {{ui:Baixar CSV}} na tabela de equipamentos | Um CSV dos itens da lista, com o nome "*nome do desenho* equipment.csv" | A pasta de downloads do navegador |

Outras coisas são salvas onde são feitas, cada uma no seu próprio tópico: {{ui:USD}} ([Exportar o modelo como USD](topic:usd)), o .glb de {{ui:Para renderização}}, imagens renderizadas, folhas e plantas em PDF, tabelas e listas em CSV, tópicos BCF, a planilha COBie, arquivos de família e varreduras registradas como LAS ou E57. O BimCraft não salva DWG, DXF nem arquivos de projeto, e nunca altera os arquivos que você abriu.

:::chromium
O Chrome e o Edge salvam os downloads na pasta definida nas configurações deles, normalmente Downloads. Para ser perguntado onde salvar a cada vez, ative "Perguntar onde salvar cada arquivo antes de baixar" nas configurações de download do navegador.
:::

:::firefox
O Firefox salva na pasta Downloads, a menos que você defina "Sempre perguntar onde salvar os arquivos" nas configurações dele.
:::

:::safari
O Safari salva em Downloads, a menos que você escolha outra pasta em **Safari > Configurações > Geral > Local de download de arquivos**.
:::

## Salvar uma segunda vez

Cada salvamento baixa o modelo inteiro com **todas as edições desde que você o abriu**, e não só as feitas depois do último salvamento. A lista {{ui:Alterações}} começa vazia de novo depois de cada salvamento, então não é possível desfazer além de um salvamento. Para recomeçar do original, abra o arquivo original de novo.

## Arquivos grandes e memória

- Os arquivos **IFC** são lidos por completo na memória da guia, e a geometria 3D usa ainda mais memória. Um modelo de algumas centenas de megabytes pode ser demais para um notebook. Acima de 1,5 milhão de triângulos, as arestas são desligadas para economizar memória ("As arestas ficam desligadas em modelos muito grandes").
- Os **arquivos de projeto** não são lidos por inteiro. O BimCraft lê somente as pequenas partes de que precisa, cerca de 40 KB a 100 KB, por maior que seja o arquivo, então um modelo central de 500 MB em uma unidade de rede abre num instante.
- Os arquivos **DWG e DXF** são lidos por completo. Um desenho muito grande mostra "Este desenho é muito grande; somente parte dele é mostrada."
- **Pastas** com até 20.000 arquivos abrem. Só são lidos os poucos quilobytes de que a ficha de cada modelo precisa.

Veja [Navegadores, dispositivos e memória](topic:platforms) para saber mais.

## Online e offline

Abrir arquivos nunca precisa da internet. Um leitor é carregado do site na primeira vez que você precisa dele: o mecanismo IFC, na primeira vez que você abre um modelo IFC ("Iniciando o mecanismo IFC…"). Os leitores de DWG e DXF fazem parte do aplicativo.

:::offline
Você está offline. Se o botão da barra do aplicativo diz {{ui:Pronto para uso offline}}, todos os formatos abrem normalmente. Se não, um modelo IFC não abre, a menos que um já tenha sido aberto nesta guia: reconecte primeiro. Veja [Online e offline](topic:online-offline).
:::

Para usar o BimCraft sem conexão, clique em {{ui:Salvar para uso offline}} na barra do aplicativo enquanto estiver online e aguarde {{ui:Pronto para uso offline}}. A cópia salva tem cerca de 33 MB; ela inclui o mecanismo IFC, então os modelos IFC também abrem offline. [Trabalhar offline](common:offline) explica as cópias salvas em geral.

## Salvamento na nuvem

O salvamento na nuvem ainda não está disponível. Salve suas cópias editadas no seu computador ou no servidor de arquivos do seu escritório, como faria com qualquer outro arquivo. Veja [Seus arquivos](common:your-files).
