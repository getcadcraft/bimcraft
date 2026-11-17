---
title: Verificar calefacción y refrigeración con EnergyPlus
summary: Guarde el modelo como archivo de EnergyPlus, o ejecute EnergyPlus versión 26.2.0 sobre él en el navegador, y compare sus cargas de diseño con la ayuda rápida de calefacción y refrigeración. Una segunda opinión para el diseño preliminar, no un cálculo de cumplimiento.
keywords: energyplus, simulación energética, día de diseño, carga de calefacción, carga de refrigeración, archivo meteorológico, epw, idf, masa térmica, energía anual, simular
from: b82a5bf2
---

## Mba'e rejapóta

El panel **Verificar con EnergyPlus** escribe el modelo abierto como archivo de entrada de EnergyPlus (un IDF): una zona por ambiente, los muros, pisos, techos y ventanas con sus valores U, las renovaciones de aire y la calefacción y refrigeración ideales. Siempre puede **guardar ese archivo** y ejecutarlo en su propio EnergyPlus.

Si además configura el motor, el panel puede simular en el momento y muestra la calefacción y refrigeración de diseño de EnergyPlus junto a las de la ayuda rápida, ambiente por ambiente.

Esta es una ayuda de diseño. Los códigos de energía, las certificaciones y los permisos necesitan una herramienta aprobada y los datos climáticos que exige, y el resultado debe ser revisado por la persona que responde por él.

## Configurar el motor

BimCraft no incluye EnergyPlus. Es una compilación WebAssembly grande (unos 6 MB comprimida, más un archivo de datos de 4,6 MB), así que usted lo aloja y escribe su dirección en el panel. La página lo carga solo cuando presiona un botón de simulación, nunca al iniciar. La dirección debe ser https, una ruta de este sitio o localhost.

## Días de diseño o un año

- **Simular días de diseño** no necesita archivo meteorológico. Corre un día frío de invierno sin sol y un día caluroso y despejado de verano, con las temperaturas de las entradas de calefacción y refrigeración de la pestaña Luz diurna, e informa la carga de cada ambiente en vatios.
- **Simular un año** necesita un archivo meteorológico en formato EPW que usted elija. Agrega personas, luces y equipos de las mismas entradas (siempre encendidos, porque no se inventa ningún horario) e informa la energía de calefacción y refrigeración de cada ambiente en kWh. Los archivos meteorológicos tienen sus propias licencias, así que use uno que tenga permiso de usar.

## Masa térmica

Marque **Dar masa térmica a muros con capas conocidas** y los muros, techos y pisos cuyas capas de material se conocen se escriben capa por capa, con densidad y calor específico tomados de una tabla corta de valores típicos según el nombre del material. Las capas se toman de afuera hacia adentro, en el orden en que las lista el archivo. Los elementos sin capas quedan con su valor U y sin masa.

## Leer la comparación

Los dos métodos responden preguntas un poco distintas. La ayuda rápida conserva cada elemento; el archivo de EnergyPlus promedia los valores U de cada ambiente por tipo de superficie. Una diferencia mayor al 15 % en la calefacción de diseño de un ambiente se lista como nota en el panel ⚠, con las dos cifras. La refrigeración difiere más por diseño: la ayuda rápida calcula un pico a partir del sol en una fecha, y EnergyPlus dimensiona con su propio día de diseño.
