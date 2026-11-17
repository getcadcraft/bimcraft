---
title: Stile di lavoro, viste duplicate, penne in stampa, Segnala come e modelli
summary: Scegliere come si comporta BimCraft per il proprio modo di lavorare, duplicare qualsiasi vista come copia autonoma o collegata, conservare nel file le sostituzioni delle penne e stampare come visualizzato o tramite una tabella di penne, segnalare un elemento come un'altra classe IFC e avviare i progetti dai propri modelli.
keywords: stile di lavoro, duplica vista, duplica, copia vista, vista dipendente, vista collegata, copia autonoma, copia di vista, sostituzioni penne, penne, spessori linee, stampa come visualizzato, tabella di penne, stile di stampa, ctb, monocromatico, scala di grigi, segnala come, classe IFC, riclassifica, tipo predefinito, modello generico, solaio come strada, muro come pannello, tetto come rampa, modello di progetto, modello, nuovo da modello, salva come modello, standard di ufficio
from: 231d98b0
---

## Cosa si farà

Impostare BimCraft per il proprio modo di lavorare, duplicare le viste, stamparle come ci si aspetta, contare gli elementi per ciò che sono davvero e avviare ogni progetto dal modello dell'ufficio.

## Scegliere uno stile di lavoro

1. Aprire {{ui:Impostazioni}} e la scheda {{ui:BimCraft}}. Trovare {{ui:Stile di lavoro}}.
2. Sceglierne uno:
   - {{ui:Ogni vista per sé}} (la prima scelta): una vista duplicata copia le sue annotazioni e restano di quella vista; le tavole si stampano come appare sullo schermo.
   - {{ui:Annotazioni e tabelle di penne condivise}}: le viste duplicate condividono le annotazioni; la stampa passa per una tabella di penne.
3. Sotto la scelta ci sono le quattro cose che imposta. Cambiarne una da sola; lo stile risulta poi {{ui:Personalizzato}}.

Lo stile di lavoro è conservato in questo browser, come la disposizione dell'area di lavoro. Un modello lo porta con sé nei nuovi modelli.

## Duplicare una vista

1. In {{ui:Browser di progetto}}, ogni pianta di piano, pianta del soffitto, callout, prospetto e sezione ha un pulsante {{ui:Duplica}} (due fogli).
2. Assegnare un nome alla copia e scegliere come si comporta:
   - {{ui:Copia autonoma}}: disegno, quote, ritaglio, elementi nascosti e penne vengono copiati e restano propri. Modificare una delle due viste non cambia mai l'altra, quindi una vista su una tavola emessa resta com'era emessa.
   - {{ui:Collegato}}: mostra la stessa vista con un unico set di annotazioni e impostazioni.
3. La copia compare sotto {{ui:Viste duplicate}}. Fare clic per aprirla; la barra sopra la pianta indica che è una copia, con {{ui:Su}} per tornare alla sua vista.
4. Il suo pulsante a cursore apre le sue impostazioni: il nome, {{ui:Intervallo di vista}} (una copia autonoma ne ha uno proprio), {{ui:Rendi copia autonoma}} per una copia collegata, ed {{ui:Elimina}}.

Le copie di prospetti e sezioni vanno nelle proprie tavole, come le viste da cui provengono. Duplicare è un solo passo di annullamento, e le copie sono conservate nel file IFC accanto ai callout.

## Penne conservate con la vista e stampate come visualizzate

1. Attivare {{ui:Disegna}} e scegliere {{ui:Penne}}.
2. {{ui:Per}} ora elenca ogni categoria: muri, porte e finestre, solai, tetti, pilastri, scale, arredi e il resto, e disegno e quote.
3. {{ui:Applica}} conserva la penna nel file IFC con la vista mostrata: una pianta, una pianta del soffitto, un callout o una vista duplicata. Le penne create prima della versione 0.9 erano conservate nel browser; {{ui:Mantieni queste nel file}} le sposta.
4. Tavole e PDF disegnano ogni penna come appare sullo schermo.

Per stampare invece tramite una tabella di penne, impostare {{ui:Stampa}} nella riga Penne su {{ui:Tramite una tabella di penne}}, quindi scegliere una tabella (colore, monocromatica, scala di grigi) oppure {{ui:Modifica tabella di penne…}}: ogni colore riceve il colore, lo spessore e la retinatura con cui viene stampato. La tabella è il file di stile di stampa di CadCraft, quindi {{ui:Importa…}} accetta una tabella creata nell'app CadCraft e {{ui:Esporta}} ne restituisce una. Il modello conserva la propria scelta; in assenza di scelta decide lo stile di lavoro.

## Segnalare un elemento come un'altra classe

Un solaio disegnato come strada, un muro usato come pannello, un tetto modellato come rampa: mantenere lo strumento con cui è stato disegnato e segnalarlo per ciò che è.

1. Selezionare l'elemento e aprire {{ui:Proprietà}}. Aprire {{ui:Segnala come}}.
2. Digitare nella casella di ricerca per trovare una classe adatta alla forma, sceglierla insieme al suo tipo predefinito. Per un tipo proprio, scegliere USERDEFINED e assegnargli un nome.
3. {{ui:Applica}} (un solo passo di annullamento). {{ui:Cancella}} lo riporta di nuovo come disegnato.

Lo si modifica ancora con lo strumento con cui è stato disegnato. Il file IFC salvato lo scrive come classe segnalata, quindi altri programmi, il computo di {{ui:Quantità}}, Trova, Colora per, le verifiche del modello e {{ui:Problemi}} lo contano come tale. Gli abachi escludono dall'abaco dei muri un muro segnalato come pannello, e {{ui:Elementi per classe segnalata}} elenca tutti quelli. Funziona con i file IFC4 e IFC2X3; l'elenco offre solo le classi della versione IFC del file. Porte, finestre, scale, locali e livelli mantengono la propria classe.

## Salvare un progetto come modello e avviare da esso

1. Con un progetto aperto, fare clic su {{ui:Salva come modello}} accanto a {{ui:Salva}}.
2. Assegnare un nome. Selezionare {{ui:Scarica anche il file del modello}} per condividerlo come file IFC, e {{ui:Avvia nuovi modelli da questo}} per renderlo il proprio predefinito.
3. Un modello conserva livelli, modelli di vista e impostazioni di vista, viste duplicate e callout, disegno, penne e tabella di penne, tag, famiglie e tipi, tavole, formati delle tavole, cartigli e stile di lavoro. Muri, solai, porte e tutti gli altri elementi del modello vengono esclusi.
4. Fare clic su {{ui:Nuovo edificio}} e sceglierlo sotto {{ui:Avvia da}}, oppure scegliere {{ui:Un file modello…}} per uno ricevuto. Il nuovo progetto ottiene un nome proprio e una propria identità di progetto; tutto il resto è come nel modello.

:::note
I modelli sono conservati in questo browser. I modelli di team condivisi tramite CadCraft Studio non sono ancora implementati: inviare invece il file del modello.
:::
