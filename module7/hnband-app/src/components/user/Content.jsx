import React from 'react'

export default function Content() {
return (
<>
<div className="container-fluid about-container">
<div className="about-container-img">
<img
src="image/discography-bg.png.webp"
alt=""
height="100%"
width="100%"
/>
</div>
<div className="about-album">
<div className="about-part container p-0">
<div className="singer-img">
<img src="image/about.png.webp" alt="" className="img-fluid" />
</div>
<div className="about_content p-2">
<span className="about_us fw-bold my-2">About us</span>
<h2 className="text-light text-uppercase fs-1 fw-bolder my-2">
The electro vibe
</h2>
<p className="text-light about_para fs-6  my-2">
Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
eiusmod tempor inc-ididunt ut labore et dolore magna aliqua. Quis
ipsum suspendisse ultrices gravida. Risus commodo viverra maecenas
accumsan lacus vel facilisis. lectus turpis sociis ut porttitor
scelerisque amet ultrices placerat mid facilisis proin purus, cursus
ridiculus nisi diam augue porta? Penatibus magna etiam, placerat
dignissim.
</p>
<button type="button" className="btn about-btn border-0 my-2">
<a href="#" className="site_btn text-light text-decoration-none">
Contact us
</a>
</button>
</div>
</div>
<div className="album-header">
<div className="row mx-lg-5  px-lg-4">
<div className="col-lg-8 text-center">
<div className="section-title">
<div className="album-title fw-bold">Our discography-bg</div>
<h2 className="text-uppercase fw-bolder text-light">
Newest Albums &amp; Singles
</h2>
</div>
</div>
<div className="col-lg-4 text-center text-lg-right  pt-4">
<div className="d-flex justify-content-center">
<a
href="#"
className="site__btn text-light text-decoration-none itunes_btn p-2"
>
<i className="fab fa-apple" /> Buy on iTunes
</a>
</div>
</div>
</div>
</div>
<div className="row py-2 m-auto singer-part">
<div className="col-lg-3  col-md-6">
<div className="album_card  d-flex flex-column align-items-center">
<img
src="image/1.jpg.webp"
className="rounded-circle img-fluid"
alt=""
/>
<h4 className="text-light">I'm a mess</h4>
<p className="text-secondary">Bebe Rexha</p>
</div>
</div>
<div className="col-lg-3  col-md-6">
<div className="album_card  d-flex flex-column align-items-center">
<img
src="image/2.jpg.webp"
className="rounded-circle img-fluid"
alt=""
/>
<h4 className="text-light">Natural</h4>
<p className="text-secondary">Imagine Dragons</p>
</div>
</div>
<div className="col-lg-3  col-md-6">
<div className="album_card  d-flex flex-column align-items-center">
<img
src="image/3.jpg.webp"
className="rounded-circle img-fluid"
alt=""
/>
<h4 className="text-light">Sweet Psycho</h4>
<p className="text-secondary">Ava Max</p>
</div>
</div>
<div className="col-lg-3  col-md-6">
<div className="album_card  d-flex flex-column align-items-center">
<img
src="image/4.jpg.webp"
className="rounded-circle img-fluid"
alt=""
/>
<h4 className="text-light">Waiting For 💜</h4>
<p className="text-secondary">Avicii</p>
</div>
</div>
<div className="col-lg-3  col-md-6">
<div className="album_card  d-flex flex-column align-items-center">
<img
src="image/5.jpg.webp"
className="rounded-circle img-fluid"
alt=""
/>
<h4 className="text-light">So Am I</h4>
<p className="text-secondary">Ava Max</p>
</div>
</div>
<div className="col-lg-3  col-md-6">
<div className="album_card  d-flex flex-column align-items-center">
<img
src="image/6.jpg.webp"
className="rounded-circle img-fluid"
alt=""
/>
<h4 className="text-light">Mamma Mia</h4>
<p className="text-secondary">Hugel feat. Amber</p>
</div>
</div>
<div className="col-lg-3  col-md-6">
<div className="album_card  d-flex flex-column align-items-center">
<img
src="image/7.jpg.webp"
className="rounded-circle img-fluid"
alt=""
/>
<h4 className="text-light">Bad Guy</h4>
<p className="text-secondary">Billie Eilish</p>
</div>
</div>
<div className="col-lg-3  col-md-6">
<div className="album_card  d-flex flex-column align-items-center">
<img
src="image/8.jpg.webp"
className="rounded-circle img-fluid"
alt=""
/>
<h4 className="text-light"> me down slowly</h4>
<p className="text-secondary">Alec Benjamin</p>
</div>
</div>
</div>
</div>
</div>
<div className="row album_list_container container-fluid m-0 p-0">
<div className="col-lg-6 song-poster p-0 m-0">
<img src="image/track-thumb.webp" alt="" height="100%" width="100%" />
</div>
<div className=" col-lg-6 song-lists text-center">
<div className="song my-4 px-2">
<div className="song-title">Latest album</div>
<h2 className="text-light">WHEN WE ALL FALL ASLEEP</h2>
</div>
<ul className="song-list my-3 p-0">
<li className="row playlist p-2 align-items-center my-3">
<div className="col-1 playbtn  d-flex justify-content-center">
<div className="playicon rounded-circle ">
<button
type="button"
className="border border-0 bg-transparent"
id="play-song1"
>
<i className="fas fa-play text-light text-center" />
<audio
id="audioPlayer1"
controls=""
style={{ display: "none" }}
>
<source
src="image/Teri Baaton Mein Aisa Uljha Jiya_64(PagalWorld.com.cm).mp3"
type="audio/mpeg"
/>
Your browser does not support the audio element.
</audio>
</button>
</div>
</div>
<div className="col-4 song-name d-flex flex-column justify-content-center align-items-center">
<h6 className="text-center text-light mb-2">I'm a mess</h6>
<p className="text-center text-secondary mb-0">Bebe Rexha</p>
</div>
<div className="col-4 social-icon d-flex justify-content-center">
<i className="fab fa-amazon me-2 text-secondary" />
<i className="fab fa-spotify me-2 text-secondary" />
<i className="fab fa-apple me-2 text-secondary" />
<i className="fab fa-soundcloud me-2 text-secondary" />
</div>
<div className="col-2 song-time d-flex justify-content-center align-items-center">
<p className="text-light mb-0">3.16</p>
</div>
</li>
<li className="row playlist p-2 align-items-center my-3">
<div className="col-1 playbtn  d-flex justify-content-center">
<div className="playicon rounded-circle ">
<button
type="button"
className="border border-0 bg-transparent"
id="play-song2"
>
<i className="fas fa-play text-light text-center" />
<audio
id="audioPlayer2"
controls=""
style={{ display: "none" }}
>
<source
src="image/Dil Se Dil Tak(PagalWorld.com.cm).mp3"
type="audio/mpeg"
/>
Your browser does not support the audio element.
</audio>
</button>
</div>
</div>
<div className="col-4 song-name d-flex flex-column justify-content-center align-items-center">
<h6 className="text-center text-light mb-2">Sweet But Psycho</h6>
<p className="text-center text-secondary mb-0">Ava Max</p>
</div>
<div className="col-4 social-icon d-flex justify-content-center">
<i className="fab fa-amazon me-2  d-none text-secondary" />
<i className="fab fa-spotify me-2  d-none text-secondary" />
<i className="fab fa-apple me-2  d-none text-secondary" />
<i className="fab fa-soundcloud me-2  d-none text-secondary" />
</div>
<div className="col-2 song-time d-flex justify-content-center align-items-center">
<p className="text-light mb-0">3.16</p>
</div>
</li>
<li className="row playlist p-2 align-items-center my-3">
<div className="col-1 playbtn  d-flex justify-content-center">
<div className="playicon rounded-circle ">
<button
type="button"
className="border border-0 bg-transparent"
id="play-song3"
>
<i className="fas fa-play text-light text-center" />
<audio
id="audioPlayer3"
controls=""
style={{ display: "none" }}
>
<source
src="image/O Mahi O Mahi(PagalWorld.com.cm).mp3"
type="audio/mpeg"
/>
Your browser does not support the audio element.
</audio>
</button>
</div>
</div>
<div className="col-4 song-name d-flex flex-column justify-content-center align-items-center">
<h6 className="text-center text-light mb-2">Waiting For 💜</h6>
<p className="text-center text-secondary mb-0">Avicii</p>
</div>
<div className="col-4 social-icon d-flex justify-content-center">
<i className="fab fa-amazon me-2  d-none text-secondary" />
<i className="fab fa-spotify me-2  d-none text-secondary" />
<i className="fab fa-apple me-2  d-none text-secondary" />
<i className="fab fa-soundcloud me-2  d-none text-secondary" />
</div>
<div className="col-2 song-time d-flex justify-content-center align-items-center">
<p className="text-light mb-0">3.16</p>
</div>
</li>
<li className="row playlist p-2 align-items-center my-3">
<div className="col-1 playbtn  d-flex justify-content-center">
<div className="playicon rounded-circle ">
<button
type="button"
className="border border-0 bg-transparent"
id="play-song4"
>
<i className="fas fa-play text-light text-center" />
<audio
id="audioPlayer4"
controls=""
style={{ display: "none" }}
>
<source
src="image/Ve Haniya(PagalWorld.com.cm).mp3"
type="audio/mpeg"
/>
Your browser does not support the audio element.
</audio>
</button>
</div>
</div>
<div className="col-4 song-name d-flex flex-column justify-content-center align-items-center">
<h6 className="text-center text-light mb-2">Mamma Mia</h6>
<p className="text-center text-secondary mb-0">Hugel feat. Amber</p>
</div>
<div className="col-4 social-icon d-flex justify-content-center">
<i className="fab fa-amazon me-2  d-none text-secondary" />
<i className="fab fa-spotify me-2  d-none text-secondary" />
<i className="fab fa-apple me-2  d-none text-secondary" />
<i className="fab fa-soundcloud me-2  d-none text-secondary" />
</div>
<div className="col-2 song-time d-flex justify-content-center align-items-center">
<p className="text-light mb-0">3.16</p>
</div>
</li>
<li className="row playlist p-2 align-items-center my-3">
<div className="col-1 playbtn  d-flex justify-content-center">
<div className="playicon rounded-circle ">
<button
type="button"
className="border border-0 bg-transparent"
id="play-song5"
>
<i className="fas fa-play text-light text-center" />
<audio
id="audioPlayer5"
controls=""
style={{ display: "none" }}
>
<source
src="image/You The One(PagalWorld.com.cm).mp3"
type="audio/mpeg"
/>
Your browser does not support the audio element.
</audio>
</button>
</div>
</div>
<div className="col-4 song-name d-flex flex-column justify-content-center align-items-center">
<h6 className="text-center text-light mb-2">Let me down slowly</h6>
<p className="text-center text-secondary mb-0">Alec Benjamin</p>
</div>
<div className="col-4 social-icon d-flex justify-content-center">
<i className="fab fa-amazon me-2  d-none text-secondary" />
<i className="fab fa-spotify me-2  d-none text-secondary" />
<i className="fab fa-apple me-2  d-none text-secondary" />
<i className="fab fa-soundcloud me-2  d-none text-secondary" />
</div>
<div className="col-2 song-time d-flex justify-content-center align-items-center">
<p className="text-light mb-0">3.16</p>
</div>
</li>
<li className="row playlist p-2 align-items-center my-3">
<div className="col-1 playbtn  d-flex justify-content-center">
<div className="playicon rounded-circle ">
<button
type="button"
className="border border-0 bg-transparent"
id="play-song6"
>
<i className="fas fa-play text-light text-center" />
<audio
id="audioPlayer6"
controls=""
style={{ display: "none" }}
>
<source
src="image/Teri Baaton Mein Aisa Uljha Jiya_64(PagalWorld.com.cm).mp3"
type="audio/mpeg"
/>
Your browser does not support the audio element.
</audio>
</button>
</div>
</div>
<div className="col-4 song-name d-flex flex-column justify-content-center align-items-center">
<h6 className="text-center text-light mb-2">Everything I Need</h6>
<p className="text-center text-secondary mb-0">Skylar Grey</p>
</div>
<div className="col-4 social-icon d-flex justify-content-center">
<i className="fab fa-amazon me-2  d-none text-secondary" />
<i className="fab fa-spotify me-2  d-none text-secondary" />
<i className="fab fa-apple me-2  d-none text-secondary" />
<i className="fab fa-soundcloud me-2  d-none text-secondary" />
</div>
<div className="col-2 song-time d-flex justify-content-center align-items-center">
<p className="text-light mb-0">3.16</p>
</div>
</li>
<li className="row playlist p-2 align-items-center my-3 border border-0">
<div className="col-1 playbtn  d-flex justify-content-center">
<div className="playicon rounded-circle ">
<button
type="button"
className="border border-0 bg-transparent"
id="play-song7"
>
<i className="fas fa-play text-light text-center" />
<audio
id="audioPlayer7"
controls=""
style={{ display: "none" }}
>
<source
src="image/O Mahi O Mahi(PagalWorld.com.cm).mp3"
type="audio/mpeg"
/>
Your browser does not support the audio element.
</audio>
</button>
</div>
</div>
<div className="col-4 song-name d-flex flex-column justify-content-center align-items-center">
<h6 className="text-center text-light mb-2">On My Way</h6>
<p className="text-center text-secondary mb-0">
Alan Walker; Sabrina Carpenter; Farruko
</p>
</div>
<div className="col-4 social-icon d-flex justify-content-center">
<i className="fab fa-amazon me-2  d-none text-secondary" />
<i className="fab fa-spotify me-2  d-none text-secondary" />
<i className="fab fa-apple me-2  d-none text-secondary" />
<i className="fab fa-soundcloud me-2  d-none text-secondary" />
</div>
<div className="col-2 song-time d-flex justify-content-center align-items-center">
<p className="text-light mb-0">3.16</p>
</div>
</li>
</ul>
</div>
</div>
<div className="upcoming-show-container container-fluid">
<div className="upcoming-show-header">
<div className="row mx-lg-5  px-lg-4">
<div className="col-lg-8 text-center">
<div className="section-title">
<div className="upcoming-show-title fw-bold">Upcoming Shows</div>
<h2 className="text-uppercase fw-bolder text-light">
WHEN WE ALL FALL ASLEEP
</h2>
</div>
</div>
<div className="col-lg-4 text-center text-lg-right  pt-4">
<div className="d-flex justify-content-center">
<a
href="#"
className="site__btn text-light text-decoration-none show_btn p-2"
>
VIEW ALL
</a>
</div>
</div>
</div>
</div>
<div className="upcoming-show-list">
<div className="show-item text-light d-flex justify-content-center align-items-center">
<div className="show-date text-center">
<h2 className="fw-bold m-0 p-0">25</h2>
<p className="m-0 p-0">Aug</p>
</div>
<div className="show-title text-center">
<h4 className="fs-6 fw-bolder">Sunburn Arena with Wiz Khalifa</h4>
<p className="fs-6">EDM, Pop, Rap | English | Age 15+ | 5hrs</p>
</div>
<div className="show-location text-center">
<p>
<i
className="fa-solid fa-location-dot me-2"
style={{ color: "#ea34ff" }}
/>{" "}
Multiple Venues
</p>
</div>
<div className="show-time text-center">
<p>
<i
className="fa-regular fa-clock me-2"
style={{ color: "#ea34ff" }}
/>{" "}
02:00 PM
</p>
</div>
<div className="showBtn text-center p-2">
<a
href="#"
className="show-sub-btn sb--line text-light text-decoration-none"
>
Buy tickets
</a>
</div>
</div>
<div className="show-item text-light d-flex justify-content-center align-items-center">
<div className="show-date text-center">
<h2 className="fw-bold m-0 p-0">25</h2>
<p className="m-0 p-0">Aug</p>
</div>
<div className="show-title text-center">
<h4 className="fs-6 fw-bolder">Sunburn Arena with Wiz Khalifa</h4>
<p className="fs-6">EDM, Pop, Rap | English | Age 15+ | 5hrs</p>
</div>
<div className="show-location text-center">
<p>
<i
className="fa-solid fa-location-dot me-2"
style={{ color: "#ea34ff" }}
/>{" "}
Multiple Venues
</p>
</div>
<div className="show-time text-center">
<p>
<i
className="fa-regular fa-clock me-2"
style={{ color: "#ea34ff" }}
/>{" "}
02:00 PM
</p>
</div>
<div className="showBtn text-center p-2">
<a
href="#"
className="show-sub-btn sb--line text-light text-decoration-none"
>
Buy tickets
</a>
</div>
</div>
<div className="show-item text-light d-flex justify-content-center align-items-center">
<div className="show-date text-center">
<h2 className="fw-bold m-0 p-0">25</h2>
<p className="m-0 p-0">Aug</p>
</div>
<div className="show-title text-center">
<h4 className="fs-6 fw-bolder">Sunburn Arena with Wiz Khalifa</h4>
<p className="fs-6">EDM, Pop, Rap | English | Age 15+ | 5hrs</p>
</div>
<div className="show-location text-center">
<p>
<i
className="fa-solid fa-location-dot me-2"
style={{ color: "#ea34ff" }}
/>{" "}
Multiple Venues
</p>
</div>
<div className="show-time text-center">
<p>
<i
className="fa-regular fa-clock me-2"
style={{ color: "#ea34ff" }}
/>{" "}
02:00 PM
</p>
</div>
<div className="showBtn text-center p-2">
<a
href="#"
className="show-sub-btn sb--line text-light text-decoration-none"
>
Buy tickets
</a>
</div>
</div>
<div className="show-item text-light d-flex justify-content-center align-items-center">
<div className="show-date text-center">
<h2 className="fw-bold m-0 p-0">25</h2>
<p className="m-0 p-0">Aug</p>
</div>
<div className="show-title text-center">
<h4 className="fs-6 fw-bolder">Sunburn Arena with Wiz Khalifa</h4>
<p className="fs-6">EDM, Pop, Rap | English | Age 15+ | 5hrs</p>
</div>
<div className="show-location text-center">
<p>
<i
className="fa-solid fa-location-dot me-2"
style={{ color: "#ea34ff" }}
/>{" "}
Multiple Venues
</p>
</div>
<div className="show-time text-center">
<p>
<i
className="fa-regular fa-clock me-2"
style={{ color: "#ea34ff" }}
/>{" "}
02:00 PM
</p>
</div>
<div className="showBtn text-center p-2">
<a
href="#"
className="show-sub-btn sb--line text-light text-decoration-none"
>
Buy tickets
</a>
</div>
</div>
<div className="show-item border border-0 text-light d-flex justify-content-center align-items-center">
<div className="show-date text-center">
<h2 className="fw-bold m-0 p-0">25</h2>
<p className="m-0 p-0">Aug</p>
</div>
<div className="show-title text-center">
<h4 className="fs-6 fw-bolder">Sunburn Arena with Wiz Khalifa</h4>
<p className="fs-6">EDM, Pop, Rap | English | Age 15+ | 5hrs</p>
</div>
<div className="show-location text-center">
<p>
<i
className="fa-solid fa-location-dot me-2"
style={{ color: "#ea34ff" }}
/>{" "}
Multiple Venues
</p>
</div>
<div className="show-time text-center">
<p>
<i
className="fa-regular fa-clock me-2"
style={{ color: "#ea34ff" }}
/>{" "}
02:00 PM
</p>
</div>
<div className="showBtn text-center p-2">
<a
href="#"
className="show-sub-btn sb--line text-light text-decoration-none"
>
Buy tickets
</a>
</div>
</div>
</div>
</div>
</>

)
}
