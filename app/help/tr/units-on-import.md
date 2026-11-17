---
title: İçe aktarırken birimler: dosya birimlerini belirtir veya önce size sorulur
summary: Getirdiğiniz bir dosya birimlerini belirttiğinde BimCraft bunları kullanır ve bunu söyler. Belirtmediğinde BimCraft bir şey yerleştirmeden önce sorar ve o dosya için yanıtınızı hatırlar.
keywords: birimler, içe aktarma, aç, OBJ, STL, DWG, DXF, IFC, nokta bulutu, kütüphane öğesi, milimetre, metre, inç, fit, ölçek, yanlış boyut, çok büyük, çok küçük, 1000 kat, sor, hatırlanan
from: f044e9bc
---

## Ne yapacaksınız

Bir dosyayı getirin ve doğru boyutta geldiğinden emin olun.

## Adımlar

1. Dosyayı her zamanki gibi açın veya ekleyin: {{ui:Open}}, Kütüphane'nin {{ui:Files}}, {{ui:Point clouds}} veya Oluştur › Bir çizimden.
2. Dosya birimlerini belirtiyorsa hiçbir şey sorulmaz. Durum satırı dosyanın hangi birimleri belirttiğini söyler.
3. Belirtmiyorsa bir iletişim kutusu dosyanın **birimlerini** sorar. Dosyadaki bir birimin ne olduğunu seçin ve {{ui:Use these units}} düğmesine tıklayın. Siz yanıtlamadan hiçbir şey yerleştirilmez.
4. {{ui:Cancel}} (veya {{key:Esc}}) hiçbir şey getirmez.

## Hangi dosyalar birimlerini belirtir

- **IFC**: uzunluk birimini belirtir ve "Açıldı" hangisi olduğunu söyler. Hiçbir birim belirtmeyen bir IFC açılmadan önce sorulur; yanıtınız modele yazılır, böylece kaydettiğinizde dosya onu bir kez belirtir.
- **DWG ve DXF**: çizimin ekleme birimleri. Bunlar olmayan bir çizime sorulur (Kütüphane dosyaları, Oluştur › Bir çizimden, konturlardan arazi).
- **Arazi için nokta listeleri**: hiçbir birim belirtmez. Size sorulur.
- **Nokta bulutları**: koordinat sistemi olan LAS ve LAZ, E57, PTX ve PLY kendi birimlerini belirtir. Diğerlerine sorulur.
- **OBJ ve STL**: asla birim belirtmez. Size sorulur.
- **glTF ve GLB**: formatın kendi kuralına göre metre.
- **Resimler**: kendi boyutları yoktur. Resim görünüme sığdırılır ve boyutunu **İki noktayla ölçekle** ile ayarlarsınız. Verdiğiniz boyut o dosya için hatırlanır: yeniden yerleştirildiğinde o boyutta gelir ve durum satırı bunu söyler.
- **Nokta bulutları eklentisi**: birimi olmayan bir dosyadan bulut oluşturduğunuzda sorar ve bulutun sayılarını taşıdığı birimle etiketler.

## İyi bilmeniz gerekenler

- Yanıt o dosya için (adı, boyutu ve tarihi) bu bilgisayarda, her CadCraft uygulamasında hatırlanır. Aynı dosya bir sonraki gelişinde size sorulmaz ve durum satırı hatırlanan birimlerin kullanıldığını söyler.
- Yeniden sormak için: komut paleti ({{key:Mod+K}}) › **İçe aktarılan dosyaların birimleri için yeniden sor**.
- Bir içe aktarımda zaten bulunan birim listeleri (Kütüphane'nin Birimler'i, bulut çubuğunun Birimler'i, Oluştur › Bir çizimden içindeki Çizim birimleri) yine de birimleri sonradan değiştirir. Arazi aracının Birimler listesi artık yalnızca sorunun başladığı yerdir.
