---
title: Siųsti elementą į PartCraft ir grąžinti jį
summary: Pasirinkite atramą, laikiklį, turėklą ar įrangos gabalą, suprojektuokite jį kaip detalę PartCraft su aplinkiniu pastatu ir priimkite naują formą atgal į modelį.
keywords: partcraft, detalė, siųsti, ryšys, elementas, atrama, laikiklis, tvora, turėklas, įranga, projektavimas, dvipusis perdavimas, priimti, pakeista, detalių ryšiai
from: 4ce2f449
---

## Ką atliksite

Suprojektuokite vieną pastato elementą kaip detalę: nusiųskite jį į PartCraft, pakeiskite ten (iškirpkite, pridėkite, išgręžkite, pakeiskite dydį) ir perkelkite naują formą atgal į modelį.

## Veiksmai

1. Pasirinkite vieną modelio elementą: bendrojo tipo elementą, įrangą, koloną, siją, turėklą ar baldus.
2. Įrankių juostoje pasirinkite {{ui:Detalių ryšiai}}, tada {{ui:Siųsti į PartCraft}}. PartCraft atsidaro naujame skirtuke su elementu kaip detale. Elementai per 3 m pilkai nubraižomi šalia, kad galėtumėte projektuoti vietoje. Ten jų pakeisti negalima.
3. Pakeiskite detalę PartCraft. PartCraft pasirinkite {{ui:Failas}} › {{ui:Eksportuoti}} › Įrašyti atgal į BimCraft. Galite įrašyti atgal kiek norite kartų.
4. Grįžę į BimCraft matysite, kad mygtuke {{ui:Detalių ryšiai}} rodomas skaičius, o kortelėje elementas nurodomas kaip {{ui:Pakeista PartCraft}}, o dydžio ir tūrio pokytis aprašomas žodžiais.
5. Pasirinkite {{ui:Rodyti}}, kad jį pažiūrėtumėte, tada {{ui:Priimti}}, kad elementas gautų naują formą, arba {{ui:Palikti mano}}, kad jis liktų toks, koks buvo.

## Ko turėtumėte matyti

- Priėmimas yra vienas anuliavimo žingsnis. Elementas išlaiko savo vietą, GlobalId, tipą, medžiagą ir savybes. Pakeičiamas tik jo kūnas.
- Elementas gauna savybių rinkinį {{ui:CadCraft_PartLink}} su ryšiu, jo būsena ir revizija.
- {{ui:Siųsti dar kartą}} vėl atidaro tą patį elementą PartCraft tuo pačiu ryšiu.

## Verta žinoti

- Sienos, grindys, stogai, durys, langai, laiptai, rampos ir erdvės braižomos statybos įrankiais pagal kontūrą ir atkuriamos po kiekvieno pakeitimo. Kūnas iš kitos programos būtų perrašytas, todėl šie elementai atmetami nurodant priežastį.
- Forma grįžta kaip tinklelis (IFC tesselacija), o ne kaip detalės elementai. Detalės istorija lieka PartCraft.
- Jei elementas modelyje pasikeitė po to, kai jį nusiuntėte, kortelėje tai nurodoma prieš priimant: priėmus, tie pakeitimai bus pakeisti.
- Nieko neįkeliama. Abi programos yra vienos svetainės puslapiai ir perduoda elementą tarpusavyje šioje naršyklėje. Abi turi būti atidarytos toje pačioje naršyklėje.
- Elementas PartCraft turi užsidaryti į kietą kūną. Elementas, kurio formoje yra dideli atviri tarpai, ten atmetamas, nurodant atvirų briaunų skaičių.
- Priimant, aktyvus turi būti modelis, kuriame yra elementas.
