---
title: Dimensionar tuberías y ductos, revisar el llenado de cables e iluminación
summary: Revise el tamaño de tuberías de suministro y ductos con la pérdida de presión, trace cables por charolas portacables y canalizaciones y vea su llenado, y calcule la iluminancia en salas a partir de archivos IES o EULUMDAT. Los valores predeterminados llevan una etiqueta; escriba los valores del código vigente.
keywords: dimensionado, dimensionado de tuberías, dimensionado de ductos, pérdida de presión, unidades de mueble sanitario, demanda, hunter, hazen-williams, velocidad, fricción, fricción igual, presión del ventilador, compuerta, ruta crítica, charola portacables, canalización, llenado, tabla de cables, ies, ldt, eulumdat, fotometría, iluminancia, lux, uniformidad, cálculo de iluminación, densidad de potencia, mep, cálculos, problemas
from: 9cb90815
---

## Qué hará

Dibuje las tuberías, ductos, charolas portacables y canalizaciones como de costumbre, y luego abra el panel **Cálculos**. Cada pestaña lee el modelo, muestra una tabla y enumera lo que está mal como Problemas en el panel ⚠. Cuando un tamaño resolvería un Problema, **Aplicar tamaños** cambia los tramos en un solo paso de {{ui:Deshacer}}.

Estas son ayudas de dibujo. Cada valor predeterminado está rotulado en pantalla, y ninguno es una tabla de código: escriba los números de la norma con la que diseña y haga que el ingeniero responsable revise el resultado.

## Tuberías

1. Elija la clave de **sistema** (agua fría es `cw`, agua caliente `hw`).
2. Fije la velocidad máxima y, si quiere que se revise la presión, la presión en la fuente y la presión mínima que necesita un mueble.
3. Haga clic en {{ui:Comprobar}}.

Cada tubería lleva la demanda de las unidades de mueble sanitario que tiene debajo. La demanda sale de una curva de unidades de mueble sanitario contra el caudal, como la describió Hunter. **La curva integrada es un ejemplo, no una tabla de código**; los Problemas lo indican hasta que escriba la suya. La fricción es Hazen–Williams, los accesorios son coeficientes de pérdida y cada subida cuesta 9.8 kPa por metro. Las unidades de un mueble vienen de su tipo, o del número que fije con la herramienta de asistente `loads_set`.

## Ductos

Fije el sistema, la tasa de fricción (fricción igual) o una velocidad, y cualquier pérdida de serpentín, filtro o silenciador. Las terminales toman su caudal de aire de `loads_set` en el difusor. La tabla muestra la velocidad y la fricción por pieza, la **presión del ventilador** en la ruta crítica y la presión que debe absorber la compuerta de cada otra terminal. Las pérdidas en accesorios usan coeficientes predeterminados redondeados, no una base de datos de accesorios.

## Charolas portacables y canalizaciones

Dibújelas con la herramienta Ducto: los sistemas **Charola portacables** y **Canalización** se guardan como portadores de cables, así que otros programas las leen como charolas y canalizaciones. En la pestaña Cables, pegue la lista de cables (etiqueta, diámetro exterior en mm, cantidad, desde, hasta). `from` y `to` son la etiqueta de un equipo o un punto `x,y,z` en milímetros. Los cables siguen la ruta continua más corta por las charolas y canalizaciones; cada tramo muestra su llenado frente a los límites que escriba, y la tabla se guarda como CSV con una longitud que incluye un porcentaje de holgura y los extremos.

## Iluminación

Asigne a cada luminaria su archivo IES (LM-63) o EULUMDAT con la herramienta de asistente `photometry_set`. Escriba los valores objetivo, el espaciado de la malla y la altura del plano de trabajo. El resultado es solo iluminancia **directa**: sin interreflexión ni sombras, así que es un límite inferior en una sala.

## Rociadores contra incendio

El complemento **Rociadores contra incendio** tiene su propia pestaña; consulte su ayuda.
