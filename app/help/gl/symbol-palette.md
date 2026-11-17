---
title: A paleta de símbolos
summary: Busque símbolos eléctricos e de fontanería por nome ou imaxe, marque cunha estrela os que usa e colóqueos na planta cun clic.
keywords: paleta de símbolos, botón de símbolos na barra, seguir o muro, símbolos, símbolos eléctricos, símbolos de fontanería, planta de fontanería, inodoro, WC, lavabo, pía, bañeira, ducha, desaugadoiro de chan, rexistro, billa de manga, quentador de auga, válvula, válvula de compuerta, auga fría, auga quente, residuos, ventilación, estilo de liña, favoritos, busca
from: 67f20bc0
---

## Que vai facer

Abra un panel que lista os símbolos eléctricos e os símbolos de planta de fontanería coas súas imaxes e nomes, atope o que quere e colóquello na planta. Aquí non hai que ter internet: os símbolos veñen coa aplicación.

## Abrir e colocar un símbolo

1. Abra un modelo e abra {{ui:Compilación}} › {{ui:Paleta de símbolos}} (comando escrito: SYMBOLS). O mesmo botón está no menú Ferramentas da barra Debuxar e como **Símbolos** no grupo Biblioteca da barra de ferramentas.
2. Escolla un conxunto: **Eléctrico** ou **Fontanería**, ou **Todos os conxuntos**. Escriba no cadro de busca para reducir a lista. Pode buscar por nome ou por abreviatura (WC, CW, HB).
3. Prema un símbolo. A planta queda lista para colocalo.
   - Un símbolo **eléctrico** activa a ferramenta Eléctrica co dispositivo escollido, así que aplícase todo o que se explica en [A planta eléctrica](topic:electrical-plan): faga clic na planta, un paso de desfacer.
   - Un símbolo de **fontanería** activa a ferramenta de símbolos de planta. Faga clic na planta. Un aparello que vai na parede (un inodoro, un lavabo, unha bañeira, unha pía, unha billa de manga) axústase á cara máis próxima do muro, coas costas ao muro; os desaugadoiros, as válvulas, o quentador de auga e os estilos de liña van onde fai clic.
4. Prema {{key:R}} para xirar o símbolo 90 graos ({{key:Shift}}+{{key:R}} xírao no outro sentido), ou escriba un ángulo en **Rotación** na barra de opcións. Prema {{key:Esc}} para parar.

Un aparello ou billa de manga que se axustou a unha cara do muro lembra ese muro: cando o muro se move, o símbolo move con el (mesma cara, mesma distancia ao longo do muro) no mesmo paso de desfacer. Se elimina o muro, o símbolo queda onde estaba e **Problemas** indica "perdeu o seu muro"; móvao ou elimínao. Os símbolos colocados lonxe dos muros non están ligados a nada.

Cada símbolo que coloca é un paso de desfacer. Un símbolo colocado é unha anotación de planta no ficheiro IFC coa súa etiqueta (WC1, WC2, ...). Prémao para cambiar a súa etiqueta ou o seu xiro en **Propiedades**, ou prema {{key:Delete}}.

## Que ten o conxunto de fontanería

Aparellos (inodoro, urinario, lavabo, bañeira, ducha, pía de cociña, pía simple), un desaugadoiro de chan, rexistros de limpeza de chan e de muro, unha billa de manga, unha toma de auga de muro, un quentador de auga, válvulas (de compuerta, de globo, de esfera, de retención, de bolboreta, reductora de presión) e estilos de liña coas súas abreviaturas: auga fría (CW), auga quente (HW), retorno de auga quente (HWR), residuos (W), ventilación (V), desaugadoiro pluvial (SD) e gas (G). Os debuxos escalan coa planta, así que conservan o seu tamaño na folla impresa. Un estilo de liña é un trazo curto para amosar o estilo na planta; debuxe os tramos reais de tubaxe coas ferramentas de tubaxe.

:::note
Estas son convencións habituais de planta de fontanería, debuxadas por nós; non están certificadas segundo ISO 4067-1 nin ASME Y32.4. Compáranse con lexendas de debuxo públicas e manuais de formación (a lista está na nota de fontes do conxunto, que indica onde coincidimos e onde diferimos), non se copiaron de ningún produto, e son de uso libre (Apache-2.0). Os conxuntos de debuxo difiren, así que comprobe a lexenda do seu propio proxecto. Son símbolos de planta, non un deseño de fontanería: non dimensionan tubos nin comproban normativas.
:::

## Favoritos e teclado

- Prema a estrela dun símbolo (ou prema {{key:F}} sobre el) para gardalo como favorito. Os favoritos aparecen primeiro e permanecen neste navegador. **Só favoritos** mostra só eses.
- {{key:Down}} desde o cadro de busca pasa aos símbolos; as teclas de frecha, {{key:Home}} e {{key:End}} móvense entre eles; {{key:Enter}} escolle o enfocado; {{key:Esc}} pecha a paleta.
- No teléfono a paleta é unha folla na parte inferior da pantalla; apártase cando escolle un símbolo para que vexa a planta. Ábrea de novo desde o menú {{ui:Compilación}} ou o botón **Paleta** na barra de opcións.

:::tip
Se un ficheiro usa un conxunto de símbolos que esta versión non ten, a planta amosa unha caixa no lugar do símbolo e **Problemas** o indica.
:::

## Ligar un elemento colocado a un símbolo

Unha lámpada da biblioteca é un elemento 3D, pero un esquema eléctrico a amosa como o seu símbolo. Colóquea **unha vez** e ligue:

1. Escolla Compilación › **Ligazón de símbolo** (ou escriba SYMBOLLINK). Ábrese unha sección Ligazón de símbolo no panel esquerdo.
2. Seleccione os elementos colocados na planta ou en 3D. A sección indica cantos están seleccionados e a que están ligados.
3. Escolla o **Símbolo** (de calquera conxunto de símbolos: Eléctrico, Fontanería) e prema **Ligar**.

O elemento segue sendo un só elemento, e cada cadro o conta unha vez:

- **En 3D** amosa sempre o seu corpo.
- Unha **planta** amosa a súa forma en planta, como antes.
- Unha planta cuxa opción **Esta vista amosa os elementos ligados como** está en **O seu símbolo (un esquema de instalacións)** amosa o símbolo no seu lugar. Un clic no símbolo escolle o elemento. A opción consérvase no ficheiro para esa vista (a planta dun nivel, a súa planta de teito ou un detalle).

**Xirar o símbolo 90°** xira o símbolo en relación ao seu elemento. **Quitar a ligazón** elimínaa; o elemento queda. O cadro **Símbolos ligados** lista cada elemento ligado unha vez, co seu nivel e o cuarto onde está.

Sen construír: a elección dunha vista nunha folla é a elección da planta do nivel que mostra; os dispositivos colocados coa ferramenta Eléctrica son símbolos en todas as plantas, como antes.
