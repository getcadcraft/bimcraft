---
title: Vedere cosa si usura in cinquant'anni
summary: I serramenti, le porte, le finiture e la copertura che il modello contiene, la loro vita utile, gli anni in cui ciascuno viene sostituito e il costo per anno e il suo valore attuale quando si digita un costo unitario.
keywords: ciclo di vita, lifecycle, vita utile, sostituzione, manutenzione, costo, valore attuale, sconto, inflazione, 50 anni, serramenti, vernice, copertura, finiture, costo globale
from: 1b849545
---

La sezione {{ui:Vista del ciclo di vita}} del pannello a sinistra elenca ciò che il modello contiene e che si usura, e quando viene sostituito nel periodo di studio (50 anni, per cominciare). Il modello non viene modificato.

## Come leggerla

Ogni parte mostra la sua quantità (misurata dal modello: area dei serramenti, porte esterne e interne, finitura della parete esterna, vernice interna, finitura di pavimenti e soffitti, impronta della copertura, scale), una **vita in anni** e un **costo unitario**. Una parte viene sostituita alla sua vita, al doppio della sua vita e così via, finché questo è prima della fine dello studio: quindi un serramento da 30 anni in uno studio di 50 anni viene sostituito una volta, al trentesimo anno. Le vite utili sono valori tipici di pianificazione: modificarli in base ai propri prodotti e al clima. Nessun costo è assunto; inserirne uno per vedere il denaro per anno, il totale e il suo valore attuale. Per aggiungere un tasso di sconto e un tasso di inflazione, se servono.

{{ui:Salva il programma (CSV)}} scrive i componenti e gli anni. Anche tubazioni, canali, cablaggi e apparecchiature sono elencati (vedi sotto).

## Tubazioni, canali, cablaggi e apparecchiature

- **Tubazioni e canali** sono i metri di ogni tratto disegnato. **Apparecchiature** (pompe, ventilatori, valvole, terminali, apparecchi, prese, interruttori, quadri e le altre voci che la scheda Assets traccia) sono contate per tipo, ciascuna con una vita di pianificazione. Un elemento la cui *vita utile* è impostata nella scheda Assets compare come riga a sé con quella vita; se ha una data di installazione, parte dalla sua età: una pompa di 16 anni con vita di 10 anni è da sostituire ora, poi ogni dieci anni.
- **I cablaggi** sono una **stima**: la distanza in pianta dal quadro lungo i dispositivi di ciascun circuito, dal più vicino, per 1,25 per il percorso. Il modello non disegna cavi, quindi verificarlo con il proprio computo.
- Le vite sono valori di pianificazione da verificare, non una fonte.

## Carbonio per sostituzione

Spuntare {{ui:Includi il carbonio incorporato di ogni sostituzione}}. Un nuovo serramento, porta, scala, copertura, tubazione o apparecchiatura è conteggiato con il carbonio che gli elementi dello stesso tipo nel modello hanno (i fattori della scheda Carbon, per unità). Una parte senza elemento o fattore, come vernice, finiture e cablaggi, mostra un trattino ed è elencata. La fine di vita della parte vecchia e il lavoro di sostituzione non sono conteggiati.
