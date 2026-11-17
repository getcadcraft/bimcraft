---
title: Divar formaları, bölmə, sürüşmə, uzatma və kilidləmə
summary: Divarları düzbucaqlı, çoxbucaqlı, qövs kimi, seçilmiş xətlər üzrə və ya kliklədiyiniz bağlı konturun ətrafında çəkin; onları bölün, bir hissəni çıxarın, sürüşdürün, qutu ilə uzadın, düzləşdirin və bir-birinə, ölçüyə və ya şəbəkə xəttinə kilidləyin. Hər dəyişiklik birləşmələri saxlayır və bir geri qaytarma addımıdır.
keywords: növü dəyiş, tipi dəyiş, yenidən tip ver, nə hərəkət etdi, lod, inkişaf səviyyəsi, birləşmə üslubu, bucaq birləşməsi, uc birləşməsi, künclü bərabərləşdirmə, divar birləşmələri, növbəti, keçir, birləşməni qadağan et, birləşməyə icazə ver, qat prioriteti, nüvə, prioritet, qovşaq, düzbucaqlı, fırlanmış düzbucaqlı, çoxbucaqlı, daxilə yazılmış, xaricə çəkilmiş, qövs, mərkəz, toxunan qövs, xətləri seç, sekme, izləmə, kontur, sehrli çubuq, bölmə, boşluqla bölmə, boşluq, hissəni sil, yenidən birləşdir, sürüşmə, surət, qutu ilə uzatma, seçim çərçivəsi, uzatma, düzləşdirmə, kilid, qulfu, məhdudiyyət, ölçünü kilidlə, ölçünü redaktə et, şəbəkə, şəbəkə xəttinə kilidlə, şəbəkə xəttini köçür, yerləşmə sürüşməsi, birləşmədən kənar, sərbəst dayanan, başlanğıcdan böy, ölçü başlanğıcı, mərkəz xətti, daxili üz, xarici üz, birləşməni ayır, alt
from: 5b7d2f75
---

## Nə edəcəksiniz

Divarları divar aləti reseptləri ilə çəkin və dəyişdirin. Hər biri küncləri ilə çəkmək kimi bitir: künclər özlüyündə birləşir, birləşmələr faylda saxlanılır və bütün dəyişiklik **Dəyişikliklər**də bir addımdır və {{ui:Geri qaytar}} onu geri alır. Divarlar öz şəxsiyyətini saxlayır: bölünən, sürüşdürülən və ya uzadılan divar eyni divardır, qapıları, pəncərələri və ölçüləri ilə birlikdə.

## Düzbucaqlı, çoxbucaqlı və ya qövs çəkin

{{ui:Çək}} aktiv olduqda Çək qrupunda {{ui:Formalar}} açın (və ya Divar sətirində **Forma** siyahısından bir forma seçin). Divar sətirində divar tipi, çertyoj istinadı, xarici tərəf və üst göstərilir, {{ui:Divar}} aləti kimi. Sonra klikləyin və ya nöqtələri yazın (x,y · @dx,dy · @uzunluq<bucaq · göstərici istiqamətində uzunluq):

- **Düzbucaqlı**: iki əks künc. Dörd divar, dörd künc birləşməsi, bir addım.
- **Fırlanmış düzbucaqlı**: birinci tərəfin başlanğıcı və sonu (bu onun istiqamətini və uzunluğunu təyin edir), sonra digər tərəf üçün üçüncü klik.
- **Çoxbucaqlı**: mərkəz, sonra künc (**Daxilə yazılmış**) və ya tərəfin ortası (**Xaricə çəkilmiş**). Əvvəlcə **Tərəflər** (3-dən 64-ə) təyin edin.
- **Qövs, mərkəzlə**: mərkəz, başlanğıc (radiusu təyin edir), son. **Dövrə istiqaməti**: qısa yol, saat əqrəbinin əksinə və ya saat əqrəbi istiqamətində. Dairənin üç dörddə birindən çox bucaq iki divar kimi çəkilir.
- **Toxunan qövs**: divarın ucunu, sonra qövsün bitdiyi yeri klikləyin. Qövs divarın ucunu öz istiqamətində tərk edir.

Bağlı forma xaricinə doğru öz xarici tərəfini alır. **Xarici üz** və ya **Daxili üz** üzərində çəkildikdə, klikləditiniz üz yerində qalan üzdür.

## Olan xətlərin üzərində divarlar

- **Xətləri seçin**: xəttə klikləyin, divar onun üzərinə gedir. Tab basın (və ya klikləyərkən Shift basılı saxlayın) bütün uc-uca birləşmiş xətt zəncirini almaq üçün. Xətlər bu görünüşün çertyoj xətləri, izləmə istinadı və şəbəkə xətləridir.
- **Konturu izləyin**: bu xətlərin və ya divarların bağladığı sahənin içində klikləyin. Divarlar klik ətrafında ən kiçik sahəni əhatə edir.

## Çəkməzdən əvvəl təyin edin: sürüşmə və birləşmə

Divar sətirində {{ui:Divar}} aləti və formalar üçün daha iki sahə var:

- **Sürüşmə**: divarlar kliklədiyiniz xəttdən bu qədər uzaqda çəkilir: + onun soluna, − sağına, çəkdiyiniz istiqamətdən baxanda.
- **Birləşdir**: sərbəst dayanan divarlar çəkmək üçün onu söndürün. Onların ucları **Birləşməni qadağan et** alır və istənilən yerdə sərbəst qalır (bax [Divarı dəyişin](topic:change-a-wall-or-door)).

## Bölün, bir hissəni çıxarın, yenidən birləşdirin

Redaktə qrupunda {{ui:Divarlar}} açın.

- **Böl**: divarı kəsiləcək yerdə klikləyin və ya başlanğıcdan məsafəni yazın. Onu kəsən divarın yaxınlığında kəsik onların qovuşduğu yerə düşür. İki hissə eyni tipə malikdir və uc-uca birləşmiş qalır. **Boşluq** mərkəzdə həmin uzunluqda boşluq buraxır. **Sərbəst uclar** kəsilmiş uclara bunun əvəzinə **Birləşməni qadağan et** verir (Parametrlər › BimCraft › Divarlar › **Divar bölünəndə** hansının əvvəldən işarəli olacağını təyin edir). Qapı və ya pəncərə içində olduğu hissə ilə birlikdə gedir; qapıdan keçən kəsik rədd olunur.
- **Hissəni sil**: parçanın başladığı və bitdiyi yeri klikləyin. Parçadakı qapı onunla birlikdə gedir.
- **Yenidən birləşdir**: bir divarın iki hissəsini klikləyin (düz xətt üzrə, eyni tip). Onlar yenidən bir divar olur, birinci klik etdiyiniz divar kimi, hər ikisinin qapıları ilə.

## Birləşmə üslubu, birləşməni qadağan et, qat prioriteti

Redaktə qrupunda {{ui:Divarlar}} açın.

- **Birləşmə üslubu**: iki düz divarın bitdiyi künci klikləyin. Hər klik növbəti üslubu verir: **Bucaq birləşməsi** (hər iki uc daxili künclə xarici künc arasındakı xətt üzrə kəsilir, hər künc bu cür başlayır), **Uc birləşməsi** (bir divar digərinin xarici üzünə qədər keçir, o isə onun yanında dayanır) və **Künclü bərabərləşdirmə** (uc birləşməsi kimi, və keçən divarın ucu düz olur; düz bucaqda uc birləşməsi kimi görünür). **Növbəti** və ya {{key:Tab}} digər divarı keçən edir. Panelindəki **Üslub** siyahısı son klik etdiyiniz künci göstərir. Eyni iki seçim bir divarın **Xassələr**ində də var: **Başlanğıcda / sonunda birləşmə üslubu** və **Keçir**. Hər dəyişiklik **Dəyişikliklər**də bir addımdır. Plan, 3D cisim, otaqlar və kəmiyyətlər izləyir.
- T-birləşmədə yan tərəfi toxunulan divar həmişə keçir. İki divar kəsişdikdə bir klik (və ya Xassələrdə **Kəsişmədə davamlı**) hansının davamlı olduğunu bildirir; bu da kəsişmədən hansı divarın qatlarının keçəcəyini müəyyən edir.
- Üslub birləşmənin özünə aiddir: divarlar hərəkət etdikdə qalır və yalnız birləşmə getdikdə gedir (divar silindikdə, həmin ucda bölündükdə və ya uca **Birləşməni qadağan et** verildikdə). Qövsü divarla və ya üç və daha çox divarın qovuşduğu künc bucaq birləşməsində qalır. 30 dərəcədən kəskin və ya 150 dərəcədən düz künc də bucaq birləşməsinə qayıdır.
- **Birləşməni qadağan et**: divar ucunun yaxınlığında klikləyin. Həmin uc azad olur: divar harada getsə də heç nəyə qoşulmur, onu yenidən klikləyənə qədər. Alət aktiv olduqda sərbəst uclar xaç ilə işarələnir. Eyni keçid Xassələrdə **Başlanğıcda birləş / Sonda birləş** adlanır.
- **Qat prioriteti**: qatları olan divarlar qovuşduqda güclü qat zəif qatı kəsir, belə ki nüvələr nüvələrə birləşir və üz qatı güclü qatın yanında dayanır. Hər qatın 0-dan 999-a qədər prioriteti var; standart olaraq onu qatın funksiyası verir (struktur 800, altlıq 600, izolyasiya 400, membran 300, üz 200, boşluq 100). {{ui:Qat prioriteti}} divar quruluşunu açır, orada **Prioritet** sütunu qatın öz nömrəsini təyin edir. Bərabər prioritetli qatlar bir-birinin yanında dayanır və xətt yalnız fərqli materiallar arasında çəkilir. Bunu planda **Orta** və ya **Dəqiq** təfərrüatda, künclərdə, T-birləşmələrdə və iki düz divarın kəsişməsində görürsünüz; Parametrlər › BimCraft › Divarlar › **Divarlar qovuşduqda qat xətlərini təmizlə** onu söndürür. Yalnız divarların içində nə çəkildiyini dəyişir: divarların konturları və kəmiyyətləri birləşmə üslubunun verdiyi kimi qalır.

## Çox divarın tipini dəyişin

Eskiz planlardan işçi çertyojlara keçid əsasən tip dəyişməkdir: ümumi divar konkret quruluşa çevrilir. Heç nə yenidən çəkmirsiniz.

1. Divarları seçin (biri, və ya {{key:Ctrl}} və ya {{key:Shift}} ilə bir neçəsi).
2. **Xassələr**də, Divar tipi altında **Növü dəyiş…** düyməsini basın (və ya Redaktə qrupunda {{ui:Divarlar}} açıb {{ui:Növü dəyiş}} seçin, eyni siyahı açılır). Siyahı Xassələrin içində, seçilmiş divarların öz blokunda açılır. Dialoq deyil və heç nəyi örtmür: siyahı açıq olduqda plan, 3D görünüş və seçim işləməyə davam edir, və seçdiyiniz divarları izləyir.
3. Siyahı hər divar tipini qalınlığı və LOD işarəsi ilə göstərir, məsələn "Wall 230 generic, LOD 200" və "230 clay brick, plastered both sides, LOD 300". Seçilmiş divarların hazırda sahib olduğu tiplər işarələnir. **Tap** qutusuna yazın və ya ad, qalınlıq, ya da `lod 300` ilə süzün.
4. Tipi klikləyin. Seçilmiş hər divar bir addımda ona keçir, beləliklə bir {{ui:Geri qaytar}} bütün növ dəyişikliyini geri alır. Kiçik x siyahını bağlayır.

Hər divar öz yerləşmə xəttini saxlayır. Mərkəz xətti üzrə divar hər iki tərəfə böyüyür; yerləşmə xətti üz olan divar həmin üzü saxlayır və digər tərəfə böyüyür, ona künclərdə birləşmiş divarlar izləyir. Dəyişdirilən divara kilidlənmiş divarlar da onu izləyir. Qapılar və pəncərələr öz divarlarında qalır və yeni qalınlığa görə yenidən kəsilir.

Növü dəyişdikdən sonra siyahı **Nə hərəkət etdi** göstərir: neçə divarın və nəyə dəyişdiyi, dəyişiklikdən əvvəl və sonra qalınlıq və LOD, yerləşmə xəttini saxlamaq üçün yana köçən divarlar, izləyən birləşmiş divarlar, yenidən yerləşdirilən qapı və pəncərələr və sahəsi dəyişən hər otaq, əvvəl və sonra sahəsi ilə. Status paneli bunu bir sətirdə deyir. Hesabat yalnız məlumat verir; heç vaxt növ dəyişikliyini dayandırmır. **Xassələr › Divar tipi** seçmək eyni dəyişikliyi edir və eyni hesabatı verir.

Növ dəyişikliyini dayandıran iki şey var və bu halda heç nə dəyişmir: divarda artıq yerləşməyəcək qapı və ya pəncərə (künc izlədikdə divar qısalır; əvvəlcə qapını daraldın və ya künclərdən uzaqlaşdırın) və dəyişikliyin pozacağı kilid (yerləşmə xətti üz olduqda mərkəz xətti ilə şəbəkə xəttinə kilidlənmiş divar; onun kilidini açın və ya yerləşmə xəttini mərkəz xəttinə qaytarın).

BimCraft-a qoşulmuş köməkçi eyni dəyişikliyi edə bilər (`wall_types_list` və `walls_swap_type` alətləri) və eyni hesabatı alır.

Tipin LOD işarəsi divar quruluşu redaktorunda təyin olunur: bax [Divar quruluşları](topic:wall-assemblies).

## Sürüşmə və qutu ilə uzatma

- **Sürüşmə**: divarı klikləyin, sonra onu köçürmək istədiyiniz tərəfi, və ya məsafəni yazın. Divar özünə bucaq altında hərəkət edir və ona birləşmiş divarlar uzanır. Orijinalın paralel surəti üçün **Surət** işarələyin (orijinala birləşmir).
- **Qutu ilə uzatma**: qutunun iki küncünü klikləyin, sonra köçürüləcək nöqtəni və yerini klikləyin. Qutunun içindəki hər divar ucu hərəkət edir; tamamilə içəridə olan divar hərəkət edir və ona toxunan divarlar da gəlir; qutunu kəsən divarlar uzanır.

## Ölçünü redaktə edin və kilidləyin

Referans ölçüsünü seçin (Şərh et › {{ui:Referans ölçüsü}}) və **Xassələr**də dəyərini yazın: ikinci istinadın divarı özünə bucaq altında hərəkət edir, birinci istinad yerində qalır və birləşmiş divarlar izləyir. Dəyəri saxlamaq üçün **Bu ölçünü kilidlə** işarələyin: sonradan hər hansı divar hərəkət etdikdə digəri izləyir. Kilidli dəyər siz onu açana qədər üzərinə yazıla bilməz.

## Düzləşdirin və kilidləyin

**Düzləşdir və kilidlə**: divar üzünü (və ya mərkəz xəttini, divarın ortası yaxınlığında) və ya şəbəkə xəttini klikləyin, sonra həmin xəttə gətiriləcək divarın üzünü. Divar ona bucaq altında düzlənir. Onları düzlənmiş saxlamaq üçün əvvəlcə **Kilid** işarələyin: planda qulfu görünür və bir divar hərəkət etdikdə digəri izləyir. Divarın **Xassələr**i onun **Kilidlər**ini siyahılayır, hər birinin yanında **Kilidi aç**.

## Divarları şəbəkə xətlərinə kilidləyin

Şəbəkə xəttinin üzərində uzanan və ya ucu onun üzərində olan divarı seçin və **Xassələr** › **Şəbəkəyə kilidlə** bölməsində həmin şəbəkə xəttini seçin. Sonra {{ui:Şəbəkə}} aləti ilə şəbəkə xəttini seçin və **Köçürmə** qutusuna məsafə yazın: xətt öz bucağı altında hərəkət edir və ona kilidlənmiş divarlar, birləşmiş divarları ilə birlikdə, bir addımda izləyir. Şəbəkə xəttinə kilidlənmiş divar özü ilə ondan çıxa bilməz (xətti köçürün və ya divarın kilidini açın); kilidli divarın bucağı saxlaya bilmədiyi şəkildə fırladılmış şəbəkə xətti rədd olunur. Xətti adlandırmaq kilidi saxlayır; silmək kilidi çıxarır.

## Uzunluq: hansı tərəf saxlayır və nəyi ölçür

- **Böyümə başlanğıcı** (bir divarın Xassələri): **Başlanğıc saxlayır** (son hərəkət edir), **Son saxlayır** (başlanğıc hərəkət edir) və ya **Mərkəz saxlayır** (hər iki uc yarısı qədər hərəkət edir). Uzunluğu yazarkən plan saxlayan nöqtəni işarələyir. Hərəkət edən ucda birləşmiş divar öz bucağını saxlayaraq özünə bucaq altında hərəkət edir.
- **Ölçü başlanğıcı** (planda Ölçülərin yanında, Xassələrdə və Parametrlər › BimCraft › Divarlar bölməsində): mərkəz xətti, daxili üz və ya xarici üz. Uzunluq sahəsi və planın divar ölçüləri eyni birini oxuyur, buna görə uyğun gəlirlər. Mərkəz xəttində başlayır.
- Divarı birləşmələrindən azad köçürmək üçün (onlar qırılır, divar öz şəxsiyyətini saxlayır) orta tutacağını sürüklədiyiniz zaman {{key:Alt}} basılı saxlayın.

## Bilmək yaxşıdır

- Bu reseptlər divar aləti spesifikasiyasının (4-dən 9-a qədər səhifələr) reseptləridir. Birləşmə üslubu və qat prioriteti düz divarlar üçün qurulub; qat prioriteti yalnız planda görünür (kəsik, fasad və ya 3D-də deyil, orada divar bir cisimdir), üç və daha çox divarın düyünlərində deyil, və membranlar daşınmır.
- Birləşmənin üslubu IFC faylında onun qeydində saxlanır (`IfcRelConnectsPathElements` adı, məsələn `CadCraft join L butt 1`), buna görə digər proqramlar birləşmələri hələ oxuyur və köhnə fayl bucaq birləşmələri ilə açılır.
- Kilidlər və birləşmələr IFC faylında saxlanır (kilidlər layihədə `CadCraft_WallHolds` kimi, birləşmələr `IfcRelConnectsPathElements` kimi), buna görə faylı yenidən açdıqda da var.
- Əyri divarlar bölünə, yenidən birləşdirilə və hissəsi çıxarıla bilər; onlar sürüşdürülmür və kilidlənmir.
- Bax [Divarların çəkilməsi](topic:draw-walls), [Divarı, qapını və ya pəncərəni dəyişin](topic:change-a-wall-or-door) və [Divarın formalaşdırılması](topic:wall-shape).
