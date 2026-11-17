---
title: Duvarı, kapıyı ya da pencereyi değiştirin
summary: Çizilmiş bir duvara, kapıya ya da pencereye tıklayın ve tipini, boyutunu, yüksekliğini ya da yerini Özellikler'de değiştirin ya da planda sürükleyin; her değişiklik tek bir geri alma adımıdır.
keywords: dikleştir, kare yap, dik köşe, 90, dik açı, eğik, açı, ortogonal, oda boyutu, iç yüz, dış yüz, buradan ölç, taşıma mesafesi, yazılan mesafe, eğri, yay, yay yüksekliği, yarıçap, konum çizgisi, hizalama, değiştir, düzenle, özellikler, duvar tipi, kalınlık, uzunluk, yükseklik, taban ofseti, üst, kat, çevir, dış, kapı boyutu, pencere boyutu, pervaz, mesafe, taşı, tutamaç, sürükle, tipi değiştir, birden fazla
from: 63052d5d
---

## Ne yapacaksınız

Çizdiklerinizi değiştirin: bir duvar, kapı ya da pencere seçin, sonra **Özellikler**'e yeni bir sayı yazın ya da planda sürükleyin. Plan ve 3B görünüm izler, köşeler yeniden birleşir ve kapılar ile pencereler duvarlarında kalır.

## Bir duvarı değiştirin

1. {{ui:Çiz}} ve {{ui:Seç}} açıkken, duvara planda (ya da 3B görünümde) tıklayın.
2. **Özellikler** duvarın sayılarını içeren bir kutu gösterir. Birini değiştirin ve {{key:Enter}} tuşuna basın:
   - **Duvar tipi**: başlangıç tiplerinden başka biri. Kalınlık ve katmanlar onunla değişir.
   - **Kalınlık**: herhangi bir kalınlık. Tip diğer katmanlarını korur ve ana katmanı (dikmeler ya da blok) farkı alır, örneğin "Dış 2×6, 200 mm".
   - **Buradan ölç**: **Eksen çizgisi**, **İç yüz** ya da **Dış yüz**. **Uzunluk** ve **Oda boyutu** bundan okunur ve ayarlanır. Dış yüz, planın ölçülendirmelerinin gösterdiğidir.
   - **Uzunluk**: duvarın ucu kendi çizgisi boyunca hareket eder. O uçta birleşmiş duvar, kendine dik olarak hareket eder ve açısını korur.
   - **Oda boyutu** (odanın karşısında paralel bir duvar varsa): istediğiniz boyutu yazın. Bu duvar dik olarak taşınır ve birleşik duvarlar onu izlemek için uzar.
   - **Dik taşı**: bu duvarı kendine dik olarak ne kadar taşıyacağını yazın: düz bir sayı dışarı taşır, eksi bir sayı içeri.
   - **Birleşik duvara açı**: başlangıcında birleşmiş duvara olan açı. Dik yapmak için 90 yazın. Hiçbir şeye birleşmemiş bir duvar, doğudan derece cinsinden **Yön** gösterir.
   - {{ui:Dikleştir}}: bu duvara bağlı duvarları, çoğu uzunluklarının gittiği yöne göre dik açılara geri çevirir. Seçtiğiniz duvar ne olursa olsun, bağlı tüm odayı ya da yerleşimi üzerinde çalışır. Dik açıdan 10 dereceden fazla sapan bir duvar olduğu gibi kalır; böylece 45 dereceye ayarlanmış bir duvar güvendedir. Tek bir {{ui:Geri al}} hepsini geri alır.
   - **Duvar yüksekliği**: **Üstteki kata kadar** o katı izler; **3. Kata kadar** (ve daha yukarıdaki herhangi bir kat) aradaki katlardan geçen bir duvar yapar; bir yükseklik yazmak, üstün o kattan ne kadar aşağıda ya da yukarıda olacağını belirler. **Sabit yükseklik**, yazdığınız sayıyı korur. **Geçtiği katlar** böyle bir duvarın geçtiği katları listeler: o katların planlarında daha açık çizilir, oradaki odalar ona yaslanır ve kapılar ile pencereler bu planlardan duvara yerleştirilebilir. Başladığı katta taşınır ve yeniden şekillendirilir.
   - **Taban ofseti**: duvarın katın üstünde ne kadar yükseğe başladığı. Üstü olduğu yerde kalır.
   - **Dış**: {{ui:Çevir}} dış katmanları diğer yüze koyar.
   - **Konum çizgisi**: **Eksen çizgisi**, **Dış yüz**, **İç yüz**, **Sol yüz** ya da **Sağ yüz**. Değiştirmek hiçbir şeyi taşımaz. Daha sonra duvar kalınlaştığında (tip ya da **Kalınlık** ile) ya da dış yüzü çevrildiğinde, konum çizgisi yerinde kalır ve duvar onun etrafında büyür ya da çevrilir. Bir köşede ona birleşen düz bir duvar izler, böylece köşe yine kapanır. Seçilen duvarın konum çizgisi planda kesikli çizilir. Hepsi için ayarlamak üzere birden fazla duvar seçin.
   - **Yay yüksekliği** (eğri duvarlar): ortanın düz bir çizgiden ne kadar eğildiği. 0 düz yapar; eksi bir değer diğer tarafa eğer. Yarıçap yanında görünür.
3. Her değişiklik **Değişiklikler** içinde bir adımdır; {{ui:Geri al}} onu geri alır.

## Duvarı planda sürükleyin

Bir duvar seçildiğinde üç tutamaç gösterir: her uçta bir kare ve ortada bir daire.

- Bir ucu sürükleyerek duvarı uzatın, kısaltın ya da döndürün. Duvar, Duvar aracı gibi yakalanır ve diğer ucuna birleşmiş duvara 3 dereceye kadar yaklaştığınızda dik olarak yakalanır; {{key:Shift}} onu planın eksenlerinde tutar.
- Sürüklediğiniz uca birleşmiş duvarlar açılarını korur: uçları kendi çizgileri boyunca kayarak duvarın yeni çizgisine uzanır; böylece hiçbir şey eğimli kalmaz. Serbest sürükleme için {{key:Mod}} tutun (birleşik duvarın ucu sizinkiyle gelir ve o duvar döner), ya da bu duvardaki birleşimleri kırmak için {{key:Alt}}.
- Ortayı sürükleyerek, hangi yöne sürüklerseniz sürükleyin, tüm duvarı kendine dik olarak taşıyın. Köşeleri birleşik duvarlar boyunca kayar; böylece o duvarlar açılarını korur.
- Açıyı kırmak istediğinizde, serbest taşıma için ortayı sürüklerken {{key:Mod}} tutun. {{ui:Dikleştir}} onu geri getirir.
- Bir tutamaç tutulurken bir mesafe yazın ve {{key:Enter}} tuşuna basın (ya da bırakın): duvar tam o kadar gider, sürüklediğiniz yönde. {{key:Esc}} taşımayı bırakır.
- Seçilen eğri bir duvar uçlarında tutamaçlar ve yayının ortasında yuvarlak bir tutamaç gösterir. Bükmek için yuvarlak tutamacı sürükleyin.
- Kapılar ve pencereler duvarda kalır. İçinde tuttuğu şeye göre çok kısa bir duvar "Bu duvara sığmıyor." uyarısıyla reddedilir.

## Bir kapıyı ya da pencereyi değiştirin

1. Kapıya ya da pencereye planda tıklayın.
2. **Özellikler**'de: **Tip** (aynı türden başka bir kapı ya da pencere), **Genişlik**, **Yükseklik**, **Pervaz** (pencereler), **Başlangıçtan** ve **Uçtan** (duvar yüzünün her ucundan kendi kenarına olan mesafe), **Menteşeler** {{ui:Çevir}} (tek kanatlı kapılar ve kanatlı pencereler; sürgülü, cepli, ahır tipi ve katlanır kapılar bunun yerine **Açılış yönü** der; sabit, asma ve resim pencereleri ile çift kanatlı kapıların bunların hiçbiri yoktur) ve **Kapanma yönü** (kapılar) ya da **Çerçeve tarafı** (pencereler) {{ui:Çevir}}.
3. Ya da onu duvarı boyunca ya da başka bir duvara sürükleyin: bkz. [Kapılar ve pencereler](topic:doors-and-windows).

## Birden fazlasını birlikte değiştirin

Birden fazla duvar (ya da birden fazla kapı, ya da birden fazla pencere) seçin: {{key:Shift}}+tıklama ya da {{key:Mod}}+tıklama. **Özellikler**, ortak olanları sunar: **Tipi değiştir…**, yükseklik, boyut. Tek bir değişiklik hepsini ayarlar ve tek bir {{ui:Geri al}} hepsini geri alır.

## İyi bilmeniz gerekenler

- Sayılar, araç çubuğunda seçilen {{ui:Birimler}} ile gösterilir.
- Diğer programlardan gelen duvarlar, kapılar ve pencereler IFC verilerini, bu kutu olmadan, her zamanki gibi **Özellikler**'de gösterir.
