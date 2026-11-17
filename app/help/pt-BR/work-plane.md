---
title: O plano de trabalho: defina, mostre, olhe de frente para ele
summary: O plano de trabalho é o plano usado pelas linhas de modelo, pelo texto de modelo e pelo Visualizador de plano de trabalho. Defina-o em um nível, uma face, um plano de referência nomeado ou uma linha; mostre-o nas vistas; abra o visualizador para desenhar em um plano vertical.
keywords: plano de trabalho, definir plano de trabalho, mostrar plano de trabalho, plano de referência, visualizador de plano de trabalho, plano nomeado, face, nível, plano vertical, desenhar em uma parede, desenho de elevação, snap, alinhamento, plano de ref.
from: 8aceee1d
---

## O que você vai fazer

Escolha o plano em que você desenha, veja onde ele está e desenhe em um plano que fica em pé (vertical).

## Passos

1. Ative **Desenhar** e abra o menu **Construir** (em um layout de faixa de opções: a guia Arquitetura, Plano de trabalho).
2. Escolha **Definir plano de trabalho**. Depois faça uma das opções:
   - escolha um nível em **Definir como**;
   - escolha um plano de referência nomeado na lista ao lado;
   - clique em uma linha na planta: uma parede, uma linha de grade, um plano de referência, uma linha de modelo ou um sistema de cortina. O plano de trabalho passa a ser o plano vertical que passa por essa linha;
   - clique em uma face plana na vista 3D. O plano de trabalho fica sobre essa face.
3. Escolha **Mostrar plano de trabalho** para vê-lo: uma lâmina colorida com grade em metros na vista 3D, um contorno ou linha tracejada na planta e um contorno tracejado no painel de elevação e corte. Escolha de novo para ocultá-lo.
4. Escolha **Visualizador de plano de trabalho** para olhar de frente para o plano. As linhas pretas são o modelo cortado pelo plano. Use as ferramentas dele para desenhar uma linha de modelo, um texto de modelo ou um plano de referência sobre o plano. **Olhar de frente em 3D** gira a vista 3D para ficar de frente para o plano.

## Planos de referência

Um plano de referência é um plano nomeado que você desenha como uma linha.

1. Escolha **Plano de referência**. Digite um nome na linha dele, se quiser (caso contrário, ele recebe um nome automaticamente), e uma altura.
2. Clique onde ele começa e onde termina. Na planta, isso cria um plano vertical. No Visualizador de plano de trabalho, cria um plano perpendicular ao plano de trabalho.
3. Ele aparece como uma linha tracejada verde com o nome na planta, e como um contorno tracejado na vista 3D e no painel de elevação e corte.
4. Selecione-o para renomear, alterar o comprimento, a altura e a base dele, ou clique em **Usar como plano de trabalho**.

Dois planos de referência não podem ter o mesmo nome, porque é pelo nome que você escolhe um deles.

## Bom saber

- Um modelo sem plano de trabalho definido funciona no nível mais baixo.
- O plano de trabalho é salvo no arquivo. Mostrar ou ocultar o plano fica registrado neste navegador, não no arquivo.
- Se o plano de trabalho segue um plano de referência e você move esse plano, o plano de trabalho se move junto.
- Em um plano de trabalho vertical, as ferramentas Linha de modelo e Texto de modelo abrem o visualizador, porque uma planta não consegue apontar para uma altura.
- As ferramentas de desenho capturam as extremidades dos planos de referência desenhados na planta da mesma forma que capturam as extremidades de outras linhas no visualizador.

## No arquivo IFC

- O plano de trabalho é um conjunto de propriedades (CadCraft_WorkPlane) no projeto.
- Um plano de referência é um IfcAnnotation com o tipo de objeto ReferencePlane e o nome dele. A forma é o contorno fechado do plano, para que outro programa mostre onde ele está. O conjunto CadCraft_ReferencePlane guarda a origem, a direção, a normal e a extensão. O IFC não tem classe para plano de referência; uma anotação não é contada como elemento de construção e não delimita ambientes.
