---
title: 3B'de mesafe, yüzey alanı ve konumları ölçün
summary: Bir IFC modelinin iki noktası arasını köşelere ve kenarlara yakalanarak ölçün, X, Y ve Z boyunca farkı okuyun ve düz bir yüzeyin alanını ölçün.
keywords: ölçüm, ölçme, mesafe, uzunluk, ölçülendirme, alan, yüzey alanı, yakalama, köşe, kenar, şerit metre, cetvel, açıklık, konum, enlem, boylam, enlem boylam, koordinatlar, coğrafi referans, harita dönüşümü, EPSG, survey, doğu, kuzey, WGS 84, datum
from: 5f430bba
---

## Ne yapacaksınız

Bir açıklığı, bir duvarın uzunluğunu ya da bir yüzeyin boyutunu, bir yazılım programını açmadan doğrudan modelden kontrol edin.

## Adımlar

1. Bir IFC modeli açın.
2. Araç çubuğunda {{ui:Ölçüm}} öğesine tıklayın ya da {{key:M}} tuşuna basın. Görünümün altında bir çubuk açılır.
3. **Bir mesafe:** {{ui:Mesafe}} seçiliyken ilk noktaya, sonra ikinciye tıklayın. Bir köşenin yakınında imleç ona yakalanır, bir kenarın yakınında kenara; imlecin yanındaki küçük etiket hangisi olduğunu söyler. Her tıklama çifti bir ölçüm yapar.
4. **Bir yüzeyin alanı:** {{ui:Yüzey alanı}} seçin ve bir yüzeye tıklayın. Düz yüzeyin tamamı aydınlanır ve alanı görünür.
5. **Düz çizgiler:** ikinci noktayı seçerken {{key:Shift}} tuşunu basılı tutun ya da düz tutmak için çubuktaki {{ui:Düz}} düğmesine basın. Çizgi, imlecin en yakın olduğu tek eksen boyunca ilerler (üst görünümde planın X ya da Y ekseni boyunca; diğer görünümlerde X, Y ya da Z boyunca) ve imleç etiketi "bir eksen boyunca düz" yazar. {{key:M}} yine Ölçümü başlatıp durdurur.
6. Ölçümleri kaldırmak için {{ui:Temizle}} tuşuna, ölçmeyi durdurmak için {{ui:Bitti}} (ya da {{key:Esc}}) tuşuna tıklayın.

## Ne görmelisiniz

- İki nokta arasında, üzerinde uzunluğu yazılı bir çizgi; çubukta uzunluk ve X, Y ve Z boyunca ne kadar gittiği (modelin eksenlerinde, Z yukarı), hepsi araç çubuğunda seçtiğiniz {{ui:Birimler}} içinde.
- Bir yüzeyin alanı, metrekare cinsinden, yüzeyin üzerinde ve çubukta.
- Döndürürken, kaydırırken ve yakınlaştırırken etiketler ölçümlerinin üzerinde kalır.
- Ölçerken tıklamalar öğeleri seçmez. Bir kesit düzlemi ya da kutusu yine modeli keser ve gösterdiğini, kesit yüzeyleri dahil, ölçebilirsiniz.

## Dünya üzerinde bir noktanın konumu

Ölçüm çubuğunda {{ui:Konum}} öğesine tıklayın, sonra modelde bir noktaya tıklayın (mesafelerde olduğu gibi köşelere ve kenarlara yakalanır). Çubuk şunları gösterir:

- **enlem ve boylam**, ondalık derece ve derece, dakika, saniye olarak; başlangıçta WGS 84'te;
- **harita koordinatları** (doğu ve kuzey koordinatları, araç çubuğunda seçilen {{ui:Birimler}} içinde yazılmış), modelin kendi harita sisteminde, örneğin `EPSG:28356`;
- **yükseklik** ve dosyanın adını verdiği dikey datum ile dosyanın **kendi datumu** (örneğin GDA94).

{{ui:Kopyala}} her şeyi tek satır hâlinde panoya koyar. Enlem ve boylamın hangi sistemde olduğunu {{ui:Ayarlar}} › {{ui:BimCraft}} › {{ui:Konum}} altında değiştirin: WGS 84 (GPS ve web haritalarının kullandığı), dosyanın kendi datumu ya da ETRS89 veya NAD83 gibi başka bir yaygın sistem.

Bu, coğrafi referanslı bir model gerektirir: EPSG koduyla projeksiyonlu bir sisteme harita dönüşümüyle, harita koordinatlarıyla dışa aktarılmış bir model. Yalnızca bir site enlemi ve boylamı olan bir model yaklaşık bir konum alır; bu, sitenin noktası ve gerçek kuzeyinden hesaplanır ve çubuk bunu söyler. Birden fazla model açıkken her nokta kendi modelinin coğrafi referansını kullanır.

:::note
Datumlar arasında geçiş (örneğin GDA94'ten WGS 84'e) ızgara dosyası kullanılmadan yapılır, bu yüzden birkaç metreye kadar doğrudur; durum satırı ne kadar iyi olduğunu söyler. Harita koordinatlarının kendisi kesindir.
:::

## Sık yapılan hatalar

- **"…coğrafi referansı yok".** Dosyada harita dönüşümü ve site enlemi ve boylamı yok. Koordinat sistemi ayarlanmış olarak yeniden dışa aktarın (yazılım programında paylaşılan koordinatlar / ölçüm noktası).
- **Harita koordinatları var, enlem ve boylam yok.** Dosya harita sistemini EPSG kodu olmadan ya da listede olmayan bir kodla adlandırır; durum satırı hangisi olduğunu söyler.
- **Nokta köşeye değil yüzeye düşüyor.** Yakalama, imlecin altındaki öğeye bakar. Köşeye yaklaşın ya da yakınlaştırın.
- **Alan beklenenden küçük.** Açıklıklar hariç tutulur ve bükülen bir yüzey birkaç yüzeydir: her birine tıklayın.
- **{{key:Esc}} ölçmeyi durdurdu.** İlk {{key:Esc}} yarım kalmış bir mesafeyi bırakır; ikincisi durdurur.

## Sonraki

- [Bir IFC modelini kesit düzlemiyle kesin](topic:section-plane)
- [Öğeleri gizleyin, izole edin ve geçirgen yapın](topic:hide-and-isolate)
