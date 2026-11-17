---
title: Mga panel drawing sa timber o light-gauge steel
summary: I-frame ang mga pader, sahig at bubong ng model bilang mga panel sa timber o light-gauge steel, makita ang bawat stud, plate, header, joist at rafter sa tamang sukat, at i-save ang cut list bilang CSV at ang shop drawing bilang PDF.
keywords: panel, framing, shop drawing, cut list, light-gauge steel, steel stud, LGS, timber, joist, rafter, header, stock, PDF
from: c09f916e
---

## Buksan ang mga panel

Piliin ang {{ui:Panel drawings}} sa menu na {{ui:Build}} (o i-type ang {{cmd:PANELS}}). Nakalista rito ang bawat iginuhit na pader, bawat sahig at bawat bubong ng model, bawat isa may tik. Kasama ng mga pader ang kanilang pinto at bintana bilang mga opening. Sinasaklaw ang sahig bilang parihaba sa paligid ng outline nito, na ang mga joist ay tumatakbo sa maikling direksyon. Sinasaklaw ang bubong bilang gable sa ibabaw ng outline ng mga pader nito, na may pitch ng bubong; sinasabi ito ng listahan, dahil ang hip o kumplikadong bubong ay hindi gable.

## Materyal, laki at spacing

Piliin ang {{ui:Material}}: **Timber** o **Light-gauge steel**. Ang mga piyesang steel ay C-stud na pinangalanan ayon sa lalim at kapal nila (halimbawa C92-1.2), na may track para sa mga plate. Pumipili ang {{ui:Member size}} ng isang laki para sa bawat panel na may tik, o iwanan sa Default para kunin ang mga default ng bawat uri ng panel. Ang {{ui:Spacing}} ang distansya sa pagitan ng mga stud, joist o rafter. Mga panimulang halaga ang mga ito para itakda mo. Hindi ito code check: kung kakayanin ng stud sa spacing na iyon ang pader na iyon, at ang header para sa span na iyon, nasa code tables ito (may IRC ang Building regulations add-on) at sa engineer mo.

## Ano ang makukuha mo

Ang unang panel na may tik ay iginuguhit sa tamang sukat sa dialog, kasama ang mga dimension. Sine-save ng {{ui:Cut list (CSV)}} ang lahat ng piyesa ng bawat panel ayon sa mark, laki at haba, at ang stock length na bibilhin para sa mga ito. Sine-save ng {{ui:Shop drawings (PDF)}} ang isang A3 na pahina para sa bawat panel, kasama ang bawat piyesang may marka at ang cut list nito. Sine-save ng {{ui:Drawing (SVG)}} ang unang panel bilang drawing. Anumang hindi kayang i-frame ng framing code (isang opening na masyadong malapit sa dulo ng pader, isang header na hindi kasya sa ilalim ng mga plate, o isang piyesang mas mahaba sa pinakamahabang stock) ay nakalista rin sa **Problema** at sa dialog.

## Ano ang hindi nito ginagawa

Ginagawa ang mga panel na drawing mula sa model sa tuwing hihingin mo ang mga ito: walang isinusulat sa model, kaya palagi silang tugma dito. Para ilagay ang framing sa model bilang mga member, gamitin ang {{ui:Framing}} para sa timber na pader, sahig at bubong.
