---
title: Medir distancias, áreas de cara y ubicaciones 3D-pe
summary: IFC modelo mokõi punto mbytépe medí, esquina ha borde ojeñemoĩ, X, Y ha Z diferencia ohechauka, ha plano cara área medí.
keywords: medir, medición, distancia, largo, cota, área, área de cara, ajuste, esquina, borde, cinta, regla, holgura, ubicación, latitud, longitud, lat long, coordenadas, georreferencia, conversión de mapa, EPSG, relevamiento, este, norte, WGS 84, datum
from: 5f430bba
---

## Mba'e rejapóta

Holgura, muro largo térã cara tamaño modelo-gui ehechá, autor programa ndojepyhýi.

## Pasos

1. IFC modelo ejepyta.
2. Barra-pe {{ui:Medir}} ejepyta térã {{key:M}} ejepyta. Barra oñepyrũ vista ári.
3. **Distancia:** {{ui:Distancia}} eskoge jave, pyta primer punto, upéi segundo. Esquina rehe ojeñemoĩ, borde ári borde-pe; punto ári ohechauka. Cada mokõi pyta peteĩ medida.
4. **Cara área:** {{ui:Superficie de cara}} eskoge ha pyta cara. Cara plano oñemoĩ, área ohechauka cara ári ha barra-pe.
5. **Línea recto:** {{key:Shift}} ejerovia segundo punto pyta jave, térã barra-pe {{ui:Recto}} ejepyta. Línea ojeruguy eje ári punto ojehecha ndive ohasa-pe (planta vista-pe X térã Y; ambue vista-pe X, Y térã Z), punto etiqueta "recto por un eje" ohechauka. {{key:M}} Medir oñepyrũ térã ojepe'a.
6. {{ui:Limpiar}} pyta medida ojepe'a, térã {{ui:Listo}} (térã {{key:Esc}}) medir ojehejáu.

## Mba'e ohechava

- Mokõi punto mbytépe línea, largo ndive ohechauka, ha barra-pe largo X, Y ha Z (modelo eje rehe, Z arriba), {{ui:Unidades}} barra-pe eskogegua-pe.
- Cara área metro cuadrado-pe, cara ári ha barra-pe.
- Etiqueta medida ndive ohecha orbitar, desplazar ha zoom ári.
- Medir jave, pyta ndojeeskoge elemento. Corte plano térã caja modelo ojepe'a, ohechava medida ojeporu, corte cara avei.

## Mba'éichapa punto tierra-pe

Barra-pe {{ui:Ubicación}} pyta, upéi modelo punto pyta (esquina ha borde ojeñemoĩ, distancia-gui upéicha). Barra ohechauka:

- **latitud ha longitud**, grado decimal-pe ha grado, minuto, segundo-pe, WGS 84-pe kuanzáme.
- **coordenadas de mapa** (este ha norte, {{ui:Unidades}} barra-pe eskogegua-pe) modelo-pe mapa sistema, ejemplo `EPSG:28356`.
- **altura** ha archivo ohechauka vertical datum, ha archivo **iñ datum** (ejemplo GDA94).

{{ui:Copiar}} ojeporu todo peteĩ línea-pe portapapeles-pe. Latitud ha longitud sistema ojemoambue {{ui:Configuración}} › {{ui:BimCraft}} › {{ui:Ubicación}}-pe: WGS 84 (GPS ha web mapa-gui), archivo iñ datum, térã ambue ETRS89 térã NAD83.

Georreferenciado modelo ikotevẽ: mapa conversión proyectado sistema EPSG kódigo-pe. Solo sitio latitud ha longitud modelo aproximado posición ohechauka, sitio punto ha norte verdadero-gui, barra ohechauka. Modelo oĩvo, cada punto iñ modelo georreferencia-pe.

:::note
Datum-pe ojemoambue (ejemplo GDA94 ha WGS 84) grid archivo ndojeporu, upévare pocos metro-pe nomínamo; estado línea ohechauka. Mapa coordenadas iñ exactas.
:::

## Mba'e jejoko ojeporu

- **"…no tiene georreferencia".** Archivo mapa conversión ha sitio latitud longitud ndaguerekóri. Exportá ojeko-pe koordenadas sistema ndive (coordenadas compartidas / punto relevamiento autor herramienta-pe).
- **Mapa coordenadas, latitud longitud ndaiko.** Archivo mapa sistema EPSG kódigo ndaguerekói térã lista-pe ndoĩ; estado línea ohechauka.
- **Punto cara-pe, esquina ndaha'éi.** Ajuste pointer-pe elemento rehe. Esquina-pe ejuhu térã zoom.
- **Área ipequeño.** Abertura ndojekontái, cara ndojeruguyva ha'e hetave cara: cada peteĩ pyta.
- **{{key:Esc}} medir ojepe'a.** Peteĩ {{key:Esc}} distancia ndojekuaaiva ojepe'a; mokõi ojepe'a.

## Upe rire

- [Corte IFC modelo plano-gui](topic:section-plane)
- [Ojepe'a, aislar ha ohecha elemento](topic:hide-and-isolate)
