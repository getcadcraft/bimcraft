---
title: Layihə paketini açın
summary: Layihə paketi modeli, onun görünüşlərini, tərtibatlarını və xassə qruplarını ehtiva edən bir zip faylıdır. Onu açın, görünüşü mərtəbəsi və qatları ilə göstərin, tərtibatı açın və xassələri layihənin öz qruplarında görün.
keywords: paket, layihə paketi, ccbundle, zip, görünüşlər, görünüş xəritəsi, tərtibatlar, tərtibat kitabı, qat kombinasiyası, xassə qrupları, standartlar, pln, şablon
from: b5b86e8f
---

## Nə edəcəksiniz

Layihə paketini (`.ccbundle.zip`) açın və layihə ilə elə işləyin ki, o təşkil olunduğu kimi: görünüşləri, tərtibatları və xassə qrupları modelin üzərində.

Paket aşağıdakıları ehtiva edir:

- model IFC formatında,
- tərtibatlar PDF və DWG formatında,
- IFC-nin buraxdığı şeylərin siyahısı: görünüşlər (hər biri öz mərtəbəsi, qat kombinasiyası və miqyası ilə), tərtibatlar və onların üzərində yerləşdirilmiş çertyojlar, qruplarındakı xassə təyinləri, təsnifatlar və qatlar, qələm dəstləri, xətt tipləri, ştrixlər, səthlər və kompozitlər kimi standartlar.

Paketləri Archicad-in daxilində işləyən açıq mənbəli skript yazır və siyahıları birbaşa Archicad-in özündən soruşur. BimCraft `.pln` və ya `.tpl` fayllarını heç vaxt birbaşa oxumur; bax: [.pln və .pla layihə fayllarını açın](topic:pln-project-files).

## Paket hazırlayın

Skript önizləmədir: hələ hər Archicad versiyasında sınaqdan keçirilməyib. Onu [github.com/getcadcraft/bim-project-bundle](https://github.com/getcadcraft/bim-project-bundle) ünvanından götürün. Archicad 24 və ya daha yeni, Python 3.8 və ya daha yeni versiya lazımdır; başqa heç nə quraşdırmaq lazım deyil.

1. `archicad_bundle.py` faylını bir qovluğa saxlayın, məsələn `C:\cc-bundle`.
2. Archicad-də layihəni açın və adı dəqiq **CadCraft bundle** olan nəşr dəstini yaradın: 3D görünüş IFC kimi, hər tərtibat PDF kimi və hər tərtibat yenidən DWG kimi, hamısı diskdə bir düz qovluğa nəşr olunur.
3. Layihə açıq ikən `python archicad_bundle.py --probe --out .` əmrini bir dəfə işə salın. O yalnız oxuyur və `probe.json` faylını yazır.
4. `python archicad_bundle.py --out . --translator "IFC4 Reference View"` əmrini işə salın (seçdiyiniz IFC translatorunu istifadə edin). Archicad dəsti nəşr edir və skript `<project>.ccbundle.zip` faylını yazır.

Skript vasitəsilə nəşr alınmasa, dəsti əl ilə nəşr edin və `python archicad_bundle.py --out . --no-publish --files <folder>\*.ifc <folder>\*.pdf <folder>\*.dwg` əmrini işə salın. Repozitoriyanın README faylında bütün seçimlər var. Nəsə gəlmirsə, orada məsələ (issue) açın və `probe.json` faylını əlavə edin.

## Paketi açın

1. {{ui:Fayl seçin}} düyməsini klikləyin və ya `.ccbundle.zip` faylını BimCraft-a sürükləyin. {{ui:Qovluq aç}} ilə açdığınız qovluqda paketlər **Layihə paketləri** altında siyahıda görünür; birini adı ilə klikləyin.
2. Model hər IFC kimi açılır və sol tərəfdə faylın məlumatlarının altında **Layihə paketi** bölməsi görünür.

Heç nə yüklənmir: paket kompüterinizdə, bir zamanda bir fayl oxunur, buna görə böyük model iki dəfə kopyalanmır.

## Görünüşü göstərin

**Görünüşlər** altında görünüşlər layihədə olduqları qovluqlara görə qruplaşdırılır. Görünüşün adını klikləyin:

- **Mərtəbə planı** yalnız öz mərtəbəsini üstdən göstərir.
- **Qat kombinasiyası** həmin kombinasiyanın gizlətdiyi qatlardakı elementləri gizlədir. Status sətri neçə elementin gizləndiyini deyir.
- **Miqyas** adın yanında və status sətrində göstərilir.
- **3D görünüş** bütün mərtəbələri göstərir.

Hər şeyi yenidən göstərmək üçün {{ui:Göstər}} altında {{ui:Hamısını göstər}} istifadə edin və bütün mərtəbələri işarələyin.

:::note
BimCraft qatları IFC faylındakı qat təyinatları vasitəsilə tapır. IFC onlarsız ixrac olunubsa, qat kombinasiyası heç nəyi gizlətmir və status sətri 0 elementin gizləndiyini göstərir.
:::

## Tərtibatı açın

**Tərtibatlar** altında hər tərtibatda nömrəsi, adı, kağız ölçüsü və üzərinə yerləşdirilmiş görünüşlər göstərilir.

- **PDF** tərtibatın PDF-ni paketdən saxlayır.
- **DWG** tərtibatın çertyojunu 2D görünüşdə açır. Modelə qayıtmaq üçün istənilən görünüşü klikləyin.
- **… proqramında aç** tərtibatın faylını onunla işləyən proqrama, yeni vərəqdə göndərir: PDF-i MarkupCraft-a, DWG-ni CadCraft-a. Bu yalnız həmin proqram BimCraft-ın yanında açıq olduqda görünür. Fayl vərəq yüklənərkən paketdən oxunur və heç nə yüklənmir.

Heç biri olmayan tərtibat **Paketdə fayl yoxdur** yazır.

## Xassələri layihənin qruplarında görün

Elementi seçin. **Xassə qrupları** onun xassələrini layihədə təyin olunmuş qruplar altında göstərir; uyğunluq IFC üçün tərifin verdiyi xassə dəsti və ad ilə, ya da adına görə aparılır. Qalanları olduğu kimi {{ui:Xassələr}} daxilində qalır. **Xassə təyinləri** hər təyinatı öz qrupu, tipi və IFC adı ilə siyahıya alır.

## Standartlar və qeydlər

- **Standartlar** paketdəki qatları, qat kombinasiyalarını, qələm dəstlərini, xətt tiplərini, ştrixləri, səthləri, kompozitləri və materialları sayır.
- **Qeydlər** skriptin Archicad-in həmin versiyasından ala bilmədiyi şeyləri, BimCraft-ın oxuya bilmədiyi sahələri və paketin adını çəkib, amma saxlamadığı faylları siyahıya alır.

## Problemlərin həlli

- **"… zip-dir, amma layihə paketi deyil."** Zip-də `manifest.json` yoxdur. Açın və içindəki `.ifc` faylını açın.
- **"… bu BimCraft-ın oxuduğundan yeni layihə paketidir."** BimCraft-ı yeniləyin.
- **"… manifestin adını çəkdiyi modeli ehtiva etmir."** Zip kəsilib və ya redaktə olunub. Paketi yenidən hazırlayın.
- **Görünüş bütün mərtəbələri göstərir.** Onun mərtəbəsi modelin IFC-sində yoxdur (status sətri bunu deyir). IFC ixracına həmin mərtəbənin daxil olduğunu yoxlayın.

Bax də: [İki BIM proqramı arasında iş](topic:two-bim-programs) və [BimCraft hər formatdan nəyi oxuyur](topic:file-formats).
