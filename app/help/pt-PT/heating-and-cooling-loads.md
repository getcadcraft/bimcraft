---
title: Estimar as cargas de aquecimento e arrefecimento
summary: A perda de calor de cada compartimento, o seu aquecimento ao longo de um ano por graus-dia e o pico de arrefecimento, a partir do que o delimita no modelo e do valor U de cada elemento, com todos os dados visíveis. Um apoio ao projeto, não um cálculo de conformidade.
keywords: energia, aquecimento, arrefecimento, perda de calor, carga de calor, carga de arrefecimento, valor U, transmitância térmica, graus-dia, hdd, ventilação, renovações de ar, ganhos internos, ganho solar, lambda, condutividade, isolamento, projeto inicial, análise, compartimentos, espaços
from: ec312d20
---

No separador {{ui:Luz natural}}, depois de {{ui:Calcular}}, abra {{ui:Cargas de aquecimento e arrefecimento}} e clique em {{ui:Calcular as cargas}}. Cada compartimento recebe a sua **perda de calor** num dia de projeto frio, o seu **aquecimento ao longo de um ano** e o seu **pico de arrefecimento** num dia quente. Nada é enviado para fora; nada muda no modelo, a não ser que escreva um valor U.

:::warning
Isto é **um apoio ao projeto, não um cálculo de conformidade**: uma estimativa em regime estacionário com todos os dados no ecrã. **Não** é o método ISO 52016-1, nem uma simulação, nem um certificado energético; não dimensiona caldeiras, bombas de calor nem chillers. Verifique os resultados e dimensione os equipamentos com um engenheiro.
:::

## O que delimita cada compartimento

O BimCraft encontra-o no próprio modelo, por isso o IFC de qualquer programa funciona (não precisa das fronteiras de espaço que alguns programas exportam). A partir de cada parte da superfície do próprio compartimento, olha diretamente para fora:

- o primeiro elemento que encontra (parede, janela, porta, piso, cobertura, revestimento, fachada-cortina ou viga) **delimita** essa parte;
- logo a seguir a esse elemento, ou **outro compartimento** (contado como vizinho, à mesma temperatura: sem perda), ou **nada** (exterior), ou, sob um piso no piso mais baixo, **o terreno**;
- uma passagem aberta para outro compartimento conta como vizinho; uma parte que não encontra nada (a 1.5 m para os lados ou para baixo, 8 m para cima) é listada no compartimento e fica de fora do cálculo.

As janelas e as portas tomam a sua própria dimensão do IFC (largura total × altura) a partir da parede onde estão. Clique num compartimento na tabela para ver todos os elementos que o delimitam, com a sua área, o seu valor U e a origem desse valor.

## Valores U

Para cada elemento, o BimCraft usa, por esta ordem:

1. **O valor U do próprio IFC**: o `ThermalTransmittance` no conjunto de propriedades comuns do elemento (por exemplo `Pset_WallCommon`) ou do respetivo tipo. A maioria dos programas de projeto consegue escrevê-lo.
2. **As suas camadas de material**: 1 ÷ (resistência superficial interior + a espessura de cada camada ÷ a sua condutividade λ + resistência superficial exterior), com as resistências superficiais habituais (0.13 e 0.04 m²K/W para paredes; 0.10 para cima e 0.17 para baixo, no interior). Condutividades típicas para começar (lã mineral 0.035, tijolo 0.77, betão 1.4…); em {{ui:Condutividade dos materiais}} escreva a do fabricante, e todos os valores U dessas camadas seguem-na.
3. **Um valor típico** (paredes 0.3, coberturas 0.2, pisos 0.25, janelas 1.4, portas 1.6 W/m²K), assinalado como tal: escreva o seu.

Um valor U escrito no detalhe de um compartimento é guardado no conjunto de propriedades comuns do elemento como `ThermalTransmittance` (um passo; {{key:Mod+Z}} anula-o). Se vários elementos partilharem esse conjunto (um tipo de parede, por exemplo), todos mudam em conjunto, e a linha de estado indica quantos.

## Aquecimento

- **Perda de calor** = Σ U × A × (interior − exterior) para tudo o que dá para o exterior + Σ U × A × (interior − terreno) para os pisos sobre o terreno + 0.335 × renovações de ar por hora × volume do compartimento × (interior − exterior). 0.335 Wh por m³ e por kelvin é a massa volúmica do ar (1.2 kg/m³) vezes a sua capacidade térmica (1005 J/kgK).
- **Aquecimento num ano** = (a perda do compartimento por grau para o exterior, através da envolvente e do ar, mais a sua perda para o terreno ajustada à mesma diferença) × os **graus-dia** × 24 ÷ 1000, em kWh. Escreva os graus-dia do local, ou use {{ui:Ler graus-dia de um CSV…}} (uma linha por dia ou por mês; o último número de cada linha é somado). Use graus-dia referidos à temperatura base da sua fonte: essa base já tem em conta o calor gratuito das pessoas, das luzes e do sol.

## Arrefecimento

O **pico de arrefecimento** = o calor através da envolvente e do ar à temperatura de projeto de verão + pessoas (área de piso por pessoa × calor por pessoa) + iluminação e equipamentos por m² de piso + **o sol**: o pico de {{ui:Sol através das janelas numa data}} para esse compartimento. Calcule primeiro o sol, num dia quente; até lá, o sol conta 0 e a secção indica-o. A soma dos picos de cada parcela é feita mesmo que ocorram a horas diferentes, o que exagera um pouco.

## O que deixa de fora

- Os métodos mensal e horário da ISO 52016-1 (uma norma paga), o calor armazenado na massa do edifício, as pontes térmicas, o desempenho dos sistemas de aquecimento e arrefecimento, e os ficheiros climáticos.
- Os compartimentos vizinhos são tomados à mesma temperatura; os espaços não aquecidos não são modelados.

Veja também [Estimar a luz natural em cada compartimento](topic:daylight-factor).
