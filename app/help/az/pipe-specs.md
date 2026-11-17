---
title: Boru spesifikasiyaları, klapanlar, dempferlər və istehsalçı ailələri
summary: Öz boru spesifikasiyalarınızı qurun (material, birləşmə və pürüzlülük ilə ölçü cədvəlləri), modelin faylında saxlanılır; xətlərə klapanlar, süzgəc və dempferlər qoyun; istehsalçının klapan və ya avadanlıq modelini birləşmə portları olan ailə kimi gətirin.
keywords: boru spesifikasiyası, boru spesifikasiyaları, boru standartı, boru sinfi, xüsusi boru, ölçü cədvəli, boru, gigiyenik boru, paslanmayan polad, cədvəl, xarici diametr, divar qalınlığı, daxili diametr, pürüzlülük, təzyiq dərəcəsi, csv, json, idxal, ixrac, elektron cədvəl, standart, bpe, din, en 10357, en 10255, klapan, klapanlar, kəpənək klapan, balanslaşdırma klapanı, tənzimləmə klapanı, süzgəc, dempfer, həcm dempferi, yanğın dempferi, oem, istehsalçı, ailə, ailələr, portlar, birləşmə, step, obj, gltf, ifc, radiator, konvektor, panel qızdırıcı, hava emalı qurğusu, diffuzor, barmaqlıq
from: bc2f7c4e
---

## Nə edəcəksiniz

Boruları daxili quraşdırılmış polad, mis və plastik cədvəllər əvəzinə öz spesifikasiyanızla çəkin, xətlərə klapan və dempfer qoyun və xətlərin birləşdiyi portları olan istehsalçı modelini yerləşdirin.

:::note
Layihələndirmə və koordinasiya vasitəsidir. Boru spesifikasiyası yazdığınız və ya idxal etdiyiniz rəqəmləri saxlayır: hər cədvəli layihə standartınıza görə yoxlayın. Daxili klapanlar, süzgəclər və dempferlər xətdən ölçülmüş sxematik formalardır, istehsalçının və ya klapan standartının uzunluğu deyil.
:::

## Boru spesifikasiyası qurun

1. {{ui:Çək}} düyməsini açın, {{ui:Versiya}} menyusunu açın və {{ui:Boru spesifikasiyaları}} seçin. Eyni düymə Boru alətinin panelində də var.
2. {{ui:Yeni}} seçin və ya fayldan, yapışdırmadan və ya başlanğıc spesifikasiyadan (aşağıda) başlayın.
3. Adını, izlədiyi standartı və ya istinadı, materialı və ucu və ya birləşmə növünü yazın.
4. Hər ölçü üçün bir sətir yazın: ölçünün adı, xarici diametr və divar, millimetrlə. Əgər sizdə varsa, divar əvəzinə daxili diametr yazın: digəri doldurulur. DN, təzyiq dərəcəsi və çəki ixtiyaridir.
5. İxtiyari: millimetrlə pürüzlülük (təzyiq itkisi hesablaması ondan istifadə edir), yeni xətlərin başladığı izolyasiya qalınlığı, dirsəyin radiusu xarici diametrin əmsalı kimi, spesifikasiyada trinik və reduksiyaların olub-olmaması və 3D-də öz rəngi.
6. Yeni xətləri bu spesifikasiyada başlamalı olan xidmətləri işarələyin, məsələn, soyudulmuş su.
7. {{ui:Modeldə saxla}} seçin.

Spesifikasiyalar modelin faylında saxlanılır. Faylı açan hər kəs onlara malik olur, və Geri qaytar dəyişikliyi geri alır.

Spesifikasiya və ya onun ölçülərindən biri, onda xətt çəkilərkən silinə bilməz. Ölçünün rəqəmlərini dəyişmək həmin ölçüdəki xətləri yenidən çəkir.

## Spesifikasiyanı başqa modeldə istifadə edin

- {{ui:.json ixrac et}} seçilmiş spesifikasiyanı kiçik fayl kimi saxlayır; {{ui:Hamısını ixrac et}} modelin hər spesifikasiyasını saxlayır. {{ui:Fayl idxal et}} onları geri oxuyur.
- {{ui:.csv ixrac et}} ölçü cədvəlini elektron cədvəl üçün saxlayır. {{ui:Fayl idxal et}} `.csv` faylını da oxuyur.
- {{ui:Sətirləri yapışdır}} elektron cədvəldən kopyalanmış cədvəli qəbul edir. Birinci sətir sütunların adlarını verir: `Size`, `OD` və `Wall` (və ya `ID`), ixtiyari olaraq `DN`, `Pressure`, `Weight`. Hər ölçü üçün bir sətir. Ədədlər millimetrlə verilir, düym seçmədiyiniz və ya xana öz vahidini yazmadığı halda (`0.065 in`).

## Başlanğıc spesifikasiyalar

{{ui:Başlanğıc spesifikasiya əlavə et}} bunlardan birini modelinizə redaktə oluna bilən nüsxə kimi əlavə edir:

| Başlanğıc | Ölçülər |
|---|---|
| ASME BPE tube | 1/4" – 6" |
| EN 10357 series A tube (DIN 11850 row 2) | DN10 – DN200 |
| EN 10255 steel tube, medium series | DN15 – DN150 |
| EN 10255 steel tube, heavy series | DN15 – DN125 |

Bu cədvəllər iki və ya daha çox dərc olunmuş təchizatçı səhifəsinin standart üçün çap etdiyi və razılaşdığı xarici diametrlər və divarlardır. Onlar birbaşa standartların özündən götürülməyib. Yalnız bir səhifənin verdiyi ölçülər çıxarılıb. Hər başlanğıc öz mənbə səhifələrini göstərir və "layihə standartınızla yoxlayın" ilə işarələnib. Pürüzlülük, təzyiq dərəcəsi və çəki verilmir.

## Spesifikasiyada xətt çəkin

1. {{ui:Boru}} seçin. Xidməti spesifikasiyada işarələdiyiniz xətt orada başlayır. Digər xətlər üçün material siyahısından spesifikasiyanı seçin: spesifikasiyalar daxili materiallardan sonra "Spesifikasiya: ad" kimi göstərilir.
2. Ölçü siyahısında indi yalnız həmin spesifikasiyanın ölçüləri olur. Birini seçin və xətti çəkin.

Xətti sonradan spesifikasiyaya keçirmək üçün onu seçin və Xassələr panelində **Material**-ı dəyişin. Onun ölçüsü xarici diametrinə görə spesifikasiyanın ən yaxın ölçüsü olur.

IFC faylında boru spesifikasiyanın adını, standartını, materialını, birləşməsini və ölçülərini daşıyır (`CadCraft_PipeSpec` və `Pset_PipeSegmentTypeCommon`, boruda və onun tipində).

Ölçü və təzyiq itkisi hesablamaları spesifikasiyanın daxili diametrini oxuyur. Spesifikasiyada pürüzlülük olduqda, xəttin sürtünməsi onunla hesablanır (Darcy-Weisbach); yoxdursa, hesablamanın adi defolt dəyəri istifadə olunur.

## Klapanlar, süzgəc və dempferlər

1. {{ui:Klapan}} seçin və paneldə növü seçin: boru üçün şibər, kürə, kəpənək, şarlı, yoxlama, balanslaşdırma və ya tənzimləmə klapanı, ya da süzgəc; hava kanalları üçün həcm dempferi və ya yanğın dempferi.
2. Yerləşəcəyi xəttə klikləyin. Xətt onun ətrafında kəsilir və hər iki tərəf birləşmiş qalır. Klapan xəttin ölçüsünü alır və xətlə birlikdə hərəkət edir.

Xassələr panelində xəttin hər birini {{ui:Sil}} ilə sadalayır; xətt yenidən birləşir.

Təzyiq itkisi hesablaması yalnız şibər, kürə, şarlı və yoxlama klapanları üçün birləşmə itkisi sayır. Digər növlər, dempferlər və istehsalçı ailələri orada heç bir itki əlavə etmir: bunu öz yoxlamanızda nəzərə alın. Onlar **Fittinqlər və klapanlar** cədvəlində və həcmlərin hesablanmasında sayılır, və IFC-yə klapan, filtr (süzgəc) və iki birləşmiş portlu dempfer kimi yazılır.

## İstehsalçının modeli ailə kimi

1. {{ui:Versiya}} açın və {{ui:Ailələr}} seçin, sonra {{ui:Model idxal et}}. IFC, STEP, OBJ, STL, glTF və Kitabxana elementi faylları oxunur. OBJ və STL üçün əvvəlcə faylın vahidlərini və yuxarı oxunu təyin edin.
2. Portlar dialoqunda adı, istehsalçını və model nömrəsini yazın.
3. Onun **Xəttdə** (klapan, süzgəc və ya dempfer) olub-olmadığını və ya **Avadanlıq** olduğunu seçin, və necə yazılacağını.
4. Ona portlarını verin. Hər birinin adı, boru və ya kanal, xidməti, millimetrlə ölçüsü (borunun xarici diametri), spesifikasiyanızın adlandırdığı nominal ölçü, son növü, yeri və hansı tərəfə baxdığı var. {{ui:Üzdə}} modelin qutusunun üzünün mərkəzinə port qoyur. Kiçik yuxarı görünüşdə portlar göstərilir.
5. {{ui:Ailəni modelə saxla}} seçin.

Xəttdə olan ailə bir-birindən uzağa baxan, bir xətt üzərində tam iki porta malik olmalıdır. Onu Klapan alətinin siyahısından seçin və xəttə klikləyin: öz uzunluğunda yerləşdirilir və borular onun portlarına birləşir.

Ailə heç vaxt uzadılmır. Portları xəttin ölçüsündə deyilsə, onu yerləşdirəndə bu barədə xəbər verilir və {{ui:Birləşmələri yoxla}} onu siyahıya salır.

Avadanlıq ailəsi {{ui:Avadanlıq}} ilə, növü **İstehsalçının ailəsi** olaraq yerləşdirilir. Borular və kanallar onun portlarına bağlanır.

{{ui:Kitabxana elementi kimi yüklə}} portları ilə ailəni Kitabxanaya göndərə biləcəyiniz fayl kimi saxlayır.

## Radiatorlar və konvektorlar

{{ui:Avadanlıq}} həmçinin istilik suyu üçün axın və qayıdış birləşmələri olan ümumi gövdələrə malikdir: **Radiator** və **Konvektor / panel qızdırıcı**. Bax: [Portları olan MEP avadanlığı](topic:mep-equipment).
