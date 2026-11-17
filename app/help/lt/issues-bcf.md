---
title: Problemos ir BCF failai
summary: Įrašykite modelio vaizdą kaip problemą — kamerą, pažymėtus elementus, paslėptus elementus, pjūvį — ir bendrinkite jį kaip BCF failą su kitais koordinavimo įrankiais. Atidarykite jų BCF failus, kad pamatytumėte jų problemas.
keywords: bcf, bcfzip, problema, problemos, tema, vaizdo taškas, susidūrimų ataskaita, koordinavimas, komentaras, momentinė nuotrauka, atidaryti bcf, įrašyti bcf, eksportas, importas
from: 2a6cf201
---

## Ką darysite

Pažymėkite modelio problemą ir išsaugokite vaizdą, kuris ją rodo, tada perduokite jį BCF faile – formate, kurį skaito ir rašo kiti koordinavimo įrankiai.

## Žingsniai

1. Atidarykite IFC modelį ir nustatykite vaizdą: pasukite į jį, pažymėkite susijusius elementus, paslėpkite tai, kas trukdo, nupjaukite pjūvio plokštuma ar dėžute.
2. Dešinėje spustelėkite skirtuką {{ui:Problemos}}, tada {{ui:Nauja problema iš šio vaizdo}}.
3. Įveskite pavadinimą, jei norite – komentarą; pasirinkite būseną; nurodykite savo vardą arba el. paštą (prisijungus užpildomas jūsų paskyros vardas; žr. [BimCraft nustatymai](topic:settings#your-name-on-issues)). Spustelėkite {{ui:Sukurti problemą}}.
4. Spustelėkite {{ui:Rodyti}} problemos eilutėje, kad vaizdas grįžtų.
5. Spustelėkite {{ui:Įrašyti BCF}}, kad atsisiųstumėte visas problemas viename `.bcf` faile.
6. Norėdami pamatyti kito žmogaus sukurtas problemas, spustelėkite {{ui:Atidaryti BCF…}} ir pasirinkite jo `.bcf` arba `.bcfzip` failą.

## Ko tikėtis

- Kiekviena problema sąraše su savo vaizdo paveikslėliu, pavadinimu, būsena, autoriumi ir data.
- {{ui:Rodyti}} atkuria kamerą, pažymėtus elementus, tai, kas paslėpta (arba tik tai, kas rodoma), ir pjūvį. Elementai randami pagal GlobalId visuose atvirus modeliuose; būsenos eilutė praneša, jei kai kurių nėra.
- Kitų įrankių pjūvio plokštuma ar dėžutė rodoma, kai ji sutampa su modelio ašimis; pasvirusios ar papildomos plokštumos atkuriamos kaip pjūvio tūris (iki 6 plokštumų). Problema išsaugo pirmą dėžutę iš kelių dėžučių tūrio.

## Verta žinoti

- Failas yra BCF 2.1 ir saugo vaizdą modelio pačių koordinatėse, todėl kiti įrankiai kamerą padeda toje pačioje vietoje.
- Problemos lieka šiame skirtuke, kol jas įrašote. Atidarius kitą modelį sąrašas išlieka; prieš rodydami problemas atidarykite modelį, kurio jos susijusios.
- Lygiagreti (ortogonali) kamera iš kito įrankio rodoma su šio vaizdo perspektyvos kamera, atitraukta taip, kad ta pati modelio dalis užpildytų vaizdą.

## Dažnos klaidos

- **Rodant kamera nuklydo keistai.** Problema sukurta kitame modelyje ar su kitomis koordinatėmis. Pirmiausia atidarykite teisingą modelį.
- **Failas neatsidaro.** Jis nėra BCF zip arba yra sugadintas; būsenos eilutė paaiškina kodėl.

## Toliau

- [Slėpti, izoliuoti ir matyti per elementus](topic:hide-and-isolate)
- [Pjaustyti IFC modelį pjūvio plokštuma](topic:section-plane)
