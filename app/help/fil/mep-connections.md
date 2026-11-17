---
title: Ikonekta ang mga tubo at duct sa equipment
summary: Simulan o tapusin ang isang tubo o duct sa isang port para kunin nito ang laki at system ng port at manatiling nakakabit dito, saka suriin ang mga koneksyon: mga bukas na port, hindi tugmang laki at system, at mga run na walang source.
keywords: mep, ikonekta, koneksyon, connection, connections, port, ports, bukas na port, hindi tugmang laki, hindi tugmang system, source, check connections, nakakabit, sumunod, ilipat ang equipment, ifcrelconnectsports, coordination
from: 29144fb0
---

## Ano ang gagawin mo

Ikabit ang mga run sa equipment para maging iisang konektadong system ang model: ang outlet ng pump sa tubong lumalabas dito, ang neck ng diffuser sa branch duct nito. Pagkatapos, ilista ng BimCraft ang mga hindi pa nakakabit.

## Gumuhit mula sa port

1. Piliin ang {{ui:Tubo}} o {{ui:Duct}}.
2. Ilipat ang pointer sa isang port ng isang piyesa ng equipment (ang maliliit na bilog; ang bukas na port ay iginuguhit sa kulay ng babala). Kumakapit dito ang pointer at sinasabing **nasa port**.
3. I-click: nagsisimula ang run sa taas ng port at **kinukuha ang laki at system nito** (ang tubo ay kumukuha rin ng karaniwang materyal ng system). Sinasabi ng status line kung ano ang kinuha nito.
4. Magpatuloy sa pagguhit gaya ng dati. Ang pagtatapos ng run sa ibang port ay inaayos din ang dulong iyon.

Ang dulo ng run sa isang port ay **nakakabit** dito: ilipat o ikiling ang equipment (sa Properties) at sasama ang dulo ng run; i-edit ang run at mananatili ang dulong iyon sa port. Mananatili sa dating lugar ang iba pang sulok ng run, kaya pagkatapos ng malaking galaw, maaaring humiwalay sa port nang pahilis ang unang bahagi: ilipat din ang susunod na sulok.

## Suriin ang mga koneksyon

Buksan ang {{ui:Build}} at i-click ang {{ui:Suriin ang koneksyon}}. Ipinapakita ng listahan sa ilalim ng bar ang:

| Linya | Ibig sabihin |
|---|---|
| A port is not connected | May koneksyon ang isang piyesa ng equipment na walang iginuhit papunta rito |
| Nothing on its end | Ang run ay nagtatapos sa hangin |
| Joined ports of different sizes | Ang run ng isang laki ay nagtatagpo sa port o run ng ibang laki nang walang reducer (nominal size ng tubo, hugis at gilid ng duct) |
| Joined ports of different systems | Halimbawa, return duct sa supply diffuser |
| A pipe joined to a duct | Nagtatagpo ang dalawang koneksyon ng magkaibang uri |
| No equipment in its network supplies it | Walang outlet ang alinman sa mga nakakabit sa run, gaano man kalayo sa kahabaan. Hindi ito tinatanong sa drains, storm at vents: galing sa fixtures ang tubig nila |
| Fixed to a port of equipment that is not in the model any more | Binura na ang equipment; iguhit muli ang dulo o burahin ang run |

Nauuna ang mga error. I-click ang isang linya para piliin ang pinangalanan nito. Itinatago ng {{ui:Isara}} ang listahan. Binabasa ng check ang model gaya ng iginuhit: sinusuri nito ang mga koneksyon at laki, hindi kailanman ang flow, pressure o balancing.
