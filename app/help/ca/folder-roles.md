---
title: Informe de carpeta: rols, estats i enllaços
summary: Cada etiqueta de l'informe de carpeta, què significa i com es tria el suggeriment Comença aquí.
keywords: informe de carpeta, rols, estat, complet, incomplet, il·legible, enllaç, de fons, plantilla, central, família, només còpies de seguretat, comença aquí, estat de l'enllaç
from: b35bdd10
---

## Estat de la còpia

Cada còpia d'un model (el fitxer principal i les còpies de seguretat numerades) rep una comprovació de capçalera.

| Etiqueta | Significat |
|---|---|
| **Complet** | La capçalera i l'índex del fitxer caben dins del fitxer |
| **Incomplet** | El fitxer és més curt del que diu el seu propi índex: s'ha tallat en copiar-lo, pujar-lo o sincronitzar-lo, o és un fitxer al núvol que encara és "només en línia" |
| **Il·legible** | El fitxer no és un fitxer compost vàlid, o no s'ha pogut llegir |

A la columna **Estat**, un model mostra **Complet**, un "*n* incomplet" en àmbar quan almenys una còpia és dolenta però una altra és sana, o **Incomplet** en vermell quan no hi ha cap còpia sana.

## Còpies de seguretat

Els fitxers anomenats `Nom.0001.rvt`, `Nom.0002.rvt` i així successivament són còpies de seguretat numerades de `Nom.rvt`. S'agrupen sota el seu model, la més recent primer, a **Totes les … còpies**. La fitxa es llegeix del fitxer principal quan és complet; si no, de la còpia completa més recent ("més recent completa").

## Rols

Es mostren en cursiva sota el nom d'un model.

| Rol | Significat |
|---|---|
| Enllaçat per *un altre model*: de fons | Un altre model de la carpeta l'enllaça, així que probablement és el model de fons d'una altra persona, com el d'un consultor |
| Fitxer de partida o sense títol | Un nom com Blank, Template, Default, Untitled o Project1: un punt de partida, o un fitxer que mai no s'ha anomenat correctament |
| Model central | Un model central compartit. El treball es fa en una còpia local, no aquí |
| Família (una peça) | Un fitxer `.rfa` o `.rft`: un component, no el projecte |
| Només còpies de seguretat | El fitxer principal ha desaparegut i només queden les còpies numerades |

## Com es tria Comença aquí

BimCraft aplica el mateix raonament que faria un usuari experimentat:

1. Els candidats són fitxers de projecte llegibles (`.rvt`, `.rte`) que no estan enllaçats per un altre model i no són fitxers de partida.
2. Els models centrals i els models només amb còpies de seguretat compten només quan no hi ha res millor.
3. Entre els candidats, guanya el que s'ha desat més recentment.

El quadre enumera els seus motius i avisa quan un fitxer que sembla l'elecció òbvia està malmès, quan altres models són de fons i quan l'elecció és un model central. És una estimació: consulteu-ho amb qui va treballar per última vegada en el projecte.

## Estat de l'enllaç

| Etiqueta | Significat |
|---|---|
| **En aquesta carpeta** | Trobat a la ruta relativa desada, o al final de la ruta completa desada dins de la carpeta |
| **Trobat amb el mateix nom** | No és a la seva ruta, però hi ha un fitxer amb el mateix nom a la carpeta. Comproveu que és el correcte |
| **Fitxer de biblioteca** | Una taula de codis de notes clau o de codis de conjunt. Vénen amb el programa a cada ordinador |
| **No és en aquesta carpeta** | No s'ha trobat enlloc de la carpeta |

La columna **Enllaços trobats** de **Models** mostra quants enllaços d'un model s'han trobat, de tots els que s'esperaven a la carpeta (els fitxers de biblioteca no es compten).

## Deixats de banda

| Línia | Significat |
|---|---|
| Carpetes de manteniment de Revit (no es llegeixen) | Les carpetes `*_backup`, `*_log` i `Revit_temp`, a més de les carpetes ocultes i `__MACOSX` |
| Restes de bloqueig, registre i còpia | Els fitxers `.dwl`, `.dwl2`, `.bak`, `.err`, `.log`, `.tmp`, `.sv$`, `.ac$`, `.lck` i `.slog` |
| Altres fitxers | Tota la resta (els primers 40 s'anomenen) |
