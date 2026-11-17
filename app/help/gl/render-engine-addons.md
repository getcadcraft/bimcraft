---
title: Engadir un motor de render cun complemento
summary: Que pode engadir un complemento á lista Motor do diálogo Render, o permiso que precisa para executar un programa, e o que Studio comproba e pregunta.
keywords: complemento, addon, motor, motor de render, desenvolvedor, engine.run, permiso, programa, script, asinado, studio, api
from: 06295376
---

Un complemento (Configuración › Complementos) pode engadir un motor á lista Motor de {{ui:Render}}. O texto completo para os autores de complementos está na sección 16 da especificación dos complementos; en resumo:

- O complemento rexistra un motor cun id que comeza co seu propio, un nome, axustes opcionais e **ou** un programa para executar **ou** unha función en JavaScript que debuxa a imaxe.
- Un motor que executa un programa precisa o permiso **`engine.run`**, que se mostra antes da instalación e en Configuración. Só funciona en Studio; no navegador aparece como un ficheiro para gardar.
- O complemento indica o programa (un nome de ficheiro simple, nunca un shell), un script que está **dentro do complemento asinado**, e os argumentos formados por marcadores e palabras simples. Studio atopa o programa ou pídelle que o indique unha vez.
- A primeira vez que un complemento executa un programa, **Studio pregúntalle no seu propio diálogo**: que complemento, que programa, e que un script pode facer calquera cousa que o programa poida facer. Permita isto só para un complemento en que confíe. A súa resposta recórdase para ese complemento e programa.
- O paquete (a escena en USD e un ficheiro de axustes, co ficheiro glTF cando o complemento o pide) e o script do complemento van a un cartafol temporal novo, o programa execútase alí e a imaxe volve marcada co nome do motor do complemento.

:::note
Os complementos só poden engadir motores de render a partir da API de complementos 1.4. Un exemplo traballado para un renderizador de liña de comandos de código aberto está no seu propio repositorio; aínda non se executou nese renderizador.
:::
