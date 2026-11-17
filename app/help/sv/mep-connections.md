---
title: Anslut rör och kanaler till utrustning
summary: Starta eller avsluta ett rör eller en kanal vid en anslutningspunkt så att den tar dess dimension och system och sitter fast i den, och kontrollera sedan anslutningarna: öppna anslutningspunkter, dimensions- och systemavvikelser, sträckor utan källa.
keywords: mep, anslut, anslutning, anslutningar, anslutningspunkt, anslutningspunkter, öppen anslutningspunkt, dimensionsavvikelse, systemavvikelse, källa, kontrollera anslutningar, fast, följ, flytta utrustning, ifcrelconnectsports, samordning
from: 29144fb0
---

## Vad du gör

Koppla sträckorna till utrustningen så att modellen blir ett sammanhängande system: en pumps utlopp till röret som lämnar den, en diffusors hals till dess grenkanal. Låt sedan BimCraft lista det som inte är kopplat.

## Rita från en anslutningspunkt

1. Välj {{ui:Rör}} eller {{ui:Kanal}}.
2. Flytta pekaren till en anslutningspunkt på en utrustning (de små cirklarna; en öppen anslutningspunkt ritas i varningsfärgen). Pekaren snäpper fast vid den och visar **vid en anslutningspunkt**.
3. Klicka: sträckan börjar på anslutningspunktens höjd och **tar dess dimension och system** (ett rör tar också systemets vanliga material). Statusraden anger vad den tog.
4. Rita vidare som vanligt. Om du avslutar en sträcka vid en annan anslutningspunkt låses även den änden.

En sträckas ände vid en anslutningspunkt är **fast** i den: flytta eller vrid utrustningen (i Egenskaper) så följer sträckans ände med; redigera sträckan och änden blir kvar vid anslutningspunkten. Sträckans övriga hörn står kvar där de är, så efter en stor förflyttning kan första delen lossna från anslutningspunkten i en vinkel: flytta nästa hörn också.

## Kontrollera anslutningarna

Öppna {{ui:Bygge}} och klicka på {{ui:Kontrollera anslutningar}}. Listan under raden visar:

| Rad | Vad det betyder |
|---|---|
| En anslutningspunkt är inte ansluten | En utrustning har en anslutning som inget är ritat till |
| Inget i ändan | En sträcka slutar i luften |
| Anslutna punkter med olika dimensioner | En sträcka med en dimension möter en anslutningspunkt eller sträcka med en annan utan reducering (ett rörs nominella dimension, en kanals form och sidor) |
| Anslutna punkter i olika system | Till exempel en returkanal på en tilluftsdiffusor |
| Ett rör anslutet till en kanal | Två anslutningar av olika slag möts |
| Ingen utrustning i nätet matar den | Ingenting som sträckan är kopplad till, hur långt bort det än är, har ett utlopp. Spillvatten, dagvatten och ventiler kontrolleras inte på det här sättet: deras vatten kommer från armaturer |
| Fast vid en anslutningspunkt på utrustning som inte längre finns i modellen | Utrustningen togs bort; rita änden igen eller ta bort sträckan |

Fel visas först. Klicka på en rad för att välja det den anger. {{ui:Stäng}} döljer listan. Kontrollen läser modellen som den är ritad: den kontrollerar anslutningar och dimensioner, aldrig flöden, tryck eller injustering.
