---
title: Polad boru spulları və spul vərəqləri
summary: Polad butt-qaynaqlı boru xəttini ən uzun uzunluqda və yerləşdirdiyiniz yerində qaynaq nöqtələrində spullara bölün, nömrələyin və hər spul üçün spul vərəqini PDF və CSV kimi yükləyin (3D görünüş, kəsim uzunluqları, fitinqlər, qaynaqlar, materialların siyahısı); hava kanallarında düz parçaların kəsim siyahısı alınır.
keywords: spul, spullar, spul vərəqi, izometrik, istehsal, prefabrikasiya, yerində qaynaq, emalatxana qaynağı, butt qaynaq, kəsim uzunluğu, kəsim siyahısı, materialların siyahısı, bom, polad boru, schedule 40, xətt nömrəsi, kanal kəsim siyahısı, kanal hissələri
from: 539f51de
---

## Nə edəcəksiniz

Polad boru xəttini emalatxanada qaynaqlanan və montajçının quraşdırdığı hissələrə çevirin: seçdiyiniz uzunluqdan uzun olmayan spullar, yerləşdirdiyiniz yerində qaynaq nöqtələrində bölünür, hər birinin öz vərəqi var.

Spullara yalnız **polad butt-qaynaqlı boru** kəsilir (boru ölçüləri ASME B36.10M, dirsəklər ASME B16.9 uzun radiusla). Mis, PVC və PEX birləşmələri butt qaynaq deyil, ona görə onların xətlərində spul yoxdur.

## Xətti spullara kəsin

1. Polad boru xəttini seçin. Xassələr panelində **Spullara kəs** işarələyin.
2. **Ən uzun spul**: bir spulun malik ola biləcəyi ən çox mərkəz xətti uzunluğu (başlanğıc üçün 6 m, təxminən 20 ft).
3. **Xətt nömrəsi**: hər spul nömrəsinin bir hissəsi. Yeni spullanmış xətt, sistemin növbəti boş nömrəsini alır.

Spullar xəttin ilk nöqtəsindən etibarən nömrələnir: `CHW-12-S01`, `CHW-12-S02` … (sistem, xətt nömrəsi, spul). Spul hissə-hissə böyüyür; onu çox uzun edən hissə növbəti spula başlayır, və düz hissə spuldan uzun olarsa, spul dolduğu yerdə kəsilir.

## Sahə qaynaqlarını qoyun

1. {{ui:Versiya}} açın və {{ui:Yerində qaynaq}} seçin.
2. Yerində qaynaq olacaq spullanmış boruya klikləyin. Düz hissənin içində boru orada kəsilir; fitinqin və ya klapanın içində qaynaq ən yaxın birləşməyə keçir.

Xassələr xəttin yerində qaynaqlarını sadalayır, hər biri {{ui:Sil}} ilə. Hər dəyişiklik {{ui:Geri qaytar}}-ın bir addımıdır.

## Spul vərəqləri

Spullanmış xəttin Xassələrində:

- {{ui:Spul vərəqləri (PDF)}}: hər spul üçün bir səhifə. Solda, 30° izometrik görünüşdə spul: düz hissələri nömrələnib, emalatxana qaynaqları nöqtə kimi, yerində qaynaqlar FW ilə işarələnib və planın şimalı. Sağda spulun nömrəsi, ölçüsü, cədvəli və uzunluğu, sonra **kəsim uzunluqları**, **fitinqlər**, **qaynaqlar** (spulun içində hər birləşmədə emalatxana butt qaynağı, növbəti spula birləşdiyi yerdə yerində qaynaq) və borunun çəkisi ilə **materialların siyahısı** (ASME B36.10M sadə uclu çəki).
- {{ui:Spul siyahısı (CSV)}}: eyni məlumat, hər spul üçün bir blok.

:::note
Kəsim uzunluqları çəkildiyi kimi, bir uçdan digərinə verilir: kök boşluğu və ya qaynaq ehtiyatı çıxılmır. Dirsəklər B16.9 uzun radiusdadır; trinik, reduksiya və klapanlar ümumidir, borudan ölçülüb, B16.9 və ya istehsalçıdan deyil, və vərəqdə bu deyilir. Fitinq çəkisi verilmir. Layihələndirmə və koordinasiya vasitəsidir, mühəndis tərəfindən ölçülüb.
:::

## IFC faylında

Spullanmış xəttin hər hissəsi **CadCraft_Spool** ilə SpoolId-ni, xəttini, xətt daxilində spulun nömrəsini və xətt boyunca harada başlayıb bitdiyini daşıyır. Xətt öz qaydalarını (ən uzun spul, yerində qaynaq, xətt nömrəsi) öz dəstində saxlayır, beləliklə fayl yenidən açılanda spullar eyni qayıdır.

## Kanallar: kəsim siyahısı

{{ui:Versiya}} açın və {{ui:Kanal kəsim siyahısı}} klikləyin: sistem, forma və ölçü üzrə düz kanal hissələrinin CSV-si. Hər düz uzunluq Kanal panelindəki **Hissə uzunluğu** (başlanğıc üçün 1500 mm, təxminən 5 ft) ilə hissələrə bölünür və qalanı da göstərilir. Yalnız uzunluqlar: tikişlər, qalınlıqlar və birləşdiricilər yoxdur.
