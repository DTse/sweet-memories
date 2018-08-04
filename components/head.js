import NextHead from 'next/head'
import { string } from 'prop-types'

const defaultDescription = 'H ομάδα του «Sweet Memory» θα πραγματοποιήσει οποιαδήποτε ανάγκη και «κρυφό» σας θέλω αφήνοντας την κάθε σας στιγμή, ανεξίτηλη στο χρόνο!!!'
const defaultOGURL = 'https://sweet-memory.gr/'
const defaultOGImage = 'https://sweet-memory.gr/static/images/large-image.jpg'
const defaultTitle = 'Sweet Memory | Γάμος, Βάπτιση, Bachelor, Events!'

const Head = (props) => (
  <NextHead>
    <meta charset="UTF-8" />
    <title>{props.title || defaultTitle}</title>
    <meta name="description" content={props.description || defaultDescription} />
    <link rel="apple-touch-icon" sizes="180x180" href="/static/apple-touch-icon.png"/>
    <link rel="icon" type="image/png" sizes="32x32" href="/static/favicon-32x32.png"/>
    <link rel="icon" type="image/png" sizes="194x194" href="/static/favicon-194x194.png"/>
    <link rel="icon" type="image/png" sizes="192x192" href="/static/android-chrome-192x192.png"/>
    <link rel="icon" type="image/png" sizes="16x16" href="/static/favicon-16x16.png"/>
    <link rel="manifest" href="/static/site.webmanifest"/>
    <link rel="mask-icon" href="/static/safari-pinned-tab.svg" color="#a88888"/>
    <meta name="msapplication-TileColor" content="#ffffff"/>
    <meta name="msapplication-TileImage" content="/static/mstile-144x144.png"/>
    <meta name="theme-color" content="#ffffff"/>
    <link rel="icon" href="/static/favicon.ico" />
    <meta property="og:url" content={props.url || defaultOGURL} />
    <meta property="og:title" content={props.title || ''} />
    <meta property="og:description" content={props.description || defaultDescription} />
    <meta name="twitter:site" content={props.url || defaultOGURL} />
    <meta name="twitter:card" content="summary_large_image" />
    <meta name="twitter:image" content={props.ogImage || defaultOGImage} />
    <meta property="og:image" content={props.ogImage || defaultOGImage} />
    <meta property="og:image:width" content="1200" />
    <meta property="og:image:height" content="630" />
    <meta name="og:site_name" content= "Sweet Memory"/>
    <meta name="subject" content= "Γάμος, Βάπτιση, Bachelor, Events" />
    <meta name="language" content="el_GR"/>
    <meta name="robots" content="index,follow"/>
    <meta name="Classification" content="Business"/>
    <meta name="author" content= "Sweet Memory, info@sweet-memory.gr"/>
    <meta name="designer" content="Δημήτρης Τσετσώνης"/>
    <meta name="copyright" content= "Sweet Memory 2018"/>
    <meta name="viewport" content="width=device-width,initial-scale=1.0, maximum-scale=1.0,shrink-to-fit=no,user-scalable=no"/>
    <link href="/static/css/App.css" rel="stylesheet" />
    <script defer="defer" src="/static/modernizr.js"></script>
    <link prefetch href="https://fonts.googleapis.com/css?family=Comfortaa:300&amp;subset=greek" rel="stylesheet" />
    <link prefetch href="https://use.fontawesome.com/releases/v5.0.13/css/all.css" integrity="sha384-DNOHZ68U8hZfKXOrtjWvjxusGo9WQnrNx2sqG0tfsghAvtVlRW3tvkXWZh58N9jp" crossorigin="anonymous" rel="stylesheet" />
     <script type="application/ld+json">{`
                                {
                                    "@context": "http://schema.org",
                                    "@type": "LocalBusiness",
                                    "contactPoint": [
                                        { "@type": "ContactPoint",
                                          "telephone": " +30-698-943-3978",
                                          "contactType": "sales"
                                        }
                                      ],
                                    "description": "${props.description || defaultDescription}",
                                    "name": "Sweet Memory",
                                    "image": "${defaultOGImage}",
                                    "telephone": "+30-210-3224460",
                                    "openingHours": "Mo,Tu,We,Th,Fr 09:00-21:00",
                                    "@id": "https://sweet-memory.gr/",
                                    "url": "https://sweet-memory.gr//",
                                    "inLanguage": "el",
                                    "sameAs" : [ 
                                        "https://instagram.com/sweetmemoryevents",
                                        "https://www.facebook.com/sweetmemoryevents"
                                    ]
                                }
                            `}</script>
  </NextHead>
)

Head.propTypes = {
  title: string,
  description: string,
  url: string,
  ogImage: string
}

export default Head
