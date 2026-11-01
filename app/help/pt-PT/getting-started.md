---
title: Primeiros passos com o BimCraft
summary: O que o BimCraft faz hoje, como abrir o primeiro modelo, vê-lo em 3D, alterar um valor e guardar uma cópia.
keywords: começar, primeira utilização, abrir, ifc, rvt, dwg, início rápido, introdução, visualizador, bim
from: fc2dea19
---

O BimCraft é a aplicação de modelos de edifícios da família CadCraft. Nesta versão **abre, lê e inspeciona** ficheiros de edifícios e **edita os dados dos modelos IFC**. Ainda não desenha nem modela elementos novos. Pense nele como um visualizador e verificador de modelos que também permite corrigir nomes, etiquetas e valores de propriedades num ficheiro IFC.

O que abre:

| Ficheiro | O que obtém |
|---|---|
| IFC (`.ifc`) | O modelo completo em 3D: órbita, pisos, propriedades dos elementos e edição de nomes e valores de propriedades |
| Ficheiros de projeto e de família (`.rvt`, `.rfa`, `.rte`, `.rft`) | Uma ficha do ficheiro: a versão em que foi guardado, informações do projeto, a imagem de pré-visualização e os ficheiros ligados. Sem 3D. |
| DWG e DXF | O desenho em 2D: espaço modelo e todas as folhas, camadas, desenhos referenciados, vista de impressão e um mapa de equipamento para desenhos de restauração com etiquetas |
| Uma pasta de projeto | Um relatório de todos os modelos da pasta: cópias de segurança, ligações, cópias danificadas e uma sugestão do ficheiro por onde começar |

Tudo acontece no navegador, no seu computador. **Nada é carregado para a Internet.** Consulte [Ficheiros que o BimCraft abre e guarda](topic:files) para os pormenores.

## Abrir o BimCraft

1. Abra o BimCraft num navegador atual. O Chrome, o Edge, o Firefox e o Safari funcionam; [Navegadores, dispositivos e memória](topic:platforms) lista as diferenças.
2. Aguarde pelo ecrã vazio que diz "Abra um modelo de edifício."

:::note
O BimCraft corre no navegador e, no ambiente de trabalho, dentro do CadCraft Studio, com as outras aplicações. A gravação na nuvem ainda não está disponível: abre ficheiros a partir do computador e guarda as cópias de volta nele.
:::

## Abrir o primeiro modelo

A forma mais rápida de ver o que o BimCraft faz é com um ficheiro IFC.

1. Clique em {{ui:Escolher um ficheiro}} no meio do ecrã.
2. Escolha um ficheiro `.ifc` {{pick:mac=no Finder|windows=no Explorador de Ficheiros|linux=no seu gestor de ficheiros}} e confirme.
3. Aguarde enquanto a linha de estado, em baixo no ecrã, diz "A iniciar o motor IFC…" e depois "A construir a geometria".

Deverá ver o modelo em 3D ao centro, um painel {{ui:Ficheiro}} e uma lista {{ui:Pisos}} à esquerda, e um painel {{ui:Propriedades}} vazio à direita. A linha de estado termina com o nome do ficheiro, "aberto", e o número de elementos.

:::tip
Também pode arrastar um ficheiro {{pick:mac=do Finder|windows=do Explorador de Ficheiros|linux=do seu gestor de ficheiros}} diretamente para a página. O ecrã mostra "Largue para abrir" enquanto arrasta.
:::

:::offline
O motor IFC é carregado a partir do site na primeira vez que abre um modelo IFC, a não ser que o BimCraft tenha sido guardado para utilização offline. Os desenhos DWG e DXF, os ficheiros de projeto e as pastas não precisam de mais nada: os respetivos leitores fazem parte da aplicação. Se o botão da barra da aplicação disser {{ui:Pronto para offline}}, tudo se abre offline. Se não, os modelos IFC não abrem até voltar a ligar-se, a menos que um já tenha sido aberto neste separador. Consulte [Online e offline](topic:online-offline).
:::

:::online
Vai para um sítio sem ligação? Clique em {{ui:Guardar para offline}} na barra da aplicação e aguarde por {{ui:Pronto para offline}}. A cópia guardada (cerca de 11 MB) inclui o motor IFC. Consulte [Trabalhar offline](common:offline).
:::

## Olhar à volta

:::mouse
1. Arraste com o botão esquerdo do rato para rodar à volta do modelo.
2. Rode a roda para aproximar ou afastar.
3. Arraste com o botão direito do rato para deslocar a vista. Num trackpad de Mac, mantenha {{key:Shift}} premido e arraste.
4. Prima {{key:F}} ou clique em {{ui:Ajustar}} para ver novamente o modelo todo.
:::

:::touch
1. Arraste com um dedo para rodar.
2. Junte ou afaste dois dedos para aproximar ou afastar, e mova os dois dedos em conjunto para deslocar a vista.
3. Toque em {{ui:Ajustar}} para ver novamente o modelo todo.
:::

## Fazer uma coisa a sério: corrigir uma etiqueta

1. Clique numa parede, numa porta ou em qualquer elemento do modelo. Fica azul e as suas propriedades aparecem à direita.
2. No painel {{ui:Propriedades}}, clique no valor junto a **Etiqueta**.
3. Escreva a nova etiqueta e prima {{key:Enter}}.
4. Veja a secção {{ui:Alterações}} que se abriu à esquerda: a sua alteração está listada com o valor antigo e o novo.

## Guardar uma cópia

1. Clique em {{ui:Guardar como IFC}} na secção {{ui:Alterações}}, ou prima {{key:Mod+S}}.
2. Encontre o novo ficheiro na pasta de transferências. Tem o nome do original com " (edited)" acrescentado, por exemplo `Clinic (edited).ifc`.

O ficheiro original nunca é alterado. [Alterar propriedades IFC e guardar uma cópia editada](topic:edit-ifc-properties) explica a edição por completo.

## Para onde ir a seguir

- [O ecrã do BimCraft](topic:workspace): cada painel, pelo nome.
- [Vindo de outros programas BIM e de desenho](topic:coming-from): o que se sente diferente se estiver habituado ao Revit.
- [Abrir uma pasta de projeto inteira](topic:open-project-folder): aponte o BimCraft para uma pasta de projeto e deixe-o arrumar os ficheiros.
- [Ver um desenho DWG ou DXF](topic:view-dwg): folhas, camadas e vista de impressão.
