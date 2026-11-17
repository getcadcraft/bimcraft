---
title: "Modeli müşteri IDS'sine göre denetle"
summary: "Size verilen .ids dosyasını yükleyin ve IFC'yi teslim etmeden önce bu şartı karşılamayan her öğeyi Problemler bölümünde görün."
keywords: ids, bilgi teslim şartnamesi, buildingsmart, gereksinimler, teslim, denetim, doğrulama, qa, eir, bep, özellik, sınıflandırma, malzeme, satın alma
from: 7b960222
---

## Ne yapacaksınız

IDS (Information Delivery Specification, bir buildingSMART standardı), bir IFC'nin neleri içermesi gerektiğinin listesidir: hangi sınıflar, hangi değerlerle hangi özellikler, sınıflandırmalar, malzemeler ve öğelerin nerede olması gerektiği. Müşteriler ve kamu ihaleleri işle birlikte bir IDS gönderir. BimCraft açık IFC modelini buna göre denetler ve eksik kalan her öğeyi listeler.

## Adımlar

1. Bir IFC modeli açın.
2. Sol panelde {{ui:Model denetimleri}} altındaki {{ui:Bir IDS'ye göre denetle}} bölümünü açın ya da menü stilinizdeki {{ui:IDS ile denetle…}} seçeneğini seçin.
3. {{ui:.ids dosyası yükle…}} düğmesine tıklayın ve dosyayı seçin. Hiçbir şey yüklenmez.
4. Sonucu okuyun: her şartname {{ui:Geçer}} ya da {{ui:Kalır}} ile ve kaç öğeye uygulandığıyla birlikte.
5. Problemler'i açmak için {{key:Ctrl+Shift+M}} tuşlarına basın ve bir hataya tıklayarak öğeyi seçin ve ona yakınlaşın.

## Ne görmelisiniz

- Her öğe ve eksik kalan her gereksinim için bir uyarı; şartnamenin adı, IDS'nin ne istediği ve öğenin ne sahip olduğu ile birlikte.
- Modelde hiçbir şeyle eşleşmeyen zorunlu bir şartname, kendi başına tek bir uyarıdır.
- Denetim raporu (Problemler'de) IDS ile başlar: başlığı, sürümü, yazarı ve her şartnamenin uygulanabilir, geçen ve kalan sayıları.

## Bilmeniz iyi olacak noktalar

- IFC, IDS'nin kendisini değil yalnızca bir referansını tutar (adı, başlığı, sürümü ve bir karması): müşterinin IDS'si gizli olabilir ve IFC başka kişilere gider. IDS, modelin yanında bu tarayıcıda kalır; bu yüzden kaydedilmiş IFC'yi burada yeniden açtığınızda yeniden denetlenir. IDS'yi yüklemek ya da unutmak, geri alınabilen tek bir adımdır.
- Başka bir bilgisayarda ya da tarayıcıda açıldığında Problemler, IDS'nin bulunamadığını belirten bir not gösterir: yeniden denetlemek için yeniden yükleyin.
- IDS'yi IFC ile birlikte göndermek için, yüklemeden önce Ayarlar'da, BimCraft sekmesinde {{ui:IDS'yi IFC içinde tut}} seçeneğini açın.
- Her düzenleme, geri alma ve yinelemeden kısa bir süre sonra denetim yeniden yapılır.
- Değerler IDS yöntemiyle karşılaştırılır: metin tam olarak (büyük/küçük harf önemlidir), sayılar SI birimlerinde küçük bir toleransla (uzunluklar metre cinsinden, bu yüzden milimetre cinsinden bir model önce dönüştürülür).
- Başka bir IFC sürümü için yazılmış bir şartname (örneğin model IFC4 iken IFC2X3) yine denetlenir; sonuç bunu belirtir.
- IDS dosyasında bir IDS denetiminin işaretleyeceği hatalar varsa, iletişim kutusu bunları listeler; bunların içinde yer aldığı şartnameler kalır.
- Bir hatayı, herhangi bir sorun gibi, bir gerekçeyle kabul edebilirsiniz. Öğenin değerleri aynı kaldığı sürece kabul edilmiş olarak kalır.

- IDS'deki desenler tüm değer olarak okunur. Baştaki `^` ve sondaki `$` da, çoğu IDS dosyasının anlamı gibi, "tüm değer" olarak alınır.

## Sonraki

- [Bir modelde yaygın sorunları denetleyin](topic:model-checks)
- [Bir duvarı ya da kapıyı değiştirin](topic:change-a-wall-or-door)
