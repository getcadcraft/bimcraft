---
title: Vendos dhe zëvendëso një artikull bibliotekë që ka variante
summary: Disa artikuj bibliotekë vijnë në disa madhësi ose opsione. Zgjidh variantin përpara se ta vendosësh, shiko cilin variant është një artikull i vendosur, zëvendëso me një tjetër me një klik, dhe mbaje kur artikulli përditësohet.
keywords: variant, variante, madhësi, opsione, konfigurim, bibliotekë, librarycraft, vendos, zëvendëso, konfigurues, familje, tip, përditëso, porta
from: c05f0af3
---

## Çfarë do të bëni

Vendosni një artikull bibliotekë në madhësinë ose opsionin që ju duhet, dhe ndryshoni mendje më vonë pa e vendosur përsëri. Një artikull me variante është një artikull i vetëm në bibliotekë (një emër, një licencë, një version) me një tabelë variantesh që vjen në: për shembull një pllakë montimi në të Voglën, të Mesmen dhe të Madhen, ose e njëjta pllakë pa vrima.

## Zgjidhni variantin dhe vendoseni

1. Hapni skedën {{ui:Bibliotekë}} dhe klikoni kartën e artikullit.
2. Nën emër, zgjedhja {{ui:Varianti}} liston çdo variant me madhësinë e tij. Parazgjedhja e artikullit zgjidhet së pari.
3. Zgjidhni një. Planimetria, madhësia dhe rreshti i trupit 3D ndjekin zgjedhjen tuaj.
4. Klikoni {{ui:Vendos në planimetri}} (ose {{ui:Vendos në model}} te pamja 3D) dhe vendoseni si çdo artikull: shih [Vendos pajisje dhe mobilje nga biblioteka](topic:place-from-library).

Elementi i vendosur emërohet sipas artikullit dhe variantit, për shembull *Pllakë montimi — E madhe*, që tabela {{ui:Pajisjet}} dhe pema t'i dallojnë. Çdo variant është tipi i vet IFC: vendosja e të njëjtit variant dy herë ndan një tip, një variant tjetër merr të vetin.

## Shiko cili variant është një artikull i vendosur

Zgjidhni elementin. Te {{ui:Vetitë}}, kutia **Artikulli i bibliotekës** ka një rresht **Variant**. IFC e mban te `CadCraft_LibraryItem`: `Variant` (id-ja e variantit), `VariantName` dhe `VariantValues` (vlerat e opsioneve, si tekst), që programet e tjera t'i lexojnë.

## Zëvendëso me një variant tjetër

1. Zgjidhni artikullin e vendosur dhe klikoni {{ui:Zëvendëso elementin…}} te kutia **Artikulli i bibliotekës**. Hapet skeda {{ui:Bibliotekë}}.
2. Lart, **Variante të tjera të** *artikullit* liston çdo variant me madhësinë e tij. Ai i vendosuri është i shënuar dhe nuk mund të zgjidhet.
3. Klikoni {{ui:Zëvendëso me …}} te varianti që dëshironi.

Elementi mban vendin, rrotullimin, katin, numrin e artikullit, sasinë dhe shënimet e tij; tipi, forma dhe të dhënat e tij ndryshojnë në variantin tjetër. {{key:Mod+Z}} e kthen të parin. Mund të zgjidhni gjithashtu çdo artikull tjetër nga lista më poshtë, si më parë: shih [Zëvendëso një artikull të vendosur dhe përditëso artikujt nga biblioteka](topic:swap-and-update-library-items).

## Kopjimi, ngjitja dhe përditësimet

- Një kopje e një varianti të vendosur është i njëjti variant: në këtë model, dhe në një model tjetër të hapur në të njëjtin skedar shfletuesi, me Kopjo dhe Ngjit.
- **Përditësimet** e mbajnë variantin: nëse versioni më i ri i artikullit ende e ka atë variant, vendosja bëhet ai variant i versionit të ri. Nëse versioni i ri nuk e ka më, vendosja merr variantin e parazgjedhur të artikullit.

## Të mirë për t'u ditur

- Vetëm disa artikuj bibliotekë kanë variante. Kartat nuk e thonë këtë; e shihni zgjedhjen {{ui:Varianti}} kur hapni një.
- Një artikull mund të listojë **porta** (pikat e lidhjes për tubat dhe kanalet) për variant. Skeda e Bibliotekës tregon sa ka një variant. Ato **nuk** shkruhen ende në IFC kur e vendosni artikullin nga skeda e Bibliotekës.
- Një variant pa trup 3D vendoset me një kuti zëvendësuese, si çdo simbol 2D.
- Madhësitë në zgjedhje janë në milimetra, siç i shkruan biblioteka.
