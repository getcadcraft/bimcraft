---
title: Ailələr və onların ölçüləri
summary: Qapılar, pəncərələr və mebel ailələrdə gəlir. Ailənin hər ölçüsü IFC faylında bir tipdir, beləliklə BimCraft-da tip siyahısı qısa qalır, digər proqramlar isə sadə tipləri oxuyur.
keywords: ailə, ailələr, tip, tiplər, ölçü, ölçülər, qapı tipi, pəncərə tipi, mebel, masa, rəf, dolab, yeni ölçü, surət, ailə yerləşdir, ailə faylı, ccfamily, ifc kitabxanası, layihə kitabxanası, qrup, görünürlük, IfcDoorType, IfcWindowType, IfcGroup
from: 77caac48
---

## Ailə nədir

Ailə bir növ şeyin bir neçə ölçüdə olmasıdır: eni 32, 36 və 42 in olan tək açılan qapı, ya uzun, ya qısa masa. BimCraft-da ailəni bir dəfə, ölçüləri altında görürsünüz, uzun tip siyahısı əvəzinə.

IFC-də ailələr yoxdur. Faylda hər ölçü adi bir tipdir (qapı tipi, pəncərə tipi, mebel tipi…), ailə isə ölçülərini sadalayan qrupdur. Digər BIM proqramları tipləri və qrupu olduğu kimi oxuyur; BimCraft ailəni onlardan geri bərpa edir.

## Harada tapmaq olar

- Layihə brauzerinin **Ailələr** qrupu bu modeldəki ailələri, hər birinin neçə ölçüsü olduğunu və neçəsinin yerləşdirildiyini göstərir. Onların altında **Başlanğıc ailələr** var: Qapı və Pəncərə alətlərinin qapı və pəncərələri, həmçinin masa, rəf bloku və baza dolabı.
- {{ui:Build}} › {{ui:Families…}} eyni siyahını pəncərədə göstərir.
- Ailəni açmaq üçün klikləyin: onun ölçüləri, hər ölçünün dəyərləri və hər ölçünü neçə elementin istifadə etdiyi.

## Qapılar və pəncərələr

Qapı və Pəncərə alətləri həmin növün ailələrini, yanlarında isə **ölçü siyahısını** göstərir. Ölçü seçin və ya **W** və **H** yazın: heç bir ölçüyə uyğun olmayan en və hündürlük qapını yerləşdirəndə ailənin yeni ölçüsünə çevrilir. Eyni ölçülü qapılar bir tipi paylaşır.

{{ui:Properties}} panelində seçilmiş qapı və ya pəncərə **Ailə** və **Ölçü** göstərir. Siyahıdan başqa ölçü seçin, ya da yeni en və ya hündürlük yazın. {{ui:Open the family}} ona aid olan ailəni açır.

Qapının və ya pəncərənin çərçivəsi öz divarının qalınlığını izləyir, əvvəlki kimi. Ölçünün tipi də 140 mm divarda çəkilən qapını saxlayır ki, tipləri oxuyan proqramlar üçün.

## Bu ailədən yeni ölçü

1. Ailəni açın.
2. **Bu ailədən yeni ölçü** altında onun dəyərlərini (En, Hündürlük və ailənin digər parametrləri) yazın və istəsəniz ad verin. Ad verilmədikdə dəyərlərinə görə adlandırılır.
3. {{ui:Make the size}} klikləyin.

İki ölçünün eyni dəyərləri ola bilməz. **Yenidən adlandır** ölçünün adını dəyişir; **Sil** heç kim istifadə etməyən ölçünü çıxarır; **Seç** həmin ölçünün elementlərini seçir.

## Mebel yerləşdirin

1. {{ui:Build}} › {{ui:Place family}}, ya da ailənin pəncərəsində {{ui:Place}}.
2. Panelda ailəni və onun ölçüsünü seçin.
3. Planda klikləyib səviyyəyə yerləşdirin. Klik etməzdən əvvəl 90° döndərmək üçün {{key:R}} basın. {{key:Esc}} dayandırır.

Yerləşdirilmiş parçanın {{ui:Properties}} bölməsi onun ölçüsünü, yerini və neçə dərəcə döndərildiyini göstərir; {{key:Delete}} onu silir. Eyni ölçülü hər parça həmin ölçünün formasını paylaşır, buna görə ailəni dəyişdikdə hamısı dəyişir.

## Cədvəldən ölçülər

{{ui:Sizes from a table…}} ailənin pəncərəsində CSV faylı oxuyur (vergül, nöqtəli vergül və ya tab). Birinci sətir sütunların adını verir: parametrin adı və ya etiketi, istəyə görə `Name`. Uzunluqlar millimetrdir, vahid yazmadıqca (`1.2 m`, `36 in`). Bəli / Xeyr sütunları yes, no, true, false, 1 və ya 0 qəbul edir, sütunu olmayan parametr standart dəyərini saxlayır. Hər sətir bir ölçü olur, geri qaytarıla bilən bir addımda; artıq olan ölçü ötürülür. Oxunmayan və ya ailənin çəkə bilmədiyi bir sətir bütün cədvəli rədd edir və öz sətrinin nömrəsini göstərir. Ən çox 200 sətir və 1 MB. {{ui:Save the sizes as a table}} eyni cədvəli geri yazır.

## Hər element üçün təyin edin

Redaktorda **Hər elementə görə** ilə işarələnmiş parametr (üst pəncərə, yazı və ya material əlavə edən Bəli / Xeyr) ölçünün parçası deyil: eyni ölçülü iki qapı fərqli ola bilər. Elementi seçin, **Xassələr** bu parametrləri göstərir; birini dəyişsəniz, həmin element öz formasıyla yenidən çəkilir (mebel və qurğular öz formasını alır, qapılar və pəncərələr öz divarlarında yenidən qurulur). Hamısını standart dəyərlərinə qaytarsanız, element ölçüsünün formasına qayıdır.

## Təfərrüat səviyyəsi

{{ui:Build}} › {{ui:Families…}} › **Təfərrüat səviyyəsi** modeldəki hər ailə üçün cisimlərdə nə saxlanılacağını və plan simvollarında nə çəkiləcəyini təyin edir: **İncə** hər şeyi saxlayır, **Orta** və **Kobud** redaktorun daha incə işarələdiyi hissələri çıxarır (kiçik fayllar, daha sürətli görünüşlər). **Avtomatik** hər şeyi saxlayır və vərəq görünüşünə miqyasına görə seçməyi buraxır: 1:50 və daha böyük incə, 1:100 orta, 1:200 və daha kiçik kobud. Bir addım, geri qaytarıla bilər.

## Ailənin surətini çıxarın

Heç nədən başlamaq məcburi deyil. {{ui:Duplicate}} ailəni parametrləri, cisimləri və ölçüləri ilə yeni ad altında kopyalayır. Surəti redaktorda dəyişin; əsl ailə olduğu kimi qalır.

## Ailə faylları

- {{ui:Save the family file}} `.ccfamily.json` faylını saxlayır: ailənin parametrləri, cisimləri və ölçüləri. Onu başqa modeldə Ailələr qrupunda {{ui:Open a family file…}} ilə açın.
- {{ui:Save as IFC}} ailəni kiçik IFC faylı kimi saxlayır: onun ölçülərinin tipləri və qrupu, IFC layihə kitabxanası ilə elan olunmuş. Digər proqramlar onu tiplər dəsti kimi açır; BimCraft onu yenidən ailə kimi açır.

Burada açılan ailə faylı məlumat kimi oxunur və heç nə yazılmazdan əvvəl yoxlanılır. Modeldə artıq olan açarlı ailə ayrıca ailə kimi gəlir. Başqalarını da özündə saxlayan ailə (redaktorda Daxilindəki ailələr bölməsinə bax) onları da gətirir: fayl onları sadalayır, model isə artıq sahib olduqlarını saxlayır.

## Kitabxanadakı ailələr

{{ui:Families…}} açın və {{ui:From the Library…}} seçin ki, Kitabxanada paylaşılmış ailələri görün. {{ui:Add to this project}} onu ailə faylı kimi oxuyur: BimCraft heç nə yaratmazdan əvvəl hər sahəni yoxlayır, ailə öz ailəsi kimi gəlir və redaktorda açılır. Əlavə etmək bir geri qaytarma addımıdır. Öz ailənizi paylaşmaq üçün {{ui:Save all as a library}} istifadə edin və faylı Kitabxanaya göndərin (Kitabxananın işçiləri ailə faylını əmrlə dərc edir, hər ailə öz ölçüləri ilə ayrıca elementdir). Kitabxanaya çatmaq mümkün olmasa, siyahı bunu deyir və heç nə dəyişmir.

## Digər proqramların tipləri

Digər proqramların yaratdığı tiplər də **Ailələr** qrupunda görünür, bir təxmin üzrə qruplaşdırılır: elementlərinin adlarının ilk ":" işarəsindən əvvəlki hissəsinə görə, əks halda yalnız nömrələrində fərqlənən tip adlarına görə. Ailə pəncərəsi hansı təxmindən istifadə etdiyini bildirir. Onlar siyahıya salınır və elementlərini seçə bilərsiniz, amma burada redaktə olunmurlar: ailə resepti yoxdur.

:::note
Başlanğıc qapılar və pəncərələr ailələr yaranmamışdan əvvəlki kimi çəkilir. Ailələrdən əvvəl yaradılmış fayllar dəyişdirilmədən açılır: onların qapıları və pəncərələri öz ailəsi altında istifadə olunan ölçülərlə görünür və ilk dəfə dəyişdirdikdə öz ölçüsünə keçir.
:::

Bax da [Ailəni redaktə edin](topic:family-editor) və [Qapılar və pəncərələr](topic:doors-and-windows).
