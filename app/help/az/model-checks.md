---
title: Modeli ümumi problemlərə görə yoxlayın
summary: Lazım olan xüsusiyyəti çatışmayan elementləri, iki dəfə istifadə olunmuş GlobalId-ləri, heç bir mərtəbədə olmayan elementləri və bir-birinin üstünə yığılmış nüsxələri tapın.
keywords: yoxla, model yoxlaması, doğrulama, qa, keyfiyyət, çatışmayan xüsusiyyət, tələb olunan, təkrar, GlobalId, guid, mərtəbə, yığılmış, üst-üstə düşmə
from: 4d835513
---

## Nə edəcəksiniz

Modeli təqdim etməzdən əvvəl ona baxın: cədvəlləri, kəmiyyətləri və başqalarının proqramlarını pozan problemlərə.

## Addımlar

1. IFC modelini açın.
2. Sol paneldə {{ui:Model yoxlamaları}} açın.
3. {{ui:Tələb olunan xüsusiyyətlər}} altında artıq bir qayda var (istənilən sinif, Name). Onun sinfini (və ya {{ui:İstənilən sinif}}) və xüsusiyyətini dəyişin, ya da başqa qayda üçün {{ui:Xüsusiyyət əlavə et}} klikləyin; x işarəsi bir qaydanı silir. Element xüsusiyyəti olmadıqda və ya dəyəri boş olduqda qaydanı pozur. Qaydalar bu brauzerdə hər model üçün saxlanılır.
4. {{ui:Yoxlamaları başlat}} klikləyin.
5. Nəticəyə klikləyin: həmin elementlər seçilir və onlara yaxınlaşılır.

## Nəticədə nə görməlisiniz

- **Tələb olunan xüsusiyyət çatışmır**: hər qayda üçün dəyəri olmayan elementlər.
- **GlobalId iki dəfə istifadə olunub**: eyni GlobalId-ni paylaşan elementlər. Digər proqramlar onları bir element kimi qəbul edir.
- **Heç bir mərtəbədə deyil**: heç bir mərtəbənin əhatə etmədiyi formaya malik elementlər.
- **Nüsxələr bir-birinin üstündədir**: eyni sinif və tipdə, eyni formalı və eyni yerdə olan elementlər; kəmiyyətlərdə ikiqat sayılırlar.

Nəticələrdəki hər sətir düymədir: ona klikləyin və həmin elementlər seçilib onlara yaxınlaşılsın. Hər yoxlamanın yalnız ilk 50 qrupu siyahıya alınır. Eyni tapıntılar {{ui:Problemlər}} panelində də görünür.

## Bilmək yaxşıdır

- Bir neçə model açıq olduqda yoxlamalar aktiv modelə baxır. Bax: [Bir neçə IFC modelini birlikdə baxın](topic:several-models).
- Dəyişiklik etdikdən sonra yoxlamaları yenidən işə salın.
- {{ui:Problemlər}} panelində problemin mətnindəki uzunluqlar, sahələr və həcmlər alətlər panelində seçilmiş {{ui:Vahidlər}} ilə uyğun gəlir ("800 mm" qapı futla və düymlə 2'-7 1/2" kimi oxunur); vahidi dəyişsəniz, panel onları yenidən ifadə edir.

## Növbəti

- [Modelin auditi: otaqlar, etiketlər, LOD, toqquşmalar və interfeyslər](topic:audit-the-model)
- [Elementləri sinifə, ada və ya xüsusiyyətə görə tapın](topic:find)
- [Elementləri silin, kəsin, kopyalayın və yapışdırın](topic:copy-paste)
