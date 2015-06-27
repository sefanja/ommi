# ommi

This project is created by four students of the [Open Universiteit Nederland](http://ou.nl) as part of the course [Ontwerpen van mens-machine-interactie](http://ou.nl/studieaanbod/T01341) (designing human-computer interaction), abbreviated as ommi.

The goal was to design a prototype of the personal page of a scientific researcher as part of the web site of the [Utrecht University](http://uu.nl).

## Live demo

[ommi.divshot.io](http://ommi.divshot.io)

## Installing

Before you begin, you need to install:

* [Node.js](https://nodejs.org/)
* [Bower](http://bower.io/)

Clone a copy of this repo by running:

    git clone https://github.com/sefanja/ommi.git

If you don't have [Git](https://git-scm.com/) installed, you can simply download and extract the [zip file](https://github.com/sefanja/ommi/archive/master.zip).

Change the working directory to where you cloned the files and run:

    npm install
    bower install

## Build & development

Run `grunt` for building and `grunt serve` for preview. The result of the build will placed in the `dist` folder, ready to be deployed.

## Toolset used

* [Bootstrap](http://getbootstrap.com) is a framework for developing responsive, mobile first projects on the web. It contains design templates and interface components.
* [Angular](https://angularjs.org/) is a framework for building single page web applications. It provides a client-side model-view-controller architecture.
* [Bower](http://bower.io/) is a package management system for client-side programming that works with Git and GitHub repositories.
* [Grunt](http://gruntjs.com/) is a JavaScript task runner. In this project we use it for previewing, testing and building.
* [Yeoman](http://yeoman.io/) is a scaffolding tool for web applications. If you run `yo angular` you get a basic app, including config files for all of the above tools.
* [Git](https://git-scm.com/) is a distributed revision control system.
* [GitHub](https://github.com/) is a web-based Git repository hosting service.
* [WebStorm](https://www.jetbrains.com/webstorm/) is a JavaScript IDE which integrates with Grunt and GitHub.
* [Divshot](https://divshot.com/) provides static webhosting.
