//import Link from 'next/link'
import React, { Component } from 'react';
//import baptistika from '../images/categories/baptistika.png';

import '../App.css';

import Footer from '../components/footer';

import root from 'window-or-global';
import Header from '../components/header';

var initialIndex = Math.round((root.innerWidth - 10) / 300)-1

export default class Index extends Component {
    constructor(props){
        super(props)
        this.state={
            index: initialIndex
        };
    }

    scrollThumbs = (i) => {
		this.setState({ index: i <=initialIndex ? initialIndex : i > 16 ? initialIndex : i });
		this.refs[i <=initialIndex ? 0 : i > 16 ? 0 : (i-1)].scrollIntoView({ block: 'center', behavior: 'smooth',  inline: "center" });
	}

	render() {
		return (
			<div >
                <Header />
				<div id="three-grid">
					<div className="left" />
					<div className="first-right" />
					<div className="two-right" />
				</div>
				<div className="description-wrapper">
					<div className="home-description">
						Η στιγμή σας έφτασε!!! Είναι η μέρα του γάμου σας! Η βάπτιση του παιδιού σας! Είναι η μέρα που
						οι κόποι σας αναγνωρίστηκαν και παίρνετε προαγωγή! Η ομάδα του «Sweet Memory» θα πραγματοποιήσει
						οποιαδήποτε ανάγκη και «κρυφό» σας θέλω αφήνοντας αυτή σας τη στιγμή, ανεξίτηλη στο χρόνο!!! Η
						ομάδα μας αναλαμβάνει εξ ‘ ολοκλήρου το γάμο σας, ένα baby shower, την προετοιμασία και τη
						δεξίωση της βάπτισης του μωρού σας, το παιδικό του party, που θα μείνει αξέχαστο σε εκείνο και
						στους φίλους του, ακόμα και εταιρικές εκδηλώσεις. Μαζί με τους επαγγελματίες μας και ένα εύρος
						μοναδικών παροχών που σας περιμένει να επιλέξετε, από χειροποίητες μπομπονιέρες, Drone, που θα
						απαθανατίσουν τις στιγμές σας, πυροτεχνήματα, επαγγελματικό νυφικό μακιγιάζ, animateur για
						παιδικά party, μέχρι και παραδοσιακά σκάφη, σας περιμένουμε να δημιουργήσουμε μαζί, για
						οποιοδήποτε event θέλετε, πάνω στο στυλ σας. Με την εγγύηση πως θα ανακλάται η προσωπική σας
						πινελιά και το γούστο σας σε ένα πρωτότυπο αποτέλεσμα. Η πιο γλυκιά σας ανάμνηση, σας περιμένει,
						όχι μόνο να την αναπολείτε, αλλά και να τη ζήσετε σαν να ήταν παραμύθι...
					</div>
				</div>
				<div id="large-image" />
				<div className="services">
					<h2>Οι Υπηρεσίες μας</h2>
					<div className="home-services">
                        <span onClick={() => { this.scrollThumbs(this.state.index - 1) }} className="scrollSpanLeft"><i className="fas fa-angle-left"></i></span>
						<ul>
							<div ref={0} className="services-menu" style={{ backgroundImage: `url(/static/images/categories/gamos.jpg?webp)` }}>
								<li><a>Στολισμός Γάμου</a></li>
							</div>
							<div ref={1} className="services-menu" style={{ backgroundImage: `url(/static/images/categories/vaftisos.jpg?webp)` }}>
								<li><a>Στολισμός Βάπτισης</a></li>
							</div>
							<div ref={2} className="services-menu" style={{ backgroundImage: `url(/static/images/categories/babyshower.jpg?webp)` }}>
								<li><a>Baby Shower</a></li>
							</div>
							<div ref={3} className="services-menu" style={{ backgroundImage: `url(/static/images/categories/paidika-parti.jpg?webp)` }}>
								<li><a>Παιδικά Πάρτυ</a></li>
							</div>
							<div ref={4} className="services-menu" style={{ backgroundImage: `url(/static/images/categories/candybar.jpg?webp)` }}>
								<li><a>Candybar</a></li>
							</div>
							<div ref={5} className="services-menu" style={{ backgroundImage: `url(/static/images/categories/set-vaft.jpg?webp)` }}>
								<li><a>Χειροποίητα Σέτ Βαπτιστικών</a></li>
							</div>
							<div ref={6} className="services-menu" style={{ backgroundImage: `url(/static/images/categories/polyteli-skafi.jpg?webp)` }}>
								<li><a>Πολυτελή αυτοκίνητα & παραδοσιακά σκάφη</a></li>
							</div>
							<div ref={7} className="services-menu" style={{ backgroundImage: `url(/static/images/categories/mousiki.jpg?webp)` }}>
								<li><a>Mουσική κάλυψη & DJs</a></li>
							</div>
							<div ref={8} className="services-menu" style={{ backgroundImage: `url(/static/images/categories/foto-video.jpg?webp)` }}>
								<li><a>Φωτογραφική κάλυψη & Video</a></li>
							</div>
							<div ref={9} className="services-menu" style={{ backgroundImage: `url(/static/images/categories/prosklitiria.jpg?webp)` }}>
								<li><a>Εκτυπώσεις(Προσκλητήρια, albums κ.α.)</a></li>
							</div>
							<div ref={10} className="services-menu" style={{ backgroundImage: `url(/static/images/categories/louloudia.jpg?webp)` }}>
								<li><a>Ανθοστολισμός & Νυφική ανθοδέσμη</a></li>
							</div>
							<div ref={11} className="services-menu" style={{ backgroundImage: `url(/static/images/categories/set-gamos.jpg?webp)` }}>
								<li><a>Χειροποίητα σετ γάμου (δίσκος, καραφα, ποτήρι, στέφανα)</a></li>
							</div>
							<div ref={12} className="services-menu" style={{ backgroundImage: `url(/static/images/categories/prep-bride.jpg?webp)` }}>
								<li><a>Προετοιμασία νύφης - Make up art</a></li>
							</div>
							<div ref={13} className="services-menu" style={{ backgroundImage: `url(/static/images/categories/mpomponieres.jpg?webp)` }}>
								<li><a>Χειροποίητες μπομπονιέρες</a></li>
							</div>
							<div ref={14} className="services-menu" style={{ backgroundImage: `url(/static/images/categories/etairika-event.jpg?webp)` }}>
								<li><a>Εταιρικά event</a></li>
							</div>
							<div ref={15} className="services-menu" style={{ backgroundImage: `url(/static/images/categories/stolismos.jpg?webp)` }}>
								<li><a>Στολισμός δεξίωσης & διακόσμησης τραπεζίων</a></li>
							</div>
							<div ref={16} className="services-menu" style={{ backgroundImage: `url(/static/images/categories/bachelor.jpg?webp)` }}>
								<li><a>Bachelor Party</a></li>
							</div>
						</ul>
                        <span onClick={() => { this.scrollThumbs(this.state.index + 1) }} className="scrollSpanRight"><i className="fas fa-angle-right"></i></span>
					</div>
				</div>
				<Footer />
			</div>
		);
	}
}