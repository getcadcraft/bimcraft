---
title: Modeldən spesifikasiya yazın
summary: İstifadədə olan hər divar, qapı, pəncərə, döşəmə və bitirmə növü üçün bir spesifikasiya bölməsi, faktları modeldən və öz mətninizlə, PDF və ya Word sənədinə çevrilmiş.
keywords: spesifikasiya, spek, işçi çertyojlar, mərhələ 5, tikinti sənədləri, kəsik, divar növü, qapı növü, pəncərə növü, bitirmə, təsnifat, uniclass, omniclass, masterformat, sənəd, pdf, word, docx, cədvəllər
from: a6acc6d4
---

## Nə edəcəksiniz

Modeli izləyən spesifikasiya əldə edin: binada həqiqətən olan hər növ üçün bir bölmə, hər biri öz quruluşu və miqdarları modeldən oxunmuş və yazdığınız mətnlə.

## Addımlar

1. {{ui:Çək}} aktiv edin, sol paneldə **Cədvəllər** açın və **Spesifikasiya** klikləyin.
2. Dialoq hər divar növü, qapı növü, pəncərə növü, döşəmə və istifadədə olan otaq bitirməsi üçün bir bölmə siyahılayır. Hər başlığın altında **faktlar** var, modeldən oxunur: qalınlıq, qatlar bir-bir, inkişaf səviyyəsi, ölçülər, neçə və nə qədər. Təsnifat kodu olan elementləri olan bölmə başlığında kodu göstərir.
3. Bölmənin altındakı qutuya spesifikasiya mətninizi yazın. **Elementlərini seç** bölmənin nədən bəhs etdiyini göstərir.
4. **Saxla** klikləyin. Bu Geri alma üzrə bir addımdır və mətn bina faylında saxlanılır.
5. **Modeldən sənədlər**i açın, **Spesifikasiya** şablonunu seçin və **Önbaxış** klikləyin, sonra PDF, Word və ya Markdown kimi saxlayın. Bax: [Modeldən sənədlər](topic:documents-from-the-model).

## Çertyoj cədvəlləri sənəd kimi

**Çertyoj cədvəlləri** şablonu qapı, pəncərə və bitirmə cədvəllərini modeldən birbaşa, sizin ofis düzümünüzdə çap edir. Öz şablonunuzda `{{schedule doors}}`, `{{schedule windows}}`, `{{schedule roomfinishes}}`, `{{schedule finishtotals}}` yazın və ya saxlanmış quraşdırmanın adını, məsələn `{{schedule Door schedule by floor}}`. `{{specification}}` spesifikasiyanı çap edir.

## Yaxşı bilmək

- Faktlar modelindir. Model dəyişəndə onlar dəyişir; sizin mətniniz dəyişmir.
- BimCraft heç bir standartın bəndini və ya istehsalçının mətnini yazmır. Mətni olmayan bölmə "Hələ spesifikasiya mətni yazılmayıb." çap olunur.
- Modeldə artıq olmayan növ üçün yazılmış mətn saxlanılır və "Modeldə olmayan növlər üçün mətn" altında siyahılanır.
- Ümumi növü konkret quruluş üçün dəyişmək üçün bax: [Divar alətləri](topic:wall-tools) (Növü dəyiş).
