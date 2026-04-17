"use client"

export default function PrivacyPolicy() {
  return (
    <main className="min-h-screen bg-[var(--bg)] text-[var(--text)] p-8 md:p-24 font-mono">
      <div className="max-w-3xl mx-auto border border-white/10 p-6 md:p-12 relative overflow-hidden bg-black/50 backdrop-blur-sm">
        {/* Retro Grid Background Overlay */}
        <div className="absolute inset-0 -z-10 opacity-5 pointer-events-none"
             style={{backgroundImage: 'linear-gradient(#fff 1px, transparent 1px), linear-gradient(90deg, #fff 1px, transparent 1px)', backgroundSize: '20px 20px'}}>
        </div>

        <h1 className="text-2xl md:text-4xl font-bold mb-2 uppercase tracking-tighter">
          Informativa sulla Privacy (Privacy Policy) di tvboxd
        </h1>
        <p className="text-[#aaaa] text-sm mb-12">
          Ultimo aggiornamento: 16 Marzo 2026
        </p>

        <section className="space-y-12 leading-relaxed">
          <p className="text-lg">
            Questa informativa descrive come tvboxd raccoglie, utilizza e protegge i tuoi dati personali
            durante l&apos;utilizzo dell&apos;applicazione.
          </p>

          <div>
            <h2 className="text-xl font-bold mb-4 text-white border-b border-white/20 pb-2 uppercase italic">
              1. Dati Raccolti
            </h2>
            <p className="mb-4">Raccogliamo solo i dati necessari per fornirti il servizio di tracciamento e gamification:</p>
            <ul className="list-disc list-inside space-y-2 text-[#cccccc] marker:text-white/40">
              <li><span className="text-white">Dati di Autenticazione:</span> Tramite Supabase Auth, raccogliamo il tuo indirizzo email e una password (criptata). Se utilizzi provider esterni (es. Google), riceviamo i dati base del profilo autorizzati dal provider.</li>
              <li><span className="text-white">Dati del Profilo:</span> Nome utente (username), nome visualizzato, bio e avatar.</li>
              <li><span className="text-white">Dati di Tracciamento (Core Service):</span> ID delle serie TV che segui, stato di visione (in corso, completata, watchlist, in pausa), valutazioni (voti), date in cui hai guardato gli episodi e date di completamento delle serie.</li>
              <li><span className="text-white">Statistiche e Obiettivi:</span> Elaboriamo i tuoi dati di visione per generare statistiche (ore totali, generi preferiti, nazionalità delle serie) e per sbloccare obiettivi (badge).</li>
              <li><span className="text-white">Dati Sociali:</span> Informazioni sulle relazioni di &quot;following&quot; (chi segui e chi ti segue).</li>
              <li><span className="text-white">Dati Tecnici:</span> Indirizzo IP, tipo di browser e identificativi del dispositivo, gestiti automaticamente dall&apos;infrastruttura Supabase per garantire la sicurezza e il funzionamento del servizio.</li>
            </ul>
          </div>

          <div>
            <h2 className="text-xl font-bold mb-4 text-white border-b border-white/20 pb-2 uppercase italic">
              2. Finalità del Trattamento
            </h2>
            <p className="mb-4">I tuoi dati vengono utilizzati per:</p>
            <ol className="list-decimal list-inside space-y-2 text-[#cccccc] marker:text-white/40">
              <li>Gestire il tuo account e permetterti l&apos;accesso.</li>
              <li>Mantenere aggiornata la tua libreria personale di serie TV.</li>
              <li>Calcolare le tue statistiche di visione e gestire il sistema di obiettivi/gamification.</li>
              <li>Permettere la ricerca di profili e le interazioni social tra utenti.</li>
              <li>Fornirti consigli personalizzati basati sui tuoi generi preferiti.</li>
            </ol>
          </div>

          <div>
            <h2 className="text-xl font-bold mb-4 text-white border-b border-white/20 pb-2 uppercase italic">
              3. Terze Parti e Trasferimento Dati
            </h2>
            <p className="mb-4">Non vendiamo i tuoi dati a terzi. Tuttavia, utilizziamo i seguenti fornitori per il funzionamento dell&apos;app:</p>
            <ul className="list-disc list-inside space-y-2 text-[#cccccc] marker:text-white/40">
              <li><span className="text-white">Supabase (Storage e Database):</span> I tuoi dati sono memorizzati sui server di Supabase (infrastruttura PostgreSQL).</li>
              <li><span className="text-white">TMDB (The Movie Database):</span> Utilizziamo le loro API per recuperare informazioni sulle serie. Nessun tuo dato personale viene inviato a TMDB, tranne gli ID delle serie necessari per recuperare le informazioni tecniche.</li>
            </ul>
          </div>

          <div>
            <h2 className="text-xl font-bold mb-4 text-white border-b border-white/20 pb-2 uppercase italic">
              4. Visibilità dei Dati
            </h2>
            <ul className="list-disc list-inside space-y-2 text-[#cccccc] marker:text-white/40">
              <li><span className="text-white">Profilo Pubblico:</span> Il tuo username, il tuo titolo (rank), i badge sbloccati e le tue statistiche di visione sono visibili agli altri utenti che cercano il tuo profilo.</li>
              <li><span className="text-white">Email:</span> Il tuo indirizzo email non viene mai mostrato pubblicamente agli altri utenti.</li>
            </ul>
          </div>

          <div>
            <h2 className="text-xl font-bold mb-4 text-white border-b border-white/20 pb-2 uppercase italic">
              5. Cookie e Conservazione Locale
            </h2>
            <p className="mb-4">Utilizziamo il Local Storage del tuo browser per:</p>
            <ul className="list-disc list-inside space-y-2 text-[#cccccc] marker:text-white/40">
              <li>Mantenere la sessione di accesso (tramite Supabase).</li>
              <li>Gestire preferenze temporanee dell&apos;interfaccia.</li>
            </ul>
          </div>

          <div>
            <h2 className="text-xl font-bold mb-4 text-white border-b border-white/20 pb-2 uppercase italic">
              6. I tuoi Diritti
            </h2>
            <p className="mb-4">In conformità con il GDPR (o normative equivalenti), hai il diritto di:</p>
            <ul className="list-disc list-inside space-y-2 text-[#cccccc] marker:text-white/40">
              <li>Accedere ai tuoi dati in qualsiasi momento.</li>
              <li>Rettificare informazioni errate nel tuo profilo.</li>
              <li>Cancellare il tuo account e tutti i dati associati (tramite le impostazioni del profilo o contattando il supporto).</li>
              <li>Esportare i tuoi dati di visione.</li>
            </ul>
          </div>

          <div>
            <h2 className="text-xl font-bold mb-4 text-white border-b border-white/20 pb-2 uppercase italic">
              7. Contatti
            </h2>
            <p>
              Per domande sulla tua privacy o per richiedere la cancellazione dei dati, puoi contattarci all&apos;indirizzo:
              <span className="text-white ml-2 underline underline-offset-4 decoration-white/20">mezzatestamatteo0103@gmail.com</span>
            </p>
          </div>
        </section>

        <div className="mt-24 pt-8 border-t border-white/10 text-center text-[#555] text-xs uppercase tracking-[0.2em]">
          &copy; 2026 tvboxd - all rights reserved
        </div>
      </div>
    </main>
  );
}
