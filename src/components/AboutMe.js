import $ from 'jquery';
function AboutMe() {
  const readMore = () => {
  $(".more").removeClass("d-none");
  $(".more_btn").addClass("d-none");
  }

  const readLess =() => {
     $(".more").toggleClass("d-none");
    $(".more_btn").removeClass("d-none");
  }
  return (
    <div id="about" className="about_me bg-dark text-white px-4 pt-3 pb-2 fs-5">
      <h2 className="fs-3 fw-bold">About Me</h2>
      <p>
        Hello! I’m a passionate and detail-oriented web developer with hands-on experience in building dynamic, user-friendly websites and applications. I specialize in both front-end and back-end development using technologies like <strong>React.js</strong> and <strong>Laravel</strong>.
        <span className="text-info more_btn mx-2 cursor-pointer" onClick={readMore}>
          Read More
        </span>
      </p>
      <div className="more d-none">
        <p>
          My journey into web development started with curiosity and has grown into a full-fledged career path. I enjoy solving real-world problems with clean, efficient code and continuously learning new tools and frameworks to stay ahead in the fast-paced tech industry.
        </p>
        <p>
          I love building responsive, accessible, and high-performance web applications. Whether it's developing RESTful APIs with Laravel or crafting beautiful interfaces with React and Tailwind CSS, I aim to deliver scalable and maintainable solutions.
        </p>
        <p>
          I’m currently pursuing a degree in Web and Application Development and looking forward to collaborating with like-minded individuals and companies on exciting digital projects.
        </p>
        <p className='ReadLess text-info mx-2 cursor-pointer' onClick={readLess}>Read Less</p>
      </div>

    </div>
  );
}

export default AboutMe;