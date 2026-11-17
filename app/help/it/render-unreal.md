---
title: Inviare la scena a un motore di gioco
summary: Studio può scrivere la scena in un progetto di Unreal Engine e mantenerla allineata a ogni invio; le proprie modifiche stanno in un layer che CadCraft non scrive mai. Il plug-in che la apre non è ancora stato rilasciato.
keywords: unreal, unreal engine, motore di gioco, collegamento, invia, stage USD, progetto, live, cine camera, movie render queue
from: 154d55ef
---

In CadCraft Studio l'elenco Motore può contenere un **collegamento** a un progetto di Unreal Engine. Solo in una direzione: da CadCraft a Unreal.

## Inviare la scena

1. Scegliere la voce Unreal nell'elenco Motore. La prima volta Studio chiede di indicare la cartella del progetto (quella con il file `.uproject`); la ricorda.
2. Fare clic su {{ui:Invia}}. Studio scrive `CadCraft/<nome file>/` dentro il progetto: la scena come file USD, il file delle impostazioni, i profili di luce e due piccoli file di layer.
3. Modificare il modello, salvare e inviare di nuovo. Vengono sostituiti solo la scena e il file delle impostazioni.

## Le proprie modifiche sono al sicuro

Lo stage che Unreal apre è un piccolo layer radice creato una volta, con due layer sotto: **i propri** in alto (`<nome>.user.usda`, vuoto all'inizio, mai riscritto da CadCraft) e la scena di CadCraft sotto. Le modifiche salvate nel proprio layer restano quando la scena viene inviata di nuovo. Le luci e gli altri attori che si posizionano nel livello di Unreal sono fuori dallo stage e non vengono toccati.

## Senza Studio

Nel browser, o su un computer in cui Studio non trova Unreal, scegliere **Cartella del progetto Unreal (.zip)** nell'elenco Motore e fare clic su {{ui:Render}}. Viene salvata la stessa cartella come zip: estrarla nella cartella `CadCraft` del progetto. Lasciare **Includi i file dello stage** attivo la prima volta; disattivarlo per i salvataggi successivi, così lo zip contiene solo la scena e il file delle impostazioni e il proprio layer non viene mai sostituito.

:::note
Il plug-in di Unreal che apre lo stage, applica sole, lampade, camere ed esposizione, segue ogni invio e fa il render di una camera **non è ancora rilasciato** e non è stato eseguito in Unreal. Finché non lo sarà, Invia mette i file nel progetto e gli strumenti USD di Unreal possono aprirli. Windows è il primo sistema; macOS seguirà.
:::
