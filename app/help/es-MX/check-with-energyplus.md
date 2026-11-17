---
title: Comprobar calefacción y enfriamiento con EnergyPlus
summary: Escriba el modelo como archivo de EnergyPlus, o ejecute EnergyPlus versión 26.2.0 sobre él en el navegador, y compare sus cargas de diseño con la ayuda rápida de calefacción y enfriamiento. Una segunda opinión para el diseño preliminar, no un cálculo de cumplimiento.
keywords: energyplus, simulación de energía, día de diseño, carga de calefacción, carga de enfriamiento, archivo de clima, epw, idf, masa térmica, energía anual, simular
from: b82a5bf2
---

## Qué hará

El panel **Comprobar con EnergyPlus** escribe el modelo abierto como archivo de entrada de EnergyPlus (un IDF): una zona por espacio, los muros, pisos, techos y ventanas con sus valores U, las renovaciones de aire y la calefacción y el enfriamiento ideales. Siempre puede **guardar ese archivo** y ejecutarlo en su propio EnergyPlus.

Si además configura el motor, el panel puede simular en el momento y enumera la calefacción y el enfriamiento de diseño de EnergyPlus junto a los de la ayuda rápida, espacio por espacio.

Esta es una ayuda de diseño. Los códigos de energía, las certificaciones y los permisos requieren una herramienta aprobada y los datos climáticos que exija, y el resultado debe ser revisado por la persona que responde por él.

## Configurar el motor

BimCraft no incluye EnergyPlus. Es una compilación WebAssembly grande (unos 6 MB comprimida, más un archivo de datos de 4.6 MB), así que usted lo aloja y escribe su dirección en el panel. La página lo carga solo cuando pulsa un botón de simulación, nunca al iniciar. La dirección debe ser https, una ruta de este sitio o localhost.

## Días de diseño o un año

- **Simular días de diseño** no necesita archivo de clima. Ejecuta un día frío de invierno sin sol y un día caluroso y despejado de verano, con las temperaturas de las entradas de calefacción y enfriamiento de la pestaña Luz diurna, y reporta la carga de cada espacio en vatios.
- **Simular un año** necesita un archivo de clima en formato EPW que usted elija. Agrega personas, luces y equipos a partir de las mismas entradas (siempre encendidos, ya que no se inventa ningún horario) y reporta la energía de calefacción y enfriamiento de cada espacio en kWh. Los archivos de clima tienen sus propias licencias, así que use solo uno que esté autorizado para usar.

## Masa térmica

Marque **Dar masa térmica a los muros con capas conocidas** y los muros, techos y pisos cuyas capas de material se conocen se escriben capa por capa, con densidad y calor específico tomados de una tabla corta de valores típicos según el nombre del material. Las capas se toman primero desde el exterior, en el orden en que las enumera el archivo. Los elementos sin capas se mantienen con su valor U y sin masa.

## Leer la comparación

Los dos métodos responden preguntas ligeramente distintas. La ayuda rápida conserva cada elemento; el archivo de EnergyPlus promedia los valores U de cada espacio por tipo de superficie. Una diferencia mayor al 15 % en la calefacción de diseño de un espacio aparece como nota en el panel ⚠, con ambas cifras. El enfriamiento difiere más por diseño: la ayuda rápida calcula un pico a partir del sol en una fecha, y EnergyPlus dimensiona con su propio día de diseño.
