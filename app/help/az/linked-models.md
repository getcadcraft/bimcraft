---
title: Koordinasiya üçün digər modelləri əlaqələndirin
summary: Başqa IFC modelini yanınızda istinad kimi göstərin (heç vaxt birləşdirilmədən), onu ümumi koordinatlar, xəritə koordinatları və ya iki nöqtə ilə yerləşdirin, çəkərkən ona tutulun və faylı dəyişəndə yenidən yükləyin.
keywords: əlaqə, əlaqəli model, istinad, xref, koordinasiya, federasiya, konstruksiya, MEP, məsləhətçi, ümumi koordinatlar, planalma, xəritə koordinatları, yenidən yüklə, boşalt, sənəd istinadı, IfcDocumentReference
from: 3e0f1eab
---

## Nə edəcəksiniz

Məsləhətçinin modelinə qarşı çəkin (konstruksiya, xidmətlər, mövcud bina), öz faylınıza heç nə köçürmədən.

**Əlaqəli model** 3D görünüşdə göstərilir və planlarda kəsilir, lakin heç vaxt dəyişdirilmir və modelinizə heç vaxt yadda saxlanılmır. Modeliniz yalnız əlaqəni saxlayır: faylın adını və onun harada yerləşdiyini.

## Model əlaqələndirin

1. Sol panelin {{ui:Əlaqəli modellər}} bölməsində {{ui:Model əlaqələndir…}} düyməsinə basın və IFC faylını seçin. Dərhal görünür, sətirində **Göstərilir** yazılır.
2. {{ui:Yerləşmə}} bölməsində onun yerini seçin:
   - **Ümumi koordinatlar** (başlanğıc üçün): koordinatları sizinkidir, sanki hər iki model eyni başlanğıcdan qurulub.
   - **Xəritə koordinatları**: hər iki faylın xəritə koordinatları onları düzləşdirir (hər ikisində xəritə çevrilməsi olmalıdır; BimCraft birində yoxdursa bunu bildirir).
   - **İki nöqtə ilə…**: əlaqəli modeldə bir nöqtəyə, sonra onun sizin modelinizdə yerinə klik edin; sonra ikinci cüt. Əlaqə (şaquli ox ətrafında) uyğunlaşdırmaq üçün köçürülür və fırladılır.
3. Hər əlaqə və yerləşmə dəyişikliyi bir addımdır: {{key:Mod+Z}} onu geri qaytarır.

## Onunla işləyin

- Planlar əlaqəli modeli səviyyənin kəsmə hündürlüyündə incə xətlər kimi göstərir; {{ui:Divar}} aləti və digər çəkmə alətləri onun künclərinə və kənarlarına tutulur.
- 3D görünüşdə onun elementlərini seçib xüsusiyyətlərini oxuya bilərsiniz; əlaqəli model redaktə etdiyiniz model deyil, buna görə {{ui:Modellər}} siyahısındakı radio düyməsi söndürülüdür.
- **Fayl dəyişdi?** Brauzer faylı izləyə bildikdə (fayl seçicisi ilə açılmış fayl və ya Studio-da), BimCraft fayl yenidən saxlanıldıqdan bir neçə saniyə sonra əlaqəni özü yenidən yükləyir və bunu bildirir. Əks halda {{ui:Yenidən yüklə}} düyməsinə basın.
- {{ui:Boşalt}} onu gizlədir və yaddaşı azad edir; əlaqə modelinizdə qalır. {{ui:Yüklə…}} onu yenidən göstərir (faylı siz seçirsiniz: brauzer faylı adına görə özü aça bilmir).
- × əlaqəni modelinizdən silir.

## Nəyi görməlisiniz

- IFC faylınızda: hər əlaqə üçün IfcDocumentReference (faylın adı), layihəyə bağlı, və yerləşməsi layihənin CadCraft_Links xüsusiyyət dəstindədir. Modelinizi yenidən açanda əlaqələr yüklənənə qədər siyahıda **Yüklənməyib** kimi görünür.

:::note
Toqquşma yoxlamaları, Müqayisə və Axtar yüklənmiş əlaqəni digər açıq model kimi istifadə edə bilər: bax [Bir neçə IFC modelini birlikdə göstərin](topic:several-models).
:::
