---
title: Əlaqəli çertyojları və şəkilləri tapın
summary: Çertyojun əlaqəli çertyojlarını (xref-lərini) və başlıq bloku şəkillərini onun qovluğunu açmaqla və ya faylları əl ilə əlavə etməklə göstərin.
keywords: xref, xarici istinad, əlaqəli çertyoj, birləşdir, üst-üstə, şəkil, təsvir, loqo, başlıq bloku, itmiş xref, eTransmit, istinad meneceri
from: 5593d4b1
---

## Nə edəcəksiniz

Çertyojunuzu tamamlayın: ona istinad edən çertyojları (xarici istinadlar və ya xref-lər) və istifadə etdiyi şəkilləri, məsələn, başlıq blokundakı loqonu göstərin.

## Asan yol: qovluğu açın

1. {{ui:Open a folder}} klikləyin və çertyojun və onun əlaqələrinin olduğu qovluğu seçin, məsələn, layihənin bütün `Cad` qovluğunu.
2. Qovluq hesabatında **CAD çertyojları** bölməsinə baxın.
3. Çertyoja klikləyin.
4. Sağdakı {{ui:Properties}} panelində **Əlaqəli çertyojlar** və **Şəkillər** altına baxın.

BimCraft hər əlaqəli çertyojun adına görə ("*ad*.dwg") axtarır: əvvəlcə çertyojun olduğu qovluqda, sonra isə açdığınız qovluğun istənilən yerində. Şəkillər də eyni qaydada tapılır, həmçinin oxşar adla: eTransmit və ya Revit ixracı çox vaxt layihənin adını önə əlavə edir, belə ki `logo.png` `Tower-logo-5425051.png` kimi tapılır.

## Digər yol: faylları əl ilə əlavə edin

1. Çertyojun özünü tək açın.
2. Sağda, **Əlaqəli çertyojlar** altında {{ui:Add linked drawings…}} klikləyin. **Şəkillər** altında düymə {{ui:Add pictures…}} adlanır; hər ikisi eyni seçici pəncərəni açır.
3. Əlaqəli `.dwg` faylları və şəkil fayllarını seçin. Bir neçəsini eyni anda seçə bilərsiniz.
4. BimCraft çertyoju onlarla yenidən açarkən gözləyin.

## Nəyi görməlisiniz

Hər əlaqəli çertyoj və şəkil etiketlə siyahıya salınır:

| Etiket | Deməkdir |
|---|---|
| **Göstərilir** | Tapılıb və çəkilib. Altındakı yol haradan gəldiyini göstərir, və ya "siz əlavə etdiniz". |
| **Göstərilir, oxşar ad** | Oxşar adla tapılmış şəkil. Doğru olduğunu yoxlayın. |
| **Tapılmadı** | Qovluqda və ya əlavə etdiyiniz fayllarda yoxdur. İtmiş şəkil boş çərçivə kimi görünür. |
| **TIFF brauzerdə göstərilə bilmir** | Şəkil brauzerlərin çəkmədiyi TIFF faylıdır. Eyni adla PNG kimi saxlayın və əlavə edin. |
| **Oxuna bilmədi** | Fayl tapıldı, lakin şəkil kimi açıla bilmədi. |

Solda {{ui:Drawing}} paneli əlaqəli çertyojlar üçün "*n* / *m* yüklənib" göstərir. Əlaqəli çertyojların qatları {{ui:Layers}} siyahısında "*əlaqə adı*|*qat*" kimi görünür.

## Tez-tez edilən səhvlər

- **Yalnız çertyojun açılması.** "Bu çertyoj əlaqəli çertyojlar əlavə edilənə qədər yalnız öz məzmununu göstərir. Bütün layihə qovluğunu açsanız, onları avtomatik tapır."
- **Həddindən kiçik qovluğun açılması.** Əlaqələr qardaş qovluqda yerləşirsə, onun yerinə üst qovluğu açın.
- **Adı dəyişdirilmiş əlaqələr.** BimCraft əlaqəli çertyojları ada görə uyğunlaşdırır. Diskdə adı dəyişdirilmiş əlaqə tapılmır; onu əl ilə əlavə edin.
- **Əlaqələrin əlaqələri.** BimCraft açıq çertyojun istinad etdiyi çertyojları yükləyir. Onların içində əlaqələnmiş çertyojlar axtarılmır, buna görə bu versiyada adətən göstərilmirlər.
