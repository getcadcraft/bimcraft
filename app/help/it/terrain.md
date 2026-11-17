---
title: Il terreno del sito, il piazzale dell'edificio e la pavimentazione
summary: Portare il terreno nel modello da punti di rilievo, curve di livello, una scansione LAS / LAZ, un GeoTIFF, una superficie LandXML (di CivilCraft) o alcune quote altimetriche; scavare nel terreno il piazzale della casa con le sue scarpate e sterro / riporto; appoggiarvi vialetti, percorsi e patii; consegnarlo a CivilCraft come LandXML.
keywords: terreno, suolo, sito, topografia, rilievo, punti, PNEZD, curve di livello, LAS, LAZ, LiDAR, GeoTIFF, DEM, quota, quota altimetrica, pendenza, sistemazione del terreno, piazzale, piazzale dell'edificio, sterro, riporto, movimento di terra, intersezione con il terreno, scarpata, vialetto, percorso, patio, pavimentazione, LandXML, CivilCraft
from: 208298d6
---

## Cosa si fa

Posizionare la casa sul suo sito. Il terreno diventa parte del modello: visibile in 3D, tagliato in sezioni e prospetti, con le curve di livello in pianta. Sotto la casa viene scavato un piazzale, i vialetti e i percorsi lo seguono e le fondazioni scendono con esso.

## Portare il terreno nel modello

1. Aprire {{ui:Build}} e scegliere {{ui:Terreno}}.
2. Oppure:
   - **Aprire un file di rilievo…**: punti di rilievo (PNEZD, PENZD oppure semplicemente est, nord, quota; separati da virgola, tabulazione o spazio), curve di livello in DXF o DWG (polilinee alla loro quota, polilinee 3D), una scansione LAS o LAZ (punti del terreno mantenuti, diradati a circa uno per metro quadrato), un GeoTIFF o una griglia di quote ASCII, oppure una superficie **LandXML** come quelle esportate da CivilCraft (i suoi punti e triangoli vengono mantenuti; se il file contiene più superfici, BimCraft chiede quale sia il terreno; le sue unità vengono dal file). Scegliere prima le unità del file (LandXML indica le proprie).
   - Oppure digitare una **Quota altimetrica** (dal pavimento di questo livello, quindi `-1'` è un piede sotto di esso), fare clic sui punti sulla pianta, cambiare la quota e fare clic su altri punti, poi scegliere **Crea il terreno**. Tre punti bastano per iniziare.

Le coordinate di rilievo lontane dal modello (piano di stato, UTM) vengono spostate sulla casa, e le quote vengono impostate in modo che il terreno alla casa sia circa 8" sotto il primo piano. **Alza il terreno** in **Proprietà** corregge di qualsiasi valore.

## Il piazzale dell'edificio

1. Scegliere {{ui:Piazzale}}.
2. Impostare il **Margine** attorno alla casa, di quanto il **piazzale è sotto il pavimento** (8" sotto una soletta, di più sotto un vespaio) e le **Scarpate** verso il terreno esistente (`2:1` = due piedi in fuori per ogni piede in salita o in discesa).
3. Puntare all'interno della casa e fare clic.

Il terreno viene appiattito sotto la casa e fino al margine, poi sale verso il pendio (sterro) e scende verso il lato basso (riporto) finché incontra il terreno esistente. **Proprietà** del terreno e del piazzale riportano i volumi di sterro e riporto. Se si spostano i muri, il piazzale li segue.

## Vialetti, percorsi e patii

Scegliere {{ui:Pavimentazione}}, selezionare **Percorso**, **Vialetto** o **Patio**, e fare clic sugli angoli. Fare di nuovo clic sul primo angolo, fare doppio clic oppure premere {{key:Enter}} per terminare. La pavimentazione segue la quota finita del terreno; per cambiarne tipo o spessore usare **Proprietà**.

## Le fondazioni seguono la quota del terreno

Con il terreno nel modello, i muri di fondazione e i plinti dei vespai seguono il terreno: lungo ogni muro la fondazione resta alla sua profondità sotto il terreno esterno, scendendo a gradini interi da 8" dove il terreno scende (vedi [Fondazioni sotto i muri](topic:foundations)).

## Consegnare a CivilCraft

**LandXML per CivilCraft** (nella riga Terreno, oppure nelle **Proprietà** del terreno) scarica il terreno esistente e la quota finita come file LandXML. Aprirlo in CivilCraft per la sistemazione reale del terreno, lo scarico delle acque e i movimenti di terra.

## Da sapere

- Il terreno richiede un modello IFC4, come ogni nuovo edificio.
- Le curve di livello appaiono in pianta del livello del terreno con l'intervallo impostato nelle **Proprietà** del terreno; ogni quinta è più spessa.
- Il terreno viene salvato come elemento terreno IFC (una superficie triangolata chiusa, così le sezioni lo tagliano); il piazzale e la pavimentazione vengono salvati con esso. Per ricominciare, eliminare il terreno: il suo piazzale e la sua pavimentazione vanno via con esso.
