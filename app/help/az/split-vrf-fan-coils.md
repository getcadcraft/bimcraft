---
title: Split, VRF və fankoil blokları
summary: Divar, kasset və kanallı daxili bloklar, tək-split və VRF xarici bloklar, refnet birləşmələri və 2-boru və ya 4-boru fankoillər yerləşdirin; hər birinin soyuducu agent, su, kondensat və hava kanalı birləşmələri olsun, aralarındakı line set-ləri isə dəyişdirilə bilən cədvəldən ölçüləndirərək çəkin.
keywords: split, mini split, minisplit, multi split, vrf, vrv, dəyişkən soyuducu axını, istilik nasosu, daxili blok, xarici blok, kondensasiya bloku, divar tipli, yüksək divar, kasset, kanallı, gizli, fankoil, fcu, 2-boru, 4-boru, refnet, budaqlanma birləşməsi, Y birləşmə, line set, lineset, soyuducu agent, maye xətti, qaz xətti, soranma xətti, acr, mis, kondensat, hvac, ifcunitaryequipment, splitsystem, ifcpipefitting
from: d102cee8
---

## Nə edəcəksiniz

Split, multi-split və ya VRF sisteminin bloklarını və fankoilləri modelə yerləşdirin, sonra onları line set-lərlə birləşdirin: ACR mis borudan maye və qaz xətti, blokların portlarına bərkidilmiş. Bloklar [portları olan MEP avadanlığı](topic:mep-equipment) kimi işləyir: eyni zolaq, Xassələr, portlar və [birləşmələr](topic:mep-connections).

:::note
Bu, layihələndirmə və koordinasiya üçün köməkçi vasitədir. Bloklar yazdığınız dəyərlərlə ölçülənmiş ümumi formalardır, heç bir istehsalçının məhsulu deyil. Onların boru ölçüləri R410A və R32 avadanlığı üçün **tipik nümunə dəyərləri** cədvəlindən götürülür, heç bir istehsalçıdan deyil: real ölçüləri blokların istehsalçısının quraşdırma təlimatı müəyyən edir, uzun xətlər və böyük hündürlük fərqləri isə onları dəyişdirir. İstifadə etdiyiniz bloklara uyğun etmək üçün cədvəli dəyişdirin və ya ölçüləri yazın.
:::

## Blok yerləşdirin

1. {{ui:Çək}} düyməsini yandırın, {{ui:Versiya}} açın və {{ui:Avadanlıq}} seçin.
2. Növü seçin və dəyərlərini təyin edin:

| Növ | Təyin edirsiniz | Portları |
|---|---|---|
| Split daxili blok, divar | tutum, maye və qaz xətti, uzunluq, dərinlik, hündürlük, kondensat ölçüsü | soyuducu agent maye və qaz, kondensat drenajı (sağ ucda, divara yaxın) |
| Split daxili blok, kasset | tutum, maye və qaz xətti, panel, gövdə, hündürlük, kondensat ölçüsü | soyuducu agent maye və qaz, kondensat drenajı (bir tərəfdə, yuxarıya yaxın) |
| Split daxili blok, kanallı | tutum, maye və qaz xətti, uzunluq, en, hündürlük, verilmə və qaytarma açıqlıqları, kondensat ölçüsü | verilmə kanalı çıxışı, qaytarma kanalı girişi, soyuducu agent maye və qaz, kondensat drenajı |
| Split xarici blok | tutum, maye və qaz xətti, en, dərinlik, hündürlük | soyuducu agent maye və qaz (sağ tərəfdə) |
| VRF xarici blok | tutum, maye və qaz xətti, en, dərinlik, hündürlük | soyuducu agent maye və qaz (ön tərəfdə, aşağıda) |
| Refnet birləşməsi | maye və ya qaz xətti, hər budaqdakı yük, hər ucdakı boru | giriş, A budağı, B budağı |
| Fankoil blok | 2-boru və ya 4-boru, uzunluq, en, hündürlük, verilmə və qaytarma açıqlıqları, sarğac borusu və sistemi, isitmə borusu, kondensat ölçüsü | verilmə kanalı çıxışı, qaytarma kanalı girişi, sarğac girişi və çıxışı, isitmə girişi və çıxışı (4-boru), kondensat drenajı |

3. **Hündürlük** sahəsini təyin edin: bloku əsasının səviyyədən yuxarıda hündürlüyü. Divar blokunun əsası onun alt tərəfidir (çox vaxt 2100 mm); kasseti tavanda üz tərəfi; refnetin hündürlüyü borusunun mərkəz xəttidir.
4. Yerinə klikləyin ({{key:R}} onu 90° fırladır).

**Tutum** blokun nominal soyutma gücüdür, kW ilə, yanında Btu/h. **Maye xətti** və **Qaz xətti** **Cədvəldən** vəziyyətində qaldıqda, blokun birləşmələri həmin güc üçün cədvəlin ölçülərini götürür; öz blokunuzun borusunu istifadə etmək üçün boru ölçüsü seçin. Refnetin girişi hər iki budağı birlikdə, hər budaq isə öz yükü üçün ölçülənir.

Soyuducu agent portları hər iki istiqamətdə işləyir (istilik nasosu hər iki istiqamətdə işləyə bilər). Kondensat drenajı hər drenaj kimi boru ölçüsüdür.

## Line set çəkin

1. İki parça seçin ({{key:Shift}}+ikinci parçaya klik): xarici blok və daxili blok (tək split), və ya xarici blok və refnet, refnet və daxili blok, yaxud iki refnet (VRF).
2. {{ui:Versiya}} açın və {{ui:Line set}} seçin.

BimCraft maye və qaz xətlərini onların sərbəst portları arasında çəkir: hər portdan çıxır və ortaq hündürlüyə qalxır, ACR misdən (1-5/8 düymə qədər yumşaldılmış sarğac, bundan yuxarı çəkilmiş boru), bir addım {{ui:Geri qaytar}} kimi. Refnet yalnız öz xəttini götürür: girişinə xarici tərəfdən daxil olur, daxili bloklara doğru bir budaqdan çıxır. Hər xətt aşağı ucunun ölçüsünü alır (daxili blok və ya refnetin girişi); digər ucun portu başqa ölçüdədirsə, {{ui:Birləşmələri yoxla}} onu sadalayır: redüktor orada lazımdır. İki daxili blok arasında refnet olmalıdır.

Sonradan xətləri hər digər boru xətti kimi köçürün; uclar portlarda qalır. Mərtəbələr arasındakı xətlər {{ui:Boru}} ilə çəkilir: soyuducu agent portundan başlanan boru öz sistemini, ACR misini və ölçüsünü alır.

## Line set cədvəlini dəyişdirin

{{ui:Versiya}} açın və {{ui:Line set ölçüləri}} seçin. Hər sətir deyir: bu tutuma qədər (kW), bu maye borusu və bu qaz borusu.

| Qədər | Maye | Qaz |
|---|---|---|
| 2.8 kW | Ø6.35 (1/4") | Ø9.52 (3/8") |
| 5.6 kW | Ø6.35 (1/4") | Ø12.7 (1/2") |
| 16 kW | Ø9.52 (3/8") | Ø15.88 (5/8") |
| 22.4 kW | Ø9.52 (3/8") | Ø19.05 (3/4") |
| 33 kW | Ø9.52 (3/8") | Ø22.22 (7/8") |
| 47 kW | Ø12.7 (1/2") | Ø28.58 (1-1/8") |
| 71 kW | Ø15.88 (5/8") | Ø28.58 (1-1/8") |
| 104 kW | Ø19.05 (3/4") | Ø34.92 (1-3/8") |
| 180 kW | Ø19.05 (3/4") | Ø41.28 (1-5/8") |

Bunlar başlanğıc, tipik dəyərlərdir. Sətiri dəyişdirin, sətir əlavə edin və ya silin, sonra {{ui:Saxla}} seçin: cədvəl modeldə saxlanılır, faylla işləyən hər kəs onu istifadə edir, {{ui:Geri qaytar}} onu geri alır. {{ui:Tipik dəyərlərdən istifadə et}} başlanğıc cədvəli bərpa edir. Artıq yerləşdirilmiş parçalar, siz onları dəyişənə qədər öz portlarını saxlayır.

## IFC faylında

Split və VRF sistemlərinin daxili və xarici blokları SPLITSYSTEM tipli IfcUnitaryEquipment-dir, obyekt tipi hansının olduğunu göstərir ("Split indoor unit, wall-mounted", "Split indoor unit, ceiling cassette", "Split indoor unit, ducted", "Split outdoor unit", "VRF outdoor unit"). Fankoil AIRHANDLER tipli IfcUnitaryEquipment-dir, obyekt tipi "Fan coil unit": IFC4-də fankoil tipi yoxdur, bir otaq üçün ventilyator, sarğac və filtr isə AIRHANDLER-in təsvir etdiyi şeydir. Refnet birləşməsi JUNCTION tipli IfcPipeFitting-dir ("Refnet joint"). IFC2X3 faylları uyğun tiplərlə IfcEnergyConversionDevice və IfcFlowFitting alır.

Soyuducu agent portları və xətləri REFRIGERATION sistemlərindədir (maye xətləri üçün bir, qaz xətləri üçün bir), kondensat DRAINAGE sistemindədir. ACR xətləri xarici diametrinə görə adlanır. Line set cədvəli layihədə CadCraft_HvacLineSets xassə dəstidir.

Ayrıca baxın: [Portları olan MEP avadanlığı](topic:mep-equipment), [Boru və kanalları avadanlığa birləşdirmək](topic:mep-connections) və [Borular və kanallar](topic:pipes-and-ducts).
