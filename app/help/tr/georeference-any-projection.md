---
title: Herhangi bir projeksiyonla coğrafi referanslama
summary: BimCraft'a bir modelin koordinatlarının hangi harita sisteminde olduğunu söyleyin: tüm EPSG listesinden, herhangi bir UTM dilimi ya da kendi tanımladığınız bir projeksiyondan; bunu Konum, harita katmanları ve nokta bulutları için kullanın.
keywords: projeksiyon, koordinat sistemi, crs, epsg, utm, utm dilimi, özel projeksiyon, proj4, proj dizgisi, prj, wkt, coğrafi referanslama, harita dönüşümü, ifcprojectedcrs, projelerim, enlem, boylam, doğu, kuzey, lambert, gauss-kruger, state plane, ulusal ızgara
from: 6894c1f2
---

Bazı planlar kısa bir listede bulunmayan bir harita sisteminde çizilmiştir: bir UTM dilimi, ulusal bir ızgara ya da birinin metin tanımı olarak yazdığı bir projeksiyon. {{ui:Ölçüm}} › {{ui:Koordinat sistemi…}} modelin hangisini kullandığını söylemenize izin verir.

## Bir model için sistemi seçin

1. Modeli açın, {{ui:Ölçüm}} seçin, sonra {{ui:Koordinat sistemi…}} seçin.
2. Arama kutusuna yazın. Bunların herhangi biri çalışır:
   - bir EPSG numarası: `32633` ya da `EPSG:2277`;
   - bir UTM dilimi: `UTM 33N`, `UTM 20 S`, `NAD83 UTM 15N`, `ETRS89 UTM 32N`;
   - addan sözcükler: `lambert 93`, `mga zone 56`, `texas central`;
   - bir projeksiyon tanımı: `+proj=tmerc +lat_0=0 +lon_0=9 +k=0.9996 +x_0=500000 +y_0=0 +ellps=WGS84 +units=m`, isteğe bağlı olarak önüne bir ad koyun (`Benim ızgaram = +proj=…`);
   - bir `.prj` dosyasının metni ya da {{ui:Bir .prj dosyası yükleyin…}} kullanın.
3. Bir sonuç seçin, sonra {{ui:Bu sistemi kullan}}.

Kaydedilen seçim modelde saklanır (projede `CadCraft_CRS` adlı bir özellik kümesi), böylece model ile birlikte yeniden açılır. Tutmak için modeli kaydedin. {{ui:Modelden kaldır}} dosyanın söylediğine geri döner.

Tanımınız, listelenen bir EPSG sistemiyle aynı koordinatları veriyorsa BimCraft bunu söyler ve o kodu kullanır; listelenen birden çok sistem aynı matematiği paylaşıyorsa diğerlerini de adlandırır.

## Projelerim

Yapıştırdığınız bir tanım ya da yüklediğiniz bir `.prj`, {{ui:Benim projeksiyonlarımda tut}} ile saklanabilir. Liste bu cihazdadır (bu tarayıcıda) ve seçiciyi bir sonraki açışınızda önerilir.

## Bunu kullananlar

- {{ui:Ölçüm}} › {{ui:Konum}}, seçilen bir noktayı modelin sistemi üzerinden enleme ve boylama çevirir. Dosya, EPSG kodu olmadan harita sistemini adlandırdığında eskiden bir notla durulurdu; kaydedilmiş bir seçimle cevap verir.
- Modelin altındaki harita katmanları aynı sistemi kullanır. Başka bir sistemdeki bir nokta bulutu ya da arazi dosyası modelinkine dönüştürülmesi önerilir (aşağıya bakın).
- {{ui:Ayarlar}} › {{ui:BimCraft}} › {{ui:Konum}} › {{ui:Başka bir sistem seçin…}}, {{ui:Konum}} tarafından ayrıca bildirilenleri ayarlar: listelenen herhangi bir coğrafi sistemdeki enlem ve boylam ya da herhangi bir projeksiyonlu sistemdeki doğu ve kuzey, modelin kendi değerlerinin yanında.

## Henüz haritada olmayan bir model

Dosyada harita dönüşümü yoksa bir sistem seçmek {{ui:Bu modeli haritaya yerleştirin}} penceresini açar. Ayrıca {{ui:Ölçüm}} › {{ui:Harita başlangıcı…}} ile de açabilirsiniz.

1. Modelin başlangıcını sistemde doğu ve kuzey olarak verin ya da bir enlem ve boylam yazıp {{ui:Doğu ve kuzey değerlerine dönüştür}} seçin.
2. Izgara kuzeyine dönme açısını (derece, saat yönünün tersine; 0, modelin Y ekseninin ızgara kuzeyine baktığı anlamına gelir) ve başlangıcın yüksekliğini verin.
3. Ölçek, modelle harita arasındaki birim farkından başlar (metre ızgarada milimetre modeli için 0.001). Yalnızca birleşik bir zemin-ızgara faktörü için değiştirin.
4. {{ui:Haritaya yerleştir}} seçin. Tek bir geri alma adımı bir IfcProjectedCRS ve bir IfcMapConversion (IFC4) yazar. Model kendisi hareket etmez.

Bir IFC2X3 dosyasında bu iki varlıktan hiçbiri yoktur. BimCraft aynı sayıları, bu standardın izin verdiği biçimde yazar: projede buildingSMART özellik kümeleri `ePSet_MapConversion` ve `ePSet_ProjectedCRS`, sahanın enlemi ve boylamı ve gerçek kuzey. Pencere bunu söyler. Tutmak için modeli kaydedin.

## Modeli zaten haritada olan bir model

Dosya kendini zaten haritaya yerleştirmişse ve başka bir sistem seçerseniz BimCraft sorar:

- {{ui:Yalnızca Ölçü › Konum'un bildirdiğini değiştir}} dosyanın kendi coğrafi referansını korur ve {{ui:Konum}}, harita katmanları ve nokta bulutları için sizin seçiminizi kullanır (modelin sayıları bu durumda yeni sistemde okunur).
- {{ui:Modeli bu sisteme taşı}} coğrafi referansı yeniden yazar: başlangıç projeksiyondan geçer (doğu, kuzey, yükseklik, dönme ve ölçek) ve IfcProjectedCRS (ad, datum, projeksiyon, dilim, birim) yeniden yazılır, böylece kaydedilen IFC yeni sistemi belirtir. Dünyadaki yer aynı kalır: başlangıç enlemini ve boylamını korur. Modeldeki elemanlar hiç değişmez; yalnızca coğrafi referans değişir.

Pencere, siz seçmeden önce eski ve yeni başlangıcı gösterir. Oraya gidip geri dönmek başlangıcı bir milimetre içinde geri getirir.

## Başka bir sistemdeki nokta bulutları ve arazi

Bir bulut ya da bir ölçüm dosyası kendi sistemini (LAS, LAZ, E57, GeoTIFF) taşır ya da hiç taşımaz. Modelinkinden farklıysa BimCraft {{ui:Modelin sistemine yeniden projeksiyonla dönüştür}} seçeneğini sunar. Noktalar gruplar hâlinde taşınır (çok sayıda ise bir çalışan içinde, böylece sayfa kullanılabilir kalır), bilgisayarınızdaki dosya değiştirilmez ve durum satırı ne yapıldığını söyler. Dosyayı yeniden açarak kendi sistemine dönün. Zaten açık bir bulut için nokta bulutu çubuğundaki {{ui:Modelin sistemine yeniden projeksiyonla dönüştür…}} aynısını yapar.

Dosya hangi sistemi adlandırmıyorsa BimCraft {{ui:Bu dosya hangi sistemde?}} diye sorar: {{ui:Sistemi seçin…}} ile seçin ve yanıt bu cihazda o dosya için hatırlanır. {{ui:Dosyanın kendi sistemini koru}} noktaları olduğu gibi bırakır.

## Bir şey yaklaşık olduğunda

Sorunlar iletişim penceresinde ve Sorunlar panelinde listelenir, asla sessizce değil:

- Sistemin yapıldığı alanın dışındaki bir yer: sayılar çalışır, ama bozulma artar.
- Bir ızgara dosyası gerektiren datum kaymaları (NADCON, NTv2 ve benzerleri) mevcut değildir. Farklı bir datumdaki sistemler, EPSG kaydının listelediği ızgarasız kaymayla taşınır ve sonuç belirtilen doğruluğa yaklaşıktır; mesaj bunu metre cinsinden verir.
- Projeksiyonu yapılamayan bir nokta dışarıda bırakılır ve sayılır; boyut sınırını aşan bir dosya, sınır belirtilerek reddedilir.

:::tip
Harita koordinatları bir harita dönüşümü gerektirir. Dönüşümü olmayan bir dosya {{ui:Harita başlangıcı…}} ile haritaya yerleştirilir.
:::

:::note
Izgara dosyası olmadan datumlar arasında geçiş birkaç metre doğruluğundadır; katalog bildiğinde Konum sonucu ne kadar olduğunu söyler.
:::
