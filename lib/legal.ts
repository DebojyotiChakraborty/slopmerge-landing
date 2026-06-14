// Privacy Policy + Terms of Use copy — the real documents, transcribed from
// privacy-policy.md / terms-of-use.md (the source of truth). These are rendered
// by <LegalPage>, which understands the lightweight inline markup used in the
// block text below: **bold**, *italic*, `code`, [label](/route or url), bare
// URLs, and emails. Keep `LAST_UPDATED` in sync with the dates in the sources.

export const LAST_UPDATED = "June 14, 2026";
export const CONTACT = "dev.debojyotichakraborty@gmail.com";
export const DEV_SITE = "https://debojyoticodes.in";

export type LegalBlock =
  | { type: "p"; text: string }
  | { type: "h3"; text: string }
  | { type: "ul"; items: string[] };

export type LegalSection = { h: string; blocks: LegalBlock[] };

export type LegalDoc = {
  title: string;
  intro: LegalBlock[];
  sections: LegalSection[];
  /** Closing small-print disclaimer, rendered italic + muted. */
  footer?: string;
};

// Block constructors — keep the document literals below readable.
const p = (text: string): LegalBlock => ({ type: "p", text });
const h3 = (text: string): LegalBlock => ({ type: "h3", text });
const ul = (...items: string[]): LegalBlock => ({ type: "ul", items });

export const PRIVACY: LegalDoc = {
  title: "Privacy Policy",
  intro: [
    p(`**Last updated:** June 14, 2026 · **Effective date:** June 14, 2026`),
    p(`This Privacy Policy explains how the **SlopMerge** mobile game ("SlopMerge", the "App", "we", "us", or "our") handles information when you use it. SlopMerge is developed and operated by **Debojyoti** ("the Developer"), an independent developer.`),
    p(`By downloading, installing, or using the App, you agree to the practices described in this Privacy Policy. If you do not agree, please do not use the App.`),
    ul(
      `**App name:** SlopMerge`,
      `**Application ID:** \`com.debojyoti.slop_merge\``,
      `**Platforms:** Android (Google Play) and iOS`,
      `**Contact:** dev.debojyotichakraborty@gmail.com`,
      `**Developer website:** https://debojyoticodes.in`,
    ),
  ],
  sections: [
    {
      h: "1. Summary (the short version)",
      blocks: [
        ul(
          `SlopMerge is a single-player puzzle game. **You do not need an account** to play.`,
          `The App **does not collect, transmit, or sell your personal information** for its core gameplay.`,
          `All of your game data — settings, high scores, in-game coins, and power-ups — is **stored only on your own device**.`,
          `We **do not** currently use analytics, crash reporting, tracking, or advertising.`,
          `**We may add advertising in a future version.** If and when we do, advertising partners (such as Google AdMob) may collect device and usage information as described in **Section 6**. We will update this Policy and our Google Play Data safety disclosures before that happens, and ask for your consent where the law requires it.`,
        ),
      ],
    },
    {
      h: "2. Information We Collect",
      blocks: [
        h3(`2.1 Information you provide`),
        p(`SlopMerge does **not** ask you to create an account or to provide your name, email address, phone number, date of birth, or any other personal details. We do not operate a sign-in, profile, chat, or social feature.`),
        h3(`2.2 Information stored locally on your device`),
        p(`The App saves the following data **on your device only**, using your operating system's standard local storage (Android \`SharedPreferences\` / iOS \`NSUserDefaults\`). This data is **not** sent to us or to any server:`),
        ul(
          `**Game settings** — sound effects on/off, background music on/off and volume, haptics on/off, character voice call-outs on/off, and your last selected game mode.`,
          `**Scoreboard** — your local high scores, including the score value, the game mode played, and the date/time each score was achieved (stored as a timestamp on your device).`,
          `**Coin wallet** — your balance of virtual in-game coins.`,
          `**Power-ups / consumables** — your owned and daily-free counts of in-game items (e.g., pop, shake, revive) and the time they were last refreshed.`,
        ),
        p(`This information never leaves your device through the App, and we have no ability to access it. **Uninstalling the App permanently deletes all of this data.**`),
        h3(`2.3 Information collected automatically`),
        p(`For its core gameplay, SlopMerge does **not** automatically collect usage analytics, device identifiers, advertising identifiers, location, or diagnostic/crash data, and the production (release) build does **not** request the Internet permission for these purposes.`),
        p(`This will change **only** if advertising is enabled in a future version — see **Section 6**.`),
      ],
    },
    {
      h: "3. How We Use Information",
      blocks: [
        p(`Because the App stores data only on your device, that data is used solely to:`),
        ul(
          `remember your preferences and settings between sessions;`,
          `keep track of your high scores, coins, and power-ups;`,
          `run and personalize your local single-player experience.`,
        ),
        p(`We do not use this information for advertising, profiling, or any purpose outside the App.`),
      ],
    },
    {
      h: "4. Third-Party Services and Features",
      blocks: [
        p(`SlopMerge integrates a small number of platform features. These are operated by Apple and Google, not by us, and are governed by their own privacy policies.`),
        h3(`4.1 In-App Review`),
        p(`The App can ask you to rate it using the **native Google Play / Apple App Store in-app review** feature. This is provided by the operating system; we do not receive your review, your identity, or any data through it. Your rating is handled by Google or Apple under their policies.`),
        h3(`4.2 Opening external links`),
        p(`The App can open external web pages and store pages in your browser or the relevant app store — for example, the App's store listing, the Developer's website, this Privacy Policy, and the Terms of Use. When you open such a link, the destination service (e.g., your browser, Google Play, or the website) may process information under its own privacy policy. The App itself does not transmit personal data when launching these links.`),
        h3(`4.3 App distribution`),
        p(`SlopMerge is distributed through the **Google Play Store** and may be distributed through the **Apple App Store**. When you download, install, or update the App, the relevant store may collect information (such as your account, device, and purchase or download records) under **Google's** and **Apple's** own privacy policies. We do not control this.`),
      ],
    },
    {
      h: "5. In-Game Purchases and Virtual Items",
      blocks: [
        p(`The current version of SlopMerge uses **virtual coins** that are earned through gameplay and spent on consumable power-ups. These coins and items have **no real-world monetary value**, cannot be exchanged for money, and exist only within your installation of the App.`),
        p(`If a future version introduces **real-money in-app purchases**, those transactions will be processed by **Google Play Billing** or **Apple's App Store**, not by us. We would not receive or store your full payment card details; the relevant store processes payment information under its own privacy policy. We may receive a confirmation that a purchase occurred. We will update this Policy before enabling any such purchases.`),
      ],
    },
    {
      h: "6. Advertising (applies if and when ads are enabled)",
      blocks: [
        p(`SlopMerge **does not currently display ads** and does not include any advertising SDK. We may introduce advertising in a future version to support the App. **This section describes how advertising will work if and when we enable it.** When we do, we will update this Policy's "Last updated" date and our Google Play Data safety section accordingly.`),
        h3(`6.1 Ad provider`),
        p(`We expect to use **Google AdMob** (the Google Mobile Ads SDK) and, potentially, other ad networks that AdMob mediates. Ad formats may include banner, interstitial (full-screen), and rewarded ads (where you choose to watch an ad in exchange for an in-game reward).`),
        h3(`6.2 What advertising partners may collect`),
        p(`When ads are enabled, the ad SDK and the ad networks it works with may collect and process information directly from your device, including:`),
        ul(
          `**Advertising identifiers** (e.g., the Android Advertising ID / Google Advertising ID, or Apple's identifier for advertisers where applicable);`,
          `**Device and technical information** — IP address, device model, operating system version, language, network/connection information, and similar diagnostics;`,
          `**Ad-interaction and app-activity data** — which ads were shown, viewed, clicked, or completed, and basic in-app actions related to ads;`,
          `**Approximate (coarse) location** derived from the above (not precise GPS location).`,
        ),
        p(`This information may be used to serve and measure ads, to personalize ads (where permitted), to limit how often you see the same ad, to detect fraud and abuse, and for analytics and reporting. The ad networks act as independent controllers of this data and process it under their own privacy policies, including:`),
        ul(
          `**Google / AdMob:** https://policies.google.com/privacy and https://support.google.com/admob/answer/6128543 (how Google uses information from sites or apps that use its services).`,
        ),
        h3(`6.3 Personalized vs. non-personalized ads, and your consent`),
        p(`Where required by law — including for users in the **European Economic Area (EEA)**, the **United Kingdom**, and **Switzerland** — we will present a consent request (using a Google-certified Consent Management Platform such as Google's **User Messaging Platform**) **before** personalized ads are served, and you will be able to **accept, decline, or later change** your choice. If you decline, you may still see **non-personalized ads**, which rely on contextual rather than behavioral data.`),
        h3(`6.4 Your controls`),
        p(`You can limit ad tracking at the device level at any time:`),
        ul(
          `**Android:** Settings → Google → Ads → *Delete advertising ID* or *Opt out of Ads Personalization*.`,
          `**iOS:** Settings → Privacy & Security → Tracking, and Settings → Privacy & Security → Apple Advertising.`,
        ),
        h3(`6.5 Children and ads`),
        p(`SlopMerge is **not directed to children under 13** (see **Section 8**). If we serve ads, we will configure the ad SDK so that **personalized ads and advertising-ID collection are not used for children or users of unknown age**, consistent with Google Play Families policy and applicable children's privacy laws.`),
      ],
    },
    {
      h: "7. Data Sharing, Selling, and Transfers",
      blocks: [
        ul(
          `We **do not sell** your personal information.`,
          `We **do not share** your personal information with third parties for the core gameplay, because the App does not collect it.`,
          `The **only** circumstances in which device/usage data leaves your device are: (a) advertising, **if enabled** (Section 6); (b) platform features operated by Google and Apple (Sections 4 and 5); and (c) where required to comply with the law (Section 10).`,
        ),
        p(`If advertising is enabled, advertising partners may process the data described in Section 6 on servers located in countries other than your own, including the United States. Those transfers are governed by the partners' own safeguards and privacy policies.`),
      ],
    },
    {
      h: "8. Children's Privacy",
      blocks: [
        p(`SlopMerge is intended for a **general audience and is not directed to children under the age of 13** (or the equivalent minimum age in your country, such as 16 in parts of the EEA). We do not knowingly collect personal information from children.`),
        ul(
          `The core App collects no personal information from anyone, including children.`,
          `If advertising is enabled, it will be configured to avoid personalized ads and advertising-ID use for children and users of unknown age (Section 6.5).`,
        ),
        p(`If you believe a child has provided us with personal information, or if you are a parent or guardian with concerns, please contact us at **dev.debojyotichakraborty@gmail.com** and we will take appropriate action.`),
      ],
    },
    {
      h: "9. Your Privacy Rights",
      blocks: [
        p(`Depending on where you live, you may have rights under laws such as the EU/UK **GDPR**, the **California Consumer Privacy Act (CCPA/CPRA)**, and similar regulations, including the right to access, correct, delete, or restrict the processing of your personal information, and the right to opt out of the "sale" or "sharing" of personal information and of targeted advertising.`),
        ul(
          `**Data we hold:** For the core App, we hold **no** personal information about you on our systems, so there is generally nothing for us to access, export, or delete on our side. All your in-App data lives on your device and you can delete it at any time by clearing the App's data or uninstalling the App.`,
          `**Advertising data:** If ads are enabled, you can exercise choices through the in-App consent prompt (EEA/UK/Switzerland) and your device's advertising controls (Section 6.4), and you may direct requests regarding ad data to the relevant ad network using the links in Section 6.2.`,
          `**Requests to us:** You may contact us at **dev.debojyotichakraborty@gmail.com** with any privacy request or question, and we will respond as required by applicable law. We will not discriminate against you for exercising your rights.`,
        ),
      ],
    },
    {
      h: "10. Legal Disclosure",
      blocks: [
        p(`We may disclose information if required to do so by law, regulation, legal process, or enforceable governmental request, or where we believe in good faith that disclosure is necessary to protect our rights, your safety or the safety of others, or to investigate fraud. Because the core App does not collect personal data, such disclosure would, in practice, only relate to information processed by the platform or advertising providers described above.`),
      ],
    },
    {
      h: "11. Data Security",
      blocks: [
        p(`We rely on the security provided by your device's operating system and by the Google and Apple platforms. Because game data is stored locally on your device, its security is tied to the security of your device. No method of electronic storage or transmission is completely secure, and we cannot guarantee absolute security.`),
      ],
    },
    {
      h: "12. Data Retention",
      blocks: [
        p(`Locally stored game data remains on your device until you delete it (by clearing the App's data or uninstalling the App). We do not retain copies of it. Any data processed by Google, Apple, or advertising partners is retained according to **their** retention policies.`),
      ],
    },
    {
      h: "13. Changes to This Privacy Policy",
      blocks: [
        p(`We may update this Privacy Policy from time to time — for example, when we add advertising, analytics, or in-app purchases. When we make material changes, we will update the "Last updated" date above and, where appropriate, provide a more prominent notice within the App or on the store listing. Your continued use of the App after an update means you accept the revised Policy. We encourage you to review this page periodically.`),
      ],
    },
    {
      h: "14. Contact Us",
      blocks: [
        p(`If you have any questions, concerns, or requests regarding this Privacy Policy or your information, please contact:`),
        p(`**Debojyoti** — Developer of SlopMerge`),
        p(`Email: **dev.debojyotichakraborty@gmail.com**`),
        p(`Website: https://debojyoticodes.in`),
      ],
    },
  ],
  footer: `This document is provided for transparency and to meet app-store and legal requirements. It is not legal advice. For a binding assessment of your specific obligations under GDPR, CCPA, COPPA, the DPDP Act, or other laws, consult a qualified attorney.`,
};

export const TERMS: LegalDoc = {
  title: "Terms of Use",
  intro: [
    p(`**Last updated:** June 14, 2026 · **Effective date:** June 14, 2026`),
    p(`These Terms of Use ("Terms") are a legal agreement between you ("you" or "your") and **Debojyoti** ("the Developer", "we", "us", or "our") governing your use of the **SlopMerge** mobile game and all related content and services (collectively, the "App").`),
    p(`**By downloading, installing, or using the App, you agree to be bound by these Terms and by our [Privacy Policy](/privacy). If you do not agree, do not download, install, or use the App.**`),
    ul(
      `**App name:** SlopMerge`,
      `**Application ID:** \`com.debojyoti.slop_merge\``,
      `**Contact:** dev.debojyotichakraborty@gmail.com`,
      `**Website:** https://debojyoticodes.in`,
    ),
  ],
  sections: [
    {
      h: "1. Eligibility and Age",
      blocks: [
        p(`SlopMerge is intended for a **general audience and is not directed to children under 13**. You may use the App only if you are old enough to form a binding contract in your jurisdiction. If you are a minor, you may use the App only with the involvement and consent of a parent or legal guardian, who agrees to be bound by these Terms on your behalf. By using the App you confirm that you meet these requirements.`),
      ],
    },
    {
      h: "2. License to Use the App",
      blocks: [
        p(`Subject to these Terms, we grant you a **personal, limited, non-exclusive, non-transferable, non-sublicensable, revocable license** to download and use one copy of the App on a device that you own or control, solely for your own personal, non-commercial entertainment.`),
        p(`Your use of the App is also subject to the rules of the platform you obtained it from — the **Google Play Terms of Service** and/or the **Apple Media Services Terms and Conditions** (including Apple's "Licensed Application End User License Agreement"). If these Terms conflict with the applicable platform terms, the platform terms govern the relationship between you and that platform.`),
      ],
    },
    {
      h: "3. Restrictions",
      blocks: [
        p(`You agree **not** to, and not to allow others to:`),
        ul(
          `copy, modify, adapt, translate, or create derivative works of the App;`,
          `reverse engineer, decompile, disassemble, or attempt to derive the source code of the App, except to the extent this restriction is prohibited by applicable law;`,
          `rent, lease, lend, sell, sublicense, distribute, or otherwise commercially exploit the App;`,
          `remove, alter, or obscure any copyright, trademark, or other proprietary notices;`,
          `use cheats, automation software, bots, mods, hacks, memory editors, or any unauthorized third-party software to modify or interfere with the App, its scoring, its virtual economy, or its intended operation;`,
          `circumvent, disable, or interfere with security-related features, or features that restrict use or copying of content;`,
          `use the App for any unlawful purpose or in violation of these Terms or any applicable law or regulation.`,
        ),
      ],
    },
    {
      h: "4. Virtual Items and In-Game Currency",
      blocks: [
        p(`The App may include **virtual coins**, **power-ups/consumables**, and other virtual items (collectively, "Virtual Items") that you can earn through gameplay or, in a future version, purchase.`),
        ul(
          `Virtual Items are licensed to you for use within the App only. You **do not own** them, and they have **no monetary value** and cannot be redeemed for real money, goods, or anything of value outside the App.`,
          `Virtual Items are stored on your device. **If you uninstall the App, clear its data, lose your device, or change devices, your Virtual Items and progress may be permanently lost.** We do not provide cloud backup or account recovery for this data.`,
          `We may manage, regulate, modify, or remove Virtual Items at any time, including changing how they are earned, priced, or spent, with or without notice.`,
          `Except where required by law, all purchases of Virtual Items (if and when paid purchases are offered) are **final and non-refundable**. Refund requests for paid purchases are handled by **Google Play** or the **Apple App Store** under their respective refund policies, not by us.`,
        ),
      ],
    },
    {
      h: "5. In-App Purchases (if offered)",
      blocks: [
        p(`The current version of the App offers only Virtual Items earned through gameplay. A future version may offer **real-money in-app purchases**, which would be processed by **Google Play Billing** or **Apple's App Store**. By making such a purchase you agree to the applicable store's payment terms. We are not responsible for the platform's billing, taxes, or payment processing.`),
      ],
    },
    {
      h: "6. Advertising",
      blocks: [
        p(`The App does not currently display advertising. A **future version may include advertisements** (for example, banner, interstitial, or rewarded ads served via Google AdMob) to support continued development. If ads are added:`),
        ul(
          `your use of advertising features is subject to these Terms and to the [Privacy Policy](/privacy) (see its Advertising section);`,
          `**rewarded ads** are optional — you choose whether to watch them in exchange for in-game rewards;`,
          `we are **not responsible** for the content of third-party advertisements, or for any websites, products, or services they promote. Your interactions with advertisers are solely between you and the advertiser.`,
        ),
      ],
    },
    {
      h: "7. Intellectual Property",
      blocks: [
        p(`The App and all of its content — including its code, design, graphics, characters, audio, music, text, and the "SlopMerge" name and logo — are owned by the Developer or its licensors and are protected by copyright, trademark, and other intellectual-property laws. Except for the limited license granted in Section 2, no rights are transferred to you. All rights not expressly granted are reserved.`),
      ],
    },
    {
      h: "8. Updates and Availability",
      blocks: [
        p(`We may release updates, bug fixes, or new versions of the App, and we may modify, suspend, or discontinue the App (or any feature of it) at any time, with or without notice. We do not guarantee that the App will always be available, uninterrupted, error-free, or compatible with your device or operating-system version. You are responsible for any device, data, or network charges incurred while using the App.`),
      ],
    },
    {
      h: "9. User Conduct",
      blocks: [
        p(`You agree to use the App only for its intended, lawful purpose. You are solely responsible for your use of the App and for any consequences of attempting to tamper with the App, its scoring, or its virtual economy.`),
      ],
    },
    {
      h: "10. Disclaimer of Warranties",
      blocks: [
        p(`**THE APP IS PROVIDED "AS IS" AND "AS AVAILABLE", WITHOUT WARRANTIES OF ANY KIND, WHETHER EXPRESS, IMPLIED, OR STATUTORY.** To the fullest extent permitted by law, we disclaim all warranties, including the implied warranties of merchantability, fitness for a particular purpose, title, and non-infringement, and any warranty that the App will be uninterrupted, secure, error-free, or free of harmful components. You use the App at your own risk. Some jurisdictions do not allow the exclusion of certain warranties, so some of the above exclusions may not apply to you.`),
      ],
    },
    {
      h: "11. Limitation of Liability",
      blocks: [
        p(`**TO THE FULLEST EXTENT PERMITTED BY LAW, IN NO EVENT WILL THE DEVELOPER BE LIABLE FOR ANY INDIRECT, INCIDENTAL, SPECIAL, CONSEQUENTIAL, OR PUNITIVE DAMAGES, OR FOR ANY LOSS OF PROFITS, DATA, GOODWILL, GAME PROGRESS, OR VIRTUAL ITEMS, ARISING OUT OF OR RELATED TO YOUR USE OF OR INABILITY TO USE THE APP**, whether based on warranty, contract, tort (including negligence), or any other legal theory, even if we have been advised of the possibility of such damages.`),
        p(`To the fullest extent permitted by law, our total aggregate liability for all claims relating to the App will not exceed the greater of (a) the total amount you paid us, if any, for the App in the twelve (12) months before the claim, or (b) **USD 5.00**. Some jurisdictions do not allow certain limitations of liability, so some of the above may not apply to you. Nothing in these Terms limits liability that cannot be limited under applicable law.`),
      ],
    },
    {
      h: "12. Indemnification",
      blocks: [
        p(`To the extent permitted by law, you agree to indemnify, defend, and hold harmless the Developer from and against any claims, liabilities, damages, losses, and expenses (including reasonable legal fees) arising out of or related to your misuse of the App, your violation of these Terms, or your violation of any law or the rights of any third party.`),
      ],
    },
    {
      h: "13. Third-Party Services",
      blocks: [
        p(`The App relies on services provided by third parties, including Google and Apple (app distribution, in-app review, and, if enabled, billing and advertising). We are not responsible for the acts, omissions, content, or policies of those third parties. Your use of their services is governed by their own terms and policies.`),
      ],
    },
    {
      h: "14. Termination",
      blocks: [
        p(`These Terms remain in effect while you use the App. We may suspend or terminate your license to use the App at any time if you violate these Terms or for any other reason permitted by law. You may end this agreement at any time by ceasing all use of the App and uninstalling it. Sections that by their nature should survive termination — including Intellectual Property, Disclaimers, Limitation of Liability, Indemnification, and Governing Law — will survive.`),
      ],
    },
    {
      h: "15. Governing Law and Disputes",
      blocks: [
        p(`These Terms are governed by the laws of **India**, without regard to its conflict-of-laws rules, and, where applicable, by the mandatory consumer-protection laws of your country of residence. Subject to those mandatory laws, you agree that the courts located in **India** will have jurisdiction over any dispute arising out of or relating to these Terms or the App. Nothing in this section deprives you of the protection of mandatory consumer-protection provisions of the law of the country where you live.`),
      ],
    },
    {
      h: "16. Apple-Specific Terms",
      blocks: [
        p(`If you obtained the App from the Apple App Store, you acknowledge that: these Terms are between you and the Developer only, not Apple; Apple has no obligation to provide maintenance or support for the App; in the event of any failure of the App to conform to any applicable warranty, you may notify Apple and Apple will refund the purchase price (if any), and to the maximum extent permitted by law Apple has no other warranty obligation; the Developer (not Apple) is responsible for addressing any claims relating to the App or your use of it; and Apple and its subsidiaries are third-party beneficiaries of these Terms and may enforce them against you.`),
      ],
    },
    {
      h: "17. Changes to These Terms",
      blocks: [
        p(`We may update these Terms from time to time. When we make material changes, we will update the "Last updated" date above and, where appropriate, provide notice within the App or on the store listing. Your continued use of the App after the changes take effect constitutes your acceptance of the revised Terms.`),
      ],
    },
    {
      h: "18. Severability and Entire Agreement",
      blocks: [
        p(`If any provision of these Terms is held to be invalid or unenforceable, that provision will be limited or removed to the minimum extent necessary, and the remaining provisions will remain in full force and effect. These Terms, together with the [Privacy Policy](/privacy), constitute the entire agreement between you and the Developer regarding the App and supersede any prior agreements.`),
      ],
    },
    {
      h: "19. Contact Us",
      blocks: [
        p(`For any questions about these Terms, contact:`),
        p(`**Debojyoti** — Developer of SlopMerge`),
        p(`Email: **dev.debojyotichakraborty@gmail.com**`),
        p(`Website: https://debojyoticodes.in`),
      ],
    },
  ],
  footer: `This document is provided for transparency and to meet app-store and legal requirements. It is not legal advice. For a binding assessment of your specific obligations, consult a qualified attorney.`,
};
