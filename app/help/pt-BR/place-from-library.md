---
title: Posicionar equipamentos e mobiliário a partir da biblioteca
summary: Encontre um item na Biblioteca, um arquivo ou o desenho aberto, posicione-o em um pavimento de um modelo IFC com uma pré-visualização fantasma, gire-o, encaixe-o em uma parede e salve.
keywords: mover, girar, arrastar, biblioteca, librarycraft, posicionar, inserir, equipamento, mobiliário, bloco, família, item, catálogo, conteúdo, kcl, csv, gltf, obj, rfa, dwg, tipo ifc
from: 3dad5d4b
---

## O que você vai fazer

Coloque um item da biblioteca em um modelo IFC: uma pia, uma mesa de trabalho, uma cadeira. O BimCraft o grava como um elemento IFC adequado, com um tipo, de modo que cada cópia do mesmo item compartilha um só conjunto de geometria, e os seus dados, o número do item e a licença vão junto.

## Passos

1. Abra um modelo IFC.
2. Clique na aba {{ui:Biblioteca}} ao lado de {{ui:Propriedades}}, à direita, ou em {{ui:Biblioteca}} na barra de ferramentas acima do modelo.
3. Escolha uma fonte:
   - **Símbolos integrados**: símbolos genéricos de planta hidráulica incluídos com o BimCraft sob Apache-2.0, disponíveis offline. Confira as dimensões antes da obra. Para símbolos elétricos de planta e dispositivos elétricos IFC, use **Build › Elétrica**.
   - **Biblioteca**: a Biblioteca CadCraft deste site. Itens públicos não exigem entrar na conta.
   - **Este arquivo**: os blocos de um desenho DWG ou DXF aberto. Um bloco dinâmico com estados de visibilidade é oferecido uma vez por estado, nomeado "Pia: cuba dupla", e cada um é desenhado só com os objetos desse estado.
   - **Arquivos…**: um arquivo DWG, DXF, IFC, glTF/GLB, OBJ, RFA ou CSV no seu computador. Ele é lido nesta aba; nada é enviado.
   - **Outras fontes**: outra biblioteca que fale o mesmo formato de feed. Adicione o endereço dela uma vez; ele fica guardado neste navegador.
4. Pesquise ou escolha uma categoria, depois clique em um cartão. O cartão mostra uma pré-visualização da planta, o nome, o fabricante e o modelo, a licença e a versão.
5. Clique em {{ui:Posicionar na planta}} (na vista Planta) ou em {{ui:Posicionar no modelo}} (na vista 3D). Em {{ui:Dividir}}, onde a planta e a vista 3D aparecem juntas, o botão é dividido: a ação principal é {{ui:Posicionar na planta}}, e a seta à direita abre um menu com {{ui:Posicionar no modelo}}. Ou arraste o cartão, ou a imagem nos detalhes do item, para a planta ou a vista 3D: o item é posicionado onde você soltar. Com caneta ou dedo, pressione e segure o cartão por um momento, depois arraste.
6. Escolha o pavimento na barra de posicionamento. Na vista 3D, os pavimentos acima dele ficam ocultos enquanto você posiciona, e a vista vai para o topo; na planta, a planta já mostra esse pavimento. Escolher {{ui:Posicionar no modelo}} só a partir da planta abre a vista 3D ao lado dela.
7. Mova o ponteiro sobre o modelo: uma caixa translúcida mostra onde o item vai.
8. Pressione {{key:R}} para girá-lo 90°. Pressione {{key:Tab}} (ou {{ui:Snap de parede}}) para encostar as costas dele na parede mais próxima, voltado para o cômodo.
9. Clique para posicioná-lo. Ou digite a posição em **X, Y (mm)**, por exemplo `1200, 3400`, e pressione {{key:Enter}}.

Uma luminária ou qualquer coisa suspensa do teto: defina **Fixação** como **No teto**. A parte superior do item fica então na face inferior do forro, sobre o ponto (ou na altura do nível, onde não há forro). Com uma planta de forro na vista Planta, **Fixação** começa em **No teto**.

10. Responda à pergunta: o **número do item** (o próximo número livre é preenchido), a quantidade e uma nota. Pressione {{key:Enter}}.
11. Posicione mais, ou pressione {{key:Esc}} para parar.
12. Clique em {{ui:Salvar como IFC}} para baixar a cópia editada.

## Planta ou modelo

O botão de posicionar da Biblioteca segue a vista em que você está, e muda assim que você muda de vista (os botões {{ui:Planta}}, {{ui:Dividir}} e {{ui:3D}}, o teclado, abrir um arquivo). Planta mostra um botão, {{ui:Posicionar na planta}}; 3D mostra um botão, {{ui:Posicionar no modelo}}; Dividir mostra o botão dividido, com {{ui:Posicionar na planta}} como ação principal e {{ui:Posicionar no modelo}} no menu. Os dois jeitos usam a mesma barra de posicionamento e gravam o mesmo elemento IFC: o ponteiro trabalha na vista da planta em um caso, e na vista 3D no outro. Pressione {{key:Esc}} a qualquer momento para parar.

Arrastar um cartão não tem atalho próprio: o botão dividido, ou o botão simples, faz o mesmo com o teclado.

## Mover ou girar um item posicionado

Em {{ui:Desenhar}}, escolha o item na planta. Um grip quadrado aparece no seu ponto de inserção, e um grip redondo ao lado.

- Arraste o item, ou o seu grip quadrado, para movê-lo. Ele encaixa como a ferramenta Parede (extremidades e faces de paredes); {{key:Shift}} o mantém alinhado com a posição anterior.
- Arraste o grip redondo para girá-lo em passos de 15°. Segure {{key:Shift}} para passos de 1°.
- Pressione {{key:R}} para girá-lo 90°.
- Em **Propriedades** (também na vista 3D), digite **X**, **Y** e **Rotação (°)**, ou clique em **Girar 90°**.

Cada movimento é uma etapa de {{ui:Desfazer}} e é transmitido no Live TeamWork. O item mantém o seu número, os seus dados da biblioteca e a sua altura acima do nível. Ainda não implementado: arrastá-lo na vista 3D.

## O que você deve ver

- O item no modelo, selecionado, com as suas propriedades à direita: uma caixa **Item da biblioteca** com a sua licença e atribuição, e os conjuntos `CadCraft_Placement`, `CadCraft_LibraryItem`, `CadCraft_Equipment` e, para itens de desenhos com etiquetas, `CadCraft_SourceAttributes`.
- "Posicionado: *item* (item *n*)" na lista de alterações. {{key:Mod+Z}} desfaz.
- A linha de status: "Posicionado *item* como item *n*."

## Boas práticas

- Alguns itens vêm em vários tamanhos ou opções: o cartão então tem uma escolha de **Variante**, e a que você escolher é a posicionada. Veja [Posicionar e trocar um item da biblioteca que tem variantes](topic:library-variants).
- Um item sem corpo 3D (um símbolo 2D) é posicionado com uma caixa provisória; você informa a altura dela quando for perguntado.
- Mais do mesmo: escolha um item posicionado e use {{ui:Copiar}} e {{ui:Colar}}, ou {{key:Mod+D}}. Veja [Copiar, colar e duplicar itens da biblioteca](topic:copy-paste).
- Para começar todo posicionamento com snap de parede ativo, ative **Começar com snap de parede ativo** em [Configurações do BimCraft](topic:settings).
- Os comprimentos são convertidos para as unidades do próprio modelo, sejam quais forem.
- **Entourage** (árvores, arbustos, pessoas, carros) também está na biblioteca: pesquise por "tree", "person" ou "car". Eles são desenhados pela CadCraft (CC0) e mantêm as suas cores quando posicionados (um tronco marrom, folhas verdes, janelas de carro transparentes), no BimCraft e em outros programas BIM. Aparecem em [imagens renderizadas](topic:render).
- Em um arquivo IFC2X3 o corpo é gravado como um sólido facetado; em IFC4, como um conjunto de faces triangulado. Ambos abrem em outras ferramentas IFC.
- Um desenho (DWG ou DXF) não pode ser salvo aqui, então os itens são posicionados somente em modelos IFC. Use **Este arquivo** em um desenho para ver em que se tornariam os blocos dele.

## Itens no seu idioma

Um item pode trazer o seu nome, descrição e tipo em outros idiomas. Quando os tem no idioma em que o BimCraft está configurado (Configurações › Geral › Idioma), a página do item mostra esses, com o nome que o fabricante deu embaixo, e **Posicionar** grava o nome no seu idioma no modelo, de modo que a tabela de {{ui:Equipamentos}} o lista assim. O item continua sendo o mesmo item: a verificação de atualizações e a troca se baseiam no próprio item, nunca no nome. Itens sem tradução mantêm as suas próprias palavras.

## Erros comuns

- **O botão de posicionar não aparece.** Nenhum modelo IFC está aberto. Abra um primeiro.
- **O fantasma não acompanha o ponteiro.** O ponteiro está fora da área do modelo, ou o plano do pavimento está fora da vista. Clique em {{ui:Superior}}.
- **{{ui:Snap de parede}} diz que não há paredes.** O pavimento não tem paredes no IFC (algumas exportações põem paredes em outro pavimento). Escolha esse pavimento, ou digite X e Y.
- **Os itens de um arquivo estão com o tamanho errado.** O arquivo não tem unidades, ou informa as erradas. Em {{ui:Arquivos…}} escolha as unidades e leia de novo.

:::tip
Posicionar o mesmo item duas vezes compartilha um só tipo IFC, então um modelo com quarenta cadeiras guarda a cadeira uma vez.
:::
