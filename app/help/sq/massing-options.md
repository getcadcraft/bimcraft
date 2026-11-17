---
title: Opsione masash të mbajtura krah për krah
summary: Mban disa opsione masash në të njëjtin model, bën një prej tyre opsionin aktual, kontrollon me kufijtë e ndërtimit dhe servitutet e vendit, merr masa nga ModelCraft, dhe zhvillon opsionin e zgjedhur në mure dhe dysheme.
keywords: masë, masa, opsion, opsione, grup opsionesh, skemë, koncept, projektim koncepti, faza 2, alternativa, krahaso opsionet, opsion aktual, masë ndërtese, shtyj tërhiq, modelcraft, civilcraft, sipërfaqe bruto e dyshemesë, gjurmë, vëllim, zhvillo masën, servitut, kufi ndërtimi, largësi prapa
from: 69a01459
---

## Çfarë do të bësh

Mban opsionet e masave të një koncepti në një model, në vend se në skedarë të veçantë: disa masa ndërtese krah për krah, një prej tyre **opsioni aktual**, të tjerat të mbajtura për krahasim.

Një opsion masë është një masë ndërtese: një kontur i ngritur në një lartësi, me një numër katesh. Nuk janë ende mure. Mund të mbash sa të duash, të grupuar në **grupe opsionesh** (opsionet e një grupi janë alternativa për njëri-tjetrin).

## Mbaj një opsion

1. Hap {{ui:Programi i dhomave në masë}}, shkruaj programin e dhomave dhe konturin, dhe zgjidh {{ui:Opsionet e kërkimit}}.
2. Zgjidh një nga opsionet e listuara.
3. Te {{ui:Opsionet e masave në model}}, shkruaj një emër për {{ui:Grupi i opsioneve}} nëse dëshiron një, dhe zgjidh {{ui:Mban opsionin e përzgjedhur}}.

Opsioni shfaqet në model si një masë ndërtese dhe në listë, me katet, gjurmën, sipërfaqen bruto dhe vëllimin. Asgjë nuk ndërtohet. Mban një tjetër në të njëjtën mënyrë.

Opsioni i parë i një grupi është opsioni i tij aktual. Çdo hap është një hap zhbërjeje.

## Opsioni aktual

Një opsion i çdo grupi është aktuali. Kjo do të thotë dy gjëra:

- **Katet e tij numërohen si sipërfaqet e ndërtesës.** Opsioni aktual ka një hapësirë për kat që mban sipërfaqen bruto të atij kati, kështu që çdo gjë që lexon sipërfaqet e kateve sheh opsionin në fuqi dhe asnjë tjetër.
- **Kontrollohet me vendin.** Nëse del jashtë kufirit të vendit, mbi një kufi ndërtimi ose mbi një servitut, një paralajmërim që e emëron shfaqet te {{ui:Problemet}}. Është vetëm paralajmërim: asgjë nuk refuzohet. Opsionet që nuk janë aktuale nuk kontrollohen.

Zgjidh {{ui:Bëje aktual}} te një opsion tjetër për ta ndryshuar.

{{ui:Fshih opsionet që nuk janë aktuale}} i fsheh të tjerët në pamjen 3D. Kjo është vetëm për këtë shfletues dhe nuk ruhet në skedar.

## Masa nga ModelCraft

Në ModelCraft, {{ui:Eksporto}} › {{ui:Masa te BimCraft…}} dërgon çdo grup ose komponent si një opsion. BimCraft e hap skedarin me opsionet e listuara.

Për t'i sjellë në një model që është tashmë i hapur, zgjidh {{ui:Shto opsione masash nga një skedar}} dhe zgjidh skedarin `.ifc`. Masat e tij hyjnë si opsione të një grupi, në një hap zhbërjeje, duke qëndruar aty ku u modeluan. Një skedar me masa ndërtese nga CivilCraft punon në të njëjtën mënyrë.

Një opsion i shënuar "(formë e thjeshtuar)" nuk ishte një bllok i thjeshtë vertikal në ModelCraft (zbritet mbrapa, pjerret ose nuk është i mbyllur). Masa e tij këtu është kontura e bazës së tij e ngritur në lartësinë e vet; sipërfaqet e kateve dhe vëllimi i tij janë ato të matura nga vetë trupi.

## Zhvillo opsionin e zgjedhur

Zgjidh {{ui:Zhvillo}} te një opsion. Ai bëhet nivele (të shtuara deri në numrin e tij të kateve), mure rreth konturit të tij në çdo kat dhe një pllakë dysheme mbi secilin, në një hap zhbërjeje. Opsioni del nga lista; opsionet e tjera mbeten siç ishin. Nuk ka ende çati.

{{ui:Riemërto}} ndryshon emrin e një opsioni, {{ui:Hiq}} e nxjerr nga modeli. Heqja e opsionit aktual e bën aktual opsionin e parë tjetër të grupit.

## Çfarë duhet të shohësh

- Çdo opsion i mbajtur si bllok në pamjen 3D dhe si rresht në listë.
- "(aktual)" pranë një opsioni të çdo grupi.
- Një paralajmërim te {{ui:Problemet}} kur opsioni aktual kalon kufirin e vendit, një kufi ndërtimi ose një servitut.

## Të mirë për t'u ditur

- Në skedarin IFC një opsion është një element proxy ndërtese me grupin e vetive `CadCraft_SiteMass` (grupi i opsioneve, emri i opsionit dhe nëse është aktual janë në atë grup). Katet e opsionit aktual janë hapësira të tipit `MassingFloor`. Programet e tjera e lexojnë proxy-n si element të përgjithshëm.
- Mbajtja e një opsioni nuk shton kurrë nivele; zhvillimi i tij po.
- Një asistent mund të listojë opsionet e mbajtura, të mbajë një, ta bëjë aktual, ta riemërtojë, ta zhvillojë ose ta heqë.
