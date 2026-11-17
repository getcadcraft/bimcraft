---
title: De la un fișier de proiect la BimCraft prin IFC
summary: Setările de export IFC care se deschid cel mai bine în BimCraft (versiune, seturi de proprietăți, cantități de bază, încăperi, modele legate, coordonate), cum deschideți rezultatul și ce păstrează exportul.
keywords: export, export IFC, rvt în ifc, convertire, 3D, geometrie, ifc2x3, ifc4, vedere de coordonare, vedere de referință, vedere de transfer de proiectare, seturi de proprietăți, cantități de bază, încăperi, spații, fișiere legate, coordonate partajate, punct de topografie, punct de bază al proiectului, setări
from: 3efd5fc9
---

## Ce veți face

Transformați un fișier de proiect într-un fișier IFC pe care îl puteți roti, inspecta, verifica și edita în BimCraft. BimCraft nu citește încă modelul 3D din interiorul unui fișier `.rvt`, așa că exportul se face în programul care a creat fișierul (Revit); BimCraft deschide rezultatul.

## Pași

1. Deschideți proiectul în programul care l-a creat. Cardul BimCraft indică versiunea în care a fost salvat.
2. Deschideți o vedere 3D care arată ce vreți să exportați.
3. Alegeți **Fișier > Export > IFC**.
4. În caseta de dialog de export, alegeți o configurație (sau **Modificare configurație…**) cu setările de mai jos.
5. Alegeți un dosar și un nume de fișier, apoi exportați.
6. În BimCraft, faceți clic pe {{ui:Alegere fișier}} și alegeți noul fișier `.ifc`. Modelele legate, exportate ca fișiere separate, se deschid în aceeași scenă cu {{ui:Adăugare model}}.

## Setările care se deschid cel mai bine aici

| Setare în exportor | Alegeți | De ce |
|---|---|---|
| Versiunea IFC | **IFC4 Reference View** pentru vizualizare, verificare și extragerea cantităților; **IFC2X3 Coordination View 2.0** când alții au nevoie de IFC2X3 | Ambele se deschid complet. **IFC4 Design Transfer View** se deschide și el, cu forme mai exacte, dar fișierul este mai mare și mai lent. |
| Tip de fișier | **IFC** (simplu) | BimCraft nu deschide `.ifczip` sau `.ifcxml`. |
| Fază / elemente vizibile | Faza pe care o vreți și **Exportare doar elemente vizibile în vedere**, când configurați vederea 3D pentru asta | Lasă afară ce ați ascuns intenționat. |
| Seturi de proprietăți | **Exportare seturi de proprietăți Revit** și **Exportare seturi comune de proprietăți IFC** | Ele devin seturile de proprietăți pe care BimCraft le arată în {{ui:Proprietăți}} și pe care le folosesc {{ui:Căutare}}, {{ui:Culoare}} și {{ui:Verificări ale modelului}}. |
| Cantități de bază | **Exportare cantități de bază** | {{ui:Totaluri de cantități}} și tabelele le folosesc (lungimi, suprafețe, volume) în loc să ghicească. |
| Încăperi și suprafețe | **Exportare încăperi în vederi 3D** (sau opțiunea Încăperi / Spații) | Încăperile ajung ca spații: faceți clic pe {{ui:Spații}} ca să le vedeți. |
| Fișiere legate | **Exportare fișiere legate ca IFC-uri separate** | Fiecare legătură devine propriul fișier; deschideți-le împreună cu {{ui:Adăugare model}} și se aliniază. |
| Bază de coordonate | **Coordonate partajate** (sau punctul de topografie) | Fișierul poartă atunci locul său pe hartă (IfcMapConversion), astfel încât Măsurare › Locație, straturile de hartă pe teren și norii de puncte plasați după coordonate de hartă funcționează. Punctul de bază al proiectului păstrează modelul aproape de origine, dar fără locul său pe hartă. |
| Împărțire pereți și stâlpi pe nivel | Activat, când luați cantități pe etaj | Partea fiecărui etaj este un element separat. |

## Ce ar trebui să vedeți

Modelul în 3D, cu etajele luate din nivelurile proiectului și informațiile proiectului în panoul {{ui:Fișier}}. **Exportat din** indică exportorul.

## Ce păstrează exportul și ce nu

- **Păstrat**: geometria, etajele, tipurile de elemente, numele, tipurile, cei mai mulți parametri (ca seturi de proprietăți), cantitățile de bază când sunt cerute, încăperile ca spații și locul pe hartă cu coordonatele partajate.
- **Nepăstrat**: vederile, foile, adnotările, familiile ca familii editabile, seturile de lucru și opțiunile de proiectare. Un fișier IFC este o fotografie a elementelor modelului, nu a proiectului. Pentru foi, exportați DWG și deschideți-l în vederea 2D.

## Greșeli frecvente

- **Parametri lipsă în BimCraft.** Activați opțiunile de seturi de proprietăți de mai sus și exportați din nou.
- **Încăperi lipsă.** Activați opțiunea pentru încăperi, apoi faceți clic pe {{ui:Spații}}.
- **Salvare ca `.ifczip`.** Alegeți IFC simplu sau dezarhivați `.ifczip`.
- **Niciun loc pe hartă.** Exportați cu coordonate partajate și verificați că punctul de topografie al proiectului este setat.
- **Așteptarea ca modificările să se întoarcă.** Modificările salvate în BimCraft merg într-un fișier IFC nou, nu în fișierul proiectului.
