---
title: Estructura de paredes, pisos y techos
summary: Generá montantes, soleras, dinteles, viguetas, cabios o cerchas desde el modelo y guardalos con él; se rehacen cuando cambian paredes, aberturas, pisos o techo, y la planilla Madera es la lista de cortes.
keywords: TJI, vigueta I, tabla de luces de vigueta, cargar una tabla, estructura, marco, montante, solera, solera superior, dintel, montante de rey, montante de apoyo, trimmer, montante corto, umbral, blocking, esquina, esquina californiana, te, vigueta, viga de borde, trimmer, cabio, cabio de cadera, cabio de valle, cabio intermedio, cumbrera, viguetas de cielorraso, tirante, cercha, madera, lista de cortes, pie tablar, 2x4, 2x6, separación, entre ejes
from: 76d0ffb5
---

## Mba'épa ndejapóta

Estructura edificio ojapóva ndive. BimCraft montantes, soleras ha dinteles pared-pe, viguetas piso-pe ha cabios (térã cerchas) techo-pe ohechakuaa; tamaño rehe tabla predeterminada rupi omoĩ, modelo ndive ohendáva, ha ojejapo jey peteĩ-peteĩ oñemoambue jave. Planilla **Madera** lista de cortes.

## Estructurar

1. Nivel-pe, eabrí {{ui:Compilación}} ha eiporavo {{ui:Estructura}}.
2. Eiporavo **separación** (16" térã 24" entre ejes; 400 térã 600 mm), **esquinas** (tres montantes térã californiana), **Cabios** térã **Cerchas** techo-pe, ha pared mediana altura **blocking** ryepe. Piso-pe eiporavo **Madera aserrada** térã **TJI (preliminar)** ha viguetas dirección automática, plano X térã plano Y.
3. Ekliki **Estructurar cada pared**, térã peteĩ pared, piso térã techo (techo oguerekóva nivel-pe) ha estructura peteĩ ojapo.

**Mostrar estructura** omboke estructura pieza opavave, capa-icha; **Ver a través** oculta pared, piso ha techo estructurado, estructura añoite ehecha haguã.

## Mba'épa oñemoĩ

- **Paredes**: solera inferior (puerta-pe ojeguasu), solera superior doble, montantes layout-pe pared ñepyrũ, montante rey ha jack puerta ha ventana dintel, cortos dinteles arriba ha ventana ári umbral, esquinas paredes oñeguerekóva (pared oguejy esquina montantes), mokõi respaldo montantes oñemoĩ pared ambue pared t, blocking montante-kuéra mediopeve.
- **Pisos**: viguetas piso mboyve ñorairõ rehe defecto, térã eiporavo plano eje rupi; borde ári viga borde, escalera ryepe doble trimmer ha dintel, viguetas oñemboguejy cortos (cola viguetas). Modo TJI oiporavo mboyve tabla serie ha profundidad oike medido luz libre separación rupi.
- **Techos**: cabios común ñe'ẽ aléro-pe, cabios jack cadera ha valle oñemoĩ, cabio cadera ha valle, cumbrera tablas, viguetas cielorraso solera-pe ha tirantes, térã simple cerchas separación rupi, peteĩ-peteĩ pieza.

## Ojeporavo

Eiporavo estructura pieza 3D vista térã árbol del modelo-pe. **Propiedades** omoĩ estructura: separación, piso vigueta tipo ha dirección, esquinas, blocking térã techo estructura ojeporavo. Pared, puerta, ventana ojeporavo, piso térã techo ojeporavo jave estructura ojejapo jey automáticamente.

Estructura ojejapóva jey pieza ojapo reservar, eiporavo ha ekliki **Mantener esta pieza cuando se vuelva a estructurar**. Pieza oguerekóva ojeguarda hína; ambue estructura oñemoambue jave oñemarca ehechaháicha.

## Tablas de luces TJI cargadas

BimCraft ndoguerekói fabricante tabla de luces (fabricante-pe, edición oñemoambue). Eiporavo piso estructura, emoĩ **Viguetas de piso** **TJI (preliminar)** ha eiporavo **Cargar una tabla…** **Propiedades**-pe: archivo `cadcraft-tji-table` formato, JSON térã CSV, fabricante tabla actual rehe ojapo. Fabricante, producto ha edición réra, dato origen, ha peteĩ-peteĩ caso carga (carga viva, carga muerta, límite de deflexión, longitud de apoyo) mboyve luz libre serie ha profundidad peteĩ-peteĩ separación-pe.

- BimCraft piso **luz libre** oheka, profundidad mboyve pyahu-pe ha upépe serie, lista luz separación ha elegido caso rehe oñemboguejy; piso upe rehe estructurado. Luz térã separación tabla ári oikóramo ohechauka ha ndojejapói.
- Cargas, límite de deflexión, longitud de apoyo, tabla ha frase "Orientación preliminar de distribución; la selección final requiere las tablas del fabricante y las cargas del proyecto" Planilla Madera-pe ojejapo, modelo-pe estructura ndive oguarda ha **Problemas** panel-pe nota. Tabla ejemplo marcada advertencia-pe.
- **Reglamentos de construcción** complemento ON jave, piso viguetas regla tabla cargada leeha; tabla'ỹ TJI viguetas upe chequeo-gui oñemboguejy, upéicha ojapo.
- Tabla ko navegador-pe oikóta peve oñemboguejy térã ambue cargá. Archivo: `format` (`cadcraft-tji-table`), `version` 1, `manufacturer`, `product`, `edition`, `source`, `units` (`imperial`: pulgadas, pies, psf; térã `metric`: mm, metros, kPa), `cases` (`id`, `live`, `dead`, `deflection`, `bearing`) ha `rows` (`series`, `depth`, `spans`: caso id peteĩ-peteĩ, separación ha luz libre mboyve, ejemplo `"16": "15-6"`). CSV-pe mismo dato `# clave = valor` línea, upéi `series,depth,case,spacing,span`.
- Tabla cargada'ỹ jave, TJI estructura ndojejapóiva ha ndaha oñemoambue: **Cargar una tabla TJI: las tablas del fabricante son suyas y no vienen incluidas.** Tabla TJI anterior incorporada modelo (ko cambio ndive ántes) ojuhúva viguetas oikopaite; Propiedades ha Problemas omombe'u tabla oikotevẽ, piso tabla cargáva jey estructurable.

Ko ha'e orientación de distribución. Viguetas selección final oikotevẽ fabricante tabla, proyecto cargas ha ingeniero.

## Lista de cortes

Planillas panel-pe eiporavo **Madera**: opavave estructura pieza tamaño ha compra longitud stock rupi (2' longitud entero 8' ári; 600 mm paso milímetro-pe), pieza cantidad ha pie tablar ndive. **CSV** oñeguerojarã.

:::warning
Dintel, vigueta, cabio ha cabio techo tamaño tabla predeterminada típica casa un ha dos piso-pe ojuhúvape, ndaha ingeniería. **Propiedades** omombe'u luz térã abertura tabla ári ojehasa ramo. Diseñador térã ingeniero luz, cargas ha conexiones ohecha.

TJI distribución ojeporúva oiporavo tabla cargada, maker tabla actual ojapo; BimCraft ndoguerekói ninguna. Sugerencia ndohechái apoyo, carga puntual, voladizo, agujero, escalera dintel térã conexión, modelo I forma esquemática.
:::

## Mba'épa oñemoĩ

Estructura pared, piso térã techo peteĩ IFC elemento ensamblaje ("Estructura") IfcMember (montante, solera, cabio, tirante, blocking, cercha) ha IfcBeam (dintel, vigueta, borde, cumbrera) peteĩ-peteĩ tamaño, longitud ha pie tablar ndive.
