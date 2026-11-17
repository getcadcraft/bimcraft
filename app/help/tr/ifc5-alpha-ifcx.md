---
title: IFC5 alfa (IFCX) dosyalarını açın ve dışa aktarın
summary: IFC5 alfa dosya biçimi (.ifcx) için deneysel bir seçenek - katmanlarıyla bir dosya açın, okumanın kontrol edemediği şeyleri görün ve açık modelleri dışa aktarın. Biçim hâlâ değiştiği için önce okuyun.
keywords: ifc5, ifcx, alfa, buildingsmart, json, katmanlar, şema, deneysel, miktarlar, qto, dışa aktarma, içe aktarma
from: cffe1669
---

IFC5 alfa ({{ui:.ifcx}} uzantılı dosya), buildingSMART'ın hâlâ tasarladığı bir dosya biçimidir. Nihai değildir: dosyalar ve bizim bunları okumamız değişebilir. Bu yüzden bu bir deneysel seçenektir ve okuma önce gelir.

## Etkinleştirin

1. {{ui:Ayarlar}} öğesini, ardından BimCraft sekmesinin {{ui:IFC5 alfa (IFCX)}} bölümünü seçin.
2. {{ui:IFC5 alfa (IFCX) - biçim hâlâ değişiyor; önce okuyun}} kutusunu işaretleyin.

Varsayılan olarak kapalıdır. Kapalıyken bir .ifcx dosyası, bu sayfayı işaret eden bir cümleyle reddedilir. {{ui:IFC5 alfa (.ifcx) aç…}} ve {{ui:IFC5 alfa}} dışa aktarma düğmesi, seçenek açıkken görünür.

## Açın

- {{ui:Dosya veya klasör aç}} ile bir .ifcx dosyası seçin (açık modelin yerini alır; düzenlemelerle ilgili olağan sorudan sonra), veya
- {{ui:IFC5 alfa (.ifcx) aç…}} öğesini seçin ve birkaç dosyayı birlikte seçin: dosya, katmanları ve içe aktardığı şema dosyaları. Zaten açık bir model varken dosya **yanına eklenir**; model listesindeki x işareti onu yeniden kaldırır, bu da geri almadır.

Bir IFCX dosyası düğümleri listeler (bir yol, çocukları, miras aldıkları, öznitelikleri). Birden çok dosya aynı düğümü tarif edebilir: daha sonraki bir dosya (bir katman), önceki bir dosyanın özniteliklerini geçersiz kılar ve boş (null) bir çocuk, bir çocuğu kaldırır. BimCraft bunları birleştirir, sonra sonucu; adları, sınıfları, özellikleri, miktarları, renkleri ve ağları olan küçük bir IFC4 modeli olarak çizer: proje, saha, bina, katlar ve öğeler.

Ağdan hiçbir şey alınmaz. Bir dosyanın içe aktardığı şema dosyaları (örneğin `ifc@v5a.ifcx`) yalnızca dosyayla birlikte seçtiyseniz kullanılır; aksi hâlde rapor bunu söyler ve öznitelikler tür denetimi olmadan okunur.

### Rapor

Açtıktan sonra bir rapor, okumanın bulduklarını listeler: şemasıyla uyuşmayan veriler, verilmeyen şema dosyaları, burada bir IFC anlamı olmayan öznitelikler. Eşlemesi olmayan öznitelikler modelde **tutulur**, atılmaz ve dışa aktarımda geri yazılır.

## Neyin neye dönüştüğü

| IFCX dosyasında | BimCraft'ta |
|---|---|
| Bir IFC sınıfı olan bir düğüm (proje, saha, bina, kat, duvar …) | Eşleşen IFC4 öğesi; bu okumanın bilmediği bir sınıf, bir bina öğesi vekiline (proxy) dönüşür |
| Düğümün üst öğesi altında sahip olduğu ad | Öğe adı |
| Bir miktar türü olan öznitelikler (Length, Area, Volume, Mass …) | `Qto_IFCX` adlı bir IFC4 miktar kümesi (IFC4 miktarları IFC4 `Qto_*` kümeleri olarak kalır) |
| Diğer özellik öznitelikleri | `Pset_IFCX` adlı bir özellik kümesi |
| Ağ ve dönüşüm öznitelikleri | Öğenin üçgenleri ve yerleşimi; görünmez ağlar çizilmez |
| Renk, opaklık, malzeme, sınıflandırma | Öğenin yüzey stili, malzemesi ve sınıflandırması |

Birimler metre olarak alınır, Z yukarı bakar: alfa, birimlerin daha sonra belgeleneceğini söyler.

## Dışa aktarma

Araç çubuğunda {{ui:IFC5 alfa}} öğesini seçin, notu okuyun, sonra {{ui:.ifcx dışa aktar}} öğesine tıklayın. Dosya kendi başlığımızı taşır (yazar CadCraft, sürüm ifcx_alpha) ve kendi içinde alfa biçimi olduğunu söyler. Her model kendi dosya koordinatlarında, metre cinsinden yazılır; adlar, sınıflar, özellik kümeleri, miktarlar (türleriyle öznitelikler olarak), renkler ve üçgenlerle birlikte. Katmanlar ve miras düzleştirilmiş olarak yazılır. Dosyayı gönderdiğiniz programda kontrol edin.

## Sınırlar

- Eğri geometri (eğriler, yüzeyler) okunmaz: yalnızca üçgen ağlar.
- Bir duvarın içine yerleşik kapılar ve pencereler kata yerleştirilir; geldikleri duvara bağlanmaz.
- IFC4 `Qto_*` küme adları, kendi öznitelik grupları olarak tutulur (`cadcraft::qto::…`); standart alfa şeması yalnızca birkaç miktar adı içerir.
- Biçim bizim altımızda değişebilir; bugün yapılan bir dosya yarın okunamayabilir.
