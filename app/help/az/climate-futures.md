---
title: "İqlim gələcəkləri: 2050 və 2080 daşqın, istilik və meşə yanğını"
summary: Daşqını, enerji ilini və meşə yanğını skrininqini gələcək iqlimlə (ssenarilər SSP2-4.5 və SSP5-8.5, 2050 və 2080 illəri) iqlim məlumat paketindən yenidən işlədin; gələcək indiki yanında göstərilir.
keywords: iqlim, iqlim dəyişikliyi, gələcək, 2050, 2080, ssp, cmip6, ssenari, dəniz səviyyəsi, daşqın, istilik, hava məlumat faylı, epw, morfinq, energyplus, meşə yanğını, yanğın, yanğın havası
from: 224ecd08
---

İqlim rəqəmləri tətbiqdən deyil, **məlumat paketindən** gəlir. Parametrlər › Əlavələr bölməsində {{ui:İqlim gələcəkləri}} əlavəsini açın və ya {{ui:Gələcək iqlim}} blokunda öz paket faylınızı yükləyin.

:::warning
Əlavə ilə gələn paket **nümunədir**: üç yer (Denver, Miami, Johannesburg), bir iqlim modeli və hər 20 illik dövrdə beş il. O, alətləri sınamaq üçündür, **layihə üçün deyil**. Panel istifadə olunarkən bunu qalın şriftlə bildirir. Tam paket (çoxlu model, bütün illər, daha çox yer) NASA-nın NEX-GDDP-CMIP6 məlumatlarından `tools/climate/build-pack.mjs` ilə qurulur.
:::

## Gələcəyi seçin

Sol paneldə {{ui:Təhlükə oxutması}} bölməsində **Ssenari** (SSP2-4.5, orta yol, və ya SSP5-8.5, yüksək emissiya) və **İl** seçin (2050 o deməkdir 2041–2060, 2080 isə 2071–2090; hər ikisi 1995–2014 ilə müqayisədədir). **Yer** modelin sahəsinə (IfcSite enlik və uzunluq) ən yaxın paket yeridir, ya da sizin seçdiyiniz. Hər yerdən uzaqda olduqda paketin qlobal orta dəyişiklikləri istifadə olunur və panel bunu bildirir.

## Daşqın: indiki yanında gələcək

Ssenari seçildikdə **Daşqın növünü** təyin edin: sahil (dəniz səviyyəsinin qalxmasını əlavə edir), çay və ya şiddətli yağış (ən yağışlı günün yağışının dəyişməsinə görə daha dərin) və ya hər ikisi. {{ui:Başlat}} basın: daşqın əvvəlki kimi oynayır və cədvəl indiki və gələcək daşqını yan-yana göstərir (su səviyyəsi, islanan otaqlar, ən dərin su). Fərziyyələr altında sadalanır:

- sahil səviyyəsi dəniz səviyyəsinin bütöv qalxması qədər qalxır; dalğa və dalğalanma dəyişmir;
- çay axını ən yağışlı gün yağıntısı ilə bir-birinə bir-bir artır, dərinlik isə axının 0,6 qüvvətinə uyğun gəlir (geniş kanal üçün Manning tənliyi);
- iki hissə sadəcə toplanır.

## İstilik: gələcək hava məlumat faylı

Növ olaraq {{ui:İstilik: gələcək hava məlumat faylı}} seçin, indiki bir `.epw` hava məlumat faylı seçin və {{ui:Gələcək hava məlumat faylı yaradın}} basın. Fayl dərc olunmuş dəyişmə və uzanma metodu ilə (Belcher, Hacker və Powell 2005) ay-ay **morflanır**: ayın orta temperaturu paketin dəyişməsi qədər isinir, isti günorta saatları gündəlik maksimumun dəyişməsi ilə, soyuq gecələr isə gündəlik minimumun dəyişməsi ilə; nisbi rütubət paketin dəyişməsi qədər hərəkət edir və çiy nöqtəsi yenidən hesablanır. Təzyiq və külək əvvəlki kimi qalır. Cədvəl orta və ən isti temperaturları, 0,4 % soyutma və 99,6 % istilik layihə temperaturlarını, 30 °C və 35 °C saatlarını və dərəcə-günləri müqayisə edir.

{{ui:Gələcək hava məlumat faylını saxla}} onu saxlayır; {{ui:Enerji yoxlamasında istifadə et}} onu EnergyPlus yoxlamasına (Enerji bölməsi) verir. Gələcək fayl eyni tipik ildir, yalnız daha isti: yeni istilik dalğaları əlavə etmir.

## Enerji ili: indiki yanında gələcək

Enerji bölməsindəki EnergyPlus yoxlamasında (öz mühərriki ilə ayrıca əlavə), indiki hava faylı seçin, sonra onun {{ui:Gələcək iqlim}} blokunda ssenari və il seçin və {{ui:İli simulyasiya et: indiki və gələcək}} basın: il indiki faylda və onun morflanmış gələcəyində işləyir və hər otağın istilik və soyutması yan-yana sadalanır.

## Meşə yanğını (yalnız skrininq)

Növ olaraq {{ui:Meşə yanğını riski (yalnız skrininq)}} seçin: ən yaxın bitkilik, ondan binaya qədər yamac və ona qədər məsafə. Nəticə çox aşağıdan ekstremal dərəcəyə qədər bir zolaqdır, indiki və gələcək üçün.

:::warning
**Yalnız skrininq.** Bu, sahənin düzgün meşə yanğını qiymətləndirməsinə ehtiyacı olub-olmadığını bilmək üçün bizim öz nisbi miqyasımızdır, normativ reytinq və ya bushfire attack level deyil. O, bitkilik üçün çəkini, yamac əmsalını (yanğın yamacda hər 10 dərəcə üçün təxminən iki dəfə sürətlənir, 20 dərəcəyə qədər sayılır), məsafə əmsalını (10 m məsafəyə bölünür, ən çoxu 1) və paketin yanğın-hava indeksinin dəyişməsini vurur.
:::

## Rəqəmlər haradan gəlir

- **Temperatur, rütubət, günəş işığı, yağış, yanğın havası:** NASA NEX-GDDP-CMIP6, gündəlik kiçildilmiş CMIP6 model çıxışı. Hər modelin çıxışı CC BY 4.0 altındadır. Yanğın-hava dəyişməsi Kanada Yanğın Hava İndeksidir, modelin havasından gündəlik hesablanır (günorta rütubəti əvəzinə gündəlik rütubətlə).
- **Dəniz səviyyəsinin qalxması:** IPCC AR6 qlobal orta göstəricisi (yerli deyil; torpağın qalxması və ya çökməsi buraya daxil deyil), paketdə yerli rəqəmlər olmadıqda.
- Paket öz mənbəyini, lisenziyasını və tarixini göstərir; panel onları göstərir.
