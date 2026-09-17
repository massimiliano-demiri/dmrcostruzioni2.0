# Guida Contentful — Caricare le foto dei lavori

Questa guida spiega come collegare **Contentful** (gratuito) al sito, in
modo che il titolare possa caricare le foto dei lavori realizzati
direttamente dal proprio pannello, senza toccare il codice. Le foto
caricate compaiono in automatico nella pagina **"Lavori realizzati"**
(e in homepage) entro circa un'ora, oppure subito se si configura il
webhook al punto 6.

## 1. Crea l'account e lo Space

1. Vai su [contentful.com](https://www.contentful.com/) e crea un account gratuito.
2. Crea un nuovo **Space** (es. "DMR Costruzioni").

## 2. Crea il Content Type "Progetto"

Nel menu **Content model > Add content type**, crea un tipo con:

- **Name**: a piacere (es. `Progetto` o `Dmrcostruzioni`)
- **API Identifier**: `dmrcostruzioni` (importante: deve essere esattamente questo)

Aggiungi questi campi (Field ID esattamente come indicato):

| Nome campo   | Field ID     | Tipo                              | Obbligatorio |
|--------------|--------------|------------------------------------|--------------|
| Titolo       | `titolo`     | Short text                         | Sì |
| Categoria    | `categoria`  | Short text (vedi valori sotto)     | Sì |
| Descrizione  | `descrizione`| Long text                          | No |
| Luogo        | `luogo`      | Short text                         | No |
| Data         | `data`       | Date & time                        | No |
| Immagini     | `immagini`   | Media, **many files**              | Sì |

Per il campo **Categoria**, imposta una validazione "Accetta solo
valori specificati" con questi valori esatti (uno dei sei):

```
opere-murarie
rifacimento-tetti
pavimenti-rivestimenti
cartongesso
impermeabilizzazione
impiantistica
```

Questo evita errori di battitura e assicura che la foto compaia nella
categoria giusta sul sito.

## 3. Recupera le chiavi API

Vai su **Settings > API keys > Add API key** (o usa quella di default).
Ti servono due valori:

- **Space ID**
- **Content Delivery API - access token**

## 4. Configura le variabili d'ambiente

Copia il file `.env.local.example` in un nuovo file `.env.local` nella
radice del progetto e compila:

```
CONTENTFUL_SPACE_ID=xxxxxxxxxxxx
CONTENTFUL_ACCESS_TOKEN=xxxxxxxxxxxxxxxxxxxxxxxxxxxx
CONTENTFUL_ENVIRONMENT=master
```

In produzione (es. Vercel), inserisci le stesse variabili nelle
impostazioni del progetto ("Environment Variables").

## 5. Come caricare una nuova foto/progetto

1. Vai su **Content > Add entry** e scegli il content type creato al punto 2.
2. Compila Titolo, Categoria (obbligatoria) e, se vuoi, Descrizione e Luogo.
3. Nel campo **Immagini**, trascina una o più foto (puoi selezionarne
   diverse insieme).
4. Clicca su **Publish** (fondamentale: se resta solo "salvato" come
   bozza, la foto non comparirà sul sito).

Le foto compariranno nella pagina "Lavori realizzati", nella categoria
scelta, insieme allo storico già presente sul sito.

## 6. (Facoltativo) Aggiornamento istantaneo con Webhook

Senza webhook le nuove foto compaiono entro un'ora. Per vederle subito
dopo la pubblicazione:

1. Scegli un segreto a piacere e impostalo come
   `CONTENTFUL_REVALIDATE_SECRET` nelle variabili d'ambiente.
2. In Contentful vai su **Settings > Webhooks > Add Webhook**.
3. URL: `https://tuodominio.it/api/revalidate?secret=IL_TUO_SEGRETO`
4. Metodo: `POST`, Trigger: "Publish" dell'entry `dmrcostruzioni`.

## 7. Il sito funziona anche senza Contentful

Se le variabili d'ambiente non vengono configurate, il sito continua a
funzionare regolarmente mostrando solo le foto già presenti nella
cartella `public/immagini`. Contentful si aggiunge in automatico non
appena viene configurato.
