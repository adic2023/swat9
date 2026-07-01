import { useEffect } from 'react'
import Layout from '../Layout'
import flag from '../assets/flag.png'

const DEMANDS = [
  'Drop the charges against the Michigan 8',
  'Drop the charges against the Minneapolis 15',
  'Drop the charges against the Stanford 5',
  'Drop the charges against Mohamad Hamad and Muhammad Ali',
  'Free the Prairieland 8',
]

const SIGNERS = [
  'Charlotte Britt',
  'Jace Boland',
  'Mara Cahill',
  'Brendan Cook',
  'Daria Dressler',
  'Thomas Falcone',
  'Winona Malcarney',
  'Andrew Thomas',
]

export default function Statement({ dark, setDark }) {
  useEffect(() => {
    const prev = dark
    setDark(true)
    return () => setDark(prev)
  }, [])

  return (
    <Layout dark={dark} setDark={setDark}>
      <article className="stmt">
        <header className="stmt-head">
          <p className="stmt-eyebrow">A Statement by Members of the Swarthmore 9</p>
          <h1 className="stmt-title">The Next Chapter of Our Struggle</h1>
          <div className="stmt-rule" />
        </header>

        <div className="stmt-body">
          <p>
            <span className="stmt-leadin">In the 14 months</span> since we were arrested,
            Swarthmore College has refused to concede an inch, willing to see us convicted rather
            than consider divestment from Cisco Systems. This weekend, after intense discussion, the
            Swarthmore 9 narrowly voted to take a second offer from the DA: a summary offense with
            similar conditions to the diversion program we were offered last summer. We rejected the
            first offer in the hopes of exposing Swarthmore's investments in genocide and its
            repression of pro-Palestine organizing, and in this we succeeded.
          </p>
          <p>
            Despite our commitment to unity, this was an incredibly difficult and far from unanimous
            decision. We are deeply grateful for the outpouring of support in solidarity with our
            case. The community's work in pressuring the DA and condemning Swarthmore's repression
            and complicity only strengthens our upcoming fight for divestment and an end to the
            genocide. As we took a deal similar to the first, we cannot say this offer is a result of
            the pressure we built. Rather, this highlights the challenging position that repression
            places us in: many of us felt that we had no good options, an all-too-common experience
            for those trapped in the legal system. In taking this deal, we are able to avoid
            probation or jail time, and thus can more rapidly rejoin the most important work –
            fighting for a free Palestine and a liberated world.
          </p>
          <p>
            We are lucky that we had this choice. Political repression across the country is
            intensifying and many comrades are facing brutal charges with no similar out. Defendants
            in the Prairieland case have been sentenced to a total 450 years in prison on trumped-up
            charges, after a sham trial where the judge and prosecutor declared their desire to crush
            political dissent. There are more sentences upcoming, and appeals are likely to follow.
          </p>

          <blockquote className="stmt-pull">
            Where there is repression, there is always resistance, from Palestine to Prairieland.
          </blockquote>

          <p>
            3 weeks ago, FBI agents and police arrested activists as part of a federal case targeting
            pro-Palestine organizing at U Michigan, and now 8 activists face federal charges carrying
            decades in prison. The state is taking benign statements and actions out of context to
            conjure a conspiracy out of thin air, much like Prairieland. In the Twin Cities, 15 have
            been indicted for "impeding or injuring federal agents" for their courageous work
            monitoring ICE and Border Patrol.
          </p>
          <p>
            In Pittsburgh, Mohamad Hamad, a 24-year-old Lebanese-American activist and former Penn
            State student, has been imprisoned for 14 months. The government has weaponized racist,
            Islamophobic rhetoric to justify his pre-trial incarceration, and subjected him to strip
            searches, solitary confinement, and lockdowns. Another student, Muhammad Ali, was expelled
            from U Pittsburgh and faces felonies threatening up to 34 years in prison. At Stanford,
            students face felonies from a 2024 sit-in against Stanford's investments in genocide.
            Their case was maliciously politicized, leading to a mistrial and the dismissal of the DA,
            but their legal battle is ongoing. All 5 of these cases mark a terrifying escalation in
            political repression, and require our utmost attention and support. Our website will be
            updated with resources on them in the coming weeks.
          </p>
          <p>
            These cases paint both a terrifying and inspiring picture – the imperialist state is
            working to destroy any movement that stands up against it. But, where there is repression,
            there is always resistance, from Palestine to Prairieland. Repression shows that they are
            terrified of us overthrowing empire once and for all. To our comrades in Texas, Minnesota,
            California, Pittsburgh, Michigan, and beyond: Take heart, and do not lose hope. Your fight
            is our fight, and we stand in unwavering solidarity with you.
          </p>
          <p>
            It is vital that we learn to fight this repression, and to be inspired by and join with
            those who take up the fight against empire, no matter the cost. To all our supporters:
            this is the end of our battle, but still the beginning of the war. All the effort you have
            given our case should be redoubled and turned back against Swarthmore and its bloodstained
            investments; and in support of our comrades facing repression. The powerful movement we
            built for our case cannot vanish with this plea – <strong className="stmt-emph">we call on
            you to train your guns on the Zionist entity and the imperialist state, until we are all
            free.</strong>
          </p>
        </div>

        <section className="stmt-demands" aria-label="Our demands">
          <p className="stmt-demands-label">We demand</p>
          <ul className="stmt-demands-list">
            {DEMANDS.map((demand, i) => (
              <li
                key={demand}
                className={`stmt-demand${i === DEMANDS.length - 1 ? ' stmt-demand--climax' : ''}`}
              >
                {demand}
              </li>
            ))}
          </ul>
        </section>

        <footer className="stmt-sign">
          <p className="stmt-sign-lead">With deep gratitude, and eternal solidarity,</p>
          <img className="stmt-sign-flag" src={flag} alt="" />
          <p className="stmt-sign-org">Members of the Swarthmore 9</p>
          <ul className="stmt-signers">
            {SIGNERS.map((name) => (
              <li key={name} className="stmt-signer">{name}</li>
            ))}
          </ul>
        </footer>
      </article>
    </Layout>
  )
}
