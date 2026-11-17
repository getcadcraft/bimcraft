---
title: Aprire ed esportare file IFC5 alpha (IFCX)
summary: Un'opzione di laboratorio per il formato file IFC5 alpha (.ifcx): aprire un file con i suoi layer, vedere ciò che la lettura non ha potuto verificare, ed esportare i modelli aperti. Il formato è ancora in evoluzione, quindi leggere prima.
keywords: ifc5, ifcx, alpha, buildingsmart, json, layer, schema, laboratorio, quantità, qto, esportazione, importazione
from: cffe1669
---

IFC5 alpha (file con estensione {{ui:.ifcx}}) è il formato di file che buildingSMART sta ancora progettando. Non è definitivo: i file, e la nostra lettura di essi, possono cambiare. Per questo è un'opzione di laboratorio e la lettura viene prima di tutto.

## Attivazione

1. Scegliere {{ui:Impostazioni}}, poi la sezione {{ui:IFC5 alpha (IFCX)}} della scheda BimCraft.
2. Spuntare {{ui:IFC5 alpha (IFCX) - il formato è ancora in evoluzione; leggere prima}}.

L'opzione è disattivata per impostazione predefinita. Finché è disattivata, un file .ifcx viene rifiutato con una frase che rimanda a questa pagina. {{ui:Apri IFC5 alpha (.ifcx)…}} e il pulsante di esportazione {{ui:IFC5 alpha}} compaiono quando è attiva.

## Apertura

- Scegliere un file .ifcx con {{ui:Apri un file o una cartella}} (sostituisce il modello aperto, dopo la consueta domanda sulle modifiche), oppure
- scegliere {{ui:Apri IFC5 alpha (.ifcx)…}} e selezionare più file insieme: il file, i suoi layer e i file di schema che importa. Con un modello già aperto, il file viene **aggiunto accanto** ad esso; la x nell'elenco dei modelli lo rimuove di nuovo, ed è l'annullamento.

Un file IFCX elenca nodi (un percorso, i suoi figli, ciò che eredita, i suoi attributi). Più file possono descrivere lo stesso nodo: un file successivo (un layer) sovrascrive gli attributi di uno precedente, e un figlio nullo rimuove un figlio. BimCraft li compone, poi disegna il risultato come un piccolo modello IFC4: progetto, sito, edificio, piani ed elementi con nomi, classi, proprietà, quantità, colori e mesh.

Nulla viene scaricato dalla rete. I file di schema che un file importa (per esempio `ifc@v5a.ifcx`) vengono usati solo se sono stati selezionati insieme al file; altrimenti il rapporto lo segnala e gli attributi vengono letti senza verifica del tipo.

### Il rapporto

Dopo l'apertura, un rapporto elenca ciò che la lettura ha trovato: dati che non corrispondono al loro schema, file di schema non forniti, attributi che non hanno un significato IFC qui. Gli attributi senza una corrispondenza vengono **mantenuti** nel modello, non eliminati, e vengono riscritti in esportazione.

## Corrispondenze

| Nel file IFCX | In BimCraft |
|---|---|
| Un nodo con una classe IFC (progetto, sito, edificio, piano, muro …) | L'elemento IFC4 corrispondente; una classe che questa lettura non conosce diventa un elemento proxy di edificio |
| Il nome che il nodo ha sotto il proprio genitore | Il nome dell'elemento |
| Attributi con un tipo di quantità (Lunghezza, Area, Volume, Massa …) | Un insieme di quantità IFC4 chiamato `Qto_IFCX` (le quantità IFC4 restano insiemi `Qto_*` IFC4) |
| Altri attributi di proprietà | Un insieme di proprietà chiamato `Pset_IFCX` |
| Attributi di mesh e trasformazione | I triangoli e la collocazione dell'elemento; le mesh invisibili non vengono disegnate |
| Colore, opacità, materiale, classificazione | Stile di superficie, materiale e classificazione dell'elemento |

Le unità sono intese in metri, con Z verso l'alto: la versione alpha indica che le unità saranno documentate in seguito.

## Esportazione

Scegliere {{ui:IFC5 alpha}} nella barra degli strumenti, leggere la nota, poi {{ui:Esporta .ifcx}}. Il file ha la nostra intestazione (autore CadCraft, versione ifcx_alpha) e indica al suo interno che è il formato alpha. Ogni modello viene scritto nelle proprie coordinate del file, in metri, con nomi, classi, insiemi di proprietà, quantità (come attributi con il loro tipo), colori e triangoli. Layer ed ereditarietà vengono scritti appiattiti. Verificare il file nel programma a cui lo si invia.

## Limiti

- La geometria curva (curve, superfici) non viene letta: solo mesh di triangoli.
- Le porte e le finestre annidate in un muro vengono collocate sul piano; il muro da cui provengono non viene collegato.
- I nomi degli insiemi `Qto_*` IFC4 vengono mantenuti come gruppi di attributi propri (`cadcraft::qto::…`); lo schema alpha standard ha solo alcuni nomi di quantità.
- Il formato può cambiare senza preavviso; un file creato oggi potrebbe non essere letto domani.
