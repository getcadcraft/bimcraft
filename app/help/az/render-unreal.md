---
title: Səhnəni oyun mühərrikinə göndərmək
summary: Studio səhnəni Unreal Engine layihəsinə yaza bilər və hər göndərmədə onu eyni vəziyyətdə saxlayır; sizin öz dəyişiklikləriniz CadCraft-ın heç vaxt yazmadığı qatda qalır. Onu açan plagin hələ buraxılmayıb.
keywords: unreal, unreal engine, oyun mühərriki, keçid, göndər, usd stage, layihə, canlı, cine kamera, kino vizuallaşdırma növbəsi
from: 154d55ef
---

CadCraft Studio-da Mühərrik siyahısında Unreal Engine layihəsinə **keçid** ola bilər. Yalnız bir istiqamətdə: CadCraft-dan Unreal-a.

## Səhnəni göndərmək

1. Mühərrik siyahısında Unreal elementini seçin. İlk dəfə Studio layihənizin qovluğunu (`.uproject` faylı olanı) seçməyinizi xahiş edir; onu yadda saxlayır.
2. {{ui:Göndər}} düyməsini basın. Studio layihənin içində `CadCraft/<file name>/` qovluğunu yazır: səhnə USD faylı kimi, parametrlər faylı, işıq profilləri və iki kiçik qat faylı.
3. Modeli dəyişdirin, saxlayın və yenidən göndərin. Yalnız səhnə və parametrlər faylı əvəz olunur.

## Öz dəyişiklikləriniz təhlükəsizdir

Unreal-un açdığı stage bir dəfə yaradılan kiçik kök qatdır, altında iki qat var: yuxarıda **sizin** (`<name>.user.usda`, əvvəldə boş, CadCraft tərəfindən heç vaxt yenidən yazılmır) və aşağıda CadCraft-ın səhnəsi. Öz qatınıza saxladığınız dəyişikliklər səhnə yenidən göndərildikdə qalır. Unreal səviyyəsində yerləşdirdiyiniz işıqlar və digər aktyorlar stage-dən kənardadır və onlara da toxunulmur.

## Studio olmadan

Brauzerdə və ya Studio-nun Unreal-u tapmadığı kompüterdə Mühərrik siyahısında **Unreal layihə qovluğu (.zip)** seçin və {{ui:Vizuallaşdırma}} düyməsini basın. Eyni qovluğu zip kimi saxlayır: onu layihənizin `CadCraft` qovluğuna açın. İlk dəfə **Stage fayllarını daxil et** seçimini aktiv saxlayın; sonrakı saxlamalar üçün söndürün, beləliklə zip yalnız səhnə və parametrlər faylını daşıyır və sizin öz qatınız heç vaxt əvəz olunmur.

:::note
Stage-i açan, günəşi, lampaları, kameraları və ekspozisiyanı tətbiq edən, hər göndərməni izləyən və kameranı çəkən Unreal plagini **hələ buraxılmayıb** və Unreal-da işlədilməyib. O buraxılana qədər Göndər faylları layihəyə yerləşdirir və Unreal-un öz USD alətləri onları aça bilər. İlk sistem Windows-dur; macOS sonra gəlir.
:::
