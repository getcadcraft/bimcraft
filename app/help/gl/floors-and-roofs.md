---
title: Cuartos, chans, tetos e cubertas
summary: Os cuartos aparecen cando os muros os pechan; dé a un cuarto ou a todo o edificio un chan e un teito, e ponla unha cuberta a catro augas ou a hastial sobre os muros. Todo segue aos muros cando estes se moven.
keywords: cuarto, cuartos, espazo, superficie, perímetro, chan, laxe, subchan, teito, cuberta, cuberta a catro augas, cuberta a hastial, pendente, voadizo, beirado, cume, val, 6/12
from: 1fb1813c
---

## O que vai facer

Complete a envolvente do edificio. Os cuartos saen dos muros por si sós; os chans, os tetos e a cuberta requiren un clic cada un. Como se obteñen a partir dos muros, seguen aos muros cando estes se moven.

## Cuartos

Todo espazo pechado por muros debuxados é un cuarto. Aparece en canto o último muro o pecha, cun número (101, 102 … no primeiro nivel, 201 … no seguinte) e un nome (**Cuarto 1**, **Cuarto 2** …), e a súa superficie aparece no centro da planta.

- Con {{ui:Seleccionar}} activado, faga clic dentro dun cuarto para seleccionalo. En **Propiedades** cambie o seu **Nome** (por exemplo `Cociña`) e o **Número**; amósanse a súa superficie e o seu perímetro.
- Elimine un muro entre dous cuartos e forman un só; debuxe un muro atravesando un cuarto e pasa a ser dous. Un cuarto conserva o seu nome e o seu número mentres se moven os muros que o rodean.
- Un cuarto non se pode eliminar por si só: é o espazo que forman os muros.

As superficies miden-se dentro das caras dos muros. Os cuartos gárdanse como espazos IFC coa súa superficie de chan, o seu perímetro, a súa altura e o seu volume, para que os cuadros os lean (vexa [Sumar cantidades, listar elementos e elaborar cuadros de espazos](topic:quantity-totals)).

## Chans

1. Faga clic en {{ui:Chan}}.
2. Escolla **Este cuarto** ou **Todo o edificio**, o **Tipo** (chan de madeira ou laxe de formigón) e o seu grosor.
3. Sinale dentro dun cuarto (ou en calquera punto do edificio). A superficie que cubriría o chan aparece resaltada coa súa área.
4. Faga clic. A cara superior do chan é o chan do nivel; baixa polo seu grosor. Un chan de todo o edificio chega ás caras exteriores dos muros.

## Tetos

1. Faga clic en {{ui:Teito}}.
2. Escolla **Este cuarto** ou **Todo o edificio**, e a súa **Altura** sobre o chan.
3. Sinale dentro e faga clic.
4. Para velo desde abaixo, coa súa cuadrícula e as luces, cambie a planta á súa planta de teito: vexa [Vistas, rangos de vista e as súas propias follas](topic:views-and-sheets).

## Unha cuberta

1. No nivel cuxos muros sosteñen a cuberta, faga clic en {{ui:Cuberta}}.
2. Escriba a **Pendente** como elevación sobre 12 (`6/12`) ou en graos (`30`), e o **Voadizo**.
3. Escolla os **Remates**: **Cuberta a catro augas** (todos os lados inclinados), **Hastiais nos lados curtos** ou **Hastiais nos lados longos** (un edificio de catro lados), ou **Cuberta dun agua**.
4. Sinale dentro do edificio: o beirado e o cume aparecen na planta. Faga clic.

A cuberta descansa sobre os muros, no nivel superior a eles, e a súa cara inferior encontra a cara exterior dos muros. Os remates a hastial énchense cun muro a hastial tan groso como o muro inferior. Un edificio en forma de L, T ou U recibe unha cuberta a catro augas cuxas ás se atopan en vales.

## Cambialos

Seleccione un chan, un teito ou unha cuberta (na vista 3D, na árbore do modelo, ou unha cuberta faciendo clic dentro do seu contorno no nivel superior) e cambie os valores en **Propiedades**: o tipo do chan, o seu grosor e canto sobe a súa cara superior sobre o nivel; a altura, o grosor e o **Patrón** dun teito (a cuadrícula que debuxa a planta de teitos: ningún, 600 × 600, 600 × 1200, 2' × 2' ou 2' × 4'); a pendente, o voadizo, os remates e o grosor dunha cuberta. Cada cambio é un paso de desfacer.

## Dar a un chan, teito ou cuberta un tipo con capas

Un chan, un teito e unha cuberta poden ter un **tipo**, como o ten un muro: unha composición con nome formada por capas, cada unha co seu material e o seu grosor real.

- **Ao colocalo.** As ferramentas Chan, Teito, Cuberta e Debuxar chan teñen unha lista **Tipo** na súa fila. **Sen tipo** colócao como antes, co seu propio grosor. Un tipo colócao tan groso como o conxunto das súas capas.
- **Máis tarde.** Seleccione o chan, o teito ou a cuberta e escolla **Tipo** en Propiedades. O elemento segue sendo o mesmo: conserva o seu sitio, o seu cuarto e os seus datos, e non se debuxa de novo. Só cambian o seu tipo, o seu grosor e o seu material. Así, un elemento en fase de esbozo pasa a ser un elemento desenvolvido: cambie o tipo xenérico por un real.
- **Editar o tipo…** abre o editor de tipos sobre ese tipo: capas de arriba abaixo, o núcleo, a función de cada capa e a etiqueta LOD do tipo. Gardar cambia todos os elementos do tipo dunha vez, e un Desfacer devolve o cambio. Cambiar un tipo inicial garda unha copia como tipo propio.
- Mentres un elemento teña un tipo, o seu **Grosor** é o do tipo e non se pode escribir. Escolla outro tipo, ou **Sen tipo**, para cambialo.

Os tipos iniciais son un tipo **xenérico** para cada elemento (unha capa do material xenérico, etiquetada LOD 200) e dous tipos con capas (etiquetados LOD 300): un chan de vigas de madeira e un chan de formigón con capa de regularización; unha cuberta de madeira e unha cuberta plana de formigón; un teito de placa de xeso e un teito suspendido de placas. Son valores de partida, non construcións probadas: revise as capas antes de fiarse delas.

O cuadro **Capas: superficie e volume** lista cada capa de cada tipo en uso; vexa [Cuadros, dimensións e PDF](topic:plan-schedules-and-pdf). Os tipos de chan, cuberta e teito viaxan entre proxectos nun paquete de tipos ou como elemento da Biblioteca; vexa [Paquetes de tipos](topic:type-packs).

## Cousas que convén saber

- Mover, engadir ou eliminar muros fai de novo os cuartos, os chans, os tetos e a cuberta que están sobre eles.
- Unha cuberta encaixa en calquera contorno. Para dar a cada muro a súa propia pendente, remate a hastial ou a un lado, unha placa elevada, un faldón e un sofito, ou para debuxar un só plano de cuberta, vexa [Cubertas: unha pendente para cada muro, hastiais, cubertas dun agua e planos de cuberta](topic:roofs).
- {{key:Delete}} elimina o chan, o teito ou a cuberta seleccionados.
