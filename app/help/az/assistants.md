---
title: Süni intellekt köməkçisinin modelinizlə işləməsinə icazə verin
summary: Parametrlərdə köməkçiləri açın ki, kompüterinizdəki köməkçi CadCraft Studio vasitəsilə elementləri tapa, onların xassələrini oxuya, baxışda təcrid edə və divarları, qapıları, pəncərələri, döşəmələri, səviyyələri və şəbəkələri çəkə bilsin. Siz açana qədər söndürülüdür.
keywords: süni intellekt, köməkçi, mcp, skript, avtomatlaşdırma, studio, elementləri tap, təcrid et, xassələr, icazələr, əlaqəni kəs, fəaliyyət, divar çək, qapı əlavə et, pəncərə əlavə et, səviyyələr, şəbəkələr, döşəmələr, geri qaytar, saxla, komanda sətri, cli, pəncərəsiz, süni intellekt köməkçiləri ilə istifadə
from: 66d72742
---

## Nə öyrənəcəksiniz

Süni intellekt köməkçisinin (MCP dilini bilən istənilən köməkçinin) açıq IFC modelinizə necə baxa və onda necə çəkə bilməsini, nəyi edə bildiyini və nəyi edə bilmədiyini, və onu necə dayandıracağınızı öyrənin.

## Köməkçi BimCraft-da nə edə bilər

| Nə istəyir | Nə baş verir | Tələb olunan |
|---|---|---|
| Elementləri tapmaq | Sinifə, mərtəbəyə, ada və ya xassə dəyərinə görə elementlərin siyahısını alır, **Tap** funksiyasının etdiyi kimi | Oxumaq |
| Xassələri oxumaq | Bir elementin atributlarını, tipini, xassə dəstlərini və kəmiyyətlərini alır, **Xassələr** panelinin göstərdiyi kimi | Oxumaq |
| Modeli təsvir etmək, divarları siyahılamaq | Səviyyələri, divarları, qapıları, pəncərələri, otaqları, döşəmələri, şəbəkələri və sütunları, habelə hər divarın uclarını, tipini və hündürlüyünü alır | Oxumaq |
| Təcrid etmək, yarımşəffaf etmək, gizlətmək və ya göstərmək | 3D görünüş elə dəyişir ki, sanki {{ui:Show}} menyusundan istifadə etmisiniz | Görünüşü dəyişmək və çəkmək |
| Divarlar, qapılar, pəncərələr, döşəmələr, səviyyələr və ya şəbəkə xətləri çəkmək | Model elə dəyişir ki, sanki {{ui:Draw}} alətlərindən istifadə etmisiniz: divarlar birləşir, otaqlar, döşəmələr və damlar izləyir | Görünüşü dəyişmək və çəkmək |
| Ad və ya xassə dəyərini dəyişmək | Bir elementin Ad, Təsvir, Obyekt tipi və ya Etiket sahəsi, ya da bir xassə dəyəri. Digər elementlərlə paylaşılan dəyər əvvəlcə onun üçün kopyalanır; tipin dəyəri yalnız köməkçi bunu dediyi zaman dəyişir, çünki həmin tipin hər elementi onu izləyir | Görünüşü dəyişmək və çəkmək |
| Köçürmək, silmək, divar, qapı və pəncərələri dəyişmək | Elementlər onları daşıyanlarla birlikdə köçürülür və ya silinir. {{ui:Draw}} alətləri ilə çəkilmiş divarlar uclarına və ya tipinə görə, qapılar və pəncərələr yerinə, ölçüsünə və ya tipinə görə dəyişir, otaqlar və birləşmələr izləyir | Görünüşü dəyişmək və çəkmək |
| Cədvəl qurmaq, düzmək və oxumaq | "Mərtəbəyə görə qapı cədvəli, yanğın müqaviləsi və qapı avadanlığı ilə": köməkçi cədvəlin adını, sütunlarını (xassə və ya etiket sütun olur) və qruplaşdırmasını təyin edir; BimCraft onu modeldən doldurur və düzür, köməkçinin qeyd etmədiyi məqamları ofis standartından götürür. Quraşdırma **Cədvəllər** siyahınıza əlavə olunur. Geri qayıdan hər sətir öz elementlərini adlandırır, ona görə onları seçə bilir | Oxumaq üçün oxumaq; quraşdırmanı saxlamaq üçün görünüşü dəyişmək və çəkmək |
| Cədvəli ixrac etmək | CSV, Excel və ya tabla ilə ayrılmış mətn, Google Sheets-ə yapışdırmaq üçün (heç nə Google-a göndərilmir) | İxrac |
| Otaq təsvirlərini oxumaq və təyin etmək | Təsvir növləri, hər otağın döşəməsi, divarı və tavanının təsviri, zonalar; sahələr, kafel sayı və altlıq həcmləri təsvir cədvəllərindən gəlir | Oxumaq; təyin etmək üçün görünüşü dəyişmək və çəkmək |
| Elementləri seçmək, öz addımlarını geri qaytarmaq | Elementlər baxışda seçilir; onun son addımı geri alınır | Görünüşü dəyişmək və çəkmək |
| Saxlamaq | Bütün dəyişikliklərlə yeni IFC faylı, {{ui:Save as IFC}} yaratdığı kimi (orijinal heç vaxt dəyişmir) | Saxlamaq |
| USD ixrac etmək | Açıq modellər OpenUSD formatında (.usda, .usdc və ya .usdz), alətlər panelində {{ui:USD}} yazdığı kimi | İxrac |
| Şəkil render etmək, render növbəsini işlətmək | 3D görünüşün şəkli, {{ui:Render}} dialoqunun öz Render parametrləri ilə yaratdığı kimi, əgər başqa şey istəməsə; və ya dialoqun növbəsinə əlavə olunmuş yüksək keyfiyyətli şəkillər, bir-birinin ardınca render olunur (növbə WebGPU tələb edir). Modeldə heç nə dəyişmir ([Şəkil render etmək](topic:render)) | İxrac |

Köməkçinin etdiyi hər dəyişiklik **Dəyişikliklər** siyahısında bir addım olur, adı "Köməkçi: …" (məsələn "Köməkçi: 4 divar əlavə et") olur. Buna görə {{key:Mod+Z}} onun bütün əməliyyatını geri qaytarır və hansı addımın kimə aid olduğunu görə bilərsiniz. Pəncərədə fayl aça bilmir: siz modeli açırsınız, o isə açıq olanla işləyir.

## Onu yandırın

Köməkçilər BimCraft-a kompüterinizdəki CadCraft Studio vasitəsilə çatır; adi brauzer buna yol vermir.

1. {{ui:Settings}} açın və **BimCraft** tabını seçin.
2. **Köməkçilər** altında **Süni intellekt köməkçilərinə və skriptlərə BimCraft-ı istifadə etməyə icazə ver** qutusunu qeyd edin.
3. **Oxumaq** sizin üçün artıq qeyd olunub. Köməkçi təcrid və gizlətmə edə və ya çəkə bilməlidirsə **Görünüşü dəyişmək və çəkmək** qutusunu, modeli yeni fayl kimi saxlaya bilməlidirsə **Saxlamaq** qutusunu da qeyd edin.
4. Köməkçini Studio-da qoşun (Studio ünvanı və ona yapışdırılacaq parametrləri göstərir).

## Köməkçi qoşulu olarkən

Sağ panelin yuxarısındakı qeyddə hansı köməkçinin qoşulu olduğu və nə edə bildiyi göstərilir. Sessiyanı dərhal bitirmək üçün {{ui:Disconnect}} klikləyin; davam etmək üçün köməkçi yenidən qoşulmalıdır.

**Fəaliyyət**, Parametrlərdə **Köməkçilər** altında, köməkçinin etdiyi hər çağırışı ən yenidən köhnəyə doğru, uğurlu olub-olmadığını göstərərək siyahılayır.

:::tip
Sadə sözlərlə soruşun, məsələn "Səviyyə 1-dəki xarici divarları təcrid et", "hansı qapıların yanğın müqaviləsi yoxdur?" və ya "Səviyyə 1-də 6 x 4 metrlik otaq çək, cənub divarında qapı olsun". Köməkçi elementləri tapır və onları görünüşünüzdə göstərir və ya çəkir.
:::

## Pəncərəsiz: skriptlər və komanda sətri

Eyni çəkmə alətləri, açıq pəncərə olmadan, adlarını verdiyiniz qovluqlardakı IFC fayllarında da işləyir: CadCraft-ın MCP serveri və komanda sətri yeni bina başlada və ya IFC faylı aça, onu təsvir edə, divarlar, qapılar, pəncərələr, döşəmələr, səviyyələr və şəbəkələr əlavə edə, geri qaytara və yeni `.ifc` faylı kimi saxlaya bilər. Skriptlər üçün daha dörd alət var: `ifc_batch` bir dəfəyə 200-ə qədər redaktə addımını bir əməliyyat kimi işlədir (hamısı və ya heç biri: bir geri qaytarma bütün əməliyyatı geri alır, rədd edilən addım qalanını geri qaytarır və həmin addımı adlandırır); `ifc_describe` səviyyələri və hər divarı onun qapıları və pəncərələri ilə siyahılayır; `ifc_render_png` pəncərəsiz modelin yoxlama şəklini yazır (materiallar, teksturalar və kölgələr olmadan); `usd_export` `.usda`, `.usdc` və ya `.usdz` yazır. Komanda sətrində `cadcraft bim script.json --from model.ifc -o out.ifc` addımların skriptini işlədir, `--usd`, `--png` və `--plan` eyni işləmədən USD faylı, şəkil və ya plan yazır. Hansı qovluqlardan istifadə edə biləcəyinə və heç nəyi dəyişib-saxlaya biləcəyinə siz qərar verirsiniz.

## Söndürün

**Süni intellekt köməkçilərinə və skriptlərə BimCraft-ı istifadə etməyə icazə ver** qutusunun işarəsini silin. Bütün köməkçilər dərhal ayrılır, parametr isə növbəti dəfə üçün saxlanılır.

## Həmçinin bax

- [Süni intellekt köməkçiləri üçün reseptlər](common:assistants-recipes): hər biri çağırdığı alətlərlə birlikdə işlənmiş nümunələr.
- [Elementləri sinifinə, adına və ya xassəsinə görə tapın](topic:find)
- [Elementləri gizlədin, təcrid edin və şəffaf edin](topic:hide-and-isolate)
- [BimCraft parametrləri](topic:settings)
