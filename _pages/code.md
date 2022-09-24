---
title: Code
layout: post
---

In my free time, I try to contribute to open source software; my GitHub username is [@codetalker7](https://codetalker7){:target="_blank"}. On this page I'll try to describe the different projects I've contributed to, along with any other things that make life easy for me.

## The Julia Language

I was part of 2022 edition of [Google Summer of Code](https://summerofcode.withgoogle.com/){:target="_blank"}, where I was selected as a contributor for [The Julia Language](https://julialang.org/jsoc/){:target="_blank"}. My project was to [make improvements to the CRRao.jl package](https://summerofcode.withgoogle.com/programs/2022/projects/wbPGeN3c){:target="_blank"}. I made a [final report](https://github.com/xKDR/GSoC/blob/main/2022/CRRao.jl/siddhant_chaudhary_final.md){:target="_blank"} for the same.

Apart from this, I've contributed to the following Julia packages as well.
- [Lowess.jl](https://github.com/xKDR/Lowess.jl){:target="_blank"}, which is a pure Julia implementation of the LOWESS smoother.
- [NighttimeLights.jl](https://github.com/xKDR/NighttimeLights.jl){:target="_blank"}, which is a package to analyze satellite data. We also worked with [Rasters.jl](https://rafaqz.github.io/Rasters.jl/dev/).
- [TSx.jl](https://github.com/xKDR/TSx.jl){:target="_blank"}, a package for Timeseries in Julia.

All of this work has been possible because of the help I got from people at the [xKDR](https://www.xkdr.org/){:target="_blank"} organization.

## The Document Foundation

I've also [contributed](https://wiki.documentfoundation.org/index.php?title=Development/Developers&oldid=493481){:target="_blank"} to the [LibreOffice](https://www.libreoffice.org/){:target="_blank"} suite. My work mainly revolved around tinkering with LO's UI, using tools like [gtk](https://www.gtk.org/) and [Glade](https://glade.gnome.org/){:target="_blank"}, along with working with LO's registry; for example, here are two of my patches.
- A patch for the [Paste Special Dialogue](https://git.libreoffice.org/core/+/9d0ca8ee3f0c2a4e6c0bebec6ef1523cd04e849a%5E%21){:target="_blank"}
- A patch for the [open-locked query box](https://git.libreoffice.org/core/+/ff9ff6018bea7c1a4524c8edca8ef554c74e4b3f%5E%21){:target="_blank"}.

LO has one of the best workflows I've encountered thus far. They use [Gerrit](https://www.gerritcodereview.com/){:target="_blank"} for code review and [Jenkins](https://www.jenkins.io/){:target="_blank"} for CI, along with a bunch of other tools which they have embedded in their codebase.

> ##### Get Involved!
>
> If you want to contribute to OSS and like C++, LO might be a great choice to get started. LO's core developers very actively look for new contributors, and are always available to help. It's not hard to [get involved](https://www.libreoffice.org/community/get-involved/).
{: .block-tip }

## Typesetting

I regularly typeset any notes that I take while attending classes or self-studying math. Although [Overleaf](https://www.overleaf.com/project){:target="_blank"} is great for this, it can be a bit inconvenient for taking notes in class. 

After following a bunch of tutorials/blogs on this, I've realized the the following is the fastest workflow for note taking (for me).

- [pandoc](https://pandoc.org/){:target="_blank"}, used to convert from one markup format to another. This is a really helpful tool, because it has `pdflatex`, `xelatex` and `lualatex` support for `markdown`.

- To watch the files as I'm editing them, I use [docwatch](https://github.com/elcorto/docwatch){:target="_blank"}, which has support for [pandoc](https://pandoc.org/){:target="_blank"} by default. Though other tools can be used for this.

- These with [Vim](https://www.vim.org/){:target="_blank"} make a great combination. To get the best experience, I use the [vim-pandoc](https://github.com/vim-pandoc/vim-pandoc){:target="_blank"} and [vim-pandoc-syntax](https://github.com/vim-pandoc/vim-pandoc-syntax){:target="_blank"} for syntax highlighting along with the [UltiSnips](https://github.com/SirVer/ultisnips){:target="_blank"} plugin for snippet support.

Find out more information about this at [this repository][https://github.com/codetalker7/notes-template].