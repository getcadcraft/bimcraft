---
title: IFC5 alfa (IFCX) fayllarını açmaq və ixrac etmək
summary: IFC5 alfa fayl formatı (.ifcx) üçün laboratoriya seçimi: qatları olan faylı açmaq, oxunuşun yoxlaya bilmədiyi şeyləri görmək və açıq modelləri ixrac etmək. Format hələ dəyişir, buna görə əvvəl oxuyun.
keywords: ifc5, ifcx, alfa, buildingsmart, json, qatlar, sxem, laboratoriya, kəmiyyətlər, qto, ixrac, idxal
from: cffe1669
---

IFC5 alfa (fayl uzantısı {{ui:.ifcx}}) buildingSMART-ın hələ dizayn etdiyi fayl formatıdır. Son deyil: fayllar və onları oxuyuşumuz dəyişə bilər. Buna görə bu laboratoriya seçimidir və əvvəl oxumaq lazımdır.

## Açmaq

1. {{ui:Parametrlər}} seçin, sonra BimCraft nişanında {{ui:IFC5 alfa (IFCX)}} bölməsini.
2. {{ui:IFC5 alfa (IFCX) - format hələ dəyişir; əvvəl oxuyun}} qutusunu işarələyin.

Defolt olaraq söndürülüdür. Söndürülü olduqda, .ifcx fayl bu səhifəyə istinad edən bir cümlə ilə rədd edilir. {{ui:IFC5 alfa (.ifcx) aç…}} və {{ui:IFC5 alpha}} ixrac düyməsi o açıq olduqda görünür.

## Açmaq (fayllar)

- {{ui:Fayl və ya qovluq açın}} ilə bir .ifcx faylı seçin (açıq modeli əvəz edir, redaktə ilə bağlı adi sualdan sonra), və ya
- {{ui:IFC5 alfa (.ifcx) aç…}} seçin və bir neçə faylı birlikdə seçin: fayl, onun qatları və idxal etdiyi sxem faylları. Artıq açıq model varsa, fayl **onun yanına əlavə olunur**; model siyahısındakı x onu yenidən çıxarır, bu geri qaytarmadır.

IFCX faylı düyümləri (yol, onun uşaqları, miras aldıqları, atributları) sadalayır. Bir neçə fayl eyni düyümü təsvir edə bilər: sonrakı fayl (qat) əvvəlkinin atributlarını əvəz edir və boş (null) uşaq uşağı silir. BimCraft onları birləşdirir, sonra nəticəni kiçik IFC4 modeli kimi çəkir: layihə, sahə, bina, mərtəbələr və elementlər, adları, sinifləri, xassələri, kəmiyyətləri, rəngləri və mesh-ləri ilə.

Şəbəkədən heç nə gətirilmir. Faylın idxal etdiyi sxem faylları (məsələn `ifc@v5a.ifcx`) yalnız onunla birlikdə seçdiyiniz halda istifadə olunur; əks halda hesabat bunu deyir və atributlar tip yoxlaması olmadan oxunur.

### Hesabat

Açdıqdan sonra hesabat oxunmanın nə tapdığını sadalayır: sxemə uyğun gəlməyən məlumatlar, verilməmiş sxem faylları və burada IFC mənası olmayan atributlar. IFC mənası olmayan atributlar modeldə **saxlanılır**, silinmir və ixrac zamanı geri yazılır.

## Nə nəyə çevrilir

| IFCX faylında | BimCraft-da |
|---|---|
| IFC sinfi olan düyüm (layihə, sahə, bina, mərtəbə, divar …) | Uyğun IFC4 elementi; bu oxunuşun tanımadığı sinif bina elementi proxy-si olur |
| Düyümün valideyn altında aldığı ad | Elementin adı |
| Kəmiyyət növü olan atributlar (Uzunluq, Sahə, Həcm, Kütlə …) | `Qto_IFCX` adlı IFC4 kəmiyyət dəsti (IFC4 kəmiyyətləri IFC4 `Qto_*` dəstləri olaraq qalır) |
| Digər xassə atributları | `Pset_IFCX` adlı xassə dəsti |
| Mesh və transformasiya atributları | Elementin üçbucaqları və yerləşdirilməsi; görünməz mesh-lər çəkilmir |
| Rəng, şəffaflıq, material, təsnifat | Elementin səth stili, materialı və təsnifatı |

Vahidlər metr kimi qəbul olunur, Z yuxarı istiqamətdədir: alfa deyir ki, vahidlər sonra sənədləşdiriləcək.

## İxrac

{{ui:IFC5 alpha}} düyməsini alət çubuğunda seçin, qeydi oxuyun, sonra {{ui:.ifcx ixrac et}} basın. Fayl öz başlığını daşıyır (müəllif CadCraft, versiya ifcx_alpha) və özündə bunun alfa formatı olduğunu deyir. Hər model öz fayl koordinatlarında, metrlə, adları, sinifləri, xassə dəstləri, kəmiyyətləri (növləri ilə atribut kimi), rəngləri və üçbucaqları ilə yazılır. Qatlar və miras düzləşdirilmiş (flattened) şəkildə yazılır. Faylı göndərdiyiniz proqramda yoxlayın.

## Məhdudiyyətlər

- Əyri həndəsə (əyrilər, səthlər) oxunmur: yalnız üçbucaq mesh-lər.
- Divarın içində yerləşən qapı və pəncərələr mərtəbə üzərinə qoyulur; onların gəldiyi divar ilə əlaqələndirilmir.
- IFC4 `Qto_*` dəst adları öz atribut qruplarımız kimi saxlanılır (`cadcraft::qto::…`); standart alfa sxemində kəmiyyət adlarının yalnız bir neçəsi var.
- Format bizim nəzarətimizdən kənarda dəyişə bilər; bu gün yaradılmış fayl sabah oxunmaya bilər.
