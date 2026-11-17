---
title: Grupe paneli diellor PV, hijëzimi dhe prodhimi
summary: Vendos grupe diellore mbi çati ose në tokë, hijëzoji nga modeli, vlerëso energjinë vjetore, dimensiono vargjet dhe bëj të dhënat e diagramës një-linjëshe. Të gjitha hyrjet shfaqen, dhe modulet dhe humbjet e fillimit janë të përgjithshme.
keywords: diellor, pv, fotovoltaik, grup, modul, çati, hijëzim, prodhim, kwh, kwp, dimensionim vargu, invertues, një-linjë, një vijë, pjerrësi, azimut, distancë midis rreshtave
from: adf4aaf3
---

## Çfarë do të bëni

Hapni panelin **PV diellor**. Zgjidhni një faqe çatie (pjerrësia dhe drejtimi i saj lexohen nga modeli), ose vendosni një grup në tokë me një pjerrësi dhe drejtim; modulet vendosen brenda me distanca nga kufiri dhe numërohen, duke dhënë fuqinë DC në kWp. Vendosja e grupit e shkruan atë në model si pajisje diellore, në një hap të vetëm zhbërjeje.

## Hijëzimi, prodhimi dhe vargjet

- **Hijëzimi** nxjerr një rreze nga çdo modul drejt diellit, për ditë tipike të çdo muaji, kundrejt gjeometrisë së vetë modelit, kështu që ndërtesat fqinje, parapetet dhe rreshtat përpara numërohen. Zvogëlohet vetëm drita direkte e diellit, dhe një grup i hijëzuar pjesërisht humbet fuqi në përpjesëtim.
- **Prodhimi** jep kWh sipas muajit dhe vitit, kWh për kWp dhe raportin e performancës. Dielli vjen nga totalet tuaja mujore në një sipërfaqe horizontale, nëse i shkruani. Pa to, paneli përdor një kufi të sipërm qiell të pastër dhe e thotë këtë. **Merr klimën nga NASA POWER** me një buton në skedën Prodhimi: dërgon vetëm gjerësinë dhe gjatësinë e terrenit, një herë, dhe e mban përgjigjen në këtë kompjuter (kontrolluar nga shfletuesi më 2026-10-30). PVGIS nuk lejon që një faqe interneti ta lexojë përgjigjen e vet, kështu që skeda jep një lidhje që hap të dhënat mujore të PVGIS për terrenin, në një skedë të re; ngjitni atë që shfaq në kuti dhe dymbëdhjetë muajt plotësohen.
- **Vargjet** kontrollon modulet për varg kundrejt dritares së tensionit të invertuesit në ditën më të ftohtë dhe më të nxehtë, dhe vargjet paralele kundrejt rrymës së tij.
- **Një-linjë** bën të dhënat e diagramës (grup, kombinues, shkëputës, invertues, panel, rrjet) me madhësitë e kabllove dhe siguresave nga faktorët që shkruani. Janë të dhëna dhe një SVG; shtojca Elektrike në CadCraft mund t'i vendosë si simbole.

Modulet, invertuesi, humbjet dhe faktorët e kabllove që vijnë me BimCraft janë shembuj të përgjithshëm, të etiketuar në çdo rezultat. Shkruani të dhënat e prodhuesit dhe vlerat e kodit për të cilat projektoni, dhe lëreni projektin të rishikohet nga personi që përgjigjet për të.
