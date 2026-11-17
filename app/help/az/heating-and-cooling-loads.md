---
title: İsitmə və soyutma yüklərinin qiymətləndirilməsi
summary: Hər otağın istilik itkisi, il ərzində dərəcə-günlər üzrə istiləşməsi və soyuducu pik yükü — modeldə onu məhdudlaşdıran elementlərdən və hər elementin U-dəyərindən, bütün girişləri göstərməklə. Layihə yardımçısıdır, uyğunluq hesablaması deyil.
keywords: enerji, istilik, soyutma, istilik itkisi, istilik yükü, soyutma yükü, U-dəyəri, istilikkeçirmə əmsalı, dərəcə-günlər, hdd, ventilyasiya, hava dəyişməsi, daxili qazanclar, günəş qazancı, lambda, istilikkeçirmə, izolyasiya, ilkin layihə, analiz, otaqlar, məkanlar
from: ec312d20
---

{{ui:Gündüz işığı}} nişanında, {{ui:Hesabla}} düyməsindən sonra {{ui:İsitmə və soyutma yükləri}} bölməsini açın və {{ui:Yükləri hesablayın}} düyməsini basın. Hər otaq soyuq layihə günündə öz **istilik itkisini**, il ərzində **istiləşməsini** və isti gündə **soyuducu pik yükünü** alır. Heç nə göndərilmir; modeldə heç nə dəyişmir, yalnız U-dəyərini yazsanız.

:::warning
Bu **layihə yardımçısıdır, uyğunluq hesablaması deyil**: ekranda hər girişi olan sabit-hal qiymətləndirməsi. Bu **ISO 52016-1 metodu deyil**, simulyasiya deyil, enerji sertifikatı deyil; qazanların, istilik nasoslarının və soyuducuların ölçüsünü müəyyən etmir. Nəticələri yoxlayın və avadanlığın ölçüsünü mühəndislə müəyyən edin.
:::

## Hər otağı nə məhdudlaşdırır

BimCraft bunu modelin özündə tapır, buna görə hər proqramın IFC faylı işləyir (bəzi proqramların ixrac etdiyi sərhəd məkanları tələb olunmur). Otağın öz səthinin hər hissəsindən düz xaricə baxır:

- hissəni məhdudlaşdıran ilk divar, pəncərə, qapı, döşəmə, dam, örtük, pərdə divarı və ya tir **həmin hissəni məhdudlaşdırır**;
- o elementdən sonra ya **başqa otaq** (qonşu sayılır, eyni temperaturda: itki yoxdur), ya **heç nə** (xaric), ya da ən aşağı mərtəbədə döşəmənin altında **torpaq** olur;
- başqa otağa açıq qapı qonşu sayılır; heç nəyə toxunmayan hissə (yanlara və ya aşağıya 1.5 m, yuxarıya 8 m daxilində) otağın altında siyahıya alınır və nəzərə alınmır.

Pəncərə və qapılar öz ölçüsünü IFC-dən alır (ümumi en × hündürlük) yerləşdikləri divardan. Cədvəldə otağı seçin ki, onu məhdudlaşdıran hər elementi, onun sahəsini, U-dəyərini və U-dəyərinin haradan gəldiyini görəsiniz.

## U-dəyərləri

BimCraft hər element üçün bu ardıcıllıqla istifadə edir:

1. **IFC-nin öz U-dəyəri** — elementin ümumi xassə dəstində (məsələn `Pset_WallCommon`) və ya onun tipində `ThermalTransmittance`. Əksər layihə proqramları onu yaza bilir.
2. **Onun material təbəqələri** — 1 ÷ (daxili səth müqaviməti + hər təbəqənin qalınlığı ÷ onun istilikkeçiriciliyi λ + xarici səth müqaviməti), adi səth müqavimətləri ilə (divarlar üçün 0.13 və 0.04 m²K/W; daxildə yuxarı 0.10, aşağı 0.17). Başlanğıc üçün tipik istilikkeçiricilik (mineral yun 0.035, kərpic 0.77, beton 1.4…); **{{ui:Materialların istilikkeçiriciliyi}}** altında istehsalçınınkını yazın, və bu təbəqələrdən olan hər U-dəyəri ona uyğunlaşır.
3. **Tipik dəyər** (divarlar 0.3, damlar 0.2, döşəmələr 0.25, pəncərələr 1.4, qapılar 1.6 W/m²K), belə qeyd olunmuş — öz dəyərinizi yazın.

Otağın təfərrüatında yazdığınız U-dəyəri elementin ümumi xassə dəstində `ThermalTransmittance` kimi yazılır (bir addım; {{key:Mod+Z}} onu geri qaytarır). Əgər bir neçə element eyni dəsti paylaşırsa (məsələn bir divar tipi), hamısı birlikdə dəyişir və status sətri neçə elementin dəyişdiyini deyir.

## İsitmə

- **İstilik itkisi** = Σ U × A × (daxili − xarici) xaricə olan hər şey üçün + Σ U × A × (daxili − torpaq) torpaqda duran döşəmələr üçün + 0.335 × saatda hava dəyişməsi × otağın həcmi × (daxili − xarici). 0.335 Wh/m³·K havanın sıxlığının (1.2 kq/m³) istilik tutumu ilə (1005 J/kqK) hasilidir.
- **İl ərzində istiləşmə** = (otağın konstruksiya və hava vasitəsilə xaricə olan itkisi, dərəcə başına, plus torpaq itkisi eyni fərqə uyğunlaşdırılmış) × **dərəcə-günlər** × 24 ÷ 1000, kWh ilə. Yer üçün dərəcə-günləri yazın, və ya {{ui:Dərəcə-günlərini CSV-dən oxuyun…}} (hər gün və ya ay üçün bir sətir; hər sətirdəki son rəqəm toplanır). Dərəcə-günlərini mənbənizin istifadə etdiyi baza temperaturuna görə götürün: bu baza artıq insanların, işıqların və günəşin pulsuz istiliyini nəzərə alır.

## Soyutma

**Soyuducu pik yükü** = konstruksiya və hava vasitəsilə yay layihə temperaturunda istilik + insanlar (hər nəfər üçün döşəmə × nəfərə istilik) + döşəmənin hər m²-nə işıqlandırma və avadanlıq + **günəş**: həmin otaq üçün {{ui:Pəncərələrdən keçən günəş bir tarixdə}} pikidir. Əvvəlcə günəşi isti gündə hesablayın; o vaxta qədər günəş 0 sayılır və bölmə bunu deyir. Hər hissənin pikləri müxtəlif saatlarda düşsə belə toplanır, bu isə bir az artıq qiymətləndirmədir.

## Nəyi nəzərə almır

- ISO 52016-1 aylıq və saatlıq metodlarını (ödənişli standart), binanın kütləsində saxlanılan istiliyi, istilik körpülərini, istilik və soyutma sistemlərinin işini və iqlim fayllarını.
- Bir-birinə bitişik otaqlar eyni temperaturda götürülür; isidilməyən məkanlar modelləşdirilmir.

Həmçinin bax: [Hər otaqda gündüz işığını qiymətləndirmək](topic:daylight-factor).
