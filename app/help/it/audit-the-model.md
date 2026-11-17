---
title: Verificare il modello: locali, etichette, LOD, interferenze e interfacce
summary: Eseguire controlli pronti su locali senza nome, etichette mancanti, elementi sotto il livello di sviluppo richiesto dalla fase di progetto, interferenze tra discipline e interfacce LOD 350. Solo consigli: nulla viene bloccato.
keywords: audit, controllo, locale senza nome, etichetta mancante, marcatura, lod, livello di sviluppo, milestone, fase, interferenza, disciplina, coordinamento, interfaccia, lod 350, apertura, architrave, cordolo, penetrazione, guaina, tubazione, canale, problemi, rapporto di controllo, consultivo
from: cc83a14d
---

## Cosa farai

Esaminare l'intero modello in una sola volta prima di emetterlo. L'audit esegue i set di regole pronti e inserisce ciò che trova nell'elenco {{ui:Problems}} come consiglio. Nulla viene bloccato: si corregge un rilievo, oppure lo si accetta con una motivazione, come ogni altro problema.

## Passaggi

1. Aprire {{ui:Model checks}} › {{ui:Audit}} nel pannello sinistro, oppure {{ui:Tools}} › {{ui:Audit the model…}} (digitato: `AUDIT`).
2. Scegliere la {{ui:Project stage}}. È la stessa fase dei dettagli del disegno.
3. Selezionare i set di regole da eseguire.
4. Fare clic su {{ui:Run the audit}}.
5. Leggere la riga per ogni set di regole, poi aprire {{ui:Open the Problems list}}. Un clic su un rilievo seleziona il suo elemento.
6. {{ui:The check report}} scarica il rapporto: ogni rilievo, chi ha accettato cosa e perché, e i set di regole eseguiti.

## I set di regole

- **Locali senza nome**: un locale senza nome, o che si chiama ancora come lo chiamava il programma ("Room 3").
- **Etichette mancanti**: una porta o una finestra senza marcatura, un locale senza numero, un dispositivo elettrico senza etichetta.
- **Elementi sotto il LOD della fase**: ogni muro, solaio, soffitto, tetto, porta e finestra il cui LOD è inferiore a quello richiesto dalla fase. Un elemento legge l'etichetta LOD del proprio tipo; un elemento verificato in cantiere è LOD 500. Gli elementi senza etichetta vengono contati in un'unica nota, perché non possono essere controllati.
- **Interferenze tra discipline**: elementi di due discipline (architettura, struttura, meccanica, idraulica, elettrica, per classe IFC) che si intersecano. Un tetto che poggia sui propri muri non viene conteggiato.
- **Interfacce LOD 350**: ogni porta e finestra sta in un'apertura del proprio muro, l'apertura sta dentro il muro, due aperture non si sovrappongono, un'apertura più larga del limite ha un architrave o un cordolo (un elemento sopra di essa, oppure una nota sulla porta o finestra), e una tubazione, un canale o una passerella portacavi che attraversa un muro o un solaio ha un'apertura in quel punto. I rilievi sono contati per coppia di discipline.
- **Elementi riconosciuti che nessuno ha verificato**: muri, porte, finestre e locali letti da un PDF, una scansione o un disegno che non sono ancora verificati. Vedi [Contrassegnare gli elementi come verificati o verificati in cantiere](topic:verification).

## Il LOD richiesto da ogni fase

Aprire {{ui:The LOD each stage asks for}} per vedere o modificare la tabella.

:::note
La tabella e la larghezza dell'architrave sono valori iniziali di CadCraft. Non sono tratti da uno standard: un progetto imposta il LOD per fase nel proprio piano di esecuzione BIM. Impostarli con i propri valori. Uno studio può impostare la tabella per tutti in Impostazioni › Default Policies › Audit; una modifica nella sezione Audit viene mantenuta su questo computer.
:::

## Da sapere

- Un architrave può essere annotato invece che modellato: selezionare la porta o la finestra e compilare {{ui:Lintel or header note}} sotto {{ui:Verification}} nelle Proprietà.
- Una tubazione che passa attraverso un'apertura reale non attraversa alcuna superficie e non viene segnalata. Una tubazione modellata dritta attraverso il muro lo è.
- Il controllo delle interferenze si interrompe dopo pochi secondi su un modello molto grande e lo indica. Per un controllo completo di due set scelti, vedi [Trovare interferenze tra elementi](topic:clash-check).
- Rieseguire l'audit dopo aver modificato il modello. I rilievi accettati restano accettati finché i loro numeri non cambiano.
- L'audit legge il modello. Non sostituisce una revisione di coordinamento da parte dei responsabili.

## Passaggi successivi

- [Verificare un modello per problemi comuni](topic:model-checks)
- [Trovare interferenze tra elementi](topic:clash-check)
- [Contrassegnare gli elementi come verificati o verificati in cantiere](topic:verification)
