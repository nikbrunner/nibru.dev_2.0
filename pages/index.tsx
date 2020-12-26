import Head from 'next/head';

import Main from '../components/Main';
import Section from '../components/Section';
import Row, { RowCols } from '../components/Row';
import Skill from '../components/Skill';
import Experience from '../components/Experience';

import { Experience as ExperienceType } from '../types/Experience';

import personalData from '../data/personalData';
import skills from '../data/skills';
import experiences from '../data/experiences';

import React from 'react';

const Home = () => (
  <Main classNames={['Home']}>
    <Head>
      <title>nibru.dev</title>

      <link rel='icon' href='/favicon.ico' />
    </Head>

    <Section classNames={['Home__personalData']}>
      <Row cols={RowCols.twoCols}>
        <h1>
          Hello, Im {personalData.firstname} {personalData.lastname}
        </h1>

        <h2>{personalData.github}</h2>
      </Row>
    </Section>

    <Section classNames={['Home__skills']}>
      <Row cols={RowCols.fourCols}>
        {skills.map(({ title, level, lib, icon }) => (
          <Skill
            key={title}
            title={title}
            level={level}
            lib={lib}
            icon={icon}
          />
        ))}
      </Row>
    </Section>

    <Section classNames={['Home__experiences']}>
      <Row cols={RowCols.fourCols}>
        {experiences.map(
          (
            { title, dateRange, company, details }: ExperienceType,
            idx
          ) => (
            <Experience
              key={title}
              title={title}
              dateRange={dateRange}
              company={company}
              details={details}
              current={idx === experiences.length - 1}
            />
          )
        )}
      </Row>
    </Section>
  </Main>
);

export default Home;
