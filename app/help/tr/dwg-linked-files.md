---
title: Bağlı çizimleri ve resimleri bulun
summary: Bir çizimin bağlı çizimlerini (xref) ve başlık bloğu resimlerini, klasörünü açarak veya dosyaları elle ekleyerek gösterin.
keywords: xref, dış referans, bağlı çizim, ekle, kaplama, görüntü, resim, logo, başlık bloğu, eksik xref, etransmit, referans yöneticisi
from: 5593d4b1
---

## Ne yapacaksınız

Bir çizimi tamamlayın: bağlandığı çizimleri (dış referanslar veya xref) ve kullandığı resimleri, örneğin başlık bloğundaki bir logoyu gösterin.

## Kolay yol: klasörü açın

1. Çizimi ve bağlantılarını tutan klasörü seçmek için {{ui:Open a folder}} öğesine tıklayın; örneğin bir projenin tüm `Cad` klasörünü.
2. Klasör raporunda **CAD çizimleri** bölümüne kaydırın.
3. Çizime tıklayın.
4. Sağdaki {{ui:Properties}} panelinde, **Bağlı çizimler** ve **Görüntüler** altına bakın.

BimCraft her bağlı çizimi adına göre ("*ad*.dwg") arar; önce çizimle aynı klasörde, sonra açtığınız klasörün herhangi bir yerinde. Resimler de aynı şekilde bulunur ve ayrıca benzer bir adla: bir eTransmit veya Revit dışa aktarımı genellikle projenin adını başa ekler; bu yüzden `logo.png`, `Tower-logo-5425051.png` olarak bulunur.

## Diğer yol: dosyaları elle ekleyin

1. Çizimi tek başına açın.
2. Sağda, **Bağlı çizimler** altında {{ui:Add linked drawings…}} öğesine tıklayın. **Görüntüler** altındaki düğme {{ui:Add pictures…}} öğesidir; ikisi de aynı seçiciyi açar.
3. Bağlı `.dwg` dosyalarını ve resim dosyalarını seçin. Birden fazlasını birlikte seçebilirsiniz.
4. BimCraft çizimi onlarla birlikte yeniden açarken bekleyin.

## Ne görmelisiniz

Her bağlı çizim ve resim bir etiketle listelenir:

| Etiket | Anlamı |
|---|---|
| **Gösterildi** | Bulundu ve çizildi. Altındaki yol nereden geldiğini gösterir veya "siz ekledi". |
| **Gösterildi, benzer ad** | Benzer bir adla bulunan bir resim. Doğru olduğundan emin olun. |
| **Bulunamadı** | Klasörde veya eklediğiniz dosyalarda yok. Eksik bir resim boş çerçevesi olarak görünür. |
| **TIFF bir tarayıcıda gösterilemez** | Resim bir TIFF dosyası; tarayıcılar bunu çizmez. Aynı adla PNG olarak kaydedin ve ekleyin. |
| **Okunamadı** | Dosya bulundu ama bir resim olarak açılamadı. |

Soldaki {{ui:Drawing}} paneli bağlı çizimler için "*n* / *m* yüklendi" gösterir. Bağlı çizimlerin katmanları {{ui:Layers}} içinde "*bağlantı adı*|*katman*" olarak görünür.

## Sık yapılan hatalar

- **Yalnızca çizimi açmak.** "Bu çizim, bağlı çizimleri eklenene kadar yalnızca kendi içeriğini gösterir. Tüm proje klasörünü açmak onları otomatik olarak bulur."
- **Çok küçük bir klasör açmak.** Bağlantılar kardeş bir klasördeyse, bunun yerine üst klasörü açın.
- **Yeniden adlandırılmış bağlantılar.** BimCraft bağlı çizimleri adlarıyla eşleştirir. Diskte yeniden adlandırılmış bir bağlantı bulunamaz; onu elle ekleyin.
- **Bağlantıların bağlantıları.** BimCraft, açık çizimin bağlandığı çizimleri yükler. Bunların içinde bağlanan çizimler aranmaz; bu yüzden bu sürümde genellikle görünmezler.
