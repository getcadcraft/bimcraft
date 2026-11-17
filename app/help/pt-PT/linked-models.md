---
title: Ligar outros modelos para coordenação
summary: Mostre outro modelo IFC ao lado do seu, por referência (nunca fundido), posicione-o por coordenadas partilhadas, coordenadas de mapa ou dois pontos, faça snap nele ao desenhar e recarregue-o quando o seu ficheiro mudar.
keywords: ligação, modelo ligado, referência, xref, coordenação, federação, estrutura, MEP, consultor, coordenadas partilhadas, levantamento, coordenadas de mapa, recarregar, descarregar, referência de documento, IfcDocumentReference
from: 3e0f1eab
---

## Objetivo

Desenhe sobre o modelo de um consultor (a estrutura, as instalações, o edifício existente) sem copiar nada para o seu ficheiro.

Um **modelo ligado** é mostrado na vista 3D e cortado nas suas plantas, mas nunca é alterado nem guardado no seu modelo. O modelo guarda apenas a ligação: o nome do ficheiro e onde fica.

## Ligar um modelo

1. No painel esquerdo, na secção {{ui:Modelos ligados}}, clique em {{ui:Ligar um modelo…}} e escolha o ficheiro IFC. Aparece de imediato, e a respetiva linha indica **Mostrado**.
2. Escolha onde fica em {{ui:Colocação}}:
   - **Coordenadas partilhadas** (para começar): as coordenadas são as suas, como quando os dois modelos foram implantados a partir da mesma origem.
   - **Coordenadas de mapa**: as coordenadas de mapa dos dois ficheiros alinham-nos (ambos precisam de uma conversão de mapa; o BimCraft avisa quando um deles não tem).
   - **Por dois pontos…**: clique num ponto do modelo ligado e depois no ponto correspondente no seu; depois, um segundo par. A ligação é deslocada e rodada (em torno da vertical) para encaixar.
3. Cada alteração de ligação ou de posicionamento é um passo: {{key:Mod+Z}} anula-a.

## Trabalhar com o modelo

- As plantas mostram o modelo ligado cortado à altura de corte do piso, em linhas finas, e a ferramenta {{ui:Parede}} e as outras ferramentas de desenho fazem snap aos seus cantos e arestas.
- Selecione os seus elementos na vista 3D para ler as propriedades; um modelo ligado nunca é o que se edita, por isso o respetivo botão de opção em {{ui:Modelos}} está desligado.
- **O ficheiro mudou?** Quando o navegador consegue vigiar o ficheiro (um ficheiro aberto pelo seletor de ficheiros do navegador, ou no Studio), o BimCraft recarrega a ligação sozinho, alguns segundos depois de o ficheiro voltar a ser guardado, e indica-o. Caso contrário, clique em {{ui:Recarregar}}.
- {{ui:Descarregar}} oculta-o e liberta a memória; a ligação fica no seu modelo. {{ui:Carregar…}} mostra-o de novo (escolhe o ficheiro: um navegador não consegue abrir um ficheiro apenas pelo nome).
- O × remove a ligação do seu modelo.

## Resultado esperado

- No seu ficheiro IFC: um IfcDocumentReference por cada ligação (o nome do ficheiro), associado ao projeto, e onde fica no conjunto de propriedades do projeto CadCraft_Links. Ao abrir de novo o seu modelo, as ligações aparecem como **Não carregado** até as carregar.

:::note
Verificações de conflitos, Comparar e Procurar podem usar uma ligação carregada como qualquer outro modelo aberto: ver [Ver vários modelos IFC em conjunto](topic:several-models).
:::
