---
title: Duvar çizme
summary: Bir katın planında köşelerine tıklayarak veya uzunlukları yazarak duvar çizin; köşeler kendiliğinden birleşir ve duvarlar IFC olarak kaydedilir.
keywords: kavisli, yay, konum çizgisi, hizalama, duvar, duvarlar, çiz, plan, kat planı, oda, köşe, birleştir, duvar tipi, 2x6, 2x4, cmu, beton, yükseklik, kat, seviye, katlar, yazılan uzunluk, ortogonal, yakalama
from: 8269cd4b
---

## Ne yapacaksınız

Bir binanın duvarlarını her katın planı üzerinde çizin. Duvarın başladığı noktaya ve sonra her köşeye tıklayın; BimCraft köşeleri sizin için birleştirir, her duvara katmanlarını verir (kaplama, sıva altlığı, dikmeler, alçıpan …) ve duvarı üstteki kata kadar uzatır. 3B görünüm, siz çizdikçe duvarları gösterir.

## Planı açın

1. Yeni bir bina başlatın ([Yeni bina başlatın](topic:start-a-new-building)) veya bir IFC modeli açın.
2. Araç çubuğunda {{ui:Draw}} öğesine tıklayın. Yeni bir bina açılır ve bu zaten açık olur.
3. Bir katın planı solda, 3B görünüm sağda gösterilir. Katı planın üstündeki listeden veya **Katlar** panelindeki yuvarlak düğmeyle seçin.
4. {{ui:Plan}}, {{ui:Split}} ve {{ui:3D}} araç çubuğundaki {{ui:View}} satırında yer alan araçlardır (PLAN, SPLIT komutları ve tuşlar eskisi gibi çalışır). Yalnızca plan için {{ui:Plan}}, ikisi birden için {{ui:Split}}, planı kapatmak için {{ui:3D}} kullanın. Pencere dar olduğunda (veya arayüz boyutu büyük olduğunda) {{ui:Split}}, planı 3B görünümün yanında değil üstünde gösterir.

Plan, bir kat planının yaptığı gibi katı zemininden 4'-0" (1200 mm) yukarıda keser. Yakınlaştırmak için fare tekerleğini kaydırın; kaydırmak için orta veya sağ düğmeyle sürükleyin (veya {{key:Space}} tuşunu basılı tutup sürükleyin). {{ui:Select}} açıkken düz sürükleme de kaydırır. İmleç planın üzerindeyken {{key:F}} planı sığdırır.

## Bir oda çizin

1. {{ui:Wall}} öğesine tıklayın (veya {{key:W}} tuşuna basın).
2. İlk listeden duvar tipini seçin, örneğin **Dış 2×6** veya **İç 2×4**.
3. Yüksekliğini seçin: **Üstteki kata kadar** (o kat taşınırsa duvar da izler), birkaç katı geçen bir duvar için daha yukarıdaki bir kata **Kadar** (merdiven holü, çift yükseklikli oda, yüksek bir alınlık) veya **Sabit yükseklik** ve değerini yazın. Böyle bir duvar, çizdiğiniz kata aittir; geçtiği katların planlarında daha açık gösterilir, oradaki odalar duvara dayanır ve bu planlardan duvara kapı ve pencere yerleştirebilirsiniz (kapı o katın zemini üzerinde durur). Duvarın kendisini taşımak veya yeniden şekillendirmek için başladığı kata gidin.
4. Duvarın ilk başladığı noktaya tıklayın.
5. Her köşeye tıklayın. Her tıklama bir duvar oluşturur; bir sonraki duvar bir öncekinin bittiği yerden başlar. Uzunluk ve açı imlecin yanında görünür.
6. Odayı kapatmak için ilk noktaya yeniden tıklayın. Durum satırı odanın kaç duvardan oluştuğunu gösterir; eksen çizgisi modunda her duvar, dış katmanını odanın dış tarafına alır.
7. Kapatmadan durdurmak için {{key:Esc}} tuşuna basın (veya sağ tıklayın ya da çift tıklayın).

Köşeler kendiliğinden birleşir: iki duvar bir gönye birleşimi yapar, başka bir duvara dayanan duvar onun yüzünde durur (T birleşimi), bir noktada üç veya daha fazla duvar köşeyi paylaşır. Birbirini kesen duvarlar olduğu gibi bırakılır.

Tüm odayı tek seferde çizmek için: dikdörtgen, döndürülmüş dikdörtgen, çokgen, yaylar, seçilen çizgiler üzerinde veya bir dış hat etrafında duvarlar için {{ui:Shapes}} öğesini açın (bkz. [Duvar şekilleri, bölme, ofset, gerdirme ve kilitleme](topic:wall-tools)).

## Çizim referansını seçin

İlk tıklamadan önce **Eksen**, **İç yüz** veya **Dış yüz** seçin. Bir yüz seçiliyken tıklamalarınız ve yazdığınız uzunluklar o yüzü tanımlar; BimCraft duvarın eksenini toplam kalınlığın yarısı kadar kaydırır ve ardışık köşeleri birleştirir. Çizdiğiniz yöne göre **Sol tarafta dış** veya **Sağ tarafta dış** seçin. Saat yönünün tersine çizilen kapalı bir dış hatta dış taraf sağdadır; saat yönünde çizilirse solda. **İç yüz** seçiliyken duvar gövdesi çizginizin dış tarafına gider; **Dış yüz** seçiliyken diğer tarafa. Yüz çizimi, döngüyü kapattığınızda seçtiğiniz dış tarafı korur. Eksende, bir oda kapatmayan duvarlar seçtiğiniz dış tarafı alır; bir odayı kapatmak ise, hangi yönde çizdiğinizden bağımsız olarak her duvarın dış tarafını odanın dışına kendiliğinden ayarlar.

Duvar tipini, referansı veya dış tarafı değiştirmek mevcut zinciri bitirir. Geri dönen bir köşenin yakınında uzun gönye birleşimleri, köşeleri düz bırakarak sınırlandırılır.

Çizim sırasında boş alan üzerindeki bir uç nokta, bir duvar ucu veya önceki bir köşeyle yatay ya da dikey olarak hizalanabilir. Kesikli bir kılavuz, bu noktayı yakalanmış imleçle birleştirir. Shift tuşu çizim yönünü dik tutar; bu durumda hizalama o yön boyunca durur. Yakındaki uç noktalar, orta noktalar ve duvar kesişimleri uzaktaki hizalamadan önceliklidir.

## Konum çizgisi

**Referans** ayarı **Dış yüz** veya **İç yüz** iken duvar bu yüzü konum çizgisi olarak tutar. Daha sonra duvar kalınlaşırsa veya dış tarafı çevrilirse, bu yüz yerinde kalır ve duvar onun etrafında büyür veya döner. Köşede buna dayanan düz bir duvar onu izler, böylece köşe yine kapanır. Konum çizgisini sonradan **Özellikler** bölümünden değiştirebilirsiniz: bkz. [Duvarı, kapıyı veya pencereyi değiştirin](topic:change-a-wall-or-door).

## Kavisli duvar çizin

1. {{ui:Wall}} öğesine tıklayın, sonra seçenekler satırındaki **Şekil** listesinden **Kavisli** seçin.
2. Duvarın başladığı, sonra bittiği noktaya tıklayın.
3. Yayı üzerindeki bir noktaya tıklayın. Ya da yay yüksekliğini yazıp {{key:Enter}} tuşuna basın.
4. Zincir duvarın ucundan devam eder. Zinciri bitirmek için {{key:Esc}} tuşuna basın.

Kavisli bir duvar uçlarında diğer duvarlara birleşir (köşe ve T birleşimleri çalışır), odalar oluşturur ve yayı boyunca kapı ve pencereleri tutar. Bunlar düz birimler olarak kalır, ortalarında duvara dik durur ve uzaklıkları yay boyunca ölçülür. Bir duvar en fazla dörtte üç daire dönebilir. Uçlarına ve yayının ortasına yakalanır.

Kavisli duvarlar için henüz yapılmadı: {{ui:Trim / extend}} ve {{ui:Corner}}, iskelet, otomatik plan ölçülendirmeleri ve yay boyunca yakalama. Bkz. [Henüz yapılmayanlar](topic:not-built-yet).

## Tıklamak yerine uzunluk yazın

İlk tıklamadan sonra yazın ve {{key:Enter}} tuşuna basın:

| Yazılan | Çizer |
|---|---|
| `12'6"` veya `3810` | imlecin gösterdiği yönde o uzunlukta bir duvar |
| `12'6"<90` | o uzunlukta, o açıda (derece, sağdan saat yönünün tersine) |
| `@3000,0` | son noktadan o kadar uzaktaki bir noktaya, yatay ve dikey olarak |
| `1200,3400` | plandaki o noktaya |

Duvar aracı açıkken bir sayı yazmak doğrudan {{ui:Length}} kutusuna gider. Fit ve inç biriminde çıplak bir sayı inç, milimetrede ise milimetredir. Birimi her zaman yazabilirsiniz: `3.5 m`, `10 ft`, `6 1/2"`.

## Yakalamalar

- Duvar uçları, yüz köşeleri ve duvar orta noktaları imleç yakın olduğunda yakalanır (kare, üçgen).
- İmleç bir duvarın eksen çizgisine veya iki yüzünden birine yakalanır (artı işareti).
- Son noktadan itibaren yön, yakınken her 15°'de tutulur; {{key:Shift}} tuşunu basılı tutarak 0°, 90°, 180° veya 270°'de tutun.
- Serbest yönlerde uzunluk 1/2" (veya 10 mm) değerine yuvarlanır.

## Değiştirin, geri alın, silin

- Her duvar **Değişiklikler** listesinde bir adımdır: {{ui:Undo}} ve {{ui:Redo}} duvarları geri alır ve yeniden koyar.
- {{ui:Select}} açıkken planda bir duvara tıklayarak seçin; 3B görünüm ve **Özellikler** onu izler. {{key:Delete}} seçili duvarları siler ve birleştikleri duvarlar yeniden temizlenir.

## Katlar

**Katlar** paneli her katı yüksekliği ve kotuyla birlikte listeler.

- Yeni bir ad, kot veya yükseklik yazın ve {{key:Enter}} tuşuna basın. Bir katın yüksekliğini (veya kotunu) değiştirmek, üstündeki katları aynı miktarda taşır; bir kata kadar uzanan duvarlar izler.
- {{ui:Add a level on top}} en üstteki katın üstüne, onunla aynı yükseklikte bir kat ekler.
- {{ui:Add a level below}} en alttaki katın altına (bir bodrum), onunla aynı yükseklikte bir kat ekler: en alt kat 0'daysa kotu negatif olur ve başka hiçbir kat taşınmaz. Geri al bunu geri alır.
- {{ui:Copy this level…}} baktığınız kattaki öğeleri başka bir kata veya üstte yeni bir kata yeniden çizer: kapı ve pencereleriyle duvarlar, döşemeler ve tavanlar (çatılar hariç). Üstteki kata kadar uzanan duvarlar, yeni katın üstündeki kata kadar uzanır; odalar kendiliğinden görünür. Tek bir {{ui:Undo}} hepsini geri alır. Diğer katta zaten duvarlar varsa kopya onlara eklenir.
- Araç çubuğundaki {{ui:Units}} çizim araçlarının gösterdiği ve okuduğu her şey için birimi seçer (fit ve inç, inç, ondalık fit, milimetre, santimetre veya metre).

## Kaydedin

{{ui:Save as IFC}} öğesine tıklayın. Her duvar bir IFC duvarı olur; eksen çizgisi, birleşik şekli, tipi ve katmanları, `Pset_WallCommon` ve temel miktarlarıyla (uzunluk, yükseklik, alanlar ve hacimler) birlikte kaydedilir, böylece diğer BIM programları onu açabilir ve listeleyebilir.

## Bilmeniz yararlı olanlar

- Duvarlar eksen çizgilerinde çizilir. Kalınlık duvar tipinden gelir.
- Plan, burada çizilen duvarları dolu, diğer her şeyi (kütüphane öğeleri, diğer programlardan modeller) aynı düzlemle kesilmiş olarak gösterir; kesitin altında kalanlar ince çizgilerle gösterilir.
- Diğer programlar tarafından yapılmış duvarlar planda görünür, ama bu araçlarla henüz değiştirilemez.
