---
title: Modeli yoxlayın: otaqlar, etiketlər, LOD, toqquşmalar və interfeyslər
summary: Adsız otaqlar, çatışmayan etiketlər, layihə mərhələsinin tələb etdiyi inkişaf səviyyəsindən (LOD) aşağı elementlər, ixtisaslar arasında toqquşmalar və LOD 350 interfeysləri üçün hazır yoxlamaları işə salın. Yalnız məsləhətdir: heç nə bloklanmır.
keywords: audit, yoxlama, adsız otaq, çatışmayan etiket, işarə, lod, inkişaf səviyyəsi, mərhələ, əsas mərhələ, toqquşma, ixtisas, koordinasiya, interfeys, lod 350, açılış, üst tir, başlıq, keçid, qoruyucu manşon, boru, hava kanalı, problemlər, yoxlama hesabatı, məsləhət
from: cc83a14d
---

## Nə edəcəksiniz

Modeli buraxmazdan əvvəl bir dəfəyə bütövlükdə yoxlayın. Audit hazır qayda dəstlərini işə salır və tapdıqlarını məsləhət kimi {{ui:Problemlər}} siyahısına qoyur. Heç nə bloklanmır: tapıntını düzəldirsiniz, ya da səbəbi ilə qəbul edirsiniz, hər digər problem kimi.

## Addımlar

1. Sol paneldə {{ui:Model yoxlamaları}} › {{ui:Audit}} açın, ya da {{ui:Alətlər}} › {{ui:Modeli yoxla…}} (yazılı: `AUDIT`).
2. {{ui:Layihə mərhələsi}} seçin. Bu, çertyoj təfərrüatlarındakı mərhələ ilə eynidir.
3. İşə salınacaq qayda dəstlərini işarələyin.
4. {{ui:Yoxlamanı işə sal}} düyməsini basın.
5. Hər qayda dəsti üçün sətri oxuyun, sonra {{ui:Problemlər siyahısını aç}}. Tapıntıya klik onun elementini seçir.
6. {{ui:Yoxlama hesabatı}} hesabatı yükləyir: hər tapıntı, kimin nəyi və niyə qəbul etdiyi və işə salınan qayda dəstləri.

## Qayda dəstləri

- **Adsız otaqlar**: adı olmayan və ya proqramın verdiyi adla („Otaq 3“) qalan otaq.
- **Çatışmayan etiketlər**: işarəsi olmayan qapı və ya pəncərə, nömrəsi olmayan otaq, etiketi olmayan elektrik qurğusu.
- **Mərhələnin LOD-undan aşağı elementlər**: mərhələnin tələb etdiyindən aşağı LOD-u olan hər divar, döşəmə, tavan, dam, qapı və pəncərə. Element tipinin LOD etiketini oxuyur; sahədə təsdiqlənmiş element LOD 500-dür. Etiketi olmayan elementlər yoxlanıla bilmədiyi üçün bir qeydə toplanır.
- **İxtisaslar arasında toqquşmalar**: bir-birinə girən iki ixtisasın elementləri (memarlıq, konstruksiya, mexanika, santexnika, elektrika; IFC sinfinə görə). Divarlarına söykənən dam toqquşma sayılmır.
- **LOD 350 interfeysləri**: hər qapı və pəncərə divarın açılışında olur, açılış divarın içinə sığır, iki açılış üst-üstə düşmür, limitdən geniş açılışın üstündə üst tir və ya başlıq var (üstündə element, ya da qapı və ya pəncərədə qeyd), və divarı və ya döşəməni kəsən boru, hava kanalı və ya kabel kanalının orada açılışı var. Tapıntılar ixtisas cütlüyü üzrə sayılır.
- **Heç kim tərəfindən yoxlanmamış tanınmış elementlər**: PDF, skan və ya çertyojdan oxunan və hələ təsdiqlənməmiş divarlar, qapılar, pəncərələr və otaqlar. Bax: [Elementləri yoxlanılmış və ya sahədə təsdiqlənmiş kimi işarələyin](topic:verification).

## Hər mərhələnin tələb etdiyi LOD

Cədvəli görmək və ya dəyişmək üçün {{ui:Hər mərhələnin tələb etdiyi LOD}} açın.

:::note
Cədvəl və üst tirin eni CadCraft-ın başlanğıc dəyərləridir. Onlar standartdan götürülməyib: layihə LOD-u mərhələ üzrə öz BIM icra planında təyin edir. Onları özünüzünkünə uyğun təyin edin. Ofis cədvəli hamı üçün Parametrlər › Default Policies › Audit bölməsində təyin edə bilər; Audit bölməsindəki dəyişiklik bu kompüterdə saxlanılır.
:::

## Bilməyiniz yaxşı olar

- Üst tir modelləşdirilmək əvəzinə qeyd edilə bilər: qapını və ya pəncərəni seçin və **Xassələr**-də {{ui:Yoxlama}} altında {{ui:Üst tir və ya karkas qeydi}} sahəsini doldurun.
- Real açılışdan keçən boru heç bir səthi kəsmir və hesabata düşmür. Divardan düz modelləşdirilmiş boru isə düşür.
- Toqquşma yoxlaması çox böyük modeldə bir neçə saniyədən sonra dayanır və bunu bildirir. Seçilmiş iki dəst üzrə tam yoxlama üçün [Elementlər arasında toqquşmaları tapın](topic:clash-check) istifadə edin.
- Modeli dəyişəndən sonra yoxlamanı yenidən işə salın. Qəbul edilmiş tapıntılar nömrələri dəyişmədikcə qəbul olunmuş qalır.
- O, modeli oxuyur. Məsul şəxslərin koordinasiya baxışını əvəz etmir.

## Növbəti

- [Modeli ümumi problemlərə görə yoxlayın](topic:model-checks)
- [Elementlər arasında toqquşmaları tapın](topic:clash-check)
- [Elementləri yoxlanılmış və ya sahədə təsdiqlənmiş kimi işarələyin](topic:verification)
