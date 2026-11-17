---
title: Abrir archivos de proyecto .pln y .pla
summary: Mba'épa BimCraft ojapo `.pln`, `.pla`, `.tpl` ha `.bpn` archivokuéra ko'ẽrõ, ha mba'éichapa exportar IFC ha DWG upégui, modelo ha planokuéra ojepe'a ko'ápe.
keywords: pln, pla, tpl, bpn, archivo de proyecto, archivo comprimido, plantilla, copia de seguridad, exportación ifc, exportación dwg, traductor, zonas, diseños
from: 41fb921d
---

## Mba'épa ojapóta

Ejeike proyecto ojeguardava `.pln` (proyecto), `.pla` (archivo comprimido biblioteca ndive), `.tpl` (plantilla) térã `.bpn` (copia de seguridad) BimCraft-pe. Kóva ha'e Archicad-pe ojapo'ỹva archivokuéra.

## Mba'épa ojepe'a ko'ágã

- **Proyecto archivokuéra ndojepe'ai ko'ágã.** Formato ndojehechaukavéi ha BimCraft ndoíri'ỹi avei ohenduva. Ejeike jave, BimCraft ohechauka upéva ha omoĩ ko'ápe.
- **BimCraft ohechakuaa archivo ñepyrũ bytes.** Archicad proyectokuéra versión 17 guive oñepyrũ ko signature michĩ rehegua, upévare BimCraft ikatu ohechauka hekopete ha'e Archicad proyecto. Archivo Archicad-pe rérã ha ndoñepyrũi upéicha, omoambue ramo, ojejapo'ỹ ramo térã versión mboyve guive. Signature ndohechaukái proyecto, archivo comprimido ha plantilla ndive.
- **IFC exportación ojepe'a tapichakue**: modelo 3D-pe, pisokuéra, zonas espacio-kuéra ramo, elemento datos, propiedad conjuntokuéra ha clasificaciones, mboyveháicha BimCraft herramientakuéra ndive.
- **DWG exportación ojepe'a** 2D vistape, ndive capakuéra ha diseñokuéra, ha {{ui:3D}}-pe. Ojeregua haguã, ojeporu {{ui:Edit in CadCraft}}.

Térã ejeike proyecto entero zip-pe, vistakuéra, diseñokuéra ha propiedad grupokuéra ndive: ehecha [Abrir proyecto paquete](topic:open-project-bundle).

## Exportar IFC (modelo)

1. Ejeike proyecto Archicad-pe.
2. Eiporavo **File > Save As**, ha epa **IFC** archivo tipo-pe.
3. Epa IFC traductor (Archicad-pe IFC exportación ajustekuéra rérape). **IFC4 Reference View** térã **IFC2X3 Coordination View 2.0** BimCraft-pe porã. IFC4X3 avei ojepe'a.
4. Eiporavo mba'épa exportar: proyecto entero térã tapiaite pisokuéra ojehecha'ỹva.
5. Guardar, upéi clic {{ui:Choose a file}} BimCraft-pe ha eiporavo `.ifc` archivo.

Ajustes-pe kuatia traductor-pe exportar mboyve:

- **Zonas**: exportar, ojehechaseha habitación espacio-kuéra ramo. Clic {{ui:Spaces}} BimCraft-pe hechaha haguã.
- **Propiedades ha clasificaciones**: exportar, ohechauka haguã {{ui:Properties}}-pe ha ojeporu haguã {{ui:Find}}, {{ui:Color}} ha {{ui:Quantity totals}}-pe.
- **Tuichaiterei `.ifc`**, `.ifczip` térã `.ifcxml` ndaha'éi. BimCraft ojepe'a `.ifc` tuichaiterei añónte.

## Exportar DWG (planokuéra)

1. Ejeike planta, corte térã diseño ejeanhelo.
2. Eiporavo **File > Save As**, ha epa **DWG** archivo tipo-pe.
3. Epa DXF-DWG traductor, ha guardar.
4. Hetãiterei planilla rehegua, guardar diseñokuéra Layout Book-gui térã publicar DWG-pe.
5. Ejeike `.dwg` BimCraft-pe. Exportación ndive ojeenlazávare planokuéra ojeike upéva ndive, ojoguágui tapecha-pe; ehecha [Enlazado planokuéra ha imágenes](topic:dwg-linked-files).

## Ñemboykekuaa

- **"… Archicad proyecto ha'e: ipuku bytes ohechauka."** Exportar IFC térã DWG upéicha, ha ejeike upe archivo.
- **"… Archicad archivo rérã oñe'ẽ, ha ndoñepyrũi upéicha."** Ehecha moõpe oguenohẽ: ikatu ha'e ambue formato oñe'ẽ ojehechaukávape (eipe'a upe rréal extensión-pe), kopia ndoipe'aporãi, térã versión 17 mboyve proyecto. Eikuaa Archicad-pe, upéi exportar IFC térã DWG.
- **Modelo ojeike habitaciónkuéra ndive.** Zonas ndojeexportái. Eiporavo IFC traductor-pe ha exportar jey.
- **Mba'e ndojejuhai.** BimCraft ohechauka **Todavía no dibujado** {{ui:File}} panel-pe. Exportar jey; ojeguerohory ramo, ehecha modelo ojapo'ỹva programa-pe ha ehecha upépe.
- **DWG-pe tekst ojehechaukáva ambue.** Exportación ikatu oñeñongatu fuente BimCraft ndoguerekoiva; BimCraft ojapo tekst sans-serif fuente ipirapita.

Ehecha avei [Proyecto archivo 3D-pe IFC-gui](topic:rvt-to-ifc) ha [Mba'épa BimCraft ojeleeha formato kada peve](topic:file-formats).
