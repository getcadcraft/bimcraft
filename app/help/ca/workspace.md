---
title: La pantalla de BimCraft
summary: Un recorregut per cada barra, tauler i botó pel seu nom a la pantalla, i com canvia la pantalla per a cada tipus de fitxer.
keywords: pantalla, disposició, panells, barra d'eines, interfície, ui, recorregut, tauler de propietats, navegador, barra d'aplicació
from: 2eb01ec2
---

BimCraft té una barra a la part superior i tres àrees a sota: un tauler a l'esquerra, l'escenari al mig i el tauler {{ui:Propietats}} a la dreta. El que apareix a cada àrea depèn del que heu obert: un model IFC, un fitxer de projecte o de família, un dibuix o una carpeta.

## La barra d'aplicació

La barra fina de la part superior pertany al lloc de CadCraft, no a BimCraft mateix. D'esquerra a dreta:

- La marca de CadCraft: va a la pàgina d'inici de CadCraft.
- El nom de l'aplicació i un menú de versions. A la compilació interna mostra quina compilació executeu i us deixa canviar a una versió publicada.
- {{ui:Quant a BimCraft}}: la pàgina de l'aplicació al lloc.
- {{ui:Configuració}}: la configuració de BimCraft i la que comparteixen totes les aplicacions. Vegeu [Configuració de BimCraft](topic:settings).
- {{ui:Pantalla completa}}: canvia entre els modes de pantalla. Vegeu [Modes de pantalla](topic:workspace#screen-modes) més avall.
- {{ui:Paper}} i {{ui:Model}}: els temes clar i fosc. La vista 3D i els dibuixos 2D segueixen el tema que trieu.

## El tauler de l'esquerra

El tauler de l'esquerra sempre comença amb **Obre un fitxer o una carpeta**:

- L'àrea de deixar anar, {{ui:Trieu un fitxer, o arrossegueu-hi un fitxer o una carpeta}}. Feu clic per triar un fitxer, o deixeu anar un fitxer o una carpeta a sobre (o en qualsevol lloc de la pàgina).
- {{ui:Obre una carpeta}}: trieu una carpeta de projecte sencera. Vegeu [Obre tota una carpeta de projecte](topic:open-project-folder).
- {{ui:Carpetes recents}}: apareix a Chrome i Edge després que obriu una carpeta amb el selector de carpetes o deixant-la anar. Feu clic a {{ui:Torna a obrir}} i al nom de la carpeta per tornar-la a obrir, o a la petita × per oblidar-la.

Sota, les seccions apareixen segons correspon:

| Secció | Quan apareix | Què hi ha |
|---|---|---|
| {{ui:Canvis}} | Hi ha un model IFC obert | Les vostres edicions no desades, de la més nova a la més antiga, amb {{ui:Desfés}} i {{ui:Desa com a IFC}} |
| {{ui:Fitxer}} | Hi ha un model o una fitxa de fitxer oberta | Dades del fitxer: mida, esquema o versió, projecte, autor, nombre d'elements |
| {{ui:Dibuix}} | Hi ha un DWG o DXF obert | Format, unitats, recompte d'entitats i capes, fulls, dibuixos enllaçats, equips |
| {{ui:Carpeta}} | Hi ha una carpeta oberta | Recompte de fitxers i de models, mida, problemes trobats |
| {{ui:Torna a la carpeta}} | Heu obert un fitxer des d'una carpeta | Torna a l'informe de la carpeta |
| {{ui:Capes}} | Hi ha un dibuix obert | Una casella per capa, amb {{ui:Activa-ho tot}} i {{ui:Desactiva-ho tot}} |
| {{ui:Plantes}} | Hi ha un model IFC obert | Una casella per planta, la planta més alta primer |
| {{ui:Elements}} | Hi ha un model IFC obert | Quants elements de cada tipus té el model (els 30 més comuns) |

## L'escenari

El mig de la pantalla mostra el fitxer obert.

- **Buit**: "Obre un model d'edifici." amb {{ui:Trieu un fitxer}} i {{ui:Obre una carpeta}}, i una breu descripció de cada format.
- **Model IFC**: la vista 3D amb una barra d'eines a la part superior, en grups amb nom, com els de l'aplicació de dibuix de CadCraft, la icona de cada eina sobre el seu nom: {{ui:Vista}} ({{ui:Ajusta}}, {{ui:Superior}}, {{ui:Davant}}, {{ui:Lateral}}, {{ui:Arestes}}, {{ui:Espais}}); {{ui:Edita}} ({{ui:Desfés}}, {{ui:Refés}}, {{ui:Copia}}, {{ui:Enganxa}} i {{ui:Més}}, vegeu [Copia, enganxa i duplica elements de biblioteca](topic:copy-paste)); {{ui:Model}} ({{ui:Unitats}} i {{ui:Dibuixa}}); {{ui:Biblioteca}} ({{ui:Biblioteca}}, {{ui:Equipament}}, {{ui:Actualitzacions}}, {{ui:Crèdits}}); {{ui:Revisió}} ({{ui:Mostra}}, {{ui:Secció}}, {{ui:Recorre}}, {{ui:Mesura}}; vegeu [Talla un model IFC amb un pla de secció](topic:section-plane)); i {{ui:Sortida}} (renderitzat, vista en directe, RV, exportacions, pintura i vistes desades). Amb {{ui:Dibuixa}} activat, la barra de dibuix que hi ha a sota té el mateix aspecte: {{ui:Vista}} (la planta i el tipus de plànol), {{ui:Dibuixa}}, {{ui:Edita}} i {{ui:Biblioteca}}. Un cub de vista és a la cantonada inferior dreta. Vegeu [Obre un model IFC i mira'l en 3D](topic:open-ifc-model). {{ui:Configuració}}, {{ui:General}} tria les icones, les etiquetes o totes dues en aquests botons, mostra o amaga els noms dels grups, i feu clic dret a la barra d'eines per organitzar-ne les eines i els grups. En una finestra curta la barra d'eines treu els noms de sota les icones.
- **Fitxer de projecte o de família**: la fitxa del fitxer, amb la imatge de vista prèvia, la informació del projecte i els fitxers enllaçats. Vegeu [Llegeix un fitxer de projecte o de família](topic:read-rvt-file).
- **DWG o DXF**: una fila de pestanyes ({{ui:Model}}, després una per full, després {{ui:Equipament}} quan el dibuix té equips etiquetats, {{ui:3D}}, {{ui:Ajusta}} i {{ui:Vista d'impressió}}), el dibuix, i les coordenades X i Y en directe en una cantonada. Vegeu [Mostra un dibuix DWG o DXF](topic:view-dwg) i [Mira un dibuix DWG o DXF en 3D](topic:dwg-in-3d).
- **Carpeta**: l'informe de la carpeta, amb el quadre {{ui:Comença aquí}} i les taules de models, enllaços, models IFC i dibuixos. Vegeu [Obre tota una carpeta de projecte](topic:open-project-folder).

La **línia d'estat** a la part inferior de l'escenari us diu què fa BimCraft ("Llegint el model…", "Construint la geometria: 1200 de 5400 elements") i què ha fallat, en vermell, quan alguna cosa falla. Els missatges d'èxit s'esvaeixen després d'uns segons.

## El tauler de Propietats

El tauler de la dreta mostra:

- Per a un model IFC: l'element que heu clicat, amb el seu nom, tipus, etiqueta, GlobalId i cada conjunt de propietats. Els valors que podeu canviar semblen botons. Vegeu [Camps del tauler de propietats](topic:properties-panel).
- Per a un dibuix: com moure's, els dibuixos enllaçats i les imatges del dibuix i si s'ha trobat cadascun, i una llista del que **Encara no dibuixat**.
- Per a una fitxa de fitxer o una carpeta: una nota breu sobre què obrir a continuació.

## En una pantalla petita

Quan la finestra és més estreta que una pantalla de portàtil, BimCraft apila les seves àrees: l'escenari a dalt i els panells a sota. Desplaceu la pàgina per arribar als panells. En un telèfon formen una sola columna; en una tauleta, dues.

## Modes de pantalla

El botó {{ui:Pantalla completa}} de la barra d'aplicació, o {{key:Ctrl+Shift+F}} a totes les plataformes, canvia entre tres modes:

1. Normal.
2. Pantalla completa, amb les barres encara visibles.
3. Pantalla completa amb la barra d'aplicació amagada. Porteu el punter a la vora superior, o toqueu-hi, per fer-la tornar.

Premeu {{key:Esc}} per tornar al mode normal. Els navegadors sense suport de pantalla completa (com els de l'iPhone) només alternen entre normal i barres amagades.

## Relacionat

- [Tecles i ratolí](topic:keyboard)
- [Fitxers que BimCraft obre i desa](topic:files)
