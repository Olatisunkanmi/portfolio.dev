import React from 'react';
import { Link } from 'react-router-dom';
import arrow from '../../assets/svgs/arrow.svg';
import navLine from '../../assets/svgs/menu-line.svg';
import './base.scss';

export default function Base({ menu }: any) {
  return (
    <div className="base_container">
      <div className="hero">
        <div className="intro_box">
          <h1>
            Hallo! 👋🏻 I'm <br /> Olasunkanmi.
          </h1>
        </div>

        <div className="description">
          <p>
            <span>
              I'm a <span className="highlight">Software Engineer and Creative Writer🧑🏻‍💻</span> with{' '}
              <span className="highlight">a product-focused approach. 👨🏻‍🎓</span> with a keen enthusiasm for
              problem-solving. I bring a rare combination of techniical expertise and a strong focus on user-centered design.
            </span> 
            A unique experince that allows me balance the intricates of backend development with a deep understanding of user needs and business operations.
            <span>
            I am looking to work on things like blockchain, AI/ML, Cloud Native, and research.
            </span>
          </p>
        </div>

        <div className="go_button_container">
          <Link to="/projects">
            <button className="explore">Explore ➜</button>
          </Link>
        </div>
      </div>

      <nav>
        <ul>
          <li className={menu[0]}>
            <small>
              00
              <Link to="/resume">
                <img src={navLine} alt="menu bullet" /> RESUME
              </Link>
            </small>
          </li>
          <li className={menu[1]}>
            <small>
              01
              <Link to="/projects">
                <img src={navLine} alt="menu bullet" /> PROJECTS
              </Link>
            </small>
          </li>

          <li className={menu[2]}>
            <small>
              02
              <Link to="/contact">
                <img src={navLine} alt="menu bullet" /> CONTACT
              </Link>
            </small>
          </li>
        </ul>
      </nav>

      <div className="footer">
        <div className="social">
          <a href="https://github.com/Olatisunkanmi" target="_blank" rel="noopener noreferrer">
            <i className="fab fa-github"></i> Github
            <img src={arrow} alt="pointer" />
          </a>

          <a
            href="https://www.linkedin.com/in/olasunkanmi-igbasan-591447223/"
            target="_blank"
            rel="noopener noreferrer"
          >
            <i className="fab fa-linkedin"></i> LinkedIn <img src={arrow} alt="pointer" />
          </a>
        </div>
      </div>
    </div>
  );
}
