---
title: Comença un edifici nou
summary: Creeu un model d'edifici en blanc amb els seus nivells, dibuixeu-ne els murs, col·loqueu-hi elements de la biblioteca i deseu-lo com a IFC.
keywords: nou, edifici nou, en blanc, buit, començar de zero, plantilla, nivells, plantes, pisos, crea, model
from: 68786865
---

## Què hi fareu

Comenceu un model d'edifici des de zero en lloc d'obrir-ne un. BimCraft fa un model IFC en blanc amb un projecte, un emplaçament, l'edifici i els seus nivells. Podeu col·locar equips i mobiliari als nivells des de la biblioteca i desar-ho com a fitxer IFC.

:::note
Els murs ja es poden dibuixar: vegeu [Dibuixa murs](topic:draw-walls). Les portes, les finestres, els forjats i les cobertes es faran properament.
:::

## Passos

1. Feu clic a {{ui:Edifici nou}} sota **Obre un fitxer o una carpeta**, o a la pàgina d'inici.
2. Escriviu el **Nom de l'edifici**.
3. Trieu quants **Nivells** té (de l'1 al 200).
4. Escriviu l'**Alçada del nivell**, de terra a terra: per exemple `10'-0"`, `10'6"` o `3000 mm`. Un número sol són peus als EUA, i mil·límetres a la resta.
5. Tots els camps ja estan emplenats, així que els podeu deixar tal com estan. Sota d'ells, el quadre indica amb què comenceu: les unitats, el **Tipus de mur** que dibuixa primer l'eina Mur (trieu-ne un altre de la llista si voleu) i el primer full.
6. Feu clic a {{ui:Crea}}. Els nivells es munten des del 0, cadascun a una alçada de nivell per sobre de l'anterior, i s'anomenen Nivell 1, Nivell 2, etc. Apareixen a l'arbre del model, i la planta del Nivell 1 s'obre al costat de la vista 3D amb {{ui:Dibuixa}} activat.
7. Dibuixeu els murs: feu clic a {{ui:Mur}} i a dos punts. Vegeu [Dibuixa murs](topic:draw-walls). Canvieu el nom dels nivells o les seves alçades al tauler **Nivells**.
8. Col·loqueu elements: vegeu [Col·loca equips i mobiliari des de la biblioteca](topic:place-from-library). La barra de col·locació llista tots els nivells.
9. Feu clic a {{ui:Desa com a IFC}}. El fitxer porta el nom de l'edifici, per exemple `Smith's house.ifc`.

## Bones coses a saber

- El model es desa en mil·límetres, com a IFC4. Altres programes BIM l'obren.
- Un edifici nou inclou un full, **A-101**, amb la planta del nivell més baix: A3 a 1:100 quan treballeu en unitats mètriques, Tabloid a 1/8" = 1'-0" en cas contrari. Està buit fins al primer mur, i després mostra la planta mentre dibuixeu. Obriu-lo sota **Fulls** al navegador del projecte per canviar-ne el paper, l'escala o el caixetí, afegir vistes o suprimir-lo. Un edifici iniciat a partir d'una plantilla porta els fulls de la plantilla.
- Per canviar amb què comença cada edifici nou (el tipus de mur per als projectes mètrics, els nivells, el primer full, l'eina activa després de {{ui:Crea}}), vegeu [Polítiques per defecte](topic:default-policies).
- No cal configurar res abans del primer mur. El tipus de mur, les alçades dels nivells, les unitats i el full es poden canviar més tard.
- **Plantes** al tauler de l'esquerra llista només els nivells que tenen alguna cosa; l'arbre del model els llista tots.
- Fins que el deseu, el nou edifici compta com a treball sense desar. BimCraft pregunta abans d'obrir un altre fitxer o de sortir, i guarda una còpia en aquest navegador per si la pestanya es tanca.
