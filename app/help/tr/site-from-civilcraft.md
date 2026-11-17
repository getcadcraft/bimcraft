---
title: CivilCraft'tan komşu binalar ve parsel
summary: CivilCraft'ın Adresten arsaya komutunun bir adres çevresinde bulduğu binaları ve parseli öneri olarak alın ve işaretlediklerinizi ekleyin.
keywords: arsa, adres, parsel, komşular, bağlam, civilcraft, ccsite, binalar, arsa dış hattı, öner
from: 3be9407b
---

## Ne yapar

CivilCraft'ta Yüzey › Daha fazla › Adresten arsaya, açık verilerden bir adresin çevresindeki binaları, parseli, imar durumunu, sel bölgesini ve zemini bulur. "Öneri olarak BimCraft'a gönder" düğmesi (ya da "Arsayı dosya olarak kaydet" ve buradaki `.ccsite.json` dosyasını açın) bunları BimCraft'a getirir. Siz söyleyene kadar hiçbir şey eklenmez.

## Nasıl kullanılır

1. Bir model başlatın ya da açın. Adres noktası bulunduğunuz seviyenin başlangıç noktasındadır.
2. Bir kutu, her komşu binayı ve onay kutulu parseli listeler. İstemediklerinizin işaretini kaldırın.
3. Kaynağın yüksekliğini vermediği binalar kutunun üstüne yazılan yüksekliği kullanır. Yalnızca kat sayısını vermiş bir bina kat başına 3 m sayılır ve kutu bunu söyler.
4. "İşaretlileri ekle" düğmesine basın. Binalar, taban alanlarının çevresinde listelendikleri kadar yüksek duvarlara dönüşür ve tek bir geri alma adımında eklenir. Parsel, ikinci bir geri alma adımı olarak arsa dış hattı olur.

İmar durumu, sel bölgesi ve zemin yalnızca bilgi için listelenir; çizilmezler.

## Bilmeniz gerekenler

- Dış hatlar açık verilerin kalitesi kadardır: OpenStreetMap ve ilçe parsel katmanları yerden yere çok farklıdır. Önemli olanları bir ölçüye karşı kontrol edin.
- Konumlar, düz bir yaklaşıklıkla adres noktasının metre cinsinden doğusu ve kuzeyidir; birkaç kilometre içinde birkaç metre doğrulukla.
- Veriler kaynaklarının lisanslarını taşır (OpenStreetMap ODbL'dir); kutu atıf satırını gösterir.
