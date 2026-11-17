---
title: Suplimentele utilizate de fișier
summary: BimCraft notează în fișierul IFC ce suplimente au scris în el și vă oferă să adăugați pe cele care lipsesc când îl deschideți.
keywords: supliment, add-on, addon, acest fișier folosește, supliment lipsă, trusscraft, bibliotecă, înregistrare, cadcraft_addons
from: 9d9500d8
---

## Ce face

Când un supliment scrie în model (o fermă, un traseu de conducte), BimCraft înregistrează suplimentul și versiunea sa pe proiectul IFC, într-un set de proprietăți numit CadCraft_AddOns. Înregistrarea este scrisă în același pas de anulare ca modificarea proprie a suplimentului, deci anularea modificării anulează și înregistrarea. Celelalte programe ignoră setul de proprietăți; ce a desenat suplimentul rămâne în fișier oricum.

## Pași

1. Deschideți un fișier IFC la care a contribuit un supliment.
2. Dacă un supliment utilizat nu este activat, o notă deasupra modelului arată care, cu un buton pentru a le adăuga din contul de Bibliotecă.
3. Adăugați-le sau închideți nota. Modelul se deschide oricum.

## Greșeli frecvente

- **Nu apare nicio notă.** Nu sunteți conectat la cont în această filă, sau fișierul nu conține nicio înregistrare (a fost făcut înainte de înregistrări sau de alt program).
- **Lista de modificări spune „undefined”.** Rezolvat: etichetele arată acum numele suplimentului.

## Următorul

- [Plasarea echipamentelor și a mobilierului din bibliotecă](topic:place-from-library)
