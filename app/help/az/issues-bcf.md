---
title: Problemlər və BCF faylları
summary: Modelin görünüşünü problem kimi saxlayın — kamera, seçilmiş elementlər, gizlədilmişlər, kəsik — onu digər koordinasiya alətləri ilə BCF faylı kimi paylaşın və onların BCF fayllarını açaraq problemlərinə baxın.
keywords: bcf, bcfzip, problem, mövzu, baxış nöqtəsi, toqquşma hesabatı, koordinasiya, şərh, surət, BCF aç, BCF saxla, ixrac, idxal
from: 2a6cf201
---

## Nə edəcəksiniz

Modeldə problemi göstərin və onu göstərən görünüşü saxlayın, sonra onu BCF faylı ilə ötürün — digər koordinasiya alətlərinin oxuduğu və yazdığı format.

## Addımlar

1. IFC modelini açın və görünüşü qurun: ona tərəf fırladın, iştirak edən elementləri seçin, yolda olanları gizlədin, kəsik müstəvisi və ya qutu ilə kəsin.
2. Sağdakı {{ui:Problemlər}} nişanına, sonra {{ui:Bu görünüşdən yeni problem}} klik edin.
3. Başlıq yazın, istəsəniz şərh də; status seçin; adınızı və ya e-poçtunuzu yazın (daxil olmusunuzsa, hesabınızın adı doldurulur; bax: [BimCraft parametrləri](topic:settings#your-name-on-issues)). {{ui:Problem yarat}} klik edin.
4. Problemdə {{ui:Göstər}} klik edin ki, onun görünüşü geri qayıtsın.
5. Bütün problemləri bir `.bcf` faylı kimi yükləmək üçün {{ui:BCF saxla}} klik edin.
6. Başqasının yaratdığı problemləri görmək üçün {{ui:BCF aç…}} klik edin və onların `.bcf` və ya `.bcfzip` faylını seçin.

## Nə görməlisiniz

- Siyahıda hər problem öz görünüşünün şəkli, başlığı, statusu, müəllifi və tarixi ilə.
- {{ui:Göstər}} kameranı, seçilmiş elementləri, nəyin gizlədildiyini (və ya yalnız göstərilən şeyləri) və kəsiyi geri qaytarır. Elementlər hər açıq modeldə GlobalId ilə tapılır; status sətri bəzilərinin olmadığını deyir.
- Digər alətdən gələn kəsik müstəvisi və ya qutu modelin oxlarına düzdürsə göstərilir; əyilmiş və ya əlavə müstəvilər kəsik həcmi kimi qayıdır (6 müstəviyə qədər). Problem bir neçə qutulu həcmin yalnız birinci qutusunu saxlayır.

## Bilmək faydalıdır

- Fayl BCF 2.1-dir və görünüşü modelin öz koordinatlarında saxlayır, buna görə digər alətlər kameranı eyni yerə qoyur.
- Problemlər siz onları saxlayana qədər bu nişanda qalır. Başqa modeli açmaq siyahını saxlayır; problemləri göstərməzdən əvvəl onların aid olduğu modeli açın.
- Digər alətdən gələn paralel (ortoqonal) kamera bu baxıcının perspektiv kamerası ilə göstərilir; eyni model hissəsi görünüşü doldurmaq üçün geri çəkilir.

## Tez-tez edilən səhvlər

- **Göstər kameranı qəribə yerə apardı.** Problem başqa modeldə və ya başqa koordinatlarla yaradılıb. Əvvəlcə düzgün modeli açın.
- **Fayl açılmır.** O, BCF zip deyil və ya zədələnib; status sətri səbəbini göstərir.

## Növbəti

- [Elementləri gizlədin, təcrid edin və şəffaf göstərin](topic:hide-and-isolate)
- [IFC modelini kəsik müstəvisi ilə kəsin](topic:section-plane)
