---
title: IFC modelini kəsik müstəvisi ilə kəsmək
summary: 3D modeli üstdən, önündən və ya yanından kəsin, ya da kəsik qutusunun və ya əyilmiş üzləri olan bir neçə qutunun içində olanları saxlayın; kəsiyi sürükləmə və ya yazmaqla köçürün, çevirin və kəsiyin nəyi göstərdiyini seçin.
keywords: kəsik, kəsik müstəvisi, kəsik qutusu, tutacaqlar, sürükləmə, boşluq, seçim qutusu, kəsmə qutusu, kəsmə, dilimləmə, plan kəsiyi, mərtəbə planı, fasad, daxili, çevirmə, sürüşmə, kəsik həcmi, pilləli kəsik, L-formalı, əyilmə, meyilli kəsik, maili müstəvi, əlavə müstəvi
from: 6315e71a
---

## Nə edəcəksiniz

IFC modelini bir müstəvi ilə kəsin ki, içini görə biləsiniz: plan üçün yuxarıdan, ya da binanın kəsiyi üçün önündən və ya yanından.

## Addımlar

1. IFC modelini açın. Bax [IFC modelini açmaq və 3D-də baxmaq](topic:open-ifc-model).
2. Alət panelində {{ui:Kəsik}} klikləyin və ya {{key:X}} basın. Model yarıya qədər kəsilir və alət panelinin altında zolaq görünür.
3. Haradan kəsməyi seçin: {{ui:Üst}}, {{ui:Ön}} və ya {{ui:Yan}}. Ön və Yan həm də kəsiyə baxmaq üçün görünüşü çevirir.
4. Kəsiyi köçürün: **Sürüşmə** sürğücünü sürükləyin, ya da qutuya metrlə məsafə yazıb {{key:Enter}} basın. Millimetrlə də yaza bilərsiniz, məsələn `1200 mm`.
5. Kəsiyin digər tərəfini saxlamaq üçün {{ui:Çevir}} klikləyin.
6. Xassələrini görmək üçün kəsikdəki elementə klikləyin.
7. Kəsiyi aradan qaldırmaq üçün {{ui:Söndür}} klikləyin, {{ui:Kəsik}} düyməsinə yenidən basın və ya {{key:X}} basın.

## Kəsik qutusu

Yalnız qutunun içindəkini saxlamaq üçün eyni zolaqda {{ui:Qutu}} klikləyin. {{ui:X}}, {{ui:Y}} və {{ui:Z}}-nin hər birində iki sürğüc var: qutunun harada başladığı və harada bitdiyi, modelin kənarından metrlə. Dəyərlər yanlarında göstərilir.

- {{ui:Seçilmişin ətrafında qutu}} qutunu seçdiyiniz elementlərin ətrafına uyğunlaşdırır və onlara yaxınlaşdırır. Hər tərəfdə 300 mm boş qalır; bunu {{ui:Parametrlər}} › {{ui:BimCraft}} › {{ui:Seçilmişin ətrafında ehtiyat}} bölməsində dəyişin.
- Elementlər seçilmişkən {{ui:Göstər}} › {{ui:Seçilmişin ətrafında kəsik qutusu}} və ya {{key:Shift+X}} eyni işi bir addımda görür, heç bir kəsik aktiv olmasa belə.
- Qutudakı **tutacaqlar** onu göstəricilə köçürür: üzün ortasındakı kvadratı sürükləyin ki, həmin üz köçsün, kənarın ortasındakını ki, orada birləşən iki üz köçsün, ya da küncdəkini ki, üç üz köçsün. Sürğüclər də izləyir. {{ui:Üst}}-də künc qutunu planda köçürür, {{ui:Ön}} və ya {{ui:Yan}}-da isə fasadda.
- {{ui:Bütün model}} qutunu yenidən bütün modelə açır.
- {{ui:Üst}}, {{ui:Ön}} və ya {{ui:Yan}} yenidən bir müstəviyə qayıdır.

## Bir neçə qutunun həcmi, əyilmiş üzlər və əlavə müstəvilər

Qutu həmişə lazım olan forma deyil: pilləli kəsik, L-formalı qanad və ya şəbəkəyə perpendikulyar olmayan divar boyunca kəsik.

1. {{ui:Qutu}} bölməsində {{ui:Qutu əlavə et}} klikləyin. Kəsik indi **istənilən** qutunun içindəkini saxlayır, ona görə iki qutu pilləli və ya L-formalı həcm əmələ gətirir. Yanındakı siyahı sürğüclərin hansı qutunu dəyişdiyini göstərir ({{ui:Qutu 1}}, {{ui:Qutu 2}}…); {{ui:Bu qutunu sil}} seçilmişi çıxarır. Həcmdə 8 qutuya qədər ola bilər.
2. Seçilmiş qutunu formalaşdırmaq üçün {{ui:Əyilmə və müstəvilər}} açın:
   - {{ui:Üz}} seçin və hər istiqamətə nə qədər meyl etdiyini dərəcə ilə yazın (80-ə qədər). Üz ortasında dönür; digər üzlər sürğücün qoyduğu yerdə qalır. {{ui:Düzbucaqlı et}} onu geri qaytarır.
   - {{ui:Müstəvi əlavə et}} qutunu daha bir müstəvi ilə kəsir. {{ui:Üzlər}} kəsilmiş tərəfin üzünü X-dən Y-ə doğru dərəcə ilə göstərir; {{ui:Meyl}} onun yuxarıya doğru nə qədər dönməsidir (şaquli müstəvi üçün 0, üfüqi üçün 90); {{ui:Sürüşmə}} müstəvinin qutunun ortasından metrlə məsafəsidir. × onu çıxarır. Qutuda 6 əlavə müstəvi ola bilər.
3. Həcm bərk cisimləri kəsdikdə, kəsilmiş üzlər əvvəlki kimi doldurulur, həmçinin iki qutunun pillədə birləşdiyi yerdə.

:::tip
Əgər kontur itir və heç nə qalmırsa, əyilmələr və ya müstəvilər həmin qutuda heç nə qoymur; zolaq bunu deyir. Üzü geri əyin və ya müstəvinin sürüşməsini dəyişin.
:::

## Sahəsində fırladılmış bina

Bir çox modellər binanı faylın oxlarına bucaq altında qoyur (həqiqi şimal, ümumi koordinatlar). Divarlar bucaq altında olduqda yeni kəsik binaya nəzərən düzbucaqlı başlayır: {{ui:Ön}}, {{ui:Yan}} və qutu öz divarları boyunca gedir və kəsik zolağında {{ui:Binaya nəzərən düzbucaqlı}} aktiv olur. Modelin oxları üçün klikləyin, geri qayıtmaq üçün yenidən klikləyin (status sətri binanın nə qədər fırlandığını deyir). **Parametrlər › BimCraft › Sahəsində fırladılmış bina › Sahəsində yerləşdirildiyi kimi** seçimi ilə kəsiklər və görünüşlər modelin oxlarından başlayır. Bax [Parametrlər](topic:settings).

## Nə görməlisiniz

- **Üst** kəsikdən aşağıda qalanı saxlayır, beləliklə otaqlara yuxarıdan baxırsınız. Sürüşmə modelin altından yuxarıya doğru ölçülür.
- **Ön** kəsiyin arxasındakını önündən görünən şəkildə saxlayır; **Yan** kəsikdən kənardakını yandan görünən şəkildə saxlayır. Sürüşmə modelin önündən və ya yanından ölçülür.
- Nazik rəngli kontur müstəvinin harada olduğunu göstərir.
- Müstəvi divar, döşəmə və ya digər bərk cisimdən keçdikdə, kəsilmiş üz çertyojdakı kəsik kimi tünd rəngə doldurulur. Zolaqdakı {{ui:Doldur}} bunu aç-söndür edir.
- Sağ aşağı küncdəki görünüş kubu modeli istənilən tərəfdən kəsiyə baxmaq üçün fırladır.
- Klikləmək gördüyünüzü seçir: kəsilib atılmış heç nə seçilə bilməz.

## Ümumi səhvlər

- **Heç nə dəyişmədi.** Kəsik damın üstündə və ya modelin xaricində ola bilər. Sürğücü sürükləyin və ya kiçik sürüşmə yazın.
- **Sürüşmə geri sıçradı.** Modelin xaricindəki məsafə onun sonuna köçürülür və status sətri bunu deyir.
- **Problem (BCF) həcminizin yalnız bir hissəsini göstərir.** BCF bir qutunu əyilmiş üzləri və müstəviləri ilə saxlayır: həcmin birinci qutusunu. Problem yaradanda status sətri bunu deyir.
- **Kəsik boşdur.** Zolaqda {{ui:Doldur}} söndürülüb: divarların, döşəmələrin və digər bərk cisimlərin kəsilmiş üzlərini doldurmaq üçün klikləyin.
- **Doldurulmuş kəsik ləkəli görünür və ya bir parça itir.** Doldurma bağlı bərk cisimlər tələb edir; faylda forması bağlı olmayan element (tək təbəqə, ağac yarpaqları) doldurulmadan qalır, üzərinə boyanmır. Fərqli rəngli hissələrdən ibarət element (çərçivə və onun şüşəsi) hissələri bir-birinə bitişdikdə doldurulur.
- **Kəsik zolağı harada?** O, kəsdiyi 3D görünüşünün yuxarısındadır: {{ui:Böl}} rejimində 3D yarısında, yalnız {{ui:Plan}}-da isə çəkmə zolağının altında. Qısa görünüşdə o sürüşür.

## Növbəti

- [Mərtəbələri, məkanları və kənarları göstərmək və gizlətmək](topic:storeys-and-spaces)
- [DWG və ya DXF çertyojunu 3D-də baxmaq](topic:dwg-in-3d) — çertyojlar 3D-də eyni kəsik müstəvisinə malikdir
