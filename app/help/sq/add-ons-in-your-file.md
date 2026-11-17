---
title: Shtojcat që përdor skedari yt
summary: BimCraft shënon në një skedar IFC cilat shtojca kanë shkruar në të, dhe të ofron t'i shtosh ato që të mungojnë kur e hap.
keywords: shtojcë, addon, ky skedar përdor, shtojcë që mungon, trusscraft, bibliotekë, regjistro, cadcraft_addons
from: 9d9500d8
---

## Çfarë bën

Kur një shtojcë shkruan në model (një kapriatë, një linjë tubash), BimCraft regjistron shtojcën dhe versionin e saj në projektin IFC, në një grup vetish të quajtur CadCraft_AddOns. Regjistrimi shkruhet në të njëjtin hap zhbërjeje me ndryshimin e vetë shtojcës, kështu që zhbërja e ndryshimit e heq edhe regjistrimin. Programet e tjera e injorojnë grupin e vetive; ajo që vizatoi shtojca mbetet në skedar në çdo rast.

## Hapat

1. Hap një skedar IFC që një shtojcë ndihmoi ta bënte.
2. Nëse një shtojcë që përdoret nuk është e aktivizuar, një shënim mbi model thotë cilat janë, me një buton për t'i shtuar nga llogaria jote e {{ui:Bibliotekë}}.
3. Shtoji, ose mbyll shënimin. Modeli hapet në çdo rast.

## Gabimet e zakonshme

- **Nuk shfaqet asnjë shënim.** Nuk je hyrë në llogarinë tënde në këtë skedë, ose skedari nuk ka regjistrim (u bë para regjistrimeve, ose nga një program tjetër).
- **Lista e ndryshimeve thotë "undefined".** E rregulluar: etiketat tani shfaqin emrin e shtojcës.

## Më tej

- [Vendos pajisje dhe mobilje nga biblioteka](topic:place-from-library)
