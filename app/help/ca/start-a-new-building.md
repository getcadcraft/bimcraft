---
title: Comença un edifici nou
summary: Crea un model d'edifici en blanc amb les seves plantes, dibuixa els murs, col·loca elements de la biblioteca i desa'l com a IFC.
keywords: nou, edifici nou, en blanc, buit, començar de zero, plantilla, nivells, plantes, pisos, crea, model
from: 546b8ae8
---

## Què farà

Comenceu un model d'edifici des de zero en lloc d'obrir-ne un. BimCraft fa un model IFC en blanc amb un projecte, un solar, l'edifici i les seves plantes. Podeu col·locar equips i mobiliari als nivells des de la biblioteca i desar-ho com a fitxer IFC.

:::note
Ara es poden dibuixar murs: vegeu [Dibuixa murs](topic:draw-walls). Les portes, les finestres, els forjats i les cobertes s'implementaran a continuació.
:::

## Passos

1. Feu clic a {{ui:Edifici nou}} sota **Obre un fitxer o una carpeta**, o a la pàgina d'inici.
2. Escriviu el **Nom de l'edifici**.
3. Trieu quants **Nivells** té (de l'1 al 200).
4. Escriviu l'**Alçada del nivell**, de terra a terra: per exemple `10'-0"`, `10'6"` o `3000 mm`. Un número sense unitat són peus als EUA i mil·límetres en la resta de països.
5. Feu clic a {{ui:Crea}}. Els nivells s'apilen des de 0, cadascun a una alçada de nivell per sobre de l'anterior, i s'anomenen Nivell 1, Nivell 2 i així successivament. Apareixen a l'arbre del model, i el pla del Nivell 1 s'obre al costat de la vista 3D amb {{ui:Dibuixa}} activat.
6. Dibuixeu els murs: vegeu [Dibuixa murs](topic:draw-walls). Canvieu el nom dels nivells o les seves alçades al tauler **Nivells**.
7. Col·loqueu elements: vegeu [Col·loca equips i mobiliari des de la biblioteca](topic:place-from-library). La barra de col·locació enumera tots els nivells.
8. Feu clic a {{ui:Desa com a IFC}}. El fitxer es diu segons l'edifici, per exemple `Smith's house.ifc`.

## Cal saber-ho

- El model es desa en mil·límetres, com a IFC4. Altres programes BIM l'obren.
- Les **Plantes** del panell de l'esquerra només llisten els nivells amb alguna cosa; l'arbre del model els llista tots.
- Fins que no el deseu, el nou edifici compta com a treball no desat. BimCraft pregunta abans que obriu un altre fitxer o que sortiu, i guarda una còpia en aquest navegador en cas que la pestanya es tanqui.
