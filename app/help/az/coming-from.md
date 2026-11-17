---
title: Digər BIM və çertyoj proqramlarından keçid
summary: Masaüstü BIM müəlliflik və DWG baxışından olan vərdişlərin BimCraft-a necə uyğunlaşdığı və insanları çaşdıran fərqlər.
keywords: keçid, köçürmə, tanış, masaüstü bim, ailə, parametrlər, layihə brauzeri, xassələr paneli, görünüş kubu, xref, qat idarəçisi, fərqlər, müqayisə
from: 2de629af
---

Revit-i bilirsinizsə, BimCraft-ın əksəriyyəti sözlərə görə tanış, əhatə dairəsinə görə isə yad görünəcək. Ən vacib fərq: **bu versiya modelləri oxuyur və yoxlayır, IFC məlumatlarını redaktə edir. Hələ Revit kimi müəlliflik etmir.** Divar çəkə, ailə yerləşdirə, görünüş və vərəq yarada və ya layihə faylını saxlaya bilməzsiniz. Brauzeri olan istənilən kompüterdə demək olar ki, hər bina faylını aça, içindəkini görə, bütün layihə qovluğunu yoxlaya və IFC modelindəki məlumatları düzəldə bilərsiniz.

## Vərdişlərin uyğunlaşdırılması

| Əvvəllər istifadə etdiyiniz | BimCraft-da |
|---|---|
| Modeli görmək üçün Revit-də `.rvt` açmaq | BimCraft `.rvt`-ni fayl kartı kimi açır: versiya, layihə məlumatı, keçidlər, önizləmə. 3D model üçün IFC ixrac edin və onu açın. [Layihə və ya ailə faylını oxuyun](topic:read-rvt-file) |
| Faylı açmazdan əvvəl hansı versiyada saxlandığını yoxlamaq | Kartın yuxarısında "Revit … versiyasında saxlanılıb" yazılır, fayl yenilənmədən və toxunulmadan |
| Layihə brauzeri | Görünüş və vərəqlərin brauzeri yoxdur. IFC modelinin {{ui:Mərtəbələr}} və {{ui:Elementlər}} siyahıları var; çertyojda vərəq sekmələri var |
| Xassələr palitrası | Klikladığınız element üçün sağdakı {{ui:Xassələr}} paneli. Parametr qrupları əvəzinə IFC xassə dəstləri |
| Nümunə və növ parametrləri | Nümunə xassə dəstləri və "(növ)" işarəli dəstlər. Növ dəyişikliyi, Revit-də olduğu kimi, həmin növün hər elementinə tətbiq olunur. [Növ xassəsini növün hər elementi üçün dəyişin](topic:type-vs-instance) |
| Növü redaktə et | Dialoq yoxdur: "(növ)" dəstində dəyərə klikləyib yazın |
| Çoxlu elementi seçmək, filtrlər, Bütün nümunələri seç | Bir vaxtda bir element. Hələ qurulmayıb |
| Görünüş kubu və naviqasiya təkəri | Aşağı-sağ küncdə görünüş kubu, dörd düymə ({{ui:Sığdır}}, {{ui:Üst}}, {{ui:Ön}}, {{ui:Yan}}) və sərbəst fırlanma. Naviqasiya təkəri yoxdur |
| Shift və orta düymə ilə fırlatma, orta düymə ilə sürüşdürmə | Sol sürükləmə fırladır, sağ sürükləmə (və ya {{key:Shift}} və sürükləmə) sürüşdürür, təkər miqyası dəyişir. {{ui:BIM lenti}} menyu üslubu sürüşdürmə üçün orta düyməni, fırlatma üçün {{key:Shift}} və orta düyməni dəyişir. [Menyular, düymələr və siçan](topic:menus-keys-and-mouse) |
| Mərtəbə planları, kəsiklər, kəsik qutuları | Hər dəfə bir {{ui:Kəsik}} müstəvisi ({{key:X}}); kəsik qutusu və ya 2D planlar yoxdur. [IFC modelini kəsik müstəvisi ilə kəsin](topic:section-plane) |
| Görünüşdə gizlət, təcrid et, görünürlük/qrafika | {{ui:Mərtəbələr}} açıq və ya söndürülmüş, {{ui:Məkanlar}} və {{ui:Kənarlar}}. Hələ hər element üzrə gizlətmə yoxdur |
| Otaqlar | IFC məkanları, əvvəlcə gizlənib. {{ui:Məkanlar}} klikləyin |
| Saxla, Fərqli saxla, mərkəzlə sinxronlaşdır | {{ui:IFC kimi saxla}} yeni IFC faylı yükləyir. Orijinal heç vaxt dəyişmir. Mərkəzi model və birgə iş yoxdur |
| {{key:Mod+Z}} ilə geri qaytar | Saxlayana qədər IFC redaktələrində işləyir. [IFC xassələrini dəyişin və redaktə olunmuş nüsxəni saxlayın](topic:edit-ifc-properties) |
| Keçidləri idarə et | Layihə qovluğunu açın: hər keçid yoxlanılır və **Bu qovluqda**, **Eyni ad tapıldı**, **Kitabxana faylı** və ya **Bu qovluqda deyil** kimi qeyd olunur. [Bütün layihə qovluğunu açın](topic:open-project-folder) |
| Yoxlama, ya da faylın zədəli olub-olmadığını görmək üçün açmaq | Qovluq hesabatı hər nüsxəni və ehtiyat surəti saniyələr ərzində kəsilmə üçün yoxlayır. [Qovluqda zədələnmiş nüsxələri yoxlayın](topic:check-folder-health) |
| Dağınıq qovluqdan düzgün faylı seçmək | {{ui:Buradan başlayın}} qutusu səbəbləri ilə birlikdə birini təklif edir |

Əsasən modelləri yoxlamaq üçün açırsınızsa, model yoxlama və ya IFC baxış proqramında olduğu kimi, {{ui:Görüntüləyici}} menyu üslubunu seçin: baxış və yoxlama alətləri birinci gəlir, tikinti alətləri isə bir menyuda gözləyir. Bax: [Menyular, düymələr və siçan](topic:menus-keys-and-mouse).

## DWG fayllarına baxışdan

Əgər DWG-ləri AutoCAD-də və ya DWG baxış proqramında açırsınızsa:

| Əvvəllər istifadə etdiyiniz | BimCraft-da |
|---|---|
| Model və tərtibat sekmələri aşağıda | Çertyojun üstündə sekmələr: {{ui:Model}} və hər vərəq üçün biri |
| ZOOM Extents, təkərə iki dəfə klik | İki dəfə klik, {{key:F}} və ya {{ui:Sığdır}} |
| Orta düymə ilə sürüşdürmə | İstənilən düymə ilə sürükləyin |
| Qat idarəçisi | {{ui:Qatlar}} siyahısı: göstərmək üçün işarələyin, gizlətmək üçün işarəni silin, {{ui:Hamısını aç}} və {{ui:Hamısını söndür}} |
| Xref idarəçisi | Sağda **Əlaqəli çertyojlar**, **Göstərilir** və ya **Tapılmadı** ilə, və {{ui:Əlaqəli çertyojları əlavə edin…}} |
| Çap önizləməsi | {{ui:Çap görünüşü}} və ya {{key:P}}: ağ fonda qara, xətt qalınlıqları ilə. Çap etmir |
| Blok atributlarının məlumat çıxarılması | Etiketli yemək xidməti çertyojları üçün {{ui:Avadanlıq}} sekmәsi, {{ui:CSV yüklə}} ilə |
| Ölçmək, çəkmək, redaktə etmək, fərqli saxlamaq | BimCraft-da yoxdur. CadCraft çertyoj tətbiqi çəkir və redaktə edir |

## İnsanları çaşdıran fərqlər

- **Brauzerdə işləyir və brauzer fayllarınıza diqqətlidir.** BimCraft yalnız seçdiyiniz və ya sürüklədiyiniz fayl və qovluqları oxuya bilər. Öz başına fayl aça bilmir və üstündən yazmaq mümkün deyil. Hər saxlama yükləmədir.
- **Heç nə göndərilmir.** Bəzi brauzerlərin qovluq dialoqlarındakı "upload" sözü brauzerin öz ifadəsidir. Fayllar kompüterinizdə qalır.
- **IFC model formatıdır.** Layihə faylı kart kimi açılır, çünki onun 3D məzmunu sənədləşdirilməyib. IFC-ni modellərin BimCraft-a daxil olma yolu kimi qəbul edin.
- **Redaktələr yazılanda kopyalanır.** Bir elementin dəyərini dəyişmək qonşularına heç vaxt təsir etmir, hətta ixrac edən proqram həmin dəyəri onlar arasında paylaşmış olsa belə. Növ xassələri qəsdən istisnadır.
- **Layihə yoxdur, görünüşlər yoxdur.** BimCraft eyni anda bir fayl göstərir və sekmәni bağladıqdan sonra onun haqqında heç nə yadda saxlamır, yalnız Chrome və Edge-də son qovluqların adları istisna olmaqla.
- **Mac düymələri.** Revit-in Windows qısayolları Ctrl istifadə etdiyi yerdə BimCraft qısayolları {{key:Mod}} istifadə edir: Mac-da Command.
- **Siçan vərdişləriniz.** Fırlatma sol düymədədir, Shift və orta düymə ilə deyil; yalnız {{ui:BIM lenti}} menyu üslubunu seçmədikdə və ya düymələri [Menyular, düymələr və siçan](topic:menus-keys-and-mouse) bölməsində özünüz təyin etmədikdə.

Bu gün əvəzinə nə istifadə etməli olduğunuz üçün [Hələ nə qurulmayıb](topic:not-built-yet) bölməsinə baxın.
