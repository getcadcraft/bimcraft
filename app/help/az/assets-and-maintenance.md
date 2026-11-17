---
title: Aktiv məlumatlarını və texniki xidmət qeydini modeldə saxlayın
summary: Təhvil verilmiş IFC modelindən binanı idarə etmək üçün istifadə edin: avadanlıq və qurğular üçün istehsalçı, model, seriya nömrəsi, zəmanət və xidmət müddəti, həmçinin görülən texniki xidmət qeydi — hamısı IFC-yə yazılır.
keywords: təhvil, tamamlanma sertifikatı, istifadəyə qəbul sertifikatı, as-built, təhvil paketi, aktivlər, aktivlər reyestri, obyektin idarə edilməsi, fm, əməliyyat, texniki xidmət, xidmət, zəmanət, seriya nömrəsi, barkod, istehsalçı, model, xidmət müddəti, təhvil, cobie, rəqəmsal əkiz, vaxtı keçmiş, vaxtı çatan, iş sifarişi
from: b84ac492
---

{{ui:Aktivlər}} bölməsi sağ paneldə açıq IFC modelini binanın avadanlığının qeydinə çevirir. Hər şey IFC-nin öz xassə çoxluqlarına və tapşırıqlarına yazılır, belə ki, faylı açan növbəti proqram da onu oxuyur. Heç nə yüklənmir və server lazım deyil: saxlamaq üçün IFC-ni yadda saxlayın.

## Nə siyahıya salınır

- Avadanlıq və qurğular: mebel, sanitar qurğular, işıq qurğuları, məişət cihazları, hava terminalları, klapanlar, nasoslar, ventilyatorlar, qazanlar, çənlər, rozetkalar, paylayıcılar, liftlər və bu kimi digər elementlər, həmçinin avadanlıq məlumatı olan kitabxana elementləri.
- Başqa istənilən elementi **izləyin**: modeldə onu seçin (qapı, divar, sadə obyekt kimi çəkilmiş nasos) və {{ui:Seçilənləri izlə}} düyməsini basın.
- Artıq aktiv məlumatı və ya texniki xidmət tapşırığı olan hər şey, burada və ya başqa proqramla yazılmış.

Vaxtı keçmiş olanlar birinci, sonra 30 gün ərzində vaxtı çatanlar gəlir. Ad, etiket, istehsalçı, model və ya seriya nömrəsi, səviyyə üzrə süzün və ya {{ui:Yalnız vaxtı keçmiş və ya 30 gün ərzində vaxtı çatanlar}} işarəsini qoyun.

## Aktiv məlumatları

Siyahıdakı aktivə klik edin (və ya modeldə seçin) onun məlumatlarını açmaq üçün: istehsalçı, model, model istinadı, seriya nömrəsi, barkod, quraşdırıldığı gün, zəmanət nömrəsi və onun başlanğıc və bitmə tarixi, həmçinin xidmət müddəti illərlə. {{ui:Məlumatları saxla}} onları bir addımda yazır ({{key:Mod+Z}} geri qaytarır). Dəyəri silmək üçün xananı boş buraxın.

## Sənədlər

Məlumatların altında {{ui:Sənədlər}} aktivə bağlı təlimatları, zəmanətləri, şəkilləri, sertifikatları və çertyojları sadalayır. Növü seçin, ona ad verin (və ya boş buraxın: fayl adı istifadə olunur) və onun harada olduğunu yazın:

- **veb ünvan** (`https://…`): ona yeni səhifədə açılan Aç keçidi verilir;
- və ya **fayl adı və ya yol** (`Manuals/AHU-1.pdf`, `C:\FM\pump.pdf`, şəbəkə paylaşımı): faylları IFC-nin yanında, eyni qovluqda və ya onun altında saxlayın ki, qovluğu təhvil verəndə adlar hələ də işləsin. BimCraft adı göstərir; faylı qovluqdan açın.

Fayllarının özü heç vaxt yüklənmir və IFC-yə köçürülmür: yalnız keçid yazılır. Tərkibində parol olan veb ünvan və veb ünvanı və ya fayl olmayan istənilən keçid (məsələn, `javascript:`) rədd edilir. {{ui:Sil}} sənədi aktivdən çıxarır (bir addım; {{key:Mod+Z}} geri qaytarır).

Başqa proqramın elementə yazdığı sənədlər də siyahıya salınır. Elementin **tipində** olan sənədlər həmin tipin hər elementində görünür və bunu bildirir; onları tipin yaradıldığı yerdə dəyişin.

IFC-də hər sənəd elementə bağlı IFC sənəd istinadıdır, növü həmin bağda saxlanılır, IFC4-də və IFC2X3-də eyni qaydada.

## Texniki xidmət qeydi

Sənədlərin altında {{ui:Görülən işi qeyd et}}: işin görüldüyü gün, iş, onu kimin gördüyü, növbəti vaxt və qeydlər. Hər qeyd bir addımdır; sonradan {{ui:Redaktə}} və {{ui:Sil}} ilə dəyişilir. Ən son qeydin növbəti vaxtı aktivin vaxtının keçdiyini və ya tezliklə çatacağını müəyyən edir.

## IFC-də necə saxlanılır

- İstehsalçı və model `Pset_ManufacturerTypeInformation`-da, seriya nömrəsi, barkod və quraşdırılma günü `Pset_ManufacturerOccurrence`-də, zəmanət `Pset_Warranty`-də, xidmət müddəti `Pset_ServiceLife`-da, birbaşa elementin özündə. Elementin tipində artıq istehsalçı və ya model varsa, siz öz dəyərinizi yazana qədər o görünür.
- Hər texniki xidmət qeydi elementə bağlı, texniki xidmət növündə IFC **tapşırığı**dır; tarixləri (IFC4-də tapşırığın öz vaxtı kimi də) və gün, onu kimin gördüyü və növbəti vaxt günü ilə `CadCraft_Maintenance` çoxluğu var.
- Başqa elementlə paylaşılan dəyərlər əvvəlcə köçürülür: bir aktivi dəyişmək heç vaxt qonşularını dəyişmir.
- Köhnə IFC2X3 fayllarında tarixlər mətn kimi yazılır (YYYY-MM-DD); bu versiya orada ayrıca tarix qeydi tələb edir, BimCraft isə onu yazmır.

## Sensor oxunuşları

Bina idarəetmə sistemindən, məlumat qeydedicisindən və ya cədvəldən ixrac olunan oxunuşları gətirmək üçün {{ui:Sensor dəyərləri}} və {{ui:Oxunuşları aç (CSV)…}} düyməsini açın:

- **Birinci sütun vaxtdır**: `2026-10-23 14:05`, `2026-10-23T14:05:00Z`, `2026-10-23T14:05+02:00` və ya Unix saniyələri. Zonası olmayan vaxt kompüterinizin öz saat qurşağında oxunur. `23/10/2026` kimi gün-birinci tarixlər oxunmur (onlar birmənalı deyil); ISO tarixlərini ixrac edin.
- **Hər digər sütun bir sensordur**, başlığı aktivin **etiketi**, **adı** və ya **GlobalId**-si ilə yazılır. Heç bir aktivə və ya bir neçəsinə uyğun gəlməyən başlıq siyahıya salınır və kənarda qalır. Sütunları vergül, nöqtəli vergül və ya tabulyasiya ayırır; nöqtəli vergül və ya tabulyasiya ilə onluq vergül (`21,5`) da oxunur.
- Oxunmayan vaxtlar və ya dəyərlər (söz, xanaya yazılmış vahid) sayılır və kənarda qalır, heç vaxt təxmin edilmir.

Ən son oxunuş siyahının {{ui:Oxunuş}} sütununda və aktivin {{ui:Sensor}} blokunda göstərilir, hər oxunuşun **qrafiki** ilə (telefonda qrafiklər {{ui:Qrafiki göstər}} düyməsinə toxunana qədər gözləyir). Aktivdə **aşağı və yuxarı həd** və vahid təyin edin və {{ui:Hədləri saxla}}: onların xaricindəki oxunuş aktivi işarələyir. Hər aktivi oxunuşuna görə boyamaq üçün {{ui:Modeldə göstər}} işarəsini qoyun — aşağı həddən aşağıda göy, həddlər daxilində yaşıl, yuxarı həddən yuxarıda qırmızı və həddi olmayan aktivlər üçün ən aşağıdan ən yuxarı oxunuşa qədər tək göy şkala — oxunuşu yarlıq kimi (60 yarlığa qədər, əvvəl işarələnmişlər).

**Oxunuşlar bu brauzer nişanında qalır**: onlar IFC-də saxlanılmır və heç yerə göndərilmir; növbəti dəfə CSV-ni yenidən açın. **Hədlər IFC-də saxlanılır** (elementdə `CadCraft_Sensor` çoxluğu: Low, High, Unit), belə ki, faylı açan növbəti şəxs eyni işarələri görür.

## Canlı oxunuşlar

{{ui:Canlı axın}} dəyərləri baş verdiyi anda oxuyur, **birbaşa bu brauzerdən sizin öz sisteminizə**. Heç nə bizim serverdən keçmir və brauzer nişanınızdan başqa heç yerdə saxlanılmır. Fayl açılanda heç nə qoşulmur: yalnız {{ui:Qoşul}} qoşulur.

- **MQTT WebSockets üzərindən**: brokerinizin WebSocket dinləyicisinin ünvanı (`wss://broker.example.com:8884/mqtt`) və aktivin etiketinin yerləşəcəyi `{tag}` olan bir və ya bir neçə mövzu, məsələn `site/{tag}/temperature` (BimCraft `site/+/temperature`-a abunə olur və etiketi hər mesajın mövzusundan oxuyur). `{tag}` olmayan mövzular sensoru özləri adlandırır. Mesaj ya sadə ədəddir (`21.5`), ya da `{"value": 21.5, "time": "2026-10-23T14:05:00Z"}` kimi JSON (sizinki başqa adlanırsa, {{ui:JSON-da dəyər sahəsi}} təyin edin).
- **Ünvana sorğu (HTTP)**: bina idarəetmə sisteminizin və ya kiçik skriptinizin cavab verdiyi veb ünvan, hər neçə saniyədən bir soruşulur (ən azı 5). Ona etiketlə açarlanmış JSON (`{"AHU-1": 21.5}`), JSON siyahısı (`[{"tag": "AHU-1", "value": 21.5}]`) və ya yuxarıdakı kimi oxunuşların CSV-si ilə cavab verə bilər. Cavab verməsə, BimCraft təkrar soruşmazdan əvvəl iki dəfə uzun gözləyir, beş dəqiqəyə qədər.

Hər oxunuş adını çəkdiyi etiket, ad və ya GlobalId-ə uyğun aktivə gedir, CSV sütunu kimi dəqiq eyni qaydada; heç bir aktivə uyğun gəlməyən adlar siyahıya salınır. Oxunuşlar {{ui:Sensor dəyərləri}}-yə qoşulur: siyahı, qrafiklər, hədlər və modeldəki rənglər eyni qaydada işləyir.

**Parolunuz və ya tokeniniz** bir qoşulma üçün yazılır: o qoşulmaya verilir və xana boşaldılır; heç vaxt bu brauzerdə və ya IFC-də saxlanılmır. Token standart `Authorization: Bearer` başlığı ilə göndərilir və heç bir cookie göndərilmir.

{{ui:Bu parametrləri IFC-də saxla}} ünvanı, mövzuları, dəyər sahəsini və nə qədər tez-tez soruşulacağını modelə yazır (layihədə `CadCraft_Feed` çoxluğu; parol üçün sahə yoxdur), belə ki, faylı açan növbəti şəxs yalnız öz girişini yazır və {{ui:Qoşul}} düyməsini basır. Parolu və ya açarı ünvanın özünə yazmayın: içində istifadəçi adı və parol olan ünvan rədd edilir.

:::note
**Brokeriniz və ya ünvanınız nəyə ehtiyac duyur.** Brauzer səhifəsi yalnız buna icazə verən serverlə danışa bilər:
- Səhifə təhlükəsizdir (https), ona görə brauzer yalnız `wss://` və `https://` ünvanlarına qoşulur — yalnız öz kompüterinizdə (`localhost`) istisna olmaqla, orada `ws://` və `http://` sınaq üçün işləyir.
- HTTP ünvanı bu səhifədən sorğulara icazə verməlidir (CORS: `Access-Control-Allow-Origin` başlığı, token istifadə etsəniz icazə verilən başlıqlar arasında `Authorization`).
- Əksər brokerlər (Mosquitto, EMQX, HiveMQ və başqaları) WebSocket dinləyicisi təklif edir; o, tez-tez açılana qədər söndürülü olur. BimCraft MQTT 3.1.1 dilini dəstəkləyir.
:::

BimCraft bağlı olanda **xəbərdarlıq yoxdur**: hədlər yalnız model açıq olanda və axın qoşulu olanda aktivi işarələyir. Binanı gecə-gündüz izləmək server tələb edir, BimCraft isə belə server işlətmir.

## COBie cədvəli

**COBie** bir çox sahiblərin və obyekt komandalarının tələb etdiyi təhvil cədvəlidir (ABŞ-da National BIM Standard tərəfindən, Böyük Britaniyada BS 1192-4). Brauzer nişanında {{ui:COBie cədvəli}} açın:

- {{ui:COBie kimi saxla (.xlsx)}} modeldən və aktiv məlumatlarından COBie 2.4 vərəqlərini yazır — Contact, Facility, Floor, Space, Type, Component, System, Job, Document və Attribute: bina, onun səviyyələri və otaqları (sahələr modelin kəmiyyətlərindən), hər aktiv komponent kimi seriya nömrəsi, quraşdırılma günü, zəmanətin başlanğıcı, etiket və barkodla, onun tipi istehsalçı, model, xidmət müddəti və zəmanət uzunluğu ilə, aid olduğu sistemlər, texniki xidmət qeydi işlər kimi və bağlı sənədlər ilə. Hər komponent elementin IFC GlobalId-sini daşıyır. COBie-nin "created by" sütunu üçün e-poçt ünvanınızı yazın, ya da boş buraxın (o zaman n/a yazılır). Modeldə olmayan dəyərlər **n/a** yazılır; kateqoriya sütunlarında OmniClass kodu yox, IFC sinfi yazılır.
- {{ui:COBie cədvəlini oxu…}} onu BimCraft-dan və ya başqa proqramdan geri oxuyur və **əvvəlcə hər dəyişikliyi sadalayır**: hansı aktiv, hansı dəyər, nədən nəyə, və yeni sənədlər. {{ui:Tətbiq et}} hamısını bir addımda yazır ({{key:Mod+Z}} geri qaytarır). Sətirlər əvvəlcə GlobalId, sonra komponentin adı ilə uyğunlaşdırılır. Modeldə heç nə ilə uyğunlaşmayan sətirlər siyahıya salınır, əlavə edilmir.

Cədvəl etibarsız sayılır: düsturlar heç vaxt oxunmur və işə salınmır (yalnız xanada son saxlanılan dəyər), zəmanəti başlamamış bitirən dəyər və veb ünvan və ya fayl adı olmayan sənəd keçidi kənarda qalır və sayılır, çox böyük iş kitabları rədd edilir. COBie-nin işləri tipin planlaşdırılmış işləridir, ona görə yazılır, amma geri oxunmur. BimCraft-ın yazdığı cədvəldə düstur kimi qəbul oluna biləcək mətn (`=`, `+`, `-` və ya `@` ilə başlayan) mətn kimi işarələnir.

İş kitabı testlərimizdə müstəqil cədvəl oxuyucusu ilə yoxlanılıb; COBie validatorundan keçməyib. Qəbul edən komanda onu işlədərsə, bizə nə dediyini bildirin.

## Təhvil sənədləri

Hazır binayla sahibinə verilən sənədlər bir aktiva yox, layihəyə aiddir. {{ui:Aktivlər}} bölməsində {{ui:Təhvil sənədləri}} açın:

1. {{ui:Sənəd əlavə edin}}, növünü seçin (tamamlanma sertifikatı, istifadəyə qəbul sertifikatı, zəmanət, təlimat, faktiki tikinti çertyojları, digər), adını, verilmə tarixini, onu kimin verdiyini və istinad nömrəsini yazın.
2. Onun harada olduğunu deyin: veb ünvan, IFC-nin yanında saxlanılan fayl adı və ya {{ui:Fayl əlavə edin}}.
3. {{ui:Siyahıya əlavə edin}}. {{ui:Redaktə}} və {{ui:Sil}} siyahını dəyişir; hər biri geri qaytara biləcəyiniz bir addımdır.

{{ui:Təhvil paketini yaradın}} bir zip yükləyir: hər sənədi sadalayan örtük səhifəsi, cədvəl kimi eyni siyahı, COBie iş kitabı (sənədlər onun Document vərəqindədir, Facility haqqında sətirlər kimi), model və hər əlavə edilmiş fayl. Hələ siyahıda olmayan tamamlanma və ya istifadəyə qəbul sertifikatı örtükdə adı ilə göstərilir; paket yenə də yaradılır.

Paketdəki model **faktiki tikinti modelidir** (as-built): hansı elementlərin sahədə ölçüldüyünü bildirir. Onunla birlikdə `as-built` qovluğunda: bəyanat, hər elementin yoxlanma vəziyyəti ilə siyahısı, çertyoj dəsti hazırkı halında bir PDF kimi (faktiki tikinti çertyojları) və model çertyoj dəstləri verdikdə çertyoj dəyişiklik jurnalı. Bax: [Elementləri yoxlanılmış və ya sahədə təsdiqlənmiş kimi işarələyin](topic:verification).

- IFC faylında hər sənəd layihəyə bağlı IfcDocumentInformation-dır (IfcRelAssociatesDocument), adı, istinadı, tarixi, verəni və yeri ilə, belə ki, digər proqramlar onu siyahıya salır.
- Əlavə edilmiş fayl adı, ölçüsü və SHA-256 ilə qeyd olunur. Faylın özünü layihə ilə saxlamaq üçün {{ui:Layihəni layihə paketi kimi saxlayın}} istifadə edin (.ccbundle modeli və əlavə edilmiş faylları saxlayır; onu açanda onlar geri verilir, hər biri öz qeydinə görə yoxlanılır). Adi saxlamada hansını istədiyiniz soruşulur.
- Sadə .ifc qeydi saxlayır, faylı yox: onu açdıqdan sonra {{ui:Faylı yenidən əlavə edin}} istifadə edin. Eyni fayl tanınır; başqa fayl qeydi əvəz edir.

## CSV

{{ui:CSV}} hər aktivi məlumatı ilə, hər texniki xidmət qeydini və hər sənədi, hər biri bir sətirdə, cədvəl və ya başqa texniki xidmət proqramı üçün saxlayır.

:::note
**Hələ hazır deyil:** BimCraft bağlı olanda oxunuşları saxlayan və xəbərdarlıq göndərən xidmət, həmçinin COBie işlərinin geri oxunması. Bax: [Hələ hazırlanmayıb](topic:not-built-yet).
:::
