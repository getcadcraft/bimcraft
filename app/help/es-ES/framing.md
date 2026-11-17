---
title: Entramar muros, pisos y cubiertas
summary: Genere montantes, soleras, dinteles, viguetas, pares o cerchas a partir del modelo y consérvelos con él; se vuelven a generar cuando cambian los muros, las aberturas, los pisos o la cubierta, y la tabla Madera es la lista de corte.
keywords: TJI, vigueta en I, tabla de luces de viguetas, cargar una tabla, entramado, estructura, montante, montantes, solera, solera superior, dintel, montante principal, montante de apoyo, montante corto, alféizar, bloqueo, esquina, esquina californiana, encuentro en T, vigueta, vigueta de borde, vigueta de cierre, par, par de limatesa, par de limahoya, par suelto, cumbrera, tirante, riostra, cercha, madera, lista de corte, pies tablares, 2x4, 2x6, separación, entre ejes
from: 76d0ffb5
---

## Qué hará

Entrame el edificio a partir de lo que dibujó. BimCraft traza los montantes, las soleras y los dinteles de los muros, las viguetas de los pisos y los pares (o cerchas) de la cubierta, los dimensiona con tablas predeterminadas etiquetadas, los conserva con el modelo y los vuelve a generar cada vez que cambia lo que sostienen. La tabla **Madera** es la lista de corte.

## Entramar

1. En un nivel, abra {{ui:Compilación}} y elija {{ui:Estructura de madera}}.
2. Elija la **separación** (16" o 24" entre ejes; 400 o 600 mm), las **esquinas** (de tres montantes o californianas), **Pares** o **Cerchas** para las cubiertas, y si los muros llevan una fila de **bloqueos** a media altura. Para los pisos elija **Madera aserrada** o **TJI (preliminar)** y ponga la dirección de las viguetas en automática, en el eje X o en el eje Y del plano.
3. Haga clic en **Entramar todos los muros**, o haga clic en un muro, un piso o una cubierta (en el nivel donde se apoya la cubierta) para entramar solo ese elemento.

Desactive **Mostrar entramado** para ocultar todas las piezas, como si fuera una capa; **Ver a través** oculta los muros, pisos y cubiertas que tienen entramado, para que pueda ver solo el entramado.

## Qué obtiene

- **Muros**: una solera inferior (cortada en las puertas), una solera superior doble, montantes en la disposición desde el inicio del muro, montantes principales y de apoyo y un dintel en cada puerta y ventana, montantes cortos sobre los dinteles y bajo las ventanas, un alféizar en bruto bajo las ventanas, esquinas donde se encuentran los muros (el muro que pasa conserva los montantes de esquina), dos montantes de refuerzo donde otro muro se une en T, y bloqueos entre montantes.
- **Pisos**: viguetas en la dirección corta del piso por defecto, o a lo largo del eje del plano que elija; vigas de borde alrededor del perímetro, y vigas de cierre y dinteles dobles alrededor de un hueco de escalera, con las viguetas que lo atraviesan cortadas en longitud corta (viguetas de cola). El modo TJI elige la serie y el canto más pequeños de la lista que alcancen la luz libre medida con la separación elegida.
- **Cubiertas**: pares comunes escuadrados con cada alero, pares cortos donde las limatesas y las limahoyas los cortan, pares de limatesa y de limahoya, cumbreras, tirantes de techo sobre las soleras y riostras, o cerchas sencillas a la separación, una pieza cada una.

## Cambiarla

Seleccione cualquier pieza del entramado en la vista 3D o en el árbol del modelo. **Propiedades** muestra su entramado: cambie la separación, el tipo y la dirección de las viguetas de piso, las esquinas, los bloqueos o el entramado de la cubierta. Al mover muros, puertas y ventanas, o al cambiar el piso o la cubierta, el entramado se vuelve a generar por sí solo.

Para conservar una pieza que colocó a propósito cuando el entramado se vuelva a generar, selecciónela y elija **Conservar esta pieza al volver a generar el entramado**. Una pieza conservada se queda donde está; cuando cambia el entramado de su alrededor, se marca para que la revise.

## Pisos TJI desde una tabla que cargue

BimCraft no incluye las tablas de luces de los fabricantes de viguetas (son del fabricante y cambian con cada edición). Seleccione el entramado de un piso, ponga las **Viguetas del piso** en **TJI (preliminar)** y elija **Cargar una tabla…** en **Propiedades**: un archivo en formato `cadcraft-tji-table`, JSON o CSV, que usted elaboró a partir de las tablas de luces vigentes del fabricante. Indica el fabricante, el producto y la edición, y de dónde proceden los datos, y enumera para cada caso de carga (sobrecarga de uso, carga permanente, límite de flecha, longitud de apoyo) la mayor luz libre de cada serie y canto a cada separación.

- BimCraft toma la **luz libre** del piso, elige el canto más bajo y, dentro de él, la serie cuya luz indicada alcanza esa luz para la separación y el caso de carga que usted eligió, y entrama el piso con ella. Si la luz o la separación están fuera de la tabla, lo indica y no cambia nada.
- Las cargas, el límite de flecha, la longitud de apoyo, la tabla y la frase "Guía de disposición preliminar; la selección final requiere las tablas del fabricante y las cargas del proyecto" se imprimen en la tabla Madera, se escriben en el modelo junto con el entramado y aparecen en el panel **Problemas** como nota. Una tabla marcada como ejemplo lo indica en una advertencia.
- Con el complemento **Normativa de construcción** activado, su regla de viguetas de piso también lee una tabla cargada; sin tabla, las viguetas TJI quedan fuera de esa comprobación, como antes.
- La tabla permanece en este navegador hasta que la borre o cargue otra. El archivo: `format` (`cadcraft-tji-table`), `version` 1, `manufacturer`, `product`, `edition`, `source`, `units` (`imperial`: pulgadas, pies, psf; o `metric`: mm, metros, kPa), `cases` (`id`, `live`, `dead`, `deflection`, `bearing`) y `rows` (`series`, `depth`, `spans`: para cada id de caso, la separación y la mayor luz libre, como `"16": "15-6"`). En CSV, los mismos datos son líneas `# clave = valor`, seguidas de `series,depth,case,spacing,span`.
- Sin tabla cargada, una disposición TJI se rechaza y nada cambia: **Cargue una tabla TJI: las tablas del fabricante son suyas y no están integradas.** Un modelo entramado con la antigua tabla TJI integrada (anterior a este cambio) conserva todas las viguetas que tiene; Propiedades y Problemas indican que hace falta la tabla, y el piso puede volver a entramarse cuando cargue una.
- Las viguetas de madera maciza funcionan como antes.

Esto es una guía de disposición. La selección final de viguetas requiere las tablas del fabricante, las cargas del proyecto y la intervención del ingeniero.

## La lista de corte

En el panel de Tablas, elija **Madera**: cada pieza del entramado agrupada por sección y por la longitud comercial que compraría (longitudes de 2' enteras desde 8'; pasos de 600 mm desde 2400 en milímetros), con el número de piezas y los pies tablares. **CSV** la descarga.

:::warning
Las secciones de dintel, vigueta, par y tirante de techo proceden de tablas predeterminadas etiquetadas para una casa típica de una o dos plantas, no de cálculo de ingeniería. **Propiedades** indica cuándo una luz o una abertura superan su tabla. Un proyectista o un ingeniero comprueba luces, cargas y uniones.

Las disposiciones TJI usan solo una tabla que usted cargue, elaborada a partir de las tablas vigentes del fabricante; BimCraft no incluye ninguna. La sugerencia no comprueba el apoyo, las cargas puntuales, los voladizos, los huecos, los dinteles de hueco de escalera ni las uniones, y la forma en I del modelo es esquemática.
:::

## Qué se guarda

Cada muro, piso o cubierta entramado es un conjunto de elementos IFC ("Framing") formado por barras IFC (montantes, soleras, pares, riostras, bloqueos, cerchas) y vigas (dinteles, viguetas, vigas de borde, cumbreras), cada una con su tamaño, su longitud y sus pies tablares.
