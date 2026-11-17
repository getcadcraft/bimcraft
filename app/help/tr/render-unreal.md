---
title: Sahneyi bir oyun motoruna gönderin
summary: Studio sahneyi bir Unreal Engine projesine yazabilir ve her gönderimde güncel tutabilir; kendi düzenlemeleriniz CadCraft'ın hiç yazmadığı bir katmanda durur. Onu açan eklenti henüz yayımlanmadı.
keywords: unreal, unreal engine, oyun motoru, bağlantı, gönder, usd sahnesi, proje, canlı, cine kamera, film render kuyruğu
from: 154d55ef
---

CadCraft Studio'da Motor listesi bir Unreal Engine projesine **bağlantı** tutabilir. Yalnızca bir yönde: CadCraft'tan Unreal'a.

## Sahneyi gönderin

1. Motor listesinde Unreal girişini seçin. İlk kez Studio sizden proje klasörünüzü (`.uproject` dosyasının bulunduğu klasörü) seçmenizi ister; bunu hatırlar.
2. {{ui:Gönder}} düğmesine tıklayın. Studio projenin içine `CadCraft/<dosya adı>/` yazar: sahne bir USD dosyası olarak, ayarlar dosyası, ışık profilleri ve iki küçük katman dosyası.
3. Modeli değiştirin, kaydedin ve yeniden gönderin. Yalnızca sahne ve ayarlar dosyası değiştirilir.

## Kendi düzenlemeleriniz güvendedir

Unreal'ın açtığı sahne, bir kez oluşturulan küçük bir kök katmandır; altında iki katman vardır: en üstte **sizinki** (`<name>.user.usda`, başta boş, CadCraft tarafından asla yeniden yazılmaz) ve altta CadCraft'ın sahnesi. Kendi katmanınıza kaydettiğiniz düzenlemeler, sahne yeniden gönderildiğinde de kalır. Unreal seviyesine yerleştirdiğiniz ışıklar ve diğer aktörler sahnenin dışındadır ve onlara da dokunulmaz.

## Studio olmadan

Tarayıcıda ya da Studio'nun Unreal'ı bulamadığı bir bilgisayarda, Motor listesinde **Unreal proje klasörü (.zip)** seçeneğini seçin ve {{ui:Render}} düğmesine tıklayın. Aynı klasörü bir zip olarak kaydeder: projenizin `CadCraft` klasörüne açın. İlk kayıtta **Sahne dosyalarını dahil et** seçeneğini açık bırakın; sonraki kayıtlarda kapatın, böylece zip yalnızca sahneyi ve ayarlar dosyasını içerir ve kendi katmanınız hiçbir zaman değiştirilmez.

:::note
Sahneyi açan, güneşi, lambaları, kameraları ve pozlamayı uygulayan, her göndermeyi izleyen ve bir kamerayı render eden Unreal eklentisi **henüz yayımlanmadı** ve Unreal'da henüz çalıştırılmadı. O zamana kadar Gönder dosyaları projeye koyar ve Unreal'ın kendi USD araçları bunları açabilir. İlk destek Windows'tur; macOS sonra gelir.
:::
