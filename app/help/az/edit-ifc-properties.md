---
title: IFC xassələrini dəyişin və redaktə olunmuş nüsxəni saxlayın
summary: Elementin adını, etiketini, təsvirini və ya xassə dəyərini dəyişin, geri qaytarın və yeni IFC faylı yükləyin; orijinal fayl olduğu kimi qalır.
keywords: redaktə, dəyişiklik, xassələr, parametrlər, etiket, ad, adını dəyiş, nişan, kimi saxla, yüklə, geri qaytar, kopya, ifc, yaz
from: f8035d62
---

## Nə edəcəksiniz

IFC modelində məlumatı düzəldin: elementin adını dəyişin, etiketini düzəldin, xassə dəyərini dəyişin. Sonra dəyişikliklərinizlə yeni IFC faylı saxlayın. Açdığınız fayla heç vaxt toxunulmur.

## Nəyi dəyişə bilərsiniz

| Sahə | Redaktə oluna bilər |
|---|---|
| Ad, Obyektin tipi, Etiket, Təsvir | Bəli |
| Tək xassə dəyərləri (mətn, rəqəmlər, Bəli/Xeyr) | Bəli |
| Tip xassələri ("(type)" işarəli dəstlər) | Bəli, və dəyişiklik həmin tipin hər elementinə tətbiq olunur |
| Tip, GlobalId, Sətir | Xeyr |
| Kəmiyyətlər (uzunluqlar, sahələr, həcmlər, saylar) | Xeyr |
| Siyahılar, sadalamalar və digər çoxhissəli dəyərlər | Xeyr |
| Həndəsə, mövqe, element əlavə etmək və ya silmək | Xeyr |

## Addımlar

1. IFC modeli açın və dəyişmək istədiyiniz elementə klikləyin.
2. {{ui:Properties}} panelində dəyişmək istədiyiniz dəyərə klikləyin. O, mətn qutusuna çevrilir. Boş dəyər *boş* kimi göstərilir.
3. Yeni dəyəri yazın.
4. Saxlamaq üçün {{key:Enter}} basın və ya başqa yerə klikləyin. Ləğv etmək üçün {{key:Esc}} basın.
5. Dəyərə baxın: indi qalın və yanında mavi zolaqla göstərilir, bu isə redaktə olunmuş dəyəri işarələyir.
6. Sol tərəfdəki {{ui:Changes}} bölməsinə baxın: dəyişiklik *element*: *sahə*, köhnə dəyərdən yeni dəyərə kimi siyahıya salınır.
7. Digər dəyərlər və ya digər elementlər üçün təkrarlayın.
8. {{ui:Save as IFC}} klikləyin (gözləyən dəyişikliklərin sayını göstərir, məsələn "IFC kimi saxla (3)"), və ya {{key:Mod+S}} basın.
9. Yükləmələr qovluğunuzda "*orijinal ad* (edited).ifc" faylını tapın.

## Nəyi görməlisiniz

Status sətri belə yazır: "*name* (edited).ifc faylı *n* dəyişiklik ilə saxlanıldı (… bayt). Orijinal faylınız dəyişdirilməyib." {{ui:Changes}} siyahısı növbəti dövr üçün hazır olaraq boşalır.

## Dəyər növləri

- **Mətn**: yazdığınız hər şey olduğu kimi saxlanılır. Ad, Obyektin tipi, Etiket və ya Təsviri təmizləmək dəyəri silir.
- **Rəqəmlər**: faylın öz vahidlərində sadə rəqəm yazın, məsələn `2.4` və ya `1200`. Vahid simvolu yazmayın. Başqa hər şey "Rəqəm yazın." göstərir.
- **Tam ədədlər** (saylar, tam rəqəmlər): onluq kəsr yazsanız "Tam ədəd yazın." göstərilir.
- **Bəli/Xeyr**: dəyər Bəli və Xeyr seçimli menyuya çevrilir.

Hər dəyər öz IFC tipini saxlayır, belə ki rəqəm rəqəm olaraq qalır və digər proqramlar onu düzgün oxuyur.

## Geri qaytarma

1. {{ui:Changes}} bölməsində {{ui:Undo}} klikləyin və ya sahədə yazmırsınızsa {{key:Mod+Z}} basın.
2. Daha çox geri qaytarmaq üçün təkrarlayın. Hər geri qaytarma ən yeni dəyişikliyi silir.

Saxladıqdan sonra geri qaytarmaq mümkün deyil: saxladıqdan sonra siyahı yenidən başlayır. Saxlanılan fayl hər şeyi özündə saxlayır.

## Niyə redaktəniz yalnız bir elementi dəyişir

İxracedicilər yer qənaət etmək üçün məlumatı paylaşırlar. Bir xassə dəsti iyirmi qapı arasında paylaşıla bilər və bir dəyər ("Yanğın müqaviməti: 60 dəq") doxsan dəstdə sadalana bilər. BimCraft paylaşılan dəyəri sadəcə dəyişsəydi, onu paylaşan hər element də dəyişərdi.

Buna görə BimCraft yazmazdan əvvəl kopyalayır:

- Redaktə etdiyiniz xassə dəsti digər elementlərlə paylaşılırsa, elementiniz dəstin öz nüsxəsini alır və yalnız nüsxə dəyişir.
- Dəyər digər dəstlərlə paylaşılırsa, dəstiniz dəyərin öz nüsxəsini alır.

Qonşular köhnə məlumatlarını saxlayır. Buna *yazmaqda kopyalama* deyilir. Faylda bir neçə kiçik qeyd əlavə edir, hər IFC proqramı isə bunu normal oxuyur.

**Tip xassələri qəsdən istisnadır.** "(type)" işarəli dəst elementin tipinə aiddir və IFC-də hər element tipi ondan oxuyur. Onu dəyişmək tipi dəyişir, buna görə tipin hər elementi yeni dəyəri göstərir. {{ui:Changes}} siyahısı belə redaktələri "(type)" ilə işarələyir. Bax [Tipin hər elementi üçün tip xassəsini dəyişin](topic:type-vs-instance).

## Itirmədən əvvəl xəbərdarlıqlar

- Saxlanılmamış dəyişiklikləriniz olduqda başqa fayl açmaq soruşur: "*fayl* faylında *n* saxlanılmamış dəyişiklik var. Onları atılsın?" İşləməyə davam etmək üçün Ləğv et klikləyin, sonra saxlayın.
- Saxlanılmamış dəyişikliklərlə sekmənin bağlanması və ya yenidən yüklənməsi brauzerdən çıxıb-çıxmamağı soruşur.

## Tez-tez edilən səhvlər

- **Vahidləri yazmaq.** `2400 mm` rədd edilir. `2400` yazın.
- **Bir elementi nəzərdə tutaraq tip xassəsini dəyişmək.** Yazmazdan əvvəl "(type)" qeydinə baxın. Bir elementin fərqli olmasını istəyirsinizsə, tip xassəsi əvəzinə elementin öz xassəsini, Etiketini və ya Adını dəyişin.
- **Orijinal faylın dəyişməsini gözləmək.** Saxlama həmişə yeni fayl yükləyir. İstədiyiniz budursa, orijinalı özünüz əvəz edin və bir nüsxə saxlayın.
- **Heç bir dəyişiklik olmadan {{key:Mod+S}} basmaq.** BimCraft yalnız saxlanılacaq bir şey olduqda saxlayır; əks halda brauzerin öz "Səhifəni saxla" pəncərəsi aça bilər. Onu bağlayın.
- **İki dəfə saxlayıb iki kiçik fayl gözləmək.** Hər saxlama modeli açdığınız vaxtdan bəri olan hər redaktəni saxlayır.
- **Redaktələrin layihə faylına qayıdacağını gözləmək.** BimCraft yalnız IFC yazır. Redaktə olunmuş IFC-ni hər hansı IFC faylı kimi müəllif proqramınıza idxal edin.
