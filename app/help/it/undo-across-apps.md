---
title: Annullare tra app in CadCraft Studio
summary: In Studio, BimCraft comunica a Studio ogni passaggio completato, così Studio può annullare l'ultimo passaggio nella finestra usata per ultima.
keywords: annulla, studio, tra app, annullamento di progetto, cronologia, registro, finestra
from: c66dd0c1
---

## Cosa fa

In CadCraft Studio, ogni finestra dell'app comunica a Studio quando un passaggio è completato (un muro disegnato, un insieme di muri accettato da una scansione). Studio conserva questi passaggi nell'ordine di lavoro e può chiedere alla finestra che ha prodotto l'ultimo di annullarlo, usando il proprio annulla di quella finestra. Ctrl+Z dentro BimCraft resta quello di BimCraft e viene comunicato anche a Studio.

## Da sapere

- Studio chiede a una finestra di annullare solo quando il suo elenco degli annullamenti è esattamente com'era dopo il passaggio. Dopo Salva (che avvia un nuovo elenco di modifiche), oppure dopo aver cambiato il modello modificato, BimCraft risponde che l'elenco è cambiato e Studio salta questa finestra. Nulla viene forzato.
- Annullare gli effetti di un'app in un'altra non è ancora implementato.
- Fuori da Studio non cambia nulla.
- La voce di menu di Studio che chiede l'annullamento arriva con una build di Studio; fino ad allora i passaggi vengono segnalati, ma nessuna voce di menu li usa.

## Avanti

- [Lavorare in tempo reale con altri](topic:work-live)
