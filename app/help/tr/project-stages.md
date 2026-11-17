---
title: Proje aşamaları: brifden saha talimatlarına
summary: Hedef alanları olan bir brifle başlayın; çizim yaparken karşılandığını ya da eksik kaldığını görün, konsept seçeneklerini brife göre karşılaştırın, şartname ve detayları tiplerine bağlayın, imalat çizimlerini inceleyin ve saha talimatlarını öğelere kaydedin.
keywords: brif, mekân listesi, hedef alan, karşılandı, eksik, mekânlar, konsept seçenekleri, seçenekler, kütle, bütçe, şartname, şartname metni, detay, yapı detayı, tip, imalat çizimi, inceleme, onayla, yeniden sun, saha talimatı, revizyon, neden, saha, aşama
from: 0a49b852
---

## Yapacaklarınız

Bir projenin aşamalarını tek bir panelde yönetin: müşterinin brifini hedef alanlı mekânlar olarak yazın, konsept seçeneklerini brife göre karşılaştırın, şartname ve yapı detaylarını ait oldukları tiplerle birlikte tutun, imalat çizimlerini taşeronlardan geldikçe inceleyin ve saha talimatlarını değiştirdikleri öğelere kaydedin.

## Adımlar

1. Sol panelde **Proje aşamaları**'nı, ardından **Brif**'i açın.
2. Mekânları her satıra bir tane gelecek şekilde yapıştırın: `Living; 1; 30` 30 m² büyüklüğünde bir mekânı belirtir. Sayı atlanabilir. **Mekânları ekle**'yi seçin. Müşteri, alan, bütçe, tolerans ve program bilgilerini doldurun, sonra **Brifi kaydet**'e basın.
3. Duvar çizin. Duvarların oluşturduğu, adı brifteki mekânın adıyla aynı olan her oda sayılır (adından sonra gelen bir sayı, örneğin "Yatak odası 2", yok sayılır). **Mekân listesi**, **Karşılandı**, **Eksik**, **Fazla** veya **Çizilmedi** durumunu gösterir; farkı m² olarak verir.
4. Bu yolla yeni bir proje başlatmak için **Brifden yeni proje başlat**'ı seçin. Yeni bir model açar; kayıtlı şablonlardan birini seçtiyseniz o şablondan başlar ve brifi ilk adım olarak ekler.
5. **Brife göre seçenekler**'i açın. Modelde tutulan her kütle seçeneği, brüt alanı, brifin istediği alan ve brifin mekânlarından kaçının sığdığıyla birlikte aynı ölçekte çizilir. **Brifi burada katlara yerleştir** mekânları seçeneğin katlarına, en alttakinden başlayarak yerleştirir ve sığmayanı bildirir. Maliyet yalnızca projenin fiyat tablosundan gelir; eşleşen satır yoksa "Birim fiyat yok" yazar.
6. **Tipler, şartnameler ve detaylar**'ı açın. Her duvar, kapı, pencere ve döşeme tipi; şartname metninin olup olmadığını, ona bağlı detayları ve şartname, listeler ile sayfaların nerede çeliştiğini gösterir. **Detay bağla** bir DetailCraft veya CadCraft dosyası, bir adres ya da bu modelin bir sayfasını ekler.
7. **İmalat çizimleri**'ni açın. Modelde bir imalat çiziminin kapsadığı öğeleri seçin, sonra **Teslim al**'a basın. Gözden geçiren kişinin adı ve notuyla **Onayla**, **Notlara göre** veya **Revize et** kullanın. **Yeniden sunuldu** aynı kaydın bir sonraki revizyonunu oluşturur ve inceleme geçmişini korur. Durum her öğeye de yazılır.
8. **Saha talimatları**'nı açın. Öğeleri seçin, nedeni ve bunun maliyet ile süre üzerindeki etkisini kendi sözcüklerinizle yazın, sonra **Kaydet**'e basın. Bir sorun kaydedildikten sonra **Bu sorundan beri yapılan değişiklikleri açıkla**, hangi değişen öğelerin bir talimatla kapsandığını ve hiçbir şey kaydedilmeden değişenleri söyler.

## Bilmeniz gerekenler

- Her adım tek bir geri al işlemidir. Hiçbir şey reddedilmez: karşılanmayan bir brif, metniyle çelişen bir tip ya da süresi geçmiş bir imalat çizimi, Sorunlar'da bir uyarı ya da not olarak görünür.
- Brif mekânları duvarsız alanlardır. Çizilmiş bir alan değil, bir hedef taşırlar; bu yüzden mekân listeleri ve COBie bunları çizilmiş mekânlar olarak saymaz.
- Bir yerleşim, mekânları yalnızca alana göre katlara yerleştirir. Duvar çizmez.
- Şartname metni modelden Belgeler içinde yazılır. Burada yalnızca modelin kendi ölçüleriyle karşılaştırılır; hiçbir standardın maddesi sizin yerinize yazılmaz.
- İmalat çizimleri ve saha talimatları, Sorunlar ve revizyonlar panelindeki ile aynı geçmişte tutulan kayıtlardır; bu yüzden iki panelde de görünürler.
- İmalat çiziminin durumu her öğenin bir özelliğidir (`CadCraft_ShopDrawing`), saha talimatı ise `CadCraft_SiteInstruction`'dır; böylece Bul ve Özelliğe göre renklendir bunları kullanabilir.
- Saha ile doğrulanmış işaretler (Aşama 7) Özellikler içinde Doğrulama altındadır.
