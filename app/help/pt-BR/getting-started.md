---
title: Primeiros passos no BimCraft
summary: O que o BimCraft faz hoje, como abrir seu primeiro modelo, vê-lo em 3D, mudar um valor e salvar uma cópia.
keywords: começar, primeira execução, abrir, ifc, rvt, dwg, início rápido, introdução, visualizador, bim
from: fc2dea19
---

O BimCraft é o aplicativo de modelos de edificação da família CadCraft. Nesta versão ele **abre, lê e inspeciona** arquivos de edificação, e **edita os dados de modelos IFC**. Ele ainda não desenha nem modela elementos novos. Pense nele como um visualizador e verificador de modelos que também permite corrigir nomes, tags e valores de propriedades em um arquivo IFC.

O que ele abre:

| Arquivo | O que você obtém |
|---|---|
| IFC (`.ifc`) | O modelo completo em 3D: órbita, pavimentos, propriedades dos elementos e edição de nomes e valores de propriedades |
| Arquivos de projeto e de família (`.rvt`, `.rfa`, `.rte`, `.rft`) | Uma ficha do arquivo: a versão em que foi salvo, informações do projeto, a imagem de visualização e os arquivos vinculados. Sem 3D. |
| DWG e DXF | O desenho em 2D: espaço modelo e todas as folhas, camadas, desenhos vinculados, vista de impressão e uma tabela de equipamentos para desenhos de cozinha profissional com tags |
| Uma pasta de projeto | Um relatório de todos os modelos da pasta: backups, vínculos, cópias danificadas e uma sugestão de qual arquivo abrir primeiro |

Tudo acontece no seu navegador, no seu computador. **Nada é enviado.** Veja [Arquivos que o BimCraft abre e salva](topic:files) para os detalhes.

## Abrir o BimCraft

1. Abra o BimCraft em um navegador atual. Chrome, Edge, Firefox e Safari funcionam; [Navegadores, dispositivos e memória](topic:platforms) lista as diferenças.
2. Aguarde a tela vazia que diz "Abra um modelo de edificação."

:::note
O BimCraft roda no navegador e, no desktop, dentro do CadCraft Studio, com os outros aplicativos. O salvamento na nuvem ainda não está disponível: você abre arquivos do seu computador e salva cópias de volta nele.
:::

## Abrir seu primeiro modelo

A maneira mais rápida de ver o que o BimCraft faz é com um arquivo IFC.

1. Clique em {{ui:Escolher um arquivo}} no meio da tela.
2. Escolha um arquivo `.ifc` no {{pick:mac=Finder|windows=Explorador de Arquivos|linux=seu gerenciador de arquivos}} e confirme.
3. Aguarde enquanto a linha de status, na parte de baixo da tela, diz "Iniciando o mecanismo IFC…" e depois "Construindo a geometria".

Você deve ver o modelo em 3D no meio, um painel {{ui:Arquivo}} e uma lista {{ui:Pavimentos}} à esquerda, e um painel {{ui:Propriedades}} vazio à direita. A linha de status termina com "aberto" seguido do número de elementos.

:::tip
Você também pode arrastar um arquivo do {{pick:mac=Finder|windows=Explorador de Arquivos|linux=seu gerenciador de arquivos}} direto para a página. A tela mostra "Solte para abrir" enquanto você arrasta.
:::

:::offline
O mecanismo IFC é carregado do site na primeira vez que você abre um modelo IFC, a menos que o BimCraft tenha sido salvo para uso offline. Desenhos DWG e DXF, arquivos de projeto e pastas não precisam de nada extra: os leitores deles fazem parte do aplicativo. Se o botão da barra do aplicativo diz {{ui:Pronto para uso offline}}, tudo abre offline. Se não, os modelos IFC não abrem até você se reconectar, a não ser que um já tenha sido aberto nesta guia. Veja [Online e offline](topic:online-offline).
:::

:::online
Vai para um lugar sem conexão? Clique em {{ui:Salvar para uso offline}} na barra do aplicativo e aguarde {{ui:Pronto para uso offline}}. A cópia salva (cerca de 11 MB) inclui o mecanismo IFC. Veja [Trabalhar offline](common:offline).
:::

## Olhar ao redor

:::mouse
1. Arraste com o botão esquerdo do mouse para orbitar em torno do modelo.
2. Role a roda para dar zoom.
3. Arraste com o botão direito do mouse para fazer pan. Em um trackpad de Mac, segure {{key:Shift}} e arraste.
4. Pressione {{key:F}} ou clique em {{ui:Ajustar}} para ver o modelo inteiro de novo.
:::

:::touch
1. Arraste com um dedo para orbitar.
2. Faça o movimento de pinça com dois dedos para dar zoom e mova os dois dedos juntos para fazer pan.
3. Toque em {{ui:Ajustar}} para ver o modelo inteiro de novo.
:::

## Fazer uma coisa de verdade: corrigir uma tag

1. Clique em uma parede, uma porta ou qualquer elemento do modelo. Ele fica azul, e as propriedades dele aparecem à direita.
2. No painel {{ui:Propriedades}}, clique no valor ao lado de **Tag**.
3. Digite a nova tag e pressione {{key:Enter}}.
4. Veja a seção {{ui:Alterações}} que abriu à esquerda: sua alteração está listada com o valor antigo e o novo.

## Salvar uma cópia

1. Clique em {{ui:Salvar como IFC}} na seção {{ui:Alterações}}, ou pressione {{key:Mod+S}}.
2. Encontre o novo arquivo na sua pasta de downloads. Ele tem o nome do original com " (edited)" acrescentado, por exemplo `Clinica (edited).ifc`.

Seu arquivo original nunca é alterado. [Alterar propriedades IFC e salvar uma cópia editada](topic:edit-ifc-properties) explica a edição por completo.

## Para onde ir depois

- [A tela do BimCraft](topic:workspace): todos os painéis pelo nome.
- [Vindo de outros programas de BIM e desenho](topic:coming-from): o que parece diferente se você está acostumado com o Revit.
- [Abrir uma pasta de projeto inteira](topic:open-project-folder): aponte o BimCraft para uma pasta de projeto e deixe que ele organize os arquivos.
- [Ver um desenho DWG ou DXF](topic:view-dwg): folhas, camadas e vista de impressão.
