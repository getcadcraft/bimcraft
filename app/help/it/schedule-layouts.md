---
title: Impaginare, salvare ed esportare un abaco
summary: Raggruppare un abaco, assegnare subtotali e totali, aggiungere una colonna letta da una proprietà, salvarlo come configurazione nel file ed esportarlo come cartella di lavoro di foglio di calcolo (.xlsx), come testo da incollare in un foglio online o come CSV. Lo standard dell'ufficio completa ciò che un abaco non specifica.
keywords: impaginazione abaco, raggruppa per, subtotale, totale, intestazioni, standard dell'ufficio, politiche predefinite, configurazione, abaco porte per piano, resistenza al fuoco, ferramenta, xlsx, cartella di lavoro, foglio online, incolla, csv, esporta, foglio di calcolo, elementi, seleziona dall'abaco, valore
from: 95dfd801
---

## Cosa si fa

Trasformare un abaco semplice in quello che l'ufficio emette: raggruppato per livello, tipo o locale, con subtotali e un totale, con le colonne necessarie, sotto un proprio nome. Poi inviarlo a un foglio di calcolo. Ogni riga e ogni valore conoscono ancora gli elementi da cui derivano.

## Passaggi

1. Attivare {{ui:Disegna}} e aprire **Abachi** nel pannello di sinistra. Scegliere un abaco, ad esempio **Porte**.
2. Sopra la tabella, scegliere **Raggruppa per** (una colonna dell'abaco, come Livello o Tipo, oppure **Nessun raggruppamento**) e **Totali** (**Nessun totale**, **Un totale** oppure **Subtotali e un totale**). **Come impostato** lascia la scelta alla configurazione salvata o allo standard dell'ufficio.
3. Per aggiungere una colonna letta dagli elementi, inserire sotto la tabella il nome di una proprietà o di un tag (ad esempio `FireRating`, `Pset_DoorCommon.FireRating` oppure il nome di un tag come `Ironmongery`) e fare clic su **Aggiungi colonna**. BimCraft legge prima i set di proprietà dell'elemento, poi quelli del suo tipo. Se nessun elemento ha ancora un valore, lo segnala; la colonna si riempie da sola non appena viene impostato un valore.
4. Inserire un nome (ad esempio "Abaco porte per piano") e fare clic su **Salva come configurazione**. La configurazione viene conservata nel file dell'edificio e si aggiunge all'elenco Abachi con il suo nome. Segue ogni modifica del modello. **Rimuovi questa configurazione** la elimina di nuovo. Entrambe sono un'unica operazione di Annulla.

## Fare clic su un valore per selezionare ciò da cui deriva

Fare clic su una riga o su un singolo valore per selezionare in pianta e in 3D gli elementi da cui derivano:

- una riga seleziona gli elementi di quella riga;
- un subtotale o un totale seleziona tutto ciò che somma; un'intestazione di gruppo seleziona il suo gruppo;
- un valore con elementi propri seleziona quelli: le **Detrazioni** di un tipo di parete selezionano le sue porte e finestre, la superficie delle pareti di un locale seleziona le sue pareti.

Lo stesso vale in un documento ricavato dal modello: nell'anteprima, fare clic su un valore di un abaco.

## Esporta

- **Scarica Excel** salva una cartella di lavoro .xlsx. Lunghezze, superfici, volumi e conteggi sono numeri reali nell'unità mostrata dalla colonna (piedi e pollici restano testo). Un secondo foglio, **Elementi**, elenca per ogni riga i GlobalId degli elementi da cui deriva.
- **Copia per Google Sheets** mette l'abaco negli Appunti come testo separato da tabulazioni. In un foglio Google, fare clic sulla cella A1 e incollare. **Apri un nuovo Google Sheet** apre `sheets.new`, l'indirizzo di Google per un foglio vuoto, nel proprio account Google. BimCraft non accede a Google e non invia nulla: l'incolla avviene solo manualmente.
- **Scarica CSV** salva la tabella così come è impaginata a schermo.

## Lo standard dell'ufficio

Un ufficio può indicare una sola volta come impaginare i propri abachi. Attivare il componente aggiuntivo **Default Policies** ([Default Policies](topic:default-policies)) e impostare, in **Impostazioni › Globale › Default Policies › Impaginazione abachi (lo standard dell'ufficio)**:

| Politica | Cosa fa |
|---|---|
| Raggruppa gli abachi per | Livello, Tipo, Locale o nessun raggruppamento, per ogni abaco che ha tale colonna |
| Totali negli abachi | Nessun totale, un totale alla fine, oppure un subtotale sotto ogni gruppo e un totale |
| Titolo dell'abaco | Un modello, ad esempio `{project}: {schedule}` |
| Intestazioni di colonna | Come scritte, IN MAIUSCOLO o Con Iniziali Maiuscole |

Lo standard si applica a ogni abaco, chiunque lo imposti: gli abachi semplici nel pannello, una configurazione salvata, un abaco impostato da un assistente, le esportazioni e gli abachi in un documento. Una configurazione che indica un proprio raggruppamento, totali o titolo li mantiene; lo standard completa il resto. Il pannello indica quali parti sono state impostate dallo standard dell'ufficio. Le politiche viaggiano nel file Default Policies insieme alle altre.

## Da sapere

- Una configurazione indica il proprio abaco di origine e le sue colonne; non contiene numeri. I numeri vengono letti dal modello ogni volta.
- Gli elenchi che non sono righe di elementi (le composizioni delle pareti e la legenda dei materiali) non hanno impaginazione né esportazione in questa sede.
- Un assistente può fare tutto questo al posto dell'utente: vedere [Lasciare che un assistente IA lavori con il modello](topic:assistants).
