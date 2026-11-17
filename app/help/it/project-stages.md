---
title: Fasi di progetto, dal brief alle istruzioni di cantiere
summary: Parti da un brief con le superfici obiettivo e controlla mentre disegni se sono raggiunte o insufficienti, confronta le opzioni di concept con il brief, collega specifiche e dettagli ai tipi, verifica i disegni di officina e registra le istruzioni di cantiere sugli elementi.
keywords: brief, abaco dei locali, superficie obiettivo, raggiunto, insufficiente, locali, opzioni di concept, opzioni, volumetria, budget, specifica, specifiche, dettaglio, dettaglio costruttivo, tipo, disegno di officina, verifica, approva, ripresenta, istruzione di cantiere, revisione, causa, cantiere, fase
from: 0a49b852
---

## Cosa farai

In un unico pannello lavorerai sulle fasi di un progetto: scriverai il brief del committente come elenco di locali con superfici obiettivo, confronterai le opzioni di concept con il brief, terrai le specifiche e i dettagli costruttivi associati ai tipi a cui appartengono, verificherai i disegni di officina man mano che tornano dalle imprese e registrerai le istruzioni di cantiere sugli elementi che modificano.

## Passaggi

1. Nel pannello a sinistra apri **Fasi di progetto**, poi **Brief**.
2. Incolla i locali, uno per riga: `Soggiorno; 1; 30` indica un locale di 30 m². Il numero può essere omesso. Scegli **Aggiungi i locali**. Compila il committente, il sito, il budget, la tolleranza e il programma, poi scegli **Salva il brief**.
3. Disegna i muri. Ogni locale che i muri delimitano e che ha il nome di un locale del brief (un numero dopo il nome, come in "Camera 2", viene ignorato) viene conteggiato. L'**Abaco dei locali** indica **Raggiunto**, **Insufficiente**, **Eccedente** o **Non disegnato**, con la differenza in m².
4. Per iniziare un nuovo progetto in questo modo scegli **Avvia un nuovo progetto da un brief**. Si apre un nuovo modello, basato su uno dei modelli salvati se ne selezioni uno, e vi inserisce il brief come primo passaggio.
5. Apri **Opzioni rispetto al brief**. Ogni opzione di volumetria conservata nel modello viene disegnata alla stessa scala con la superficie lorda, quanto richiesto dal brief e quanti locali del brief vi entrano. **Disponi qui i locali** colloca i locali nei piani dell'opzione, dal più basso, e indica ciò che non entra. Il costo deriva solo dal listino prezzi del progetto; senza una riga corrispondente viene indicato "Nessuna tariffa".
6. Apri **Tipi, specifiche e dettagli**. Ogni tipo di muro, porta, finestra e solaio indica se ha un testo di specifica, i dettagli collegati e dove la specifica, gli abachi e le tavole non concordano. **Collega un dettaglio** aggiunge un file di DetailCraft o di CadCraft, un indirizzo oppure una tavola di questo modello.
7. Apri **Disegni di officina**. Seleziona gli elementi del modello coperti da un disegno di officina, poi scegli **Ricevi**. Usa **Approva**, **Approvato con note** o **Rivedi** con il nome e la nota del revisore. **Ripresentato** crea la revisione successiva dello stesso documento e conserva lo storico delle verifiche. Lo stato viene anche scritto su ciascun elemento.
8. Apri **Istruzioni di cantiere**. Seleziona gli elementi, indica la causa e con parole tue che effetto ha su costi e tempi, poi scegli **Registra**. Dopo aver registrato una segnalazione, **Spiega le modifiche dopo questa segnalazione** indica quali elementi modificati sono coperti da un'istruzione e quali sono cambiati senza che nulla sia stato registrato.

## Da sapere

- Ogni passaggio è annullabile con un solo **Annulla**. Non viene mai bloccato nulla: un brief non raggiunto, un tipo che non concorda con il proprio testo o un disegno di officina in ritardo sono un avviso o una nota nei **Problemi**.
- I locali del brief sono spazi senza muri. Hanno un obiettivo, non una superficie disegnata, quindi gli abachi dei locali e COBie non li conteggiano come locali disegnati.
- Una disposizione colloca i locali nei piani solo in base alla superficie. Non disegna muri.
- Il testo della specifica si scrive in **Documenti** del modello. Qui viene solo confrontato con le dimensioni proprie del modello: non viene mai scritta per te alcuna clausola di una norma.
- I disegni di officina e le istruzioni di cantiere sono registrazioni nella stessa cronologia del pannello **Segnalazioni e revisioni**, quindi entrambi i pannelli le mostrano.
- Lo stato di un disegno di officina è una proprietà di ciascun elemento (`CadCraft_ShopDrawing`), e un'istruzione di cantiere è `CadCraft_SiteInstruction`, quindi **Trova** e **Colora per proprietà** possono usarli.
- I contrassegni di verifica sul campo (Fase 7) si trovano in **Proprietà**, sotto **Verifica**.
