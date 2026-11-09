---
title: BimCraft-ın açdığı və saxladığı fayllar
summary: BimCraft-ın açdığı hər format, nəyi saxladığı, saxlanılan faylların hara getdiyi və brauzerlər arasında və oflayn işlədikdə nələrin dəyişdiyi.
keywords: formatlar, aç, saxla, ixrac, yüklə, ifc, rvt, rfa, rte, rft, dwg, dxf, step, stp, csv, göndərmə, məxfilik, fayl ölçüsü
from: a7275dbf
---

BimCraft faylları kompüterinizdə, brauzer sekmesində oxuyur. **Heç nə göndərilmir** CadCraft-a və ya başqasına. Saxlayanda BimCraft brauzerə yükləmək üçün yeni fayl verir; açdığınız faylın üzərinə heç vaxt yazmır.

## Nəyi açır

| Format | Genişləmələr | Nə alırsınız |
|---|---|---|
| IFC | `.ifc` | Modeli 3D-də, mərtəbələri, elementlərin sayını və hər elementin xassələrini. Adları, etiketləri və tək xassə dəyərlərini dəyişmək olar. |
| Layihə və ailə faylları | `.rvt` `.rfa` `.rte` `.rft` | Fayl kartı: buraxılış, versiya, birgə iş, layihə məlumatı, ailə parametrləri, əlaqəli fayllar və önizləmə şəkli. 3D yoxdur. |
| DWG | `.dwg` | Çertyoj 2D-də: model sahəsi, hər vərəq, qatlar, əlaqəli çertyojlar, şəkillər və çap görünüşü. Model sahəsi 3D-də də. AutoCAD 2000-dən 2018-ə qədər formatlar yoxlanılıb. |
| DXF | `.dxf` | DWG ilə eynidir. |
| STEP | `.step` `.stp` | 3D-də detal, avadanlıq parçası və ya təchizatçının modeli (AP203, AP214, AP242): hər bərk cisim bir elementə (bina elementi proksisinə) çevrilir, bir mərtəbədə kiçik IFC modelinin hissəsi kimi, real ölçüdə üçbucaqlar kimi oxunur; yığım faylın yerləşdirdiyi yerdə hər detalı ilə birlikdə. Bundan sonra hər IFC kimi işləyir: xassələr, kəsiklər, ölçmə, IFC kimi saxla. Rənglər və yığım ağacı oxunmur. |
| Nöqtə buludları | `.las` `.laz` `.e57` `.ply` `.pcd` `.ptx` `.pts` `.xyz` | Skan 3D görünüşdə, modelin yanında və ya təkbaşına: bax [Nöqtə buludunu modelin yanında göstərin](topic:point-clouds). |
| Layihə paketi | `.ccbundle.zip` | Modelin görünüşləri, tərtibatları və xassə qrupları ilə: bax [Layihə paketini açın](topic:open-project-bundle). |
| Qovluq | istənilən | İçindəki hər model, çertyoj və layihə paketinin hesabatı. Hesabatdakı istənilən IFC, model, çertyoj və ya paket bir kliklə açılır. |

[BimCraft hər formatdan nəyi oxuyur](topic:file-formats) ətraflı izah edir.

BimCraft faylın nə olduğunu adına əlavə olaraq onun ilk baytlarına baxaraq müəyyən edir, ona görə də qeyri-adi genişlənməli layihə faylı da fayl kartı kimi açılır.

### Açılmayanlar

- `.ifczip` və `.ifcxml`: BimCraft deyir: ".ifczip hələ dəstəklənmir. Modeli sadə .ifc faylı kimi saxlayın və ya ixrac edin." `.ifczip`-i açın (içində sadə `.ifc` var) və ya modeli sadə IFC kimi yenidən ixrac edin.
- DGN çertyojları qovluq hesabatında siyahılanır, amma açılmır.
- PDF, şəkillər və ofis faylları təkbaşına açılmır. Şəkillər DWG-nin içində şəkil kimi istifadə olunur; {{ui:Versiya}} › {{ui:Çertyojdan…}} isə PDF-in və ya skanın səhifələrini divarlara çevirir: bax [Planlar dəstindən divarlar](topic:walls-from-plans).

## Nəyi saxlayır

| Düyməni basırsınız | Alırsınız | Harada |
|---|---|---|
| {{ui:IFC kimi saxla}} | Redaktələrinizlə yeni IFC faylı, adı "*orijinal ad* (edited).ifc" | Brauzerinizin yükləmələr qovluğu |
| Avadanlıq cədvəlində {{ui:CSV yüklə}} | Siyahıdakı elementlərin CSV faylı, adı "*çertyoj adı* equipment.csv" | Brauzerinizin yükləmələr qovluğu |

Digər şeylər yarandığı yerdə saxlanılır, hər biri öz mövzusunda: {{ui:USD}} ([Modeli USD kimi ixrac edin](topic:usd)), {{ui:Collada}} (.dae və Google Earth .kmz: [Modeli Collada və ya Google Earth üçün ixrac edin](topic:collada)), {{ui:Render üçün}} .glb, render olunmuş şəkillər, vərəqlər və planlar PDF kimi, cədvəllər və siyahılar CSV kimi, BCF məsələləri, COBie cədvəli, ailə faylları və qeydiyyatdan keçmiş skanlar LAS və ya E57 kimi. BimCraft DWG, DXF və ya layihə fayllarını saxlamır və açdığınız fayllara heç vaxt dəyişiklik etmir.

:::chromium
Chrome və Edge yükləmələri parametrlərində təyin olunmuş qovluğa saxlayır, adətən Yükləmələr. Hər fayl üçün harada saxlamağınızın soruşulmasını istəyirsinizsə, brauzerin yükləmə parametrlərində "Hər faylı yükləməzdən əvvəl harada saxlanılacağını soruş" seçimini aktiv edin.
:::

:::firefox
Firefox parametrlərində "Faylları harada saxlamağımı həmişə soruş" seçilməyibsə, Yükləmələr qovluğuna saxlayır.
:::

:::safari
Safari **Safari > Parametrlər > Ümumi > Fayl yükləmə yeri** altında başqa qovluq seçməsəniz, Yükləmələrə saxlayır.
:::

## Ikinci dəfə saxlamaq

Hər saxlama modelin **açdığınız andan etdiyiniz bütün redaktələrlə** tam nüsxəsini yükləyir, yalnız son saxlamadan sonrakı redaktələri yox. {{ui:Dəyişikliklər}} siyahısı hər saxlamadan sonra yenidən boş başlayır, ona görə saxlamadan geri qayıda bilməzsiniz. Orijinaldan yenidən başlamaq üçün orijinal faylı yenidən açın.

## Böyük fayllar və yaddaş

- **IFC** faylları tam şəkildə sekmənin yaddaşına oxunur, 3D həndəsə isə üstəlik daha çox yaddaş tutur. Bir neçə yüz meqabaytlıq model noutbuk üçün çox ola bilər. 1,5 milyon üçbucaqdan yuxarı olduqda yaddaşa qənaət üçün kənarlar söndürülür ("Çox böyük modellər üçün kənarlar söndürülüb").
- **Layihə faylları** tam oxunmur. BimCraft yalnız ehtiyac duyduğu kiçik hissələri oxuyur, fayl nə qədər böyük olsa da təxminən 40 KB-dan 100 KB-a qədər; ona görə şəbəkə diskindəki 500 MB-lıq mərkəzi model bir anda açılır.
- **DWG və DXF** faylları tam oxunur. Çox böyük çertyoj "Bu çertyoj çox böyükdür; yalnız bir hissəsi göstərilir." yazır.
- **Qovluqlar** 20 000 fayla qədər açılır. Hər model kartının ehtiyac duyduğu yalnız bir neçə kilobayt oxunur.

Daha çox məlumat üçün bax [Brauzerlər, cihazlar və yaddaş](topic:platforms).

## Onlayn və oflayn

Faylları açmaq heç vaxt internet tələb etmir. Bir oxucu ehtiyac duyduğu ilk dəfə saytdan yüklənir: IFC mühərriki, ilk dəfə IFC modelini açdığınızda ("IFC mühərriki başladılır…"). DWG və DXF oxucuları tətbiqin tərkibindədir.

:::offline
Oflayn-sınız. Tətbiq panelindəki düymə {{ui:Oflayn hazırdır}} yazırsa, bütün formatlar adi kimi açılır. Yoxdursa, IFC modelləri bu sekmədə artıq açılmış olmadığı halda yenidən qoşulana qədər açıla bilməz. Bax [Onlayn və oflayn](topic:online-offline).
:::

Əlaqə olmadan BimCraft-dan istifadə etmək üçün onlayn olarkən tətbiq panelində {{ui:Oflayn üçün saxla}} düyməsinə klikləyin və {{ui:Oflayn hazırdır}} görünənə qədər gözləyin. Saxlanılmış nüsxə təxminən 33 MB-dır; IFC mühərrikini də daxil edir, ona görə IFC modelləri oflayn da açılır. [Oflayn işləmə](common:offline) ümumi olaraq saxlanılmış nüsxələri izah edir.

## Bulud saxlanması

Bulud saxlanması hələ mövcud deyil. Redaktə etdiyiniz nüsxələri kompüterinizdə və ya ofisinizin fayl serverində, hər hansı digər fayl kimi saxlayın. Bax [Fayllarınız](common:your-files).
