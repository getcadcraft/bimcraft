---
title: Kendi nesnelerinizi ve aile dosyalarınızı Kütüphane'ye getirin
summary: .rfa aile dosyalarını ve IFC, DWG, DXF, glTF ya da OBJ dosyalarını Kütüphane sekmesinde okuyun, bunları her kütüphane öğesi gibi yerleştirin ve yalnızca sizin görebildiğiniz özel bir liste olan Nesnelerim'de saklayın.
keywords: rfa, aile, aileler, aile kütüphanesi, kendi nesneleri, nesnelerim, özel nesneler, özel kütüphane, nesne içe aktar, üretici içeriği, bim nesneleri, ifc nesnesi, gltf, obj, dwg bloğu, sakla, değiştir, taşı
from: 886261f8
---

## Ne yapacaksınız

Zaten sahip olduğunuz nesneleri BimCraft'a getirin: Revit'ten bir aile kütüphanesi, bir üreticinin IFC ya da DWG indirmesi, başka bir modelleyiciden bir örgü. Dosyayı {{ui:Kütüphane}} sekmesinde okursunuz, nesneyi modelinize uygun bir IFC öğesi olarak yerleştirirsiniz ve sonra tekrar kullanmak isterseniz {{ui:Nesnelerim}} içinde saklarsınız.

## Adımlar

1. Bir IFC modeli açın ya da yeni bir bina başlatın.
2. {{ui:Özellikler}} yanındaki {{ui:Kütüphane}} sekmesine tıklayın.
3. {{ui:Dosyalar…}} düğmesine, sonra {{ui:Dosya seçin…}} düğmesine tıklayın. Tek bir dosya ya da aynı anda birkaç dosya seçin: `.rfa`, `.ifc`, `.dwg`, `.dxf`, `.glb`, `.gltf`, `.obj` ya da `.csv`. Ya da bir klasörün tamamını ve içindeki klasörleri okumak için {{ui:Bir klasör seçin…}} düğmesine tıklayın (tek seferde en fazla 200 dosya).
4. Neyin okunduğunu görmek için bir karta tıklayın: plan önizlemesi, ad, üretici ve model, boyutlar ve notlar.
5. Yerleştirmek için {{ui:Plana yerleştir}} ya da {{ui:Modele yerleştir}} düğmesine tıklayın.
6. Nesneyi başka projelerde yeniden kullanmak için {{ui:Nesnelerimde sakla}} düğmesine tıklayın. Birden fazla dosya okunmuşsa, {{ui:Tümünü nesnelerimde sakla}} hepsini tek seferde saklar.
7. Daha sonra bulmak için Kütüphane sekmesinde {{ui:Nesnelerim}} düğmesine tıklayın. Diğer kütüphane öğeleri gibi yerleştirilir, değiştirilir ve güncellenir.

Dosyalar bu sekmede okunur. {{ui:Nesnelerimde sakla}} seçeneğini seçene kadar hiçbir şey yüklenmez.

## Her dosya türünden ne okunur

| Dosya | Ne elde edersiniz |
|---|---|
| IFC | Her öğe türü, gerçek 3B şekliyle, IFC sınıfı ve özellik kümeleriyle bir nesne olarak |
| glTF, GLB, OBJ | Gerçek 3B şekli bir örgü olarak taşıyan tek bir nesne. Önce birimleri ve yukarı yönü ayarlayın. |
| DWG, DXF | Her blok, plan çizimi ve nitelikleriyle bir nesne olarak |
| Aile dosyası (`.rfa`) | Ailenin adı, kategorisi, üreticisi, modeli, parametreleri ve türleri. **3B şekli değildir:** ailenin Genişlik, Derinlik ve Yükseklik değerlerinden bir kutu yerine geçer. |
| CSV | Satır başına bir nesne: ad, boyutlar ve veriler; bir kutu olarak çizilir. |

## Aile dosyaları ve 3B şekilleri

Bir `.rfa` dosyasının içindeki 3B şekil belgelenmemiş bir biçimde saklanır; bu yüzden BimCraft ailenin verilerini okur ve geometrisini tahmin etmez. Kart bunu söyler: "Bu aileden geometri okunmadı; yerine bir kutu konuldu."

Aileyi gerçek şekliyle getirmek için, onu oluşturan programdan (Revit) dışa aktarın:

1. Aileyi ya da içine yerleştirilmiş ailesi olan bir projeyi açın.
2. **Dosya > Dışa aktar > IFC** seçin. [En iyi açılan dışa aktarma ayarları](topic:rvt-to-ifc).
3. BimCraft'ta `.ifc` dosyasını {{ui:Dosyalar…}} ile okuyun. Her aile türü, kendi şekli ve özellik kümeleriyle birlikte ayrı bir nesne olarak gelir.

Birçok üretici, aile dosyasının yanında bir IFC ya da DWG indirmesi sunar. Bunlar doğrudan okunur.

## Aile türleri

Birden fazla türü olan bir aile, {{ui:Varyant}} seçeneğiyle tek bir öğe olarak gelir; her tür için bir varyant vardır. Her varyant, türler arasında farklılık gösteren değerlere sahiptir ve tür bir Genişlik ile bir Derinlik içeriyorsa kendi kutusuna sahiptir. Tek türü olan bir aile, o türün değerleriyle doldurulmuş sade bir öğedir.

Bazı aileler türlerini bir tür kataloğunda tutar: aile dosyasının yanında aynı adı taşıyan bir `.txt` dosyası. İkisini birlikte seçin ya da klasörü seçin; kataloğun satırları varyant olur.

## Gerçek bir şekil üzerinde ailenin verileri

Bir klasörde aynı adı taşıyan bir aile dosyası ile bir IFC, glTF ya da OBJ dosyası varsa (`Chair.rfa` ve `Chair.ifc`), ikisini birlikte seçin ya da klasörü seçin. BimCraft tek bir öğe oluşturur: aile dosyası adı, üreticiyi, modeli, parametreleri ve türleri verir; diğer dosya gerçek 3B şekli verir. Notlar, şeklin hangi dosyadan geldiğini söyler. Her tür için tek bir şekil kullanılır.

Bir aile dosyasında kayıtlı bir resim varsa, öğenin ayrıntıları bu resmi plan çiziminin altında gösterir. Resim yalnızca orada gösterilir; öğeyle birlikte saklanmaz.

## Nesnelerim

{{ui:Nesnelerim}}, Kütüphane'deki kendi özel listenizdir. İçinde ne olduğunu yalnızca siz görebilirsiniz: genel kütüphanede değildir, aramada yer almaz ve ekibinize gösterilmez. Hesabınızı izler; kütüphaneye oturum açtığınızda aynı nesneler başka bir bilgisayarda da bulunur.

- Bir nesneyi saklamak için kütüphaneye oturum açmış olmanız gerekir. Bkz. [Kütüphaneye oturum açın](topic:library-credits).
- Bir nesneyi saklamak, yalnızca o nesneyi hesabınıza gönderir. O zamana kadar nesne bilgisayarınızda kalır.
- {{ui:Nesnelerimden kaldır}} nesneyi listeden çıkarır. Çizimlere yerleştirilmiş kopyalar kalır.
- Bir nesneyi herkesle paylaşmak için, seçtiğiniz bir lisans altında onu bunun yerine genel kütüphaneye yükleyin.

:::note
Nesnelerim henüz test aşamasındadır ve hesabınız için henüz açık olmayabilir. Kaynak eksikse ya da "Nesnelerim bu hesap için henüz açık değil" yazıyorsa, yine de kendi dosyalarınızı {{ui:Dosyalar…}} ile okuyabilir ve yerleştirebilirsiniz; bunlar modelinizin içine kaydedilir.
:::

## Sık yapılan hatalar

- **Bir `.rfa` dosyasından ailenin gerçek şeklini beklemek.** Yalnızca verileri okunur. Şekil için IFC dışa aktarın.
- **Bir yerine iki öğe görmek.** Bir aile ile şekil dosyası yalnızca adları uzantı dışında tam olarak eşleşirse ve aynı klasörde bulunurlarsa birleşir.
- **Bir örgünün bin kat büyük gelmesi ya da yan yatması.** Dosyayı seçmeden önce {{ui:Dosyalar…}} altında {{ui:Dosyanın birimleri}} ve {{ui:Bir örgünün yukarı ekseni}} seçeneklerini ayarlayın.
- **Bir dosyada "Aile verisi yok".** Bu bir projedir (başka bir uzantıyla kaydedilmiş `.rvt`) ya da bir aile şablonudur, aile değildir. Bkz. [Bir proje ya da aile dosyasını okuyun](topic:read-rvt-file).
- **Saklamanıza izin verilmeyen içeriği saklamak.** Bazı ücretli kütüphaneler, kendi hizmetleri dışında kopyalara izin vermez. Kendiniz yapmadığınız içeriğin koşullarını kontrol edin.
