---
title: Portas e xanelas
summary: Coloque portas e xanelas en muros debuxados: sitúe o punteiro sobre un muro, vexa o sentido de apertura e as distancias ás esquinas, faga clic; a abertura recórtase soa no muro.
keywords: porta, portas, xanela, xanelas, abertura, apertura, bisagra, sentido, inverter, porta corredoira, porta de cavidade, porta de garaxe, porta dobre, porta batente, guillotina, xanela fixa, peitoril, dintel, plegable, portas francesas, porta de celeiro, paneis laterais, porta de entrada, toldo, xanela panorámica, bandeira
from: 4d8ac009
---

## Que vai facer

Coloque portas e xanelas nos muros que debuxou ([Debuxar muros](topic:draw-walls)). Sitúe o punteiro sobre un muro e a porta ou xanela mostra onde iría, cara a que lado abre e a distancia a cada esquina. Faga clic, e a abertura recórtase no muro na planta e en 3D.

## Colocar unha porta

1. Con {{ui:Debuxar}} activado, faga clic en {{ui:Porta}} (ou prema {{key:D}}).
2. Escolla o tipo: **Porta batente simple**, **Porta batente dobre**, **Porta corredoira**, **Porta de cavidade**, **Porta de garaxe**, **Porta plegable de armario**, **Portas francesas**, **Porta de celeiro (na parede)** ou **Porta de entrada con paneis laterais**. O seu tamaño habitual enche **W** e **H**; escolla outro na lista de tamaños ao lado, ou escriba outros, por exemplo `2'-8"` ou `800`. A lista tamén ofrece as familias de portas deste modelo (vexa [Familias e os seus tamaños](topic:families)).
3. Sitúe o punteiro sobre un muro. O símbolo da porta segue o punteiro ao longo do muro, e a distancia desde cada extremo desa cara aparece na planta.
4. A porta abre cara ao lado do muro onde está o punteiro. Prema {{key:H}} (ou faga clic en {{ui:Inverter}}) para poñer as bisagras no outro extremo.
5. Faga clic. A porta colócase e a ferramenta segue activa para a seguinte. Sitúe o punteiro no medio dun muro e a porta centrase soa.

Para colocala a unha distancia exacta, sitúe o punteiro sobre o muro preto da esquina desde a que mide, escriba a distancia (por exemplo `2'` ou `600`) e prema {{key:Enter}}. A distancia vai desde o extremo máis próximo da cara do muro ata o bordo da porta.

## Colocar unha xanela

1. Faga clic en {{ui:Xanela}} (ou prema {{key:N}}).
2. Escolla o tipo: **Xanela fixa**, **Xanela de guillotina simple**, **Xanela de guillotina dobre**, **Xanela de batente**, **Xanela corredoira**, **Xanela de toldo**, **Xanela panorámica** ou **Bandeira**, e o seu **W**, **H** e **Peitoril** (a altura da parte inferior da xanela sobre o chan).
3. Sitúe o punteiro sobre un muro e faga clic, ou escriba unha distancia e prema {{key:Enter}} como coas portas. Unha xanela queda na cara exterior do muro.

## Mover, inverter, eliminar

- Con {{ui:Seleccionar}} activado, arrastre unha porta ou xanela ao longo do seu muro. Arrástreo sobre outro muro para movelo alí.
- {{key:Delete}} elimina as portas e xanelas seleccionadas; o muro recompónse.
- Mover ou eliminar un muro move ou elimina o que contén. Cando o inicio dun muro se move ao longo da súa propia liña, as súas portas e xanelas conservan o seu sitio.
- {{ui:Desfacer}} e {{ui:Refacer}} levan cada colocación, movemento ou eliminación cara atrás e cara adiante.

## Que se rexeita

- **Non cabe nese muro.** A porta ou xanela é máis ancha que o muro, ou sobresaería por un dos seus extremos. Probe unha anchura menor ou un muro máis longo.
- **É máis alta que o muro.** O peitoril máis a altura queda por enriba da parte superior do muro.

## O que se garda

Cada porta ou xanela é unha porta ou xanela IFC coas súas dimensións, o seu funcionamento (por exemplo, batente simple á esquerda), o seu tipo de tamaño (un tipo para cada tamaño da súa familia), `Pset_DoorCommon` ou `Pset_WindowCommon` e cantidades base, e enche unha abertura IFC no seu muro. A superficie lateral neta e o volume do muro deixan fóra a abertura. Outros programas BIM ábrena como unha porta nun muro.

## Cousas que convén saber

- A planta mostra as portas abertas a 90° co seu sentido, as portas corredoiras como dous paneis, as portas de cavidade deslizando dentro do muro, as portas de garaxe como unha liña discontinua por enriba, e as xanelas coas súas liñas de marco e vidro.
- A anchura é a anchura total do marco; a folla da porta é a anchura menos os dous marcos laterais.
- Copiar portas e xanelas debuxadas aínda non está feito: coloque outra.

## Xanela de evacuación de soto con pozo

Escolla **Xanela de evacuación de soto con pozo** na lista de tipos de xanela. Empeza como unha xanela batente de 36 × 48 polgadas cun peitoril a 36 polgadas sobre o nivel. O pozo está no exterior do muro, con polo menos 48 polgadas de anchura libre, 36 polgadas de saínte e un fondo 6 polgadas por debaixo do peitoril. Aparece como liñas discontinuas na planta e como tres lados abertos por enriba en 3D. O pozo forma parte do corpo IFC da xanela, así que gardar, mover, cambiar o tamaño ou eliminar a xanela leva consigo o pozo. Ao cambiar o tamaño, consérvanse polo menos 6 polgadas libres xunto a cada marco lateral.

Son valores predeterminados de modelado, non unha certificación de cumprimento das condicións de evacuación. Comprobe por separado a abertura libre real do fabricante, a normativa local, a rasante, a drenaxe e calquera escaleira necesaria. A profundidade e a altura do pozo son dimensións predefinidas; non seguen o terreo.
