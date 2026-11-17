---
title: Llegeix un fitxer de projecte o de família
summary: Obriu un fitxer .rvt, .rfa, .rte o .rft i llegiu-ne la versió, el treball compartit, la informació del projecte, els paràmetres de família, els enllaços i la imatge de previsualització, sense el programa que l'ha creat.
keywords: rvt, rfa, rte, rft, fitxer de projecte, família, versió, quina versió, compilació, treball compartit, central, informació del projecte, previsualització, miniatura, enllaços
from: df3600e1
---

## Què farà

Descobrir què hi ha en un fitxer de projecte o de família sense obrir-lo a Revit: quina versió el va desar, si és de treball compartit, la informació del projecte i a què enllaça. És útil quan arriba un fitxer d'algú altre i cal saber en quina versió obrir-lo.

## Passos

1. Feu clic a {{ui:Trieu un fitxer}}.
2. Trieu un fitxer `.rvt`, `.rfa`, `.rte` o `.rft`.
3. Espereu un moment. La línia d'estat diu "Llegint el fitxer…" i després "Obert *nom del fitxer*".
4. Mireu la part superior de la targeta: la imatge de previsualització desada al fitxer, el tipus de fitxer i la versió amb què es va desar, i el nom del projecte.
5. Baixeu per llegir les seccions de la targeta.

## Què hauríeu de veure

La targeta al mig, amb aquestes seccions quan el fitxer les conté:

| Secció | Què us explica |
|---|---|
| Fitxer | Nom del fitxer, mida, tipus (projecte, plantilla de projecte, família o plantilla de família), la versió i la compilació amb què es va desar, el treball compartit, la ruta del model central, on es va desar per última vegada, qui el va desar, la configuració regional i el GUID del document |
| Informació del projecte | Els camps propis del projecte, com el nom, el número, el client, l'adreça i l'estat. Els camps que encara tenen els valors per defecte d'un projecte nou no s'inclouen. |
| Família, Família: … | Per a una família: el seu nom, la categoria, la versió, l'última actualització i els seus paràmetres, grup per grup |
| Fitxers enllaçats i referenciats | Cada model enllaçat, enllaç CAD, imatge i taula de notes clau a què apunta el fitxer, amb la ruta desada |

A l'esquerra, el panell {{ui:Fitxer}} repeteix les dades principals i afegeix **Llegit**: quant del fitxer ha llegit BimCraft de fet, normalment uns 40 KB d'un fitxer de molts megabytes. A la dreta, el panell {{ui:Propietats}} indica que les propietats dels elements necessiten el model 3D.

## Per què no hi ha 3D

El model 3D i els elements dins d'un fitxer de projecte s'emmagatzemen en un format no documentat. BimCraft només llegeix les parts del fitxer que estan documentades o són clarament llegibles: la informació del fitxer, la informació del projecte, les dades de família, la llista d'enllaços i la imatge de previsualització. No endevina la resta. Per veure el model en 3D i llegir les propietats dels elements, exporteu IFC des del programa que ha fet el fitxer. Vegeu [Porteu un fitxer de projecte al 3D mitjançant IFC](topic:rvt-to-ifc).

## Errors habituals

- **Esperar 3D.** Vegeu més amunt.
- **Els enllaços només mostren la ruta desada.** Un fitxer obert sol no pot comprovar si els seus enllaços existeixen. Obriu en lloc d'això la carpeta on viu, i BimCraft marca cada enllaç com a trobat o no trobat: [Obre una carpeta de projecte sencera](topic:open-project-folder).
- **"Aquest fitxer està incomplet…"** El fitxer s'ha tallat mentre es copiava, es pujava o se sincronitzava. Un fitxer del núvol que encara és "només en línia" també ho fa. BimCraft l'obre igualment i només mostra el que s'ha recuperat: un avís ambre a la part superior de la targeta, una secció **Recuperat d'aquest fitxer** que enumera les parts de les quals tots els bytes són al fitxer, i **No és al fitxer** per a la resta. No s'omple res per a la part que falta, de manera que la versió, la imatge de previsualització o la informació del projecte poden faltar quan estaven desades després del tall. Si fins i tot la llista de continguts del fitxer s'ha tallat, no es pot obrir res. Copieu l'original de nou i torneu-lo a obrir per al fitxer complet.
- **"No hi ha imatge de previsualització en aquest fitxer".** Alguns fitxers es desen sense aquesta imatge. És normal.
- **Obrir una còpia de seguretat per error.** Els fitxers amb noms com `Tower.0004.rvt` són còpies de seguretat numerades. En obrir la carpeta, s'agrupen amb el seu model.
