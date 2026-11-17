---
title: Pareti e porte da una scansione con telefono o laser
summary: Trasformare la scansione di un locale in pareti, porte e locali proposti, da accettare uno per uno.
keywords: scansione, scansione con telefono, lidar, nuvola di punti, pareti da scansione, porte da scansione, scansione di locale, ply, e57, las, obj, suggerisci
from: a4ef0f10
---

## Cosa fa

Con una scansione aperta (una nuvola di punti come PLY, E57 o LAS, oppure una mesh come OBJ), BimCraft taglia la scansione all'altezza della pianta, la orienta squadrata rispetto all'edificio e cerca tratti lunghi e sottili di punti: sono le pareti. Uno spazio di circa la larghezza di una porta tra due tratti sulla stessa linea diventa un'unica parete con una porta. Le pareti che chiudono uno spazio formano un locale.

Non si disegna nulla finché non si accetta. Pareti e porte arrivano come elenco di proposte (sono modifiche in modalità Suggerisci): mantenere quelle corrette, rifiutare le altre, e tutto ciò che si mantiene viene disegnato in un'unica operazione di annulla. I locali compaiono automaticamente.

## Cosa verifica

Le pareti che non si chiudono, i tratti di parete più corti dello spessore della parete e una lacuna della dimensione di una porta senza pareti intorno vengono segnalati come **Problemi**, con una posizione, così è possibile guardare la scansione in quel punto.

## Non verificati fino al controllo

Pareti, porte e locali accettati da una scansione sono contrassegnati come non verificati: un riquadro tratteggiato e un "?" in pianta finché non si contrassegnano come controllati. Vedere [Contrassegnare gli elementi come controllati o verificati in cantiere](topic:verification).

## Cosa non può fare

- Trova pareti che corrono in due direzioni perpendicolari. Una parete diagonale o curva non viene trovata.
- Un piano alla volta. Le finestre non vengono trovate (una finestra è solo una lacuna quando il taglio è all'altezza del davanzale).
- È stato provato su scansioni e mesh di locali generati, non ancora su scansioni reali da telefono. Non è noto quanto bene funzioni su una scansione reale (deriva su un percorso lungo, arredi contro le pareti, vetri, porte aperte), e la messa a punto su scansioni reali è il passo successivo. Verificare ogni proposta rispetto alla scansione prima di accettarla.
