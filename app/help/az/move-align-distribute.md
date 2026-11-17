---
title: Bina elementlərini sürüşdürün, kopyalayın, düzləşdirin və bərabər yayın
summary: Divarları, döşəmələri, sütunları və yerləşdirilmiş elementləri baza nöqtəsi və ikinci nöqtə və ya yazılmış məsafə ilə sürüşdürün, hərəkət edərkən kopyalayın və planda və ya 3D-də seçimdən düzləşdirin və ya bərabər yayın.
keywords: sürüşdür, kopyala, düzləşdir, bərabər yay, boşluq, ofset, baza nöqtəsi, yerdəyişmə, divarlar, sütunlar, döşəmələr, MOVE, ALIGN, DISTRIBUTE, Shift+M
from: 75890e37
---

## Nə edəcəksiniz

Divarı, sütunu, döşəməni və ya yerləşdirilmiş kitabxana elementini yeni yerə keçirin, nüsxələrini yaradın və ya bir neçəsini yenidən çəkmədən düzləşdirin.

## Adlar və klavişlər

Əmrlər {{ui:Sürüşdür}}, {{ui:Düzləşdir}} və {{ui:Bərabər yay}} adlanır və əmr sətirində `MOVE`, `ALIGN` və `DISTRIBUTE` yaza bilərsiniz, CadCraft çertyoj tətbiqindəki kimi. Bir fərq: BimCraft-da {{key:M}} Ölçmədir, ona görə Sürüşdürmənin öz klavişi var: {{key:Shift+M}}. Alətlər {{ui:Versiya}} menyusundadır.

## Sürüşdürmə

1. Planda və ya 3D görünüşdə nə sürüşdürüləcəyini seçin. Divarlar, döşəmələr, sütunlar və yerləşdirilmiş kitabxana elementləri bir seçimdə ola bilər.
2. {{key:Shift+M}} basın və ya {{ui:Sürüşdür}} seçin.
3. Baza nöqtəsinə, sonra ikinci nöqtəyə klikləyin. Və ya baza nöqtəsindən sonra məsafə yazın və {{key:Enter}} basın: element baza nöqtəsindən göstəricinin istiqamətində gedir. Həmçinin `dx,dy` (və ya `@dx,dy`) və ya `uzunluq<bucaq` yaza bilərsiniz.
4. {{key:C}} basaraq {{ui:Kopyala}} açın: bu zaman hər sürüşdürmə nüsxə yaradır və növbəti üçün hazır qalır. Dayandırmaq üçün {{key:Esc}} basın.

Hər iki nöqtəyə 3D görünüşdə də klikləmək olar: {{ui:Sürüşdür}} aktiv olanda göstərici səviyyənin döşəmə hündürlüyünə çatır, ona görə orada klik planın nöqtəsidir. Başqa element seçmək üçün klik zamanı {{key:Shift}} basılı saxlayın. Plan, Üst, Ön və ya Yan görünüşü istədiyiniz kimi istifadə edin: nöqtələr həmişə həmin səviyyədə olur.

Divar öz qapı və pəncərələrini özü ilə aparır. Çəkilmiş döşəmə öz açıqlarını aparır. Divarları izləyən otaqlar, döşəmələr və tavanlar yenilənir. Sürüşdürülən divara birləşən divarlar olduğu yerdə qalır.

Hər sürüşdürmə bir dəyişiklikdir: bir {{key:Mod+Z}} onu geri qaytarır və Canlı TeamWork sessiyasında hər kəsə ötürülür. Yerləşdirilmiş kitabxana elementini bu yolla kopyalamaq olmaz; {{ui:Redaktə}} › {{ui:Kopyala}} və {{ui:Yapışdır}} istifadə edin.

## Düzləşdirmə

İki və ya daha çox element seçin, {{ui:Düzləşdir}} seçin, sonra tərəfi (sol, mərkəz, sağ, üst, orta və ya alt) və nəyə düzləşdiriləcəyini: seçilmiş dəst, birinci seçilən, sonuncu seçilən və ya klik etdiyiniz nöqtə. Paneldə {{ui:Düzləşdir}} basın.

## Bərabər yay

Üç və ya daha çox element seçin, {{ui:Bərabər yay}} seçin, sonra istiqaməti (eninə və ya aşağı) və aralığı: aralarındakı bərabər boşluqlar və ya bərabər mərkəzlər. Uçlardakı iki element olduğu yerdə qalır.

Düzləşdirmə və ya bərabər yayma ilə sürüşdürülən divarlar sürüşdürmədə olduğu kimi birləşmələrini saxlayır: sürüşdürülən divara birləşən divar öz xətti boyunca ucunu sürüşdürərək birləşmədə qalır, ona dirənən arakəsmələr onunla birlikdə gedir, və hər ikisi sürüşdürülən birləşmiş iki divar yeni xətlərinin kəsişdiyi künc nöqtəsini saxlayır. Otaqlar bağlı qalır. Bu, **Dəyişikliklər** bölməsində bir addımdır.
