---
title: Čím váš počítač vykresluje
summary: Nastavení › Vykreslování ukazuje grafiku, jádra procesoru a paměť, které tento prohlížeč aplikaci povoluje použít, a úroveň, od které začíná vykreslování.
keywords: váš počítač, grafická karta, gpu, webgpu, webgl, procesor, cpu, jádra, vlákna, paměť, ram, sdílená paměť, izolace, úroveň, rychlost, pomalé, rychlost vykreslování, notebook
from: 360f2375
---

Otevřete {{ui:Nastavení}} ({{key:Mod+,}}), zůstaňte na vlastní kartě této aplikace a přejděte na {{ui:Vykreslování}}. {{ui:Váš počítač}} ukazuje, co tento prohlížeč aplikaci povoluje použít pro vykreslování. Nic z toho neopouští váš počítač.

| Řádek | Co znamená |
|---|---|
| {{ui:Zobrazení}} | Grafická karta, kterou hlásí prohlížeč. „WebGPU“ znamená, že zvládne práci s vykreslováním; „Pouze WebGL 2“ znamená, že WebGPU není k dispozici: živé zobrazení a obrázky ve vysoké kvalitě používají grafickou kartu přes WebGL 2 (obrázky se starší cestou sledování paprsků WebGL, bez funkcí, které vyžadují WebGPU); náhrada v softwaru znamená, že vše běží na procesoru |
| {{ui:Procesor}} | Kolik jader procesoru prohlížeč hlásí |
| {{ui:Paměť}} | Přibližně kolik paměti má počítač, pokud ji prohlížeč uvádí. Některé prohlížeče ji neuvádějí |
| {{ui:Sdílená paměť}} | Zda stránka smí sdílet paměť mezi svými pracovními procesy. Když je zapnuto, každé jádro může pracovat na jedné kopii scény; když je vypnuto, každé potřebuje vlastní kopii, takže velká scéna se naráz vejde na menší počet jader |
| {{ui:Rychlý kód procesoru}} | Zda prohlížeč spouští rychlejší kód WebAssembly. Bez něj se použije pomalejší záložní varianta |
| {{ui:Podlaží}} | {{ui:Grafická karta, vysoká}}, {{ui:Grafická karta, základní}} nebo {{ui:Jen procesor}}, s důvodem pod tím |

## Úroveň vykreslování

Úroveň určuje, kde vykreslování začíná, aby notebook s vestavěným grafickým čipem nebo bez grafické karty zůstal svižný. Vestavěný nebo telefonní grafický čip nebo 4 GB paměti a méně nikdy nedostane {{ui:Grafická karta, vysoká}}.

:::note
Prohlížeče se liší. Stejný počítač může v jednom prohlížeči ukázat WebGPU a v jiném „Pouze WebGL 2“. V Linuxu zatím většina prohlížečů WebGPU nemá.
:::
