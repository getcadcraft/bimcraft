---
title: Durum şeridinde komut satırı
summary: Komut satırı olan bir düzende nereye yazarsanız yazın, harfler alttaki satıra gelir. Eşleşenleri listeler, geçmişi tutar ve çizimi asla kapatmaz.
keywords: komut satırı, nereye yazarsanız yazın, yazılan komut, durum şeridi, durum çubuğu, geçmiş, ok tuşları, enter, boşluk, WALL, DOOR, Duncan düzeni, Rhino düzeni, kısayol, tuşlar, komut bulucu
from: d583b52d
---

## Ne yapacaksınız

Araçları, önce bir kutuya tıklamadan adlarını yazarak çalıştırın.

## Adımlar

1. Komut satırı olan bir düzen seçin: {{ui:Ayarlar}} öğesini açın, {{ui:Genel}} seçin, sonra {{ui:Düzen}} seçin ve **Duncan** (ya da **Rhino**) öğesini seçin. Satır, pencerenin altındaki durum şeridinde yer alır.
2. Fare imleci nerede olursa olsun ve hiçbir kutu kullanılmazken `wall` yazın. Harfler komut satırında görünür ve üstündeki bir listede eşleşen komutlar gösterilir.
3. {{key:Enter}} tuşuna basın. Duvar aracı başlar.
4. Komut satırına tıklayın (ya da bir tuşa yeniden basın). Satır boşken liste daha önce yazdığınız komutları gösterir. {{key:Up}} ve {{key:Down}} bunlarda gezinir; {{key:Enter}} gösterileni çalıştırır.

## Ne yazabilirsiniz

- Kullanılan menü stilinin bir komut sözcüğü, stilde varsa (Çizim stilinde `WALL`, `WA`, `DOOR`).
- Bir komutun tuşu, bir sözcük olarak: `W` ardından {{key:Enter}} ya da {{key:Space}} Duvar'dır, `D` Kapı'dır.
- Bir komutun adı, boşluklarıyla ya da boşluksuz: `split wall`, `wallrectangle`.
- Bir sözcüğün ya da adın başı, yalnızca o şekilde başlayan tek bir komut varsa.
- Başka her şey, yazdığınızla birlikte komut bulucuyu açar.

## Bilmeniz iyi olanlar

- {{key:Esc}} satırı boşaltır ve tuşları yeniden çizime verir.
- Bu düzenlerde tek bir harf artık kendi başına bir aracı başlatmaz: {{key:Enter}} ya da {{key:Space}} bekler. {{key:Ctrl}} ile tuşlar, işlev tuşları, {{key:Delete}} ve {{key:Esc}} eskisi gibi çalışır. Diğer düzenlerde hiçbir şey değişmez.
- Bir Çizim aracı çalışırken rakamlar araçta kalır (yazılan bir uzunluk).
- Bir kutuda, iletişim kutusunda ya da Ayarlar'da yazmak orada kalır.
- Geçmiş bu bilgisayarda tutulur: her uygulama için 50 komut.
