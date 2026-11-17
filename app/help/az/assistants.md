---
title: AI köməkçisinin modellə işləməsinə icazə verin
summary: Parametrlərdə köməkçiləri açın ki, kompüterinizdəki köməkçi CadCraft Studio vasitəsilə elementləri tapa, xassələrini oxuya, onları görünüşdə ayıra və divar, qapı, pəncərə, döşəmə, səviyyə və şəbəkə xətləri çəkə bilsin. Siz açana qədər söndürülüdür.
keywords: ai, köməkçi, mcp, skript, avtomatlaşdırma, studio, elementləri tap, ayır, xassələr, icazələr, əlaqəni kəs, fəaliyyət, divar çək, qapı əlavə et, pəncərə əlavə et, səviyyələr, şəbəkələr, döşəmələr, geri qaytar, saxla, əmr sətri, cli, interfeyssiz, AI köməkçiləri ilə istifadə
from: c5ee595b
---

## Nə öyrənəcəksiniz

AI köməkçisinin (MCP dilini danışan istənilən köməkçi) açıq IFC modelinə baxmasını və onda çəkməsini necə təmin etmək, nə edə biləcəyi və nə edə bilmədiyi və onu necə dayandırmaq.

## BimCraft-da köməkçi nə edə bilər

| Sorğu | Nə baş verir | Tələb olunur |
|---|---|---|
| Elementləri tap | Sinif, mərtəbə, ad və ya xassə dəyərinə görə elementlərin siyahısını alır, **Tap** kimi | Oxu |
| Xassələri oxu | Bir elementin atributlarını, tipini, xassə çoxluqlarını və kəmiyyətlərini alır, **Xassələr** göstərdiyi kimi | Oxu |
| Modeli təsvir et, divarları sadala | Səviyyələri, divarları, qapıları, pəncərələri, otaqları, döşəmələri, şəbəkələri və sütunları, həmçinin hər divarın ucları, tipi və hündürlüyünü alır | Oxu |
| Ayır, şəffaf et, gizlət və ya göstər | 3D görünüş elə dəyişir ki, sanki {{ui:Göstər}} menyusundan istifadə etmisiniz | Görünüşü dəyişmək və çəkmək |
| Divar, qapı, pəncərə, döşəmə, səviyyə və ya şəbəkə xətləri çək | Model sanki {{ui:Çək}} alətlərindən istifadə etmisiniz kimi dəyişir: divarlar birləşir, otaqlar, döşəmələr və damlar izləyir | Görünüşü dəyişmək və çəkmək |
| Ad və ya xassə dəyərini dəyiş | Bir elementin Name, Description, Object type və ya Tag sahəsi, ya da bir xassə dəyəri. Digər elementlərlə paylaşılan dəyər əvvəlcə onun üçün köçürülür; onun tipinin dəyəri yalnız köməkçi bunu dedikdə dəyişir, çünki həmin tipin hər elementi izləyir | Görünüşü dəyişmək və çəkmək |
| Köçür, sil, divar, qapı və pəncərələri dəyiş | Elementlər onların daşıdığı şeylərlə birlikdə köçürülür və ya silinir; {{ui:Çək}} alətləri ilə çəkilmiş divarlar ucları və ya tipi ilə, qapılar və pəncərələr yeri, ölçüsü və ya tipi ilə dəyişir, otaqlar və birləşmələr izləyir | Görünüşü dəyişmək və çəkmək |
| Cədvəli qur, tərtib et və oxu | "Mərtəbə üzrə qapı cədvəli, yanğın müqaviməti və qapı avadanlığı ilə": köməkçi cədvəlin adını, sütunlarını (xassə və ya etiket sütuna çevrilir) və qruplaşdırmasını təyin edir; BimCraft onu modeldən doldurur və tərtib edir, köməkçinin bildirmədiyini ofis standartından götürür. Quraşdırma {{ui:Cədvəllər}} siyahınıza qoşulur. Geri gələn hər sətir öz elementlərini adlandırır ki, onları seçə bilsin | Oxumaq üçün Oxu; quraşdırmanı saxlamaq üçün Görünüşü dəyişmək və çəkmək |
| Cədvəli ixrac et | CSV, Excel və ya tabulyasiya ilə ayrılmış mətn, Google Sheets-ə yapışdırmaq üçün (heç nə Google-a göndərilmir) | İxrac |
| Otaq təmizləmələrini oxu və təyin et | Təmizləmə tipləri, hər otağın döşəmə, divar və tavan təmizləməsi, zonalar; sahələr, kafel sayları və altlıq həcmləri sonra təmizləmə cədvəllərindən gəlir | Oxu; təyin etmək üçün Görünüşü dəyişmək və çəkmək |
| Elementləri seç, öz addımlarını geri qaytar | Elementlər görünüşdə seçilir; onun son addımı geri qaytarılır | Görünüşü dəyişmək və çəkmək |
| Saxla | Hər dəyişiklikli yeni IFC faylı, {{ui:IFC kimi saxla}} yaratdığı kimi (orijinal heç vaxt dəyişmir) | Saxla |
| USD ixrac et | Açıq modelləri OpenUSD kimi (.usda, .usdc və ya .usdz), alətlər panelindəki {{ui:USD}} yazdığı kimi | İxrac |
| Şəkli vizuallaşdır, vizuallaşdırma növbəsini işə sal | 3D görünüşün şəkli, {{ui:Vizuallaşdırma}} dialoqunun öz parametrləri ilə yaratdığı kimi, başqa şey istəmədikdə, ya da dialoqun növbəsinə əlavə edilib bir-birinin ardınca vizuallaşdırılan yüksək keyfiyyətli şəkillər (növbə WebGPU tələb edir). Modeldə heç nə dəyişmir ([Şəkli vizuallaşdırın](topic:render)) | İxrac |

Köməkçinin etdiyi hər dəyişiklik **Dəyişikliklər**-də bir addımdır, adı "Köməkçi: …" (məsələn, "Köməkçi: 4 divar əlavə et"), belə ki, {{key:Mod+Z}} onun bütün əməliyyatını geri qaytarır və kimin addımı olduğunu görə bilərsiniz. Pəncərədə fayl aça bilmir: modeli siz açırsınız; o, açıq olanla işləyir.

## Açın

Köməkçilər BimCraft-a kompüterinizdəki CadCraft Studio vasitəsilə çatır; sadə brauzerin buna yolu yoxdur.

1. {{ui:Parametrlər}} açın və **BimCraft** bölməsini seçin.
2. **Köməkçilər** altında **AI köməkçilərinə və skriptlərə BimCraft-dan istifadə etməyə icazə ver** işarəsini qoyun.
3. **Oxu** sizin üçün işarələnib. Köməkçinin elementləri ayırıb gizlətməsinə və çəkməsinə icazə verilirsə, **Görünüşü dəyişmək və çəkmək**-i də işarələyin, modeli yeni fayl kimi saxlaya bilərsə, **Saxla**-nı.
4. Köməkçini Studio-da qoşun (Studio ünvanı və ona yapışdırılacaq parametrləri göstərir).

## Köməkçi qoşulu olduqda

Sağ panelin yuxarısındakı qeyddə hansı köməkçinin qoşulu olduğu və nə edə biləcəyi yazılır. Sessiyanı dərhal bitirmək üçün {{ui:Əlaqəni kəs}} düyməsini basın; davam etmək üçün yenidən qoşulmalıdır.

Parametrlərdə **Köməkçilər** altında **Fəaliyyət** köməkçinin etdiyi hər çağırışı, ən yenidən başlayaraq, işləyib-işləmədiyi ilə sadalayır.

:::tip
Sadə sözlərlə soruşun, məsələn: "1-ci səviyyədə xarici divarları ayır", "hansı qapıların yanğın müqaviməti yoxdur?" və ya "1-ci səviyyənin cənub divarında qapısı olan 6 by 4 metrlik otaq çək". Köməkçi elementləri tapır və görünüşünüzdə göstərir, ya da çəkir.
:::

## Pəncərəsiz: skriptlər və əmr sətri

Eyni çəkmə alətləri adını verdiyiniz qovluqlardakı IFC fayllarında, heç bir pəncərə açıq olmadan işləyir: CadCraft-ın MCP serveri və əmr sətri yeni bina başlada, ya da IFC faylı aça, onu təsvir edə, divar, qapı, pəncərə, döşəmə, səviyyə və şəbəkə əlavə edə, geri qaytara və yeni `.ifc` faylı kimi saxlaya bilər. Hansı qovluqlardan istifadə edə biləcəyinə, nəyisə dəyişib-saxlaya biləcəyinə siz qərar verirsiniz.

## Söndürün

**AI köməkçilərinə və skriptlərə BimCraft-dan istifadə etməyə icazə ver** işarəsini çıxarın. Bütün köməkçilər dərhal ayrılır və parametr növbəti dəfə üçün saxlanılır.

## Həmçinin bax

- [AI köməkçiləri üçün nümunələr](common:assistants-recipes): hər biri çağırdığı alətlərlə işlənmiş nümunələr.
- [Elementləri sinif, ad və ya xassə üzrə tapın](topic:find)
- [Elementləri gizlədin, ayırın və şəffaf edin](topic:hide-and-isolate)
- [BimCraft parametrləri](topic:settings)
