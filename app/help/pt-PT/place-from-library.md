---
title: Colocar equipamento e mobiliário a partir da biblioteca
summary: Encontre um item na Biblioteca, num ficheiro ou no desenho aberto, coloque-o num piso de um modelo IFC com uma pré-visualização fantasma, rode-o, ajuste-o a uma parede e guarde.
keywords: mover, rodar, arrastar, biblioteca, librarycraft, colocar, inserir, equipamento, mobiliário, bloco, família, item, catálogo, conteúdo, kcl, csv, gltf, obj, rfa, dwg, tipo ifc
from: 3dad5d4b
---

## O que vai fazer

Coloque um item da biblioteca num modelo IFC: um lava-loiça, uma mesa de trabalho, uma cadeira. O BimCraft escreve-o como um elemento IFC próprio, com um tipo, para que cada cópia do mesmo item partilhe um só conjunto de geometria, e os seus dados, número de item e licença acompanhem-no.

## Passos

1. Abra um modelo IFC.
2. Clique no separador {{ui:Biblioteca}} ao lado de {{ui:Propriedades}}, à direita, ou em {{ui:Biblioteca}} na barra de ferramentas acima do modelo.
3. Escolha uma origem:
   - **Símbolos integrados**: símbolos genéricos de planta de tubagem incluídos com o BimCraft sob Apache-2.0, disponíveis offline. Verifique as suas dimensões antes da obra. Para símbolos elétricos de planta e dispositivos elétricos IFC, use **Compilação › Elétrico**.
   - **Biblioteca**: a biblioteca CadCraft deste site. Os itens públicos não precisam de sessão iniciada.
   - **Este ficheiro**: os blocos de um desenho DWG ou DXF aberto. Um bloco dinâmico com estados de visibilidade é oferecido uma vez por estado, com o nome "Lava-loiça: Dupla cuba", desenhado apenas com os objetos desse estado.
   - **{{ui:Ficheiros…}}**: um ficheiro DWG, DXF, IFC, glTF/GLB, OBJ, RFA ou CSV no seu computador. É lido neste separador; nada é enviado.
   - **Outras fontes**: outra biblioteca que fale o mesmo formato de fonte. Adicione o seu endereço uma vez; fica guardado neste navegador.
4. Procure ou escolha uma categoria, e clique num cartão. O cartão mostra uma pré-visualização da planta, o nome, o fabricante e o modelo, a licença e a versão.
5. Clique em {{ui:Colocar na planta}} (na vista de Planta) ou {{ui:Colocar no modelo}} (na vista 3D). Em {{ui:Dividir}}, onde a planta e a vista 3D aparecem ambas, o botão é dividido: a sua ação principal é {{ui:Colocar na planta}}, e a seta na sua extremidade direita abre um menu com {{ui:Colocar no modelo}}. Ou arraste o cartão, ou a imagem nos detalhes do item, para a planta ou para a vista 3D: o item é colocado onde largar. Com uma caneta ou um dedo, mantenha o cartão premido por um momento e depois arraste.
6. Escolha o piso na barra de colocação. Na vista 3D, os pisos acima dele ficam ocultos enquanto coloca, e a vista volta-se para o topo; na planta, a planta já mostra esse piso. Escolher {{ui:Colocar no modelo}} apenas a partir da planta abre a vista 3D ao lado dela.
7. Mova o ponteiro sobre o modelo: uma caixa transparente mostra onde o item vai.
8. Prima {{key:R}} para o rodar 90°. Prima {{key:Tab}} (ou {{ui:Snap à parede}}) para encostar as suas costas à parede mais próxima, virado para a divisão.
9. Clique para colocar. Ou escreva a posição em **X, Y (mm)**, por exemplo `1200, 3400`, e prima {{key:Enter}}.

Um candeeiro ou outro item suspenso: defina **Montagem** como **No teto**. A parte de cima do item fica então ao nível da face inferior do teto sobre o ponto (ou à altura do piso, onde não há teto). Com um plano de teto na vista de planta, **Montagem** começa em **No teto**.

10. Responda à única pergunta: o **número do item** (o próximo número livre é preenchido), a quantidade e uma nota. Prima {{key:Enter}}.
11. Coloque mais, ou prima {{key:Esc}} para parar.
12. Clique em {{ui:Guardar como IFC}} para transferir a cópia editada.

## Planta ou modelo

O botão de colocar da Biblioteca segue a vista em que está, e muda logo que altera a vista (os botões {{ui:Planta}}, {{ui:Dividir}} e {{ui:3D}}, o teclado, abrir um ficheiro). A Planta mostra um botão, {{ui:Colocar na planta}}; a 3D mostra um botão, {{ui:Colocar no modelo}}; Dividir mostra o botão dividido, com {{ui:Colocar na planta}} como ação principal e {{ui:Colocar no modelo}} no seu menu. Ambas as formas usam a mesma barra de colocação e escrevem o mesmo elemento IFC: o ponteiro funciona na vista de planta numa, e na vista 3D na outra. Prima {{key:Esc}} em qualquer altura para parar.

Arrastar um cartão não tem tecla própria: o botão dividido, ou o botão simples, faz o mesmo com o teclado.

## Mover ou rodar um item colocado

Em {{ui:Desenhar}}, escolha o item na planta. Aparece uma pega quadrada no seu ponto de inserção e uma pega redonda ao lado.

- Arraste o item, ou a sua pega quadrada, para o mover. Ajusta-se como a ferramenta Parede (extremidades e faces das paredes); {{key:Shift}} mantém-no em esquadria com o sítio onde estava.
- Arraste a pega redonda para o rodar em passos de 15°. Mantenha {{key:Shift}} para passos de 1°.
- Prima {{key:R}} para o rodar 90°.
- Em **Propriedades** (também na vista 3D), escreva **X**, **Y** e **Rotação (°)**, ou clique em **Rodar 90°**.

Cada movimento é um passo de anular e é transmitido no Live TeamWork. O item mantém o seu número de item, os seus dados da biblioteca e a sua altura acima do nível. Ainda não implementado: arrastá-lo na vista 3D.

## O que deve ver

- O item no modelo, selecionado, com as suas propriedades à direita: uma caixa **Item da biblioteca** com a sua licença e atribuição, e os conjuntos `CadCraft_Placement`, `CadCraft_LibraryItem`, `CadCraft_Equipment` e, para itens de desenhos com etiquetas, `CadCraft_SourceAttributes`.
- "Colocado: *item* (item *n*)" na lista de alterações. {{key:Mod+Z}} anula-o.
- A linha de estado: "Colocado *item* como item *n*."

## Bom saber

- Alguns itens vêm em vários tamanhos ou opções: o cartão tem então uma escolha de **Variante**, e a que escolher é a que fica colocada. Ver [Colocar e trocar um item da biblioteca que tem variantes](topic:library-variants).
- Um item sem corpo 3D (um símbolo 2D) é colocado com uma caixa provisória; indica a sua altura quando for perguntado.
- Mais do mesmo: escolha um item colocado e use {{ui:Copiar}} e {{ui:Colar}}, ou {{key:Mod+D}}. Ver [Copiar, colar e duplicar itens da biblioteca](topic:copy-paste).
- Para começar cada colocação com snap à parede ativo, ative **Start with wall snap on** nas [definições do BimCraft](topic:settings). Os comprimentos são convertidos para as unidades do próprio modelo, sejam quais forem.
- **Entourage** (árvores, arbustos, pessoas, carros) também está na biblioteca: procure "árvore", "pessoa" ou "carro". São desenhados pela CadCraft (CC0) e mantêm as suas cores ao serem colocados (um tronco castanho, folhas verdes, janelas de carro transparentes), no BimCraft e noutros programas BIM. Aparecem nas [imagens renderizadas](topic:render).
- Num ficheiro IFC2X3, o corpo é escrito como um sólido facetado; em IFC4, como um conjunto de faces triangulado. Ambos abrem noutras ferramentas IFC.
- Um desenho (DWG ou DXF) não pode ser guardado aqui, por isso os itens são colocados apenas em modelos IFC. Use **Este ficheiro** num desenho para ver no que os seus blocos se tornariam.

## Itens na sua língua

Um item pode ter o seu nome, descrição e tipo noutras línguas. Quando os tem na língua definida no BimCraft (Definições › Geral › Idioma), a página do item mostra esses, com o nome dado pelo fabricante por baixo, e **Colocar** escreve o nome na sua língua no modelo, para que o mapa {{ui:Equipamento}} o liste assim. O item continua a ser o mesmo item: a verificação de atualizações e as trocas são feitas pelo próprio item, nunca pelo nome. Os itens sem tradução mantêm as suas próprias palavras.

## Erros comuns

- **O botão de colocar está em falta.** Não há nenhum modelo IFC aberto. Abra um primeiro.
- **O fantasma não segue o ponteiro.** O ponteiro está fora da área do modelo, ou o plano do piso não está visível. Clique em {{ui:Superior}}.
- **{{ui:Snap à parede}} diz que não há paredes.** O piso não tem paredes no IFC (algumas exportações põem as paredes noutro piso). Escolha esse piso, ou escreva X e Y.
- **Os itens de um ficheiro têm o tamanho errado.** O ficheiro não tem unidades, ou indica as erradas. Em {{ui:Ficheiros…}}, escolha as unidades e leia-o de novo.

:::tip
Colocar o mesmo item duas vezes partilha um só tipo IFC, por isso um modelo com quarenta cadeiras guarda a cadeira uma vez.
:::
