---
title: Kopiranje, prilepljanje in podvajanje elementov knjižnice
summary: Kopirajte postavljen element knjižnice in ga prilepite tja, kamor kliknete, na isto mesto ob izvirniku ali v drug model; kopirajte lastnosti katerega koli drugega elementa kot besedilo; razveljavite in uveljavite.
keywords: kopiraj, prilepi, podvoji, odložišče, prilepi na isto mesto, izreži, izbriši, izberi vse, razveljavi, uveljavi, meni Uredi, več, element knjižnice, postavitev, ponovi, matrika
from: 6ac15931
---

## Kaj boste naredili

Ustvarite več kopij elementa, ki ste ga že postavili: še eno delovno mizo, vrsto umivalnikov. Ta tema govori o **postavljenih elementih knjižnice**, to je elementih, ki jih je BimCraft zapisal v model; enega lahko prilepite v kateri koli model, tudi v drug zavihek. Stene, vrata in vsi drugi elementi se znotraj svojega modela kopirajo, režejo, lepijo in brišejo enako: glejte [Brisanje, rezanje, kopiranje in lepljenje elementov stavbe](topic:edit-elements).

Ukazi so v orodni vrstici nad modelom: {{ui:Razveljavi}}, {{ui:Uveljavi}}, {{ui:Kopiraj}}, {{ui:Prilepi}} in {{ui:Več}}, meni z {{ui:Izreži}}, {{ui:Kopiraj}}, {{ui:Prilepi}}, {{ui:Prilepi na isto mesto}}, {{ui:Podvoji}}, {{ui:Izbriši}}, {{ui:Izberi vse}} in {{ui:Prekliči izbor}}. Ukaz, ki trenutno ne more delovati, je zatemnjen; nanj postavite kazalec, da preberete razlog, ali kliknite nanj in vrstica stanja pove, zakaj.

## Koraki

1. Odprite model IFC, v katerem je element knjižnice, ali ga najprej postavite. Glejte [Postavljanje opreme in pohištva iz knjižnice](topic:place-from-library).
2. Kliknite element v 3D pogledu. V njegovih lastnostih je polje **Element knjižnice**.
3. Kliknite {{ui:Kopiraj}} ali pritisnite {{key:Mod+C}}.
4. Kliknite {{ui:Prilepi}} ali pritisnite {{key:Mod+V}}. Odpre se vrstica za postavljanje, za kazalcem pa sledi prosojen kvader, zasukan kot izvirnik.
5. Pritisnite {{key:R}}, da ga zasučete za 90°, {{key:Tab}}, da z zadnjo stranjo pripnete ob steno, ali vnesite X in Y v vrstico za postavljanje.
6. Kliknite, kamor naj gre kopija. Vsak klik postavi še eno kopijo; za konec pritisnite {{key:Esc}}.
7. Kliknite {{ui:Shrani kot IFC}}, da prenesete urejeno kopijo modela.

## Prilepi na isto mesto

{{ui:Več}}, {{ui:Prilepi na isto mesto}} ali {{key:Mod+Shift+V}} prilepi brez klikanja, na isti X in Y ter zasukano enako:

- **V isti model, na isti etaži**: dva elementa na natanko istem mestu ne bi bila uporabna, zato gre kopija tik ob izvirnik, za širino elementa plus 100 mm vzdolž njegove lastne širine. Ponovno prilepite na isto mesto iz nove kopije, da ustvarite vrsto.
- **Na drugo etažo ali v drug model**: natanko isti X, Y in zasuk. BimCraft uporabi etažo z istim imenom; če je ni, tisto na najbližji višini. Vrstica stanja pove, katera je bila uporabljena.

## Podvoji

{{ui:Več}}, {{ui:Podvoji}} ali {{key:Mod+D}} kopira izbrani element in takoj začne lepljenje: en korak namesto dveh.

## V drug model ali drug zavihek

Kopirano ostane shranjeno v tem brskalniku, zato lahko odprete drug model IFC ali BimCraft v drugem zavihku in tam prilepite. Drugi model potrebuje sam element knjižnice: BimCraft ga ima, kadar je bil element v tem zavihku postavljen, zamenjan ali posodobljen. Element, postavljen v prejšnji seji, se lahko ponovno prilepi samo v svoj model; v drugem modelu ga postavite z zavihka {{ui:Knjižnica}}.

## Kaj boste videli

- Kopija v modelu je izbrana, z istim elementom knjižnice, licenco, podatki o opremi, količino in opombo kot izvirnik, ter **naslednjo prosto številko elementa**. Številko spremenite v Lastnostih, pod `CadCraft_Placement`.
- „Postavljeno: *element* (element *n*)“ na seznamu sprememb. {{key:Mod+Z}} ga odvzame; {{key:Mod+Y}} ga vrne.

## Dobro je vedeti

- Kopije delijo tip izvirnika, zato vse uporabljajo en nabor geometrije, kot pri dvakratnem postavljanju istega elementa.
- {{ui:Razveljavi}} in {{ui:Uveljavi}} zajameta vsako spremembo: urejene vrednosti, postavitve, prilepljanja, zamenjave in posodobitve. Uveljavitev vrne postavitev na isto mesto; nova sprememba pobriše vse, kar bi bilo mogoče uveljaviti.
- V 2D pogledu risbe ni ničesar za izbiro, zato ni ničesar za kopirati. Za spremembo risbe, kadar je prikazana, uporabite {{ui:Uredi v CadCraft}}.

## Pogoste napake

- **{{ui:Prilepi}} pravi, da elementi prihajajo iz drugega modela.** Nazadnje ste kopirali element stavbe ali več elementov; ti se lepijo samo v svoj model. Izberite en postavljen element knjižnice in ga kopirajte.
- **{{ui:Prilepi}} pravi, da kopija prihaja iz drugega modela brez svojega elementa knjižnice.** Enkrat postavite element z zavihka {{ui:Knjižnica}} v tem zavihku, nato ga kopirajte in prilepite.
- **{{key:Mod+C}} namesto tega kopira besedilo strani.** Na strani je bilo izbrano besedilo. Najprej kliknite model.

## Glejte tudi

- [Tipke in miška](topic:keyboard#edit)
- [Nastavitve BimCraft](topic:settings)
