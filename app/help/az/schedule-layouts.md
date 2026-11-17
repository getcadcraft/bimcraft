---
title: Cədvəli tərtib edin, saxlayın və ixrac edin
summary: Cədvəli qruplaşdırın, ona aralıq cəmlər və cəmlər verin, xassədən oxunan sütun əlavə edin, onu faylda quraşdırma kimi saxlayın və cədvəl faylı (.xlsx), onlayn cədvələ yapışdırmaq üçün mətn və ya CSV kimi ixrac edin. Ofis standartı cədvəlin bildirmədiyini doldurur.
keywords: cədvəl tərtibatı, qruplaşdırma, aralıq cəm, cəm, başlıqlar, ofis standartı, standart siyasətlər, quraşdırma, mərtəbəyə görə qapı cədvəli, yanğın müqaviməti, qapı furniturası, xlsx, iş kitabı, onlayn cədvəl, yapışdırma, csv, ixrac, cədvəl, elementlər, cədvəldən seçmək, rəqəm
from: 95dfd801
---

## Nə edəcəksiniz

Sadə cədvəli ofisinizin buraxdığı cədvələ çevirin: mərtəbəyə, növə və ya otağa görə qruplaşdırılmış, aralıq cəmləri və cəmi olan, lazım olan sütunları ilə, öz adı altında. Sonra onu cədvəl faylına göndərin. Hər sətir və hər rəqəm hələ də onun gəldiyi elementləri bilir.

## Addımlar

1. {{ui:Çək}} aktiv edin və sol paneldə **Cədvəllər** açın. Bir cədvəl seçin, məsələn **Qapılar**.
2. Cədvəlin üstündə **Qruplaşdır** (cədvəlin sütunu, məsələn Səviyyə və ya Növ, ya da **Qruplaşdırma yoxdur**) və **Cəmlər** (**Cəm yoxdur**, **Bir cəm**, ya da **Aralıq cəmlər və ümumi cəm**) seçin. **Olduğu kimi** seçimi seçimi quraşdırmaya və ya ofis standartına buraxır.
3. Cədvəlin altında elementlərdən oxunan sütun əlavə etmək üçün xassə və ya etiket adı yazın (məsələn `FireRating`, `Pset_DoorCommon.FireRating` və ya etiketin adı, məsələn `Ironmongery`) və **Sütun əlavə et** klikləyin. BimCraft əvvəlcə elementin öz xassə dəstlərini, sonra onun tipinin xassə dəstlərini oxuyur. Heç bir elementdə dəyər olmadıqda bunu deyir; dəyər təyin olunduqda sütun özü dolur.
4. Ad yazın (məsələn "Mərtəbəyə görə qapı cədvəli") və **Quraşdırma kimi saxla** klikləyin. Quraşdırma bina faylında saxlanılır və adı ilə Cədvəllər siyahısına qoşulur. Modelin hər dəyişikliyini izləyir. **Bu quraşdırmanı sil** onu geri çıxarır. Hər ikisi Geri qaytar-da bir addımdır.

## Sətirə və ya rəqəmə klikləyin: nəyin mənbəyini seçmək üçün

Hər hansı sətrə və ya tək rəqəmə klikləyin: planda və 3D-də onun arxasındakı elementlər seçilir:

- sətir öz sətrinin elementlərini seçir;
- aralıq cəm və ya cəm topladığı hər şeyi seçir, qrup başlığı isə öz qrupunu;
- öz elementləri olan rəqəm onları seçir: divar tipinin **Çıxılmalar** rəqəmi onun qapılarını və pəncərələrini, otağın divar sahəsi isə onun divarlarını seçir.

Modeldən hazırlanmış sənəddə də eyni işləyir: önizləmədə cədvəlin rəqəminə klikləyin.

## İxrac

- **Excel-i yüklə** .xlsx iş kitabı saxlayır. Uzunluqlar, sahələr, həcmlər və saylar sütunun göstərdiyi vahiddə real rəqəmlərdir (fut və düym mətn qalır). İkinci vərəqdə, **Elementlər** adlı, hər sətir üçün onun arxasındakı elementlərin GlobalId-ləri sadalanır.
- **Google Sheets üçün kopyala** cədvəli buferə tab ilə ayrılmış mətn kimi qoyur. Google Sheet-də A1 xanasına klikləyin və yapışdırın. **Yeni Google Sheet aç** öz Google hesabınızda Google-un boş cədvəl üçün ünvanı olan `sheets.new`-i açır. BimCraft Google-a daxil olmur və oraya heç nə göndərmir: yapışdırma sizindir.
- **CSV yüklə** cədvəli ekranda olduğu kimi saxlayır.

## Ofis standartı

Ofis cədvəllərinin necə tərtib olunduğunu bir dəfə deyə bilər. **Standart siyasətlər** əlavəsini aktiv edin ([Standart siyasətlər](topic:default-policies)) və **Parametrlər › Qlobal › Standart siyasətlər › Cədvəl tərtibatı (ofis standartı)** bölməsində təyin edin:

| Siyasət | Nə edir |
|---|---|
| Cədvəlləri qruplaşdır | Səviyyə, Növ, Otaq və ya qruplaşdırma yoxdur, belə sütunu olan hər cədvəl üçün |
| Cədvəllərdə cəmlər | Cəm yoxdur, sonda bir cəm, ya da hər qrupun altında aralıq cəm və ümumi cəm |
| Cədvəlin başlığı | Şablon, məsələn `{project}: {schedule}` |
| Sütun başlıqları | Yazıldığı kimi, BÖYÜK HƏRFLƏRLƏ və ya Baş hərflərlə |

Standart hər cədvələ aiddir, onu kim təyin edirsə: paneldəki sadə cədvəllər, saxlanmış quraşdırma, assistentin təyin etdiyi cədvəl, ixraclar və sənəddəki cədvəllər. Öz qruplaşdırmasını, cəmlərini və ya başlığını bildirən quraşdırma onları saxlayır; standart qalanını doldurur. Panel hansı hissələri ofis standartının təyin etdiyini göstərir. Siyasətlər Standart siyasətlər faylında digərləri ilə birlikdə daşınır.

## Yaxşı bilmək

- Quraşdırma öz mənbə cədvəlini və sütunlarını adlandırır; rəqəm saxlamır. Rəqəmlər hər dəfə modeldən oxunur.
- Elementlərin sətirləri olmayan siyahılar (divar yığımları və material legendası) burada tərtibata və ixraca malik deyil.
- Assistent bütün bunları sizin üçün edə bilər: bax [Assistentlə modeldə işləmək](topic:assistants).
