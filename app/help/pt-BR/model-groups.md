---
title: Grupos de modelo
summary: Torne os elementos escolhidos um grupo com nome, coloque o grupo de novo em outro lugar e altere uma cópia para alterar todas elas.
keywords: grupo, grupo de modelo, agrupamento, desagrupar, instância, cópia, repetir, unidade típica, vão, apartamento, editar grupo, IfcGroup
from: 121c5027
---

## O que você vai fazer

Agrupe um vão típico, coloque-o várias vezes e altere todas as cópias alterando uma só.

## Onde fica a ferramenta

- Layouts em faixa de opções: {{ui:Architecture}} › **Modelo** › {{ui:Model Group}}.
- Layout clássico: a barra Desenhar › menu {{ui:Rooms}} › Grupo de modelo.

## Passos

1. Com Selecionar, escolha os elementos: clique em um e use Ctrl+clique ou Shift+clique nos outros.
2. Escolha {{ui:Model Group}}. Eles viram um grupo imediatamente. Digite um {{ui:Group name}} na linha antes para dar nome a ele, ou digite depois para renomeá-lo.
3. Pressione {{ui:Place another}} e clique onde a cópia deve ficar: o canto inferior esquerdo dela vai para o ponto clicado.
4. Altere qualquer cópia: mova a extremidade de uma parede, redimensione uma porta, apague um pilar. Todas as outras cópias do grupo mudam na mesma etapa, e um Desfazer desfaz tudo de uma vez.
5. Enquanto Grupo de modelo estiver ativo, um clique em um elemento escolhe o grupo inteiro.

## Outras coisas que você pode fazer

- {{ui:Add the picked}}: adiciona mais elementos ao grupo escolhido por último.
- {{ui:Ungroup}}: esta cópia volta a ser elementos comuns. As outras cópias continuam sendo um grupo.
- Mova uma cópia inteira com Mover: ela é o mesmo grupo em um novo lugar; as outras não se movem.
- Apague os elementos de uma cópia e essa cópia desaparece.

## O que pode estar em um grupo

Paredes com suas portas e janelas, pilares e pisos desenhados podem ser colocados de novo e mantidos iguais. Um grupo também pode conter outros elementos, mas, nesse caso, ele ainda não pode ser colocado de novo; a linha informa o motivo.

As cópias são movidas, não giradas nem espelhadas.

## No IFC

Um grupo é um IfcGroup com um IfcRelAssignsToGroup para os seus membros, que continuam sendo paredes, pilares e pisos comuns. Cada cópia de um mesmo grupo carrega o mesmo id de definição.

## Ainda não implementado

- Girar ou espelhar uma cópia.
- Escadas, telhados, pisos de ambientes e itens da biblioteca em um grupo que é colocado de novo.
- O perfil, a inclinação e as aberturas de uma parede não são levados para as cópias.
- Grupos dentro de grupos.

Veja também [Mover, alinhar e distribuir](topic:move-align-distribute).
