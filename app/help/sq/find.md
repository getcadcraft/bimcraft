---
title: Gjej elementët sipas klasës, emrit ose vetisë
summary: Gjej çdo element që përputhet me një ose më shumë rregulla — klasën, emrin, llojin, katin, materialin ose çdo vlerë vetie — zgjidhi të gjithë dhe ruaje rregullat si grup kërkimi me emër.
keywords: gjej, kërko, filtro, pyetje, rregull, grup kërkimi, grup përzgjedhjeje, kërkim i ruajtur, veti, vlerë, klasë, material, përzgjidh të gjitha
from: 3d293bc2
---

## Çfarë do të bësh

Zgjidh me një hap çdo element të një lloji ose me një vlerë të caktuar: çdo derë, çdo mur te Kati 2, çdo element me vlerën e zjarrit EI60, çdo mur që kushton më shumë se një shumë e caktuar.

## Hapat

1. Hap një model IFC.
2. Hap {{ui:Kërko}} te paneli i majtë.
3. Te rregulli i parë, zgjidh një veti (vetitë e vetë elementit të parat, si {{ui:Klasa}} dhe {{ui:Kati}}, pastaj grupet e vetive të modelit), mënyrën e krahasimit dhe një vlerë. Kutia e vlerës sugjeron vlerat që ka modeli.
4. Për ta ngushtuar, kliko {{ui:Shto një rregull}}. Zgjidh {{ui:Çdo rregull}} për t'i kërkuar të gjitha, ose {{ui:Ndonjë rregull}} për një prej tyre.
5. Kliko {{ui:Kërko}}, ose shtyp {{key:Enter}} në një kutiu vlere. Ato që përputhen zgjidhen.
6. Për t'i ruajtur rregullat, kliko {{ui:Ruaje si grup}}, shkruaj një emër dhe kliko përsëri. Më vonë kliko emrin e një grupi për të kërkuar me të.

## Çfarë duhet të shohësh

- Ato që përputhen zgjidhen në pamjen 3D dhe në pemën e modelit, dhe {{ui:Vetitë}} thotë sa janë sipas klasës. Shtyp {{key:I}} për t'i shfaqur vetëm ato, {{key:H}} për t'i fshehur.
- Fjalët përputhen pa u kujdesur për shkronjat e mëdha. Numrat krahasohen si numra: "është më shumë se 1000" do të thotë vlera, jo teksti.
- {{ui:ka një vlerë}} dhe {{ui:nuk ka vlerë}} nuk kanë nevojë për vlerë; gjejnë ato që janë plotësuar, ose ato që mungojnë.
- Grupet e ruajtura qëndrojnë në këtë shfletues për çdo model që hap.

## Gabimet e zakonshme

- **Nuk gjendet asgjë.** Një rregull ka nevojë për një vlerë që mund të përputhet: shiko sugjerimet te kutia e vlerës.
- **Një veti mungon nga lista.** Asnjë element me formë në këtë model nuk e ka.

## Më tej

- [Ngjyro elementët sipas një vetie](topic:color-by-property)
- [Fshih, izolo dhe shiko përmes elementeve](topic:hide-and-isolate)
