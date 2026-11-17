---
title: Crtajte u punoj veličini, anotirajte po razmeri
summary: Zgrada se uvek crta u punoj veličini. Tekst, kote, oznake, nazivi prostorija, krugovi mreže i simboli dimenzionišu se na papiru, u milimetrima kako se štampaju, i zadržavaju tu veličinu kada se razmera crteža promeni sa 1:100 na 1:50.
keywords: razmera anotacije, anotativno, veličina teksta, visina teksta, visina na papiru, veličina teksta kote, veličina oznake, veličina naziva prostorije, krug mreže, veličina simbola, razmera crteža, 1:50, 1:100, standard kancelarije, pisanje slova, crtanje u 1:1, puna veličina, tekst na listu
from: 94118788
---

## Šta ćete uraditi

Podesite jednom za zgradu koliko su visoka slova na crtežima na papiru. Nikad ne razmeravate model i nikad ne menjate veličinu teksta za razmeru: BimCraft izračunava veličinu iz visine na papiru i razmere crteža.

## Kako radi

- Model je u punoj veličini. Zid dugačak 10 m dugačak je 10 000 mm u svakoj razmeri.
- Anotacija ima **visinu na papiru**: visinu velikog slova na odštampanom listu, u milimetrima.
- Pri razmeri 1:100 tekst od 2.5 mm visok je 250 mm u modelu; pri 1:50 je 125 mm. Na papiru je 2.5 mm u oba slučaja.
- Simboli u osnovi (električni, vodovod) crtaju se u milimetrima na papiru i prate isto pravilo.

## Koraci

1. Otvorite pregledač projekta. Pod {{ui:Listovi}} kliknite {{ui:Veličine anotacija…}}.
2. Upišite visinu u milimetrima za vrste koje želite da podesite: {{ui:Napomene i natpisi}}, {{ui:Tekst kota}}, {{ui:Oznake i nazivi nivoa}}, {{ui:Nazivi prostorija}}, {{ui:Slova u krugovima mreže}}, {{ui:Naslovi pogleda na listovima}} i {{ui:Tekst specifikacije}}. Prazno polje zadržava BimCraft-ovu veličinu, prikazanu sivom bojom.
3. Kliknite {{ui:Sačuvaj}}. To je jedan korak koji možete opozvati.

Svaki list, skup crteža, PDF plana i izgledi i preseci koriste veličine od tada. Razmak između linije kote i njenog teksta, veličina kruga mreže i visina reda specifikacije rastu zajedno sa tekstom.

## Plan sa sopstvenom razmerom

Dajte planu razmeru u njegovom opsegu pogleda ({{ui:Razmera}}; videti [Pogledi i listovi](topic:views-and-sheets)). Tada:

- na ekranu se nazivi prostorija, oznake, tekst kota i krugovi mreže crtaju u svojoj odštampanoj veličini u odnosu na model, pa je ono što vidite ono što će list prikazati;
- simboli plana i njihove oznake dimenzionisani su za tu razmeru. Promenite razmeru sa 1:100 na 1:50 i oni su upola manji u modelu, a isti na papiru.

Plan bez sopstvene razmere zadržava svoj fiksni tekst na ekranu, a njegovi simboli su dimenzionisani za 1:50 (1/4" = 1'-0" u stopama i palcima), kao i ranije.

## Veličine vaše kancelarije

Uz uključen dodatak Podrazumevane politike, postavite visine kancelarije u Podešavanja › Opšte › Podrazumevane politike › {{ui:Veličine anotacija na papiru}}. Nova zgrada ih preuzima kada kliknete Napravi. U zgradi koju ste već počeli, dijalog ima {{ui:Koristi veličine moje kancelarije}}. Videti [Podrazumevane politike](topic:default-policies).

## Veličine iz pravilnika

Pravilnik može da da visine teksta koje traži njegovo mesto (dodatak Propisi za zgrade, konvencije crteža). Uključite pravilnik u Podešavanja › Propisi za zgrade, zatim u dijalogu kliknite {{ui:Koristi veličine iz pravilnika}}: polja se popunjavaju, a vi ih proverite i sačuvate. Veličina koju pravilnik da u tačkama je veličina fonta i pretvara se u visinu velikog slova, pa je proverite. Ništa se ne postavlja dok ne sačuvate.

## Šta treba da vidite

- Ista visina teksta u milimetrima na listu u 1:100 i na listu u 1:50, dok je sam plan dvostruko veći u 1:50.
- Veličine putuju sa zgradom: čuvaju se u njenoj IFC datoteci.

## Dobro je znati

- BimCraft-ove sopstvene veličine su one koje su njegovi listovi uvek koristili (oko 1.5 mm velika slova za tekst kota). Nisu crtački standard: postavite svoje.
- Visina mora biti od 0.5 do 50 mm.
- Tekst naslovnog bloka i legende oznaka ne spadaju ovde: zadržavaju svoje veličine.
