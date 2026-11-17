---
title: Tamaño de caños y conductos, revisión de cable fill e iluminación
summary: Revisá tamaños de caño y conducto de provisión con caída de presión, ruta cables cable tray y conduit kuéra rupi ha ehecha fill-ha, ha calculá iluminancia tenda-pe IES térã EULUMDAT archivo kuéra gui. Predeterminado ojehechaukáva; emoĩ vigente código valor-kuéra.
keywords: dimensionamiento, tamaño de caño, tamaño de conducto, caída de presión, unidades de artefacto, demanda, hunter, hazen-williams, velocidad, fricción, fricción igual, presión de ventilador, compuerta, ruta crítica, cable tray, conduit, fill, planilla de cables, ies, ldt, eulumdat, fotometría, iluminancia, lux, uniformidad, cálculo de iluminación, densidad de potencia, mep, cálculos, problemas
from: 9cb90815
---

## Mba'épa rejapóta

Emoĩ caño, conducto, cable tray ha conduit kuéra ojeporúvicha, ejepyta upe **Cálculos** panel. Peteĩteĩ pestaña ohecha modelo, ohechauka tabla ha omoñe'ẽ mba'épa ndoikói ⚠ panel-pe Problemas-pe. Tamaño ojapóramo Problema, **Aplicar tamaños** ohechauka ruta peteĩ deshacer ñemoĩ.

Ko'ãva ha'e tembiguái drafting-pe. Predeterminado peteĩteĩ ojehecha tenda-pe, ha'e ndaha'éi código tabla; emoĩ números nde estándar-gui, ha ta'anga oñemoñe'ẽ ingeniero oñangareko.

## Caños

1. Eiporavo **sistema** tecla (agua fría `cw`, agua caliente `hw`).
2. Emoĩ mboyve velocidad ha, presión oikuaaukáramo, fuente-pe presión ha artefacto ojeikotevẽva menor presión.
3. Ejepyta {{ui:Revisar}}.

Peteĩteĩ caño ohupi demanda ha'e unidad artefacto-kuéra ipype. Demanda oúva curva artefacto-kuéra ha caudal ndive, Hunter oñeʼẽ rupi. **Curva incorporada ha'e ejemplo, ndaha'éi código tabla**; Problemas ohechauka upéicha peẽ nde propio emoĩ peve. Fricción ha'e Hazen–Williams, accesorio-kuéra ha'e coeficiente pérdida, subida 9,8 kPa metro-pe. Artefacto unidad oúva ha'e iclase-gui, térã número nde emoĩva asistente herramienta `loads_set` rupi.

## Conductos

Emoĩ sistema, fricción tasa (fricción igual) térã velocidad, ha serpentín, filtro térã silenciador pérdida. Terminal-kuéra ohupi airflow `loads_set` difusor-pe. Tabla ohechauka velocidad ha fricción peteĩteĩ pieza-pe, **presión de ventilador** ruta crítica-pe, ha presión peteĩteĩ amboaty terminal compuerta ojehupi ha'e. Accesorio pérdida ojeporu coeficiente redondeado predeterminado, ndaha'éi accesorio base de datos.

## Cable tray ha conduit

Ejapo Conducto herramienta rupi: sistema **Cable tray** ha **Conduit** oñeñongatu cable carrier-pe, upéicha ambue programa kuéra oikuaa tray ha conduit-pe. Cables pestaña-pe emoĩ cable lista (tag, diámetro externo mm, cantidad, desde, hasta). `desde` ha `hasta` ha'e equipo tag térã punto `x,y,z` milímetro-pe. Cables ojeheka ruta mboyve tray ha conduit rupi; peteĩteĩ ruta ohechauka fill emoĩva límite-pe; planilla ojesalva CSV-pe longitud ha porcentaje reserva ha puntas ndive.

## Iluminación

Emoĩ peteĩteĩ luminaria IES (LM-63) térã EULUMDAT archivo asistente herramienta `photometry_set` rupi. Emoĩ objetivo, cuadrícula espaciado ha altura plano de trabajo. Resultado ha'e **directa** iluminancia nomaʼẽ: ndaipóri reflexión mbojoaporã ni sombra, upévare ha'e menor límite peteĩ habitación-pe.

## Rociadores de incendio

**Rociadores de incendio** complemento oĩ iñe'ẽ tembiguái; ehecha hendape ayuda.
