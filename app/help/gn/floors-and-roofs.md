---
title: Ambiente, piso, cielorraso ha techo
summary: Ambiente oñemoĩ pared oikló jave ha omoĩ peteĩ piso ha cielorraso ambiente térã edificio opavave-pe, ha techo pared ári. Opavave osegui pared oñemoñare jave.
keywords: ambiente, espacio, área, perímetro, piso, losa, subpiso, cielorraso, techo, techo a cuatro aguas, techo a dos aguas, pendiente, voladizo, alero, cumbrera, valle, 6/12
from: 1fb1813c
---

## Mba'épa ndejapóta

Ejapo edificio cáscara. Ambiente oúva pared-gui por sí; piso, cielorraso ha techo peteĩ ekliki-pe peteĩ-peteĩ. Oúva pared-gui jave, osegui pared oñemoñare jave.

## Ambiente

Opavave espacio pared oñembotavy rehe ha ambiente. Omoñe'ẽ jey ojehechakuaa jave ultimo pared oñembotavy, peteĩ número (101, 102 … piso 1-pe, 201 … upe ohupytývape) ha peteĩ réra (**Room 1**, **Room 2** …), ha área omoñe'ẽ plano ryepe.

- Con {{ui:Seleccionar}} oiporavo, ekliki ambiente-pe ojuhu haguã. En **Propiedades** emoambue **Nombre** (ejemplo `Kitchen`) ha **Número**; área ha perímetro omoñe'ẽ.
- Peteĩ pared oñembotyvy ambiente ary rehe, ha'e peteĩ; pared peteĩ ambiente ryepe omoĩ jey, ha'e ary. Ambiente oguerekóva réra ha número pared oñemoñare jave.
- Ambiente ndaikatúi eliminar iñambuéicha: ha'e espacio pared ombojojáva.

Área oñemedi pared ruguigua ryepe. Ambiente ohenda IFC espacio-pe área de piso, perímetro, altura ha volumen rehe, upéva planilla ojeheka haguã (eheka [Ojeheka cantidad, listar elementos ha planear espacios](topic:quantity-totals)).

## Piso

1. Ekliki {{ui:Piso}}.
2. Eiporavo **Ko ambiente** térã **Edificio opavave**, **Tipo** (piso de madera térã losa de hormigón) ha iespesor.
3. Emoĩ ambiente ryepe (térã edificio ryepe). Mba'e piso ojejapo oñemarca ha area omoñe'ẽ.
4. Ekliki. Piso ári ha'e nivel piso; oguahẽ iespesor rehe. Edificio opavave piso oguejy pared ruguigua rakã.

## Cielorrasos

1. Ekliki {{ui:Cielorraso}}.
2. Eiporavo **Ko ambiente** térã **Edificio opavave**, ha iAltura piso yvatégui.
3. Emoĩ ryepe ha ekliki.
4. Ehecha yvategui, ha grilla ha luz oiko chupe, emoambue plano cielorraso-pe: eexamina [Vistas, rangos de vista ha hojas propias](topic:views-and-sheets).

## Techo

1. Nivel-pe pared oguerekóva techo, ekliki {{ui:Techo}}.
2. Emoĩ **Pendiente** elevación 12 rehe (`6/12`) térã grados (`30`), ha **Voladizo**.
3. Eiporavo **Extremos**: **Techo a cuatro aguas** (lado opavave inclinado), **Frontones en lados cortos** térã **Frontones en lados largos** (edificio cuatro lado), térã **Monoaguas**.
4. Emoĩ edificio ryepe: alero ha cumbrera ohechauka plano-pe. Ekliki.

Techo oguenohẽ pared ári, nivel pared ári-pe, ha iparte yvate oúva pared ruguigua rakã-pe. Frontón oñemboguejy pared ojehasa frontón-pe, pared ári-pe ojehechaháicha ipyahu. Edificio L, T térã U forma-pe oguerekó techo cuatro aguas, ala kuéra ojoaju valle-pe.

## Ojeporavo ko'ã

Eiporavo piso, cielorraso térã techo (3D vista-pe, árbol del modelo-pe térã techo ekliki ojupe nivel ári-pe) ha emoambue **Propiedades**-pe: piso tipo, espesor ha iparte yvate nivel rehe; cielorraso altura, espesor ha **Patrón** (grilla plano cielorraso-pe: ningún, 600 × 600, 600 × 1200, 2' × 2' térã 2' × 4'); techo pendiente, voladizo, extremos ha espesor. Peteĩ-peteĩ cambio ha peteĩ paso de {{ui:Deshacer}}.

## Omoĩ tipo piso, cielorraso térã techo capa-gui

Piso, cielorraso ha techo ikatu oguereko **tipo**, pared-gui ojehecháicha: peteĩ construcción ryepe oñembohérava capas, peteĩ-peteĩ material ha espesor real.

- **Oñemoĩ jave.** Herramienta Piso, Cielorraso, Techo ha Dibujar piso oguereko lista **Tipo** ijehegui. **Sin tipo** oñemoĩ umi ohasáva iespesor ndive; tipo oñemoĩ capas ojoavýva espesor ndive.
- **Upeichaite.** Eiporavo piso, cielorraso térã techo ha eiporavo **Tipo** en Propiedades. Elemento osegui ha'eva, ipoha, habitación ha dato oñongatu; ndojeporavói jey. Ojeporavo tipo, espesor ha material añoite. Upéicha peteĩ elemento boceto etapa-gui oiko desarrollo-pe: omombyta tipo genérico tipo realgui.
- **Editar tipo…** oguenohẽ editor tipo-pe: capas **arriba** guive abajo-pe, núcleo, peteĩ capa función ha LOD etiqueta. Oñongatu opavave ojehechakuáva tipo-pe peteĩ paso, ha peteĩ Deshacer oheja jey.
- Elemento tipo oguerekóvape **Espesor** ha tipo rehe ha ndaikatúi oñeñandu. Emoĩ tipo ambue térã **Sin tipo** ojeporavo haguã.

Tipo inicial ha'e peteĩ **genérico** tipo peteĩ-peteĩ (peteĩ capa material genérico, LOD 200 etiqueta) ha mokõi capas tipo (LOD 300 etiqueta): viga de madera piso ha piso de hormigón con carpeta; techo de madera ha techo plano de hormigón; cielorraso de placa de yeso ha cielorraso suspendido de azulejo. Ha'e valor ñepyrũ, ndaha construcción probada: eexamina capas antes oñeñandu jave.

Planilla **Capas: área y volumen** omoñe'ẽ opavave capa opavave tipo ojeporúvape; eheka [Planillas, dimensiones y PDF](topic:plan-schedules-and-pdf). Piso, techo ha cielorraso tipo oike proyecto ambue-pe paquete tipo-pe térã Biblioteca ítem-pe; eheka [Paquetes de tipos](topic:type-packs).

## Ojehechakuaa porã

- Ojeporavo, oñemoĩ térã oheja pared, ambiente, piso, cielorrasos ha techo hese osegui jey.
- Techo ojoguáva opavave contorno-pe. Peteĩ-peteĩ pared pendiente, frontón, monoaguas, elevación, faja, soffit térã peteĩ plano techo, eheka [Techos: pendiente peteĩ pared rehe, frontones, monoaguas ha planos de techo](topic:roofs).
- {{key:Delete}} oeliminá piso, cielorraso térã techo oiporavóva.
