---
title: Probleemid ja BCF-failid
summary: Salvesta mudeli vaade probleemina — kaamera, valitud elemendid, peidetud elemendid, lõige — jaga seda BCF-failina teiste koordineerimistööriistadega ning ava nende BCF-failid, et näha nende probleeme.
keywords: bcf, bcfzip, probleem, probleemid, teema, vaatepunkt, kokkupõrke aruanne, koordineerimine, kommentaar, hetktõmmis, ava bcf, salvesta bcf, eksport, import
from: 2a6cf201
---

## Mida teed

Osuta mudelis probleemile ja hoia vaade, mis seda näitab. Seejärel anna see edasi BCF-failis, formaadis, mida teised koordineerimistööriistad loevad ja kirjutavad.

## Sammud

1. Ava IFC-mudel ja seadista vaade: pöörake see enda ette, vali osalevad elemendid, peida see, mis takistab, ning lõika see lõiketasandi või -kastiga.
2. Klõpsa paremal asuvat sakki {{ui:Issues}}, seejärel {{ui:New issue from this view}}.
3. Sisesta pealkiri ja vajadusel kommentaar; vali staatus; anna oma nimi või e-post (sisselogituna täidetakse sinu konto nimi; vaata [BimCraft-i sätted](topic:settings#your-name-on-issues)). Klõpsa {{ui:Create issue}}.
4. Klõpsa probleemil {{ui:Show}}, et tuua selle vaade tagasi.
5. Klõpsa {{ui:Save BCF}}, et laadida kõik probleemid alla ühe `.bcf`-failina.
6. Teise inimese tehtud probleemide nägemiseks klõpsa {{ui:Open BCF…}} ja vali nende `.bcf`- või `.bcfzip`-fail.

## Mida peaksid nägema

- Iga probleem nimekirjas koos oma vaate pildiga, pealkirja, staatuse, autori ja kuupäevaga.
- {{ui:Show}} tuleb tagasi kaamera, valitud elemendid, see, mis oli peidetud (või ainsad näidatud asjad), ja lõige. Elemente leitakse GlobalId järgi igas avatud mudelis; olekurida ütleb, kui mõni neist puudub.
- Teise tööriista lõiketasand või -kast kuvatakse, kui see on mudeli telgedega joondatud. Kaldus või lisatasandid tulevad tagasi lõikemahuna (kuni 6 tasandit). Probleem säilitab mitme kastiga mahu esimese kasti.

## Hea teada

- Fail on BCF 2.1 ja hoiab vaate mudeli enda koordinaatides, nii et teised tööriistad paigutavad kaamera samasse kohta.
- Probleemid jäävad sellele sakile, kuni salvestad need. Teise mudeli avamine säilitab nimekirja; enne probleemide näitamist ava mudel, millest need räägivad.
- Teise tööriista paralleelne (ortogonaalne) kaamera kuvatakse selle vaataja perspektiivkaameraga, tagasi nihutatuna, nii et sama osa mudelist täidab vaate.

## Levinud vead

- **Näita viis kaamera kuhugi kummalisse kohta.** Probleem tehti teises mudelis või teiste koordinaatidega. Ava enne õige mudel.
- **Fail ei avane.** See ei ole BCF-zip või on kahjustatud; olekurida ütleb, miks.

## Järgmiseks

- [Peida, isoleeri ja näe läbi elemente](topic:hide-and-isolate)
- [Lõika IFC-mudel lõiketasandiga](topic:section-plane)
