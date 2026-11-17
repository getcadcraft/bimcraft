---
title: Carbono incorporado e custos no cronograma
summary: Sume o carbono incorporado do modelo a partir dunha táboa de factores aberta e editable, e reparta os prezos sobre o cronograma 4D nunha curva de custo e de fluxo de caixa. Ambos parten de valores que escribe ou importa.
keywords: carbono incorporado, carbono, co2, kgco2e, emisións, táboa de factores, epd, 5d, custo, fluxo de caixa, curva en S, custo do cronograma, prezos, prezos da medición
from: 83e82840
---

## Carbono incorporado

Abra o panel **Carbono**. A cantidade de cada elemento (volume, superficie ou lonxitude) multiplícase por un factor da táboa, por módulo do ciclo de vida: a etapa de produto é obrigatoria; o transporte e os residuos son opcionais. Os totais saen por material, por clase e por piso, e tamén por metro cadrado de chan.

**A táboa de factores é súa.** As filas que trae BimCraft son valores iniciais xenéricos, do orde de magnitude correcto. Non proceden dunha base de datos, márcanse como sen comprobar, e hai que substituílos pola fonte que vostede use (unha EPD, unha base de datos nacional ou as cifras da súa empresa). Edite as filas no panel, ou importe e exporte a táboa como CSV ou JSON. As filas que engade substitúen a fila inicial co mesmo id. A táboa gárdase no modelo.

Os elementos sen coincidencia, ou sen cantidade, aparecen listados como Problemas e non se contan como cero.

## Custos no cronograma 4D

Abra o panel **Custo** xunto ao cronograma 4D. Dea prezos (escríbaos, importe un CSV ou JSON, ou traia as liñas de TakeoffCraft), asigne cada prezo aos materiais do modelo con palabras clave, e o panel calculará o prezo dos elementos de cada tarefa. O custo dunha tarefa reparte-se polos días desde o inicio ata o fin (de forma uniforme, ou cargado ao principio ou ao final), e o panel debuxa a curva acumulada do fluxo de caixa por día, semana ou mes, co custo por etapa e por paquete, e o planificado fronte ao construído nunha data. Saída en CSV. Non se pon prezo a nada ata que dea prezos: non se inclúe ningún.

## Moeda

Unha táboa de prezos pode indicar en que moeda están os seus prezos (tres letras, como USD ou EUR). O panel 5D ten un campo para iso, gárdase no ficheiro cos prezos, e as exportacións JSON levan a moeda. Unha táboa feita antes disto, ou unha na que deixou o campo baleiro, non ten moeda: os seus custos móstranse en USD, a moeda por defecto da aplicación, e o panel e os totais en curso o indican. Non se converte nada entre moedas.
