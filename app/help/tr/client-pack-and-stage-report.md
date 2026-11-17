---
title: "Müşteri paketleri, aşama raporları ve seçenekleri karşılaştırma"
summary: "Modelden bir müşteri paketi ya da aşama raporu oluşturun; kütle seçeneklerini alan ve maliyet üzerinden karşılaştırın, kat alanlarını, revizyonlarıyla çizimleri ve sorun geçmişini ekleyin. Her rakam, arkasındaki öğeleri korur."
keywords: müşteri paketi, sunum, aşama raporu, rapor, seçenek karşılaştırması, seçenekler, seçenekleri karşılaştır, alan ve maliyet, seçenek başına maliyet, birim fiyat yok, kütle, kat alanları, çizim listesi, sorun geçmişi, rakamlar, bağlı rakamlar
from: f6679bf5
---

## Ne yapacaksınız

Modelin şu anki hâlinden bir müşteri paketi ya da bir aşama raporu oluşturun ve tutulan kütle seçeneklerini alan ve maliyet açısından yan yana karşılaştırın.

## Adımlar

1. Sol panelde **Müşteri paketi ve aşama raporu**'nu açın.
2. Müşteri paketi ya da Aşama raporu yanındaki **Belgelerde aç**'ı seçin. Belge, modelden Belgeler'de görünür; metnini orada değiştirebilirsiniz.
3. Önizlemede, arkasındaki öğeleri seçmek için bir rakama tıklayın.
4. **Paketi oluştur**'u seçin. Bir zip kaydedilir: belge bir PDF olarak, 3B görünümün bir resmi ve her rakamı öğelerinin GlobalId'leriyle listeleyen `figures.csv`.

## Alanlar

Bunları herhangi bir belgede kullanabilirsiniz.

| Alan | Ne yazdırır |
|---|---|
| `{{stage}}` | Çizim ayrıntılarındaki proje aşaması. |
| `{{options}}` | Tutulan kütle seçenekleri, yan yana: katlar, yükseklik, taban alanı, brüt kat alanı, zarf ve maliyet. |
| `{{areas}}` | Odalardan, kata göre kat alanı. |
| `{{sheets}}` | Her sayfanın durduğu revizyon ve en son ne zaman yayımlandığı ile sayfalar. |
| `{{issues}}` | Sorun geçmişi ve çizim değişiklik günlüğü. |
| `{{changes}}` | Son yayımdan bu yana, sayfa sayfa neyin değiştiği. |

## Seçenekler nasıl maliyetlendirilir

Maliyet yalnızca projenizin fiyat tablosundan gelir (Enerji/Maliyet, 5B maliyet). Sizin için hiçbir şey tahmin edilmez.

- Bir fiyat satırı, bir seçeneği yalnızca sınıfları `IfcBuildingElementProxy` adını taşıdığında fiyatlandırır.
- Kat alanı, kelimeleri seçeneğin kullanımını, örneğin ofis, adlandıran bir satır tarafından fiyatlandırılır. Böyle bir satır yoksa, kelimeleri brüt kat alanı ya da bina kütlesi olan bir satır kullanılır. m² cinsinden bir satır brüt kat alanını kullanır. m³ cinsinden bir satır hacmi kullanır.
- Zarf (çevre çarpı yükseklik), kelimesi zarf ya da cephe olan bir satır tarafından fiyatlandırılır.
- Eşleşen bir satırı olmayan bir seçenek **Birim fiyat yok** gösterir. Bir toplam, istenen her parça bir birim fiyatına sahip olduğunda gösterilir.

## Bilmeniz iyi olacak noktalar

- Seçenekleri, oda programının kütle listesinde **Seçenek olarak tut** ile tutun. Bkz. Kütle seçenekleri.
- Bir PDF öğe seçemez. BimCraft dışında `figures.csv`, her rakamdan öğelerine olan bağlantıyı taşır.

## Henüz yapılmadı

- Sayfalar ve çizilmiş görünümler belgenin içine yerleştirilmez. Paket yalnızca 3B görünümün bir resmini içerir.
