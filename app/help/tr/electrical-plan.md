---
title: Elektrik planı
summary: Planda priz, anahtar, lamba, sensör, birleşim kutusu ve panoları CadCraft'ın Elektrik eklentisiyle aynı sembollerle yerleştirin, anahtarları açtıkları lambalara bağlayın ve cihazları ve devreleri listelerde sıralayın.
keywords: elektrik, elektrik planı, priz, çift priz, anahtar, üç yollu anahtar, dimmer, lamba, tavan lambası, gömme lamba, gömme aydınlatma, hareket sensörü, birleşim kutusu, pano, dağıtım panosu, devre, yük, watt, amper, anahtar hattı, cihaz listesi, pano listesi
from: f7de1947
---

## Ne yapacaksınız

Evin elektrik planını modelde çizin: duvarlardaki prizler, anahtarlar ve panolar; tavandaki lambalar ve sensörler. Her cihaz IFC dosyasında etiketi, devresi ve yüküyle birlikte gerçek bir elektrik öğesidir ve anahtarlar açtıkları lambaları hatırlar.

## Cihaz yerleştirme

1. Bir katta {{ui:Derleme}} öğesini açın ve {{ui:Elektrik}} seçeneğini seçin.
2. Cihazı seçin: prizler (güç, veri, telefon, ses-görüntü), anahtarlar ve sensörler (termostat ve zamanlayıcı dahil), lambalar, dedektörler ve alarmlar, bir birleşim kutusu, bir pano ya da bir alt pano.
3. Devreyi biliyorsanız **Devre** alanına yazın (herhangi bir ad olabilir: 1, 2, A-3). **Montaj yüksekliği** alanını boş bırakın; bu cihazın olağan yüksekliği kullanılır.
4. Plana tıklayın. Prizler, anahtarlar ve paneller en yakın duvarın yüzüne, odaya bakacak şekilde yerleşir; lambalar, sensörler ve birleşim kutuları tıkladığınız yerde tavana yerleşir.

Cihazlar yerleştirilirken otomatik olarak etiketlenir: priz için **R**, anahtar için **S**, lamba için **L**, hareket sensörü için **M**, birleşim kutusu için **J**, pano için **P**. Duvardaki cihazlar, duvarı taşıdığınızda onunla birlikte hareket eder.

Resimle gezmeyi mi tercih edersiniz? {{ui:Derleme}} öğesinden **Sembol paleti**ni açın, cihazı adına göre bulun, sık kullandıklarınızı yıldızlayın ve tek tıkla yerleştirin: bkz. [Sembol paleti](topic:symbol-palette).

## Anahtarları lambalara bağlama

1. Bir anahtar (ya da bir hareket sensörü) seçin ve **Özellikler** içinde **Lambaları bağla**'ya tıklayın.
2. Açtığı her lambaya tıklayın. Bağlı bir lambaya yeniden tıklarsanız bağlantısı kaldırılır.
3. {{key:Enter}} tuşuna basın ya da **Bitti**'ye tıklayın.

Plan, anahtardan bağlı olduğu her lambaya kesikli bir eğri çizer. Bir lambanın **Özellikler** bölümünde, onu hangi anahtarların açtığı görünür.

## Cihazın bulunduğu oda

Her cihaz bulunduğu odayı bilir. Duvardaki bir cihaz, baktığı odadadır; tavandaki bir cihaz, altında bulunduğu odadadır. Özellikler **Oda** alanını gösterir ve **Elektrik cihazları** listesinde bir **Oda** sütunu bulunur (numara ve ad, örneğin 101 Mutfak).

Bu bilgi otomatik güncel tutulur: odanın adını ya da numarasını değiştirin, cihazı taşıyın ya da bir duvarı taşıyın; oda aynı adımda izlenir. Bir yapının dış yüzündeki ya da oda olmayan bir alandaki cihaz, odada olmadığını belirtir.

Oda bilgisi ayrıca dosyaya, cihazın `CadCraft_Location` özellik kümesine (Room, RoomNumber, RoomName) yazılır; böylece Bul, Özelliğe göre renklendir ve etiket listesi bunu kullanabilir, başka bir program da kullanabilir. Plan sembolleri ve bir sembole bağlı öğeler aynı kümeyi alır; bkz. [Sembol paleti](topic:symbol-palette).

## Asistanınızın cihazları yerleştirmesine izin verin

Bir asistan bağlıyken (Ayarlar › Asistanlar, düzenlemeye izin verilmiş olarak), cihazları sözle isteyebilirsiniz: "oturma odası duvarları boyunca her 2 m'de bir çift priz koy, yerden 300 mm yukarıda, 3 numaralı devrede" ya da "kapının yanına anahtarıyla birlikte bir tavan lambası ekle". Asistan beş araç kullanır: `devices_add`, `device_change`, `lights_set`, `devices_delete` ve `devices_list`. Bunlar Elektrik aracının oluşturduğu aynı cihazları, aynı duvarlarda ve aynı etiket, devre, yük ve yüksekliklerle oluşturur; her çağrı tek bir geri al adımıdır.

Bir cihaz, Elektrik aracında olmayan bir türü asla alamaz: bilinmeyen bir tür reddedilir ve asistana liste verilir. Bir priz ya da anahtar, bir tıklama gibi, bir duvar yüzüne en fazla 600 mm uzaklıkta olmalıdır; aksi halde çağrı reddedilir ve hiçbir şey yerleştirilmez. Varsayılan yükseklikler milimetredir: priz için 300, anahtar için 1100; tavan cihazı tavandan sarkar.

## Cihazları değiştirme ve listeleme

Bir cihaz seçerek etiketini, devresini, yükünü (watt) ve montaj yüksekliğini değiştirin. Birden fazla seçerek hepsini aynı anda bir devreye koyun. Birini kaldırmak için {{key:Delete}} tuşuna basın; silinen bir lamba, bağlı olduğu anahtarlardan çıkarılır.

{{ui:Listeler}} bölümünde, her cihazı katı, devresi, yükü, yüksekliği ve her anahtarın açtığı lambalarla gösteren **Elektrik cihazları**'nı ya da her devrenin cihazlarını, toplam yükünü ve akımını gösteren **Devreler**'i seçin. İkisi de çizim takımının liste sayfasında da bulunur: bkz. [Görünüşler, kesitler ve sayfalar](topic:sheets).

:::note
Montaj yükseklikleri ve yükler planlama varsayılanlarıdır, tasarım değildir (prizler 16" yukarıda ve 200 W, anahtarlar 48"'de, tavan lambası 60 W). Devreleri elektrikçi ya da mühendis boyutlandırır ve yönetmeliğe uygunluğunu denetler.
:::

:::tip
Semboller, CadCraft'ın Elektrik eklentisinin tesisat planlarında çizdiği sembollerdir; bu nedenle iki uygulamadan gelen bir plan aynı şekilde okunur.
:::
