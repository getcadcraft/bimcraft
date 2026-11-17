---
title: Duvarları, döşemeleri ve çatıları karkaslayın
summary: Modelden dikmeleri, plakaları, lentoları, kirişleri, makasları ya da kafesleri oluşturun ve modelde tutun; duvarlar, açıklıklar, döşemeler ya da çatı değiştiğinde yeniden oluşturulur ve Kereste listesi kesim listesidir.
keywords: TJI, I-kiriş, kiriş açıklık tablosu, tablo yükleme, karkas, dikme, alt plaka, üst plaka, lento, kral dikme, yardımcı dikme, kenar dikme, kısa dikme, eşik, bloklama, köşe, California köşesi, T bağlantı, kiriş, kenar kiriş, makas, kırma makası, vadi makası, yardımcı makas, sırt tahtası, tavan kirişi, bağ kirişi, kafes, kereste, kesim listesi, board feet, 2x4, 2x6, aralık, merkezler arası
from: 76d0ffb5
---

## Ne yapacaksınız

Yaptığınız çizimden binayı karkaslayın. BimCraft duvarlardaki dikmeleri, plakaları ve lentoları, döşemelerdeki kirişleri ve çatıdaki makasları (ya da kafesleri) yerleştirir, etiketlenmiş varsayılan tablolardan boyutlandırır, modelde tutar ve karkasın çerçevelediği şey değiştiğinde yeniden oluşturur. **Kereste** listesi kesim listesidir.

## Karkas oluşturun

1. Bir katta {{ui:Derleme}} öğesini açın ve {{ui:Karkas}} seçin.
2. **Aralığı** (merkezler arası 16" ya da 24"; 400 ya da 600 mm), **köşeleri** (üç dikmeli ya da California), çatılar için **Makas** ya da **Kafes**, ve duvarların orta yükseklikte bir sıra **bloklama** alıp almayacağını seçin. Döşemeler için **Biçilmiş kereste** ya da **TJI (ön)** seçin ve kiriş yönünü otomatik, plan X ya da plan Y olarak ayarlayın.
3. **Her duvarı karkaslayın** öğesine tıklayın ya da yalnızca onu karkaslamak için bir duvara, bir döşemeye ya da bir çatıya tıklayın (çatının oturduğu katta).

**Karkası göster** seçeneğini kapatırsanız, bir katman gibi her karkas parçası gizlenir; **Geçirgen** karkaslanmış duvarları, döşemeleri ve çatıları gizler, böylece yalnızca karkası görebilirsiniz.

## Ne elde edersiniz

- **Duvarlar**: bir alt plaka (kapılarda kesilmiş), çift üst plaka, başlangıcından itibaren planda dikmeler, her kapı ve pencerede kral ve yardımcı dikmeler ile lento, lentoların üstünde ve pencerelerin altında kısa dikmeler, pencerelerin altında kaba bir eşik, duvarların birleştiği köşeler (geçen duvar köşe dikmelerini alır), başka bir duvarın T ile bağlandığı yerde iki destek dikmesi ve dikmeler arasında bloklama.
- **Döşemeler**: varsayılan olarak döşemenin kısa yönü boyunca kirişler ya da seçtiğiniz plan ekseni boyunca; kenar etrafında kenar kirişler ve bir merdiven boşluğunun etrafında çift kenar kiriş ve lentolar, boşluktan geçen kirişler kısa kesilir (kuyruk kirişler). TJI modu, seçilen aralıkta ölçülen net açıklığa ulaşan en küçük listelenen seriyi ve derinliği seçer.
- **Çatılar**: her saçağa dik ortak makaslar, kırma ve vadilerin kestiği yardımcı makaslar, kırma ve vadi makasları, sırt tahtaları, plakalar üzerinde tavan kirişleri ve bağ kirişleri; ya da aralıkta her biri tek parça olarak basit kafesler.

## Değiştirin

3B görünümde ya da model ağacında herhangi bir karkas parçası seçin. **Özellikler** karkasını gösterir: aralığı, döşeme kirişi türünü ve yönünü, köşeleri, bloklamayı ya da çatı karkasını değiştirin. Duvarları, kapıları ve pencereleri taşımak ya da döşemeyi veya çatıyı değiştirmek, karkası kendiliğinden yeniden oluşturur.

Yerleştirdiğiniz bir parçayı, karkas yeniden oluşturulduğunda bilerek tutmak için onu seçin ve **Karkas yeniden oluşturulduğunda bu parçayı tut** öğesini seçin. Tutulan bir parça olduğu yerde kalır; çevresindeki karkas değiştiğinde kontrol edebilmeniz için işaretlenir.

## TJI döşemeler, yüklediğiniz bir tablodan

BimCraft hiçbir kiriş üreticisinin açıklık tablosunu içermez (onlar üreticinin malıdır ve her baskıyla değişir). Bir döşemenin karkasını seçin, **Döşeme kirişleri**'ni **TJI (ön)** olarak ayarlayın ve **Özellikler**'de **Bir tablo yükleyin…** seçin: üreticinin güncel açıklık tablolarından yaptığınız, `cadcraft-tji-table` biçiminde bir dosya (JSON ya da CSV). Üreticiyi, ürünü ve baskıyı ve sayıların nereden geldiğini adlandırır; her yük durumu için (hareketli yük, ölü yük, sehim sınırı, mesnet uzunluğu) her seri ve derinliğin her aralıktaki en büyük net açıklığını listeler.

- BimCraft döşemenin **net açıklığını** alır, en sığ derinliği seçer ve içinde, seçtiğiniz aralık ve yük durumu için listelenen açıklığı bu açıklığa ulaşan seriyi seçer ve döşemeyi onunla karkaslar. Açıklık ya da aralık tablonun dışındaysa bunu söyler ve hiçbir şeyi değiştirmez.
- Yükler, sehim sınırı, mesnet uzunluğu, tablo ve "Ön yerleşim kılavuzudur; nihai seçim üreticinin tablolarını ve proje yüklerini gerektirir" cümlesi Kereste listesine basılır, karkasla birlikte modele yazılır ve **Sorunlar** panelinde bir not olarak listelenir. Örnek olarak işaretlenmiş bir tablo bunu bir uyarıyla belirtir.
- **Yapı yönetmelikleri** eklentisi açıksa, döşeme kirişi kuralı yüklenmiş bir tabloyu da okur; tablo olmadan TJI kirişleri, daha önce olduğu gibi bu kontrolün dışında bırakılır.
- Tablo, siz temizleyene ya da başka bir tablo yükleyene kadar bu tarayıcıda kalır. Dosya: `format` (`cadcraft-tji-table`), `version` 1, `manufacturer`, `product`, `edition`, `source`, `units` (`imperial`: inç, fit, psf; ya da `metric`: mm, metre, kPa), `cases` (`id`, `live`, `dead`, `deflection`, `bearing`) ve `rows` (`series`, `depth`, `spans`: her durum kimliği için aralık ve en büyük net açıklık, örneğin `"16": "15-6"`). CSV'de aynı bilgiler `# anahtar = değer` satırları, ardından `series,depth,case,spacing,span` olarak yer alır.
- Hiçbir tablo yüklü değilken TJI yerleşimi reddedilir ve hiçbir şey değişmez: **Bir TJI tablosu yükleyin: üreticinin tabloları onlara aittir ve yerleşik değildir.** Eski yerleşik TJI tablosuyla (bu değişiklikten önce) karkaslanmış bir model, sahip olduğu her kirişi korur; Özellikler ve Sorunlar tablonun gerekli olduğunu söyler ve bir tane yükleyene kadar döşeme yeniden karkaslanamaz. Katı biçilmiş kirişler eskisi gibi çalışır.

Bu bir yerleşim kılavuzudur. Nihai kiriş seçimi üreticinin tablolarını, projenin yüklerini ve mühendisi gerektirir.

## Kesim listesi

Listeler panelinde **Kereste**'yi seçin: her karkas parçası boyuta ve satın alacağınız stok uzunluğuna göre gruplanmış (8 ft'ten başlayarak tam 2 ft uzunluklar; milimetre cinsinde 2400'den başlayarak 600 mm adımlar), parça sayısı ve board feet ile. **CSV** indirir.

:::warning
Üst, kiriş, makas ve tavan kirişi boyutları, tipik tek ya da iki katlı evler için etiketlenmiş varsayılan tablolardan gelir; mühendislik değildir. Bir açıklık ya da bir açıklık tablosunun ötesine geçtiğinde **Özellikler** bunu söyler. Açıklıkları, yükleri ve bağlantıları bir tasarımcı ya da mühendis kontrol eder.

TJI yerleşimleri yalnızca yüklediğiniz tabloyu kullanır; tabloyu üreticinin güncel açıklık tablolarından yaparsınız; BimCraft hiçbirini içermez. Öneri mesnedi, nokta yüklerini, konsolları, delikleri, merdiven boşluğu üstlerini ya da bağlantıları kontrol etmez ve modeldeki I profili şematiktir.
:::

## Ne kaydedilir

Karkaslanmış her duvar, döşeme ya da çatı, IFC eleman montajıdır ("Framing"): IFC elemanları (dikmeler, plakalar, makaslar, bağ kirişleri, bloklama, kafesler) ve kirişler (lentolar, kirişler, kenar kirişler, sırt tahtaları); her biri boyutu, uzunluğu ve board feet değeriyle birlikte.
