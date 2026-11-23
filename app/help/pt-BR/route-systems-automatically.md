---
title: Roteie dutos, drenos, tubulações de água e de refrigerante automaticamente
summary: Na verificação de interferências, o BimCraft encontra um caminho pelo modelo aberto para dutos, drenagem por gravidade, água fria e quente, e tubulações de refrigerante split ou multi-split, e desenha os trechos com as conexões em um passo de desfazer. Um auxílio de desenho: dimensões, declividades e verificações vêm das tabelas do programa e dos números que você digita; nada aqui diz que um projeto atende a uma norma.
keywords: roteamento automático, rota automática, rotear dutos, rotear tubulações, drenagem, sanitário, gravidade, prumada, ventilação, sifão, água, água quente, circuito de retorno, recirculação, refrigerante, split, multi-split, VRF, comprimento equivalente, kit de derivação, junção em Y
from: 5841d513
---

## O que você vai fazer

Deixe o BimCraft montar uma rede de trechos entre conectores que já estão no modelo, contornando paredes e vigas, e depois verifique-a com números que você pode ver.

## Passos

1. Abra o modelo e a verificação de interferências. Em **Rotear dutos automaticamente**, escolha um equipamento de tratamento de ar e seus terminais, ou, em **Rotear outros sistemas automaticamente**, escolha um sistema.
2. **Drenagem sanitária por gravidade.** Digite a posição da saída e, se tiver, as posições das prumadas. Marque **Rotear todos os pavimentos de uma vez** para pegar todos os pavimentos que têm aparelhos: os drenos de cada pavimento encontram a prumada no nível deles, e a prumada vai do ponto acima da torneira mais alta até a base dela. Pressione {{ui:Rotear}}.
3. **Sifão até a ventilação.** O painel lista a distância de cada sifão até a ventilação dele. Digite a maior distância que a sua norma permite em **Maior distância de um sifão até a ventilação**; qualquer aparelho acima dela é listado como não feito, com os milímetros excedidos. Marque **Ventilar pela prumada** quando os aparelhos não tiverem um ramal de ventilação próprio: a distância é então medida até a prumada. O BimCraft não traz uma tabela de norma para isso: você digita o número.
4. **Água fria e quente.** Escolha a origem, digite a pressão na origem e a pressão que você precisa em um aparelho. Marque **Água quente**, escolha a conexão quente do aquecedor e marque **Circuito de retorno** para terminar uma linha de retorno na conexão **retorno quente** do aquecedor, ou em qualquer outra conexão que você escolher (essa termina 150 mm antes, aberta, para você conectar).
5. **Split, multi-split e VRF.** Escolha a unidade externa, marque as unidades internas e digite a capacidade de cada uma. Digite os limites dos dados do seu fabricante. Digite o **comprimento equivalente** de uma curva e de um kit de derivação (valores do fabricante), e os comprimentos maior e total são verificados pelos comprimentos equivalentes.
6. Pressione {{ui:Rotear}}. O painel informa quantos trechos desenhou e o que não conseguiu fazer, e por quê. {{ui:Desfazer}} desfaz tudo em um passo.

## O que você deve ver

Tubulações com cotovelos, tês e reduções; drenos que caem pelo menos a menor declividade do tamanho deles; ramais de ventilação nos aparelhos; linhas de refrigerante como um par de líquido e gás que faz a mesma curva em cada canto, com um kit de derivação marcado onde uma derivação sai do tronco.

## Bom saber

- Onde um dreno encontra outro dreno, o modelo desenha um tê. A planta nomeia esses pontos como junções em Y de 45 graus para que você possa trocar a conexão.
- A água quente usa a conexão quente do próprio aparelho quando a família dele tem uma, e uma conexão 100 mm ao lado da fria quando não tem.
- As linhas de refrigerante começam entre as duas portas de cada unidade. Quando as duas portas de uma unidade ficam próximas demais para uma curva, o par fica centralizado entre elas.
- A rede de água usa a curva de demanda e os números de atrito mostrados nos cálculos; substitua-os pelos da sua norma antes de confiar nas pressões.
- Casas grandes podem levar meio minuto ou mais, principalmente por causa da rede quente.
- Isto é um auxílio de desenho. Uma pessoa qualificada verifica dimensões, declividades, ventilações e pressões contra a norma aplicável.

## Próximos

[Verificar interferências](topic:clash-check) · [Verificar tubulações e dutos contra a estrutura](topic:mep-against-structure) · [Conexões entre tubulações e equipamentos](topic:mep-connections)
