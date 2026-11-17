---
title: Cambiar un muro, unha porta ou unha xanela
summary: Prema nun muro, porta ou xanela debuxado e cambie o seu tipo, tamaño, altura ou lugar en Propiedades, ou arrástreo na planta; cada cambio é un paso de desfacer.
keywords: cadrar, cadrado, 90, ángulo recto, oblicuo, ángulo, orto, tamaño do cuarto, cara interior, cara exterior, medir desde, distancia de desprazamento, distancia escrita, curvo, arco, altura do arco, radio, liña de situación, xustificación, cambiar, editar, propiedades, tipo de muro, grosor, lonxitude, altura, desfase da base, parte superior, nivel, inverter, exterior, tamaño da porta, tamaño da xanela, peitoril, distancia, mover, agarradeira, arrastrar, cambiar tipo, varios
from: 63052d5d
---

## O que vai facer

Cambie o que debuxou: escolla un muro, unha porta ou unha xanela, despois escriba un número novo en **Propiedades** ou arrástreo na planta. A planta e a vista 3D seguen o cambio, as esquinas únense de novo, e as portas e xanelas seguen nos seus muros.

## Cambiar un muro

1. Con {{ui:Debuxar}} activado e {{ui:Seleccionar}} activado, prema no muro na planta (ou na vista 3D).
2. **Propiedades** mostra unha caixa cos números do muro. Cambie un e prema {{key:Enter}}:
   - **Tipo de muro**: outro dos tipos iniciais. O grosor e as capas cambian con el.
   - **Grosor**: calquera grosor. O tipo conserva as súas outras capas e a capa principal (os montantes ou o bloque) asume a diferenza, por exemplo «Exterior 2×6, 200 mm».
   - **Medir desde**: **Liña central**, **Cara interior** ou **Cara exterior**. **Lonxitude** e **Tamaño do cuarto** lense e fíxanse desde aí. A cara exterior é o que mostran as cotas da planta.
   - **Lonxitude**: o extremo do muro despraza ao longo da súa liña. O muro unido nese extremo move-se en cadrado consigo mesmo e conserva o seu ángulo.
   - **Tamaño do cuarto** (cando hai un muro paralelo ao outro lado do cuarto): escriba o tamaño que quere. Este muro move-se en cadrado e os muros unidos estíranse para seguilo.
   - **Mover en cadrado**: escriba canto se move o muro en cadrado consigo mesmo: un número simple move para fóra, un número negativo move para dentro.
   - **Ángulo co muro unido**: o ángulo co muro unido no seu inicio. Escriba 90 para poñelo en cadrado. Un muro sen unión mostra **Dirección**, en graos desde o leste.
   - {{ui:Poñer en cadrado}}: volve pór en ángulo recto os muros conectados a este, na dirección na que vai a maior parte da súa lonxitude. Funciona sobre todo o cuarto ou disposición conectada, sexa cal for o muro que escolla. Un muro a máis de 10 graos dun ángulo recto queda como está, así que un fixado a 45 graos está a salvo. Un {{ui:Desfacer}} retira todo.
   - **Altura do muro**: **Ata o nivel superior** segue ese nivel; **Ata o nivel 3** (e calquera nivel máis arriba) fai un muro que atravesa os niveis intermedios, e escribir unha altura fixa entón a distancia por debaixo ou por riba dese nivel á que está a parte superior. **Altura fixa** conserva o número que escribe. **Atravesa** lista os niveis que pasa ese muro: debúxase máis claro nas súas plantas, os cuartos alí péchanse contra el, e pódense colocar portas e xanelas nel desde esas plantas. Móvese e redebúxase no nivel no que comeza.
   - **Desfase da base**: canto por riba do nivel comeza o muro. A súa parte superior queda onde estaba.
   - **Exterior**: {{ui:Inverter}} pon as capas exteriores na outra cara.
   - **Liña de situación**: **Liña central**, **Cara exterior**, **Cara interior**, **Cara esquerda** ou **Cara dereita**. Cambiala non move nada. Máis adiante, cando o muro engorda (por tipo ou **Grosor**) ou se inverte o seu exterior, a liña de situación queda no seu sitio e o muro crece ou se inverte ao seu redor. Un muro recto que se lle une nunha esquina séguea, así que a esquina segue pechada. A liña de situación do muro escollido debúxase en trazos na planta. Escolla varios muros para fixala en todos.
   - **Altura do arco** (muros curvos): canto se afasta do centro dunha liña recta. 0 fai que sexa recto; un valor negativo curva o outro lado. O radio mostrase xunto a el.
3. Cada cambio é un paso en **Cambios**; {{ui:Desfacer}} o retira.

## Arrastrar un muro na planta

Cando se escolle un muro, mostra tres agarradeiras: un cadrado en cada extremo e un círculo no centro.

- Arrastre un extremo para alongar, acurtar ou xirar o muro. Encaixa igual que a ferramenta Muro, e colle en cadrado co muro unido no outro extremo cando está a menos de 3 graos; {{key:Shift}} mantena nos eixes da planta.
- Os muros unidos no extremo que arrastra conservan o seu ángulo: os seus extremos deslízanse pola súa propia liña para encontrar a nova liña do muro, así que nada queda inclinado. Mantenga {{key:Mod}} para un arrastre libre (o extremo do muro unido vén co seu, e ese muro xira), ou {{key:Alt}} para romper as uniones neste muro.
- Arrastre o centro para mover todo o muro en cadrado consigo mesmo, sexa cal for o sentido do arrastre. As súas esquinas deslízanse polos muros unidos, así que eses muros conservan o seu ángulo.
- Mantenga {{key:Mod}} mentres arrastra o centro para un movemento libre, cando realmente queira romper o ángulo. {{ui:Poñer en cadrado}} o devolve.
- Mentres se mantén unha agarradeira, escriba unha distancia e prema {{key:Enter}} (ou solte): o muro vai exactamente esa distancia, no sentido do arrastre. {{key:Esc}} cancela o movemento.
- Un muro curvo escollido mostra agarradeiras nos seus extremos e unha agarradeira redonda no centro do arco. Arrastre a agarradeira redonda para curvalo.
- As portas e xanelas quedan no muro. Un muro demasiado curto para o que contén recházase con «Non cabe nese muro.»

## Cambiar unha porta ou unha xanela

1. Prema na porta ou xanela na planta.
2. En **Propiedades**: **Tipo** (outra porta ou xanela do mesmo tipo), **Largura**, **Altura**, **Peitoril** (xanelas), **Desde o inicio** e **Desde o final** (a distancia desde cada extremo da cara do muro ata o seu bordo), **Bisagras** {{ui:Inverter}} (portas dunha folla e xanelas de batente; as portas correderas, de peto, de granxa e plegables din **Ábrese cara a** no seu lugar; as xanelas fixas, colgadas e de cadro e as portas dobres non teñen ningún), e **Abre cara a** (portas) ou **Lado do marco** (xanelas) {{ui:Inverter}}.
3. Ou arrástreo ao longo do seu muro, ou ata outro muro: ver [Portas e xanelas](topic:doors-and-windows).

## Cambiar varios á vez

Escolla varios muros (ou varias portas, ou varias xanelas) con {{key:Shift}}+clic ou {{key:Mod}}+clic. **Propiedades** ofrece o que comparten: **Cambiar tipo…**, a altura, o tamaño. Un só cambio fíxaos todos, e un {{ui:Desfacer}} retira todo.

## Cousas que conviña saber

- Os números móstranse nas {{ui:Unidades}} escollidas na barra de ferramentas.
- Os muros, portas e xanelas doutros programas mostran os seus datos IFC en **Propiedades** como antes, sen esta caixa.
