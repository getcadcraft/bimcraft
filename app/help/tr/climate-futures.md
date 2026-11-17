---
title: "İklim gelecekleri: 2050 ve 2080 sel, sıcak ve orman yangını"
summary: "Sel, enerji yılı ve orman yangını taramasını bir iklim veri paketinden gelen gelecek iklimle yeniden çalıştırın (SSP2-4.5 ve SSP5-8.5 senaryoları, 2050 ve 2080 yılları); sonuçları mevcut durumla yan yana sunun."
keywords: iklim, iklim değişikliği, gelecek, 2050, 2080, ssp, cmip6, senaryo, deniz seviyesi, sel, sıcak, hava durumu dosyası, epw, morph, energyplus, orman yangını, çalı yangını, yangın hava durumu
from: 224ecd08
---

İklim rakamları uygulamadan değil, bir **veri paketinden** gelir. {{ui:İklim gelecekleri}} eklentisini Ayarlar › Eklentiler bölümünden açın ya da {{ui:İklim geleceği}} bloğunda kendi paket dosyanızı yükleyin.

:::warning
Eklentiyle gelen paket bir **örnektir**: üç yer (Denver, Miami, Johannesburg), bir iklim modeli ve her 20 yıllık dönemde beş yıl. Araçları denemek için oradadır, **tasarım için değil**. Panel, kullanımdayken bunu kalın yazıyla belirtir. Tam bir paket (birçok model, tüm yıllar, daha fazla yer), NASA'nın NEX-GDDP-CMIP6 verilerinden `tools/climate/build-pack.mjs` ile oluşturulur.
:::

## Bir gelecek seçin

Sol paneldeki {{ui:Tehlike oynatma}} bölümünde bir **Senaryo** (SSP2-4.5, ortanın yolu, ya da SSP5-8.5, yüksek emisyon) ve bir **Yıl** seçin (2050, 2041-2060 anlamına gelir; 2080, 2071-2090 anlamına gelir; ikisi de 1995-2014'e karşı). **Yer**, modelin sahasına (IfcSite enlemi ve boylamı) en yakın paket yeridir ya da sizin seçtiğiniz. Her yerden uzakta, paketin küresel ortalama değişiklikleri kullanılır ve panel bunu söyler.

## Sel: mevcut, gelecekle yan yana

Bir senaryo seçiliyken **Sel türü**'nü ayarlayın: kıyı (deniz seviyesi yükselmesini ekler), nehir ya da şiddetli yağış (en yağışlı günün yağmurundaki değişiklik kadar daha derin) ya da ikisi. Çalıştır'a basın: sel daha önce olduğu gibi oynar ve bir tablo mevcut ve gelecek selini yan yana gösterir (su seviyesi, ıslanan odalar, en derin su). Varsayımlar altında listelenir:

- kıyı seviyesi, tüm deniz seviyesi yükselmesi kadar yükselir; fırtına kabarması ve dalgalar değiştirilmez;
- nehir akışı, en yağışlı gün yağışıyla bire bir artar ve derinlik, akışın 0.6 kuvvetini izler (geniş bir kanal için Manning denklemi);
- iki kısım basitçe toplanır.

## Isı: gelecek bir hava durumu dosyası

{{ui:Isı: gelecek hava durumu dosyası}} türünü seçin, bugünkü bir `.epw` hava durumu dosyası seçin ve {{ui:Gelecek hava durumu dosyası oluştur}}'a basın. Dosya, yayımlanmış kaydırma ve gerdirme yöntemiyle (Belcher, Hacker ve Powell 2005) ay ay **dönüştürülür**: ayın ortalaması paketin değişikliği kadar ısınır, sıcak öğleden sonralar günlük maksimumdaki değişiklik kadar, soğuk geceler günlük minimumdaki değişiklik kadar; bağıl nem paketin değişikliği kadar hareket eder ve çiğ noktası yeniden hesaplanır. Basınç ve rüzgâr olduğu gibi kalır. Tablo ortalama ve en sıcak sıcaklıkları, 0.4 % soğutma ve 99.6 % ısıtma tasarım sıcaklıklarını, 30 °C ve 35 °C'deki saatleri ve derece-günleri karşılaştırır.

{{ui:Gelecek hava durumu dosyasını kaydet}}, onu kaydeder; {{ui:Enerji denetiminde kullan}}, onu EnergyPlus denetimine (Enerji sekmesi) verir. Gelecek dosya, daha sıcak olan aynı tipik yıldır: yeni sıcak hava dalgaları eklemez.

## Enerji yılı: mevcut, gelecekle yan yana

EnergyPlus denetiminde (Enerji sekmesi, kendi motorunuzla, ayrı bir eklenti), mevcut bir hava durumu dosyası seçin, sonra {{ui:İklim geleceği}} bloğunda bir senaryo ve yıl seçin ve {{ui:Bir yılı simüle et: mevcut ve gelecek}}'e basın: yıl, mevcut dosya üzerinde ve dönüştürülmüş gelecek üzerinde çalışır ve her odanın ısıtması ile soğutması yan yana listelenir.

## Orman yangını maruziyeti (yalnızca tarama)

{{ui:Orman yangını maruziyeti (yalnızca tarama)}} türünü seçin: en yakın bitki örtüsü, ondan binaya kadar olan yamaç ve ona olan mesafe. Sonuç, çok düşükten aşırıya kadar, mevcut ve gelecek için bir bant.

:::warning
**Yalnızca tarama.** Bu, bir sitenin uygun bir orman yangını değerlendirmesine ihtiyaç duyup duymadığını anlamak için kendi göreli ölçeğimizdir; bir yönetmelik derecelendirmesi ya da bir yangın saldırı seviyesi değildir. Bitki örtüsü için bir ağırlığı, bir eğim faktörünü (bir yangın yukarı eğimde her 10 derecede hızını kabaca iki katına çıkarır, 20 dereceye kadar sayılır), bir mesafe faktörünü (10 m bölü mesafe, en fazla 1) ve paketin yangın hava durumu indeksindeki değişikliği çarpar.
:::

## Sayıların kaynağı

- **Sıcaklık, nem, güneşlenme, yağış, yangın hava durumu:** NASA NEX-GDDP-CMIP6, günlük ölçeklendirilmiş CMIP6 model çıktısı. Her modelin çıktısı CC BY 4.0 altındadır. Yangın hava durumu değişikliği, modelin hava durumundan günlük olarak hesaplanan Canadian Fire Weather Index'tir (öğle nemi yerine günlük nem kullanılarak).
- **Deniz seviyesi yükselmesi:** IPCC AR6 küresel ortalaması (yerel değil; yükselen ya da alçalan arazi bunda yoktur), bir paket yerel rakamlar taşımadıkça.
- Paket kaynağını, lisansını ve tarihini belirtir; panel bunları gösterir.
