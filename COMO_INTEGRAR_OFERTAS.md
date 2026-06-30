# Guia de Integração: Encartes do Google Drive para o Carrossel do Site

Este guia ensina como integrar uma pasta pública do seu **Google Drive** com o carrossel de encartes do seu site. 

Desta forma, **qualquer imagem de encarte que você adicionar à pasta pelo seu celular ou computador aparecerá automaticamente no site em tempo real!**

---

## 🛠️ Passo 1: Configurar a Pasta no seu Google Drive

1. Crie uma pasta no seu **Google Drive** chamada `Ofertas Pedralli` (ou o nome que preferir).
2. Clique com o botão direito na pasta (ou toque nos três pontos pelo celular) e selecione **Compartilhar** -> **Compartilhar**.
3. Em *Acesso Geral*, mude de "Restrito" para **"Qualquer pessoa com o link"** (permissão de Leitor).
4. Copie o **ID da Pasta** da URL do seu navegador.
   * *Exemplo de URL:* `https://drive.google.com/drive/folders/1A2B3C4D5E6F7G8H9I0J`
   * *O ID da pasta é o texto após o último `/`:* `1A2B3C4D5E6F7G8H9I0J`

---

## 📝 Passo 2: Criar o Google Apps Script (Serviço Grátis)

O Google Apps Script agirá como uma ponte segura e gratuita entre o seu Drive e o site, gerando a lista de fotos sem expor senhas ou chaves.

1. Acesse o [Google Apps Script](https://script.google.com) com a sua conta Google.
2. Clique em **Novo Projeto**.
3. Delete qualquer código existente no editor e cole o código abaixo:

```javascript
function doGet(e) {
  // ⚠️ SUBSTITUA COM O ID DA SUA PASTA COPIADO NO PASSO 1
  var folderId = "COLE_O_ID_DA_SUA_PASTA_AQUI";   
  
  var folder = DriveApp.getFolderById(folderId);
  var files = folder.getFiles();
  var result = [];
  
  while (files.hasNext()) {
    var file = files.next();
    var mime = file.getMimeType();
    
    // Filtra apenas arquivos de imagem (PNG, JPG, JPEG, WEBP, etc.)
    if (mime.indexOf("image/") !== -1) {
      result.push({
        id: file.getId(),
        name: file.getName(),
        // CDN de alta velocidade do Google para carregar imagens diretamente
        url: "https://lh3.googleusercontent.com/d/" + file.getId(), 
        created: file.getDateCreated()
      });
    }
  }
  
  // Ordena as fotos pela data de criação (as mais novas aparecem primeiro)
  result.sort(function(a, b) {
    return b.created - a.created;
  });
  
  return ContentService.createTextOutput(JSON.stringify(result))
    .setMimeType(ContentService.MimeType.JSON);
}
```

4. Substitua `"COLE_O_ID_DA_SUA_PASTA_AQUI"` pelo ID da pasta que você copiou no Passo 1.
5. Clique em **Salvar** (ícone de disquete).

---

## 🚀 Passo 3: Implantar o Script como Aplicativo Web

1. No topo superior direito da tela do Apps Script, clique no botão azul **Implantar** -> **Nova implantação**.
2. Clique no ícone de engrenagem ao lado de "Selecionar tipo" e escolha **Web app** (Aplicativo da Web).
3. Preencha as configurações exatamente assim:
   * **Descrição:** `API de Encartes`
   * **Executar como:** **"Eu"** (sua conta Google)
   * **Quem tem acesso:** **"Qualquer pessoa"** (isso é muito importante para o site conseguir ler as fotos)
4. Clique em **Implantar**.
5. *Nota:* Se for a sua primeira vez, o Google solicitará permissão de acesso aos seus arquivos do Drive. Clique em "Autorizar acesso", selecione sua conta e depois clique em "Avançado" -> "Acessar (projeto sem nome) (não seguro)" para confirmar.
6. Copie a **URL do web app** gerada. ela se parecerá com isso:
   `https://script.google.com/macros/s/AKfycb.../exec`

---

## 🔗 Passo 4: Conectar a URL ao Site

1. Abra o arquivo `index.html` na linha ~1118 do script (próximo ao final do arquivo).
2. Localize a constante `GOOGLE_DRIVE_OFFERS_API`:
   ```javascript
   const GOOGLE_DRIVE_OFFERS_API = "";
   ```
3. Cole a URL da implantação que você copiou entre as aspas:
   ```javascript
   const GOOGLE_DRIVE_OFFERS_API = "https://script.google.com/macros/s/AKfycb.../exec";
   ```
4. Salve o arquivo. Pronto! O site agora está conectado ao seu Google Drive.

---

* **Como testar:**
  Enquanto a URL do Google Drive não for adicionada, o site mostrará automaticamente os **3 encartes de exemplo** (`Hortifruti`, `Padaria`, `Gourmet`) salvos localmente na pasta `assets/ofertas/`. Assim que você colar a sua URL e subir fotos na pasta do Drive, o site trocará os exemplos pelas suas fotos reais instantaneamente!
