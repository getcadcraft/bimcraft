---
title: Taramadan model
summary: "Lazer taramadan duvarlara kısa bir adım adım rehber: nokta bulutunu yeni bir yapının yanında açın, bir kata hizalayın ve duvarlarını planda izleyin."
keywords: tarama, lazer tarama, nokta bulutu, as-built, mevcut yapı, röleve, duvar izleme, taramadan BIM, taramadan model, dilim, hizalama, dik, LAS, LAZ, E57, PLY
from: ce3b9b37
---

## Ne yapacaksınız

Mevcut bir yapıyı lazer taramasından çizin: tarama duvarları nerede gösteriyorsa orada, doğru katta ve birbirine dik duvarlar.

## Adımlar

1. **Çizilecek bir yapı.** {{ui:Dosya}} › {{ui:Yeni yapı}}, yapının sahip olduğu kat sayısı kadar katla (katları daha sonra ekleyebilirsiniz, bkz. [Arsa, üzerindeki yapı ve katları](topic:site-building-and-levels)). {{ui:Çiz}} açılır.
2. **Tarama.** {{ui:Göster}} › {{ui:Nokta bulutu}} seçin ve dosyayı seçin (LAS, LAZ, E57, PLY, PCD, PTX ya da XYZ: bkz. [Modelin yanında nokta bulutu gösterme](topic:point-clouds)). Bulut 3B görünümde gösterilir ve plan, taranmış noktaların **dilimini** gösterir: seviyenin 1200 mm (4 feet) üstündeki noktalar, nokta olarak. Duvarların, kapıların ve pencerelerin en iyi okunduğu yükseklik budur.
3. **Seviyeyle hizalayın.** Model çubuğundaki {{ui:Tarama}} menüsünü açın ve {{ui:Zeminini bu kata hizala}} öğesine tıklayın: bulut, taradığı zeminin gösterilen seviyenin üstüne oturması için yukarı ya da aşağı hareket eder. Dilimin artık duvarları kestiğini kontrol edin.
4. **Yapıya dik hizalayın.** {{ui:Tarama}} › {{ui:Yapıya dik çevir}} bulutu, dilimindeki duvarlar planın eksenleri boyunca uzanacak şekilde döndürür; böylece {{key:Shift}} basılıyken çizdiğiniz duvarlar taramayla hizalanır. Bulutu, bulduğu duvarların orta noktası etrafında döndürür; böylece dilime giren ağaçlar ya da komşu duvar taramayı savurmaz. Önce zemini hizalayın: dilim böylece duvarları keser.
5. **Duvarları izleyin.** {{ui:Duvar}} seçin ve noktalar boyunca tıklayın: araç, çizdiğiniz duvarlara olduğu kadar taranmış noktalara da yakalanır (yakalama işareti küçük bir elmastır). Bir duvar orta çizgisi üzerine çizilir; bu yüzden bir duvarın bıraktığı iki nokta sırasının tam ortasına tıklayın. Duvar kalınlığını, önce duvar tipini seçerek girin. Sonra dilimin boşluk gösterdiği yerlere kapı ve pencereleri ekleyin.
6. **Bir üst kat.** Planın kat listesinden üstteki katı seçin: dilim, katın kesit yüksekliğini izler. Taramanın zeminleri katlarınızla aynı yerde değilse yalnızca o zaman zemini o kata yeniden hizalayın.

## Ne görmelisiniz

- Kat değiştirdikçe dilim değişir; daha kalın bir dilim ({{ui:Tarama}} › {{ui:Kesit kalınlığı}}) ince taranmış yerlerde daha fazla nokta gösterir.
- {{ui:Tarama}} › {{ui:Hizalamayı geri al}} bulutu açıldığı ilk yerine koyar. Hizalama bulutu yalnızca görünümde taşır: IFC dosyasına kaydedilmez ve çizdiğiniz duvarlar yerinde kalır. Hizalama, {{ui:Yerleştir}} ya da {{ui:Birimler}} değiştirdiğinizde ya da başka bir model açtığınızda bulutla birlikte gider.
- {{ui:Tarama}} › {{ui:Kesiti plan üzerinde göster}} noktaları gizler ya da gösterir.

:::tip
Büyük taramalar: plan, dilimin en fazla 60.000 noktasını; 3B görünüm ise tüm bulutun birkaç milyon noktasını çizer. İkisi de tarama boyunca eşit aralıklarla seçilir, böylece büyük bir dosya hızlı kalır. İzlemeyi çizim uygulamasında yapmak için bulut çubuğundaki {{ui:CadCraft'ta izle}} öğesini kullanın.
:::
