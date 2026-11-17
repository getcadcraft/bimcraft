---
title: Camps del panell Propietats
summary: Què significa cada camp del panell Propietats i dels panells Fitxer, Dibuix i Carpeta, i quins es poden canviar.
keywords: propietats, camps, atributs, globalid, guid, copia, copia el valor, copia-ho tot, csv, porta-retalls, número de sèrie, etiqueta, tipus d'objecte, línia, express id, conjunt de propietats, pset, quantitats, esquema, panell de fitxer
from: fe55b435
---

## Un element IFC

La part superior del panell {{ui:Propietats}} mostra el tipus de l'element sense el prefix "Ifc" (per exemple "Door", "WallStandardCase", "FurnishingElement") i el seu nom, o "Sense nom".

| Camp | Significat | Editable |
|---|---|---|
| Nom | El nom de l'element, sovint el nom de la família i del tipus que escriu l'exportador | Sí |
| Tipus | El nom del tipus de l'element, quan en té un | No |
| Tipus d'objecte | Una descripció de tipus en text lliure que alguns exportadors omplen | Sí |
| Etiqueta | L'etiqueta o marca de l'element; molts exportadors hi escriuen l'ID de l'element | Sí |
| Descripció | Text lliure | Sí |
| GlobalId | L'identificador IFC permanent de 22 caràcters de l'element, el mateix a cada exportació del mateix element | No |
| Línia | El número de línia (`#1234`) de l'element en aquest fitxer IFC. Canvia entre exportacions | No |

Després hi ha els **conjunts de propietats**, ordenats pel nom:

- Cada conjunt s'obre i es tanca en fer clic al seu nom. Els tres primers estan oberts.
- Un conjunt marcat "(type)" pertany al tipus de l'element: "Propietat de tipus: un canvi aquí s'aplica a tots els elements d'aquest tipus."
- Els conjunts de quantitats (longituds, àrees, volums, recomptes, pesos) són només de lectura.
- Les llistes i els valors enumerats es mostren, només de lectura.
- Els valors Sí/No es mostren com **Sí** o **No**.
- Els números s'arrodoneixen a quatre decimals per mostrar-los. Les longituds (una propietat de longitud o la longitud d'una quantitat) es mostren amb les {{ui:Unitats}} triades a la barra d'eines, amb la unitat al costat, i podeu escriure'n un de nou en aquesta unitat o amb una altra marca d'unitat (2.4 m, 8'-0"): BimCraft torna a escriure al fitxer el seu propi número. Els altres números es mostren tal com els té el fitxer.
- Un valor buit es mostra com a *buit*. Un valor editat està en negreta amb una barra blava al costat.

## Copia un valor

Cada valor de {{ui:Propietats}} té un petit botó de còpia al costat: feu-hi clic per posar aquest valor al porta-retalls exactament tal com es mostra, per exemple un GlobalId, un número de sèrie o qualsevol valor d'un conjunt de propietats. Copiar no inicia mai una edició.

A dalt, {{ui:Copia-ho tot}} copia tots els valors de l'element com a text, conjunt per conjunt, i {{ui:Copia com a CSV}} els copia com a files de grup, propietat i valor per enganxar en un full de càlcul; els valors buits es conserven perquè cada camp tingui una fila. Això funciona igual per a un element d'un altre model obert; quan hi ha més d'un model obert, el CSV comença amb una columna Model que indica el nom del fitxer.

## El panell Fitxer (IFC)

| Camp | Significat |
|---|---|
| Fitxer, Mida | El fitxer que heu obert |
| Esquema | La versió d'IFC, com IFC2X3 o IFC4 |
| Projecte | El nom del projecte i el nom llarg |
| Fase | La fase del projecte, si l'exportador n'ha escrit una |
| Exportat des de | El programa exportador, segons la capçalera del fitxer |
| Autor | L'autor de la capçalera del fitxer |
| Exportat | La data i l'hora de la capçalera del fitxer |
| Elements | Quants elements amb forma s'han dibuixat |
| Triangles | Quants triangles fan les seves formes; una mesura de quant pesa el model |

## El panell Fitxer (projecte i fitxers de família)

| Camp | Significat |
|---|---|
| Tipus | Projecte, Plantilla de projecte, Família o Plantilla de família |
| Desat amb | La versió que va desar el fitxer per última vegada |
| Compilació | La compilació exacta d'aquella versió |
| Llegit | Quant del fitxer ha llegit BimCraft, en relació amb la seva mida |

## El panell Dibuix (DWG i DXF)

| Camp | Significat |
|---|---|
| Format | La versió amb què es va desar el dibuix, amb el seu codi de format, com AC1032 |
| Unitats | Les unitats d'inserció del dibuix, quan s'han definit |
| Entitats | Quants objectes s'han llegit |
| Capes | Quantes capes hi ha |
| Fulls | Quants fulls (presentacions) hi ha, o Cap |
| Plànols enllaçats | Quants dels seus plànols enllaçats s'han trobat i carregat |
| Equips | Quants equips etiquetats hi ha als fulls |

## El panell Carpeta

| Camp | Significat |
|---|---|
| Carpeta, Fitxers, Mida | La carpeta que heu obert, quants fitxers conté i la seva mida total |
| Models | Fitxers de projecte i de família, cadascun amb les seves còpies de seguretat comptades un cop |
| Dibuixos CAD, Models IFC | Quants n'hi ha de cadascun |
| Problemes | Quantes còpies de models estan incompletes o no es poden llegir, o Cap |
