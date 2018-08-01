import React, { Component } from 'react';
import Link from 'next/link'
import '../App.css';

export default class Footer extends Component {
	render() {
		return (
			<div className="footer-wrapper">
				<div className="footer">
					<div className="column-1">
						<p>Σχετικά με μας</p>
						<p>
						Κλείστε ραντεβού για να διοργανώσετε την πιό γλυκιά στιγμή της ζωής σας!
						</p>
						<p>Phone: +30 698 943 3978</p>
						<p>Email: info@sweet-memory.gr</p>
					</div>
					<div className="column-2">
						<p>Βρείτε μας στα social</p>
						<a href="http://instagram.com/sweetmemoryevents">
							<i className="fab fa-instagram" />
							<p>Instagram</p>
						</a>
						<a href="https://www.facebook.com/sweetmemoryevents/">
							<i className="fab fa-facebook-f" />
							<p>Facebook</p>
						</a>
						{/* <a href="https://www.pinterest.com/kokkashoes/">
							<i className="fab fa-pinterest-p" />
							<p>Pinterest</p>
						</a> */}
					</div>
					<div className="column-3">
						<p>Κατηγορίες</p>
                        <ul className="categories-footer-list">
                            <li>
                                Γάμος
                            </li>
                            <li>
                                Βάπτιση
                            </li>
                            <li>
                                Baby Shower
                            </li>
                            <li>
                                Παιδικά πάρτυ
                            </li>
                            <li>
                                Εταιρικά event
                            </li>
					    </ul>
					</div>
				</div>
			</div>
		);
	}
}
