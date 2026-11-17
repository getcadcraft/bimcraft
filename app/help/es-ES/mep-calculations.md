---
title: Dimensionar tuberías y conductos, comprobar el llenado de cables y la iluminación
summary: Compruebe el dimensionamiento de tuberías de suministro y conductos con la pérdida de presión, tienda cables en bandejas y canalizaciones y vea su llenado, y calcule la iluminancia de las salas a partir de archivos IES o EULUMDAT. Los valores por defecto están etiquetados; escriba los valores del código vigente.
keywords: dimensionamiento, dimensionamiento de tuberías, dimensionamiento de conductos, pérdida de presión, unidades de aparato, demanda, Hunter, Hazen-Williams, velocidad, rozamiento, rozamiento igual, presión del ventilador, compuerta, camino crítico, bandeja de cables, canalización, llenado, lista de cables, ies, ldt, eulumdat, fotometría, iluminancia, lux, uniformidad, cálculo de iluminación, densidad de potencia, mep, cálculos, problemas
from: 9cb90815
---

## Qué hará

Dibuje las tuberías, conductos, bandejas de cables y canalizaciones como de costumbre, y luego abra el panel **Cálculos**. Cada pestaña lee el modelo, muestra una tabla y lista lo que está mal como Problemas en el panel ⚠. Cuando un tamaño resolvería un problema, **Aplicar tamaños** cambia los tramos en un solo paso de {{ui:Deshacer}}.

Son ayudas al dibujo. Cada valor por defecto aparece etiquetado en pantalla, y ninguno es una tabla de código: escriba los números de la norma a la que diseña y haga que el resultado lo revise el ingeniero que responde por él.

## Tuberías

1. Elija la clave de **sistema** (agua fría es `cw`, agua caliente `hw`).
2. Fije la velocidad máxima y, si quiere comprobar la presión, la presión en el origen y la presión mínima que necesita un aparato.
3. Haga clic en {{ui:Comprobar}}.

Cada tubería soporta la demanda de las unidades de aparato situadas aguas abajo. La demanda sale de una curva de unidades de aparato frente a caudal, tal como la describió Hunter. **La curva integrada es un ejemplo, no una tabla de código**; los Problemas lo indican hasta que introduzca la suya. El rozamiento es Hazen–Williams, los accesorios son coeficientes de pérdida y una subida cuesta 9.8 kPa por metro. Las unidades de un aparato dependen de su tipo, o del número que fije con la herramienta de asistente `loads_set`.

## Conductos

Fije el sistema, la tasa de rozamiento (rozamiento igual) o una velocidad, y cualquier pérdida de batería, filtro o silenciador. Los terminales toman su caudal de `loads_set` en el difusor. La tabla muestra la velocidad y el rozamiento por pieza, la **presión del ventilador** en el camino crítico, y la presión que debe absorber la compuerta de cada otro terminal. Las pérdidas de los accesorios usan coeficientes por defecto redondeados, no una base de datos de accesorios.

## Bandejas de cables y canalizaciones

Dibújelas con la herramienta {{ui:Ducto}}: los sistemas **Bandeja de cables** y **Canalización** se guardan como portacables, de modo que otros programas las leen como bandejas y canalizaciones. En la pestaña Cables, pegue la lista de cables (etiqueta, diámetro exterior en mm, cantidad, from, to). `from` y `to` son la etiqueta de un equipo o un punto `x,y,z` en milímetros. Los cables siguen el recorrido continuo más corto por las bandejas y canalizaciones; cada tramo muestra su llenado frente a los límites que escriba, y la lista se guarda como CSV con una longitud que incluye un porcentaje de holgura y los extremos.

## Iluminación

Asigne a cada luminaria su archivo IES (LM-63) o EULUMDAT con la herramienta de asistente `photometry_set`. Escriba los objetivos, la separación de la malla y la altura del plano de trabajo. El resultado es solo iluminancia **directa**: sin interreflexión ni sombras, así que en una sala es un límite inferior.

## Rociadores contra incendios

El complemento **Rociadores contra incendios** tiene su propia pestaña; consulte su ayuda.
