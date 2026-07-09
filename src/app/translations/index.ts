import { Language } from '../contexts/LanguageContext';

export const translations = {
  en: {
    // Navbar
    nav: {
      home: 'Home',
      solution: 'Ecosystem',
      products: 'Product',
      pricing: 'Pricing',
      contact: 'Contact',
      login: 'For Business',
      startTrial: 'For Customers',
    },
    
    // Hero
    hero: {
      badge: '🏆 Built for DACH Market SMEs',
      title: 'Loyalty Platform',
      titleHighlight: 'Plug & Play',
      subtitle:
        'Seamless POS integration. Launch your personalized loyalty program in 48 hours and boost customer retention with zero hassle.',
      ctaPrimary: 'Start Free Trial',
      ctaSecondary: 'See How It Works',
      stats: {
        stores: 'Active stores',
        members: 'Loyalty members',
        returnRate: 'Higher return rate',
      },
    },
    
    // Partners
    partners: {
      title: 'Trusted by Leading Brands Worldwide',
    },
    
    // The Problem
    problem: {
      badge: 'THE PROBLEM',
      title: 'SMEs are bleeding revenue due to outdated retention tools',
      subtitle: 'Paper cards, enterprise overkill, and apps that fall apart under real-world pressure are costing local businesses every single day.',
      cards: [
        {
          number: '01',
          title: 'Paper Cards Fail',
          description: 'Easily lost, zero customer data collection, no digital engagement. You\'re flying blind on who your loyal customers actually are.',
        },
        {
          number: '02',
          title: 'Enterprise Tools are Overkill',
          description: 'Too expensive and too complex for local Spas, Cafés, Restaurants, and Boutiques. Built for Fortune 500 - not the high street.',
        },
        {
          number: '03',
          title: 'Operational Friction',
          description: 'Existing loyalty apps fail on day-to-day edge cases - Returns, Refunds, Manual Entry Mistakes - causing queue buildups at the counter.',
        },
      ],
    },
    
    // Features
    features: {
      badge: 'ECOSYSTEM',
      title: 'A Standalone "Plug & Play" Loyalty Ecosystem',
      subtitle:
        'Generic architecture designed for seamless POS integration and rapid deployment across diverse retail environments.',
      items: [
        {
          title: 'All-in-One Platform',
          description:
            'Complete loyalty management system with customer profiles, points tracking, rewards catalog, and analytics dashboard in one place.',
        },
        {
          title: 'Standalone Simplicity',
          description:
            'Deploy independently from your POS system. Simple API integration means you can launch without disrupting existing operations.',
        },
        {
          title: 'Data-Driven',
          description:
            'Real-time analytics and customer insights help you understand buying patterns, optimize campaigns, and increase lifetime value.',
        },
        {
          title: 'DACH Market Fit',
          description:
            'Built specifically for German-speaking markets with local payment methods, GDPR compliance, and region-specific features.',
        },
        {
          title: 'PWA Technology',
          description:
            'Mobile-first Progressive Web App delivers native app experience without app store downloads. Works offline and installs instantly.',
        },
        {
          title: 'Smart Voucher Engine',
          description:
            'Automated voucher generation, personalized offers, and smart redemption tracking drive repeat purchases and customer engagement.',
        },
      ],
    },

    // Platform
    platform: {
      badge: 'THE PLATFORM',
      title: 'A Complete Multi-touchpoint Ecosystem',
      subtitle: 'Three purpose-built products working together - your staff, your customers, and your business all in sync.',
      products: [
        {
          number: '01',
          title: 'Staff Web App',
          subtitle: 'The Frontline Powerhouse',
          features: [
            'QR / Phone check-in in under 3 seconds',
            'Split Bills, Refunds & Manual Entry support',
            'New staff master the system in 15 minutes',
            'Works on any device - smartphone, tablet, PC',
            'PIN-protected actions with full audit trails',
          ],
        },
        {
          number: '02',
          title: 'Customer Web App',
          subtitle: 'Frictionless Engagement',
          features: [
            'PWA - instant access via browser, no install needed',
            'Real-time point balance & tier progress view',
            'Smart Wallet auto-surfaces best savers',
            'Birthday & expiry reminders via notifications',
            'Refer & Earn program built in',
          ],
          highlighted: true,
        },
        {
          number: '03',
          title: 'Admin Dashboard',
          subtitle: 'The Command Center',
          features: [
            'Set earning rates, tier rules & campaigns in clicks',
            'Voucher Usage, Earn/Spend Trends reporting',
            'Multi-store management - 10 to 100+ locations',
            'Dynamic config - no developer required',
            'New Account Growth tracking across all branches',
          ],
        },
      ],
    },
    
    // Killer Feature
    killerFeature: {
      badge: 'THE KILLER FEATURE',
      title: 'Error Correction & Edge Cases',
      subtitle: 'The reason generic apps fail at the counter - and why LoyaWin wins. Built to handle real-world chaos, not just happy paths.',
      features: [
        {
          title: 'Void / Edit Workflow',
          description: 'Managers fix mistakes immediately at the counter. No system lockups, no queue buildup.',
        },
        {
          title: 'Robust Refund Logic',
          description: 'Automatic point clawback and voucher restoration when customers return goods or cancel orders.',
        },
        {
          title: 'Security & Audit Trail',
          description: 'PIN-protected actions with mandatory Reason Codes. Full audit trail for every correction made.',
        },
      ],
      scenarios: [
        {
          icon: 'users',
          title: 'Split Bill scenario',
          description: 'Table of 4 at a German restaurant - each paying separately. LoyaWin handles split bills natively, awarding points proportionally to each person\'s spend.',
          badge: 'Getrennte Rechnung ready',
          color: 'blue',
        },
        {
          icon: 'undo',
          title: 'Return & Refund scenario',
          description: 'Customer returns a product 3 days later. Points are automatically clawed back, vouchers restored, transaction log updated - zero manual work.',
          badge: 'EU Consumer law Compliant',
          color: 'orange',
        },
        {
          icon: 'wifi-off',
          title: 'Offline / No-phone scenario',
          description: 'Customer forgot their phone. Staff looks up by name or number and manually applies points. No customer left behind.',
          badge: 'Manual Entry supported',
          color: 'red',
        },
      ],
    },
    
    // Pricing
    pricing: {
      badge: 'PRICING PLANS',
      title: 'Choose the Perfect Plan for Your Business',
      subtitle: 'Flexible pricing that grows with you. All plans include our core features with a 30-day money-back guarantee.',
      monthly: 'Monthly',
      annual: 'Annual',
      saveTag: 'Save 20%',
      standardLicense: {
        badge: 'STANDARD LICENSE',
        title: 'The "Buy-Once" Model',
        subtitle: 'Own the license forever - no surprise price hikes',
        price: '€2,000',
        period: 'One-time payment · includes your first store',
        targetTitle: 'Target',
        targetItems: [
          'SMEs and small-to-mid retail chains',
          'Businesses looking to control long-term operating costs',
        ],
        expansionTitle: 'Expansion Costs',
        expansionItems: [
          '+€300 per additional store',
          '€10/month maintenance fee (billed annually)',
        ],
        note: 'Clients own the license with minimal monthly operating costs - significantly cheaper than traditional SaaS in the long run.',
        cta: 'Get the License →',
      },
      enterpriseCore: {
        badge: 'ENTERPRISE CORE',
        popular: 'Most Popular',
        title: 'Custom / White-label',
        subtitle: 'Built entirely around your ecosystem',
        price: 'Custom',
        period: 'Project-based quote · contact us for a consultation',
        targetTitle: 'Target',
        targetItems: [
          'Large corporations and franchise brands requiring data isolation',
          'Brands wanting full white-label ownership of the system',
        ],
        includesTitle: 'Includes',
        includesItems: [
          'Core Source Code License - full ownership',
          'Custom Development & Integration to your spec',
          'Private Server Deployment - complete data isolation',
        ],
        note: 'Data sovereignty, full customization, and separation from the shared SaaS infrastructure.',
        cta: 'Get a Free Quote →',
      },
      plans: [
        {
          name: 'Starter',
          price: '$49',
          period: '/month',
          description: 'Perfect for small businesses just getting started with loyalty',
          features: [
            'Up to 1,000 active members',
            'Basic rewards program',
            'Email support',
            'Mobile app access',
            'Standard analytics',
            'Single location',
          ],
          cta: 'Start Free Trial',
        },
        {
          name: 'Professional',
          price: '$149',
          period: '/month',
          description: 'For growing businesses ready to scale their loyalty program',
          popular: true,
          features: [
            'Up to 10,000 active members',
            'Advanced rewards & tiers',
            'Priority support',
            'Custom branding',
            'Advanced analytics',
            'Up to 5 locations',
            'API access',
            'A/B testing',
          ],
          cta: 'Start Free Trial',
        },
        {
          name: 'Enterprise',
          price: 'Custom',
          period: '',
          description: 'Tailored solutions for large organizations with unique needs',
          features: [
            'Unlimited members',
            'Full customization',
            'Dedicated account manager',
            'White-label solution',
            'Predictive AI insights',
            'Unlimited locations',
            'SLA guarantee',
            'Custom integrations',
          ],
          cta: 'Contact Sales',
        },
      ],
    },
    
    // Testimonials
    testimonials: {
      badge: 'WHAT CUSTOMERS SAY',
      title: 'Real results from\\nreal businesses',
      subtitle: 'See how companies like yours are transforming customer relationships with LoyaWin',
      items: [
        {
          text: 'LoyaWin transformed how we engage with customers. The system is intuitive, our staff picked it up in minutes, and our repeat business increased by 68% in just 4 months. Best investment we\'ve made.',
          author: 'Michael Weber',
          role: 'Owner · Café & Bakery Chain',
          rating: 5,
        },
        {
          text: 'Finally, a loyalty platform that actually works for small businesses. No complicated setup, no hidden fees. The Buy-Once license model saved us thousands compared to monthly subscriptions.',
          author: 'Anna Schmidt',
          role: 'Manager · Beauty & Spa Group',
          rating: 5,
        },
        {
          text: 'The edge case handling is phenomenal. Split bills, refunds, manual entries - everything works flawlessly. Our checkout flow is faster and customers love the seamless experience.',
          author: 'Thomas Müller',
          role: 'Director · Restaurant Group, 8 locations',
          rating: 5,
        },
      ],
    },
    
    // Contact
    contact: {
      badge: 'GET IN TOUCH',
      title: 'Ready to boost your\ncustomer loyalty?',
      subtitle: 'Leave your details and our team will reach out within 24 hours\nto help you get started with LoyaWin',
      leftSection: {
        title: 'Get a free consultation',
        description: "LoyaWin's expert team will analyze your needs and recommend the best loyalty solution tailored to your business goals.",
        contactDetails: [
          { label: 'Email', value: 'hello@loyawin.com' },
          { label: 'Phone', value: '+1 (800) 569-2468' },
          { label: 'Offices', value: 'San Francisco · London · Singapore' },
          { label: 'Business hours', value: 'Mon – Sat · 8:00 AM – 6:00 PM' },
        ],
        whyChooseTitle: 'Why choose LoyaWin?',
        whyChooseItems: [
          '24/7 dedicated support team',
          'Free implementation & training',
          'No credit card required to start',
        ],
      },
      form: {
        fullName: 'Full name',
        phone: 'Phone',
        email: 'Business email',
        company: 'Business name',
        businessType: 'Business type',
        businessTypePlaceholder: 'Other',
        businessTypeOptions: [
          'Retail',
          'F&B / Restaurant',
          'Health & Beauty',
          'Automotive',
          'Other',
        ],
        locations: 'Locations',
        locationsPlaceholder: 'Select',
        locationsOptions: [
          '1 location',
          '2 – 5 locations',
          '6 – 20 locations',
          '20 – 100 locations',
          '100+ locations',
        ],
        planLabel: 'Plan of interest',
        planPlaceholder: 'Select plan',
        planOptions: [
          'Standard License (Buy-Once)',
          'Enterprise Core (Custom / White-label)',
          'Not sure yet - need consultation',
        ],
        message: 'How can we help?',
        messagePlaceholder: "Tell us about your business and what you're looking to achieve...",
        submit: 'Send my inquiry →',
        successMessage: 'Message sent successfully!',
        placeholders: {
          fullName: 'Anna Müller',
          phone: '+49 151 000 0000',
          email: 'anna@company.de',
          company: 'Your brand / company',
        },
      },
      info: {
        firstName: 'First Name',
        lastName: 'Last Name',
        email: 'Work Email',
        phone: 'Phone Number',
        company: 'Company Name',
        employees: 'Number of Employees',
        employeesOptions: [
          '1-10 employees',
          '11-50 employees',
          '51-200 employees',
          '201-500 employees',
          '500+ employees',
        ],
        message: 'Tell us about your needs',
        consent: 'I agree to receive communications from LoyaWin',
        submit: 'Send Message',
        sending: 'Sending...',
      },
    },
    
    // CTA Band
    ctaBand: {
      title: 'Start Building Stronger Customer Relationships Today',
      subtitle: 'Join 10,000+ businesses using LoyaWin to drive growth',
      cta: 'Start your free 30-day trial',
    },
    
    // Footer
    footer: {
      description: 'Transform customer loyalty into sustainable growth with our intelligent rewards platform.',
      product: {
        title: 'Product',
        links: ['Features', 'Pricing', 'Security', 'Roadmap', 'Integrations'],
      },
      company: {
        title: 'Company',
        links: ['About Us', 'Careers', 'Blog', 'Press Kit', 'Partners'],
      },
      resources: {
        title: 'Resources',
        links: ['Help Center', 'Documentation', 'API Reference', 'Community', 'Status'],
      },
      legal: {
        title: 'Legal',
        links: ['Privacy Policy', 'Terms of Service', 'Cookie Policy', 'GDPR', 'Compliance'],
      },
      copyright: '© 2024 LoyaWin. All rights reserved.',
    },
  },
  
  de: {
    // Navbar
    nav: {
      home: 'Startseite',
      solution: 'Ökosystem',
      products: 'Produkt',
      pricing: 'Preise',
      contact: 'Kontakt',
      login: 'Für Unternehmen',
      startTrial: 'Für Kunden',
    },
    
    // Hero
    hero: {
      badge: '🏆 Für DACH-Markt-Mittelständische Unternehmen',
      title: 'Loyalitätsplattform',
      titleHighlight: 'Plug & Play',
      subtitle:
        'Nahtlose POS-Integration. Starten Sie Ihr personalisiertes Loyalitätsprogramm in 48 Stunden und steigern Sie die Kundenbindung ohne Aufwand.',
      ctaPrimary: 'Kostenlos testen',
      ctaSecondary: 'Siehe, wie es funktioniert',
      stats: {
        stores: 'Aktive Geschäfte',
        members: 'Loyalitätsmitglieder',
        returnRate: 'Höhere Rückkehrrate',
      },
    },
    
    // Partners
    partners: {
      title: 'Vertraut von führenden Marken weltweit',
    },
    
    // The Problem
    problem: {
      badge: 'VÄNDE',
      title: 'KMUs verlieren Umsatz durch veraltete Kundenbindungstools',
      subtitle: 'Papierkarten, überdimensionierte Enterprise-Lösungen und Apps, die unter realen Bedingungen versagen, kosten lokale Unternehmen täglich Geld.',
      cards: [
        {
          number: '01',
          title: 'Papierkarten versagen',
          description: 'Leicht verloren, keine Kundendatenerfassung, kein digitales Engagement. Sie tappen im Dunkeln, wer Ihre treuen Kunden wirklich sind.',
        },
        {
          number: '02',
          title: 'Enterprise-Tools sind überdimensioniert',
          description: 'Zu teuer und zu komplex für lokale Spas, Cafés, Restaurants und Boutiquen. Gebaut für Fortune 500 - nicht für den Einzelhandel.',
        },
        {
          number: '03',
          title: 'Operative Reibungen',
          description: 'Bestehende Loyalty-Apps scheitern an täglichen Sonderfällen - Retouren, Rückerstattungen, manuelle Eingabefehler - und verursachen Warteschlangen an der Kasse.',
        },
      ],
    },
    
    // Features
    features: {
      badge: 'ÖKOSYSTEM',
      title: 'Ein eigenständiges "Plug & Play" Loyalitätsökosystem',
      subtitle:
        'Generische Architektur für nahtlose POS-Integration und schnelle Bereitstellung in verschiedenen Einzelhändlerumgebungen.',
      items: [
        {
          title: 'Alles-in-einer-Plattform',
          description:
            'Komplettes Loyalitätsmanagementsystem mit Kundenprofilen, Punkteverfolgung, Belohnungskatalog und Analyse-Dashboard an einem Ort.',
        },
        {
          title: 'Eigenständige Einfachheit',
          description:
            'Unabhängig von Ihrem POS-System bereitstellen. Einfache API-Integration bedeutet, dass Sie ohne Unterbrechung bestehender Operationen starten können.',
        },
        {
          title: 'Datengetriebene',
          description:
            'Echtzeit-Analysen und Kundeninsights helfen Ihnen, Kaufmuster zu verstehen, Kampagnen zu optimieren und den Lebenswert zu erhöhen.',
        },
        {
          title: 'DACH-Markt-Anpassung',
          description:
            'Speziell für deutsche Märkte mit lokalen Zahlungsmethoden, DSGVO-Konformität und regionspezifischen Funktionen entwickelt.',
        },
        {
          title: 'PWA-Technologie',
          description:
            'Mobile-first Progressive Web App bietet eine native App-Erfahrung ohne App-Store-Downloads. Funktioniert offline und installiert sofort.',
        },
        {
          title: 'Intelligente Gutschein-Engine',
          description:
            'Automatisierte Gutschein-Generierung, personalisierte Angebote und intelligente Gutschein-Abwicklung treiben Wiederkaufsverhalten und Kundenengagement.',
        },
      ],
    },

    // Platform
    platform: {
      badge: 'DIE PLATTFORM',
      title: 'Ein vollständiges Mehrkanal-Ekosystem',
      subtitle: 'Drei speziell entwickelte Produkte arbeiten zusammen - Ihr Personal, Ihre Kunden und Ihr Geschäft sind synchronisiert.',
      products: [
        {
          number: '01',
          title: 'Personal-Web-App',
          subtitle: 'Die Frontline-Macht',
          features: [
            'QR / Telefon-Check-In in weniger als 3 Sekunden',
            'Unterstützung für Aufteilung von Rechnungen, Rückerstattungen & manuelle Eingaben',
            'Neues Personal erlernt das System in 15 Minuten',
            'Funktioniert auf jedem Gerät - Smartphone, Tablet, PC',
            'PIN-geschützte Aktionen mit vollständigen Überwachungsprotokollen',
          ],
        },
        {
          number: '02',
          title: 'Kunden-Web-App',
          subtitle: 'Reibungsloses Engagement',
          features: [
            'PWA - sofortiger Zugriff über Browser, keine Installation erforderlich',
            'Echtzeit-Punktebilanz & Stufenfortschritt-Ansicht',
            'Smart Wallet zeigt automatisch die besten Spender an',
            'Geburtstags- & Ablauf-Erinnerungen über Benachrichtigungen',
            'Referenz- & Gewinnprogramm integriert',
          ],
          highlighted: true,
        },
        {
          number: '03',
          title: 'Admin-Dashboard',
          subtitle: 'Das Kommandozentrum',
          features: [
            'Einnahmenraten, Stufenregeln & Kampagnen mit Klicks festlegen',
            'Berichterstattung zur Gutscheinverwendung, Gewinn-/Ausgaben-Trends',
            'Multi-Geschäftsverwaltung - 10 bis 100+ Standorte',
            'Dynamische Konfiguration - kein Entwickler erforderlich',
            'Neukundengewinnung über alle Standorte hinweg verfolgen',
          ],
        },
      ],
    },
    
    // Killer Feature
    killerFeature: {
      badge: 'THE KILLER FEATURE',
      title: 'Fehlerbehebung & Randfälle',
      subtitle: 'Der Grund, warum generische Apps am Kassepunkt fehlschlagen - und warum LoyaWin gewinnt. Entwickelt, um echte Weltchaos zu bewältigen, nicht nur glückliche Pfade.',
      features: [
        {
          title: 'Void / Edit Workflow',
          description: 'Manager beheben Fehler sofort am Kassepunkt. Keine Systemausfälle, keine Warteschlangenbildung.',
        },
        {
          title: 'Robuste Rückerstattungslogik',
          description: 'Automatische Punkte-Rückzug und Gutschein-Wiederherstellung, wenn Kunden Waren zurückgeben oder Bestellungen stornieren.',
        },
        {
          title: 'Sicherheit & Audit Trail',
          description: 'PIN-geschützte Aktionen mit obligatorischen Grundcodes. Vollständiger Audit Trail für jede Korrektur.',
        },
      ],
      scenarios: [
        {
          icon: 'users',
          title: 'Getrennte Rechnungsszenario',
          description: 'Tisch für 4 Personen in einem deutschen Restaurant - jeder zahlt separat. LoyaWin behandelt getrennte Rechnungen nativ, verteilt Punkte proportional zu jedem Einzelspenden.',
          badge: 'Getrennte Rechnung bereit',
          color: 'blue',
        },
        {
          icon: 'undo',
          title: 'Rückgabe & Rückerstattungsszenario',
          description: 'Kunde gibt ein Produkt 3 Tage später zurück. Punkte werden automatisch zurückgezogen, Gutscheine wiederhergestellt, Transaktionsprotokoll aktualisiert - keine manuelle Arbeit.',
          badge: 'EU-Konsumerschutzgesetz konform',
          color: 'orange',
        },
        {
          icon: 'wifi-off',
          title: 'Offline / Kein Handy-Szenario',
          description: 'Kunde hat sein Handy vergessen. Personal sucht nach Namen oder Nummer und wendet Punkte manuell an. Kein Kunde wird zurückgelassen.',
          badge: 'Manuelle Eingabe unterstützt',
          color: 'red',
        },
      ],
    },
    
    // Pricing
    pricing: {
      badge: 'PREISPLÄNE',
      title: 'Wählen Sie den perfekten Plan für Ihr Unternehmen',
      subtitle: 'Flexible Preise, die mit Ihnen wachsen. Alle Pläne beinhalten unsere Kernfunktionen mit 30-Tage-Geld-zurück-Garantie.',
      monthly: 'Monatlich',
      annual: 'Jährlich',
      saveTag: '20% sparen',
      standardLicense: {
        badge: 'STANDARD-LIZENZ',
        title: 'Das "Buy-Once"-Modell',
        subtitle: 'Lizenz für immer - keine unerwarteten Preissteigerungen',
        price: '€2.000',
        period: 'Einmalige Zahlung · inklusive Ihres ersten Geschäftsstandorts',
        targetTitle: 'Zielgruppe',
        targetItems: [
          'Klein- und mittelständische Unternehmen und kleine bis mittlere Einzelhändlerketten',
          'Unternehmen, die langfristige Betriebskosten kontrollieren möchten',
        ],
        expansionTitle: 'Erweiterungskosten',
        expansionItems: [
          '+€300 pro zusätzlicher Geschäftsstandort',
          '€10/Monat Wartungsgebühr (jährlich berechnet)',
        ],
        note: 'Kunden besitzen die Lizenz mit minimalen monatlichen Betriebskosten - im langfristigen Vergleich erheblich günstiger als traditionelles SaaS.',
        cta: 'Lizenz erhalten →',
      },
      enterpriseCore: {
        badge: 'ENTERPRISE CORE',
        popular: 'Am beliebtesten',
        title: 'Benutzerdefiniert / White-label',
        subtitle: 'Gesamthaft um Ihr Ökosystem herum aufgebaut',
        price: 'Individuell',
        period: 'Projektbasierter Angebot · kontaktieren Sie uns für eine Beratung',
        targetTitle: 'Zielgruppe',
        targetItems: [
          'Große Unternehmen und Franchisemarken, die Datenisolation benötigen',
          'Marken, die vollständige White-label-Besitzung des Systems wünschen',
        ],
        includesTitle: 'Inklusive',
        includesItems: [
          'Kern-Quellcode-Lizenz - vollständige Besitzung',
          'Benutzerdefinierte Entwicklung & Integration nach Ihren Spezifikationen',
          'Private Server-Bereitstellung - vollständige Datenisolation',
        ],
        note: 'Datenverwaltung, vollständige Anpassung und Trennung von der gemeinsamen SaaS-Infrastruktur.',
        cta: 'Kostenloses Angebot erhalten →',
      },
      plans: [
        {
          name: 'Starter',
          price: '49€',
          period: '/Monat',
          description: 'Perfekt für kleine Unternehmen, die gerade mit Loyalität beginnen',
          features: [
            'Bis zu 1.000 aktive Mitglieder',
            'Basis-Belohnungsprogramm',
            'E-Mail-Support',
            'Mobile App Zugang',
            'Standard-Analysen',
            'Einzelner Standort',
          ],
          cta: 'Kostenlos testen',
        },
        {
          name: 'Professional',
          price: '149€',
          period: '/Monat',
          description: 'Für wachsende Unternehmen, die ihr Loyalitätsprogramm skalieren möchten',
          popular: true,
          features: [
            'Bis zu 10.000 aktive Mitglieder',
            'Erweiterte Belohnungen & Stufen',
            'Prioritäts-Support',
            'Individuelles Branding',
            'Erweiterte Analysen',
            'Bis zu 5 Standorte',
            'API-Zugang',
            'A/B-Tests',
          ],
          cta: 'Kostenlos testen',
        },
        {
          name: 'Enterprise',
          price: 'Individuell',
          period: '',
          description: 'Maßgeschneiderte Lösungen für große Organisationen mit besonderen Anforderungen',
          features: [
            'Unbegrenzte Mitglieder',
            'Vollständige Anpassung',
            'Dedizierter Account Manager',
            'White-Label-Lösung',
            'Prädiktive KI-Einblicke',
            'Unbegrenzte Standorte',
            'SLA-Garantie',
            'Individuelle Integrationen',
          ],
          cta: 'Vertrieb kontaktieren',
        },
      ],
    },
    
    // Testimonials
    testimonials: {
      badge: 'ERFOLGSGESCHICHTEN',
      title: 'Von Unternehmen geliebt,\\nvon Kunden vertraut',
      subtitle: 'Sehen Sie, wie Unternehmen wie Ihres Kundenbeziehungen mit LoyaWin transformieren',
      items: [
        {
          text: 'LoyaWin hat transformiert, wie wir mit Kunden interagieren. Das System ist intuitiv, unser Personal hat es in Minuten verstanden, und unser Wiederholungsgeschäft stieg in nur 4 Monaten um 68%. Die beste Investition, die wir gemacht haben.',
          author: 'Michael Weber',
          role: 'Inhaber · Café & Bäckerei-Kette',
          rating: 5,
        },
        {
          text: 'Endlich eine Loyalitätsplattform, die tatsächlich für kleine Unternehmen funktioniert. Kein kompliziertes Setup, keine versteckten Gebühren. Das Buy-Once-Lizenzmodell hat uns Tausende im Vergleich zu monatlichen Abonnements gespart.',
          author: 'Anna Schmidt',
          role: 'Managerin · Beauty & Spa Gruppe',
          rating: 5,
        },
        {
          text: 'Die Handhabung von Sonderfällen ist phänomenal. Getrennte Rechnungen, Rückerstattungen, manuelle Eingaben - alles funktioniert einwandfrei. Unser Checkout-Ablauf ist schneller und Kunden lieben das nahtlose Erlebnis.',
          author: 'Thomas Müller',
          role: 'Direktor · Restaurant-Gruppe, 8 Standorte',
          rating: 5,
        },
      ],
    },
    
    // Contact
    contact: {
      badge: 'KONTAKT AUFNEHMEN',
      title: 'Bereit, Ihre Kundentreue zu transformieren?',
      subtitle: "Unser Team hilft Ihnen gerne beim Einstieg. Füllen Sie das Formular aus und wir melden uns innerhalb von 24 Stunden.",
      leftSection: {
        title: 'Kostenlose Beratung erhalten',
        description: 'Das Expertenteam von LoyaWin analysiert Ihre Bedürfnisse und empfiehlt die beste Loyalitätslösung, die auf Ihre Geschäftsziele zugeschnitten ist.',
        contactDetails: [
          { label: 'Email', value: 'hallo@loyawin.de' },
          { label: 'Telefon', value: '+49 (30) 123-4567' },
          { label: 'Büros', value: 'Berlin · München · Hamburg' },
          { label: 'Geschäftszeiten', value: 'Mo – Sa · 8:00 – 18:00 Uhr' },
        ],
        whyChooseTitle: 'Warum LoyaWin wählen?',
        whyChooseItems: [
          '24/7 dediziertes Support-Team',
          'Kostenlose Implementierung & Schulung',
          'Keine Kreditkarte zum Start erforderlich',
        ],
      },
      form: {
        fullName: 'Vollständiger Name',
        phone: 'Telefonnummer',
        email: 'Geschäftliche E-Mail',
        company: 'Firmenname',
        businessType: 'Geschäftsart',
        businessTypePlaceholder: 'Andere',
        businessTypeOptions: [
          'Einzelhändler',
          'F&B / Restaurant',
          'Gesundheit & Schönheit',
          'Automobil',
          'Andere',
        ],
        locations: 'Standorte',
        locationsPlaceholder: 'Wählen Sie',
        locationsOptions: [
          '1 Standort',
          '2 – 5 Standorte',
          '6 – 20 Standorte',
          '20 – 100 Standorte',
          '100+ Standorte',
        ],
        planLabel: 'Interessantes Paket',
        planPlaceholder: 'Plan auswählen',
        planOptions: [
          'Standard-Lizenz (Buy-Once)',
          'Enterprise Core (Benutzerdefiniert / White-label)',
          'Noch nicht sicher - brauche Beratung',
        ],
        message: 'Wie können wir helfen?',
        messagePlaceholder: 'Erzählen Sie uns kurz über Ihr Geschäft und was Sie erreichen möchten...',
        submit: 'Anfrage senden',
        successMessage: 'Nachricht erfolgreich gesendet!',
        placeholders: {
          fullName: 'Max Mustermann',
          phone: '+49 (30) 000-0000',
          email: 'max@unternehmen.de',
          company: 'Ihr Unternehmen',
        },
      },
      info: {
        email: 'hallo@loyawin.de',
        phone: '+49 (30) 123-4567',
        address: 'Innovationsstraße 123, 10115 Berlin',
      },
    },
    
    // CTA Band
    ctaBand: {
      title: 'Beginnen Sie noch heute, stärkere Kundenbeziehungen aufzubauen',
      subtitle: 'Schließen Sie sich 10.000+ Unternehmen an, die LoyaWin für Wachstum nutzen',
      cta: 'Starten Sie Ihre kostenlose 30-Tage-Testversion',
    },
    
    // Footer
    footer: {
      description: 'Verwandeln Sie Kundentreue in nachhaltiges Wachstum mit unserer intelligenten Belohnungsplattform.',
      product: {
        title: 'Produkt',
        links: ['Funktionen', 'Preise', 'Sicherheit', 'Roadmap', 'Integrationen'],
      },
      company: {
        title: 'Unternehmen',
        links: ['Über uns', 'Karriere', 'Blog', 'Presse', 'Partner'],
      },
      resources: {
        title: 'Ressourcen',
        links: ['Hilfecenter', 'Dokumentation', 'API-Referenz', 'Community', 'Status'],
      },
      legal: {
        title: 'Rechtliches',
        links: ['Datenschutz', 'AGB', 'Cookie-Richtlinie', 'DSGVO', 'Compliance'],
      },
      copyright: '© 2024 LoyaWin. Alle Rechte vorbehalten.',
    },
  },
  
  vi: {
    // Navbar
    nav: {
      home: 'Trang Chủ',
      solution: 'Hệ Sinh Thái',
      products: 'Sản Phẩm',
      pricing: 'Bảng giá',
      contact: 'Liên hệ',
      login: 'Dành cho DN',
      startTrial: 'Dành cho KH',
    },
    
    // Hero
    hero: {
      badge: '🏆 Được xây dựng cho các doanh nghiệp nhỏ và trung bình tại thị trường DACH',
      title: 'Nền tảng Loyal',
      titleHighlight: 'Plug & Play',
      subtitle:
        'Tích hợp POS liền mạch. Khởi chạy chương trình khách hàng thân thiết cá nhân hóa của bạn trong 48 giờ và tăng tỷ lệ giữ chân khách hàng mà không cần lo lắng.',
      ctaPrimary: 'Dùng thử miễn phí',
      ctaSecondary: 'Xem Cách Nó Hoạt Động',
      stats: {
        stores: 'Cửa hàng hoạt động',
        members: 'Thành viên khách hàng thân thiết',
        returnRate: 'Tỷ lệ quay lại cao hơn',
      },
    },
    
    // Partners
    partners: {
      title: 'Được tin dùng bởi các thương hiệu hàng đầu toàn cầu',
    },
    
    // The Problem
    problem: {
      badge: 'VẤN ĐỀ',
      title: 'Doanh nghiệp SMEs đang mất doanh thu do công cụ giữ chân khách hàng lỗi thời',
      subtitle: 'Thẻ giấy, các công cụ doanh nghiệp quá phức tạp, và ứng dụng sụp đổ dưới áp lực thực tế đang khiến các doanh nghiệp địa phương tốn kém mỗi ngày.',
      cards: [
        {
          number: '01',
          title: 'Thẻ Giấy Thất Bại',
          description: 'Dễ bị mất, không thu thập dữ liệu khách hàng, không có tương tác kỹ thuật số. Bạn đang mù mịt về việc ai là khách hàng trung thành thực sự của bạn.',
        },
        {
          number: '02',
          title: 'Công Cụ Doanh Nghiệp Quá Phức Tạp',
          description: 'Quá đắt và quá phức tạp cho các Spa, Quán cà phê, Nhà hàng và Cửa hàng địa phương. Được xây dựng cho Fortune 500 - không phải cho các cửa hàng nhỏ.',
        },
        {
          number: '03',
          title: 'Ma Sát Vận Hành',
          description: 'Các ứng dụng khách hàng thân thiết hiện tại thất bại với các trường hợp đặc biệt hàng ngày - Trả hàng, Hoàn tiền, Lỗi nhập liệu thủ công - gây ra hàng đợi tại quầy.',
        },
      ],
    },
    
    // Features
    features: {
      badge: 'HỆ SINH THÁI',
      title: 'Hệ Sinh Thái Khách Hàng Thân Thiết "Plug & Play" Độc Lập',
      subtitle:
        'Kiến trúc tổng quát được thiết kế cho tích hợp POS liền mạch và triển khai nhanh chóng trong nhiều môi trường bán lẻ khác nhau.',
      items: [
        {
          title: 'Nền Tảng Tất Cả Trong Một',
          description:
            'Hệ thống quản lý khách hàng thân thiết hoàn chỉnh với hồ sơ khách hàng, theo dõi điểm, danh mục phần thưởng và bảng điều khiển phân tích tất cả ở một nơi.',
        },
        {
          title: 'Đơn Giản Độc Lập',
          description:
            'Triển khai độc lập với hệ thống POS của bạn. Tích hợp API đơn giản có nghĩa là bạn có thể khởi chạy mà không làm gián đoạn hoạt động hiện tại.',
        },
        {
          title: 'Hướng Dữ Liệu',
          description:
            'Phân tích thời gian thực và thông tin khách hàng giúp bạn hiểu các mẫu mua hàng, tối ưu hóa chiến dịch và tăng giá trị trọn đời.',
        },
        {
          title: 'Phù Hợp Thị Trường DACH',
          description:
            'Được xây dựng đặc biệt cho thị trường nói tiếng Đức với các phương thức thanh toán địa phương, tuân thủ GDPR và các tính năng đặc thù khu vực.',
        },
        {
          title: 'Công Nghệ PWA',
          description:
            'Progressive Web App ưu tiên di động mang đến trải nghiệm ứng dụng gốc mà không cần tải xuống từ cửa hàng ứng dụng. Hoạt động ngoại tuyến và cài đặt ngay lập tức.',
        },
        {
          title: 'Công Cụ Phiếu Giảm Giá Thông Minh',
          description:
            'Tạo phiếu giảm giá tự động, đề xuất cá nhân hóa và theo dõi đổi thưởng thông minh thúc đẩy mua lại và tương tác khách hàng.',
        },
      ],
    },

    // Platform
    platform: {
      badge: 'NỀN TẢNG',
      title: 'Một Hệ Thống Đa Điểm Tiếp Tục Hoạt Động',
      subtitle: 'Ba sản phẩm được xây dựng riêng biệt hoạt động cùng nhau - nhân viên, khách hàng và doanh nghiệp của bạn đều đồng bộ.',
      products: [
        {
          number: '01',
          title: 'Ứng Dụng Web Nhân Viên',
          subtitle: 'Mạnh Mẽ Trên Đường Trước',
          features: [
            'Kiểm tra vào dưới 3 giây bằng QR / Điện thoại',
            'Hỗ trợ chia hóa đơn, hoàn tiền & nhập liệu thủ công',
            'Nhân viên mới nắm bắt hệ thống trong 15 phút',
            'Hoạt động trên bất kỳ thiết bị nào - điện thoại thông minh, máy tính bảng, PC',
            'Hành động bảo vệ bằng mã PIN với các bản ghi kiểm toán đầy đủ',
          ],
        },
        {
          number: '02',
          title: 'Ứng Dụng Web Khách Hàng',
          subtitle: 'Tương Tác Mượt Mái',
          features: [
            'PWA - truy cập tức thì qua trình duyệt, không cần cài đặt',
            'Xem số dư điểm và tiến trình cấp bậc thời gian thực',
            'Ví Thông Minh tự động hiển thị những người tiết kiệm nhiều nhất',
            'Nhắc nhở sinh nhật & hết hạn qua thông báo',
            'Chương trình Giới thiệu & Thu nhập tích lũy sẵn có',
          ],
          highlighted: true,
        },
        {
          number: '03',
          title: 'Bảng Điều Khiển Quản Trị',
          subtitle: 'Trung Tâm Lệnh Lệnh',
          features: [
            'Đặt tỷ lệ thu nhập, quy tắc cấp bậc & chiến dịch bằng cách nhấp chuột',
            'Báo cáo về việc sử dụng phiếu giảm giá, xu hướng Thu nhập/Sử dụng',
            'Quản lý nhiều cửa hàng - từ 10 đến 100+ địa điểm',
            'Cấu hình động - không cần nhà phát triển',
            'Theo dõi tăng trưởng tài khoản mới trên tất cả các chi nhánh',
          ],
        },
      ],
    },
    
    // Killer Feature
    killerFeature: {
      badge: 'THE KILLER FEATURE',
      title: 'Sửa Lỗi & Các Trạng Thái Đặc Biệt',
      subtitle: 'Lý do các ứng dụng chung không thành công tại quầy bán hàng - và lý do LoyaWin thắng. Được xây dựng để xử lý hỗn loạn thực tế, không chỉ các đường dẫn hạnh phúc.',
      features: [
        {
          title: 'Luồng Làm Việc Hủy / Sửa',
          description: 'Quản lý sửa lỗi ngay lập tức tại quầy bán hàng. Không có sự cố hệ thống, không có sự tích lũy hàng đợi.',
        },
        {
          title: 'Logic Hoàn Tiền Mạnh Mẽ',
          description: 'Thu hồi điểm tự động và khôi phục phiếu giảm giá khi khách hàng trả lại hàng hóa hoặc hủy đơn hàng.',
        },
        {
          title: 'Bảo Mật & Dấu vết Kiểm toán',
          description: 'Hành động bảo vệ bằng mã PIN với Mã Lý do bắt buộc. Dấu vết kiểm toán đầy đủ cho mọi sửa đổi được thực hiện.',
        },
      ],
      scenarios: [
        {
          icon: 'users',
          title: 'Trạng Thái Hóa Đơn Tách',
          description: 'Bàn 4 người tại một nhà hàng Đức - mỗi người trả riêng. LoyaWin xử lý hóa đơn tách bản gốc, phân phối điểm tỷ lệ theo chi tiêu của mỗi người.',
          badge: 'Hóa đơn tách sẵn sàng',
          color: 'blue',
        },
        {
          icon: 'undo',
          title: 'Trạng Thái Trả Lại & Hoàn Tiền',
          description: 'Khách hàng trả lại sản phẩm 3 ngày sau. Điểm được thu hồi tự động, phiếu giảm giá được khôi phục, nhật ký giao dịch được cập nhật - không cần công việc thủ công.',
          badge: 'Tuân thủ Luật Người tiêu dùng EU',
          color: 'orange',
        },
        {
          icon: 'wifi-off',
          title: 'Trạng Thái Ngoại tuyến / Không có điện thoại',
          description: 'Khách hàng quên điện thoại. Nhân viên tìm kiếm bằng tên hoặc số và áp dụng điểm thủ công. Không để khách hàng nào bị bỏ lại.',
          badge: 'Hỗ trợ Nhập liệu thủ công',
          color: 'red',
        },
      ],
    },
    
    // Pricing
    pricing: {
      badge: 'BẢNG GIÁ',
      title: 'Chọn Gói Hoàn Hảo Cho Doanh Nghiệp Của Bạn',
      subtitle: 'Giá linh hoạt phát triển cùng bạn. Tất cả gói đều bao gồm các tính năng cốt lõi với bảo đảm hoàn tiền trong 30 ngày.',
      monthly: 'Hàng tháng',
      annual: 'Hàng năm',
      saveTag: 'Tiết kiệm 20%',
      standardLicense: {
        badge: 'GIẤY PHÉT TIÊN HÀNH TIÊN HÀNH',
        title: 'Mô hình "Mua Một Lần"',
        subtitle: 'Sở hữu giấy phép mãi mãi - không có tăng giá bất ngờ',
        price: '€2.000',
        period: 'Thanh toán một lần · bao gồm cửa hàng đầu tiên của bạn',
        targetTitle: 'Mục tiêu',
        targetItems: [
          'Doanh nghiệp nhỏ và chuỗi bán lẻ nhỏ đến trung bình',
          'Doanh nghiệp muốn kiểm soát chi phí vận hành dài hạn',
        ],
        expansionTitle: 'Chi Phí Mở Rộng',
        expansionItems: [
          '+€300 cho mỗi cửa hàng bổ sung',
          'Phí bảo trì €10/tháng (được tính theo năm)',
        ],
        note: 'Khách hàng sở hữu giấy phép với chi phí vận hành hàng tháng tối thiểu - đáng rẻ hơn nhiều so với SaaS truyền thống trong dài hạn.',
        cta: 'Nhận Giấy Phép →',
      },
      enterpriseCore: {
        badge: 'CORE DOANH NGHIỆP',
        popular: 'Phổ biến nhất',
        title: 'Tùy chỉnh / White-label',
        subtitle: 'Được xây dựng hoàn toàn xung quanh hệ sinh thái của bạn',
        price: 'Tùy chỉnh',
        period: 'Báo giá dự án · liên hệ với chúng tôi để được tư vấn',
        targetTitle: 'Mục tiêu',
        targetItems: [
          'Công ty lớn và thương hiệu franquia yêu cầu cách ly dữ liệu',
          'Thương hiệu muốn sở hữu hoàn toàn white-label của hệ thống',
        ],
        includesTitle: 'Bao gồm',
        includesItems: [
          'Giấy phép mã nguồn cốt lõi - sở hữu hoàn toàn',
          'Phát triển và tích hợp tùy chỉnh theo yêu cầu của bạn',
          'Triển khai máy chủ riêng tư - cách ly dữ liệu hoàn toàn',
        ],
        note: 'Quyền sở hữu dữ liệu, tùy chỉnh hoàn toàn và cách ly khỏi cơ sở hạ tầng SaaS chia sẻ.',
        cta: 'Nhận Báo Giá Miễn Phí →',
      },
      plans: [
        {
          name: 'Khởi Đầu',
          price: '49$',
          period: '/tháng',
          description: 'Hoàn hảo cho doanh nghiệp nhỏ mới bắt đầu với khách hàng thân thiết',
          features: [
            'Tối đa 1.000 thành viên hoạt động',
            'Chương trình phần thưởng cơ bản',
            'Hỗ trợ qua email',
            'Truy cập ứng dụng di động',
            'Phân tích tiêu chuẩn',
            'Một địa điểm',
          ],
          cta: 'Dùng thử miễn phí',
        },
        {
          name: 'Chuyên Nghiệp',
          price: '149$',
          period: '/tháng',
          description: 'Dành cho doanh nghiệp đang phát triển sẵn sàng mở rộng chương trình khách hàng thân thiết',
          popular: true,
          features: [
            'Tối đa 10.000 thành viên hoạt động',
            'Phần thưởng & cấp bậc nâng cao',
            'Hỗ trợ ưu tiên',
            'Thương hiệu tùy chỉnh',
            'Phân tích nâng cao',
            'Tối đa 5 địa điểm',
            'Truy cập API',
            'Kiểm thử A/B',
          ],
          cta: 'Dùng thử miễn phí',
        },
        {
          name: 'Doanh Nghiệp',
          price: 'Tùy chỉnh',
          period: '',
          description: 'Giải pháp được thiết kế riêng cho tổ chức lớn với nhu cầu đặc biệt',
          features: [
            'Thành viên không giới hạn',
            'Tùy chỉnh hoàn toàn',
            'Quản lý tài khoản chuyên dụng',
            'Giải pháp white-label',
            'Thông tin dự đoán AI',
            'Địa điểm không giới hạn',
            'Bảo đảm SLA',
            'Tích hợp tùy chỉnh',
          ],
          cta: 'Liên hệ bán hàng',
        },
      ],
    },
    
    // Testimonials
    testimonials: {
      badge: 'CÂU CHUYỆN THÀNH CÔNG',
      title: 'Kết quả thực tế từ\ \\nnhững doanh nghiệp thực tế',
      subtitle: 'Xem cách các công ty như của bạn đang chuyển đổi mối quan hệ khách hàng với LoyaWin',
      items: [
        {
          text: 'LoyaWin đã thay đổi cách chúng tôi tương tác với khách hàng. Hệ thống trực quan, nhân viên của chúng tôi học trong vài phút, và doanh thu lặp lại tăng 68% chỉ trong 4 tháng. Đầu tư tốt nhất mà chúng tôi từng thực hiện.',
          author: 'Michael Weber',
          role: 'Chủ cửa hàng · Chuỗi Café & Bánh',
          rating: 5,
        },
        {
          text: 'Cuối cùng cũng có nền tảng khách hàng thân thiết thực sự hoạt động cho doanh nghiệp nhỏ. Không có thiết lập phức tạp, không có phí ẩn. Mô hình giấy phép Mua Một Lần đã tiết kiệm cho chúng tôi hàng nghìn đô la so với thuê bao hàng tháng.',
          author: 'Anna Schmidt',
          role: 'Quản lý · Nhóm Beauty & Spa',
          rating: 5,
        },
        {
          text: 'Việc xử lý các trường hợp đặc biệt thật tuyệt vời. Chia hóa đơn, hoàn tiền, nhập liệu thủ công - mọi thứ hoạt động hoàn hảo. Quy trình thanh toán của chúng tôi nhanh hơn và khách hàng yêu thích trải nghiệm liền mạch.',
          author: 'Thomas Müller',
          role: 'Giám đốc · Nhóm Nhà hàng, 8 địa điểm',
          rating: 5,
        },
      ],
    },
    
    // Contact
    contact: {
      badge: 'LIÊN HỆ',
      title: 'Sẵn Sàng Tăng Cường Lòng Trung Thành Của Khách Hàng?',
      subtitle: 'Để lại thông tin và đội ngũ của chúng tôi sẽ liên hệ với bạn trong vòng 24 giờ\\nđể giúp bạn bắt đầu với LoyaWin',
      leftSection: {
        title: 'Nhận tư vấn miễn phí',
        description: "Đội ngũ chuyên gia của LoyaWin sẽ phân tích nhu cầu của bạn và đề xuất giải pháp khách hàng thân thiết tốt nhất phù hợp với mục tiêu kinh doanh của bạn.",
        contactDetails: [
          { label: 'Email', value: 'hello@loyawin.com' },
          { label: 'Phone', value: '+1 (800) 569-2468' },
          { label: 'Offices', value: 'San Francisco · London · Singapore' },
          { label: 'Business hours', value: 'Mon – Sat · 8:00 AM – 6:00 PM' },
        ],
        whyChooseTitle: 'Tại sao chọn LoyaWin?',
        whyChooseItems: [
          'Đội hỗ trợ chuyên dụng 24/7',
          'Triển khai và huấn luyện miễn phí',
          'Không cần thẻ tín dụng để bắt đầu',
        ],
      },
      form: {
        fullName: 'Họ và tên',
        phone: 'Số điện thoại',
        email: 'Email công việc',
        company: 'Tên công ty',
        businessType: 'Loại hình kinh doanh',
        businessTypePlaceholder: 'Khác',
        businessTypeOptions: [
          'Bán lẻ',
          'F&B / Nhà hàng',
          'Sức khỏe & Đẹp da',
          'Ô tô',
          'Khác',
        ],
        locations: 'Địa điểm',
        locationsPlaceholder: 'Chọn',
        locationsOptions: [
          '1 địa điểm',
          '2 – 5 địa điểm',
          '6 – 20 địa điểm',
          '20 – 100 địa điểm',
          '100+ địa điểm',
        ],
        planLabel: 'Gói quan tâm',
        planPlaceholder: 'Chọn gói',
        planOptions: [
          'Giấy Phép Tiêu Chuẩn (Mua Một Lần)',
          'Core Doanh Nghiệp (Tùy chỉnh / White-label)',
          'Chưa chắc chắn - cần tư vấn',
        ],
        message: 'Chúng tôi có thể giúp gì?',
        messagePlaceholder: "Nhắn cho chúng tôi biết về doanh nghiệp của bạn và những gì bạn muốn đạt được...",
        submit: 'Gửi yêu cầu của tôi →',
        successMessage: 'Đã gửi thông tin thành công!',
        placeholders: {
          fullName: 'Anna Müller',
          phone: '+49 151 000 0000',
          email: 'anna@company.de',
          company: 'Thương hiệu / công ty của bạn',
        },
      },
      info: {
        firstName: 'Tên',
        lastName: 'Họ',
        email: 'Email công việc',
        phone: 'Số điện thoại',
        company: 'Tên công ty',
        employees: 'Số lượng nhân viên',
        employeesOptions: [
          '1-10 nhân viên',
          '11-50 nhân viên',
          '51-200 nhân viên',
          '201-500 nhân viên',
          '500+ nhân viên',
        ],
        message: 'Cho chúng tôi biết về nhu cầu của bạn',
        consent: 'Tôi đồng ý nhận thông tin từ LoyaWin',
        submit: 'Gửi tin nhắn',
        sending: 'Đang gửi...',
      },
    },
    
    // CTA Band
    ctaBand: {
      title: 'Bắt Đầu Xây Dựng Mối Quan Hệ Khách Hàng Mạnh Mẽ Hơn Ngay Hôm Nay',
      subtitle: 'Tham gia 10.000+ doanh nghiệp sử dụng LoyaWin để thúc đẩy tăng trưởng',
      cta: 'Bắt đầu dùng thử miễn phí 30 ngày',
    },
    
    // Footer
    footer: {
      description: 'Biến lòng trung thành của khách hàng thành tăng trưởng bền vững với nền tảng phần thưởng thông minh của chúng tôi.',
      product: {
        title: 'Sản phẩm',
        links: ['Tính năng', 'Bảng giá', 'Bảo mật', 'Lộ trình', 'Tích hợp'],
      },
      company: {
        title: 'Công ty',
        links: ['Về chúng tôi', 'Tuyển dụng', 'Blog', 'Báo chí', 'Đối tác'],
      },
      resources: {
        title: 'Tài nguyên',
        links: ['Trung tâm trợ giúp', 'Tài liệu', 'Tham khảo API', 'Cộng đồng', 'Trạng thái'],
      },
      legal: {
        title: 'Pháp lý',
        links: ['Chính sách bảo mật', 'Điều khoản dịch vụ', 'Chính sách cookie', 'GDPR', 'Tuân thủ'],
      },
      copyright: '© 2024 LoyaWin. Mọi quyền được bảo lưu.',
    },
  },
};

export function useTranslation(language: Language) {
  return translations[language];
}