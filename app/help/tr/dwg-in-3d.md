---
title: Bir DWG veya DXF çizimini 3B'de görün
summary: Bir çizimin model uzayını 3B'ye çevirerek yükseklikleri, kalınlıkları, 3B yüzeyleri, ağları ve blokları görün, etrafında döndürün, bir nesneye tıklayarak özelliklerini görün ve henüz çizilmeyenleri öğrenin.
keywords: 3b, dwg, dxf, çizim, model uzayı, döndür, kesit, kırpma, seç, özellikler, öznitelikler, tutamaç, yükseklik, kalınlık, ekstrüzyon, 3dface, polyface, ağ, 3b çoklu çizgi, bloklar, görünümler, perspektif, paralel, sınırlar, acis, katılar
from: a0c6cd17
---

## Ne yapacaksınız

Bir çizimin model uzayına 3B'de bakın. Çizgiler ve çoklu çizgiler gerçek yüksekliklerinde durur; kalınlığı olan nesneler duvar gibi ayağa kalkar; 3B yüzeyler, ağlar ve 3B bloklar etrafında döndürebileceğiniz yüzeyler olarak görünür. Sayfalar 2B kalır.

## Adımlar

1. Bir DWG veya DXF açın. Bkz. [DWG veya DXF çizimini görüntüleme](topic:view-dwg). {{ui:Settings}} › {{ui:BimCraft}} › **Çizimler şurada açılır** {{ui:Model (2D)}} diyorsa dışında, 3B'de açılır.
2. 2B'deyken çizimin üstündeki çubuktaki {{ui:3D}} öğesine tıklayın veya {{key:3}} tuşuna basın.
3. İlk seferde biraz bekleyin: durum satırı "Çizim 3B olarak oluşturuluyor…" yazar, ardından kaç çizgi ve yüzey gösterdiğini bildirir.
4. Döndürün, kaydırın ve yakınlaştırın (aşağıdaki tabloya bakın).
5. İkinci çubuktaki bir görünüme tıklayın: {{ui:Iso}}, {{ui:Top}}, {{ui:Bottom}}, {{ui:Front}}, {{ui:Back}}, {{ui:Left}} veya {{ui:Right}}.
6. Perspektif ile paralel görünüm arasında geçiş yapmak için {{ui:Perspective}} öğesine tıklayın.
7. Tüm çizimi yeniden görmek için {{ui:Extents}} öğesine tıklayın veya {{key:F}} tuşuna basın.
8. 2B'ye dönmek için {{ui:3D}} öğesine yeniden tıklayın, {{key:3}} tuşuna basın veya {{ui:Model}} ya da bir sayfa sekmesine tıklayın.

## Ne görmelisiniz

- Model uzayı 3B'de, Z yukarı, çizimin kendi renkleriyle. Yüzler, kenarlarından bir ton daha açıktır.
- {{ui:Layers}} içinde kapattığınız katmanlar 3B görünümden de kaybolur.
- Sağda: çizgi ve yüzey sayısı, çizimin X, Y ve Z boyutu, **Yalnızca 2B görünümde** ve **Henüz çizilmedi**.

## Bir kesit düzlemiyle kesin

3B çubuktaki {{ui:Section}} öğesine tıklayın veya {{key:X}} tuşuna basın. Altındaki çubuk IFC modellerindeki gibi çalışır (bkz. [Bir IFC modelini kesit düzlemiyle kesin](topic:section-plane)): {{ui:Top}}, {{ui:Front}} veya {{ui:Side}} üzerinden kesin, ofseti sürükleyerek veya yazarak girin (burada çizimin kendi birimleriyle) ve diğer tarafı tutmak için {{ui:Flip}} öğesini kullanın. Düzlemin kestiği kısım seçilemez. 2B'ye dönmek kesiti kaldırır.

## Bir nesnenin özelliklerini görün

3B görünümde bir nesneye tıklayın. Seçim rengine döner ve **{{ui:Properties}}** dosyanın onun hakkında söylediklerini gösterir: türü, katmanı, rengi, çizgi tipi ve tutamacı; ardından kendi verileri, örneğin bir çizginin başlangıcı, bitişi ve uzunluğu, bir dairenin merkezi ve yarıçapı, bir 3B yüzün köşeleri veya bir blok başvurusunun bloğu, ekleme noktası, ölçeği, dönüşü ve öznitelik değerleri.

- Bir blok başvurusu bütün olarak seçilir; içindeki iç içe bloklar da.
- Bir çizgiye birkaç piksel uzaklıktan tıklamak çizgiyi seçer.
- Daha fazla nesne seçmek veya birini çıkarmak için {{key:Mod}} tuşunu basılı tutarak tıklayın; {{ui:Properties}} sonra bunları türlerine göre sayar.
- {{key:Esc}} tuşu veya boş alana tıklamak seçimi temizler.
- Kapattığınız katmanlardaki nesneler seçilemez.

## Etrafta dolaşma

:::mouse
| Yapmak istediğiniz | Bunu yapın |
|---|---|
| Döndürmek | Orta düğmeyle veya sol düğmeyle sürükleyin |
| Kaydırmak | Sağ düğmeyle sürükleyin veya {{key:Shift}} tuşunu basılı tutup sürükleyin |
| Yakınlaştırmak | Tekerleği kaydırın; imlecin altındaki noktaya doğru yakınlaşır |
| Hepsini görmek | {{ui:Extents}} veya {{key:F}} |
| Bir yandan bakmak | Sağ alttaki görünüm küpünün bir yüzüne, kenarına veya köşesine tıklayın |
:::

Görünüm küpü, {{ui:Settings}} içinde bir eksen simgesiyle değiştirilebilir veya gizlenebilir. Bkz. [BimCraft ayarları](topic:settings).

:::mac mouse
Bir dokunmatik yüzeyde döndürmek için iki parmakla kaydırın, kaydırmak için {{key:Shift}} tuşunu basılı tutup kaydırın ve yakınlaştırmak için çimdikleyin.
:::

:::touch
Döndürmek için tek parmakla sürükleyin. Yakınlaştırmak için iki parmakla çimdikleyin ve kaydırmak için parmakları birlikte hareket ettirin.
:::

## 3B'de neyin çizildiği

| Çizimde | 3B'de |
|---|---|
| Çizgiler, 3B çoklu çizgiler | Gerçek yüksekliklerinde |
| Çoklu çizgiler, daireler, yaylar, elipsler | Kendi düzlemlerinde, kotlarında; çizim onları eğerse eğik |
| Çizgilerde, çoklu çizgilerde, dairelerde ve yaylarda kalınlık | O yükseklikte duvarlar; daireler üstten ve alttan kapalıdır |
| 3B yüzler, polyface ağları, çokgen ağları | Görünür kenarlarıyla gölgeli yüzeyler |
| Bloklar | 3B'de yerleştirilmiş, döndürülmüş ve ölçeklenmiş; iç içe bloklar da |
| Taralamalar | Dış hatları |
| Düz 2B çizgi çalışması | Çizildiği yerde, düz |

## Yalnızca 2B görünümde

Metin, çok satırlı metin ve blokların görünür öznitelikleri 3B'de, kendi düzlemlerinde ve kendi yüksekliklerinde çizilir; onlara tıklamak onları seçer. Geniş çoklu çizgiler genişliklerini düz bir şerit olarak gösterir. Çok belirtme çizgileri, resimler ve taralama desenleri **Yalnızca 2B görünümde** altında sayılır: onları {{ui:Model}} sekmesinde veya sayfalarda görün.

## Henüz çizilmedi

ACIS gövdeleri olarak saklanan katılar ve yüzeyler (3B katılar, gövdeler, bölgeler ve yüzeyler) ile alt bölümlü ağlar, kaç tane olduklarıyla birlikte **Henüz çizilmedi** altında listelenir. Atlanırlar, tahmin edilmezler.

## Sık yapılan hatalar

- **Her şey düz görünüyor.** Çizim 2B'dir: çizgilerinin yüksekliği yoktur. Kontrol etmek için {{ui:Front}} öğesine tıklayın; düz bir çizim bir çizgi olarak görünür.
- **Katı bir model hiçbir şey göstermiyor.** Katı modelleyiciyle yapılan katılar, **Henüz çizilmedi** altında listelenen ACIS gövdeleridir. Modeli, onu yapan programdan IFC olarak veya 3B yüzler olarak dışa aktarın.
- **Çizim ortada küçük bir kümedir.** Model uzayında uzakta bir şey, örneğin bir planın eski bir kopyası, sınırları büyütür. Bakmak istediğiniz yere fare tekerleğiyle yakınlaşın.

## Sonraki

- [Katmanlar ve sayfalarla çalışın](topic:dwg-layers-sheets)
- [Bir IFC modelini kesit düzlemiyle kesin](topic:section-plane)
