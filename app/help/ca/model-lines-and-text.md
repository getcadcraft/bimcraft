---
title: Línies i text del model: dibuixats al model, sobre el pla de treball
summary: Una línia del model és una línia, una polilínia o un arc que viu al model i es mostra a totes les vistes que el veuen. El text del model és lletra 3D amb profunditat real. Tots dos es dibuixen sobre el pla de treball.
keywords: línia del model, text del model, text 3D, lletres, rètol, senyalització, línia en 3D, arc, polilínia, pla de treball, text extruït, tipus de lletra, profunditat, línia de detall, línia de dibuix, anotació, IfcAnnotation
from: fc9cccb5
---

## Què faràs

Dibuixeu línies i lletres que formen part del model, no d'una sola vista.

## Passos

1. Definiu primer el pla de treball (vegeu **El pla de treball**). Un pla de nivell es dibuixa a la planta; un pla vertical, al Visor del pla de treball.
2. Per a una línia, trieu **Línia del model** al menú **Compilació** i trieu **Línia**, **Polilínia** o **Arc (tres punts)**:
   - una línia són dos clics;
   - una polilínia és un clic per a cada punt, i després {{key:Enter}} o doble clic. Un clic al primer punt la tanca;
   - un arc són tres clics: l'inici, un punt pel qual passa i el final.
3. Per al text, trieu **Text del model**. Escriviu les paraules, definiu l'alçada de les majúscules i la profunditat, i després feu clic on comenci el text (l'extrem esquerre de la línia base).
4. Seleccioneu una línia o un text per veure'l a **{{ui:Propietats}}**. Les paraules, l'alçada i la profunditat d'un text es poden canviar allà. {{key:Delete}} l'elimina.

## On es mostren

- Una línia del model es mostra a la planta del seu nivell, a la vista 3D, al tauler d'alçats i seccions i al Visor del pla de treball quan és sobre el pla de treball. Una línia de dibuix (Anota, Línia) pertany només a una vista.
- El text del model és geometria sòlida: es mostra allà on es mostra el model, a la planta, en 3D, en alçats i seccions, i als fulls.
- Les línies del model encara no es dibuixen als fulls impresos. El text del model sí.

## El tipus de lletra

El text del model fa servir el mateix tipus de lletra que els fulls i els PDF: Liberation Sans, sota la SIL Open Font License. Una lletra que el tipus no té es dibuixa com un signe d'interrogació, i se n'informa quina és. Hi ha un sol tipus de lletra i un sol pes. Les lletres se separen segons les amplades pròpies del tipus, sense crenatge.

## Al fitxer IFC

- Una línia del model és un IfcAnnotation amb el tipus d'objecte ModelLine. La seva forma és una corba 3D: una polilínia, o un cercle retallat per a un arc.
- El text del model és un IfcBuildingElementProxy amb el tipus d'objecte ModelText. La seva forma és un sòlid extruït per a cada tros de lletra, amb els forats de lletres com O i B. Les seves quantitats són l'àrea de la cara i el volum (àrea de la cara per la profunditat).

## Bon a saber

- Es crea qualsevol mida que demaneu. Només es rebutja una línia sense longitud, un arc amb els tres punts en línia recta o un text sense lletres, perquè no hi ha res a crear.
- Cada línia, i cada text o canvi en un text, és un sol pas de Desfés.
