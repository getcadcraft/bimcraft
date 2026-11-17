---
title: Klasör raporu: roller, durumlar ve bağlantılar
summary: Klasör raporundaki her etiket, ne anlama geldiği ve Buradan başla önerisinin nasıl seçildiği.
keywords: klasör raporu, roller, durum, tam, eksik, okunamaz, bağlı, arka plan, başlangıç, merkezi, aile, yalnızca yedekler, buradan başla, bağlantı durumu
from: b35bdd10
---

## Kopya durumu

Her model kopyası (ana dosya ve numaralandırılmış yedekler dahil) bir başlık denetiminden geçer.

| Etiket | Anlamı |
|---|---|
| **Tam** | Dosyanın başlığı ve dizini dosyanın içine sığar |
| **Eksik** | Dosya, kendi dizininin belirttiğinden kısadır: kopyalanırken, yüklenirken ya da eşitlenirken kesilmiştir ya da hâlâ "yalnızca çevrimiçi" olan bir bulut dosyasıdır |
| **Okunamaz** | Dosya geçerli bir bileşik dosya değildir ya da okunamadı |

**Durum** sütununda bir model **Tam** gösterir; en az bir kopya bozuk, ama başka biri sağlamsa turuncu "*n* eksik"; hiçbir kopya sağlam değilse kırmızı **Eksik**.

## Yedekler

`Ad.0001.rvt`, `Ad.0002.rvt` gibi adlandırılmış dosyalar, `Ad.rvt` dosyasının numaralandırılmış yedekleridir. Bunlar modelin altında, en yeniden en eskiye doğru, **Tüm … kopyalar** içinde gruplanır. Kart, ana dosya tamamsa oradan, değilse en yeni tam yedekten okunur ("en yeni tam").

## Roller

Bir modelin adının altında italik gösterilir.

| Rol | Anlamı |
|---|---|
| *Başka model* tarafından bağlı: arka plan | Klasördeki başka bir model bunu bağlıyor; büyük olasılıkla bir danışmanın modeli gibi başkasının arka planıdır |
| Başlangıç ya da adsız dosya | Blank, Template, Default, Untitled ya da Project1 gibi bir ad: bir başlangıç noktası ya da hiç düzgün adlandırılmamış bir dosya |
| Merkezi model | Ortak çalışmalı bir merkezi model. İş burada değil, yerel bir kopyada yapılır |
| Aile (bir parça) | Bir `.rfa` ya da `.rft` dosyası: proje değil, bir bileşen |
| Yalnızca yedekler | Ana dosya gitmiş, yalnızca numaralandırılmış yedekler kalmıştır |

## Buradan başla nasıl seçilir

BimCraft, deneyimli bir kullanıcının uygulayacağı mantığı uygular:

1. Adaylar, başka bir model tarafından bağlanmayan ve başlangıç olmayan okunabilir proje dosyalarıdır (`.rvt`, `.rte`).
2. Merkezi modeller ve yalnızca yedeği olan modeller, daha iyi bir şey yoksa dikkate alınır.
3. Adaylar arasında en son kaydedilen kazanır.

Kutu nedenlerini listeler; açık seçim gibi görünen bir dosya hasarlıysa, diğer modeller arka plansa ya da seçim merkezi bir modelse uyarır. Bu bir tahmindir; projeyi en son kimin çalıştırdığını kontrol edin.

## Bağlantı durumu

| Etiket | Anlamı |
|---|---|
| **Bu klasörde** | Kaydedilmiş göreli yolunda ya da klasör içindeki kaydedilmiş tam yolun sonunda bulundu |
| **Aynı ad bulundu** | Kendi yolunda değil, ama klasörde aynı adlı bir dosya var. Doğru olduğunu kontrol edin |
| **Kütüphane dosyası** | Bir anahtar not ya da montaj kodu tablosu. Bunlar her bilgisayarda programla birlikte gelir |
| **Bu klasörde değil** | Klasörde hiçbir yerde bulunamadı |

**Modeller** içindeki **Bağlantılar bulundu** sütunu, bir modelin bağlantılarından klasörde beklenenler arasından kaçının bulunduğunu gösterir (kütüphane dosyaları sayılmaz).

## Bir kenara ayrılanlar

| Satır | Anlamı |
|---|---|
| Revit bakım klasörleri (okunmaz) | `*_backup`, `*_log` ve `Revit_temp` klasörleri; ayrıca gizli klasörler ve `__MACOSX` |
| Kilit, günlük ve yedek artıkları | `.dwl`, `.dwl2`, `.bak`, `.err`, `.log`, `.tmp`, `.sv$`, `.ac$`, `.lck` ve `.slog` dosyaları |
| Diğer dosyalar | Geri kalan her şey (ilk 40'ı adlandırılır) |
