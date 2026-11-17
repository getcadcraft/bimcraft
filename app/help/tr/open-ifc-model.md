---
title: IFC modelini açın ve 3B'de etrafına bakın
summary: "Bir IFC dosyası açın, döndürün, kaydırın ve yakınlaştırın; yönünüzü bulmak için Sığdır, Üst, Ön ve Yan'ı kullanın."
keywords: ifc, 3b, döndür, kaydır, yakınlaştır, sığdır, üst görünüm, ön görünüm, yan görünüm, gezin, viewcube, kamera
from: 68b460dd
---

## Ne yapacaksınız

Bir IFC modeli açın, etrafında hareket edin ve standart görünümlere geçin. Yaklaşık beş dakika.

Bir `.ifc` dosyasına ihtiyacınız var. Çoğu BIM programı bir tane dışa aktarır; Revit'te yol **File > Export > IFC** şeklindedir. Bkz. [Proje dosyasını IFC ile 3B'ye getirme](topic:rvt-to-ifc).

## Adımlar

1. {{ui:Dosya seçin}} düğmesine (ya da sol üstteki bırakma alanına) tıklayın.
2. `.ifc` dosyanızı seçin ve onaylayın.
3. Durum satırının bitmesini bekleyin. İlk seferinde "IFC motoru başlatılıyor…" gösterir, sonra "Model okunuyor…" ve "Geometri oluşturuluyor: … / … öğe".
4. Modele bakın: üç çeyrek görünümde, ekrana sığdırılmış olarak açılır.
5. Modelin üstündeki araç çubuğunda {{ui:Üst}} öğesine tıklayarak tepeden bakın.
6. Önü görmek için {{ui:Ön}}, sonra yandan bakmak için {{ui:Yan}} öğesine tıklayın.
7. Bütün modelin üç çeyrek görünümüne dönmek için {{ui:Sığdır}} ya da {{key:F}} tuşuna basın.

## Ne görmelisiniz

- Ortada model; çizim gibi görünmesi için ince koyu kenarlarla.
- Solda {{ui:Dosya}} paneli: dosya adı, boyutu, IFC şeması (örneğin IFC2X3 ya da IFC4), proje adı, aşama, dışa aktarıldığı program, yazar, dışa aktarım tarihi ile öğe ve üçgen sayıları.
- Altındaki {{ui:Katlar}} ve {{ui:Öğeler}} listeleri.
- Durum satırı: "*dosya adı* açıldı: *n* öğe, *s* sn".

## Etrafta hareket etme

:::mouse
| İstenen | Yapılacak |
|---|---|
| Döndürme | Sol düğmeyle sürükleyin |
| Kaydırma | Sağ düğmeyle sürükleyin ya da {{key:Shift}} (ya da {{key:Mod}}) basılı tutup sol düğmeyle sürükleyin |
| Yakınlaştırma | Tekerleği kaydırın ya da orta düğmeyle sürükleyin |
| Her şeyi görme | {{key:F}} tuşuna basın ya da {{ui:Sığdır}} öğesine tıklayın |
:::

:::mac mouse
Dokunmatik yüzeyde: döndürmek için bir parmağınızla basılı tutup sürükleyin; kaydırmak için {{key:Shift}} ya da {{key:Mod}} basılı tutup sürükleyin; yakınlaştırmak için iki parmakla kaydırın ya da sıkıştırın. İki parmakla tıklama sağ tıklamadır ve onunla kaydırmak için sürükleyebilirsiniz, ama {{key:Shift}} ve sürükleme daha kolaydır.
:::

:::touch
| İstenen | Yapılacak |
|---|---|
| Döndürme | Bir parmakla sürükleyin |
| Yakınlaştırma | İki parmakla sıkıştırın |
| Kaydırma | İki parmağı birlikte hareket ettirin |
| Her şeyi görme | {{ui:Sığdır}} öğesine dokunun |
:::

Döndürme her zaman modelin ortasındaki bir nokta etrafında döner. Kaydırma o noktayı taşır; bu yüzden uzun bir kaydırmadan sonra döndürme merkezden kaymış gibi hissettirebilir: sıfırlamak için {{ui:Sığdır}} öğesine tıklayın.

## Gölgeli, kenarlı ya da tel kafes

Görünüm küpünün hemen üstündeki üç küçük düğme modelin nasıl çizileceğini seçer: {{ui:Gölgeli}}, {{ui:Kenarlı gölgeli}} (varsayılan) ve {{ui:Tel kafes}}. Bunlar aynı zamanda komutlardır (menülerdeki {{ui:Görünüm}} ve Özelleştirme listesinde), bu yüzden kendi tuşları olabilir. {{ui:Plan}}, {{ui:Böl}} ve {{ui:3B}} araç çubuğundaki {{ui:Görünüm}} satırındadır.

## Sık yapılan hatalar

- **Adlandırılmış görünümler beklemek.** BimCraft dört sabit görünüme sahiptir ({{ui:Sığdır}}, {{ui:Üst}}, {{ui:Ön}}, {{ui:Yan}}), sağ alt köşedeki görünüm küpü ve serbest döndürme. Görünüm kaydetmez.
- **Plan ve kesit aramak.** Bu sürümde 2B planlar ya da kesit kutuları yoktur. Modeli tek bir {{ui:Kesit}} düzlemiyle kesin ([IFC modelini kesit düzlemiyle kesme](topic:section-plane)) ya da katları kapatın: [Katları, mekânları ve kenarları gösterme ve gizleme](topic:storeys-and-spaces).
- **Bir proje dosyasını açıp 3B beklemek.** Proje dosyası bir dosya kartı olarak açılır. Önce IFC dışa aktarın.
- **Bir `.ifczip` açmak.** Zipten çıkarın ya da sade `.ifc` dışa aktarın.
- **Çok büyük bir model sekmeyi yavaşlatır ya da çökertir.** Bkz. [Tarayıcılar, cihazlar ve bellek](topic:platforms).

## Sonraki

[Bir öğe seçin ve özelliklerini okuyun](topic:inspect-element).
