---
title: Encaminhar automaticamente condutas, drenagem, água e tubagens de fluido frigorigéneo
summary: Na deteção de conflitos, o BimCraft encontra um caminho em torno do modelo aberto para condutas, drenagem por gravidade, água fria e quente, e tubagens de fluido frigorigéneo de sistemas split ou multi-split, e desenha os troços com as suas peças num único passo de anulação. Um auxiliar de desenho: dimensões, inclinações e verificações vêm das tabelas do programa e dos números que escreve; nada aqui indica que um projeto cumpre um regulamento.
keywords: encaminhamento automático, rota automática, encaminhar condutas, encaminhar tubagens, drenagem, sanitário, gravidade, coluna, ventilação, sifão, água, água quente, circuito de retorno, recirculação, fluido frigorigéneo, split, multi-split, VRF, comprimento equivalente, kit de derivação, junção em Y
from: 5841d513
---

## O que vai fazer

O BimCraft traça uma rede de troços entre conectores que já estão no modelo, à volta de paredes e vigas, e depois verifica-a com números que pode ver.

## Passos

1. Abra o modelo e a deteção de conflitos. Em **Encaminhar condutas automaticamente**, escolha uma unidade de tratamento de ar e os seus terminais, ou em **Encaminhar outros sistemas automaticamente**, escolha um sistema.
2. **Drenagem sanitária por gravidade.** Escreva a posição da saída e, se as tiver, as posições das colunas. Marque **Encaminhar todos os pisos de uma vez** para tomar cada piso que tenha aparelhos: as drenagens de cada piso encontram a coluna ao seu próprio nível, e a coluna vai de acima da torneira mais alta até à sua base. Prima {{ui:Traçar}}.
3. **Sifão até à ventilação.** O painel lista a distância de cada sifão à sua ventilação. Escreva em **Distância máxima de um sifão à sua ventilação** o máximo que o seu regulamento permite; qualquer aparelho acima disso fica indicado como não feito, com os milímetros em excesso. Marque **Ventilar através da coluna** quando os aparelhos não tiverem um ramal de ventilação próprio: a distância é então medida até à coluna. O BimCraft não inclui uma tabela regulamentar para isto: o número é introduzido por si.
4. **Água fria e quente.** Escolha a origem, escreva a pressão na origem e a pressão de que precisa num aparelho. Marque **Água quente**, escolha a ligação quente do aquecedor, e marque **Circuito de retorno** para terminar uma linha de retorno na ligação **retorno de quente** do aquecedor, ou noutra ligação que escolher (essa termina 150 mm antes, aberta, para ligar).
5. **Split, multi-split e VRF.** Escolha a unidade exterior, marque as unidades interiores e escreva a capacidade de cada uma. Escreva os limites indicados nos dados do fabricante. Escreva o **comprimento equivalente** de uma curva e de um kit de derivação (valores do fabricante), e os comprimentos mais longo e total são verificados pelos comprimentos equivalentes.
6. Prima {{ui:Traçar}}. O painel diz quantos troços desenhou e o que não conseguiu fazer, e porquê. {{ui:Anular}} desfaz tudo num só passo.

## O que deve ver

Tubos com cotovelos, tês e reduções; drenagens que descem pelo menos a menor inclinação para o seu tamanho; ramais de ventilação nos aparelhos; linhas de fluido frigorigéneo como um par de líquido e gás que vira no mesmo sentido em cada curva, com um kit de derivação marcado onde uma derivação sai do tronco.

## Bom saber

- Onde uma drenagem encontra outra, o modelo desenha um tê. A planta indica esses pontos como junções em Y de 45 graus, para que possa mudar a peça.
- A água quente usa a ligação quente do próprio aparelho quando a sua família a tem, e uma ligação a 100 mm ao lado da fria quando não tem.
- As linhas de fluido frigorigéneo começam entre as duas portas de cada unidade. Quando as duas portas de uma unidade ficam demasiado próximas para uma curva, o par mantém-se centrado entre elas.
- A rede de água usa a curva de consumo e os números de atrito mostrados nos cálculos; substitua-os pelos do seu regulamento antes de confiar nas pressões.
- Casas grandes podem demorar meio minuto ou mais, sobretudo a rede quente.
- Isto é um auxiliar de desenho. Uma pessoa qualificada verifica dimensões, inclinações, ventilações e pressões face ao regulamento aplicável.

## A seguir

[Verificar conflitos](topic:clash-check) · [Verificar tubagens e condutas face à estrutura](topic:mep-against-structure) · [Ligações entre tubagens e equipamentos](topic:mep-connections)
