---
title: Aksı ölçülendirin
summary: Her katın planında komşu aks çizgileri arasındaki aralığı ve aksın genel boyutunu gösterin; bunlar IFC'ye kaydedilir ve çizgiler değiştiğinde aksı izler.
keywords: aks, aks ölçüleri, ölçü, aralık, açıklık, genel boyut, balonlar, kolon aksı, plan, sayfa
from: aaea5d08
---

## Ne yapacaksınız

Aks çizgileri arasındaki aralığı ve aksın genel boyutunu planlarda, balonların dışında gösterin; böylece bunlardan üretilen sayfalar ölçüleri taşır. Önce bir aksa ihtiyacınız var: [Aks ve kolonlar](topic:grids-and-columns) konusuna bakın.

## Adımlar

1. Bir katın planını gösterin ve aks aracını açmak için {{ui:Aks}} öğesine tıklayın. Aks seçenekleri satırı görünür.
2. {{ui:Ölçüler}} kutusunu işaretleyin. Numaralı çizgiler arasındaki ve harfli çizgiler arasındaki aralık ile her iki yöndeki genel boyut planda çizilir.
3. Başka bir kat seçin: aynı ölçüler onun planında da görünür.
4. Bir çizgiyi taşıyın, birini yeniden adlandırın ya da yeni bir tane ekleyin. Ölçüler aksı izler.
5. Ölçüleri yeniden kaldırmak için {{ui:Ölçüler}} kutusunun işaretini kaldırın.

## Notlar

- Her değişiklik tek bir geri alma adımıdır: {{key:Mod+Z}} onu geri alır.
- Ayar aksla birlikte IFC'de kaydedilir ve sayfalara yerleştirilen planlar ölçüleri taşır.
- Değiştirilebilecek bir aks yoksa (başka bir programdan gelen dosyadaki aks burada değiştirilemez), durum satırında "Değiştirilecek aks yok." yazar.
