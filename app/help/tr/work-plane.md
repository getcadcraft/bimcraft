---
title: Çalışma düzlemi: ayarlayın, gösterin, doğrudan üzerine bakın
summary: Çalışma düzlemi, model çizgilerinin, model metninin ve Çalışma Düzlemi Görüntüleyicisi'nin kullandığı düzlemdir. Bir kata, bir yüzeye, adlandırılmış bir referans düzlemine veya bir çizgiye ayarlayın; görünümlerde gösterin; dik bir düzlemde çizim yapmak için görüntüleyiciyi açın.
keywords: çalışma düzlemi, çalışma düzlemini ayarla, çalışma düzlemini göster, referans düzlemi, çalışma düzlemi görüntüleyicisi, adlandırılmış düzlem, yüzey, kat, dik düzlem, düşey düzlem, duvara çizim, görünüş çizimi, yakalama, hizalama, ref düzlemi
from: 8aceee1d
---

## Ne yapacaksınız

Üzerine çizim yaptığınız düzlemi seçin, nerede olduğunu görün ve dik duran bir düzlemde çizim yapın.

## Adımlar

1. {{ui:Çiz}}'i açın ve **Oluştur** menüsünü açın (şerit düzeninde: Mimari sekmesi, Çalışma Düzlemi).
2. **Çalışma düzlemini ayarla**'yı seçin. Sonra şunlardan birini yapın:
   - **Şuna ayarla** içinde bir kat seçin;
   - yanındaki listede adlandırılmış bir referans düzlemi seçin;
   - planda bir çizgiye tıklayın: bir duvar, bir ızgara çizgisi, bir referans düzlemi, bir model çizgisi veya bir perde sistemi. Çalışma düzlemi o çizgiden geçen dik düzlem olur;
   - 3B görünümde düz bir yüzeye tıklayın. Çalışma düzlemi o yüzeyin üzerine oturur.
3. Görmek için **Çalışma düzlemini göster**'i seçin: 3B görünümde metre ızgaralı renkli bir levha, planda kesikli bir dış hat veya çizgi ve yükseklik ve kesit panelinde kesikli bir dış hat. Gizlemek için yeniden seçin.
4. Düzleme doğrudan bakmak için **Çalışma Düzlemi Görüntüleyicisi**'ni seçin. Siyah çizgiler, modelin düzlemle kesilmiş hâlidir. Araçlarını kullanarak düzlemde bir model çizgisi, bir model metni veya bir referans düzlemi çizin. **3B'de bakın** 3B görünümü düzleme dönük hâle getirir.

## Referans düzlemleri

Referans düzlemi, çizgi olarak çizdiğiniz adlandırılmış bir düzlemdir.

1. **Referans Düzlemi**'ni seçin. İsterseniz satırına bir ad yazın (yoksa sizin için adlandırılır) ve bir yükseklik girin.
2. Nereden başlayacağına ve nerede biteceğine tıklayın. Planda bu, dik bir düzlem oluşturur. Çalışma Düzlemi Görüntüleyicisi'nde ise çalışma düzlemine dik duran bir düzlem oluşturur.
3. Planda adıyla birlikte kesikli yeşil bir çizgi olarak görünür; 3B görünümde ve yükseklik ve kesit panelinde kesikli bir dış hat olarak görünür.
4. Adını, uzunluğunu, yüksekliğini ve tabanını değiştirmek için seçin veya **Çalışma düzlemi olarak kullan**'ı seçin.

İki referans düzlemi aynı adı taşıyamaz, çünkü seçim adla yapılır.

## Dikkat edilecekler

- Çalışma düzlemi ayarlanmamış bir model en alt katında çalışır.
- Çalışma düzlemi dosyaya kaydedilir. Görünmesi veya gizlenmesi bu tarayıcıda hatırlanır, dosyada değil.
- Çalışma düzlemi bir referans düzlemini takip ediyorsa ve o düzlemi taşırsanız, çalışma düzlemi onunla birlikte taşınır.
- Dik bir çalışma düzleminde Model çizgisi ve Model metni araçları görüntüleyiciyi açar, çünkü plan bir yüksekliğe işaret edemez.
- Çizim araçları, planda çizilen referans düzlemlerinin uçlarını, görüntüleyicide diğer çizgilerin uçlarını yakaladığı gibi yakalar.

## IFC dosyasında

- Çalışma düzlemi projede bir özellik kümesidir (CadCraft_WorkPlane).
- Referans düzlemi, nesne türü ReferencePlane ve adı olan bir IfcAnnotation'dır. Şekli düzlemin kapalı dış hattıdır; böylece başka bir program nerede olduğunu gösterir. CadCraft_ReferencePlane kümesi başlangıç noktasını, yönü, normali ve boyutunu tutar. IFC'de referans düzlemi için bir sınıf yoktur; açıklama bir yapı öğesi sayılmaz ve odaları sınırlamaz.
