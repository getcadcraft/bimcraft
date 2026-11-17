---
title: Koordinasyon için diğer modelleri bağlayın
summary: Başka bir IFC modelini referansla yanınızda gösterin (asla birleştirilmez), paylaşılan koordinatlarla, harita koordinatlarıyla ya da iki noktayla yerleştirin, çizim sırasında ona yakalanın ve dosyası değiştiğinde yeniden yükleyin.
keywords: bağlantı, bağlı model, referans, xref, koordinasyon, federasyon, yapı, MEP, danışman, paylaşılan koordinatlar, ölçüm, harita koordinatları, yeniden yükle, yüklemeyi kaldır, belge referansı, IfcDocumentReference
from: 3e0f1eab
---

## Ne yapacaksınız

Bir danışmanın modeline (yapı, tesisat, mevcut bina) kendi dosyanıza hiçbir şey kopyalamadan çizim yapın.

Bir **bağlı model** 3B görünümde gösterilir ve planlarınızda kesilir, ancak asla değiştirilmez ve modelinize asla kaydedilmez. Modeliniz yalnızca bağlantıyı tutar: dosyanın adını ve nereye yerleştiğini.

## Bir model bağlayın

1. Sol paneldeki {{ui:Bağlı modeller}} bölümünde {{ui:Model bağla…}} öğesine tıklayın ve IFC dosyasını seçin. Hemen görünür ve satırında **Gösteriliyor** yazar.
2. {{ui:Yerleştirme}} bölümünde nereye yerleştirileceğini seçin:
   - **Paylaşılan koordinatlar** (başlangıç için): koordinatları sizinkiyle aynıdır; tıpkı iki modelin aynı başlangıç noktasından ayarlanmış olması gibi.
   - **Harita koordinatları**: iki dosyanın harita koordinatları onları hizalar (ikisinde de harita dönüşümü olmalıdır; birinde yoksa BimCraft bunu söyler).
   - **İki noktayla…**: bağlı modelde bir noktaya, sonra da sizin modelinizde nereye geleceğine tıklayın; ardından ikinci bir çift. Bağlantı, uyacak şekilde taşınır ve döndürülür (dikey eksen etrafında).
3. Her bağlantı ve yerleştirme değişikliği bir adımdır: {{key:Mod+Z}} onu geri alır.

## Onunla çalışın

- Planlar, bağlı modeli seviyenin kesim yüksekliğinde ince çizgiler olarak kesilmiş gösterir ve {{ui:Duvar}} aracı ile diğer çizim araçları onun köşelerine ve kenarlarına yakalanır.
- 3B görünümde öğelerini seçerek özelliklerini okuyun; bağlı bir model asla düzenlediğiniz model değildir, bu yüzden {{ui:Modeller}} içindeki radyo düğmesi kapalıdır.
- **Dosya değişti mi?** Tarayıcı dosyayı izleyebiliyorsa (dosya seçicisiyle açılmış bir dosya veya Studio'da), dosya yeniden kaydedildikten birkaç saniye sonra BimCraft bağlantıyı kendiliğinden yeniden yükler ve bunu belirtir. Aksi halde {{ui:Yeniden yükle}} öğesine tıklayın.
- {{ui:Yüklemeyi kaldır}} onu gizler ve belleği boşaltır; bağlantı modelinizde kalır. {{ui:Yükle…}} onu yeniden gösterir (dosyayı siz seçersiniz: tarayıcı bir dosyayı kendi başına adıyla açamaz).
- × simgesi bağlantıyı modelinizden kaldırır.

## Ne görmelisiniz

- IFC dosyanızda: her bağlantı için bir IfcDocumentReference (dosyanın adı), projeye bağlı ve nereye yerleştiği projenin CadCraft_Links özellik kümesinde. Modelinizi yeniden açtığınızda bağlantılarını, yükleyene kadar **Yüklenmedi** olarak listeler.

:::note
Çakışma denetimleri, Karşılaştır ve Bul, yüklü bir bağlantıyı diğer açık modeller gibi kullanabilir: bkz. [Birkaç IFC modelini birlikte görün](topic:several-models).
:::
