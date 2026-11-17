---
title: Odalar, döşemeler, tavanlar ve çatılar
summary: Odalar, duvarlar onları kapattıkça oluşur; bir odaya ya da tüm binaya döşeme ve tavan verin, duvarların üzerine kırma ya da beşik çatı koyun. Duvarlar hareket ettiğinde hepsi onları izler.
keywords: oda, odalar, mekân, alan, çevre, döşeme, döşeme plağı, alt döşeme, tavan, çatı, kırma çatı, beşik çatı, eğim, çıkma, saçak, sırt, vadi, 6/12
from: 1fb1813c
---

## Ne yapacaksınız

Binanın kabuğunu tamamlayın. Odalar duvarlardan kendiliğinden oluşur; döşeme, tavan ve çatı her biri tek tıklamayla yapılır. Duvarlardan bulundukları için duvarlar hareket ettiğinde onları izlerler.

## Odalar

Çizilmiş duvarların kapattığı her boşluk bir odadır. Son duvar onu kapattığı anda, bir numarayla (ilk katta 101, 102 …, sonraki katta 201 …) ve bir adla (**Oda 1**, **Oda 2** …) belirir; alanı planda ortasında gösterilir.

- {{ui:Seç}} açıkken seçmek için bir odanın içine tıklayın. **Özellikler** bölümünde **Adı** (örneğin `Mutfak`) ve **Numarası** değerlerini değiştirin; alanı ve çevresi gösterilir.
- İki oda arasındaki bir duvarı silerseniz tek oda olurlar; bir odanın üzerinden duvar çizerseniz ikiye bölünür. Oda, etrafını çevreleyen duvarlar taşınırken adını ve numarasını korur.
- Bir oda tek başına silinemez: duvarların oluşturduğu boşluktur.

Alanlar duvar yüzlerinin içinden ölçülür. Odalar; döşeme alanı, çevre, yükseklik ve hacmiyle birlikte IFC mekânları olarak kaydedilir; böylece listeler bunları okur (bkz. [Miktarları toplayın, elemanları listeleyin ve mekânlar için liste oluşturun](topic:quantity-totals)).

## Döşemeler

1. {{ui:Döşeme}} öğesine tıklayın.
2. **Bu oda** ya da **Tüm bina** seçin, **Tür** (ahşap döşeme ya da beton plak) ve kalınlığını seçin.
3. Bir odanın içine (ya da binanın içinde herhangi bir yere) işaret edin. Döşemenin kaplayacağı alan, alanıyla birlikte vurgulanır.
4. Tıklayın. Döşemenin üst yüzü, katın kotudur; kalınlığı kadar aşağı iner. Tüm bina döşemesi duvarların dış yüzlerine kadar uzanır.

## Tavanlar

1. {{ui:Tavan}} öğesine tıklayın.
2. **Bu oda** ya da **Tüm bina** seçin ve döşemenin üstünden **Yükseklik** değerini girin.
3. İçine işaret edip tıklayın.
4. Alttan, ızgarası ve üzerindeki ışıklarla görmek için planı tavan planına çevirin: bkz. [Görünümler, görünüm aralıkları ve kendi sayfalarınız](topic:views-and-sheets).

## Bir çatı

1. Çatıyı taşıyan duvarların bulunduğu katta {{ui:Çatı}} öğesine tıklayın.
2. **Eğim**'i 12 üzerinden yükselme olarak (`6/12`) ya da derece olarak (`30`) yazın ve **Çıkma**'yı girin.
3. **Uçlar**'ı seçin: **Kırma çatı** (her yan eğimli), **Kısa kenarlarda beşik** ya da **Uzun kenarlarda beşik** (dört kenarlı bina) veya **Tek eğimli**.
4. Binanın içine işaret edin: saçak ve sırt planda görünür. Tıklayın.

Çatı, duvarların üstünde, onların üzerindeki katta oturur; alt yüzü duvarların dış yüzüyle buluşur. Beşik uçları, altındaki duvar kadar kalın bir beşik duvarıyla doldurulur. L, T ya da U biçimli bir bina, kanatları vadilerde buluşan bir kırma çatı alır.

## Değiştirin

Bir döşeme, tavan ya da çatı seçin (3B görünümde, model ağacında ya da üst kattaki ana hatlarının içine tıklayarak bir çatı) ve **Özellikler** içinde değiştirin: döşemenin türü, kalınlığı ve üstünün kattan ne kadar yukarıda olduğu; tavanın yüksekliği, kalınlığı ve **Desen** (tavan planında çizilen ızgara: yok, 600 × 600, 600 × 1200, 2' × 2' ya da 2' × 4'); çatının eğimi, çıkması, uçları ve kalınlığı. Her değişiklik tek bir geri alma adımıdır.

## Döşemeye, tavana ya da çatıya katmanlarla tür verin

Bir döşeme, bir tavan ve bir çatı, duvarın yaptığı gibi bir **tür** alabilir: her biri malzemesi ve gerçek kalınlığıyla birlikte adlandırılmış bir katman yapısı.

- **Yerleştirdiğinizde.** Döşeme, Tavan, Çatı ve Döşeme çiz araçlarının satırında bir **Tür** listesi vardır. **Tür yok** öğesi, kendi kalınlığıyla eskisi gibi yerleştirir. Bir tür, türün katmanlarının toplamı kadar kalın yerleştirir.
- **Sonradan.** Döşeme, tavan ya da çatıyı seçin ve **Özellikler**'de **Tür**'ü seçin. Eleman aynı eleman olarak kalır: yeri, odası ve verileri korunur, hiçbir şey yeniden çizilmez. Yalnızca türü, kalınlığı ve malzemesi değişir. Taslak aşamadaki bir elemanın geliştirilmiş hale gelmesi budur: genel türünü gerçek bir türle değiştirin.
- **Türü düzenle…** o türdeki tür düzenleyicisini açar: katmanlar **üstten** alta doğru, çekirdek, her katmanın işlevi ve türün LOD etiketi. Kaydetmek, o türdeki her elemanı tek adımda değiştirir; bir Geri al hepsini geri alır. Başlangıç türünü değiştirmek, kendi türünüz olarak bir kopya kaydeder.
- Bir elemanın türü varken **Kalınlığı** türünkidir ve yazılamaz. Değiştirmek için başka bir tür ya da **Tür yok** seçin.

Başlangıç türleri, her biri için bir **genel** tür (genel malzemeden tek katman, LOD 200 etiketli) ve iki katmanlı tür (LOD 300 etiketli): ahşap kirişli döşeme ile şap kaplı beton döşeme; ahşap çatı ile beton düz çatı; alçıpan tavan ile asma tavan karosu. Bunlar başlangıç değerleridir, test edilmiş yapılar değil: güvenmeden önce katmanları kontrol edin.

**Katmanlar: alan ve hacim** listesi, kullanımdaki her türün her katmanını listeler; bkz. [Listeler, boyutlar ve PDF](topic:plan-schedules-and-pdf). Döşeme, çatı ve tavan türleri bir tür paketiyle ya da bir Kütüphane öğesi olarak projeler arasında taşınır; bkz. [Tür paketleri](topic:type-packs).

## İyi bilinmesi gerekenler

- Duvarları taşımak, eklemek ya da silmek; üzerlerindeki odaları, döşemeleri, tavanları ve çatıyı yeniden oluşturur.
- Bir çatı her ana hatta uyar. Her duvara kendi eğimini, beşik ya da tek eğimli ucunu, yükseltilmiş bir plakayı, saçağı ve saçak altını vermek ya da tek bir çatı düzlemi çizmek için bkz. [Çatılar: her duvar için eğim, beşikler, tek eğimli çatılar ve çatı düzlemleri](topic:roofs).
- {{key:Delete}} seçilen bir döşemeyi, tavanı ya da çatıyı siler.
