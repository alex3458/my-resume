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
            name: "Rui Liu",
            desc: "Full Stack Developer",
          },
          contacts: [
            "Anmin Street, Longjing",
            "Yanji, Jilin, 133000",
            "China",
            "+8617152928280",
            "jingang0314@gmail.com",
          ],
          hobbies: ["volleyball, tennis, football", "starcraft"],
          skills: [
            { item: "Javascript/ES6+", level: 5 },
            { item: "React.js", level: 5 },
            { item: "Node.js/Express.js", level: 4 },
            { item: "Python/FastAPI", level: 4 },
            { item: "PHP/Laravel", level: 4 },
            { item: "C#/Xamarin", level: 4 },
            { item: "C/C++", level: 5 },
          ],
          langs: [
            { item: "English", level: 3 },
            { item: "Chinese", level: 5 },
          ],
          links: [
            {
              link: "https://www.linkedin.com/in/ruiliu840128",
              alias: "Linkedin",
            },
            {
              link: "https://stackoverflow.com/users/11402934/topw3",
              alias: "Stackoverflow",
            },
          ],
          profile: [
            "I'm a senior full-stack developer with 8 years of hands-on experience in web and desktop application development.",
            "I'm a big fan of JavaScript and Python. I excel in PHP based back-end development as well.",
            "As a software engineer, I like to architect software and write a more effective, clean code. I'm constantly trying to take my software skills to the next level.",
          ],
          work: [
            {
              title: "Senior Full-stack Developer",
              company: "Vasilkoff CY Ltd",
              city: "Yanji, Jilin, China",
              start: "Jan 2018",
              end: "Nov 2020",
              descs: [
                "Worked as a senior full-stack developer and team lead. I was responsible to define and manage tasks, code reviews, issue management etc.",
                "Modern web frameworks like React, Node/Express, Python/Fast-API, PHP/Laravel and various caching and task queue libraries like celery, bee-queue, arq are used to optimize the back-end performance.",
                "My main focuses are on improving the software by introducing proven  software design pattern like factory or dependency injection.",
              ],
            },
            {
              title: "Senior Full-stack Developer",
              company: "Longxin Corporation",
              city: "Yanji, Jilin, China",
              start: "Dec 2015",
              end: "Jan 2018",
              descs: [
                "Worked as a front-end developer for the first 6 months, and as a full-stack developer later on. I participated in development of pinduoduo.com and alibaba.com though it's a small part.",
                "Main stacks: React, Material UI, Node/Express, Django, Firebase",
              ],
            },
            {
              title: "Junior Front-end Developer",
              company: "YbTop",
              city: "Yanji, Jilin, China",
              start: "Jun 2013",
              end: "Oct 2015",
              descs: [
                "I started my software developer career here. I'm immersed in learning IT and hard-worked all the time. 6 months later, I participated in product development.",
                "I developed sites of several companies(Letianmi, haoranjiazu, ...). I focused mainly on front-end development using bootstrap.",
              ],
            },
          ],
          education: [
            {
              school: "Yanbian University of Science and Technology",
              start: "Apr. 2008",
              end: "May. 2012",
              degree: "Bachelor",
              city: "Yanji, Jilin, China",
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
                title='Employment History'
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
