---
title: Vincule outros modelos para coordenação
summary: Mostre outro modelo IFC ao lado do seu, por referência (nunca mesclado), posicione-o por coordenadas compartilhadas, coordenadas de mapa ou dois pontos, use snap nele ao desenhar e recarregue-o quando o arquivo mudar.
keywords: vínculo, modelo vinculado, referência, xref, coordenação, federação, estrutura, MEP, consultor, coordenadas compartilhadas, levantamento, coordenadas de mapa, recarregar, descarregar, referência de documento, IfcDocumentReference
from: 3e0f1eab
---

## O que você vai fazer

Desenhe sobre o modelo de um consultor (a estrutura, as instalações, o edifício existente) sem copiar nada para o seu arquivo.

Um **modelo vinculado** aparece na vista 3D e é cortado nas suas plantas, mas nunca é alterado nem salvo no seu modelo. Seu modelo guarda apenas o vínculo: o nome do arquivo e onde ele fica.

## Vincular um modelo

1. Na seção {{ui:Modelos vinculados}} do painel esquerdo, clique em {{ui:Vincular um modelo…}} e escolha o arquivo IFC. Ele aparece de imediato, e sua linha mostra **Exibido**.
2. Escolha onde ele fica em {{ui:Posicionamento}}:
   - **Coordenadas compartilhadas** (inicialmente): as coordenadas dele são as suas, como quando os dois modelos foram locados a partir da mesma origem.
   - **Coordenadas de mapa**: as coordenadas de mapa dos dois arquivos os alinham (ambos precisam de uma conversão de mapa; o BimCraft avisa quando um deles não tem).
   - **Por dois pontos…**: clique em um ponto no modelo vinculado e depois no ponto correspondente no seu; em seguida, um segundo par. O vínculo é movido e girado (em torno da vertical) para se ajustar.
3. Cada vínculo e cada mudança de posição é uma etapa: {{key:Mod+Z}} a desfaz.

## Trabalhar com o vínculo

- As plantas mostram o modelo vinculado cortado na altura de corte do nível, em linhas finas, e a ferramenta {{ui:Parede}} e as demais ferramentas de desenho fazem snap nos seus cantos e arestas.
- Selecione os elementos dele na vista 3D para ler suas propriedades; um modelo vinculado nunca é o que você edita, por isso o botão de opção dele em {{ui:Modelos}} fica desligado.
- **O arquivo mudou?** Quando o navegador consegue acompanhar o arquivo (um arquivo aberto pelo seletor de arquivos dele, ou no Studio), o BimCraft recarrega o vínculo sozinho alguns segundos depois que o arquivo é salvo de novo, e avisa. Caso contrário, clique em {{ui:Recarregar}}.
- {{ui:Descarregar}} oculta o modelo e libera a memória; o vínculo continua no seu modelo. {{ui:Carregar…}} o exibe de novo (você escolhe o arquivo, pois um navegador não consegue abrir um arquivo pelo nome por conta própria).
- O × remove o vínculo do seu modelo.

## O que você deve ver

- No seu arquivo IFC: um IfcDocumentReference para cada vínculo (o nome do arquivo), associado ao projeto, e a posição de cada um no conjunto de propriedades CadCraft_Links do projeto. Ao abrir o modelo de novo, os vínculos aparecem como **Não carregado** até que você os carregue.

:::note
Verificações de interferência, Comparar e Buscar podem usar um vínculo carregado como qualquer outro modelo aberto: veja [Veja vários modelos IFC juntos](topic:several-models).
:::
