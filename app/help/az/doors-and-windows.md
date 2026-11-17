---
title: Qapılar və pəncərələr
summary: Çəkilmiş divarlara qapı və pəncərə qoyun: divarı göstərin, açılma istiqamətini və künclərə məsafələri görün, klikləyin; divardakı açılış özü kəsilir.
keywords: qapı, qapılar, pəncərə, pəncərələr, açılış, açılma, menteşə, tərəf, çevir, sürgülü qapı, cib qapısı, qaraj qapısı, cüt qapı, açılan pəncərə, tək asılan, cüt asılan, sürgülü pəncərə, sabit pəncərə, altlıq, üst, qatlanan, şkaf qapısı, fransız qapıları, anbar qapısı, yan şüşəli, giriş qapısı, qabaq pəncərə, panoramik pəncərə, üst pəncərə
from: 4d8ac009
---

## Nə edəcəksiniz

Çəkdiyiniz divarlara qapı və pəncərə qoyun ([Divarları çəkin](topic:draw-walls)). Divarı göstərin, qapı və ya pəncərə harada olacağını, hansı istiqamətdə açılacağını və hər künjdən nə qədər məsafədə olduğunu göstərəcək. Klikləyin, açılış plan üzrə və 3D-də özü divardan kəsilir.

## Qapı qoyun

1. {{ui:Çək}} açıq ikən {{ui:Qapı}} klikləyin (ya da {{key:D}} basın).
2. Növü seçin: **Tək açılan qapı**, **Cüt açılan qapı**, **Sürgülü qapı**, **Cib qapısı**, **Qaraj qapısı**, **Qatlanan şkaf qapısı**, **Fransız qapıları**, **Anbar qapısı (divar üzərində)** və ya **Yan şüşəli giriş qapısı**. Onun adi ölçüsü **W** və **H** sahələrini doldurur; yanındakı ölçü siyahısından başqasını seçin, ya da başqa yazın, məsələn `2'-8"` və ya `800`. Siyahıda bu modelin qapı ailələri də var (bax: [Ailələr və onların ölçüləri](topic:families)).
3. Divarı göstərin. Qapının simvolu göstəricini divar boyunca izləyir və plan üzrə həmin üzün hər ucundan məsafə görünür.
4. Qapı göstəricinin olduğu divar tərəfinə açılır. Menteşələri o biri ucda qoymaq üçün {{key:H}} basın (ya da {{ui:Çevir}} klikləyin).
5. Klikləyin. Qapı yerləşdirilir və alət növbəti üçün açıq qalır. Divarın ortasını göstərin, qapı özü mərkəzə düzülür.

Dəqiq məsafədə qoymaq üçün ölçdüyünüz künjə yaxın divarı göstərin, məsafəni yazın (məsələn `2'` və ya `600`) və {{key:Enter}} basın. Məsafə divar üzünün yaxın ucundan qapının kənarına qədər ölçülür.

## Pəncərə qoyun

1. {{ui:Pəncərə}} klikləyin (ya da {{key:N}} basın).
2. Növü seçin: **Sabit pəncərə**, **Tək asılan pəncərə**, **Cüt asılan pəncərə**, **Açılan pəncərə**, **Sürgülü pəncərə**, **Qabaq pəncərə**, **Panoramik pəncərə** və ya **Üst pəncərə**, və onun **W**, **H** və **Altlıq** (pəncərənin alt hissəsinin döşəmədən yuxarı hündürlüyü).
3. Divarı göstərin və klikləyin, ya da qapılarda olduğu kimi məsafə yazın və {{key:Enter}} basın. Pəncərə divarın xarici tərəfində oturur.

## Köçürün, çevirin, silin

- {{ui:Seç}} açıq ikən qapını və ya pəncərəni divar boyunca sürükləyin. Başqa divara sürükləyin ki, orada köçsün.
- {{key:Delete}} seçilmiş qapıları və pəncərələri silir; divar bağlanır.
- Divarı köçürmək və ya silmək onun içindəkiləri də köçürür və ya silir. Divarın başlanğıcı öz xətti boyunca köçəndə, onun qapıları və pəncərələri yerini saxlayır.
- {{ui:Geri qaytar}} və {{ui:Təkrarla}} hər yerləşdirməni, köçürməni və ya silməni geri alır və yenidən qaytarır.

## Nə rədd olunur

- **Həmin divara sığmır.** Qapı və ya pəncərə divardan enlidir, ya da onun ucundan çıxacaq. Daha qısa en və ya daha uzun divar sınayın.
- **Divardan hündürdür.** Altlıq üstəgəl hündürlük divarın yuxarısından yuxarıdır.

## Nə saxlanılır

Hər qapı və ya pəncərə IFC qapısı və ya pəncərəsidir, ölçüsü, işləmə tərzi (məsələn, tək açılan sola), ölçü növü (ailənin hər ölçüsü üçün bir növ), `Pset_DoorCommon` və ya `Pset_WindowCommon` və baza kəmiyyətləri ilə, divarındakı IFC açılışını doldurur. Divarın xalis yan sahəsi və həcmi açılışı çıxır. Digər BIM proqramları onu divarda qapı kimi açır.

## Bilmək yaxşıdır

- Plan qapıları 90° açılmış, açılma istiqaməti ilə, sürgülü qapıları iki panel kimi, cib qapılarını divara sürüşən kimi, qaraj qapılarını yuxarıda qırıq xətt kimi və pəncərələri çərçivə və şüşə xətləri ilə göstərir.
- En çərçivənin ümumi enidir; qapı qanadı enin iki yan çərçivəsi çıxılmış halıdır.
- Çəkilmiş qapıların və pəncərələrin surətini çıxarmaq hələ qurulmayıb: başqasını qoyun.

## Zirzəmi təcili çıxış pəncərəsi və quyusu

Pəncərə növləri siyahısında **Quyulu zirzəmi təcili çıxış** seçin. O, 36 × 48 düymlük açılan pəncərə kimi başlayır, altlığı səviyyədən 36 düym yuxarıda. Quyu divarın xaricindədir, ən azı 48 düym təmiz en, 36 düym çıxıntı və altlığın 6 düym altında dib. Planda qırıq xətlər, 3D-də üst açıq üç tərəf kimi görünür. Quyu pəncərənin IFC gövdəsinin bir hissəsidir, belə ki pəncərəni saxlamaq, köçürmək, ölçüsünü dəyişmək və ya silmək onu da özü ilə aparır. Ölçü dəyişəndə hər yan çərçivənin yanında ən azı 6 düym saxlanılır.

Bunlar modelləşdirmənin standartlarıdır, təcili çıxış uyğunluq sertifikatı deyil. İstehsalçının faktiki təmiz açılışını, yerli tələbləri, səviyyəni, drenajı və lazım olan hər hansı nərdivanı ayrıca yoxlayın. Quyunun dərinliyi və hündürlüyü əvvəlcədən təyin olunmuş ölçülərdir; onlar relyefi izləmir.
