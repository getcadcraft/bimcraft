---
title: Aks ve kolonlar
summary: Aks çizgilerini numaralı ve harfli balonlarla, aralıklara göre ya da tek tek oluşturun; duvarları ve kolonları bu çizgiler boyunca çizin ve bunları planlarda, görünüşlerde ve kesitlerde görün.
keywords: aks, akslar, aks çizgisi, kolon aksı, eksen, balon, yapısal aks, 1 2 3, A B C, kolon, kolonlar, dikme, direk, yakalama, IfcGrid, IfcColumn
from: bf99a8f7
---

## Ne yapacaksınız

Bir yapıyı aks üzerine oturtun, sonra aks çizgileri boyunca duvar çizin ve kolon yerleştirin.

## Tüm aksı yerleştirin

1. {{ui:Çiz}} seçeneğini açın, ardından {{ui:Derleme}} › {{ui:Aks}} seçin.
2. {{ui:Aks yerleştir…}} öğesine tıklayın. **Numaralı çizgilerin** (1, 2, 3…) ve **harfli çizgilerin** (A, B, C…) sayısını ve aralarındaki uzaklığı belirtin. Tek bir aralık yazın ya da düzensiz açıklıklar için virgülle ayrılmış birkaç aralık yazın (örneğin `20', 24', 20'`). {{ui:Son çizgilerin ötesine}}, her çizginin öteki türdeki dış çizgilerin ötesine ne kadar uzanacağını belirtir; {{ui:Döndürülmüş (derece)}} ise tüm aksı döndürür.
3. {{ui:Yerleştir}} öğesine tıklayın, ardından ilk kesişimin (1 / A) nereye gelmesini istediğinize tıklayın. Önizleme işaretçiyi izler.

Numaralı çizgiler planda yukarı doğru uzanır ve yatay olarak aralanır; harfli çizgiler planda yatay uzanır ve yukarı doğru aralanır. Çizimlerde olduğu gibi harfler I ve O'yu atlar; böylece bunlar hiçbir zaman 1 ve 0 gibi okunmaz.

## Aks çizgilerini tek tek çizin

{{ui:Aks}} açıkken, bir çizginin başladığı ve bittiği yere tıklayın. Çizgi, üzerinde uzandığı çizgilerin bir sonraki etiketini alır (3'ten sonra 4, B'den sonra C gelir). Durdurmak için {{key:Esc}} tuşuna basın.

## Bir aks çizgisini değiştirin

{{ui:Aks}} açıkken, seçmek için bir çizgiye tıklayın. Yeni bir {{ui:Etiket}} yazın ve {{key:Enter}} tuşuna basın ya da {{ui:Bu çizgiyi sil}} öğesine tıklayın (ya da {{key:Delete}} tuşuna basın). {{ui:Balonlar}} seçeneği, balonları her çizginin iki ucuna, başına ya da sonuna veya hiçbir yere koyar. Her değişiklik tek bir adımdır: {{key:Mod+Z}} onu geri alır.

## Aks boyunca çizin

{{ui:Duvar}} aracı, {{ui:Kolon}} aracı ve diğer çizim araçları aks çizgilerine ve bunların kesiştiği yerlere yakalanır (yakalama işareti, çarpı işaretli küçük bir dairedir).

**Kolonlar:** {{ui:Derleme}} › {{ui:Kolon}} seçin; şekli (dikdörtgen ya da yuvarlak), boyutu ve kolonun **üst kata kadar** mı yoksa sabit bir yüksekliğe kadar mı uzanacağını seçin, ardından tıklayın. {{ui:Her aks kesişiminde}} seçeneği, henüz kolonu olmayan her kesişime bir kolon yerleştirir. Şeklini, boyutunu ya da yüksekliğini değiştirmek için bir kolona tıklayın ve {{ui:Özellikler}} bölümünde düzenleyin; {{key:Delete}} onu kaldırır. Üst kata kadar uzanan kolonlar, o katın yüksekliği değiştiğinde onu izler.

## Ne görmelisiniz

- Her katın planında aks; her çizginin iki ucunda bir balon ve etiketi.
- Çizim setinde aks çizgileri: planlarda ve bir çizgi uçtan görüldüğünde görünüşlerde ve kesitlerde, balonu binanın üstünde. Bkz. [Görünüşler, kesitler ve sayfalar](topic:sheets).
- IFC dosyasında: bina için tek bir aks (IfcGrid; numaralı çizgileri bir listede, harfli çizgileri diğerinde) ve kolonlar IfcColumn olarak boyutları, yüksekliği ve miktarlarıyla. Diğer BIM programları ikisini de gösterir.

:::note
Başka bir programdan gelen dosyadaki bir aks gösterilir ve araçlar ona yakalanır, ancak çizgileri burada değiştirilemez.
:::
