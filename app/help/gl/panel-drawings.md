---
title: Debuxos de paneis en madeira ou en aceiro lixeiro
summary: Enmarque os muros, chans e cubertas do modelo como paneis en madeira ou en aceiro lixeiro, vexa cada montante, solera, dintel, vigota e cabrio a escala, e garde a lista de cortes en CSV e os planos de taller en PDF.
keywords: panel, estrutura, plano de taller, lista de cortes, aceiro lixeiro, montante de aceiro, LGS, madeira, vigota, cabrio, dintel, existencias, PDF
from: c09f916e
---

## Abrir os paneis

Escolla {{ui:Debuxos de paneis}} no menú {{ui:Compilación}} (ou escriba {{cmd:PANELS}}). A lista contén cada muro debuxado, cada chan e cada cuberta do modelo, cada un cunha marca. Os muros veñen coas súas portas e xanelas como aberturas. Un chan enmárcase como o rectángulo arredor do seu contorno, cos vigotas correndo polo lado curto. Unha cuberta enmárcase como unha cuberta a dúas augas sobre o contorno dos seus muros, coa pendente da cuberta; a lista dío, porque unha cuberta a catro augas ou complexa non é a dúas augas.

## Material, tamaño e espazamento

Escolla {{ui:Material}}: **Madeira** ou **Aceiro lixeiro**. As pezas de aceiro son montantes en C, nomeados pola súa profundidade e grosor (por exemplo, C92-1.2), con unha guía para as soleiras. {{ui:Tamaño da peza}} escolle un tamaño para todos os paneis marcados, ou déixeo en Predeterminado para tomar os predeterminados de cada tipo de panel. {{ui:Espazamento}} é a distancia entre montantes, vigotas ou cabrios. Son valores de partida para que vostede os axuste. Non son unha comprobación normativa: se un montante a ese espazamento sostén ese muro, e un dintel esa luz, corresponde ás táboas do código (o complemento Normativa de edificación ten as do IRC) e ao seu enxeñeiro.

## O que obtén

O primeiro panel marcado debúxase a escala no diálogo, coas cotas. {{ui:Lista de cortes (CSV)}} garda as pezas de cada panel por marca, tamaño e lonxitude, e as lonxitudes comerciais que hai que mercar para elas. {{ui:Planos de taller (PDF)}} garda unha páxina A3 por cada panel, con cada peza marcada e a súa lista de cortes. {{ui:Debuxo (SVG)}} garda o primeiro panel como un debuxo. Calquera cousa que o código de estrutura non poida enmarcar (unha abertura demasiado preto do extremo dun muro, un dintel que non cabe baixo as soleiras, unha peza máis longa que a barra máis longa dispoñible) lístase tamén en {{ui:Problemas}}, ademais de no diálogo.

## Que non fai

Os paneis son debuxos feitos a partir do modelo cada vez que os pide: non se escribe nada no modelo, así que sempre coinciden con el. Para pór a estrutura no modelo como elementos, use {{ui:Estrutura}} para muros, chans e cubertas de madeira.
