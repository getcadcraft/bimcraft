---
title: Çizimi çıktı görünümünde kontrol edin
summary: Bir DWG ya da DXF'i çıktı görünümüne alıp siyah beyaz, çizgi kalınlıkları ve hiç çıkmayacak katmanlar olmadan görün.
keywords: çıktı, çıktı al, önizleme, çıktı önizleme, çizgi kalınlığı, tek renk, siyah beyaz, defpoints, yazdırılmaz
from: 1a59c23e
---

## Ne yaparsınız

Bir sayfanın kâğıtta nasıl görüneceğini, onu oluşturan programdan yazdırmadan önce görün: siyah beyaz, çizgi kalınlıkları gerçek genişliklerinde ve yazdırılmayacak olarak ayarlanmış katmanlar olmadan.

## Adımlar

1. Bir DWG ya da DXF çizimi açın.
2. Çizimin üstündeki bir sayfa sekmesine tıklayın.
3. Sekmelerin sonundaki {{ui:Çıktı görünümü}} düğmesine tıklayın ya da {{key:P}} tuşuna basın.
4. Ağır ve hafif çizgileri karşılaştırmak için bir ayrıntıya yakınlaştırın.
5. Normal renklere dönmek için {{ui:Çıktı görünümü}} düğmesine tekrar tıklayın ya da {{key:P}} tuşuna basın.

## Ne görmelisiniz

- Gri bir masanın üzerinde beyaz kâğıt; her çizgi ve metin, tema ne olursa olsun siyah.
- Çizgi kalınlıkları: bir sayfada her kalınlık kâğıtta gerçek genişliğinde çizilir; bu yüzden 0.5 mm'lik bir çizgi, her yakınlaştırmada 0.25 mm'lik bir çizgiden iki kat kalındır. Bir çizgi asla ekrandaki kalınlığından daha ince çizilmez.
- Yazdırılmayacak olarak ayarlanmış katmanlar ve DEFPOINTS katmanı gizlenir.
- {{ui:Çıktı görünümü}} düğmesi basılı kalır. Çıktı görünümü, siz kapatana kadar sayfa değiştirseniz ya da başka bir çizim açsanız da açık kalır.

{{ui:Model}} içinde çıktı görünümü yalnızca ekran kalınlıklarını kullanır (ince çizgiler bir piksel, kalınlar biraz daha kalın), çünkü model uzayında kâğıt boyutu yoktur.

## Sık yapılan hatalar

- **Yazdırılacağını sanmak.** Çıktı görünümü bir önizlemedir. Yazdırma ve PDF dışa aktarma BimCraft'ta henüz yerleşik değil; çizimi oluşturan programdan yazdırın.
- **Çıktı stillerini beklemek.** Kalem tabloları ve çıktı stili renkleri okunmaz. Her şey düz siyahtır.
- **Yazarken P'ye basmak.** Bir alana yazarken ya da ekipman listesi gösterilirken {{key:F}} ve {{key:P}} hiçbir şey yapmaz.
