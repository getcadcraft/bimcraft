---
title: Layihə mərhələləri: brifdən sahə təlimatlarına qədər
summary: Hədəf sahələri olan brifdən başlayın, çəkdikcə çatır və ya çatmır olduğunu görün, konsept variantlarını ona görə müqayisə edin, spesifikasiyaları və detalları tiplərlə əlaqələndirin, emal çertyojlarını nəzərdən keçirin və sahə təlimatlarını elementlərə görə qeyd edin.
keywords: brif, məkan cədvəli, hədəf sahə, çatır, çatmır, otaqlar, konsept variantları, variantlar, kütlə, büdcə, spesifikasiya, spes, detal, konstruktiv detal, tip, emal çertyoju, nəzərdən keçirmə, təsdiqlə, yenidən təqdim, sahə təlimatı, düzəliş, səbəb, sahə, mərhələ
from: 0a49b852
---

## Nə edəcəksiniz

Layihənin bütün mərhələlərini bir paneldə idarə edin: müştərinin brifini hədəf sahələri olan otaqlar kimi yazın, konsept variantlarını ona görə müqayisə edin, spesifikasiyanı və konstruktiv detalları aid olduqları tiplərlə saxlayın, podratçılardan gələn emal çertyojlarını nəzərdən keçirin və dəyişdirdikləri elementlərə görə sahə təlimatlarını qeyd edin.

## Addımlar

1. Sol paneldə **Layihə mərhələləri** bölməsini, sonra **Brif** bölməsini açın.
2. Otaqları hər sətirdə bir olmaqla yapışdırın: `Yaşayış; 1; 30` 30 m² olan bir otaq deməkdir. Say buraxıla bilər. **Otaqları əlavə et** seçin. Müştərini, sahəni, büdcəni, tolerantlığı və proqramı doldurun, sonra **Brifi saxla** seçin.
3. Divarları çəkin. Divarların əmələ gətirdiyi, adı brif otağının adı ilə eyni olan hər otaq sayılır (sonra gələn rəqəm, məsələn "Yataqxana 2", nəzərə alınmır). **Məkan cədvəli** **Çatır**, **Çatmır**, **Artıqdır** və ya **Çəkilməyib** göstərir, fərq isə m² ilə verilir.
4. Bu üsulla yeni layihəyə başlamaq üçün **Brifdən yeni layihə başlat** seçin. Yadda saxlanmış şablonlardan birini seçsəniz, o şablondan yeni model açılır və brif onun ilk addımı kimi əlavə olunur.
5. **Brifə görə variantlar** bölməsini açın. Modeldə saxlanan hər kütlə variantı ümumi sahəsi, brifin tələb etdiyi sahə və brifin neçə otağının sığdığı ilə birlikdə eyni miqyasda göstərilir. **Brifi burada yığ** brif otaqlarını variantın mərtəbələrinə, ən aşağıdan başlayaraq yerləşdirir və sığmayanları bildirir. Qiymət yalnız layihənin qiymət cədvəlindən götürülür; uyğun sətir yoxdursa, "Qiymət yoxdur" yazılır.
6. **Tiplər, spesifikasiyalar və detallar** bölməsini açın. Hər divar, qapı, pəncərə və döşəmə tipi spesifikasiya mətninin olub-olmadığını, ona bağlı detalları və spesifikasiya, cədvəllər və vərəqlərin harada ziddiyyət təşkil etdiyini göstərir. **Detal bağla** DetailCraft və ya CadCraft faylı, ünvan və ya bu modelin vərəqini əlavə edir.
7. **Emal çertyojları** bölməsini açın. Emal çertyojunun əhatə etdiyi elementləri modeldə seçin, sonra **Qəbul et** seçin. Nəzərdən keçirən şəxsin adı və qeydi ilə **Təsdiqlə**, **Qeydlərlə təsdiq** və ya **Düzəliş et** seçin. **Yenidən təqdim edildi** eyni qeydin növbəti düzəlişini yaradır və nəzərdən keçirmə tarixçəsini saxlayır. Vəziyyət həm də hər elementdə yazılır.
8. **Sahə təlimatları** bölməsini açın. Elementləri seçin, səbəbi yazın və bunun dəyərə və vaxta necə təsir etdiyini öz sözlərinizlə təsvir edin, sonra **Qeyd et** seçin. Buraxılış qeyd edildikdən sonra **Bu buraxılışdan sonra dəyişiklikləri izah et** hansı dəyişdirilmiş elementləri təlimatın əhatə etdiyini və heç nə qeyd edilmədən dəyişmiş elementləri göstərir.

## Bilmək yaxşıdır

- Hər addım bir **Geri qaytar** əmrilə geri alınır. Heç nə rədd edilmir: çatmayan brif, mətnlə ziddiyyət təşkil edən tip və ya gecikmiş emal çertyoju **Problemlər** bölməsində xəbərdarlıq və ya qeyd kimi görünür.
- Brif otaqları divarsız məkanlardır. Onlar çəkilmiş sahə deyil, hədəf daşıyırlar, ona görə otaq cədvəlləri və COBie onları çəkilmiş otaq kimi saymır.
- Yerləşdirmə yalnız sahəyə görə otaqları mərtəbələrə yığır. Heç bir divar çəkmir.
- Spesifikasiya mətni modeldən **Sənədlər** bölməsində yazılır. Burada o, yalnız modelin öz ölçüləri ilə müqayisə olunur: heç bir standartın bəndi sizin üçün yazılmır.
- Emal çertyojları və sahə təlimatları **Buraxılışlar və düzəlişlər** paneli ilə eyni tarixçədə qeydlərdir, ona görə hər iki panel onları göstərir.
- Emal çertyojunun vəziyyəti hər elementin xüsusiyyətidir (`CadCraft_ShopDrawing`), sahə təlimatı isə `CadCraft_SiteInstruction`-dır, ona görə **Tap** və **Xassəyə görə rəngləndir** onlardan istifadə edə bilər.
- Yerində yoxlanmış işarələr (Mərhələ 7) **Xassələr** bölməsində **Yoxlama** altındadır.
