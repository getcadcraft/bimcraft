---
title: Miqdarları TakeoffCraft-a göndərin
summary: Bir klik modelin miqdarlarını TakeoffCraft-a göndərir — divarlar növə görə, damlar əyilmiş sahəyə görə, dam zirvələri, künc qırları və oluqlar, bünövrələr, qapılar və pəncərələr, şkaflar, elektrik cihazları, mərtəbə sahəsi və taxta kəsim siyahısı — hər səviyyənin planında qeyd olunmuş, ticarət paketlərinin yığımları isə elementlərdə.
keywords: takeoff, miqdar hesablaması, həcmlərin hesablanması, smeta, hesablama, materiallar siyahısı, materialların spesifikasiyası, takeoffcraft, miqdarlar, divar sahəsi, dam sahəsi, kvadratlar, bünövrə, beton, kub yard, kəsim siyahısı, taxta, ticarət paketi, yığım
from: c5a745af
---

## Nə edəcəksiniz

Modeli TakeoffCraft-da materiallar siyahısına və smetaya çevirin. BimCraft hər səviyyənin planını standart miqyasda çəkir, hər miqdarı planda qeyd edir və həcmlərin hesablanmasını PDF-in içinə qoyur. TakeoffCraft qeydləri özü ölçür, ona görə hər rəqəmi vərəqdə yoxlamaq olar.

## Göndərin

1. Model zolağında {{ui:Həcmlərin hesablanması}} klikləyin ({{ui:Vərəqlər}}-in yanında).
2. TakeoffCraft planlarla yeni səhifədə açılır. Soruşduqda, PDF-də tapdığı həcmlərin hesablanmasını açmağı seçin.
3. TakeoffCraft-ın miqdarlar cədvəlində qiymətlərinizi əlavə edin; yığımlar materialları artıq sadalayır.

:::note
TakeoffCraft burada mövcud olmadıqda düymə PDF-i yükləyir. Sonra onu TakeoffCraft-da açın: o, içindəki həcmlərin hesablanmasını tapacaq.
:::

## Nə ölçülür

- **Divarlar** növə və hündürlüyə görə: onların mərkəz xətləri xətt kimi, divar hündürlüyü isə elementdə, buna görə TakeoffCraft uzunluğu və divar sahəsini verir. Hər xətt divarın qapılarını və pəncərələrini daşıyır, buna görə TakeoffCraft onları divar sahəsindən bir dəfə çıxır, BimCraft cədvəllərinin qaydası ilə: hər ikisi ümumi, çıxılan və xalis üzrə razılaşır. Divar növünün həcm məlumatı (vahid, harç, tarif; bax [Divar yığımları](topic:wall-assemblies)) həmin növ elementində bir qiymətləndirilmiş sətir kimi gəlir. Standart olmayan ölçmə üsulunda (bax [Ölçmə üsulunu seçin](topic:plan-schedules-and-pdf#choose-a-measurement-method)) həcmlər hesablanması üsulu daşıyır, hər xətt birləşmələrin divar üzündən çıxardığını daşıyır və TakeoffCraft eyni üsulla ölçür və onun adını deyir. Vahidinin uzunluğu və hündürlüyü olan növ iki komponent verir, miqdarları ilə: sifariş veriləcək vahidlər və harç həcmi; növün tarifi vahid başına, hər 1000 vahid üçün və ya hər m³ harç üçün qiymətləndirilir. Say tam ədədə dəqiq düşdükdə TakeoffCraft-da bir vahid çox ola bilər, çünki ötürmə vərəqdəki mövqeləri yuvarlaqlaşdırır.
- **Damlar**: hər dam müstəvisi əyilmə bucağı ilə sahə kimi (TakeoffCraft əyilmiş sahəni verir), dam zirvələri, künc qırları və oluqlar (künc qırları və oluqlar öz meyli boyunca), damkənarları və yan kənarlar.
- **Bünövrələr**: bünövrə ayaqları və divar gövdələri ortaları ətrafında xətt kimi, döşəmə plitələri qalınlığı ilə sahə kimi, buna görə beton həcmə görə çıxır.
- **Qapılar və pəncərələr** növə görə sayılır, pəncərə kənarlığı ilə.
- **Baza şkafları** onların ön hissələrinin uzunluğuna görə.
- **Elektrik cihazları** növünə görə sayılır.
- **Hər səviyyənin mərtəbə sahəsi**, onun otaqlarından.
- **Taxta kəsim siyahısı** karkasdan, ayrıca vərəqdə sayılır (hər parça üçün bir nöqtə).

Hansı ticarət paketinin uyğun yığımı olduqda — xarici və daxili divarlar, plitələr, bünövrə ayaqları, gövdə divarları, dam örtükləri, dam zirvəsi və künc qapağı, oluqlar, damkənarları, daxili qapılar, pəncərə kənarlığı, baza şkafları, rozetkalar, açarlar, işıqlar, birləşdirici qutular və panel — element öz materialları və düsturları ilə gəlir. Paketlər qiymətsiz gəlir və hələ smeta mütəxəssisi tərəfindən yoxlanılmayıb.

:::tip
Planlar hər klikdə modeldən yenidən hazırlanır, ona görə dəyişiklikdən sonra sadəcə {{ui:Həcmlərin hesablanması}} yenidən klikləyin.
:::
