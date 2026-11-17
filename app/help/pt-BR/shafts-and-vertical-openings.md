---
title: Shafts e aberturas nos pisos
summary: Um shaft é um único contorno que corta todos os pisos, forros e telhados entre dois níveis. Uma abertura vertical corta um deles. Abertura em parede corta uma parede.
keywords: shaft, poço de elevador, poço do elevador, abertura de escada, espelho, abertura vertical, abertura no piso, abertura no forro, abertura no telhado, abertura de claraboia, furo no piso, abertura em parede, IfcOpeningElement, dedução, área líquida
from: 8e9e1641
---

## O que você vai fazer

Cortar um poço de elevador através de um edifício com um único esboço, fazer um furo em um piso e ler o que foi retirado das áreas.

## Onde estão as ferramentas

- Layouts de faixa de opções: {{ui:Arquitetura}} › **Abertura** › {{ui:Shaft}}, {{ui:Abertura vertical}} e {{ui:Abertura em parede}}.
- Layout clássico: na barra Desenhar, menu {{ui:Ambientes}} (Shaft, Abertura vertical) e menu {{ui:Paredes}} (Abertura em parede).

## Um shaft

1. Abra a planta baixa do nível em que o shaft começa. Escolha {{ui:Shaft}}.
2. Na linha, escolha o {{ui:Nível de base}} e o {{ui:Nível superior}}, e os deslocamentos, se ele começar ou terminar acima ou abaixo deles.
3. Clique nos cantos do contorno. Clique de novo no primeiro canto, dê duplo clique ou pressione {{key:Enter}} para terminar.
4. Todo piso, forro e telhado entre as duas alturas é cortado. A linha de status informa quantos.

Um shaft é uma coisa só. Selecione o contorno dele em qualquer nível que ele atravesse: as Propriedades têm o nome, os níveis e os deslocamentos, o que ele corta e a área retirada. Alterando-o, todas as aberturas acompanham. Excluindo-o, todas as aberturas somem. Cada uma dessas ações é um passo de desfazer.

Ele continua cortando: um piso criado depois entre os níveis dele é cortado sem ser pedido, e um piso que você excluir é liberado.

O piso sobre o qual o shaft se apoia não é cortado (o topo dele é a base). Dê à base um deslocamento negativo para cortá-lo também. Dê ao topo um deslocamento positivo para atravessar o telhado.

## Uma abertura vertical

1. Escolha {{ui:Abertura vertical}}. Na linha, escolha o que cortar: o piso, o forro ou o telhado.
2. Clique nos cantos do contorno e termine como acima.
3. O piso, forro ou telhado deste nível sob o contorno é cortado. A abertura pertence a esse único elemento: excluindo o piso, a abertura vai junto.

## Uma abertura em parede

{{ui:Abertura em parede}} é a ferramenta de [Moldar uma parede](topic:wall-shape): clique em uma parede na planta, ou em dois cantos na face dela em 3D.

## Quantidades

Pela regra de medição de pisos, a área líquida de um elemento é a área bruta menos o que é cortado dele. Um shaft ou uma abertura vertical é uma dedução em cada piso e forro que corta; as tabelas de Pisos e Acabamentos e as quantidades IFC mostram os mesmos números. Em um telhado, a dedução é a área da superfície do telhado: a área em planta dividida pelo cosseno da inclinação.

Um contorno que passa da borda deduz somente a parte que está sobre o elemento.

## Se nada for cortado

Um shaft sem nada no caminho é criado mesmo assim, e a linha de status informa isso: ele cortará o que for construído ali depois. Uma abertura vertical precisa de algo embaixo; sem nada ali, a linha de status diz isso e nada é criado.

## No IFC

Cada corte é um IfcOpeningElement com IfcRelVoidsElement para o elemento que ele corta, então qualquer programa IFC mostra o furo. Um telhado é cortado face por face. O próprio shaft é um IfcGroup das aberturas dele.

## Ainda não implementado

- Contornos curvos.
- As paredes de um shaft: desenhe-as com a ferramenta Parede.
- Editar o contorno arrastando os cantos (altere nas Propriedades, ou exclua e esboce de novo).
- As Propriedades de um piso desenhado mostram somente a área menos as próprias aberturas; as tabelas e as quantidades IFC incluem as do shaft.

Veja também [Ambientes e separadores de ambientes](topic:rooms-and-separators).
