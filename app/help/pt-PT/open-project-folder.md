---
title: Abrir uma pasta de projeto completa
summary: Aponte o BimCraft para uma pasta de projeto para ver de uma só vez todos os modelos, as suas cópias de segurança e as suas ligações, e deixe a caixa Comece aqui sugerir qual o ficheiro a trabalhar.
keywords: pasta, diretório, pasta de projeto, unidade de rede, servidor, comece aqui, qual ficheiro, cópias de segurança, ligações, xrefs, pastas recentes, arrastar pasta
from: 16fbdce2
---

## O que vai fazer

Abra uma pasta de projeto completa, como a que lhe foi entregue para um trabalho, e deixe o BimCraft organizá-la: quais são os modelos, quais as cópias que são de segurança, o que liga a quê, que ficheiros estão danificados e qual o ficheiro que provavelmente quer abrir.

Só são lidos os poucos kilobytes de que cada ficha de modelo precisa, por isso uma pasta numa unidade de rede ou numa pasta de nuvem sincronizada não é problema.

## Passos

:::chromium
1. Clique em {{ui:Abrir uma pasta}} à esquerda (ou no meio do ecrã vazio).
2. Escolha a pasta do projeto na janela que se abre e clique em **Selecionar** (ou **Carregar** ou **Abrir**, conforme o sistema).
3. Clique em **Ver ficheiros** quando o navegador perguntar «Permitir que o site veja os ficheiros?». Isto só permite ao separador ler a pasta; nada é carregado.
4. Aguarde enquanto a linha de estado conta: «A listar a pasta: … ficheiros», depois «A verificar ficheiros Revit: … de …».
:::

:::firefox
1. Clique em {{ui:Abrir uma pasta}} à esquerda (ou no meio do ecrã vazio).
2. Escolha a pasta do projeto na janela que se abre e confirme. O Firefox pode pedir-lhe que confirme que a página pode ler os ficheiros da pasta; estes continuam no seu computador.
3. Aguarde enquanto a linha de estado indica «A ler a pasta: … ficheiros», depois «A verificar ficheiros Revit: … de …».
:::

:::safari
1. Clique em {{ui:Abrir uma pasta}} à esquerda (ou no meio do ecrã vazio).
2. Escolha a pasta do projeto na janela que se abre e clique em **Carregar**. Apesar do nome, nada sai do seu Mac: os ficheiros são apenas entregues ao separador.
3. Aguarde enquanto a linha de estado indica «A ler a pasta: … ficheiros», depois «A verificar ficheiros Revit: … de …».
:::

Pode também **arrastar a pasta** do {{pick:mac=Finder|windows=File Explorer|linux=o gestor de ficheiros}} para a página. Uma pasta arrastada abre-se sem qualquer pedido de permissão, em todos os navegadores.

## O que deve ver

O relatório da pasta preenche o centro:

- O nome da pasta, as contagens de modelos, desenhos CAD, modelos IFC e ficheiros, e o tamanho total.
- Notas a vermelho ou âmbar se algum ficheiro estiver incompleto ou se algum ficheiro ligado estiver em falta na pasta.
- A caixa {{ui:Comece aqui}}: o ficheiro que o BimCraft sugere abrir, com as razões.
- **Modelos**: uma linha por modelo, com as suas cópias de segurança agrupadas por baixo.
- **Ficheiros ligados e referenciados**, **Modelos IFC**, **Desenhos CAD** e **Postos de lado**, quando a pasta os tiver.

À esquerda, o painel {{ui:Pasta}} resume tudo; **Problemas** diz «Nenhum» quando todas as cópias estão em bom estado.

## Usar a caixa Comece aqui

A caixa indica um ficheiro e diz porquê, por exemplo:

- «Trabalho guardado mais recente desta pasta (3 de março de 2025).»
- «*Consultant.rvt* está ligado a outros modelos, por isso é de consulta, e não o ficheiro a editar.»
- «*Tower.rvt* parece a escolha óbvia, mas está danificado; a sua última cópia em bom estado é de …»
- «Este é um modelo central: no Revit, abra-o com "Create New Local" e trabalhe na cópia local.»

1. Leia as razões.
2. Clique em {{ui:Abrir a sua ficha}} para ler a ficha desse ficheiro, ou em {{ui:Mostrá-lo na lista}} para encontrar a sua linha em **Modelos**.
3. Confirme com quem trabalhou por último no projeto, antes de se basear nele. A caixa também o diz: é uma estimativa feita a partir de nomes, datas e ligações.

## Abrir ficheiros a partir do relatório

1. Clique no nome de um modelo para abrir a sua ficha. A ficha confere cada ligação com a pasta.
2. Clique em {{ui:Voltar a}} e no nome da pasta no topo da ficha (ou em {{ui:Voltar à pasta}} à esquerda) para voltar.
3. Clique em qualquer ficheiro IFC em **Modelos IFC** para o abrir em 3D.
4. Clique em qualquer DWG ou DXF em **Desenhos CAD** para o abrir em 2D. Os seus desenhos e imagens ligados são encontrados automaticamente na pasta.

## Reabrir uma pasta mais tarde

:::chromium
As pastas que abriu com {{ui:Abrir uma pasta}} ou arrastando são listadas em {{ui:Pastas recentes}} à esquerda. Clique em {{ui:Reabrir}} e no nome da pasta para a abrir de novo, sem a escolher. Depois de reiniciar o navegador, o Chrome ou o Edge perguntam mais uma vez; escolha «Permitir sempre» para deixarem de perguntar. A lista fica guardada apenas neste navegador e nunca é enviada para lado nenhum. Clique em × para esquecer uma pasta.
:::

:::firefox safari
Este navegador não se lembra de pastas entre visitas. Escolha de novo a pasta com {{ui:Abrir uma pasta}}, ou arraste-a para a página.
:::

## Erros comuns

- **Escolher uma pasta demasiado grande.** Com mais de 20,000 ficheiros: «Esta pasta tem mais de 20,000 ficheiros. Escolha uma pasta mais pequena, como a de um só projeto.» Escolha a pasta do projeto, e não a unidade inteira.
- **Escolher a pasta-mãe de vários projetos.** A caixa {{ui:Comece aqui}} escolhe então entre projetos. Escolha um só projeto.
- **As pastas próprias do Revit parecem ignoradas.** As pastas `*_backup`, `*_log` e `Revit_temp` são de manutenção e aparecem listadas em **Postos de lado**, não são lidas.
- **Esperar que um modelo abra em 3D a partir da sua ficha.** Um ficheiro de projeto é apenas uma ficha. Abra a sua exportação IFC.
- **Telemóveis e tablets.** Muitos navegadores móveis não permitem escolher pastas. Use um computador.

Veja [Verificar uma pasta quanto a cópias danificadas, ligações em falta e sobras](topic:check-folder-health) e [Relatório da pasta: funções, estados e ligações](topic:folder-roles).
