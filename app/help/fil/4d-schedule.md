---
title: Patakbuhin ang iskedyul ng konstruksyon sa model
summary: Buksan ang listahan ng task bilang CSV, i-link ang bawat task sa mga elemento ayon sa isang property, at lumipat sa mga petsa para makita kung ano ang naitayo na, ginagawa pa, at hindi pa nasisimula.
keywords: 4d, iskedyul, pagkakasunod ng konstruksyon, timeline, phasing, programa, gantt, task, petsa, simulation, progreso, naitayo, csv, stage, phase, work package, wbs, grupo
from: 1b985a64
---

## Ano ang gagawin mo

Panoorin ang pagtayo ng gusali: bawat task sa iyong iskedyul na naka-link sa mga elementong itinatayo nito, ipinapakita araw-araw.

## Mga hakbang

1. Magbukas ng IFC model at buksan ang {{ui:4D schedule}} sa kaliwang panel.
2. I-click ang {{ui:Download a template}} para sa listahan ng task na may isang linggo bawat palapag, at baguhin ito sa spreadsheet. O sumulat ng sarili mo.
3. I-click ang {{ui:Open a task list…}} at piliin ang CSV.
4. I-drag ang date slider, o i-click ang {{ui:Play}}.

## Ang listahan ng task

Isang CSV na may header row at mga column na **Task**, **Start**, **Finish**, **Field** at **Value**. Gumagana ang kuwit o semicolon.

| Task | Start | Finish | Field | Value |
|---|---|---|---|---|
| Level 1 | 2026-11-02 | 2026-11-13 | Storey | Level 1 |
| Roof | 2026-11-16 | 2026-11-20 | Class | IfcRoof |
| Roof | 2026-11-16 | 2026-11-20 | Pset_WallCommon.IsExternal | Yes |

- Isulat ang mga petsa bilang YYYY-MM-DD.
- Naka-link ang isang row sa task sa bawat elementong may **Field** na eksaktong may ganoong **Value**. Ang field ay isang property gaya ng Storey, Class, Name, Type, Material, Tag o GlobalId, o anumang property na nakasulat sa pangalan ng set at pangalan nito: `Pset_WallCommon.FireRating`.
- Ulitin ang isang task sa mas maraming row, na may parehong petsa, para mas maraming elemento ang maka-link dito.

## Mga stage at work package

Magdagdag ng column na **Stage**, column na **Package**, o pareho, para pagsama-samahin ang mga task sa mga stage at work package. Gumagana rin bilang pangalan ng column ang Phase at WBS.

| Task | Start | Finish | Field | Value | Stage | Package |
|---|---|---|---|---|---|---|
| Slab ng Level 1 | 2026-11-02 | 2026-11-04 | Class | IfcSlab | Istruktura | Frame |
| Mga pader ng Level 1 | 2026-11-05 | 2026-11-13 | Storey | Level 1 | Istruktura | Frame |
| Mga pinto | 2026-11-30 | 2026-12-04 | Class | IfcDoor | Fit-out | Joinery |

- Ang isang task ay kabilang sa isang stage at isang package. Kung may susunod na row ng parehong task na may ibang pangalan, nakalista ang row na iyon kasama ang numero ng linya nito at hindi ito isinasama.
- Ang parehong pangalan ng package sa dalawang stage ay dalawang package.

Kapag may grupo ang listahan, lalabas ang listahan ng {{ui:Show}} sa itaas ng petsa. Pumili ng stage o package at tatakbo ito bilang isa:

- ang slider at {{ui:Play}} ay tatakbo mula sa unang start ng grupo hanggang sa huling finish nito,
- ang mga task ng grupo lang ang nakalista at napipintahan, at ang lahat sa labas ng grupo ay see-through,
- ang linyang nasa ilalim ng listahan ay nagsasabi kung ilan sa mga task nito ang tapos, ginagawa pa, at paparating sa petsang iyon,
- ang {{ui:Select its elements}} ay pumipili ng bawat elemento ng grupo, para sa {{ui:Show}}, {{ui:Section}} o isang schedule.

Piliin ang **Lahat ng task** para makita muli ang buong iskedyul.

## Ano ang dapat mong makita

- **Naitayo**: mga elementong tapos na ang lahat ng task, sa sarili nilang kulay.
- **Ginagawa**: mga elementong may task na ginagawa sa araw na iyon, sa kulay ocher. Ginagawa ang task mula sa start date nito hanggang sa finish date nito.
- **Hindi pa nasisimula**: see-through.
- Nananatili ang mga elementong nasa walang task gaya ng dati. Ipinapakita ng listahan kung ilang elemento ang nahanap ng bawat task. Nakalista kasama ang numero ng linya ang mga row na hindi nabasa, o walang nahanap.

## Mga link, ang Gantt chart at MS Project

- Magbukas ng Microsoft Project XML file (`.xml`) o CSV na may column na `Predecessors`. Maaaring finish to start, start to start, finish to finish o start to finish ang mga link, bawat isa ay may lead o lag sa araw.
- Sa ilalim ng listahan ng task, iginuguhit ng Gantt chart ang bawat task bilang bar na may arrow para sa mga link. Pula ang mga task sa critical path. Nakalista sa panel ang link loop o predecessor na hindi umiiral.
- Isinusulat muli ng {{ui:Save as MS Project XML}} at {{ui:Save CSV with links}} ang iskedyul kasama ang mga link nito.

## Susunod

- [Maghanap ng elemento ayon sa class, pangalan o property](topic:find)
- [Kulayan ang mga elemento ayon sa property](topic:color-by-property)
