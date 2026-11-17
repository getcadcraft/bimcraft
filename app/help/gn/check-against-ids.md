---
title: Verificar un modelo contra el IDS del cliente
summary: Cargue el archivo .ids que le entregaron y vea en Problemas cada elemento que no lo cumple, antes de entregar el IFC.
keywords: ids, especificación de entrega de información, buildingsmart, requisitos, entrega, verificación, validación, control de calidad, eir, bep, propiedad, clasificación, material, contratación
from: 7b960222
---

## Mba'e rejapóta

IDS (Information Delivery Specification, estándar de buildingSMART) ha'e lista de mba'e ojeikotevẽ IFC-pe: mboja'o clase, mba'e propiedad ha mba'e valor, clasificaciones, materiales ha mba'e tenda oĩ. Cliente ha contratación pública oñemboja'o kóva proyecto ndive. BimCraft ohecha modelo IFC abierto IDS-pe ha ohechauka elemento opavave oñemboja'ovaekue.

## Pasos

1. Eabrí un modelo IFC.
2. Eabrí {{ui:Verificar contra un IDS}} panel izquierdo-pe, {{ui:Controles del modelo}} guýpe, térã eelegí {{ui:Verificar con IDS…}} menú-gui según tu estilo de menú.
3. Eclicá {{ui:Cargar un archivo .ids…}} ha eelegí archivo. Ndaipóri nada oñemoĩvaʼẽ.
4. Ele resultado: cada especificación ndive {{ui:Cumple}} térã {{ui:Falla}} ha cuánto elemento oikotevẽ.
5. Eabrí Problemas ({{key:Ctrl+Shift+M}}) ha eclicá falla rupi para oñeelegi elemento ha oñeikeha hese.

## Mba'e rehecháta

- Aviso peteĩ elemento ha requisito ojeheja vaekue, ha upe especificación réra, mba'e IDS ohaʼe ha mba'e elemento oguereko.
- Especificación oikotevẽva ndaipórirõi modelo-pe oñemoñe'ẽ ha'e peteĩ aviso ijojaha.
- Informe de verificación (Problemas-pe) oqaqua IDS-gui: título, versión, autor ha cada especificación-pe cuántos aplica, cuántos cumple ha cuántos falla.

## Aikuaa porã

- IFC ombohasa ko'ẽrõ IDS-pe référencia rupi (réra, título, versión ha hash), IDS mismo ndojapói: cliente-pe IDS ikatu ojerovia confidencial, ha IFC ohóta ambue-kuéra-pe. IDS oñeha ko navegadór-pe modelo ndive, upéicha IFC ojehecha vaʼekue jey oñeabrívo, oñeverifica jey. IDS ojekarga térã ojeheja peteĩ paso ojeikuave oñemboyru hague.
- Ojeabrívo ambue computadora térã ambue navegadór-pe, Problemas-pe oĩta nota IDS ndojejuhúi hague: oñeikarga jey ojeverifica jey.
- IDS IFC ndive oñemoĩ jepe, eactivá {{ui:Guardar el IDS dentro del IFC}} Configuración-pe, pestaña BimCraft-pe, ántes de oñecargar.
- Cada edición, {{ui:Deshacer}} ha {{ui:Rehacer}} oñeverifica jey peteĩ momento rire.
- Valores oñemoñe'ẽ IDS mbohapy rapé: texto ojeikuaa ojehechaukáva (mayúscula ha minúscula oiporiahu), número SI unidad-pe peteĩ tolerancia michĩva (longitud metro-pe, upévare modelo milímetro-pe oñemuda mboyve).
- Especificación ojeporúva IFC versión ambue-pe (ejemplo IFC2X3 modelo IFC4 rehe) oñeverifica jepe; resultado oñehechauka upéva.
- Si archivo IDS-pe oĩ falla IDS auditoría ojehechaséva, diálogo oñemoĩ chupekuéra; upe ojapóva falla.
- Ikatu aceptá falla peteĩ razón ndive, mboyve problema-icha. Oikoséta upe peve elemento valor ndaiporuveichahagüi.

- Patrón IDS-pe oñeleé valor entero rupi. `^` qaqýpe ha `$` pa'ũme oñeleé "valor entero" rupi, IDS heta archivo upéicha oipota.

## Upéi

- [Verificar un modelo para problemas comunes](topic:model-checks)
- [Cambiar un muro o una puerta](topic:change-a-wall-or-door)
