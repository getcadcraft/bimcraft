---
title: Dal file di progetto a BimCraft tramite IFC
summary: Le impostazioni di esportazione IFC che si aprono meglio in BimCraft (versione, set di proprietà, quantità di base, locali, modelli collegati, coordinate), come aprire il risultato e cosa conserva l'esportazione.
keywords: esporta, esportazione ifc, rvt in ifc, converti, 3d, geometria, ifc2x3, ifc4, vista di coordinamento, vista di riferimento, vista di trasferimento del progetto, set di proprietà, quantità di base, locali, spazi, file collegati, coordinate condivise, punto di rilievo, punto base del progetto, impostazioni
from: 3efd5fc9
---

## Cosa si fa

Trasformare un file di progetto in un file IFC che si può orbitare, ispezionare, verificare e modificare in BimCraft. BimCraft non legge ancora il modello 3D contenuto in un file `.rvt`, quindi l'esportazione avviene nel programma che ha creato il file (Revit); BimCraft apre il risultato.

## Passaggi

1. Aprire il progetto nel programma che lo ha creato. La scheda di BimCraft indica la versione in cui è stato salvato.
2. Aprire una vista 3D che mostri ciò che si vuole esportare.
3. Scegliere **File > Esporta > IFC**.
4. Nella finestra di esportazione scegliere una configurazione (oppure **Modifica impostazione…**) con le impostazioni seguenti.
5. Scegliere una cartella e un nome di file, quindi esportare.
6. In BimCraft, fare clic su {{ui:Scegliere un file}} e selezionare il nuovo file `.ifc`. I modelli collegati esportati come file propri si aprono nella stessa scena con {{ui:Aggiungi un modello}}.

## Le impostazioni che si aprono meglio qui

| Impostazione nell'esportatore | Scegliere | Perché |
|---|---|---|
| Versione IFC | **IFC4 Reference View** per visualizzare, verificare ed estrarre quantità; **IFC2X3 Coordination View 2.0** quando altri richiedono IFC2X3 | Entrambi si aprono completamente. Si apre anche **IFC4 Design Transfer View**, con forme più precise, ma il file è più grande e più lento. |
| Tipo di file | **IFC** (semplice) | BimCraft non apre `.ifczip` né `.ifcxml`. |
| Fase / elementi visibili | La fase desiderata, e **Esporta solo gli elementi visibili nella vista** quando si imposta la vista 3D per questo | Esclude ciò che è stato nascosto di proposito. |
| Set di proprietà | **Esporta set di proprietà Revit** e **Esporta set di proprietà IFC comuni** | Diventano i set di proprietà che BimCraft mostra in {{ui:Proprietà}} e che usano {{ui:Trova}}, {{ui:Colore}} e {{ui:Controlli del modello}}. |
| Quantità di base | **Esporta quantità di base** | {{ui:Totali di quantità}} e gli abachi le usano (lunghezze, superfici, volumi) invece di stimarle. |
| Locali e aree | **Esporta locali nelle viste 3D** (o l'opzione Locali / Spazi) | I locali arrivano come spazi: fare clic su {{ui:Spazi}} per vederli. |
| File collegati | **Esporta i file collegati come IFC separati** | Ogni collegamento diventa un file a sé; aprirli insieme con {{ui:Aggiungi un modello}} li allinea. |
| Base delle coordinate | **Coordinate condivise** (oppure il punto di rilievo) | Il file riporta quindi la sua posizione sulla mappa (IfcMapConversion), così funzionano Misura › Posizione, i layer cartografici sul terreno e le nuvole di punti posizionate con coordinate di mappa. Il punto base del progetto mantiene il modello vicino all'origine, ma senza la sua posizione sulla mappa. |
| Dividi pareti e pilastri per livello | Acceso, quando si computano le quantità per piano | La parte di ogni piano è un elemento a sé. |

## Cosa si dovrebbe vedere

Il modello in 3D, con i piani ricavati dai livelli del progetto e le informazioni di progetto nel pannello {{ui:File}}. **Esportato da** indica l'esportatore.

## Cosa conserva l'esportazione e cosa no

- **Conservati**: geometria, piani, tipi di elemento, nomi, tipi, la maggior parte dei parametri (come set di proprietà), quantità di base se richieste, locali come spazi e la posizione sulla mappa con coordinate condivise.
- **Non conservati**: viste, tavole, annotazioni, famiglie come famiglie modificabili, workset e opzioni di progetto. Un file IFC è un'istantanea degli elementi del modello, non del progetto. Per le tavole, esportare in DWG e aprire il file nella vista 2D.

## Errori comuni

- **Parametri mancanti in BimCraft.** Attivare le opzioni dei set di proprietà indicate sopra ed esportare di nuovo.
- **Locali mancanti.** Attivare l'opzione dei locali, poi fare clic su {{ui:Spazi}}.
- **Salvataggio come `.ifczip`.** Scegliere IFC semplice, oppure decomprimere il `.ifczip`.
- **Nessuna posizione sulla mappa.** Esportare con coordinate condivise; verificare che il punto di rilievo del progetto sia impostato.
- **Aspettarsi che le modifiche tornino indietro.** Le modifiche salvate in BimCraft finiscono in un nuovo file IFC, non nel file di progetto.
