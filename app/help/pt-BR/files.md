---
title: Arquivos que o BimCraft abre e salva
summary: Todos os formatos que o BimCraft abre, o que ele mantém, o que salva, para onde vão os arquivos salvos e o que muda entre navegadores e quando você está offline.
keywords: formatos, abrir, salvar, exportar, baixar, ifc, rvt, rfa, rte, rft, dwg, dxf, step, stp, csv, enviar, privacidade, tamanho do arquivo
from: a7275dbf
---

O BimCraft lê arquivos do seu computador, na aba do navegador. **Nada é enviado** para a CadCraft nem para ninguém. Ao salvar, o BimCraft entrega ao navegador um novo arquivo para baixar; ele nunca sobrescreve um arquivo que você abriu.

## O que ele abre

| Formato | Extensões | O que você obtém |
|---|---|---|
| IFC | `.ifc` | O modelo em 3D, pavimentos, contagens de elementos e as propriedades de cada elemento. Nomes, etiquetas e valores únicos de propriedade podem ser alterados. |
| Arquivos de projeto e de família | `.rvt` `.rfa` `.rte` `.rft` | Uma ficha do arquivo: versão, build, compartilhamento de trabalho, informações do projeto, parâmetros de família, arquivos vinculados e a imagem de visualização. Sem 3D. |
| DWG | `.dwg` | O desenho em 2D: espaço modelo, cada folha, camadas, desenhos vinculados, imagens e a visualização de impressão. Espaço modelo em 3D também. Os formatos do AutoCAD de 2000 a 2018 são os verificados. |
| DXF | `.dxf` | O mesmo que DWG. |
| STEP | `.step` `.stp` | Uma peça, um equipamento ou o modelo de um fornecedor (AP203, AP214, AP242) em 3D: cada sólido vira um elemento (um proxy de elemento de construção) de um pequeno modelo IFC em um pavimento, lido como triângulos no tamanho real, e uma montagem com cada peça onde o arquivo a posiciona. A partir daí funciona como qualquer IFC: propriedades, cortes, medição, salvar como IFC. Cores e a árvore da montagem não são lidas. |
| Nuvens de pontos | `.las` `.laz` `.e57` `.ply` `.pcd` `.ptx` `.pts` `.xyz` | O escaneamento na vista 3D, ao lado de um modelo ou sozinho: veja [Mostrar uma nuvem de pontos ao lado do modelo](topic:point-clouds). |
| Pacote de projeto | `.ccbundle.zip` | O modelo com suas vistas, layouts e grupos de propriedades: veja [Abrir um pacote de projeto](topic:open-project-bundle). |
| Uma pasta | qualquer | Um relatório de cada modelo, desenho e pacote de projeto nela. Qualquer IFC, modelo, desenho ou pacote no relatório abre com um clique. |

[O que o BimCraft lê de cada formato](topic:file-formats) detalha o assunto.

O BimCraft identifica o que é um arquivo pelos seus primeiros bytes, além do nome; assim, um arquivo de projeto com uma extensão incomum ainda abre como ficha do arquivo.

### Não abertos

- `.ifczip` e `.ifcxml`: o BimCraft informa: ".ifczip ainda não é suportado. Salve ou exporte o modelo como um arquivo .ifc simples." Descompacte o `.ifczip` (ele contém um `.ifc` simples) ou exporte novamente como IFC simples.
- Desenhos DGN aparecem listados em um relatório de pasta, mas não abrem.
- Arquivos PDF, imagens e do Office não abrem por conta própria. As imagens são usadas como imagens dentro de um DWG, e {{ui:Build}} › {{ui:A partir de um desenho…}} transforma as páginas de um PDF ou de um escaneamento em paredes: veja [Paredes a partir de um conjunto de plantas](topic:walls-from-plans).

## O que ele salva

| Você clica | Você obtém | Onde |
|---|---|---|
| {{ui:Salvar como IFC}} | Um novo arquivo IFC com as suas edições, chamado "*nome original* (editado).ifc" | A pasta de downloads do seu navegador |
| {{ui:Baixar CSV}} na tabela de equipamentos | Um CSV dos itens da lista, chamado "*nome do desenho* equipment.csv" | A pasta de downloads do seu navegador |

Outras coisas são salvas onde são feitas, cada uma em seu próprio tópico: {{ui:USD}} ([Exportar o modelo como USD](topic:usd)), {{ui:Collada}} (.dae e o .kmz do Google Earth: [Exportar o modelo como Collada ou para o Google Earth](topic:collada)), o .glb de {{ui:Para renderização}}, imagens renderizadas, folhas e plantas em PDF, tabelas e listas em CSV, problemas BCF, a planilha COBie, arquivos de família e escaneamentos registrados como LAS ou E57. O BimCraft não salva arquivos DWG, DXF ou de projeto, e nunca altera os arquivos que você abriu.

:::chromium
O Chrome e o Edge salvam downloads na pasta definida nas configurações, normalmente Downloads. Para ser perguntado onde salvar cada arquivo, ative "Perguntar onde salvar cada arquivo antes de baixar" nas configurações de download do navegador.
:::

:::firefox
O Firefox salva na pasta Downloads, a menos que você tenha definido "Sempre perguntar onde salvar arquivos" nas configurações dele.
:::

:::safari
O Safari salva em Downloads, a menos que você escolha outra pasta em **Safari > Configurações > Geral > Local de download de arquivos**.
:::

## Salvando uma segunda vez

Cada salvamento baixa o modelo inteiro com **todas as edições desde que você o abriu**, não apenas as edições feitas após o último salvamento. A lista de {{ui:Alterações}} volta a ficar vazia após cada salvamento, então você não pode desfazer além de um salvamento. Para recomeçar do original, abra o arquivo original novamente.

## Arquivos grandes e memória

- Arquivos **IFC** são lidos por completo na memória da aba, e a geometria 3D ocupa mais memória além disso. Um modelo de algumas centenas de megabytes pode ser demais para um notebook. Acima de 1.5 milhão de triângulos, as arestas são desativadas para economizar memória ("Arestas desativadas para modelos muito grandes").
- Arquivos de **projeto** não são lidos por completo. O BimCraft lê apenas as pequenas partes de que precisa, cerca de 40 KB a 100 KB, não importa o tamanho do arquivo; assim, um modelo central de 500 MB em uma unidade de rede abre em instantes.
- Arquivos **DWG** e **DXF** são lidos por completo. Um desenho muito grande mostra "Este desenho é muito grande; apenas parte dele é mostrada."
- **Pastas** com até 20,000 arquivos abrem. Apenas os poucos kilobytes de que cada ficha de modelo precisa são lidos.

Veja [Navegadores, dispositivos e memória](topic:platforms) para mais detalhes.

## Online e offline

Abrir arquivos nunca precisa da internet. Um leitor é carregado do site na primeira vez em que você precisa dele: o motor IFC, na primeira vez em que você abre um modelo IFC ("Iniciando o motor IFC…"). Os leitores de DWG e DXF fazem parte do aplicativo.

:::offline
Você está offline. Se o botão da barra do aplicativo disser {{ui:Pronto para uso offline}}, todos os formatos abrem normalmente. Se não, um modelo IFC não pode abrir, a menos que um já tenha sido aberto nesta aba: reconecte primeiro. Veja [Online e offline](topic:online-offline).
:::

Para usar o BimCraft sem conexão, clique em {{ui:Salvar para uso offline}} na barra do aplicativo enquanto estiver online e aguarde {{ui:Pronto para uso offline}}. A cópia salva tem cerca de 33 MB; ela inclui o motor IFC, então modelos IFC também abrem offline. [Trabalhar offline](common:offline) explica as cópias salvas em geral.

## Salvamento na nuvem

O salvamento na nuvem ainda não está disponível. Salve suas cópias editadas no seu próprio computador ou no servidor de arquivos do seu escritório, como faria com qualquer outro arquivo. Veja [Seus arquivos](common:your-files).
