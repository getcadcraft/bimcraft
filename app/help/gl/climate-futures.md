---
title: "Futuros climáticos: inundación, calor e incendio forestal en 2050 e 2080"
summary: Execute de novo a inundación, o ano enerxético e o cribado de incendios forestais co clima futuro (escenarios SSP2-4.5 e SSP5-8.5, anos 2050 e 2080) a partir dun paquete de datos climáticos, con o presente xunto ao futuro.
keywords: clima, cambio climático, futuro, 2050, 2080, ssp, cmip6, escenario, nivel do mar, inundación, calor, ficheiro meteorolóxico, epw, morph, energyplus, incendio forestal, bushfire, tempo de incendio
from: 224ecd08
---

As cifras climáticas proceden dun **paquete de datos**, non da aplicación. Active o complemento {{ui:Futuros climáticos}} en Configuración › Complementos, ou cargue un ficheiro de paquete propio no bloque {{ui:Futuro climático}}.

:::warning
O paquete que trae o complemento é unha **mostra**: tres lugares (Denver, Miami, Johannesburgo), un modelo climático e cinco anos en cada período de 20 anos. Serve para probar as ferramentas, **non para o deseño**. O panel díao en negriña mentres está en uso. Un paquete completo (moitos modelos, todos os anos, máis lugares) créase con `tools/climate/build-pack.mjs` a partir dos datos NEX-GDDP-CMIP6 da NASA.
:::

## Escoller un futuro

No panel esquerdo, en {{ui:Reprodución de perigo}}, escolla un **Escenario** (SSP2-4.5, o camiño intermedio, ou SSP5-8.5, emisións altas) e un **Ano** (2050 significa 2041-2060, 2080 significa 2071-2090; ambos en relación con 1995-2014). O **Lugar** é o do paquete máis próximo ao emprazamento do modelo (latitude e lonxitude de IfcSite), ou o que escolla. Se está lonxe de todos os lugares, empréganse os cambios medios globais do paquete e o panel díao.

## Inundación: presente xunto a futuro

Cando escolla un escenario, estableza o **Tipo de inundación**: costeira (engade a subida do nivel do mar), fluvial ou chuvia intensa (máis profunda polo cambio na chuvia do día máis chuvioso), ou ambas. Prema Executar: a inundación reprodúcese como antes, e unha táboa mostra a inundación actual e a futura lado a lado (nivel da auga, cuartos que se mollan, a auga máis profunda). As hipóteses aparecen debaixo:

- un nivel costeiro sobe toda a subida do nivel do mar; a marea de tempestade e as ondas non cambian;
- o caudal do río sobe proporcionalmente á chuvia do día máis chuvioso, e a profundidade segue o caudal elevado a 0,6 (ecuación de Manning para canle ancha);
- as dúas partes súmanse sen máis.

## Calor: un ficheiro meteorolóxico futuro

Escolla o tipo {{ui:Calor: ficheiro meteorolóxico futuro}}, escolla un ficheiro meteorolóxico `.epw` do tempo actual e prema {{ui:Crear o ficheiro meteorolóxico futuro}}. O ficheiro **transformado** mes a mes co método publicado de desprazamento e estiramento (Belcher, Hacker e Powell 2005): a media do mes sobe segundo o cambio do paquete, as tardes quentes segundo o cambio do máximo diario e as noites frías segundo o cambio do mínimo diario; a humidade relativa cambia co cambio do paquete e o punto de rocío calcúlase de novo. A presión e o vento non cambian. A táboa compara as temperaturas medias e máximas, as temperaturas de deseño de refrixeración ao 0,4 % e de calefacción ao 99,6 %, as horas a 30 °C e 35 °C e os graos-día.

{{ui:Gardar o ficheiro meteorolóxico futuro}} gárdao; {{ui:Usalo na comprobación de enerxía}} pásao á comprobación de EnergyPlus (pestana Enerxía). O ficheiro futuro é o mesmo ano tipo, máis cálido: non engade novas ondas de calor.

## Ano de enerxía: presente xunto a futuro

Na comprobación de EnergyPlus da pestana Enerxía (un complemento propio, co seu propio motor), escolla un ficheiro meteorolóxico actual, despois un escenario e un ano no seu bloque {{ui:Futuro climático}}, e prema {{ui:Simular un ano: presente e futuro}}: o ano execútase co ficheiro actual e co seu futuro transformado, e a calefacción e a refrixeración de cada cuarto listanse lado a lado.

## Exposición a incendios forestais (só cribado)

Escolla o tipo {{ui:Exposición a incendios forestais (só cribado)}}: a vexetación máis próxima, a pendente desde ela ata o edificio e a distancia até ela. O resultado é unha banda de moi baixa a extrema, actual e futura.

:::warning
**Só cribado.** Esta é unha escala relativa propia para saber se un emprazamento necesita unha avaliación de incendios forestais en condicións, non unha cualificación de norma nin un nivel BAL de ataque por incendio forestal. Multiplica un peso pola vexetación, un factor de pendente (un incendio duplica aproximadamente a súa velocidade por cada 10 graos de subida, contados ata 20 graos), un factor de distancia (10 m divididos pola distancia, como máximo 1) e o cambio do paquete no índice meteorolóxico de incendio.
:::

## De onde proceden as cifras

- **Temperatura, humidade, sol, chuvia, tempo de incendio:** NASA NEX-GDDP-CMIP6, saídas diarias reducidas de modelos CMIP6. A saída de cada modelo está baixo CC BY 4.0. O cambio no índice meteorolóxico de incendio é o Canadian Fire Weather Index calculado día a día a partir do tempo do modelo (coa humidade diaria en lugar da humidade do mediodía).
- **Subida do nivel do mar:** a media global do IPCC AR6 (non local; non inclúe a subida ou o afundimento do terreo), salvo que un paquete leve cifras locais.
- O paquete indica a súa fonte, licenza e data; o panel mostra estes datos.
