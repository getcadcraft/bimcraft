---
title: Editar em elevações e cortes, tamanhos de folha, legendas e renomeação
summary: Mova paredes, portas, janelas e níveis e desenhe paredes, aberturas, níveis, cotas e observações diretamente em uma elevação ou um corte, mantenha os seus próprios tamanhos de folha e legendas como dados, e renomeie famílias, tamanhos e elementos pelo navegador de projeto.
keywords: novo nível na elevação, cota na elevação, editar na elevação, editar no corte, vista de elevação, vista de corte, mover parede na elevação, peitoril de janela, altura de nível, arrastar nível, desenhar parede no corte, observações na elevação, anotação, tamanho de folha, tamanho de papel personalizado, tamanho de papel, legenda, modelo de legenda, formato de folha, borda, campos, cliente, desenhado por, revisão, renomear família, renomear tipo, renomear elemento, navegador de projeto
from: 8726cf83
---

## O que você vai fazer

Altere o edifício onde você o vê de lado, configure as folhas que o seu escritório usa, e dê às famílias, tamanhos e elementos os nomes que você quer.

## Editar em uma elevação ou um corte

1. Ative {{ui:Draw}}. No {{ui:Project browser}}, abra {{ui:Elevations}} ou {{ui:Sections}}.
2. Clique no botão de lápis {{ui:Edit in this view}} em uma linha. A vista abre como as folhas a desenham, com o que você pode alterar por cima.
3. Com {{ui:Select and move}}:
   - arraste uma parede que fica de frente para a vista, ao longo dela;
   - arraste uma porta ou janela ao longo da sua parede, e uma janela para cima ou para baixo para alterar o seu peitoril;
   - arraste a linha de um nível para cima ou para baixo para alterar a sua altura;
   - arraste uma observação.
4. {{ui:Door}} e {{ui:Window}}: clique em uma parede onde ela deve ir (uma janela na altura em que você clicar).
5. {{ui:Wall}} (cortes): clique onde ela começa e onde termina no plano do corte; ela é desenhada no nível sob o seu primeiro clique, até o próximo nível.
6. {{ui:Note}}: clique e escreva. As observações são mantidas no arquivo e desenhadas em todas as folhas que mostram a vista.
7. {{ui:Level}}: clique na altura onde um novo nível deve ir. Ele tem a altura da distância até o nível acima (3000 mm no topo); arraste a sua linha para alterá-la. Um segundo nível a menos de 50 mm de outro é recusado.
8. {{ui:Dimension}}: clique onde ela começa e onde termina. Os cliques capturam as bordas de paredes, portas, janelas e níveis, e a cota é horizontal ou vertical, conforme a direção em que você mover. Ela é mantida no arquivo e desenhada, com o seu comprimento, em todas as folhas que mostram a vista. Clique nela com {{ui:Select and move}} para selecioná-la.
9. {{ui:Delete}} ou a tecla Delete remove a parede, porta, janela, cota ou observação selecionada. Ctrl+Z desfaz a última alteração enquanto o painel está aberto. Esc volta a {{ui:Select and move}}.

Cada alteração é a mesma alteração que a planta faz, uma etapa de desfazer: a planta, a vista 3D e as folhas acompanham.

## Tamanhos de folha e legendas

1. Abra uma folha ({{ui:New sheet}}, ou uma das suas em {{ui:Sheets}}). Ao lado de {{ui:Paper}} estão {{ui:Title block}} e {{ui:Formats…}}.
2. {{ui:Paper}} lista cada tamanho padrão (Letter até Arch E, A4 até A0) e os seus próprios.
3. {{ui:Title block}}: {{ui:Strip (bottom)}}, {{ui:Column (right)}} com os campos usuais, ou os seus próprios. Os campos do que você escolher aparecem sob o nome da folha: digite o cliente, quem desenhou, a revisão.
4. {{ui:Formats…}} cria os seus próprios: um tamanho de folha (nome, largura, altura, borda) e uma legenda (onde fica, a sua largura, os seus campos, um por linha; termine um campo com * para torná-lo grande).
5. {{ui:Export}} os salva como arquivo de biblioteca, e {{ui:Import…}} adiciona um a outro modelo. Eles são mantidos no modelo, então um modelo-padrão os leva junto.

## Renomear famílias, tamanhos e elementos

1. No {{ui:Project browser}}, abra {{ui:Families}}.
2. O lápis ao lado de uma família a renomeia; o tipo de cada tamanho recebe o novo nome.
3. Abra os tamanhos de uma família para renomear um tamanho, ou um elemento inserido a partir dele (até 40 por tamanho são listados).

Cada renomeação é uma etapa de desfazer.
