---
title: Punts de replanteig i comprovacions as-built
summary: Numera els llocs que una quadrilla replanteja a partir del model —centres de pilars, extrems de murs, cargols d'ancoratge, passamurs, qualsevol element que triïs—, escriu-los per a una estació total i, després, llegeix els punts as-built que mesura la quadrilla i mira què està fora.
keywords: punts de replanteig, replanteig, replantejar, estació total, topografia, fitxer de punts, CSV, TXT, pnezd, penzd, xyz, nord, est, cota, as-built, comprovació, tolerància, desviació, cargols d'ancoratge, centres de pilars, extrems de murs, passamurs, coordenades topogràfiques, conversió de mapa
from: acea9606
---

La pestanya {{ui:Punts}} de la dreta fa els punts que una quadrilla replanteja a l'obra a partir del model obert, i comprova els punts que mesura després.

## Fes els punts

1. Obre un model IFC i la pestanya {{ui:Punts}}.
2. Marca què replantejar: **centres de pilars** (el peu de la línia central de cada pilar), **extrems de murs** (els dos extrems de l'eix de cada mur, a la base), **cargols d'ancoratge**, **passamurs** (elements el nom o el tipus dels quals diu passamurs) i els **elements triats** (cadascun al seu punt de col·locació; tria'ls primer a la vista).
3. Tria el primer número i un prefix, les coordenades, les unitats, les columnes i el fitxer:
   - **Model**: les coordenades pròpies del fitxer. **Quadrícula topogràfica**: la quadrícula de mapa de la georeferència del model (només es mostra si l'IFC té una conversió de mapa), en metres o en la unitat que triïs.
   - Columnes **PNEZD** (punt, nord, est, cota, descripció), **PENZD** o **XYZ**; **CSV** (comes) o **TXT** (tabuladors).
4. Prem {{ui:Fes els punts}}: la llista els mostra i la vista els marca en blau. {{ui:Baixa els punts}} escriu el fitxer.

Els punts segueixen un ordre fix —per tipus i, després, en files pel plànol—, de manera que fer-los de nou des del mateix model dona els mateixos números. El fitxer és el que obre CivilCraft i el que escriu EXPORTPOINTS de CadCraft: un punt per línia, tres decimals, i una descripció entre cometes quan conté una coma.

## Comprova els punts as-built

Quan la quadrilla torna el que ha mesurat, tria una **tolerància** en mil·límetres i com aparellar els punts —per **número de punt** (han mantingut els teus números) o pel **tret més proper**— i prem {{ui:Llegeix els punts as-built…}}. Llegeix el fitxer en les mateixes unitats i coordenades que vas escriure.

Cada punt de disseny queda llavors **dins** de la tolerància, **fora** d'ella o **no mesurat**, i qualsevol tret que ningú no havia demanat és **extra**. La taula dona les diferències en la unitat que triïs a la barra d'eines (els peus es mostren en polzades decimals): as-built menys disseny, és a dir, est, nord, alçada i la distància en planta. La vista marca cada punt en verd o en vermell amb una línia cap al tret, i en gris quan no s'ha mesurat. {{ui:Informe (CSV)}} escriu la comparació completa.

Aquí no es canvia res del model. Encara no implementat: replantejar a partir de les vores de forjat, de les interseccions de la quadrícula o de les obertures fetes per a tu, i enviar punts directament a un instrument —usa el fitxer.
