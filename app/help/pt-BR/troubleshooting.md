---
title: Solução de problemas
summary: Mensagens que o BimCraft exibe, o que as causa e o que fazer, para abrir arquivos, pastas, modelos 3D, desenhos e edições.
keywords: problema, erro, não funciona, não consegue abrir, falhou, incompleto, corrompido, lento, travamento, em branco, ausente, mensagem, ajuda
from: 1e5a79fc
---

Mensagens aparecem na linha de status na parte inferior da área de trabalho, em vermelho quando algo falhou. Encontre a mensagem abaixo.

## Abrindo arquivos

**"*name* não é um arquivo IFC, RVT, RFA, DWG ou DXF."**
O BimCraft não reconheceu o arquivo. Verifique a extensão e se o arquivo não está vazio. PDFs, imagens e arquivos de escritório não abrem.

**".ifczip ainda não é suportado. Salve ou exporte o modelo como um arquivo .ifc simples."** (também para `.ifcxml`)
Descompacte o `.ifczip` (é um zip comum que contém um `.ifc`) ou exporte IFC simples.

**"… é um arquivo de projeto que o BimCraft ainda não lê."**
Um arquivo `.pln`, `.pla`, `.tpl` ou `.bpn`. Exporte um IFC ou DWG dele e abra esse arquivo: veja [Abrir arquivos de projeto .pln e .pla](topic:pln-project-files).

**"Não foi possível ler este arquivo IFC."**
O arquivo IFC está danificado ou não é realmente IFC. Abra-o em um editor de texto: um arquivo IFC real começa com `ISO-10303-21;`. Exporte-o novamente.

**"Este arquivo está incompleto: tem … MB, mas o seu próprio índice aponta para dados de pelo menos … MB. …"**
O arquivo de projeto ou de família foi cortado durante a cópia, o envio ou a sincronização. Um arquivo em um drive na nuvem marcado como "somente online" tem a mesma aparência. Um arquivo aberto sozinho ainda abre, com esta mensagem no topo do cartão e "Mostrando o que foi recuperado; copie o original novamente para ter o modelo completo.": o cartão mostra apenas as partes cujos bytes estão todos no arquivo e lista o restante em **Não está no arquivo**. Torne o arquivo disponível offline no seu drive na nuvem, ou copie o original novamente, e reabra-o. Em uma pasta, o BimCraft mostra, em vez disso, o backup completo mais recente.

**"… O próprio sumário do arquivo também está na parte ausente, então nada nele pode ser aberto."**
O arquivo foi cortado tão cedo que nem o seu sumário está presente. Nada pode ser recuperado desta cópia. Copie o original novamente e reabra-o.

**"Este arquivo composto não tem um fluxo BasicFileInfo, então não é um arquivo do Revit."**
O arquivo é um arquivo composto de outro tipo (documentos de escritório antigos usam o mesmo contêiner). Verifique se escolheu o arquivo certo.

**"Ainda trabalhando no anterior…"**
O BimCraft ainda está ocupado com o arquivo ou a pasta anterior. Aguarde a linha de status terminar e tente novamente.

**O seletor de arquivos deixa meu arquivo desativado (cinza).**
O seletor só oferece `.ifc`, `.rvt`, `.rfa`, `.rte`, `.rft`, `.dwg` e `.dxf`. Arraste outros arquivos para a página, e o BimCraft informará se consegue lê-los.

## Abrindo pastas

**"Esta pasta tem mais de 20,000 arquivos. Escolha uma pasta menor, como a de um projeto."**
Você escolheu uma pasta muito acima, como um drive inteiro. Escolha uma pasta de projeto.

**"O navegador não deu acesso a *name*. Escolha-a novamente com Abrir uma pasta."**
Você clicou em {{ui:Reopen}} em uma pasta recente, e a permissão do navegador foi negada ou expirou. Escolha a pasta novamente, ou arraste-a para dentro.

**O navegador diz que vai "enviar" arquivos.**
Esse é o texto próprio do navegador para entregar arquivos a uma página. O BimCraft não os envia para lugar nenhum. Arraste a pasta para evitar a pergunta.

**Nada acontece em celular ou tablet.**
Muitos navegadores móveis não conseguem escolher pastas. Abra arquivos individuais ou use um computador.

## O mecanismo IFC é carregado na primeira vez

**A linha de status fica em "Iniciando o mecanismo IFC…", ou mostra um erro como "Failed to fetch".**
Não foi possível baixar o mecanismo IFC. Você pode estar offline, ou um firewall ou bloqueador de conteúdo o está impedindo.

:::offline
Você está offline. Se o botão da barra do aplicativo não disser {{ui:Offline ready}}, o mecanismo IFC nunca foi salvo neste navegador. Reconecte-se, abra o arquivo novamente e clique em {{ui:Save for offline}} para que funcione offline na próxima vez. Veja [Online e offline](topic:online-offline).
:::

:::online
Recarregue a página e tente novamente. Em uma rede de trabalho, peça à sua equipe de TI que permita os arquivos `.wasm` do site.
:::

## Salvando para uso offline

**O botão diz {{ui:Could not save}}.**
Alguns arquivos não foram baixados, geralmente porque a conexão caiu. Verifique sua conexão e clique no botão novamente. Qualquer cópia offline anterior é mantida até que uma nova esteja completa.

**O botão diz {{ui:Offline not available}}.**
Esta janela não pode manter uma cópia offline, por exemplo uma janela privativa ou um computador de trabalho gerenciado. Veja [Trabalhando offline](common:offline).

**O botão permanece em "Salvando *n* de *m*" por um tempo.**
A cópia do BimCraft tem cerca de 11 MB, a maior parte é o mecanismo IFC. Mantenha a aba aberta até que diga {{ui:Offline ready}}.

**O BimCraft abriu offline, mas parece desatualizado.**
Sua cópia salva é de uma visita anterior. Quando estiver online, clique em {{ui:Offline ready}} e escolha {{ui:Save again (get the newest version)}}.

## Vista 3D

**O modelo não está onde eu esperava, ou está minúsculo.**
Pressione {{key:F}} ou clique em {{ui:Fit}}. Fit sempre enquadra tudo no modelo, incluindo pavimentos que você desmarcou e elementos perdidos longe da edificação, então a edificação pode parecer pequena. Dê zoom a partir daí.

**Clicar não seleciona nada.**
Mantenha o mouse parado ao clicar: um pequeno arrasto orbita. Elementos em pavimentos desmarcados não podem ser selecionados. Com {{ui:Spaces}} ativado, os espaços transparentes são selecionados antes do que está dentro deles.

**O botão {{ui:Edges}} está desativado: "Arestas desligadas para modelos muito grandes".**
O modelo tem mais de 1.5 milhão de triângulos. As arestas ficam desligadas para economizar memória.

**A aba fica lenta, branca, ou mostra a página de falha do navegador.**
O modelo é grande demais para a memória que o navegador dá à aba. Feche outras abas e recarregue. Exporte um IFC menor: uma edificação, uma disciplina ou menos pavimentos. Veja [Navegadores, dispositivos e memória](topic:platforms).

**A vista 3D fica em branco.**
O WebGL pode estar desligado ou bloqueado. Nas configurações do navegador, ative a aceleração de hardware (ou aceleração gráfica) e reinicie o navegador.

## Editando IFC

**"Use um número."** O valor é numérico. Digite um número simples, sem unidades, como `2.4`.

**"Use um número inteiro."** O valor é uma contagem ou um inteiro. Remova as casas decimais.

**"Somente propriedades de valor único podem ser editadas."** Listas, enumerações e quantidades são somente leitura.

**{{key:Mod+S}} abre a janela "Salvar página" do navegador.**
Não há alterações não salvas, então o BimCraft deixou a tecla para o navegador. Feche a janela.

**{{key:Mod+Z}} não faz nada.**
Funciona apenas enquanto houver alterações não salvas e você não estiver digitando em um campo. Depois de salvar, não há nada mais a desfazer.

**A lista {{ui:Changes}} ainda mostra edições depois que as descartei e abri um desenho ou uma pasta.**
Quando você responde OK à pergunta "Descartá-las?" e depois abre algo que não seja um modelo IFC, as edições antigas são mantidas na memória e {{ui:Save as IFC}} ainda as salvaria. Para realmente começar do zero, abra o IFC original novamente ou recarregue a página.

**Minha edição alterou mais elementos do que selecionei.**
Você alterou uma propriedade em um conjunto marcado "(type)". Propriedades de tipo se aplicam a todos os elementos do tipo. Clique em {{ui:Undo}}. Veja [Alterar uma propriedade de tipo para todos os elementos de um tipo](topic:type-vs-instance).

## Desenhos

**"Não foi possível ler *name*. Pode estar danificado, ou salvo em um formato que o leitor ainda não trata (…)."**
Salve o desenho no programa que o criou como DWG mais antigo (2018 ou anterior) ou como DXF, e tente novamente.

**"Este desenho não tem nada para mostrar."** ou **"*name* é um desenho vazio: não contém linhas, textos nem blocos."**
O desenho está vazio, ou contém apenas coisas que o BimCraft ainda não desenha (veja **Ainda não desenhado** à direita).

**"Este desenho é muito grande; só parte dele é mostrada."**
O BimCraft parou de desenhar para continuar responsivo. Desligue as camadas de que não precisa, ou abra as folhas de que precisa a partir de um desenho menor.

**Partes de uma folha estão faltando.**
Desenhos vinculados podem estar faltando: veja em **Desenhos vinculados** à direita. Veja [Encontrar desenhos vinculados e imagens](topic:dwg-linked-files). Camadas também podem estar desligadas: clique em {{ui:All on}}.

**Uma imagem aparece como um quadro vazio.**
O arquivo dela não foi encontrado, ou é um TIFF ("TIFF não pode ser exibido em um navegador"). Adicione uma cópia em PNG ou JPEG com {{ui:Add pictures…}}.

**Rolar no meu trackpad dá zoom em vez de mover o desenho.**
É assim que os desenhos funcionam no BimCraft. Clique e arraste para fazer pan.

## Ainda com problemas

Leia [O que ainda não foi implementado](topic:not-built-yet): o que você procura pode não existir nesta versão.
