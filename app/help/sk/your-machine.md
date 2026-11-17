---
title: Čím vykresľuje váš počítač
summary: Nastavenia › Vykresľovanie zobrazujú grafiku, jadrá procesora a pamäť, ktoré tento prehliadač aplikácii dovoľuje používať, a úroveň, ktorá určuje, kde vykresľovanie začína.
keywords: váš počítač, grafická karta, gpu, webgpu, webgl, procesor, cpu, jadrá, vlákna, pamäť, ram, zdieľaná pamäť, izolácia, úroveň, rýchlosť, pomalé, rýchlosť vykresľovania, notebook
from: 360f2375
---

Otvorte {{ui:Nastavenia}} ({{key:Mod+,}}), zostaňte na karte tejto aplikácie a posuňte sa k {{ui:Vykresľovanie}}. {{ui:Váš počítač}} vypisuje, čo tento prehliadač aplikácii dovoľuje používať na vykresľovanie. Nič z toho neopúšťa váš počítač.

| Riadok | Čo to znamená |
|---|---|
| {{ui:Grafika}} | Grafická karta, ktorú hlási prehliadač. "WebGPU" znamená, že zvláda prácu vykresľovania; "WebGL 2 only" znamená, že WebGPU nie je: živý pohľad a obrázky vysokej kvality používajú grafickú kartu cez WebGL 2 (obrázky so starším sledovaním lúčov WebGL bez funkcií, ktoré vyžadujú WebGPU); náhrada softvéru znamená, že všetko beží na procesore |
| {{ui:Procesor}} | Koľko jadier procesora hlási prehliadač |
| {{ui:Pamäť}} | Približne koľko pamäte má počítač, keď to prehliadač uvedie. Niektoré prehliadače to neuvádzajú |
| {{ui:Zdieľaná pamäť}} | Či stránka smie zdieľať pamäť medzi svojimi pracovnými vláknami. Keď je zapnutá, každé jadro môže pracovať na jednej kópii scény; keď je vypnutá, každé potrebuje vlastnú kópiu, takže veľká scéna sa zmestí na menej jadier naraz |
| {{ui:Rýchly kód procesora}} | Či prehliadač spúšťa rýchlejší kód WebAssembly. Bez neho sa použije pomalšia náhrada |
| {{ui:Úroveň}} | {{ui:Grafická karta, vysoká}}, {{ui:Grafická karta, základná}} alebo {{ui:Iba procesor}}, s dôvodom pod tým |

## Úroveň

Úroveň určuje, kde vykresľovanie začína, aby notebook s vstavaným grafickým čipom alebo bez grafickej karty zostal svižný. Vstavaný alebo mobilný grafický čip či 4 GB pamäte alebo menej nikdy nedostane {{ui:Grafická karta, vysoká}}.

:::note
Prehliadače sa líšia. Ten istý počítač môže v jednom prehliadači ukázať WebGPU a v inom "WebGL 2 only". Na Linuxe väčšina prehliadačov zatiaľ nemá WebGPU.
:::
