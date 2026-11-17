---
title: Növ paketləri: divar növlərini açıq fayllar kimi paylaşın
summary: Divar növlərini qatları, materialları, etiketləri və təsnifat kodları, həmçinin ailələr ilə bir açıq fayl kimi (sadə JSON və ya IFC) saxlayın və başqa layihəyə əlavə edin. Başqa proqramın IFC faylındakı divar növləri də oxuna bilər.
keywords: növ paketi, növlər, divar növü, paylaşmaq, ixrac, idxal, kitabxana, açıq format, json, ifc, IfcWallType, IfcMaterialLayerSet, IfcProjectLibrary, materiallar, qatlar, şablon, ofis standartı, ailələr
from: e4c91331
---

## Nə edəcəksiniz

Divar növlərinizi bir layihədən başqasına aparın, ya da başqa proqramda işləyən birinə verin. Növ paketi hər divar növünü qatları, qalınlıqları, materialları, özəyi, boşluqları, qat prioritetini, inkişaf səviyyəsini, həcmlərin hesablanması məlumatlarını və təsnifat kodlarını, həmçinin əlavə etdiyiniz ailələri saxlayır. Bu açıq fayldır: hər kəsin oxuya biləcəyi sadə JSON mətni və ya IFC faylı. Heç nə firmaya, ölkəyə və ya hesaba bağlı deyil.

## Layihədən növləri saxlayın

1. Model panelində **Məlumat** açın və {{ui:Növ paketləri}} seçin.
2. {{ui:Bu layihədən növləri saxla}} altında daxil ediləcək divar növlərini işarələyin. Layihənin öz növləri artıq işarəlidir; başlanğıc növ əlavə edilə bilər və surət kimi daxil olur. Ailələri daxil etmək istəyirsinizsə, onları işarələyin.
3. {{ui:Paketin adı}} yazın.
4. {{ui:Paket kimi saxla (.json)}} `.cctypes.json` faylı yükləyir. {{ui:IFC kimi saxla (.ifc)}} yalnız növləri ehtiva edən IFC faylı yükləyir: hər divar növü IfcWallType kimi, material qat dəsti, materiallar və təsnifatla birlikdə, istənilən BIM proqramı üçün.

## Layihəyə növ əlavə edin

1. Eyni dialoqda {{ui:Paket və ya IFC faylı aç…}} seçin və `.json` paketi və ya `.ifc` faylı seçin.
2. Dialoq faylda nə olduğunu sadalayır: hər divar növü, qalınlığı, qat sayı və kodları, materiallar və ailələr.
3. {{ui:Bu layihədə artıq olan növ}} ilə nə olacağını seçin: **Layihənin saxlanılsın**, **Paketin növünü surət kimi əlavə et** (adına "(2)" ilə bitən yeni ad verilir) və ya **Əvəz et (yalnız heç bir divar istifadə etmirsə)**.
4. {{ui:Layihəyə əlavə et}}. Dialoq nə əlavə olunduğunu, surət kimi köçürüldüyünü, əvəz olunduğunu və ya saxlandığını göstərir. Bu bir geri alma addımıdır.

Yeni növlər Divar alətinin növ siyahısında dərhal görünür.

## Döşəmə, dam və tavan növləri

Saxlanılacaq növlər siyahısında layihənin döşəmə, dam və tavan növləri və onların başlanğıc növləri də var (Döşəmə, Dam, Tavan kimi işarələnib). Paket dörd növün hamısını daşıya bilər; hər növ öz IFC sinfini adlandırır (IfcWallType, IfcSlabType, IfcCoveringType). Elementlərin istifadə etdiyi döşəmə, dam və ya tavan növü paketdən əvəz olunmur: onu növ redaktorunda dəyişin.

## Bir növ Kitabxana elementi kimi

Yalnız bir növü işarələyin və **Kitabxana elementi kimi saxla…** seçin. Bu, `.cctype.json` faylı saxlayır: yalnız həmin növü (qatları, materialları, inkişaf səviyyəsi və təsnifat kodları) saxlayan Növlər tipli Kitabxana elementi. Paylaşmaq üçün onu Kitabxanaya yükləyin. **Paket və ya IFC faylı aç** bu elementi də oxuyur və onun növünü paket kimi layihəyə əlavə edir.

## Bilmək yaxşıdır

- Başqa proqramın IFC faylı burada da açıla bilər. Materialların qatları olan hər divar növü oxunur: adı, qatların materialları və qalınlıqları və hər hansı boşluq faylın öz məlumatıdır. Hansı qatın özək olduğu və hər qatın nə etdiyi (örtük, konstruksiya, izolyasiya) təxmin olunur, növ **(təxmin olunub)** kimi işarələnir və divar növü redaktorunda yoxlamalısınız. Heç bir qatı olmayan divar növü kənarda qalır və adı göstərilir.
- Layihədə artıq olan material saxlanılır. Adı tutulmuş yeni material adının sonuna "(paket)" alır.
- Divarların istifadə etdiyi növ paketdən heç vaxt əvəz olunmur. Onu divar növü redaktorunda dəyişin: o, divarları düzgün köçürür.
- Bir divarda təyin olunmuş kod ötürülmür: o divara məxsusdur. Növdə təyin olunmuş kod isə ötürülür.
- Formatda olmayan sahəsi olan fayl, materialı çatışmayan qat və ya sadə mətn olmayan hər şey qəbul edilmir; mesaj harada və niyə olduğunu deyir.
- Hələ qurulmayıb: döşəmə, dam və tavan növləri (bu versiyada növləri yoxdur: hər birinin öz qalınlığı var), ailələrdən başqa qapı və pəncərə növləri və başqa proqramın faylından ştrixlamalar və ya rənglər.
