---
title: Configuración de BimCraft
summary: Escolla se se amosan os cuartos e espazos, se se debuxan as arestas e en que vista se abre un modelo, e comece a colocar elementos co axuste ao muro activado.
keywords: configuración, preferencias, opcións, espazos, cuartos, ifcspace, arestas, liñas, rendemento, modelo grande, vista de apertura, cámara, vista superior, axuste ao muro, axuste
from: 4416e64f
---

Abra {{ui:Configuración}} coa engrenaxe da barra da aplicación ou con {{key:Mod+,}}. A primeira lapela, {{ui:BimCraft}}, contén os axustes propios desta aplicación; {{ui:Xeral}} contén os que comparten todas as aplicacións de CadCraft (tema, barra de ferramentas, paneis). Os axustes de BimCraft existen só na aplicación: cámbiaos aquí, e este navegador lémbraos. {{ui:Restablecer os axustes de BimCraft}} na parte inferior do diálogo devolve os axustes de BimCraft, e os compartidos, ao estado inicial.

## Menús, teclas e rato

O estilo do menú (a barra de ferramentas propia de BimCraft, unha barra de menú de deseño de vivendas, unha cinta BIM ou unha liña de comandos de debuxo), as súas propias teclas e menús, e o que fan a roda e os botóns do rato. Consulte [Menús, teclas e rato](topic:menus-keys-and-mouse).

## Cando se abre un modelo

- **Mostrar cuartos e espazos** (desactivado ao principio): os cuartos e espazos son caixas transparentes que poden ocultar os muros que hai detrás, polo que comezan ocultos. O botón {{ui:Espazos}} segue activándoos e desactivándoos para o modelo aberto.
- **Arestas**: {{ui:Arestas activadas}} (o inicial) debuxa as liñas de aresta que dan o aspecto de debuxo técnico. {{ui:Só modelos pequenos}} debúxaas só para modelos de menos de 300.000 triángulos, o que mantén máis ágiles os modelos grandes ao xirar. {{ui:Arestas desactivadas}} abre todos os modelos sen elas. O botón {{ui:Arestas}} segue cambiándoas para o modelo aberto. Por riba de 1,5 millóns de triángulos as arestas están sempre desactivadas.

## Os debuxos ábrense en

Así se amosa primeiro un debuxo DWG ou DXF: {{ui:3D (o máis rápido)}} (o inicial) debuxa con rapidez mesmo un debuxo grande, ou {{ui:Modelo (2D)}} abre a vista plana do espazo de modelo. As lapelas sobre o debuxo cambian entre {{ui:Modelo}}, as follas e {{ui:3D}} en calquera momento. Un debuxo sen nada no espazo de modelo, ou un navegador que non pode amosar 3D, ábrese sempre en 2D.

## Vista de apertura

A cámara coa que se abre un modelo: {{ui:Axustar}} (o inicial, todo o modelo desde unha esquina), {{ui:Superior}}, {{ui:Fronte}} ou {{ui:Lateral}}. Os botóns sobre o modelo cambian a vista en calquera momento.

**Un edificio xirado no seu emprazamento**: moitos modelos chegan co edificio en ángulo cos eixes do ficheiro (en coordenadas de levantamento ou compartidas). {{ui:En cadrado co edificio}} (o inicial) amosa así o edificio en cadrado: {{ui:Axustar}}, {{ui:Superior}}, {{ui:Fronte}}, {{ui:Lateral}}, as caras do cubo de vistas e cada nova sección seguen os seus muros, e a brúxula do cubo de vistas segue apuntando ao norte do modelo. {{ui:Como está colocado no emprazamento}} mantén os eixes do ficheiro. Un edificio cuxos muros van polos eixes vese igual nos dous casos.

## Colocación de elementos da biblioteca

**Comece con o axuste ao muro activado** (desactivado ao principio): ao comezar a colocar ou pegar un elemento da biblioteca, a súa parte posterior axústase ao muro máis próximo, orientada cara ao cuarto. {{key:Tab}} ou {{ui:Axuste ao muro}} na barra de colocación desactívao de momento. Un piso sen muros comeza sen el.

## Caixa de sección

{{ui:Marxe ao redor da selección}} é canto espazo deixa {{ui:Caixa de sección arredor da selección}} a cada lado dos elementos seleccionados, en milímetros: 300 ao principio, ata 5000. Consulte [Cortar un modelo IFC cun plano de sección](topic:section-plane).

## Localización

{{ui:Latitude e lonxitude en}} escolle o sistema no que {{ui:Medir}} › {{ui:Localización}} dá as latitudes e lonxitudes: WGS 84 (EPSG:4326, o inicial, como usan o GPS e os mapas web), {{ui:O datum propio do ficheiro}}, ou un de ETRS89, NAD83, GDA94, GDA2020, NZGD2000, JGD2011 e CGCS2000. O sistema de mapa e o datum propios do ficheiro amósanse sempre tamén. Consulte [Medir distancias, superficies de caras e localizacións en 3D](topic:measure).

## Indicador de esquina

O que aparece na esquina inferior dereita das vistas 3D (un modelo IFC, e un debuxo cambiado a 3D): {{ui:Cubo de vistas}} (o inicial), {{ui:Icona de eixes}} (unha pequena X, Y e Z) ou {{ui:Ningún}}. Cambia ao instante. A vista de debuxo 2D nunca amosa ningún.

No cubo de vistas, faga clic nunha cara, aresta ou esquina para mirar desde ese lado, arrastre o cubo para orbitar, arrastre o anel para xirar e faga clic na casa para a vista inicial.

## O seu nome nas incidencias

Con sesión iniciada, as incidencias levan o nome da súa conta e BimCraft non pide nada: esta parte amosa {{ui:Desde a súa conta (<name>)}}. {{ui:Usar outro nome}} abre unha caixa para un nome distinto, que prevalece ata que escolla {{ui:Usar o nome da miña conta}}. Sen sesión iniciada, o formulario de incidencia pide un nome como antes. Consulte [Incidencias e ficheiros BCF](topic:issues-bcf).

## Asistentes

**Permitir que os asistentes de IA e os scripts usen BimCraft** (desactivado ao principio) permite que un asistente do seu computador acceda ao modelo aberto a través de CadCraft Studio: **Ler** localiza elementos e lee as súas propiedades, **Cambiar a vista** illa, oculta e mostra elementos. **Actividade** lista as súas chamadas. Consulte [Permitir que un asistente de IA traballe co seu modelo](topic:assistants).

:::note
Os demais axustes aplícanse cando se abre un modelo ou comeza a colocación. Un modelo que xa está aberto mantén o seu aspecto ata que use os botóns da barra de ferramentas ou o volva abrir.
:::

## Relacionado

- [Copiar, pegar e duplicar elementos da biblioteca](topic:copy-paste)
- [Colocar equipos e mobiliario desde a biblioteca](topic:place-from-library)
- [A pantalla de BimCraft](topic:workspace)
- [Permitir que un asistente de IA traballe co seu modelo](topic:assistants)
