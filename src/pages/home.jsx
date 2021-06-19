import React, { useState, useEffect } from "react";

import Avatar from "components/avatar";
import DescBlock from "components/desc-block";
import SkillBlock from "components/skill-block";
import LinkBlock from "components/link-block";
import { WorkHistory, EducationHistory } from "components/history-block";
import image from "assets/images/avatar.png";

import { useDispatch, useSelector } from "context/store";
import * as Actions from "context/actions";

import "./home.scss";

const Home = () => {
  const dispatch = useDispatch();
  const resume = useSelector((state) => state.resume);
  const [busy, setBusy] = useState(true);

  useEffect(() => {
    setBusy(true);
    setTimeout(() => {
      dispatch(
        Actions.setResume({
          info: {
            image,
            name: "Aleksandr Stryzhov",
            desc: "Full Stack Developer",
          },
          contacts: [
            "Korabelnay",
            "Moscow, MOW 115162",
            "Russia",
            "+79202110950",
            "aleksandrct.work@gmail.com",
          ],
          hobbies: ["volleyball, basketball, tennis"],
          skills: [
            { item: "Javascript/ES6+", level: 5 },
            { item: "React.js", level: 5 },
            { item: "Gatsby.js", level: 4 },
            { item: "Next.js", level: 4 },
            { item: "Node.js/Express.js", level: 4 },
            { item: "Python/FastAPI", level: 4 },
            { item: "PHP/Laravel", level: 4 },
            { item: "C#/Xamarin", level: 4 },
            { item: "C/C++", level: 5 },
          ],
          langs: [
            { item: "English", level: 3 },
            { item: "Russian", level: 5 },
          ],
          links: [
            {
              link: "https://github.com/alex3458",
              alias: "GitHub",
            },
          ],
          profile: [
            "I am an independent Web Freelancer with 7+ years of experience developing, implementing and supporting websites for commercial and non-commercial clients.",
            "Strong experience with multiple programming languages required for website, web application and database development. ",
            "I'm a big fan of JavaScript and Python. I excel in PHP based back-end development as well.",
            "Enjoy working as a team member, excellent communication, and interpersonal skills, self-motivated and proactive. Quick learner, strong reasoning, and problem-solving skills.",
          ],
          work: [
            {
              title: "Senior MERN Stack Developer",
              company: "ESOFT Development of IT projects",
              city: "Moscow, Russia",
              start: "Jan 2017",
              end: "Nov 2020",
              descs: [
                "Worked as a senior full-stack developer and team lead. I was responsible to define and manage tasks, code reviews, issue management etc.",
                "Modern web frameworks like React, Node/Express, Python/Fast-API, PHP/Laravel and various caching and task queue libraries like celery, bee-queue, arq are used to optimize the back-end performance.",
                "My main focuses are on improving the software by introducing proven  software design pattern like factory or dependency injection.",
              ],
            },
            {
              title: "Front-End JavaScript Developer",
              company: "VKS-Internet LLC",
              city: "Nadym, Russia",
              start: "Dec 2012",
              end: "Jan 2016",
              descs: [
                "Worked as a front-end developer for the first 6 months, and as a full-stack developer later on. I participated in development of pinduoduo.com and alibaba.com though it's a small part.",
                "Main stacks: React, Material UI, Node/Express, Django, Firebase",
              ],
            },
          ],
          education: [
            {
              school: "Tula State University",
              start: "Apr. 2005",
              end: "May. 2007",
              degree: "Bachelor",
              city: "Tula, Russia",
              subject: "Mechanical Engineering",
            },
            {
              school: "Voronezh State University",
              start: "Jun. 2008",
              end: "Sep. 2012",
              degree: "Master",
              city: "Voronezh, Russia",
              subject: "Computer Science",
            },
          ],
        })
      );

      setBusy(false);
    }, 500);
  }, [dispatch]);

  return (
    <div className='home'>
      {busy && <div className='simple-spinner' />}
      {resume && (
        <>
          <section className='sidebar'>
            {resume.info && <Avatar {...resume.info} />}
            {resume.contacts && (
              <DescBlock title='Details' contents={resume.contacts} />
            )}
            {resume.skills && (
              <SkillBlock title='Skills' contents={resume.skills} />
            )}
            {resume.hobbies && (
              <DescBlock title='Hobbies' contents={resume.hobbies} />
            )}
            {resume.langs && (
              <SkillBlock title='Languages' contents={resume.langs} />
            )}
            {resume.links && (
              <LinkBlock title='Links' contents={resume.links} />
            )}
          </section>
          <section className='main-contents'>
            {resume.profile && (
              <DescBlock title='Profile' contents={resume.profile} />
            )}
            {resume.work && (
              <WorkHistory title='Employment History' contents={resume.work} />
            )}
            {resume.education && (
              <EducationHistory
                title='Education History'
                contents={resume.education}
              />
            )}
          </section>
        </>
      )}
    </div>
  );
};

export default Home;
