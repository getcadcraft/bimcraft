---
title: Isıtma ve soğutma yüklerini tahmin edin
summary: Her odanın ısı kaybı, derece-günlerine göre bir yıllık ısıtması ve soğutma tepe yükü; modeldeki sınırlarından ve her elemanın U değerinden, tüm girdiler gösterilerek. Bir tasarım yardımcısıdır, uygunluk hesabı değildir.
keywords: enerji, ısıtma, soğutma, ısı kaybı, ısı yükü, soğutma yükü, U değeri, ısı geçirgenliği, derece-gün, hdd, havalandırma, hava değişimi, iç kazançlar, güneş kazancı, lambda, iletkenlik, yalıtım, erken tasarım, analiz, odalar, mekânlar
from: ec312d20
---

{{ui:Gün ışığı}} sekmesinde, {{ui:Hesapla}} seçeneğinden sonra {{ui:Isıtma ve soğutma yükleri}} bölümünü açın ve {{ui:Yükleri hesapla}} öğesine tıklayın. Her oda soğuk bir tasarım gününde **ısı kaybını**, sıcak bir günde **bir yıllık ısıtmasını** ve **soğutma tepe yükünü** alır. Hiçbir şey yüklenmez; modelde siz bir U değeri yazmadıkça hiçbir şey değişmez.

:::warning
Bu bir **tasarım yardımcısıdır, uygunluk hesabı değildir**: ekranda her girdisi görünen, durağan hâl tahmini. **ISO 52016-1** yöntemi değildir, bir simülasyon ya da enerji sertifikası da değildir; kazanları, ısı pompalarını ya da soğutucuları boyutlandırmaz. Sonuçları kontrol edin, ekipmanı bir mühendisle boyutlandırın.
:::

## Her odayı neyin sınırladığı

BimCraft bunu modelin kendisinde bulur; bu yüzden herhangi bir programın IFC dosyası çalışır (bazı programların dışa aktardığı alan sınırlarına ihtiyacı yoktur). Her odanın kendi yüzeyinin her parçasından doğrudan dışarı bakar:

- parçanın karşılaştığı ilk duvar, pencere, kapı, döşeme, çatı, kaplama, perde duvar ya da kiriş, o parçayı **sınırlar**;
- o elemanın hemen ötesinde ya **başka bir oda** (yanındaki oda sayılır, aynı sıcaklıkta: kayıp yok), ya **hiçbir şey** (dış ortam) ya da en alt kattaki bir döşemenin altındaysa **zemin**;
- başka bir odaya açılan açık bir kapı yanındaki oda sayılır; hiçbir şeye rastlamayan bir parça (yana ya da aşağı 1.5 m, yukarı 8 m içinde) odanın altında listelenir ve dışarıda bırakılır.

Pencere ve kapılar, bulundukları duvardan IFC'deki kendi boyutlarını (genel genişlik × yükseklik) alır. Her odayı sınırlayan her elemanı, alanı, U değeri ve U değerinin nereden geldiğiyle görmek için tabloda bir odaya tıklayın.

## U değerleri

BimCraft her eleman için şu sırayı izler:

1. **IFC'nin kendi U değeri** — elemanın ortak özellik kümesinde (örneğin `Pset_WallCommon`) ya da tipinde bulunan `ThermalTransmittance`. Çoğu tasarım programı bunu yazabilir.
2. **Malzeme katmanları** — 1 ÷ (iç yüzey direnci + her katmanın kalınlığı ÷ iletkenliği λ + dış yüzey direnci); olağan yüzey dirençleriyle (duvarlar için 0.13 ve 0.04 m²K/W; iç tarafta yukarı için 0.10, aşağı için 0.17). Başlangıç için tipik iletkenlikler (taş yünü 0.035, tuğla 0.77, beton 1.4…); {{ui:Malzeme iletkenliği}} altında üreticinin değerini yazın; bu katmanlardan çıkan her U değeri ona göre değişir.
3. **Tipik bir değer** (duvarlar 0.3, çatılar 0.2, döşemeler 0.25, pencereler 1.4, kapılar 1.6 W/m²K), bu şekilde işaretlenmiş — kendi değerinizi yazın.

Bir odanın ayrıntısına yazdığınız bir U değeri, elemanın ortak özellik kümesine `ThermalTransmittance` olarak yazılır (tek adım; {{key:Mod+Z}} onu geri alır). Birkaç eleman aynı kümeyi paylaşıyorsa (örneğin tek bir duvar tipi), hepsi birlikte değişir ve durum satırı kaç tane olduğunu söyler.

## Isıtma

- **Isı kaybı** = Σ U × A × (iç − dış), dış ortama giden her şey için + Σ U × A × (iç − zemin), zemindeki döşemeler için + 0.335 × saatteki hava değişimi × odanın hacmi × (iç − dış). 0.335 Wh/m³K, havanın yoğunluğu (1.2 kg/m³) ile ısı kapasitesinin (1005 J/kgK) çarpımıdır.
- **Bir yıllık ısıtma** = (odanın yapı ve hava yoluyla dış ortama derece başına kaybı; zemin kaybı aynı farka ölçeklenmiş) × **derece-gün** × 24 ÷ 1000, kWh cinsinden. Yer için derece-günlerini yazın ya da {{ui:Derece-günleri bir CSV'den oku…}} (günlük ya da aylık her satır için bir; her satırdaki son sayı toplanır). Derece-günlerini kaynağınızın kullandığı taban sıcaklığıyla kullanın: bu taban, insanların, ışıkların ve güneşin ücretsiz ısısını zaten hesaba katar.

## Soğutma

**Soğutma tepe yükü** = yazlık tasarım sıcaklığında yapıdan ve havadan geçen ısı + insanlar (kişi başına alan × kişi başına ısı) + m² zemin başına aydınlatma ve ekipman + **güneş**: o oda için {{ui:Bir tarihte pencerelerden giren güneş}} tepe değeri. Güneşi önce sıcak bir günde hesaplayın; o zamana kadar güneş 0 sayılır ve bölüm bunu belirtir. Her bileşenin tepe değeri, farklı saatlerde gerçekleşseler bile toplanır; bu da biraz abartır.

## Dışarıda bırakılanlar

- ISO 52016-1 aylık ve saatlik yöntemleri (ücretli bir standart), binanın kütlesinde depolanan ısı, ısıl köprüler, ısıtma ve soğutma sistemlerinin performansı ve iklim dosyaları.
- Birbirine komşu odalar aynı sıcaklıkta alınır; ısıtılmayan alanlar modellenmez.

Ayrıca bkz. [Her odanın gün ışığını tahmin edin](topic:daylight-factor).
