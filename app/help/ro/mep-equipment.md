---
title: Echipamente MEP cu porturi
summary: Plasați centrale de tratare a aerului, ventilatoare, pompe, cazane, încălzitoare de apă, unități terminale, difuzoare, grile și rezervoare, dimensionate prin valorile pe care le introduceți, fiecare cu racordurile de țevi și conducte de aer la care se unesc celelalte trasee.
keywords: mep, echipament, centrală de tratare a aerului, ahu, ventilator, ventilator în linie, pompă, cazan, încălzitor de apă, unitate terminală, vav, difuzor, grilă, registru, rezervor, port, porturi, conexiune, ajutaj, dimensiune gât, hvac, instalații sanitare, mecanic, ifc, ifcpump, ifcairterminal, ifcunitaryequipment
from: df1bf8c5
---

## Ce veți face

Puneți echipamentul la capetele țevilor și conductelor de aer. Fiecare piesă este o formă generică, dimensionată prin valorile pe care le introduceți, cu racordurile sale ca **porturi**: unde se unește o țeavă sau o conductă de aer, ce sistem, în ce sens merge fluxul și ce dimensiune are. Țevile și conductele desenate dintr-un port preiau dimensiunea și sistemul acestuia și rămân fixate de el: vezi [Conectarea țevilor și conductelor de aer la echipamente](topic:mep-connections).

:::note
Acesta este un instrument de desenare și coordonare, dimensionat de un inginer. Echipamentul nu este un produs al unui producător: fără capacități, greutăți sau dimensiuni de racord ale producătorilor. Importați un model al producătorului din programul MEP ca IFC atunci când este nevoie.
:::

## Plasați o piesă

1. Activați {{ui:Desenare}}, deschideți {{ui:Build}} și alegeți {{ui:Echipamente}}.
2. În bară, alegeți tipul și introduceți dimensiunile. Fiecare tip cere pe ale sale:

| Tip | Introduceți | Porturile sale |
|---|---|---|
| Centrală de tratare a aerului | lungime, lățime, înălțime; deschiderile de alimentare și de retur; dimensiunea țevii serpentinei și sistemul; dimensiunea condensului | ieșire conductă de alimentare, intrare conductă de retur, intrare și ieșire serpentină, scurgere condens |
| Ventilator în linie | diametru, lungime, sistem | intrare și ieșire conductă de aer |
| Pompă | dimensiunea țevii, sistem | intrare și ieșire |
| Cazan | lungime, lățime, înălțime, dimensiunea țevii, dimensiunea gazului, diametrul coșului | ieșire tur de încălzire și intrare retur, intrare gaz, ieșire coș |
| Încălzitor de apă | diametru, înălțime, dimensiunea țevii, gaz sau electric | intrare apă rece, ieșire apă caldă (și intrare gaz și coș când arde gaz) |
| Unitate terminală | lungime, lățime, înălțime, intrare rotundă, lățimea și înălțimea ieșirii | intrare și ieșire aer de alimentare |
| Difuzor | față, gât, sistem | gâtul său (aer intrat) |
| Grilă | lățimea și înălțimea feței, lățimea și înălțimea gâtului, sistem | gâtul său (aer ieșit spre conducta de retur sau de evacuare) |
| Rezervor | diametru, înălțime, dimensiunea țevii, sistem | intrare sus, ieșire aproape de bază |
| Calorifer | lungime, înălțime, adâncime, dimensiunea țevii, sistem | tur intrat sus la un capăt, retur ieșit jos la celălalt |
| Convector / panou încălzitor | lungime, înălțime, adâncime, dimensiunea țevii, sistem | tur intrat la un capăt, retur ieșit la celălalt |
| Familie de producător | familia (vezi [Specificații pentru țevi, robinete, clapete și familiile producătorilor](topic:pipe-specs)) | porturile care au fost date familiei sale |

3. Setați **La**, înălțimea bazei sale deasupra nivelului. Înălțimea unui difuzor sau a unei grile este fața sa: introduceți înălțimea tavanului.
4. Introduceți o **Etichetă** dacă doriți una (`AHU-1`); următoarea piesă din același tip primește următorul număr.
5. Mutați indicatorul peste plan: amprenta și porturile sale îl urmează. Apăsați {{key:R}} pentru a o roti cu 90°. Faceți clic unde trebuie să ajungă.

Dimensiunile țevilor sunt dimensiuni de țevi din oțel (ASME B36.10M). O țeavă desenată dintr-o pompă dintr-un alt material preia aceeași dimensiune nominală în propriul material.

## Modificați sau eliminați

Selectați-o în plan sau în vederea 3D. Proprietățile arată fiecare dimensiune introdusă, eticheta sa, X, Y, înălțimea și rotirea, și fiecare port: dimensiunea, sistemul, în ce sens merge fluxul și dacă ceva este conectat. Fiecare modificare este un pas al {{ui:Anulare}}; traseele fixate de porturile sale se mută odată cu ea. {{key:Delete}} o elimină; traseele care erau fixate de ea rămân, iar verificarea conexiunilor le listează.

## În fișierul IFC

Fiecare tip este salvat ca clasa sa IFC: IfcUnitaryEquipment (centrală de tratare a aerului), IfcFan, IfcPump, IfcBoiler (cazan; un încălzitor de apă este un IfcBoiler de tip apă, cu tipul de obiect "Water heater"), IfcAirTerminalBox (unitate terminală), IfcAirTerminal (difuzor, grilă) și IfcTank, cu un tip comun pentru fiecare piesă de același fel și cu dimensiuni. Fișierele IFC2X3 primesc IfcEnergyConversionDevice, IfcFlowMovingDevice, IfcFlowController, IfcFlowTerminal și IfcFlowStorageDevice cu tipurile corespunzătoare. Fiecare port este un IfcDistributionPort plasat acolo unde este conexiunea, orientat spre exterior, cu direcția fluxului și sistemul său; alte programe citesc ce traseu se conectează la ce port. Piesa se unește cu sistemul fiecărui port al său și poartă seturile de elemente de bibliotecă pe care le are fiecare element de bibliotecă plasat.
