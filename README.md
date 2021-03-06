# ommi

This project is created by students of the [Open Universiteit Nederland](http://ou.nl) as part of the course [Ontwerpen van mens-machine-interactie](http://ou.nl/studieaanbod/T01341) (designing human-computer interaction), abbreviated as ommi.

The goal was to design a responsive prototype of a personal page for a scientific researcher, which should be able to function in the context of the web site of the [Utrecht University](http://uu.nl).

## Live preview

[ommi.divshot.io](http://ommi.divshot.io)

## Installing

First install:

* [Git](https://git-scm.com/)
* [Node.js](https://nodejs.org/)
* [Bower](http://bower.io/)
* [Grunt](http://gruntjs.com/)
* [Compass](http://compass-style.org/)

Then start a command line and run:

    git clone git://github.com/sefanja/ommi.git
    cd ommi
    npm install
    bower install

## Build & development

Run `grunt` for building and `grunt serve` for preview.

The `app` folder contains the source files. The result of a build is placed in the `dist` folder, which is suited for deployment.

## Remarks

This project merely served the purpose of testing human-computer interaction, so you may expect to encounter a fair amount of quick-and-dirty code. My advice would be to refactor the code before continuing on this project.

One of the ideas behind this project is that data should be retrieved from their respective concern systems. For example, the list of publications should be retrieved from the research information system. We therefore used static json files to simulate the APIs of those back-end systems. In accordance with modern application integration principles, this web application implements only the user interface logic.

## Toolset

The tools used for this project come highly recommended for any modern front-end web developer. They may take some time to understand, but once you do, coding becomes even more fun.

* [Bootstrap](http://getbootstrap.com) is a framework for developing responsive, mobile first projects on the web. It contains design templates and interface components.
* [Angular](https://angularjs.org/) is a framework for building single page web applications. It provides a client-side model-view-controller architecture.
* [Compass](http://compass-style.org/) is a CSS authoring framework.
* [Bower](http://bower.io/) is a package management system for client-side programming that works with Git and GitHub repositories.
* [Grunt](http://gruntjs.com/) is a JavaScript task runner. In this project we use it for previewing, testing and building.
* [Yeoman](http://yeoman.io/) is a scaffolding tool for web applications. If you run `yo angular` you get a basic app, including config files for all of the above tools.
* [Git](https://git-scm.com/) is a distributed revision control system.
* [GitHub](https://github.com/) is a web-based Git repository hosting service.
* [WebStorm](https://www.jetbrains.com/webstorm/) is a smart JavaScript IDE which integrates with many of the above tools.
* [Divshot](https://divshot.com/) provides static webhosting.
