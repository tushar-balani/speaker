
import './App.css';
import Video from './assets/video/spotlight.mp4'


function App() {
  return (
    <div>
      <section>
        <video autoPlay loop muted src={Video} />
      </section>
      <section>
      <header id="mu-hero">
		<div className="container">
			<div className="mu-hero-area">
				
				<div className="mu-hero-top">
					 {/* Start center Logo  */}
					<div className="mu-logo-area">
						{/* <!-- text based logo --> */}
						<a className="mu-logo" href="index.html"><span>Spotlight</span></a>
						{/* <!-- Image based logo --> */}
						{/* <!-- <a class="mu-logo" href="index.html"><img src="assets/images/logo.jpg" alt="logo img"></a> --> */}
					</div>
					{/* <!-- End center Logo --> */}
					<div className="mu-hero-top-info">
						<ul>
							<li>
								<i className="fa fa-envelope" aria-hidden="true"></i>
								<span>SHAASTRA</span>
							</li>
							<li>
								<div className="mu-telephone">
									<i className="fa fa-phone" aria-hidden="true"></i>
									<span>IIT MADRAS</span>
								</div>
							</li>
						</ul>
						
					</div>
				</div>

				{/* <!-- Start hero featured area --> */}
				<div className="mu-hero-featured-area">
					<div className="mu-hero-featured-content">
						<h2>Welcome To The Travel Agency </h2>
						<h1>WE PROVIDE ONLY THE BEST TOURS</h1>
						<p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Atque ut omnis beatae quam quibusdam facere expedita explicabo eaque non sit. Amet vitae exercitationem ad rerum consequuntur numquam magni nemo dolorem, itaque eius perferendis praesentium consequatur. Dolores, nihil, molestiae sunt tenetur aut similique nostrum deleniti amet minima. Esse magnam inventore, ea.</p>

						<a href="#" className="mu-book-now-btn">Book Now!</a>
						
						<div className="mu-scrolldown-area">
							<a href="#mu-about" className="mu-scrolldown" id="mu-scrolldown"><i className="fa fa-chevron-down" aria-hidden="true"></i></a>
						</div>
					</div>
				</div>
				{/* <!-- End hero featured area --> */}

			</div>
		</div>
	</header>
      </section>
    </div>
  );
}

export default App;
