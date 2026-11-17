---
title: "Sistemas de fachada-cortina: paredes envidraçadas em grade, com montantes"
summary: Desenhe um sistema de fachada-cortina como uma parede ou aplique-o sobre uma face, depois defina suas linhas de grade e seus montantes. Ele é salvo como um IfcCurtainWall com seus painéis e montantes.
keywords: sistema de fachada-cortina, parede-cortina, grade de fachada, montante, envidraçamento, vitrine, parede de vidro, painel, vidro, por face, face, volume, linha de grade, espaçamento, perfil, travessa, IfcCurtainWall, IfcPlate, IfcMember
from: 99d6219c
---

## O que você vai fazer

Criar uma parede envidraçada de painéis entre montantes, alterar onde estão as linhas de grade e escolher quais linhas recebem um montante.

## Passos

1. Ative **Desenhar** e abra o menu **Construir** (em um layout de faixa de opções: a guia Arquitetura).
2. Escolha **Sistema de fachada-cortina**. Na linha dele defina o topo (o pavimento acima, ou uma altura), uma linha a cada tanto ao longo dele, uma linha a cada tanto para cima (deixe vazio para nenhuma), se ele recebe montantes e o perfil do montante.
3. Clique onde ele começa e onde termina, como ao desenhar uma parede. Shift mantém o traçado em ângulo reto.
4. Para alterar a grade, escolha **Grade da fachada-cortina** e clique no sistema:
   - **Adicionar uma linha**: uma linha vertical vai onde você clicar. Para uma linha horizontal, digite primeiro a altura em **Em**.
   - **Mover uma linha**: clique na linha e depois onde ela deve ir.
   - **Remover uma linha**: clique na linha.
   - **Definir por espaçamento**: digite o espaçamento em **A cada**, depois clique no sistema.
5. Para alterar os montantes, escolha **Montante**, indique o que ele atua (a linha vertical que você clicar, a linha horizontal numa altura, a borda ou todas as linhas), escolha **Colocar montantes** ou **Remover montantes** e um perfil, depois clique no sistema.
6. Selecione um sistema para ver tudo em **Propriedades**: cada linha de grade com sua posição, uma marca para o montante e um botão para removê-lo; o espaçamento; a borda; o perfil; a espessura do painel.

## Por face

**Por face** cria um sistema de fachada-cortina sobre uma face plana que você clica na vista 3D. Sua linha tem as mesmas configurações de grade e montantes.

- Funciona em qualquer face plana de qualquer elemento que a vista 3D mostra: um volume, uma parede, um piso, um plano de telhado, um pilar, um item posicionado. A face pode ser vertical, inclinada ou horizontal.
- O sistema segue o contorno da face. Uma empena ou outra forma irregular corta os painéis e montantes até ela.
- Ele pode criar uma **parede** no lugar, ao longo da base de uma face vertical e com a altura da face. Uma parede aqui sempre fica vertical, então uma face inclinada ou horizontal não pode gerar uma.
- Não cria um telhado. Um telhado no BimCraft é calculado a partir do contorno de um pavimento e de uma inclinação, não de uma única face.
- Uma face curva são muitas faces planas pequenas: um clique pega uma delas.
- Uma face com aberturas: o sistema cobre o contorno externo da face.

## Como é medido

- **Área bruta** é o contorno do sistema.
- **Área envidraçada** são os painéis como foram feitos: cada painel perde meia largura de montante de um lado com montante de grade, e uma largura inteira em um montante de borda.
- Um montante vertical atravessa de borda a borda. Um montante horizontal para em cada montante vertical e na borda. Os montantes de borda ficam dentro do contorno; onde dois se encontram, o mais vertical atravessa. As juntas são cortadas em esquadro, não em meio-esquadro.
- **Tabelas** tem uma lista **Sistemas de fachada-cortina** com esses números, quando o modelo tiver um.

## No arquivo IFC

Um IfcCurtainWall no seu pavimento, formado por um IfcPlate (painel de fachada) por painel e um IfcMember (montante) por trecho de montante, cada um com sua própria forma, material e quantidades base.

## Bom saber

- Qualquer tamanho é criado como você pedir. Só um contorno sem área é recusado, porque não há o que criar.
- Um sistema desenhado como parede mantém a altura com que foi desenhado. Se você mover um pavimento depois, defina a altura de novo em Propriedades.
- A ferramenta Mover ainda não move um sistema de fachada-cortina. Exclua-o e desenhe de novo, ou altere a grade no lugar.
- Desfazer retira cada etapa: o sistema inteiro, uma alteração de grade, uma alteração de montantes.
