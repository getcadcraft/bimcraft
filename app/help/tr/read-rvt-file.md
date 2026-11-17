---
title: Proje veya aile dosyasını okuyun
summary: Bir .rvt, .rfa, .rte ya da .rft dosyasını açın ve sürümünü, paylaşımlı çalışma durumunu, proje bilgilerini, aile parametrelerini, bağlantılarını ve önizleme resmini, dosyayı oluşturan programı kullanmadan okuyun.
keywords: rvt, rfa, rte, rft, proje dosyası, aile, sürüm, hangi sürüm, yapı numarası, paylaşımlı çalışma, merkezi, proje bilgisi, önizleme, küçük resim, bağlantılar
from: df3600e1
---

## Ne yaparsınız

Bir proje ya da aile dosyasında ne olduğunu Revit'te açmadan öğrenin: hangi sürümle kaydedildiğini, paylaşımlı çalışıp çalışmadığını, proje bilgilerini ve neye bağlı olduğunu. Bir dosya başka birinden geldiğinde hangi sürümde açmanız gerektiğini bilmenizi sağlar.

## Adımlar

1. {{ui:Dosya seçin}} düğmesine tıklayın.
2. Bir `.rvt`, `.rfa`, `.rte` ya da `.rft` dosyası seçin.
3. Bir an bekleyin. Durum satırı önce "Dosya okunuyor…", sonra "*dosya adı* açıldı" yazar.
4. Kartın üstüne bakın: dosyada kayıtlı önizleme resmi, dosya türü ve kaydedildiği sürüm, proje adı.
5. Kartın bölümlerini okumak için aşağı kaydırın.

## Ne görmelisiniz

Ortadaki kart, dosyada bulunduğunda şu bölümlerle:

| Bölüm | Size anlatır |
|---|---|
| Dosya | Dosya adı, boyut, tür (proje, proje şablonu, aile ya da aile şablonu), kaydedildiği sürüm ve yapı numarası, paylaşımlı çalışma, merkezi modelin yolu, en son nerede kaydedildiği, kimin kaydettiği, dil ve belge GUID'i |
| Proje bilgisi | Projenin kendi alanları, örneğin ad, numara, müşteri, adres ve durum. Yeni proje varsayılanlarında kalan alanlar dışarıda bırakılır. |
| Aile, Aile: … | Bir aile için: adı, kategorisi, sürümü, son güncellemesi ve parametreleri, grup grup |
| Bağlı ve başvurulan dosyalar | Dosyanın işaret ettiği her bağlı model, CAD bağlantısı, resim ve anahtar not tablosu, kayıtlı yoluyla |

Soldaki {{ui:Dosya}} paneli temel bilgileri tekrarlar ve **Okunan** değerini ekler: BimCraft dosyanın gerçekte ne kadarını okudu; çoğu zaman birkaç megabaytlık bir dosyanın yaklaşık 40 KB'ı. Sağdaki {{ui:Özellikler}} paneli, öğe özelliklerinin 3B modele ihtiyaç duyduğunu söyler.

## Neden 3B yok

3B model ve bir proje dosyasının içindeki öğeler belgelenmemiş bir biçimde saklanır. BimCraft yalnızca belgelenmiş ya da açıkça okunabilir kısımları okur: dosya bilgileri, proje bilgileri, aile verileri, bağlantı listesi ve önizleme resmi. Gerisini tahmin etmez. Modeli 3B'de görmek ve öğe özelliklerini okumak için dosyayı oluşturan programdan IFC dışa aktarın. Bkz. [Bir proje dosyasını IFC üzerinden 3B'ye alın](topic:rvt-to-ifc).

## Sık yapılan hatalar

- **3B beklemek.** Yukarıya bakın.
- **Bağlantılar yalnızca kayıtlı yolu gösterir.** Tek başına açılan bir dosya, bağlantılarının var olup olmadığını denetleyemez. Bunun yerine içinde bulunduğu klasörü açın; BimCraft her bağlantıyı bulundu ya da bulunamadı olarak işaretler: [Bütün bir proje klasörü açın](topic:open-project-folder).
- **"Bu dosya eksik…"** Dosya kopyalanırken, yüklenirken ya da eşitlenirken yarıda kesilmiştir. "Yalnızca çevrimiçi" durumundaki bir bulut sürücüsü dosyası da böyle davranır. BimCraft yine de açar ve yalnızca kurtarılabileni gösterir: kartın üstünde sarı bir uyarı, bu dosyadan kurtarılan parçaları listeleyen **Bu dosyadan kurtarıldı** bölümü ve dosyada olmayan kısımlar için **Dosyada yok** bölümü. Eksik kısım için hiçbir şey doldurulmaz; bu yüzden kesilmeden sonra saklanmış olan sürüm, önizleme resmi ya da proje bilgisi eksik olabilir. Dosyanın içerik listesi bile kesilmişse hiçbir şey açılamaz. Tam dosya için orijinali yeniden kopyalayın ve yeniden açın.
- **"Bu dosyada önizleme resmi yok".** Bazı dosyalar onsuz kaydedilir. Bu normaldir.
- **Yanlışlıkla bir yedeği açmak.** `Tower.0004.rvt` gibi adlandırılmış dosyalar numaralı yedeklerdir. Klasörü açmak bunları modelleriyle gruplar.
