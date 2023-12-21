import React, { Component } from "react";
import NewsItem from "./NewsItem";
import Spinner from "./Spinner";

export class News extends Component {
  articles = [
    {
      source: {
        id: null,
        name: "India Today",
      },
      author: "India Today Science Desk",
      title:
        "Lets ketchup: Nasa releases pictures of tomatoes lost in space for eight months - India Today",
      description:
        "Despite being nearly a year after the initial disappearance of the tomatoes, the fruit was found in a plastic bag dehydrated and slightly squished.",
      url: "https://www.indiatoday.in/science/story/lets-ketchup-nasa-releases-pictures-of-tomatoes-lost-in-space-for-eight-months-2477289-2023-12-18",
      urlToImage:
        "https://akm-img-a-in.tosshub.com/indiatoday/images/story/202312/space-tomatoes-sealed-in-plastic-181050656-16x9_0.jpg?VersionId=m2npDEIYGhFC8uMomdhkWRnRS5RqpVQy",
      publishedAt: "2023-12-18T06:37:15Z",
      content:
        "Nasa has released images of two elusive tomatoes that had gone missing aboard the International Space Station (ISS) nearly a year ago. \r\nThe tomatoes were part of an experiment conducted by astronaut… [+1901 chars]",
    },
    {
      source: {
        id: null,
        name: "News18",
      },
      author: "Buzz Staff",
      title:
        "Watch: When NASA's Parker Solar Probe Ventured Close To Sun Without Incinerating - News18",
      description: "The Sun is the hottest star in our solar system.",
      url: "https://www.news18.com/viral/watch-when-nasas-parker-solar-probe-ventured-close-to-sun-without-incinerating-8708052.html",
      urlToImage:
        "https://images.news18.com/ibnlive/uploads/2023/12/untitled-design-2023-12-18t110635.823-2023-12-f3fd698365903d22e70f032923b58348-16x9.jpg?impolicy=website&width=1200&height=675",
      publishedAt: "2023-12-18T06:22:22Z",
      content:
        "The temperature at the surface of the Sun is about 5,600 degrees Celsius, and it rises from the surface towards the extremely hot core, reaching temperatures of about 15 million degrees Celsius. This… [+1806 chars]",
    },
    {
      source: {
        id: null,
        name: "Hindustan Times",
      },
      author: "HT Tech",
      title:
        "Garena Free Fire Redeem Codes for December 18: Nab Agent Hop for FREE! Know how to get it - HT Tech",
      description:
        "Garena Free Fire Redeem Codes for December 18: Spice up your character in Garena Free Fire with skins, weapon skins, emotes, and more! Check out Garena Free Fire Redeem Codes for December 18 and know how to claim freebies.",
      url: "https://tech.hindustantimes.com/how-to/garena-free-fire-redeem-codes-for-december-18-nab-agent-hop-for-free-know-how-to-get-it-71702874531596.html",
      urlToImage:
        "https://images.hindustantimes.com/tech/img/2023/12/18/1600x900/471353a5e6056457abb5f2c7ea2cef1bjpg_1655167581277_1702874604828.jpg",
      publishedAt: "2023-12-18T05:27:06Z",
      content:
        "Garena Free Fire Redeem Codes for December 18: With the Winter season now in full swing, the developers of Garena Free Fire have rolled out several Winter-themed events in the game. These events brin… [+2825 chars]",
    },
    {
      source: {
        id: null,
        name: "NDTV News",
      },
      author: null,
      title:
        "British Teen Missing For 6 Years Returns. Here's What He Told Authorities - NDTV",
      description:
        "Alex Batty, a British teen who went missing six years ago while on holiday, was found in France earlier this week.",
      url: "https://www.ndtv.com/world-news/alex-batty-british-teen-missing-for-6-years-returns-heres-what-he-told-authorities-4694970",
      urlToImage:
        "https://c.ndtvimg.com/2023-12/frc9hqpo_alex-batty_625x300_15_December_23.jpeg",
      publishedAt: "2023-12-18T05:25:13Z",
      content:
        "Alex was found by a delivery driver in a mountainous area of southern France\r\nAlex Batty, a British teen who went missing six years ago while on holiday, was found in France earlier this week. As per… [+2620 chars]",
    },
    {
      source: {
        id: null,
        name: "NDTV News",
      },
      author: null,
      title:
        "Why Congress Will Collect Rs 138, Rs 1,380, Rs 13,800 In Crowdfunding Drive - NDTV",
      description:
        "When you depend on rich people, you have to follow their policies, Congress president Mallikarjun Kharge said today at the launch of the party's Donate for Desh campaign to raise funds ahead of the general election due next year.",
      url: "https://www.ndtv.com/india-news/mallikarjun-kharge-congress-donate-for-desh-campaign-when-you-depend-on-rich-congress-crowdfunding-drive-for-2024-polls-4694969",
      urlToImage:
        "https://c.ndtvimg.com/2023-12/k57k7kl_congress-kharge_625x300_18_December_23.jpg",
      publishedAt: "2023-12-18T05:21:13Z",
      content:
        "The campaign was launched by Congress chief Mallikarjun Kharge in Delhi\r\nNew Delhi: When you depend on rich people, you have to follow their policies, Congress president Mallikarjun Kharge said today… [+4089 chars]",
    },
    {
      source: {
        id: null,
        name: "NDTV News",
      },
      author: null,
      title:
        "Anti-Terror Agency Raids 19 Locations Across 4 States In ISIS Network Case - NDTV",
      description:
        'The anti-terror agency NIA raided 19 locations across four states this morning in connection with the ISIS network case todayand busted a "highly radicalised jihadi terror group".',
      url: "https://www.ndtv.com/india-news/anti-terror-raids-underway-in-karnataka-delhi-maharashtra-jharkhand-in-isis-terror-network-case-4694899",
      urlToImage:
        "https://c.ndtvimg.com/2023-09/eutev5a_nia-interrogated-ravindra-for-5-hours-in-hanumangarh_625x300_27_September_23.jpg?im=FeatureCrop,algorithm=dnn,width=650,height=400",
      publishedAt: "2023-12-18T05:05:54Z",
      content:
        'New Delhi: The anti-terror agency NIA raided 19 locations across four states this morning in connection with the ISIS network case today and busted a "highly radicalised jihadi terror group".\r\nThe ra… [+666 chars]',
    },
    {
      source: {
        id: null,
        name: "Livemint",
      },
      author: "Livemint",
      title:
        "Chennai Weather Live Updates: Heavy rains lashes Tamil Nadu; School colleges shut today | Mint - Mint",
      description:
        "Chennai Weather Live Updates: After a stormy beginning with heavy rainfall in December, Tamil Nadu (and parts of Kerala) are set to receive another episode of heavy rainfall over next two days. According to IMD Chennai, parts of Tamil Nadu are likely to witne…",
      url: "https://www.livemint.com/news/india/chennai-weather-live-updates-tamil-nadu-news-kerala-heavy-rainfall-imd-weather-updates-orange-alert-rain-alert-11702804286062.html",
      urlToImage:
        "https://www.livemint.com/lm-img/img/2023/12/17/1600x900/Tamil_Nadu_rains_live_update_1702804322947_1702804323322.jpg",
      publishedAt: "2023-12-18T04:23:57Z",
      content:
        "Chennai Weather Live Updates: The Indian Meteorological Department (IMD) has predicted heavy to very heavy rainfall over Tamil Nadu and Kerala during the next 2-3 days. As per IMD Chennai, heavy to v… [+18806 chars]",
    },
    {
      source: {
        id: null,
        name: "Hindustan Times",
      },
      author: "HT Sports Desk",
      title:
        "'When a successful captain leaves…': Gavaskar on Hardik's 'shock' return to MI - Hindustan Times",
      description:
        "Sunil Gavaskar called Hardik Pandya's return to Mumbai Indians 'shocking' ahead of IPL 2024. | Cricket",
      url: "https://www.hindustantimes.com/cricket/sunil-gavaskar-explains-hardik-pandyas-shock-return-to-mumbai-indians-for-ipl-2024-101702872398694.html",
      urlToImage:
        "https://www.hindustantimes.com/ht-img/img/2023/12/18/1600x900/gavaskar-pandya-rohit-getty-pti_1702872707107_1702872714209.jpg",
      publishedAt: "2023-12-18T04:20:07Z",
      content:
        "Hardik Pandya's return to the Mumbai Indians continues to stir the pot with every passing day. The prodigal all-rounder's switch to the joint-most successful IPL franchise of all time last month led … [+3027 chars]",
    },
    {
      source: {
        id: null,
        name: "Greater Kashmir",
      },
      author: "SHABIR IBN YUSUF",
      title:
        "CERT-In issues high-risk warning for Apple, Samsung users - greaterkashmir - Greater Kashmir",
      description:
        "Says vulnerabilities can put users’ sensitive information at risk",
      url: "https://www.greaterkashmir.com/tech/cert-in-issues-high-risk-warning-for-apple-samsung-users/",
      urlToImage:
        "https://www.greaterkashmir.com/wp-content/uploads/2023/08/iphone_830480_1280.jpg",
      publishedAt: "2023-12-18T04:10:54Z",
      content:
        "Srinagar, Dec 17: The Indian Computer Emergency Response Team (CERT-In) has flagged severe vulnerabilities in Apple and Samsung product users and said that the vulnerabilities could put users’ sensit… [+2505 chars]",
    },
    {
      source: {
        id: null,
        name: "Hindustan Times",
      },
      author: "HT Tech",
      title:
        "Apollo group asteroid to come as close as 2.3 mn km to Earth, says NASA; Check size, speed - HT Tech",
      description:
        "An Apollo group Near-Earth Asteroid is set to pass Earth today, December 18, NASA has revealed. Know about its speed, size, distance of approach, and more, as per the space agency.",
      url: "https://tech.hindustantimes.com/tech/news/apollo-group-asteroid-to-come-as-close-as-2-3-mn-km-to-earth-says-nasa-check-size-speed-71702872525798.html",
      urlToImage:
        "https://images.hindustantimes.com/tech/img/2023/12/18/1600x900/wikimedia_commons_1673950232106_1702872588610.jpg",
      publishedAt: "2023-12-18T04:10:32Z",
      content:
        "Nearly 298148 asteroids have been discovered to date by NASA, which uses its advanced ground and space-based telescopes and satellites including the NEOWISE telescope, Pans-STARRS1, and Catalina Sky … [+1793 chars]",
    },
    {
      source: {
        id: null,
        name: "Koimoi",
      },
      author: "Jishika Madaan",
      title:
        "Dunki Box Office Day 1 Advance Booking (3 Days To Go): Shah Rukh Khan Starrer Moving In The Right Direction, To Hit The 5 Crore Milestone Soon! - Koimoi",
      description:
        "Shah Rukh Khan led Dunki is witnessing an exponential growth in advance booking collections. Read latest update now!",
      url: "https://www.koimoi.com/box-office/dunki-box-office-day-1-advance-booking-3-days-to-go-shah-rukh-khan-starrer-moving-in-the-right-direction-to-hit-the-5-crore-milestone-soon/",
      urlToImage:
        "https://static-koimoi.akamaized.net/wp-content/new-galleries/2023/12/dunki-box-office-day-1-advance-booking-3-days-to-go-shah-rukh-khans-film-grows-001.jpg",
      publishedAt: "2023-12-18T04:06:39Z",
      content:
        "Dunki Box Office Day 1 Advance Booking Updates!(Photo Credit IMDb)\r\nThe countdown has begun, and we can only imagine the pressure on Shah Rukh Khan right now. Dunki will be released on December 21, 2… [+2188 chars]",
    },
    {
      source: {
        id: null,
        name: "Hindustan Times",
      },
      author: "HT News Desk",
      title:
        "Car collides with President Joe Biden's motorcade in US' Delaware - Hindustan Times",
      description:
        "The collision occurred as Joe Biden and First Lady Jill Biden left an event with campaign staff. Both of them were unharmed. | World News",
      url: "https://www.hindustantimes.com/world-news/car-crashes-into-joe-bidens-security-detail-in-delaware-101702865016239.html",
      urlToImage:
        "https://www.hindustantimes.com/ht-img/img/2023/12/18/1600x900/Joe_Biden_1702865444780_1702865445131.jpg",
      publishedAt: "2023-12-18T03:46:37Z",
      content:
        "A car collided with part of US President Joe Bidens motorcade in Delaware's Wilmington on Sunday. The collision occurred as Biden and first lady Jill Biden left an event with campaign staff. Both of … [+2136 chars]",
    },
    {
      source: {
        id: null,
        name: "Livemint",
      },
      author: "Livemint",
      title:
        "Ambuja Cements to invest ₹6,000 crore in Green Power; targets capacity of 1,000 mw | Mint - Mint",
      description:
        "With lower cost of generation from green power, the power cost of Ambuja Cements will come down from  ₹6.46 per kWh to  ₹5.16 per kWh. A reduction of  ₹1.30 per kWh (20%) translates into  ₹90 PMT of cement for targeted capacity of 140 MTPA by FY 2028.",
      url: "https://www.livemint.com/companies/news/ambuja-cements-to-invest-rs-6-000-crore-in-green-power-11702870610268.html",
      urlToImage:
        "https://www.livemint.com/lm-img/img/2023/12/18/1600x900/ambuja--621x414_1702871999189.jpg",
      publishedAt: "2023-12-18T03:41:10Z",
      content:
        "Ambuja Cements, the Adani Group cement and building material company, has committed a significant investment of 6,000 crore in renewable power projects, targeting a capacity of 1,000 MW.  The investm… [+2094 chars]",
    },
    {
      source: {
        id: null,
        name: "Hindustan Times",
      },
      author: "HT News Desk",
      title:
        "Morning briefing: Maharashtra BJP leaders wary after CM picks; all latest news - Hindustan Times",
      description:
        "A shortlist of the biggest headlines, recommended stories, and a special collection of news items you should check out. | Latest News India",
      url: "https://www.hindustantimes.com/india-news/morning-briefing-maharashtra-bjp-leaders-wary-after-cm-picks-sharad-pawar-on-retirement-call-all-latest-news-101702867043031.html",
      urlToImage:
        "https://www.hindustantimes.com/ht-img/img/2023/12/18/1600x900/maharashtra_bjp_wary_over_new_cm_picks_1702868278964_1702869503554.jpg",
      publishedAt: "2023-12-18T03:20:13Z",
      content:
        "The recent selection of chief ministers in Madhya Pradesh, Rajasthan, and Chhattisgarh by the BJP's top leadership has caused concern within the Maharashtra BJP. The consistent pattern of sidelining … [+5233 chars]",
    },
    {
      source: {
        id: null,
        name: "Telangana Today",
      },
      author: "Telangana Today",
      title:
        "Tension at Annapurna Studios after Big Boss 7 Telugu winner declaration - Telangana Today",
      description:
        "A huge crowd was gathered outside the Annapurna studio where the final round of Big Boss 7 season was held. Soon after Pallavi Prashanth was declared the winner celebrations broke out.",
      url: "https://telanganatoday.com/tension-at-annapurna-studios-after-big-boss-7-telugu-winner-declaration",
      urlToImage:
        "https://cdn.telanganatoday.com/wp-content/uploads/2023/12/car-damage.jpg",
      publishedAt: "2023-12-18T03:15:27Z",
      content: null,
    },
    {
      source: {
        id: "the-times-of-india",
        name: "The Times of India",
      },
      author: "etimes.in",
      title:
        "Bigg Boss 17: Munawar Faruqui goes through a mental breakdown after Ayesha Khan accuses him of double dat - Times of India",
      description:
        "Ayesha confronts Munawar in the Bigg Boss Archive room about his relationship with gf Nazila and accuses him of double dating. Munawar apologizes for",
      url: "https://timesofindia.indiatimes.com/tv/news/hindi/bigg-boss-17-munawar-faruqui-goes-through-a-mental-breakdown-after-ayesha-khan-accuses-him-of-double-dating-says-if-bigg-boss-opens-the-door-ill-walk-out/articleshow/106069498.cms",
      urlToImage:
        "https://static.toiimg.com/thumb/msid-106069495,width-1070,height-580,imgsize-22632,resizemode-75,overlay-toi_sw,pt-32,y_pad-40/photo.jpg",
      publishedAt: "2023-12-18T02:30:00Z",
      content:
        "Ajwain garlic oil: Perfect remedy for cough, cold and chest congestion",
    },
    {
      source: {
        id: null,
        name: "BBC News",
      },
      author: null,
      title:
        "\"Only India Have...\": England Great's Damning Take After Pakistan's Loss Against Australia - NDTV Sports",
      description:
        "Pakistan were defeated comprehensively by Australia in the first Test match in Perth on Sunday.",
      url: "http://www.bbc.com/news/world-us-canada-39324587",
      urlToImage:
        "https://c.ndtvimg.com/2023-12/c7pftf7g_sdad_625x300_17_December_23.jpg?im=FaceCrop,algorithm=dnn,width=1200,height=675",
      publishedAt: "2023-12-18T02:27:33Z",
      content:
        "Former England captain Michael Vaughan said that India is the only side that looks likely to compete against Australia in Australian conditions. Vaughan's comments came after Pakistan were defeated c… [+2122 chars]",
    },
    {
      source: {
        id: null,
        name: "Livemint",
      },
      author: "Asit Manohar",
      title:
        "Muthoot Microfin IPO opens today. GMP, subscription status, price, other details. Buy or not? | Mint - Mint",
      description:
        "Muthoot Microfin IPO GMP: Shares of the microfinance company are available at a premium of  ₹82 in grey market today, say market observers",
      url: "https://www.livemint.com/market/ipo/muthoot-microfin-ipo-opens-today-gmp-subscription-status-price-other-details-buy-or-not-11702865350055.html",
      urlToImage:
        "https://www.livemint.com/lm-img/img/2023/12/18/1600x900/Muthoot_Microfin_IPO_GMP_subscription_status_1702865648068_1702865648249.JPG",
      publishedAt: "2023-12-18T02:21:06Z",
      content:
        "Muthoot Microfin IPO: The initial public offering (IPO) of Muthoot Microfin Limited has opened today and it will remain open till 20th December 2023 i.e. till Wednesday this week. This means, Muthoot… [+4717 chars]",
    },
    {
      source: {
        id: "the-times-of-india",
        name: "The Times of India",
      },
      author: "TIMESOFINDIA.COM",
      title:
        "Big Breaking! Underworld don Dawood Ibrahim poisoned in Pakistan? Hospitalised in Karachi under tight security - Times of India",
      description:
        "Underworld don Dawood Ibrahim has reportedly been hospitalized in Karachi, where he is being kept under stringent security measures, according to undisclosed sources. The notorious figure, known for his criminal activities, has been under medical car",
      url: "https://timesofindia.indiatimes.com/videos/toi-original/big-breaking-underworld-don-dawood-ibrahim-poisoned-in-pakistan-hospitalised-in-karachi-under-tight-security/videoshow/106072770.cms",
      urlToImage:
        "https://timesofindia.indiatimes.com/photo/msid-106072770,imgsize-47302.cms",
      publishedAt: "2023-12-18T02:19:33Z",
      content:
        "Dec 18, 2023, 07:54AM ISTSource: TOI.inUnderworld don Dawood Ibrahim has reportedly been hospitalized in Karachi, where he is being kept under stringent security measures, according to undisclosed so… [+594 chars]",
    },
    {
      source: {
        id: null,
        name: "Livemint",
      },
      author: "ANI",
      title:
        "Covid is on the rise as…: WHO alerts ‘virus still changing, evolving’ as JN.1 subvariant cases surge | Mint - Mint",
      description:
        "The World Health Organization (WHO) has called for strong surveillance and sequence sharing as the virus evolves and new COVID sub-variants emerge.",
      url: "https://www.livemint.com/news/world/covid-is-on-the-rise-as-who-alerts-virus-still-changing-evolving-as-jn-1-subvariant-cases-surges-11702865050415.html",
      urlToImage:
        "https://www.livemint.com/lm-img/img/2023/12/18/1600x900/Maria_Van_Kerkhove_1642945246081_1702865800098.JPG",
      publishedAt: "2023-12-18T02:17:01Z",
      content:
        "In the wake of the surge in respiratory diseases and new JN.1 COVID sub-variant, the World Health Organisation (WHO) said that the virus is evolving and changing and urged the member states to contin… [+4624 chars]",
    },
  ];

  constructor() {
    super();
    this.state = {
      articles: this.articles,
      loading: false,
      page: 1,
    };
  }
  async componentDidMount() {
    this.setState({loading: true})
    let url = `https://newsapi.org/v2/top-headlines?country=${this.props.country}&category=${this.props.category}&apiKey=e32ff3e9c3644c4d872297067e2183c3&page=1&pageSize=${this.props.pageSize}`;
    let data = await fetch(url);
    let parseData = await data.json();
    this.setState({
      articles: parseData.articles,
      totalResults: parseData.totalResults,
      loading: false
    });
  }

  clickPrev = async () => {
    this.setState({loading: true})
    let url = `https://newsapi.org/v2/top-headlines?country=${this.props.country}&category=${this.props.category}&apiKey=e32ff3e9c3644c4d872297067e2183c3&page=${
      this.state.page - 1
    }&pageSize=${this.props.pageSize}`;
    let data = await fetch(url);
    let parseData = await data.json();
    this.setState({
      articles: parseData.articles,
      page: this.state.page - 1,
      loading: false
    });
  };

  clickNext = async () => {
    this.setState({loading: true})
    let url = `https://newsapi.org/v2/top-headlines?country=${this.props.country}&category=${this.props.category}&apiKey=e32ff3e9c3644c4d872297067e2183c3&page=${
      this.state.page + 1
    }&pageSize=${this.props.pageSize}`;
    this.setState({ loading: false });
    if (
      this.state.page + 1 >
      Math.ceil(this.state.totalResults / this.props.pageSize)
    ) {
    } else {
      let data = await fetch(url);
      let parseData = await data.json();
      this.setState({
        articles: parseData.articles,
        page: this.state.page + 1,
        loading: false
      });
    }
  };

  render() {
    return (
      <div className="container my-3">
        <h1 className="text-center">Top News - {this.props.category.charAt(0).toUpperCase() + this.props.category.slice(1)}</h1>
        {this.state.loading && <Spinner />}
        <div className="row">
          {!this.state.loading && this.state.articles.map((element) => {
            const randomString = Math.random().toString(36).substring(2, 7);
            return (
              <div className="col-md-3 my-3" key={randomString}>
                <NewsItem
                  title={element.title ? element.title : ""}
                  description={element.description ? element.description : ""}
                  url={element.url ? element.url : ""}
                  imageUrl={
                    element.urlToImage
                      ? element.urlToImage
                      : "https://www.tastingtable.com/img/gallery/more-than-240-sushi-restaurant-patrons-complain-of-illness/l-intro-1702860488.jpg"
                  }
                  author={element.author}
                  date={element.publishedAt}
                  source={element.source.name}
                />
              </div>
            );
          })}
        </div>
        <div className="container d-flex justify-content-between">
          <button
            type="button"
            disabled={this.state.page <= 1}
            className="btn btn-dark"
            onClick={this.clickPrev}
          >
            &larr; Previous
          </button>
          <button
            type="button"
            disabled={
              (this.state.page + 1 >
              Math.ceil(this.state.totalResults / this.props.pageSize) || this.state.totalResults <= 0)
            }
            className="btn btn-dark"
            onClick={this.clickNext}
          >
            Next &rarr;
          </button>
        </div>
      </div>
    );
  }
}

export default News;
