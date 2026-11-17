---
title: Abrir uma pasta de projeto inteira
summary: Aponte o BimCraft para uma pasta de projeto para ver todos os modelos, seus backups e vínculos de uma só vez, e deixe a caixa Comece aqui sugerir qual arquivo abrir.
keywords: pasta, diretório, pasta de projeto, unidade de rede, servidor, comece aqui, qual arquivo, backups, vínculos, xrefs, pastas recentes, arrastar pasta
from: 16fbdce2
---

## O que você vai fazer

Abrir uma pasta de projeto inteira, como a que foi entregue para um trabalho, e deixar o BimCraft organizá-la: quais modelos existem, quais cópias são backups, o que está vinculado a quê, quais arquivos estão danificados e qual arquivo você provavelmente quer abrir.

Só os poucos quilobytes que cada cartão de modelo precisa são lidos, então uma pasta em uma unidade de rede ou em uma pasta de nuvem sincronizada funciona bem.

## Passos

:::chromium
1. Clique em {{ui:Open a folder}} à esquerda (ou no meio da tela vazia).
2. Escolha a pasta do projeto na janela que abrir e clique em **Selecionar** (ou **Enviar** ou **Abrir**, conforme o seu sistema).
3. Clique em **Ver arquivos** quando o navegador perguntar "Permitir que o site veja os arquivos?". Isso só permite que a guia leia a pasta; nada é enviado.
4. Aguarde enquanto a linha de status conta: "Listando a pasta: … arquivos", depois "Verificando arquivos do Revit: … de …".
:::

:::firefox
1. Clique em {{ui:Open a folder}} à esquerda (ou no meio da tela vazia).
2. Escolha a pasta do projeto na janela que abrir e confirme. O Firefox pode pedir que você confirme que a página pode ler os arquivos da pasta; eles continuam no seu computador.
3. Aguarde enquanto a linha de status diz "Lendo a pasta: … arquivos", depois "Verificando arquivos do Revit: … de …".
:::

:::safari
1. Clique em {{ui:Open a folder}} à esquerda (ou no meio da tela vazia).
2. Escolha a pasta do projeto na janela que abrir e clique em **Enviar**. Apesar do nome, nada sai do seu Mac: os arquivos são apenas entregues à guia.
3. Aguarde enquanto a linha de status diz "Lendo a pasta: … arquivos", depois "Verificando arquivos do Revit: … de …".
:::

Você também pode **arrastar a pasta** do {{pick:mac=Finder|windows=Explorador de Arquivos|linux=seu gerenciador de arquivos}} até a página. Uma pasta arrastada abre sem nenhum pedido de permissão, em todos os navegadores.

## O que você deve ver

O relatório da pasta preenche o meio:

- O nome da pasta, as contagens de modelos, desenhos CAD, modelos IFC e arquivos, e o tamanho total.
- Avisos em vermelho ou âmbar se algum arquivo estiver incompleto ou se algum arquivo vinculado estiver faltando na pasta.
- A caixa {{ui:Start here}}: o arquivo que o BimCraft sugere abrir, com os motivos.
- **Modelos**: uma linha por modelo, com seus backups agrupados abaixo dele.
- **Arquivos vinculados e referenciados**, **Modelos IFC**, **Desenhos CAD** e **Deixados de lado**, quando a pasta tiver algum deles.

À esquerda, o painel {{ui:Folder}} resume tudo; **Problemas** diz "Nenhum" quando todas as cópias estão íntegras.

## Usar a caixa Comece aqui

A caixa indica um arquivo e diz por quê, por exemplo:

- "Trabalho salvo mais recente nesta pasta (3 mar. 2025)."
- "*Consultant.rvt* está vinculado a outros modelos, então é um arquivo de fundo, não o arquivo para editar."
- "*Tower.rvt* parece a escolha óbvia, mas está danificado; a última cópia boa é de …"
- "Este é um modelo central: no Revit, abra-o com "Criar Nova Local" e trabalhe na cópia local."

1. Leia os motivos.
2. Clique em {{ui:Abrir a ficha}} para ler a ficha desse arquivo, ou em {{ui:Mostrar na lista}} para encontrar a linha dele em **Modelos**.
3. Confirme com quem trabalhou por último no projeto antes de confiar nele. A caixa também avisa: é uma melhor estimativa, feita a partir de nomes, datas e vínculos.

## Abrir arquivos a partir do relatório

1. Clique no nome de um modelo para abrir a ficha dele. A ficha confere cada vínculo com a pasta.
2. Clique em {{ui:Voltar para}} e no nome da pasta no topo da ficha (ou em {{ui:Voltar à pasta}} à esquerda) para retornar.
3. Clique em qualquer arquivo IFC em **Modelos IFC** para abri-lo em 3D.
4. Clique em qualquer DWG ou DXF em **Desenhos CAD** para abri-lo em 2D. Seus desenhos vinculados e imagens são encontrados automaticamente na pasta.

## Reabrir uma pasta depois

:::chromium
As pastas que você abriu com {{ui:Open a folder}} ou arrastando aparecem em {{ui:Recent folders}} à esquerda. Clique em {{ui:Reopen}} e no nome da pasta para abri-la de novo sem escolhê-la. Depois de reiniciar o navegador, o Chrome ou o Edge perguntam mais uma vez; escolha "Permitir em todas as visitas" para que parem de perguntar. A lista fica guardada somente neste navegador, nunca é enviada a lugar nenhum. Clique em × para esquecer uma pasta.
:::

:::firefox safari
Este navegador não consegue lembrar pastas entre as visitas. Escolha a pasta de novo com {{ui:Open a folder}}, ou arraste-a para a página.
:::

## Erros comuns

- **Escolher uma pasta grande demais.** Com mais de 20.000 arquivos: "Esta pasta tem mais de 20.000 arquivos. Escolha uma pasta menor, como a de um projeto." Escolha a pasta do projeto, não o disco inteiro.
- **Escolher a pasta-mãe de vários projetos.** A caixa {{ui:Start here}} então escolhe entre projetos. Escolha um projeto.
- **As pastas próprias do Revit parecem ignoradas.** As pastas `*_backup`, `*_log` e `Revit_temp` são de manutenção e aparecem em **Deixados de lado**; não são lidas.
- **Esperar que um modelo abra em 3D a partir da ficha.** Um arquivo de projeto é só uma ficha. Abra a exportação IFC dele.
- **Celulares e tablets.** Muitos navegadores móveis não conseguem escolher pastas. Use um computador.

Veja [Verificar uma pasta em busca de cópias danificadas, vínculos faltando e sobras](topic:check-folder-health) e [Relatório da pasta: funções, status e vínculos](topic:folder-roles).
