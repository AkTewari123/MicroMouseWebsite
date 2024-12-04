"use client";
import Image from "next/image";
import "../globals.css";
import { phosphate } from "../fonts";
import NavBar from "../comp/navbar";
import { Row, Col, Container } from "react-bootstrap";
import { div } from "framer-motion/client";
import "./announcements.css";
import Announcement from "../comp/announcement";
export default function About() {
  return (
    <>
      <div className="h-full w-full bg-black">
        <div className="w-full">
          <NavBar></NavBar>
        </div>
        <div className="px-8 py-24">
          <Row className="gridOne grid grid-cols-3 gap-8 py-4">
            <Col className="text-white ">
              <Announcement
                title="New Seminar!"
                content="Learn about many technical skills needed for MicroMouse!"
                date="11/23/24 @ 12PM EST"
                img="/adOne.png"
                link="https://www.instagram.com/p/DCQUSaisTg5/"
              ></Announcement>
            </Col>
            <Col className="text-white ">
              <Announcement
                title="New Seminar!"
                content="Learn about many technical skills needed for MicroMouse!"
                date="11/23/24 @ 12PM EST"
                img="/adOne.png"
                link="https://www.instagram.com/p/DCQUSaisTg5/"
              ></Announcement>
            </Col>
            <Col className="text-white ">
              <Announcement
                title="New Seminar!"
                content="Learn about many technical skills needed for MicroMouse!"
                date="11/23/24 @ 12PM EST"
                img="/adOne.png"
                link="https://www.instagram.com/p/DCQUSaisTg5/"
              ></Announcement>
            </Col>
          </Row>
          <Row className="gridOne grid grid-cols-3 gap-8 py-4">
            <Col className="text-white ">
              <Announcement
                title="New Seminar!"
                content="Learn about many technical skills needed for MicroMouse!"
                date="11/23/24 @ 12PM EST"
                img="/adOne.png"
                link="https://www.instagram.com/p/DCQUSaisTg5/"
              ></Announcement>
            </Col>
            <Col className="text-white ">
              <Announcement
                title="New Seminar!"
                content="Learn about many technical skills needed for MicroMouse!"
                date="11/23/24 @ 12PM EST"
                img="/adOne.png"
                link="https://www.instagram.com/p/DCQUSaisTg5/"
              ></Announcement>
            </Col>
            <Col className="text-white ">
              <Announcement
                title="New Seminar!"
                content="Learn about many technical skills needed for MicroMouse!"
                date="11/23/24 @ 12PM EST"
                img="/adOne.png"
                link="https://www.instagram.com/p/DCQUSaisTg5/"
              ></Announcement>
            </Col>
          </Row>
          <Row className="gridOne grid grid-cols-3 gap-8 py-4">
            <Col className="text-white ">
              <Announcement
                title="New Seminar!"
                content="Learn about many technical skills needed for MicroMouse!"
                date="11/23/24 @ 12PM EST"
                img="/adOne.png"
                link="https://www.instagram.com/p/DCQUSaisTg5/"
              ></Announcement>
            </Col>
            <Col className="text-white ">
              <Announcement
                title="New Seminar!"
                content="Learn about many technical skills needed for MicroMouse!"
                date="11/23/24 @ 12PM EST"
                img="/adOne.png"
                link="https://www.instagram.com/p/DCQUSaisTg5/"
              ></Announcement>
            </Col>
            <Col className="text-white ">
              <Announcement
                title="New Seminar!"
                content="Learn about many technical skills needed for MicroMouse!"
                date="11/23/24 @ 12PM EST"
                img="/adOne.png"
                link="https://www.instagram.com/p/DCQUSaisTg5/"
              ></Announcement>
            </Col>
          </Row>
        </div>
      </div>
    </>
  );
}
