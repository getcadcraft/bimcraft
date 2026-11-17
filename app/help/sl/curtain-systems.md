---
title: Zavesni sistemi: steklene stene na mreži, s pokončniki
summary: Narišite zavesni sistem kot steno ali ga položite na ploskev, nato nastavite njegove osi mreže in pokončnike. Shrani se kot IfcCurtainWall s svojimi polji in pokončniki.
keywords: zavesni sistem, zavesna stena, zavesna mreža, pokončnik, zasteklitev, izložbena fasada, steklena stena, plošča, polje, po ploskvi, ploskev, masa, os mreže, razmik, profil, prečka, IfcCurtainWall, IfcPlate, IfcMember
from: 99d6219c
---

## Kaj boste naredili

Naredite steklen zid iz polj med pokončniki, spremenite, kje so osi mreže, in izberite, katere osi nosijo pokončnik.

## Koraki

1. Vklopite **Risanje** in odprite meni **Gradnja** (v postavitvi s trakom: zavihek Arhitektura).
2. Izberite **Zavesni sistem**. V njegovi vrstici nastavite vrh (etažo nad njim ali višino), os na vsake toliko vzdolž njega, os na vsake toliko navzgor (pustite prazno, če ni nobene), ali bo dobil pokončnike, in profil pokončnika.
3. Kliknite, kjer se začne in kjer konča, kot pri risanju stene. Tipka **Shift** ga ohrani pravokotnega.
4. Če želite spremeniti mrežo, izberite **Zavesna mreža** in kliknite sistem:
   - **Dodaj os**: navpična os gre tja, kamor kliknete. Za vodoravno os najprej v polje **Na** vpišite njeno višino.
   - **Premakni os**: kliknite os, nato kam naj gre.
   - **Odstrani os**: kliknite os.
   - **Nastavi z razmikom**: v polje **Na vsake** vpišite razmik, nato kliknite sistem.
5. Če želite spremeniti pokončnike, izberite **Pokončnik**, izberite, na kaj vpliva (navpično os, na katero kliknete, vodoravno os na višini, rob ali vse osi), izberite **Postavi pokončnike** ali **Odstrani pokončnike** in profil, nato kliknite sistem.
6. Izberite sistem, da v **Lastnostih** vidite vse: vsako os mreže z njenim mestom, kljukico za njen pokončnik in gumb za odstranitev; razmik; rob; profil; debelino polja.

## Po ploskvi

**Po ploskvi** naredi zavesni sistem na ravni ploskvi, ki jo kliknete v 3D pogledu. Njegova vrstica ima enake nastavitve mreže in pokončnikov.

- Deluje na vsaki ravni ploskvi vsakega elementa, ki ga 3D pogled prikazuje: na masi, steni, plošči, strehi, stebru ali postavljenem elementu. Ploskev je lahko navpična, nagnjena ali vodoravna.
- Sistem prevzame obris ploskve. Zabat ali druga nenavadna oblika prireže polja in pokončnike na ta obris.
- Lahko naredi **steno** namesto tega, vzdolž podnožja navpične ploskve in tako visoko kot ploskev. Stena tu vedno stoji navpično, zato nagnjena ali vodoravna ploskev ne more dobiti stene.
- Ne naredi strehe. Streha v BimCraft je izračunana iz obrisa etaže in naklona, ne iz ene ploskve.
- Ukrivljena ploskev je veliko majhnih ravnih ploskev: en klik vzame eno izmed njih.
- Ploskev z odprtinami: sistem pokrije zunanji obris ploskve.

## Kako se meri

- **Bruto površina** je obris sistema.
- **Površina stekla** so polja, kot so izdelana: vsako polje izgubi polovico širine pokončnika na strani z mrežnim pokončnikom in celo širino pri pokončniku na robu.
- Navpični pokončnik poteka od roba do roba. Vodoravni pokončnik se ustavi pri vsakem navpičnem pokončniku in pri robu. Pokončniki na robu ležijo znotraj obrisa; kjer se srečata dva, gre skozi tisti, ki je bolj navpičen. Stiki so zarezani pravokotno, ne poševno.
- **Razpredelnice** imajo seznam **Zavesni sistemi** s temi števili, ko ga ima model.

## V datoteki IFC

IfcCurtainWall na svoji etaži, sestavljen iz enega IfcPlate (zavesna plošča) na vsako polje in enega IfcMember (pokončnik) na vsak kos pokončnika, vsak s svojo obliko, materialom in osnovnimi količinami.

## Dobro je vedeti

- Vsaka velikost se naredi, kakor zahtevate. Zavrne se samo obris brez površine, ker ni ničesar narediti.
- Sistem, narisan kot stena, ohrani višino, s katero je bil narisan. Če pozneje premaknete etažo, v Lastnostih znova nastavite njegovo višino.
- Orodje Premakni še ne premakne zavesnega sistema. Izbrišite ga in ga narišite znova ali spremenite njegovo mrežo na mestu.
- Razveljavi povrne vsak korak: ves sistem, eno spremembo mreže, eno spremembo pokončnikov.
