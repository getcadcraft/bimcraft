---
title: Complements que utilitza el vostre fitxer
summary: BimCraft anota en un fitxer IFC quins complements hi han escrit, i ofereix afegir els que hi falten quan l'obriu.
keywords: complement, addon, aquest fitxer utilitza, complement que falta, trusscraft, biblioteca, registre, cadcraft_addons
from: 9d9500d8
---

## Què fa

Quan un complement escriu al model (una encavallada, un traçat de tubs), BimCraft registra el complement i la seva versió al projecte IFC, en un conjunt de propietats anomenat CadCraft_AddOns. El registre s'escriu en el mateix pas de desfer que el canvi propi del complement, de manera que desfer el canvi també n'esborra el registre. Els altres programes ignoren aquest conjunt de propietats; el que ha dibuixat el complement queda al fitxer de totes maneres.

## Passos

1. Obriu un fitxer IFC que un complement ha ajudat a fer.
2. Si un complement que ha utilitzat no està activat, una nota sobre el model indica quins són, amb un botó per afegir-los des del vostre compte de Library.
3. Afegiu-los, o tanqueu la nota. El model s'obre igualment.

## Errors habituals

- **No apareix cap nota.** No heu iniciat la sessió al vostre compte en aquesta pestanya, o el fitxer no té cap registre (es va fer abans que existissin els registres, o amb un altre programa).
- **La llista de canvis diu "undefined".** Corregit: les etiquetes ara mostren el nom del complement.

## Següent

- [Col·loca equips i mobiliari des de la biblioteca](topic:place-from-library)
