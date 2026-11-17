---
title: Portlu MEP avadanlığı
summary: Boruların və kanalların uclarına ümumi hava emiciləri, ventilyatorlar, nasoslar, qazanlar, su qızdırıcıları, terminal blokları, diffuzerlər, panjurlar və çənlər yerləşdirin; ölçüləri siz yazdığınız dəyərlərlə müəyyən olunur, hər birində digər xətlərin birləşdiyi boru və kanal birləşmələri var.
keywords: mep, avadanlıq, hava emicisi, ahu, ventilyator, kanal ventilyatoru, nasos, qazan, su qızdırıcısı, terminal blok, vav, diffuzer, panjur, registr, çən, port, portlar, birləşmə, boğaz, boğaz ölçüsü, hvac, santexnika, mexaniki, ifc, ifcpump, ifcairterminal, ifcunitaryequipment
from: df1bf8c5
---

## Nə edəcəksiniz

Avadanlığı boru və kanalların uclarına qoyun. Hər parça yazdığınız dəyərlərlə ölçülən ümumi formadır, birləşmələri isə **portlar** kimidir: boru və ya kanal harada birləşir, hansı sistem, axın hansı istiqamətdə gedir və hansı ölçüdə. Portdan çəkilən boru və kanallar onun ölçüsünü və sistemini alır və ona sabit qalır: bax [Boruları və kanalları avadanlığa birləşdirin](topic:mep-connections).

:::note
Bu layihələndirmə və koordinasiya köməkçisidir, avadanlığı mühəndis ölçüləndirir. Avadanlıq istehsalçının məhsulu deyil: güc, çəki və ya istehsalçının birləşmə ölçüləri yoxdur. Lazım olduqda MEP proqramınızdan istehsalçının modelini IFC kimi gətirin.
:::

## Parça yerləşdirin

1. {{ui:Çək}} düyməsini yandırın, {{ui:Versiya}} menyusunu açın və {{ui:Avadanlıq}} seçin.
2. Panelində növü seçin və ölçülərini yazın. Hər növ öz ölçülərini istəyir:

| Növ | Yazırsınız | Onun portları |
|---|---|---|
| Hava emicisi | uzunluq, en, hündürlük; təchizat və qayıdış açıqları; sarğac borusunun ölçüsü və sistemi; kondensat ölçüsü | təchizat kanalı çıxışı, qayıdış kanalı girişi, sarğac girişi və çıxışı, kondensat drenajı |
| Xətti ventilyator | diametr, uzunluq, sistem | kanal girişi və çıxışı |
| Nasos | boru ölçüsü, sistem | giriş və çıxış |
| Qazan | uzunluq, en, hündürlük, boru ölçüsü, qaz ölçüsü, tüstü kanalının diametri | istilik təchizatı çıxışı və qayıdış girişi, qaz girişi, tüstü çıxışı |
| Su qızdırıcısı | diametr, hündürlük, boru ölçüsü, qaz və ya elektrik | soyuq su girişi, isti su çıxışı (qaz yandırırsa, həm də qaz girişi və tüstü kanalı) |
| Terminal blok | uzunluq, en, hündürlük, dəyirmi giriş, çıxışın eni və hündürlüyü | təchizat havası girişi və çıxışı |
| Diffuzer | üz, boğaz, sistem | onun boğazı (hava girişi) |
| Panjur | üzün eni və hündürlüyü, boğazın eni və hündürlüyü, sistem | onun boğazı (qayıdış və ya egzoz kanalına hava çıxışı) |
| Çən | diametr, hündürlük, boru ölçüsü, sistem | üstdə giriş, aşağıya yaxın çıxış |
| Radiator | uzunluq, hündürlük, dərinlik, boru ölçüsü, sistem | bir ucunun yuxarısında axın girişi, o biri ucunun aşağısında qayıdış çıxışı |
| Konvektor / panel qızdırıcı | uzunluq, hündürlük, dərinlik, boru ölçüsü, sistem | bir ucda axın girişi, o birində qayıdış çıxışı |
| İstehsalçının ailəsi | ailə (bax [Boru spesifikasiyaları, klapanlar, dempferlər və istehsalçıların ailələri](topic:pipe-specs)) | ailəsinə verilmiş portlar |

3. **Hündürlük** təyin edin — bazasının səviyyədən yuxarı hündürlüyü. Diffuzerin və ya panjurun hündürlüyü onun üzüdür: tavanın hündürlüyünü yazın.
4. İstəyirsinizsə **Etiket** yazın (`AHU-1`); eyni növdən növbəti parça növbəti nömrəni alır.
5. Planın üzərində göstəricini hərəkət etdirin: ayaq izi və portları onunla gedir. {{key:R}} basaraq 90° çevirin. Yerini göstərmək üçün klikləyin.

Boru ölçüləri polad boru ölçüləridir (ASME B36.10M). Pompadan başqa materialda çəkilən boru öz materialında eyni nominal ölçünü alır.

## Dəyişdirin və ya silin

Planda və ya 3D görünüşdə seçin. Xüsusiyyətlər yazdığınız hər ölçünü, etiketini, X, Y, hündürlüyünü və dönməni, və hər portu göstərir: ölçüsünü, sistemini, axının istiqamətini və nəsə birləşib-birləşmədiyini. Hər dəyişiklik {{ui:Geri qaytar}} bir addımıdır; portlara sabit xətlər onunla birlikdə köçür. {{key:Delete}} silir; ona sabit olan xətlər qalır və Birləşmələr yoxlaması onları siyahıya salır.

## IFC faylında

Hər növ öz IFC sinfi kimi saxlanılır: IfcUnitaryEquipment (hava emicisi), IfcFan, IfcPump, IfcBoiler (qazan; su qızdırıcısı "Water heater" obyekt növü ilə su tipli IfcBoiler-dir), IfcAirTerminalBox (terminal blok), IfcAirTerminal (diffuzer, panjur) və IfcTank — eyni növ və ölçüləri olan hər parça üçün ümumi tip ilə. IFC2X3 faylları uyğun tiplərlə IfcEnergyConversionDevice, IfcFlowMovingDevice, IfcFlowController, IfcFlowTerminal və IfcFlowStorageDevice alır. Hər port birləşmənin olduğu yerdə yerləşən, çıxışa baxan, öz axın istiqaməti və sistemi ilə IfcDistributionPort-dur; digər proqramlar hansı xəttin hansı porta birləşdiyini oxuyur. Parça hər portunun sisteminə qoşulur və yerləşdirilmiş hər kitabxana elementinin malik olduğu kitabxana elementi dəstlərini daşıyır.
