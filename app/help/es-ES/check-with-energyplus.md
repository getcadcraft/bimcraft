---
title: Comprobar la calefacción y la refrigeración con EnergyPlus
summary: Escriba el modelo como archivo de EnergyPlus, o ejecute EnergyPlus versión 26.2.0 sobre él en el navegador, y compare sus cargas de diseño con la ayuda rápida de calefacción y refrigeración. Una segunda opinión para el diseño preliminar, no un cálculo de cumplimiento.
keywords: energyplus, simulación energética, día de diseño, carga de calefacción, carga de refrigeración, archivo meteorológico, epw, idf, masa térmica, energía anual, simular
from: b82a5bf2
---

## Qué hará

El panel **Comprobar con EnergyPlus** escribe el modelo abierto como archivo de entrada de EnergyPlus (un IDF): una zona por habitación, los muros, suelos, cubiertas y ventanas con sus valores U, las renovaciones de aire y la calefacción y refrigeración ideales. Siempre puede **guardar ese archivo** y ejecutarlo en su propio EnergyPlus.

Si además configura el motor, el panel puede simular en el momento y muestra la calefacción y refrigeración de diseño de EnergyPlus junto a las de la ayuda rápida, habitación por habitación.

Esto es una ayuda de diseño. Los códigos energéticos, las certificaciones y los permisos requieren una herramienta aprobada y los datos climáticos que exija, y el resultado debe ser revisado por la persona que responde por él.

## Configurar el motor

BimCraft no incluye EnergyPlus. Es una compilación WebAssembly grande (unos 6 MB comprimida, más un archivo de datos de 4.6 MB), así que lo aloja usted mismo y escribe su dirección en el panel. La página solo lo carga cuando pulsa un botón de simulación, nunca al arrancar. La dirección debe ser https, una ruta de este sitio o localhost.

## Días de diseño o un año

- **Simular días de diseño** no necesita archivo meteorológico. Ejecuta un día frío de invierno sin sol y un día caluroso y despejado de verano, con las temperaturas de las entradas de calefacción y refrigeración de la pestaña Luz natural, e informa de la carga de cada habitación en vatios.
- **Simular un año** necesita un archivo meteorológico en formato EPW que usted elija. Añade personas, luces y equipos de las mismas entradas (siempre activos, ya que no se inventa ningún horario) e informa de la energía de calefacción y refrigeración de cada habitación en kWh. Los archivos meteorológicos tienen sus propias licencias, así que use uno que pueda utilizar.

## Masa térmica

Marque **Dar masa térmica a los muros con capas conocidas** y los muros, cubiertas y suelos cuyas capas de material se conocen se escriben capa por capa, con densidad y calor específico tomados de una breve tabla de valores típicos por nombre de material. Las capas se toman primero desde el exterior, en el orden en que las lista el archivo. Los elementos sin capas se quedan con su valor U y sin masa.

## Leer la comparación

Los dos métodos responden a preguntas ligeramente distintas. La ayuda rápida conserva cada elemento; el archivo de EnergyPlus promedia los valores U de cada habitación por tipo de superficie. Una diferencia superior al 15 % en la calefacción de diseño de una habitación aparece como nota en el panel ⚠, con ambas cifras. La refrigeración difiere más por diseño: la ayuda rápida calcula un pico a partir del sol en una fecha, y EnergyPlus dimensiona con su propio día de diseño.
