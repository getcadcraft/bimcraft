---
title: BimCraft ilə başlanğıc
summary: BimCraft bu gün nə edir, ilk modelinizi necə açırsınız, 3D-də necə baxırsınız, bir dəyəri necə dəyişirsiniz və nüsxəni necə saxlayırsınız.
keywords: başla, ilk işə salma, aç, ifc, rvt, dwg, sürətli başlanğıc, giriş, baxıcı, bim
from: fc2dea19
---

BimCraft CadCraft ailəsinin bina-model tətbiqidir. Bu versiyada bina fayllarını **açır, oxuyur və yoxlayır**, və **IFC modellərindəki məlumatları redaktə edir**. Hələ yeni elementləri çəkmir və ya modelləşdirmir. Onu model baxıcısı və yoxlayıcısı kimi düşünün; eyni zamanda IFC faylında adları, etiketləri və xassə dəyərlərini düzəltməyə imkan verir.

Açdığı fayllar:

| Fayl | Nə alırsınız |
|---|---|
| IFC (`.ifc`) | Tam model 3D-də: fırlatma, mərtəbələr, element xassələri və adların və xassə dəyərlərinin redaktəsi |
| Layihə və ailə faylları (`.rvt`, `.rfa`, `.rte`, `.rft`) | Fayl kartı: saxlandığı buraxılış, layihə məlumatı, önizləmə şəkli və əlaqəli fayllar. 3D yoxdur. |
| DWG və DXF | Çertyoj 2D-də: model sahəsi və bütün vərəqlər, qatlar, əlaqəli çertyojlar, çap görünüşü və etiketlənmiş yemək xidməti çertyojları üçün avadanlıq cədvəli |
| Layihə qovluğu | Qovluqdakı hər modelin hesabatı: ehtiyat nüsxələr, əlaqələr, zədələnmiş nüsxələr və hansı faylla başlamaq barədə tövsiyə |

Hər şey brauzerinizdə, kompüterinizdə baş verir. **Heç nə göndərilmir.** Ətraflı üçün bax [BimCraft-ın açdığı və saxladığı fayllar](topic:files).

## BimCraft-ı açın

1. Müasir brauzerdə BimCraft-ı açın. Chrome, Edge, Firefox və Safari hamısı işləyir; [Brauzerlər, cihazlar və yaddaş](topic:platforms) fərqləri sadalayır.
2. "Bir bina modelini açın" yazan boş ekranı gözləyin.

:::note
BimCraft brauzerdə, masaüstündə isə CadCraft Studio daxilində digər tətbiqlərlə birlikdə işləyir. Bulud saxlanması hələ mövcud deyil: faylları kompüterinizdən açır və nüsxələri ona geri saxlayırsınız.
:::

## İlk modelinizi açın

Modeli görməyin ən sürətli yolu IFC faylıdır.

1. Ekranın ortasında {{ui:Fayl seçin}} klikləyin.
2. {{pick:mac=Finder|windows=File Explorer|linux=fayl meneceriniz}} daxilində `.ifc` faylı seçin və təsdiqləyin.
3. Ekranın altındakı status sətri "IFC mühərriki başladılır…" və sonra "Həndəsə qurulur" yazana qədər gözləyin.

Ekranın ortasında modeli 3D-də, solda {{ui:Fayl}} paneli və {{ui:Mərtəbələr}} siyahısını, sağda isə boş {{ui:Xassələr}} panelini görməlisiniz. Status sətri "Açıldı" və elementlərin sayı ilə bitir.

:::tip
Faylı {{pick:mac=Finder|windows=File Explorer|linux=fayl meneceriniz}} daxilindən birbaşa səhifəyə də sürükləyə bilərsiniz. Sürüklədiyiniz zaman ekran "Açmaq üçün buraxın" yazır.
:::

:::offline
IFC mühərriki ilk dəfə IFC modelini açdığınızda saytdan yüklənir, BimCraft oflayn üçün saxlanılmayıbsa. DWG və DXF çertyojları, layihə faylları və qovluqlar əlavə heç nə tələb etmir: onların oxucuları tətbiqin tərkibindədir. Tətbiq panelindəki düymə {{ui:Oflayn hazırdır}} yazırsa, hər şey oflayn açılır. Yoxdursa, IFC modelləri bu sekmədə artıq açılmış olmadığı halda yenidən qoşulana qədər açılmayacaq. Bax [Onlayn və oflayn](topic:online-offline).
:::

:::online
Əlaqəsiz bir yerə gedirsiniz? Tətbiq panelində {{ui:Oflayn üçün saxla}} klikləyin və {{ui:Oflayn hazırdır}} görünənə qədər gözləyin. Saxlanılmış nüsxə (təxminən 11 MB) IFC mühərrikini də daxil edir. Bax [Oflayn işləmə](common:offline).
:::

## Ətrafa baxın

:::mouse
1. Modelin ətrafında fırlanmaq üçün sol siçan düyməsi ilə sürüşdürün.
2. Miqyaslamaq üçün çarxı fırladın.
3. Sağ siçan düyməsi ilə sürüşdürərək sürüşdürün. Mac trackpad-də isə {{key:Shift}} basın və sürüşdürün.
4. Modelin hamısını yenidən görmək üçün {{key:F}} basın və ya {{ui:Sığdır}} klikləyin.
:::

:::touch
1. Bir barmaqla sürüşdürərək fırlanın.
2. İki barmaqla sıxıb miqyaslayın, iki barmağı birlikdə tərpətməklə sürüşdürün.
3. Modelin hamısını yenidən görmək üçün {{ui:Sığdır}} toxunun.
:::

## Bir real iş görün: etiketi düzəldin

1. Modeldə divara, qapıya və ya istənilən elementə klikləyin. O, mavi olur və xassələri sağda görünür.
2. {{ui:Xassələr}} panelində **Tag** yanındakı dəyərə klikləyin.
3. Yeni etiketi yazın və {{key:Enter}} basın.
4. Solda açılan {{ui:Dəyişikliklər}} bölməsinə baxın: dəyişikliyiniz köhnə və yeni dəyərlə siyahılanır.

## Nüsxə saxlayın

1. {{ui:Dəyişikliklər}} bölməsində {{ui:IFC kimi saxla}} klikləyin və ya {{key:Mod+S}} basın.
2. Yeni faylı yükləmələr qovluğunuzda tapın. Adı orijinalın adına " (edited)" əlavə olunmaqla yaranır, məsələn `Clinic (edited).ifc`.

Orijinal faylınız heç vaxt dəyişmir. [IFC xassələrini dəyişdirin və redaktə olunmuş nüsxəni saxlayın](topic:edit-ifc-properties) redaktəni tam izah edir.

## Sonra hara getmək olar

- [BimCraft ekranı](topic:workspace): hər paneli adı ilə.
- [Digər BIM və çertyoj proqramlarından keçid](topic:coming-from): Revit-ə öyrəşmisinizsə nə fərqli hiss olunacaq.
- [Bütün layihə qovluğunu açın](topic:open-project-folder): BimCraft-a layihə qovluğunu göstərin və faylları sıralamasına icazə verin.
- [DWG və ya DXF çertyojuna baxın](topic:view-dwg): vərəqlər, qatlar və çap görünüşü.
