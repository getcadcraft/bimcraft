---
title: Campi fotovoltaici, ombreggiamento e produzione
summary: Posizionare campi solari su tetti o a terra, calcolare l'ombreggiamento dal modello, stimare l'energia annua, dimensionare le stringhe e produrre i dati dello schema unifilare. Tutti i dati di input sono mostrati; il modulo di esempio e le perdite sono generici.
keywords: solare, fotovoltaico, pv, campo, modulo, tetto, ombreggiamento, produzione, kwh, kwp, dimensionamento stringhe, inverter, unifilare, schema unifilare, inclinazione, azimut, distanza tra le file
from: adf4aaf3
---

## Obiettivo

Aprire il pannello **Solar PV**. Scegliere una falda del tetto (inclinazione e orientamento sono letti dal modello) oppure disporre un campo a terra con un'inclinazione e un orientamento; i moduli vengono inseriti all'interno con arretramenti e conteggiati, dando la potenza in corrente continua in kWp. Posizionare il campo lo scrive nel modello come dispositivi solari, in un solo passo di Annulla.

## Ombreggiamento, produzione e stringhe

- **Ombreggiamento** proietta un raggio da ogni modulo verso il sole, per giorni tipici di ciascun mese, sulla geometria del modello, così contano gli edifici vicini, i parapetti e le file davanti. Si riduce solo la luce solare diretta, e un campo parzialmente ombreggiato perde potenza in proporzione.
- **Produzione** fornisce kWh per mese e per anno, kWh per kWp e il performance ratio. I valori di irraggiamento derivano dai propri totali mensili su una superficie orizzontale, se li si digita. Senza di essi il pannello usa un limite superiore a cielo sereno, e lo dichiara. **Scaricare il clima da NASA POWER** con un pulsante nella scheda Produzione: invia solo latitudine e longitudine del terreno, una volta, e conserva la risposta su questo computer (verificato dal browser il 2026-10-30). PVGIS non consente a una pagina web di leggere la sua risposta, quindi la scheda fornisce un collegamento che apre in una nuova scheda i dati mensili di PVGIS per il terreno; incollare ciò che mostra nella casella e i dodici mesi vengono compilati.
- **Stringhe** verifica i moduli per stringa rispetto alla finestra di tensione dell'inverter nel giorno più freddo e in quello più caldo, e le stringhe in parallelo rispetto alla sua corrente.
- **Unifilare** produce i dati dello schema (campo, quadro di parallelo, sezionatore, inverter, quadro, rete) con le sezioni dei cavi e dei fusibili dai fattori digitati. Sono dati e un SVG; l'add-on Elettrico di CadCraft può collocarlo come simboli.

Il modulo, l'inverter, le perdite e i fattori dei cavi forniti con BimCraft sono esempi generici, indicati in ogni risultato. Digitare i dati del costruttore e i valori normativi di progetto, e far verificare il progetto dal responsabile che ne risponde.
