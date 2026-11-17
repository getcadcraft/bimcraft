---
title: Dosyanızın kullandığı eklentiler
summary: BimCraft, hangi eklentilerin bir IFC dosyasına yazdığını dosyada not eder ve dosyayı açtığınızda eksik olanları eklemeyi önerir.
keywords: eklenti, add-on, addon, bu dosya kullanıyor, eksik eklenti, trusscraft, kütüphane, kayıt, cadcraft_addons
from: 9d9500d8
---

## Ne yapar

Bir eklenti modele bir şey yazdığında (bir kafes, bir boru hattı), BimCraft eklentiyi ve sürümünü IFC projesine, `CadCraft_AddOns` adlı bir özellik kümesinde kaydeder. Kayıt, eklentinin kendi değişikliğiyle aynı geri alma adımında yazılır; dolayısıyla değişikliği geri almak kaydı da geri alır. Diğer programlar bu özellik kümesini yok sayar; eklentinin çizdikleri her durumda dosyada kalır.

## Adımlar

1. Bir eklentinin yardımıyla oluşturulmuş bir IFC dosyasını açın.
2. Kullandığı eklentilerden biri açık değilse, modelin üstündeki bir not hangilerinin olduğunu gösterir ve bunları Kütüphane hesabınızdan eklemek için bir düğme sunar.
3. Bunları ekleyin ya da notu kapatın. Model her durumda açılır.

## Sık yapılan hatalar

- **Not görünmüyor.** Bu sekmede hesabınıza oturum açmamışsınızdır ya da dosyada kayıt yoktur (kayıtlardan önce ya da başka bir program tarafından oluşturulmuştur).
- **Değişiklik listesinde "undefined" yazıyor.** Düzeltildi: etiketler artık eklentinin adını gösteriyor.

## Sonraki adımlar

- [Kütüphaneden ekipman ve mobilya yerleştirin](topic:place-from-library)
