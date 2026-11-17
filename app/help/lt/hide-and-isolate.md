---
title: Slėpti, izoliuoti ir padaryti elementus permatomus
summary: Pasirinkite kelis elementus, paslėpkite juos, rodykite tik juos arba rodykite juos kartu su visais kitais permatomais, tada atkurkite viską.
keywords: slėpti, izoliuoti, permatomumas, permatomas, šablonas, rentgenas, rodyti visus, atslėpti, kelių pasirinkimas, pasirinkti kelis, Ctrl spustelėjimas, Shift spustelėjimas, matomumas
from: 97e98b8c
---

## Ką atliksite

Sumažinkite vaizdą iki to, ką žiūrite: paslėpkite kliudančius elementus, rodykite tik tuos, kuriuos pasirinkote, arba likusius elementus palikite ekrane kaip blyškų kontūrą, kad vis tiek žinotumėte, kur esate.

## Veiksmai

1. Atidarykite IFC modelį. Žr. [Atidaryti IFC modelį ir apžvelgti jį 3D](topic:open-ifc-model).
2. Spustelėkite elementą, kad jį pasirinktumėte. Norėdami pasirinkti daugiau, laikykite {{key:Mod}} arba {{key:Shift}} ir spustelėkite kiekvieną. Spustelėjus taip jau pasirinktą elementą, jis vėl atšaukiamas.
3. Atidarykite {{ui:Rodyti}} įrankių juostoje ir pasirinkite, ką daryti, arba paspauskite jo klavišą:
   - {{ui:Slėpti}} ({{key:H}}) paslepia pasirinktus elementus.
   - {{ui:Izoliuoti}} ({{key:I}}) rodo tik pasirinktus elementus.
   - {{ui:Padaryti permatomus}} ({{key:T}}) rodo pasirinktus elementus tokius, kokie jie yra, o viską kitą – permatomai.
4. Spustelėkite {{ui:Rodyti visus}} tame pačiame meniu arba paspauskite {{key:Shift+H}}, kad vėl rodytumėte visus elementus.
5. Norėdami vietoj to nupjauti viską aplink pasirinktus elementus, tame pačiame meniu spustelėkite {{ui:Pjūvio dėžė aplink pasirinkimą}} arba paspauskite {{key:Shift+X}}. Žr. [Pjauti IFC modelį pjūvio plokštuma](topic:section-plane).

## Ką turėtumėte matyti

- Kai pasirinkta kelis elementus, {{ui:Savybės}} nurodo jų skaičių ir išvardija pagal klasę. Spustelėkite vieną, kad pamatytumėte jo savybes.
- Paslėptų elementų negalima pasirinkti: spustelėjimas pataiko į tai, kas yra už jų.
- Permatomų elementų taip pat negalima pasirinkti, todėl galite spustelėti tiesiai per sienas į tai, ką izoliavote.
- Kraštai pasislepia kartu su elementu ir tampa blyškūs kartu su juo.
- Paslėpimas, izoliavimas ir permatomumas išlieka, kol redaguojate, dedate bibliotekos elementus ar pjaunate modelį pjūvio plokštuma. Atidarius kitą modelį, viskas vėl rodoma.

## Dažnos klaidos

- **Meniu punktai pilkai užblokuoti.** Nieko nepasirinkta. Pirmiausia spustelėkite elementą; užveskite pelę ant punkto, kad sužinotumėte priežastį.
- **Izoliuota siena buvo paslėpta.** Izoliavimas rodo tiksliai tai, ką pasirinkote, paslėpta ar ne.
- **Trūksta viso aukšto.** Tai {{ui:Aukštai}} sąrašas, o ne {{ui:Rodyti visus}}: vėl pažymėkite aukštą.

## Toliau

- [Rodyti ir slėpti aukštus, erdves ir kraštus](topic:storeys-and-spaces)
- [Pjauti IFC modelį pjūvio plokštuma](topic:section-plane)
