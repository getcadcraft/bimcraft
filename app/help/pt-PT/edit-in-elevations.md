---
title: Editar em alçados e cortes, formatos de folha, legendas e renomear
summary: Mover paredes, portas, janelas e níveis, e desenhar paredes, vãos, níveis, cotas e notas diretamente num alçado ou corte; manter os formatos de folha e as legendas como dados, e renomear famílias, tamanhos e elementos a partir do navegador do projeto.
keywords: novo nível em alçado, cota em alçado, editar em alçado, editar em corte, vista de alçado, vista de corte, mover parede em alçado, peitoril de janela, altura de nível, arrastar nível, desenhar parede em corte, notas em alçado, anotação, formato de folha, formato de folha personalizado, tamanho de papel, legenda, modelo de legenda, margem, campos, cliente, desenhado por, revisão, renomear família, renomear tipo, renomear elemento, navegador do projeto
from: 8726cf83
---

## O que vai fazer

Altere o edifício onde se vê de lado, configure as folhas que o seu escritório usa, e dê às famílias, tamanhos e elementos os nomes que quer.

## Editar num alçado ou corte

1. Ative {{ui:Desenhar}}. No {{ui:Navegador do projeto}}, abra {{ui:Alçados}} ou {{ui:Cortes}}.
2. Clique no botão de lápis {{ui:Editar nesta vista}} numa linha. A vista abre como as folhas a desenham, com o que pode alterar por cima.
3. Com {{ui:Selecionar e mover}}:
   - arraste uma parede virada para a vista, ao longo dela;
   - arraste uma porta ou janela ao longo da sua parede, e uma janela para cima ou para baixo para alterar o seu peitoril;
   - arraste a linha de um nível para cima ou para baixo para alterar a sua altura;
   - arraste uma nota.
4. {{ui:Porta}} e {{ui:Janela}}: clique numa parede onde devem ir (uma janela à altura em que clicar).
5. {{ui:Parede}} (cortes): clique onde começa e onde termina, no plano do corte; é desenhada no nível sob o seu primeiro clique, até ao nível seguinte.
6. {{ui:Nota}}: clique e escreva. As notas ficam guardadas no ficheiro e são desenhadas em todas as folhas que mostram a vista.
7. {{ui:Nível}}: clique à altura onde deve ficar um novo nível. Tem a altura da diferença até ao nível acima (3000 mm no topo); arraste a sua linha para a alterar. Um segundo nível a menos de 50 mm de outro é recusado.
8. {{ui:Cota}}: clique onde começa e onde termina. Os cliques apanham as arestas de parede, porta, janela e nível, e a cota é horizontal ou vertical, consoante o sentido em que mover. Fica guardada no ficheiro e é desenhada, com o seu comprimento, em todas as folhas que mostram a vista. Clique nela com {{ui:Selecionar e mover}} para a escolher.
9. {{ui:Eliminar}} ou a tecla Delete remove a parede, porta, janela, cota ou nota escolhida. Ctrl+Z anula a última alteração enquanto o painel estiver aberto. {{key:Esc}} volta a {{ui:Selecionar e mover}}.

Cada alteração é a mesma que a planta faz, num único passo de anulação: a planta, a vista 3D e as folhas acompanham.

## Formatos de folha e legendas

1. Abra uma folha ({{ui:Nova folha}}, ou uma das suas em {{ui:Folhas}}). Ao lado de {{ui:Papel}} estão {{ui:Legenda}} e {{ui:Formatos…}}.
2. {{ui:Papel}} lista todos os tamanhos padrão (de Letter a Arch E, de A4 a A0) e os seus próprios.
3. {{ui:Legenda}}: {{ui:Faixa (em baixo)}}, {{ui:Coluna (à direita)}} com os campos habituais, ou uma própria. Os campos da que escolher aparecem por baixo do nome da folha: escreva o cliente, quem desenhou, a revisão.
4. {{ui:Formatos…}} cria os seus: um tamanho de folha (nome, largura, altura, margem) e uma legenda (onde fica, a sua largura, os seus campos, um por linha; termine um campo com * para o tornar grande).
5. {{ui:Exportar}} guarda-os como ficheiro de biblioteca, e {{ui:Importar…}} adiciona um a outro modelo. Ficam guardados no modelo, por isso um modelo-tipo os transporta.

## Renomear famílias, tamanhos e elementos

1. No {{ui:Navegador do projeto}}, abra {{ui:Famílias}}.
2. O lápis ao lado de uma família renomeia-a; o tipo de cada tamanho recebe o novo nome.
3. Abra os tamanhos de uma família para renomear um tamanho, ou um elemento colocado a partir dele (até 40 por tamanho são listados).

Cada renomeação é um único passo de anulação.
