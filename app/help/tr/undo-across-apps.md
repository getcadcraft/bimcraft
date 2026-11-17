---
title: CadCraft Studio içinde uygulamalar arası geri alma
summary: Studio içinde BimCraft, Studio'ya tamamlanan her adımı bildirir; böylece Studio, en son çalıştığınız pencerede son adımınızı geri alabilir.
keywords: geri al, studio, uygulamalar arası, proje geri alma, geçmiş, günlük, pencere
from: c66dd0c1
---

## Ne yapar

CadCraft Studio'da her uygulama penceresi bir adım bittiğinde Studio'ya haber verir (bir duvar çizildiğinde, bir taramadan bir duvar kümesi kabul edildiğinde). Studio, adımları çalıştığınız sırayla tutar ve en son adımı yapan pencereden, o pencerenin kendi geri alma özelliğini kullanarak onu geri almasını isteyebilir. BimCraft içinde Ctrl+Z, BimCraft'ın kendi işlemi olarak kalır ve bu da Studio'ya bildirilir.

## Bilmeniz gerekenler

- Studio, bir pencereden yalnızca geri alma listesi adımı bıraktığı hâlde tam olarak aynıysa geri almasını ister. Kaydetmeden sonra (bu yeni bir değişiklik listesi başlatır) veya düzenlediğiniz modeli değiştirdikten sonra BimCraft, listenin değiştiğini yanıtlar ve Studio bu pencereyi atlar. Hiçbir şey zorlanmaz.
- Bir uygulamanın etkilerini başka bir uygulamada geri almak henüz yapılmadı.
- Studio dışında hiçbir şey değişmez.
- Geri alma isteyen Studio menü öğesi bir Studio sürümüyle gelir; o zamana kadar adımlar bildirilir ama hiçbir menü öğesi bunları kullanmaz.

## Sonraki

- [Başkalarıyla canlı çalışın](topic:work-live)
