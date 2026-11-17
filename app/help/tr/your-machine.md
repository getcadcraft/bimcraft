---
title: Makineniz neyle render alır
summary: Ayarlar › Render, bu tarayıcının uygulamaya izin verdiği grafikleri, işlemci çekirdeklerini ve belleği ve render işleminin nerede başlayacağını belirleyen seviyeyi gösterir.
keywords: makineniz, grafik kartı, gpu, webgpu, webgl, işlemci, cpu, çekirdekler, iş parçacığı, bellek, ram, paylaşımlı bellek, yalıtım, düzey, seviye, hız, yavaş, render hızı, dizüstü
from: 360f2375
---

{{ui:Ayarlar}} ({{key:Mod+,}})'ı açın, bu uygulamanın kendi sekmesinde kalın ve {{ui:Render}}'a kaydırın. {{ui:Bu makine}}, bu tarayıcının uygulamanın render için kullanmasına izin verdiği şeyleri listeler. Bunların hiçbiri bilgisayarınızdan çıkmaz.

| Satır | Anlamı |
|---|---|
| {{ui:Grafikler}} | Tarayıcının bildirdiği grafik kartı. "WebGPU" render işini yapabileceği anlamına gelir; "yalnızca WebGL 2" WebGPU olmadığı anlamına gelir: canlı görünüm ve yüksek kaliteli resimler grafik kartını WebGL 2 üzerinden kullanır (eski WebGL yol izleyicisiyle resimler, WebGPU gerektiren ekstralar olmadan); yazılımsal bir yedek, her şeyin işlemci üzerinde çalıştığı anlamına gelir |
| {{ui:İşlemci}} | Tarayıcının bildirdiği işlemci çekirdeği sayısı |
| {{ui:Bellek}} | Tarayıcı bildirdiğinde bilgisayarın yaklaşık bellek miktarı. Bazı tarayıcılar bunu bildirmez |
| {{ui:Paylaşımlı bellek}} | Sayfanın çalışanları arasında bellek paylaşıp paylaşamayacağı. Açıkken her çekirdek bir sahne kopyası üzerinde çalışabilir; kapalıyken her biri kendi kopyasına ihtiyaç duyar, bu yüzden büyük bir sahne daha az çekirdekle aynı anda sığar |
| {{ui:Hızlı işlemci kodu}} | Tarayıcının daha hızlı WebAssembly kodunu çalıştırıp çalıştırmadığı. Bu olmadan daha yavaş bir yedek kullanılır |
| {{ui:Kat}} | {{ui:Grafik kartı, yüksek}}, {{ui:Grafik kartı, temel}} veya {{ui:Yalnızca işlemci}}, altında nedeniyle birlikte |

## Seviye

Seviye, render işleminin nerede başladığını belirler; böylece yerleşik bir grafik çipi olan ya da hiç grafik kartı olmayan bir dizüstü bilgisayar duyarlı kalır. Yerleşik veya telefon grafik çipi ya da 4 GB veya daha az bellek, asla {{ui:Grafik kartı, yüksek}} seviyesini alamaz.

:::note
Tarayıcılar birbirinden farklıdır. Aynı bilgisayar bir tarayıcıda WebGPU, başka bir tarayıcıda "yalnızca WebGL 2" gösterebilir. Linux'ta çoğu tarayıcıda henüz WebGPU yoktur.
:::
