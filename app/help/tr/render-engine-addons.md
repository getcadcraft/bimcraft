---
title: Eklentiyle bir render motoru ekleyin
summary: Bir eklentinin Render iletişim kutusunun Motor listesine neler ekleyebileceği, bir programı çalıştırmak için gereken izin ve Studio'nun neleri denetleyip sorduğu.
keywords: eklenti, addon, motor, render motoru, geliştirici, engine.run, izin, program, betik, imzalı, studio, api
from: 06295376
---

Bir eklenti (Ayarlar › Eklentiler), {{ui:Render}} iletişim kutusunun Motor listesine bir motor ekleyebilir. Eklenti yazarları için tam metin eklenti belirtiminin 16. bölümündedir; kısaca:

- Eklenti, kendi adıyla başlayan bir kimlik, bir ad, isteğe bağlı ayarlar ve **ya** çalıştırılacak bir program **ya da** resmi çizen bir JavaScript işlevi ile bir motor kaydeder.
- Bir program çalıştıran motorun **`engine.run`** izni gerekir; bu izin kurulumdan önce ve Ayarlar'da gösterilir. Yalnızca Studio'da çalışır; tarayıcıda kaydedilecek bir dosya olarak görünür.
- Eklenti programı (düz bir dosya adı; asla bir kabuk değil), **imzalı eklentinin içinde** bulunan bir betiği ve yer tutuculardan ve düz sözcüklerden oluşan argümanları belirtir. Studio programı bulur ya da bir kez size gösterilmesini ister.
- Bir eklenti ilk kez bir program çalıştırdığında **Studio bunu kendi iletişim kutusunda sorar**: hangi eklenti, hangi program ve bir betiğin programın yapabildiği her şeyi yapabileceği. Yalnızca güvendiğiniz bir eklenti için izin verin. Yanıtınız o eklenti ve program için hatırlanır.
- Paket (sahne USD olarak ve bir ayarlar dosyası, eklenti isterse glTF dosyasıyla birlikte) ile eklentinin betiği yeni bir geçici klasöre konur, program orada çalışır ve resim, eklentinin motor adıyla işaretlenmiş olarak geri gelir.

:::note
Eklentiler yalnızca eklenti API 1.4 sürümünden itibaren render motorları ekleyebilir. Açık kaynaklı bir komut satırı render programı için hazırlanmış bir örnek kendi deposunda yer alır; bu örnek o render programında henüz çalıştırılmadı.
:::
