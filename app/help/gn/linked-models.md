---
title: Ambue modelo ojoaprendeha koordinación-pe
summary: Ohechauka ótro modelo IFC nde modelo ndive referencia-pe (nunca ojoaprendeha), oñemoĩ coordenadas compartidas, mapa coordenadas térã mokõi punto-pe, ojoapega dibujo mbytépe ha ojerecarga archivo ojemoambuéva jave.
keywords: vincular, modelo vinculado, referencia, xref, coordinación, federación, estructura, MEP, consultor, coordenadas compartidas, relevamiento, coordenadas de mapa, recargar, descargar, referencia de documento, IfcDocumentReference
from: 3e0f1eab
---

## Mba'e rejapóta

Rejapo consultor modelo-pe (estructura, servicios, tuichaha edificio) ndaipórirí nde archivo-pe mba'eve ñemoĩ.

Peteĩ **modelo vinculado** ohechauka 3D vista-pe ha nde planos-pe corte-pe, pero nunca ojemoambue ha nunca oñeñongatu nde modelo-pe. Nde modelo oguarda tik'ã vínculo: archivo rérã ha mávapa oúva.

## Mba'éichapa oñemoĩ modelo

1. Panel izquierdo {{ui:Modelos vinculados}} apartado-pe, ojepyta {{ui:Vincular un modelo…}} ha ejeskoge IFC archivo. Ohechakuaa ko'ẽrõ, ha iñfila ohechauka **Mostrado**.
2. Eskoge mávapa oúta {{ui:Ubicación}}-pe:
   - **Coordenadas compartidas** (kuaãgui): iñcoordenadas nde rehe, tuichaitépe ambue modelo ha ojeiko ojeñemoĩ mbytépe.
   - **Coordenadas de mapa**: mokõi archivo coordenadas mapa-gui ojeisaka (oñeikotevẽ mokõi conversión de mapa; BimCraft ohechauka peteĩ ndaguerekóiramo).
   - **Por dos puntos…**: pyta peteĩ punto vinculado modelo-pe, upe rire mávapa oúta nde-pe; upe rire mokõi punto. Vínculo ojemoambue ha ojeruguy vertical rehe, ojeikotevẽ peve.
3. Peteĩ vínculo ha peteĩ cambio ubicación peteĩ paso ha'e: {{key:Mod+Z}} ojeguejy.

## Mba'eichaite oñemoĩ

- Planos-pe vinculado modelo ohechauka corte altura-pe tenda línea mbeguéva, ha {{ui:Muro}} herramienta ha ambue dibujo herramienta oiko kuatia ha borde-pe.
- 3D vista-pe elemento pyta, propiedades ohechakuaa; vinculado modelo ndaha'éi ojeporrédva, upévare {{ui:Modelos}} radio botón ndaiporãi.
- **¿Archivo ojemoambue?** Navegador ohecha archivo (archivo selector-gui ojeporta térã Studio-pe), BimCraft ojerecarga vínculo ijeheguíva, archivo ojegarda jey rire segundo peteĩ, ha ohechauka. Ndaipórivoi, pyta {{ui:Recargar}}.
- {{ui:Descargar}} ojepeína ha ohepe'a memoria; vínculo oñeguarda nde modelo-pe. {{ui:Cargar…}} ojechauka jey (ejeskoge archivo: navegador ndohechai archivo nombre-gui iñvápe).
- × ojepe'a vínculo nde modelo-gui.

## Mba'e ndaha'éi ohechava

- Nde IFC archivo-pe: IfcDocumentReference peteĩ vínculo-pe (archivo nombre), projecto-pe ojoaprendeha, ha mba'éichapa oĩ projecto propiedad conjunto CadCraft_Links-pe. Nde modelo jeyhápe ojechauka iñvínculo **No cargado** peve ojecargavaekue.

:::note
Choque chequeo, Comparar ha Buscar oiko cargado vínculo ndive ambue modelo abierto rehe: ohecha [Ohecha hetave modelo IFC peteĩ jave](topic:several-models).
:::
