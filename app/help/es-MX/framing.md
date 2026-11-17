---
title: Estructura de madera en muros, pisos y cubiertas
summary: Genere montantes, soleras, dinteles, viguetas, cabios o armaduras a partir del modelo y consérvelos con él; se vuelven a generar cuando cambian los muros, las aberturas, los pisos o la cubierta, y la lista Madera es la lista de cortes.
keywords: TJI, vigueta I, tabla de claros de vigueta, cargar una tabla, estructura, entramado, montante, solera, solera superior, dintel, montante de rey, montante de jamba, montante corto, alféizar, bloqueo, esquina, esquina California, te, vigueta, vigueta de borde, vigueta de cierre, vigueta de remate, cabio, cabio de limatesa, cabio de limahoya, cabio jack, cumbrera, vigueta de techo, tirante, armadura, madera, lista de cortes, board feet, 2x4, 2x6, separación, entre ejes
from: 76d0ffb5
---

## Qué va a hacer

Estructure el edificio a partir de lo que dibujó. BimCraft dispone los montantes, soleras y dinteles en los muros, las viguetas en los pisos y los cabios (o armaduras) en la cubierta; los dimensiona con tablas predeterminadas rotuladas, los conserva con el modelo y los vuelve a generar cada vez que cambia lo que estructuran. La lista **Madera** es la lista de cortes.

## Estructurarlo

1. En un nivel, abra {{ui:Compilación}} y elija {{ui:Estructura de madera}}.
2. Elija la **separación** (16" o 24" entre ejes; 400 o 600 mm), las **esquinas** (de tres montantes o California), **Cabios** o **Armaduras** para las cubiertas, y si los muros llevan una fila de **bloqueo** a media altura. Para los pisos, elija **Madera aserrada** o **TJI (preliminar)** y deje la dirección de las viguetas en automático, o elija eje X o eje Y del plano.
3. Haga clic en **Estructurar cada muro**, o haga clic en un muro, un piso o una cubierta (en el nivel sobre el que descansa la cubierta) para estructurar solo ese.

Desactive **Mostrar estructura** para ocultar todas las piezas, como si fuera una capa; **Ver a través** oculta los muros, pisos y cubiertas que están estructurados, para que pueda ver solo la estructura.

## Qué obtiene

- **Muros**: una solera inferior (cortada en las puertas), una solera superior doble, montantes sobre la distribución desde el inicio del muro, montantes de rey y de jamba, y un dintel en cada puerta y ventana; montantes cortos sobre los dinteles y bajo las ventanas; un alféizar en bruto bajo las ventanas; esquinas donde se encuentran los muros (el muro que pasa continuo toma los montantes de esquina); dos montantes de respaldo donde otro muro entra en te; y bloqueo entre montantes.
- **Pisos**: viguetas a lo largo del lado corto del piso por defecto, o a lo largo del eje del plano que elija; viguetas de borde alrededor del perímetro, y viguetas de remate dobles alrededor de un hueco de escalera, con las viguetas que lo cruzan cortadas en longitud (viguetas de cola). El modo TJI elige la serie y el peralte más pequeños de la lista que alcanzan el claro libre medido, con la separación elegida.
- **Cubiertas**: cabios comunes a escuadra con cada alero, cabios jack donde las limatesas y limahoyas los cortan, cabios de limatesa y de limahoya, cumbreras, viguetas de techo sobre las soleras y tirantes, o armaduras simples a la separación, una pieza cada una.

## Cambiarla

Seleccione cualquier pieza de la estructura en la vista 3D o en el árbol del modelo. **Propiedades** muestra su estructura: cambie la separación, el tipo y la dirección de las viguetas, las esquinas, el bloqueo o la estructura de la cubierta. Al mover muros, puertas y ventanas, o al cambiar el piso o la cubierta, la estructura se vuelve a generar sola.

Para conservar una pieza que colocó a propósito cuando se vuelva a generar la estructura, seleccione la pieza y elija **Conservar esta pieza cuando se vuelva a generar la estructura**. Una pieza conservada se queda donde está; cuando cambia la estructura alrededor, se marca para que usted la revise.

## Viguetas TJI desde una tabla que usted carga

BimCraft no incluye tablas de claros de ningún fabricante de viguetas (son del fabricante, y cambian con cada edición). Seleccione la estructura de un piso, ponga **Viguetas del piso** en **TJI (preliminar)** y elija **Cargar una tabla…** en **Propiedades**: un archivo en el formato `cadcraft-tji-table`, JSON o CSV, que usted preparó a partir de las tablas de claros vigentes del fabricante. Indica el fabricante, el producto, la edición y de dónde salen los números, y enumera para cada caso de carga (carga viva, carga muerta, límite de deflexión, longitud de apoyo) el claro libre máximo de cada serie y peralte a cada separación.

- BimCraft toma el **claro libre** del piso, elige el peralte más bajo y, dentro de él, la serie cuyo claro indicado alcanza para la separación y el caso de carga que usted eligió, y estructura el piso con ella. Si el claro o la separación están fuera de la tabla, lo indica y no cambia nada.
- Las cargas, el límite de deflexión, la longitud de apoyo, la tabla y la frase «Guía de distribución preliminar; la selección final requiere las tablas del fabricante y las cargas del proyecto» se imprimen en la lista Madera, se escriben en el modelo con la estructura y se listan en el panel **Problemas** como una nota. Una tabla marcada como ejemplo lo indica con una advertencia.
- Con el complemento **Reglamentos de construcción** activado, su regla de viguetas de piso también lee una tabla cargada; sin tabla, las viguetas TJI quedan fuera de esa revisión, como antes.
- La tabla permanece en este navegador hasta que la borre o cargue otra. El archivo: `format` (`cadcraft-tji-table`), `version` 1, `manufacturer`, `product`, `edition`, `source`, `units` (`imperial`: pulgadas, pies, psf; o `metric`: mm, metros, kPa), `cases` (`id`, `live`, `dead`, `deflection`, `bearing`) y `rows` (`series`, `depth`, `spans`: para cada id de caso, la separación y el claro libre máximo, como `"16": "15-6"`). En CSV, los mismos datos van en líneas `# clave = valor`, seguidas de `series,depth,case,spacing,span`.
- Sin una tabla cargada, un diseño TJI se rechaza y nada cambia: **Cargue una tabla TJI: las tablas del fabricante son suyas y no vienen integradas.** Un modelo estructurado con la tabla TJI integrada anterior (antes de este cambio) conserva todas sus viguetas; Propiedades y Problemas indican que hace falta la tabla, y el piso se puede volver a estructurar cuando cargue una. Las viguetas de madera maciza funcionan como antes.

Esto es una guía de distribución. La selección final de viguetas requiere las tablas del fabricante, las cargas del proyecto y al ingeniero.

## La lista de cortes

En el panel de Listas, elija **Madera**: cada pieza de la estructura agrupada por tamaño y por la longitud comercial que compraría (longitudes completas de 2' desde 8'; pasos de 600 mm a partir de 2400 en milímetros), con el número de piezas y los board feet. **CSV** la descarga.

:::warning
Los tamaños de dinteles, viguetas, cabios y viguetas de techo provienen de tablas predeterminadas rotuladas para una casa típica de uno o dos niveles; no son ingeniería. **Propiedades** indica cuándo un claro o una abertura están fuera de su tabla. Un diseñador o ingeniero revisa claros, cargas y conexiones.

Los diseños TJI usan solo una tabla que usted carga, preparada a partir de las tablas vigentes del fabricante; BimCraft no incluye ninguna. La sugerencia no revisa apoyos, cargas puntuales, voladizos, perforaciones, dinteles de escalera ni conexiones, y el perfil I del modelo es esquemático.
:::

## Qué se guarda

Cada muro, piso o cubierta estructurado es un ensamblaje de elementos IFC («Estructura de madera») formado por miembros IFC (montantes, soleras, cabios, tirantes, bloqueos, armaduras) y vigas (dinteles, viguetas, vigas de borde, cumbreras), cada una con su tamaño, longitud y board feet.
