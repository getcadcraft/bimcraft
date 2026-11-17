---
title: İki BIM proqramı arasında işləmək
summary: Modeli BimCraft ortada olmaqla IFC vasitəsilə bir BIM proqramından başqasına göndərin, GlobalId-lərini, xassə dəstlərini və təsnifatlarını saxlayın, hər iki proqramı eyni xassələr üçün qurun və geri gələnləri görün.
keywords: ifc, gediş-dönüş, qarşılıqlı əlaqə, globalid, guid, xassə dəstləri, psets, təsnifatlar, paylaşılan parametrlər, xassə uyğunlaşdırması, tərcüməçi, bcf, koordinasiya, mübadilə
from: 9f224176
---

## Nə edəcəksiniz

Modeli iki BIM proqramı arasında köçürün, məsələn Revit-dən Archicad-a və geri, IFC vasitəsilə. BimCraft ortada yoxlamaq, əlavə etmək və nəyin sağ qaldığını hesabatda göstərmək üçündür. Heç bir proqramın öz fayl formatı oxunmur: hər şey IFC kimi daşınır.

## BimCraft nəyi saxlayır

Modeli BimCraft-da dəyişdirib {{ui:IFC kimi saxla}} basdığınız zaman, dəyişmədiyiniz hər sətir dəqiq olduğu kimi geri yazılır. Buna görə:

- **GlobalId-lər** eyni qalır və digər proqram hər elementi göndərdiyi elementlə uyğunlaşdıra bilir.
- **Xassə dəstləri** və onların dəyərləri qalır, yalnız dəyişdirdiyiniz dəyərlər istisna olmaqla.
- **Təsnifatlar** öz elementlərinə bağlı qalır.

## Hər iki proqramı eyni xassələr üçün qurun

1. Modeli BimCraft-da açın (və varsa layihə paketini də: onun xassə qrupları əlavə olunur).
2. Sol paneldə {{ui:İki BIM proqramı arasında}} açın.
3. **Xassə uyğunlaşdırması** altında hər proqramın lazım olan şeyini yükləyin:
   - {{ui:Paylaşılan parametrlər}}: paylaşılan parametr faylı. Revit-də onu Manage › Shared Parameters ilə yükləyin və parametrləri ehtiyac olan kateqoriyalara əlavə edin.
   - {{ui:IFC ixrac xassə dəstləri}}: istifadəçi tərəfindən təyin olunmuş xassə dəsti faylı. Revit-in IFC ixrac parametrlərində onu istifadəçi təyinli xassə dəstləri altında seçin ki, ixrac olunan IFC eyni dəst və xassə adlarını daşısın.
   - {{ui:Uyğunlaşdırma cədvəli (CSV)}}: hər xassə öz IFC dəsti və adı, tipi və hər proqramdakı uyğun adlarla. Archicad-ın uyğunlaşdırma faylları dərc olunmuş format deyil, ona görə onun IFC tərcüməçisini və xassə menecerini bu cədvəldən əl ilə qurun.
   - {{ui:Uyğunlaşdırma faylı}}: bütün uyğunlaşdırma bir fayl kimi, layihə ilə saxlamaq üçün.

Standart dəstlər (Pset_ və Qto_) paylaşılan parametr faylından çıxarılır: hər iki proqram onları öz məlumatlarından yazır.

## Modeli göndərin və geri gətirin

1. Birinci proqramdan GlobalId-lər saxlanmaqla IFC ixrac edin (Revit: "Store the IFC GUID in an element parameter after export" işarəli olsun).
2. Modeli BimCraft-da açın, yoxlayın ({{ui:Model yoxlamaları}}, {{ui:Toqquşma yoxlaması}}), problemlər əlavə edin ({{ui:Problemlər}}, BCF), lazım olsa dəyərləri dəyişin və {{ui:IFC kimi saxla}} basın.
3. Saxlanmış IFC-ni ikinci proqramda açın, üzərində işləyin və oradan GlobalId-lər saxlanmaqla IFC ixrac edin (Archicad tərcüməçisi: "Global Unique Identifiers: Keep existing").
4. BimCraft-a qayıdın, göndərilən modeli açın, sonra geri gələni əlavə edin ({{ui:Modellər}} altında {{ui:Model əlavə et}}).
5. {{ui:İki BIM proqramı arasında}} bölməsində **Göndərilib** və **Geri gəlib** seçin və {{ui:Hesabatı hazırla}} basın.

## Hesabatı oxuyun

- **Elementlər**: neçəsi eyni GlobalId ilə geri gəldi, neçəsi itdi və neçəsi yenidir. Yeni GlobalId-li elementlər bir itkin və bir yeni kimi görünür: digər proqram onu saxlamadı.
- **IFC sinfi dəyişib**: başqa növ elementə çevrilmiş elementlər.
- **Saxlanılmış xassə dəyərləri**: dəyişmədən geri gələn dəyərlərin payı. Aşağıdakı siyahıda ən çox dəyişmiş və ya itmiş dəyərləri olan xassələr göstərilir.
- **Təsnifatlar**: saxlanılmış, dəyişmiş (eyni sistem, başqa kod) və ya itmiş.

{{ui:Hesabatı yüklə (CSV)}} hər xassəni öz saylarınızla verir. Hansı elementlərin yerini dəyişdiyini və ya formasını dəyişdiyini görmək üçün eyni iki modeldə {{ui:Versiyaları müqayisə et}} istifadə edin.

:::note
BimCraft heç bir proqramı işə salmır. Hansı parametrlərin dəyəri daşıdığı hər proqramın IFC parametrlərindən asılıdır: hesabat yalnız həqiqətən geri gələnləri göstərir, buna görə bir parametri sınayın, yenidən ixrac edin və müqayisə edin.
:::

## Problemlər BCF kimi daşınır

BimCraft-da qaldırdığınız problemlər BCF kimi ixrac olunur ({{ui:Problemlər}}). Hər iki proqram öz BCF alətləri ilə oxuya bilir, buna görə elementlə bağlı sual baxış nöqtəsi ilə birlikdə digər proqramda işləyən adama çatır.

Bax həmçinin [Layihə paketini açın](topic:open-project-bundle), [Layihə faylından BimCraft-a IFC ilə](topic:rvt-to-ifc) və [Modelin iki versiyasını müqayisə edin](topic:compare-versions).
