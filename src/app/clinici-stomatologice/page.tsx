import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import Footer from "@/components/Footer";

const CALENDLY_URL = "https://calendar.app.google/Y6XTsHepCVmwvaya7";

export const metadata: Metadata = {
  title:
    "AI care răspunde pacienților internaționali în <60 sec | Clinici stomatologice Cluj",
  description:
    "Instalez un AI multilingv (RO/EN/DE) care răspunde la cereri pe WhatsApp, Instagram, formular și email — în mai puțin de 60 de secunde. Pentru clinicile stomatologice din Cluj care primesc pacienți din UK, Irlanda, Germania și Italia.",
  alternates: {
    canonical: "/clinici-stomatologice",
  },
  openGraph: {
    url: "/clinici-stomatologice",
    title: "Nu mai pierdeți pacienți internaționali din cauza răspunsului întârziat.",
    description:
      "Un AI care răspunde în <60 sec, în română, engleză și germană, pe toate canalele clinicii. Calificat pentru turism dentar. €1,497 instalare.",
    type: "website",
  },
};

const roi = [
  { proc: "All-on-4 / full arch", value: "€4,500–8,000 / pacient", payback: "1 pacient salvat = 3-5× ROI în luna 1" },
  { proc: "Implant unitar + coroană", value: "€700–1,200 / pacient", payback: "2 pacienți salvați acoperă instalarea" },
  { proc: "Veneers (set complet)", value: "€3,000–6,000 / pacient", payback: "1 pacient salvat = 2-4× ROI imediat" },
  { proc: "Tratament estetic complex", value: "€1,500–4,000 / pacient", payback: "1 caz = ROI complet" },
  { proc: "Pacient local recurent", value: "€300–800 LTV anual", payback: "5 pacienți × 12 luni = €197/lună acoperit" },
];

const why = [
  {
    title: "Pacienții internaționali scriu pe 4 canale, în 3 limbi.",
    body: "Un pacient din Manchester trimite cerere pe formularul de pe site la 14:00. La 14:05 trimite și pe WhatsApp. La 14:30 verifică DM-ul de pe Instagram. Dacă nu vede răspuns rapid pe niciunul, trece la următoarea clinică. AI-ul răspunde pe toate trei, în engleză naturală (sau germană, sau italiană), în secunde.",
  },
  {
    title: "Întrebările de calificare diferă pe tip de procedură.",
    body: "Un All-on-4 are alte întrebări decât un veneer sau o curățare. AI-ul cere zona afectată, durată, dacă are dosar medical, dacă a fost la alți medici în trecut, preferință pentru anestezie generală — exact ce-ai cere și tu, dar fără să aștepte 6 ore.",
  },
  {
    title: "Trebuie integrat cu programarea, nu doar să răspundă.",
    body: "Răspunsul «vă răspundem mai târziu» nu salvează pacientul. AI-ul propune două sloturi reale din calendarul clinicii (citește disponibilitatea live), confirmă fusul orar pentru pacientul străin, și trimite mail de confirmare automat cu instrucțiuni pre-vizită.",
  },
  {
    title: "GDPR + confidențialitate medicală nu sunt opționale.",
    body: "Procesarea cererilor medicale necesită DPA semnat, hosting pe servere EU, retenție clară de date și consimțământ explicit. Folosesc infrastructură Anthropic + Vercel EU + log-uri auditabile. Nu trimit date la modele care antrenează pe ele.",
  },
];

const faqs = [
  {
    q: "AI-ul vorbește engleza și germana la nivel de pacient internațional?",
    a: "Da. Folosesc Claude Sonnet 4.6, care e fluent în EN/DE/IT/FR/RO la nivel C2. Tonul e cald, profesional, adaptat industriei dentare. Pacientul nu-și dă seama că vorbește cu AI în primele 2-3 schimburi. Disclosure-ul «asistentul Dr. X» se poate adăuga oricând.",
  },
  {
    q: "Ce face AI-ul când întrebarea e medicală complicată (durere, urgență, traumă)?",
    a: "Triază. Pentru urgențe (durere severă, sângerare, traumă) escaladează imediat la un număr de telefon de gardă pe care îl configurăm împreună. Pentru întrebări medicale complexe care necesită doctor, programează cu prioritate și marchează pacientul ca «necesită medic». Nu dă diagnostic, nu prescrie, nu speculează. Limitele sunt clare în prompt.",
  },
  {
    q: "Cum se integrează cu programul meu actual? Folosesc [X].",
    a: "Lucrez cu majoritatea soluțiilor: Google Calendar, MEDIPRO, Stomawin, Doctor Soft, sau orice ai care expune un API/iCal. Pe call-ul de audit verific exact ce folosești și confirm fezabilitatea înainte de orice plată.",
  },
  {
    q: "Cât durează instalarea?",
    a: "Audit-ul săptămâna asta. Instalarea completă în 14-21 zile. În săptămâna 3 răspunzi la toate cererile în <60 sec, pe toate canalele.",
  },
  {
    q: "Cât pierd acum, realist? De unde știu că merită?",
    a: "Calcul rapid: dacă primești 30 cereri/lună (volum mic pentru o clinică de turism dentar din Cluj) și răspunzi în 6+ ore, conversia ta e ~5%. Cu răspuns sub 5 min, conversia e ~21% (Harvard). Diferența: 16% × 30 cereri = 5 pacienți pierduți. Chiar și la €1,000 procedură medie, sunt €5,000/lună. La All-on-4 medii (€5,000), pierdem €25,000/lună. Calculul tău exact îl facem pe call.",
  },
  {
    q: "Ce se întâmplă dacă AI-ul greșește?",
    a: "Două protecții. Una: tot ce spune AI-ul e revizuibil într-un inbox partajat — vezi, intervii oricând, suprascrii dacă vrei. Două: în primele 14 zile tunez prompt-urile pe cazurile reale ale clinicii tale. După aceea, ajustăm lunar pe baza ce s-a întâmplat. Greșelile se prind și se rezolvă rapid.",
  },
  {
    q: "Pacienții știu că vorbesc cu un AI?",
    a: "Tu decizi. Recomandarea mea: disclosure soft — «Asistentul Dr. X — un medic vă va contacta personal în următoarea oră». AI-ul face triajul și calificarea; doctorul preia conversația când contează. Onestitatea câștigă, mai ales în medical.",
  },
  {
    q: "GDPR — cum stăm?",
    a: "DPA semnat înainte de instalare, hosting Vercel EU (Frankfurt), retenție 90 zile pe log-uri, ștergere la cerere. Anthropic nu antrenează modelul pe datele tale (e în contractul lor). Pot livra documentația pentru ANSPDCP dacă e nevoie de audit intern.",
  },
  {
    q: "De ce să nu angajez o recepționeră multilingvă?",
    a: "O recepționeră multilingvă bună costă €1,500-2,500/lună la Cluj. Lucrează 8 ore/zi, în program. Răspunsul mediu = 15-45 min. Un pacient din UK care scrie la 21:00 (ora lor) primește răspuns mâine dimineață — mâine dimineață e prea târziu, deja a făcut rezervare la altă clinică. AI-ul răspunde 24/7, în secunde, în 3 limbi. Recepționera face ce face AI-ul prost — relația umană odată ce pacientul e calificat și programat.",
  },
  {
    q: "Pentru cine NU e bun?",
    a: "Pentru clinici cu volum mic (sub 10 cereri/lună) — economic nu se justifică. Pentru clinici care vor «doar un chatbot pe site» fără integrare reală pe WhatsApp/Insta — nu instalez chatbot-uri izolate. Pentru clinici care nu primesc pacienți internaționali — produsul rămâne util, dar nu folosești 50% din puterea lui.",
  },
];

function ChevronDown() {
  return (
    <svg
      className="w-5 h-5 text-brand shrink-0"
      viewBox="0 0 20 20"
      fill="currentColor"
      aria-hidden="true"
    >
      <path
        fillRule="evenodd"
        d="M5.22 8.22a.75.75 0 011.06 0L10 11.94l3.72-3.72a.75.75 0 111.06 1.06l-4.25 4.25a.75.75 0 01-1.06 0L5.22 9.28a.75.75 0 010-1.06z"
        clipRule="evenodd"
      />
    </svg>
  );
}

function CTAButton({ label = "Programează 20 min cu Alex" }: { label?: string }) {
  return (
    <a
      href={CALENDLY_URL}
      target="_blank"
      rel="noopener noreferrer"
      className="inline-flex items-center justify-center bg-cta text-white font-semibold text-base rounded-[0.875rem] px-8 py-3.5 transition-all duration-200 hover:bg-cta-hover hover:shadow-lg hover:shadow-cta/20 active:scale-[0.98] w-full sm:w-auto sm:min-w-[14rem]"
    >
      {label}
    </a>
  );
}

export default function CliniciStomatologicePage() {
  return (
    <main className="max-w-2xl mx-auto px-6 py-16 md:py-24">
      <Link
        href="/"
        className="inline-flex items-center gap-1.5 text-sm text-muted hover:text-foreground transition-colors mb-10"
      >
        <svg width="14" height="14" viewBox="0 0 14 14" fill="none" className="rotate-180">
          <path
            d="M1 7h12M8 2l5 5-5 5"
            stroke="currentColor"
            strokeWidth="1.5"
            strokeLinecap="round"
            strokeLinejoin="round"
          />
        </svg>
        Înapoi
      </Link>

      {/* Hero */}
      <section className="flex flex-col items-center text-center mb-14">
        <Image
          src="/images/eu.jpg"
          alt="Alex Bancu"
          width={56}
          height={56}
          className="rounded-full object-cover w-14 h-14 mb-6"
          priority
        />

        <p className="text-xs uppercase tracking-widest text-muted mb-4">
          Pentru clinici stomatologice din Cluj
        </p>

        <h1 className="heading-tight text-3xl md:text-4xl text-foreground mb-5">
          Pacientul din UK întreabă la 21:00. La 21:05 a închiriat la altă clinică.
        </h1>

        <p className="text-base md:text-lg text-muted leading-relaxed max-w-xl mb-8">
          Instalez un AI care răspunde la cererile pacienților în mai puțin de 60 de secunde —
          în română, engleză și germană — pe WhatsApp, Instagram, formularul de pe site și email.
          Califică, propune două sloturi din calendar, trimite confirmare automată.
        </p>

        <CTAButton />

        <p className="text-sm text-muted mt-4">
          20 minute gratuite. Fără pitch. Vedem unde pleacă lead-urile clinicii tale.
        </p>
      </section>

      <hr className="border-gray-200 mb-14" />

      {/* The data */}
      <section className="mb-14">
        <h2 className="heading-tight text-2xl md:text-3xl text-foreground mb-6">
          Cifra pe care n-o poți ignora
        </h2>
        <p className="text-base md:text-lg text-muted leading-relaxed mb-6">
          Harvard Business Review a analizat 1.25 milioane de cereri B2B. Concluzia se aplică
          1:1 turismului dentar:
        </p>
        <blockquote className="border-l-4 border-brand pl-6 my-6 bg-surface/40 py-4 rounded-r-lg">
          <p className="text-lg md:text-xl text-foreground leading-relaxed mb-3">
            Firmele care răspund în mai puțin de 5 minute au{" "}
            <strong className="text-brand">100× mai multe șanse</strong> să intre în
            contact cu un lead — și{" "}
            <strong className="text-brand">21× mai multe șanse</strong> să-l califice — față de
            cele care așteaptă 30 de minute.
          </p>
          <p className="text-sm text-muted">
            — Harvard Business Review, &ldquo;The Short Life of Online Sales Leads&rdquo;
          </p>
        </blockquote>
        <ul className="space-y-2 text-base md:text-lg text-muted leading-relaxed mb-6">
          <li>
            <strong className="text-foreground">78%</strong> din pacienți merg la prima clinică
            care răspunde.
          </li>
          <li>
            Clinica medie din turism dentar răspunde în{" "}
            <strong className="text-foreground">peste 6 ore</strong>.
          </li>
          <li>
            La marketplace-urile internaționale (WhatClinic, DentalDepartures), clinicile cu
            răspuns sub 60 minute sunt clasate vizibil mai sus.
          </li>
          <li>
            Cluj are <strong className="text-foreground">50+ clinici stomatologice</strong> care
            țintesc pacienți UK/IE/DE — concurența pe răspuns rapid e directă, nu teoretică.
          </li>
        </ul>
        <p className="text-base md:text-lg text-muted leading-relaxed">
          Nu-ți trebuie mai mulți pacienți. Trebuie să-i ții pe cei care ți-au scris deja.
        </p>
      </section>

      {/* The math */}
      <section className="mb-14">
        <h2 className="heading-tight text-2xl md:text-3xl text-foreground mb-6">
          Calculul, pentru clinica ta
        </h2>
        <p className="text-base md:text-lg text-muted leading-relaxed mb-6">
          Un singur caz mare salvat acoperă instalarea — uneori de patru ori.
        </p>
        <div className="overflow-x-auto -mx-2">
          <table className="w-full text-sm md:text-base">
            <thead>
              <tr className="border-b border-gray-200">
                <th className="text-left py-3 px-2 text-foreground font-semibold">Procedură</th>
                <th className="text-left py-3 px-2 text-foreground font-semibold">Valoare</th>
                <th className="text-left py-3 px-2 text-foreground font-semibold">Payback</th>
              </tr>
            </thead>
            <tbody>
              {roi.map((r, i) => (
                <tr key={i} className="border-b border-gray-100 last:border-0">
                  <td className="py-3 px-2 text-foreground font-medium">{r.proc}</td>
                  <td className="py-3 px-2 text-muted">{r.value}</td>
                  <td className="py-3 px-2 text-muted">{r.payback}</td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
        <p className="text-sm text-muted leading-relaxed mt-6">
          Bugetul de marketing dentar standard e 4-7% din venit. O clinică cu €1.5M cifră
          cheltuie €60-105k/an pe marketing. €1,497 + €2,364/an reprezintă{" "}
          <strong className="text-foreground">sub 2%</strong> din acel buget — pentru ce e
          probabil pâinea de zi cu zi (răspunsul la lead-urile pe care le plătești deja).
        </p>
      </section>

      {/* Demo */}
      <section className="mb-14">
        <h2 className="heading-tight text-2xl md:text-3xl text-foreground mb-6">
          Cum arată în 8 secunde
        </h2>
        <p className="text-base md:text-lg text-muted leading-relaxed mb-6">
          Un pacient real din UK îți scrie pe WhatsApp duminică seara. Iată ce se întâmplă:
        </p>

        <div className="space-y-4">
          <div className="bg-surface/60 border border-gray-200 rounded-2xl p-5">
            <p className="text-xs uppercase tracking-widest text-muted mb-2">
              Pacient · Sarah M., Manchester · 21:14
            </p>
            <p className="text-base text-foreground leading-relaxed">
              <em>
                &ldquo;Hi, I&apos;m looking at getting All-on-4 implants. Could you give me a
                rough idea of cost and availability? Flying from UK, would need 2 trips.&rdquo;
              </em>
            </p>
          </div>

          <div className="flex items-center justify-center text-sm text-muted py-1">
            ↓ 0.8 secunde
          </div>

          <div className="bg-brand/5 border border-brand/20 rounded-2xl p-5">
            <p className="text-xs uppercase tracking-widest text-brand mb-2">
              AI Clinica Dr. X · 21:14
            </p>
            <p className="text-base text-foreground leading-relaxed mb-3">
              <em>
                &ldquo;Hi Sarah, thanks for reaching out. For All-on-4 we&apos;re typically
                in the €4,500-6,500 range per arch, including consultation, surgery and the
                provisional bridge. Two trips is correct — first ~5 days, second ~10 days,
                3 months apart. Two quick questions so I can give you a clean quote:&rdquo;
              </em>
            </p>
            <ul className="text-base text-foreground leading-relaxed list-disc list-outside ml-5 space-y-1">
              <li><em>One arch or both?</em></li>
              <li><em>Any CBCT scan from your UK dentist? Saves us a step.</em></li>
            </ul>
            <p className="text-base text-foreground leading-relaxed mt-3">
              <em>
                &ldquo;We have consultation slots on Tue 20 May 14:00 (UK time) and Thu 22 May
                10:30. Would either work for a 20-min video call with Dr. X before you fly?&rdquo;
              </em>
            </p>
          </div>
        </div>

        <p className="text-sm text-muted leading-relaxed mt-6">
          În paralel: pacientul primește email cu pre-vizita PDF (preparation guide,
          ce să aducă, asigurare medicală). Notificare automată pe Telegram către doctor:
          &ldquo;Sarah M. — All-on-4 inquiry, calificată, slot rezervat tentativ Marți 14:00.&rdquo;
        </p>
      </section>

      {/* Who it's for */}
      <section className="mb-14">
        <h2 className="heading-tight text-2xl md:text-3xl text-foreground mb-6">
          Pentru cine e
        </h2>
        <p className="text-base md:text-lg text-muted leading-relaxed mb-4">
          Clinici stomatologice din Cluj (sau Brașov / Sibiu / Oradea, dar Cluj e nucleul)
          care primesc pacienți din UK, Irlanda, Germania, Austria, Italia — și care știu
          că pierd o parte din ei pentru că nu se răspunde suficient de rapid.
        </p>
        <p className="text-base md:text-lg text-muted leading-relaxed mb-4">
          În special:
        </p>
        <ul className="space-y-2 text-base md:text-lg text-muted leading-relaxed mb-4 list-disc list-outside ml-5">
          <li>Clinici cu un singur owner-dentist (decizii rapide, fără birocrație internă)</li>
          <li>Clinici cu 10+ cereri/săptămână pe canale digitale</li>
          <li>Clinici care fac marketing pe Instagram sau Google Ads (deja plătești pentru lead-uri)</li>
          <li>Clinici poziționate explicit pentru turism dentar internațional</li>
        </ul>
      </section>

      {/* Why it's hard */}
      <section className="mb-14">
        <h2 className="heading-tight text-2xl md:text-3xl text-foreground mb-6">
          De ce e mai greu decât pare
        </h2>
        <p className="text-base md:text-lg text-muted leading-relaxed mb-6">
          Chatbot-uri sunt peste tot. De ce aproape nicio clinică nu are unul care funcționează
          cu adevărat? Patru motive:
        </p>
        <div className="space-y-6">
          {why.map((w, i) => (
            <div key={i}>
              <h3 className="text-lg md:text-xl text-foreground font-semibold mb-2">
                {w.title}
              </h3>
              <p className="text-base text-muted leading-relaxed">{w.body}</p>
            </div>
          ))}
        </div>
      </section>

      {/* What you get */}
      <section className="mb-14">
        <h2 className="heading-tight text-2xl md:text-3xl text-foreground mb-6">
          Ce primești pentru €1,497
        </h2>
        <ul className="space-y-3 text-base md:text-lg text-muted leading-relaxed">
          <li className="flex gap-3">
            <span className="text-brand shrink-0 mt-1">
              <svg width="16" height="16" viewBox="0 0 16 16" fill="none">
                <path d="M3 8l3 3 7-7" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
              </svg>
            </span>
            <span>Audit de 20 min — mapăm fiecare canal pe care vin cererile clinicii tale.</span>
          </li>
          <li className="flex gap-3">
            <span className="text-brand shrink-0 mt-1">
              <svg width="16" height="16" viewBox="0 0 16 16" fill="none">
                <path d="M3 8l3 3 7-7" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
              </svg>
            </span>
            <span>AI instalat pe toate canalele relevante — WhatsApp Business, Instagram DM, formularul de pe site, Gmail/Outlook, calendarul (Google / MEDIPRO / Stomawin).</span>
          </li>
          <li className="flex gap-3">
            <span className="text-brand shrink-0 mt-1">
              <svg width="16" height="16" viewBox="0 0 16 16" fill="none">
                <path d="M3 8l3 3 7-7" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
              </svg>
            </span>
            <span>Prompt-uri scrise în RO/EN/DE, adaptate pentru procedurile clinicii tale și pentru tonul medical.</span>
          </li>
          <li className="flex gap-3">
            <span className="text-brand shrink-0 mt-1">
              <svg width="16" height="16" viewBox="0 0 16 16" fill="none">
                <path d="M3 8l3 3 7-7" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
              </svg>
            </span>
            <span>Logică de escaladare clară: urgențe → telefon de gardă; întrebări medicale complexe → programare prioritară marcată &ldquo;necesită medic&rdquo;.</span>
          </li>
          <li className="flex gap-3">
            <span className="text-brand shrink-0 mt-1">
              <svg width="16" height="16" viewBox="0 0 16 16" fill="none">
                <path d="M3 8l3 3 7-7" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
              </svg>
            </span>
            <span>Inbox partajat unde citești fiecare conversație AI, suprascrii, preiei când vrei.</span>
          </li>
          <li className="flex gap-3">
            <span className="text-brand shrink-0 mt-1">
              <svg width="16" height="16" viewBox="0 0 16 16" fill="none">
                <path d="M3 8l3 3 7-7" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
              </svg>
            </span>
            <span>DPA semnat + hosting EU + documentație pentru audit intern ANSPDCP.</span>
          </li>
          <li className="flex gap-3">
            <span className="text-brand shrink-0 mt-1">
              <svg width="16" height="16" viewBox="0 0 16 16" fill="none">
                <path d="M3 8l3 3 7-7" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
              </svg>
            </span>
            <span>30 zile de tuning post-instalare incluse.</span>
          </li>
          <li className="flex gap-3">
            <span className="text-brand shrink-0 mt-1">
              <svg width="16" height="16" viewBox="0 0 16 16" fill="none">
                <path d="M3 8l3 3 7-7" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
              </svg>
            </span>
            <span>Instalare în persoană în Cluj — vin la clinică pentru setup, conectez WhatsApp Business direct cu doctorul/recepționera.</span>
          </li>
        </ul>

        <div className="mt-8 p-6 bg-surface border border-gray-200 rounded-2xl">
          <p className="text-sm text-muted mb-2">Apoi, opțional:</p>
          <p className="text-base text-foreground font-medium mb-1">€197/lună — Mentenanță și tuning</p>
          <p className="text-sm text-muted">
            Monitorizez performanța, repar break-urile de API (Meta, WhatsApp), ajustez AI-ul
            când apar proceduri sau pachete noi. Anulezi oricând. Workflow-ul rămâne al clinicii.
          </p>
        </div>
      </section>

      {/* Founding 5 */}
      <section className="mb-14">
        <h2 className="heading-tight text-2xl md:text-3xl text-foreground mb-5">
          Cele 5 locuri de fondator
        </h2>
        <p className="text-base md:text-lg text-muted leading-relaxed mb-4">
          Iau primele 5 clinici la €1,497. După aceea, prețul urcă la €1,997 și ulterior €2,500.
        </p>
        <p className="text-base md:text-lg text-muted leading-relaxed mb-4">
          În plus, pentru fondatori: numărul meu personal de telefon pentru 90 de zile, și
          (cu acordul tău) clinica ta devine studiu de caz public — vizibilitate naturală
          pentru turism dentar în RO/EN/DE.
        </p>
        <p className="text-base md:text-lg text-muted leading-relaxed">
          <strong className="text-foreground">Garanție:</strong> dacă AI-ul nu produce minim
          un pacient calificat (programat) în 30 de zile de la instalare, returnez integral
          €1,497. Niciun risc pe partea ta.
        </p>
      </section>

      {/* Who I am */}
      <section className="mb-14">
        <h2 className="heading-tight text-2xl md:text-3xl text-foreground mb-5">
          Cine sunt
        </h2>
        <p className="text-base md:text-lg text-muted leading-relaxed mb-4">
          Sunt Alex. 9 ani de inginerie software pentru companii americane. Locuiesc în Cluj,
          pe Zorilor.
        </p>
        <p className="text-base md:text-lg text-muted leading-relaxed mb-4">
          În ultimul an am construit workflow-uri AI peste LLM-uri — pentru mine, și pentru
          câțiva clienți de încredere. Asta vreau să fac full-time.
        </p>
        <p className="text-base md:text-lg text-muted leading-relaxed">
          Vorbesc RO + EN nativ. Vin la clinică pentru audit și instalare — nu sunt o agenție
          de la 800 km care livrează prin Zoom. Asta contează când e vorba de date medicale.
        </p>
      </section>

      {/* Pricing block */}
      <section className="mb-14 bg-surface border border-gray-200 rounded-2xl p-8 md:p-10 text-center">
        <p className="text-xs uppercase tracking-widest text-muted mb-3">
          Instalare unică
        </p>
        <p className="text-5xl md:text-6xl font-semibold text-foreground mb-3">
          €1,497
        </p>
        <p className="text-base text-muted mb-1">
          + €197/lună mentenanță (opțional, anulezi oricând)
        </p>
        <p className="text-base text-muted mb-8 max-w-md mx-auto">
          Un singur pacient salvat acoperă instalarea. Majoritatea clienților văd ROI în săptămâna 3.
        </p>
        <CTAButton />
        <p className="text-sm text-muted mt-4">
          20 min audit gratuit. Confirmăm potrivirea înainte să se miște bani.
        </p>
      </section>

      {/* FAQ */}
      <section className="mb-14">
        <h2 className="heading-tight text-2xl md:text-3xl text-foreground mb-8">
          Întrebări
        </h2>
        <div className="space-y-3">
          {faqs.map((faq, i) => (
            <details
              key={i}
              className="group border border-gray-200 rounded-xl overflow-hidden"
            >
              <summary className="flex items-center justify-between gap-4 px-6 py-5 bg-white hover:bg-gray-50 transition-colors cursor-pointer">
                <span className="text-base md:text-lg font-semibold text-foreground">
                  {faq.q}
                </span>
                <ChevronDown />
              </summary>
              <div className="px-6 pb-5 pt-1 bg-white">
                <p className="text-base text-muted leading-relaxed">{faq.a}</p>
              </div>
            </details>
          ))}
        </div>
      </section>

      {/* Final CTA */}
      <section className="text-center mb-12">
        <h2 className="heading-tight text-2xl md:text-3xl text-foreground mb-4">
          20 minute. Aflăm dacă merită.
        </h2>
        <p className="text-base md:text-lg text-muted mb-8 max-w-md mx-auto">
          Pe call mapăm canalele actuale de comunicare ale clinicii tale și calculăm
          pierderea reală. Fără pitch dacă nu se potrivește.
        </p>
        <CTAButton />
      </section>

      <Footer />
    </main>
  );
}
