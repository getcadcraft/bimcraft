---
title: Inviare la tubazione a un programma di analisi o isometrico, e rileggerla (PCF)
summary: Scrivere le tratte di tubazione del modello come file di componenti di tubazione PCF, oppure leggere un file PCF da un programma di analisi delle tensioni o di isometrici e disegnarne le tubazioni come tratte.
keywords: pcf, file di componenti di tubazione, analisi delle tensioni, isometrico, isometrici, esporta, importa, tubazione, impianto, tubo d'acciaio, spostare un lavoro, altro software
from: 24f91355
---

## Cosa si fa

Il PCF è il file di testo che i programmi di analisi delle tensioni e di isometrici leggono e scrivono. Elenca i componenti di ogni linea con i loro punti finali e i diametri interni.

## Esportare

1. Scegliere lo strumento Tubazione. La riga delle opzioni mostra **Esporta PCF**.
2. Fare clic su di esso. Viene scritta ogni tratta di tubazione del modello: tubo diritto, curve (una deviazione di 90 gradi, altrimenti una piegatura), raccordi a T con il punto di derivazione, riduzioni e valvole.
3. Il file usa i millimetri. I diametri interni sono diametri nominali in millimetri. Il punto centrale di una curva è il suo angolo, dove si incontrano le due gambe.

Il PCF è scritto per la tubazione in acciaio saldata testa a testa. Una tratta di un altro materiale viene scritta comunque, con codici di componenti in acciaio, e segnalata nel pannello Problemi.

## Importare

1. Scegliere lo strumento Tubazione e fare clic su **Importa PCF…**, poi scegliere il file.
2. Dal tubo diritto fino a curve, piegature, valvole e flange, il tutto diventa un'unica tratta sul livello corrente. Un cambio di dimensione inizia una nuova tratta. La derivazione di un raccordo a T diventa una tratta propria che inizia al centro del raccordo.
3. Il modello crea i propri raccordi. Riduzioni e raccordi a T non vengono copiati: compaiono dove si incontrano tratte di dimensioni diverse, oppure una derivazione.

:::note
Le altezze nel file sono lette come altezze sopra il livello corrente. Carichi, vincoli e la stessa analisi delle tensioni non sono nel file PCF e non vengono importati.
:::

## Verificare cosa è stato importato

- La lunghezza totale della tubazione per linea deve corrispondere alla sorgente.
- Il pannello Problemi elenca, una volta ciascuna, una curva il cui punto centrale non è alla stessa distanza da entrambe le estremità, una tubazione senza lunghezza e un diametro che non è una dimensione standard.

## Tubazioni già presenti in un file IFC

Quando un file IFC è aperto, **Esporta PCF** scrive anche i suoi segmenti di tubazione, i raccordi e le valvole, accanto alle tratte disegnate. Un segmento ottiene le sue estremità dai suoi bocchettoni, oppure dalle estremità del proprio corpo. Un raccordo senza bocchettoni viene escluso e il pannello Problemi lo segnala. È possibile esportare dal solo IFC quando il modello non ha tratte disegnate.

All'importazione, supporti, derivazioni a innesto, flange, guarnizioni e tappi presenti nel file non vengono disegnati. Il pannello Problemi elenca quanti ne sono stati esclusi per tipo, così nulla scompare senza avviso.
