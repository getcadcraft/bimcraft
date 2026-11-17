---
title: Brisanje, sečenje, kopiranje i nalepljivanje elemenata zgrade
summary: Izaberi zidove, vrata, nameštaj ili bilo šta drugo u IFC modelu; obriši ih, iseci ih, ili ih kopiraj i nalepi tamo gde klikneš, na mestu ili na drugom spratu.
keywords: izbriši, ukloni, obriši, iseci, kopiraj, nalepi, dupliraj, premesti, izaberi, izaberi sve, izaberi sve elemente, element zgrade, zid, vrata, prozor, stepenište, otvor, opozovi
from: d9eec37f
---

## Šta ćete uraditi

Menjate sadržaj IFC modela: uklanjate elemente koje ne želite, kopirate zid ili skup nameštaja na drugo mesto, ili premeštate elemente sečenjem i nalepljivanjem. Svaka promena je jedan korak koji možete opozvati, a čuvanje upisuje novu datoteku, pa vaš original ostaje nepromenjen.

## Koraci

1. Otvorite IFC model. Pogledajte [Otvori IFC model i pogledaj ga u 3D](topic:open-ifc-model).
2. Izaberite šta želite da promenite: kliknite na element, držite {{key:Mod}} ili {{key:Shift}} i kliknite da izaberete još, ili pritisnite {{key:Mod+A}} ({{ui:Više}}, {{ui:Izaberi sve}}) da izaberete sve prikazane elemente.
3. Zatim:
   - **Brisanje:** pritisnite {{key:Delete}}, ili {{ui:Više}}, {{ui:Izbriši}}.
   - **Kopiranje:** pritisnite {{key:Mod+C}} ili kliknite {{ui:Kopiraj}}.
   - **Sečenje:** pritisnite {{key:Mod+X}}, ili {{ui:Više}}, {{ui:Iseci}}. Elementi nestaju, a možete ih nalepiti.
4. Za lepljenje pritisnite {{key:Mod+V}} ili kliknite {{ui:Nalepi}}. Providna kutija veličine onoga što ste kopirali prati pokazivač na spratu izabranom u traci za postavljanje. Pritisnite {{key:R}} da je okrenete za 90°, zatim kliknite gde treba da ide. Svaki klik postavlja još jednu kopiju; pritisnite {{key:Esc}} za kraj.
5. Ili pritisnite {{key:Mod+Shift+V}} ({{ui:Više}}, {{ui:Nalepi na mestu}}): posle sečenja elementi se vraćaju tačno tamo gde su bili; posle kopiranja kopija se postavlja odmah pored originala.
6. Kliknite {{ui:Sačuvaj kao IFC}} da preuzmete izmenjeni model.

## Šta ide uz element

- **Delovi:** stepenište uzima svoje krakove, zavesni zid svoje panele, a sve što je napravljeno od delova uzima sve njih.
- **Otvori:** zid uzima otvore isečene u njemu. Brisanjem vrata ili prozora briše se i otvor koji su ispunjavali, pa se zid zatvara, kao u programu za projektovanje. Brisanjem zida nacrtanog u BimCraft-u brišu se i njegova vrata i prozori, a preostali zidovi se spajaju. Brisanjem zida iz datoteke napravljene drugde, vrata i prozori ostaju tamo gde su bili.
- **Podaci:** kopija ima isti tip, materijale, skupove svojstava i količine kao original, i nov GlobalId. Kasnija promena vrednosti na kopiji ne menja original.
- **Stavke iz biblioteke** zadržavaju svoje podatke iz biblioteke; kopija dobija sledeći slobodni broj stavke, a isečena stavka vraćena nalepljivanjem zadržava svoj.

## Šta treba da vidite

- „Izbrisano: …” ili „Nalepljeno: …” u listi {{ui:Izmene}}. {{key:Mod+Z}} vraća poslednju promenu; {{key:Mod+Y}} je ponovo vraća.
- Posle brisanja, statusna linija kaže koliko je delova i otvora takođe obrisano.
- Nalepljeni elementi su izabrani, pa možete ponovo nalepiti na mestu da napravite red, ili ih obrisati.

## Dobro je znati

- Kopije koriste istu geometriju kao original (IFC dozvoljava da elementi dele geometriju), pa datoteka malo raste.
- Elementi zgrade se nalepljuju u model iz kojeg su kopirani, u istom tabu. Da koristite postavljene stavke iz biblioteke u drugom modelu, kopirajte jednu po jednu stavku: pogledajte [Kopiraj, nalepi i dupliraj stavke iz biblioteke](topic:copy-paste).
- Spratovi, prostori, zgrade i teren ne mogu se brisati ni kopirati. Umesto toga izaberite elemente u njima. Prostorija nacrtana u BimCraft-u nastaje od zidova oko nje: obrišite zid da spojite dve prostorije.
- Zidovi, vrata i prozori nacrtani sopstvenim alatima BimCraft-a za zidove, vrata i prozore još ne mogu da se kopiraju, seku ili dupliraju; statusna linija to kaže. Nacrtajte ih ponovo. Brisanje radi.
- Kopiranje takođe stavlja imena i svojstva onoga što ste kopirali na clipboard kao tekst, da ih nalepite u tabelu ili e-poruku.

## Česte greške

- **{{ui:Izbriši}} je zasivljeno.** Ništa nije izabrano, ili su izabrani samo spratovi ili prostori. Pokažite na dugme da biste pročitali zašto.
- **Nalepljivanje kaže da elementi potiču iz drugog modela.** Otvorili ste drugi model posle kopiranja. Ponovo otvorite prvi model i kopirajte ih tamo.
- **Nalepljena kopija je na drugom spratu.** {{ui:Sprat}} u traci za postavljanje određuje gde ide; izaberite sprat pre klikanja.

## Povezano

- [Sakrij, izoluj i vidi kroz elemente](topic:hide-and-isolate)
- [Tasteri i miš](topic:keyboard#edit)
