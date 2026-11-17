---
title: Estruturar muros, chans e cubertas
summary: Xerar montantes, soleiras, dintés, viguetas, cabrios ou cerchas a partir do modelo e gardalos con el; refanse cando cambian os muros, os ocos, os chans ou a cuberta, e o cuadro de madeira é a lista de cortes.
keywords: TJI, vigueta en I, táboa de vans, cargar unha táboa, estrutura, montante, soleira, soleira superior, dintel, montante principal, montante de apoio, viga de remate, vigueta de borde, cabrio, cabrio de faldón, cabrio de val, cabrio curto, táboa de cume, vigueta de teito, tirante, cercha, madeira, lista de cortes, board feet, 2x4, 2x6, espazamento, entre eixes
from: 76d0ffb5
---

## O que vai facer

Estruture o edificio a partir do que debuxou. BimCraft dispón os montantes, as soleiras e os dintés nos muros, as viguetas nos chans e os cabrios (ou as cerchas) na cuberta, dimensiónaos segundo táboas predeterminadas etiquetadas, gárdaos co modelo e refáios cada vez que cambia o que estruturan. O **cuadro de madeira** é a lista de cortes.

## Estruturalo

1. Nun nivel, abra {{ui:Compilación}} e escolla {{ui:Estrutura}}.
2. Escolla o **espazamento** (16" ou 24" entre eixes; 400 ou 600 mm), as **esquinas** (tres montantes ou California), **Cabrios** ou **Cerchas** para as cubertas, e se os muros levan unha fila de **calzos** a media altura. Para os chans escolla **Madeira aserrada** ou **TJI (preliminar)**, e poña a dirección das viguetas en automático, en planta X ou en planta Y.
3. Faga clic en **Estruturar todos os muros**, ou faga clic nun muro, nun chan ou nunha cuberta (no nivel onde se apoia a cuberta) para estruturar só ese.

Desactive **Amosar estrutura** para ocultar todas as pezas, como unha capa; **Ver a través** oculta os muros, chans e cubertas que están estruturados, para ver só a estrutura.

## O que obtén

- **Muros**: unha soleira inferior (cortada nas portas), unha soleira superior dobre, montantes na disposición desde o inicio do muro, montantes principais e de apoio e un dintel en cada porta e xanela, montantes curtos sobre os dintés e baixo as xanelas, un peitoril bruto baixo as xanelas, esquinas onde se atopan os muros (o muro que pasa continuo queda cos montantes de esquina), dous montantes de reforzo onde outro muro se une en T, e calzos entre os montantes.
- **Chans**: viguetas atravesando o lado curto do chan por defecto, ou ao longo do eixe de planta que escolla; viguetas de borde ao redor do bordo, e vigas de remate dobradas e dintés ao redor dun oco de escaleira, con as viguetas que o atravesan cortadas curtas (viguetas de cola). O modo TJI escolle a serie e o canto máis pequenos da lista que cheguen ao ván libre medido co espazamento escollido.
- **Cubertas**: cabrios comúns en esquadría con cada beirado, cabrios curtos onde os faldóns e os vales os cortan, cabrios de faldón e de val, táboas de cume, viguetas de teito sobre as soleiras e tirantes; ou cerchas simples ao espazamento, unha peza cada unha.

## Cambialo

Seleccione calquera peza de estrutura na vista 3D ou na árbore do modelo. **Propiedades** amosa a súa estrutura: cambie o espazamento, o tipo e a dirección das viguetas do chan, as esquinas, os calzos ou a estrutura da cuberta. Ao mover muros, portas e xanelas, ou ao cambiar o chan ou a cuberta, a estrutura refáise sola.

Para conservar unha peza que colocou a propósito cando se refai a estrutura, selecciónea e escolla **Manter esta peza cando se refaga a estrutura**. Unha peza conservada queda onde está; cando cambia a estrutura arredor dela márcase para que a poida comprobar.

## Viguetas TJI dunha táboa que cargue

BimCraft non trae táboas de vans de fabricantes de viguetas (son do fabricante e cambian con cada edición). Escolla a estrutura dun chan, poña **Viguetas do chan** en **TJI (preliminar)** e escolla **Cargar unha táboa…** en **Propiedades**: un ficheiro no formato `cadcraft-tji-table`, JSON ou CSV, que fixo a partir das táboas de vans vixentes do fabricante. Indica o fabricante, o produto e a edición, e de onde saíron os datos, e lista para cada caso de carga (sobrecarga, carga permanente, límite de frecha, lonxitude de apoio) o maior ván libre de cada serie e de cada canto a cada espazamento.

- BimCraft toma o **ván libre** do chan, escolle o canto máis pouco fondo e, dentro del, a serie cuxo ván listado chega para o espazamento e o caso de carga escollidos, e estrutura o chan con ela. Se o ván ou o espazamento están fóra da táboa, avisa e non cambia nada.
- As cargas, o límite de frecha, a lonxitude de apoio, a táboa e a frase «Orientación preliminar de disposición; a selección final require as táboas do fabricante e as cargas do proxecto» imprímense no cuadro de madeira, escríbense no modelo coa estrutura e lístanse no panel **Problemas** como nota. Unha táboa marcada como exemplo di isto nun aviso.
- Co complemento **Regulamentos de construción** activado, a súa regra de viguetas de chan tamén lee unha táboa cargada; sen táboa, as viguetas TJI quedan fóra desa comprobación, como antes.
- A táboa queda neste navegador ata que a borre ou cargue outra. O ficheiro: `format` (`cadcraft-tji-table`), `version` 1, `manufacturer`, `product`, `edition`, `source`, `units` (`imperial`: polgadas, pés, psf; ou `metric`: mm, metros, kPa), `cases` (`id`, `live`, `dead`, `deflection`, `bearing`) e `rows` (`series`, `depth`, `spans`: para cada id de caso, o espazamento e o maior ván libre, por exemplo `"16": "15-6"`). En CSV, os mesmos datos son liñas `# clave = valor`, seguidas de `series,depth,case,spacing,span`.
- Sen táboa cargada, unha disposición TJI recházase e nada cambia: **Cargue unha táboa TJI: as táboas do fabricante son del e non están incorporadas.** Un modelo estruturado coa táboa TJI incorporada anterior (antes deste cambio) conserva todas as viguetas que ten; Propiedades e Problemas indican que hai que cargar a táboa, e o chan pode volver a estruturarse cando cargue unha. As viguetas de madeira aserrada seguen funcionando como antes.

Esta é unha orientación de disposición. A selección final das viguetas precisa as táboas do fabricante, as cargas do proxecto e o enxeñeiro.

## O cuadro de cortes

No panel Cuadros escolla **Madeira**: cada peza de estrutura agrupada por tamaño e pola lonxitude comercial que compraría (lonxitudes de 2' enteiras desde 8'; pasos de 600 mm en milímetros), co número de pezas e os board feet. **CSV** descarga o cuadro.

:::warning
As medidas de dintés, viguetas, cabrios e viguetas de teito proveñen de táboas predeterminadas etiquetadas para unha casa típica dunha ou dúas plantas, non de cálculo. **Propiedades** indica cando un ván ou un oco superan a súa táboa. Un deseñador ou un enxeñeiro comproba vans, cargas e unións.

As disposicións TJI usan só unha táboa que vostede cargue, feita a partir das táboas vixentes do fabricante; BimCraft non trae ningunha. A suxestión non comproba os apoios, as cargas puntuais, os voadizos, os furados, os dintés do oco de escaleira nin as unións, e o perfil I do modelo é esquemático.
:::

## O que se garda

Cada muro, chan ou cuberta estruturado é un conxunto de elementos IFC («Estrutura») formado por barras IFC (montantes, soleiras, cabrios, tirantes, calzos, cerchas) e vigas (dintés, viguetas, vigas de borde, táboas de cume), cada un co seu tamaño, a súa lonxitude e os seus board feet.
