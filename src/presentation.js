// Import React
import React from 'react';

// Import Spectacle Core tags
import {
  BlockQuote,
  Cite,
  Deck,
  Heading,
  ListItem,
  List,
  Quote,
  Slide,
  Image,
  Text,
  Appear,
  SlideSet,
  Interactive,
  Fit,
  CodePane,
  MarkdownSlides,
  Markdown,
} from 'spectacle';

// Import theme
import createTheme from 'spectacle/lib/themes/default';

// Require CSS
require('normalize.css');

const theme = createTheme(
  {
    primary: 'white',
    secondary: '#1F2022',
    tertiary: '#03A9FC',
    quartenary: '#CECECE',
  },
  {
    primary: 'Montserrat',
    secondary: 'Helvetica',
  }
);

export default class Presentation extends React.Component {
  render() {
    return (
      <Deck
        transition={['zoom', 'slide']}
        transitionDuration={500}
        theme={theme}
      >
        <Slide transition={['zoom']} bgColor="primary">
          <div style={{ marginBottom: 30 }}>
            <img src="/lighthouse-logo.png" width="400" />
          </div>
          <Heading size={1} fit lineHeight={1.3} textColor="secondary">
            Automated Performance Testing <br/>with lighthouse &amp; pwmetrics
          </Heading>

          {/* <Text margin="10px 0 0" textColor="tertiary" size={1} fit bold>
            open the presentation/index.js file to get started
          </Text> */}
        </Slide>

        <Slide transition={['fade']} bgColor="secondary" textColor="primary">
          <BlockQuote>
            <Quote>slowing search results by just four tenths of a second could lose 8 million searches per day</Quote>
            <Cite>Google (2012)</Cite>
          </BlockQuote>
        </Slide>

        <Slide transition={['fade']} bgColor="secondary" textColor="primary">
          <BlockQuote>
            <Quote>a page load slowdown of just one second could cost it $1.6 billion in sales each year</Quote>
            <Cite>Amazon (2012)</Cite>
          </BlockQuote>
        </Slide>

        <Slide
          onActive={slideIndex => {
            console.info(`Viewing slide index: ${slideIndex}.`); // eslint-disable-line no-console
          }}
          id="current-state"
          goTo={4}
          transition={[
            'fade',
            (transitioning, forward) => {
              const angle = forward ? -180 : 180;
              return {
                transform: `
                  translate3d(0%, ${transitioning ? 100 : 0}%, 0)
                  rotate(${transitioning ? angle : 0}deg)
                `,
                backgroundColor: transitioning ? '#26afff' : '#000'
              };
            }
          ]}
          bgColor="black"
          notes="Discuss issues with speed curve"
        >
          <Image src={'/speedcurve.png'} margin="0px auto 40px" />
          <Heading size={6} textColor="primary" textFont="primary">
            Speedcurve
          </Heading>
        </Slide>

        <Slide transition={['fade']} bgColor="secondary" textColor="primary">
          <Image src={'/automate.jpg'} margin="0px auto 40px" />
        </Slide>

        <Slide transition={['fade']} bgColor="secondary" textColor="primary" maxWidth={1200}>
          <Image src={'/lighthouse-logo.png'} margin="0px auto 40px" width="300"/>
          <Heading size={6} textColor="primary">
            Lighthouse
          </Heading>
          <List>
            <Appear><ListItem>Performance Auditing tool</ListItem></Appear>
            <Appear><ListItem>Open source (google chrome team)</ListItem></Appear>
            <Appear><ListItem>Supports chrome dev tools</ListItem></Appear>
          </List>
        </Slide>

        <Slide transition={['fade']} bgColor="secondary" textColor="primary" maxWidth={1200}>
          <Image src={'/devtools.png'} margin="0px auto 40px" />
        </Slide>

        <Slide transition={['fade']} bgColor="secondary" textColor="primary" maxWidth={1200}>
          <Image src={'/lighthouse-logo.png'} margin="0px auto 40px" width="300"/>
          <Heading size={6} textColor="primary">
            Lighthouse
          </Heading>
          <List>
            <ListItem>Performance Auditing tool</ListItem>
            <ListItem>Open source (google chrome team)</ListItem>
            <ListItem>Supports chrome dev tools</ListItem>
            <Appear><ListItem>Supports command line</ListItem></Appear>
            <Appear><ListItem>Supports node module</ListItem></Appear>
          </List>
        </Slide>

        <Slide
          transition={['fade']}
          bgColor="secondary" textColor="primary"
        >

          <Markdown>
            {`
  \`\`\`js
  const lighthouse = require('lighthouse');
  const chromeLauncher = require('chrome-launcher');

  function launchChromeAndRunLighthouse(url, opts, config = null) {
    return chromeLauncher.launch({chromeFlags: opts.chromeFlags}).then(chrome => {
      opts.port = chrome.port;
      return lighthouse(url, opts, config).then(results => {
        // The gathered artifacts are typically removed as they can be quite large (~50MB+)
        delete results.artifacts;
        return chrome.kill().then(() => results)
      });
    });
  }

  const opts = {
    chromeFlags: ['--show-paint-rects']
  };

  // Usage:
  launchChromeAndRunLighthouse('https://example.com', opts).then(results => {
    // Use results!
  });
  \`\`\`
            `}
          </Markdown>
        </Slide>

        <Slide transition={['fade']} bgColor="secondary" textColor="primary" maxWidth={1200}>
          <Image src={'/lighthouse-logo.png'} margin="0px auto 40px" width="300"/>
          <Heading size={6} textColor="primary">
            Lighthouse Audit Reports
          </Heading>
          <List>
            <Appear><ListItem>Progressive Web App</ListItem></Appear>
            <Appear><ListItem>Accessibility</ListItem></Appear>
            <Appear><ListItem>Best practices</ListItem></Appear>
            <Appear><ListItem textColor="primary" caps><b>Performance !!</b></ListItem></Appear>
          </List>
        </Slide>

        <Slide transition={['fade']} bgColor="secondary" textColor="primary" maxWidth={1200}>
          <Image src={'/pwmetrics.png'} margin="0px auto 40px" />
        </Slide>

        <Slide transition={['fade']} bgColor="secondary" textColor="primary" maxWidth={1200}>
          <Image src={'/lighthouse-logo.png'} margin="0px auto 40px" width="300"/>
          <Heading size={6} textColor="primary">
            First Contentful Paint (FCP)
          </Heading>
          <List>
            <Appear><ListItem>Something “contentful” painted</ListItem></Appear>
            <Appear><ListItem>First time different to blank screen</ListItem></Appear>
            <Appear><ListItem>Slow if resources too large</ListItem></Appear>
            <Appear><ListItem>Slow if network connection poor</ListItem></Appear>
          </List>
        </Slide>

        <Slide transition={['fade']} bgColor="secondary" textColor="primary" maxWidth={1200}>
          <Image src={'/lighthouse-logo.png'} margin="0px auto 40px" width="300"/>
          <Heading size={6} textColor="primary">
            First Meaningful Paint (FMP)
          </Heading>
          <List>
            <Appear><ListItem>Primary content appeared on screen</ListItem></Appear>
            <Appear><ListItem>Paint that follows biggest layout change</ListItem></Appear>
            <Appear><ListItem>Too many resources (images, styles, fonts, javascript) have high load priority, as a result, they are blocking FMP</ListItem></Appear>
          </List>
        </Slide>

        <Slide transition={['fade']} bgColor="secondary" textColor="primary" maxWidth={1200}>
          <Image src={'/fmp.png'} margin="0px auto 40px" />
        </Slide>

        <Slide transition={['fade']} bgColor="secondary" textColor="primary" maxWidth={1200}>
          <Image src={'/lighthouse-logo.png'} margin="0px auto 40px" width="300"/>
          <Heading size={6} textColor="primary">
            First Interactive (TTFI - Beta)
          </Heading>
          <List>
            <Appear><ListItem>FMP &amp; DOMContentLoaded &amp; Visually Complete on 85%</ListItem></Appear>
            <Appear><ListItem>3rd party scripts can block this</ListItem></Appear>
            <Appear><ListItem>UX concerns</ListItem></Appear>
          </List>
        </Slide>

        <Slide transition={['fade']} bgColor="secondary" textColor="primary" maxWidth={1200}>
          <Image src={'/lighthouse-logo.png'} margin="0px auto 40px" width="300"/>
          <Heading size={6} textColor="primary">
            Visually Complete (VC)
          </Heading>
          <List>
            <Appear><ListItem>Calculated taking page screenshots and do pixel analysis of those screenshots</ListItem></Appear>
          </List>
        </Slide>


        <Slide
          bgColor="black"
        >
          <Heading size={4} caps fit textColor="primary" textFont="primary">
            How can we prevent performance regressions?
          </Heading>
        </Slide>

        <Slide transition={['fade']} bgColor="secondary" textColor="primary" maxWidth={1200}>
          <Image src={'/gandolf.jpg'} margin="0px auto 40px" width="1000" />
        </Slide>

        <Slide transition={['fade']} bgColor="secondary" textColor="primary" maxWidth={1200}>
          <Image src={'/lighthouse-logo.png'} margin="0px auto 40px" width="300"/>
          <Heading size={6} textColor="primary">
            How to run lighthouse performance audit in CI ?
          </Heading>
          <List>
            <Appear><ListItem>Headless chrome</ListItem></Appear>
            <Appear><ListItem>Docker image for dependancies</ListItem></Appear>
            <Appear><ListItem>How to set expectations?</ListItem></Appear>
            <Appear><ListItem>How to do multiple runs?</ListItem></Appear>
          </List>
        </Slide>

        <Slide transition={['fade']} bgColor="secondary" textColor="primary" maxWidth={1200}>
          <Image src={'/lighthouse-logo.png'} margin="0px auto 40px" width="300"/>
          <Heading size={6} textColor="primary">
            Current CI Options:
          </Heading>
          <List>
            <Appear><ListItem>lighthouse-ci (https://github.com/ebidel/lighthouse-ci)</ListItem></Appear>
            <Appear><ListItem>pwmetrics</ListItem></Appear>
            <Appear><ListItem>Another lib based on lighthouse</ListItem></Appear>
          </List>
        </Slide>

        <Slide transition={['fade']} bgColor="secondary" textColor="primary" maxWidth={1200}>
          <Image src={'/lighthouse-logo.png'} margin="0px auto 40px" width="300"/>
          <Heading size={6} textColor="primary">
            lighthouse-ci
          </Heading>
          <List>
            <Appear><ListItem>lighthouse-ci (https://github.com/ebidel/lighthouse-ci)</ListItem></Appear>
            <Appear><ListItem>pwmetrics</ListItem></Appear>
          </List>
        </Slide>

        <Slide transition={['fade']} bgColor="secondary" textColor="primary" maxWidth={1200}>
          <Image src={'/pwmetrics2.png'} margin="0px auto 40px" />
        </Slide>

        <Slide transition={['fade']} bgColor="secondary" textColor="primary" maxWidth={1200}>
          <Image src={'/pwmetrics3.png'} margin="0px auto 40px"  />
          <Heading size={6} textColor="primary">
            pwmetrics
          </Heading>
          <List>
            <Appear><ListItem>Gather performance metrics via Lighthouse</ListItem></Appear>
            <Appear><ListItem>Expectations on metrics</ListItem></Appear>
            <Appear><ListItem>Upload to google sheets an drive</ListItem></Appear>
            <Appear><ListItem>Multiple runs for median</ListItem></Appear>
          </List>
        </Slide>

        <Slide
          transition={['fade']}
          bgColor="secondary" textColor="primary"
        >
          <Heading size={6} textColor="primary" caps>
            package.json
          </Heading>

          <Markdown>
            {`
  \`\`\`js
  "test:perf": "pwmetrics --config=test/performance/pwmetrics-config.js",
  \`\`\`
            `}
          </Markdown>
        </Slide>

        <Slide
          transition={['fade']}
          bgColor="secondary" textColor="primary"
        >
          <Heading size={6} textColor="primary">
            pwmetrics-config.js
          </Heading>

          <Markdown>
            {`
  \`\`\`js
  module.exports = {
    url: 'http://localhost:3000/185-rosslyn-st-west-melbourne-vic-3003-99999999?test=true&disableads=true&notracking=true',
    flags: {
      runs: 2, // number or runs (get a median set of metrics)
      submit: false, // turn on submitting to Google Sheets (TODO for future)
      upload: false, // turn on uploading to Google Drive (TODO for future)
      view: false, // open uploaded traces to Google Drive in DevTools (TODO for future)
      expectations: true, // turn on assertation metrics results against provides values
      chromeFlags: '--headless --no-sandbox',
      json: true,
      outputPath: 'stdout',
    },
    expectations: {

      // see: https://github.com/paulirish/pwmetrics for all options
      // ttfcp - First Contentful Paint
      // ttfmp - First Meaningful Paint
      // psi - Perceptual Speed Index
      // fv - First Visual Change
      // vc - Visually Complete 100%
      // ttfi - First Interactive (vBeta)
      // ttci - Time to Consistently Interactive (vBeta)
      // vc85 - Visually Complete 85%

      ttfcp: {
        warn: '>=7189',
        error: '>=9000',
      },
      ttfmp: {
        warn: '>=8387',
        error: '>=10000',
      },
      psi: {
        warn: '>=30842',
        error: '>=35000',
      },
      fv: {
        warn: '>=7190',
        error: '>=8000',
      },
      vc: {
        warn: '>=30912',
        error: '>=35000',
      },
      ttfi: {
        warn: '>=100',
        error: '>=100',
      },
      ttci: {
        warn: '>=100',
        error: '>=100',
      },
      vc85: {
        warn: '>=28759',
        error: '>=35000',
      },
    },
  };
  \`\`\`
            `}
          </Markdown>
        </Slide>

        <Slide
          transition={['fade']}
          bgColor="secondary" textColor="primary"
        >
          <Heading size={6} textColor="primary">
            Dockerfile-headless
          </Heading>

          <Markdown>
            {`
  \`\`\`js
FROM node:8.9.4-slim

ENV APP_DIR /var/www
ENV TZ Australia/Sydney
ENV LIGHTHOUSE_CHROMIUM_PATH google-chrome

RUN mkdir -p \${APP_DIR}
WORKDIR \${APP_DIR}

RUN apt-get update && \
    apt-get install -y xvfb wget openjdk-7-jre build-essential python unzip && \
    wget https://dl.google.com/linux/direct/google-chrome-stable_current_amd64.deb && \
    dpkg --unpack google-chrome-stable_current_amd64.deb && \
    apt-get install -f -y && \
    apt-get clean && \
    rm google-chrome-stable_current_amd64.deb

RUN rm -rf /var/lib/apt/lists/*
  \`\`\`
            `}
          </Markdown>
        </Slide>

        <Slide
          transition={['fade']}
          bgColor="secondary" textColor="primary"
        >
          <Heading size={6} textColor="primary">
            Jenkins / Docker setup
          </Heading>

          <Markdown>
            {`
  \`\`\`js
docker.withRegistry(dockerRegistry) {
  sh "docker pull $ecrReg/$serverImage"
  sh "docker pull $ecrReg/$testImage"
  sh "docker run -d --rm -p 127.0.0.1:3000:3000 --name $baseContainerName $envs $ecrReg/$serverImage /bin/sh -c \"yarn run start:prod > serverlog.log\" &"

  // headless nightwatch e2e tests
  sh "docker run --rm -v /dev/shm:/dev/shm --name $testContainerName $envs $ecrReg/$testImage /bin/sh -c \"yarn run test:e2e-headless -u http://localhost:3000\""

  // headless pwmetrics performance tests
  sh "docker run --rm -v /dev/shm:/dev/shm --name $perfContainerName $envs $ecrReg/$testImage /bin/sh -c \"yarn run test:perf\""
}
  \`\`\`
            `}
          </Markdown>
        </Slide>

        <Slide transition={['fade']} bgColor="secondary" textColor="primary" maxWidth={1200}>
          <Image src={'/pass.png'} margin="0px auto 40px"  />
        </Slide>

        <Slide transition={['fade']} bgColor="secondary" textColor="primary" maxWidth={1200}>
          <Image src={'/pwmetrics3.png'} margin="0px auto 40px"  />
          <Heading size={6} textColor="primary">
            Future improvements
          </Heading>
          <List>
            <Appear><ListItem>Check different urls</ListItem></Appear>
            <Appear><ListItem>Refine the metrics to be stricter</ListItem></Appear>
            <Appear><ListItem>Report directly to google sheets / drive</ListItem></Appear>
            <Appear><ListItem>Fix some bugs in pwmetrics</ListItem></Appear>
          </List>
        </Slide>

        <Slide transition={['fade']} bgColor="secondary" textColor="primary">
          <Heading size={6} textColor="primary">
            Thanks 😄
          </Heading>
        </Slide>
      </Deck>
    );
  }
}
