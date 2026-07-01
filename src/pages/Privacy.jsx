import Layout from '../Layout'

const CONTACT = 'contact@swarthmore9.com'

export default function Privacy({ dark, setDark }) {
  return (
    <Layout dark={dark} setDark={setDark}>
      <div className="masthead-wrap">
        <h1 className="masthead">
          Privacy Policy
          <span className="masthead-sub">HOW WE HANDLE YOUR INFORMATION</span>
        </h1>
        <div className="masthead-rule" />
      </div>

      <div className="prose policy">
        <p className="policy-updated">Last updated: July 1, 2026</p>

        <p>
          This site is run by supporters of the Swarthmore 9. We collect as little personal
          information as we can, and we treat what we do collect with care — especially because
          this is a space for people organizing against repression. This policy explains, in plain
          terms, what we collect, why, who it reaches, and the choices and rights you have.
        </p>

        <h2 className="policy-heading">What we collect</h2>
        <p>
          We only collect information you choose to give us, plus a small amount your browser sends
          automatically:
        </p>
        <ul className="policy-list">
          <li>
            <strong>Pledge signatures.</strong> When you sign the pledge, we collect the name,
            professional title, and institutional affiliation you enter, submitted through our forms
            provider, JotForm.
          </li>
          <li>
            <strong>Email address.</strong> If you join the mailing list or sign up for court
            support, we collect your email address (and, for court support, the dates you select).
          </li>
          <li>
            <strong>Technical logs.</strong> Like most websites, our host records basic technical
            data such as IP address, browser type, and pages requested, for security and to keep the
            site running.
          </li>
        </ul>
        <p>
          We do not use advertising trackers, and we do not ask for any information we don't need.
        </p>

        <h2 className="policy-heading">Why we collect it</h2>
        <p>
          We use this information only to: publish the public list of pledge signatories; send you
          case updates and court-support reminders you asked for; respond to you when you contact us;
          and keep the site secure and working. We do not use your information for any unrelated
          purpose.
        </p>

        <h2 className="policy-heading">The choices you have</h2>
        <p>
          Giving us your information is always voluntary. The mailing list is opt-in, and every
          email we send includes a way to unsubscribe. You can withdraw your consent or opt out of
          any further collection or processing at any time by emailing <a href={`mailto:${CONTACT}`}>{CONTACT}</a>.
        </p>

        <h2 className="policy-heading">Your right to be forgotten</h2>
        <p>
          You can ask us to delete your personal information — including removing your name from the
          public signatory list — and we will do so promptly. Just email <a href={`mailto:${CONTACT}`}>{CONTACT}</a> and we
          will confirm once it's done.
        </p>

        <h2 className="policy-heading">Keeping your information correct</h2>
        <p>
          If any information we hold about you is wrong or out of date, you can ask us to correct it
          and we will update it. If you tell us a signature was submitted in error or with a mistake,
          we will fix or remove it.
        </p>

        <h2 className="policy-heading">Transparency</h2>
        <p>
          You have the right to know what personal information we hold about you and how it is being
          handled. Email us and we will tell you what we have and, where we can, provide a copy.
        </p>

        <h2 className="policy-heading">Who your information reaches</h2>
        <p>
          Your pledge signature (name, title, and affiliation) is published on this site for anyone
          to see — that public visibility is the point of the pledge. Behind the scenes, a limited
          set of service providers process data on our behalf: <strong>Netlify</strong> hosts the
          site and handles mailing-list and court-support form submissions, and <strong>JotForm</strong> processes
          pledge submissions. These providers act under their own privacy terms and only for the
          purposes above. We do not otherwise share your information with anyone.
        </p>

        <h2 className="policy-heading">We do not sell your data</h2>
        <p>
          We do not sell, rent, trade, or otherwise release your personal information to third
          parties for money or marketing. Your data has never been sold and never will be.
        </p>

        <h2 className="policy-heading">Deidentification</h2>
        <p>
          Email addresses collected for the mailing list and court support are kept private and are
          never published. Where we report on support — for example, counts of signatories or
          attendees — we use aggregated numbers rather than identifying individuals. The signatory
          list intentionally shows professional identity, because that is what signing a public
          pledge means; nothing beyond what you enter there is made public.
        </p>

        <h2 className="policy-heading">How we protect it</h2>
        <p>
          The site is served over encrypted HTTPS connections, and submissions are transmitted and
          stored through reputable providers that use industry-standard security. We limit access to
          submitted data to the organizers who need it. No system is perfectly secure, but we take
          reasonable technical and organizational measures to guard against unauthorized or malicious
          access.
        </p>

        <h2 className="policy-heading">How long we keep it</h2>
        <p>
          We keep personal information only as long as it is needed for the purpose it was given.
          Signatures remain published until you ask us to remove them or the campaign concludes.
          Mailing-list details are kept until you unsubscribe. Technical server logs are retained only
          for a short period by our host. When information is no longer needed, we delete it.
        </p>

        <h2 className="policy-heading">Requests from law enforcement</h2>
        <p>
          We are mindful that people using this site are organizing against state repression. We do
          not volunteer your information to law enforcement. We will disclose personal data only when
          we are legally compelled to, we will scrutinize any such demand and push back where it is
          overbroad or improper, and we will notify affected people whenever we are lawfully able to.
        </p>

        <h2 className="policy-heading">Accountability</h2>
        <p>
          We consider ourselves responsible for protecting your information regardless of where you
          live, and we aim to honor the rights described here — including those under laws such as the
          GDPR and the CCPA — for everyone. If you believe we have mishandled your data or fallen
          short of this policy, contact us at <a href={`mailto:${CONTACT}`}>{CONTACT}</a> and we will address it. You also have
          the right to complain to your local data protection authority.
        </p>

        <h2 className="policy-heading">Access and functionality</h2>
        <p>
          You can read everything on this site — the statement, timeline, press, and all other
          pages — without giving us any personal information. Declining to share data never blocks
          your access to the site's content. Naturally, some actions require the relevant detail to
          work: we can't add you to the mailing list without an email, list you as a signatory without
          your name, or send a court-support reminder without knowing you want one. Outside of those
          specific opt-in features, opting out costs you nothing.
        </p>

        <h2 className="policy-heading">Changes and contact</h2>
        <p>
          If we make meaningful changes to this policy, we will update the date above. For any
          question, request, or concern about your privacy, reach us at <a href={`mailto:${CONTACT}`}>{CONTACT}</a>.
        </p>
      </div>
    </Layout>
  )
}
