---
title: Görünümleri ve yürüyüşleri kaydedin
summary: Modelin kamera görünümlerini adlarıyla tutun, onlara geri dönün, birbiri ardına oynatın ve bir binanın içinden geçen yürüyüşü kaydedip oynatmak üzere kaydedin.
keywords: görünümler, kaydedilmiş görünümler, kamera, kameralar, bakış noktası, sahne, sahneler, tur, sunum, yürüyüş, yürü, uçuş, kaydet, oynat, yol, animasyon
from: 3af19a36
---

{{ui:Views}} araç çubuğunda modelin dosyasında 3B görünümün kameralarını tutar; böylece siz ve gönderdiğiniz herkes doğrudan onlara dönebilir.

## Bir görünüm kaydedin

1. 3B görünümü ayarlayın: döndürün, yakınlaştırın, istemediğinizi gizleyin.
2. {{ui:Views}} tıklayın, bir ad yazın (veya önerileni tutun) ve {{ui:Save view}} tıklayın veya {{key:Enter}} tuşuna basın.

Listede zaten olan bir adla kaydetmek o görünümü günceller. Bir görünümün adına tıklayarak ona dönün; kamera oraya yumuşakça hareket eder.

Oklar sırayı değiştirir, kalem yeniden adlandırır, kutu siler. Her değişiklik bir adımdır; bu yüzden {{key:Ctrl+Z}} geri alır.

## Görünümleri oynatın

{{ui:Play the views}} listenin sırasına göre bir görünümden diğerine geçer; her birinde bir an durur. {{key:Esc}} veya {{ui:Stop}} durdurur.

## Bir yürüyüş kaydedin

1. [Yürü](topic:walk) seçeneğini açın ve binanın içinde yürümeye başlayın.
2. {{ui:Views}} içinde {{ui:Record a walk}} tıklayın.
3. {{key:W}} {{key:A}} {{key:S}} {{key:D}} ile yürüyün ve fareyle etrafa bakın.
4. {{ui:Stop recording}} tıklayın. Yürüyüş, uzunluğuyla birlikte "Walk 1" olarak kaydedilir.

Bir yürüyüşe tıklayarak onu yürüdüğünüz gibi oynatın. {{key:Esc}} durdurur.

## Bir yürüyüşü video olarak render edin

Bir yürüyüşün yanındaki film simgesine tıklayın. Video iletişim kutusu yürüyüşün her karesini en son seçtiğiniz render ayarlarıyla çizer; burada seçtiğiniz boyut, kare hızı ve kalitede. Bunu WebM veya MP4 video olarak, ya da her karede bir resimle ZIP olarak kaydedin. Kareler resimler kadar sürer; bu yüzden {{ui:Quick}} ile başlayın.

## Bir yürüyüşe anlatım ekleyin

Bir yürüyüşün yanındaki konuşma balonu simgesine tıklayın. Söylenen her şey için bir satır yazın ve her satırı başladığı zamanla başlatın (`12`, `0:12` veya `1:02.5`); zamansız bir satır, bir üstteki satırdan sonra söylenmesi kadar süre alacak şekilde takip eder. Dili seçin; izleyecek kişi müşteriyse müşterinin dilinde seçin. {{ui:Preview}} sözcükleri bu bilgisayarın kendi sesiyle oynatır ve altyazı olarak gösterir; yürüyüş her oynatıldığında da aynısı olur. {{ui:Save with the walk}} anlatımı yürüyüşle birlikte IFC içinde tutar.

Bağlı kendi asistanınız anlatımı sizin için yazabilir: yürüyüşe ve kaydedilmiş görünümlere bakmasını isteyin; belirttiğiniz dilde satırları tek bir geri alma adımı olarak ayarlar.

Render edilen videonun kendi sesi yoktur, çünkü bir tarayıcı kendi sesini kaydedemez. Altyazıları (`.srt` veya `.vtt`) kaydedin ve video oynatıcınızda veya düzenleyicinizde videoya ekleyin. Seçebileceğiniz sesler bilgisayara bağlıdır; kurulu sesi olmayan bir dil yine de altyazı alır.

## Dosyada

Görünümler ve yürüyüşler IFC içinde projede `CadCraft_Views` özellik kümesi olarak tutulur: diğer programların yok saydığı düz IFC. İlk modelin koordinatlarındadır; bu yüzden model yeniden yüklendikten veya başka bir model eklendikten sonra da yerinde kalırlar.

:::tip
Kaydedilmiş bir görünümden resim render etmek için görünüme gidin, sonra [Render](topic:render) tıklayın.
:::
