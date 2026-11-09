---
title: BimCraft ekranı
summary: Hər çubuq, panel və düymənin ekranda adı ilə turu və hər fayl növü üçün ekranın necə dəyişdiyi.
keywords: ekran, düzüm, panellər, alət paneli, interfeys, ui, tur, xassələr paneli, brauzer, tətbiq paneli
from: 2eb01ec2
---

BimCraft ekranında yuxarıda bir çubuq və onun altında üç sahə var: solda panel, ortada səhnə və sağda {{ui:Xassələr}} paneli. Hər sahədə nə göründüyü açdığınızdan asılıdır: IFC modeli, layihə və ya ailə faylı, çertyoj və ya qovluq.

## Tətbiq paneli

Yuxarıdakı nazik zolaq BimCraft-ın özünə deyil, CadCraft saytına aiddir. Soldan sağa:

- CadCraft nişanı: CadCraft ana səhifəsinə keçir.
- Tətbiqin adı və versiya menyusu. Daxili quruluşda hansı quruluşu işlətdiyinizi göstərir və buraxılmış versiyaya keçməyə imkan verir.
- {{ui:BimCraft haqqında}}: tətbiqin saytdakı səhifəsi.
- {{ui:Parametrlər}}: BimCraft-ın öz parametrləri və hər tətbiqin paylaşdığı parametrlər. Bax [BimCraft parametrləri](topic:settings).
- {{ui:Tam ekran}}: ekran rejimləri arasında dəyişir. Bax aşağıda [Ekran rejimləri](topic:workspace#screen-modes).
- {{ui:Kağız}} və {{ui:Model}}: açıq və tünd mövzular. 3D görünüş və 2D çertyojlar seçdiyiniz mövzunu izləyir.

## Sol panel

Sol panel həmişə **Fayl və ya qovluq aç** ilə başlayır:

- Atıb buraxma sahəsi, {{ui:Fayl seçin, ya da faylı və ya qovluğu bura atın}}. Bir fayl seçmək üçün klikləyin, və ya faylı və ya qovluğu buraya (ya da səhifənin istənilən yerinə) atın.
- {{ui:Qovluq aç}}: bütün layihə qovluğunu seçin. Bax [Bütün layihə qovluğunu açın](topic:open-project-folder).
- {{ui:Son qovluqlar}}: qovluq seçici ilə və ya atmaqla qovluq açdıqdan sonra Chrome və Edge-də görünür. Yenidən açmaq üçün {{ui:Yenidən aç}} və qovluq adına klikləyin, və ya kiçik × ilə unudun.

Altda bölmələr tətbiq olunduqca görünür:

| Bölmə | Nə zaman görünür | Nə var |
|---|---|---|
| {{ui:Dəyişikliklər}} | IFC modeli açıqdır | Saxlanmamış redaktələriniz, ən yenisi birinci, {{ui:Geri qaytar}} və {{ui:IFC kimi saxla}} ilə |
| {{ui:Fayl}} | Model və ya fayl kartı açıqdır | Fayl haqqında məlumat: ölçü, sxem və ya buraxılış, layihə, müəllif, elementlərin sayı |
| {{ui:Çertyoj}} | DWG və ya DXF açıqdır | Format, vahidlər, obyekt və qat sayları, vərəqlər, əlaqəli çertyojlar, avadanlıq |
| {{ui:Qovluq}} | Qovluq açıqdır | Fayl və model sayı, ölçü, tapılan problemlər |
| {{ui:Qovluğa qayıt}} | Qovluqdan fayl açmısınız | Qovluq hesabatına qayıdır |
| {{ui:Qatlar}} | Çertyoj açıqdır | Hər qat üçün qutucuq, {{ui:Hamısını aç}} və {{ui:Hamısını söndür}} ilə |
| {{ui:Mərtəbələr}} | IFC modeli açıqdır | Hər mərtəbə üçün qutucuq, ən yuxarı mərtəbə birinci |
| {{ui:Elementlər}} | IFC modeli açıqdır | Modelin hər növdən neçə elementi olduğu (ən çox rast gəlinən 30-u) |

## Səhnə

Ekranın ortası açıq faylı göstərir.

- **Boş**: "Bir bina modelini açın" yazısı, {{ui:Fayl seçin}} və {{ui:Qovluq aç}} düymələri və hər format haqqında qısa təsvir.
- **IFC modeli**: yuxarısında alət paneli olan 3D görünüş. Alətlər CadCraft qaralama tətbiqinə oxşar adlandırılmış qruplardadır, hər alətin ikonası adının üstündədir: {{ui:Görünüş}} ({{ui:Sığdır}}, {{ui:Üst}}, {{ui:Ön}}, {{ui:Yan}}, {{ui:Kənarlar}}, {{ui:Məkanlar}}); {{ui:Redaktə}} ({{ui:Geri qaytar}}, {{ui:Təkrarla}}, {{ui:Kopyala}}, {{ui:Yapışdır}} və {{ui:Daha çox}}, bax [Kitabxana elementlərini kopyalayın, yapışdırın və təkrarlayın](topic:copy-paste)); {{ui:Model}} ({{ui:Vahidlər}} və {{ui:Çək}}); {{ui:Kitabxana}} ({{ui:Kitabxana}}, {{ui:Avadanlıq}}, {{ui:Yeniləmələr}}, {{ui:Müəlliflər}}); {{ui:Baxış}} ({{ui:Göstər}}, {{ui:Kəsik}}, {{ui:Gəz}}, {{ui:Ölç}}; bax [IFC modelini kəsik müstəvisi ilə kəsin](topic:section-plane)); və {{ui:Çıxış}} (render, canlı baxış, VR, ixraclar, boyama və saxlanmış görünüşlər). {{ui:Çək}} aktiv olduqda onun altındakı Çək çubuğu eyni görünüşə malikdir: {{ui:Görünüş}} (səviyyə və plan növü), {{ui:Çək}}, {{ui:Redaktə}} və {{ui:Kitabxana}}. Sağ aşağı küncdə görünüş kubu var. Bax [IFC modelini açın və 3D-də ətrafa baxın](topic:open-ifc-model). {{ui:Parametrlər}} › {{ui:Ümumi}} bu düymələrdə ikonların, etiketlərin və ya hər ikisinin görünməsini seçir, qrup adlarını göstərir və ya gizlədir; alət panelinə sağ klik edərək alətləri və qrupları yenidən düzə bilərsiniz. Qısa pəncərədə alət paneli ikonların altındakı adları çıxarır.
- **Layihə və ya ailə faylı**: fayl kartı, önizləmə şəkli, layihə məlumatı və əlaqəli fayllar ilə. Bax [Layihə və ya ailə faylını oxuyun](topic:read-rvt-file).
- **DWG və ya DXF**: sekmələr sırası ({{ui:Model}}, sonra hər vərəq üçün bir, çertyojda etiketlənmiş avadanlıq varsa {{ui:Avadanlıq}}, {{ui:3D}}, {{ui:Sığdır}} və {{ui:Çap görünüşü}}), çertyoj və bir küncdə canlı X və Y koordinatları. Bax [DWG və ya DXF çertyojuna baxın](topic:view-dwg) və [DWG və ya DXF çertyojunu 3D-də görün](topic:dwg-in-3d).
- **Qovluq**: {{ui:Buradan başlayın}} qutusu və modellər, əlaqələr, IFC modelləri və çertyojlar cədvəlləri ilə qovluq hesabatı. Bax [Bütün layihə qovluğunu açın](topic:open-project-folder).

**Status sətiri** səhnənin altında BimCraft-ın nə etdiyini ("Model oxunur…", "Həndəsə qurulur: 5400 elementdən 1200") və nə səhv getdiyini, uğursuz olduqda qırmızı rəngdə bildirir. Uğur mesajları bir neçə saniyədən sonra solur.

## Xassələr paneli

Sağ panel göstərir:

- IFC modeli üçün: klikləndiyiniz element, adı, növü, etiketi, GlobalId və hər xassə dəsti. Dəyişdirə biləcəyiniz dəyərlər düymə kimi görünür. Bax [Xassələr paneli sahələri](topic:properties-panel).
- Çertyoj üçün: necə hərəkət etmək, çertyojun əlaqəli çertyojları və şəkilləri, hər birinin tapılıb-tapılmadığı, və **Hələ çəkilməyənlər** siyahısı.
- Fayl kartı və ya qovluq üçün: növbəti nə açmaq barədə qısa qeyd.

## Kiçik ekranda

BimCraft pəncərə noutbuk ekranından dar olduqda sahələrini üst-üstə yığır: səhnə yuxarıda, panellər altında. Panellərə çatmaq üçün səhifəni sürüşdürün. Telefonda bir sütun, planşetdə iki sütun təşkil olunur.

## Ekran rejimləri

Tətbiq panelindəki {{ui:Tam ekran}} düyməsi, və ya hər platformada {{key:Ctrl+Shift+F}}, üç rejim arasında dəyişir:

1. Normal.
2. Tam ekran, çubuqlar hələ görünür.
3. Tam ekran, tətbiq paneli gizlənir. Onu geri gətirmək üçün göstəricini yuxarı kənara aparın, və ya oraya toxunun.

Normala qayıtmaq üçün {{key:Esc}} basın. Tam ekranı dəstəkləməyən brauzerlər (iPhone kimi) yalnız normal və gizli çubuqlar arasında dəyişir.

## Əlaqəli

- [Klavişlər və siçan](topic:keyboard)
- [BimCraft-ın açdığı və saxladığı fayllar](topic:files)
