---
title: Estimar cargas de aquecimento e resfriamento
summary: Perda de calor de cada ambiente, seu aquecimento ao longo de um ano por graus-dia e seu pico de resfriamento, a partir do que o delimita no modelo e do valor U de cada elemento, com todas as entradas mostradas. Um auxílio de projeto, não um cálculo de conformidade.
keywords: energia, aquecimento, resfriamento, perda de calor, carga de aquecimento, carga de resfriamento, valor u, transmitância térmica, graus-dia, hdd, ventilação, trocas de ar, ganhos internos, ganho solar, lambda, condutividade, isolamento, projeto preliminar, análise, ambientes, espaços
from: ec312d20
---

Na aba {{ui:Luz natural}}, depois de {{ui:Calcular}}, abra {{ui:Cargas de aquecimento e resfriamento}} e clique em {{ui:Calcular as cargas}}. Cada ambiente recebe sua **perda de calor** em um dia de projeto frio, seu **aquecimento ao longo do ano** e seu **pico de resfriamento** em um dia quente. Nada é enviado; nada muda no modelo a menos que você digite um valor U.

:::warning
Este é **um auxílio de projeto, não um cálculo de conformidade**: uma estimativa em regime permanente com todas as entradas na tela. **Não** é o método ISO 52016-1, nem uma simulação, nem um certificado energético; não dimensiona caldeiras, bombas de calor ou resfriadores. Confira os resultados e dimensione os equipamentos com um engenheiro.
:::

## O que delimita cada ambiente

O BimCraft encontra isso no próprio modelo, então o IFC de qualquer programa funciona (ele não precisa das fronteiras de espaço que alguns programas exportam). De cada pedaço da superfície de cada ambiente ele olha diretamente para fora:

- o primeiro elemento que encontra — parede, janela, porta, piso, cobertura, revestimento, parede-cortina ou viga — **delimita** esse pedaço;
- logo além desse elemento, há **outro ambiente** (considerado vizinho, à mesma temperatura: sem perda), **nada** (o exterior), ou, sob um piso no nível mais baixo, **o terreno**;
- uma passagem aberta para outro ambiente conta como vizinho; um pedaço que não encontra nada (a até 1.5 m para os lados ou para baixo, 8 m para cima) é listado sob o ambiente e não é contado.

Janelas e portas tomam seu próprio tamanho do IFC (largura total × altura) a partir da parede em que estão. Clique em um ambiente na tabela para ver cada elemento que o delimita, com sua área, seu valor U e de onde veio o valor U.

## Valores U

Para cada elemento, o BimCraft usa, nesta ordem:

1. **O valor U do próprio IFC** — o `ThermalTransmittance` no conjunto de propriedades comum do elemento (por exemplo `Pset_WallCommon`) ou no de seu tipo. A maioria dos programas de projeto consegue gravá-lo.
2. **Suas camadas de material** — 1 ÷ (resistência superficial interna + espessura de cada camada ÷ sua condutividade λ + resistência superficial externa), com as resistências superficiais usuais (0.13 e 0.04 m²K/W para paredes; 0.10 para cima e 0.17 para baixo, por dentro). Condutividades típicas para começar (lã mineral 0.035, tijolo 0.77, concreto 1.4…); em {{ui:Condutividade dos materiais}} digite a do fabricante, e todo valor U dessas camadas acompanha.
3. **Um valor típico** (paredes 0.3, coberturas 0.2, pisos 0.25, janelas 1.4, portas 1.6 W/m²K), marcado como tal — digite o seu.

Um valor U digitado nos detalhes de um ambiente é gravado no conjunto de propriedades comum do elemento como `ThermalTransmittance` (uma etapa; {{key:Mod+Z}} o desfaz). Se vários elementos compartilham esse conjunto (um tipo de parede, por exemplo), todos mudam juntos, e a linha de status informa quantos.

## Aquecimento

- **Perda de calor** = Σ U × A × (interno − externo) para tudo que dá para o exterior + Σ U × A × (interno − solo) para pisos sobre o terreno + 0.335 × trocas de ar por hora × volume do ambiente × (interno − externo). 0.335 Wh por m³ por kelvin é a densidade do ar (1.2 kg/m³) vezes sua capacidade térmica (1005 J/kgK).
- **Aquecimento ao longo do ano** = (a perda do ambiente por grau para o exterior, pela envoltória e pelo ar, mais sua perda para o solo ajustada à mesma diferença) × os **graus-dia** × 24 ÷ 1000, em kWh. Digite os graus-dia do local, ou use {{ui:Ler graus-dia de um CSV…}} (uma linha por dia ou mês; o último número de cada linha é somado). Use graus-dia referentes à temperatura-base da sua fonte: essa base já considera o calor gratuito de pessoas, luzes e sol.

## Resfriamento

O **pico de resfriamento** = o calor pela envoltória e pelo ar na temperatura de projeto de verão + pessoas (área de piso por pessoa × calor por pessoa) + iluminação e equipamentos por m² de piso + **o sol**: o pico de {{ui:Sol pelas janelas em uma data}} para aquele ambiente. Calcule o sol primeiro, em um dia quente; até lá, o sol conta 0 e a seção informa isso. O pico de cada parte é somado mesmo que ocorram em horas diferentes, o que superestima um pouco.

## O que fica de fora

- Os métodos mensal e horário da ISO 52016-1 (uma norma paga), o calor armazenado na massa do edifício, pontes térmicas, o desempenho dos sistemas de aquecimento e resfriamento, e arquivos climáticos.
- Ambientes vizinhos são considerados à mesma temperatura; espaços não aquecidos não são modelados.

Veja também [Estimar a luz natural em cada ambiente](topic:daylight-factor).
