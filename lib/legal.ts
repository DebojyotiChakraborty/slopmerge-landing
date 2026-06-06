// Privacy Policy + Terms of Use copy. Ported verbatim from sm-legal.jsx.
//
// TODO(user): this is realistic *placeholder* legal copy. It MUST be reviewed by
// a human / legal team, and the governing-law jurisdiction (Terms §10) filled in,
// before launch. Keep `LAST_UPDATED` in sync with any edits.
//
// Note: the reference Privacy §2 listed "difficulty" among stored settings; the
// game no longer has difficulty levels, so that word is intentionally removed.

export const LAST_UPDATED = "June 6, 2026";
export const CONTACT = "hello@slopmerge.app";
export const DEV_SITE = "debojyoticodes.in";

export type LegalSection = { h: string; p: string };
export type LegalDoc = {
  title: string;
  intro: string;
  sections: LegalSection[];
};

export const PRIVACY: LegalDoc = {
  title: "Privacy Policy",
  intro:
    "SlopMerge is built to be instant, offline-first, and low-drama — and our approach to your data is the same. This policy explains what little we collect, why, and the control you keep over it. (Placeholder copy — replace with your reviewed legal text before launch.)",
  sections: [
    {
      h: "1. The Short Version",
      p: "We don't make you sign up, we don't sell your data, and your game progress lives on your device. There is no SlopMerge account and no central profile of you.",
    },
    {
      h: "2. Information Stored on Your Device",
      p: "Your high scores, selected mode, and settings (sound, music volume, haptics, and voice callouts) are saved locally on your device using standard on-device storage. This stays on your phone and is not transmitted to us.",
    },
    {
      h: "3. Information We May Receive",
      p: "If you download SlopMerge from an app store, that store may share aggregate, non-identifying install and crash statistics with the developer under its own terms. We may also use privacy-respecting analytics to understand how the game is played so we can make it better.",
    },
    {
      h: "4. Permissions",
      p: "SlopMerge requests only what gameplay needs — for example, audio output for sound effects and music, and optional haptics. We do not request your contacts, location, camera, or microphone.",
    },
    {
      h: "5. Third-Party Services",
      p: "The game uses on-device text-to-speech to read character names aloud and your app store for downloads, ratings, and any future purchases. These services are governed by their own privacy policies, which we encourage you to review.",
    },
    {
      h: "6. Children’s Privacy",
      p: "SlopMerge is suitable for a general audience and does not knowingly collect personal information from children. Because gameplay data stays on-device and no account is created, no personal profile is built.",
    },
    {
      h: "7. Your Choices",
      p: "You can clear your scores and reset preferences at any time from the in-game settings, or by uninstalling the app, which removes all locally stored data. You may also opt out of optional analytics where your platform provides that control.",
    },
    {
      h: "8. Changes to This Policy",
      p: "We may update this policy as the game evolves. Material changes will be reflected here with a revised “last updated” date, and where required, surfaced in the app.",
    },
    {
      h: "9. Contact",
      p: "Questions about privacy? Reach the developer at hello@slopmerge.app or via debojyoticodes.in. We’re happy to help.",
    },
  ],
};

export const TERMS: LegalDoc = {
  title: "Terms of Use",
  intro:
    "By dropping your first character, you agree to these terms. They keep SlopMerge fun and fair for everyone. (Placeholder copy — replace with your reviewed legal text before launch.)",
  sections: [
    {
      h: "1. Acceptance of Terms",
      p: "By downloading, installing, or playing SlopMerge, you agree to be bound by these Terms of Use. If you do not agree, please don’t install or use the game.",
    },
    {
      h: "2. Your License to Play",
      p: "We grant you a personal, non-exclusive, non-transferable, revocable license to install and play SlopMerge for your own non-commercial entertainment on devices you own or control.",
    },
    {
      h: "3. Acceptable Use",
      p: "Don’t reverse-engineer, decompile, cheat, tamper with scores, distribute modified builds, or use the game in any unlawful way. Basically: merge in good faith.",
    },
    {
      h: "4. Virtual Items & Purchases",
      p: "SlopMerge may offer optional in-game items or features in the future. Any such items are licensed, not sold, have no real-world value, and are non-refundable except where required by law or store policy.",
    },
    {
      h: "5. Intellectual Property",
      p: "The SlopMerge name, logo, characters, artwork, audio, and code are owned by the developer and protected by applicable laws. The playful “brainrot” characters are original works created for this game.",
    },
    {
      h: "6. User Conduct & Availability",
      p: "We aim to keep the game running smoothly but provide it on an “as available” basis. Features, characters, and modes may change, and the game may be updated or temporarily unavailable.",
    },
    {
      h: "7. Disclaimers",
      p: "SlopMerge is provided “as is,” without warranties of any kind. It is a game; it may cause excessive replaying, competitive merging, and the occasional shout of “stack overflow!” Play responsibly.",
    },
    {
      h: "8. Limitation of Liability",
      p: "To the fullest extent permitted by law, the developer is not liable for any indirect, incidental, or consequential damages arising from your use of, or inability to use, SlopMerge.",
    },
    {
      h: "9. Termination",
      p: "We may suspend or terminate your access if you breach these terms. You may stop using SlopMerge at any time by uninstalling it.",
    },
    {
      h: "10. Governing Law",
      p: "These terms are governed by the laws of the developer’s jurisdiction, without regard to conflict-of-law principles. Insert your governing jurisdiction here before launch.",
    },
    {
      h: "11. Changes & Contact",
      p: "We may revise these terms from time to time; continued play means you accept the updates. Questions? Contact hello@slopmerge.app.",
    },
  ],
};
