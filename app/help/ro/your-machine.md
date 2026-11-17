---
title: Cu ce randează calculatorul
summary: Setări › Randare arată grafica, nucleele de procesor și memoria pe care browserul le lasă aplicației să le folosească, și nivelul care stabilește unde începe randarea.
keywords: calculator, placă grafică, gpu, webgpu, webgl, procesor, cpu, nuclee, fire de execuție, memorie, ram, memorie partajată, izolare, nivel, viteză, lent, viteză de randare, laptop
from: 360f2375
---

Deschideți {{ui:Settings}} ({{key:Mod+,}}), rămâneți pe fila proprie a aplicației și derulați până la {{ui:Rendering}}. {{ui:Your machine}} listează ce permite browserul aplicației pentru randare. Nimic din ea nu părăsește calculatorul.

| Rând | Ce înseamnă |
|---|---|
| {{ui:Graphics}} | Placa grafică raportată de browser. „WebGPU” înseamnă că poate face lucrul de randare; „WebGL 2 only” înseamnă că nu există WebGPU: vizualizarea live și imaginile de calitate înaltă folosesc placa grafică prin WebGL 2 (imaginile cu vechiul motor de randare WebGL, path tracer, fără funcțiile care cer WebGPU); un înlocuitor software înseamnă că totul rulează pe procesor |
| {{ui:Processor}} | Câte nuclee de procesor raportează browserul |
| {{ui:Memory}} | Cât de multă memorie are calculatorul, aproximativ, atunci când browserul o spune. Unele browsere nu o spun |
| {{ui:Shared memory}} | Dacă pagina are voie să partajeze memoria între lucrătorii săi. Pornită, fiecare nucleu poate lucra la o singură copie a unei scene; oprită, fiecare are nevoie de propria copie, astfel încât o scenă mare încape pe mai puține nuclee în același timp |
| {{ui:Fast processor code}} | Dacă browserul rulează codul WebAssembly mai rapid. Fără el se folosește o variantă de rezervă, mai lentă |
| {{ui:Level}} | {{ui:Graphics card, high}}, {{ui:Graphics card, basic}} sau {{ui:Processor only}}, cu motivul sub el |

## Nivelul

Nivelul este locul unde începe randarea, astfel încât un laptop cu un cip grafic integrat sau fără placă grafică să rămână receptiv. Un cip grafic integrat sau de telefon, sau cel mult 4 GB de memorie, nu primește niciodată {{ui:Graphics card, high}}.

:::note
Browserele diferă. Același calculator poate afișa WebGPU într-un browser și „WebGL 2 only” în altul. Pe Linux, majoritatea browserelor nu au încă WebGPU.
:::
