---
title: Mivel renderel a gépe
summary: A Beállítások › Renderelés megmutatja a grafikát, a processzormagokat és a memóriát, amelyet ez a böngésző az alkalmazásnak enged, valamint azt a szintet, amely meghatározza, hol kezdődik a renderelés.
keywords: a gépe, videokártya, gpu, webgpu, webgl, processzor, cpu, magok, szálak, memória, ram, megosztott memória, izoláció, fokozat, szint, sebesség, lassú, renderelési sebesség, laptop
from: 360f2375
---

Nyissa meg a {{ui:Beállítások}} ablakot ({{key:Mod+,}}), maradjon ennek az alkalmazásnak a saját lapján, és görgessen a {{ui:Renderelés}} részhez. Az {{ui:A gépe}} listázza, mit enged ez a böngésző az alkalmazásnak renderelésre. Ebből semmi nem hagyja el a számítógépet.

| Sor | Mit jelent |
|---|---|
| {{ui:Grafika}} | A böngésző által jelentett videokártya. A „WebGPU” azt jelenti, hogy képes a renderelési munkára; a „WebGL 2 only” azt jelenti, hogy nincs WebGPU: az élő nézet és a jó minőségű képek a videokártyát WebGL 2-n keresztül használják (a képek a régebbi WebGL útvonalon, útvonalkövető renderelővel készülnek, a WebGPU-t igénylő extrák nélkül); a szoftveres helyettesítő azt jelenti, hogy minden a processzoron fut |
| {{ui:Processzor}} | Hány processzormagot jelent a böngésző |
| {{ui:Memória}} | Körülbelül mennyi memória van a számítógépben, ha a böngésző közli. Egyes böngészők nem mondják meg |
| {{ui:Megosztott memória}} | Engedi-e az oldalnak, hogy a munkafolyamatai között memóriát osszon meg. Bekapcsolva minden mag ugyanannak a jelenetnek egy példányán dolgozhat; kikapcsolva mindegyiknek saját példány kell, így egy nagy jelenet kevesebb maggal is elfér egyszerre |
| {{ui:Gyors processzorkód}} | Engedi-e a böngészőnek a gyorsabb WebAssembly kód futtatását. Nélküle egy lassabb tartalék kód fut |
| {{ui:Szint}} | {{ui:Videokártya, nagy}}, {{ui:Videokártya, alap}} vagy {{ui:Csak processzor}}, alatta az indokkal |

## A szint

A szint határozza meg, hol kezdődik a renderelés, hogy a beépített grafikus chipes laptop vagy a videokártya nélküli gép is gyors maradjon. Beépített vagy telefonos grafikus chip, illetve legfeljebb 4 GB memória esetén soha nem kap {{ui:Videokártya, nagy}} szintet.

:::note
A böngészők eltérnek. Ugyanaz a számítógép az egyik böngészőben WebGPU-t mutathat, a másikban pedig a „WebGL 2 only” jelenik meg. Linuxon a legtöbb böngészőben egyelőre nincs WebGPU.
:::
