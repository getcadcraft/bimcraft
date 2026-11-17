---
title: O plano de trabalho: defini-lo, mostrá-lo, olhar diretamente para ele
summary: O plano de trabalho é o plano usado pelas linhas do modelo, pelo texto do modelo e pelo Visualizador do Plano de Trabalho. Defina-o para um piso, uma face, um plano de referência com nome ou uma linha; mostre-o nas vistas; abra o visualizador para desenhar num plano vertical.
keywords: plano de trabalho, definir plano de trabalho, mostrar plano de trabalho, plano de referência, visualizador do plano de trabalho, plano com nome, face, piso, plano vertical, plano na vertical, desenhar numa parede, desenho de alçado, snap, alinhamento, plano de ref.
from: 8aceee1d
---

## O que vai fazer

Escolher o plano onde desenha, ver onde está e desenhar num plano que fica na vertical.

## Passos

1. Ative **Desenhar** e abra o menu **Construir** (num layout de friso: separador Arquitetura, Plano de trabalho).
2. Escolha **Definir plano de trabalho**. Depois faça uma destas ações:
   - escolha um piso em **Definir para**;
   - escolha um plano de referência com nome na lista ao lado;
   - clique numa linha da planta: uma parede, uma linha de grelha, um plano de referência, uma linha do modelo ou um sistema de cortina. O plano de trabalho passa a ser o plano vertical que passa por essa linha;
   - clique numa face plana na vista 3D. O plano de trabalho assenta nessa face.
3. Escolha **Mostrar plano de trabalho** para o ver: uma folha com cor e uma grelha métrica na vista 3D, um contorno ou linha a tracejado na planta, e um contorno a tracejado no painel de alçados e cortes. Escolha-o de novo para o ocultar.
4. Escolha **Visualizador do plano de trabalho** para olhar diretamente para o plano. As linhas pretas são o modelo cortado pelo plano. Utilize as respetivas ferramentas para desenhar uma linha do modelo, um texto do modelo ou um plano de referência sobre o plano. **Ver em 3D** roda a vista 3D para ficar de frente para o plano.

## Planos de referência

Um plano de referência é um plano com nome que se desenha como uma linha.

1. Escolha **Plano de referência**. Escreva um nome na respetiva linha, se o quiser (caso contrário, recebe um nome automaticamente), e uma altura.
2. Clique onde começa e onde termina. Na planta, isto cria um plano vertical. No Visualizador do plano de trabalho, cria um plano perpendicular ao plano de trabalho.
3. Aparece como uma linha verde a tracejado com o nome na planta, e como um contorno a tracejado na vista 3D e no painel de alçados e cortes.
4. Selecione-o para mudar o nome, alterar o comprimento, a altura e a base, ou carregue em **Usar como plano de trabalho**.

Dois planos de referência não podem ter o mesmo nome, porque é pelo nome que se escolhe um deles.

## Boas notas

- Um modelo sem plano de trabalho definido funciona no piso mais baixo.
- O plano de trabalho é guardado no ficheiro. Mostrá-lo ou ocultá-lo fica memorizado neste navegador, não no ficheiro.
- Se o plano de trabalho seguir um plano de referência e mover esse plano, o plano de trabalho move-se com ele.
- Num plano de trabalho vertical, as ferramentas Linha do modelo e Texto do modelo abrem o visualizador, porque uma planta não consegue apontar para uma altura.
- As ferramentas de desenho apanham as extremidades dos planos de referência desenhados na planta da mesma forma que apanham as extremidades de outras linhas no visualizador.

## No ficheiro IFC

- O plano de trabalho é um conjunto de propriedades (CadCraft_WorkPlane) no projeto.
- Um plano de referência é um IfcAnnotation com o tipo de objeto ReferencePlane e o seu nome. A sua forma é o contorno fechado do plano, para que outro programa mostre onde ele está. O seu conjunto CadCraft_ReferencePlane guarda a origem, a direção, a normal e a extensão. O IFC não tem classe para um plano de referência; uma anotação não é contada como elemento de construção e não delimita compartimentos.
