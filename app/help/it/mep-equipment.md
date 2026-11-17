---
title: Apparecchiature MEP con attacchi
summary: Posizionare unità di trattamento aria generiche, ventilatori, pompe, caldaie, scaldabagni, unità terminali, diffusori, griglie e serbatoi dimensionati dai valori che si digitano, ciascuno con gli attacchi per tubazioni e canali a cui si uniscono gli altri percorsi.
keywords: mep, apparecchiature, unità di trattamento aria, ahu, ventilatore, ventilatore in linea, pompa, caldaia, scaldabagno, unità terminale, vav, diffusore, griglia, bocchetta, serbatoio, attacco, attacchi, connessione, bocchettone, dimensione del collo, hvac, idraulico, meccanico, ifc, ifcpump, ifcairterminal, ifcunitaryequipment
from: df1bf8c5
---

## Cosa si farà

Posizionare le apparecchiature alle estremità di tubazioni e canali. Ogni pezzo è una forma generica dimensionata dai valori che si digitano, con le sue connessioni come **attacchi**: dove vi si unisce una tubazione o un canale, quale sistema, in che verso va il flusso e quale dimensione. Tubazioni e canali disegnati da un attacco ne assumono dimensione e sistema e restano fissati ad esso: vedi [Collega tubazioni e canali alle apparecchiature](topic:mep-connections).

:::note
Questo è uno strumento di disegno e coordinamento, dimensionato da un ingegnere. L'apparecchiatura non è un prodotto di un costruttore: nessuna portata, peso o dimensione di attacco del costruttore. Quando serve, importare il modello del costruttore dal proprio programma MEP in formato IFC.
:::

## Posizionare un pezzo

1. Attivare {{ui:Disegna}}, aprire {{ui:Build}} e scegliere {{ui:Apparecchiature}}.
2. Nella barra, scegliere il tipo e digitare le sue dimensioni. Ogni tipo chiede le proprie:

| Tipo | Si digita | I suoi attacchi |
|---|---|---|
| Unità di trattamento aria | lunghezza, larghezza, altezza; aperture di mandata e ripresa; dimensione della tubazione della batteria e sistema; dimensione della condensa | uscita del canale di mandata, ingresso del canale di ripresa, ingresso e uscita della batteria, scarico della condensa |
| Ventilatore in linea | diametro, lunghezza, sistema | ingresso e uscita del canale |
| Pompa | dimensione della tubazione, sistema | ingresso e uscita |
| Caldaia | lunghezza, larghezza, altezza, dimensione della tubazione, dimensione del gas, diametro del camino | mandata del riscaldamento in uscita e ritorno in ingresso, gas in ingresso, fumi in uscita |
| Scaldabagno | diametro, altezza, dimensione della tubazione, gas o elettrico | acqua fredda in ingresso, acqua calda in uscita (e gas in ingresso e camino quando funziona a gas) |
| Unità terminale | lunghezza, larghezza, altezza, ingresso circolare, larghezza e altezza di uscita | aria di mandata in ingresso e in uscita |
| Diffusore | faccia, collo, sistema | il suo collo (aria in ingresso) |
| Griglia | larghezza e altezza della faccia, larghezza e altezza del collo, sistema | il suo collo (aria in uscita verso il canale di ripresa o di espulsione) |
| Serbatoio | diametro, altezza, dimensione della tubazione, sistema | ingresso in alto, uscita vicino al fondo |
| Radiatore | lunghezza, altezza, profondità, dimensione della tubazione, sistema | mandata in ingresso in alto a una estremità, ritorno in uscita in basso all'altra |
| Convettore / pannello radiante | lunghezza, altezza, profondità, dimensione della tubazione, sistema | mandata in ingresso a una estremità, ritorno in uscita all'altra |
| Famiglia del costruttore | la famiglia (vedi [Specifiche di tubazioni, valvole, serrande e famiglie dei costruttori](topic:pipe-specs)) | gli attacchi che la sua famiglia ha ricevuto |

3. Impostare **Quota**, l'altezza della base sopra il piano. L'altezza di un diffusore o di una griglia è quella della sua faccia: digitare l'altezza del soffitto.
4. Digitare un **Tag** se lo si desidera (`AHU-1`); il pezzo successivo dello stesso tipo riceve il numero successivo.
5. Spostare il puntatore sulla pianta: l'ingombro e i suoi attacchi lo seguono. Premere {{key:R}} per ruotarlo di 90°. Fare clic dove deve andare.

Le dimensioni delle tubazioni sono dimensioni di tubi in acciaio (ASME B36.10M). Una tubazione disegnata da una pompa in un altro materiale assume la stessa dimensione nominale nel proprio materiale.

## Modificare o rimuovere

Selezionarlo nella pianta o nella vista 3D. Le Proprietà mostrano ogni dimensione digitata, la sua sigla, X, Y, altezza e rotazione, e ciascun attacco: dimensione, sistema, verso del flusso e se è collegato qualcosa. Ogni modifica è un passo di {{ui:Annulla}}; i percorsi fissati ai suoi attacchi si spostano con esso. {{key:Delete}} lo rimuove; i percorsi che gli erano fissati restano, e la verifica delle connessioni li elenca.

## Nel file IFC

Ogni tipo viene salvato con la sua classe IFC: IfcUnitaryEquipment (unità di trattamento aria), IfcFan, IfcPump, IfcBoiler (caldaia; uno scaldabagno è un IfcBoiler di tipo acqua con tipo di oggetto "Water heater"), IfcAirTerminalBox (unità terminale), IfcAirTerminal (diffusore, griglia) e IfcTank, con un tipo condiviso da ogni pezzo dello stesso tipo e delle stesse dimensioni. I file IFC2X3 ricevono IfcEnergyConversionDevice, IfcFlowMovingDevice, IfcFlowController, IfcFlowTerminal e IfcFlowStorageDevice con i tipi corrispondenti. Ogni attacco è un IfcDistributionPort posizionato dove si trova la connessione, rivolto verso l'esterno, con il suo verso di flusso e il suo sistema; gli altri programmi leggono quale percorso si collega a quale attacco. Il pezzo si unisce al sistema di ciascuno dei suoi attacchi e porta i set di proprietà di ogni elemento della libreria posizionato.
