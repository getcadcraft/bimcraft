---
title: "Bir klasörde bozuk kopyaları, eksik bağlantıları ve artıkları denetle"
summary: "Klasör raporunu kullanarak kesilmiş model dosyalarını bulun, en yeni tam yedeği seçin, hangi bağlantıların eksik olduğunu görün ve kilit ile geçici dosyaları fark edin."
keywords: sağlık denetimi, hasarlı, bozuk, eksik, kesik, yedek, eksik bağlantılar, xref eksik, denetim, artıklar, kilit dosyaları, dwl, bak, teslim
from: 3025a539
---

## Ne yapacaksınız

Bir proje klasörünü teslim etmeden ya da üzerinde çalışmaya başlamadan önce denetleyin: her model tam mı, son sağlam yedek hangisi ve bağlı tüm dosyalar orada mı?

## Adımlar: hasarlı kopyalar

1. Proje klasörünü açın. Bkz. [Tüm bir proje klasörünü açma](topic:open-project-folder).
2. Klasör adının altındaki notları okuyun. "2 dosya eksik ya da okunamıyor. Aşağıdaki modellere bakın." ifadesi, bakılması gereken bir şey olduğunu gösterir.
3. **Modeller** bölümünde **Durum** sütununa bakın. **Tam** iyidir. Sarı "1 eksik" bir kopyanın bozuk, ama başka bir kopyanın sağlam olduğu anlamına gelir. Kırmızı **Eksik**, sağlam bir kopya bulunamadığı anlamına gelir.
4. Sorunlu bir modelin altındaki **Tüm … kopyaları**'nı açın. Bu, ana dosyayı ve numaralı her yedeği, en yeniden en eskiye doğru, boyut, tarih ve durumlarıyla birlikte listeler.
5. Listenin üstündeki notu okuyun; örneğin "Tower.rvt eksik (183.2 MB, en az 214.0 MB olmalıydı). Kart en yeni tam kopyayı gösterir: Tower.0012.rvt (Mar 3, 2025)."
6. Açmak istediğiniz kopyaya tıklayın. Yalnızca tam kopyalara tıklanabilir.

## Sağlık denetimi ne yapar

Her modelin her kopyası, başlığının hızlı bir denetiminden geçer; her biri 512 bayt, bu yüzden büyük modellerden oluşan bir klasör bile saniyeler içinde denetlenir. Kendi dizini sonunun ötesine işaret eden bir dosya, kopyalanırken, yüklenirken ya da senkronize edilirken kesilmiştir. Bulut sürücüsünde hâlâ "yalnızca çevrimiçi" olan bir dosya da aynı görünür.

Her modelin kartı, ana dosya sağlamsa oradan, değilse en yeni sağlam yedekten okunur.

## Adımlar: eksik bağlantılar

1. Klasör adının altındaki "*n* bağlı dosya bu klasörde değil." notunu arayın.
2. **Bağlı ve başvurulan dosyalar** bölümüne gidin. Eksik bağlantılar önce listelenir.
3. Her bağlantı için **Konum** sütununu okuyun:
   - **Bu klasörde**: modelin kaydettiği yolda bulundu.
   - **Aynı ad bulundu**: aynı adlı bir dosya klasörde başka bir yerde. Doğru dosya olduğundan emin olun.
   - **Kütüphane dosyası**: bir anahtar not ya da montaj kodu tablosu. Bunlar her bilgisayarda programla birlikte gelir, bu yüzden klasörde beklenmez.
   - **Bu klasörde değil**: klasörde hiçbir yerde bulunamadı.
4. Her dosyayı hangi modellerin bağladığını görmek için **Kullanan** sütununu okuyun.

BimCraft her bağlantıyı önce göreli yoluna, sonra kayıtlı yolunun sonuna göre (böylece `\\server\jobs\Tower\Cad\X-Refs\site.dwg` yolu, `Cad` klasörünü seçtiğinizde `X-Refs/site.dwg` olarak bulunur), en son da klasörde herhangi bir yerde dosya adına göre arar.

## Adımlar: artıklar

1. Raporun sonundaki **Bir kenara ayrılanlar** bölümüne gidin.
2. Görünebilecek üç satırı okuyun:
   - Bakım klasörleri (`*_backup`, `*_log`, `Revit_temp`): okunmaz.
   - Kilit, günlük ve yedek artıkları: `.dwl`, `.dwl2`, `.bak`, `.err`, `.log`, `.tmp`, `.sv$` gibi dosyalar. Bunlar çöken ya da klasör kopyalandığında açık olan programlar tarafından bırakılır. Kimse dosyaları açık tutmuyorsa genellikle silinmeleri güvenlidir.
   - Diğer dosyalar: BimCraft'ın okumadığı diğer her şey.

## Sık yapılan hatalar

- **İyi bir yedeği kaydetmeden hasarlı ana dosyayı silmek.** Önce en yeni tam yedeği kopyalayın, sonra hasarlı dosyayla ilgilenin.
- **"Aynı ad bulundu"a körü körüne güvenmek.** İki farklı çizim aynı adı paylaşabilir. Şüphede kalırsanız ikisini de açın.
- **Eksik bir kütüphane dosyasını sorun sanmak.** Anahtar not ve montaj kodu tabloları her bilgisayarda programla birlikte yaşar.
- **Dosya sayısının tarayıcıya göre farklılık göstermesi.** Firefox ve Safari'de {{ui:Klasör aç}} her dosyayı, bakım klasörlerinin içindekiler dahil, verir; bu yüzden sayı (ve 20.000 dosya sınırı) onları da içerir. Klasörü içeri sürüklemek ise, Chrome ve Edge'de olduğu gibi, bunları atlar. Rapor başka bakımdan aynıdır.
