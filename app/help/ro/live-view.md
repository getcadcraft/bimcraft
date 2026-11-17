---
title: Vizualizarea live
summary: Un panou alături de model care îl arată în aspectul în timp real, cu soare, umbre și lumină reflectată, și urmărește fiecare modificare pe care o faceți; mergeți prin el și setați ora zilei și luna.
keywords: vizualizare live, timp real, randare în timp real, plimbare, plimbare virtuală, perspectivă la persoana întâi, prezentare, client, al doilea ecran, a doua fereastră, monitor, ora zilei, soare, anotimp, lună, umbre, ocluzie ambientală, reflexii, lumină reflectată, iluminare globală, webgpu, webgl
from: ea5c02bf
---

Vizualizarea live arată modelul în aspectul în timp real: cerul și soarele după locul și data amplasamentului, umbrele soarelui, vopselele și materialele atribuite elementelor, lămpile și lumina reflectată de pereți și pardoseli. Urmărește ce faceți: rotiți vizualizarea 3D și ea se rotește, modificați modelul și arată schimbarea puțin mai târziu. Nimic nu este încărcat.

Desenează aceeași scenă, aceleași vopsele, lămpi și soare ca [Randarea unei imagini](topic:render); pentru o imagine finită folosiți aceea.

## Deschiderea

1. Deschideți un model și alegeți {{ui:Vizualizare live}} în bara de instrumente. Panoul se deschide peste aplicație, în dreapta jos.
2. Trageți de bara de titlu pentru a-l muta, trageți de colț pentru a-l mări.
3. {{ui:Vizualizare live într-o fereastră nouă}} (butonul de lângă el) sau {{ui:Fereastră nouă}} din panou o mută într-o fereastră proprie, pentru un al doilea ecran. Dacă browserul blochează ferestrele pop-up, se deschide ca panou.
4. {{ui:Închidere}} o închide.

## Comenzile

| Comandă | Ce face |
|---|---|
| {{ui:Urmărire vizualizare}} | Pornit: vizualizarea live privește unde privește vizualizarea 3D. Plimbarea o oprește |
| {{ui:Plimbare}} | Plimbarea prin model (mai jos) |
| {{ui:Gravitație}} | În timpul plimbării: stați pe pardoseli și urcați scările. Oprit: zburați |
| {{ui:Ora}} | Ora din zi. Soarele se mișcă atunci când trageți |
| {{ui:Luna}} | Luna, ca să vedeți soarele iarna și vara |
| {{ui:Calitate}} | {{ui:Pentru acest calculator}}, sau {{ui:Scăzută}}, {{ui:Mediu}} sau {{ui:Înaltă}} |

Linia de jos spune ce desenează vizualizarea (WebGPU sau WebGL 2), calitatea și lumina reflectată.

## Plimbarea prin model

1. Rotiți vizualizarea 3D spre locul unde doriți să stați și alegeți {{ui:Plimbare}}. Stați pe pardoseala de sub punctul de vedere al vizualizării, la 1,6 m înălțime.
2. Faceți clic pe vizualizarea live, apoi folosiți {{key:W}} {{key:A}} {{key:S}} {{key:D}} sau tastele săgeată. Țineți {{key:Shift}} apăsat pentru a alerga. Trageți pentru a privi în jur.
3. Treptele de până la 40 cm sunt urcate (scările); orice mai înalt este un perete. Pereții vă opresc, iar dumneavoastră alunecați de-a lungul lor.
4. Cu {{ui:Gravitație}} oprit zburați: {{key:E}} urcă, {{key:Q}} coboară.
5. {{key:Esc}} oprește plimbarea.

## Lumina reflectată

Lumina care se reflectă de pe un perete însorit pe pardoseală, precum și interiorul mai întunecat al unei camere, sunt calculate în fundal pe fiecare nucleu de procesor. În timp ce lucrează, linia de jos spune {{ui:Lumină reflectată: 40 %}}; când este gata, vizualizarea o preia. După o modificare, pornește din nou.

:::note
Aceasta este o aproximare pentru o vizualizare live, nu o imagine randată: detaliile mici dintre puncte primesc lumina reflectată a punctelor apropiate.
:::

:::note
Browserele diferă. Acolo unde browserul are WebGPU, vizualizarea live îl folosește; în rest folosește WebGL 2 și arată la fel. Fără niciunul, panoul o spune.
:::
