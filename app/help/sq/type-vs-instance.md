---
title: Ndryshoni një veti tipi për çdo element të një tipi
summary: Dalloni vetitë e tipit nga vetitë e instancës, ndryshoni një vlerë te tipi që çdo element ta ndjekë, dhe kontrolloni që ndryshimi i vetë një elementi të mbetet i vetë.
keywords: tip, instancë, vetitë e tipit, tip familjeje, i përbashkët, kopjo kur shkruhet, të gjitha elementet, redaktim masiv, prodhues, model
from: bffd8789
---

## Çfarë do të bëni

Vendosni prodhuesin te një tip dyere, që çdo derë e atij tipi ta shfaqë, pastaj i jepni një dyeje të vetme vlerësimin e vet kundër zjarrit pa prekur të tjerat. Kjo tregon ndryshimin midis vetive të tipit dhe të instancës në BimCraft.

## Tipi apo instanca?

- Një veti **instancë** i përket një elementi: etiketa e tij, shënimi i tij, dhoma e tij, vlerësimi i vet kundër zjarrit.
- Një veti **tipi** i përket tipit që shumë elemente e ndajnë: prodhuesi, modeli, gjerësia e një tipi dyerish.

Te paneli {{ui:Vetitë}}, grupet që vijnë nga tipi kanë " (tip)" pas emrit dhe rreshtin "Veti tipi: një ndryshim këtu zbatohet për çdo element të këtij tipi." Çdo grup tjetër i përket vetë elementit. **Tipi** në bllokun e parë tregon emrin e tipit.

## Hapat: ndryshoni tipin

1. Hapni një model IFC dhe klikoni një derë.
2. Shënoni **Tipin** e saj në bllokun e parë të panelit {{ui:Vetitë}}, për shembull "Single-Flush 900 x 2100".
3. Lëvizni te një grup që emri i tij mbaron me "(tip)".
4. Klikoni vlerën që doni të ndryshoni, për shembull **Prodhuesi**.
5. Shkruani vlerën e re dhe shtypni {{key:Enter}}.
6. Shikoni listën {{ui:Ndryshimet}}: hyrja mbaron me "(tip)".
7. Klikoni një derë tjetër të të njëjtit tip.
8. Kontrolloni të njëjtën vlerë: edhe ajo tregon vlerën e re.

## Hapat: ndryshoni vetëm një element

1. Klikoni një derë.
2. Hapni një grup pa "(tip)" në emër, për shembull `Pset_DoorCommon`.
3. Klikoni një vlerë, si **FireRating**, shkruani një vlerë të re dhe shtypni {{key:Enter}}.
4. Klikoni derën pranë saj, të të njëjtit tip.
5. Kontrolloni të njëjtën vlerë: ajo ende tregon vlerën e vjetër.

Edhe nëse eksportuesi e ndau atë grup vetish mes të dyja dyerve, BimCraft i dha derës së parë kopjen e vet para se ta ndryshonte. Shih [Pse ndryshimi juaj prek vetëm një element](topic:edit-ifc-properties#why-your-edit-changes-only-one-element).

## Ruajtja

1. Klikoni {{ui:Ruaj si IFC}} ose shtypni {{key:Mod+S}}.
2. Hapni kopjen e ruajtur në BimCraft, ose në çdo shikues IFC, për të kontrolluar të dy ndryshimet.

## Gabimet e zakonshme

- **Jo çdo model ka tipe.** Disa eksportues nuk shkruajnë objekte tipi, ose vendosin gjithçka te instanca. Atëherë nuk ka grupe "(tip)", dhe çdo element duhet ndryshuar veçmas.
- **E njëjta vlerë shfaqet në një grup tipi dhe në një grup instance.** Disa eksportues shkruajnë një parametër në të dy vendet. Programe të tjera mund të lexojnë njërin ose tjetrin; ndryshoni të dyja nëse doni që të përputhen.
- **Pritni të zgjidhni "të gjitha dyert e këtij tipi" dhe t'i redaktoni së bashku.** Në këtë version nuk ka përzgjedhje të shumëfishtë. Një veti tipi është mënyra për të ndryshuar shumë elemente njëherësh.
