---
title: Resmi hangi programın çizeceğini seçin
summary: Render iletişim kutusundaki Motor seçimi: kendi iki motorumuz, CadCraft Studio'daki diğer programlar ve web'in bunun yerine yaptıkları.
keywords: render, motor, renderer, render motoru, eklenti, plugin, studio, dış program, çizen, kuyruk, eklenti motoru
from: 44a1ef5e
---

{{ui:Render}} iletişim kutusunda Mod'un üstünde bir **Motor** seçeneği vardır. Kendi iki motorumuz her zaman bulunur ve her yerde çalışır; eklentiler daha fazlasını ekleyebilir ve CadCraft Studio'da liste, sahneyi devralan programları da içerir.

| Motor | Ne yapar | Nerede |
|---|---|---|
| Yerleşik: Hızlı | Hızlı bir durağan resim: gün ışığı, yumuşak gölgeler, cam ve metal görünümleri, saniyeler içinde | Tarayıcı ve Studio |
| Yerleşik: Işın izleyici | Yüzeyler arasında sıçrayan ışık; grafik kartınızda ya da işlemcinizde, render kuyruğu ve ağınızdaki diğer bilgisayarlarda | Tarayıcı ve Studio |
| Bir eklentinin motoru | Resmi çizer ve geri verir: bkz. [Resmi başka bir programla çizin](topic:render-other-program) | Tarayıcı (JavaScript ile yazılmış bir motor) ya da Studio (bir program çalıştıran motor) |
| Sahneyi devralan bir program | Studio sahneyi kendi klasörüne koyar ve güncel tutar | Studio |
| … içinde aç | Sahneyi kaydeder ve bir programda açar; hiçbir şey geri gelmez: bkz. [Sahneyi başka bir programda açın](topic:render-open-in) | Web dosyayı kaydeder |

## Seçim nasıl davranır

- Hızlı ya da Işın izleyiciyi seçmek Modu da değiştirir, ve tersi. Başka bir motoru hiç kullanmayanlar için iletişim kutusunun başka hiçbir şeyi değişmez.
- Kullanılamayan bir motor, nedeni ("bulunamadı", "daha yeni bir sürüm gerekir") ile listede kalır; seçemezsiniz. Tarayıcıda yalnızca Studio'da çalışan bir motor "dosya kaydeder" gösterir: o zaman {{ui:Render}} sahneyi ve ayarlarını o programa götüreceğiniz bir dosyaya kaydeder.
- Seçim, dosyanın render ayarlarıyla birlikte kaydedilir; en son seçtiğiniz motor, kendi seçimi olmayan dosyalar için başlangıç motorudur.
- Başka bir programdan gelen bir resim, hem iletişim kutusunda hem render kuyruğunda hangi programın ve hangi sürümün çizdiğini söyler. [Render](topic:render) sayfasının vaatleri yalnızca **kendi** motorlarımız için geçerlidir: başka bir program ışığı, tonu ve örneklemeyi kendi yolunda yapar; bu yüzden bir sahnenin iki resmi kamera, güneş, lambalar ve pozlama açısından benzer olur, piksel piksel aynı değildir.

## Her motora verilen şey

Sahne başka bir programa bir **paket** olarak gider: model bir USD dosyası olarak (aynı dosya [Farklı USD olarak kaydet](topic:usd) ile yazılır) ve bir USD içe aktarıcısına güvenilemeyecek şeyleri tutan bir ayarlar dosyası: tam malzeme değerleri, açık olan lambalar ve güçleri ile ışık profilleri, güneş, gökyüzü, pozlama ve iletişim kutusunun çizeceği gibi kamera. Hiçbir şey bir yere yüklenmez.

## Render kuyruğu

Başka bir program için bir resim, kendi motorlarımızınki gibi [render kuyruğunda](topic:render#the-render-queue) bekleyebilir; işi hangi motor için olduğunu hatırlar.
