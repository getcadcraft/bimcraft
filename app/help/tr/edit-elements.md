---
title: Yapı öğelerini silin, kesin, kopyalayın ve yapıştırın
summary: IFC modelindeki duvar, kapı, mobilya ya da başka bir öğeyi seçin; silin, kesin veya kopyalayıp tıkladığınız yere, olduğu yere ya da başka bir kata yapıştırın.
keywords: sil, kaldır, sil, kes, kopyala, yapıştır, çoğalt, taşı, tümünü seç, yapı öğesi, duvar, kapı, pencere, merdiven, açıklık, geri al
from: d9eec37f
---

## Yapacaklarınız

IFC modelinde değişiklik yapın: istemediğiniz öğeleri çıkarın, bir duvarı ya da bir grup mobilyayı başka bir yere kopyalayın ya da öğeleri kesip yapıştırarak taşıyın. Her değişiklik geri alınabilen tek bir adımdır; kaydetmek yeni bir dosya yazar, böylece özgün dosyanız olduğu gibi kalır.

## Adımlar

1. Bir IFC modeli açın. Bkz. [Bir IFC modelini açın ve 3B'de inceleyin](topic:open-ifc-model).
2. Değiştirmek istediğinizi seçin: bir öğeye tıklayın, daha fazla seçmek için {{key:Mod}} ya da {{key:Shift}} tuşunu basılı tutup tıklayın veya gösterilen her öğeyi seçmek için {{key:Mod+A}} tuşlarına ({{ui:Daha fazla}}, {{ui:Tümünü seç}}) basın.
3. Ardından:
   - **Sil:** {{key:Delete}} tuşuna basın ya da {{ui:Daha fazla}}, {{ui:Sil}}.
   - **Kopyala:** {{key:Mod+C}} tuşuna basın ya da {{ui:Kopyala}} düğmesine tıklayın.
   - **Kes:** {{key:Mod+X}} tuşuna basın ya da {{ui:Daha fazla}}, {{ui:Kes}}. Öğeler kaybolur ve bunları yapıştırabilirsiniz.
4. Yapıştırmak için {{key:Mod+V}} tuşuna basın ya da {{ui:Yapıştır}} düğmesine tıklayın. Kopyaladığınız öğenin boyutundaki geçirgen bir kutu, yerleştirme çubuğunda seçilen kat üzerinde imleci izler. Döndürmek için {{key:R}} tuşuna basın (90°), sonra yerini belirlemek için tıklayın. Her tıklama bir kopya daha yerleştirir; durdurmak için {{key:Esc}} tuşuna basın.
5. Ya da {{key:Mod+Shift+V}} tuşlarına basın ({{ui:Daha fazla}}, {{ui:Olduğu yere yapıştır}}): kesmenin ardından öğeler tam olarak eski yerlerine döner; kopyalamanın ardından kopya, özgün öğelerin hemen yanına gelir.
6. Düzenlenmiş modeli indirmek için {{ui:IFC olarak farklı kaydet}} düğmesine tıklayın.

## Öğeyle birlikte neler gider

- **Parçalar:** bir merdiven kollarını, bir perde duvar panellerini alır; parçalardan oluşan her şey hepsini birlikte alır.
- **Açıklıklar:** bir duvar, içine açılmış açıklıkları da alır. Bir kapıyı ya da pencereyi silmek, doldurduğu açıklığı da siler; böylece duvar, bir yapı programında olduğu gibi kapanır. BimCraft'ta çizilmiş bir duvarı silmek, kapılarını ve pencerelerini de siler ve kalan duvarları yeniden birleştirir. Başka bir yerde yapılmış bir dosyadaki duvarı silmek, kapı ve pencerelerini olduğu yerde bırakır.
- **Veri:** bir kopya, özgün öğeyle aynı tipe, malzemelere, özellik kümelerine ve miktarlara sahiptir; ancak yeni bir GlobalId alır. Kopyanın bir değerini daha sonra değiştirmek özgün öğeye dokunmaz.
- **Kütüphane öğeleri** kütüphane verilerini korur; bir kopya bir sonraki boş öğe numarasını alır, geri yapıştırılan kesilmiş bir öğe ise kendi numarasını korur.

## Görmeniz gerekenler

- {{ui:Değişiklikler}} listesinde "Silindi: …" ya da "Yapıştırıldı: …" görünür. {{key:Mod+Z}} son değişikliği geri alır; {{key:Mod+Y}} onu yeniden uygular.
- Bir silmeden sonra durum satırı, kaç parçanın ve açıklığın da gittiğini söyler.
- Yapıştırılan öğeler seçili olur; bu yüzden bir sıra oluşturmak için yeniden olduğu yere yapıştırabilir ya da onları silebilirsiniz.

## Bilmeniz iyi olacaklar

- Kopyalar, özgün öğeyle aynı geometriyi kullanır (IFC, öğelerin geometriyi paylaşmasına izin verir); bu yüzden dosya çok az büyür.
- Yapı öğeleri, kopyalandıkları modele, aynı sekmede yapıştırılır. Yerleştirilmiş kütüphane öğelerini başka bir modelde kullanmak için her seferinde bir öğeyi kopyalayın: bkz. [Kütüphane öğelerini kopyalama, yapıştırma ve çoğaltma](topic:copy-paste).
- Katlar, mekânlar, binalar ve arsa silinemez ya da kopyalanamaz. Bunların içindeki öğeleri seçin. BimCraft'ta çizilen bir oda, çevresindeki duvarlardan oluşur: iki odayı birleştirmek için bir duvarı silin.
- BimCraft'ın kendi duvar, kapı ve pencere araçlarıyla çizilen duvarlar, kapılar ve pencereler şimdilik kopyalanamaz, kesilemez ya da çoğaltılamaz; durum satırı bunu belirtir. Bunları yeniden çizin. Silme çalışır.
- Kopyala, kopyalanan öğelerin adlarını ve özelliklerini metin olarak panoya da koyar; bir elektronik tabloya ya da e-postaya yapıştırabilirsiniz.

## Sık yapılan hatalar

- **{{ui:Sil}} soluk görünüyor.** Hiçbir öğe seçili değil ya da yalnızca katlar ya da mekânlar seçili. Nedenini görmek için üzerine gelin.
- **Yapıştırma, öğelerin başka bir modelden geldiğini söylüyor.** Kopyaladığınızdan beri başka bir model açtınız. İlk modeli yeniden açın ve öğeleri orada kopyalayın.
- **Yapıştırılan kopya başka bir katta.** Yerleştirme çubuğundaki {{ui:Kat}} kopyanın nereye gideceğini belirler; tıklamadan önce katı seçin.

## İlgili konular

- [Öğeleri gizleme, izole etme ve geçirgen gösterme](topic:hide-and-isolate)
- [Tuşlar ve fare](topic:keyboard#edit)
