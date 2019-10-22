import React from 'react';
import styled from 'styled-components';
import { StaticQuery, graphql } from 'gatsby';
import Img from 'gatsby-image';

import { Section, Container } from '@components/global';

const Cases = () => (
  <StaticQuery
    query={graphql`
      query {
        finance_easy: file(
          sourceInstanceName: { eq: "finance" }
          name: { eq: "easy" }
        ) {
          childImageSharp {
            fluid(maxWidth: 760) {
              ...GatsbyImageSharpFluid_withWebp_tracedSVG
            }
          }
        }

        finance_account: file(
          sourceInstanceName: { eq: "finance" }
          name: { eq: "account" }
        ) {
          childImageSharp {
            fluid(maxWidth: 760) {
              ...GatsbyImageSharpFluid_withWebp_tracedSVG
            }
          }
        }

        finance_risk: file(
          sourceInstanceName: { eq: "finance" }
          name: { eq: "risk" }
        ) {
          childImageSharp {
            fluid(maxWidth: 760) {
              ...GatsbyImageSharpFluid_withWebp_tracedSVG
            }
          }
        }

        finance_idle_cash: file(
          sourceInstanceName: { eq: "finance" }
          name: { eq: "idle-cash" }
        ) {
          childImageSharp {
            fluid(maxWidth: 760) {
              ...GatsbyImageSharpFluid_withWebp_tracedSVG
            }
          }
        }

        finance_liquidity: file(
          sourceInstanceName: { eq: "finance" }
          name: { eq: "liquidity" }
        ) {
          childImageSharp {
            fluid(maxWidth: 760) {
              ...GatsbyImageSharpFluid_withWebp_tracedSVG
            }
          }
        }
      }
    `}
    render={data => (
      <Section id="cases">
        <Container>
          <Grid inverse>
            <Art>
              <Img fluid={data.finance_liquidity.childImageSharp.fluid} />
            </Art>
            <div>
              <h2>Cashflow Planing & Analysis</h2>
              <p>
                Being financially healthy requires startups to constantly stay in control of their cashflow and spendings.
                <br />
                <br />
                <b>Virtual CFO to go</b> allows you to always stay on top of your cashburn and run rate.
                <br />
                <br />
              </p>
            </div>
          </Grid>
          <Grid>
            <div>
              <h2>Foreign Currency Riskmanagement</h2>
              <p>
                International operations make startups vulnerable to currency fluctuations which can reduce future profits.
                <br />
                <br />
                <b>Virtual CFO to go</b> allows you to mitigate currency fluctuations as much as possible.
                <br />
                <br />
              </p>
            </div>
            <Art>
              <Img fluid={data.finance_risk.childImageSharp.fluid} />
            </Art>
          </Grid>
          <Grid inverse>
            <Art>
              <Img fluid={data.finance_idle_cash.childImageSharp.fluid} />
            </Art>
            <div>
              <h2>Idle Cash Investment</h2>
              <p>
                Why leave idle cash on your bank account at zero interest when you can earn interest on it.
                <br />
                <br />
                We provide you investment offerings that are matching the needs of your business
                <br />
                <br />
              </p>
            </div>
          </Grid>
          <Grid>
            <div>
              <h2>Accounting Assistance</h2>
              <p>
                As soon as cash hits your bank account we create an accounting entry for it and help you reduce the operational process.
              </p>
            </div>
            <Art>
              <Img fluid={data.finance_account.childImageSharp.fluid} />
            </Art>
          </Grid>
        </Container>
      </Section>
    )}
  />
);

const Grid = styled.div`
  display: grid;
  grid-template-columns: 3fr 2fr;
  grid-gap: 40px;
  text-align: right;
  align-items: center;
  justify-items: center;
  margin: 24px 0;

  ${props =>
    props.inverse &&
    `
    text-align: left;
    grid-template-columns: 2fr 3fr;
  `}

  h2 {
    margin-bottom: 16px;
  }

  @media (max-width: ${props => props.theme.screen.md}) {
    grid-template-columns: 1fr;
    text-align: left;
    margin-bottom: 96px;

    &:last-child {
      margin-bottom: 24px;
    }

    ${props =>
      props.inverse &&
      `
        ${Art} {
          order: 2;
        }
    `}
  }
`;

const Art = styled.figure`
  margin: 0;
  max-width: 380px;
  width: 100%;
`;

export default Cases;
