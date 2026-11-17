---
title: Karkas konstruksiyasının analizi
summary: Modelin tirlərinin, sütunlarının və çarpaz bağlarının qüvvələri, reaksiyaları və əyilmələri, sizin təyin etdiyiniz yük halları və birləşmələr üzrə, IFC-də saxlanılır. Analiz vasitəsidir, norma yoxlaması deyil.
keywords: analiz, vahidlər, fut və inç, göstərmə vahidi, konstruktiv analiz, layihə yoxlamaları, istifadə nisbəti, prokat, qaynaqlı, AISC 360, EN 1993-1-1, karkas analizi, analitik model, sərtlik üsulu, yüklər, yük halı, birləşmə, daimi yük, dəyişən yük, öz çəkisi, reaksiyalar, əyici moment, kəsici qüvvə, eksenel qüvvə, əyilmə, deformasiya forması, dayaqlar, mafsallı, bərkidilmiş, azad etmə, hesabat, pdf, csv, craftscript, frame3d, tirlər, sütunlar, elementlər
from: b93b58c4
---

Sağdakı {{ui:Analiz}} sekmesi açıq modelin tirlərində, sütunlarında və çarpaz bağlarında qüvvələri, sütun ayaqlarındakı reaksiyaları və elementlərin nə qədər əydiyini, verdiyiniz yüklər üçün tapır.

:::warning
Bu, **analiz vasitəsidir, norma yoxlaması deyil**. Analiz heç bir layihə normasını tətbiq etmir: elementlərin ölçülərini müəyyən etmir, tutumları yoxlamır və yük əmsallarını seçmir. Analitik modeli, onun yüklərini və dayaqlarını mühəndis yoxlayır və rəqəmlərin nə demək olduğuna o qərar verir. Aşağıdakı {{ui:Layihə yoxlamaları}} bloku AISC 360 və ya EN 1993-1-1 üzrə prokat polad I-profillərini yoxlayır; mühəndis nəzərdən keçirənə qədər yalnız köməkçidir: bax: [Layihə yoxlamaları](topic:frame-analysis#design-checks).
:::

## İşə salın

1. Açıq IFC modelini və {{ui:Analiz}} sekmesini açın.
2. Görünüşdə bir və ya bir neçə tir, sütun və ya çarpaz bağ seçin, {{ui:Hal}} (Case), {{ui:Yük}} (Load) və {{ui:İstiqamət}} (Direction) seçin, dəyəri yazın və {{ui:Yük əlavə et}} düyməsinə basın: elementə yayılmış yük üçün kN/m, nöqtəvi yük üçün kN.
3. {{ui:Analizi işə sal}} düyməsinə basın.

Cədvəldə hər elementin ən böyük eksenel qüvvəsi, kəsici qüvvələri, əyici momentləri, burulmanı və əyilməsi sadalanır; elementin adına klikləməklə onu görünüşdə seçin. Aşağıda reaksiyalar verilir. {{ui:Modeldə}} deformasiya olunmuş formanı çəkir, ya da hər elementin yanında bir təsirin diaqramını. Model dəyişəndə nəticələr köhnəlir: onu yenidən işə salın.

Hər yük və parametr {{ui:Dəyişikliklər}} siyahısında bir dəyişiklikdir: {{ui:Geri qaytar}} onu geri alır, {{ui:IFC kimi saxla}} isə onları faylda saxlayır (layihənin `CadCraft_Analysis` xassə dəsti), beləliklə modeli növbəti dəfə burada açanda yükləri hələ də olacaq.

## Analitik model necə yaradılır

- Forması tək düz ekstruziya olan hər IfcBeam, IfcColumn və IfcMember, kəsiyinin ağırlıq mərkəzi xətti üzərində elementə çevrilir. Onun kəsik xassələri profildən gəlir: I, U, L və T formaları, düzbucaqlılar və borular, dairələr və yuvarlaq borular və ya istənilən qapalı kontur (bu halda burulma sabiti təxmini olur və hesabatda bu deyilir). Qalan hər şey buraxılır və sayılır.
- Modeldə tirlər sütunun üzündə dayanır və döşəmənin altında oturur. Hər element ucu öz xətti boyunca, birləşdiyi elementin oxuna çatdırılır, əgər həmin ox yaxındırsa (kəsiklərin ölçüsü tərtibində), və həmin element orada bölünür. Hesabat neçə ucun yerdəyişdiyini göstərir.
- Altında heç nə olmayan **sütun ayaqları** dayaqlardır: bərkidilmiş (başlanğıc) və ya mafsallı (yerində və burulmaya qarşı tutulmuş, fırlanmağa azad).
- **Tir uclarını** {{ui:Birləşməsi olmayan tir uçları}} qaydası ilə bərkidilmiş və ya mafsallı edir; **çarpaz bağlar** (IfcMember) hər iki ucunda mafsallıdır. Ucları və ya sütun ayağını öz qaydası ilə vermək üçün bir elementi seçin.
- Materiallar adına görə: beton (E = 30 GPa), taxta (E = 11 GPa), digər hallarda polad (E = 200 GPa).

Karkas heç nəyi əymədən hərəkət edə bilirsə — mexanizm — işləmə dayanır və harada və hansı istiqamətdə olduğunu deyir.

## Hallar, birləşmələr, işarələr və hesabat

Analiz **Daimi** (öz çəki), **Dəyişən** və **Daimi + dəyişən** ilə başlayır; layihə normanızın tələb etdiyi əmsallarla hal və birləşmə əlavə edin. N > 0 dartılmadır; My > 0 elementin lokal −z tərəfini dartılmaya qoyur (cazibə altında əyilən tir My > 0-a malikdir). {{ui:Hesabat (PDF)}} və {{ui:Hesabat (CSV)}} fərziyyələri, kəsikləri, halları, cəmləri ilə reaksiyaları, element qüvvələrini, yerdəyişmələri və zərfi saxlayır. {{ui:CraftScript kimi ixrac et}} karkası PartCraft-ın Script iş sahəsi üçün yazır; orada `frame3d` kitabxana funksiyası onu oxunaqlı kodda həll edir.

Üsul birbaşa sərtlik üsuludur, xətti və birinci tərtibdir, **İkinci tərtib (P-Delta)** seçməsəniz; dərslik halları ilə yoxlanılıb.

**İkinci tərtib (P-Delta).** İşə salın yanındakı *İkinci tərtib (P-Delta)* qutusunu işarələyin: hər birləşmə, elementlərin eksenel qüvvələri əyilmiş karkasa təsir edərək yenidən həll olunur (hər element 4 hissəyə bölünür, beləliklə elementin ucları arasındakı əyilmə də sayılır), eksenel qüvvələr sabitləşənə qədər. Nəticə sətri keçidlərin sayını və yellənmənin nə qədər artdığını verir; momentlər, əyilmələr, layihə yoxlamaları və hesabat bundan sonra bu nəticələrdən istifadə edir. Karkasın elastik kritik yükündən yuxarıda işləmə dayanır və bunu deyir. Kiçik fırlanmalarla elastikdir, yalnız əyilmə, sərtliyin azalması və ya fərziyyə yükləri olmadan (təkbaşına AISC birbaşa analiz üsulu deyil); plitələr, divarlar və sərt döşəmələr birinci tərtibdə qalır.

**Plitələrə döşəmə təzyiqi.** Beton plitələr üçün (analiz materialı beton olan plitəni lövhə kimi oxuyur), Yüklər bölməsində {{ui:Hər plitəyə təzyiq}} var: kN/m² yazın, yuxarıdakı halı seçin və {{ui:Plitələrə əlavə et}} basın. Analizin tapdığı hər plitəyə aşağı istiqamətdə yayılır və Sil keçidi ilə siyahıya alınır. Bu, hər plitə üçün ayrıca yox, bütün plitələr üçün bir təzyiqdir və norma yükü deyil: mühəndisinizin verdiyi dəyəri yazın.

**Təbii tezliklər (sonlu elementlər).** Nəticələrin altındakı {{ui:Sonlu elementlər: təbii tezliklər}} bloku eyni modelin ən aşağı rejimlərini sonlu elementlər mühərriki ilə tapır: uclarının azadlığı ilə tirlər, dörd düyünlü qabıq kimi plitələr və divarlar, sərt döşəmələr, dayaqlar. Rejimlərin sayını (3, 6, 10 və ya 20) və plita elementini (qalın və ya nazik plitələr üçün dörd düyünlü qabıq, ya da nazik plita elementi) seçin və {{ui:Tezlikləri tapın}} basın. Cədvəl hər rejimin tezliyini Hz ilə, periodunu saniyə ilə və X, Y, Z istiqamətləri üzrə effektiv modal kütləsini hərəkət edə bilən kütlənin payı kimi verir; {{ui:Modeldə göstər}} hər rejimi deformasiya olunmuş forma kimi çəkir. Kütlə materialın sıxlığı və həcmin hasilidir: yüklər kütləyə əlavə olunmur, sıxlığı olmayan material isə kütləsizdir. Hesabat (PDF, CSV) cədvəli saxlayır. Yalnız elastikdir və kiçik yerdəyişmələrlidir; buradan heç bir norma üzrə seysmik və ya külək yükü yaradılmır. Norma yoxlaması deyil; nəticələri mühəndisiniz nəzərdən keçirir.

**Reaksiya spektri, zaman tarixçəsi və pushover.** Tezliklərin altında eyni sonlu elementlər modelindən istifadə edən daha üç blok var. Hamısı üçün kütlə materialın sıxlığı və işarələdiyiniz halların aşağı yükləridir, hər biri yazdığınız əmsalla vurulur (məsələn Daimi 1-də, Dəyişən isə kütlə saydığınız pay ilə).

{{ui:Reaksiya spektri}} hər rejimi verdiyiniz spektrdən oxuyur (dövr və təcil cədvəli, ya da SDS, SD1 və TL-dən ASCE 7 forması; {{ui:Seysmik blokun dəyərlərindən istifadə et}} düyməsi onları Seysmik blokdan köçürür) və rejimləri CQC, SRSS, on faiz qaydası və ya mütləq cəm ilə birləşdirir, sonra X, Y və Z istiqamətlərini birləşdirir (100 % + 30 % və ya SRSS). Əsas kəsici qüvvəni, mərtəbə sürüşmələrini, element uclarının qüvvələrini və istifadə olunan rejimlər kütlənin 90 %-dən azını daşıdıqda xəbərdarlıq edən rejim cədvəlini verir. Nəticələri bir əmsalla və ya yazdığınız əsas kəsici qüvvəyə qədər miqyaslaya bilərsiniz; blok həmin əsas kəsici qüvvəni heç vaxt özü hesablamır. Nəticələrin işarəsi yoxdur.

{{ui:Zaman tarixçəsi}} yer təcilini rejim üst-üstə qoyma ilə (yazının nöqtələr arasındakı düz xətləri üçün dəqiq) və ya birbaşa inteqrasiya ilə (Rayleigh söndürməsi ilə Newmark orta təcil) işə salır. Giriş uydurulmuş sinus və ya impuls (həmişə sintetik kimi işarələnir), yapışdırdığınız yazı və ya açdığınız mətn faylıdır (zaman və təcil, addımla hər sətirdə bir təcil, ya da DT= başlıqlı PEER tipli fayl; g və ya m/s² ilə). Zamana görə damın yerdəyişməsini və əsas kəsici qüvvəni, hər mərtəbənin sürüşməsini və element uclarının qüvvələrinin zərfini verir. Çox uzun yazılı modellər onu yalnız sessiya üçün saxlayır.

{{ui:Pushover}} damı kiçik addımlarla yanlara itələyir (birinci rejimə bənzər sxem və ya bərabər), I formalı elementlərin uclarında plastik oynaqlarla. Oynaq plastik momentdə təslim olur; bu moment eksenel qüvvə artdıqca azalır (çəkilmiş formadan hesablanır, birləşmə kənarları nəzərə alınmır); bərkimə ixtiyaridir, P-delta ixtiyaridir və əvvəlcə cazibə birləşməsi tətbiq oluna bilər. O, tutum əyrisini (əsas kəsici qüvvə ilə damın yerdəyişməsi), ilk oynağı və hər oynağın vəziyyətini və plastik fırlanmasını verir. {{ui:Qeyri-xətti zaman tarixçəsini işə sal}} kiçik modellərdə eyni oynaqları Zaman tarixçəsi blokunun yazısı altında işə salır. Oynaqlar yalnız element uclarında əmələ gəlir (açıqlığın içində əmələ gəlməli olduğu yerdə düyün qoyun); hər iki ucunda azad edilmiş element heç birini almır; çarpaz bağların axması və burkulması modelləşdirilmir; plitələr və divarlar elastik qalır; qəbul meyarları verilmir. Norma yoxlaması deyil; nəticələri mühəndisiniz nəzərdən keçirir. Parametrlər model ilə birlikdə saxlanılır və hesabat cədvəlləri daşıyır.

Hələ hazır deyil: burkulma, reaksiya spektri üçün çatışmayan kütlə düzəlişi, yazının miqyaslanması, oynaqlar üçün qəbul meyarları (dinamik cavab yuxarıda var), plitələrdə hər plitəyə bir təzyiqdən başqa sahə yükləri, element ofsetləri, yalnız dartılan çarpaz bağlar, karkasda divarlar və plitələr, qaynaqlı formaların və prokat I-profillərindən başqa kəsiklərin norma yoxlamaları. Bax: [Hələ hazır deyil](topic:not-built-yet).

## Vahidlər

Uzunluqlar BimCraft-ın qalan hissəsi kimi alətlər panelində ({{ui:Vahidlər}}) seçdiyiniz vahidi izləyir: yazdığınız və gördüyünüz yük yerləri ({{ui:Mənbə}}, {{ui:Hara}}, {{ui:Hündürlükdə}}), düyün yüklərinin və reaksiyaların nöqtələri, {{ui:Seysmik}} daxilində mərtəbə hündürlükləri və əyilmə və sürüşmə sütunları (fut və inç bu kiçik uzunluqları onluq inçlə göstərir). Vahidi istənilən vaxt dəyişin; sekmə yenidən çəkilir. Qüvvələr kN və kN·m-də qalır; hesabat (PDF, CSV) və CraftScript faylı isə vahidi yazılmış millimetrlərdə qalır. Bölmə ölçüləri, armatur diametrləri və örtüklər {{ui:Beton}} blokunda adlandırıldığı kimi millimetrlərdə qalır.

## Layihə yoxlamaları

{{ui:Layihə yoxlamaları}} bloku (DetailCraft-ınkı ilə eyni) {{ui:Layihə norması}} götürür: ASCE 7 + AISC 360 və ya EN 1990 + EN 1993-1-1, və {{ui:Polad markası}}. Hər yük halına növünü verin (daimi, dəyişən, külək …) və {{ui:Birləşmələri yarat}} normanın yük birləşmələrini hallarınızdan yazır; analiz onları hər birləşmə kimi işə salır.

Sonra {{ui:Elementləri yoxla}} hər **prokat polad I-profilini** DetailCraft-ın yoxlamaları ilə yoxlayır (dartılma, burkulma ilə sıxılma, yanal-burulma burkulması ilə əyilmə, kəsilmə, eksenel qüvvə ilə əyilmə, əyilmə; bəndlər hesabatdadır) və tutumunun nə qədərini istifadə etdiyini göstərir, modeldə rənglə. Bu, **mühəndis nəzərdən keçirənə qədər köməkçidir**.

**Hansı elementlər yoxlanılır.** IFC profili polad I-profilinin prokat və ya qaynaqlı olduğunu demir, ona görə BimCraft onu yalnız profilin adı (əks halda elementin növ adı) AISC W və ya S cədvəllərindən və ya EN 10365 IPE, HEA və ya HEB cədvəllərindən bir ölçü olduqda (`W12x26`, `IPE 300`, `HEA200`, `HE 200 A`) **və** fayldakı hündürlük, en, divar və flanş bu ölçüyə 1 % daxilində uyğun gəldikdə prokat sayır. Hər digər I-profili (lövhəli tir, başqa adla ölçü, redaktə olunmuş ölçü) qaynaqlı kimi qəbul olunur və **yoxlanılmamış** qayıdır; boruların, bucaqların, kanalların və digər kəsiklərin, nazik hissələrin və burulmanın da halı belədir. Bu elementləri mühəndislə yoxlayın.
