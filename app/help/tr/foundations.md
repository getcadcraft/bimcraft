---
title: Duvarların altındaki temeller
summary: Bir binanın altına tek tıklamayla zemin döşemesi, döşemeli temel duvarları, sürünme boşluğu ya da bodrum koyun; temel ayakları duvarlardan ve kat sayısından boyutlandırılır, duvarlar taşındığında temel de izler.
keywords: temel, temel ayağı, zemin döşemesi, kalınlaştırılmış kenar, monolitik döşeme, temel duvarı, sürünme boşluğu, bodrum, bodrum duvarı, donma, beton, temel ayağı genişliği
from: c0e20172
---

## Ne yapacaksınız

Binaya, duvarlarıyla eşleşen bir temel verin. BimCraft duvarların dış yüzünü izler, temel ayaklarını duvar türünden ve üzerinde duran kat sayısından boyutlandırır ve duvarlar her değiştiğinde temeli yeniden oluşturur.

## Bir temel yerleştirin

1. Duvarların üzerinde durduğu katta (genellikle birinci kat) {{ui:Derleme}} öğesini açın ve {{ui:Temel}} seçin.
2. Türü seçin:
   - **Zemin döşemesi**: üst yüzü zemin olan, duvarların altında kalınlaştırılmış kenarlı 4" beton döşeme.
   - **Gövde duvarları ve döşeme**: ayaklar üzerinde zemine kadar temel duvarları ve içinde bir döşeme.
   - **Sürünme boşluğu**: zemin karkasının altında kalan, ayaklar üzerinde temel duvarları; döşeme yok.
   - **Bodrum**: ayaklar üzerinde tam yükseklikte temel duvarları ve zemin karkasının altında bir bodrum döşemesi.
3. Binanın içine işaret edin: ayaklar boyutlarıyla birlikte kesikli olarak görünür. Tıklayın.

Zaten temeli olan bir binaya tıklamak onu seçer; ikinci bir tane eklemek yerine onu değiştirebilirsiniz.

## Değiştirin

Temeli seçin ({{ui:Temel}} ile binanın içine tıklayarak ya da 3B görünümde ya da model ağacında herhangi bir parçasına tıklayarak) ve **Özellikler**'de değiştirin: türü, ayak genişliği ve derinliği, ayağın alt yüzünün ne kadar aşağıda olduğu, duvar kalınlığı, duvarların zeminin ne kadar altında durduğu, bodrum yüksekliği ve döşeme kalınlığı. Her değişiklik tek bir geri alma adımıdır.

**otomatik** olarak işaretlenmiş boyutlar duvarlardan gelir: bir, iki ya da üç kat için döşeme ya da gövde duvarlarında ayaklar 12", 15" ya da 23" genişlikte; sürünme boşluğu ya da bodrum üzerinde 18", 22" ya da 27" ve taş ya da beton duvarların altında 4" daha geniş. Kendi boyutunuzu belirlemek için bir boyut yazın; otomatiğe dönmek için `0` yazın.

:::warning
Otomatik boyutlar, tipik hafif karkaslı evler için etiketlenmiş varsayılanlardır, mühendislik değildir. Zemine, donma derinliğine ve yüklere göre ayakların, derinliklerin ve duvarların bir tasarımcı ya da mühendis tarafından kontrol edilmesi gerekir.
:::

## Ne kaydedilir

Bir temel, IFC eleman montajı olarak kaydedilir ("Foundation"). Türüne göre bir ayaktan (ya da bir döşemenin kalınlaştırılmış kenarından), bir temel duvarından ve bir döşemeden oluşur; hepsi betondur ve her biri miktarlarıyla birlikte (uzunluk, genişlik, yükseklik, alan ve hacim) metrajlar için hazırdır.

## İyi bilinmesi gerekenler

- Duvarları taşıyın, ekleyin ya da silin; altlarındaki temel yeniden oluşturulur. Üst katta duvarlar çizerseniz alttaki ayaklar ekstra kat için genişler.
- Sahanın zemini modelde varsa (bkz. [Sahanın zemini, bina platformu ve kaplama](topic:terrain)), gövde duvarları ve sürünme boşluğu ayakları onunla birlikte 8" adımlarla alçalır.
- İç duvarların altındaki temel ayakları henüz yapılmadı.
- {{key:Delete}} seçilen bir temeli tüm parçalarıyla birlikte siler.
