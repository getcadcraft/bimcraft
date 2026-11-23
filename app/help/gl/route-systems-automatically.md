---
title: Trazar automaticamente conductos, drenaxes, tubaxes de auga e de refrixerante
summary: Na comprobación de interferencias, BimCraft atopa un camiño arredor do modelo aberto para conductos, drenaxe por gravidade, auga fría e quente, e tubaxes de refrixerante divididas ou multidivididas, e debuxa os tramos cos seus accesorios nun só paso de desfacer. Unha axuda de debuxo: as medidas, pendentes e comprobacións saen das táboas do programa e dos números que escribe; nada aquí di que un deseño cumpre unha norma.
keywords: trazado automático, autotrazado, trazar conductos, trazar tubaxes, drenaxe, saneamento, gravidade, baixante, ventilación, sifón, auga, auga quente, bucle de retorno, recirculación, refrixerante, split, multi-split, VRF, lonxitude equivalente, kit de derivación, xunción en Y
from: 5841d513
---

## O que vai facer

Deixe que BimCraft trace unha rede de tramos entre conectores que xa están no modelo, arredor de muros e vigas, e logo comprobea contra números que pode ver.

## Pasos

1. Abra o modelo e a comprobación de interferencias. Baixo **Trazar conductos automaticamente** escolla unha unidade de tratamento de aire e os seus terminais, ou baixo **Trazar outros sistemas automaticamente** escolla un sistema.
2. **Drenaxe sanitaria por gravidade.** Escriba a posición da saída e, se as ten, as posicións das baixantes. Marque **Trazar todos os pisos dunha vez** para tomar todos os pisos que teñan aparellos: os desaugues de cada piso atópanse coa baixante á súa propia altura, e a baixante vai desde por enriba da billa máis alta ata o seu pé. Prema {{ui:Trazar}}.
3. **De sifón a ventilación.** O panel lista a distancia de cada sifón á súa ventilación. Escriba en **Distancia máxima dun sifón á súa ventilación** o máximo que permite o seu código; calquera aparello que o supere aparece como non feito, cos milímetros de exceso. Marque **Ventilar pola baixante** cando os aparellos non teñan un ramal de ventilación propio: a distancia mídese entón ata a baixante. BimCraft non inclúe unha táboa de códigos para isto: vostede escribe o número.
4. **Auga fría e quente.** Escolla a orixe, escriba a presión na orixe e a presión que precisa nun aparello. Marque **Auga quente**, escolla a conexión quente do quentador, e marque **Bucle de retorno** para rematar unha liña de retorno na conexión **retorno quente** do quentador, ou en calquera outra conexión que escolla (esa remata 150 mm curta, aberta, para que vostede a una).
5. **Dividida, multidividida e VRF.** Escolla a unidade exterior, marque as unidades interiores e escriba a capacidade de cada unha. Escriba os límites dos datos do seu fabricante. Escriba a **lonxitude equivalente** dunha curva e dun kit de derivación (os valores do fabricante), e compróbanse as lonxitudes máxima e total sobre as lonxitudes equivalentes.
6. Prema {{ui:Trazar}}. O panel di cantos tramos debuxou, e que non puido facer e por que. {{ui:Desfacer}} leva todo atrás nun só paso.

## Que debe ver

Tubaxes con cotovelos, pezas en T e reducións; drenos que caen polo menos a pendente mínima para o seu tamaño; ramais de ventilación nos aparellos; liñas de refrixerante como un par de líquido e gas que xira do mesmo xeito en cada curva, cun kit de derivación marcado onde unha derivación sae do tronco.

## Bo de saber

- Onde un desaugue se xunta con outro, o modelo debuxa unha T. A vista en planta nomea eses lugares como unións en Y de 45 graos para que poida cambiar a peza.
- A auga quente usa a propia conexión quente do aparello cando a súa familia a ten, e unha conexión 100 mm xunto á fría cando non a ten.
- As liñas de refrixerante comezan entre os dous portos de cada unidade. Cando os dous portos dunha unidade están demasiado xuntos para unha curva, o par queda centrado entre eles.
- A rede de auga usa a curva de demanda e os números de fricción que se mostran nos cálculos; substitúaos polos do seu código antes de confiar nas presións.
- As casas grandes poden tardar medio minuto ou máis, sobre todo a rede quente.
- Esta é unha axuda de debuxo. Unha persoa cualificada comproba os tamaños, pendentes, ventilacións e presións segundo a norma que aplique.

## Seguinte

[Comprobar interferencias](topic:clash-check) · [Comprobar tubaxes e conductos contra a estrutura](topic:mep-against-structure) · [Conexións entre tubaxes e equipos](topic:mep-connections)
