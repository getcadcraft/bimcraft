---
title: Comprova un model per trobar problemes habituals
summary: Troba elements que no tenen una propietat necessària, GlobalIds usats dues vegades, elements sense planta i còpies apilades una sobre l'altra.
keywords: comprovació, comprovació del model, validació, qa, qualitat, propietat que falta, obligatòria, duplicat, globalid, guid, planta, apilat, solapament
from: 4d835513
---

## Què fareu

Reviseu un model abans de passar-lo a una altra persona: els problemes que trenquen taules, quantitats i el programari d'altres persones.

## Passos

1. Obriu un model IFC.
2. Obriu {{ui:Comprovacions del model}} al tauler de l'esquerra.
3. A {{ui:Propietats obligatòries}} ja hi ha una regla (qualsevol classe, Nom). Canvieu-ne la classe (o {{ui:Qualsevol classe}}) i la propietat, o feu clic a {{ui:Afegeix una propietat}} per afegir-ne una altra regla; la x n'elimina una. Un element no supera una regla quan la propietat falta o és buida. Les regles es queden en aquest navegador per a tots els models.
4. Feu clic a {{ui:Executa les comprovacions}}.
5. Feu clic en un resultat per seleccionar aquests elements i fer-hi zoom.

## Què hauríeu de veure

- **Falta una propietat obligatòria**: cada regla amb els elements que no tenen valor per a ella.
- **GlobalId usat dues vegades**: elements que comparteixen un mateix GlobalId. Altre programari els tracta com un sol element.
- **Sense planta**: elements amb una forma que cap planta conté.
- **Còpies una sobre l'altra**: elements de la mateixa classe i tipus amb la mateixa forma al mateix lloc, que es comptarien dues vegades a les quantitats.

Cada línia dels resultats és un botó: feu-hi clic per seleccionar aquests elements i fer-hi zoom. Només es mostren els primers 50 grups de cada comprovació. Les mateixes troballes també apareixen a {{ui:Problemes}}.

## Bon a saber

- Les comprovacions miren el model actiu quan n'hi ha diversos d'oberts. Vegeu [Mira diversos models IFC junts](topic:several-models).
- Després d'una edició, torneu a executar les comprovacions.
- Al tauler {{ui:Problemes}}, les longituds, àrees i volums de les frases d'un problema segueixen les {{ui:Unitats}} triades a la barra d'eines (una porta de "800 mm" es llegeix 2'-7 1/2" en peus i polzades); canvieu la unitat i el tauler les torna a redactar.

## Següent

- [Audita el model: habitacions, etiquetes, LOD, col·lisions i interfícies](topic:audit-the-model)
- [Troba elements per classe, nom o propietat](topic:find)
- [Suprimeix, retalla, copia i enganxa elements](topic:copy-paste)
