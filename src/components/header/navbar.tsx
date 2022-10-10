import React, { useState } from 'react';
import { HashLink } from 'react-router-hash-link';
import './header.css';

function NavBar() {
	const [checkboxstate, setcheckboxstate] = useState<boolean>(false);
	const scrollWithOffset = (el: any) => {
		const yCoordinate = el.getBoundingClientRect().top + window.pageYOffset;
		const yOffset = -60;
		window.scrollTo({ top: yCoordinate + yOffset, behavior: 'smooth' });
	};

	return (
		<nav>
			<p>
				<HashLink smooth to="/#top">
					KSA Aarschot
				</HashLink>
			</p>
			<label htmlFor="burger" className="hamburger">
				☰
			</label>
			<input
				type="checkbox"
				name="burger"
				id="burger"
				onChange={() => setcheckboxstate(!checkboxstate)}
				checked={checkboxstate}
			/>
			<ul>
				<li>
					<HashLink
						smooth
						to="/#news"
						scroll={scrollWithOffset}
						onClick={() => setcheckboxstate(false)}
					>
						News
					</HashLink>
				</li>
				<li>
					<HashLink
						smooth
						to="/#braggel"
						scroll={scrollWithOffset}
						onClick={() => setcheckboxstate(false)}
					>
						Braggel
					</HashLink>
				</li>
				<li>
					<HashLink
						smooth
						to="/#leeftijden"
						scroll={scrollWithOffset}
						onClick={() => setcheckboxstate(false)}
					>
						Leeftijden
					</HashLink>
				</li>
				<li>
					<HashLink
						smooth
						to="/#contact"
						scroll={scrollWithOffset}
						onClick={() => setcheckboxstate(false)}
					>
						Contact
					</HashLink>
				</li>
			</ul>
		</nav>
	);
}

export default NavBar;
