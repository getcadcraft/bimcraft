---
title: Compara un escaneig amb el model i la planificació 4D
summary: Jutja cada element del model contra un núvol de punts obert (construït, en part, absent, no assolit), vegeu el percentatge construït, acoloreix el model segons això i, amb una planificació 4D carregada, llista què va endarrere o endavant en el dia 4D.
keywords: escaneig, núvol de punts, progrés, percentatge completat, construït, absent, endarrerit, avançat, 4D, progrés d'obra, desviació, tal com construït, escaneig làser, dron, compara
from: 6fdc9003
---

Obriu un IFC, obriu un núvol de punts al costat (vegeu [Núvols de punts](topic:point-clouds)) i col·loqueu-lo sobre el model. La secció {{ui:Compara l'escaneig amb el model}} apareix al tauler de la dreta mentre hi ha un núvol obert.

## Què fa

Premeu {{ui:Compara}}. Cada element del model es jutja per la seva superfície, perquè és el que veu un escàner. Les sis cares de la seva caixa es tallen en cel·les d'uns 20 cm; una cel·la compta quan un punt de l'escaneig és dins la vostra {{ui:Tolerància}} (50 mm per començar) de la cara. Compta la millor cara gran, de manera que un mur escanejat des d'un costat no queda penalitzat per l'altre.

- **Construït**: almenys el 40 % de la superfície es veu.
- **En part**: del 10 % al 40 %.
- **Absent**: menys que això, però l'escaneig arriba a l'element (punts a 1.5 m d'ell).
- **No assolit**: l'escaneig mai no hi ha estat, de manera que no es diu res sobre ell.

Per als elements construïts i en part també dona el desplaçament mitjà dels punts de l'escaneig respecte de la superfície del model, i diu si l'element és al lloc (dins la tolerància), a prop (dins tres vegades) o desviat (més lluny). Només veu desplaçaments fins a cinc vegades la tolerància: un element construït més lluny del seu lloc que això es llegeix com a absent.

El resum dona el percentatge construït entre els elements que l'escaneig arriba, per nombre i per volum. Els elements construïts en part es comptin per separat i no se sumen als construïts.

## Amb la planificació 4D

Amb una planificació 4D carregada (vegeu [Planificació 4D](topic:4d-schedule)), el resultat també fa servir el dia que heu fixat al control lliscant 4D: els elements que han d'estar fets en aquell dia i que l'escaneig no mostra com a construïts són **endarrerits**; els elements que encara no toca i són construïts són **avançats**. Els elements endarrerits es llisten a {{ui:Problemes}}, i la taula es pot filtrar per a ells. Sense planificació no es diu res sobre endarrerit o avançat.

## La taula i el model

Cliqueu una fila per seleccionar l'element. {{ui:Acoloreix el model}} pinta els elements de verd (construït), ambre (en part), vermell (absent) o gris (no assolit); {{ui:Colors propis}} els torna al seu color. {{ui:Desa CSV}} escriu la taula. {{ui:Marca els elements coincidents com a verificats en obra}} marca cada element vist com a construït i dins la tolerància com a verificat en obra (LOD 500, mètode escaneig), en un sol pas que podeu desfer. Vegeu [Marca elements com a revisats o verificats en obra](topic:verification).

:::warning
Això compara la caixa de cada element amb punts de l'escaneig dins d'una tolerància. **No és un aixecament, un amidament ni una base per a pagaments.** Un element ocult darrere d'un altre d'escanejat (un mur darrere d'un revestiment, un forjat sota un acabat de terra) comparteix la seva superfície i pot llegir-se com a construït; un element corbat o inclinat té una caixa més gran que el seu cos i pot llegir-se com a en part o absent. Mireu la llista abans d'actuar-hi. Els comentaris de permisos i les notes de progrés no formen part d'això: queden a les columnes on els guardeu.
:::

Un assistent pot fer la mateixa comparació amb l'eina {{ui:Compara l'escaneig amb el model}}; no canvia res del model.
