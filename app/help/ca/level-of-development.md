---
title: Nivell de desenvolupament (LOD) i comprovacions de fites
summary: Assigneu a cada element un nivell de desenvolupament, vegeu-ne l'origen, comproveu el model segons el LOD que demana una fita i corregiu les etiquetes que falten i les sales sense nom. Totes les comprovacions aconsellen; no es bloqueja res.
keywords: lod, nivell de desenvolupament, lod 100, lod 200, lod 300, lod 350, lod 400, lod 500, fita, taula de fites, comprovacions del model, etiquetes que falten, sales sense nom, genèric en fases inicials, classe ifc, classificació
from: 2091c79b
---

## Què farà

Indiqueu fins a quin punt està desenvolupat cada element i després comproveu tot el model segons el que demana una fita del projecte.

## Passos

1. Trieu un element (o diversos) i obriu {{ui:Properties}}. Cerqueu {{ui:Level of development}}.
2. Trieu un nivell de la llista. Cada nivell es nomena pel que significa i inclou els inferiors. Un sol pas de Desfés cobreix tota la selecció.
3. Llegiu d'on procedeix el nivell: d'aquest element, del seu tipus o d'una marca verificada a l'obra.
4. Per comprovar el model, obriu {{ui:Model checks}} a l'esquerra i després {{ui:LOD milestones}}. Trieu la fita i la taula (la taula inicial, o el vostre fitxer CSV o JSON amb {{ui:Load}}).
5. Feu clic a {{ui:Check the model}}. Els totals i una línia per a cada fila de la taula mostren què ha arribat al seu nivell i què no; les troballes també apareixen a la llista de Problemes.
6. Sota {{ui:Missing tags and unnamed rooms}}, feu clic a {{ui:Find them}}, editeu les propostes si voleu i feu clic a {{ui:Apply}}.

## Què hauríeu de veure

- El nivell que heu triat a l'element, amb la seva classe IFC i els codis de classificació al costat.
- Totals i files per a la fita. Una taula no canvia mai el significat d'un nivell: l'escala és fixa, i una taula només indica quin nivell necessita una fita.
- "Mantenir genèric en fases inicials": consell per mantenir els elements genèrics en una fita inicial. És només un consell.

## Cal saber-ho

- Aquí no es bloqueja res. Un model per sota del nivell que demana una fita es llista, però no es refusa.
- Les tres parts d'un nivell (geometria, informació i documentació) es poden definir cadascuna; una marca indica complert, per sota o no indicat.
