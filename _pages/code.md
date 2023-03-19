---
title: Code
layout: post
---

In my free time, I try to contribute to open source software; my GitHub username is [@codetalker7](https://github.com/codetalker7){:target="\_blank"}. On this page I'll try to describe the different projects I've contributed to, along with any other things that make life easy for me.

## Config

### OS and Desktop Environment

I'm running a machine with [Focal Fossa](https://releases.ubuntu.com/focal/){:target="\_blank"} and use [KDE Plasma](https://kde.org/plasma-desktop/){:target="\_blank"} as my desktop environment with the [Layan Dark](https://github.com/vinceliuice/Layan-kde){:target="\_blank"} theme. For `Konsole` (and the [Gnome Terminal](https://help.gnome.org/users/gnome-terminal/stable/){:target="\_blank"}) I'm using the [Ubuntu Mono Nerd Font](https://github.com/ryanoasis/nerd-fonts/tree/master/patched-fonts/UbuntuMono){:target="\_blank"} which is needed for status bars like [`powerline`](https://github.com/powerline/powerline){:target="\_blank"} and tools like [`colorls`](https://github.com/athityakumar/colorls){:target="\_blank"}.

{:refdef: style="text-align: center;"}
![alt text](/assets/images/os-and-config.png "Terminal image")
{: refdef}

> This is a picture of my configuration. 
{: .block-tip }

### `zsh` and `tmux`

I use the [`zsh`](https://www.zsh.org/){:target="\_blank"} shell configured with [Oh My Zsh](https://ohmyz.sh/){:target="\_blank"} and the [powerlevel10k](https://github.com/romkatv/powerlevel10k){:target="\_blank"} theme. I use the following plugins for `zsh`.

- `git`
- [`zsh-autosuggestions`](https://github.com/zsh-users/zsh-autosuggestions){:target="\_blank"}, a very handy plugin which automatically displays suggestions as you're typing.
- [`zsh-syntax-highlighting`](https://github.com/zsh-users/zsh-syntax-highlighting){:target="\_blank"}, a cool plugin for syntax highlighting for commands.
- [`zsh-vi-mode`](https://github.com/jeffreytse/zsh-vi-mode){:target="\_blank"}, a plugin to support a vim-like mode for your terminal.

I also use [`tmux`](https://github.com/tmux/tmux/wiki){:target="\_blank"} configured with [Oh my tmux](https://github.com/gpakosz/.tmux){:target="\_blank"} (a `powerline`-like theme for `tmux`) and [`tpm`](https://github.com/tmux-plugins/tpm){:target="\_blank"}. Apart from these, I came across some really cool tools to help speed up the development process.

- [`fzf`](https://github.com/junegunn/fzf){:target="\_blank"}, a must have tool if you're a Linux user. The idea is simple: it takes in a list from `STDIN` and writes to `STDOUT`. The power comes in the use cases it supports.
- [`bat`](https://github.com/sharkdp/bat){:target="\_blank"}; can be thought of as a modern version of `cat`. 
- [`colorls`](https://github.com/athityakumar/colorls){:target="\_blank"}, a Ruby gem to beautify the `ls` command with colors and icons.

### `vim`

My default text editor is [`vim`](https://www.vim.org/){:target="\_blank"}. I've configured `vim` to use the [`powerline`](https://github.com/powerline/powerline){:target="\_blank"} status bar ([`vim-airline`](https://github.com/vim-airline/vim-airline){:target="\_blank"} is an alternative that I also like) and [`Vundle`](https://github.com/VundleVim/Vundle.vim){:target="\_blank"}.

For my usual workflow, I use the following plugins.

- [`fugitive`](https://github.com/tpope/vim-fugitive){:target="\_blank"} for `git` integration 
- [`NERDTree`](https://github.com/preservim/nerdtree){:target="\_blank"} (a file system explorer)
- [`vim-commentary`](https://github.com/tpope/vim-commentary){:target="\_blank"} (to comment stuff out easily)
- [`vim-sendtowindow`](https://github.com/karoliskoncevicius/vim-sendtowindow){:target="\_blank"} (a plugin to send selections to a different pane/window; very useful if you have a REPL opened)
- [`vim-startify`](https://github.com/mhinz/vim-startify){:target="\_blank"}, a fancy start screen
- [`vim-devicons`](https://github.com/ryanoasis/vim-devicons){:target="\_blank"}, file type icons for `vim`.

Along with these I use a bunch of plugins for markup and live note taking (see the bottom of this page). 

{:refdef: style="text-align: center;"}
![alt text](/assets/images/survey-example.png "Vim setup image")
{: refdef}

> This is a picture of how my `vim` setup looks like (the code is for the [`Survey.jl`](https://github.com/xKDR/Survey.jl){:target="\_blank"} package).
{: .block-tip }

## The Julia Language

I was part of 2022 edition of [Google Summer of Code](https://summerofcode.withgoogle.com/){:target="\_blank"}, where I was selected as a contributor for [The Julia Language](https://julialang.org/jsoc/){:target="\_blank"}. My project was to [make improvements to the CRRao.jl package](https://summerofcode.withgoogle.com/archive/2022/projects/wbPGeN3c){:target="\_blank"}. I made a [final report](https://github.com/xKDR/GSoC/blob/main/2022/CRRao.jl/siddhant_chaudhary_final.md){:target="\_blank"} for the same.

Apart from this, I've contributed to the following Julia packages as well.
- [Lowess.jl](https://github.com/xKDR/Lowess.jl){:target="\_blank"}, which is a pure Julia implementation of the LOWESS smoother.
- [NighttimeLights.jl](https://github.com/xKDR/NighttimeLights.jl){:target="\_blank"}, which is a package to analyze satellite data. We also worked with [Rasters.jl](https://rafaqz.github.io/Rasters.jl/dev/){:target="\_blank"}.
- [TSFrames.jl](https://github.com/xKDR/TSx.jl){:target="\_blank"}, a package for Timeseries in Julia.
- [Survey.jl](https://github.com/xKDR/Survey.jl){:target="\_blank"}, a package for complex survey analysis in Julia.

All of this work has been possible because of the help I got from people at the [xKDR](https://www.xkdr.org/){:target="\_blank"} organization.

## The Document Foundation

I've also [contributed](https://wiki.documentfoundation.org/index.php?title=Development/Developers&oldid=493481){:target="\_blank"} to the [LibreOffice](https://www.libreoffice.org/){:target="\_blank"} suite. My work mainly revolved around tinkering with LO's UI, using tools like [gtk](https://www.gtk.org/){:target="\_blank"} and [Glade](https://glade.gnome.org/){:target="\_blank"}, along with working with LO's registry; for example, here are two of my patches.
- A patch for the [Paste Special Dialogue](https://git.libreoffice.org/core/+/9d0ca8ee3f0c2a4e6c0bebec6ef1523cd04e849a%5E%21){:target="\_blank"}
- A patch for the [open-locked query box](https://git.libreoffice.org/core/+/ff9ff6018bea7c1a4524c8edca8ef554c74e4b3f%5E%21){:target="\_blank"}.

LO has one of the best workflows I've encountered thus far. They use [Gerrit](https://www.gerritcodereview.com/){:target="\_blank"} for code review and [Jenkins](https://www.jenkins.io/){:target="\_blank"} for CI, along with a bunch of other tools which they have embedded in their codebase.

> ##### Get Involved!
>
> If you want to contribute to OSS and like C++, LO might be a great choice to get started. LO's core developers very actively look for new contributors, and are always available to help. It's not hard to [get involved](https://www.libreoffice.org/community/get-involved/){:target="\_blank"}.
{: .block-tip }

## Typesetting

I regularly typeset any notes that I take while attending classes or self-studying math. Although [Overleaf](https://www.overleaf.com/project){:target="\_blank"} is great for this, it can be a bit inconvenient for taking notes in class. 

After following a bunch of tutorials/blogs on this, I've realized the the following is the fastest workflow for note taking (for me).

- [`pandoc`](https://pandoc.org/){:target="\_blank"}, used to convert from one markup format to another. This is a really helpful tool, because it has `pdflatex`, `xelatex` and `lualatex` support for `markdown`.

- To watch the files as I'm editing them, I use [`docwatch`](https://github.com/elcorto/docwatch){:target="\_blank"}, which has support for [`pandoc`](https://pandoc.org/){:target="\_blank"} by default. Though other tools can be used for this.

- These with [`vim`](https://www.vim.org/){:target="\_blank"} make a great combination. To get the best experience, I use the [`vim-pandoc`](https://github.com/vim-pandoc/vim-pandoc){:target="\_blank"} and [`vim-pandoc-syntax`](https://github.com/vim-pandoc/vim-pandoc-syntax){:target="\_blank"} for syntax highlighting along with the [UltiSnips](https://github.com/SirVer/ultisnips){:target="\_blank"} plugin for snippet support.

Find out more information about this at [this repository](https://github.com/codetalker7/notes-template){:target="\_blank"}.
