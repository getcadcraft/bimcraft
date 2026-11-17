---
title: Model qrupları
summary: Seçilmiş elementləri adlı bir qrupa çevirin, qrupu başqa yerdə yenidən yerləşdirin və bir nüsxəni dəyişməklə hamısını dəyişin.
keywords: qrup, model qrupu, qruplaşdırma, qrupu ləğv et, nümunə, kopya, təkrar, tipik vahid, bölmə, mənzil, qrupu redaktə et, IfcGroup
from: 121c5027
---

## Nə edəcəksiniz

Tipik bir bölməni qruplaşdırın, bir neçə dəfə yerləşdirin və bir nüsxəni dəyişməklə hər nüsxəni dəyişin.

## Alətin yeri

- Lent tərtibləri: {{ui:Memarlıq}} › **Model** › {{ui:Model qrupu}}.
- Klassik tərtib: Çək paneli › {{ui:Otaqlar}} menyusu › Model qrupu.

## Addımlar

1. Seç aləti ilə elementləri seçin: birinə klikləyin, qalanlarına Ctrl+klik və ya Shift+klik edin.
2. {{ui:Model qrupu}} seçin. Onlar dərhal qrupa çevrilir. Adlandırmaq üçün əvvəlcə sətirdə {{ui:Qrupun adı}} yazın, ya da sonradan yazaraq adını dəyişin.
3. {{ui:Başqasını yerləşdir}} basın və nüsxənin dayanacağı yerə klikləyin: onun sol-aşağı küncü klikləndiyi yerə gedir.
4. İstənilən nüsxəni dəyişin: divar ucunu sürüşdürün, qapının ölçüsünü dəyişin, sütunu silin. Qrupun hər digər nüsxəsi eyni addımda dəyişir, və bir Geri qaytar hamısını geri qaytarır.
5. {{ui:Model qrupu}} əlinizdə olduqda elementə klik onun bütün qrupunu seçir.

## Digər işlər

- {{ui:Seçilmişi əlavə et}}: sonuncu seçdiyiniz qrupa daha elementlər əlavə edin.
- {{ui:Qrupu ləğv et}}: bu nüsxə yenidən adi elementlər olur. Digər nüsxələr qrup olaraq qalır.
- {{ui:Sürüşdür}} ilə bütün nüsxəni sürüşdürün: bu eyni qrupdur, yeni yerdədir; digərləri hərəkət etmir.
- Nüsxənin elementlərini silin və o nüsxə yox olur.

## Qrupda nə ola bilər

Qapı və pəncərələri ilə divarlar, sütunlar və çəkilmiş döşəmələr yenidən yerləşdirilə və eyni saxlanıla bilər. Qrup başqa elementləri də saxlaya bilər, lakin o zaman onu hələ yenidən yerləşdirmək olmaz; sətir səbəbini göstərir.

Nüsxələr yalnız sürüşdürülür, fırlanmır və güzgü əksi alınmır.

## IFC-də

Qrup IfcGroup-dur, üzvlərinə (adi divar, sütun və döşəmə olaraq qalan) IfcRelAssignsToGroup ilə bağlıdır. Bir qrupun hər nüsxəsi eyni təyinetmə id-ni daşıyır.

## Hələ hazır deyil

- Nüsxəni fırlatmaq və ya güzgü əksi almaq.
- Yenidən yerləşdirilən qrupda pilləkənlər, damlar, otaq döşəmələri və kitabxana elementləri.
- Divarın profili, meyli və divar açıqları nüsxələrə keçmir.
- Qruplar içində qruplar.

Bax da: [Sürüşdür, düzləşdir və bərabər yay](topic:move-align-distribute).
