---
title: Aplikasyon noktaları ve uygulanmış kontroller
summary: Ekibin sahada aplikasyon yaptığı yerleri modelden numaralandırın (kolon merkezleri, duvar uçları, ankraj cıvataları, kılıflar, seçtiğiniz her öğe), bunları bir toplam istasyon için yazın, sonra ekibin ölçtüğü uygulanmış noktaları geri okuyun ve neyin sapmada olduğunu görün.
keywords: aplikasyon noktaları, aplikasyon, aplikasyon yapma, kazık çakma, toplam istasyon, ölçü, nokta dosyası, csv, txt, pnezd, penzd, xyz, kuzey, doğu, kot, uygulanmış, kontrol, tolerans, sapma, ankraj cıvataları, kolon merkezleri, duvar uçları, kılıflar, ölçü koordinatları, harita dönüşümü
from: acea9606
---

{{ui:Noktalar}} sekmesi, sağda, açık modelden ekibin sahada aplikasyon yaptığı noktaları oluşturur ve ölçtükleri noktaları sonradan kontrol eder.

## Noktaları oluşturma

1. Bir IFC modeli ve {{ui:Noktalar}} sekmesini açın.
2. Aplikasyon yapılacakları işaretleyin: **kolon merkezleri** (her kolon merkez çizgisinin tabanı), **duvar uçları** (her duvarın ekseninin iki ucu, tabanda), **ankraj cıvataları**, **kılıflar** (adı ya da türü kılıf olan öğeler) ve **seçilen öğeler** (her biri yerleşim noktasında; önce görünümde seçin).
3. İlk numarayı ve bir öneki, koordinatları, birimleri, sütunları ve dosyayı seçin:
   - **Model**: dosyanın kendi koordinatları. **Harita ızgarası**: modelin coğrafi referansının harita ızgarası (yalnızca IFC'de bir harita dönüşümü varsa gösterilir), metre ya da seçtiğiniz birimle.
   - Sütunlar **PNEZD** (nokta, kuzey, doğu, kot, açıklama), **PENZD** ya da **XYZ**; **CSV** (virgüllü) ya da **TXT** (sekmeli).
4. {{ui:Noktaları oluştur}} düğmesine basın: liste onları gösterir ve görünüm onları mavi işaretler. {{ui:Noktaları indir}} dosyayı yazar.

Noktalar sabit bir sırayla gelir: önce türe göre, sonra planda satırlar halinde. Bu yüzden aynı modelden yeniden oluşturulduklarında aynı sayılar çıkar. Dosya, CivilCraft'ın açtığı ve CadCraft'ın EXPORTPOINTS komutunun yazdığı dosyadır: satır başına bir nokta, üç ondalık basamak ve virgül içerdiğinde tırnak içinde bir açıklama.

## Uygulanmış noktaları kontrol etme

Ekip ölçtüklerini geri gönderdiğinde, milimetre cinsinden bir **tolerans** seçin ve noktaları nasıl eşleyeceğinizi belirleyin: **nokta numarasına** göre (sizin numaralarınızı tuttular) ya da **en yakın atış** ile. Ardından {{ui:Uygulanmış noktaları oku…}} düğmesine basın. Dosyayı, yazdığınız birim ve koordinatlarda okuyun.

Her tasarım noktası, toleransın **içinde**, **dışında** ya da **ölçülmemiş** olarak sınıflanır ve kimsenin istemediği her atış **fazla** olarak işaretlenir. Tablo, araç çubuğunda seçtiğiniz birimde farkları verir; feet değerleri ondalık inç olarak gösterilir (uygulanmış eksi tasarım: doğu, kuzey, yükseklik ve planda mesafe). Görünüm her noktayı, atışa giden bir çizgiyle yeşil ya da kırmızı işaretler; ölçülmediyse gri. {{ui:Rapor (CSV)}} tüm karşılaştırmayı yazar.

Burada hiçbir şey modeli değiştirmez. Henüz yapılmadı: döşeme kenarlarından, aks kesişimlerinden ya da sizin için açılan boşluklardan aplikasyon yapmak ve noktaları doğrudan bir cihaza göndermek. Bunun için dosyayı kullanın.
