---
title: Segnalazioni e file BCF
summary: Salvare una vista del modello come segnalazione — inquadratura, elementi selezionati, elementi nascosti, sezione — condividerla come file BCF con altri strumenti di coordinamento, e aprire i loro file BCF per vedere le loro segnalazioni.
keywords: bcf, bcfzip, segnalazione, segnalazioni, argomento, punto di vista, rapporto di interferenza, coordinamento, commento, istantanea, apri bcf, salva bcf, esporta, importa
from: 2a6cf201
---

## Cosa farai

Indicare un problema nel modello e conservare la vista che lo mostra, quindi passarla in un file BCF, il formato che gli altri strumenti di coordinamento leggono e scrivono.

## Passaggi

1. Aprire un modello IFC e impostare la vista: ruotare la vista su di esso, selezionare gli elementi coinvolti, nascondere ciò che è di intralcio, tagliarlo con un piano o un box di sezione.
2. Fare clic sulla scheda {{ui:Segnalazioni}} a destra, quindi su {{ui:Nuova segnalazione da questa vista}}.
3. Digitare un titolo e, se si desidera, un commento; scegliere uno stato; indicare il proprio nome o l'e-mail (con l'accesso effettuato, il nome dell'account è compilato; vedere [Impostazioni di BimCraft](topic:settings#your-name-on-issues)). Fare clic su {{ui:Crea segnalazione}}.
4. Fare clic su {{ui:Mostra}} su una segnalazione per ripristinarne la vista.
5. Fare clic su {{ui:Salva BCF}} per scaricare tutte le segnalazioni come un unico file `.bcf`.
6. Per vedere le segnalazioni create da altri, fare clic su {{ui:Apri BCF…}} e scegliere il loro file `.bcf` o `.bcfzip`.

## Cosa si vede

- Ogni segnalazione nell'elenco, con un'immagine della sua vista, il titolo, lo stato, l'autore e la data.
- {{ui:Mostra}} ripristina l'inquadratura, gli elementi selezionati, ciò che era nascosto (o le sole cose mostrate) e la sezione. Gli elementi sono trovati tramite il loro GlobalId in ogni modello aperto; la riga di stato segnala se alcuni non ci sono.
- Un piano o un box di sezione proveniente da un altro strumento viene mostrato quando è allineato agli assi del modello; piani inclinati o aggiuntivi tornano come volume di sezione (fino a 6 piani). Una segnalazione conserva il primo box di un volume composto da più box.

## Da sapere

- Il file è BCF 2.1 e conserva la vista nelle coordinate proprie del modello, così gli altri strumenti posizionano la camera nello stesso punto.
- Le segnalazioni restano in questa scheda finché non vengono salvate. Aprire un altro modello mantiene l'elenco; aprire il modello a cui si riferiscono le segnalazioni prima di mostrarle.
- Una camera parallela (ortogonale) proveniente da un altro strumento viene mostrata con la camera prospettica di questo visualizzatore, arretrata in modo che la stessa parte del modello riempia la vista.

## Errori comuni

- **Mostra ha spostato la camera in un punto strano.** La segnalazione è stata creata su un altro modello o con altre coordinate. Aprire prima il modello giusto.
- **Il file non si apre.** Non è uno zip BCF, oppure è danneggiato; la riga di stato indica il motivo.

## Prossimi passi

- [Nascondere, isolare e vedere attraverso gli elementi](topic:hide-and-isolate)
- [Tagliare un modello IFC con un piano di sezione](topic:section-plane)
