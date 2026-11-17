---
title: Šachtos ir angos per perdangas
summary: Šachta yra vienas kontūras, perpjaunantis kiekvieną perdangą, lubas ir stogą tarp dviejų lygių. Vertikali anga perpjauna vieną iš jų. Sienos anga perpjauna sieną.
keywords: šachta, liftų šachta, lifto šachta, laiptų anga, laiptų pakopa, vertikali anga, grindų anga, lubų anga, stogo anga, stogo lango anga, skylė grindyse, sienos anga, IfcOpeningElement, atskaita, grynasis plotas
from: 8e9e1641
---

## Ką darysite

Perpjaukite liftų šachtą per pastatą vienu eskizu, padarykite skylę vienoje perdangoje ir perskaitykite, kiek nuimta nuo plotų.

## Kur yra įrankiai

- Juostos išdėstymai: {{ui:Architektūra}} › **Anga** › {{ui:Šachta}}, {{ui:Vertikali anga}} ir {{ui:Sienos anga}}.
- Klasikinis išdėstymas: Braižymo juosta › {{ui:Patalpos}} meniu (Šachta, Vertikali anga) ir › {{ui:Sienos}} meniu (Sienos anga).

## Šachta

1. Atidarykite lygio, kuriame šachta prasideda, planą. Pasirinkite {{ui:Šachta}}.
2. Eilutėje pasirinkite {{ui:Apatinis lygis}} ir {{ui:Viršutinis lygis}}, o jei šachta prasideda arba baigiasi virš jų ar žemiau, įveskite poslinkius.
3. Spustelėkite kontūro kampus. Spustelėkite pirmą kampą dar kartą, dukart spustelėkite arba paspauskite {{key:Enter}}, kad baigtumėte.
4. Kiekviena perdanga, lubos ir stogas tarp dviejų aukščių yra perpjaunami. Būsenos eilutėje nurodoma, kiek.

Šachta yra vienas objektas. Pasirinkite jos kontūrą bet kuriame lygyje, kurį ji kerta: Savybės turi jos pavadinimą, lygius ir poslinkius, ką ji perpjauna ir kokį plotą nuima. Pakeiskite ją – ir kiekviena anga seka. Ištrinkite ją – ir kiekviena anga dingsta. Kiekvienas veiksmas – vienas anuliavimo žingsnis.

Ji ir toliau pjauna: perdanga, sukurta vėliau tarp jos lygių, perpjaunama be papildomo prašymo, o perdanga, kurią ištrinate, paleidžiama.

Perdanga, ant kurios stovi šachta, nepjaunama (jos viršus yra pagrindas). Kad ją taip pat perpjautumėte, pagrindui nurodykite neigiamą poslinkį. Kad šachta eitų per stogą, viršui nurodykite teigiamą poslinkį.

## Vertikali anga

1. Pasirinkite {{ui:Vertikali anga}}. Eilutėje pasirinkite, ką pjauti: grindis, lubas ar stogą.
2. Spustelėkite kontūro kampus ir baikite taip, kaip aukščiau.
3. Šio lygio perdanga, lubos ar stogas po kontūru yra perpjaunami. Ji priklauso tik vienam elementui: ištrynus perdangą, anga dingsta kartu.

## Sienos anga

{{ui:Sienos anga}} yra [Sienos formavimas](topic:wall-shape) įrankis: spustelėkite sieną plane arba du jos paviršiaus kampus 3D.

## Kiekiai

Pagal grindų matavimo taisyklę elemento grynasis plotas yra jo bendras plotas, atėmus tai, kas iš jo nupjauta. Šachta arba vertikali anga yra atskaita kiekvienoje perdangoje ir lubose, kurias ji perpjauna; grindų ir apdailos žiniaraščiai bei IFC kiekiai rodo tuos pačius skaičius. Ant stogo atskaita yra stogo paviršiaus plotas: plano plotas, padalytas iš nuolydžio kampo kosinuso.

Kontūras, išsikišantis per kraštą, atskaito tik tą dalį, kuri yra ant elemento.

## Jei nieko nepjaunama

Šachta, kelyje kurios nieko nėra, vis tiek sukuriama ir apie tai pranešama: vėliau ji pjaus tai, kas ten bus pastatyta. Vertikali anga turi turėti ką pjauti apačioje; jei ten nieko nėra, būsenos eilutėje tai nurodoma ir nieko nesukuriama.

## IFC

Kiekvienas pjūvis yra IfcOpeningElement su IfcRelVoidsElement ryšiu su elementu, kurį pjauna, todėl bet kuri IFC programa rodo skylę. Stogas pjaunamas paviršius po paviršiaus. Pati šachta yra IfcGroup, sudarytas iš jos angų.

## Dar nepadaryta

- Lenkti kontūrai.
- Šachtos sienos: braižykite jas su Sienos įrankiu.
- Kontūro redagavimas tempiant jo kampus (keiskite jį savybėse arba ištrinkite ir eskizuokite iš naujo).
- Nubraižytos perdangos savosios savybės rodo tik jos plotą be jos pačios angų; žiniaraščiai ir IFC kiekiai įtraukia ir šachtos angas.

Taip pat žr. [Patalpos ir patalpų skyrikliai](topic:rooms-and-separators).
