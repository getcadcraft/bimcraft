---
title: "Sistemas de parede-cortina: paredes envidraçadas numa grelha, com montantes"
summary: Desenhe um sistema de parede-cortina como uma parede ou coloque-o numa face, depois defina as suas linhas de grelha e os seus montantes. É guardado como IfcCurtainWall com os seus painéis e montantes.
keywords: sistema de parede-cortina, parede-cortina, grelha de parede-cortina, montante, envidraçamento, montra, parede de vidro, painel, vidro, por face, face, massa, linha de grelha, espaçamento, perfil, travessa, IfcCurtainWall, IfcPlate, IfcMember
from: 99d6219c
---

## O que vai fazer

Criar uma parede envidraçada de painéis entre montantes, alterar a posição das suas linhas de grelha e escolher quais as linhas que levam um montante.

## Passos

1. Ative **Desenhar** e abra o menu **Construir** (num layout de friso: o separador Arquitetura).
2. Escolha **Sistema de parede-cortina**. Na sua linha defina o topo (o piso acima, ou uma altura), uma linha a cada tanto ao longo dele, uma linha a cada tanto para cima (deixe vazio para nenhuma), se leva montantes, e o perfil do montante.
3. Clique onde começa e onde acaba, como ao desenhar uma parede. {{key:Shift}} mantém-no quadrado.
4. Para alterar a grelha, escolha **Grelha de parede-cortina** e clique no sistema:
   - **Adicionar uma linha**: uma linha vertical fica onde clicar. Para uma linha de piso, escreva primeiro a sua altura em **Em**.
   - **Mover uma linha**: clique na linha e depois onde deve ir.
   - **Remover uma linha**: clique na linha.
   - **Definir por espaçamento**: escreva o espaçamento em **Cada**, depois clique no sistema.
5. Para alterar os montantes, escolha **Montante**, indique em que atua (a linha vertical em que clicar, a linha de piso a uma altura, a moldura, ou todas as linhas), escolha **Colocar montantes** ou **Remover montantes** e um perfil, depois clique no sistema.
6. Selecione um sistema para ver tudo em **Propriedades**: cada linha da grelha com a sua posição, um visto para o seu montante e um botão para o remover; o espaçamento; a moldura; o perfil; a espessura do painel.

## Por face

**Por face** cria um sistema de parede-cortina numa face plana que clicar na vista 3D. A sua linha tem as mesmas definições de grelha e montantes.

- Funciona em qualquer face plana de qualquer elemento que a vista 3D mostre: uma massa, uma parede, um piso, um plano de cobertura, um pilar, um item colocado. A face pode ser vertical, inclinada ou horizontal.
- O sistema toma o contorno da face. Um tímpano ou outra forma irregular corta os painéis e os montantes a essa forma.
- Pode fazer uma **parede** em vez disso, ao longo da base de uma face vertical e com a altura da face. Aqui uma parede fica sempre vertical, por isso uma face inclinada ou horizontal não pode dar origem a uma.
- Não faz uma cobertura. Uma cobertura no BimCraft é calculada a partir do contorno de um piso e de uma inclinação, não de uma só face.
- Uma face curva são muitas pequenas faces planas: um clique toma uma delas.
- Uma face com vãos: o sistema cobre o contorno exterior da face.

## Como se mede

- **Área bruta** é o contorno do sistema.
- **Área de vidro** são os painéis tal como feitos: cada painel perde meia largura de montante por cada lado com um montante de grelha, e uma largura inteira num montante de moldura.
- Um montante vertical atravessa de moldura a moldura. Um montante horizontal para em cada montante vertical e na moldura. Os montantes de moldura ficam dentro do contorno; onde dois se encontram, o mais vertical atravessa. As juntas são cortadas a esquadro, não em meia-esquadria.
- **Mapas** tem uma lista **Sistemas de parede-cortina** com estes números quando o modelo tiver um.

## No ficheiro IFC

Um IfcCurtainWall no seu piso, composto por um IfcPlate (painel de parede-cortina) por painel e um IfcMember (montante) por troço de montante, cada um com a sua própria forma, material e quantidades de base.

## Bom saber

- Qualquer dimensão é feita como pede. Só é recusado um contorno sem área, porque não há nada para fazer.
- Um sistema desenhado como parede mantém a altura com que foi desenhado. Se mover um piso mais tarde, defina a sua altura de novo em Propriedades.
- A ferramenta Mover ainda não move um sistema de parede-cortina. Elimine-o e desenhe-o de novo, ou altere a sua grelha no próprio sistema.
- Anular retira cada passo: o sistema inteiro, uma alteração de grelha, uma alteração de montantes.
