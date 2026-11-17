---
title: Qatlarla və vərəqlərlə işləyin
summary: Çertyoj qatlarını açıb-söndürün, model məkanı ilə vərəqlər arasında keçin və vərəqlərin görünüş pəncərələri vasitəsilə modeli necə göstərdiyini başa düşün.
keywords: qatlar, qatı aç-söndür, dondurma, açma, vərəqlər, maketlər, kağız məkanı, nişanlar, görünüş pəncərələri, qat meneceri, la
from: a9a16b53
---

## Nə edəcəksiniz

Qatları söndürməklə məşğul çertyojun görünüşünü təmizləyin, sonra isə onun vərəqlərinə bir-bir baxın.

## Addımlar: qatlar

1. DWG və ya DXF çertyoj açın.
2. Solda {{ui:Layers}} siyahısını tapın. Hər qatın işarə qutusu, rəng nümunəsi və adı var.
3. Qatın işarəsini çıxarın ki, onun üzərindəki hər şey gizlənsin.
4. Bütün qatları gizlətmək üçün {{ui:All off}} klikləyin.
5. Yalnız görmək istədiyiniz qatları işarələyin.
6. Hər şeyi yenidən göstərmək üçün {{ui:All on}} klikləyin.

## Nəyi görməlisiniz

Qatlar eyni anda yox olur və yenidən görünür: həm {{ui:Model}}-də, həm də hər vərəqdə. Çertyojda özü söndürülmüş və ya dondurulmuş qatlar {{ui:Layers}} siyahısında işarəsiz başlayır.

## Addımlar: vərəqlər

1. Çertyojun üstündəki nişanlar sırasına baxın: {{ui:Model}}, sonra isə hər vərəq öz adı ilə.
2. Vərəq nişanına klikləyin.
3. Vərəqə baxın: kağız tünd masanın üzərində durur və hər görünüş pəncərəsi modelin öz hissəsini öz miqyası və bucağı ilə göstərir.
4. Detalı oxumaq üçün görünüş pəncərəsinə yaxınlaşın. Siz görünüş pəncərəsini yox, vərəqi miqyaslayırsınız, buna görə bütün vərəq birlikdə hərəkət edir.
5. Bütün vərəqi yenidən görmək üçün {{ui:Fit}} klikləyin və ya ikiqat klikləyin.

## Burada vərəqlər necə işləyir

Vərəq (maket və ya kağız məkanı) başlıq bloku və model məkanına baxan görünüş pəncərələri saxlayır. BimCraft hər görünüş pəncərəsini onun kənarına kəsilmiş, öz miqyası və burulması ilə çəkir və həmin görünüş pəncərəsində dondurulmuş qatları gizlədir. Hər vərəqin ilk görünüş pəncərəsi vərəqin özüdür və ikinci dəfə çəkilmir.

## Tez-tez edilən səhvlər

- **Qat dəyişikliklərinin saxlanacağını gözləmək.** Qat parametrləri yalnız görünüşə təsir edir, başqa fayl açana qədər.
- **Hər görünüş pəncərəsi üçün ayrıca qat nəzarəti gözləmək.** {{ui:Layers}} siyahısı qatı hər yerdə dəyişir. Çertyojun həmin görünüş pəncərəsində dondurduğu qatlar orada donmuş qalır.
- **Qat axtarışı və ya qat vəziyyətləri axtarmaq.** Hələ hazır deyil. Siyahı çertyojdakı sıra ilədir.
- **Görünüş pəncərəsi içində işləmək.** Aktivləşdiriləcək heç nə yoxdur: BimCraft yalnız vərəqi göstərir. Model məkanına birbaşa baxmaq üçün {{ui:Model}} istifadə edin.
