---
title: Öz obyektlərinizi və ailə fayllarınızı Kitabxanaya əlavə edin
summary: Kitabxana tabında ailə fayllarını (.rfa) və IFC, DWG, DXF, glTF və ya OBJ fayllarını oxuyun, onları hər kitabxana elementi kimi yerləşdirin və yalnız sizin görə biləcəyiniz şəxsi siyahı olan Mənim obyektlərimdə saxlayın.
keywords: rfa, ailə, ailələr, ailə kitabxanası, öz obyektləri, mənim obyektlərim, şəxsi obyektlər, şəxsi kitabxana, obyektləri idxal et, istehsalçı məzmunu, bim obyektləri, ifc obyekti, gltf, obj, dwg blok, saxla, keçid, köçürmə
from: 886261f8
---

## Nə edəcəksiniz

Artıq sahib olduğunuz obyektləri BimCraft-a gətirin: Revit-dən ailə kitabxanası, istehsalçının IFC və ya DWG yükləməsi, və ya başqa modelləşdiricidən şəbəkə. Faylı **Kitabxana** tabında oxuyursunuz, obyekti modelinizə ideal IFC elementi kimi yerləşdirirsiniz və sonra yenidən istifadə etmək istəsəniz onu **Mənim obyektlərim** bölməsində saxlayırsınız.

## Addımlar

1. IFC modeli açın və ya yeni bina başladın.
2. **Xassələr** yanındakı **Kitabxana** tabını klikləyin.
3. {{ui:Files…}} klikləyin, sonra {{ui:Choose a file…}}. Bir və ya bir neçə faylı eyni anda seçin: `.rfa`, `.ifc`, `.dwg`, `.dxf`, `.glb`, `.gltf`, `.obj` və ya `.csv`. Və ya bütün qovluğu və içindəki qovluqları oxumaq üçün {{ui:Choose a folder…}} klikləyin (bir dəfəyə 200-ə qədər fayl).
4. Nəyin oxunduğunu görmək üçün kartı klikləyin: plan önizləməsi, ad, istehsalçı və model, ölçülər və qeydlər.
5. Yerləşdirmək üçün {{ui:Place in plan}} və ya {{ui:Place in model}} klikləyin.
6. Obyekti başqa layihələrdə yenidən istifadə etmək üçün {{ui:Keep in my objects}} klikləyin. Bir neçə fayl oxunduqda {{ui:Keep all in my objects}} hamısını bir dəfəyə saxlayır.
7. Sonra onları tapmaq üçün Kitabxana tabında **{{ui:My objects}}** klikləyin. Onlar hər kitabxana elementi kimi yerləşdirilir, əvəz olunur və yenilənir.

Fayllar bu tabda oxunur. {{ui:Keep in my objects}} seçənə qədər heç nə yüklənmir.

## Hər növ fayldan nə oxunur

| Fayl | Nə alırsınız |
|---|---|
| IFC | Hər elementin tipi öz real 3D forması, IFC sinifi və xassə dəstləri ilə obyekt kimi |
| glTF, GLB, OBJ | Real 3D forması şəbəkə kimi olan bir obyekt. Əvvəlcə ölçü vahidlərini və yuxarının hansı istiqamətdə olduğunu təyin edin. |
| DWG, DXF | Hər blok öz plan çertyoju və atributları ilə obyekt kimi |
| Ailə faylı (`.rfa`) | Ailənin adı, kateqoriyası, istehsalçısı, modeli, parametrləri və tipləri. **3D forması deyil:** ailənin Eni, Dərinliyi və Hündürlüyü ölçüsündə qutu onun yerinə durur. |
| CSV | Hər sətir üçün bir obyekt: ad, ölçülər və məlumatlar, qutu kimi çəkilmiş |

## Ailə faylları və onların 3D forması

`.rfa` faylının içindəki 3D forma sənədləşdirilməmiş formatda saxlanılır, ona görə BimCraft ailənin məlumatlarını oxuyur, həndəsəsini təxmin etmir. Kartda bu belə yazılır: "Bu ailədən həndəsə oxunmadı; yerində qutu durur."

Ailəni real forması ilə gətirmək üçün onu onu yaradan proqramdan (Revit) ixrac edin:

1. Ailəni, və ya içində yerləşdirilmiş ailəsi olan layihəni açın.
2. **File > Export > IFC** seçin. Bura ən yaxşı açılan ixrac parametrləri üçün [bax](topic:rvt-to-ifc).
3. BimCraft-da `.ifc` faylını {{ui:Files…}} ilə oxuyun. Hər ailə tipi öz forması və xassə dəstləri ilə ayrıca obyekt kimi gəlir.

Bir çox istehsalçı ailə faylının yanında IFC və ya DWG yükləməsi təklif edir. Onlar birbaşa oxunur.

## Ailə tipləri

Bir neçə tipi olan ailə bir element kimi {{ui:Variant}} seçimi ilə gəlir, hər tip üçün bir variant. Hər variantda tiplər arasında fərqli olan dəyərlər var və tipin Eni və Dərinliyi olduqda öz qutusu var. Bir tipi olan ailə həmin tipin dəyərləri ilə doldurulmuş adi element olur.

Bəzi ailələr tiplərini tip kataloqunda saxlayır: ailə faylı ilə eyni adlı yanındakı `.txt` faylı. İkisini birlikdə seçin və ya qovluğu seçin, kataloqun sətirləri variantlara çevrilir.

## Ailənin məlumatları real forma ilə

Qovluqda eyni adlı ailə faylı və IFC, glTF və ya OBJ faylı varsa (`Chair.rfa` və `Chair.ifc`), onları birlikdə seçin və ya qovluğu seçin. BimCraft bir element yaradır: ailə faylı ad, istehsalçı, model, parametrlər və tipləri verir, digər fayl isə real 3D formanı. Qeydlər formanın hansı fayldan gəldiyini göstərir. Bir forma hər tip üçün istifadə olunur.

Ailə faylında saxlanılmış şəkil varsa, elementin təfərrüatları həmin şəkli plan çertyojunun altında göstərir. Şəkil yalnız orada göstərilir; elementlə birlikdə saxlanılmır.

## Mənim obyektlərim

{{ui:My objects}} Kitabxanadakı sizin şəxsi siyahınızdır. Onun içində nə olduğunu yalnız siz görürsünüz: ictimai kitabxanada, axtarışda və komandanızda göstərilmir. Hesabınızı izləyir, buna görə kitabxanaya daxil olduqdan sonra digər kompüterdə eyni obyektlər var.

- Obyekti saxlamaq üçün kitabxanaya daxil olmalısınız. Bax: [kitabxanaya daxil olun](topic:library-credits).
- Obyekti saxlamaq həmin bir obyekti hesabınıza göndərir. Ona qədər o, kompüterinizdə qalır.
- {{ui:Remove from my objects}} obyekti siyahıdan çıxarır. Çertyojlarda artıq yerləşdirilmiş nüsxələr qalır.
- Obyekti hamı ilə paylaşmaq üçün onu seçdiyiniz lisenziya ilə ictimai kitabxanaya yükləyin.

:::note
My objects hələ sınaqdadır və hesabınız üçün açıq olmaya bilər. Mənbə yoxdursa və ya "My objects bu hesab üçün hələ açıq deyil" yazırsa, yenə də öz fayllarınızı {{ui:Files…}} ilə oxuyub yerləşdirə bilərsiniz; onlar modelinizin içində saxlanılır.
:::

## Tez-tez edilən səhvlər

- **`.rfa`-dan ailənin real formasını gözləmək.** Yalnız onun məlumatları oxunur. Forma üçün IFC ixrac edin.
- **Gözlədiyiniz bir element əvəzinə iki element.** Ailə və onun forma faylı yalnız adları uzantıdan başqa tam eyni olduqda və eyni qovluqda olduqda birləşdirilir.
- **Şəbəkə min dəfə böyük gəlir və ya yanına yıxılmış olur.** Faylı seçməzdən əvvəl {{ui:Files…}} altında {{ui:Units of the file}} və {{ui:Up axis of a mesh}} təyin edin.
- **Fayl üzərində "Ailə məlumatı yoxdur".** Bu, layihədir (başqa uzantı ilə saxlanılmış `.rvt`) və ya ailə şablonudur, ailə deyil. Bax: [Layihə və ya ailə faylını oxuyun](topic:read-rvt-file).
- **Saxlamağa icazəniz olmayan məzmunu saxlamaq.** Bəzi ödənişli kitabxanalar nüsxələrin öz xidmətləri xaricində saxlanmasına icazə vermir. Özünüzün hazırlamadığınız məzmunun şərtlərini yoxlayın.
