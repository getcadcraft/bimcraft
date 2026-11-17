---
title: Poços e aberturas através dos pisos
summary: Um poço é um só contorno que corta todos os pisos, tetos e coberturas entre dois níveis. Uma abertura vertical corta um deles. Vão na parede corta uma parede.
keywords: poço, poço de elevador, abertura de escada, degrau, espelho, abertura vertical, abertura no piso, abertura no teto, abertura na cobertura, abertura de clarabóia, furo no piso, vão na parede, IfcOpeningElement, dedução, área líquida
from: 8e9e1641
---

## O que vai fazer

Corte um poço de elevador através de um edifício com um só esboço, corte um furo num piso e leia o que foi retirado das áreas.

## Onde estão as ferramentas

- Layouts em friso: {{ui:Arquitetura}} › **Abertura** › {{ui:Poço}}, {{ui:Abertura vertical}} e {{ui:Vão na parede}}.
- Layout clássico: a barra Desenhar › menu {{ui:Compartimentos}} (Poço, Abertura vertical) e › menu {{ui:Paredes}} (Vão na parede).

## Um poço

1. Abra a planta do piso em que o poço começa. Escolha {{ui:Poço}}.
2. Na linha, escolha o {{ui:Piso de base}} e o {{ui:Piso do topo}}, e os offsets se começar ou acabar acima ou abaixo deles.
3. Clique nos cantos do contorno. Clique de novo no primeiro canto, faça duplo clique ou prima {{key:Enter}} para terminar.
4. Cada piso, teto e cobertura entre as duas alturas é cortado. A linha de estado indica quantos.

Um poço é uma só entidade. Escolha o seu contorno em qualquer piso que atravesse: as Propriedades têm o seu nome, níveis e offsets, o que corta e a área retirada. Altere-o e todas as aberturas o seguem. Elimine-o e todas as aberturas desaparecem. Cada uma é um passo de anulação.

Continua a cortar: um piso criado mais tarde entre os seus níveis é cortado sem ser pedido, e um piso que eliminar deixa de ser cortado.

O piso sobre o qual o poço assenta não é cortado (o seu topo é a base). Dê à base um offset negativo para o cortar também. Dê ao topo um offset positivo para atravessar a cobertura.

## Uma abertura vertical

1. Escolha {{ui:Abertura vertical}}. Na linha, escolha o que cortar: o piso, o teto ou a cobertura.
2. Clique nos cantos do contorno e termine como acima.
3. O piso, o teto ou a cobertura deste nível sob o contorno é cortado. Pertence a esse único elemento: se eliminar o piso, a abertura vai com ele.

## Um vão na parede

{{ui:Vão na parede}} é a ferramenta de [Dar forma a uma parede](topic:wall-shape): clique numa parede na planta, ou em dois cantos da sua face em 3D.

## Quantidades

Pela regra de medição de pisos, a área líquida de um elemento é a sua área bruta menos o que lhe é retirado. Um poço ou uma abertura vertical é uma dedução em cada piso e teto que corta; os mapas de Pisos e acabamentos e as quantidades IFC mostram os mesmos números. Numa cobertura, a dedução é a área da superfície da cobertura: a área em planta a dividir pelo cosseno do declive.

Um contorno que ultrapassa a borda deduz apenas a parte que fica sobre o elemento.

## Se não for cortado nada

Um poço sem nada no seu caminho é criado na mesma, e diz isso: cortará o que for construído ali mais tarde. Uma abertura vertical precisa de algo por baixo; sem nada ali, a linha de estado indica-o e nada é criado.

## No IFC

Cada corte é um IfcOpeningElement com IfcRelVoidsElement para o elemento que corta, por isso qualquer programa IFC mostra o furo. Uma cobertura é cortada face a face. O próprio poço é um IfcGroup das suas aberturas.

## Ainda não implementado

- Contornos curvos.
- As paredes de um poço: desenhe-as com a ferramenta Parede.
- Editar o contorno arrastando os seus cantos (altere-o nas Propriedades, ou elimine e esboce de novo).
- As Propriedades de um piso desenhado mostram apenas a área menos as suas próprias aberturas; os mapas e as quantidades IFC incluem as do poço.

Ver também [Compartimentos e divisórias](topic:rooms-and-separators).
