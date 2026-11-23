---
title: Trasarea automată a canalelor, scurgerilor, conductelor de apă și a țevilor de agent frigorific
summary: În verificarea conflictelor, BimCraft găsește un drum în jurul modelului deschis pentru canale, scurgere prin gravitație, apă rece și caldă și țevi de agent frigorific split sau multi-split, și desenează traseele cu piesele lor de racord într-un singur pas de anulare. Ajutor de desenare: dimensiunile, pantele și verificările vin din tabelele programului și din valorile pe care le introduceți; nimic aici nu spune că un proiect respectă un normativ.
keywords: trasare automată, autoroute, trasare canale, trasare țevi, scurgere, sanitar, gravitație, coloană, ventilare, sifon, apă, apă caldă, buclă de retur, recirculare, agent frigorific, split, multi-split, VRF, lungime echivalentă, kit de ramificație, ramificație în Y
from: 5841d513
---

## Ce veți face

Lăsați BimCraft să aranjeze o rețea de trasee între racorduri care sunt deja în model, în jurul pereților și grinzilor, apoi verificați-o față de cifre pe care le vedeți.

## Pași

1. Deschideți modelul și verificarea conflictelor. Sub **Trasare automată a canalelor** alegeți o unitate de tratare a aerului și terminalele ei, sau sub **Trasare automată a altor sisteme** alegeți un sistem.
2. **Scurgere sanitară prin gravitație.** Introduceți poziția evacuării și, dacă le aveți, pozițiile coloanelor. Bifați **Trasare pentru fiecare etaj dintr-o dată** pentru a lua fiecare etaj care are obiecte sanitare: scurgerile fiecărui etaj se unesc cu coloana la nivelul lor, iar coloana merge de deasupra celui mai înalt robinet până la baza ei. Apăsați {{ui:Trasare}}.
3. **Sifon până la ventilare.** Panoul listează distanța de la fiecare sifon până la ventilarea lui. Introduceți cea mai mare valoare permisă de normativ în **Distanța maximă de la un sifon la ventilare**; orice obiect sanitar care o depășește este listat ca nefinalizat, cu milimetrii în plus. Bifați **Ventilare prin coloană** atunci când obiectele sanitare nu au propriul racord de ventilare: distanța se măsoară atunci până la coloană. BimCraft nu include un tabel de normative pentru aceasta: introduceți valoarea.
4. **Apă rece și caldă.** Alegeți sursa, introduceți presiunea la sursă și presiunea necesară la un obiect sanitar. Bifați **Apă caldă**, alegeți racordul de apă caldă al încălzitorului și bifați **Buclă de retur** pentru a termina o conductă de retur la racordul **hot-return** al încălzitorului sau la orice alt racord ales (acesta se termină cu 150 mm mai scurt, deschis, pentru a fi legat).
5. **Split, multi-split și VRF.** Alegeți unitatea exterioară, bifați unitățile interioare și introduceți capacitatea fiecăreia. Introduceți limitele din datele producătorului. Introduceți **lungimea echivalentă** a unui cot și a unui kit de ramificație (valorile producătorului), iar lungimile cea mai mare și totală se verifică pe lungimile echivalente.
6. Apăsați {{ui:Trasare}}. Panoul spune câte trasee a desenat și ce nu a putut face și de ce. {{ui:Anulare}} ia totul înapoi într-un singur pas.

## Ce ar trebui să vedeți

Țevi cu coturi, teuri și reducții; scurgeri care coboară cel puțin cea mai mică pantă pentru dimensiunea lor; racorduri de ventilare la obiectele sanitare; linii de agent frigorific ca pereche lichid și gaz care se întorc în același sens la fiecare colț, cu un kit de ramificație marcat acolo unde o ramificație pleacă din traseul principal.

## De reținut

- Acolo unde o scurgere se întâlnește cu alta, modelul desenează un teu. Planul numește aceste locuri joncțiuni în Y la 45 de grade, ca să puteți schimba piesa.
- Apa caldă folosește racordul propriu de apă caldă al obiectului sanitar când familia lui îl are, iar un racord la 100 mm lângă cel rece când nu îl are.
- Liniile de agent frigorific pornesc între cele două porturi ale fiecărei unități. Când cele două porturi ale unei unități stau prea aproape pentru un cot, perechea rămâne centrată între ele.
- Rețeaua de apă folosește curba de cerere și cifrele de frecare arătate în calcule; înlocuiți-le cu cele ale normativului aplicabil înainte de a vă baza pe presiuni.
- Casele mari pot lua o jumătate de minut sau mai mult, mai ales pentru rețeaua de apă caldă.
- Acesta este un ajutor de desenare. O persoană calificată verifică dimensiunile, pantele, ventilările și presiunile față de normativul aplicabil.

## Urmează

[Verificarea conflictelor](topic:clash-check) · [Verificarea țevilor și canalelor față de structură](topic:mep-against-structure) · [Conexiuni între țevi și echipamente](topic:mep-connections)
