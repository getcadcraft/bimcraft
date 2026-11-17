---
title: Premik, kopiranje, poravnava in razporeditev gradbenih elementov
summary: Premaknite zidove, plošče, stebre in postavljene elemente knjižnice z osnovno točko in drugo točko ali vtipkano razdaljo, jih sproti kopirajte ter jih poravnajte ali enakomerno razporedite, v tlorisu ali z izbiro v 3D.
keywords: premik, kopiranje, poravnava, razporeditev, razmik, odmik, osnovna točka, pomik, zidovi, stebri, plošče, MOVE, ALIGN, DISTRIBUTE, Shift+M
from: 75890e37
---

## Kaj boste naredili

Premaknete zid, steber, ploščo ali postavljen element knjižnice na novo mesto, naredite kopije ali poravnate več elementov, ne da bi jih znova risali.

## Imena in tipke

Ukazi se imenujejo {{ui:Premakni}}, {{ui:Poravnaj}} in {{ui:Razporedi}}, v vrstico ukazov pa lahko vtipkate `MOVE`, `ALIGN` in `DISTRIBUTE`, kot v aplikaciji za risanje CadCraft. Ena razlika: v BimCraft je {{key:M}} Meri, zato ima Premakni svojo tipko, {{key:Shift+M}}. Orodja so v meniju {{ui:Zgradba}}.

## Premakni

1. Izberite, kar premaknete, v tlorisu ali v 3D pogledu. Zidovi, plošče, stebri in postavljeni elementi knjižnice gredo lahko v en izbor.
2. Pritisnite {{key:Shift+M}} ali izberite {{ui:Premakni}}.
3. Kliknite osnovno točko, nato drugo točko. Ali pa po osnovni točki vtipkajte razdaljo in pritisnite {{key:Enter}}: gre v smeri, v katero kaže kazalec od osnovne točke. Lahko vtipkate tudi `dx,dy` (ali `@dx,dy`) ali `dolžina<kot`.
4. Pritisnite {{key:C}}, da vklopite {{ui:Kopiraj}}: vsak premik nato naredi kopije in ostane pripravljen za naslednjega. Pritisnite {{key:Esc}}, da ustavite.

Obe točki lahko kliknete tudi v 3D pogledu: z vklopljenim Premakni kazalec zadene višino tal nivoja, zato je klik tam točka tlorisa. Med klikom držite {{key:Shift}}, če želite izbrati drug element. Uporabite tloris, Zgoraj, Spredaj ali Bok, kot želite: točke vedno ležijo na tem nivoju.

Zid s seboj prinese svoja vrata in okna. Narisana plošča prinese svoje odprtine. Sobe, plošče in stropovi, ki sledijo zidovom, se posodobijo. Zidovi, ki so se pridružili premaknjenemu zidu, ostanejo, kjer so.

Vsak premik je ena sprememba: en {{key:Mod+Z}} jo razveljavi, in gre k vsakemu v seji Live TeamWork. Postavljenega elementa knjižnice na ta način ni mogoče kopirati; uporabite {{ui:Urejanje}} › {{ui:Kopiraj}} in {{ui:Prilepi}}.

## Poravnava

Izberite dva ali več elementov, izberite {{ui:Poravnaj}}, nato stran (levo, sredina, desno, zgoraj, sredinsko, spodaj) in s čim poravnati: z izbranim nizom, s prvim izbranim, z zadnjim izbranim ali s točko, ki jo kliknete. Pritisnite {{ui:Poravnaj}} v vrstici.

## Razporedi

Izberite tri ali več elementov, izberite {{ui:Razporedi}}, nato smer (vodoravno ali navpično) in razmik: enaki presledki med njimi ali enaka središča. Dva na koncih ostaneta, kjer sta.

Zidovi, ki jih poravnava ali razporeditev premakne, ohranijo svoje spoje, kot pri Premakni: zid, pridružen premaknjenemu zidu, zdrsne s koncem vzdolž svoje črte, da ostane pridružen; pregrade, ki se naslanjajo nanj, gredo z njim; dva pridružena zidova, ki sta oba premaknjena, ohranita svoj vogal tam, kjer se srečata njuni novi črti. Sobe ostanejo zaprte. Je en korak v **Spremembe**.
