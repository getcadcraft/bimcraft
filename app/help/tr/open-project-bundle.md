---
title: Proje paketini açın
summary: Proje paketi, bir modeli, görünümlerini, düzenlerini ve özellik gruplarını içeren tek bir zip dosyasıdır. Açın, bir görünümü katı ve katmanlarıyla gösterin, bir düzeni açın ve özellikleri projenin kendi gruplarında görün.
keywords: paket, proje paketi, ccbundle, zip, görünümler, görünüm haritası, düzenler, düzen kitabı, katman kombinasyonu, özellik grupları, standartlar, pln, şablon
from: b5b86e8f
---

## Ne yapacaksınız

**Proje paketini** (`.ccbundle.zip`) açın ve projeyle, düzenlendiği gibi çalışın: görünümleri, düzenleri ve özellik grupları, modelin üzerinde.

Bir paket şunları içerir:

- modeli IFC olarak,
- düzenleri PDF ve DWG olarak,
- IFC'nin dışarıda bıraktıklarının bir listesini: görünümler (her biriyle katı, katman kombinasyonu ve ölçek), düzenler ve bunların üzerine yerleştirilmiş çizimler, gruplarındaki özellik tanımları, sınıflandırmalar ve katman, kalem takımı, çizgi tipi, taralama, yüzey ve bileşik gibi standartlar.

Paketleri, Archicad'in içinde çalışan ve bu listeleri doğrudan Archicad'den isteyen açık kaynaklı bir betik yazar. BimCraft `.pln` veya `.tpl` dosyalarını doğrudan okumaz; bkz. [.pln ve .pla proje dosyalarını açın](topic:pln-project-files).

## Paket oluşturun

Betik bir önizlemedir: henüz her Archicad sürümünde denenmedi. [github.com/getcadcraft/bim-project-bundle](https://github.com/getcadcraft/bim-project-bundle) adresinden alın. Archicad 24 veya daha yeni bir sürüm ile Python 3.8 veya daha yeni bir sürüm gerekir; başka bir şey kurmanız gerekmez.

1. `archicad_bundle.py` dosyasını bir klasöre kaydedin, örneğin `C:\cc-bundle`.
2. Archicad'de projeyi açın ve tam olarak **CadCraft bundle** adında bir yayımcı kümesi oluşturun: 3B görünüm IFC olarak, her düzen PDF olarak ve her düzen ayrıca DWG olarak, tek bir düz klasörde diskteki dosyalara yayımlanır.
3. Proje açıkken `python archicad_bundle.py --probe --out .` komutunu bir kez çalıştırın. Yalnızca okur ve `probe.json` yazar.
4. `python archicad_bundle.py --out . --translator "IFC4 Reference View"` komutunu çalıştırın (seçtiğiniz IFC çevirmenini kullanın). Archicad kümeyi yayımlar ve betik `<project>.ccbundle.zip` dosyasını yazar.

Betik üzerinden yayımlama başarısız olursa kümeyi elle yayımlayın ve `python archicad_bundle.py --out . --no-publish --files <folder>\*.ifc <folder>\*.pdf <folder>\*.dwg` komutunu çalıştırın. Tüm seçenekler depodaki README dosyasında bulunur. Bir şey gelmezse orada bir sorun açın ve `probe.json` dosyasını ekleyin.

## Paketi açın

1. {{ui:Dosya seçin}} öğesine tıklayın ya da `.ccbundle.zip` dosyasını BimCraft'a sürükleyip bırakın. {{ui:Klasör aç}} ile açtığınız bir klasörde paketler **Proje paketleri** altında listelenir; birine adıyla tıklayın.
2. Model, her IFC gibi açılır ve dosyanın bilgilerinin altında, sol tarafta **Proje paketi** bölümü görünür.

Hiçbir şey yüklenmez: paket bilgisayarınızda, bir seferde bir dosya olarak okunur; böylece büyük bir model iki kez kopyalanmaz.

## Bir görünümü gösterin

**Görünümler** altında görünümler, projedeki klasörlerine göre gruplanır. Bir görünümün adına tıklayın:

- **Bir kat planı** yalnızca kendi katını, yukarıdan görünecek şekilde gösterir.
- **Katman kombinasyonu** o kombinasyonun gizlediği katmanlardaki öğeleri gizler. Durum satırı kaç öğeyi gizlediğini söyler.
- **Ölçeği** adın yanında ve durum satırında gösterilir.
- **3B görünüm** her katı gösterir.

Her şeyi yeniden göstermek için {{ui:Göster}} içindeki {{ui:Tümünü göster}} seçeneğini kullanın ve her katı işaretleyin.

:::note
BimCraft katmanları IFC dosyasındaki katman atamaları üzerinden bulur. IFC onlar olmadan dışa aktarıldıysa, bir katman kombinasyonu hiçbir şeyi gizlemez ve durum satırı 0 öğe gizlendiğini söyler.
:::

## Bir düzeni açın

**Düzenler** altında her düzen numarasını, adını, kâğıt boyutunu ve üzerine yerleştirilmiş görünümleri gösterir.

- **PDF** düzenin PDF dosyasını paketten kaydeder.
- **DWG** düzenin çizimini 2B görünümde açar. Modele dönmek için herhangi bir görünüme tıklayın.
- **… içinde aç** düzenin dosyasını, onunla çalışan uygulamaya yeni bir sekmede gönderir: PDF'i MarkupCraft'a, DWG'yi CadCraft'a. Yalnızca o uygulama BimCraft'ın yanında açıksa görünür. Dosya, sekme yüklenirken paketten okunur ve hiçbir şey yüklenmez.

Bir düzende ikisi de yoksa **Pakette dosya yok** yazar.

## Özellikleri projenin gruplarında görün

Bir öğe seçin. **Özellik grupları** öğenin özelliklerini, projenin tanımladığı gruplar altında gösterir; eşleşme, tanımın IFC için verdiği özellik kümesi ve adı üzerinden yapılır, yoksa adıyla yapılır. Geri kalanlar her zamanki gibi {{ui:Özellikler}} içinde kalır. **Özellik tanımları** her tanımı, grubu, türü ve IFC adıyla listeler.

## Standartlar ve notlar

- **Standartlar** paketteki katmanları, katman kombinasyonlarını, kalem takımlarını, çizgi tiplerini, taralamaları, yüzeyleri, bileşikleri ve malzemeleri sayar.
- **Notlar** betiğin o Archicad sürümünden alamadığı şeyleri, BimCraft'ın okuyamadığı alanları ve paketin adını verip içermediği dosyaları listeler.

## Sorun giderme

- **"… bir zip, ama proje paketi değil."** Zip içinde `manifest.json` yok. Açıp içindeki `.ifc` dosyasını açın.
- **"… bu BimCraft'ın okuyabileceğinden daha yeni bir proje paketi."** BimCraft'ı güncelleyin.
- **"… manifestinin adını verdiği modeli içermiyor."** Zip eksik kesilmiş veya düzenlenmiş. Paketi yeniden oluşturun.
- **Bir görünüm her katı gösteriyor.** Katı, modelin IFC dosyasında yok (durum satırı bunu söyler). IFC dışa aktarımının o katı içerdiğini kontrol edin.

Bkz. [İki BIM programı arasında çalışma](topic:two-bim-programs) ve [BimCraft her biçimden ne okur](topic:file-formats).
