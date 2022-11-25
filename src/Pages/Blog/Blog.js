import React from 'react';
import useTitle from '../../Title/Title';

const Blog = () => {
    useTitle('Blog');
    return (
      <div className="w-3/4 mx-auto my-5">
        <div
          tabIndex={0}
          className="collapse collapse-arrow border border-base-300 bg-base-100 rounded-box my-3"
        >
          <div className="collapse-title text-xl font-medium">
            What are the different ways to manage a state in a React
            application?
          </div>
          <div className="collapse-content">
            <p>
              There are four main types of state you need to properly manage in
              React apps: <br /> Local state <br /> Global state <br /> Server
              state <br /> URL state <br />
              Local (UI) state - Local state is data we manage in one or another
              component. Local state is most often managed in React using the
              useState hook. <br />
              Global (UI) state - Global state is data we manage across multiple
              components. Global state is necessary when we want to get and
              update data anywhere in our app, or in multiple components at
              least. <br />
              Server state – Data that comes from an external server that must
              be integrated with our UI state. Server state is a simple concept,
              but can be hard to manage alongside all of our local and global UI
              state.
            </p>
          </div>
        </div>
        <div
          tabIndex={0}
          className="collapse collapse-arrow border border-base-300 bg-base-100 rounded-box my-3"
        >
          <div className="collapse-title text-xl font-medium">
            How does prototypical inheritance work?
          </div>
          <div className="collapse-content">
            <p>
              The Prototypal Inheritance is a feature in javascript used to add
              methods and properties in objects. It is a method by which an
              object can inherit the properties and methods of another object.
              Traditionally, in order to get and set the [[Prototype]] of an
              object, we use Object. getPrototypeOf and Object.
            </p>
          </div>
        </div>
        <div
          tabIndex={0}
          className="collapse collapse-arrow border border-base-300 bg-base-100 rounded-box my-3"
        >
          <div className="collapse-title text-xl font-medium">
            What is a unit test? Why should we write unit tests?
          </div>
          <div className="collapse-content">
            <p>
              The main objective of unit testing is to isolate written code to
              test and determine if it works as intended. Unit testing is an
              important step in the development process, because if done
              correctly, it can help detect early flaws in code which may be
              more difficult to find in later testing stages.
            </p>
          </div>
        </div>
        <div
          tabIndex={0}
          className="collapse collapse-arrow border border-base-300 bg-base-100 rounded-box my-3"
        >
          <div className="collapse-title text-xl font-medium">
            React vs. Angular vs. Vue?
          </div>
          <div className="collapse-content">
            <p>
              React is a UI library, Angular is a fully-fledged front-end
              framework, while Vue.js is a progressive framework. Each framework
              is component-based and allows the rapid creation of UI
              features.Angular, React, and Vue are all under very active
              development. They regularly release new versions and maintain the
              existing ones.As previously stated, we can’t predict which
              frameworks will remain relevant in the long term, but each project
              has a great community behind it and is constantly evolving.
            </p>
          </div>
        </div>
      </div>
    );
};

export default Blog;