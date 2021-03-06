# Assignment 2

## Submission 

[Visit Neumorphic Timers](https://prof-tejera.github.io/assignment-2-DoryAzar/)

## What has been implemented

+ All components have been switched to functional components
+ All 4 timers are functioning properly as per our testing
+ Timers can be run successfully one after the other. The timers pause and reset at every switch of timers.
+ Application state is managed with context. All components are populated from the context.
+ We are using one logic for all timers at this stage. Each timer is its own component to allow for special operations in the future
+ Console is free of warnings and errors as per our testing
+ BONUS: Persistence has been implemented upon the SAVING
+ Timers are initially configured based on settings defined in **timers.json**

##  Inspiration

We decided for this design to revisit a novel and modern approach to Skeumorphism. This new trend - called Neumorphism - started in 2020 and aims to add more depth and more layering to the contemporary flat design.


Here are some of the references that inspired this work:
+ [Neumorphism and CSS](https://css-tricks.com/neumorphism-and-css/)
+ [Neumorphism in CSS with just two variables](https://dev.to/aritik/neumorphism-in-css-with-just-two-variables-2p30)
+ [Neumorphism Tool](https://neumorphism.io)
+ [Neumorphism in user interfaces](https://uxdesign.cc/neumorphism-in-user-interfaces-b47cef3bf3a6)
+ [Neumorphism: why it's all the hype in UI design](https://www.justinmind.com/blog/neumorphism-ui/)
+ [Neumorphism the right way -  A 2020 Design Trend](https://artofofiare.medium.com/neumorphism-the-right-way-a-2020-design-trend-386e6a09040a)



# Objective
In this assignment, we will start using the foundation we lay in A1 and make our timers fully functional. Each timer will function as described in A1 and the user flow should be the following:

- User opens the application
- Select a type of timer (Stopwatch, Countdown, XY, TABATA)

- Configure timer based on type (time, rounds, work/rest, etc)

- Run timer. While running, user should be able to:
  - Pause/Resume
  - When paused, user can reset back to initial state
  - Ability to "fast forward" (ends the timer)

- When timer is complete, you can decide how to congratulate the user and allow them to start over or select a different timer

## Deliverable

- Convert all classes components that you have added to functional components. You are welcome to convert all components (including ones added by us), but this is not required.
- Get all timers functional
- Application state should be managed with context. That is, timers should NOT track time, rounds, etc, locally or pass it down to its children
- Make sure that you can switch between timers without breaking the app (e.g. I should not have to refresh in order to run another timer after a run has been completed)
- Update documentation as your components change. 
- Your application must be deployed and the link pasted somewhere in this README

### Deployment Instructions (GH actions)

- Go to `Settings`
- Go to `Pages`
- in `Source`, select `gh-pages` branch
- Click Save
- In `package.json`, add a new key/value as: `"homepage": "https://prof-tejera.github.io/<repo>"`

Once the `build-deploy` action finishes running, the app should be live
at `https://prof-tejera.github.io/<repo>`

For other ways to deploy see https://github.com/prof-tejera/react-deployment-code

## Grading Rubric 
- All components you have added are functional components
- All timers are functioning properly 
- Timers can be run one after another and it should not break the application
- Application state is managed with context
- DRY (do not repeat yourself). we should not see the same code copy pasted all over the codebase. 
- Console is free of warnings/errors

## Bonus
For people looking for an additional challenge, we have provided some bonus features that you can implement. These are not required! You can still get a 100% on the assignment without them.
- Before the timer starts, have a 10-second countdown to give user time to prepare (3pt)
- User settings
  - custom number of seconds before the timer starts (1pt)
  - configurable audio notifications (3-2-1-GO, halfway, 1 minute left, last round, beep every minute, etc) (1pt)
- Persisting state so refreshing the page does not clear application state. (2pt) 

## Installing and Running the project

As you have noticed this repository is empty. To begin this assignment you must copy over all of our files from A1 into this repo. I recommend not copying over `node_modules` and instead re-install here. You can then commit and deploy as usual from this repo.


